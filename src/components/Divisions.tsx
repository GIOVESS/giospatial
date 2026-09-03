import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { analyticsDashboardPhoto, neuralNetworkAi, dataCenterServers, gisTrainingWorkshop, droneAgricultureKenya } from "@/assets/images";

/**
 * Rebuilt as Saylo's image-forward card pattern (photo, category tag,
 * title, "Read More"-style arrow link, dark hover overlay) — replacing
 * the previous icon-top flat cards. Images match each division's own
 * page hero (see src/pages/divisions/*.tsx) so the visual identity is
 * consistent between the homepage teaser and the division page itself.
 */
const DIVISIONS = [
  {
    tag: "Analytics",
    title: "Giospatial Analytics",
    description: "Spatial analysis and data visualization for organisations that need to see patterns in geospatial data, not just store it.",
    image: analyticsDashboardPhoto,
    path: "/divisions/analytics",
  },
  {
    tag: "GeoAI",
    title: "Giospatial AI Lab",
    description: "Machine learning for geospatial intelligence: predictive modelling and automated feature extraction from satellite imagery.",
    image: neuralNetworkAi,
    path: "/divisions/ai-lab",
  },
  {
    tag: "Platforms",
    title: "Giospatial Platforms",
    description: "Cloud-based SaaS platforms including Giospatial Earth Monitor and Giospatial Cloud for real-time Earth observation.",
    image: dataCenterServers,
    path: "/divisions/platforms",
  },
  {
    tag: "Consulting",
    title: "Consulting & Training",
    description: "Consulting and training in GIS, remote sensing, and spatial data science for organisations and individual professionals.",
    image: gisTrainingWorkshop,
    path: "/divisions/consulting",
  },
  {
    tag: "Impact",
    title: "Giospatial Impact",
    description: "Applying geospatial technology to environmental conservation and social projects across Kenya, often at reduced or no cost.",
    image: droneAgricultureKenya,
    path: "/divisions/impact",
  },
];

const Divisions = () => {
  const navigate = useNavigate();

  return (
    <section id="divisions" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14" data-reveal>
          <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
            Our Services
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            Five service areas, each with its own technical focus, delivered as consulting
            engagements or ongoing platform work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIVISIONS.map((d, i) => (
            <button
              key={d.title}
              onClick={() => navigate(d.path)}
              className="group text-left rounded-xl overflow-hidden relative"
              style={{ boxShadow: "0 8px 28px rgba(20,27,68,0.10)" }}
              data-reveal
              data-delay={String(Math.min(i + 1, 5))}
            >
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span
                  className="absolute top-4 left-4 font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{ fontSize: 10, background: "rgba(38,91,1,0.9)", color: "#fff", letterSpacing: "0.08em" }}
                >
                  {d.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-white" style={{ fontSize: 18 }}>{d.title}</h3>
                </div>
              </div>
              <div className="p-5" style={{ background: "#ffffff" }}>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.65, marginBottom: 14 }}>
                  {d.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#265B01] group-hover:gap-2.5 transition-all">
                  Read More
                  <ArrowRight size={14} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
