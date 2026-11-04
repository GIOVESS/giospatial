import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import { toPath } from "@/lib/routes";

/** Full-width navy call-to-action band. `to` accepts a view name or a path. */
const CtaBand = ({ title, text, button, to = "contact" }: { title: string; text: string; button: string; to?: string }) => (
  <div className="band">
    <div className="wrap">
      <div><h2>{title}</h2><p>{text}</p></div>
      <div><Link to={to.startsWith("/") ? to : toPath(to)} className="btn btn-lime">{button} <Icon name="arrow" /></Link></div>
    </div>
  </div>
);

export default CtaBand;
