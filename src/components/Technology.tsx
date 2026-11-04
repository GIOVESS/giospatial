import { useRef, useState } from "react";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { C } from "@/content/site";
import { MEDIA } from "@/lib/media";

const E = C.engine;

/** The GIOSPATIAL engine: five-stage pipeline stepper, tech stack chips, and architecture tiers. */
const Technology = () => {
  const [i, setI] = useState(0);
  const bar = useRef<HTMLDivElement>(null);
  const s = E.steps[i];

  const pick = (k: number) => {
    setI(k);
    const node = bar.current?.children[k] as HTMLElement | undefined;
    if (node && bar.current) bar.current.scrollTo({ left: node.offsetLeft - (bar.current.clientWidth - node.offsetWidth) / 2, behavior: "smooth" });
  };
  const onKey = (e: React.KeyboardEvent, k: number) => {
    const d = ({ ArrowRight: 1, ArrowLeft: -1 } as Record<string, number>)[e.key];
    if (!d) return;
    e.preventDefault();
    const n = (k + d + E.steps.length) % E.steps.length;
    pick(n);
    (bar.current?.children[n] as HTMLElement | undefined)?.focus({ preventScroll: true });
  };

  return (
    <section className="sec" id="technology">
      <div className="wrap">
        <SectionHead title={E.h2} sub={E.p} center />
        <h3 style={{ textAlign: "center", fontSize: 22, marginBottom: 26 }} data-reveal>How Data Becomes a Decision</h3>
        <div className="pipe" data-reveal>
          <div className="pipe-n" role="tablist" aria-label="Pipeline stages" ref={bar}>
            {E.steps.map((st, k) => (
              <button key={st[0]} id={`pn${k}`} className={`pn${k < i ? " done" : ""}`} role="tab" aria-controls="pp" aria-selected={i === k} tabIndex={i === k ? 0 : -1} onClick={() => pick(k)} onKeyDown={(e) => onKey(e, k)}>
                <i>{String(k + 1).padStart(2, "0")}</i>{st[0]}
              </button>
            ))}
          </div>
          <div className="pipe-p" id="pp" role="tabpanel" aria-labelledby={`pn${i}`}>
            <div className="im"><img src={MEDIA[s[3]]} alt={s[0]} loading="lazy" decoding="async" /></div>
            <div className="tx">
              <span className="feat-n">STEP {String(i + 1).padStart(2, "0")} OF 05</span>
              <h3>{s[0]}</h3>
              <p style={{ fontSize: 16.5, marginBottom: 14 }}>{s[1]}</p>
              <ul className="ticks">{s[2].map((p) => <li key={p}><Icon name="check" />{p}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="stack">
          {E.stack.map((g) => (
            <div className="stk" key={g[0]} data-reveal>
              <h4>{g[0]}</h4>
              <div className="chips">{g[1].map((t) => <span className="chip" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="arch" data-reveal>
          <h3>Architecture tiers</h3>
          {E.tiers.map((t) => <div className="arch-r" key={t[0]}><b>{t[0]}</b><span>{t[1]}</span></div>)}
        </div>
      </div>
    </section>
  );
};

export default Technology;
