import { KeyboardEvent, PointerEvent, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { lakeNaivashaSatellite2010, lakeNaivashaSatellite2026 } from "@/assets/images";

/**
 * 2010 / 2026 Lake Naivasha imagery with a draggable divider.
 * Pointer drag anywhere on the image, or arrow keys / Home / End on the handle.
 */
const CompareSlider = ({ className = "" }: { className?: string }) => {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const drag = useRef(false);

  const at = (x: number) => {
    const r = box.current!.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100)));
  };
  const down = (e: PointerEvent<HTMLDivElement>) => { drag.current = true; e.currentTarget.setPointerCapture(e.pointerId); at(e.clientX); };
  const move = (e: PointerEvent<HTMLDivElement>) => { if (drag.current) at(e.clientX); };
  const up = () => { drag.current = false; };
  const key = (e: KeyboardEvent<HTMLDivElement>) => {
    const next = { ArrowLeft: pos - 5, ArrowRight: pos + 5, Home: 0, End: 100 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setPos(Math.max(0, Math.min(100, next)));
  };

  return (
    <div
      ref={box}
      className={`cmp ${className}`}
      style={{ ["--pos" as string]: `${pos}%` }}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
    >
      <img src={lakeNaivashaSatellite2026} alt="Satellite view of Lake Naivasha in 2026" loading="lazy" decoding="async" />
      <div className="b"><img src={lakeNaivashaSatellite2010} alt="Satellite view of Lake Naivasha in 2010" loading="lazy" decoding="async" /></div>
      <span className="tag l">2010</span>
      <span className="tag r">2026</span>
      <i className="crn tl" /><i className="crn tr" /><i className="crn bl" /><i className="crn br" />
      <div className="hd" role="slider" tabIndex={0} aria-label="Compare 2010 and 2026 imagery" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)} onKeyDown={key}>
        <span><Icon name="chev" style={{ transform: "rotate(90deg)", marginRight: -4 }} /><Icon name="chev" style={{ transform: "rotate(-90deg)", marginLeft: -4 }} /></span>
      </div>
    </div>
  );
};

export default CompareSlider;
