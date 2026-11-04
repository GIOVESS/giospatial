import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { DIVISIONS } from "@/content/site";
import { MEDIA } from "@/lib/media";

/** Numbered index of the five service areas. On wide screens a sticky preview follows hover and focus. */
const Divisions = () => {
  const [i, setI] = useState(0);
  const d = DIVISIONS[i];
  return (
    <section className="sec sec-alt" id="divisions">
      <div className="wrap">
        <SectionHead
          title="Our Services"
          sub="Five service areas, each with its own technical focus, delivered as consulting engagements or ongoing platform work."
        />
        <div className="idx-w">
          <nav className="idx" aria-label="Services">
            {DIVISIONS.map((x, k) => (
              <Link
                key={x.slug}
                to={`/divisions/${x.slug}`}
                data-reveal
                onMouseEnter={() => setI(k)}
                onFocus={() => setI(k)}
              >
                <span className="n">{String(k + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{x.title}</h3>
                  <p>{x.desc}</p>
                  <div className="chips">{x.items.slice(0, 3).map((it) => <span className="chip" key={it[0]}>{it[0]}</span>)}</div>
                </div>
                <Icon name="arrow" className="ar" />
                <span className="t"><img src={MEDIA[x.img]} alt="" loading="lazy" decoding="async" /></span>
              </Link>
            ))}
          </nav>
          <div className="idx-p" aria-hidden="true">
            <img src={MEDIA[d.img]} alt="" />
            <span>{d.tag}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
