import { useNavigate, useLocation } from "react-router-dom";
import { logoHorizontal } from "@/assets/images";
import { Mail, MapPin, Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";

/**
 * Footer link columns. Same `{ id }` vs `{ path }` convention as
 * Navigation.tsx's MEGA_NAV — see the comment there for details.
 */
const COLS = [
  {
    heading: "Platform",
    links: [
      { label: "NBIS Overview",          id: "products" },
      { label: "How It Works",           id: "technology" },
      { label: "Platform Capabilities",  id: "capabilities" },
      { label: "GeoAI Engine",           id: "technology" },
      { label: "Customer Stories",       id: "stories" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Water Management",       id: "sectors" },
      { label: "Urban Intelligence",     id: "sectors" },
      { label: "Precision Agriculture",  id: "sectors" },
      { label: "Environmental Compliance", id: "sectors" },
      { label: "Infrastructure & Energy", id: "sectors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About GIOSPATIAL",      id: "about" },
      { label: "Leadership & Team",     path: "/team" },
      { label: "Benefits & Support",    id: "benefits" },
      { label: "Careers",               path: "/careers" },
      { label: "Contact Sales",         id: "contact" },
    ],
  },
];

const SOCIALS = [
  { Icon: Facebook,  href: "https://facebook.com/giospatial",        label: "Facebook" },
  { Icon: Twitter,   href: "https://twitter.com/giospatial",         label: "X / Twitter" },
  { Icon: Linkedin,  href: "https://linkedin.com/company/giospatial", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com/giospatial",       label: "Instagram" },
  { Icon: Youtube,   href: "https://youtube.com/@giospatial",        label: "YouTube" },
];

const LEGAL = [
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
  { label: "Legal", path: "/legal" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const year = new Date().getFullYear();

  // Mirrors Navigation.tsx: scrolling to a homepage section only works when
  // already on "/" — otherwise navigate there first and let Index.tsx scroll
  // once it mounts (see its `location.state.scrollTo` effect).
  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goTo = (link: { id?: string; path?: string }) => {
    if (link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
    } else if (link.id) {
      scrollTo(link.id);
    }
  };

  return (
    <footer className="bg-muted border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-14">

        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logoHorizontal} alt="GIOSPATIAL — Intelligence in Every Location" className="h-12 w-auto" />
            </div>
            <p className="text-foreground/50" style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 200 }}>
              Geo-intelligence and spatial data technology for Africa's most critical decisions.
            </p>

            {/* Contact */}
            <div className="mt-5 space-y-2">
              <a
                href="mailto:sales@giospatial.org"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
                style={{ fontSize: 13 }}
              >
                <Mail size={13} />
                sales@giospatial.org
              </a>
              <div className="flex items-center gap-2 text-foreground/50" style={{ fontSize: 13 }}>
                <MapPin size={13} className="text-primary shrink-0" />
                Nakuru, Kenya · East Africa
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <h4
                className="font-bold text-foreground mb-4"
                style={{ fontSize: 13 }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => goTo(link)}
                      className="text-foreground/55 hover:text-foreground transition-colors text-left"
                      style={{ fontSize: 13 }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-black/[0.07]" style={{ paddingTop: 28 }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-foreground/40 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Legal + copyright */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {LEGAL.map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item)}
                  className="text-foreground/40 hover:text-foreground/70 transition-colors"
                  style={{ fontSize: 12 }}
                >
                  {item.label}
                </button>
              ))}
              <span className="text-foreground/35" style={{ fontSize: 12 }}>
                © {year} Giospatial Ltd.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
