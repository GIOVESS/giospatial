import { Headphones, ShieldCheck, Code2, Globe, Tag, ArrowRight, Phone, Mail } from "lucide-react";
import CTABannerRow from "@/components/CTABannerRow";

/**
 * Merges three former sections into one closing block:
 *  - Benefits.tsx (trimmed from 6 cards to the 3 most concrete/differentiating)
 *  - GetStarted.tsx — restyled as a dark CTA band (Saylo's "Ready to Get Free
 *    Consultation" pattern) plus a 3-column bottom banner row
 *  - FutureOutlook.tsx (fully cut — its vision line was a sloganeering
 *    generic-positive-conclusion pattern, see prior cleanup pass)
 */
const REASONS = [
  {
    icon: Headphones,
    title: "Dedicated Implementation Support",
    desc: "Every deployment is backed by a solutions engineer who handles configuration, data onboarding, and system integration from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Compliance",
    desc: "JWT authentication, role-based access control, HSTS, encrypted data-at-rest, and audit logging built into every deployment.",
  },
  {
    icon: Code2,
    title: "Open Standards, No Lock-In",
    desc: "Built on OGC standards, open-source GIS libraries, and published APIs: your spatial data stays portable and reusable.",
  },
];

const WhyUsCTA = () => {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="benefits" className="relative overflow-hidden" style={{ background: "#ffffff", padding: "96px 0 0" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(38,91,1,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Why GIOSPATIAL */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
            Built to be trusted with critical decisions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20" data-reveal data-delay="1">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="rounded-lg p-6 border border-black/[0.07]" style={{ background: "#f7f7f5" }}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(38,91,1,0.08)", border: "1px solid rgba(38,91,1,0.12)" }}
                >
                  <Icon size={18} className="text-[#265B01]" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5" style={{ fontSize: 14.5 }}>{r.title}</h3>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark CTA band — Saylo's "Ready to Get Free Consultation" pattern */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #141B44 0%, #1a2456 100%)" }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{ background: "radial-gradient(ellipse 60% 100% at 100% 50%, rgba(38,91,1,0.35) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-white mb-3" style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>
              Ready to build with geo-intelligence?
            </h2>
            <p className="text-white/50" style={{ fontSize: 15, maxWidth: 440 }}>
              No commitment required, request a demo or reach out directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <div className="flex flex-col gap-3 text-white/70" style={{ fontSize: 13.5 }}>
              <a href="mailto:sales@giospatial.org" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-[#9bc97a]" /> sales@giospatial.org
              </a>
              <a href="tel:+254708187019" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-[#9bc97a]" /> +254 708 187 019
              </a>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="shrink-0 flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-full transition-all hover:pr-8"
            >
              Request a Demo
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* 3-column bottom banner row */}
      <CTABannerRow
        banners={[
          {
            title: "Explore NBIS",
            desc: "See the flagship platform's full data pipeline in action.",
            cta: "See the Platform",
            onClick: () => scrollTo("products"),
          },
          {
            title: "Partner with Us",
            desc: "Government agency, enterprise, or NGO, let's talk deployment.",
            cta: "Get in Touch",
            onClick: () => scrollTo("contact"),
          },
          {
            title: "Careers at GIOSPATIAL",
            desc: "Building geospatial systems for Africa from Nairobi, Kenya.",
            cta: "View Openings",
            onClick: () => navigate("/careers"),
          },
        ]}
      />
    </section>
  );
};

export default WhyUsCTA;
