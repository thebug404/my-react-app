
import { useState, useEffect } from 'react';
import { Construction } from 'lucide-react';

const ConstructionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 500); // Match transition duration
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="bg-primary/95 backdrop-blur-sm text-white rounded-xl shadow-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Construction className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Estamos construyendo una experiencia educativa increíble. Pronto estaremos listos.
            </p>
          </div>
          <button 
            onClick={hideBanner}
            className="ml-3 flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBanner;

// Import X icon within the same file
function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
