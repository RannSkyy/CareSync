import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VelocityScroll } from './components/VelocityScroll';
import { OverlappingSections } from './components/OverlappingSections';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HealthSetupModal } from './components/modals/HealthSetupModal';
import { ScheduleCallModal } from './components/modals/ScheduleCallModal';
import { DoctorChatModal } from './components/modals/DoctorChatModal';
import { ArticleModal } from './components/modals/ArticleModal';
import { Article } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isHealthSetupOpen, setIsHealthSetupOpen] = useState(false);
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState(false);
  const [isDoctorChatOpen, setIsDoctorChatOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Active section scroll observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['gpus', 'inference', 'about', 'blog', 'docs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#1E2522] flex flex-col font-sans selection:bg-[#084127] selection:text-white">
      {/* Top Maroon Banner */}
      <TopBanner onCheckPlans={() => setIsHealthSetupOpen(true)} />

      {/* Main Navigation */}
      <Navbar
        onGetStarted={() => setIsHealthSetupOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onStartSetup={() => setIsHealthSetupOpen(true)}
          onScheduleCall={() => setIsScheduleCallOpen(true)}
          onOpenDoctorChat={() => setIsDoctorChatOpen(true)}
        />

        {/* Velocity Scroll Banner */}
        <VelocityScroll />

        {/* Overlapping Sections Grid (GPUs, Inference, About, Blog, Docs) */}
        <OverlappingSections
          onOpenArticle={(article) => setSelectedArticle(article)}
          onOpenHealthSetup={() => setIsHealthSetupOpen(true)}
        />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenHealthSetup={() => setIsHealthSetupOpen(true)}
      />

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Interactive Modals */}
      <HealthSetupModal
        isOpen={isHealthSetupOpen}
        onClose={() => setIsHealthSetupOpen(false)}
      />

      <ScheduleCallModal
        isOpen={isScheduleCallOpen}
        onClose={() => setIsScheduleCallOpen(false)}
      />

      <DoctorChatModal
        isOpen={isDoctorChatOpen}
        onClose={() => setIsDoctorChatOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
