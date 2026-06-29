import StaticPage from "@/components/StaticPage";
import { Calendar, MapPin } from "lucide-react";

const EVENTS = [
  {
    title: "GeoAI & Earth Observation Workshop",
    date: "Quarterly",
    location: "Nakuru, Kenya",
    desc: "A hands-on session on satellite imagery analysis, change detection, and GeoAI workflows for GIS professionals and government analysts.",
  },
  {
    title: "Regional Water & Climate Data Forum",
    date: "Annual",
    location: "Nairobi, Kenya",
    desc: "Bringing together basin authorities, environmental agencies, and researchers to discuss shared spatial data infrastructure for water resource management.",
  },
  {
    title: "University GIS & Remote Sensing Seminars",
    date: "Ongoing",
    location: "East Africa, various campuses",
    desc: "Guest lectures and capacity-building sessions with academic partners on applied geospatial data science.",
  },
];

const EventsConferences = () => (
  <StaticPage
    eyebrow="Events & Conferences"
    title="Events & Conferences"
    intro="GIOSPATIAL hosts and participates in geospatial summits, urban data workshops, and government data forums across East and Central Africa. Here's where you can find us."
  >
    <div className="space-y-4">
      {EVENTS.map((e) => (
        <div
          key={e.title}
          className="rounded-lg border border-black/[0.08] p-5"
          style={{ background: "#f7f7f5" }}
        >
          <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: 16 }}>
            {e.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mb-2.5">
            <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#265B01" }}>
              <Calendar size={13} />
              {e.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-foreground/50">
              <MapPin size={13} />
              {e.location}
            </span>
          </div>
          <p className="text-foreground/60" style={{ fontSize: 13.5, lineHeight: 1.7 }}>
            {e.desc}
          </p>
        </div>
      ))}
    </div>

    <div>
      <h2>Want us at your event?</h2>
      <p>
        If you're organising a conference, workshop, or government forum on geospatial technology,
        AI, or climate data and would like GIOSPATIAL to participate, get in touch.
      </p>
      <a
        href="mailto:events@giospatial.org"
        className="inline-flex items-center gap-2 mt-4 font-semibold"
        style={{ color: "#265B01" }}
      >
        events@giospatial.org
      </a>
    </div>
  </StaticPage>
);

export default EventsConferences;
