
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dashboardMockup, africaMap, dataLandscape, earthNetwork, techMapGrid } from "@/assets/images";

const techStack = [
  {
    category: "Geo-Processing",
    technologies: ["GDAL", "Fiona", "Shapely", "PostGIS", "GeoPandas", "Rasterio"],
    color: "#265B01",
  },
  {
    category: "Earth Observation",
    technologies: ["Sentinel Hub", "Sentinel-1 SAR", "Sentinel-2 MSI", "Planet API", "Landsat 8/9"],
    color: "#141B44",
  },
  {
    category: "GeoAI & Machine Learning",
    technologies: ["NDVI Analysis", "Change Detection", "YOLOv8 Object Detection", "Random Forest", "Computer Vision"],
    color: "#152C00",
  },
  {
    category: "Backend & APIs",
    technologies: ["Python", "Flask", "Django", "Pydantic", "Marshmallow", "Retrofit (Android)"],
    color: "#265B01",
  },
  {
    category: "Mapping & Visualisation",
    technologies: ["react-leaflet", "Mapbox GL", "QGIS", "Leaflet", "OpenAPI (Swagger)"],
    color: "#141B44",
  },
  {
    category: "Ops & Reliability",
    technologies: ["Docker", "Redis", "Celery", "Prometheus", "Sentry", "GitHub Actions"],
    color: "#152C00",
  },
];

// Expanded step detail for the accordion below — structural pattern
// borrowed from Saylo's "Working Process" (Step 01–04, expand to reveal
// image + 2 bullet points). Real pipeline stages, not generic filler.
const PROCESS_STEPS = [
  {
    title: "Data Acquisition",
    summary: "Pulling in satellite imagery and sensor data at the source.",
    points: ["Sentinel-1 SAR & Sentinel-2 multispectral ingestion", "Near real-time tasking via Sentinel Hub & Planet API"],
    image: africaMap,
  },
  {
    title: "Geo-Processing",
    summary: "Turning raw imagery into structured, queryable spatial data.",
    points: ["GDAL/Fiona/Shapely for format conversion & geometry ops", "PostGIS spatial database for persistent storage"],
    image: techMapGrid,
  },
  {
    title: "GeoAI Analysis",
    summary: "Machine learning applied to the processed imagery.",
    points: ["NDVI analysis & automated change detection", "YOLOv8 object detection, Random Forest classification"],
    image: dataLandscape,
  },
  {
    title: "Caching & Storage",
    summary: "Keeping the system fast under real query load.",
    points: ["Redis for hot-path caching of frequent queries", "S3/GCP object storage for imagery and processed layers"],
    image: earthNetwork,
  },
  {
    title: "Decision Insight",
    summary: "Delivering the result where the decision actually gets made.",
    points: ["REST/GeoJSON APIs for system integration", "Real-time dashboards for direct human decision-making"],
    image: dashboardMockup,
  },
];

const Technology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="technology" style={{ background: "#f7f7f5", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14" data-reveal>
          <h2
            className="font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            The GIOSPATIAL Engine
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: "16px auto 0" }}>
            End-to-end geospatial architecture designed for the modern enterprise, from
            satellite data ingestion and geo-processing to GeoAI analysis and decision APIs.
            Secure, scalable, and production-proven across Kenya.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {techStack.map((stack, i) => (
            <div
              key={stack.category}
              className="rounded-lg border border-black/[0.08] p-6 hover:border-black/15 transition-colors"
              style={{ background: "#ffffff" }}
              data-reveal
              data-delay={String(Math.min(i + 1, 5))}
            >
              <h3
                className="font-bold uppercase tracking-wider mb-4 pb-3"
                style={{ fontSize: 11, color: stack.color, borderBottom: "1px solid rgba(0,0,0,0.07)" }}
              >
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded border text-foreground/65 hover:text-foreground/90 transition-colors"
                    style={{ background: `${stack.color}12`, borderColor: `${stack.color}25` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Working process — Saylo-style numbered accordion, expand a step
            to see its image and detail. Click a header to change which
            step's image shows on the right (desktop) / above (mobile). */}
        <div className="text-center mb-10" data-reveal>
          <h3 className="font-bold text-foreground" style={{ fontSize: 22 }}>How Data Becomes a Decision</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start" data-reveal data-delay="1">
          <Accordion
            type="single"
            collapsible
            defaultValue="step-0"
            className="w-full"
            onValueChange={(v) => {
              if (v) setActiveStep(Number(v.replace("step-", "")));
            }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <AccordionItem key={step.title} value={`step-${i}`} className="border-black/[0.08]">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <span
                      className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #265B01, #152C00)", fontSize: 13 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold text-foreground" style={{ fontSize: 15 }}>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-13 ml-9">
                    <p style={{ color: "#5a5a5a", fontSize: 13.5, lineHeight: 1.7, marginBottom: 10 }}>{step.summary}</p>
                    <ul className="space-y-1.5">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-start gap-2" style={{ fontSize: 13, color: "#5a5a5a" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#265B01" }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div
            className="rounded-xl overflow-hidden relative"
            style={{ boxShadow: "0 24px 64px rgba(20,27,68,0.18)", minHeight: 340 }}
          >
            <img
              key={activeStep}
              src={PROCESS_STEPS[activeStep].image}
              alt={PROCESS_STEPS[activeStep].title}
              className="w-full h-full object-cover absolute inset-0 animate-fade-up"
              style={{ minHeight: 340 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                Step {String(activeStep + 1).padStart(2, "0")}
              </p>
              <p className="text-white font-bold" style={{ fontSize: 16 }}>{PROCESS_STEPS[activeStep].title}</p>
            </div>
          </div>
        </div>

        {/* Architecture tiers — kept from the previous pipeline layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10" data-reveal data-delay="2">
          {[
            { tier: "Frontend & Clients", items: "React (Leaflet/Mapbox) · Android" },
            { tier: "Orchestration", items: "Python Flask/Django · GeoAI Service Layer" },
            { tier: "Persistence", items: "PostGIS geometry · Redis cache" },
            { tier: "Infrastructure", items: "Docker · S3/GCP · GitHub Actions" },
          ].map((t) => (
            <div
              key={t.tier}
              className="rounded-lg p-3"
              style={{ background: "rgba(38,91,1,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="font-bold uppercase tracking-wide mb-1" style={{ fontSize: 10, color: "#265B01" }}>
                {t.tier}
              </div>
              <div className="font-mono" style={{ fontSize: 11, color: "#5a5a5a" }}>{t.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
