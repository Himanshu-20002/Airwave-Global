'use client';

import React, { useState, useEffect } from 'react';
import { ClipboardList, FileCheck, Route, CheckCircle2, Check, ArrowRight, Activity, Radio } from 'lucide-react';

const steps = [
  {
    step: 'Step 01',
    stageNumber: '01',
    stageTag: 'PHASE 01 • STRATEGY',
    statusText: 'SPACE LOCK VERIFIED',
    statusDot: 'bg-emerald-500',
    icon: ClipboardList,
    accentColor: '#fe7f25',
    gradient: 'from-[#ff8a38] via-[#fe7f25] to-[#ea580c]',
    shadow: 'shadow-orange-500/25',
    badge: 'bg-orange-50 text-[#d95b0c] border-orange-200/80',
    borderActive: 'border-orange-400 ring-2 ring-orange-400/30',
    glowColor: 'from-orange-500/15',
    telemetryTag: 'SOP-VERIFIED // ROUTE-OPT-DEL-RTM',
    title: 'Consultation & Planning',
    desc: 'Cargo profiling, optimal multimodal routing, upfront rate lock, and carrier space allocation.',
    deliverables: ['Custom Route Profiling', 'Carrier Rate Lock Guarantee', 'Guaranteed Space Slot'],
  },
  {
    step: 'Step 02',
    stageNumber: '02',
    stageTag: 'PHASE 02 • COMPLIANCE',
    statusText: 'ICEGATE 2.0 CLEARED',
    statusDot: 'bg-sky-500',
    icon: FileCheck,
    accentColor: '#0284c7',
    gradient: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    shadow: 'shadow-sky-500/25',
    badge: 'bg-sky-50 text-[#0284c7] border-sky-200/80',
    borderActive: 'border-sky-400 ring-2 ring-sky-400/30',
    glowColor: 'from-sky-500/15',
    telemetryTag: 'EDI-DOC-774 // BILL-OF-LADING-OK',
    title: 'Documentation & Customs',
    desc: 'Direct ICEGATE 2.0 filings, bill of lading issuance, export clearance, and tariff validation.',
    deliverables: ['Direct ICEGATE EDI Filing', 'B/L & Air Waybill Issuance', 'Zero-Detention Assurance'],
  },
  {
    step: 'Step 03',
    stageNumber: '03',
    stageTag: 'PHASE 03 • TELEMETRY',
    statusText: 'AIS / GPS EN ROUTE',
    statusDot: 'bg-[#fe7f25]',
    icon: Route,
    accentColor: '#fe7f25',
    gradient: 'from-[#ff8a38] via-[#fe7f25] to-[#ea580c]',
    shadow: 'shadow-orange-500/25',
    badge: 'bg-orange-50 text-[#d95b0c] border-orange-200/80',
    borderActive: 'border-orange-400 ring-2 ring-orange-400/30',
    glowColor: 'from-orange-500/15',
    telemetryTag: 'WAYPOINT-3 // LAT 18.9°N LON 72.8°E',
    title: 'Transit & Live Tracking',
    desc: 'Multimodal freight coordination with 24/7 telematics, live GPS/AIS pings, and milestone logs.',
    deliverables: ['24/7 Live GPS & AIS Vessel', 'Automated Milestone Alerts', 'Active Exception Protocol'],
  },
  {
    step: 'Step 04',
    stageNumber: '04',
    stageTag: 'PHASE 04 • CLOSURE',
    statusText: 'E-POD CERTIFIED',
    statusDot: 'bg-emerald-500',
    icon: CheckCircle2,
    accentColor: '#0284c7',
    gradient: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    shadow: 'shadow-sky-500/25',
    badge: 'bg-sky-50 text-[#0284c7] border-sky-200/80',
    borderActive: 'border-sky-400 ring-2 ring-sky-400/30',
    glowColor: 'from-sky-500/15',
    telemetryTag: 'DISCHARGE-OK // DIGITAL-SIG-STORED',
    title: 'Final Delivery & POD',
    desc: 'Final-mile doorstep offloading, electronic proof-of-delivery (e-POD), and duty reconciliation.',
    deliverables: ['Electronic POD Sign-Off', 'Duty Reconciliation Invoice', 'Post-Shipment Performance'],
  },
];

export default function ProcessPipeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through stages every 4.2s (smooth, non-intrusive)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % steps.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="process-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
      {/* Modern SaaS Geometric Precision Grid with Radial Vignette */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_40%,transparent_100%)] opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* High-Tech SaaS Ambient Color Blooms */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[350px] bg-orange-500/[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[350px] bg-sky-500/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-extrabold uppercase tracking-widest text-[#fe7f25] mb-2">
            <Radio className="w-3 h-3 text-[#fe7f25] animate-pulse" />
            <span>Operational Rigor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-1 tracking-tight uppercase font-display">
            Our Logistics <span className="text-[#fe7f25]">Execution Process</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A structured 4-step execution framework ensuring end-to-end transparency, compliance, and on-time cargo delivery.
          </p>
        </div>

        {/* ================= REIMAGINED DESKTOP VIEW (Option 4: 120 FPS Laser Flow + Auto-Cycling Scanner) ================= */}
        <div
          className="hidden md:block relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Telemetry Corridor Rail with Live Progress Tracker */}
          <div className="mb-8 p-3 bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
            {/* Origin Endpoint */}
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fe7f25] pulse-dot" />
              <span>ORIGIN // CONSIGNOR CARGO DOCK</span>
            </div>

            {/* Middle Pipeline Laser Flow Bar */}
            <div className="hidden lg:flex items-center gap-3 px-4 flex-1 max-w-xl mx-4">
              <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                {/* Continuous 120 FPS glowing pulse beam */}
                <div className="desktop-flow-pulse w-28" />
                {/* Active Stage Fill Progress */}
                <div
                  className="h-full bg-gradient-to-r from-[#fe7f25] via-[#22ace3] to-[#0284c7] transition-all duration-700 ease-out rounded-full opacity-85"
                  style={{ width: `${((activeStage + 1) / steps.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 shrink-0">
                STAGE {activeStage + 1} OF 4 ACTIVE
              </span>
            </div>

            {/* Destination Endpoint */}
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] pulse-dot" />
              <span>DESTINATION // FINAL DISCHARGE</span>
            </div>
          </div>

          {/* 4 Connected Interactive Execution Cards */}
          <div className="grid grid-cols-4 gap-5 lg:gap-6 relative">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStage === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`bg-white rounded-3xl p-5 lg:p-6 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? `${item.borderActive} shadow-[0_20px_50px_-10px_rgba(11,27,61,0.16)] scale-[1.02] z-20`
                      : 'border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(11,27,61,0.05)] hover:border-slate-300 hover:shadow-[0_15px_35px_-8px_rgba(11,27,61,0.1)] hover:-translate-y-1 z-10'
                  }`}
                  style={{ willChange: 'transform, box-shadow' }}
                >
                  {/* Subtle top ambient color wash for active stage */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${item.glowColor} to-transparent transition-opacity duration-500 pointer-events-none ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  />

                  {/* Card Header Row */}
                  <div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      {/* Icon Squircle with Concentric Stage Accent Ring */}
                      <div className={`relative transition-transform duration-300 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}>
                        {isActive && (
                          <div
                            className="absolute -inset-2 rounded-[22px] border-2 border-dashed pointer-events-none opacity-80"
                            style={{ borderColor: item.accentColor }}
                          />
                        )}
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md ${item.shadow} shrink-0`}
                        >
                          <Icon className="w-6 h-6 stroke-[2] drop-shadow-sm shrink-0" />
                        </div>
                      </div>

                      {/* Giant Subtle Stage Number Watermark */}
                      <span
                        className={`text-3xl lg:text-4xl font-black font-mono tracking-tighter transition-colors select-none ${
                          isActive ? 'text-slate-300' : 'text-slate-200 group-hover:text-slate-300'
                        }`}
                      >
                        {item.stageNumber}
                      </span>
                    </div>

                    {/* Live Telemetry Status Pill */}
                    <div className="mb-2.5 flex items-center gap-1.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border ${item.badge} text-[10px] font-extrabold uppercase tracking-wider`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.statusDot} ${isActive ? 'pulse-dot' : ''}`} />
                        <span>{item.statusText}</span>
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className={`text-base lg:text-lg font-bold tracking-tight transition-colors duration-200 mb-1.5 ${
                      isActive ? 'text-slate-900' : 'text-slate-800 group-hover:text-[#fe7f25]'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed min-h-[44px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Operational Deliverables Checklist */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 relative z-10">
                    <div className="space-y-1.5">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
                          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border ${
                            isActive
                              ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                              : 'bg-emerald-50 text-emerald-600 border-emerald-200/60'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>

                    {/* Telemetry Code Tag */}
                    <div className="mt-3 pt-2 border-t border-slate-100/60 flex items-center justify-between text-[9px] font-mono text-slate-400">
                      <span className="truncate">{item.telemetryTag}</span>
                      <Activity className={`w-3 h-3 ${isActive ? 'text-[#fe7f25] animate-pulse' : 'text-slate-300'}`} />
                    </div>
                  </div>

                  {/* Bottom Animated Accent Bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient} transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Interactive Navigation Hint */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
            <span>● Click any stage or hover to inspect specific execution details</span>
          </div>
        </div>

        {/* ================= MOBILE LAYOUT (Clean Vertical Dotted Pipeline - 100% Preserved) ================= */}
        <div className="md:hidden relative mt-6 px-1">
          {/* Vertical Dotted Flow Line centered exactly with node */}
          <div className="absolute left-[20px] -translate-x-1/2 top-6 bottom-6 w-[2px] z-0 pointer-events-none">
            <div className="w-full h-full border-l-2 border-dashed border-slate-300" />
            <div className="mobile-flow-pulse" />
          </div>

          {/* Vertical Step Cards */}
          <div className="space-y-4 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative flex items-start gap-3.5 group mobile-step-card"
                >
                  {/* Step Node cleanly centered on the spine */}
                  <div className="relative z-10 shrink-0 mt-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-sm ring-4 ring-slate-50 shrink-0`}
                    >
                      <Icon className="w-5 h-5 stroke-[2] shrink-0" />
                    </div>
                  </div>

                  {/* Clean SaaS Card */}
                  <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-all duration-300">
                    {/* Badge */}
                    <span className={`inline-block px-2.5 py-0.5 rounded-full border ${item.badge} text-[10px] font-extrabold uppercase tracking-wider`}>
                      {item.step}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 mt-1.5 tracking-tight group-hover:text-[#fe7f25] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}



