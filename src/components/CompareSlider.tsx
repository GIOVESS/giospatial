import { useRef, useState, useCallback } from "react";
import { GripVertical } from "lucide-react";

interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

/**
 * Draggable before/after comparison slider. Built for the real Lake
 * Naivasha 2010/2026 satellite images — this isn't a decorative widget,
 * it's the actual change-detection story (the thing the Bogoria-Baringo
 * Insights piece describes in prose) made interactive and literal.
 *
 * Pointer Events (not separate mouse/touch handlers) so one code path
 * covers mouse, touch, and pen. Keyboard-operable via the handle's
 * role="slider" + arrow-key support, not just drag.
 */
const CompareSlider = ({ beforeImage, afterImage, beforeLabel, afterLabel }: CompareSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent, 0 = all "before", 100 = all "after"
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden select-none"
      style={{ aspectRatio: "16/10", touchAction: "none" }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* After image (full width, base layer) */}
      <img src={afterImage} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover" draggable={false} loading="lazy" decoding="async" />

      {/* Before image — same full-size image, revealed only up to the
          slider position via clip-path. This is the correct way to do a
          compare-slider reveal: both images are always full-size and
          identically positioned, so nothing has to track container width
          in JS (which would be a stale-ref bug on resize). */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span
        className="absolute top-3 left-3 px-2.5 py-1 rounded text-white font-bold uppercase tracking-wider"
        style={{ fontSize: 10.5, background: "rgba(0,0,0,0.55)", letterSpacing: "0.06em" }}
      >
        {beforeLabel}
      </span>
      <span
        className="absolute top-3 right-3 px-2.5 py-1 rounded text-white font-bold uppercase tracking-wider"
        style={{ fontSize: 10.5, background: "rgba(38,91,1,0.85)", letterSpacing: "0.06em" }}
      >
        {afterLabel}
      </span>

      {/* Divider line + drag handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
        style={{ left: `${position}%`, boxShadow: "0 0 8px rgba(0,0,0,0.4)" }}
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Comparison position"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-ew-resize focus:outline-none focus:ring-2"
        style={{
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
        }}
      >
        <GripVertical size={16} className="text-foreground/60" />
      </div>
    </div>
  );
};

export default CompareSlider;
