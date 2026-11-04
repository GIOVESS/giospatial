import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { C } from "@/content/site";

const Careers = () => (
  <>
    <PageHeader crumbs={[{ label: "Careers" }]} title="Build Kenya's geo-intelligence infrastructure" intro={C.careers.intro} />
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <h2 style={{ fontSize: 28, marginBottom: 22 }}>Open roles</h2>
        <div className="roles" style={{ gridTemplateColumns: "1fr" }}>
          {C.careers.roles.map((r) => (
            <div className="role-c" key={r[0]} data-reveal>
              <small>{r[1]}</small>
              <h3>{r[0]}</h3>
              <p>{r[2]}</p>
              <a className="lnk" style={{ minHeight: 36 }} href={`mailto:careers@giospatial.org?subject=${encodeURIComponent(r[0])}`}>Apply by email <Icon name="arrow" /></a>
            </div>
          ))}
        </div>
        <div className="prose" style={{ marginTop: 56 }} data-reveal>
          <h2>Don't see a fit?</h2>
          <p>{C.careers.fit}</p>
          <p style={{ marginTop: 18 }}><a className="btn btn-p" style={{ color: "var(--btn-fg)", textDecoration: "none" }} href="mailto:careers@giospatial.org"><Icon name="mail" /> careers@giospatial.org</a></p>
        </div>
      </div>
    </section>
  </>
);

export default Careers;
