import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, User } from 'lucide-react';
import { DOCTORS } from '../../data/mockData';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-07-25');
  const [selectedTime, setSelectedTime] = useState('2:30 PM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) return;
    setBooked(true);
  };

  const doctor = DOCTORS.find((d) => d.id === selectedDoctor) || DOCTORS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#525E5A] hover:text-[#161D1A] p-2 rounded-full hover:bg-[#EAE3D3] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#E8EFE8] text-[#084127] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-custom text-3xl font-bold text-[#161D1A]">
              Call Scheduled Successfully!
            </h3>
            <p className="text-sm text-[#3E4A46] leading-relaxed">
              Your consultation call with <span className="font-bold">{doctor.name}</span> is confirmed for{' '}
              <span className="font-bold">{selectedDate} at {selectedTime}</span>.
            </p>
            <p className="text-xs text-[#62706B]">
              A calendar invite and SMS reminder have been sent to {patientPhone || 'your contact number'}.
            </p>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="w-full bg-[#084127] text-white py-3 rounded-xl font-bold text-sm shadow-md cursor-pointer hover:bg-[#052C1A] transition-colors mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE3D3] text-[#2E2822] text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" /> Care Consultation
              </span>
              <h3 className="font-serif-custom text-3xl text-[#161D1A]">
                Schedule a Call
              </h3>
              <p className="text-xs text-[#525E5A] mt-1">
                Speak directly with a CareSync health specialist or care physician.
              </p>
            </div>

            {/* Select Doctor */}
            <div>
              <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-2">
                Select Specialist
              </label>
              <div className="space-y-2">
                {DOCTORS.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      selectedDoctor === doc.id
                        ? 'bg-[#E8EFE8] border-[#084127]'
                        : 'bg-[#FFFDF7] border-[#E2DAD0] hover:border-[#084127]'
                    }`}
                  >
                    <img
                      src={doc.avatar}
                      alt={doc.name}
                      className="w-10 h-10 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#161D1A]">{doc.name}</p>
                      <p className="text-xs text-[#525E5A]">{doc.specialty}</p>
                    </div>
                    <span className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded text-[#084127] border border-[#C8DCC8]">
                      {doc.availableSlot}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-3 py-2 text-xs text-[#1E2522] focus:outline-none focus:border-[#084127]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                  Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-3 py-2 text-xs text-[#1E2522] focus:outline-none focus:border-[#084127]"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="2:30 PM">2:30 PM</option>
                  <option value="4:15 PM">4:15 PM</option>
                </select>
              </div>
            </div>

            {/* Patient Name & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-3 py-2 text-xs text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  placeholder="Arthur Pendelton"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full bg-[#FFFDF7] border border-[#E2DAD0] rounded-xl px-3 py-2 text-xs text-[#1E2522] focus:outline-none focus:border-[#084127]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#084127] text-white hover:bg-[#052C1A] py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer shadow-sm mt-4"
            >
              Confirm Appointment Call
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
