import { useRef } from "react";
import { ChevronLeft, ChevronRight, Headphones, BookOpen, Users, Globe, ShieldCheck, Code2 } from "lucide-react";

const BENEFITS = [
  {
    icon: Headphones,
    title: "Dedicated Implementation Support",
    desc: "Every GIOSPATIAL deployment is backed by a dedicated solutions engineer who handles configuration, data onboarding, and system integration from day one.",
  },
  {
    icon: BookOpen,
    title: "Structured GeoAI Training",
    desc: "In-person and remote training programmes in spatial data science, GIS workflows, GeoAI methods, and platform administration — for technical and non-technical teams.",
  },
  {
    icon: Users,
    title: "Active Community of Practice",
    desc: "A growing network of GIS professionals, data scientists, and government analysts across Kenya — sharing spatial datasets, workflows, and platform extensions.",
  },
  {
    icon: Globe,
    title: "Regional Events & Conferences",
    desc: "GIOSPATIAL hosts and participates in geospatial summits, urban data workshops, and government data forums across East and Central Africa.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Compliance",
    desc: "JWT authentication, role-based access control, HSTS, encrypted data-at-rest, and audit logging built into every deployment — meeting enterprise and government standards.",
  },
  {
    icon: Code2,
    title: "Open Standards & Interoperability",
    desc: "No proprietary lock-in. Built on OGC standards, open-source GIS libraries, and published APIs — your spatial data stays portable and reusable.",
  },
];

const Benefits = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const c = scrollRef.current;
    if (!c) return;
    const card = c.querySelector<HTMLElement>(".ben-card");
    const w = card ? card.offsetWidth + 20 : 320;
    c.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="benefits" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#265B01", borderColor: "rgba(38,91,1,0.25)", background: "rgba(38,91,1,0.06)" }}
          >
            Why GIOSPATIAL
          </span>
          <h2
            className="font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
          >
            Beyond the Platform
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
            Geo-intelligence that works isn't just software — it's the people, training,
            and community that make spatial systems succeed.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-5" data-reveal data-delay="1">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-foreground/40 hover:border-[#265B01] hover:text-[#265B01] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-foreground/40 hover:border-[#265B01] hover:text-[#265B01] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={17} />
            </button>
          </div>
          <span style={{ fontSize: 12, color: "#888" }}>{BENEFITS.length} benefits</span>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-5 overflow-x-auto pb-2 active:cursor-grabbing"
          style={{ cursor: "grab" }}
        >
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="ben-card shrink-0 rounded-xl border border-black/[0.07] hover:border-[#265B01]/30 transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: 290,
                  padding: "26px 24px 30px",
                  background: "#ffffff",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(20,27,68,0.1), 0 0 0 1px rgba(38,91,1,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Faint number watermark */}
                <span
                  className="absolute top-4 right-5 font-bold select-none pointer-events-none"
                  style={{ fontSize: 44, lineHeight: 1, color: "rgba(20,27,68,0.04)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "rgba(38,91,1,0.08)", border: "1px solid rgba(38,91,1,0.12)" }}
                >
                  <Icon size={17} className="text-[#265B01]" strokeWidth={1.5} />
                </div>

                <h3 className="font-semibold text-foreground mb-2.5 leading-snug" style={{ fontSize: 15 }}>
                  {b.title}
                </h3>
                <p style={{ color: "#666", fontSize: 13.5, lineHeight: 1.7 }}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
