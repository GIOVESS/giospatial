import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { C } from "@/content/site";

/**
 * Landed on after a successful contact submission (ContactSales navigates here).
 * Not in ROUTE_META on purpose: it falls back to the default meta and is
 * treated as a transactional page, not a landing page.
 */
const ThankYou = () => (
  <>
    <PageHeader crumbs={[{ label: "Message received" }]} title="Message received" intro={C.contact.thanks}>
      <Link to="/" className="btn btn-p">Back to Home <Icon name="arrow" /></Link>
      <a className="btn btn-o" href="mailto:sales@giospatial.org">Email Sales Directly</a>
    </PageHeader>
  </>
);

export default ThankYou;
