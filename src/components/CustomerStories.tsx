import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { dashboardMockup as dashboardImg, gisMapDark as gisMapImg, africaMap as africaMapImg, dronesAgriculture as dronesImg, stockPhotos } from "@/assets/images";

const solarImg = stockPhotos.solarField;

const STORIES = [
  {
    org: "Lake Naivasha Basin Authority",
    image: dashboardImg,
    category: "Environmental Intelligence",
    headline: "Real-Time Basin Monitoring for a Ramsar-Designated Wetland",
    body: [
      "The Lake Naivasha catchment faces compounding pressure from intensive horticulture, rapid peri-urban expansion, and climate-driven water level variability. Manual compliance checks and static maps are no longer sufficient for an authority managing a Ramsar-designated wetland.",
      "This demo shows how NBIS could give the Basin Authority near-real-time Sentinel-1 SAR flood risk mapping, automated riparian buffer violation detection, and unified multi-source satellite dashboards — replacing a fragmented, reactive monitoring process.",
      "With this architecture in place, encroachment alert response times could drop by up to 70%, and hydrological modelling would inform water permit decisions at basin scale rather than relying on periodic field visits.",
    ],
  },
  {
    org: "Nairobi Metropolitan Services",
    image: gisMapImg,
    category: "Urban Intelligence",
    headline: "Mapping Urban Heat and Green Space Equity Across Nairobi",
    body: [
      "Nairobi's rapid expansion creates measurable urban heat islands and green space inequity, disproportionately affecting high-density informal settlements. City planners need a reproducible, data-driven baseline to prioritise infrastructure investment.",
      "This solution demonstrates how GIOSPATIAL could deploy Landsat 8/9 land surface temperature analysis combined with NDVI green equity mapping, delivering ward-level heat and vegetation scores aligned with county planning boundaries.",
      "The resulting spatial dataset could underpin Nairobi's urban greening strategy, with data shared through a PostGIS-backed public API accessible to planners, researchers, and residents.",
    ],
  },
  {
    org: "Kenya National Land Commission",
    image: africaMapImg,
    category: "Land Governance",
    headline: "Digitising Land Cover Change Across Kenya's Rift Valley Corridor",
    body: [
      "Kenya's Rift Valley corridor faces rapid peri-urban encroachment, contested agricultural boundaries, and inconsistent cadastral records. Land commissions need a reproducible, national-scale change detection capability that doesn't depend on manual field verification.",
      "This demo illustrates a multi-temporal land cover analysis engine built with GDAL, Sentinel-2 multispectral imagery, and PostGIS — generating automated alerts for encroachment on protected and conservancy land.",
      "Deployed operationally, the system would process bi-weekly satellite feeds and produce standardised GeoJSON change reports delivered to Commission officers via a secure REST API — turning months of manual review into hours.",
    ],
  },
  {
    org: "Eastern Africa Grain Council",
    image: dronesImg,
    category: "Food Security & Agriculture",
    headline: "Precision Crop Health Monitoring Across Smallholder Farms",
    body: [
      "Smallholder farmers across Kenya face pest pressure, drought stress, and yield variability without access to early-warning systems. Grain councils and agricultural bodies need a scalable, low-cost advisory platform that reaches farmers before losses occur.",
      "This solution shows how GIOSPATIAL could build a Sentinel-2 NDVI crop health monitoring system with fall armyworm early detection (YOLOv8 computer vision) and automated SMS alerts delivered directly to registered farmers.",
      "In a deployment scenario, this architecture could drive up to a 28% improvement in early pest response rates, scaling from an initial pilot across three counties to full national coverage during long-rain seasons.",
    ],
  },
  {
    org: "KenGen Renewable Energy",
    image: solarImg,
    category: "Infrastructure & Energy",
    headline: "GIS-Powered Site Suitability Modelling for Solar Expansion",
    body: [
      "Kenya's renewable energy ambitions require rapid identification of viable solar and wind development sites, balancing GHI potential, terrain, transmission proximity, and land tenure constraints — a process that traditionally takes months of field survey.",
      "This demo shows a multi-layer site suitability scoring model using GHI irradiance data, DEM slope analysis, KETRACO grid proximity buffers, and protected area exclusions — built entirely with GeoPandas and PostGIS.",
      "Applied to Northern Kenya's grid expansion corridor, this approach could identify high-viability sites within 48 hours of data ingestion — compressing what field teams typically complete in 3–4 months into a single automated pipeline.",
    ],
  },
];

const CustomerStories = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const tabScrollRef = useRef<HTMLDivElement>(null);

  const switchTo = (idx: number) => {
    if (idx === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 200);
  };

  const scrollTabs = (dir: "left" | "right") => {
    const c = tabScrollRef.current;
    if (c) c.scrollBy({ left: dir === "left" ? -160 : 160, behavior: "smooth" });
  };

  const story = STORIES[activeIdx];

  return (
    <section id="stories" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#265B01", borderColor: "rgba(38,91,1,0.25)", background: "rgba(38,91,1,0.06)" }}
          >
            Demo Solutions
          </span>
          <h2
            className="font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            What We Can Build For You
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Illustrative solutions tailored to real Kenyan organisations and the spatial
            challenges they face — showing exactly what GIOSPATIAL would build.
          </p>
        </div>

        {/* Tab row with arrows */}
        <div className="flex items-center gap-2 mb-8" data-reveal data-delay="1">
          <button
            onClick={() => scrollTabs("left")}
            className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-foreground/40 hover:border-[#265B01] hover:text-[#265B01] transition-colors"
          >
            <ChevronLeft size={15} />
          </button>

          <div
            ref={tabScrollRef}
            className="no-scrollbar flex gap-1 overflow-x-auto"
            style={{ flex: 1 }}
          >
            {STORIES.map((s, i) => (
              <button
                key={s.org}
                onClick={() => switchTo(i)}
                className="shrink-0 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors relative"
                style={{
                  color: activeIdx === i ? "#141B44" : "#909090",
                  background: "transparent",
                  borderBottom: activeIdx === i ? "3px solid #265B01" : "3px solid transparent",
                }}
              >
                {s.org}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-foreground/40 hover:border-[#265B01] hover:text-[#265B01] transition-colors"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Story panel */}
        <div
          className="grid lg:grid-cols-9 gap-0 rounded-xl overflow-hidden border border-black/[0.08] tab-fade"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.2s ease" }}
        >
          {/* Image */}
          <div className="lg:col-span-4 relative" style={{ minHeight: 360 }}>
            <img
              src={story.image}
              alt={story.org}
              className="w-full h-full object-cover"
              style={{ minHeight: 360 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f7f7f5]/80 hidden lg:block" />
          </div>

          {/* Story content */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center" style={{ background: "#f7f7f5" }}>
            <div className="flex items-center gap-2 mb-3">
              <p
                className="font-bold uppercase tracking-[0.15em]"
                style={{ fontSize: 11, color: "#265B01" }}
              >
                {story.category}
              </p>
              <span
                className="font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded"
                style={{ fontSize: 9, color: "#141B44", background: "rgba(20,27,68,0.08)", border: "1px solid rgba(20,27,68,0.12)" }}
              >
                Demo
              </span>
            </div>
            <h3
              className="font-bold text-foreground mb-5 leading-snug"
              style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
            >
              {story.headline}
            </h3>
            <div className="space-y-3">
              {story.body.map((para, i) => (
                <p key={i} style={{ color: "#5a5a5a", fontSize: 14.5, lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#265B01] hover:underline group w-fit"
            >
              Build this for your organisation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
