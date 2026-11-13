# Website review - 2026-11-13

## Fixed

- Critical: contact messages could be read anonymously. Added server-side HTTP Basic authentication, disabled unless a password of at least 16 characters is configured.
- High: anonymous users could create services and create, edit or delete products. Protected private writes, rejected cross-site admin writes and added an admin request limit.
- Removed unused Gemini browser-key injection from Vite configuration. This configuration could expose a key if referenced by frontend code; no actual leaked key was confirmed.
- Added bounded JSON bodies, field/type/length validation, contact request limits, generic JSON errors, security response headers and a production Content Security Policy.
- Removed the SQLite database from Git tracking while retaining the local file; ignored future database files. Existing Git history is unchanged. If real personal data was committed previously, assess repository access and historical exposure.
- Added contact failure feedback and submission progress, API 404 responses, product not-found responses and a frontend missing-page screen.
- Enlarged header logo from 40/48px to 48/64px and footer logo from 40px to 48px. Fixed footer email link, footer responsive class, copyright year and mobile menu accessibility/scrolling.

## Remaining findings and limitations

- Admin overview, logout, mark-as-read and message-delete controls are unfinished. Basic authentication credentials can remain cached by the browser; closing the browser clears them according to its behavior. A full session-based admin login/logout remains future work.
- Testimonial visibility is browser localStorage, not a persistent site-wide publishing control.
- Contact form saves to SQLite but sends no email notification.
- Testimonial portraits use external signed LinkedIn image URLs with expiry parameters; these need approved stable/local replacements. Logo, video, fonts and other images also depend on external availability.
- Production JavaScript is about 531 kB before gzip; Vite reports a chunk-size warning. Route splitting would reduce initial downloads.
- Request limits are per-process memory and use the direct connection IP. Configure client-aware limits at the reverse proxy and a shared store for multiple instances. Deployment requires HTTPS, a strong unique admin password, correct APP_URL, secure database permissions and backups.
- npm audit failed to reach its security endpoint. Dependency advisory status remains unverified; rerun npm audit with registry access.
- This review covered local source and isolated production API behavior. Live hosting/TLS, browser layout across devices, external asset availability and a full penetration test were not verified.

## Verification

- npm.cmd run lint: passed.
- npm.cmd run build: passed with the existing large-chunk warning.
- node tests/security.mjs: passed. Checks anonymous access denial, authenticated access and product creation/deletion, cross-site write denial, contact validation and throttling, malformed/oversized JSON rejection, API 404s and security headers. Tests use a separate temporary database.

Implementation guidance: https://expressjs.com/en/advanced/best-practice-security/
