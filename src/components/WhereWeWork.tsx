import { useEffect, useRef, useState } from "react";
import Globe from "@/components/Globe";

/**
 * Standalone section for the globe rather than folding it into Hero —
 * Hero already carries the video background; stacking two heavy
 * interactive elements in one section fights for attention and roughly
 * doubles the page weight of a single fold. This keeps it modular.
 *
 * The globe's lazy chunk (react-globe.gl + three.js) is genuinely heavy —
 * 719KB gzipped, confirmed via a real production build. Since this
 * section renders unconditionally near the top of the homepage, mounting
 * <Globe> immediately would start that download on every homepage visit
 * regardless of whether the visitor scrolls this far. Gating the mount on
 * IntersectionObserver means the download only starts once the section is
 * actually about to be seen.
 */
const WhereWeWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadGlobe, setShouldLoadGlobe] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadGlobe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading slightly before it's on screen
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#ffffff", padding: "80px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>
              Based in Nairobi. Working across the Rift Valley.
            </h2>
            <p style={{ color: "#5a5a5a", fontSize: 15.5, lineHeight: 1.75, maxWidth: 460 }}>
              GIOSPATIAL is headquartered in Nairobi, with the NBIS pilot actively running at
              Lake Naivasha, one basin over from the Bogoria-Baringo system covered in our
              Insights. Same team, same Rift Valley, real coordinates.
            </p>
          </div>
          <div className="flex justify-center" data-reveal data-delay="1">
            {shouldLoadGlobe ? (
              <Globe />
            ) : (
              <div className="rounded-full" style={{ width: 360, height: 360, maxWidth: "100%", aspectRatio: "1/1", background: "rgba(38,91,1,0.05)" }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;
