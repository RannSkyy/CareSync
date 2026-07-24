import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (currentScroll > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-300">
      <button
        onClick={scrollToTop}
        className="relative bg-[#084127] text-white hover:bg-[#052C1A] p-3.5 rounded-full shadow-xl transition-all duration-300 cursor-pointer group flex items-center justify-center focus:outline-none"
        aria-label="Back to top"
      >
        {/* Ring Progress Indicator */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-white/20 fill-none stroke-[2.5]"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-[#A1D9BD] fill-none stroke-[2.5] transition-all duration-150"
            style={{
              strokeDasharray: 125.6,
              strokeDashoffset: 125.6 - (125.6 * scrollProgress) / 100,
            }}
          />
        </svg>

        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};
