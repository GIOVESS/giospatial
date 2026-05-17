import { useState, useEffect, useRef } from "react";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/giospatial-logo.png";

const MEGA_NAV = [
  {
    name: "Platform",
    groups: [
      {
        title: "NBIS Core",
        links: [
          { label: "NBIS Overview",          id: "products" },
          { label: "How It Works",            id: "technology" },
          { label: "Platform Capabilities",   id: "capabilities" },
          { label: "GeoAI Engine",            id: "technology" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Water Management",        id: "sectors" },
          { label: "Urban Intelligence",      id: "sectors" },
          { label: "Precision Agriculture",   id: "sectors" },
          { label: "Environmental Compliance",id: "sectors" },
        ],
      },
      {
        title: "Data Sources",
        links: [
          { label: "Sentinel-1 SAR",          id: "technology" },
          { label: "Sentinel-2 Multispectral",id: "technology" },
          { label: "PostGIS Architecture",    id: "technology" },
          { label: "Open Standards",          id: "technology" },
        ],
      },
    ],
    featured: {
      label: "Flagship Platform",
      title: "Naivasha Basin Intelligence System",
      desc: "Basin-scale geospatial decision-support for East Africa's water resources.",
      id: "products",
    },
  },
  {
    name: "Industries",
    groups: [
      {
        title: "Public Sector",
        links: [
          { label: "Water Agencies",          id: "sectors" },
          { label: "Land Authorities",        id: "sectors" },
          { label: "Urban Planning Depts",    id: "sectors" },
          { label: "Energy Ministries",       id: "sectors" },
        ],
      },
      {
        title: "Private Sector",
        links: [
          { label: "Agriculture Tech",        id: "sectors" },
          { label: "Real Estate",             id: "sectors" },
          { label: "Infrastructure Firms",    id: "sectors" },
          { label: "Insurance",               id: "sectors" },
        ],
      },
      {
        title: "Research & NGOs",
        links: [
          { label: "Conservation Bodies",     id: "sectors" },
          { label: "Climate Research",        id: "sectors" },
          { label: "Academic Partners",       id: "sectors" },
          { label: "Development Banks",       id: "sectors" },
        ],
      },
    ],
    featured: {
      label: "12 Use Cases",
      title: "Enterprise & Public-Sector Solutions",
      desc: "End-to-end geospatial architecture deployed across Africa's most pressing challenges.",
      id: "sectors",
    },
  },
  {
    name: "Stories",
    groups: [
      {
        title: "Case Studies",
        links: [
          { label: "Lake Naivasha Basin Authority",  id: "stories" },
          { label: "Nairobi Metropolitan Services",  id: "stories" },
          { label: "Kenya National Land Commission", id: "stories" },
          { label: "Eastern Africa Grain Council",   id: "stories" },
        ],
      },
      {
        title: "KenGen Renewable Energy",
        links: [
          { label: "Solar Site Suitability Modelling",id: "stories" },
          { label: "GIS-Powered Site Selection",      id: "stories" },
          { label: "23 High-Viability Sites Found",   id: "stories" },
          { label: "48-Hour vs 4-Month Turnaround",   id: "stories" },
        ],
      },
      {
        title: "Impact Numbers",
        links: [
          { label: "70% Faster Alert Response",      id: "stories" },
          { label: "28% Early Detection Improvement",id: "stories" },
          { label: "48h Site Identification",         id: "stories" },
          { label: "14 Counties Covered",             id: "stories" },
        ],
      },
    ],
    featured: {
      label: "Success Story",
      title: "Lake Naivasha Basin Authority",
      desc: "How NBIS transformed basin-wide environmental monitoring for a Ramsar-designated wetland.",
      id: "stories",
    },
  },
  {
    name: "Technology",
    groups: [
      {
        title: "Geo-Processing",
        links: [
          { label: "GDAL · Fiona · Shapely",    id: "technology" },
          { label: "PostGIS Spatial DB",         id: "technology" },
          { label: "GeoPandas · Rasterio",       id: "technology" },
          { label: "CRS & Coordinate Systems",   id: "technology" },
        ],
      },
      {
        title: "Earth Observation",
        links: [
          { label: "Sentinel-1 SAR",             id: "technology" },
          { label: "Sentinel-2 MSI",             id: "technology" },
          { label: "Planet API · Landsat 8/9",   id: "technology" },
          { label: "Near Real-Time Ingestion",   id: "technology" },
        ],
      },
      {
        title: "GeoAI & ML",
        links: [
          { label: "NDVI · Change Detection",    id: "technology" },
          { label: "YOLOv8 Object Detection",    id: "technology" },
          { label: "Random Forest Models",       id: "technology" },
          { label: "Computer Vision Pipeline",   id: "technology" },
        ],
      },
    ],
    featured: {
      label: "Our Technology",
      title: "The GIOSPATIAL Engine",
      desc: "From satellite ingestion to enterprise APIs — end-to-end, production-proven across Africa.",
      id: "technology",
    },
  },
  {
    name: "About",
    groups: [
      {
        title: "Company",
        links: [
          { label: "About GIOSPATIAL",           id: "about" },
          { label: "Our Mission",                id: "about" },
          { label: "Leadership & Team",          id: "about" },
          { label: "Careers",                   id: "contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Implementation Support",     id: "benefits" },
          { label: "GeoAI Training",             id: "benefits" },
          { label: "Partner Programme",          id: "contact" },
          { label: "Contact Sales",              id: "contact" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Developer Forum",            id: "contact" },
          { label: "Events & Conferences",       id: "benefits" },
          { label: "Open Standards",             id: "technology" },
          { label: "Press & Media",              id: "contact" },
        ],
      },
    ],
    featured: {
      label: "Our Story",
      title: "Built for Africa's Geospatial Future",
      desc: "Engineering end-to-end geo-intelligence from Nakuru, Kenya, for the entire continent.",
      id: "about",
    },
  },
];

const Navigation = () => {
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-[#0a0a0a] border-b border-white/[0.06]"
      }`}
      style={{ height: 64 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-6">

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <img src={logo} alt="GIOSPATIAL" className="h-8 w-auto" />
          <span
            className="font-black text-white text-[14px] group-hover:text-[#00a0e3] transition-colors"
            style={{ letterSpacing: "0.07em" }}
          >
            GIOSPATIAL
          </span>
        </a>

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
                    ? "text-[#00a0e3] bg-[#00a0e3]/[0.07]"
                    : "text-white/55 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    activeMenu === item.name ? "rotate-180 text-[#00a0e3]" : "text-white/25"
                  }`}
                />
              </button>

              {/* Mega-menu panel */}
              {activeMenu === item.name && (
                <div
                  className="fixed left-0 right-0 border-b border-white/[0.07] shadow-[0_16px_48px_rgba(0,0,0,0.6)] z-50"
                  style={{ top: 64, background: "#111111" }}
                  onMouseEnter={() => openMenu(item.name)}
                  onMouseLeave={closeMenu}
                >
                  <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-4 gap-8">
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 mb-3">
                          {group.title}
                        </p>
                        <ul className="space-y-2">
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <button
                                className="text-[13px] text-white/55 hover:text-white transition-colors text-left leading-snug"
                                onClick={() => scrollTo(link.id)}
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
                      className="border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.04] transition-colors cursor-pointer"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                      onClick={() => scrollTo(item.featured.id)}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00a0e3] mb-2">
                        {item.featured.label}
                      </p>
                      <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                        {item.featured.title}
                      </h4>
                      <p className="text-xs text-white/35 leading-relaxed mb-3">
                        {item.featured.desc}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-[#00a0e3] font-semibold">
                        View section <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            className="p-2 text-white/30 hover:text-white/70 transition-colors rounded-md hover:bg-white/[0.04]"
            aria-label="Search"
          >
            <Search size={17} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="ml-1 px-4 py-1.5 text-[13px] font-semibold text-white bg-[#00a0e3] hover:bg-[#0090d0] transition-colors rounded-lg"
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div
          className="lg:hidden border-t border-white/[0.07] max-h-[80vh] overflow-y-auto"
          style={{ background: "#111111" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 py-4 space-y-0.5">
            {MEGA_NAV.map((item) => (
              <button
                key={item.name}
                className="w-full text-left px-4 py-3 text-sm font-medium text-white/65 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
                onClick={() => scrollTo(item.featured.id)}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-white/[0.07]">
              <button
                className="w-full py-3 text-sm font-semibold text-white bg-[#00a0e3] hover:bg-[#0090d0] rounded-lg transition-colors"
                onClick={() => scrollTo("contact")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
