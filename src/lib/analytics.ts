// Google Analytics (gtag) integration for SPA with TypeScript

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const DEFAULT_GA_ID = "G-LQWWDRM01Y"; // Provided measurement ID

// Check if user has given consent for analytics
function hasAnalyticsConsent(): boolean {
  try {
    const consent = localStorage.getItem('analytics-consent');
    if (consent) {
      const { accepted, timestamp } = JSON.parse(consent);
      const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
      return accepted && timestamp > oneYearAgo;
    }
  } catch (error) {
    console.error('Error checking analytics consent:', error);
  }
  return false;
}

export function initializeAnalytics(gaId?: string) {
  // Only initialize if user has given consent
  if (!hasAnalyticsConsent()) {
    console.log('Analytics consent not given, skipping initialization');
    return;
  }

  const measurementId = gaId || (import.meta.env.VITE_GA_ID as string | undefined) || DEFAULT_GA_ID;
  if (!measurementId || typeof window === "undefined") return;
  if (window.gtag) return; // already initialized

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  // Disable automatic page_view; we will send manually for SPA navigations
  gtag("config", measurementId, { send_page_view: false });
}

export function trackPageview(path: string) {
  // Only track if user has given consent
  if (!hasAnalyticsConsent()) return;
  
  const measurementId = (import.meta.env.VITE_GA_ID as string | undefined) || DEFAULT_GA_ID;
  if (!measurementId || !window.gtag) return;
  window.gtag("config", measurementId, { page_path: path });
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  // Only track if user has given consent
  if (!hasAnalyticsConsent()) return;
  
  if (!window.gtag) return;
  window.gtag("event", action, params || {});
}


