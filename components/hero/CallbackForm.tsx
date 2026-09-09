'use client';

import React, { useState } from 'react';
import { PhoneCall, Check } from 'lucide-react';

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="h-full min-h-[385px] flex flex-col justify-between animate-fade-in">
      <div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Direct Line Priority Callback</h3>
          <p className="text-xs text-slate-400 mt-1">Our freight desk will connect with you within 15 minutes.</p>
        </div>

        {submitted ? (
          <div className="p-5 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs text-center space-y-2 my-6">
            <Check className="w-6 h-6 mx-auto text-emerald-400" />
            <p className="font-bold text-sm text-white">Callback Request Logged!</p>
            <p className="text-xs text-slate-300">A senior operations executive will call you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-3">
            <input
              type="text"
              required
              placeholder="Your Full Name"
              className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:bg-slate-950/70 transition-all"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number (e.g. +91 98183 70497)"
              className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#fe7f25] focus:bg-slate-950/70 transition-all"
            />
            <select className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#fe7f25] focus:bg-slate-950/70 transition-all">
              <option value="air" className="bg-slate-900">Air Cargo Inquiry</option>
              <option value="ocean" className="bg-slate-900">Ocean Container Shipment</option>
              <option value="project" className="bg-slate-900">Project Logistics & Heavy Lift</option>
              <option value="customs" className="bg-slate-900">Customs Clearance & Duty</option>
            </select>
          </form>
        )}
      </div>

      <div className="pt-3">
        <button
          onClick={handleSubmit}
          type="button"
          className="w-full py-3.5 bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white font-bold rounded-2xl text-xs transition-all shadow-md shadow-orange-500/25 active:scale-[0.99] flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" /> Request Priority Call
        </button>
      </div>
    </div>
  );
}
