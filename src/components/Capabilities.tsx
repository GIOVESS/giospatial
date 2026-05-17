import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dashboardImg from "@/assets/dashboard-mockup.jpg";
import africaMapImg from "@/assets/africa-map.jpg";
import dronesImg from "@/assets/drones-agriculture.jpg";
import gisMapImg from "@/assets/gis-map-dark.jpg";

// Replaced generic images with relevant Unsplash photos
const IMG_DATA_ARCH = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop";
const IMG_EARTH_OBS = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop";
const IMG_GEOAI     = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop";

const CAPS = [
  { image: dashboardImg,  title: "Basin Intelligence Dashboards",  desc: "Unified environmental, hydrological, and agricultural data in a single decision layer — near-real-time, API-backed." },
  { image: africaMapImg,  title: "Continental Coverage Mapping",   desc: "Multi-resolution satellite basemaps across Africa's diverse terrain, from dense rainforest to arid savanna." },
  { image: IMG_DATA_ARCH, title: "Spatial Data Architecture",      desc: "PostGIS-powered spatial databases with REST API exposure — designed for enterprise-scale reads and writes." },
  { image: dronesImg,     title: "Precision Field Analytics",      desc: "Drone and satellite fusion for centimetre-resolution crop, infrastructure, and land cover assessment." },
  { image: IMG_EARTH_OBS, title: "Earth Observation Network",      desc: "Multi-source satellite ingestion: Sentinel-1 SAR, Sentinel-2 MSI, Landsat 8/9, Planet API — normalised and ready." },
  { image: IMG_GEOAI,     title: "GeoAI & Machine Learning",       desc: "NDVI analysis, change detection, YOLOv8 object classification, and Random Forest spatial modelling at scale." },
  { image: gisMapImg,     title: "Enterprise GIS Integration",     desc: "Seamless interoperability with QGIS, ArcGIS, GDAL, and Mapbox GL — open standards, no lock-in." },
];

const Capabilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const c = scrollRef.current;
    if (!c) return;
    const card = c.querySelector<HTMLElement>(".cap-card");
    const w = card ? card.offsetWidth + 20 : 340;
    c.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="capabilities" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
          >
            What We Build
          </span>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            Platform Capabilities
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Every layer of the geospatial stack — engineered and owned by GIOSPATIAL.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between mb-5" data-reveal data-delay="1">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00a0e3] hover:text-[#00a0e3] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00a0e3] hover:text-[#00a0e3] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={17} />
            </button>
          </div>
          <span style={{ fontSize: 12, color: "#4a4a4a" }}>{CAPS.length} capabilities</span>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-5 overflow-x-auto pb-2 active:cursor-grabbing"
          style={{ cursor: "grab" }}
        >
          {CAPS.map((cap) => (
            <div
              key={cap.title}
              className="cap-card shrink-0 rounded-xl overflow-hidden border border-white/[0.07] hover:border-[#00a0e3]/35 transition-all duration-300 group hover:-translate-y-1"
              style={{
                width: 300,
                background: "#111111",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,160,227,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-semibold text-white mb-2 leading-snug" style={{ fontSize: 15 }}>
                  {cap.title}
                </h3>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.65 }}>
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
