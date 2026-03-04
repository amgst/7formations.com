export const PRODUCT_IMAGE_PLACEHOLDER =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 480'%3E%3Crect width='640' height='480' fill='%23e2e8f0'/%3E%3Cg fill='%2364758b'%3E%3Ccircle cx='240' cy='190' r='52'/%3E%3Cpath d='M120 360c35-58 88-92 142-92s107 34 142 92z'/%3E%3C/g%3E%3Ctext x='320' y='430' text-anchor='middle' font-family='Arial' font-size='24' fill='%23334155'%3EImage unavailable%3C/text%3E%3C/svg%3E";

export function getProductImageUrl(path: string): string {
  const value = (path ?? "").trim();
  if (!value) return "";
  if (/^(https?:|\/|data:|blob:)/i.test(value)) return value;
  if (value.startsWith("images/")) return `/${value}`;
  return `/images/${value}`;
}
