import { ArrowRight, TrendingUp, Waves, Wheat } from "lucide-react";
import { lakeNaivashaSatellite2026, lakeNaivashaSatellite2010 } from "@/assets/images";
import CompareSlider from "@/components/CompareSlider";

/**
 * Merged WhatIs.tsx + About.tsx. Both previously made the same "not a
 * mapping company / end-to-end architecture" claim in near-identical
 * language — this consolidates it into one section instead of repeating
 * it twice on the same page.
 *
 * The three METRICS previously here ("70% Faster alert response", "28%
 * Early detection rate") were unverified figures with no source. Cut
 * rather than kept — see conversation for full rationale on why
 * fabricated stats are being removed sitewide.
 */
const CHALLENGES = [
  {
    icon: TrendingUp,
    title: "Fragmented spatial data",
    description:
      "Organisations across Kenya operate on siloed, static datasets. Real decisions demand unified, near-real-time spatial intelligence at scale.",
  },
  {
    icon: Waves,
    title: "Weak geospatial architecture",
    description:
      "Traditional GIS tools stop at visualisation. Modern enterprises need end-to-end systems: from satellite ingestion to API-ready decision layers.",
  },
  {
    icon: Wheat,
    title: "Rapidly changing landscapes",
    description:
      "Climate shifts, urban expansion, and resource pressure demand systems that move from observation to prediction, not yesterday's static maps.",
  },
];

const Positioning = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-14 items-center mb-16">

          {/* Left: text */}
          <div className="lg:col-span-2" data-reveal>
            <h2
              className="font-bold text-foreground mb-6 leading-tight"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              We build the architecture underneath the map.
            </h2>

            <div className="space-y-4" style={{ color: "#5a5a5a", fontSize: 15.5, lineHeight: 1.75 }}>
              <p>
                GIOSPATIAL engineers complete, end-to-end geospatial systems, from
                satellite data ingestion and geo-processing pipelines, through GeoAI
                analysis, to enterprise decision APIs and real-time dashboards.
              </p>
              <p>
                Our flagship platform, NBIS, is a production-grade basin-scale
                intelligence system built for Kenya's most critical environmental
                challenges, and deployable nationwide.
              </p>
            </div>

            {/* Mission / Vision — structural pattern borrowed from Saylo's
                About section, filled with real positioning, not filler. */}
            <div className="mt-8 space-y-4">
              <div>
                <span
                  className="inline-block font-bold uppercase tracking-wider mb-1.5 px-2 py-0.5 rounded"
                  style={{ fontSize: 9.5, color: "#265B01", background: "rgba(38,91,1,0.08)" }}
                >
                  Mission
                </span>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.65 }}>
                  Give Kenyan organisations the same spatial decision-making infrastructure
                  that only large, well-resourced institutions could previously afford to build.
                </p>
              </div>
              <div>
                <span
                  className="inline-block font-bold uppercase tracking-wider mb-1.5 px-2 py-0.5 rounded"
                  style={{ fontSize: 9.5, color: "#141B44", background: "rgba(20,27,68,0.06)" }}
                >
                  Vision
                </span>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.65 }}>
                  A Kenya where every water authority, land office, and city planning
                  department makes decisions from live spatial data, not static maps.
                </p>
              </div>
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
          </div>

          {/* Right: interactive before/after comparison — real NASA
              satellite imagery of Lake Naivasha, 2010 vs 2026. This is
              the change-detection story from the Insights article made
              literal and draggable, not a decorative widget. */}
          <div
            className="lg:col-span-3 relative"
            data-reveal
            data-delay="2"
            style={{ boxShadow: "0 24px 64px rgba(20,27,68,0.18)", borderRadius: 12 }}
          >
            <CompareSlider
              beforeImage={lakeNaivashaSatellite2010}
              afterImage={lakeNaivashaSatellite2026}
              beforeLabel="2010"
              afterLabel="2026"
            />
            <p className="text-center mt-3" style={{ color: "#5a5a5a", fontSize: 12.5 }}>
              Drag to compare · Real NASA satellite imagery, Lake Naivasha basin
            </p>
          </div>
        </div>

        {/* Challenges we solve — was About.tsx's separate, largely redundant
            intro block; kept only the 3 concrete challenge cards. */}
        <div className="grid md:grid-cols-3 gap-5" data-reveal data-delay="1">
          {CHALLENGES.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-lg p-6 border border-black/[0.07]"
                style={{ background: "#ffffff" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(38,91,1,0.08)", border: "1px solid rgba(38,91,1,0.12)" }}
                >
                  <Icon size={18} className="text-[#265B01]" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5" style={{ fontSize: 14.5 }}>
                  {c.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.7 }}>
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Service teaser row — structural pattern borrowed from Saylo's
            "Consulting Strategy" cards (title + one-liner + bullet list of
            capabilities). Content is the real Divisions/Products data. */}
        <div className="grid md:grid-cols-3 gap-5 mt-8" data-reveal data-delay="2">
          {[
            {
              title: "NBIS Platform",
              desc: "Basin-scale geospatial decision-support built for Lake Naivasha and deployable nationwide.",
              points: ["Sentinel-1/2 satellite ingestion", "PostGIS spatial architecture", "Real-time decision APIs"],
              action: () => scrollTo("products"),
            },
            {
              title: "GeoAI & Analytics",
              desc: "Machine learning applied to Earth Observation imagery to predict change before it happens.",
              points: ["NDVI & change detection", "YOLOv8 object detection", "Predictive spatial modelling"],
              action: () => scrollTo("technology"),
            },
            {
              title: "Consulting & Training",
              desc: "ArcGIS Enterprise, open-source GIS, and capacity building for teams and organisations.",
              points: ["Architecture & implementation", "Team GIS training programs", "System integration support"],
              action: () => scrollTo("divisions"),
            },
          ].map((card) => (
            <button
              key={card.title}
              onClick={card.action}
              className="group text-left rounded-lg p-6 border border-black/[0.07] hover:border-[#265B01]/30 transition-colors"
              style={{ background: "#ffffff" }}
            >
              <h3 className="font-bold text-foreground mb-2" style={{ fontSize: 16 }}>{card.title}</h3>
              <p style={{ color: "#5a5a5a", fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{card.desc}</p>
              <ul className="space-y-1.5">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2" style={{ fontSize: 12.5, color: "#265B01" }}>
                    <ArrowRight size={11} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    {point}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positioning;
