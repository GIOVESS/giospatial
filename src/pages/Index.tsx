import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import UseCases from "@/components/UseCases";
import CustomerStories from "@/components/CustomerStories";
import Products from "@/components/Products";
import Capabilities from "@/components/Capabilities";
import Technology from "@/components/Technology";
import Benefits from "@/components/Benefits";
import Divisions from "@/components/Divisions";
import Partners from "@/components/Partners";
import About from "@/components/About";
import FutureOutlook from "@/components/FutureOutlook";
import GetStarted from "@/components/GetStarted";
import ContactSales from "@/components/ContactSales";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      <WhatIs />
      <UseCases />
      <CustomerStories />
      <Products />
      <Capabilities />
      <Technology />
      <Benefits />
      <Divisions />
      <Partners />
      <About />
      <FutureOutlook />
      <GetStarted />
      <ContactSales />
      <Footer />
    </div>
  );
};

export default Index;
