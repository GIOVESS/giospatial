import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";
import PageHeader from "@/components/PageHeader";
import StatsBand from "@/components/StatsBand";
import NbisMedia from "@/components/NbisMedia";
import { C } from "@/content/site";
import { MEDIA } from "@/lib/media";

const N = C.nbis;

const NBIS = () => (
  <>
    <PageHeader crumbs={[{ label: "NBIS" }]} title={N.h2} intro={N.sub}>
      <Link to="/nbis#demo" className="btn btn-lime">Watch the demo <Icon name="arrow" /></Link>
      <Link to="/#contact" className="btn btn-ow">Request a Demo <Icon name="arrow" /></Link>
    </PageHeader>

    <section className="sec">
      <div className="wrap">
        <div className="ctx" data-reveal><b>{N.ctxTag}</b><p>{N.ctx}</p></div>
        <div className="g2" style={{ marginTop: 24 }}>
          {N.caps.map((c) => (
            <div className="card" key={c[1]} data-reveal style={{ display: "flex", gap: 18 }}>
              <div className="ico-b" style={{ margin: 0 }}><Icon name={c[0]} /></div>
              <div><h3>{c[1]}</h3><p>{c[2]}</p></div>
            </div>
          ))}
        </div>

        <div className="grid2" style={{ marginTop: "clamp(40px,6vw,72px)", alignItems: "start" }}>
          <div data-reveal>
            <h2 style={{ fontSize: 28, marginBottom: 12 }}>{N.arch[0]}</h2>
            <p style={{ fontSize: 16.5 }}>{N.arch[1]}</p>
            <ul className="ticks" style={{ marginTop: 14 }}>{N.arch[2].map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
          </div>
          <div data-reveal>
            <h2 style={{ fontSize: 28, marginBottom: 16 }}>Integrated Data Sources</h2>
            <div className="chips">{N.data.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
            <p className="mono" style={{ marginTop: 18, lineHeight: 1.8 }}>{N.stackLine}</p>
          </div>
        </div>

        <div className="tiles" style={{ marginTop: "clamp(40px,6vw,72px)" }}>
          {N.tiles.map((t) => (
            <div className="tile" key={t[1]} data-reveal><img src={MEDIA[t[0]]} alt={t[1]} loading="lazy" decoding="async" /><span>{t[1]}</span></div>
          ))}
        </div>

        <div id="sectors" style={{ marginTop: "clamp(40px,6vw,72px)" }} data-reveal>
          <h2 style={{ fontSize: 28, marginBottom: 18 }}>Built for sectors across Kenya</h2>
          <div className="sectors">{N.sectors.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="sec sec-alt" id="demo" style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <Contour variant="A" />
      <div className="wrap" style={{ maxWidth: 980 }}>
        <div data-reveal>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)" }}>{N.demoH}</h2>
          <p style={{ margin: "12px 0 26px", fontSize: 17 }}>{N.demoP}</p>
          <div className="browser">
            <div className="browser-top"><i /><i /><i /><span>NBIS pilot dashboard · Lake Naivasha</span></div>
            <NbisMedia full />
            <div className="browser-cap"><b>Pilot Project</b>Full screen recording of the working Lake Naivasha dashboard.</div>
          </div>
          <div style={{ marginTop: 26 }}><Link to="/insights/nbis-pilot-progress" className="btn btn-lime">Read the pilot progress dispatch <Icon name="arrow" /></Link></div>
        </div>
      </div>
    </section>
    <StatsBand />
  </>
);

export default NBIS;
