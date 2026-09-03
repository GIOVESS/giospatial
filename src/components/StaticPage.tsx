import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import PageHeroBand from "@/components/PageHeroBand";

interface StaticPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Trail label shown in breadcrumbs, e.g. "Careers". Defaults to `title`. */
  breadcrumbLabel?: string;
}

const StaticPage = ({ eyebrow, title, intro, children, breadcrumbLabel }: StaticPageProps) => (
  <div className="min-h-screen bg-white">
    <Navigation />

    {/* Light breadcrumb strip sits between the fixed nav and the dark hero
        band — see PageHeroBand.tsx's comment on why breadcrumbs live
        outside the dark background rather than inside it. */}
    <div style={{ paddingTop: 96, background: "#f7f7f5" }}>
      <div className="max-w-[900px] mx-auto px-6 py-3">
        <PageBreadcrumbs trail={[{ label: breadcrumbLabel ?? title }]} />
      </div>
    </div>

    <PageHeroBand eyebrow={eyebrow} title={title} subtitle={intro} />

    <section style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="max-w-[760px] mx-auto px-6">
        <div className="static-page-content space-y-8" data-reveal>{children}</div>
      </div>
    </section>
    <Footer />
  </div>
);

export default StaticPage;
