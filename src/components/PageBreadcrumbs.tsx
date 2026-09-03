import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BASE_URL = "https://www.giospatial.org";

interface Crumb {
  label: string;
  path?: string; // omit on the final (current) crumb
}

/**
 * Visual breadcrumb trail + matching schema.org BreadcrumbList JSON-LD.
 *
 * Always starts from "Home". Pass the remaining trail, e.g. for
 * /divisions/analytics: [{ label: "Divisions" }, { label: "Analytics" }]
 * — omit `path` on any crumb that isn't a real clickable route (like a
 * "Divisions" grouping label with no page of its own).
 *
 * Injects its own <script type="application/ld+json"> into <head> and
 * removes it on unmount, mirroring the pattern in RouteSEO.tsx.
 */
const PageBreadcrumbs = ({ trail }: { trail: Crumb[] }) => {
  const crumbs: Crumb[] = [{ label: "Home", path: "/" }, ...trail];

  useEffect(() => {
    const itemListElement = crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.path ? { item: `${BASE_URL}${crumb.path === "/" ? "" : crumb.path}` } : {}),
    }));

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(trail)]);

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={crumb.label} className="inline-flex items-center gap-1.5 sm:gap-2.5">
              <BreadcrumbItem>
                {isLast || !crumb.path ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path}>{crumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumbs;
