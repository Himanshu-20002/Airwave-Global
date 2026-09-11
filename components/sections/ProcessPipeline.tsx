import React from 'react';
import { ClipboardList, FileCheck, Route, CheckCircle2, Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 'Step 01',
    stageNumber: '01',
    stageTag: 'PHASE 01 • STRATEGY',
    icon: ClipboardList,
    accentColor: '#fe7f25',
    gradient: 'from-[#ff8a38] via-[#fe7f25] to-[#ea580c]',
    shadow: 'shadow-orange-500/20 group-hover:shadow-orange-500/35',
    badge: 'bg-orange-50 text-[#d95b0c] border-orange-200/80',
    hoverBorder: 'group-hover:border-orange-300/80',
    glowColor: 'from-orange-500/10',
    title: 'Consultation & Planning',
    desc: 'Cargo profiling, optimal multimodal routing, upfront rate lock, and carrier space allocation.',
    deliverables: ['Custom Route Profiling', 'Carrier Rate Lock Guarantee', 'Guaranteed Space Slot'],
  },
  {
    step: 'Step 02',
    stageNumber: '02',
    stageTag: 'PHASE 02 • COMPLIANCE',
    icon: FileCheck,
    accentColor: '#0284c7',
    gradient: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    shadow: 'shadow-sky-500/20 group-hover:shadow-sky-500/35',
    badge: 'bg-sky-50 text-[#0284c7] border-sky-200/80',
    hoverBorder: 'group-hover:border-sky-300/80',
    glowColor: 'from-sky-500/10',
    title: 'Documentation & Customs',
    desc: 'Direct ICEGATE 2.0 filings, bill of lading issuance, export clearance, and tariff validation.',
    deliverables: ['Direct ICEGATE EDI Filing', 'B/L & Air Waybill Issuance', 'Zero-Detention Assurance'],
  },
  {
    step: 'Step 03',
    stageNumber: '03',
    stageTag: 'PHASE 03 • TELEMETRY',
    icon: Route,
    accentColor: '#fe7f25',
    gradient: 'from-[#ff8a38] via-[#fe7f25] to-[#ea580c]',
    shadow: 'shadow-orange-500/20 group-hover:shadow-orange-500/35',
    badge: 'bg-orange-50 text-[#d95b0c] border-orange-200/80',
    hoverBorder: 'group-hover:border-orange-300/80',
    glowColor: 'from-orange-500/10',
    title: 'Transit & Live Tracking',
    desc: 'Multimodal freight coordination with 24/7 telematics, live GPS/AIS pings, and milestone logs.',
    deliverables: ['24/7 Live GPS & AIS Vessel', 'Automated Milestone Alerts', 'Active Exception Protocol'],
  },
  {
    step: 'Step 04',
    stageNumber: '04',
    stageTag: 'PHASE 04 • CLOSURE',
    icon: CheckCircle2,
    accentColor: '#0284c7',
    gradient: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    shadow: 'shadow-sky-500/20 group-hover:shadow-sky-500/35',
    badge: 'bg-sky-50 text-[#0284c7] border-sky-200/80',
    hoverBorder: 'group-hover:border-sky-300/80',
    glowColor: 'from-sky-500/10',
    title: 'Final Delivery & POD',
    desc: 'Final-mile doorstep offloading, electronic proof-of-delivery (e-POD), and duty reconciliation.',
    deliverables: ['Electronic POD Sign-Off', 'Duty Reconciliation Invoice', 'Post-Shipment Performance'],
  },
];

export default function ProcessPipeline() {
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Operational Rigor</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Our Logistics <span className="text-[#fe7f25]">Execution Process</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A structured 4-step execution framework ensuring end-to-end transparency, compliance, and on-time cargo delivery.
          </p>
        </div>

        {/* ================= REIMAGINED DESKTOP VIEW (High-End Stage Architecture) ================= */}
        <div className="hidden md:block relative">
          {/* Top Corridor Telemetry Rail */}
          <div className="mb-8 flex items-center justify-between px-3 py-2 bg-slate-100/80 rounded-2xl border border-slate-200/80 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#fe7f25] animate-pulse" />
              <span>CARGO ORIGIN // CONSIGNOR HANDOVER</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="hidden lg:inline">PRECISION MILESTONE TRACKING ACTIVE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fe7f25]" />
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>FINAL CONSIGNEE // DISCHARGE COMPLETED</span>
            </div>
          </div>

          {/* 4 Execution Stage Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(11,27,61,0.05)] hover:shadow-[0_20px_45px_-10px_rgba(11,27,61,0.13)] ${item.hoverBorder} hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-default`}
                >
                  {/* Subtle top ambient color wash on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${item.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  {/* Card Header Row */}
                  <div>
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      {/* Icon squircle with gradient aura */}
                      <div className="relative">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md ${item.shadow} group-hover:scale-105 transition-transform duration-300`}
                        >
                          <Icon className="w-7 h-7 stroke-[1.9] drop-shadow-sm" />
                        </div>
                      </div>

                      {/* Giant subtle stage number watermark */}
                      <span className="text-3xl lg:text-4xl font-black font-mono tracking-tighter text-slate-200 group-hover:text-slate-300 transition-colors select-none">
                        {item.stageNumber}
                      </span>
                    </div>

                    {/* Step Phase Badge */}
                    <div className="mb-2.5">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full border ${item.badge} text-[10px] font-extrabold uppercase tracking-wider`}>
                        {item.stageTag}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#fe7f25] transition-colors duration-200 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed min-h-[48px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Operational Deliverables Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-100 relative z-10">
                    <div className="space-y-1.5">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subtle bottom animated accent bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE LAYOUT (Clean Vertical Dotted Pipeline) ================= */}
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
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-sm ring-4 ring-slate-50`}
                    >
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
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


