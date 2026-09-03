import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logoHorizontalWhite } from "@/assets/images";
import { Mail, MapPin, Linkedin, Twitter, Youtube, Instagram, Facebook, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MarqueeBand from "@/components/MarqueeBand";

/**
 * Footer link columns. Same `{ id }` vs `{ path }` convention as
 * Navigation.tsx's MEGA_NAV — see the comment there for details.
 */
const COLS = [
  {
    heading: "NBIS",
    links: [
      { label: "Platform Overview",      path: "/nbis" },
      { label: "How It Works",           id: "technology" },
      { label: "Pilot Progress",         path: "/insights/nbis-pilot-progress" },
      { label: "Watch the Demo",         path: "/nbis" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Analytics",              path: "/divisions/analytics" },
      { label: "GeoAI Lab",              path: "/divisions/ai-lab" },
      { label: "Platforms",              path: "/divisions/platforms" },
      { label: "Consulting & Training",  path: "/divisions/consulting" },
      { label: "Impact",                 path: "/divisions/impact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About GIOSPATIAL",      id: "about" },
      { label: "Insights",              path: "/insights" },
      { label: "Leadership & Team",     path: "/team" },
      { label: "FAQ",                   id: "faq" },
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

const MARQUEE_ITEMS = [
  "GIOSPATIAL", "Intelligence in Every Location", "Nairobi, Kenya",
  "GeoAI", "NBIS", "Basin-Scale Intelligence",
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
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

  // Newsletter has no backend endpoint configured (see the same caveat on
  // ContactSales.tsx) — this is intentionally a no-op UI with an honest
  // message rather than a silent fake success state.
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter not yet connected",
      description: "Email us directly at sales@giospatial.org in the meantime.",
    });
    setEmail("");
  };

  return (
    <footer style={{ background: "linear-gradient(180deg, #141B44 0%, #0d1330 100%)" }}>
      <MarqueeBand items={MARQUEE_ITEMS} />

      {/* Newsletter row */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-white mb-1" style={{ fontSize: 20 }}>Stay in the loop</h3>
            <p className="text-white/45" style={{ fontSize: 13.5 }}>
              Occasional updates on new platform capabilities and case studies. No spam.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@organisation.com"
              className="flex-1 md:w-64 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/30 border border-white/15 bg-white/5 focus:border-[#9bc97a] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="shrink-0 flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-full transition-colors"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-14">

        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logoHorizontalWhite} alt="GIOSPATIAL - Intelligence in Every Location" className="h-12 w-auto" loading="lazy" decoding="async" />
            </div>
            <p className="text-white/40" style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 200 }}>
              Geo-intelligence and spatial data technology for Kenya's most critical decisions.
            </p>

            {/* Contact */}
            <div className="mt-5 space-y-2">
              <a
                href="mailto:sales@giospatial.org"
                className="flex items-center gap-2 text-white/45 hover:text-[#9bc97a] transition-colors"
                style={{ fontSize: 13 }}
              >
                <Mail size={13} />
                sales@giospatial.org
              </a>
              <div className="flex items-center gap-2 text-white/45" style={{ fontSize: 13 }}>
                <MapPin size={13} className="text-[#9bc97a] shrink-0" />
                Nairobi, Kenya
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
                      onClick={() => goTo(link)}
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
        <div className="border-t border-white/[0.08]" style={{ paddingTop: 28 }}>
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
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[#9bc97a] hover:text-[#9bc97a] transition-colors"
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
                  className="text-white/35 hover:text-white/70 transition-colors"
                  style={{ fontSize: 12 }}
                >
                  {item.label}
                </button>
              ))}
              <span className="text-white/25" style={{ fontSize: 12 }}>
                © {year} Giospatial Earth Limited.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
