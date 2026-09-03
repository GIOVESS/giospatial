import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RouteSEO from "./components/RouteSEO";
import ScrollReveal from "./components/ScrollReveal";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Index from "./pages/Index";

// Every route except "/" is lazy-loaded. This matters concretely, not just
// in theory: adding Leaflet (ContactSales, used on "/") and Recharts
// (InsightArticle) pushed the single eagerly-bundled JS file from ~490KB
// to over 1MB before this change — every visitor to any page was
// downloading every other page's dependencies whether they needed them or
// not. Splitting per-route means a visitor to /privacy never pays for
// Leaflet, Recharts, or (via the homepage) the lazy-loaded globe chunk.
const NotFound = lazy(() => import("./pages/NotFound"));
const Analytics = lazy(() => import("./pages/divisions/Analytics"));
const AILab = lazy(() => import("./pages/divisions/AILab"));
const Platforms = lazy(() => import("./pages/divisions/Platforms"));
const Consulting = lazy(() => import("./pages/divisions/Consulting"));
const Impact = lazy(() => import("./pages/divisions/Impact"));
const Team = lazy(() => import("./pages/Team"));
const Careers = lazy(() => import("./pages/Careers"));
const PartnerProgramme = lazy(() => import("./pages/PartnerProgramme"));
const DeveloperForum = lazy(() => import("./pages/DeveloperForum"));
const PressMedia = lazy(() => import("./pages/PressMedia"));
const EventsConferences = lazy(() => import("./pages/EventsConferences"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Legal = lazy(() => import("./pages/Legal"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NBIS = lazy(() => import("./pages/NBIS"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightArticle = lazy(() => import("./pages/InsightArticle"));

const queryClient = new QueryClient();

/**
 * Minimal, near-invisible loading state for the brief gap while a
 * lazy-loaded route's chunk downloads. Kept deliberately plain — this
 * should be on screen for a fraction of a second on a normal connection,
 * not a full branded loading screen.
 */
const RouteFallback = () => (
  <div style={{ minHeight: "60vh" }} aria-busy="true" aria-label="Loading page" />
);

/**
 * Fades each route's content in on navigation instead of the previous
 * hard, instant swap. key={pathname} forces a full remount on every
 * navigation so the CSS animation restarts — necessary since transitions
 * retarget but this is a mount event, not a toggled property.
 */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition-enter">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/divisions/analytics" element={<Analytics />} />
          <Route path="/divisions/ai-lab" element={<AILab />} />
          <Route path="/divisions/platforms" element={<Platforms />} />
          <Route path="/divisions/consulting" element={<Consulting />} />
          <Route path="/divisions/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<PartnerProgramme />} />
          <Route path="/developer-forum" element={<DeveloperForum />} />
          <Route path="/press" element={<PressMedia />} />
          <Route path="/events" element={<EventsConferences />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/nbis" element={<NBIS />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

/**
 * Top-level route map. This is the single source of truth for every URL the
 * site responds to — see README.md for a human-readable table of routes and
 * what each one is for.
 *
 * Static informational pages (Careers, Privacy, etc.) are built from the
 * shared <StaticPage> layout (src/components/StaticPage.tsx) — add a new one
 * by creating a page in src/pages/ that wraps its content in <StaticPage>,
 * then registering a <Route> for it here (as a lazy import, matching the
 * rest of the route list — see the comment above).
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteSEO />
        <ScrollReveal />
        <StickyMobileCTA />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
