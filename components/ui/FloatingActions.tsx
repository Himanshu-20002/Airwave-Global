'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-[#fe7f25] hover:text-white shadow-lg flex items-center justify-center transition-all ${
          showBackToTop
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-6'
        }`}
        aria-label="Back to Top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Floating WhatsApp trigger */}
      <a
        href="https://wa.me/919818370497"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
