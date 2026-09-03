import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

/**
 * Numbers-strip pattern borrowed from Saylo's home page, upgraded after
 * comparing against Kaistrum (a competitor site) to animate the count from
 * 0 on scroll-into-view rather than rendering static — the one piece of
 * their UI worth adopting with no honesty risk, since it's presentation of
 * numbers already shown elsewhere on this page, not a new claim.
 *
 * Deliberately takes real, verifiable values only (registration facts,
 * stack counts) — see the earlier cleanup pass in this project where
 * fabricated stats ("20+ orgs", "340K+ hectares") were removed sitewide.
 * Do not add invented figures here.
 */

// Splits "12+" into { prefix: "", number: 12, suffix: "+" } so the numeric
// part can animate while symbols/text around it stay fixed.
const parseValue = (value: string) => {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: "", number: null, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const AnimatedStat = ({ value, label, delay }: Stat & { delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    if (number === null) return; // nothing numeric to animate (shouldn't happen given current data)

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${suffix}`);

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now() + delay;

        const tick = (now: number) => {
          const elapsed = now - start;
          if (elapsed < 0) {
            requestAnimationFrame(tick);
            return;
          }
          const t = Math.min(elapsed / duration, 1);
          const current = Math.round(easeOutExpo(t) * number);
          setDisplay(`${prefix}${current}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="font-bold text-white tabular-nums" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
        {display}
      </div>
      <div className="text-white/50 mt-1" style={{ fontSize: 12.5 }}>{label}</div>
    </div>
  );
};

const StatsCounter = ({ stats }: { stats: Stat[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((s, i) => (
      <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 120} />
    ))}
  </div>
);

export default StatsCounter;
