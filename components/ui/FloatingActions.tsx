'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        className={`w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-[#fe7f25] hover:text-white shadow-lg flex items-center justify-center transition-all ${showBackToTop
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-6'
          }`}
        aria-label="Back to Top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Floating WhatsApp trigger */}
      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-950/40 hover:shadow-emerald-500/40 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group"
        aria-label="Direct WhatsApp Chat"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
}
