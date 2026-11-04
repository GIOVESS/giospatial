import { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";

interface StaticPageProps {
  /** Kept for existing callers; the redesigned header does not show an eyebrow. */
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Trail label shown in breadcrumbs. Defaults to `title`. */
  breadcrumbLabel?: string;
}

/** Shared layout for text-led pages (Privacy, Terms, Legal): page header plus a readable prose column. */
const StaticPage = ({ title, intro, children, breadcrumbLabel }: StaticPageProps) => (
  <>
    <PageHeader crumbs={[{ label: breadcrumbLabel ?? title }]} title={title} intro={intro} />
    <section className="sec">
      <div className="wrap"><div className="prose" data-reveal>{children}</div></div>
    </section>
  </>
);

export default StaticPage;
