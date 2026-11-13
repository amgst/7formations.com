# 7Formations

Install dependencies with `npm install`, copy `.env.example` to `.env`, and run `npm run dev`.

Set a unique `ADMIN_PASSWORD` of at least 16 characters and optionally `ADMIN_USERNAME` in the server environment. Admin access and private APIs are disabled until configured. Open `/admin` directly to authenticate with the browser HTTP Basic prompt. Use HTTPS in deployment; local HTTP is for development. Browsers may retain credentials until closed. The dashboard Logout button is currently a placeholder.

For deployment, run `npm run build`, set `NODE_ENV=production` and `APP_URL` to the public HTTPS origin, then run `npx tsx server.ts`. Deploy behind an HTTPS reverse proxy; never expose the development server. Back up SQLite securely and restrict file permissions. The database contains personal contact details and must never be published or committed.

Contact submissions are stored in SQLite; email notifications are not implemented. Request limits are in memory per process and use the direct connection IP. A reverse proxy needs client-aware rate limiting; multiple instances need a shared limiter. Do not blindly trust forwarded IP headers.

Testimonial visibility uses localStorage and only affects the current browser. Dashboard overview, logout, mark-as-read and delete-message controls are unfinished. Third-party testimonial image URLs may expire; replace with approved local images. Hosting, TLS, backups and dependency advisories require separate deployment verification.
