import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface HealthSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HealthSetupModal: React.FC<HealthSetupModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '58',
    primaryGoal: 'Medication Adherence & Daily Vitals',
    calorieGoal: '2050',
    preferredDoctor: 'Dr. Arthur Pendelton',
  });
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#525E5A] hover:text-[#161D1A] p-2 rounded-full hover:bg-[#EAE3D3] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {completed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#E8EFE8] text-[#084127] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-custom text-3xl font-bold text-[#161D1A]">
              CareSync Account Setup Complete!
            </h3>
            <p className="text-sm text-[#3E4A46] leading-relaxed">
              Welcome, <span className="font-bold">{formData.name || 'Member'}</span>! Your daily metabolic calorie target is calibrated at{' '}
              <span className="font-bold">{formData.calorieGoal} Kcal</span>, linked to care team lead{' '}
              <span className="font-bold">{formData.preferredDoctor}</span>.
            </p>
            <div className="p-4 bg-[#E8EFE8] rounded-2xl text-xs text-[#084127] font-semibold">
              ✨ Free 30-Day CareSync Telehealth Trial Active
            </div>
            <button
              onClick={() => {
                setCompleted(false);
                setStep(1);
                onClose();
              }}
              className="w-full bg-[#084127] text-white py-3.5 rounded-xl font-bold text-sm shadow-md cursor-pointer hover:bg-[#052C1A] transition-colors"
            >
              Open My Health Dashboard
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFE8] text-[#084127] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Step {step} of 3
              </span>
              <h3 className="font-serif-custom text-3xl text-[#161D1A]">
                Start Free CareSync Setup
              </h3>
              <p className="text-xs text-[#525E5A] mt-1">
                Personalized connected health setup for active adults over 45.
              </p>
            </div>

            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                    placeholder="Robert Sterling"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Your Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Health Goal */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Primary Health Focus
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  >
                    <option value="Medication Adherence & Daily Vitals">Medication Adherence & Daily Vitals</option>
                    <option value="Metabolic & Caloric Target (2,050 Kcal)">Metabolic & Caloric Target (2,050 Kcal)</option>
                    <option value="Doctor Appointment Synchronization">Doctor Appointment Synchronization</option>
                    <option value="Family Caregiver Sharing">Family Caregiver Sharing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Target Daily Calorie Goal (Kcal)
                  </label>
                  <input
                    type="number"
                    value={formData.calorieGoal}
                    onChange={(e) => setFormData({ ...formData, calorieGoal: e.target.value })}
                    className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Preferred Doctor */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Select Primary Care Specialist
                  </label>
                  <select
                    value={formData.preferredDoctor}
                    onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                    className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  >
                    <option value="Dr. Arthur Pendelton">Dr. Arthur Pendelton (Internal Medicine & Geriatrics)</option>
                    <option value="Dr. Maya Lin">Dr. Maya Lin (Cardiology & Metabolic Health)</option>
                    <option value="Dr. Robert Thorne">Dr. Robert Thorne (Preventive Healthcare)</option>
                  </select>
                </div>

                <div className="p-4 bg-[#EBE3D3] rounded-2xl flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#084127] shrink-0" />
                  <p className="text-xs text-[#2E2822]">
                    CareSync automatically encrypts all medical telemetry using HIPAA-certified end-to-end encryption.
                  </p>
                </div>
              </div>
            )}

            {/* Footer buttons */}
            <div className="mt-8 pt-4 border-t border-[#E2DAD0] flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-semibold text-[#525E5A] hover:text-[#161D1A] cursor-pointer"
                >
                  Back
                </button>
              ) : (
                <span />
              )}

              <button
                onClick={handleNext}
                className="bg-[#084127] text-white hover:bg-[#052C1A] px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>{step === 3 ? 'Complete Setup' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
