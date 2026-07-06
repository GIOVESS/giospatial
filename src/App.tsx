import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteSEO from "./components/RouteSEO";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/divisions/Analytics";
import AILab from "./pages/divisions/AILab";
import Platforms from "./pages/divisions/Platforms";
import Consulting from "./pages/divisions/Consulting";
import Impact from "./pages/divisions/Impact";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import PartnerProgramme from "./pages/PartnerProgramme";
import DeveloperForum from "./pages/DeveloperForum";
import PressMedia from "./pages/PressMedia";
import EventsConferences from "./pages/EventsConferences";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";

const queryClient = new QueryClient();

/**
 * Top-level route map. This is the single source of truth for every URL the
 * site responds to — see README.md for a human-readable table of routes and
 * what each one is for.
 *
 * Static informational pages (Careers, Privacy, etc.) are built from the
 * shared <StaticPage> layout (src/components/StaticPage.tsx) — add a new one
 * by creating a page in src/pages/ that wraps its content in <StaticPage>,
 * then registering a <Route> for it here.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteSEO />
        <Routes>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
