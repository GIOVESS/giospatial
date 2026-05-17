import { ArrowRight } from "lucide-react";

// Aerial view of Lake Naivasha / East Africa (Unsplash)
const AERIAL_AFRICA = "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80&auto=format&fit=crop";

const METRICS = [
  { value: "70%", label: "Faster alert response" },
  { value: "28%", label: "Early detection rate" },
  { value: "48h", label: "Site identification" },
];

const WhatIs = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" style={{ background: "#111111", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-14 items-center">

          {/* Left: text */}
          <div className="lg:col-span-2" data-reveal>
            <span
              className="inline-block font-bold uppercase tracking-[0.15em] mb-5 px-3 py-1 rounded-full border"
              style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
            >
              About GIOSPATIAL
            </span>

            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              Not a mapping company.<br />An architecture company.
            </h2>

            <div className="space-y-4" style={{ color: "#7a7a7a", fontSize: 15.5, lineHeight: 1.75 }}>
              <p>
                GIOSPATIAL engineers complete, end-to-end geospatial systems — from
                satellite data ingestion and geo-processing pipelines, through GeoAI
                analysis, to enterprise decision APIs and real-time dashboards.
              </p>
              <p>
                Our flagship platform, NBIS, is a production-grade basin-scale
                intelligence system built for East Africa's most critical environmental
                challenges, and deployable across the continent.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2.5">
              <button
                onClick={() => scrollTo("products")}
                className="flex items-center gap-2 text-sm font-medium text-[#00a0e3] hover:underline transition-all group w-fit"
              >
                Explore NBIS platform
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("technology")}
                className="flex items-center gap-2 text-sm font-medium text-[#00a0e3] hover:underline transition-all group w-fit"
              >
                See our technology stack
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Metric callouts */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4 text-center border border-white/[0.07]"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="font-bold text-[#00a0e3]"
                    style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                  >
                    {m.value}
                  </div>
                  <div style={{ color: "#555", fontSize: 10, marginTop: 4, lineHeight: 1.4 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            className="lg:col-span-3 relative rounded-xl overflow-hidden"
            data-reveal
            data-delay="2"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
          >
            <img
              src={AERIAL_AFRICA}
              alt="Aerial view of East Africa — GIOSPATIAL monitoring territory"
              className="w-full object-cover"
              style={{ minHeight: 380, maxHeight: 500 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: "#16a34a" }}
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                  Monitoring Territory
                </p>
              </div>
              <p className="text-sm font-semibold text-white">
                East Africa · Lake Naivasha Basin & Beyond
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIs;
