import { useRef, useState, useCallback } from "react";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}

/**
 * Hand-rolled rather than a dependency — the interaction is simple enough
 * (one draggable divider) that a library adds more weight than it saves.
 * Mouse drag, touch drag, and keyboard (arrow keys on the focused handle)
 * all move the divider; 44px handle target per the touch-target minimum.
 */
const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeLabel, afterLabel, alt }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = () => { dragging.current = true; };
  const onPointerUp = () => { dragging.current = false; };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden select-none"
      style={{ aspectRatio: "4/3", touchAction: "none" }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After image (full, base layer) */}
      <img src={afterSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover" draggable={false} loading="lazy" decoding="async" />
      <span
        className="absolute top-3 right-3 font-bold uppercase tracking-wider px-2.5 py-1 rounded"
        style={{ fontSize: 10, background: "rgba(0,0,0,0.6)", color: "#fff", letterSpacing: "0.06em" }}
      >
        {afterLabel}
      </span>

      {/* Before image — same full size as the "after" layer underneath,
          revealed only up to the divider via clip-path. Using clip-path
          instead of resizing a wrapper div avoids needing to track the
          container's pixel width in JS just to keep the image from
          visually resizing/distorting as the divider moves. */}
      <img
        src={beforeSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />
      <span
        className="absolute top-3 left-3 font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-opacity"
        style={{
          fontSize: 10, background: "rgba(0,0,0,0.6)", color: "#fff", letterSpacing: "0.06em",
          opacity: position > 12 ? 1 : 0,
        }}
      >
        {beforeLabel}
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, width: 2, background: "#fff", transform: "translateX(-1px)" }}
      >
        <button
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          role="slider"
          aria-label="Drag to compare before and after imagery"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          className="absolute top-1/2 left-1/2 rounded-full flex items-center justify-center cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-white"
          style={{ width: 44, height: 44, transform: "translate(-50%, -50%)", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          <GripVertical size={18} className="text-[#141B44]" />
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
