import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";
import { KENYA_MAP as MAP } from "@/content/geo";
import { C } from "@/content/site";

type PlaceKey = "nairobi" | "naivasha" | "bogoria";

const mid = (a: number[], b: number[]) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const PINS: Record<PlaceKey, { p: number[]; t: string; hud: string; dx: number; end?: boolean }> = {
  nairobi: { p: MAP.pins.nairobi, t: "Nairobi", hud: "Nairobi, Kenya · 1.29° S, 36.82° E", dx: 24 },
  naivasha: { p: MAP.pins.naivasha, t: "Lake Naivasha", hud: "Lake Naivasha · 0.77° S, 36.35° E (approx.)", dx: -24, end: true },
  bogoria: { p: mid(MAP.pins.baringo, MAP.pins.bogoria), t: "Bogoria-Baringo", hud: "Bogoria-Baringo · 0.45° N, 36.08° E (approx.)", dx: -24, end: true },
};

const PLACES: { key: PlaceKey; title: string; tag: string; text: string; cta: string; to: string }[] = [
  { key: "nairobi", title: "Nairobi, Kenya", tag: "Headquarters", text: "Naivasha Road, Uthiru, Westlands.", cta: "Contact the team", to: "/#contact" },
  { key: "naivasha", title: "Lake Naivasha", tag: "NBIS pilot", text: "The NBIS pilot is actively running here.", cta: "Explore NBIS", to: "/nbis" },
  { key: "bogoria", title: "Bogoria-Baringo", tag: "Covered in Insights", text: "One basin over from the Naivasha pilot.", cta: "Read the article", to: "/insights/bogoria-baringo-lake-merger" },
];

/** Flat Kenya map: Nairobi HQ, the Naivasha pilot and Bogoria-Baringo. Pins and cards are linked. */
const WhereWeWork = () => {
  const [sel, setSel] = useState<PlaceKey>("naivasha");
  const labels = Object.entries(MAP.labels).filter(([name]) => name !== "Uganda");

  return (
    <section className="sec mapsec" id="where">
      <Contour variant="B" />
      <div className="wrap">
        <div className="grid2 w">
          <div data-reveal>
            <h2 style={{ fontSize: "clamp(30px,4vw,46px)" }}>{C.where.h2}</h2>
            <p style={{ marginTop: 18, fontSize: 17, maxWidth: 480 }}>{C.where.p}</p>
            <div className="places" role="group" aria-label="Locations">
              {PLACES.map((p) => (
                <div key={p.key} className={`place${sel === p.key ? " on" : ""}`} data-pl={p.key}>
                  <button type="button" className="pl-b" aria-pressed={sel === p.key} onClick={() => setSel(p.key)}>
                    <b><i />{p.title} <span style={{ fontWeight: 500, color: "var(--body)", fontSize: 14 }}>{p.tag}</span></b>
                    <p>{p.text}</p>
                  </button>
                  <Link to={p.to} className="lnk">{p.cta} <Icon name="arrow" /></Link>
                </div>
              ))}
            </div>
          </div>
          <div className="kmap" data-reveal>
            <svg viewBox={`0 0 ${MAP.W} ${MAP.H}`} role="img" aria-label="Map of Kenya showing Nairobi, Lake Naivasha and the Bogoria-Baringo lakes">
              <rect className="sea" width={MAP.W} height={MAP.H} />
              <path className="grat" d={MAP.grat} />
              {MAP.countries.map((c) => <path key={c.id} className={c.id === 404 ? "ken" : "land"} d={c.d} />)}
              {labels.map(([name, [x, y]]) => <text key={name} className="cl" x={x} y={y} textAnchor="middle">{name}</text>)}
              <path className="rift" d={`M${PINS.bogoria.p.join(" ")} L${PINS.naivasha.p.join(" ")} L${PINS.nairobi.p.join(" ")}`} />
              {(Object.keys(PINS) as PlaceKey[]).map((k) => {
                const o = PINS[k];
                return (
                  <g
                    key={k}
                    className={`pin${sel === k ? " on" : ""}`}
                    tabIndex={0}
                    role="button"
                    aria-label={o.t}
                    aria-pressed={sel === k}
                    onClick={() => setSel(k)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(k); } }}
                  >
                    <circle className="ring" cx={o.p[0]} cy={o.p[1]} r={14} />
                    <circle className="dot" cx={o.p[0]} cy={o.p[1]} r={13} />
                    <text className="lab" x={o.p[0] + o.dx} y={o.p[1] + 8} textAnchor={o.end ? "end" : "start"}>{o.t}</text>
                  </g>
                );
              })}
            </svg>
            <div className="kmap-hud" id="kmap-hud">{PINS[sel].hud}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;
