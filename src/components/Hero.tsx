const STATS = [
  { value: "50+", label: "Organisations" },
  { value: "2M+", label: "Hectares Monitored" },
  { value: "5", label: "Countries Active" },
  { value: "24h", label: "Alert Pipeline" },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #06090f 0%, #0a0a0a 50%, #070d0a 100%)",
        paddingTop: 80,
      }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, #00a0e3 30%, #16a34a 70%, transparent 100%)", opacity: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[680px] mx-auto">

        {/* Eyebrow */}
        <span
          className="inline-block font-bold uppercase tracking-[0.18em] mb-7 px-4 py-1.5 rounded-full border animate-fade-up"
          style={{
            fontSize: 10,
            color: "#00a0e3",
            borderColor: "rgba(0,160,227,0.25)",
            background: "rgba(0,160,227,0.06)",
            animationDelay: "0s",
          }}
        >
          Geo-Intelligence · East Africa
        </span>

        {/* Company name */}
        <h1
          className="font-black text-white animate-fade-up leading-none"
          style={{
            fontSize: "clamp(56px, 9vw, 96px)",
            letterSpacing: "0.07em",
            animationDelay: "0.1s",
            background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GIOSPATIAL
        </h1>

        {/* Tagline */}
        <p
          className="text-[#8a8a8a] animate-fade-up mt-6"
          style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 520, animationDelay: "0.2s" }}
        >
          Africa's geo-intelligence company — engineering end-to-end spatial data
          systems from satellite ingestion to enterprise decision APIs.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 mt-10 animate-fade-up"
          style={{ animationDelay: "0.32s" }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#00a0e3" }}
          >
            Request a Demo
          </button>
          <button
            onClick={() => scrollTo("products")}
            className="px-8 py-3 text-sm font-semibold text-white/60 rounded-lg border border-white/10 hover:border-white/25 hover:text-white/90 transition-all duration-200 hover:-translate-y-0.5"
          >
            See NBIS Platform
          </button>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-4 gap-8 animate-fade-up w-full"
          style={{ animationDelay: "0.46s" }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-bold"
                style={{
                  fontSize: 28,
                  letterSpacing: "-0.02em",
                  color: i % 2 === 0 ? "#00a0e3" : "#16a34a",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#4a4a4a", fontSize: 11, marginTop: 4, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default Hero;
