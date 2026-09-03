import { riftValleyKenya, satelliteSpace, nbisDemoPoster } from "@/assets/images";

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  /** Paragraphs of body content. Kept as plain strings, rendered as <p> tags. */
  body: string[];
  /** Named, real sources — required for any external-event piece so the page
   *  itself makes clear which facts are public record vs. GIOSPATIAL's own
   *  methodology commentary. Pass [] if the piece has none (e.g. GIOSPATIAL's
   *  own first-person progress dispatches). */
  sources: { label: string; url: string }[];
  /** Cover image shown on the Insights index, the homepage preview, and (if
   *  you add one) the article page itself. Use a real, honestly-captioned
   *  photo — see the comment on past entries below for what "honest" means
   *  when we don't have event-specific photography. */
  cover: { src: string; alt: string };
  /** Short label for the nav's "Recent" dropdown list (Navigation.tsx),
   *  which has less room than the full article title. Falls back to
   *  `title` if omitted — only set this if the full title is long or
   *  awkward in a narrow menu column. */
  navLabel?: string;
}

/**
 * HOW TO ADD A NEW INSIGHT
 * ------------------------
 * Prepend one object to the INSIGHTS array below (most recent first — the
 * homepage preview, the Insights index, and the nav's "Recent" list all
 * read this array directly and in this order, so a new entry appears
 * everywhere automatically with no other file to touch).
 *
 * Only one optional extra step: add a matching "/insights/<slug>" entry to
 * ROUTE_META in src/lib/route-meta.js. Without it the live site still
 * shows the right title/description (RouteSEO.tsx falls back to this
 * article's own title/excerpt for any /insights/:slug path not listed
 * there), and Google still indexes it correctly since it executes JS —
 * the only thing you'd be missing is a fully-custom static HTML file for
 * non-JS social-preview scrapers (Facebook/X/Slack link unfurls), which
 * will otherwise preview using the generic /insights page's meta instead
 * of this specific article's until you add that entry.
 *
 * All three pieces currently below deal with real, current, publicly
 * documented events. Two of them (Bogoria-Baringo, Nepal) are written as
 * methodology explainers — GIOSPATIAL did not personally generate the
 * field measurements cited; they're drawn from named public sources
 * (government statements, ESA/Copernicus, USGS, NASA Earth Observatory)
 * and the piece explains the geospatial technique that would be used to
 * track them. The NBIS piece is different — that's GIOSPATIAL's own real,
 * working pilot, so it's written in first person as a progress dispatch,
 * not a third-person explainer. Do not blur this distinction when editing
 * or adding pieces: say plainly which category a new one falls into.
 *
 * On cover images: we don't have actual photography of most external
 * events we write about (e.g. no photo of Lake Bogoria/Baringo or the
 * Nepal flood site), so those are captioned generically (Rift Valley
 * landscape, satellite imagery) rather than implying event-specific
 * imagery we don't have. The NBIS piece uses the real demo poster since
 * that IS the actual platform. Follow the same honesty rule for new pieces.
 */
export const INSIGHTS: InsightArticle[] = [
  {
    slug: "bogoria-baringo-lake-merger",
    category: "Water & Basin Monitoring",
    title: "Tracking the Bogoria-Baringo Confluence",
    navLabel: "Bogoria-Baringo Confluence",
    date: "September 2026",
    readTime: "5 min read",
    cover: { src: riftValleyKenya, alt: "Kenya's Rift Valley landscape" },
    excerpt:
      "Kenya's Lake Baringo and Lake Bogoria have gone from 20 kilometres apart to under 3. Here's the change-detection methodology that tracks a slow-moving event like this from orbit.",
    body: [
      "Lake Baringo, a freshwater lake in Kenya's Rift Valley, has risen by an estimated 12-14 metres over the past 15 years, according to Kenya's Defence Principal Secretary Patrick Mariru, with roughly 2 billion cubic metres of additional water accumulating over that period. Its surface area has grown from about 108 km² to around 130 km². The lake now sits less than 3 kilometres from the neighbouring Lake Bogoria, a highly alkaline, saline lake historically separated from Baringo by more than 20 kilometres, according to reporting citing spatial environmental planner Prof. Simon Onywere.",
      "The concern, raised by Kenyan officials and researchers including scientists at Austria's BOKU University, is straightforward: Bogoria is alkaline, Baringo is fresh. If Bogoria reaches its natural spill point and overflows toward Baringo, the resulting mixing could threaten the fish populations Baringo's fishing communities depend on, along with drinking water and agriculture in the basin. The Kenyan government has been assessing interventions, including a possible irrigation diversion project, working with the Ministry of Irrigation and the Kenya Defence Forces.",
      "This is the kind of slow-moving, basin-scale event that satellite change detection is built for: nothing happens in a single dramatic frame, but the trend across years is unambiguous once you have the imagery to compare. The core technique is straightforward: pull a Sentinel-2 or Landsat scene for the area at intervals across the period of interest, calculate a water index (commonly NDWI, Normalised Difference Water Index, using green and near-infrared bands) for each scene, and threshold it to extract the water body's boundary as a polygon. Overlay that polygon across dates and the lake's expansion, or a shrinking gap between two lakes, becomes a measurable, mappable trend rather than an anecdote.",
      "For a merger scenario specifically, the useful output isn't just extent: it's the distance between the two water boundaries over time, and the elevation of the land between them relative to each lake's current level. That's where a digital elevation model earns its place alongside the optical imagery: it tells you not just how close the lakes are, but how much further either would need to rise before the gap actually closes.",
      "This is directly the same category of problem NBIS is built around at Lake Naivasha, one basin over in the same Rift Valley system: multi-temporal water-extent tracking, joined with basin context, to turn a slow environmental change into something a decision-maker can actually act on ahead of the point where it becomes a crisis.",
    ],
    sources: [
      { label: "People Daily: government statement on Baringo water levels", url: "https://peopledaily.digital/news/l-baringo-water-levels-threaten-ecological-disaster-as-govt-explores-irrigation-plan-to-prevent-merger-with-l-bogoria" },
      { label: "Nature Africa: rising Rift Valley lakes", url: "https://www.nature.com/articles/d44148-026-00078-z" },
      { label: "NASA Earth Observatory: Rising Waters on Kenya's Great Rift Valley Lakes", url: "https://science.nasa.gov/earth/earth-observatory/rising-waters-on-kenyas-great-rift-valley-lakes-147226/" },
      { label: "Daily Nation: distance between the lakes now under 3km", url: "https://nation.africa/kenya/counties/baringo/less-than-3-kilometres-inside-race-to-stop-lakes-bogoria-and-baringo-from-merging-5573262" },
    ],
  },
  {
    slug: "nepal-glacier-flood-mapping",
    category: "Disaster Response & Hazard Mapping",
    title: "Rapid Flood Mapping After the Nepal Glacier Collapse",
    navLabel: "Nepal Glacier Flood Mapping",
    date: "September 2026",
    readTime: "4 min read",
    cover: { src: satelliteSpace, alt: "Satellite Earth observation" },
    excerpt:
      "A glacier collapse triggered a flash flood that reshaped river valleys on the Nepal-China border in minutes. This is how satellite agencies turn imagery into a damage map within hours of an event like this.",
    body: [
      "On the morning of 26 August 2026, a section of glacier at Langtang Lirung, in Nepal's Langtang National Park, broke away and fell an estimated 1,200 metres, according to preliminary assessments from the USGS. The impact displaced the Lhende river, sending a flood of water, mud, and debris nearly 100km downstream through the Lhende, Bhotekoshi, and Trishuli river systems. Nepali officials reported the Trishuli river rose by as much as 9 metres in 30 minutes. Settlements including Syapru Besi and Timure in Rasuwa district were among the hardest hit; the flood also struck the Gyirong Port border crossing on the Tibet side.",
      "The European Space Agency's Copernicus Emergency Management Service activated its Rapid Mapping component for the event (activation EMSR927), producing damage assessments across four areas of interest. In the area around Syapru Besi alone, CEMS analysis identified more than 240 destroyed buildings and 32 damaged ones. Planet Labs and Vantor/European Space Imaging's WorldView-3 satellite also captured before-and-after imagery used by responders and journalists to assess the scale of destruction.",
      "This response illustrates the standard rapid-mapping workflow used across the disaster-response sector: a pre-event reference image (often already archived, since commercial and public satellites revisit most of the globe every few days), compared against a post-event acquisition tasked as soon as weather and satellite geometry allow. Optical imagery gives the clearest visual read when skies are clear, but flood and storm events frequently coincide with heavy cloud cover, which is where Synthetic Aperture Radar (SAR), from satellites like Sentinel-1, matters: SAR sees through cloud and captures usable imagery day or night, at the cost of being harder to interpret visually than an optical photo.",
      "From there, the mapping itself is largely a change-detection and classification problem: flag pixels where a river channel has widened, where a building footprint has disappeared, or where a road's expected geometry no longer matches what the new imagery shows. Organisations like Copernicus EMS and the Humanitarian OpenStreetMap Team (which Wikipedia's coverage of this event notes also mobilised to map affected buildings and roads) turn that pixel-level output into building- and road-level damage layers that responders can actually use for routing aid and locating people.",
      "It's a sharply different problem from the Bogoria-Baringo case above, hours matter here, not years, but the underlying discipline is the same one GIOSPATIAL applies to slower basin monitoring: get the right imagery, extract the right signal, and get it into a form a decision-maker can use before the situation has moved past the point where the information still helps.",
    ],
    sources: [
      { label: "ESA: Nepal flash flood imaged by satellites", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2/Nepal_flash_flood_imaged_by_satellites" },
      { label: "USGS: 2026 Nepal Debris Avalanche and Flash Flood", url: "https://www.usgs.gov/programs/landslide-hazards/science/2026-nepal-debris-avalanche-and-flash-flood" },
      { label: "EU Space Support Office: Copernicus EMS maps flood damage in northern Nepal", url: "https://eu-space.europa.eu/components/earth-observation-copernicus/image-of-the-day/copernicus-emergency-management-service-maps-flood-damages-northern-nepal" },
      { label: "Al Jazeera: satellite images show destruction from Nepal-Tibet floods", url: "https://www.aljazeera.com/news/2026/8/27/satellite-images-show-destruction-from-nepal-tibet-floods" },
    ],
  },
  {
    slug: "nbis-pilot-progress",
    category: "NBIS Progress",
    title: "Inside the NBIS Pilot: Where the Naivasha Platform Stands",
    navLabel: "NBIS Pilot Progress",
    date: "September 2026",
    readTime: "4 min read",
    cover: { src: nbisDemoPoster, alt: "The real NBIS pilot dashboard" },
    excerpt:
      "A working dashboard, real Sentinel-2 change detection, and outreach in progress with KMFRI and local restoration partners. Here's an honest status update on our flagship platform.",
    body: [
      "NBIS, the Naivasha Basin Intelligence System, started as an internal proof of capability, not a client commission. We built it to answer a specific question: could a small team put together a real, working geospatial monitoring platform for a real environmental problem, using entirely public data, before asking anyone to pay for it?",
      "The current pilot module tracks papyrus wetland restoration around Lake Naivasha. It combines multi-temporal Sentinel-2 imagery for papyrus cover change detection with a PostGIS spatial database, an interactive map built on the ArcGIS Maps SDK, and a Streamlit-based analytics dashboard covering restoration site tracking, fish-landing records, and water quality data in one place. It runs end to end today, on public satellite data.",
      "What it isn't yet is validated against real field data or in active use by a partner organisation. We've made initial outreach to the Kenya Marine and Fisheries Research Institute (KMFRI), the local restoration group NAOFO, WWF Kenya, and the Lake Naivasha Basin Landowners Association, none of that has converted into a formal partnership yet. Getting there is the explicit goal of the current phase of work, not something we're claiming has already happened.",
      "We applied to the ABIL EXPLORE programme, the Africa Business Innovation Lab, delivered by the European Space Agency in partnership with the Kenya Space Agency under the Africa-EU Space Partnership Programme, in August 2026, specifically to fund the next phase: validating the platform against real KMFRI field data, securing at least one active pilot partner, and defining a credible path to a production, multi-user deployment. That funding hasn't been confirmed; the application is under review.",
      "If it succeeds, NBIS's papyrus module becomes the first proof point for a broader basin-governance platform: the same spatial-intelligence pattern extended to riparian buffer compliance and basin-wide water permitting. If the funding doesn't come through, the platform still exists and still works; the roadmap just moves at the pace we can fund it ourselves.",
    ],
    sources: [],
  },
];

export const getInsightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);

/**
 * Fallback SEO meta for any "/insights/:slug" route not (yet) listed in
 * ROUTE_META (src/lib/route-meta.js) — see the "HOW TO ADD A NEW INSIGHT"
 * comment above. Returns undefined for non-insight paths or unknown slugs
 * so callers can fall through to their own default.
 */
export const getInsightRouteMeta = (pathname: string) => {
  const slug = pathname.match(/^\/insights\/([^/]+)$/)?.[1];
  if (!slug) return undefined;
  const article = getInsightBySlug(slug);
  if (!article) return undefined;
  return {
    title: `${article.title} · GIOSPATIAL Insights`,
    description: article.excerpt,
  };
};
