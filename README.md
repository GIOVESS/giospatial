# GIOSPATIAL

The website for [GIOSPATIAL](https://www.giospatial.org), a geospatial technology company in Nairobi, Kenya. It covers the flagship platform, the Naivasha Basin Intelligence System (NBIS), five service areas, a small Insights section for methodology write-ups and pilot updates, and a way to get in touch.

Everything on the site is written from what the company actually does today. Where something is a pilot, a plan or an application under review, the copy says so.

## What you will find here

- **A white, map-first design** built on the brand palette (`#265B01`, `#152C00`, `#141B44`) and Montserrat. Navy is used for the footer and call-to-action bands, and a contour-line pattern from the brand guidelines runs through the page backgrounds.
- **A dotted 3D globe** in the hero. It is drawn on a plain canvas from about 2,000 land points, so there is no WebGL, no three.js and no texture download. You can drag it, use the arrow keys, or pause it.
- **A Kenya map** that links Nairobi, the Lake Naivasha pilot and the Bogoria-Baringo lakes to their pages.
- **A before and after slider** of Lake Naivasha in 2010 and 2026, using NASA imagery.
- **Phone-first navigation**: a full-screen menu, a sticky call and demo bar, and 44px touch targets.

## Run it locally

You need Node 18 or newer.

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, plus per-route HTML for link previews
npm run preview    # serve the production build
npm run lint
npx tsc --noEmit -p tsconfig.app.json
```

There is a `bun.lock` as well. Pick npm or Bun for a given install and stick with it.

## How it is put together

```
src/
  assets/            images.ts is the one place images are imported from
  components/        header, footer, homepage sections, shared pieces
    ui/              shadcn/ui primitives (toast, tooltip and friends)
  content/
    site.ts          copy for the homepage, divisions, NBIS, team and nav
    geo.ts           Kenya map shapes, globe points, contour pattern
  data/insights.ts   every Insight article
  hooks/             toast, mobile detection, reduced motion
  lib/               route-meta.js (SEO), routes.ts (link helper), media.ts
  pages/             one file per route, divisions share a single template
  styles/redesign.css  the design system: tokens, layout, components
  App.tsx            the route map
scripts/             post-build step that writes per-route HTML
public/              icons, sitemap, robots.txt, the NBIS videos, brand/contour.svg
```

Tailwind and shadcn are still in the project for the toast system and a few primitives. Page styling comes from `src/styles/redesign.css`, which is plain CSS with custom properties at the top.

### Routes

| Route | What it is |
| --- | --- |
| `/` | Homepage |
| `/services` | The five service areas |
| `/divisions/:slug` | `analytics`, `ai-lab`, `platforms`, `consulting`, `impact` |
| `/nbis` | NBIS deep dive and demo recording |
| `/insights`, `/insights/:slug` | Insights index and articles |
| `/team`, `/careers`, `/partners` | Company pages |
| `/developer-forum`, `/events`, `/press` | Community and media |
| `/privacy`, `/terms`, `/legal` | Legal pages |
| `/thank-you` | Where the contact form sends people after a successful submit |

The homepage sections carry ids you can link to: `#where`, `#divisions`, `#products`, `#technology`, `#about`, `#benefits`, `#faq` and `#contact`. A link like `/#faq` from another page navigates first, then scrolls.

## Common changes

**Edit copy.** Homepage, division, NBIS, team and careers text lives in `src/content/site.ts`. Insights live in `src/data/insights.ts`.

**Add an Insight.** Put a new object at the top of the `INSIGHTS` array. The homepage preview, the Insights index and the menu all read from it. Add a matching entry to `ROUTE_META` in `src/lib/route-meta.js` if you want a proper social preview card for it.

**Add a division.** Add an entry to `DIVISIONS` in `src/content/site.ts` and a `ROUTE_META` entry. The page itself is generated.

**Add a page.** Create it in `src/pages/`, register it as a lazy route in `src/App.tsx` above the catch-all, link to it from `NAV` or `footCols` in `src/content/site.ts`, and add it to `ROUTE_META` and `public/sitemap.xml`.

**Link to something.** Content files use short names such as `nbis`, `services-ai-lab` or `home#technology`. `toPath()` in `src/lib/routes.ts` turns them into URLs.

**Swap an image.** Drop the file in `src/assets/`, export it from `src/assets/images.ts`, and reference it through that file.

## SEO

Two things read `ROUTE_META`. `RouteSEO.tsx` updates the title, description and canonical tags as people move around the site, which is what Google sees. After `vite build`, `scripts/generate-static-meta.mjs` writes one HTML file per route with the same tags baked in, which is what link previews on WhatsApp, LinkedIn, Slack and X read, since those tools do not run JavaScript.

Your host needs to serve a matching static file before falling back to `index.html`. Vercel, Netlify and Cloudflare Pages do this by default.

## Not connected yet

- **Contact form.** Set `VITE_CONTACT_FORM_ENDPOINT` to a form service such as Formspree and submissions will post there, then land on `/thank-you`. Until it is set, the form validates and tells the visitor it was not sent. It does not pretend.
- **Newsletter.** The footer signup says it is not connected, and points people to sales@giospatial.org.
- **Analytics.** `index.html` has a GA4 snippet with the placeholder ID `G-XXXXXXXXXX`. Swap in the real measurement ID in both places.
- **Team page.** Only the founder is filled in. The other roles show as open placeholders.

## Deploying

```sh
npm run build
```

Upload `dist/` to any static host. If you change the domain, update the canonical tags in `index.html` and `BASE_URL` in `src/lib/route-meta.js`.

## Contact

Phone: [+254 708 187 019](tel:+254708187019)
Email: [sales@giospatial.org](mailto:sales@giospatial.org)
Office: Naivasha Road, Uthiru, Westlands, Nairobi, Kenya

GIOSPATIAL is the trading name of Giospatial Earth Limited (Reg. PVT-YQ1DZJ29).
