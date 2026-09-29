'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function MetricCounters() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portsRef = useRef<HTMLSpanElement>(null);
  const teuRef = useRef<HTMLSpanElement>(null);
  const onTimeRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const duration = 1400; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic: 1 - Math.pow(1 - progress, 3)
            const ease = 1 - Math.pow(1 - progress, 3);

            const portsVal = Math.floor(150 * ease);
            const teuVal = Math.floor(25000 * ease);
            const onTimeVal = (99.4 * ease).toFixed(1);

            if (portsRef.current) portsRef.current.textContent = `${portsVal}+`;
            if (teuRef.current) teuRef.current.textContent = `${teuVal.toLocaleString()}+`;
            if (onTimeRef.current) onTimeRef.current.textContent = `${onTimeVal}%`;

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (portsRef.current) portsRef.current.textContent = '150+';
              if (teuRef.current) teuRef.current.textContent = '25,000+';
              if (onTimeRef.current) onTimeRef.current.textContent = '99.4%';
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-white border-b border-slate-200/80 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-2 md:grid-cols-4 text-center md:divide-x md:divide-slate-100">
          {/* Center intersection clean empty white space in mobile view only */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full z-10 md:hidden pointer-events-none" />
          <div className="p-4 sm:p-5 border-r border-b md:border-r-0 md:border-b-0 border-dotted border-slate-200">
            <div className="text-3xl lg:text-4xl font-black text-slate-900 font-display">
              <span ref={portsRef}>150+</span>
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">Global Trade Ports</p>
          </div>
          <div className="p-4 sm:p-5 border-b md:border-b-0 border-dotted border-slate-200">
            <div className="text-3xl lg:text-4xl font-black text-[#fe7f25] font-display">
              <span ref={teuRef}>25,000+</span>
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-1">TEU Containers Moved</p>
          </div>
          <div className="p-4 sm:p-5 border-r md:border-r-0 border-dotted border-slate-200">
            <div className="text-3xl lg:text-4xl font-black text-[#0284c7] font-display">
              <span ref={onTimeRef}>99.4%</span>
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
