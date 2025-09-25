import { useState, useEffect } from 'react';

interface ConsentData {
  accepted: boolean;
  timestamp: number;
}

export function useConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem('analytics-consent');
        if (consent) {
          const { accepted, timestamp }: ConsentData = JSON.parse(consent);
          const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
          
          if (timestamp > oneYearAgo) {
            setHasConsent(accepted);
          } else {
            // Consent expired, remove it
            localStorage.removeItem('analytics-consent');
            setHasConsent(null);
          }
        } else {
          setHasConsent(null);
        }
      } catch (error) {
        console.error('Error checking consent:', error);
        setHasConsent(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkConsent();
  }, []);

  const giveConsent = () => {
    const consent: ConsentData = {
      accepted: true,
      timestamp: Date.now()
    };
    localStorage.setItem('analytics-consent', JSON.stringify(consent));
    setHasConsent(true);
  };

  const revokeConsent = () => {
    const consent: ConsentData = {
      accepted: false,
      timestamp: Date.now()
    };
    localStorage.setItem('analytics-consent', JSON.stringify(consent));
    setHasConsent(false);
  };

  return {
    hasConsent,
    isLoading,
    giveConsent,
    revokeConsent
  };
}
