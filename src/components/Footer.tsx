import logo from "@/assets/giospatial-logo.png";
import { Mail, MapPin, Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";

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
      { label: "Our Technology",        id: "technology" },
      { label: "Benefits & Support",    id: "benefits" },
      { label: "Careers",               id: "contact" },
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

const LEGAL = ["Privacy", "Terms", "Legal"];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-14">

        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="GIOSPATIAL" className="h-7 w-auto opacity-85" />
              <span
                className="font-black text-white text-sm"
                style={{ letterSpacing: "0.07em" }}
              >
                GIOSPATIAL
              </span>
            </div>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, maxWidth: 200 }}>
              Geo-intelligence and spatial data technology for Africa's most critical decisions.
            </p>

            {/* Contact */}
            <div className="mt-5 space-y-2">
              <a
                href="mailto:sales@giospatial.org"
                className="flex items-center gap-2 text-white/40 hover:text-[#00a0e3] transition-colors"
                style={{ fontSize: 13 }}
              >
                <Mail size={13} />
                sales@giospatial.org
              </a>
              <div className="flex items-center gap-2" style={{ color: "#555", fontSize: 13 }}>
                <MapPin size={13} className="text-[#00a0e3] shrink-0" />
                Nakuru, Kenya · East Africa
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <h4
                className="font-bold text-white mb-4"
                style={{ fontSize: 13 }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-white/45 hover:text-white transition-colors text-left"
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
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28 }}>
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
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-[#00a0e3] hover:text-[#00a0e3] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Legal + copyright */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {LEGAL.map((item) => (
                <button
                  key={item}
                  className="text-white/30 hover:text-white/60 transition-colors"
                  style={{ fontSize: 12 }}
                >
                  {item}
                </button>
              ))}
              <span style={{ fontSize: 12, color: "#444" }}>
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
