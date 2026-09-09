'use client';

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Link from 'next/link';

export default function CbmCalculator() {
  const [mode, setMode] = useState<'air' | 'ocean'>('air');
  const [length, setLength] = useState(120);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(95);
  const [qty, setQty] = useState(2);

  // Calculations
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

  return (
    <div className="h-full min-h-[385px] flex flex-col justify-between animate-fade-in">
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Freight CBM &amp; Chargeable Weight</h3>
          <p className="text-xs text-slate-400 mt-0.5">Instant volumetric calculation and freight budget estimate.</p>
        </div>

        <div className="flex gap-4 text-xs font-semibold pt-0.5">
        <label className="flex items-center gap-1.5 cursor-pointer text-slate-200">
          <input
            type="radio"
            name="calc_mode"
            value="air"
            checked={mode === 'air'}
            onChange={() => setMode('air')}
            className="accent-[#fe7f25]"
          />
          Air Freight (1:167)
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer text-slate-200">
          <input
            type="radio"
            name="calc_mode"
            value="ocean"
            checked={mode === 'ocean'}
            onChange={() => setMode('ocean')}
            className="accent-[#fe7f25]"
          />
          Ocean LCL (1:1000)
        </label>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="text-[10px] text-slate-300 uppercase font-semibold">Length (cm)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#fe7f25] focus:outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-300 uppercase font-semibold">Width (cm)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#fe7f25] focus:outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-300 uppercase font-semibold">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#fe7f25] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-[10px] text-slate-300 uppercase font-semibold">Weight/Unit (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#fe7f25] focus:outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] text-slate-300 uppercase font-semibold">Packages (Qty)</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value, 10) || 1)}
            className="w-full bg-slate-950/50 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#fe7f25] focus:outline-none"
          />
        </div>
        </div>
      </div>

      {/* Output calculation card */}
      <div className="p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white mt-3">
        <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-white/10">
          <span className="text-xs text-slate-300 font-medium">Estimated Volume (CBM):</span>
          <span className="text-sm font-bold text-[#fe7f25]">{totalVolumeCbm.toFixed(3)} m³</span>
        </div>
        <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-white/10">
          <span className="text-xs text-slate-300 font-medium">Chargeable Weight:</span>
          <span className="text-sm font-bold text-white">{chargeableWeight.toFixed(1)} kg</span>
        </div>
        <div className="flex items-center justify-between pt-0.5">
          <div>
            <span className="text-[9px] text-slate-400 block uppercase">Est. Freight Budget</span>
            <strong className="text-base font-black text-emerald-400">
              ${rateEstimate.toFixed(0)} - ${(rateEstimate * 1.25).toFixed(0)}{' '}
              <span className="text-[10px] font-normal text-slate-300">USD</span>
            </strong>
          </div>
          <Link
            href="#contact-section"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white text-xs font-bold transition-all shadow-md"
          >
            Lock Rate
          </Link>
        </div>
      </div>
    </div>
  );
}
