import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";
import DotGlobe from "@/components/DotGlobe";
import { C } from "@/content/site";

const Hero = () => (
  <section className="hero" id="home" aria-labelledby="h1">
    <Contour variant="A" drift />
    <div className="wrap">
      <div className="hero-in">
        <div>
          <h1 id="h1" data-reveal>{C.hero.h1}</h1>
          <p className="lead" data-reveal>{C.hero.lead}</p>
          <div className="cta" data-reveal>
            <Link to="/#contact" className="btn btn-lime">Request a Demo <Icon name="arrow" /></Link>
            <Link to="/nbis" className="btn btn-ow">See NBIS Platform <Icon name="arrow" /></Link>
          </div>
          <div className="coords" data-reveal>
            <span>HQ <b>1.29° S, 36.82° E</b></span>
            <span>NBIS pilot <b>Lake Naivasha</b></span>
            <span>Founded <b>2025</b></span>
          </div>
        </div>
        <div data-reveal><DotGlobe /></div>
      </div>
    </div>
    <div className="strip" aria-hidden="true">
      <div className="strip-t">
        {[0, 1].map((k) => C.marquee.map((m) => <span key={`${k}-${m}`}>{m}</span>))}
      </div>
    </div>
  </section>
);

export default Hero;
