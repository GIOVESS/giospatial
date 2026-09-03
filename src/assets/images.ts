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
// Real sourced photography (Aug 2026) — replaces several stockPhotos.* remote
// URLs below with local, license-cleared assets. 
// Positioning.tsx / divisions/*.tsx for usage.
// ---------------------------------------------------------------------------
export { default as lakeNaivashaSatellite2026 } from "./images/lake-naivasha-satellite-2026.jpg";
export { default as lakeNaivashaSatellite2010 } from "./images/lake-naivasha-satellite-2010.jpg";
export { default as satelliteSpace } from "./images/satellite-space.jpg";
export { default as techOfficeTeam } from "./images/tech-office-team.jpg";
export { default as farmFieldAerial } from "./images/farm-field-aerial.jpg";
export { default as nairobiAerial } from "./images/nairobi-aerial.jpg";
export { default as nairobiSkylineDusk } from "./images/nairobi-skyline-dusk.jpg";
export { default as reservoirDamAerial } from "./images/reservoir-dam-aerial.jpg";
export { default as droneAgricultureKenya } from "./images/drone-agriculture-kenya.jpg";
export { default as gisTrainingWorkshop } from "./images/gis-training-workshop.jpg";
export { default as dataCenterServers } from "./images/data-center-servers.jpg";
export { default as neuralNetworkAi } from "./images/neural-network-ai.jpg";
export { default as earthNightLights } from "./images/earth-night-lights.jpg";
export { default as analyticsDashboardPhoto } from "./images/analytics-dashboard.jpg";
export { default as riftValleyKenya } from "./images/rift-valley-kenya.jpg";
/** Poster frame for the NBIS demo video (public/videos/nbis-demo.mp4) — real
 *  screen recording of the working kmfri-naivasha-mne.streamlit.app demo. */
export { default as nbisDemoPoster } from "./images/nbis-demo-poster.jpg";
/** Earth texture for Globe.tsx — bundled locally (copied from the
 *  three-globe package's own example assets) rather than fetched from
 *  unpkg.com at runtime, so the globe doesn't depend on an external CDN
 *  staying up, and so it's covered by the same build pipeline as every
 *  other image on the site. */
export { default as earthGlobeTexture } from "./images/earth-globe-texture.jpg";
/** Night-lights earth texture for HeroGlobe.tsx, same provenance as
 *  earthGlobeTexture above (bundled from three-globe's own example assets,
 *  resized/recompressed to match the site's other image weights). City
 *  lights on a near-black ocean/land map read well against the Hero's dark
 *  gradient background, unlike the daylight blue-marble texture. */
export { default as earthNightGlobe } from "./images/earth-night-globe.jpg";

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
  /** (Formerly used by the retired CustomerStories.tsx illustrative demos) */
  solarField: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
  /** Capabilities — "Spatial Data Architecture" card */
  dataArchitecture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  /** Capabilities — "Earth Observation Network" card */
  earthObservation: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop",
  /** Capabilities — "GeoAI & Machine Learning" card */
  geoAI: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
} as const;
