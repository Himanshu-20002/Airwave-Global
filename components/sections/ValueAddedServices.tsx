'use client';

import React from 'react';
import { ShieldAlert, Box, Scale, Leaf, FileCheck } from 'lucide-react';

const valueServices = [
  {
    icon: ShieldAlert,
    color: 'bg-orange-500/20 text-[#fe7f25]',
    title: 'Cargo Insurance',
    desc: 'All-risk comprehensive coverage',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Box,
    color: 'bg-blue-500/20 text-[#0284c7]',
    title: 'Export Packaging',
    desc: 'ISPM-15 certified wooden crating',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Scale,
    color: 'bg-indigo-500/20 text-[#3e47cc]',
    title: 'Trade Advisory',
    desc: 'FTA & tariff optimization counsel',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Leaf,
    color: 'bg-emerald-500/20 text-emerald-400',
    title: 'Green Logistics',
    desc: 'Carbon offset & eco routing',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: FileCheck,
    color: 'bg-cyan-500/20 text-[#22ace3]',
    title: 'Compliance Support',
    desc: 'Global trade regulatory auditing',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ValueAddedServices() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">360° Value Add</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight uppercase font-display">
            Value-Added <span className="text-[#fe7f25]">Freight Services</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {valueServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden bg-slate-800 shadow-lg border border-slate-700"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center text-sm mb-2`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase">{item.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
