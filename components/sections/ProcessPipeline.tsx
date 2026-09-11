import React from 'react';
import { ClipboardList, FileCheck, Route, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: 'Step 01',
    icon: ClipboardList,
    gradient: 'from-[#ff8a38] via-[#fe7f25] to-[#ea580c]',
    shadow: 'shadow-orange-500/20 group-hover:shadow-orange-500/35',
    badge: 'bg-orange-50 text-[#d95b0c] border-orange-200/80',
    title: 'Consultation & Planning',
    desc: 'Cargo profiling, optimal routing, rate lock, and carrier space reservation.',
  },
  {
    step: 'Step 02',
    icon: FileCheck,
    gradient: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    shadow: 'shadow-sky-500/20 group-hover:shadow-sky-500/35',
    badge: 'bg-sky-50 text-[#0284c7] border-sky-200/80',
    title: 'Documentation & Customs',
    desc: 'Bill of lading, ICEGATE clearances, export filings, and tariff validation.',
  },
  {
    step: 'Step 03',
    icon: Route,
    gradient: 'from-[#ff8a38] via-[#fe7f25] to-[#ea580c]',
    shadow: 'shadow-orange-500/20 group-hover:shadow-orange-500/35',
    badge: 'bg-orange-50 text-[#d95b0c] border-orange-200/80',
    title: 'Transit & Live Tracking',
    desc: 'Multimodal freight coordination with 24/7 telematics live milestone tracking.',
  },
  {
    step: 'Step 04',
    icon: CheckCircle2,
    gradient: 'from-[#38bdf8] via-[#0284c7] to-[#0369a1]',
    shadow: 'shadow-sky-500/20 group-hover:shadow-sky-500/35',
    badge: 'bg-sky-50 text-[#0284c7] border-sky-200/80',
    title: 'Final Delivery & POD',
    desc: 'Doorstep offloading, electronic proof-of-delivery, and post-shipment review.',
  },
];

export default function ProcessPipeline() {
  return (
    <section id="process-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Soft ambient backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

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

        <div className="hidden md:block relative py-6">
          {/* Horizontal Dotted Connecting Line (Matching mobile dotted flow style) */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[72px] -translate-y-1/2 z-0 pointer-events-none overflow-hidden h-6 flex items-center"
            style={{ containerType: 'inline-size' }}
          >
            <svg className="w-full h-2 overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            </svg>
            <div className="desktop-flow-pulse" />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  {/* Layered Luxury Tactile Squircle Node */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-3xl p-1.5 bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_35px_-8px_rgba(0,0,0,0.14)] transition-all duration-300 group-hover:-translate-y-1.5">
                      <div
                        className={`w-full h-full rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md ${item.shadow} transition-all duration-300 group-hover:scale-[1.02]`}
                      >
                        <Icon className="w-9 h-9 stroke-[1.8] drop-shadow-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Step Badge */}
                  <span className={`mt-5 px-3 py-0.5 rounded-full border ${item.badge} text-[11px] font-bold tracking-wider uppercase shadow-xs`}>
                    {item.step}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 mt-2.5 tracking-tight group-hover:text-[#fe7f25] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-[210px]">
                    {item.desc}
                  </p>
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


