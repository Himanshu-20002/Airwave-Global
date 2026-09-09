'use client';

import React from 'react';
import { ClipboardList, FileCheck, Route, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: 'Step 01',
    icon: ClipboardList,
    color: 'bg-[#fe7f25] text-white shadow-orange-500/30',
    tag: 'bg-orange-100 text-[#fe7f25]',
    title: 'Consultation & Planning',
    desc: 'Cargo profiling, optimal routing, rate lock, and carrier space reservation.',
  },
  {
    step: 'Step 02',
    icon: FileCheck,
    color: 'bg-[#0284c7] text-white shadow-sky-500/30',
    tag: 'bg-blue-100 text-[#0284c7]',
    title: 'Documentation & Customs',
    desc: 'Bill of lading, ICEGATE clearances, export filings, and tariff validation.',
  },
  {
    step: 'Step 03',
    icon: Route,
    color: 'bg-[#fe7f25] text-white shadow-orange-500/30',
    tag: 'bg-orange-100 text-[#fe7f25]',
    title: 'Transit & Live Tracking',
    desc: 'Multimodal freight coordination with 24/7 telematics live milestone tracking.',
  },
  {
    step: 'Step 04',
    icon: CheckCircle2,
    color: 'bg-[#0284c7] text-white shadow-sky-500/30',
    tag: 'bg-blue-100 text-[#0284c7]',
    title: 'Final Delivery & POD',
    desc: 'Doorstep offloading, electronic proof-of-delivery, and post-shipment review.',
  },
];

export default function ProcessPipeline() {
  return (
    <section id="process-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Operational Rigor</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Our Logistics <span className="text-[#fe7f25]">Execution Process</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            A structured 4-step execution framework ensuring end-to-end transparency, compliance, and on-time cargo delivery.
          </p>
        </div>

        {/* Desktop Animated Process Track with Moving Snake Line */}
        <div className="hidden md:block relative py-8">
          <div className="snake-line-container" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div
                    className={`w-24 h-24 rounded-3xl ${item.color} flex items-center justify-center text-3xl shadow-xl ring-8 ring-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <span className={`mt-6 px-3 py-1 rounded-full ${item.tag} text-[10px] font-black uppercase tracking-wider`}>
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-[200px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Cards */}
        <div className="md:hidden space-y-4">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 p-5 rounded-2xl border-l-4 ${
                idx % 2 === 0 ? 'border-[#fe7f25]' : 'border-[#0284c7]'
              } flex items-start gap-4`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${
                  idx % 2 === 0 ? 'bg-[#fe7f25]' : 'bg-[#0284c7]'
                } text-white flex items-center justify-center font-bold text-base shrink-0`}
              >
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
