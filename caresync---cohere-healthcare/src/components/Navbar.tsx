import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/mockData';

interface NavbarProps {
  onGetStarted: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetStarted, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#E8E2D5] shadow-xs' : 'bg-[#FAF8F3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo: Cohere matching reference */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E07A5F] inline-block animate-pulse"></span>
            <span className="w-2.5 h-4 rounded-full bg-[#3D405B] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#81B29A] inline-block"></span>
          </div>
          <span className="font-sans font-extrabold text-2xl tracking-tight text-[#1C2321] group-hover:text-[#084127] transition-colors">
            cohere
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? 'text-[#084127] bg-[#E8EFE8] font-semibold'
                      : 'text-[#2C3531] hover:text-[#084127] hover:bg-[#F0ECE1]'
                  }`}
                >
                  {item.label}
                  {(item.label === 'GPUs' || item.label === 'Inference') && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  )}
                </a>

                {/* Hover Dropdown Menu */}
                {activeDropdown === item.label && (item.label === 'GPUs' || item.label === 'Inference' || item.label === 'Docs') && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-[#FAF8F3] border border-[#E5DFD3] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2 bg-[#F2EFE7] rounded-xl mb-2">
                      <p className="text-xs font-semibold text-[#084127] flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> CareSync {item.label}
                      </p>
                      <p className="text-xs text-[#525E5A] mt-0.5">{item.description}</p>
                    </div>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block p-2 rounded-lg text-xs font-medium text-[#1E2522] hover:bg-[#E8EFE8] hover:text-[#084127] transition-colors flex items-center justify-between"
                    >
                      Explore {item.label} Dashboard
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onGetStarted}
            className="bg-[#E4ECE3] text-[#084127] hover:bg-[#084127] hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer flex items-center gap-2"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#1E2522] hover:bg-[#F0ECE1] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F3] border-b border-[#E5DFD3] px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-xl text-base font-medium text-[#1E2522] hover:bg-[#E8EFE8] hover:text-[#084127] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#62706B]">{item.description}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E5DFD3]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStarted();
              }}
              className="w-full bg-[#084127] text-white py-3 rounded-xl text-base font-semibold shadow-md cursor-pointer hover:bg-[#06331E] transition-colors text-center"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
