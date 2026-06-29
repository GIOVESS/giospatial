import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface StaticPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

const StaticPage = ({ eyebrow, title, intro, children }: StaticPageProps) => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <section style={{ paddingTop: 156, paddingBottom: 96 }}>
      <div className="max-w-[760px] mx-auto px-6">
        <span
          className="inline-block font-bold uppercase tracking-[0.15em] mb-5 px-3 py-1 rounded-full border"
          style={{ fontSize: 10, color: "#265B01", borderColor: "rgba(38,91,1,0.25)", background: "rgba(38,91,1,0.06)" }}
        >
          {eyebrow}
        </span>
        <h1
          className="font-bold text-foreground mb-6 leading-tight"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          {title}
        </h1>
        {intro && (
          <p className="text-foreground/60 mb-10" style={{ fontSize: 17, lineHeight: 1.75 }}>
            {intro}
          </p>
        )}
        <div className="static-page-content space-y-8">{children}</div>
      </div>
    </section>
    <Footer />
  </div>
);

export default StaticPage;
