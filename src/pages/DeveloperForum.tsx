import StaticPage from "@/components/StaticPage";
import { MessageSquare, Github, BookOpen, Mail } from "lucide-react";

const CHANNELS = [
  {
    icon: Github,
    title: "Open Standards & Integrations",
    desc: "We build on open standards (OGC, GDAL, PostGIS) and document integration patterns for teams connecting their own systems to NBIS APIs.",
  },
  {
    icon: BookOpen,
    title: "API & Platform Documentation",
    desc: "Technical references for the NBIS decision API, data schemas, and authentication, maintained as our platform surface grows.",
  },
  {
    icon: MessageSquare,
    title: "Community Discussion",
    desc: "A space for GIS professionals, data scientists, and government analysts across Kenya to share workflows, datasets, and platform extensions.",
  },
];

const DeveloperForum = () => (
  <StaticPage
    eyebrow="Developer Forum"
    title="Building with GIOSPATIAL"
    intro="Our developer community is in its early stages: we're building documentation, integration guides, and discussion channels alongside our partner deployments. Here's what's available today, and what's coming."
  >
    <div className="grid gap-4">
      {CHANNELS.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.title}
            className="rounded-lg border border-black/[0.08] p-5 flex items-start gap-4"
            style={{ background: "#f7f7f5" }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(38,91,1,0.1)" }}
            >
              <Icon size={17} style={{ color: "#265B01" }} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: 15 }}>
                {c.title}
              </h3>
              <p className="text-foreground/60" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
                {c.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    <div>
      <h2>Get early access</h2>
      <p>
        If you're integrating with our platform or want early access to API documentation and our
        upcoming community channel, reach out directly, we respond within one business day.
      </p>
      <a
        href="mailto:developers@giospatial.org"
        className="inline-flex items-center gap-2 mt-4 font-semibold"
        style={{ color: "#265B01" }}
      >
        <Mail size={15} />
        developers@giospatial.org
      </a>
    </div>
  </StaticPage>
);

export default DeveloperForum;
