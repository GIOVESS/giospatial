/**
 * Central image registry.
 *
 * Every image used anywhere on the site is imported here ONCE and re-exported
 * by name. Components import from "@/assets/images" instead of reaching into
 * src/assets/** directly — so swapping a photo, logo, or stock image is a
 * one-line change in this file instead of a hunt through every component.
 *
 * Folders:
 *   src/assets/logos/   brand lockups (icon, wordmark, horizontal, light/dark)
 *   src/assets/images/  generic content photography (dashboards, satellite, etc.)
 *   src/assets/people/  team / leadership headshots
 */

// ---------------------------------------------------------------------------
// Brand logos
// ---------------------------------------------------------------------------
export { default as logoHorizontal } from "./logos/horizontal-logo-geospatial@2x.png";
export { default as logoMain } from "./logos/main-logo-geospatial@2x.png";
export { default as logoWordmark } from "./logos/wordmark-geospatial@2x.png";
export { default as logoIcon } from "./logos/icon-geospatial.png";
export { default as logoHorizontalWhite } from "./logos/white-version-horizontal-logo@2x.png";
export { default as logoIconWhite } from "./logos/white-version-icon@2x.png";
export { default as logoWordmarkWhite } from "./logos/white-version-wordmark@2x.png";

// ---------------------------------------------------------------------------
// Content photography
// ---------------------------------------------------------------------------
export { default as dashboardMockup } from "./images/dashboard-mockup.jpg";
export { default as africaMap } from "./images/africa-map.jpg";
export { default as dronesAgriculture } from "./images/drones-agriculture.jpg";
export { default as gisMapDark } from "./images/gis-map-dark.jpg";
export { default as dataLandscape } from "./images/data-landscape.jpg";
export { default as earthNetwork } from "./images/earth-network.jpg";
export { default as techMapGrid } from "./images/tech-map-grid.jpg";

// ---------------------------------------------------------------------------
// People
// ---------------------------------------------------------------------------
export { default as giovanniBwayo } from "./people/giovanni.jpeg";

// ---------------------------------------------------------------------------
// External stock photography (Unsplash)
// Swap a photo by replacing the URL here — every usage updates at once.
// ---------------------------------------------------------------------------
export const stockPhotos = {
  /** WhatIs section — aerial coastline, East Africa */
  aerialAfrica: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80&auto=format&fit=crop",
  /** CustomerStories — KenGen solar/renewable energy story */
  solarField: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
  /** Capabilities — "Spatial Data Architecture" card */
  dataArchitecture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  /** Capabilities — "Earth Observation Network" card */
  earthObservation: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop",
  /** Capabilities — "GeoAI & Machine Learning" card */
  geoAI: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
} as const;
