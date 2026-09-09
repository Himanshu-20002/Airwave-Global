'use client';

import React from 'react';

const forwardLogos = [
  'https://www.airsurgegroup.com/logos/1.png',
  'https://www.airsurgegroup.com/logos/2.png',
  'https://www.airsurgegroup.com/logos/3.png',
  'https://www.airsurgegroup.com/logos/4.png',
  'https://www.airsurgegroup.com/logos/5.png',
  'https://www.airsurgegroup.com/logos/6.png',
  'https://www.airsurgegroup.com/logos/7.png',
  'https://www.airsurgegroup.com/logos/8.png',
];

const reverseLogos = [
  'https://www.airsurgegroup.com/logos/10.png',
  'https://www.airsurgegroup.com/logos/11.png',
  'https://www.airsurgegroup.com/logos/12.png',
  'https://www.airsurgegroup.com/logos/13.png',
  'https://www.airsurgegroup.com/logos/15.png',
  'https://www.airsurgegroup.com/logos/16.png',
  'https://www.airsurgegroup.com/logos/17.png',
];

export default function BrandMarquee() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#0284c7]">Global Carrier & Client Ecosystem</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight font-display">
          Trusted By <span className="text-[#0284c7]">Leading Enterprises</span> & Shipping Lines
        </h2>
      </div>

      {/* Forward Marquee */}
      <div className="relative overflow-hidden w-full mb-6">
        <div className="animate-marquee flex gap-6 items-center">
          {[...forwardLogos, ...forwardLogos].map((src, idx) => (
            <div
              key={idx}
              className="h-14 w-32 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-white hover:shadow-md transition-all shrink-0"
            >
              <img
                src={src}
                alt="Brand Partner"
                className="max-h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Marquee */}
      <div className="relative overflow-hidden w-full">
        <div className="animate-marquee-reverse flex gap-6 items-center">
          {[...reverseLogos, ...reverseLogos].map((src, idx) => (
            <div
              key={idx}
              className="h-14 w-32 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-white hover:shadow-md transition-all shrink-0"
            >
              <img
                src={src}
                alt="Brand Partner"
                className="max-h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
