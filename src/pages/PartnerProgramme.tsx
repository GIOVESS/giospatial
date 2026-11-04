import { Link } from "react-router-dom";
import InfoPage from "@/components/InfoPage";

const TRACKS = [
  { title: "Government & Public Sector", text: "Co-deployment agreements for water agencies, land authorities, and ministries needing basin-scale or national-scale geospatial monitoring." },
  { title: "Enterprise & Technology", text: "Integration partnerships with insurance, agritech, real estate, and infrastructure firms embedding NBIS data or APIs into their own products." },
  { title: "Academic & Research", text: "Data-sharing and joint research partnerships with universities and research institutions working on climate, hydrology, or land-use science." },
  { title: "NGOs & Development Banks", text: "Programme-level partnerships supporting conservation, climate adaptation, and sustainable development initiatives across the continent." },
];

const PartnerProgramme = () => (
  <InfoPage
    crumb="Partner Programme"
    title="Partner with GIOSPATIAL"
    intro="We work alongside governments, enterprises, and research institutions to deploy geospatial systems tailored to their operating region: from custom NBIS deployments to data-sharing agreements and co-developed solutions."
    heading="Partnership tracks"
    cards={TRACKS}
  >
    <h2>How it works</h2>
    <ul>
      <li>Initial scoping call to understand your region, data sources, and decision needs.</li>
      <li>A pilot deployment or proof-of-concept against a defined use case.</li>
      <li>A formal partnership or licensing agreement covering data, support, and scope of work.</li>
      <li>Ongoing technical support from our solutions engineering team.</li>
    </ul>
    <p style={{ marginTop: 20 }}>Reach out via our <Link to="/#contact">contact form</Link> or email <a href="mailto:partners@giospatial.org">partners@giospatial.org</a> to start a conversation.</p>
  </InfoPage>
);

export default PartnerProgramme;
