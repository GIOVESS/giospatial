import { useState } from "react";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { C } from "@/content/site";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="sec sec-alt" id="faq">
      <div className="wrap">
        <SectionHead title="Frequently asked questions" center />
        <div className="faq">
          {C.faq.map((f, i) => (
            <div className="fq" key={f[0]} data-reveal>
              <h3 style={{ fontSize: "inherit", letterSpacing: 0 }}>
                <button type="button" id={`fq${i}`} aria-expanded={open === i} aria-controls={`fa${i}`} onClick={() => setOpen(open === i ? null : i)}>
                  {f[0]}<Icon name="chev" />
                </button>
              </h3>
              <div className={`a${open === i ? " open" : ""}`} id={`fa${i}`} role="region" aria-labelledby={`fq${i}`}>
                <div><p>{f[1]}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
