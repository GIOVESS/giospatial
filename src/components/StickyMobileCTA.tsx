import { useNavigate, useLocation } from "react-router-dom";
import { MessageSquare, Phone } from "lucide-react";

/**
 * Persistent bottom action bar, mobile only (lg:hidden). Rendered once in
 * App.tsx so it's present on every route — unlike the "Get Started" button
 * in Navigation.tsx, which lives inside the hamburger menu and disappears
 * the moment that menu closes.
 *
 * Hidden on /thank-you since a visitor who just submitted the form doesn't
 * need to be re-prompted to contact sales.
 */
const StickyMobileCTA = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/thank-you") return null;

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-black/[0.08] bg-white"
      style={{ boxShadow: "0 -4px 16px rgba(20,27,68,0.08)" }}
    >
      <a
        href="tel:+254708187019"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground border-r border-black/[0.08]"
      >
        <Phone size={15} />
        Call
      </a>
      <button
        onClick={goToContact}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-accent-foreground bg-accent"
      >
        <MessageSquare size={15} />
        Request a Demo
      </button>
    </div>
  );
};

export default StickyMobileCTA;
