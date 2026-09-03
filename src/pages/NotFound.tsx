import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchX } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HELPFUL_LINKS = [
  { label: "Divisions: Analytics", path: "/divisions/analytics" },
  { label: "Divisions: GeoAI Lab", path: "/divisions/ai-lab" },
  { label: "Divisions: Platforms & NBIS", path: "/divisions/consulting" },
  { label: "Leadership & Team", path: "/team" },
  { label: "Careers", path: "/careers" },
  { label: "Partner Programme", path: "/partners" },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404: no route matches", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <section
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #141B44 0%, #0d1330 100%)", paddingTop: 96 }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: "radial-gradient(ellipse 60% 80% at 80% 0%, rgba(38,91,1,0.25) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-[560px] mx-auto px-6 py-24 text-center" data-reveal>
          <SearchX size={48} className="mx-auto mb-6 text-white/30" strokeWidth={1.5} />
          <span
            className="inline-block font-bold uppercase tracking-[0.18em] mb-5 px-4 py-1.5 rounded-full border"
            style={{ fontSize: 10, color: "#9bc97a", borderColor: "rgba(155,201,122,0.3)", background: "rgba(38,91,1,0.15)" }}
          >
            404
          </span>
          <h1 className="font-bold text-white mb-4 leading-tight" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            This page doesn't exist
          </h1>
          <p className="text-white/55 mb-10" style={{ fontSize: 16, lineHeight: 1.7 }}>
            The page at <code className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">{location.pathname}</code>{" "}
            couldn't be found. It may have moved, or the link may be out of date.
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 mb-10 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent-light rounded-full transition-colors"
          >
            Back to Home
          </button>

          <div className="pt-8 border-t border-white/10">
            <p className="font-bold uppercase tracking-widest text-white/35 mb-4" style={{ fontSize: 11 }}>
              Or try one of these
            </p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {HELPFUL_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#9bc97a] font-semibold hover:underline"
                    style={{ fontSize: 13 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
