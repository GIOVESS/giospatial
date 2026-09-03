// Runs after `vite build`. Takes the single dist/index.html Vite produced
// and, for every route in ROUTE_META, writes a copy at dist/<route>/index.html
// with that route's <title>/description/OG tags substituted in.
//
// WHY THIS EXISTS
// ----------------
// This is a React SPA — one index.html, client-side routing. Googlebot
// executes JS so it sees RouteSEO.tsx's per-route updates fine. Social
// media link-preview scrapers (Facebook, X/Twitter, LinkedIn, WhatsApp,
// Slack) do NOT execute JS — they fetch whatever HTML the server returns
// for the exact URL being shared and read <title>/<meta> straight from
// that markup. Without this, every shared link (e.g. giospatial.org/team)
// would preview as the homepage, not the Team page.
//
// This does NOT do full content prerendering (no rendered React markup,
// no puppeteer/Chromium dependency) — it only duplicates the shell HTML
// with corrected <head> tags. That's sufficient for link previews and for
// any crawler that doesn't execute JS; Googlebot gets the full picture
// either way since it renders the SPA itself.
//
// HOSTING REQUIREMENT
// --------------------
// Your host's SPA fallback must check for a matching static file BEFORE
// falling back to index.html. This is the default behavior on Vercel,
// Netlify, and Cloudflare Pages. If you're serving via a custom Express/
// Nginx config, the rule must be "serve the file at this path if it
// exists, else serve /index.html" — not an unconditional rewrite to
// /index.html for every path.
//
// USAGE: added automatically to `npm run build` (see package.json).
// Run standalone with: node scripts/generate-static-meta.mjs

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTE_META, BASE_URL } from "../src/lib/route-meta.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const SOURCE_HTML = join(DIST_DIR, "index.html");

function withRouteMeta(html, pathname, meta) {
  const url = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;
  return html
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${meta.description}" />`
    )
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${meta.description}" />`
    )
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
}

async function main() {
  if (!existsSync(SOURCE_HTML)) {
    console.error(`[generate-static-meta] ${SOURCE_HTML} not found — run "vite build" first.`);
    process.exitCode = 1;
    return;
  }

  const baseHtml = await readFile(SOURCE_HTML, "utf-8");
  let written = 0;

  for (const [pathname, meta] of Object.entries(ROUTE_META)) {
    if (pathname === "/") continue; // dist/index.html already has these defaults baked in

    const outDir = join(DIST_DIR, pathname);
    const outFile = join(outDir, "index.html");
    await mkdir(outDir, { recursive: true });
    await writeFile(outFile, withRouteMeta(baseHtml, pathname, meta), "utf-8");
    written += 1;
  }

  console.log(`[generate-static-meta] wrote ${written} static HTML file(s) with per-route meta into dist/`);
}

main();
