import { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";

export interface InfoCard { title: string; text: string; tag?: string }

/** Header, optional section title, a two-column card grid and a prose footer. Used by Partners, Developer Forum and Events. */
const InfoPage = ({ crumb, title, intro, heading, cards, children }: { crumb: string; title: string; intro: string; heading?: string; cards: InfoCard[]; children: ReactNode }) => (
  <>
    <PageHeader crumbs={[{ label: crumb }]} title={title} intro={intro} />
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 1000 }}>
        {heading && <h2 style={{ fontSize: 28, marginBottom: 22 }}>{heading}</h2>}
        <div className="g2">
          {cards.map((c) => (
            <div className="card" key={c.title} data-reveal>
              {c.tag && <span className="feat-n">{c.tag}</span>}
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="prose" style={{ marginTop: 48 }} data-reveal>{children}</div>
      </div>
    </section>
  </>
);

export default InfoPage;
