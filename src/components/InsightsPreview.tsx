import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

/**
 * Esri's "Trending insights" pattern (esri.com homepage, checked directly
 * Sept 2026): photo, small caps category label, headline, one link. No
 * eyebrow/kicker above the section heading — craft-floor.md bans that
 * pattern outright, the heading carries its own weight.
 */
const InsightsPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="insights" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4" data-reveal>
          <div>
            <h2 className="font-bold text-foreground mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Insights
            </h2>
            <p style={{ color: "#5a5a5a", fontSize: 16, maxWidth: 520 }}>
              Real analysis of current geospatial events: how the methodology works, applied to what's actually happening.
            </p>
          </div>
          <button
            onClick={() => navigate("/insights")}
            className="inline-flex items-center gap-1.5 font-semibold shrink-0"
            style={{ color: "#265B01", fontSize: 14 }}
          >
            All insights
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INSIGHTS.map((article, i) => {
            const img = article.cover;
            return (
              <button
                key={article.slug}
                onClick={() => navigate(`/insights/${article.slug}`)}
                className="group text-left"
                data-reveal
                data-delay={String(i + 1)}
              >
                <div className="rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span
                  className="block font-bold uppercase tracking-wider mb-2"
                  style={{ fontSize: 11, color: "#265B01", letterSpacing: "0.08em" }}
                >
                  {article.category}
                </span>
                <h3 className="font-bold text-foreground mb-2 leading-snug" style={{ fontSize: 17 }}>
                  {article.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.6 }}>
                  {article.excerpt}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
