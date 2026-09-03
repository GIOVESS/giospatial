import { useParams, useNavigate, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import { getInsightBySlug, INSIGHTS } from "@/data/insights";
import BaringoDistanceChart from "@/components/BaringoDistanceChart";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getInsightBySlug(slug) : undefined;

  // No 404 page redirect needed here — App.tsx's catch-all route already
  // handles genuinely unmatched paths. This only triggers if someone hits
  // /insights/<real-path-but-wrong-slug>, which shouldn't happen via any
  // link on the site, but fail safely rather than crash on undefined.
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center" style={{ paddingTop: 96 }}>
          <div className="text-center px-6">
            <p className="text-foreground/60 mb-4">That insight couldn't be found.</p>
            <Link to="/insights" className="font-semibold" style={{ color: "#265B01" }}>
              Back to Insights
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const img = article.cover;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div style={{ paddingTop: 96, background: "#f7f7f5" }}>
        <div className="max-w-[760px] mx-auto px-6 py-3">
          <PageBreadcrumbs trail={[{ label: "Insights", path: "/insights" }, { label: article.title }]} />
        </div>
      </div>

      <article style={{ padding: "48px 0 96px" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <span
            className="block font-bold uppercase tracking-wider mb-3"
            style={{ fontSize: 11, color: "#265B01", letterSpacing: "0.08em" }}
          >
            {article.category} · {article.date} · {article.readTime}
          </span>
          <h1 className="font-bold text-foreground mb-8 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            {article.title}
          </h1>

          <div className="rounded-xl overflow-hidden mb-10">
            <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" decoding="async" />
          </div>

          <div className="space-y-5">
            {article.body.map((para, i) => (
              <p key={i} style={{ color: "#333", fontSize: 16, lineHeight: 1.85 }}>
                {para}
              </p>
            ))}
          </div>

          {article.slug === "bogoria-baringo-lake-merger" && (
            <div className="mt-8">
              <BaringoDistanceChart />
            </div>
          )}

          {article.sources.length > 0 && (
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              <p className="font-bold uppercase tracking-widest text-foreground/35 mb-4" style={{ fontSize: 11 }}>
                Sources
              </p>
              <ul className="space-y-2">
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 hover:underline"
                      style={{ color: "#265B01", fontSize: 13.5 }}
                    >
                      {s.label}
                      <ExternalLink size={12} className="mt-0.5 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => navigate("/insights")}
            className="inline-flex items-center gap-1.5 mt-12 font-semibold"
            style={{ color: "#265B01", fontSize: 14 }}
          >
            <ArrowLeft size={14} />
            Back to Insights
          </button>
        </div>
      </article>

      {/* More insights */}
      <section style={{ background: "#f7f7f5", padding: "64px 0" }}>
        <div className="max-w-[900px] mx-auto px-6">
          <p className="font-bold uppercase tracking-widest text-foreground/40 mb-6" style={{ fontSize: 11 }}>
            More Insights
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {INSIGHTS.filter((a) => a.slug !== article.slug).slice(0, 2).map((a) => (
              <button
                key={a.slug}
                onClick={() => navigate(`/insights/${a.slug}`)}
                className="text-left group"
              >
                <span className="block font-bold uppercase tracking-wider mb-1.5" style={{ fontSize: 10.5, color: "#265B01" }}>
                  {a.category}
                </span>
                <h3 className="font-bold text-foreground group-hover:underline" style={{ fontSize: 15 }}>
                  {a.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightArticle;
