import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import LogisticsRoutes from '@/components/ui/LogisticsRoutes';

const capabilities = [
  {
    num: '01',
    title: 'International Freight',
    items: ['Sea & Air Freight', 'Hazardous Cargo'],
    numGlow: 'text-orange-400/40 group-hover:text-orange-400/70',
    borderColor: 'border-[#fe7f25]/80 hover:border-[#fe7f25]',
    dotColor: 'bg-[#fe7f25]',
    elevation3D: 'shadow-[0_14px_32px_-8px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_-8px_rgba(254,127,37,0.35)]',
    ambientGlow: 'from-orange-500/15',
  },
  {
    num: '02',
    title: 'Customs Clearance',
    items: ['Documentation', 'Duty Support'],
    numGlow: 'text-sky-400/40 group-hover:text-sky-400/70',
    borderColor: 'border-[#38bdf8]/80 hover:border-[#38bdf8]',
    dotColor: 'bg-[#38bdf8]',
    elevation3D: 'shadow-[0_14px_32px_-8px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_-8px_rgba(56,189,248,0.35)]',
    ambientGlow: 'from-sky-500/15',
  },
  {
    num: '03',
    title: 'Supply Chain',
    items: ['Multimodal Transport', 'Distribution'],
    numGlow: 'text-indigo-400/40 group-hover:text-indigo-400/70',
    borderColor: 'border-[#818cf8]/80 hover:border-[#818cf8]',
    dotColor: 'bg-[#818cf8]',
    elevation3D: 'shadow-[0_14px_32px_-8px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_-8px_rgba(129,140,248,0.35)]',
    ambientGlow: 'from-indigo-500/15',
  },
  {
    num: '04',
    title: 'Project Cargo',
    items: ['ODC Movement', 'Turnkey Logistics'],
    numGlow: 'text-teal-400/40 group-hover:text-teal-400/70',
    borderColor: 'border-[#2dd4bf]/80 hover:border-[#2dd4bf]',
    dotColor: 'bg-[#2dd4bf]',
    elevation3D: 'shadow-[0_14px_32px_-8px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_-8px_rgba(45,212,191,0.35)]',
    ambientGlow: 'from-teal-500/15',
  },
];

export default function CapabilitiesGrid() {
  return (
    <section
      className="pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 lg:pb-18 bg-[#071126] text-white relative overflow-hidden"
      style={{ contain: 'paint' }}
    >
      {/* Background Subtle SaaS Cyber Grid Accent */}
      {/* <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      /> */}

      {/* Premium Animated Maritime Trade Routes Background (Native 120 FPS SVG) */}
      <LogisticsRoutes />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Optimized Compact Spacing */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 px-2">
          <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">End-to-End Precision</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1.5 tracking-tight uppercase font-display">
            Logistics <span className="text-[#fe7f25]">Capabilities</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#fe7f25] mx-auto mt-2 rounded-full" />
          <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            High-capacity logistics infrastructure optimized to handle critical cargo across global trade lanes.
          </p>
        </div>

        {/* Tactile 3D Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-b from-[#112348] via-[#0b1736] to-[#060e22] rounded-[22px] sm:rounded-[28px] p-6 sm:p-7 lg:p-8 border-2 ${cap.borderColor} ${cap.elevation3D} flex flex-col justify-between min-h-[220px] sm:h-[290px] lg:h-[310px] transition-transform duration-300 transform-gpu hover:-translate-y-2 will-change-transform overflow-hidden`}
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              {/* Top Specular Rim Reflection catching ceiling light */}
              <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none" />

              {/* Zero-Cost Ambient Gradient (No heavy blur-3xl filter) */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] ${cap.ambientGlow} via-transparent to-transparent pointer-events-none`}
              />

              <div className="relative z-10">
                <span
                  className={`text-4xl sm:text-5xl lg:text-6xl font-black ${cap.numGlow} font-display block leading-none select-none transition-colors drop-shadow-sm`}
                >
                  {cap.num}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-white mt-3.5 sm:mt-5 leading-tight tracking-tight font-display">
                  {cap.title}
                </h3>
              </div>

              {/* Subtle Hairline Divider for Clean 3D Separation */}
              <div className="relative z-10 mt-5 sm:mt-0">
                <div className="w-full h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent mb-3.5 sm:mb-4" />
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-semibold text-slate-300">
                  {cap.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 sm:gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${cap.dotColor} shrink-0 ring-2 ring-white/10`} />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Central CTA: Glowing Neon Button (Fluid and Responsive) */}
        <div className="mt-9 sm:mt-11 lg:mt-12 text-center relative z-20 px-3">
          <Link
            href="#contact-section"
            className="btn-neon-glow btn-shimmer group inline-flex items-center justify-center gap-2.5 sm:gap-3.5 px-6 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#fe7f25] via-[#ff6f00] to-[#f97316] text-white font-black text-xs sm:text-sm tracking-wider uppercase border-2 border-white transition-transform transition-shadow duration-300 transform-gpu relative max-w-full"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-center">
              <span>Speak to a Senior Freight Expert</span>
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 drop-shadow-[0_0_8px_#ffffff]" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
