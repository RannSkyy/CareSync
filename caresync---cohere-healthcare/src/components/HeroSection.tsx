import React, { useState } from 'react';
import { Star, Flame, Users, Calendar, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_CALORIE_BARS } from '../data/mockData';
import seniorCoupleImg from '../assets/images/senior_couple_hero_1784897848799.jpg';

interface HeroSectionProps {
  onStartSetup: () => void;
  onScheduleCall: () => void;
  onOpenDoctorChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartSetup,
  onScheduleCall,
  onOpenDoctorChat,
}) => {
  const [activeBar, setActiveBar] = useState<number | null>(null);

  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Tag: Star Rating */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 cursor-default"
      >
        <div className="flex items-center text-[#DAA520]">
          <Star className="w-4 h-4 fill-[#DAA520] stroke-none" />
        </div>
        <span className="text-sm font-medium text-[#2E3532]">
          4/5 star on producthunt
        </span>
      </motion.div>

      {/* Main Hero Header: Grid layout matching reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Title - 7 Cols */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <h1 className="font-serif-custom text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#161D1A] leading-[1.02]">
            Healthy and active; even as you age.
          </h1>
        </motion.div>

        {/* Right Description & Buttons - 5 Cols */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 pt-2 flex flex-col justify-between h-full"
        >
          <p className="text-lg sm:text-xl text-[#3A4541] font-normal leading-relaxed mb-8 max-w-lg">
            CareSync helps adults over 45 manage medications, doctor visits, and daily vitals in one easy, connected dashboard.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartSetup}
              className="bg-[#084127] text-white hover:bg-[#052C1A] px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 group"
            >
              Start Free Health Setup
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScheduleCall}
              className="bg-[#FAF6EE] text-[#161D1A] border border-[#E2DAD0] hover:bg-[#F2EBE0] px-6 py-3.5 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Hero 3-Card Grid matching reference */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Card 1: Collaborative healthcare (Sage Green) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 bg-[#708A7C] text-white rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[300px]"
        >
          <div>
            <h3 className="font-serif-custom text-3xl sm:text-4xl leading-tight mb-3 font-normal">
              Collaborative healthcare
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
              Seamless communication among care teams for better patient outcomes.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/20">
            <p className="text-xs text-white/80 font-medium mb-3">Join the program with</p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#708A7C] object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Member 1"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#708A7C] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Member 2"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#708A7C] object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Member 3"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-sm font-semibold text-white">
                5.8k+ <span className="font-normal opacity-90">Members</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Calories Goal (Warm Beige/Oatmeal) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-4 bg-[#EBE3D3] text-[#24211D] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[300px]"
        >
          {/* Header Row */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D8CEB9]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#24211D] shadow-2xs">
                  <Flame className="w-4 h-4 fill-[#24211D]" />
                </div>
                <span className="text-sm font-medium text-[#4A443C]">Calories Goal</span>
              </div>
              <span className="font-serif-custom text-2xl font-normal text-[#1A1815]">
                2.050 <span className="text-sm font-sans text-[#524B42]">Kcal</span>
              </span>
            </div>

            <div className="mt-6 mb-2">
              <p className="font-serif-custom text-3xl font-normal text-[#1A1815]">
                1.940 <span className="text-xs font-sans text-[#524B42] font-normal">/Kcal Consumed Today</span>
              </p>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-[#524B42] font-medium mb-1.5 px-0.5">
              <span>0</span>
              <span>2.050</span>
            </div>

            {/* Interactive Bars */}
            <div className="flex items-end gap-[3px] h-20 pt-2 px-0.5">
              {MOCK_CALORIE_BARS.map((bar) => (
                <div
                  key={bar.id}
                  onMouseEnter={() => setActiveBar(bar.id)}
                  onMouseLeave={() => setActiveBar(null)}
                  className={`flex-1 rounded-full transition-all duration-200 cursor-pointer relative group ${
                    bar.isFilled ? 'bg-[#2E2822] hover:bg-[#084127]' : 'bg-[#FAF6EE] hover:bg-[#D5CCBA]'
                  }`}
                  style={{
                    height: `${Math.max(15, (bar.value / 2500) * 100)}%`,
                  }}
                >
                  {/* Tooltip */}
                  {activeBar === bar.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#1A1815] text-white text-[10px] py-1 px-2 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                      {bar.time}: {bar.value} kcal
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Senior Couple Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="md:col-span-4 rounded-3xl overflow-hidden relative group shadow-sm min-h-[300px] flex flex-col justify-end"
        >
          <img
            src={seniorCoupleImg}
            alt="Doctor in your pocket active seniors"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* Floating Pill Overlay Button */}
          <div className="relative z-10 p-6">
            <button
              onClick={onOpenDoctorChat}
              className="bg-white/95 backdrop-blur-md text-[#161D1A] hover:bg-white hover:text-[#084127] px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 group/btn"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              <span>Doctor in your pocket</span>
              <HeartPulse className="w-4 h-4 text-[#084127] group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
