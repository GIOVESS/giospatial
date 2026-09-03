import StaticPage from "@/components/StaticPage";
import { Building2, Landmark, GraduationCap, Globe2 } from "lucide-react";

const TRACKS = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    desc: "Co-deployment agreements for water agencies, land authorities, and ministries needing basin-scale or national-scale geospatial monitoring.",
  },
  {
    icon: Building2,
    title: "Enterprise & Technology",
    desc: "Integration partnerships with insurance, agritech, real estate, and infrastructure firms embedding NBIS data or APIs into their own products.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Research",
    desc: "Data-sharing and joint research partnerships with universities and research institutions working on climate, hydrology, or land-use science.",
  },
  {
    icon: Globe2,
    title: "NGOs & Development Banks",
    desc: "Programme-level partnerships supporting conservation, climate adaptation, and sustainable development initiatives across the continent.",
  },
];

const PartnerProgramme = () => (
  <StaticPage
    eyebrow="Partner Programme"
    title="Partner with GIOSPATIAL"
    intro="We work alongside governments, enterprises, and research institutions to deploy geospatial systems tailored to their operating region: from custom NBIS deployments to data-sharing agreements and co-developed solutions."
  >
    <div>
      <h2>Partnership tracks</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {TRACKS.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.title}
              className="rounded-lg border border-black/[0.08] p-5"
              style={{ background: "#f7f7f5" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "rgba(38,91,1,0.1)" }}
              >
                <Icon size={17} style={{ color: "#265B01" }} strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5" style={{ fontSize: 15 }}>
                {t.title}
              </h3>
              <p className="text-foreground/60" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
                {t.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>

    <div>
      <h2>How it works</h2>
      <ul>
        <li>Initial scoping call to understand your region, data sources, and decision needs.</li>
        <li>A pilot deployment or proof-of-concept against a defined use case.</li>
        <li>A formal partnership or licensing agreement covering data, support, and scope of work.</li>
        <li>Ongoing technical support from our solutions engineering team.</li>
      </ul>
      <p className="mt-4">
        Reach out via our{" "}
        <a href="/#contact">contact form</a> or email{" "}
        <a href="mailto:partners@giospatial.org">partners@giospatial.org</a> to start a conversation.
      </p>
    </div>
  </StaticPage>
);

export default PartnerProgramme;
