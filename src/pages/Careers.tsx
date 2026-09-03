import StaticPage from "@/components/StaticPage";
import { Mail } from "lucide-react";
import { techOfficeTeam, nairobiSkylineDusk } from "@/assets/images";

const OPEN_ROLES = [
  {
    title: "GIS / Remote Sensing Engineer",
    location: "Nairobi, Kenya · Hybrid",
    desc: "Build and maintain satellite ingestion pipelines, geo-processing workflows, and PostGIS-backed spatial APIs for NBIS and future platforms.",
  },
  {
    title: "GeoAI / Machine Learning Engineer",
    location: "Nairobi, Kenya · Hybrid",
    desc: "Develop and deploy computer vision and predictive models: change detection, NDVI analysis, object detection, across satellite and drone imagery.",
  },
  {
    title: "Full-Stack Developer (React / Python)",
    location: "Remote · Kenya",
    desc: "Ship dashboards, decision APIs, and client-facing tools on our Flask/Django and React stack, working closely with our GIS engineering team.",
  },
  {
    title: "Business Development Associate",
    location: "Nairobi, Kenya",
    desc: "Build relationships with government agencies, NGOs, and enterprise clients across Kenya to grow GIOSPATIAL's platform and consulting business.",
  },
];

const Careers = () => (
  <StaticPage
    eyebrow="Careers"
    title="Build Kenya's geo-intelligence infrastructure"
    intro="GIOSPATIAL is a small, technical team solving large-scale spatial problems: basin monitoring, urban planning, precision agriculture, across Kenya. We're always interested in hearing from engineers, scientists, and business builders who want to work at the intersection of GIS, AI, and Earth observation."
  >
    <div className="rounded-xl overflow-hidden relative" style={{ height: 260 }}>
      <img src={nairobiSkylineDusk} alt="Nairobi skyline" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">Nairobi, Kenya</span>
    </div>

    <div>
      <h2>Open roles</h2>
      <div className="space-y-4 mt-4">
        {OPEN_ROLES.map((role) => (
          <div
            key={role.title}
            className="rounded-lg border border-black/[0.08] p-5"
            style={{ background: "#f7f7f5" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
              <h3 className="font-semibold text-foreground" style={{ fontSize: 16 }}>
                {role.title}
              </h3>
              <span className="text-xs font-medium" style={{ color: "#265B01" }}>
                {role.location}
              </span>
            </div>
            <p className="text-foreground/60" style={{ fontSize: 14, lineHeight: 1.7 }}>
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h2>Don't see a fit?</h2>
        <p>
          We're a growing team and open roles change often. If you have geospatial, AI, or software
          engineering experience and want to work on real infrastructure for Kenyan enterprises and
          governments, send us your CV and a short note about what you'd want to build.
        </p>
        <a
          href="mailto:careers@giospatial.org"
          className="inline-flex items-center gap-2 mt-4 font-semibold"
          style={{ color: "#265B01" }}
        >
          <Mail size={15} />
          careers@giospatial.org
        </a>
      </div>
      <div className="rounded-xl overflow-hidden" style={{ height: 200 }}>
        <img src={techOfficeTeam} alt="Team working" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
    </div>
  </StaticPage>
);

export default Careers;
