import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  gisMapDark, dashboardMockup, satelliteSpace, riftValleyKenya, logoIconWhite,
} from "@/assets/images";
import HeroGlobe from "@/components/HeroGlobe";

/**
 * Floating "widget" image cards, Saylo's pattern — real product/technology
 * imagery, not decorative stock. Swapped satelliteSpace/riftValleyKenya in
 * for the previous gisMapDark/africaMap pairing once real sourced photos
 * were available (Aug 2026 image batch).
 */
const FLOATING_CARDS = [
  { image: dashboardMockup, label: "NBIS Dashboard", className: "hidden lg:block", pos: { top: "14%", left: "4%" }, rotate: "-6deg" },
  { image: satelliteSpace, label: "Earth Observation", className: "hidden lg:block", pos: { top: "10%", right: "5%" }, rotate: "5deg" },
  { image: gisMapDark, label: "Spatial Analysis", className: "hidden xl:block", pos: { bottom: "16%", left: "7%" }, rotate: "4deg" },
  { image: riftValleyKenya, label: "Kenya Coverage", className: "hidden xl:block", pos: { bottom: "12%", right: "3%" }, rotate: "-4deg" },
];

/**
 * Hero background: NBIS demo video (public/videos/nbis-hero-loop.mp4), a
 * cropped/compressed loop of the real kmfri-naivasha-mne.streamlit.app
 * screen recording. Muted/autoplay/loop per browser autoplay policy
 * requirements, with the poster frame + gisMapDark still image as a
 * fallback for prefers-reduced-motion and any browser that blocks
 * autoplay. At hero-background scale + the dark overlay below, individual
 * dashboard numbers aren't meant to be legible — see Products.tsx's
 * "See NBIS in Action" section for the same footage shown at a size and
 * with controls where it's actually watchable.
 */
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [allowVideo, setAllowVideo] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowVideo(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setAllowVideo(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 96 }}
    >
      {/* Background: video where supported and motion is allowed, static image
          fallback otherwise. autoPlay is only set when allowVideo is true —
          the CSS motion-reduce:hidden rule alone would hide it visually but
          the browser would still download and decode it, which defeats the
          point of respecting the preference. */}
      <div className="absolute inset-0">
        {!videoFailed && allowVideo && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={gisMapDark}
            onError={() => setVideoFailed(true)}
          >
            <source src="/videos/nbis-hero-loop.mp4" type="video/mp4" />
          </video>
        )}
        {/* Static fallback — shown whenever the video isn't (reduced motion,
            or the video failed to load). */}
        {(videoFailed || !allowVideo) && (
          <img src={gisMapDark} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(20,27,68,0.94) 0%, rgba(13,19,48,0.92) 55%, rgba(21,44,0,0.88) 100%)" }}
        />
      </div>

      {/* Decorative globe, bled off the right edge behind the floating cards
          and headline. See HeroGlobe.tsx for why it's deferred + blended. */}
      <HeroGlobe />

      {/* Floating real-content image cards, Saylo's widget-card pattern */}
      {FLOATING_CARDS.map((card) => (
        <div
          key={card.label}
          className={`absolute z-10 rounded-lg overflow-hidden ${card.className}`}
          style={{
            ...card.pos,
            width: 148,
            height: 100,
            transform: `rotate(${card.rotate})`,
            boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
            border: "3px solid rgba(255,255,255,0.1)",
          }}
        >
          <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute bottom-1.5 left-2 right-2 text-white font-semibold" style={{ fontSize: 9.5 }}>
            {card.label}
          </span>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-[760px] mx-auto">

        {/* Logo mark instead of a text "GIOSPATIAL" eyebrow tag */}
        <div className="mb-7 animate-fade-up" style={{ animationDelay: "0s" }}>
          <img src={logoIconWhite} alt="GIOSPATIAL" className="h-12 w-auto mx-auto" />
        </div>

        {/* Headline — sells the outcome, not the logo */}
        <h1
          className="font-bold text-white animate-fade-up leading-[1.08]"
          style={{
            fontSize: "clamp(34px, 5.2vw, 58px)",
            letterSpacing: "-0.02em",
            animationDelay: "0.1s",
          }}
        >
          From orbit to decision.
        </h1>

        {/* Tagline */}
        <p
          className="text-white/60 animate-fade-up mt-6"
          style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 560, animationDelay: "0.2s" }}
        >
          GIOSPATIAL engineers end-to-end geospatial systems, from satellite ingestion
          and GeoAI analysis to enterprise decision APIs, for organisations managing
          Kenya's land, water, and infrastructure.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 mt-10 animate-fade-up"
          style={{ animationDelay: "0.32s" }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Request a Demo
          </button>
          <button
            onClick={() => scrollTo("products")}
            className="group flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white/70 rounded-full border border-white/20 hover:border-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            See NBIS Platform
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
