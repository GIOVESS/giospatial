import { Link } from "react-router-dom";
import {
  Droplets, Shield, Activity, LayoutGrid, Database, Satellite, CheckCircle2, ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageHeroBand from "@/components/PageHeroBand";
import StatsCounter from "@/components/StatsCounter";
import { nbisDemoPoster, farmFieldAerial, reservoirDamAerial, earthNightLights } from "@/assets/images";

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

const SECTORS = [
  "Water Resource Management", "Urban Planning & Growth", "Precision Agriculture",
  "Environmental Impact Assessment", "Disaster Risk & Flood Mapping", "Infrastructure Site Selection",
  "Wildlife & Biodiversity Tracking", "Energy Grid Planning", "Real Estate Risk Scoring",
  "Climate Change Adaptation", "Public Health Logistics", "Supply Chain Optimisation",
];

const NBIS = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div style={{ paddingTop: 96, background: "#f7f7f5" }}>
        <div className="max-w-[900px] mx-auto px-6 py-3">
          <PageBreadcrumbs trail={[{ label: "NBIS" }]} />
        </div>
      </div>

      <PageHeroBand
        eyebrow="Flagship Platform"
        title="Naivasha Basin Intelligence System"
        subtitle="A basin-scale geospatial decision-support platform, actively piloted at Lake Naivasha and designed to extend to other Kenyan basins."
      />

      <section style={{ background: "#ffffff", padding: "72px 0 96px" }}>
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Context banner — no eyebrow pill above it, heading in
              PageHeroBand already carries that weight. */}
          <div
            className="rounded-lg p-6 mb-12 flex items-start gap-4"
            style={{ background: "rgba(38,91,1,0.05)", border: "1px solid rgba(38,91,1,0.15)" }}
            data-reveal
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "rgba(38,91,1,0.12)" }}
            >
              <Satellite size={18} className="text-[#265B01]" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1.5" style={{ fontSize: 14 }}>
                Ramsar-Designated Wetland · Lake Naivasha, Kenya's Rift Valley
              </p>
              <p style={{ color: "#5a5a5a", fontSize: 14, lineHeight: 1.75 }}>
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
                  className="rounded-lg p-6 border border-black/[0.07] hover:border-[#265B01]/30 transition-colors group"
                  style={{ background: "#f7f7f5" }}
                  data-reveal
                  data-delay={String(Math.min(i + 1, 5))}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#265B01]/15 transition-colors"
                      style={{ background: "rgba(38,91,1,0.08)", border: "1px solid rgba(38,91,1,0.12)" }}
                    >
                      <Icon size={19} className="text-[#265B01]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1.5" style={{ fontSize: 15 }}>
                        {cap.title}
                      </h3>
                      <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.7 }}>
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture + data sources */}
          <div className="grid lg:grid-cols-2 gap-5 mb-12" data-reveal>
            <div
              className="rounded-lg p-6 border border-black/[0.07]"
              style={{ background: "rgba(38,91,1,0.04)", borderColor: "rgba(38,91,1,0.12)" }}
            >
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2" style={{ fontSize: 15 }}>
                <Database size={15} className="text-[#265B01]" />
                Basin-Agnostic Architecture
              </h3>
              <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.7, marginBottom: 20 }}>
                Configuration-driven deployment parameters enable rapid adaptation to other
                Kenyan lake basins and river catchments without core engine modification.
              </p>
              <div className="space-y-2.5">
                {archFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-2.5" style={{ fontSize: 13.5, color: "rgba(20,27,68,0.8)" }}>
                    <CheckCircle2 size={13} className="text-[#265B01] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg p-6 border border-black/[0.07]" style={{ background: "#f7f7f5" }}>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2" style={{ fontSize: 15 }}>
                <Activity size={15} className="text-[#265B01]" />
                Integrated Data Sources
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {dataSources.map((pill) => (
                  <span
                    key={pill.label}
                    className="text-xs px-2.5 py-1 rounded border"
                    style={{ background: "rgba(38,91,1,0.06)", borderColor: "rgba(38,91,1,0.2)", color: "rgba(20,27,68,0.75)" }}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
              <p
                className="font-mono"
                style={{ fontSize: 11, color: "#5a5a5a", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 12 }}
              >
                Secure · Scalable · Enterprise-Grade · PostGIS · Redis · Docker · GitHub Actions CI/CD
              </p>
            </div>
          </div>

          {/* Sectors in practice — the 3 photos below were sourced and
              compressed for this purpose but sat unused until this pass;
              tied to genuinely named sectors from the tag list above,
              not decorative filler. */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12" data-reveal>
            {[
              { image: farmFieldAerial, label: "Precision Agriculture" },
              { image: reservoirDamAerial, label: "Water Resource Management" },
              { image: earthNightLights, label: "Earth Observation" },
            ].map((s) => (
              <div key={s.label} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={s.image} alt={s.label} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-white font-semibold" style={{ fontSize: 12.5 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Sectors */}
          <div className="mb-12" data-reveal>
            <p className="font-bold uppercase tracking-widest text-foreground/35 mb-4 text-center" style={{ fontSize: 11 }}>
              Built for sectors across Kenya
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{ background: "rgba(38,91,1,0.04)", borderColor: "rgba(38,91,1,0.15)", color: "rgba(20,27,68,0.7)" }}
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          {/* Real demo — Esri's case-study pattern: label, headline, one
              sentence, then the actual recording rendered inline as a native
              <video>, not a poster image gating a lightbox. The browser's
              own controls (play button included) handle playback, so there's
              no custom overlay that can end up looking unplayable. */}
          <div data-reveal>
            <span
              className="inline-block font-bold uppercase tracking-wider mb-2"
              style={{ fontSize: 11, color: "#265B01", letterSpacing: "0.08em" }}
            >
              Pilot Project
            </span>
            <h4 className="font-bold text-foreground mb-1" style={{ fontSize: 22 }}>
              The Working NBIS Pilot Dashboard
            </h4>
            <p style={{ color: "#5a5a5a", fontSize: 14, marginBottom: 16 }}>
              A real screen recording of the Lake Naivasha papyrus restoration platform, in active development.
            </p>
            <video
              className="w-full h-auto block rounded-xl overflow-hidden"
              controls
              preload="metadata"
              poster={nbisDemoPoster}
            >
              <source src="/videos/nbis-demo.mp4" type="video/mp4" />
              Your browser doesn't support embedded video.
              <a href="/videos/nbis-demo.mp4">Download the demo instead</a>.
            </video>
          </div>

          <div
            className="rounded-xl mt-6 py-8 px-6"
            style={{ background: "linear-gradient(135deg, #141B44 0%, #1a2456 100%)" }}
            data-reveal
          >
            <StatsCounter
              stats={[
                { value: "5", label: "Specialised Divisions" },
                { value: "12+", label: "Sectors Served" },
                { value: "8", label: "Core Technology Stacks" },
                { value: "2025", label: "Founded in Nairobi" },
              ]}
            />
          </div>

          <div className="text-center mt-14" data-reveal>
            <Link
              to="/insights/nbis-pilot-progress"
              className="inline-flex items-center gap-1.5 font-semibold"
              style={{ color: "#265B01", fontSize: 14 }}
            >
              Read the pilot progress dispatch
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NBIS;
