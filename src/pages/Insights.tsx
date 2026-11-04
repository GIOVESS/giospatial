import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS } from "@/data/insights";

const Insights = () => {
  const cats = ["All", ...Array.from(new Set(INSIGHTS.map((a) => a.category)))];
  const [cat, setCat] = useState("All");
  return (
    <>
      <PageHeader crumbs={[{ label: "Insights" }]} title="Insights" intro="Methodology write-ups and NBIS pilot progress dispatches." />
      <section className="sec">
        <div className="wrap">
          <div className="chips" role="group" aria-label="Filter by category" style={{ marginBottom: 32 }}>
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
                style={{ minHeight: 44, padding: "0 16px", ...(cat === c ? { background: "var(--navy)", color: "#fff", borderColor: "var(--navy)" } : {}) }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="ins">{INSIGHTS.map((a) => <InsightCard key={a.slug} article={a} hidden={cat !== "All" && a.category !== cat} />)}</div>
        </div>
      </section>
    </>
  );
};

export default Insights;
