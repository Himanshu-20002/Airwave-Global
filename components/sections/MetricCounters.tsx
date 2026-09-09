'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function MetricCounters() {
  const [counts, setCounts] = useState({ ports: 0, teu: 0, onTime: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers
          const duration = 2000;
          const steps = 60;
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-4">
            <div className="text-3xl lg:text-4xl font-black text-slate-900 font-display">
              {counts.ports}+
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Global Trade Ports</p>
          </div>
          <div className="p-4">
            <div className="text-3xl lg:text-4xl font-black text-[#fe7f25] font-display">
              {counts.teu.toLocaleString()}+
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">TEU Containers Moved</p>
          </div>
          <div className="p-4">
            <div className="text-3xl lg:text-4xl font-black text-[#0284c7] font-display">
              {counts.onTime}%
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">On-Time Execution</p>
          </div>
          <div className="p-4">
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
