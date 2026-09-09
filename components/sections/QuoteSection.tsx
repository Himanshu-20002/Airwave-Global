'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Zap, BadgeDollarSign, Headset, Send, Loader2 } from 'lucide-react';
import QuoteSuccessModal from '../ui/QuoteSuccessModal';

export default function QuoteSection() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const generatedRef = 'ASG-RFQ-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
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

  return (
    <>
      <section id="contact-section" className="py-20 lg:py-28 bg-[#071126] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-slate-900/90 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Value Pitch & Direct Contacts */}
              <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1b3d] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Instant Rate RFQ</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 leading-tight uppercase font-display">
                    Get a Custom Quote from India's <span className="text-[#fe7f25]">Trusted</span> Partner
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
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Chat WhatsApp
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

                  <p className="text-[11px] text-slate-400">
                    By submitting, you agree to Airwave Global Logistics Private Limited&apos;s Terms &amp; Privacy Policy. We maintain strict non-disclosure of customer freight rates.
                  </p>
                </form>
              </div>

            </div>
          </div>

        </div>
      </section>

      <QuoteSuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        refId={refId}
      />
    </>
  );
}
