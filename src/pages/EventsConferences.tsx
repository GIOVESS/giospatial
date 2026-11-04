import InfoPage from "@/components/InfoPage";

const EVENTS = [
  { tag: "Quarterly", title: "GeoAI & Earth Observation Workshop", text: "A hands-on session on satellite imagery analysis, change detection, and GeoAI workflows for GIS professionals and government analysts." },
  { tag: "Annual", title: "Regional Water & Climate Data Forum", text: "Bringing together basin authorities, environmental agencies, and researchers to discuss shared spatial data infrastructure for water resource management." },
  { tag: "Ongoing", title: "University GIS & Remote Sensing Seminars", text: "Guest lectures and capacity-building sessions with academic partners on applied geospatial data science." },
];

const EventsConferences = () => (
  <InfoPage
    crumb="Events & Conferences"
    title="Events & Conferences"
    intro="GIOSPATIAL hosts and participates in geospatial summits, urban data workshops, and government data forums across Kenya. Here's where you can find us."
    cards={EVENTS}
  >
    <h2>Want us at your event?</h2>
    <p>If you're organising a conference, workshop, or government forum on geospatial technology, AI, or climate data and would like GIOSPATIAL to participate, get in touch.</p>
    <p style={{ marginTop: 18 }}><a href="mailto:events@giospatial.org">events@giospatial.org</a></p>
  </InfoPage>
);

export default EventsConferences;
