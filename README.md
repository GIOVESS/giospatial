# GIOSPATIAL — Company Website

Official website for **GIOSPATIAL**, a geo-intelligence and spatial data technology company based in Nakuru, Kenya. The site presents the company's flagship platform — the **Naivasha Basin Intelligence System (NBIS)** — alongside use cases, technology, customer stories, the five service divisions, and contact/sales.

## Tech Stack

- **Vite** — build tooling
- **React 18** + **TypeScript**
- **React Router** — client-side routing (`src/App.tsx`)
- **Tailwind CSS** — utility-first styling, themed via CSS variables in `src/index.css`
- **shadcn/ui** (`src/components/ui/`) — accessible component primitives (button, card, toast, etc.)
- **Lucide React** — icons

## Local Development

Requires Node.js 18+ and npm.

```sh
# Install dependencies
npm install

# Start dev server (hot-reload)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

The dev server runs at `http://localhost:3000` by default (configured in `vite.config.ts`).

## Project Structure

```
src/
├── assets/
│   ├── images.ts          # ⭐ Central image registry — import all images from here
│   ├── logos/              # Brand lockups (icon, wordmark, horizontal, light/dark)
│   ├── images/              # Generic content photography (dashboards, satellite, etc.)
│   └── people/              # Team / leadership headshots
├── components/
│   ├── ui/                 # shadcn/ui primitives (button, card, toast, dialog, ...)
│   ├── Navigation.tsx       # Site-wide header/mega-nav — used on every page
│   ├── Footer.tsx           # Site-wide footer — used on every page
│   ├── StaticPage.tsx       # Shared layout for simple content pages (Careers, Privacy, ...)
│   └── *.tsx                # Homepage section components (see table below)
├── pages/
│   ├── Index.tsx            # Homepage — composes all the section components
│   ├── divisions/           # One page per service division (/divisions/*)
│   ├── Careers.tsx, Privacy.tsx, ... # Static info pages (built on <StaticPage>)
│   └── NotFound.tsx         # 404 catch-all
├── hooks/                   # Custom React hooks (toast, mobile detection)
├── lib/                     # Utility helpers (cn() classname merger, etc.)
├── App.tsx                  # Route map — the source of truth for every URL
└── index.css                # Theme tokens (colors, fonts), global styles, animations
public/
├── giospatial-icon.png      # Favicon
├── giospatial-logo.png      # OG/social preview image
└── robots.txt
```

### Updating images

**Don't import image files directly in components.** Add the file under
`src/assets/images/`, `logos/`, or `people/`, then export it by name from
`src/assets/images.ts`, and import it from there:

```tsx
import { dashboardMockup } from "@/assets/images";
```

External stock photos (currently a few Unsplash URLs) live in the
`stockPhotos` object in the same file — swap a URL there and every component
using it updates at once.

### Adding a new homepage section

1. Create `src/components/YourSection.tsx` (give its `<section>` a unique `id` if it should be a nav-scroll target).
2. Import and render it in `src/pages/Index.tsx` in the position you want.
3. If it needs a nav/footer link, add `{ label: "...", id: "your-id" }` to `MEGA_NAV` in `Navigation.tsx` and/or `COLS` in `Footer.tsx`.

### Adding a new standalone page (e.g. another legal/info page)

1. Create `src/pages/YourPage.tsx` that wraps its content in `<StaticPage>` (see `src/pages/Careers.tsx` for a simple example).
2. Register a `<Route path="/your-page" element={<YourPage />} />` in `src/App.tsx`.
3. Add a `{ label: "...", path: "/your-page" }` entry to `MEGA_NAV` and/or `COLS` so it's actually reachable from the nav or footer.

### Nav/footer link convention

Both `Navigation.tsx` and `Footer.tsx` use the same link shape:

- `{ id: "section-id" }` — scrolls to a `<section id="section-id">` on the homepage. If you're on another page when clicked, it navigates to `/` first and scrolls after mount (see the `location.state.scrollTo` effect in `Index.tsx`).
- `{ path: "/route" }` — navigates directly to a route.

## Homepage Sections

Rendered in this order by `src/pages/Index.tsx`:

| Section ID      | Component             | Description                              |
| ---------------- | --------------------- | ----------------------------------------- |
| `#home`          | `Hero.tsx`             | Hero headline, tagline, and key stats     |
| `#about`         | `WhatIs.tsx`           | "What is GIOSPATIAL" company positioning  |
| `#sectors`       | `UseCases.tsx`         | Use-case carousel across industries       |
| `#stories`       | `CustomerStories.tsx`  | Customer case studies and impact numbers  |
| `#products`      | `Products.tsx`         | NBIS flagship platform deep-dive          |
| `#capabilities`  | `Capabilities.tsx`     | Core platform capabilities carousel       |
| `#technology`    | `Technology.tsx`       | Full technology stack                     |
| `#benefits`      | `Benefits.tsx`         | Support, training, and community benefits |
| `#divisions`     | `Divisions.tsx`        | The five service divisions (links to `/divisions/*`) |
| —                | `Partners.tsx`         | Partner & collaborator logos              |
| `#leadership`    | `About.tsx`            | Mission/vision/approach + founder profile |
| —                | `FutureOutlook.tsx`    | Closing vision statement                  |
| —                | `GetStarted.tsx`       | Two-path CTA (demo vs. partner)           |
| `#contact`       | `ContactSales.tsx`     | Sales enquiry form                        |

## All Routes

| Route | Page | Notes |
| --- | --- | --- |
| `/` | `Index.tsx` | Homepage (sections above) |
| `/divisions/analytics` | `divisions/Analytics.tsx` | Giospatial Analytics division |
| `/divisions/ai-lab` | `divisions/AILab.tsx` | Giospatial AI Lab division |
| `/divisions/platforms` | `divisions/Platforms.tsx` | Giospatial Platforms division |
| `/divisions/consulting` | `divisions/Consulting.tsx` | Consulting & Training division |
| `/divisions/impact` | `divisions/Impact.tsx` | Giospatial Impact division |
| `/careers` | `Careers.tsx` | Open roles + how to apply |
| `/partners` | `PartnerProgramme.tsx` | Partnership tracks |
| `/developer-forum` | `DeveloperForum.tsx` | Developer/API resources |
| `/press` | `PressMedia.tsx` | Press kit + media contact |
| `/events` | `EventsConferences.tsx` | Events GIOSPATIAL participates in |
| `/privacy` | `Privacy.tsx` | Privacy policy |
| `/terms` | `Terms.tsx` | Terms of service |
| `/legal` | `Legal.tsx` | Legal notices / trademarks |
| `*` | `NotFound.tsx` | 404 |

## Deployment

Build the project with `npm run build`. The output is in `dist/` — deploy to any static host (Netlify, Vercel, Cloudflare Pages, etc.). Since this uses client-side routing, configure your host to redirect all paths to `index.html` (a SPA fallback).

For a custom domain, configure your DNS to point to your hosting provider and update the `<meta>` tags in `index.html` accordingly.

## Contact

**Phone**: [+254 708 187 019](tel:+254708187019)
**Email**: [sales@giospatial.org](mailto:sales@giospatial.org)
**Location**: Nakuru, Kenya · East Africa
