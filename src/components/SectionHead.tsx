import { ReactNode } from "react";

/** Section heading with an optional supporting paragraph. */
const SectionHead = ({ title, sub, center = false }: { title: ReactNode; sub?: ReactNode; center?: boolean }) => (
  <div className={`sh${center ? " c" : ""}`} data-reveal>
    <h2>{title}</h2>
    {sub && <p>{sub}</p>}
  </div>
);

export default SectionHead;
