import InfoPage from "@/components/InfoPage";

const CARDS = [
  { title: "Open Standards & Integrations", text: "We build on open standards (OGC, GDAL, PostGIS) and document integration patterns for teams connecting their own systems to NBIS APIs." },
  { title: "API & Platform Documentation", text: "Technical references for the NBIS decision API, data schemas, and authentication, maintained as our platform surface grows." },
  { title: "Community Discussion", text: "A space for GIS professionals, data scientists, and government analysts across Kenya to share workflows, datasets, and platform extensions." },
];

const DeveloperForum = () => (
  <InfoPage
    crumb="Developer Forum"
    title="Building with GIOSPATIAL"
    intro="Our developer community is in its early stages: we're building documentation, integration guides, and discussion channels alongside our partner deployments. Here's what's available today, and what's coming."
    cards={CARDS}
  >
    <h2>Get early access</h2>
    <p>If you're integrating with our platform or want early access to API documentation and our upcoming community channel, reach out directly, we respond within one business day.</p>
    <p style={{ marginTop: 18 }}><a href="mailto:developers@giospatial.org">developers@giospatial.org</a></p>
  </InfoPage>
);

export default DeveloperForum;
