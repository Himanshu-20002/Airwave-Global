'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

const capabilities = [
  {
    num: '01',
    gradient: 'from-orange-500/40 to-orange-600/10 border-orange-500/30',
    color: 'text-orange-500/20',
    bullet: 'bg-[#fe7f25]',
    title: 'International Freight',
    desc: 'Direct air and ocean freight contracts connecting India to North America, Europe, Asia Pacific, and Africa.',
    items: ['Air Charters & Scheduled Flights', 'FCL & LCL Ocean Consolidation'],
  },
  {
    num: '02',
    gradient: 'from-blue-500/40 to-blue-600/10 border-blue-500/30',
    color: 'text-blue-500/20',
    bullet: 'bg-[#0284c7]',
    title: 'Customs Clearance',
    desc: 'Rapid electronic documentation, HS code advisory, duty optimization, and quarantine compliance.',
    items: ['100% Paperless EDI Filing', 'Bonded Warehousing Logistics'],
  },
  {
    num: '03',
    gradient: 'from-indigo-500/40 to-indigo-600/10 border-indigo-500/30',
    color: 'text-indigo-500/20',
    bullet: 'bg-[#3e47cc]',
    title: 'Multimodal Transport',
    desc: 'Integrated rail, road, air, and marine transport pipelines providing end-to-end cargo movement.',
    items: ['Intermodal Rail Connectivity', 'First & Last Mile Fleet'],
  },
  {
    num: '04',
    gradient: 'from-cyan-500/40 to-cyan-600/10 border-cyan-500/30',
    color: 'text-cyan-500/20',
    bullet: 'bg-[#22ace3]',
    title: 'Heavy Lift & ODC',
    desc: 'Specialized transport of heavy machinery, industrial plants, and out-of-gauge defense consignments.',
    items: ['Engineering Feasibility Studies', 'Turnkey Site Delivery'],
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#071126] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">End-to-End Precision</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight uppercase font-display">
            Logistics <span className="text-[#fe7f25]">Capabilities</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            High-capacity logistics infrastructure optimized to handle critical cargo across global trade lanes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`p-1 rounded-3xl bg-gradient-to-br ${cap.gradient} border hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="bg-[#0b1b3d] rounded-[22px] p-8 h-full flex flex-col justify-between">
                <div>
                  <span className={`text-5xl font-black ${cap.color} block font-display`}>
                    {cap.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{cap.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{cap.desc}</p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 font-medium">
                  {cap.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${cap.bullet}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact-section"
            className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fe7f25] hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-500/20 transition-all"
          >
            <span>Speak to a Senior Freight Expert</span>
            <MessageSquare className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
