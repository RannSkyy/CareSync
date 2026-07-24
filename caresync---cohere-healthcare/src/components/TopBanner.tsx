import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface TopBannerProps {
  onCheckPlans: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onCheckPlans }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#5B2329] text-white text-xs sm:text-sm py-2 px-4 transition-all relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 text-center flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <span>We've just launched brand-new plans - packed with more value than ever.</span>
          <button
            onClick={onCheckPlans}
            className="underline underline-offset-4 hover:text-[#E8D0CC] font-medium transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            Check them out
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
