# GIOSPATIAL — Company Landing Page

Official landing page for **GIOSPATIAL**, a geo-intelligence and spatial data technology company based in Nakuru, Kenya. The site presents the company's flagship platform — the **Naivasha Basin Intelligence System (NBIS)** — alongside solutions, technology stack, customer stories, and contact.

## Tech Stack

- **Vite** — build tooling
- **React 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible component primitives
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
```

The dev server runs at `http://localhost:8080` by default.

## Project Structure

```
src/
├── assets/          # Logo and static images
├── components/      # Page sections (Hero, Navigation, Footer, etc.)
├── hooks/           # Custom React hooks (toast, mobile detection)
├── lib/             # Utility helpers
├── pages/           # Route-level page components
└── index.css        # Global styles and scroll-reveal animations
public/
└── giospatial-logo.png   # Favicon source
```

## Key Sections

| Section ID      | Component              | Description                          |
|-----------------|------------------------|--------------------------------------|
| `#home`         | `Hero.tsx`             | Hero with headline and key stats     |
| `#about`        | `WhatIs.tsx`           | Company positioning                  |
| `#products`     | `Products.tsx`         | NBIS flagship platform               |
| `#capabilities` | `Capabilities.tsx`     | Core platform capabilities           |
| `#sectors`      | `Sectors.tsx`          | Industry verticals                   |
| `#stories`      | `CustomerStories.tsx`  | Case studies and impact numbers      |
| `#technology`   | `Technology.tsx`       | Full technology stack                |
| `#benefits`     | `Benefits.tsx`         | Support and deployment benefits      |
| `#contact`      | `ContactSales.tsx`     | Sales enquiry form                   |

## Deployment

Build the project with `npm run build`. The output is in `dist/` — deploy to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

For a custom domain, configure your DNS to point to your hosting provider and update the `<meta>` tags in `index.html` accordingly.

## Contact

**Email**: sales@giospatial.org  
**Location**: Nakuru, Kenya · East Africa
