import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import RedesSociales from "./pages/RedesSociales";
import PautaPublicitaria from "./pages/PautaPublicitaria";
import Privacidad from "./pages/Privacidad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/pauta-publicitaria" element={<PautaPublicitaria />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/:category/:service" element={<ServiceDetail />} />
          <Route path="/:category/detalle" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
