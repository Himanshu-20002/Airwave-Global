'use client';

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Zap,
  BadgeDollarSign,
  Headset,
  Send,
  Loader2,
} from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import QuoteSuccessModal from '../ui/QuoteSuccessModal';
import MobileQuoteModal from '../ui/MobileQuoteModal';

export default function QuoteSection() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [refId, setRefId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service_type: 'air',
    port_of_loading: '',
    port_of_destination: '',
    message: '',
  });

  // Intercept mobile CTA clicks to open modern quote modal
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const el = e.target as Element | null;
      if (!el || typeof el.closest !== 'function') return;
      
      const target = el.closest('a[href="#contact-section"], a[href$="#contact-section"], a[href*="#contact-section"], [data-open-quote-modal]');
      if (target && window.innerWidth < 1024) {
        e.preventDefault();
        e.stopPropagation();
        setIsMobileModalOpen(true);
      }
    };

    const handleCustomOpen = (e?: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent?.detail?.service) {
        setFormData((prev) => ({ ...prev, service_type: customEvent.detail.service || prev.service_type }));
      }
      setIsMobileModalOpen(true);
    };

    const handleHashChange = () => {
      if (window.location.hash === '#contact-section' && window.innerWidth < 1024) {
        setIsMobileModalOpen(true);
      }
    };

    // Check initial hash on mount
    if (typeof window !== 'undefined' && window.location.hash === '#contact-section' && window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }

    document.addEventListener('click', handleGlobalClick, true);
    window.addEventListener('open-quote-modal', handleCustomOpen);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
      window.removeEventListener('open-quote-modal', handleCustomOpen);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const closeMobileModal = () => {
    setIsMobileModalOpen(false);
    if (typeof window !== 'undefined' && window.location.hash === '#contact-section') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const generatedRef = 'ASG-RFQ-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      if (isMobileModalOpen) {
        setIsMobileModalOpen(false);
      }
      setModalOpen(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service_type: 'air',
        port_of_loading: '',
        port_of_destination: '',
        message: '',
      });
    }, 800);
  };

  // UNTOUCHED ORIGINAL DESKTOP FORM
  const renderDesktopFormFields = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Business Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Company Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Enterprise Global Ltd"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98000 00000"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Cargo Mode
          </label>
          <select
            value={formData.service_type}
            onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#fe7f25]"
          >
            <option value="air">Air Freight</option>
            <option value="ocean_fcl">Ocean FCL</option>
            <option value="ocean_lcl">Ocean LCL</option>
            <option value="project">Project / Heavy Lift</option>
            <option value="cold_chain">Cold Chain Pharma</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Port of Loading (POL) *
          </label>
          <input
            type="text"
            required
            value={formData.port_of_loading}
            onChange={(e) => setFormData({ ...formData, port_of_loading: e.target.value })}
            placeholder="e.g. Nhava Sheva / DEL"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Port of Discharge (POD) *
          </label>
          <input
            type="text"
            required
            value={formData.port_of_destination}
            onChange={(e) => setFormData({ ...formData, port_of_destination: e.target.value })}
            placeholder="e.g. Dubai / Rotterdam"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
          Commodity & Shipment Particulars
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Commodity description, Gross Weight, CBM volume, Incoterm (FOB/CIF/DDP), or hazardous cargo details..."
          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fe7f25] transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-shimmer w-full py-4 bg-[#fe7f25] hover:bg-[#e0650d] disabled:opacity-50 text-white font-black rounded-xl uppercase tracking-widest text-sm transition-all duration-300 shadow-xl shadow-orange-500/25 active:scale-[0.99] flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processing RFQ...</span>
          </>
        ) : (
          <>
            <span>SUBMIT RATE INQUIRY</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        By submitting, you agree to Airwave Global Logistics Private Limited&apos;s Terms &amp; Privacy Policy. We maintain strict non-disclosure of customer freight rates.
      </p>
    </form>
  );

  return (
    <>
      {/* Mobile Anchor */}
      <div id="contact-section" className="lg:hidden" />

      {/* Mobile View: Compact modern CTA trigger replaces the massive inline section */}
      <div className="lg:hidden py-12 px-4 bg-[#071126] text-white">
        <div className="max-w-md mx-auto bg-gradient-to-br from-slate-900 to-[#0b1b3d] p-6 rounded-2xl border border-slate-700/80 shadow-2xl text-center">
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#fe7f25]">Instant Rate RFQ</span>
          <h3 className="text-xl font-black text-white mt-1.5 uppercase font-display">
            Request a Custom Freight Quote
          </h3>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Competitive spot &amp; contract freight forwarding rates backed by guaranteed space allocation.
          </p>

          <div className="mt-5 space-y-2.5 text-left text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px]">Instant turnaround within 2 hours</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-orange-500/20 text-[#fe7f25] flex items-center justify-center shrink-0">
                <BadgeDollarSign className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px]">No hidden port or origin handling fees</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-blue-500/20 text-[#0284c7] flex items-center justify-center shrink-0">
                <Headset className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px]">Dedicated account manager</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileModalOpen(true)}
            className="btn-shimmer mt-6 w-full py-4 bg-gradient-to-r from-[#ff8a38] via-[#fe7f25] to-[#ea580c] hover:from-[#fe7f25] hover:to-[#c2410c] text-white font-black rounded-xl uppercase tracking-widest text-xs shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span>GET INSTANT QUOTE</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Desktop View: Full inline section (UNTOUCHED) */}
      <section className="hidden lg:block py-20 lg:py-28 bg-[#071126] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-slate-900/90 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Value Pitch & Direct Contacts */}
              <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1b3d] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Instant Rate RFQ</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 leading-tight uppercase font-display">
                    Get a Custom Quote from India&apos;s <span className="text-[#fe7f25]">Trusted</span> Partner
                  </h2>
                  <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                    Competitive spot and contract freight forwarding rates backed by guaranteed space allocation and dedicated operational control.
                  </p>

                  <div className="mt-8 space-y-4 text-xs text-slate-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span>Instant turnaround within 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#fe7f25] flex items-center justify-center">
                        <BadgeDollarSign className="w-4 h-4" />
                      </div>
                      <span>No hidden port or origin handling fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#0284c7] flex items-center justify-center">
                        <Headset className="w-4 h-4" />
                      </div>
                      <span>Single point of contact account manager</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Need Immediate Support?</span>
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="tel:+919818370497" className="text-white hover:text-[#fe7f25] font-bold text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#fe7f25]" /> +91 98183 70497
                    </a>
                    <a
                      href="https://wa.me/919818370497"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c35e] hover:to-[#0e776a] text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white transition-transform duration-300 group-hover:scale-110" />
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: RFQ Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-900/60">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                  Request Freight Rate Quotation
                </h3>
                <div className="h-1 w-12 bg-[#fe7f25] mb-6" />

                {renderDesktopFormFields()}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Modern Trustworthy Mobile Quote Modal */}
      <MobileQuoteModal
        isOpen={isMobileModalOpen}
        onClose={closeMobileModal}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        loading={loading}
      />

      {/* Success Modal */}
      <QuoteSuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        refId={refId}
      />
    </>
  );
}
