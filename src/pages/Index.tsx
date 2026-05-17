import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import UseCases from "@/components/UseCases";
import CustomerStories from "@/components/CustomerStories";
import Products from "@/components/Products";
import Capabilities from "@/components/Capabilities";
import Technology from "@/components/Technology";
import Benefits from "@/components/Benefits";
import GetStarted from "@/components/GetStarted";
import ContactSales from "@/components/ContactSales";
import Footer from "@/components/Footer";

const Index = () => {
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

  return (
    <div style={{ background: "#0a0a0a" }}>
      <Navigation />
      <Hero />
      <WhatIs />
      <UseCases />
      <CustomerStories />
      <Products />
      <Capabilities />
      <Technology />
      <Benefits />
      <GetStarted />
      <ContactSales />
      <Footer />
    </div>
  );
};

export default Index;
