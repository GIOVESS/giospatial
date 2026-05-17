import { Globe, Tag, ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    icon: Globe,
    title: "Start with NBIS",
    desc: "Explore the Naivasha Basin Intelligence System — our flagship platform for basin-scale geospatial decision support. Request a live demo and see the full data pipeline in action.",
    cta: "Request a Demo",
    href: "contact",
  },
  {
    icon: Tag,
    title: "Partner with GIOSPATIAL",
    desc: "Government agency, enterprise, or NGO? Join our partner programme for custom deployments, data agreements, and co-developed geospatial solutions across your operating region.",
    cta: "Get in Touch",
    href: "contact",
  },
];

const GetStarted = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="get-started"
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a", padding: "96px 0" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(0,160,227,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
          >
            Get Started
          </span>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            Ready to build with geo-intelligence?
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
            Choose your path. No commitment required — start with a demo or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <button
                key={card.title}
                onClick={() => scrollTo(card.href)}
                className="group text-left rounded-xl border border-white/[0.10] p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#111111" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,160,227,0.14)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,160,227,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                }}
                data-reveal
                data-delay={String(i + 1)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#00a0e3]/15 transition-colors"
                    style={{ background: "rgba(0,160,227,0.08)", border: "1px solid rgba(0,160,227,0.15)" }}
                  >
                    <Icon size={22} className="text-[#00a0e3]" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-[#00a0e3] transition-colors"
                  />
                </div>

                <h3
                  className="font-bold text-white mb-3"
                  style={{ fontSize: 20 }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#7a7a7a", fontSize: 14.5, lineHeight: 1.75, marginBottom: 28 }}>
                  {card.desc}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all"
                  style={{
                    background: i === 0 ? "#00a0e3" : "rgba(0,160,227,0.1)",
                    color: i === 0 ? "#fff" : "#00a0e3",
                    border: i === 0 ? "none" : "1px solid rgba(0,160,227,0.25)",
                  }}
                >
                  {card.cta}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
