import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Divisions from "@/components/Divisions";
import InsightsPreview from "@/components/InsightsPreview";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import Positioning from "@/components/Positioning";
import WhereWeWork from "@/components/WhereWeWork";
import WhyUsCTA from "@/components/WhyUsCTA";
import FAQ from "@/components/FAQ";
import ContactSales from "@/components/ContactSales";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Navigation/Footer pass `{ scrollTo: "<sectionId>" }` via router state when a
  // homepage-section link (e.g. "NBIS Overview") is clicked from another route —
  // since that route's DOM doesn't contain the section, we navigate here first,
  // then scroll to it once this page has mounted.
  useEffect(() => {
    const targetId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!targetId) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.state]);

  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <MarqueeBand items={["GIOSPATIAL", "NBIS", "GeoAI", "Basin-Scale Intelligence", "Nairobi, Kenya", "Intelligence in Every Location"]} />
      <WhereWeWork />
      <Divisions />
      <InsightsPreview />
      <Products />
      <Technology />
      <Positioning />
      <WhyUsCTA />
      <FAQ />
      <ContactSales />
      <Footer />
    </div>
  );
};

export default Index;
