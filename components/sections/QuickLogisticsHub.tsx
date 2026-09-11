'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navigation2,
  Box,
  PhoneCall,
  Barcode,
  Search,
  CheckCircle2,
  X,
  ShieldCheck,
  Check,
  Plane,
  Ship,
  ArrowRight,
  Zap,
  Globe2,
} from 'lucide-react';

export default function QuickLogisticsHub() {
  const [activeTab, setActiveTab] = useState<'tracking' | 'cbm' | 'callback'>('tracking');

  // --- Tracking State ---
  const [trackingId, setTrackingId] = useState('AWG-9104-DEL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedId, setSearchedId] = useState('');
  const sampleTrackingIds = ['AWG-9104-DEL', 'OCN-4482-BOM', 'EXP-1092-DXB'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingId.trim() || 'AWG-8942-IN';
    setSearchedId(query.toUpperCase());
    setIsModalOpen(true);
  };

  // --- CBM Calculator State ---
  const [mode, setMode] = useState<'air' | 'ocean'>('air');
  const [length, setLength] = useState(120);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(95);
  const [qty, setQty] = useState(2);

  const totalVolumeCbm = ((length * width * height) / 1000000) * qty;
  const grossWeightTotal = weight * qty;

  let chargeableWeight = 0;
  let rateEstimate = 0;

  if (mode === 'air') {
    const volumetricWeight = totalVolumeCbm * 167;
    chargeableWeight = Math.max(grossWeightTotal, volumetricWeight);
    rateEstimate = Math.max(chargeableWeight * 3.8, 120);
  } else {
    const oceanVolumeWeight = totalVolumeCbm * 1000;
    chargeableWeight = Math.max(grossWeightTotal, oceanVolumeWeight);
    rateEstimate = Math.max(totalVolumeCbm * 65, 180);
  }

  // --- Callback Form State ---
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('air');

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackSubmitted(false);
      setName('');
      setPhone('');
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-y border-slate-200/80">
      {/* Modern Minimal SaaS Geometric Precision Grid with Radial Vignette */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_50%,#000_35%,transparent_100%)] opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric SaaS Ambient Glow Blooms */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/35 via-sky-200/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-blue-200/30 via-indigo-100/35 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: SaaS Top Badge & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-[#fe7f25] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe7f25]" />
              </span>
              <span>Airwave Logistics Workspace</span>
              <span className="text-orange-300">|</span>
              <span className="text-slate-600 font-medium flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#fe7f25]" /> Instant Engine
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Smart Freight &amp; <span className="bg-gradient-to-r from-[#fe7f25] to-[#ea580c] bg-clip-text text-transparent">Operations Hub</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real-time milestone visibility, volumetric CBM cargo estimation, and instant senior logistics dispatch.
            </p>
          </div>

          {/* SaaS Segmented Navigation Pill Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-sm backdrop-blur-md self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'tracking'
                  ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Navigation2 className={`w-4 h-4 ${activeTab === 'tracking' ? 'text-[#fe7f25]' : 'text-slate-400'}`} />
              <span>Track Shipment</span>
            </button>

            <button
              onClick={() => setActiveTab('cbm')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'cbm'
                  ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Box className={`w-4 h-4 ${activeTab === 'cbm' ? 'text-[#0284c7]' : 'text-slate-400'}`} />
              <span>CBM Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('callback')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'callback'
                  ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <PhoneCall className={`w-4 h-4 ${activeTab === 'callback' ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>Priority Help</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Horizontal SaaS Live Shipment Tracking */}
        {activeTab === 'tracking' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.08),0_0_1px_1px_rgba(0,0,0,0.02)] p-6 sm:p-9">
              <form onSubmit={handleSearch} className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                
                {/* Left Prompt */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Consignment Search
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Query by Air Waybill (AWB), Ocean Container, or Airwave Ref ID.
                  </p>
                </div>

                {/* Input Field (SaaS Style) */}
                <div className="lg:col-span-6 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                    <Barcode className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="e.g. AWG-9104-DEL, MAEU1092837, or AWB 176-589"
                    className="w-full bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 focus:bg-white focus:border-[#fe7f25] focus:ring-4 focus:ring-orange-500/10 rounded-2xl pl-14 pr-4 py-4 text-sm font-semibold text-slate-900 placeholder-slate-400 transition-all shadow-inner outline-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="lg:col-span-3">
                  <button
                    type="submit"
                    className="btn-shimmer w-full py-4 bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white font-extrabold rounded-2xl text-sm transition-all shadow-[0_6px_20px_rgba(254,127,37,0.35)] hover:shadow-[0_8px_25px_rgba(254,127,37,0.45)] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track Status Now</span>
                  </button>
                </div>

              </form>

              {/* Sub-bar: Quick Sample Chips & Live Accreditations */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase font-bold text-slate-400">Quick Samples:</span>
                  {sampleTrackingIds.map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTrackingId(id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                        trackingId === id
                          ? 'bg-orange-50 border-orange-300 text-[#fe7f25] shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {id}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Customs Live Gateway</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full hidden sm:inline-flex">
                    <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Multi-Carrier GPS Feed</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Horizontal SaaS CBM & Freight Rate Calculator */}
        {activeTab === 'cbm' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.08),0_0_1px_1px_rgba(0,0,0,0.02)] p-6 sm:p-9">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Mode Pill Toggle */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Mode:</span>
                    <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80">
                      <button
                        type="button"
                        onClick={() => setMode('air')}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          mode === 'air'
                            ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Plane className={`w-3.5 h-3.5 ${mode === 'air' ? 'text-[#fe7f25]' : 'text-slate-400'}`} />
                        <span>Air Cargo (1:167)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMode('ocean')}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          mode === 'ocean'
                            ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Ship className={`w-3.5 h-3.5 ${mode === 'ocean' ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span>Ocean LCL (1:1000)</span>
                      </button>
                    </div>
                  </div>

                  {/* 5 Input Fields in a neat horizontal grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    <div className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/80 focus-within:border-[#fe7f25] focus-within:bg-white transition-all">
                      <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
                        Length (cm)
                      </label>
                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                        className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/80 focus-within:border-[#fe7f25] focus-within:bg-white transition-all">
                      <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
                        Width (cm)
                      </label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                        className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/80 focus-within:border-[#fe7f25] focus-within:bg-white transition-all">
                      <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                        className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/80 focus-within:border-[#fe7f25] focus-within:bg-white transition-all">
                      <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                        className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/80 focus-within:border-[#fe7f25] focus-within:bg-white transition-all">
                      <label className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
                        Boxes (Qty)
                      </label>
                      <input
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(parseInt(e.target.value, 10) || 1)}
                        className="w-full bg-transparent text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculation Output Card (SaaS Deep Blue Capsule) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#07132a] via-[#091b38] to-[#040c1b] rounded-2xl p-6 text-white shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#fe7f25]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10 relative z-10">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Volume</span>
                      <strong className="text-xl font-black text-[#fe7f25]">
                        {totalVolumeCbm.toFixed(3)} <span className="text-xs font-normal text-slate-300">m³</span>
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Chargeable Weight</span>
                      <strong className="text-xl font-black text-white">
                        {chargeableWeight.toFixed(1)} <span className="text-xs font-normal text-slate-300">kg</span>
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 relative z-10">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Est. Freight Budget</span>
                      <strong className="text-xl font-black text-emerald-400">
                        ${rateEstimate.toFixed(0)} - ${(rateEstimate * 1.25).toFixed(0)}{' '}
                        <span className="text-xs font-normal text-slate-300">USD</span>
                      </strong>
                    </div>
                    <Link
                      href="#contact-section"
                      data-open-quote-modal="true"
                      onClick={(e) => {
                        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                          e.preventDefault();
                          const sType = mode === 'air' ? 'air' : 'ocean_lcl';
                          window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: { service: sType } }));
                        }
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/30 flex items-center gap-1.5"
                    >
                      <span>Lock Rate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Horizontal SaaS Priority Direct Callback Form */}
        {activeTab === 'callback' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.08),0_0_1px_1px_rgba(0,0,0,0.02)] p-6 sm:p-9">
              {callbackSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">Priority Callback Logged!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Our operations dispatch team has received your priority request and will connect with you within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                  <div>
                    <label className="text-[11px] text-slate-600 uppercase font-bold block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 border border-slate-200/90 hover:border-slate-300 focus:bg-white focus:border-[#fe7f25] focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 uppercase font-bold block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98000 00000"
                      className="w-full bg-slate-50 border border-slate-200/90 hover:border-slate-300 focus:bg-white focus:border-[#fe7f25] focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-600 uppercase font-bold block mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/90 hover:border-slate-300 focus:bg-white focus:border-[#fe7f25] focus:ring-4 focus:ring-orange-500/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all shadow-xs"
                    >
                      <option value="air">Air Cargo Charters</option>
                      <option value="ocean">Ocean FCL &amp; LCL Cargo</option>
                      <option value="project">Project &amp; Heavy Lift</option>
                      <option value="customs">Customs Brokerage</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1 pt-1 sm:pt-0">
                    <label className="text-[11px] text-transparent uppercase font-bold hidden lg:block mb-1.5">
                      Action
                    </label>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Request 15-Min Callback</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Clean SaaS Modal Popup for Tracking Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-slate-900 shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#fe7f25] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
              <span>Verified Live Consignment</span>
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4">{searchedId}</h4>

            <div className="grid grid-cols-2 gap-3 text-xs mb-5">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Origin Port</span>
                <strong className="text-slate-800 text-sm">INNSA (Nhava Sheva)</strong>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Destination</span>
                <strong className="text-slate-800 text-sm">DXB (Jebel Ali, UAE)</strong>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Carrier &amp; Vessel</span>
                <strong className="text-slate-800">Maersk (Voyage 42E)</strong>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Status / ETA</span>
                <strong className="text-emerald-600">In Transit • On Schedule</strong>
              </div>
            </div>

            {/* Tracking Milestones */}
            <div className="space-y-3.5 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              <div className="flex items-start gap-3 relative z-10">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 bg-white rounded-full shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Customs Clearance Export Passed</p>
                  <span className="text-[11px] text-slate-500">06 Sep 2026, 11:30 IST • Nhava Sheva Terminal</span>
                </div>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 bg-white rounded-full shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Vessel Departed Port of Loading</p>
                  <span className="text-[11px] text-slate-500">07 Sep 2026, 04:15 IST • High Seas Corridor</span>
                </div>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <span className="w-5 h-5 rounded-full bg-[#fe7f25] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  ●
                </span>
                <div>
                  <p className="text-xs font-bold text-[#fe7f25]">Arriving at Destination Anchorage</p>
                  <span className="text-[11px] text-slate-500">Cruising at 18.2 knots • Est. Arrival Tomorrow</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-md"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
