// Plain JS (not .ts) on purpose: this file is imported both by Vite/React
// (RouteSEO.tsx, via the TS build pipeline) and directly by a plain Node
// script (scripts/generate-static-meta.mjs) that runs *after* the Vite
// build with no TS compilation step. Keep it dependency-free.

export const BASE_URL = "https://www.giospatial.org";

export const DEFAULT_META = {
  title: "GIOSPATIAL · Intelligence in Every Location",
  description:
    "GIOSPATIAL engineers end-to-end geospatial systems for Africa's modern enterprise. Our flagship platform NBIS delivers basin-scale spatial intelligence across East Africa.",
};

/**
 * Per-route <title> / meta description overrides. Single source of truth —
 * keep in sync with the route map in App.tsx. Unlisted paths fall back to
 * DEFAULT_META.
 *
 * Consumed by:
 *  - RouteSEO.tsx: updates <title>/meta/canonical/OG live as the user
 *    navigates client-side (what Googlebot sees, since it executes JS).
 *  - scripts/generate-static-meta.mjs: writes one static HTML file per
 *    route at build time with these values baked in (what social-media
 *    scrapers see, since they do NOT execute JS and only ever read
 *    whichever HTML file the server returns for that URL).
 *
 * "/insights/:slug" entries are OPTIONAL, not required: RouteSEO.tsx
 * falls back to that article's own title/excerpt (src/data/insights.ts,
 * getInsightRouteMeta) for any slug not listed here, so a new insight
 * works correctly for real users and Google with zero edits to this file.
 * Add an entry here only if you also want a perfect static HTML file for
 * non-JS social-preview scrapers (Facebook/X/Slack link unfurls) — see
 * generate-static-meta.mjs's header comment for why that's a separate
 * concern from what RouteSEO.tsx handles.
 */
export const ROUTE_META = {
  "/": DEFAULT_META,
  "/divisions/analytics": {
    title: "Geospatial Analytics · GIOSPATIAL",
    description:
      "Basin-scale spatial analytics: satellite ingestion, PostGIS pipelines, and decision-ready intelligence products for enterprise and government across East Africa.",
  },
  "/divisions/ai-lab": {
    title: "GeoAI Lab · GIOSPATIAL",
    description:
      "Applied GeoAI research: machine learning on Earth Observation imagery, land-cover classification, and predictive spatial modeling for African landscapes.",
  },
  "/divisions/platforms": {
    title: "Platforms & NBIS · GIOSPATIAL",
    description:
      "Enterprise geospatial platforms including NBIS, the Naivasha Basin Intelligence System: real-time basin monitoring, alerting, and decision APIs.",
  },
  "/divisions/consulting": {
    title: "GIS Consulting · GIOSPATIAL",
    description:
      "ArcGIS Enterprise, Workflow Manager, Survey123, and open-source GIS consulting: architecture, implementation, and capacity building for African organisations.",
  },
  "/divisions/impact": {
    title: "Impact · GIOSPATIAL",
    description:
      "Measurable environmental and social outcomes from spatial intelligence: water security, land management, and sustainable development across East Africa.",
  },
  "/team": {
    title: "Leadership & Team · GIOSPATIAL",
    description:
      "The team behind GIOSPATIAL, led by founder and CEO Giovanni Bwayo: GIS engineers, data scientists, and Earth Observation specialists based in Nairobi, Kenya.",
  },
  "/careers": {
    title: "Careers · GIOSPATIAL",
    description:
      "Open roles at GIOSPATIAL: build geospatial systems, GeoAI models, and enterprise mapping platforms for Africa from Nairobi, Kenya.",
  },
  "/partners": {
    title: "Partner Programme · GIOSPATIAL",
    description:
      "Partner with GIOSPATIAL: integration, reseller, and data partnerships for geospatial intelligence products across Africa.",
  },
  "/developer-forum": {
    title: "Developer Forum · GIOSPATIAL",
    description:
      "Developer community for GIOSPATIAL platforms: API documentation, integration guides, and technical discussion for NBIS and spatial data services.",
  },
  "/press": {
    title: "Press & Media · GIOSPATIAL",
    description:
      "Press releases, media resources, and brand assets for GIOSPATIAL: Kenya's geo-intelligence company.",
  },
  "/events": {
    title: "Events & Conferences · GIOSPATIAL",
    description:
      "GIOSPATIAL at geospatial industry events, conferences, and workshops across Africa and beyond.",
  },
  "/privacy": {
    title: "Privacy Policy · GIOSPATIAL",
    description: "How GIOSPATIAL collects, uses, and protects your data.",
  },
  "/terms": {
    title: "Terms of Service · GIOSPATIAL",
    description: "Terms governing the use of GIOSPATIAL platforms and services.",
  },
  "/legal": {
    title: "Legal · GIOSPATIAL",
    description: "Legal notices and regulatory information for GIOSPATIAL.",
  },
  "/nbis": {
    title: "NBIS · Naivasha Basin Intelligence System · GIOSPATIAL",
    description:
      "GIOSPATIAL's flagship platform: a basin-scale geospatial decision-support system, actively piloted at Lake Naivasha, Kenya.",
  },
  "/insights": {
    title: "Insights · GIOSPATIAL",
    description:
      "Real analysis of current geospatial and climate events, and the methodology behind it, from GIOSPATIAL's GIS consultancy team in Nairobi, Kenya.",
  },
  "/insights/bogoria-baringo-lake-merger": {
    title: "Tracking the Bogoria-Baringo Confluence · GIOSPATIAL Insights",
    description:
      "Kenya's Lake Baringo and Lake Bogoria are under 3km apart. The satellite change-detection methodology that tracks a slow-moving event like this from orbit.",
  },
  "/insights/nepal-glacier-flood-mapping": {
    title: "Rapid Flood Mapping After the Nepal Glacier Collapse · GIOSPATIAL Insights",
    description:
      "How satellite agencies turned imagery into a damage map within hours of the August 2026 Nepal-China border flash flood.",
  },
  "/insights/nbis-pilot-progress": {
    title: "Inside the NBIS Pilot · GIOSPATIAL Insights",
    description:
      "An honest status update on GIOSPATIAL's flagship platform: what's working, what isn't validated yet, and the ABIL EXPLORE funding application.",
  },
};
