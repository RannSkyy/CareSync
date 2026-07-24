import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, HeartPulse } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    ageGroup: '45-54',
    subject: 'General Health Setup Inquiry',
    message: '',
    subscribeNewsletter: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please type your message or inquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF7EE] border border-[#E5DFD3] rounded-3xl p-6 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE8] text-[#084127] text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" /> Get In Touch
            </div>

            <h2 className="font-serif-custom text-4xl sm:text-5xl text-[#161D1A]">
              Connect with Our Care & Technical Support Team
            </h2>

            <p className="text-[#3E4A46] text-base leading-relaxed">
              Whether you are looking to set up CareSync for yourself, an aging family member, or a clinic, our specialists are here to guide you step by step.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] flex items-center justify-center text-[#084127] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#62706B]">Care Hotline (24/7)</p>
                  <p className="font-bold text-sm text-[#161D1A]">+1 (800) 555-CARE (2273)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] flex items-center justify-center text-[#084127] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#62706B]">Direct Email</p>
                  <p className="font-bold text-sm text-[#161D1A]">caresync@cohere.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] flex items-center justify-center text-[#084127] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#62706B]">Headquarters</p>
                  <p className="font-bold text-sm text-[#161D1A]">100 Health Tech Way, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FFFDF7] border border-[#E2DAD0] rounded-2xl p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#E8EFE8] text-[#084127] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-custom text-3xl font-bold text-[#161D1A]">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-[#3E4A46] max-w-md mx-auto">
                  Your message has been received. A CareSync health setup coordinator will contact you at{' '}
                  <span className="font-bold">{formData.email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      ageGroup: '45-54',
                      subject: 'General Health Setup Inquiry',
                      message: '',
                      subscribeNewsletter: true,
                    });
                  }}
                  className="bg-[#084127] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#052C1A] transition-colors cursor-pointer mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-[#FAF8F3] border rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127] ${
                        errors.fullName ? 'border-red-500' : 'border-[#E2DAD0]'
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#FAF8F3] border rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127] ${
                        errors.email ? 'border-red-500' : 'border-[#E2DAD0]'
                      }`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Age Group Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                      Age Bracket
                    </label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full bg-[#FAF8F3] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                    >
                      <option value="Under 45">Under 45</option>
                      <option value="45-54">45 - 54 years</option>
                      <option value="55-64">55 - 64 years</option>
                      <option value="65+">65+ years</option>
                      <option value="Caregiver/Family Member">Caregiver / Family Member</option>
                    </select>
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#E2DAD0] rounded-xl px-4 py-2.5 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  >
                    <option value="General Health Setup Inquiry">Free Health Setup & Onboarding</option>
                    <option value="Medication & Vitals Integration">Medication & Vitals Sync</option>
                    <option value="Doctor & Clinic Partnerships">Doctor & Clinic Partnerships</option>
                    <option value="GPU Infrastructure & API">GPU Infrastructure & API Docs</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-[#FAF8F3] border rounded-xl p-4 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127] resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#E2DAD0]'
                    }`}
                    placeholder="Tell us about your health management goals or questions..."
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                    className="w-4 h-4 accent-[#084127] rounded cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-xs text-[#525E5A] cursor-pointer">
                    Keep me updated with CareSync health research articles and product updates.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#084127] text-white hover:bg-[#052C1A] py-3.5 rounded-xl text-base font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message to Care Team</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
