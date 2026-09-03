import { ReactNode } from "react";

interface PageHeroBandProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/**
 * Dark navy page-header band — the visual signature borrowed from Saylo's
 * page-title sections (dark background, bold white headline, centered).
 * Replaces the previous plain-white StaticPage header across every static
 * page, Team, NBIS, Insights, and the division pages.
 *
 * `eyebrow` is still accepted (used by 13 call sites) but no longer
 * rendered — the kicker-above-heading pattern is an absolute ban per this
 * project's design conventions ("no brief earns it back"; the heading
 * carries its own weight). Kept as a prop rather than touching every
 * caller, since removing it is a pure subtraction with no visual gap.
 *
 * Breadcrumbs render separately, in their own light strip directly above
 * this band (see StaticPage.tsx / division pages) — nesting them inside a
 * dark background made the existing BreadcrumbLink/BreadcrumbPage colors
 * unreliable to override cleanly.
 */
const PageHeroBand = ({ title, subtitle }: PageHeroBandProps) => (
  <section
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(160deg, #141B44 0%, #0d1330 100%)",
      paddingTop: 72,
      paddingBottom: 72,
    }}
  >
    <div
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ background: "radial-gradient(ellipse 60% 80% at 80% 0%, rgba(38,91,1,0.25) 0%, transparent 60%)" }}
    />
    <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
      <h1
        className="font-bold text-white leading-tight"
        style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-0.02em" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/55 mt-5" style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 560, margin: "20px auto 0" }}>
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeroBand;
