import { useRef } from "react";
import { ChevronLeft, ChevronRight, Droplets, Building2, Sprout, Zap, Map, Trees, Satellite, ShieldCheck, TrendingUp, HeartPulse, Package, Thermometer } from "lucide-react";

const CARDS = [
  { icon: Droplets, title: "Water Resource Management", desc: "Basin-scale hydrological monitoring, flood risk mapping, and groundwater abstraction tracking with near-real-time satellite feeds." },
  { icon: Building2, title: "Urban Planning & Growth Analytics", desc: "Track informal settlement expansion, heat islands, and green space equity across African cities using multispectral imagery." },
  { icon: Sprout, title: "Precision Agriculture", desc: "Sentinel-2 NDVI crop health scoring, yield forecasting, and SMS-based alerts for smallholder and commercial farms." },
  { icon: Map, title: "Environmental Impact Assessment", desc: "Automated pre/post-development land cover analysis, riparian buffer compliance checks, and encroachment detection." },
  { icon: Satellite, title: "Disaster Risk & Flood Mapping", desc: "ML-powered submerged zone prediction using Sentinel-1 SAR, with 24-hour alert pipelines via PostGIS and Redis." },
  { icon: Zap, title: "Infrastructure Site Selection", desc: "Multi-layer GIS suitability scoring for energy, healthcare, and logistics facilities across complex terrain." },
  { icon: Trees, title: "Wildlife & Biodiversity Tracking", desc: "Random Forest conflict probability mapping and invasive species monitoring for conservation agencies and NGOs." },
  { icon: TrendingUp, title: "Energy Grid Planning", desc: "Solar and wind suitability modelling using GHI data, DEM slope analysis, and KETRACO grid proximity layers." },
  { icon: ShieldCheck, title: "Real Estate Risk Scoring", desc: "Property-level flood risk, riparian buffer, and soil stability scoring exposed via public-facing REST APIs." },
  { icon: Thermometer, title: "Climate Change Adaptation", desc: "Long-term land cover change detection, drought index tracking, and hydrological shift modelling for planning bodies." },
  { icon: HeartPulse, title: "Public Health Logistics", desc: "Flood-resilient routing for medical supply chains using pgRouting and PostGIS in rural last-mile networks." },
  { icon: Package, title: "Supply Chain Optimisation", desc: "Spatial demand forecasting and distribution route optimisation across fragmented African logistics corridors." },
];

const UseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const c = scrollRef.current;
    if (!c) return;
    const card = c.querySelector<HTMLElement>(".uc-card");
    const w = card ? card.offsetWidth + 24 : 340;
    c.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="sectors" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#265B01", borderColor: "rgba(38,91,1,0.25)", background: "rgba(38,91,1,0.06)" }}
          >
            Solutions
          </span>
          <h2
            className="font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            Use Cases
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            End-to-end geospatial architecture deployed across Africa's most pressing
            enterprise and public-sector challenges.
          </p>
        </div>

        {/* Carousel controls row */}
        <div className="flex items-center justify-between mb-6" data-reveal data-delay="1">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-foreground/50 hover:border-[#265B01] hover:text-[#265B01] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-foreground/50 hover:border-[#265B01] hover:text-[#265B01] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={17} />
            </button>
          </div>
          <span style={{ fontSize: 12, color: "#5a5a5a" }}>{CARDS.length} use cases</span>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-2 active:cursor-grabbing"
          style={{ cursor: "grab" }}
        >
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="uc-card group shrink-0 rounded-lg border border-black/[0.08] hover:border-[#265B01]/50 transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: 280,
                  padding: "24px 24px 28px",
                  background: "#f7f7f5",
                  boxShadow: "0 0 0 0 rgba(38,91,1,0)",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(38,91,1,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(38,91,1,0)";
                }}
                data-reveal
                data-delay={String(Math.min(i % 4 + 1, 5))}
              >
                <Icon
                  size={40}
                  className="mb-5 transition-colors duration-200 text-foreground/30 group-hover:text-[#265B01]"
                  strokeWidth={1.25}
                />
                <h3
                  className="font-bold text-foreground mb-2 leading-snug group-hover:text-foreground"
                  style={{ fontSize: 17 }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.65 }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
