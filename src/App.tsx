import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RouteSEO from "./components/RouteSEO";
import ScrollReveal from "./components/ScrollReveal";
import Layout from "./components/Layout";
import Index from "./pages/Index";

// Every route except "/" is lazy-loaded, so a visitor to /privacy never pays
// for another page's code (Recharts, for example, only loads with the Insights
// article that uses it).
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const Division = lazy(() => import("./pages/divisions/Division"));
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
          <Route path="/services" element={<Services />} />
          <Route path="/divisions/:slug" element={<Division />} />
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
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
