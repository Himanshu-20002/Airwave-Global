'use client';

import React from 'react';

const accreditations = [
  'https://www.airsurgegroup.com/clients/1.png',
  'https://www.airsurgegroup.com/clients/2.png',
  'https://www.airsurgegroup.com/clients/3.png',
  'https://www.airsurgegroup.com/clients/4.png',
  'https://www.airsurgegroup.com/clients/5.png',
  'https://www.airsurgegroup.com/clients/6.png',
  'https://www.airsurgegroup.com/clients/7.png',
  'https://www.airsurgegroup.com/clients/8.png',
];

export default function Accreditations() {
  return (
    <section className="py-12 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h3 className="text-xs uppercase font-bold tracking-widest text-[#fe7f25] mb-1">Accreditations & Compliance</h3>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
          Internationally Certified & Compliant
        </h2>
        <div className="w-12 h-1 bg-[#fe7f25] mx-auto mt-2 rounded-full" />
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 items-center">
          {[...accreditations, ...accreditations].map((src, idx) => (
            <div
              key={idx}
              className="h-16 w-36 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-center transition-all hover:scale-105 hover:bg-white hover:shadow-md shrink-0"
            >
              <img
                src={src}
                alt={`Accreditation Partner ${idx + 1}`}
                className="max-h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
