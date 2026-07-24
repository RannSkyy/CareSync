import React from 'react';
import { X, Calendar, Clock, Share2, Check } from 'lucide-react';
import { Article } from '../../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header bar */}
        <div className="p-4 bg-[#FAF7EE] border-b border-[#E5DFD3] flex items-center justify-between sticky top-0 z-10">
          <span className="bg-[#084127] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-[#EAE3D3] text-[#525E5A] hover:text-[#161D1A] transition-colors cursor-pointer flex items-center gap-1 text-xs"
              title="Share Article"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EAE3D3] text-[#525E5A] hover:text-[#161D1A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Scroll Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif-custom text-3xl sm:text-4xl text-[#161D1A] leading-tight">
              {article.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-[#62706B] border-b border-[#E5DFD3] pb-4">
              <div className="flex items-center gap-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-7 h-7 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-[#161D1A]">{article.author.name}</p>
                  <p className="text-[10px] text-[#62706B]">{article.author.role}</p>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="rounded-2xl overflow-hidden h-64 border border-[#E2DAD0]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Text Content */}
          <div className="prose prose-stone max-w-none text-sm text-[#2E3532] leading-relaxed whitespace-pre-line space-y-4 font-sans">
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
};
