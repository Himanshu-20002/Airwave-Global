'use client';

import React, { useEffect } from 'react';
import {
  X,
  ShieldCheck,
  Zap,
  Lock,
  Headset,
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Globe,
  Plane,
  Ship,
  Package,
  Snowflake,
  Send,
  Loader2
} from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

interface MobileQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    service_type: string;
    port_of_loading: string;
    port_of_destination: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const CARGO_MODES = [
  { id: 'air', label: 'Air Freight', icon: Plane },
  { id: 'ocean_fcl', label: 'Ocean FCL', icon: Ship },
  { id: 'ocean_lcl', label: 'Ocean LCL', icon: Package },
  { id: 'project', label: 'Project Cargo', icon: Building2 },
  { id: 'cold_chain', label: 'Cold Chain', icon: Snowflake },
];

export default function MobileQuoteModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSubmit,
  loading,
}: MobileQuoteModalProps) {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md transition-all">
      {/* Backdrop Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full sm:max-w-lg max-h-[92vh] sm:max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white animate-fade-in">
        {/* Header with Verified Badge & Close X */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-800/90 bg-slate-900/95 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold">
                <ShieldCheck className="w-3 h-3" /> Official Airwave RFQ Desk
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight font-display">
              Request Freight Rate Quotation
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center border border-slate-700 transition-colors focus:outline-none shrink-0 ml-2"
            aria-label="Close quotation form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto no-scrollbar">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Trust Badges Strip */}
            <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
              <div className="flex flex-col items-center">
                <Zap className="w-3.5 h-3.5 text-[#fe7f25] mb-0.5" />
                <span className="text-[9px] font-bold text-slate-200">2h Fast SLA</span>
                <span className="text-[8px] text-slate-400">Guaranteed</span>
              </div>
              <div className="flex flex-col items-center border-x border-slate-700/60">
                <Lock className="w-3.5 h-3.5 text-emerald-400 mb-0.5" />
                <span className="text-[9px] font-bold text-slate-200">100% Private</span>
                <span className="text-[8px] text-slate-400">NDA Protected</span>
              </div>
              <div className="flex flex-col items-center">
                <Headset className="w-3.5 h-3.5 text-sky-400 mb-0.5" />
                <span className="text-[9px] font-bold text-slate-200">Instant Support</span>
                <span className="text-[8px] text-slate-400">Live Logistics Desk</span>
              </div>
            </div>

            {/* Section 1: Shipper Contact */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#fe7f25]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe7f25]" />
                <span>1. Shipper Contact Details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name *"
                    className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all"
                  />
                </div>

                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Business Email *"
                    className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone / WhatsApp *"
                    className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all"
                  />
                </div>

                <div className="relative">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name (Optional)"
                    className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Mode & Routing */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#fe7f25]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe7f25]" />
                <span>2. Freight Mode &amp; Routing</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {CARGO_MODES.map((mode) => {
                  const Icon = mode.icon;
                  const isSelected = formData.service_type === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, service_type: mode.id })}
                      className={`py-2 px-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1.5 border transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#fe7f25] to-[#ea580c] text-white border-transparent shadow-md shadow-orange-500/30'
                          : 'bg-slate-800/70 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <Icon className="w-3 h-3 shrink-0" />
                      <span className="truncate">{mode.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-[#fe7f25] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.port_of_loading}
                    onChange={(e) => setFormData({ ...formData, port_of_loading: e.target.value })}
                    placeholder="Origin / POL *"
                    className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-8 pr-2.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all"
                  />
                </div>
                <div className="relative">
                  <Globe className="w-3.5 h-3.5 text-[#0284c7] absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.port_of_destination}
                    onChange={(e) => setFormData({ ...formData, port_of_destination: e.target.value })}
                    placeholder="Dest / POD *"
                    className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-8 pr-2.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Cargo Details */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#fe7f25]">
                  3. Cargo Details &amp; Volume
                </label>
                <span className="text-[9px] text-slate-400">Weight, CBM, Incoterm</span>
              </div>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="e.g. 5 Pallets, 1200 kg, 4.5 CBM, FOB Nhava Sheva to Rotterdam..."
                className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:ring-1 focus:ring-[#fe7f25] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer w-full py-3.5 bg-gradient-to-r from-[#ff8a38] via-[#fe7f25] to-[#ea580c] hover:from-[#fe7f25] hover:to-[#c2410c] disabled:opacity-50 text-white font-black rounded-xl uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-orange-500/30 active:scale-[0.99] flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying &amp; Submitting RFQ...</span>
                </>
              ) : (
                <>
                  <span>SUBMIT RATE INQUIRY</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            {/* Privacy Guarantee Footer */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>Strict Non-Disclosure Protected • 2-Hour Turnaround</span>
            </div>

            {/* WhatsApp Quick Link Bypass */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-medium">Need immediate rate?</span>
              <a
                href="https://wa.me/919818370497"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
