import {
  Droplets, Shield, Activity, LayoutGrid, Database, Satellite, CheckCircle2, ArrowRight,
} from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const capabilities = [
  {
    icon: Droplets,
    title: "Water Resource Management",
    description:
      "Basin-scale hydrological monitoring with dynamic flood risk mapping via Sentinel-1 SAR imagery, groundwater abstraction tracking, and lake level trend analysis.",
  },
  {
    icon: Shield,
    title: "Environmental Compliance",
    description:
      "Automated riparian buffer violation detection, Ramsar wetland boundary monitoring, and encroachment alerts to support regulatory enforcement.",
  },
  {
    icon: Activity,
    title: "Risk Mitigation",
    description:
      "ML-powered submerged zone prediction, real-time deforestation alerts via pixel-level change detection, and 24-hour PostGIS-backed notification pipeline.",
  },
  {
    icon: LayoutGrid,
    title: "Land Use Governance",
    description:
      "Multi-temporal land cover change analysis, horticulture and floriculture expansion tracking, and peri-urban settlement growth monitoring.",
  },
];

const archFeatures = [
  "CRS & coordinate system configuration",
  "Buffer geometries & hydrological thresholds",
  "Climate input source adapters",
  "Rapid redeployment to new basins",
];

const dataSources = [
  { label: "Sentinel-1 SAR" },
  { label: "Sentinel-2 Multispectral" },
  { label: "PostGIS" },
  { label: "GDAL / Fiona / Shapely" },
  { label: "Climate Reanalysis" },
  { label: "Digital Elevation Model" },
  { label: "Python / Flask" },
  { label: "Redis" },
];

const Products = () => {
  return (
    <section id="products" style={{ background: "#0a0a0a", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
          >
            Flagship Platform
          </span>
          <h2
            className="font-bold text-white mb-2 leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Naivasha Basin Intelligence System
          </h2>
          <p
            className="font-mono font-semibold mb-8"
            style={{ fontSize: 13, color: "#00a0e3", letterSpacing: "0.2em" }}
          >
            NBIS
          </p>
          <p style={{ color: "#7a7a7a", fontSize: 16, lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>
            A basin-scale geospatial decision-support platform that transforms fragmented
            environmental, hydrological, and agricultural data into actionable intelligence
            for water resource management, environmental compliance, risk mitigation, and
            land use governance across the Lake Naivasha catchment.
          </p>
        </div>

        {/* Context banner */}
        <div
          className="rounded-lg border-l-4 p-6 mb-12 flex items-start gap-4"
          style={{ borderLeftColor: "#00a0e3", background: "rgba(0,160,227,0.05)", border: "1px solid rgba(0,160,227,0.15)", borderLeftWidth: 4 }}
          data-reveal
          data-delay="1"
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: "rgba(0,160,227,0.12)" }}
          >
            <Satellite size={18} className="text-[#00a0e3]" />
          </div>
          <div>
            <p className="font-semibold text-white mb-1.5" style={{ fontSize: 14 }}>
              Ramsar-Designated Wetland · Lake Naivasha, Kenya's Rift Valley
            </p>
            <p style={{ color: "#7a7a7a", fontSize: 14, lineHeight: 1.75 }}>
              Lake Naivasha faces compounding pressures from intensive horticulture and
              floriculture, rapid peri-urban settlement expansion, groundwater
              over-abstraction, and climate variability. NBIS addresses these gaps by integrating
              multi-source satellite imagery, climate reanalysis datasets, terrain models,
              and ground-truth observations into a unified analytical framework with
              near-real-time processing capability.
            </p>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="rounded-lg p-6 border border-white/[0.07] hover:border-[#00a0e3]/30 transition-colors group"
                style={{ background: "#111111" }}
                data-reveal
                data-delay={String(Math.min(i + 1, 5))}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#00a0e3]/15 transition-colors"
                    style={{ background: "rgba(0,160,227,0.08)", border: "1px solid rgba(0,160,227,0.12)" }}
                  >
                    <Icon size={19} className="text-[#00a0e3]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1.5" style={{ fontSize: 15 }}>
                      {cap.title}
                    </h3>
                    <p style={{ color: "#7a7a7a", fontSize: 13.5, lineHeight: 1.7 }}>
                      {cap.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture + data sources */}
        <div className="grid lg:grid-cols-2 gap-5 mb-12" data-reveal data-delay="1">
          <div
            className="rounded-lg p-6 border border-white/[0.07]"
            style={{ background: "rgba(0,160,227,0.04)", borderColor: "rgba(0,160,227,0.12)" }}
          >
            <h3 className="font-bold text-white mb-3 flex items-center gap-2" style={{ fontSize: 15 }}>
              <Database size={15} className="text-[#00a0e3]" />
              Basin-Agnostic Architecture
            </h3>
            <p style={{ color: "#7a7a7a", fontSize: 13.5, lineHeight: 1.7, marginBottom: 20 }}>
              Configuration-driven deployment parameters enable rapid adaptation to other
              East African lake basins and river catchments without core engine modification.
            </p>
            <div className="space-y-2.5">
              {archFeatures.map((item) => (
                <div key={item} className="flex items-center gap-2.5" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)" }}>
                  <CheckCircle2 size={13} className="text-[#00a0e3] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg p-6 border border-white/[0.07]" style={{ background: "#111111" }}>
            <h3 className="font-bold text-white mb-3 flex items-center gap-2" style={{ fontSize: 15 }}>
              <Activity size={15} className="text-[#00a0e3]" />
              Integrated Data Sources
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {dataSources.map((pill) => (
                <span
                  key={pill.label}
                  className="text-xs px-2.5 py-1 rounded border"
                  style={{ background: "rgba(0,160,227,0.06)", borderColor: "rgba(0,160,227,0.2)", color: "rgba(255,255,255,0.7)" }}
                >
                  {pill.label}
                </span>
              ))}
            </div>
            <p
              className="font-mono"
              style={{ fontSize: 11, color: "#7a7a7a", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 12 }}
            >
              Secure · Scalable · Enterprise-Grade · PostGIS · Redis · Docker · GitHub Actions CI/CD
            </p>
          </div>
        </div>

        {/* Dashboard image */}
        <div className="rounded-xl overflow-hidden border border-white/[0.07]" data-reveal data-delay="2">
          <div className="relative group">
            <img
              src={dashboardMockup}
              alt="NBIS Dashboard"
              className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent flex items-end">
              <div className="p-8 flex items-end justify-between w-full flex-wrap gap-4">
                <div>
                  <span
                    className="inline-block font-bold mb-3 px-2.5 py-1 rounded"
                    style={{ fontSize: 11, background: "#00a0e3", color: "#fff", letterSpacing: "0.08em" }}
                  >
                    Near Real-Time
                  </span>
                  <h4 className="font-bold text-white mb-1" style={{ fontSize: 22 }}>
                    Basin-Scale Intelligence at Your Command
                  </h4>
                  <p style={{ color: "#7a7a7a", fontSize: 14 }}>
                    Unified environmental, hydrological, and agricultural data for proactive decision-making
                  </p>
                </div>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded border border-white/20 text-white text-sm font-medium hover:border-[#00a0e3] hover:text-[#00a0e3] transition-colors"
                >
                  Request Demo <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
