import { Link } from "react-router-dom";
import type { InsightArticle } from "@/data/insights";

const InsightCard = ({ article: a, hidden = false }: { article: InsightArticle; hidden?: boolean }) => (
  <Link to={`/insights/${a.slug}`} data-reveal style={hidden ? { display: "none" } : undefined}>
    <div className="im"><img src={a.cover.src} alt={a.cover.alt} loading="lazy" decoding="async" /></div>
    <small>{a.category}</small>
    <h3>{a.title}</h3>
    <p>{a.excerpt}</p>
    <div className="m">{a.date} · {a.readTime}</div>
  </Link>
);

export default InsightCard;
