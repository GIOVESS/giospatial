interface MarqueeBandProps {
  items: string[];
  variant?: "light" | "dark";
}

/**
 * Repeating horizontal ticker — the visual signature borrowed from
 * saylonextjs.vercel.app's "Saylo Consulting" band. Renders the item list
 * twice back-to-back so the CSS animation (marquee-scroll, in index.css)
 * loops without a visible seam.
 */
const MarqueeBand = ({ items, variant = "light" }: MarqueeBandProps) => {
  const track = [...items, ...items];
  const isDark = variant === "dark";

  return (
    <div
      className="overflow-hidden border-y"
      style={{
        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
        background: isDark ? "#141B44" : "#f7f7f5",
        padding: "18px 0",
      }}
    >
      <div className="marquee-track flex items-center whitespace-nowrap" style={{ width: "fit-content" }}>
        {track.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-bold uppercase tracking-[0.1em] px-8"
              style={{ fontSize: 13, color: isDark ? "rgba(255,255,255,0.55)" : "rgba(20,27,68,0.4)" }}
            >
              {item}
            </span>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "#265B01" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
