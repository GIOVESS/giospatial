import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.giospatial.org";

const DEFAULT_META = {
  title: "GIOSPATIAL · Intelligence in Every Location",
  description:
    "GIOSPATIAL engineers end-to-end geospatial systems for Africa's modern enterprise. Our flagship platform NBIS delivers basin-scale spatial intelligence across East Africa.",
};

/**
 * Per-route <title> / meta description / canonical / OG overrides.
 *
 * Single source of truth, keyed by pathname — keep in sync with the route
 * map in App.tsx. Unlisted paths fall back to DEFAULT_META (incl. 404s,
 * which are noindexed at the crawler level once prerendering lands).
 *
 * Googlebot executes JS, so these land in the DOM it indexes. Social
 * scrapers do not — they read static index.html — so link previews always
 * show the site-wide defaults until we adopt build-time prerendering.
 */
const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": DEFAULT_META,
  "/divisions/analytics": {
    title: "Geospatial Analytics · GIOSPATIAL",
    description:
      "Basin-scale spatial analytics: satellite ingestion, PostGIS pipelines, and decision-ready intelligence products for enterprise and government across East Africa.",
  },
  "/divisions/ai-lab": {
    title: "GeoAI Lab · GIOSPATIAL",
    description:
      "Applied GeoAI research — machine learning on Earth Observation imagery, land-cover classification, and predictive spatial modeling for African landscapes.",
  },
  "/divisions/platforms": {
    title: "Platforms & NBIS · GIOSPATIAL",
    description:
      "Enterprise geospatial platforms including NBIS, the Naivasha Basin Intelligence System — real-time basin monitoring, alerting, and decision APIs.",
  },
  "/divisions/consulting": {
    title: "GIS Consulting · GIOSPATIAL",
    description:
      "ArcGIS Enterprise, Workflow Manager, Survey123, and open-source GIS consulting — architecture, implementation, and capacity building for African organisations.",
  },
  "/divisions/impact": {
    title: "Impact · GIOSPATIAL",
    description:
      "Measurable environmental and social outcomes from spatial intelligence — water security, land management, and sustainable development across East Africa.",
  },
  "/team": {
    title: "Leadership & Team · GIOSPATIAL",
    description:
      "The team behind GIOSPATIAL, led by founder and CEO Giovanni Bwayo — GIS engineers, data scientists, and Earth Observation specialists based in Nairobi, Kenya.",
  },
  "/careers": {
    title: "Careers · GIOSPATIAL",
    description:
      "Open roles at GIOSPATIAL — build geospatial systems, GeoAI models, and enterprise mapping platforms for Africa from Nairobi, Kenya.",
  },
  "/partners": {
    title: "Partner Programme · GIOSPATIAL",
    description:
      "Partner with GIOSPATIAL — integration, reseller, and data partnerships for geospatial intelligence products across Africa.",
  },
  "/developer-forum": {
    title: "Developer Forum · GIOSPATIAL",
    description:
      "Developer community for GIOSPATIAL platforms — API documentation, integration guides, and technical discussion for NBIS and spatial data services.",
  },
  "/press": {
    title: "Press & Media · GIOSPATIAL",
    description:
      "Press releases, media resources, and brand assets for GIOSPATIAL — Kenya's geo-intelligence company.",
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
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const RouteSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? DEFAULT_META;
    const url = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertCanonical(url);
  }, [pathname]);

  return null;
};

export default RouteSEO;
