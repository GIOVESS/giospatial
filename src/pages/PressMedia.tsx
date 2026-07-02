import StaticPage from "@/components/StaticPage";
import { Mail, Download } from "lucide-react";

const FACTS = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Nakuru, Kenya" },
  { label: "Flagship platform", value: "NBIS" },
  { label: "Counties active", value: "12" },
];

const PressMedia = () => (
  <StaticPage
    eyebrow="Press & Media"
    title="Press & Media"
    intro="GIOSPATIAL engineers end-to-end geospatial systems for Kenya's modern enterprise. For interviews, company information, or media assets, contact our team directly."
  >
    <div>
      <h2>Company facts</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {FACTS.map((f) => (
          <div
            key={f.label}
            className="rounded-lg p-4 text-center border border-black/[0.07]"
            style={{ background: "#f7f7f5" }}
          >
            <div className="font-bold" style={{ fontSize: 18, color: "#265B01" }}>
              {f.value}
            </div>
            <div className="text-foreground/50" style={{ fontSize: 11, marginTop: 4 }}>
              {f.label}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2>Brand assets</h2>
      <p>
        Logos, brand guidelines, and approved imagery are available on request for press coverage,
        partnership announcements, and editorial use.
      </p>
      <a
        href="mailto:press@giospatial.org?subject=Brand%20assets%20request"
        className="inline-flex items-center gap-2 mt-4 font-semibold"
        style={{ color: "#265B01" }}
      >
        <Download size={15} />
        Request brand assets
      </a>
    </div>

    <div>
      <h2>Media inquiries</h2>
      <p>
        For interviews, speaking engagements, or comment on geospatial technology, AI, and
        development in Kenya, reach our team directly.
      </p>
      <a
        href="mailto:press@giospatial.org"
        className="inline-flex items-center gap-2 mt-4 font-semibold"
        style={{ color: "#265B01" }}
      >
        <Mail size={15} />
        press@giospatial.org
      </a>
    </div>
  </StaticPage>
);

export default PressMedia;
