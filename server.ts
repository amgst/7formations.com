import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("7formations.db");

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

  app.use(express.json());

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
    db
      .prepare("UPDATE products SET name = ?, description = ?, price = ?, image = ?, category = ? WHERE id = ?")
      .run(name, description, Number(price) || 0, image ?? "", category ?? "", id);
    res.json({ success: true });
  });

  app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    db.prepare("DELETE FROM products WHERE id = ?").run(id);
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
