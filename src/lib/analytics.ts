// Google Analytics (gtag) integration for SPA with TypeScript

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const DEFAULT_GA_ID = "G-LQWWDRM01Y"; // Provided measurement ID

export function initializeAnalytics(gaId?: string) {
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
  const measurementId = (import.meta.env.VITE_GA_ID as string | undefined) || DEFAULT_GA_ID;
  if (!measurementId || !window.gtag) return;
  window.gtag("config", measurementId, { page_path: path });
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (!window.gtag) return;
  window.gtag("event", action, params || {});
}


