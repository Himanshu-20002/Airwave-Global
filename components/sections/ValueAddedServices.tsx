import React from 'react';
import { ShieldCheck, PackageCheck, TrendingUp, Leaf, FileCheck2 } from 'lucide-react';

const valueServices = [
  {
    icon: ShieldCheck,
    badgeBg: 'bg-orange-500/20 text-[#fe7f25] border-orange-500/40',
    title: 'Cargo Insurance',
    desc: 'All-risk comprehensive door-to-door coverage',
    image: '/images/services/cargo-insurance.webp',
  },
  {
    icon: PackageCheck,
    badgeBg: 'bg-sky-500/20 text-[#38bdf8] border-sky-500/40',
    title: 'Export Packaging',
    desc: 'ISPM-15 certified industrial wooden crating',
    image: '/images/services/export-packaging.webp',
  },
  {
    icon: TrendingUp,
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    title: 'Trade Advisory',
    desc: 'FTA & global tariff optimization counsel',
    image: '/images/services/trade-advisory.webp',
  },
  {
    icon: Leaf,
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Green Logistics',
    desc: 'Carbon offset & eco-friendly fleet routing',
    image: '/images/services/green-logistics.webp',
  },
  {
    icon: FileCheck2,
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    title: 'Compliance Support',
    desc: 'Global trade regulatory auditing & filing',
    image: '/images/services/compliance-support.webp',
  },
];

export default function ValueAddedServices() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">360° Value Add</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5 sm:mt-2 tracking-tight uppercase font-display">
            Value-Added <span className="text-[#fe7f25]">Freight Services</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#fe7f25] mx-auto mt-2.5 sm:mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {valueServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative h-44 sm:h-[340px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 hover:border-slate-600 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Image - Clean and Visible */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  width={360}
                  height={480}
                />

                {/* Subtle top vignette for badge contrast */}
                <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />

                {/* Bottom dark gradient to ensure 100% crisp typography */}
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-44 bg-gradient-to-t from-slate-950 via-slate-950/85 via-45% to-transparent pointer-events-none" />

                {/* Top Floating Glassmorphic Icon Badge */}
                <div className="relative z-10 p-3 sm:p-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl backdrop-blur-md bg-slate-900/80 border ${item.badgeBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-3.5 sm:p-5 pt-0">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight group-hover:text-[#fe7f25] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 sm:mt-1.5 leading-snug sm:leading-relaxed font-normal">
                    {item.desc}
                  </p>
                  <div className="w-5 sm:w-6 h-0.5 bg-[#fe7f25] mt-2 sm:mt-3 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

