import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Activity, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const VelocityScroll: React.FC = () => {
  const [scrollVelocity, setScrollVelocity] = useState(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);
      lastScrollY.current = currentY;

      // Increase velocity briefly on active scroll
      if (delta > 2) {
        setScrollVelocity(Math.min(3, 1 + delta * 0.05));
      } else {
        setScrollVelocity(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { text: 'AI INFERENCE ENGINE', icon: Cpu },
    { text: 'CARE SYNC DASHBOARD', icon: Activity },
    { text: '2,050 KCAL METABOLIC GOAL', icon: Sparkles },
    { text: '24/7 TELEHEALTH CONSULTATION', icon: ShieldCheck },
    { text: 'LOW-LATENCY GPU CLUSTERS', icon: Zap },
    { text: 'MEDICATION & VITAL REMINDERS', icon: Activity },
  ];

  return (
    <div className="bg-[#084127] text-[#FAF8F3] py-4 overflow-hidden my-12 border-y border-[#0E5233] select-none">
      <div
        className="flex whitespace-nowrap gap-8 animate-marquee"
        style={{
          animationDuration: `${25 / scrollVelocity}s`,
        }}
      >
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 text-xs sm:text-sm font-semibold tracking-widest uppercase opacity-90">
              <Icon className="w-4 h-4 text-[#A1D9BD]" />
              <span>{item.text}</span>
              <span className="text-[#A1D9BD] font-normal">•</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};
