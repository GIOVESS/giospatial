import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { logoHorizontal } from "@/assets/images";
import { INSIGHTS } from "@/data/insights";

/**
 * Site-wide mega-nav data. Rendered on every page (this component is shared
 * across the homepage, division pages, and static pages).
 *
 * Each link entry is one of:
 *   { label, id }   — scrolls to a <section id="..."> on the homepage.
 *                      Handled by scrollTo()/goTo() below — if we're not
 *                      currently on "/", they navigate there first.
 *   { label, path } — a real route, navigated to directly (e.g. "/careers").
 *
 * To add a nav item: add `path` if it points to a real page/route, or `id`
 * if it should scroll to an existing section id on the homepage (the id
 * must match a <section id="..."> rendered in src/pages/Index.tsx).
 */
const MEGA_NAV = [
  {
    name: "Services",
    groups: [
      {
        title: "By Discipline",
        links: [
          { label: "Analytics",                  path: "/divisions/analytics" },
          { label: "GeoAI Lab",                   path: "/divisions/ai-lab" },
          { label: "Platforms",                   path: "/divisions/platforms" },
          { label: "Consulting & Training",       path: "/divisions/consulting" },
        ],
      },
      {
        title: "By Sector",
        links: [
          { label: "Water Management",            id: "products" },
          { label: "Urban Intelligence",          id: "products" },
          { label: "Precision Agriculture",       id: "products" },
          { label: "Environmental Compliance",    id: "products" },
        ],
      },
      {
        title: "Impact",
        links: [
          { label: "Conservation & Community",    path: "/divisions/impact" },
          { label: "Careers",                    path: "/careers" },
          { label: "Partner Programme",           path: "/partners" },
          { label: "Contact Sales",               id: "contact" },
        ],
      },
    ],
    featured: {
      label: "Consulting",
      title: "GIS Services, By Discipline",
      desc: "Analytics, GeoAI, platforms, training, and impact work, delivered as consulting engagements.",
      id: "products",
    },
  },
  {
    name: "Insights",
    groups: [
      {
        title: "Recent",
        // Pulled from src/data/insights.ts (most-recent-first) instead of
        // hardcoded here, so a new insight shows up in this menu the moment
        // it's added to that file — see the "HOW TO ADD A NEW INSIGHT"
        // comment there.
        links: [
          ...INSIGHTS.slice(0, 3).map((a) => ({ label: a.navLabel ?? a.title, path: `/insights/${a.slug}` })),
          { label: "All Insights", path: "/insights" },
        ],
      },
    ],
    featured: {
      label: "Latest",
      title: INSIGHTS[0].title,
      desc: INSIGHTS[0].excerpt,
      path: `/insights/${INSIGHTS[0].slug}`,
    },
  },
  {
    name: "NBIS",
    groups: [
      {
        title: "Platform",
        links: [
          { label: "Overview",                   path: "/nbis" },
          { label: "Technology Stack",            id: "technology" },
          { label: "Pilot Progress",              path: "/insights/nbis-pilot-progress" },
          { label: "Watch the Demo",              path: "/nbis" },
        ],
      },
    ],
    featured: {
      label: "Flagship Platform",
      title: "Naivasha Basin Intelligence System",
      desc: "Basin-scale geospatial decision-support, actively piloted at Lake Naivasha.",
      path: "/nbis",
    },
  },
  {
    name: "About",
    groups: [
      {
        title: "Company",
        links: [
          { label: "About GIOSPATIAL",           id: "about" },
          { label: "Leadership & Team",          path: "/team" },
          { label: "Developer Forum",            path: "/developer-forum" },
          { label: "Events & Conferences",       path: "/events" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Press & Media",              path: "/press" },
          { label: "FAQ",                       id: "faq" },
          { label: "Careers",                   path: "/careers" },
          { label: "Contact Sales",              id: "contact" },
        ],
      },
    ],
    featured: {
      label: "Our Story",
      title: "A GIS Consultancy, Founded October 2025",
      desc: "Real client work, real analysis, one working team, based in Nairobi, Kenya.",
      id: "about",
    },
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 160);
  };

  // Scrolls to a homepage section by id. If we're not currently on the
  // homepage, that section doesn't exist in the DOM yet — navigate to "/"
  // first and let Index.tsx perform the scroll once it has mounted.
  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
    setActiveMenu(null);
  };

  const goTo = (link: { id?: string; path?: string }) => {
    if (link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
      setIsMobileOpen(false);
      setActiveMenu(null);
    } else if (link.id) {
      scrollTo(link.id);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(20,27,68,0.08)]"
          : "bg-white border-b border-black/[0.06]"
      }`}
      style={{ height: 96 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-6">

        {/* Logo + utility contact info (Saylo-style header contact strip,
            kept inline rather than a separate stacked bar so nav height —
            and every page's top padding that assumes it — stays unchanged) */}
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            className="flex items-center shrink-0 group"
          >
            <img src={logoHorizontal} alt="GIOSPATIAL - Intelligence in Every Location" className="h-16 sm:h-20 w-auto" />
          </a>
          <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-black/[0.08]">
            <a href="mailto:sales@giospatial.org" className="text-foreground/45 hover:text-[#265B01] transition-colors" style={{ fontSize: 12.5 }}>
              sales@giospatial.org
            </a>
            <span className="text-foreground/20">·</span>
            <a href="tel:+254708187019" className="text-foreground/45 hover:text-[#265B01] transition-colors" style={{ fontSize: 12.5 }}>
              +254 708 187 019
            </a>
          </div>
        </div>

        {/* Desktop mega-nav */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {MEGA_NAV.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => openMenu(item.name)}
              onMouseLeave={closeMenu}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                  activeMenu === item.name
                    ? "text-primary bg-primary/[0.07]"
                    : "text-foreground/55 hover:text-foreground hover:bg-black/[0.04]"
                }`}
              >
                {item.name}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    activeMenu === item.name ? "rotate-180 text-primary" : "text-foreground/25"
                  }`}
                />
              </button>

              {/* Mega-menu panel — always mounted (not a hard conditional)
                  so close has an animated exit, not an instant unmount.
                  pointer-events-none while closed keeps it from intercepting
                  hover/click when invisible. */}
              <div
                className="fixed left-0 right-0 border-b border-black/[0.07] shadow-[0_16px_48px_rgba(20,27,68,0.12)] z-50 bg-white transition-[opacity,transform] duration-200"
                style={{
                  top: 96,
                  opacity: activeMenu === item.name ? 1 : 0,
                  transform: activeMenu === item.name ? "translateY(0)" : "translateY(-6px)",
                  pointerEvents: activeMenu === item.name ? "auto" : "none",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                }}
                onMouseEnter={() => openMenu(item.name)}
                onMouseLeave={closeMenu}
              >
                  <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-4 gap-8">
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/25 mb-3">
                          {group.title}
                        </p>
                        <ul className="space-y-2">
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <button
                                className="text-[13px] text-foreground/55 hover:text-foreground transition-colors text-left leading-snug"
                                onClick={() => goTo(link)}
                              >
                                {link.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Featured card */}
                    <div
                      className="border border-black/[0.08] rounded-xl p-5 hover:bg-black/[0.03] transition-colors cursor-pointer bg-muted/40"
                      onClick={() => goTo(item.featured)}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-2">
                        {item.featured.label}
                      </p>
                      <h4 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                        {item.featured.title}
                      </h4>
                      <p className="text-xs text-foreground/45 leading-relaxed mb-3">
                        {item.featured.desc}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-primary font-semibold">
                        View section <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => scrollTo("contact")}
            className="ml-1 flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-accent-foreground bg-accent hover:bg-accent-light transition-all rounded-full hover:pr-4"
          >
            Get In Touch
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground/50 hover:text-foreground transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — always mounted so the collapse/expand can transition;
          a hard {isMobileOpen && ...} conditional has no exit state to
          animate. max-height is normally avoided (transform/opacity only)
          but it's the tolerated exception for accordion-style collapse,
          per this project's animation conventions (see Technology.tsx). */}
      <div
        className="lg:hidden overflow-hidden transition-[max-height,opacity] duration-300"
        style={{
          maxHeight: isMobileOpen ? 480 : 0,
          opacity: isMobileOpen ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
          borderTop: isMobileOpen ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        }}
        aria-hidden={!isMobileOpen}
      >
        <div className="max-h-[80vh] overflow-y-auto bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-4 space-y-0.5">
            {MEGA_NAV.map((item) => (
              <button
                key={item.name}
                className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/65 hover:text-foreground transition-colors rounded-lg hover:bg-black/[0.04]"
                onClick={() => goTo(item.featured)}
                tabIndex={isMobileOpen ? 0 : -1}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-black/[0.07]">
              <button
                className="w-full py-3 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-lg transition-colors"
                onClick={() => scrollTo("contact")}
                tabIndex={isMobileOpen ? 0 : -1}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
