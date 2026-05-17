
const techStack = [
  {
    category: "Geo-Processing",
    technologies: ["GDAL", "Fiona", "Shapely", "PostGIS", "GeoPandas", "Rasterio"],
    color: "#00a0e3",
  },
  {
    category: "Earth Observation",
    technologies: ["Sentinel Hub", "Sentinel-1 SAR", "Sentinel-2 MSI", "Planet API", "Landsat 8/9"],
    color: "#16a34a",
  },
  {
    category: "GeoAI & Machine Learning",
    technologies: ["NDVI Analysis", "Change Detection", "YOLOv8 Object Detection", "Random Forest", "Computer Vision"],
    color: "#f97316",
  },
  {
    category: "Backend & APIs",
    technologies: ["Python", "Flask", "Django", "Pydantic", "Marshmallow", "Retrofit (Android)"],
    color: "#00a0e3",
  },
  {
    category: "Mapping & Visualisation",
    technologies: ["react-leaflet", "Mapbox GL", "QGIS", "Leaflet", "OpenAPI (Swagger)"],
    color: "#16a34a",
  },
  {
    category: "Ops & Reliability",
    technologies: ["Docker", "Redis", "Celery", "Prometheus", "Sentry", "GitHub Actions"],
    color: "#f97316",
  },
];

const pipeline = [
  { label: "Data Acquisition", desc: "Satellite & Sensors" },
  { label: "Geo-Processing", desc: "GDAL · PostGIS" },
  { label: "GeoAI Analysis", desc: "ML · Change Detection" },
  { label: "Caching", desc: "Redis · S3 / GCP" },
  { label: "Decision Insight", desc: "API · Dashboard" },
];

const Technology = () => {
  return (
    <section id="technology" style={{ background: "#111111", padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14" data-reveal>
          <span
            className="inline-block font-bold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full border"
            style={{ fontSize: 10, color: "#00a0e3", borderColor: "rgba(0,160,227,0.25)", background: "rgba(0,160,227,0.06)" }}
          >
            Our Technology
          </span>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            The GIOSPATIAL Engine
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: "16px auto 0" }}>
            End-to-end geospatial architecture designed for the modern enterprise — from
            satellite data ingestion and geo-processing to GeoAI analysis and decision APIs.
            Secure, scalable, and production-proven across Africa.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {techStack.map((stack, i) => (
            <div
              key={stack.category}
              className="rounded-lg border border-white/[0.08] p-6 hover:border-white/15 transition-colors"
              style={{ background: "#0a0a0a" }}
              data-reveal
              data-delay={String(Math.min(i + 1, 5))}
            >
              <h3
                className="font-bold uppercase tracking-wider mb-4 pb-3"
                style={{ fontSize: 11, color: stack.color, borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded border text-white/65 hover:text-white/90 transition-colors"
                    style={{ background: `${stack.color}12`, borderColor: `${stack.color}25` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data pipeline */}
        <div
          className="rounded-xl border border-white/[0.08] p-8 lg:p-10"
          style={{ background: "#0a0a0a" }}
          data-reveal
          data-delay="1"
        >
          <h3 className="font-bold text-center text-white mb-2" style={{ fontSize: 18 }}>
            GeoAI Data Pipeline
          </h3>
          <p className="text-center mb-10" style={{ color: "#7a7a7a", fontSize: 13 }}>
            Raw satellite data → Standardised GeoJSON analytics response
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-6">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto font-bold text-white text-lg"
                    style={{ background: "linear-gradient(135deg, #00a0e3, #006fa0)" }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-xs font-semibold text-white">{step.label}</div>
                  <div className="text-[11px] font-mono mt-0.5" style={{ color: "#7a7a7a" }}>{step.desc}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <div
                    className="hidden md:block mx-4"
                    style={{ width: 32, height: 1, background: "linear-gradient(90deg, #00a0e3, #10b981)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Architecture tiers */}
          <div
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              { tier: "Frontend & Clients", items: "React (Leaflet/Mapbox) · Android" },
              { tier: "Orchestration", items: "Python Flask/Django · GeoAI Service Layer" },
              { tier: "Persistence", items: "PostGIS geometry · Redis cache" },
              { tier: "Infrastructure", items: "Docker · S3/GCP · GitHub Actions" },
            ].map((t) => (
              <div
                key={t.tier}
                className="rounded-lg p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="font-bold uppercase tracking-wide mb-1" style={{ fontSize: 10, color: "#00a0e3" }}>
                  {t.tier}
                </div>
                <div className="font-mono" style={{ fontSize: 11, color: "#7a7a7a" }}>{t.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
