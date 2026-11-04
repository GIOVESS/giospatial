import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { C } from "@/content/site";
import { toPath } from "@/lib/routes";

const W = C.why;

const WhyUsCTA = () => (
  <section id="benefits">
    <div className="sec" style={{ paddingBottom: "clamp(56px,7vw,88px)" }}>
      <div className="wrap">
        <SectionHead title={W.h2} center />
        <div className="g3">
          {W.items.map((r) => <div className="card" key={r[1]} data-reveal><div className="ico-b"><Icon name={r[0]} /></div><h3>{r[1]}</h3><p>{r[2]}</p></div>)}
        </div>
      </div>
    </div>
    <div className="band">
      <div className="wrap">
        <div><h2 dangerouslySetInnerHTML={{ __html: W.cta[0] }} /><p>{W.cta[1]}</p></div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 32px", alignItems: "center" }}>
          <div className="ct">
            <a href="mailto:sales@giospatial.org"><Icon name="mail" /> sales@giospatial.org</a>
            <a href="tel:+254708187019"><Icon name="phone" /> +254 708 187 019</a>
          </div>
          <Link to="/#contact" className="btn btn-lime">Request a Demo <Icon name="arrow" /></Link>
        </div>
      </div>
    </div>
    <div className="ban">
      {W.banners.map((b) => (
        <Link key={b[0]} to={toPath(b[3])}><h3>{b[0]}</h3><p>{b[1]}</p><span>{b[2]} <Icon name="arrow" /></span></Link>
      ))}
    </div>
  </section>
);

export default WhyUsCTA;
