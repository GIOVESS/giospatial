import { useRef, useState, useEffect, Suspense, lazy } from "react";
import { Pause, Play } from "lucide-react";
import { earthGlobeTexture } from "@/assets/images";

// Lazy-loaded: react-globe.gl pulls in Three.js, which is genuinely heavy.
// Loading it eagerly in the main bundle would tax every page load for a
// component that only appears in one homepage section — split it into its
// own chunk instead.
const ReactGlobe = lazy(() => import("react-globe.gl"));

// Real coordinates, not approximated for effect:
// Lake Naivasha basin centre and Nairobi HQ (Uthiru — see LeafletMap.tsx
// for the same, separately-verified coordinates).
const NAIVASHA = { lat: -0.7833, lng: 36.3667 };
const NAIROBI_HQ = { lat: -1.2744, lng: 36.7029 };

const POINTS = [
  { lat: NAIVASHA.lat, lng: NAIVASHA.lng, label: "Lake Naivasha: NBIS Pilot", size: 0.6, color: "#9bc97a" },
  { lat: NAIROBI_HQ.lat, lng: NAIROBI_HQ.lng, label: "GIOSPATIAL HQ, Nairobi", size: 0.4, color: "#265B01" },
];

const ARCS = [
  { startLat: NAIROBI_HQ.lat, startLng: NAIROBI_HQ.lng, endLat: NAIVASHA.lat, endLng: NAIVASHA.lng, color: "#9bc97a" },
];

/**
 * Auto-rotating globe, following the two UX requirements that came up
 * directly in research for this feature: (1) auto-rotating content needs a
 * visible pause control, not just a "hope nobody minds" spin, and (2) it
 * must stop under prefers-reduced-motion, not just visually — the render
 * loop itself should not keep running.
 */
const Globe = () => {
  const globeRef = useRef<{ controls: () => { autoRotate: boolean; autoRotateSpeed: number } } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [allowMotion, setAllowMotion] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 360, height: 360 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowMotion(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const size = Math.min(containerRef.current.offsetWidth, 420);
      setDimensions({ width: size, height: size });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const controls = globeRef.current?.controls();
    if (!controls) return;
    controls.autoRotate = allowMotion && !isPaused;
    controls.autoRotateSpeed = 0.6;
  });

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      <Suspense
        fallback={
          <div
            className="rounded-full animate-pulse"
            style={{ width: dimensions.width, height: dimensions.height, background: "rgba(38,91,1,0.08)" }}
          />
        }
      >
        <ReactGlobe
          // @ts-expect-error — react-globe.gl's ref type isn't exported cleanly for TS consumers
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl={earthGlobeTexture}
          backgroundColor="rgba(0,0,0,0)"
          pointsData={POINTS}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.01}
          pointRadius="size"
          pointLabel="label"
          arcsData={ARCS}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={allowMotion && !isPaused ? 2000 : 0}
          arcStroke={0.5}
        />
      </Suspense>

      {allowMotion && (
        <button
          onClick={() => setIsPaused((p) => !p)}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors"
          style={{ borderColor: "rgba(0,0,0,0.15)", color: "#5a5a5a" }}
          aria-pressed={isPaused}
        >
          {isPaused ? <Play size={12} /> : <Pause size={12} />}
          {isPaused ? "Resume rotation" : "Pause rotation"}
        </button>
      )}
    </div>
  );
};

export default Globe;
