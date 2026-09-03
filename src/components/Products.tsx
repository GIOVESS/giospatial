import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Shield, Activity, LayoutGrid } from "lucide-react";
import { nbisDemoPoster } from "@/assets/images";

const capabilities = [
  { icon: Droplets, title: "Water Resource Management" },
  { icon: Shield, title: "Environmental Compliance" },
  { icon: Activity, title: "Risk Mitigation" },
  { icon: LayoutGrid, title: "Land Use Governance" },
];

/**
 * Homepage teaser only — full deep-dive (capability descriptions,
 * architecture, data sources, sector list, video, stats) moved to its own
 * page: src/pages/NBIS.tsx. This existed as a full-length section here
 * before the site restructured to lead with Services + Insights, with NBIS
 * as its own dedicated flagship section rather than filling most of the
 * homepage.
 */
const Products = () => {
  return (
    <section id="products" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div data-reveal>
            <p
              className="font-mono font-semibold mb-3"
              style={{ fontSize: 12, color: "#265B01", letterSpacing: "0.2em" }}
            >
              NBIS
            </p>
            <h2 className="font-bold text-foreground mb-4 leading-tight" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Naivasha Basin Intelligence System
            </h2>
            <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
              Our flagship platform, a basin-scale geospatial decision-support system, actively
              piloted at Lake Naivasha, pulling water, environmental, and agricultural data into
              one place for water resource management, compliance, and risk mitigation.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-[#265B01] shrink-0" />
                    <span style={{ fontSize: 13.5, color: "rgba(20,27,68,0.8)" }}>{cap.title}</span>
                  </div>
                );
              })}
            </div>

            <Link
              to="/nbis"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-full transition-colors"
            >
              Explore NBIS
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative rounded-xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(20,27,68,0.15)" }} data-reveal data-delay="1">
            <img src={nbisDemoPoster} alt="NBIS pilot dashboard" className="w-full h-auto" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span
                className="inline-block font-bold uppercase tracking-wider mb-1"
                style={{ fontSize: 10, color: "#9bc97a", letterSpacing: "0.08em" }}
              >
                Pilot Project
              </span>
              <p className="text-white font-semibold" style={{ fontSize: 14 }}>
                Real screen recording, Lake Naivasha
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
