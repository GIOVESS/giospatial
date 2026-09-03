import StaticPage from "@/components/StaticPage";

const Legal = () => (
  <StaticPage
    eyebrow="Legal"
    title="Legal Notices"
    intro="General legal information about Giospatial Earth Limited and the operation of giospatial.org."
  >
    <div>
      <h2>Company information</h2>
      <p>
        GIOSPATIAL is the trading name of Giospatial Earth Limited (Reg. PVT-YQ1DZJ29), a private
        limited company registered in Kenya under the Companies Act, 2015, with its registered
        office at Naivasha Road, Uthiru, Westlands, Nairobi (P.O. Box 21934-00100 GPO, Nairobi).
        For company or registration enquiries, contact{" "}
        <a href="mailto:legal@giospatial.org">legal@giospatial.org</a>.
      </p>
    </div>

    <div>
      <h2>Trademarks</h2>
      <p>
        "GIOSPATIAL", the GIOSPATIAL globe icon, and "Naivasha Basin Intelligence System" (NBIS) are
        trademarks of Giospatial Earth Limited. Third-party trademarks referenced on this site,
        including satellite and data-source providers, remain the property of their respective owners.
      </p>
    </div>

    <div>
      <h2>Governing law</h2>
      <p>
        These legal notices, our Terms of Service, and our Privacy Policy are governed by the laws
        of the Republic of Kenya. Any disputes arising from use of this website shall be subject to
        the exclusive jurisdiction of the Kenyan courts.
      </p>
    </div>

    <div>
      <h2>Related policies</h2>
      <p>
        See our <a href="/privacy">Privacy Policy</a> for how we handle personal data, and our{" "}
        <a href="/terms">Terms of Service</a> for the rules governing use of this website.
      </p>
    </div>
  </StaticPage>
);

export default Legal;
