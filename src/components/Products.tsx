import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";
import NbisMedia from "@/components/NbisMedia";
import { C } from "@/content/site";

/** Homepage NBIS section: capability tabs beside the pilot dashboard recording. */
const Products = () => {
  const [i, setI] = useState(0);
  const caps = C.nbis.caps;
  const onKey = (e: React.KeyboardEvent, k: number) => {
    const d = ({ ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 } as Record<string, number>)[e.key];
    if (!d) return;
    e.preventDefault();
    const n = (k + d + caps.length) % caps.length;
    setI(n);
    document.getElementById(`nt${n}`)?.focus();
  };
  return (
    <section className="sec sec-alt" id="products">
      <Contour variant="A" />
      <div className="wrap">
        <div className="grid2">
          <div data-reveal>
            <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>{C.nbis.h2}</h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.75 }}>{C.nbis.p}</p>
            <div className="nb-tabs" role="tablist" aria-label="NBIS capabilities">
              {caps.map((c, k) => (
                <button key={c[1]} id={`nt${k}`} className="nb-tab" role="tab" aria-selected={i === k} aria-controls="nbd" tabIndex={i === k ? 0 : -1} onClick={() => setI(k)} onKeyDown={(e) => onKey(e, k)}>
                  <Icon name={c[0]} />{c[1]}
                </button>
              ))}
            </div>
            <p className="nb-desc" id="nbd" role="tabpanel" aria-labelledby={`nt${i}`}>{caps[i][2]}</p>
            <div style={{ marginTop: 22 }}><Link to="/nbis" className="btn btn-lime">Explore NBIS <Icon name="arrow" /></Link></div>
          </div>
          <div data-reveal>
            <div className="browser">
              <div className="browser-top"><i /><i /><i /><span>NBIS pilot dashboard · Lake Naivasha</span></div>
              <NbisMedia />
              <div className="browser-cap"><b>Pilot Project</b>Real screen recording, Lake Naivasha</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
