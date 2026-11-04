import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { nbisDemoPoster } from "@/assets/images";

/**
 * NBIS dashboard recording. `loop` is the short silent loop used on the
 * homepage; `full` plays the full demo with controls. Under reduced motion
 * the loop is replaced by its poster frame.
 */
const NbisMedia = ({ full = false }: { full?: boolean }) => {
  const reduced = useReducedMotion();
  if (reduced && !full) return <img src={nbisDemoPoster} alt="NBIS pilot dashboard" />;
  return (
    <video
      {...(full ? { controls: true } : { autoPlay: true })}
      muted
      loop={!full}
      playsInline
      preload="metadata"
      poster={nbisDemoPoster}
      aria-label="Screen recording of the NBIS pilot dashboard"
    >
      <source src={full ? "/videos/nbis-demo.mp4" : "/videos/nbis-hero-loop.mp4"} type="video/mp4" />
    </video>
  );
};

export default NbisMedia;
