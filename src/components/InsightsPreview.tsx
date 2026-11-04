import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS } from "@/data/insights";

const InsightsPreview = () => (
  <section className="sec" id="insights-prev">
    <div className="wrap">
      <div className="sh-row" data-reveal>
        <h2>Insights</h2>
        <Link to="/insights" className="lnk">All insights <Icon name="arrow" /></Link>
      </div>
      <div className="ins">{INSIGHTS.map((a) => <InsightCard key={a.slug} article={a} />)}</div>
    </div>
  </section>
);

export default InsightsPreview;
