import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/divisions/Analytics";
import AILab from "./pages/divisions/AILab";
import Platforms from "./pages/divisions/Platforms";
import Consulting from "./pages/divisions/Consulting";
import Impact from "./pages/divisions/Impact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/divisions/analytics" element={<Analytics />} />
          <Route path="/divisions/ai-lab" element={<AILab />} />
          <Route path="/divisions/platforms" element={<Platforms />} />
          <Route path="/divisions/consulting" element={<Consulting />} />
          <Route path="/divisions/impact" element={<Impact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
