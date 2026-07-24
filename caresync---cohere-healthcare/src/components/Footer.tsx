import React from 'react';
import { ArrowUp, Heart, Shield, Activity, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '../data/mockData';

interface FooterProps {
  onBackToTop: () => void;
  onOpenHealthSetup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop, onOpenHealthSetup }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121816] text-[#E4EDE8] pt-16 pb-12 border-t border-[#1C2622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#24332D]">
          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E07A5F]"></span>
                <span className="w-2.5 h-4 rounded-full bg-[#3D405B]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#81B29A]"></span>
              </div>
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                cohere <span className="font-light text-sm text-[#A1D9BD] ml-1">CareSync</span>
              </span>
            </div>

            <p className="text-sm text-[#A0B0A8] max-w-sm leading-relaxed">
              CareSync empowers adults over 45 to manage medications, doctor appointments, and daily vitals in one unified connected dashboard.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#084127] text-[#A1D9BD] text-xs font-semibold px-3 py-1 rounded-full border border-[#0F5A38]">
                <Activity className="w-3.5 h-3.5 animate-pulse" /> Telemetry Status: Online (99.98% Uptime)
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1D9BD]">Navigation Menu</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[#C0D1C8] hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform & Compliance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A1D9BD]">Health & Security</h4>
            <ul className="space-y-2 text-sm text-[#C0D1C8]">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#A1D9BD]" /> HIPAA Compliant Data Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A1D9BD]" /> Sub-Millisecond Cohere GPU Inference
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#A1D9BD]" /> 24/7 Telehealth Emergency Support
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenHealthSetup}
                className="w-full bg-[#084127] hover:bg-[#06331E] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Start Free Health Setup Today
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#80948A]">
          <p>© 2026 Cohere CareSync Inc. All rights reserved. Designed for active adult longevity.</p>

          <button
            onClick={onBackToTop}
            className="flex items-center gap-1.5 text-[#A1D9BD] hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
