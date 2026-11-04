import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import CompareSlider from "@/components/CompareSlider";
import { C } from "@/content/site";
import { toPath } from "@/lib/routes";

const B = C.about;

/** About: positioning statement, mission and vision, 2010/2026 imagery, pain points and engagement types. */
const Positioning = () => (
  <section className="sec sec-alt" id="about">
    <div className="wrap">
      <div className="grid2 w">
        <div data-reveal>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>{B.h2}</h2>
          <div style={{ marginTop: 20, display: "grid", gap: 14, fontSize: 17 }}><p>{B.p1}</p><p>{B.p2}</p></div>
          <div className="mv">
            <div><b>Mission</b><p>{B.mission}</p></div>
            <div><b>Vision</b><p>{B.vision}</p></div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px" }}>
            <Link to="/nbis" className="lnk">Explore NBIS platform <Icon name="arrow" /></Link>
            <Link to="/#technology" className="lnk">See our technology stack <Icon name="arrow" /></Link>
          </div>
        </div>
        <div data-reveal>
          <CompareSlider className="lt" />
          <p className="cap">{B.cap}</p>
        </div>
      </div>
      <div className="pains">
        {B.pains.map((p) => (
          <div className="card" key={p[1]} data-reveal><div className="ico-b"><Icon name={p[0]} /></div><h3>{p[1]}</h3><p>{p[2]}</p></div>
        ))}
      </div>
      <div className="eng">
        {B.cards.map((c) => (
          <Link to={toPath(c[3])} className="card" key={c[0]} data-reveal>
            <h3>{c[0]}</h3><p>{c[1]}</p>
            <ul>{c[2].map((x) => <li key={x}><Icon name="arrow" />{x}</li>)}</ul>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Positioning;
