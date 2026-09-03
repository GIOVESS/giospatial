import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageHeroBand from "@/components/PageHeroBand";
import { INSIGHTS } from "@/data/insights";

const Insights = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div style={{ paddingTop: 96, background: "#f7f7f5" }}>
        <div className="max-w-[900px] mx-auto px-6 py-3">
          <PageBreadcrumbs trail={[{ label: "Insights" }]} />
        </div>
      </div>

      <PageHeroBand
        eyebrow="Insights"
        title="Real analysis, applied to what's actually happening"
        subtitle="Methodology explainers grounded in current geospatial events: how the technique works, using a real situation as the example."
      />

      <section style={{ padding: "72px 0 96px" }}>
        <div className="max-w-[900px] mx-auto px-6 space-y-10">
          {INSIGHTS.map((article) => {
            const img = article.cover;
            return (
              <button
                key={article.slug}
                onClick={() => navigate(`/insights/${article.slug}`)}
                className="group grid md:grid-cols-5 gap-6 text-left items-center w-full"
                data-reveal
              >
                <div className="md:col-span-2 rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-3">
                  <span
                    className="block font-bold uppercase tracking-wider mb-2"
                    style={{ fontSize: 11, color: "#265B01", letterSpacing: "0.08em" }}
                  >
                    {article.category} · {article.date} · {article.readTime}
                  </span>
                  <h2 className="font-bold text-foreground mb-2" style={{ fontSize: 22 }}>
                    {article.title}
                  </h2>
                  <p style={{ color: "#5a5a5a", fontSize: 14.5, lineHeight: 1.7 }}>
                    {article.excerpt}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
