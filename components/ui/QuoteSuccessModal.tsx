'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check } from 'lucide-react';

interface QuoteSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  refId: string;
}

export default function QuoteSuccessModal({ isOpen, onClose, refId }: QuoteSuccessModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      style={{ zIndex: 9999999, backgroundColor: 'rgba(3, 7, 18, 0.85)' }}
      className="fixed inset-0 z-[9999999] flex items-center justify-center p-4 transition-all"
    >
      <div
        style={{ backgroundColor: '#ffffff' }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 font-display">Inquiry Received Successfully!</h3>
        <p className="text-xs text-slate-500 mt-2">
          Thank you for contacting Airwave Global Logistics Private Limited. Our freight pricing desk has logged your request.
        </p>
        <div className="my-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
          <span className="text-slate-400 block text-[10px] uppercase font-bold">Inquiry Reference ID</span>
          <strong className="text-base font-black text-[#fe7f25]">{refId}</strong>
        </div>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          A dedicated senior account officer will review your port pair and cargo profile to issue competitive freight rates shortly.
        </p>
        <button
          onClick={onClose}
          className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
        >
          Dismiss
        </button>
      </div>
    </div>,
    document.body
  );
}
