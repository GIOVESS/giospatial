import StaticPage from "@/components/StaticPage";

const Privacy = () => (
  <StaticPage
    eyebrow="Legal"
    title="Privacy Policy"
    intro="Last updated: June 2026. This policy explains what information Giospatial Earth Limited, trading as GIOSPATIAL (Reg. PVT-YQ1DZJ29) ('we', 'us') collects through giospatial.org and our platforms, and how we use it."
  >
    <div>
      <h2>Information we collect</h2>
      <p>
        When you submit a contact or demo request form, we collect your name, organisation, email
        address, and any message content you provide. When you browse our website, we may collect
        standard technical data such as IP address, browser type, and pages visited, for analytics
        and security purposes.
      </p>
    </div>

    <div>
      <h2>How we use your information</h2>
      <ul>
        <li>To respond to enquiries, demo requests, and partnership proposals.</li>
        <li>To provide and improve our platform and services for existing clients.</li>
        <li>To send relevant updates about GIOSPATIAL, where you have opted in.</li>
        <li>To meet legal, regulatory, and security obligations.</li>
      </ul>
    </div>

    <div>
      <h2>Data sharing</h2>
      <p>
        We do not sell personal data. We may share information with infrastructure providers (such
        as cloud hosting) strictly to operate our services, and with regulators or partners where
        required for a deployment you have requested.
      </p>
    </div>

    <div>
      <h2>Data retention &amp; security</h2>
      <p>
        We retain personal data only as long as needed for the purposes above. Client and platform
        data is encrypted at rest and in transit, with role-based access control across our systems.
      </p>
    </div>

    <div>
      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data at any time by
        contacting <a href="mailto:privacy@giospatial.org">privacy@giospatial.org</a>.
      </p>
    </div>
  </StaticPage>
);

export default Privacy;
