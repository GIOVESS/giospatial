import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import dashboardImg from "@/assets/dashboard-mockup.jpg";
import gisMapImg from "@/assets/gis-map-dark.jpg";
import africaMapImg from "@/assets/africa-map.jpg";
import dronesImg from "@/assets/drones-agriculture.jpg";

// Solar/renewable energy field — relevant for KenGen story (Unsplash)
const solarImg = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop";

const STORIES = [
  {
    org: "Lake Naivasha Basin Authority",
    image: dashboardImg,
    category: "Environmental Intelligence",
    headline: "Real-Time Basin Monitoring for a Ramsar-Designated Wetland",
    body: [
      "The Lake Naivasha catchment faces compounding pressure from intensive horticulture, rapid peri-urban expansion, and climate-driven water level variability. Manual compliance checks and static maps were no longer sufficient.",
      "Using NBIS, the Basin Authority gained near-real-time Sentinel-1 SAR flood risk mapping, automated riparian buffer violation detection, and unified multi-source satellite dashboards — replacing a fragmented, reactive monitoring process.",
      "Within six months of deployment, encroachment alert response times dropped by 70%, and hydrological modelling now informs water permit decisions at basin scale.",
    ],
  },
  {
    org: "Nairobi Metropolitan Services",
    image: gisMapImg,
    category: "Urban Intelligence",
    headline: "Mapping Urban Heat and Green Space Equity Across Nairobi",
    body: [
      "Nairobi's rapid expansion creates measurable urban heat islands and green space inequity, disproportionately affecting high-density informal settlements. City planners needed a data-driven baseline for infrastructure investment.",
      "GIOSPATIAL deployed Landsat 8/9 land surface temperature analysis combined with NDVI green equity mapping, delivering ward-level heat and vegetation scores aligned with county planning boundaries.",
      "The results now underpin Nairobi's 2026–2030 urban greening strategy, with spatial data shared openly through a PostGIS-backed public API.",
    ],
  },
  {
    org: "Kenya National Land Commission",
    image: africaMapImg,
    category: "Land Governance",
    headline: "Digitising Land Cover Change Across Kenya's Rift Valley Corridor",
    body: [
      "Kenya's Rift Valley corridor faces rapid peri-urban encroachment, contested agricultural boundaries, and inconsistent cadastral records. The Commission required a reproducible, national-scale change detection capability.",
      "GIOSPATIAL delivered a multi-temporal land cover analysis engine using GDAL, Sentinel-2 multispectral imagery, and PostGIS — with automated alerts for encroachment on protected and conservancy land.",
      "The system now processes bi-weekly satellite feeds, producing standardised GeoJSON change reports delivered to Commission officers via a secure REST API.",
    ],
  },
  {
    org: "Eastern Africa Grain Council",
    image: dronesImg,
    category: "Food Security & Agriculture",
    headline: "Precision Crop Health Monitoring Across Smallholder Farms",
    body: [
      "Smallholder farmers across East Africa face pest pressure, drought stress, and yield variability without access to early-warning systems. The Council sought a scalable, low-cost advisory platform.",
      "GIOSPATIAL built a Sentinel-2 NDVI crop health monitoring system with fall armyworm early detection (YOLOv8 computer vision) and automated SMS alerts delivered to registered farmers.",
      "Pilot results across three counties showed a 28% improvement in early pest response rates, with the platform scaling to cover 14 counties in the 2025 long-rain season.",
    ],
  },
  {
    org: "KenGen Renewable Energy",
    image: solarImg,
    category: "Infrastructure & Energy",
    headline: "GIS-Powered Site Suitability Modelling for Solar Expansion",
    body: [
      "Kenya's renewable energy ambitions require rapid identification of viable solar and wind development sites, balancing GHI potential, terrain, transmission proximity, and land tenure constraints.",
      "GIOSPATIAL developed a multi-layer site suitability scoring model using GHI irradiance data, DEM slope analysis, KETRACO grid proximity buffers, and protected area exclusions via GeoPandas and PostGIS.",
      "The model identified 23 high-viability sites in Northern Kenya within 48 hours of data ingestion — work that previously took field teams 3–4 months to complete manually.",
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
    <section id="stories" style={{ background: "#111111", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
          >
            Success Stories
          </span>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            Customer Stories
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Real organisations across Africa using GIOSPATIAL's platform to make
            faster, better-informed spatial decisions.{" "}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[#00a0e3] hover:underline"
            >
              Share your story
            </button>
          </p>
        </div>

        {/* Tab row with arrows */}
        <div className="flex items-center gap-2 mb-8" data-reveal data-delay="1">
          <button
            onClick={() => scrollTabs("left")}
            className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00a0e3] hover:text-[#00a0e3] transition-colors"
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
                  color: activeIdx === i ? "#ffffff" : "#a0a0a0",
                  background: "transparent",
                  borderBottom: activeIdx === i ? "3px solid #00a0e3" : "3px solid transparent",
                }}
              >
                {s.org}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00a0e3] hover:text-[#00a0e3] transition-colors"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Story panel */}
        <div
          className="grid lg:grid-cols-9 gap-0 rounded-xl overflow-hidden border border-white/[0.08] tab-fade"
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/60 hidden lg:block" />
          </div>

          {/* Story content */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center" style={{ background: "#0a0a0a" }}>
            <p
              className="font-bold uppercase tracking-[0.15em] mb-3"
              style={{ fontSize: 11, color: "#00a0e3" }}
            >
              {story.category}
            </p>
            <h3
              className="font-bold text-white mb-5 leading-snug"
              style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
            >
              {story.headline}
            </h3>
            <div className="space-y-3">
              {story.body.map((para, i) => (
                <p key={i} style={{ color: "#7a7a7a", fontSize: 14.5, lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#00a0e3] hover:underline group w-fit"
            >
              Request a similar solution
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
