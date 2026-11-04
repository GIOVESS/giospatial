import { Link, useParams } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";
import BaringoDistanceChart from "@/components/BaringoDistanceChart";
import NotFound from "@/pages/NotFound";
import { getInsightBySlug, INSIGHTS } from "@/data/insights";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const a = slug ? getInsightBySlug(slug) : undefined;
  if (!a) return <NotFound />;
  const i = INSIGHTS.indexOf(a);
  const next = INSIGHTS[(i + 1) % INSIGHTS.length];

  return (
    <>
      <section className="pg-h">
        <Contour variant="A" />
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><Icon name="chevr" /><Link to="/insights">Insights</Link><Icon name="chevr" />
            <span aria-current="page" style={{ color: "var(--ink)" }}>{a.navLabel ?? a.title}</span>
          </nav>
          <div className="art-h">
            <small>{a.category}</small>
            <h1 style={{ marginTop: 14 }}>{a.title}</h1>
            <p className="mono" style={{ fontSize: 13, marginTop: 20 }}>{a.date} · {a.readTime}</p>
          </div>
        </div>
      </section>

      <article className="sec" style={{ paddingTop: "clamp(32px,5vw,56px)" }}>
        <div className="wrap">
          <div className="art-img" style={{ maxWidth: 980, marginInline: "auto" }}><img src={a.cover.src} alt={a.cover.alt} /></div>
          <div className="prose" style={{ marginInline: "auto" }}>
            {a.body.map((p, k) => <p key={k}>{p}</p>)}
            {a.slug === "bogoria-baringo-lake-merger" && <div style={{ marginTop: 32 }}><BaringoDistanceChart /></div>}
            {a.sources.length > 0 && (
              <div className="src">
                <h2>Sources</h2>
                <ul>
                  {a.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer"><Icon name="ext" style={{ marginTop: 6, fontSize: 14 }} /><span>{s.label}</span></a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>

      <section className="sec sec-alt" style={{ paddingBlock: 56 }}>
        <div className="wrap">
          <div className="sh-row" style={{ margin: 0 }}>
            <div><span className="mono" style={{ color: "var(--body)" }}>NEXT INSIGHT</span><h2 style={{ fontSize: 24, marginTop: 8, maxWidth: 640 }}>{next.title}</h2></div>
            <Link to={`/insights/${next.slug}`} className="btn btn-p">Read <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightArticle;
