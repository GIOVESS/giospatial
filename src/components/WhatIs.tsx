import { ArrowRight } from "lucide-react";

import { stockPhotos } from "@/assets/images";

const AERIAL_AFRICA = stockPhotos.aerialAfrica;

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
    <section id="about" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-14 items-center">

          {/* Left: text */}
          <div className="lg:col-span-2" data-reveal>
            <span
              className="inline-block font-bold uppercase tracking-[0.15em] mb-5 px-3 py-1 rounded-full border"
              style={{ fontSize: 10, color: "#265B01", borderColor: "rgba(38,91,1,0.25)", background: "rgba(38,91,1,0.06)" }}
            >
              About GIOSPATIAL
            </span>

            <h2
              className="font-bold text-foreground mb-6 leading-tight"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              Not a mapping company.<br />An architecture company.
            </h2>

            <div className="space-y-4" style={{ color: "#5a5a5a", fontSize: 15.5, lineHeight: 1.75 }}>
              <p>
                GIOSPATIAL engineers complete, end-to-end geospatial systems — from
                satellite data ingestion and geo-processing pipelines, through GeoAI
                analysis, to enterprise decision APIs and real-time dashboards.
              </p>
              <p>
                Our flagship platform, NBIS, is a production-grade basin-scale
                intelligence system built for Kenya's most critical environmental
                challenges, and deployable nationwide.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2.5">
              <button
                onClick={() => scrollTo("products")}
                className="flex items-center gap-2 text-sm font-medium text-[#265B01] hover:underline transition-all group w-fit"
              >
                Explore NBIS platform
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("technology")}
                className="flex items-center gap-2 text-sm font-medium text-[#265B01] hover:underline transition-all group w-fit"
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
                  className="rounded-xl p-4 text-center border border-black/[0.07]"
                  style={{ background: "#ffffff" }}
                >
                  <div
                    className="font-bold text-[#265B01]"
                    style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                  >
                    {m.value}
                  </div>
                  <div style={{ color: "#888", fontSize: 10, marginTop: 4, lineHeight: 1.4 }}>
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
            style={{ boxShadow: "0 24px 64px rgba(20,27,68,0.18)" }}
          >
            <img
              src={AERIAL_AFRICA}
              alt="Aerial view of Kenya — GIOSPATIAL monitoring territory"
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
                  style={{ background: "#265B01" }}
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                  Monitoring Territory
                </p>
              </div>
              <p className="text-sm font-semibold text-white">
                Kenya · Lake Naivasha Basin & Beyond
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIs;
