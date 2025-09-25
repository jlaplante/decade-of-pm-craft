import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageview, initializeAnalytics } from "@/lib/analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { useConsent } from "@/hooks/use-consent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function PageviewTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location.pathname, location.search]);
  return null;
}

const App = () => {
  const { hasConsent, isLoading, giveConsent, revokeConsent } = useConsent();

  // Initialize analytics when consent is given
  useEffect(() => {
    if (hasConsent === true) {
      initializeAnalytics("G-LQWWDRM01Y");
    }
  }, [hasConsent]);

  const handleAccept = () => {
    giveConsent();
  };

  const handleDecline = () => {
    revokeConsent();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <PageviewTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Support accessing the prod subpath during local dev */}
            <Route path="/decade-of-pm-craft/*" element={<Navigate to="/" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {!isLoading && hasConsent === null && (
          <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
