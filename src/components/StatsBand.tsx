import { useEffect, useRef, useState } from "react";
import { C } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) { setN(value); return; }
    const el = ref.current!;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), d = 1100;
      const tick = (now: number) => {
        const t = Math.min((now - t0) / d, 1);
        setN(Math.round((t === 1 ? 1 : 1 - Math.pow(2, -10 * t)) * value));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, reduced]);

  return <b ref={ref}>{n}{suffix}</b>;
};

const StatsBand = () => (
  <section className="stats" aria-label="At a glance">
    <div className="wrap">
      {C.stats.map((s) => (
        <div className="stat" key={s.l} data-reveal><Counter value={s.v} suffix={s.s} /><span>{s.l}</span></div>
      ))}
    </div>
  </section>
);

export default StatsBand;
