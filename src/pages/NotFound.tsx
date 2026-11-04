import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Back to Home", to: "/", primary: true },
  { label: "NBIS", to: "/nbis" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Leadership & Team", to: "/team" },
];

const NotFound = () => {
  const { pathname } = useLocation();
  useEffect(() => { console.error("404: no route matches", pathname); }, [pathname]);
  return (
    <section className="nf">
      <div className="wrap">
        <h1>404</h1>
        <h2 style={{ margin: "8px 0 14px", fontSize: 28 }}>This page doesn't exist</h2>
        <p style={{ marginBottom: 24 }}>Try one of these.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {LINKS.map((l) => <Link key={l.to} to={l.to} className={`btn ${l.primary ? "btn-p" : "btn-o"}`}>{l.label}</Link>)}
        </div>
      </div>
    </section>
  );
};

export default NotFound;
