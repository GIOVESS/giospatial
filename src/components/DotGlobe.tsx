import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { GLOBE_POINTS } from "@/content/geo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { lakeNaivashaSatellite2026 } from "@/assets/images";

const RAD = Math.PI / 180;
const NAIROBI: [number, number] = [36.82, -1.29];
const clampLat = (v: number) => Math.max(-55, Math.min(65, v));

/**
 * Dotted 3D globe drawn on a 2D canvas with an orthographic projection.
 * No WebGL or texture download: the land is ~2,000 sample points
 * (src/content/geo.ts). Kenya is highlighted and Nairobi pulses.
 *
 * Controls: drag to rotate, arrow keys, and a pause button. Rotation is off
 * by default when the visitor prefers reduced motion.
 */
const DotGlobe = () => {
  const reduced = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [auto, setAuto] = useState(true);
  const state = useRef({ lon: 36.8, lat: 8, auto: true, drag: false, lx: 0, ly: 0, clock: 0, visible: true, size: 600 });

  useEffect(() => { state.current.auto = auto && !reduced; }, [auto, reduced]);

  useEffect(() => {
    const cv = canvas.current!;
    const wr = wrap.current!;
    const ctx = cv.getContext("2d")!;
    const s = state.current;
    let raf = 0;
    let prev = performance.now();

    const project = (lon: number, lat: number) => {
      const l = (lon - s.lon) * RAD, p = lat * RAD, p0 = s.lat * RAD;
      return [
        Math.cos(p) * Math.sin(l),
        Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l),
        Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l),
      ];
    };

    const fit = () => {
      const w = wr.getBoundingClientRect().width;
      const d = Math.min(window.devicePixelRatio || 1, 2);
      s.size = w; cv.width = w * d; cv.height = w * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    };

    const draw = () => {
      const size = s.size, c = size / 2, r = size * 0.46;
      ctx.clearRect(0, 0, size, size);
      const g = ctx.createRadialGradient(c - r * 0.3, c - r * 0.35, r * 0.1, c, c, r);
      g.addColorStop(0, "#FFFFFF"); g.addColorStop(1, "#EDF2E8");
      ctx.beginPath(); ctx.arc(c, c, r, 0, 7); ctx.fillStyle = g; ctx.fill();
      ctx.lineWidth = 1.2; ctx.strokeStyle = "rgba(21,44,0,.35)"; ctx.stroke();

      ctx.lineWidth = 0.7; ctx.strokeStyle = "rgba(38,91,1,.16)";
      const line = (pts: [number, number][]) => {
        ctx.beginPath(); let pen = false;
        pts.forEach(([lo, la]) => {
          const q = project(lo, la);
          if (q[2] > 0) { const X = c + r * q[0], Y = c - r * q[1]; if (pen) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); pen = true; } else pen = false;
        });
        ctx.stroke();
      };
      for (let lo = -180; lo < 180; lo += 30) { const a: [number, number][] = []; for (let la = -90; la <= 90; la += 4) a.push([lo, la]); line(a); }
      for (let la = -60; la <= 60; la += 30) { const a: [number, number][] = []; for (let lo = -180; lo <= 180; lo += 4) a.push([lo, la]); line(a); }

      GLOBE_POINTS.forEach(([lo, la]) => {
        const q = project(lo, la);
        if (q[2] <= 0.03) return;
        const kenya = lo > 33.9 && lo < 42 && la > -4.8 && la < 5.2;
        ctx.beginPath();
        ctx.arc(c + r * q[0], c - r * q[1], r * (kenya ? 0.0105 : 0.0072) * (0.55 + 0.45 * q[2]), 0, 7);
        ctx.fillStyle = kenya ? "#265B01" : `rgba(38,91,1,${(0.18 + 0.6 * q[2]).toFixed(2)})`;
        ctx.fill();
      });

      const n = project(NAIROBI[0], NAIROBI[1]);
      if (n[2] > 0.05) {
        const X = c + r * n[0], Y = c - r * n[1], ph = (s.clock / 1600) % 1;
        ctx.beginPath(); ctx.arc(X, Y, 5 + ph * 26, 0, 7); ctx.strokeStyle = `rgba(38,91,1,${(0.55 * (1 - ph)).toFixed(2)})`; ctx.lineWidth = 2; ctx.stroke();
        ctx.beginPath(); ctx.arc(X, Y, 6, 0, 7); ctx.fillStyle = "#265B01"; ctx.fill(); ctx.lineWidth = 2.5; ctx.strokeStyle = "#fff"; ctx.stroke();
      }
    };

    const loop = (now: number) => {
      const dt = (now - prev) / 1000; prev = now;
      if (s.auto) s.clock += dt * 1000;
      if (s.auto && !s.drag && s.visible) s.lon += 7 * dt;
      if (s.visible) draw();
      raf = requestAnimationFrame(loop);
    };

    fit(); draw();
    raf = requestAnimationFrame(loop);
    const ro = new ResizeObserver(() => { fit(); draw(); });
    ro.observe(wr);
    const io = new IntersectionObserver((es) => { s.visible = es[0].isIntersecting; });
    io.observe(wr);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  const down = (e: React.PointerEvent<HTMLCanvasElement>) => { const s = state.current; s.drag = true; s.lx = e.clientX; s.ly = e.clientY; e.currentTarget.setPointerCapture(e.pointerId); };
  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const s = state.current; if (!s.drag) return;
    s.lon -= (e.clientX - s.lx) * 0.4; s.lat = clampLat(s.lat + (e.clientY - s.ly) * 0.3); s.lx = e.clientX; s.ly = e.clientY;
  };
  const up = () => { state.current.drag = false; };
  const key = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    const k = ({ ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, 6], ArrowDown: [0, -6] } as Record<string, [number, number]>)[e.key];
    if (!k) return;
    e.preventDefault();
    const s = state.current; s.lon += k[0]; s.lat = clampLat(s.lat + k[1]);
  };

  return (
    <div className="globe-w" id="globe" ref={wrap}>
      <canvas
        ref={canvas}
        tabIndex={0}
        role="img"
        aria-label="Rotating 3D globe centred on Kenya. Drag to rotate, or use the arrow keys."
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onKeyDown={key}
      />
      <div className="gcard a">
        <img src={lakeNaivashaSatellite2026} alt="" />
        <div><b>NBIS pilot</b>Lake Naivasha<span className="mono">0.77° S, 36.35° E (approx.)</span></div>
      </div>
      <div className="gcard b"><div><b>Nairobi, Kenya</b>Headquarters<span className="mono">1.29° S, 36.82° E</span></div></div>
      {!reduced && (
        <div className="gctl">
          <button type="button" id="gpause" aria-pressed={!auto} onClick={() => setAuto(!auto)}>
            <Icon name="compass" /><span>{auto ? "Pause rotation" : "Resume rotation"}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DotGlobe;
