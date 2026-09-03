import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Powers every [data-reveal] element sitewide (see the CSS rules in
 * index.css). Previously this IntersectionObserver only existed inside
 * Index.tsx, so [data-reveal] on any other page was dead markup — the CSS
 * left it permanently at opacity:0 with nothing to ever add .is-visible.
 *
 * Mounted once in App.tsx, inside <BrowserRouter>. Re-scans on every
 * pathname change since React Router fully swaps the DOM on navigation —
 * the previous page's observed nodes are gone, the new page's need fresh
 * observation.
 *
 * Every route except "/" is React.lazy()-loaded (see App.tsx), rendered
 * under a <Suspense> fallback with no [data-reveal] markup of its own.
 * pathname is already the target path on the very first render of a direct
 * load or a client-side navigation, so the initial querySelectorAll below
 * can run (and find nothing) before that route's chunk has even finished
 * downloading, let alone mounted its real content — leaving every element
 * on that page stuck at the CSS's opacity:0 default forever, since nothing
 * ever observes them. A MutationObserver on top of the initial scan covers
 * that: it watches for [data-reveal] nodes added after the fact — the
 * lazy chunk resolving being the main case, but this also catches anything
 * else that mounts new revealable content later — and observes those too.
 */
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeNew = (root: ParentNode) => {
      root.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    };

    // Run after paint so elements already in the initial viewport (e.g. a
    // page-title band right below the fold on a short static page) still
    // get observed rather than racing the layout.
    const frame = requestAnimationFrame(() => observeNew(document));

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.hasAttribute("data-reveal")) observer.observe(node);
          observeNew(node);
        });
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
