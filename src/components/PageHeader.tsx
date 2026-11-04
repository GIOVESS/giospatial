import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import Contour from "@/components/Contour";

export interface Crumb { label: string; to?: string }

/** Breadcrumb trail, h1 and intro for inner pages. Optional children render below (call-to-action buttons). */
const PageHeader = ({ crumbs, title, intro, children }: { crumbs: Crumb[]; title: ReactNode; intro?: ReactNode; children?: ReactNode }) => (
  <section className="pg-h">
    <Contour variant="A" />
    <div className="wrap">
      <nav className="crumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {crumbs.map((c) => (
          <span key={c.label} style={{ display: "contents" }}>
            <Icon name="chevr" />
            {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page" style={{ color: "var(--ink)" }}>{c.label}</span>}
          </span>
        ))}
      </nav>
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
      {children && <div className="cta">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
