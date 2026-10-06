'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check } from 'lucide-react';

interface QuoteSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  refId?: string;
}

export default function QuoteSuccessModal({ isOpen, onClose }: QuoteSuccessModalProps) {
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
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 stroke-[2.5]" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 font-display">Inquiry Received Successfully!</h3>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          Thank you for reaching out to Airwave Global Logistics. Our team has received your shipping requirements.
        </p>

        <div className="my-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
          <p className="font-semibold text-slate-900 mb-0.5">What happens next?</p>
          <p className="text-[11px] text-slate-500">
            A dedicated logistics specialist will review your cargo profile and contact you with competitive rates within 2 hours.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 bg-slate-900 hover:bg-[#fe7f25] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>,
    document.body
  );
}
