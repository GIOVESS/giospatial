import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Landed on after a successful Contact Sales submission
 * (see ContactSales.tsx's handleSubmit → navigate("/thank-you")).
 *
 * Not in ROUTE_META (RouteSEO.tsx) on purpose — falls back to DEFAULT_META
 * and gets noindex'd like the rest of the transactional-only pages, since
 * it has no content value for search and shouldn't be a landing page.
 */
const ThankYou = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Navigation />
    <section
      className="flex-1 flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #141B44 0%, #0d1330 100%)", paddingTop: 96 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(38,91,1,0.3) 0%, transparent 60%)" }}
      />
      <div className="relative z-10 max-w-[520px] mx-auto px-6 py-24 text-center" data-reveal>
        <CheckCircle2 size={56} className="mx-auto mb-6" style={{ color: "#9bc97a" }} />
        <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
          Message received
        </h1>
        <p className="text-white/55 mb-10" style={{ fontSize: 16, lineHeight: 1.75 }}>
          Thanks for reaching out. A GIOSPATIAL solutions engineer will respond within one
          business day (EAT timezone). In the meantime, feel free to explore our platform
          or check recent case studies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-full transition-colors"
          >
            Back to Home
          </Link>
          <a
            href="mailto:sales@giospatial.org"
            className="px-6 py-3 text-sm font-semibold text-white border border-white/15 hover:border-white/30 rounded-full transition-colors"
          >
            Email Sales Directly
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ThankYou;
