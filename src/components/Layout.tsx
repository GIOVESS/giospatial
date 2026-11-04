import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";

/**
 * Shared page chrome: skip link, header, <main>, footer, and the mobile
 * action bar. Mounted once in App.tsx so the header and footer persist
 * between routes. Pages render only their own sections.
 *
 * Also owns scroll behaviour on navigation:
 *  - a URL hash (/#about, /nbis#demo) scrolls that element into view,
 *    retrying for a moment because lazy routes mount after the URL changes
 *  - anything else scrolls back to the top
 */
const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let raf = 0;
    const find = () => {
      const el = document.getElementById(id);
      if (el) {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        if (id === "main") (el as HTMLElement).focus({ preventScroll: true });
      } else if (tries++ < 40) {
        raf = requestAnimationFrame(find);
      }
    };
    raf = requestAnimationFrame(find);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter />
      <MobileBar />
    </>
  );
};

export default Layout;
