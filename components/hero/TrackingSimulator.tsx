'use client';

import React, { useState } from 'react';
import { Barcode, Search, CheckCircle2, X } from 'lucide-react';

export default function TrackingSimulator() {
  const [trackingId, setTrackingId] = useState('AWG-9104-DEL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchedId, setSearchedId] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingId.trim() || 'AWG-8942-IN';
    setSearchedId(query.toUpperCase());
    setIsModalOpen(true);
  };

  const sampleTrackingIds = ['AWG-9104-DEL', 'OCN-4482-BOM', 'EXP-1092-DXB'];

  return (
    <>
      <div className="h-full min-h-[385px] flex flex-col justify-between animate-fade-in">
        <div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Live Consignment Tracking</h3>
            <p className="text-xs text-slate-400 mt-1">Enter your Air Waybill (AWB), Container No., or Airwave Ref ID.</p>
          </div>

          <form onSubmit={handleSearch} className="space-y-3.5 pt-4">
            <div className="relative">
              <Barcode className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="e.g. AWG-9104-DEL or Container No."
                className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 hover:border-white/35 focus:border-[#fe7f25] focus:bg-slate-950/70 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#fe7f25] transition-all shadow-inner"
              />
            </div>

            {/* Quick Demo Tracking Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider block">
                Quick Sample Consignments:
              </span>
              <div className="flex flex-wrap gap-2">
                {sampleTrackingIds.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setTrackingId(id)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                      trackingId === id
                        ? 'bg-[#fe7f25]/20 border-[#fe7f25] text-orange-300 font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Monitoring Features Pill */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-[11px] flex items-center justify-between mt-2">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                Live EDI Carrier Feed
              </span>
              <span className="text-slate-400">Milestone Webhooks Active</span>
            </div>
          </form>
        </div>

        <div className="pt-3">
          <button
            type="button"
            onClick={handleSearch}
            className="w-full py-3.5 bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white font-bold rounded-2xl text-sm transition-all shadow-[0_10px_25px_-5px_rgba(254,127,37,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(254,127,37,0.6)] active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" /> Track Status Now
          </button>
        </div>
      </div>

      {/* Clean Modal Popup for Tracking Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-7 max-w-lg w-full text-white shadow-2xl relative animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#fe7f25] uppercase tracking-wider mb-1">
              <span>Shipment Tracking Details</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{searchedId}</h4>

            <div className="grid grid-cols-2 gap-3 text-xs mb-5">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="text-slate-400 block text-[10px] uppercase">Origin Port</span>
                <strong className="text-slate-200">INNSA (Nhava Sheva)</strong>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="text-slate-400 block text-[10px] uppercase">Destination</span>
                <strong className="text-slate-200">DXB (Jebel Ali, UAE)</strong>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="text-slate-400 block text-[10px] uppercase">Carrier & Vessel</span>
                <strong className="text-slate-200">Maersk (Voyage 42E)</strong>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="text-slate-400 block text-[10px] uppercase">Status / ETA</span>
                <strong className="text-emerald-400">In Transit • On Schedule</strong>
              </div>
            </div>

            <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
              <div className="flex items-start gap-3 relative z-10">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 bg-slate-900 rounded-full shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Customs Clearance Export Passed</p>
                  <span className="text-[10px] text-slate-400">06 Sep 2026, 11:30 IST • Nhava Sheva Terminal</span>
                </div>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 bg-slate-900 rounded-full shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Vessel Departed Port of Loading</p>
                  <span className="text-[10px] text-slate-400">07 Sep 2026, 04:15 IST • High Seas Corridor</span>
                </div>
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <span className="w-5 h-5 rounded-full bg-[#fe7f25] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  ●
                </span>
                <div>
                  <p className="text-xs font-bold text-[#fe7f25]">Arriving at Destination Hub Anchorage</p>
                  <span className="text-[10px] text-slate-400">Cruising at 18.2 knots • Est. Arrival Tomorrow</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-3 bg-[#fe7f25] hover:bg-[#e0650d] text-white text-xs font-bold rounded-xl transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
