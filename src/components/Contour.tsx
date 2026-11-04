import { CONTOUR_A, CONTOUR_B } from "@/content/geo";

/** Brand contour-line pattern. Decorative, so hidden from assistive tech. */
const Contour = ({ variant = "A", drift = false }: { variant?: "A" | "B"; drift?: boolean }) => (
  <div className={`contour${drift ? " drift" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
      <path
        d={variant === "A" ? CONTOUR_A : CONTOUR_B}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>
);

export default Contour;
