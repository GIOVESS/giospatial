# GIOSPATIAL — Company Website

Official website for **GIOSPATIAL**, a geo-intelligence and spatial data
technology company based in Nairobi, Kenya. The site presents the company's
flagship platform, the **Naivasha Basin Intelligence System (NBIS)**,
alongside the five service divisions, Insights (methodology write-ups and
NBIS pilot progress dispatches), and contact/sales.

## Tech Stack

- **Vite** + **React 18** + **TypeScript** — build tooling and app framework
- **React Router** — client-side routing (`src/App.tsx`), with every route
  except `/` code-split via `React.lazy`
- **Tailwind CSS** — utility-first styling, themed via CSS variables in
  `src/index.css`
- **shadcn/ui** (`src/components/ui/`) — accessible component primitives
  (button, card, toast, dialog, ...), built on Radix UI
- **react-globe.gl** / **three.js** — the two rotating-globe components
  (`Globe.tsx`, `HeroGlobe.tsx`), lazy-loaded since the chunk is heavy
- **react-leaflet** / **Leaflet** — the office-location map (`LeafletMap.tsx`)
- **Recharts** — the one data chart on an Insight article
  (`BaringoDistanceChart.tsx`)
- **React Hook Form** + **Zod** — form handling/validation
- **TanStack Query** — wired up app-wide, currently minimal actual data
  fetching (no backend yet — see "Known gaps" below)
- **Lucide React** — icons

## Local Development

Requires Node.js 18+ and npm (a `bun.lock` is also present if you prefer
Bun — either works, but don't mix package managers on the same install;
pick one and delete/ignore the other's lockfile for your session).

```sh
# Install dependencies
npm install

# Start dev server (hot-reload)
npm run dev

# Type-check without emitting files
npx tsc --noEmit

# Lint
npm run lint

# Production build (also writes per-route static HTML — see "SEO & meta" below)
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:3000` by default (configured in
`vite.config.ts`).

## Project Structure

```
src/
├── assets/
│   ├── images.ts            # ⭐ Central image registry — import all images from here
│   ├── logos/                # Brand lockups (icon, wordmark, horizontal, light/dark)
│   ├── images/                # Content photography + the two globe textures
│   └── people/                # Team / leadership headshots
├── components/
│   ├── ui/                   # shadcn/ui primitives (button, card, toast, dialog, ...)
│   ├── Navigation.tsx         # Site-wide header/mega-nav — used on every page
│   ├── Footer.tsx             # Site-wide footer — used on every page
│   ├── StaticPage.tsx         # Shared layout for simple content pages (Careers, Privacy, ...)
│   ├── PageHeroBand.tsx       # Shared dark header band for non-homepage pages
│   ├── ScrollReveal.tsx       # Sitewide [data-reveal] fade-in-on-scroll — see its own comment
│   │                          # for why it needs a MutationObserver, not just an initial scan
│   └── *.tsx                  # Homepage section components (see table below)
├── pages/
│   ├── Index.tsx              # Homepage — composes all the section components
│   ├── divisions/             # One page per service division (/divisions/*)
│   ├── NBIS.tsx                # Flagship platform deep-dive (/nbis)
│   ├── Insights.tsx            # Insights index (/insights)
│   ├── InsightArticle.tsx      # Single insight (/insights/:slug)
│   ├── Careers.tsx, Privacy.tsx, ... # Static info pages (built on <StaticPage>)
│   └── NotFound.tsx            # 404 catch-all
├── data/
│   └── insights.ts             # ⭐ All Insights content — see the "HOW TO ADD A NEW
│                                #    INSIGHT" comment at the top of this file
├── hooks/                      # Custom React hooks (toast, mobile detection, scroll reveal)
├── lib/
│   ├── utils.ts                 # cn() classname merger, etc.
│   └── route-meta.js            # ⭐ Per-route <title>/description — see "SEO & meta" below
├── App.tsx                      # Route map — the source of truth for every URL
└── index.css                    # Theme tokens (colors, fonts), global styles, animations
scripts/
└── generate-static-meta.mjs     # Post-build step, writes per-route static HTML (see below)
public/
├── videos/                      # Hero background loop + the NBIS demo recording
├── giospatial-icon.png          # Favicon
├── giospatial-logo.png          # OG/social preview image
└── robots.txt
```

### Updating images

**Don't import image files directly in components.** Add the file under
`src/assets/images/`, `logos/`, or `people/`, then export it by name from
`src/assets/images.ts`, and import it from there:

```tsx
import { dashboardMockup } from "@/assets/images";
```

### Adding a new Insight (article)

Insights (methodology explainers + NBIS pilot progress dispatches) live
entirely in `src/data/insights.ts`. Read the "HOW TO ADD A NEW INSIGHT"
comment at the top of that file — in short: prepend one object to the
`INSIGHTS` array (most recent first). The homepage preview, the `/insights`
index, and the nav's "Recent" dropdown all read that array directly, so a
new entry appears everywhere with no other file to touch. The only optional
extra step (for a perfect static social-preview card, not required for the
live site to work) is documented in the comment above `ROUTE_META` in
`src/lib/route-meta.js`.

### Adding a new homepage section

1. Create `src/components/YourSection.tsx` (give its `<section>` a unique
   `id` if it should be a nav-scroll target).
2. Import and render it in `src/pages/Index.tsx` in the position you want.
3. If it needs a nav/footer link, add an entry to `MEGA_NAV` in
   `Navigation.tsx` and/or the relevant column in `Footer.tsx`.

### Adding a new standalone page

1. Create `src/pages/YourPage.tsx` that wraps its content in `<StaticPage>`
   (see `src/pages/Careers.tsx` for a simple example) — or follow
   `NBIS.tsx`/`Insights.tsx` for a fully custom layout.
2. Register it as a **lazy** route in `src/App.tsx`: add
   `const YourPage = lazy(() => import("./pages/YourPage"));` near the top,
   and `<Route path="/your-page" element={<YourPage />} />` above the
   catch-all `*` route. (`/` is the only route that isn't lazy-loaded — see
   the comment above the lazy imports in `App.tsx` for why.)
3. Add a `{ label: "...", path: "/your-page" }` entry to `MEGA_NAV` and/or
   `Footer.tsx` so it's actually reachable from the nav or footer.
4. Add a `ROUTE_META` entry in `src/lib/route-meta.js` for correct
   `<title>`/description (see "SEO & meta" below).

### Nav/footer link convention

Both `Navigation.tsx` and `Footer.tsx` use the same link shape:

- `{ id: "section-id" }` — scrolls to a `<section id="section-id">` on the
  homepage. If you're on another page when clicked, it navigates to `/`
  first and scrolls after mount (see the `location.state.scrollTo` effect
  in `Index.tsx`).
- `{ path: "/route" }` — navigates directly to a route.

### SEO & meta

Two things read `src/lib/route-meta.js`'s `ROUTE_META` map, for two
different audiences:

- **`RouteSEO.tsx`** updates `<title>`/meta/canonical/OG live as a user
  navigates client-side. This is what Googlebot sees, since it executes JS.
- **`scripts/generate-static-meta.mjs`** runs after `vite build` (wired into
  `npm run build`) and writes one static `dist/<route>/index.html` per
  route with the same values baked in. This is what non-JS social-preview
  scrapers see (Facebook/X/Slack link unfurls), since they read whatever
  HTML the server returns for the exact URL without executing anything.
  **Your host's SPA fallback must check for a matching static file before
  falling back to `index.html`** — the default behavior on Vercel, Netlify,
  and Cloudflare Pages; a custom Express/Nginx config needs this rule
  explicitly.

Add a route to `App.tsx` without a matching `ROUTE_META` entry and it just
falls back to `DEFAULT_META` (the homepage's title/description) — the site
still works, it just won't have a distinct social-preview card until you
add one. Insight articles (`/insights/:slug`) are a partial exception: see
"Adding a new Insight" above.

## Homepage Sections

Rendered in this order by `src/pages/Index.tsx`:

| Section ID | Component | Description |
| --- | --- | --- |
| `#home` | `Hero.tsx` | Hero headline, video background, decorative `HeroGlobe.tsx` |
| — | `MarqueeBand.tsx` | Repeating ticker (`GIOSPATIAL · NBIS · GeoAI · ...`) |
| — | `WhereWeWork.tsx` | "Based in Nairobi..." + the interactive `Globe.tsx` |
| `#divisions` | `Divisions.tsx` | The five service divisions (links to `/divisions/*`) |
| `#insights` | `InsightsPreview.tsx` | Latest 3 Insights (reads `src/data/insights.ts`) |
| `#products` | `Products.tsx` | NBIS flagship platform deep-dive |
| `#technology` | `Technology.tsx` | Full technology stack |
| `#about` | `Positioning.tsx` | Mission/problem-solved framing + before/after comparison |
| `#benefits` | `WhyUsCTA.tsx` | Dark CTA band |
| `#faq` | `FAQ.tsx` | Frequently asked questions |
| `#contact` | `ContactSales.tsx` | Sales enquiry form + office map |

`Navigation.tsx` and `Footer.tsx` are rendered around every page, not
listed above since they aren't homepage-only sections.

## All Routes

Source of truth: `src/App.tsx`.

| Route | Page | Notes |
| --- | --- | --- |
| `/` | `Index.tsx` | Homepage (sections above) — not lazy-loaded |
| `/nbis` | `NBIS.tsx` | NBIS platform deep-dive, incl. the demo video |
| `/insights` | `Insights.tsx` | Insights index |
| `/insights/:slug` | `InsightArticle.tsx` | Single insight article |
| `/divisions/analytics` | `divisions/Analytics.tsx` | Analytics division |
| `/divisions/ai-lab` | `divisions/AILab.tsx` | AI Lab division |
| `/divisions/platforms` | `divisions/Platforms.tsx` | Platforms division |
| `/divisions/consulting` | `divisions/Consulting.tsx` | Consulting & Training division |
| `/divisions/impact` | `divisions/Impact.tsx` | Impact division |
| `/team` | `Team.tsx` | Leadership & team org chart |
| `/careers` | `Careers.tsx` | Open roles + how to apply |
| `/partners` | `PartnerProgramme.tsx` | Partnership tracks |
| `/developer-forum` | `DeveloperForum.tsx` | Developer/API resources |
| `/press` | `PressMedia.tsx` | Press kit + media contact |
| `/events` | `EventsConferences.tsx` | Events GIOSPATIAL participates in |
| `/privacy` | `Privacy.tsx` | Privacy policy |
| `/terms` | `Terms.tsx` | Terms of service |
| `/legal` | `Legal.tsx` | Legal notices |
| `/thank-you` | `ThankYou.tsx` | Post-form-submit landing |
| `*` | `NotFound.tsx` | 404 |

## Known gaps

Worth knowing before you extend these areas — both are intentionally
honest placeholders, not bugs:

- **Contact form / newsletter**: `ContactSales.tsx` and `Footer.tsx`'s
  newsletter signup have no backend endpoint wired up yet. They show an
  honest "not yet connected" message rather than faking success — see the
  comments above `FORM_ENDPOINT` in `ContactSales.tsx` for how to wire one
  up (a `VITE_CONTACT_FORM_ENDPOINT` env var, e.g. via Formspree).
- **Google Analytics**: `index.html` has the GA4 snippet in place but with
  a placeholder `G-XXXXXXXXXX` measurement ID — see the comment directly
  above it for the two-line change needed once you have a real GA4 property.

## Deployment

```sh
npm run build
```

The output is in `dist/`, ready to deploy to any static host (Vercel,
Netlify, Cloudflare Pages, etc.). Since this is a client-side-routed SPA,
your host must redirect unmatched paths to `index.html` — see "SEO & meta"
above for the one extra requirement (serve the matching static file first)
that per-route social previews depend on.

For a custom domain, point your DNS at your hosting provider and update
the canonical URL / `<meta>` tags in `index.html` and `BASE_URL` in
`src/lib/route-meta.js`.

## Contact

**Phone**: [+254 708 187 019](tel:+254708187019)
**Email**: [sales@giospatial.org](mailto:sales@giospatial.org)
**Location**: Naivasha Road, Uthiru, Westlands, Nairobi, Kenya
