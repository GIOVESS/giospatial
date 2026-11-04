import { Link } from "react-router-dom";
import Icon from "@/components/Icon";

/** Sticky bottom action bar, shown below 1024px only (see .mbar in redesign.css). */
const MobileBar = () => (
  <div className="mbar">
    <a href="tel:+254708187019"><Icon name="phone" /> Call</a>
    <Link to="/#contact" className="mbar-demo">Request a Demo <Icon name="arrow" /></Link>
  </div>
);

export default MobileBar;
