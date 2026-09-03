import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Homepage FAQ. Answers double as objection-handling right before the
 * Contact Sales section, and feed a matching FAQPage JSON-LD block so
 * Google can surface them as rich results.
 *
 * Edit copy here only — the accordion UI and the schema injection below
 * both read from this single array, so they can't drift out of sync.
 */
const FAQS = [
  {
    question: "Is NBIS a live, deployed platform or a concept?",
    answer:
      "NBIS (Naivasha Basin Intelligence System) is GIOSPATIAL's flagship architecture, currently demonstrated through illustrative case studies on this site. Production deployments are scoped and built per client, talk to our team about what's live today for your use case.",
  },
  {
    question: "What geospatial technology stack does GIOSPATIAL use?",
    answer:
      "Our core stack spans ArcGIS Enterprise and the ArcGIS API for Python, open-source geoprocessing (GDAL, GeoPandas, Rasterio, PostGIS), Sentinel-1/2 and Landsat Earth Observation data, and GeoAI models (YOLOv8, Random Forest, CNN-based change detection) delivered through Python/Flask or Django REST APIs.",
  },
  {
    question: "Do you work with government agencies as well as private companies?",
    answer:
      "Yes. We build for public-sector bodies (water authorities, land commissions, urban planning departments), private enterprise (agriculture, real estate, energy, insurance), and research/NGO partners across East Africa.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "It depends on scope. A focused analytics or GeoAI pilot can run 4-8 weeks; a full enterprise platform deployment (data pipelines, dashboards, ongoing monitoring) typically spans 3-6 months. We scope this precisely during the initial consultation.",
  },
  {
    question: "Can GIOSPATIAL integrate with our existing ArcGIS Enterprise or GIS setup?",
    answer:
      "Yes, this is one of our core consulting services. We work directly with ArcGIS Enterprise, Workflow Manager, Survey123, and SDE geodatabases, and we design integrations to sit alongside your existing systems rather than replace them.",
  },
  {
    question: "What does it cost to get started?",
    answer:
      "Pricing depends on data volume, integration complexity, and deployment scope. Submit the form below with your use case and a solutions engineer will follow up with a scoped estimate within one business day.",
  },
  {
    question: "Where is GIOSPATIAL based, and do you work outside Kenya?",
    answer:
      "We're headquartered in Nairobi, Kenya, and our primary focus is East Africa. We take on select engagements elsewhere on the continent, reach out and we'll let you know if it's a fit.",
  },
];

const FAQ = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section id="faq" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div className="max-w-[760px] mx-auto px-6">
        <div className="text-center mb-14" data-reveal>
          <h2 className="font-bold text-foreground mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
            Frequently asked questions
          </h2>
        </div>

        <div data-reveal>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground" style={{ fontSize: 15 }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60" style={{ fontSize: 14, lineHeight: 1.7 }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
