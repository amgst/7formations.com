import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import { createHash, timingSafeEqual } from "node:crypto";
import type { RequestHandler, ErrorRequestHandler } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database(process.env.DATABASE_PATH || "7formations.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL DEFAULT 0,
    image TEXT,
    category TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    role TEXT NOT NULL,
    image TEXT
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT !== undefined ? Number(process.env.PORT) : 3000;

  app.disable("x-powered-by");
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    if (process.env.NODE_ENV === "production") {
      res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: data:; media-src 'self' https://www.7formations.com; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'");
    }
    next();
  });
  const rateLimit = (maximum: number): RequestHandler => {
    const clients = new Map<string, { count: number; expires: number }>();
    const cleanup = setInterval(() => {
      for (const [key, value] of clients) if (value.expires <= Date.now()) clients.delete(key);
    }, 60_000);
    cleanup.unref();
    return (req, res, next) => {
      const key = req.ip || "unknown";
      let entry = clients.get(key);
      if (!entry || entry.expires <= Date.now()) {
        entry = { count: 0, expires: Date.now() + 15 * 60_000 };
        clients.set(key, entry);
      }
      if (++entry.count > maximum) {
        res.setHeader("Retry-After", String(Math.ceil((entry.expires - Date.now()) / 1000)));
        res.status(429).json({ error: "Too many requests. Please try again later." });
        return;
      }
      next();
    };
  };
  const adminLimit = rateLimit(60);
  const requireAdmin: RequestHandler = (req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    const password = process.env.ADMIN_PASSWORD;
    if (!password || password.length < 16) {
      res.status(503).json({ error: "Administrator access is not configured." });
      return;
    }
    const expected = `${process.env.ADMIN_USERNAME || "admin"}:${password}`;
    const header = req.headers.authorization || "";
    const supplied = header.startsWith("Basic ") ? Buffer.from(header.slice(6), "base64").toString("utf8") : "";
    const digest = (value: string) => createHash("sha256").update(value).digest();
    if (!timingSafeEqual(digest(supplied), digest(expected))) {
      res.setHeader("WWW-Authenticate", 'Basic realm="7Formations Admin", charset="UTF-8"');
      res.status(401).json({ error: "Administrator authentication required." });
      return;
    }
    if (!["GET", "HEAD", "OPTIONS"].includes(req.method)) {
      const origin = req.get("origin");
      const allowedOrigin = process.env.APP_URL ? new URL(process.env.APP_URL).origin : `${req.protocol}://${req.get("host")}`;
      if (req.get("sec-fetch-site") === "cross-site" || (origin && origin !== allowedOrigin)) {
        res.status(403).json({ error: "Cross-site requests are not allowed." });
        return;
      }
    }
    next();
  };
  app.use("/admin", adminLimit, requireAdmin);
  app.use("/api", (req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    if (req.path === "/messages" || (!["GET", "HEAD", "OPTIONS"].includes(req.method) && req.path !== "/contact")) {
      adminLimit(req, res, () => requireAdmin(req, res, next));
    } else next();
  });
  app.use("/api/contact", rateLimit(5));
  app.use(express.json({ limit: "16kb" }));
  app.use("/api", (req, res, next) => {
    if (!["POST", "PUT"].includes(req.method)) return next();
    const body = req.body;
    const fields: Record<string, number> = req.path === "/contact"
      ? { name: 120, email: 254, subject: 200, message: 5000 }
      : req.path.startsWith("/products") ? { name: 200, description: 5000 }
      : { title: 200, description: 5000, category: 100 };
    if (!body || typeof body !== "object" || Array.isArray(body) ||
      Object.entries(fields).some(([key, max]) => typeof body[key] !== "string" || !body[key].trim() || body[key].length > max)) {
      res.status(400).json({ error: "Please supply valid fields within the allowed lengths." });
      return;
    }
    if (req.path === "/contact" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      res.status(400).json({ error: "Please supply a valid email address." });
      return;
    }
    if (req.path.startsWith("/products") && (
      (body.price !== undefined && (typeof body.price !== "number" || !Number.isFinite(body.price) || body.price < 0)) ||
      (body.category !== undefined && (typeof body.category !== "string" || body.category.length > 100)) ||
      (body.image !== undefined && (typeof body.image !== "string" || body.image.length > 2048 || (body.image !== "" && !/^(https:\/\/|\/(?!\/))/.test(body.image))))
    )) {
      res.status(400).json({ error: "Invalid product price, category, or image URL." });
      return;
    }
    for (const key of Object.keys(fields)) body[key] = body[key].trim();
    next();
  });

  // API Routes
  app.get("/api/services", (req, res) => {
    const services = db.prepare("SELECT * FROM services").all();
    res.json(services);
  });

  app.get("/api/products", (req, res) => {
    const products = db.prepare("SELECT * FROM products ORDER BY created_at DESC").all();
    res.json(products);
  });

  app.post("/api/products", (req, res) => {
    const { name, description, price = 0, image = "", category = "" } = req.body;
    const info = db
      .prepare("INSERT INTO products (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)")
      .run(name, description, Number(price) || 0, image ?? "", category ?? "");
    res.json({ id: info.lastInsertRowid });
  });

  app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, description, price = 0, image = "", category = "" } = req.body;
    const result = db
      .prepare("UPDATE products SET name = ?, description = ?, price = ?, image = ?, category = ? WHERE id = ?")
      .run(name, description, Number(price) || 0, image ?? "", category ?? "", id);
    if (!result.changes) return res.status(404).json({ error: "Product not found." });
    res.json({ success: true });
  });

  app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const result = db.prepare("DELETE FROM products WHERE id = ?").run(id);
    if (!result.changes) return res.status(404).json({ error: "Product not found." });
    res.json({ success: true });
  });

  app.post("/api/services", (req, res) => {
    const { title, description, category } = req.body;
    const info = db.prepare("INSERT INTO services (title, description, category) VALUES (?, ?, ?)").run(title, description, category);
    res.json({ id: info.lastInsertRowid });
  });

  app.get("/api/testimonials", (req, res) => {
    const testimonials = db.prepare("SELECT * FROM testimonials").all();
    res.json(testimonials);
  });

  app.get("/api/messages", (req, res) => {
    const messages = db.prepare("SELECT * FROM contact_messages ORDER BY created_at DESC").all();
    res.json(messages);
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    db.prepare("INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)").run(name, email, subject, message);
    res.json({ success: true });
  });

  app.use("/api", (_req, res) => { res.status(404).json({ error: "API endpoint not found." }); });
  const handleError: ErrorRequestHandler = (err, _req, res, _next) => {
    const status = err.status === 413 ? 413 : err.type === "entity.parse.failed" ? 400 : 500;
    res.status(status).json({ error: status === 413 ? "Request is too large." : status === 400 ? "Invalid JSON body." : "Unable to complete the request." });
  };
  app.use(handleError);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    const addr = server.address();
    const actual = typeof addr === "object" && addr ? (addr as any).port : PORT;
    console.log(`Server running on http://localhost:${actual}`);
  });
}

startServer();
