import { Link, useParams } from "react-router-dom";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import CtaBand from "@/components/CtaBand";
import NotFound from "@/pages/NotFound";
import { DIVISIONS } from "@/content/site";

const Cards = ({ items }: { items: [string, string][] }) => (
  <div className="g3">
    {items.map((x, i) => (
      <div className="card" key={x[0]} data-reveal>
        <span className="feat-n">{String(i + 1).padStart(2, "0")}</span>
        <h3>{x[0]}</h3>
        <p>{x[1]}</p>
      </div>
    ))}
  </div>
);

/**
 * One template for all five divisions (/divisions/:slug). The copy for each
 * lives in DIVISIONS in src/content/site.ts. Add a division by adding an entry
 * there and a matching ROUTE_META entry in src/lib/route-meta.js.
 */
const Division = () => {
  const { slug } = useParams<{ slug: string }>();
  const i = DIVISIONS.findIndex((d) => d.slug === slug);
  if (i < 0) return <NotFound />;
  const d = DIVISIONS[i];
  const next = DIVISIONS[(i + 1) % DIVISIONS.length];

  return (
    <>
      <PageHeader crumbs={[{ label: "Services", to: "/services" }, { label: d.title }]} title={d.title} intro={d.sub}>
        <Link to="/#contact" className="btn btn-lime">{d.hero} <Icon name="arrow" /></Link>
      </PageHeader>

      <section className="sec">
        <div className="wrap">
          {d.lead && <div className="prose" data-reveal style={{ marginBottom: "clamp(36px,5vw,56px)" }}><p style={{ fontSize: 19, color: "var(--ink)" }}>{d.lead}</p></div>}

          {d.plat && (
            <>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", marginBottom: 22 }} data-reveal>{d.secH}</h2>
              <div className="g2" style={{ marginBottom: "clamp(40px,6vw,64px)" }}>
                {d.plat.map((x, k) => (
                  <div className="card" key={x[0]} data-reveal><div className="ico-b"><Icon name={k ? "database" : "layers"} /></div><h3>{x[0]}</h3><p>{x[1]}</p></div>
                ))}
              </div>
            </>
          )}

          {d.plat ? <SectionHead title="Platform Features" /> : <SectionHead title={d.secH} sub={d.slug === "impact" ? d.extra?.[1] : d.sec} />}
          <Cards items={d.items} />

          {d.train && (
            <>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", margin: "clamp(44px,6vw,72px) 0 22px" }} data-reveal>Training Areas</h2>
              <div className="g2" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
                {d.train.map((x) => (
                  <div className="card" key={x[0]} data-reveal><div className="ico-b"><Icon name="compass" /></div><h3>{x[0]}</h3><p>{x[1]}</p></div>
                ))}
              </div>
              <div style={{ marginTop: 32 }}><Link to="/#contact" className="btn btn-p">{d.trainBtn} <Icon name="arrow" /></Link></div>
            </>
          )}
        </div>
      </section>

      {d.cta && <CtaBand title={d.cta[0]} text={d.cta[1]} button={d.cta[2]} />}

      <section className="sec" style={{ paddingBlock: 48 }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12 }}>
          <Link to="/services" className="lnk"><Icon name="arrow" style={{ transform: "rotate(180deg)" }} /> All services</Link>
          <Link to={`/divisions/${next.slug}`} className="lnk">Next: {next.title} <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  );
};

export default Division;
