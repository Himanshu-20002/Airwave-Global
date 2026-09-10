import React from 'react';

interface BoatTransitTrackProps {
  duration?: number; // duration in seconds for full crossing
  className?: string;
  variant?: 'card' | 'minimal' | 'full-width';
}

export default function BoatTransitTrack({
  duration = 32,
  className = '',
  variant = 'full-width',
}: BoatTransitTrackProps) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none  bg-slate-50/70  ${className}`}
    >
      {/* Background Subtle Nautical Waypoint Ticks & Lat/Long Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400 uppercase pointer-events-none opacity-60">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span>PORT ORIGIN // 18°57'N 72°56'E</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>CORRIDOR FREIGHT: FCL &bull; LCL</span>
          <span className="text-slate-300">&bull;</span>
          <span>AIS VESSEL TELEMETRY ACTIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <span>GLOBAL HUB // 51°55'N 04°29'E</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>

      {/* Main Track Stream */}
      <div className="relative w-full h-14 mt-2  -mb-5 flex items-center overflow-hidden">
        {/* Ambient Route Line with subtle dashed pattern */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] w-full">
          <svg
            className="w-full h-2 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Baseline */}
            <line
              x1="0"
              y1="4"
              x2="100%"
              y2="4"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            {/* Animated Flowing Dashes */}
            <line
              x1="0"
              y1="4"
              x2="100%"
              y2="4"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              className="animate-sea-dash"
            />
          </svg>
        </div>

        {/* Vessel Sailing Across Edge-to-Edge */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none will-change-transform boat-transit-track"
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {/* Sailing Container Vessel */}
          <div className="relative flex items-center -translate-y-2">

            {/* Subtle Gradient Wake Trail (Very faint & sleek) */}
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none opacity-40">
              <span className="inline-block w-24 sm:w-36 h-[1.5px] bg-gradient-to-l from-[#0284c7]/50 via-[#fe7f25]/30 to-transparent" />
            </div>

            {/* Minimalist SaaS-Style Precision Vessel Vector */}
            <div className="relative flex flex-col items-center group">

              {/* Sleek Floating Monospace Telemetry Chip */}
              <div className="absolute -top-5 whitespace-nowrap opacity-75 flex items-center gap-1.5 text-[9px] font-mono tracking-wider text-slate-500 uppercase">
                <span className="w-1 h-1 rounded-full bg-[#fe7f25] animate-ping" />
                <span>IN-TRANSIT // 18.4 KTS</span>
              </div>

              {/* Minimal Precision Silhouette Vessel */}
              <svg
                width="84"
                height="24"
                viewBox="0 0 84 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90 transition-opacity"
              >
                {/* Minimalist Cargo Container Matrix (Geometric wireframe aesthetic) */}
                <rect x="16" y="8" width="8" height="6" rx="0.5" fill="#334155" />
                <rect x="25" y="8" width="8" height="6" rx="0.5" fill="#475569" />
                <rect x="34" y="8" width="8" height="6" rx="0.5" fill="#334155" />
                <rect x="43" y="8" width="8" height="6" rx="0.5" fill="#475569" />
                <rect x="52" y="8" width="8" height="6" rx="0.5" fill="#0284c7" />

                {/* Top Tier Container Highlights */}
                <rect x="25" y="3" width="8" height="4.5" rx="0.5" fill="#0f172a" />
                <rect x="34" y="3" width="8" height="4.5" rx="0.5" fill="#fe7f25" />
                <rect x="43" y="3" width="8" height="4.5" rx="0.5" fill="#0f172a" />

                {/* Subtle Container Separation Grooves */}
                <line x1="24.5" y1="8" x2="24.5" y2="14" stroke="#0f172a" strokeWidth="0.5" />
                <line x1="33.5" y1="8" x2="33.5" y2="14" stroke="#0f172a" strokeWidth="0.5" />
                <line x1="42.5" y1="8" x2="42.5" y2="14" stroke="#0f172a" strokeWidth="0.5" />
                <line x1="51.5" y1="8" x2="51.5" y2="14" stroke="#0f172a" strokeWidth="0.5" />

                {/* Superstructure / Wheelhouse (Modern minimalist geometric) */}
                <path
                  d="M62 4 H71 V14 H62 Z"
                  fill="#1e293b"
                />
                {/* Bridge Slit Window */}
                <rect x="64" y="6" width="5" height="1.8" rx="0.3" fill="#38bdf8" />
                {/* Radar Mast & Precision Beacon */}
                <line x1="67" y1="4" x2="67" y2="1.5" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
                <circle cx="67" cy="1.5" r="1.2" fill="#fe7f25" />

                {/* Sleek Hull Profile (Streamlined navy/dark slate silhouette) */}
                <path
                  d="M6 14 H69 L77 14 C81 15.5 82 18.5 76 21 L69 21 H10 L4 18.5 C3.5 16.5 4.5 14 6 14 Z"
                  fill="#0f172a"
                />
                {/* Elegant Minimal Waterline Accent */}
                <path
                  d="M7 19 H74"
                  stroke="#fe7f25"
                  strokeWidth="0.75"
                  strokeOpacity="0.85"
                />

                {/* Subtle Water Displacement Line */}
                <ellipse cx="74" cy="21.5" rx="4" ry="0.8" fill="#38bdf8" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
