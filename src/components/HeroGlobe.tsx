import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { earthNightGlobe } from "@/assets/images";

// Shares its chunk with Globe.tsx (same dynamic import target), so a visitor
// who reaches WhereWeWork later doesn't pay for react-globe.gl twice.
const ReactGlobe = lazy(() => import("react-globe.gl"));

const NAIROBI = { lat: -1.2744, lng: 36.7029 };
const NAIVASHA = { lat: -0.7833, lng: 36.3667 };

const POINTS = [
  { lat: NAIROBI.lat, lng: NAIROBI.lng, size: 0.45, color: "#9bc97a" },
  { lat: NAIVASHA.lat, lng: NAIVASHA.lng, size: 0.32, color: "#9bc97a" },
];

/**
 * Purely decorative globe bled off the right edge of the Hero, behind the
 * headline. Two things keep it from fighting the "pages take time to load"
 * fix: it mounts only after the browser is idle (well after the hero video
 * and first paint), and it reuses the same react-globe.gl chunk WhereWeWork
 * already lazy-loads, so this never adds a second copy to the download.
 * `mix-blend-mode: screen` is why the night-lights texture was picked over
 * the daylight one — it lets the globe's black ocean disappear into the
 * hero's dark gradient and only the city-light glow read on top of it.
 */
const HeroGlobe = () => {
  const globeRef = useRef<{ controls: () => { autoRotate: boolean; autoRotateSpeed: number } } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const [ready, setReady] = useState(false);
  const [allowMotion, setAllowMotion] = useState(true);
  const [size, setSize] = useState(560);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const idle = "requestIdleCallback" in window
      ? window.requestIdleCallback(() => setShouldMount(true), { timeout: 3000 })
      : window.setTimeout(() => setShouldMount(true), 1200);
    return () => {
      "requestIdleCallback" in window
        ? window.cancelIdleCallback(idle as number)
        : window.clearTimeout(idle as number);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      setSize(Math.min(Math.max(containerRef.current.offsetWidth, 360), 640));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const controls = globeRef.current?.controls();
    if (!controls) return;
    controls.autoRotate = allowMotion;
    controls.autoRotateSpeed = 0.4;
  }, [ready, allowMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute hidden lg:block"
      style={{
        top: "50%",
        right: "-8%",
        width: 640,
        height: 640,
        transform: "translateY(-46%)",
        mixBlendMode: "screen",
        opacity: shouldMount ? 0.85 : 0,
        transition: "opacity 1.2s ease",
        filter: "brightness(1.15)",
      }}
    >
      {shouldMount && (
        <Suspense fallback={null}>
          <ReactGlobe
            // @ts-expect-error — react-globe.gl's ref type isn't exported cleanly for TS consumers
            ref={globeRef}
            width={size}
            height={size}
            globeImageUrl={earthNightGlobe}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere
            atmosphereColor="#9bc97a"
            atmosphereAltitude={0.2}
            pointsData={POINTS}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude={0.01}
            pointRadius="size"
            animateIn={false}
            onGlobeReady={() => setReady(true)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default HeroGlobe;
