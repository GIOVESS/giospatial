import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { C } from "@/content/site";
import { MEDIA } from "@/lib/media";

const T = C.team;

const Open = ({ role, small = false }: { role: string; small?: boolean }) => (
  <div className="person ph" style={small ? { padding: "16px 20px", gap: 14, alignItems: "center" } : { flexDirection: "column", alignItems: "center", textAlign: "center" }}>
    <div className="av" style={small ? { width: 44, height: 44, fontSize: 16 } : undefined}>+</div>
    <div><h3 style={{ fontSize: small ? 15 : 17 }}>{role}</h3><p className="ph-t">Role to be filled</p></div>
  </div>
);

const Team = () => (
  <>
    <PageHeader crumbs={[{ label: "Leadership & Team" }]} title="The people behind GIOSPATIAL" intro="GIOSPATIAL is growing a team of engineers, scientists, and operators across Kenya's geo-intelligence ecosystem." />
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 1000 }}>
        <div className="org">
          <div className="person" data-reveal style={{ maxWidth: 640 }}>
            <img src={MEDIA.giovanni} alt={T.lead.name} loading="lazy" decoding="async" />
            <div>
              <h3>{T.lead.name}</h3>
              <div className="role">{T.lead.role}</div>
              <p>{T.lead.bio}</p>
              <div style={{ display: "flex", gap: 18, marginTop: 8 }}>
                {T.lead.links.map((l) => <a key={l[0]} className="lnk" style={{ minHeight: 36, fontSize: 14 }} href={l[1]} target="_blank" rel="noopener noreferrer">{l[0]} <Icon name="ext" /></a>)}
              </div>
            </div>
          </div>
          <div className="org-r">
            {T.branches.map((b) => (
              <div key={b[0]} style={{ display: "grid", gap: 14, alignContent: "start" }}>
                <Open role={b[0]} />
                {b[1].map((r) => <Open key={r} role={r} small />)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Team;
