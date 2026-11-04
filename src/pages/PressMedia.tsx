import PageHeader from "@/components/PageHeader";

const FACTS = [["Oct 2025", "Founded"], ["Aug 2026", "Registered"], ["Nairobi, Kenya", "Headquarters"], ["NBIS", "Flagship platform"]];

const PressMedia = () => (
  <>
    <PageHeader
      crumbs={[{ label: "Press & Media" }]}
      title="Press & Media"
      intro="GIOSPATIAL engineers end-to-end geospatial systems for Kenya's modern enterprise. For interviews, company information, or media assets, contact our team directly."
    />
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <h2 style={{ fontSize: 28, marginBottom: 22 }}>Company facts</h2>
        <div className="facts">{FACTS.map((f) => <div key={f[1]} data-reveal><b>{f[0]}</b><span>{f[1]}</span></div>)}</div>
        <div className="prose" style={{ marginTop: 48 }} data-reveal>
          <h2>Brand assets</h2>
          <p>Logos, brand guidelines, and approved imagery are available on request for press coverage, partnership announcements, and editorial use.</p>
          <p style={{ marginTop: 16 }}><a href="mailto:press@giospatial.org?subject=Brand%20assets%20request">Request brand assets</a></p>
          <h2>Media inquiries</h2>
          <p>For interviews, speaking engagements, or comment on geospatial technology, AI, and development in Kenya, reach our team directly.</p>
          <p style={{ marginTop: 16 }}><a href="mailto:press@giospatial.org">press@giospatial.org</a></p>
        </div>
      </div>
    </section>
  </>
);

export default PressMedia;
