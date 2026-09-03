import { ArrowRight } from "lucide-react";

interface Banner {
  title: string;
  desc: string;
  cta: string;
  onClick: () => void;
}

/**
 * Three-panel CTA row, structurally borrowed from Saylo's bottom-of-page
 * banner pattern (dark alternating panels, each with its own CTA). Content
 * is GIOSPATIAL-specific — demo request, partnership, careers — not the
 * template's generic "talented Member" copy.
 */
const CTABannerRow = ({ banners }: { banners: Banner[] }) => (
  <div className="grid md:grid-cols-3">
    {banners.map((b, i) => (
      <button
        key={b.title}
        onClick={b.onClick}
        className="group text-left p-10 transition-colors"
        style={{
          background: i % 2 === 0 ? "#141B44" : "#152C00",
          borderRight: i < banners.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <h3 className="font-bold text-white mb-2" style={{ fontSize: 19 }}>{b.title}</h3>
        <p className="text-white/50 mb-6" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{b.desc}</p>
        <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
          {b.cta}
          <ArrowRight size={15} />
        </span>
      </button>
    ))}
  </div>
);

export default CTABannerRow;
