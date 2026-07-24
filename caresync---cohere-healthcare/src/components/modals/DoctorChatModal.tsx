import React, { useState } from 'react';
import { X, Send, HeartPulse, Sparkles, CheckCheck } from 'lucide-react';
import { DOCTORS } from '../../data/mockData';

interface DoctorChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorChatModal: React.FC<DoctorChatModalProps> = ({ isOpen, onClose }) => {
  const doctor = DOCTORS[0];
  const [messages, setMessages] = useState([
    {
      sender: 'doctor',
      text: `Hello! I'm ${doctor.name}. How can I assist with your vitals, medication schedule, or daily 2,050 Kcal calorie goal today?`,
      time: '10:02 AM',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = `Thank you for logging that update. Based on your CareSync 2,050 Kcal target and current medication log, everything is looking balanced. I've noted this in your care circle chart.`;
      
      if (currentInput.toLowerCase().includes('medication') || currentInput.toLowerCase().includes('pill')) {
        reply = `I checked your medication schedule. Your evening dose is scheduled for 8:00 PM with food. Would you like me to set a smart ring chime reminder?`;
      } else if (currentInput.toLowerCase().includes('calorie') || currentInput.toLowerCase().includes('kcal')) {
        reply = `You've logged 1,940 / 2,050 Kcal today. You're right on target for optimal metabolic health!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'doctor',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl max-w-md w-full shadow-2xl flex flex-col h-[520px] overflow-hidden relative">
        {/* Chat Header */}
        <div className="p-4 bg-[#084127] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={doctor.avatar}
                alt={doctor.name}
                className="w-10 h-10 rounded-full object-cover border border-white/30"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-[#084127] rounded-full"></span>
            </div>
            <div>
              <h4 className="font-bold text-sm leading-tight">{doctor.name}</h4>
              <p className="text-[11px] text-[#A1D9BD] flex items-center gap-1">
                <HeartPulse className="w-3 h-3" /> Doctor in your pocket • Online
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Message List */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF7EE]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[80%] ${
                msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div
                className={`p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#084127] text-white rounded-br-none'
                    : 'bg-[#FFFDF7] text-[#161D1A] border border-[#E2DAD0] rounded-bl-none shadow-2xs'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-[#80948A] mt-1 px-1 flex items-center gap-1">
                {msg.time} {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#084127]" />}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#62706B] bg-[#FFFDF7] p-2.5 rounded-xl border border-[#E2DAD0] w-max">
              <Sparkles className="w-3.5 h-3.5 text-[#084127] animate-spin" />
              <span>Dr. Pendelton is typing a clinical note...</span>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#FFFDF7] border-t border-[#E5DFD3] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 bg-[#FAF8F3] border border-[#E2DAD0] rounded-xl px-3.5 py-2 text-xs text-[#1E2522] focus:outline-none focus:border-[#084127]"
            placeholder="Ask a health or medication question..."
          />
          <button
            type="submit"
            className="bg-[#084127] text-white p-2.5 rounded-xl hover:bg-[#052C1A] transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
