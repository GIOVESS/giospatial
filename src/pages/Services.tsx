import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { DIVISIONS } from "@/content/site";
import { MEDIA } from "@/lib/media";

const Services = () => (
  <>
    <PageHeader
      crumbs={[{ label: "Services" }]}
      title="Services"
      intro="Five service areas, each with its own technical focus, delivered as consulting engagements or ongoing platform work."
    />
    <section className="sec">
      <div className="wrap">
        <div className="hub">
          {DIVISIONS.map((d) => (
            <Link key={d.slug} to={`/divisions/${d.slug}`} data-reveal>
              <div className="im"><img src={MEDIA[d.img]} alt={d.title} loading="lazy" decoding="async" /></div>
              <div className="tx">
                <small>{d.tag}</small>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <span className="lnk">Read More <Icon name="arrow" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CtaBand title="Ready to build with geo-intelligence?" text="No commitment required, request a demo or reach out directly." button="Request a Demo" />
  </>
);

export default Services;
