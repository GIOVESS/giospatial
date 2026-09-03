import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageHeroBand from "@/components/PageHeroBand";
import { UserRound } from "lucide-react";
import { giovanniBwayo } from "@/assets/images";

/**
 * Leadership & Team page (/team) — rendered as an org chart branching from
 * the CEO down through the C-suite to their direct reports.
 *
 * Giovanni is the only confirmed profile today — every other node is a
 * placeholder (no name/photo yet) so the chart reflects the team's eventual
 * shape while we wait on real hires/details. Fill one in by giving it a
 * `name`/`photo`/`bio` and dropping `placeholder: true`.
 */
type Person = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  placeholder?: boolean;
  socials?: { label: string; href: string }[];
};

const CEO: Person = {
  name: "Giovanni Bwayo",
  role: "Founder, CEO & Chief GIS Developer",
  photo: giovanniBwayo,
  bio: "Founded GIOSPATIAL to build GIS systems that go past static maps: GeoAI pipelines, spatial APIs, and decision tools. Works across Python, Django, Flask, PostgreSQL/PostGIS, remote sensing, and predictive spatial modelling.",
  socials: [
    { label: "GitHub", href: "https://github.com/GIOVESS" },
    { label: "Website", href: "https://giovannibwayo.site" },
  ],
};

const BRANCHES: { head: Person; reports: Person[] }[] = [
  {
    head: { name: "Team Member", role: "Chief Operating Officer", placeholder: true },
    reports: [
      { name: "Team Member", role: "Business Development Lead", placeholder: true },
    ],
  },
  {
    head: { name: "Team Member", role: "Chief Financial Officer", placeholder: true },
    reports: [
      { name: "Team Member", role: "Finance & Operations Associate", placeholder: true },
    ],
  },
  {
    head: { name: "Team Member", role: "Chief Technology Officer", placeholder: true },
    reports: [
      { name: "Team Member", role: "Head of GIS Engineering", placeholder: true },
      { name: "Team Member", role: "Head of Data Science", placeholder: true },
    ],
  },
];

const PersonCard = ({ person, size = "md" }: { person: Person; size?: "lg" | "md" | "sm" }) => {
  const dims = size === "lg" ? 112 : size === "md" ? 88 : 72;
  return (
    <div
      className="rounded-xl border border-black/[0.08] p-5 text-center flex flex-col items-center w-full"
      style={{ background: person.placeholder ? "#f7f7f5" : "#ffffff", maxWidth: size === "lg" ? 320 : 220 }}
    >
      {person.photo ? (
        <img
          src={person.photo}
          alt={`${person.name}, ${person.role}, GIOSPATIAL`}
          className="rounded-full object-cover border-2 mb-3"
          style={{ width: dims, height: dims, borderColor: "rgba(38,91,1,0.25)" }}
        />
      ) : (
        <div
          className="rounded-full flex items-center justify-center mb-3 border-2 border-dashed"
          style={{ width: dims, height: dims, borderColor: "rgba(20,27,68,0.2)", background: "rgba(20,27,68,0.04)" }}
        >
          <UserRound size={dims * 0.4} className="text-foreground/25" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: size === "lg" ? 16 : 14 }}>
        {person.name}
      </h3>
      <p className="font-semibold mb-2" style={{ fontSize: 12, color: person.placeholder ? "#8a8a8a" : "#265B01" }}>
        {person.role}
      </p>
      {person.bio ? (
        <p className="text-foreground/55 text-left" style={{ fontSize: 12.5, lineHeight: 1.65 }}>
          {person.bio}
        </p>
      ) : (
        <p className="text-foreground/35 italic" style={{ fontSize: 12 }}>
          Profile coming soon
        </p>
      )}
      {person.socials && (
        <div className="flex items-center gap-2 mt-3">
          {person.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full border text-[#265B01] hover:bg-[#265B01]/5 transition-colors"
              style={{ borderColor: "rgba(38,91,1,0.25)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

/** Thin vertical connector line used between org-chart tiers. */
const VLine = ({ h = 28 }: { h?: number }) => (
  <div className="w-px shrink-0" style={{ height: h, background: "rgba(20,27,68,0.2)" }} />
);

const Team = () => (
  <div className="min-h-screen bg-white">
    <Navigation />

    <div style={{ paddingTop: 96, background: "#f7f7f5" }}>
      <div className="max-w-[900px] mx-auto px-6 py-3">
        <PageBreadcrumbs trail={[{ label: "Leadership & Team" }]} />
      </div>
    </div>

    <PageHeroBand
      eyebrow="Leadership & Team"
      title="The people behind GIOSPATIAL"
      subtitle="GIOSPATIAL is growing a team of engineers, scientists, and operators across Kenya's geo-intelligence ecosystem."
    />

    <div style={{ paddingTop: 48 }} />

    {/* Org chart */}
    <section style={{ paddingBottom: 120 }}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Tier 1 — CEO */}
        <div className="flex flex-col items-center" data-reveal>
          <PersonCard person={CEO} size="lg" />
          <VLine h={32} />
        </div>

        {/* Desktop: true horizontal org chart with branching connectors */}
        <div className="hidden lg:block" data-reveal data-delay="1">
          <div className="flex w-fit mx-auto border-t" style={{ borderColor: "rgba(20,27,68,0.2)" }}>
            {BRANCHES.map((branch) => (
              <div key={branch.head.role} className="flex flex-col items-center px-8">
                <VLine h={28} />
                <PersonCard person={branch.head} size="md" />
                {branch.reports.length > 0 && (
                  <>
                    <VLine h={28} />
                    <div className="flex w-fit border-t" style={{ borderColor: "rgba(20,27,68,0.15)" }}>
                      {branch.reports.map((report) => (
                        <div key={report.role} className="flex flex-col items-center px-4">
                          <VLine h={24} />
                          <PersonCard person={report} size="sm" />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: nested vertical tree (indentation conveys hierarchy) */}
        <div className="lg:hidden flex flex-col gap-10">
          {BRANCHES.map((branch) => (
            <div key={branch.head.role} className="flex flex-col items-center">
              <PersonCard person={branch.head} size="md" />
              {branch.reports.length > 0 && (
                <div
                  className="mt-6 pl-6 border-l-2 flex flex-col gap-5 w-full max-w-[260px]"
                  style={{ borderColor: "rgba(20,27,68,0.15)" }}
                >
                  {branch.reports.map((report) => (
                    <PersonCard key={report.role} person={report} size="sm" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Team;
