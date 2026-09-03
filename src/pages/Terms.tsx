import StaticPage from "@/components/StaticPage";

const Terms = () => (
  <StaticPage
    eyebrow="Legal"
    title="Terms of Service"
    intro="Last updated: June 2026. These terms govern your use of giospatial.org and, where applicable, the NBIS platform and other GIOSPATIAL services."
  >
    <div>
      <h2>Use of our website and platform</h2>
      <p>
        You may browse giospatial.org and request information freely. Access to NBIS or other
        deployed platforms is governed by a separate service agreement entered into with your
        organisation, which takes precedence over these general terms for platform use.
      </p>
    </div>

    <div>
      <h2>Acceptable use</h2>
      <ul>
        <li>Do not attempt to interfere with, reverse-engineer, or gain unauthorised access to our systems.</li>
        <li>Do not use forms or contact channels to submit false, abusive, or unlawful content.</li>
        <li>Do not scrape or systematically extract content from our website without permission.</li>
      </ul>
    </div>

    <div>
      <h2>Intellectual property</h2>
      <p>
        All content on this site, including the GIOSPATIAL name, logo, and the NBIS platform,
        is the property of Giospatial Earth Limited (trading as GIOSPATIAL) or its licensors, and may not be reproduced without
        written consent.
      </p>
    </div>

    <div>
      <h2>Disclaimer</h2>
      <p>
        Information on this website is provided for general purposes and does not constitute a
        guarantee of platform availability, accuracy of analytical outputs, or fitness for a
        particular purpose. Platform-specific service levels are defined in individual client
        agreements.
      </p>
    </div>

    <div>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be directed to{" "}
        <a href="mailto:legal@giospatial.org">legal@giospatial.org</a>.
      </p>
    </div>
  </StaticPage>
);

export default Terms;
