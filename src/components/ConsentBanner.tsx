import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface ConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function ConsentBanner({ onAccept, onDecline }: ConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has been given and hasn't expired
    const consent = localStorage.getItem('analytics-consent');
    if (consent) {
      const { accepted, timestamp } = JSON.parse(consent);
      const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
      
      if (accepted && timestamp > oneYearAgo) {
        // Consent is still valid, don't show banner
        return;
      }
    }
    
    // Show banner if no valid consent
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    const consent = {
      accepted: true,
      timestamp: Date.now()
    };
    localStorage.setItem('analytics-consent', JSON.stringify(consent));
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    const consent = {
      accepted: false,
      timestamp: Date.now()
    };
    localStorage.setItem('analytics-consent', JSON.stringify(consent));
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50 backdrop-blur-sm">
      <Card className="mx-auto max-w-4xl bg-white dark:bg-gray-900 border shadow-lg">
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cookie Consent
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                We use Google Analytics to understand how visitors interact with our website. 
                This helps us improve your experience by collecting information such as:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1 ml-4">
                <li>• Page views and navigation patterns</li>
                <li>• Device and browser information</li>
                <li>• General location data (country/region level)</li>
                <li>• Time spent on pages</li>
                <li>• Referring websites</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This data is anonymized and used solely to improve our website. 
                Your privacy is important to us.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-3 mt-4">
            <Button onClick={handleAccept} className="flex-1">
              Accept Analytics
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="flex-1"
            >
              Decline
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
