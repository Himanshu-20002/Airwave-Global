'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function MetricCounters() {
  const [counts, setCounts] = useState({ ports: 150, teu: 25000, onTime: 99.4 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers from 0
          const duration = 1800;
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts({
              ports: Math.floor(150 * progress),
              teu: Math.floor(25000 * progress),
              onTime: parseFloat((99.4 * progress).toFixed(1)),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ ports: 150, teu: 25000, onTime: 99.4 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-10 bg-white border-b border-slate-200/80 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-2 md:grid-cols-4 text-center md:divide-x md:divide-slate-100">
          {/* Center intersection clean empty white space in mobile view only */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full z-10 md:hidden pointer-events-none" />
          <div className="p-4 sm:p-5 border-r border-b md:border-r-0 md:border-b-0 border-dotted border-slate-200">
            <div className="text-3xl lg:text-4xl font-black text-slate-900 font-display">
              {counts.ports}+
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Global Trade Ports</p>
          </div>
          <div className="p-4 sm:p-5 border-b md:border-b-0 border-dotted border-slate-200">
            <div className="text-3xl lg:text-4xl font-black text-[#fe7f25] font-display">
              {counts.teu.toLocaleString()}+
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">TEU Containers Moved</p>
          </div>
          <div className="p-4 sm:p-5 border-r md:border-r-0 border-dotted border-slate-200">
            <div className="text-3xl lg:text-4xl font-black text-[#0284c7] font-display">
              {counts.onTime}%
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">On-Time Execution</p>
          </div>
          <div className="p-4 sm:p-5">
            <div className="text-3xl lg:text-4xl font-black text-emerald-600 font-display">
              24/7
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Dedicated Ops Tower</p>
          </div>
        </div>
      </div>
    </section>
  );
}
