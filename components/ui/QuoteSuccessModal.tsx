'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface QuoteSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  refId: string;
}

export default function QuoteSuccessModal({ isOpen, onClose, refId }: QuoteSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center transform animate-fade-in">
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
          className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
