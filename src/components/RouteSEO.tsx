import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, DEFAULT_META, ROUTE_META } from "@/lib/route-meta.js";
import { getInsightRouteMeta } from "@/data/insights";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const RouteSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? getInsightRouteMeta(pathname) ?? DEFAULT_META;
    const url = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertCanonical(url);

    // GA4's base snippet in index.html only fires once, on initial load.
    // React Router changes routes without a full page load, so without this
    // every client-side navigation after the first would be invisible to
    // Analytics. This sends a virtual pageview on each route change.
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: meta.title,
        page_path: pathname,
        page_location: url,
      });
    }
  }, [pathname]);

  return null;
};

export default RouteSEO;
