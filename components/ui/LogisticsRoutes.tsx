import React from 'react';

interface LogisticsRoutesProps {
  className?: string;
}

// Normalized coordinate paths for global maritime corridors (1920x840)
const PATHS = {
  nw: 'M -40,450 C 180,465 340,530 520,590 C 670,640 790,670 910,692',
  wTrans: 'M -40,580 C 220,595 460,660 700,705 C 840,730 960,734 1080,730 C 1300,720 1520,665 1740,615 C 1850,590 1910,570 1960,555',
  ne: 'M 1960,430 C 1740,448 1580,518 1400,582 C 1240,638 1120,670 1010,692',
  eTrans: 'M 1960,610 C 1720,630 1500,680 1280,715 C 1140,736 960,738 800,728 C 580,702 340,645 -40,595',
  swDeep: 'M -40,715 C 240,730 520,760 780,768 C 900,772 1020,772 1140,768 C 1400,750 1680,720 1960,690',
  crescent: 'M 680,715 C 780,730 870,738 960,738 C 1050,738 1140,730 1240,715',
  sBaseline: 'M -40,780 C 380,795 780,805 1180,800 C 1560,795 1780,780 1960,765',
  // Fully connected, curved edge-to-edge bottom routes (fading near CTA mid)
  bottomTrans: 'M -40,765 C 340,780 660,795 960,795 C 1260,795 1580,780 1960,765',
  bottomTransRev: 'M 1960,790 C 1600,808 1280,816 960,816 C 640,816 320,808 -40,790',
};



export default function LogisticsRoutes({ className = '' }: LogisticsRoutesProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      style={{ willChange: 'transform', transform: 'translate3d(0,0,0)', contain: 'strict' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1920 840"
        preserveAspectRatio="none"
        className="hidden md:block w-full h-full pointer-events-none"
        style={{ contain: 'strict' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wake Gradient */}
          <linearGradient id="vessel-wake" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.75" />
          </linearGradient>

          {/* Ocean Wave Aurora 1: Bioluminescent Cyan & Sapphire */}
          <linearGradient id="ocean-cyan-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.32" />
            <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.26" />
            <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0.1" />
          </linearGradient>

          {/* Ocean Wave Aurora 2: Emerald, Seafoam & Deep Marine Indigo */}
          <linearGradient id="ocean-emerald-indigo" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#0d9488" stopOpacity="0.26" />
            <stop offset="75%" stopColor="#4338ca" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#071126" stopOpacity="0.05" />
          </linearGradient>

          {/* Ocean Wave Aurora 3: Warm Trade-Wind Sunset Coral & Teal Current */}
          <linearGradient id="ocean-coral-teal" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="45%" stopColor="#fe7f25" stopOpacity="0.22" />
            <stop offset="75%" stopColor="#14b8a6" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.1" />
          </linearGradient>

          {/* Wave Crest Glowing Lines */}
          <linearGradient id="crest-cyan-emerald" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#22d3ee" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#34d399" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="crest-teal-sunset" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#ff9d5c" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>

          {/* Central Neon CTA Backlight Halo */}
          <radialGradient id="cta-neon-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fe7f25" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#ff8533" stopOpacity="0.25" />
            <stop offset="65%" stopColor="#0284c7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#071126" stopOpacity="0" />
          </radialGradient>

          {/* Bottom-Left Ocean Bioluminescent Atmosphere */}
          <radialGradient id="ocean-sw-glow" cx="25%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.28" />
            <stop offset="45%" stopColor="#0d9488" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#071126" stopOpacity="0" />
          </radialGradient>

          {/* Bottom-Right Ocean Bioluminescent Atmosphere */}
          <radialGradient id="ocean-se-glow" cx="75%" cy="75%" r="65%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="45%" stopColor="#4338ca" stopOpacity="0.18" />
            <stop offset="85%" stopColor="#fe7f25" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#071126" stopOpacity="0" />
          </radialGradient>

          {/* Bottom Route Mid-Fade Gradients (Connected continuous curve that fades softly near CTA center) */}
          <linearGradient id="route-bottom-guide-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="46%" stopColor="#38bdf8" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="54%" stopColor="#fe7f25" stopOpacity="0.04" />
            <stop offset="65%" stopColor="#fe7f25" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#fe7f25" stopOpacity="0.22" />
          </linearGradient>

          <linearGradient id="route-bottom-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="36%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="46%" stopColor="#38bdf8" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.01" />
            <stop offset="54%" stopColor="#fe7f25" stopOpacity="0.05" />
            <stop offset="64%" stopColor="#fe7f25" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fe7f25" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="route-bottom-flow-rev" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#fe7f25" stopOpacity="0.38" />
            <stop offset="36%" stopColor="#fe7f25" stopOpacity="0.32" />
            <stop offset="46%" stopColor="#fe7f25" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.01" />
            <stop offset="54%" stopColor="#38bdf8" stopOpacity="0.05" />
            <stop offset="64%" stopColor="#38bdf8" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.38" />
          </linearGradient>

          {/* Heavy Container Carrier Silhouette */}
          <g id="vessel-heavy">
            <line x1="-24" y1="0" x2="-6" y2="0" stroke="url(#vessel-wake)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M -12,4.5 L 10,4.5 Q 17,4 20,0 Q 17,-4 10,-4.5 L -12,-4.5 Q -15,0 -12,4.5 Z" fill="#08142c" stroke="#38bdf8" strokeWidth="0.85" />
            <path d="M -10,0.2 L 15,0.2" stroke="#fe7f25" strokeWidth="0.8" />
            <rect x="-10" y="-3" width="4" height="2.6" rx="0.5" fill="#1e293b" />
            <rect x="-5" y="-3" width="4" height="2.6" rx="0.5" fill="#0284c7" />
            <rect x="0" y="-3" width="4" height="2.6" rx="0.5" fill="#fe7f25" />
            <rect x="5" y="-3" width="4" height="2.6" rx="0.5" fill="#38bdf8" />
            <rect x="-9" y="-6" width="3.5" height="3" rx="0.5" fill="#f1f5f9" />
            <circle cx="-7.2" cy="-7.5" r="0.9" fill="#fe7f25" />
          </g>

          {/* Fast Express Feeder Silhouette */}
          <g id="vessel-fast">
            <line x1="-20" y1="0" x2="-5" y2="0" stroke="url(#vessel-wake)" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M -10,3.5 L 8,3.5 Q 14,3 16,0 Q 14,-3 8,-3.5 L -10,-3.5 Q -12.5,0 -10,3.5 Z" fill="#061229" stroke="#0ea5e9" strokeWidth="0.75" />
            <path d="M -8,0 L 12,0" stroke="#38bdf8" strokeWidth="0.7" />
            <rect x="-7" y="-2.2" width="3.5" height="2" rx="0.4" fill="#fe7f25" />
            <rect x="-2.5" y="-2.2" width="3.5" height="2" rx="0.4" fill="#0284c7" />
            <rect x="2" y="-2.2" width="3.5" height="2" rx="0.4" fill="#e2e8f0" />
            <rect x="-7.5" y="-4.8" width="2.8" height="2.4" rx="0.5" fill="#f8fafc" />
            <circle cx="-6.1" cy="-5.8" r="0.8" fill="#38bdf8" />
          </g>
        </defs>

        {/* ========================================================
            PARABOLIC OCEAN WAVE SWELLS (Upper Boat Route & Converging Funnel)
            Thick/high on sides (Y=300), swooping down to converge at CTA (Y=655-725)
            ======================================================== */}
        <g className="ocean-waves pointer-events-none">
          {/* Wave Swell 1: Upper Parabolic Horizon (covers upper boat route on flanks) */}
          <path
            d="M -60,300 C 360,340 700,655 960,655 C 1220,655 1560,340 2000,300 L 2000,860 L -60,860 Z"
            fill="url(#ocean-cyan-flow)"
            opacity="0.34"
          />
          {/* Luminous Upper Parabolic Crest Line */}
          <path
            d="M -60,300 C 360,340 700,655 960,655 C 1220,655 1560,340 2000,300"
            stroke="url(#crest-cyan-emerald)"
            strokeWidth="1.8"
            fill="none"
            opacity="0.8"
          />

          {/* Converging Stream Left (water flowing from upper-left into CTA) */}
          <path
            d="M -40,350 C 360,410 700,645 925,688"
            stroke="url(#crest-cyan-emerald)"
            strokeWidth="1.2"
            strokeDasharray="4 14"
            fill="none"
            className="logistics-route-flow opacity-60"
          />

          {/* Converging Stream Right (water flowing from upper-right into CTA) */}
          <path
            d="M 1960,350 C 1560,410 1220,645 995,688"
            stroke="url(#crest-teal-sunset)"
            strokeWidth="1.2"
            strokeDasharray="4 14"
            fill="none"
            className="logistics-route-flow-reverse opacity-60"
          />

          {/* Wave Swell 2: Mid Parabolic Swell (Emerald Seafoam & Marine Indigo) */}
          <path
            d="M -60,390 C 380,430 710,688 960,688 C 1210,688 1540,430 2000,390 L 2000,860 L -60,860 Z"
            fill="url(#ocean-emerald-indigo)"
            opacity="0.3"
          />
          {/* Luminous Mid Crest Line */}
          <path
            d="M -60,390 C 380,430 710,688 960,688 C 1210,688 1540,430 2000,390"
            stroke="url(#crest-teal-sunset)"
            strokeWidth="1.6"
            fill="none"
            opacity="0.75"
          />

          {/* Wave Swell 3: Lower Parabolic Funnel (Warm Coral & Teal Coastal Current) */}
          <path
            d="M -60,490 C 400,530 720,725 960,725 C 1200,725 1520,530 2000,490 L 2000,860 L -60,860 Z"
            fill="url(#ocean-coral-teal)"
            opacity="0.6"
          />
          {/* Luminous Lower Crest Line */}
          <path
            d="M -60,490 C 400,530 720,725 960,725 C 1200,725 1520,530 2000,490"
            stroke="rgba(56, 189, 248, 0.45)"
            strokeWidth="1.3"
            fill="none"
          />

          {/* Wave Swell 4: Deep Oceanic Base with Bioluminescent Glow */}
          <path
            d="M -60,600 C 420,640 730,765 960,765 C 1190,765 1500,640 2000,600 L 2000,860 L -60,860 Z"
            fill="url(#ocean-cyan-flow)"
            opacity="0.2"
          />

          {/* Bottom Flanks Bioluminescent Water Atmospheres */}
          <ellipse cx="280" cy="775" rx="380" ry="140" fill="url(#ocean-sw-glow)" />
          <ellipse cx="1640" cy="775" rx="380" ry="140" fill="url(#ocean-se-glow)" />
        </g>

        {/* Ambient Vibrant Neon Halo radiating behind CTA button where waves converge */}
        <ellipse cx="960" cy="710" rx="420" ry="130" fill="url(#cta-neon-halo)" />

        {/* ========================================================
            GLOBAL MARITIME TRADE ROUTES & DEEP BASIN LANES
            ======================================================== */}
        <path id="route-nw" d={PATHS.nw} fill="none" stroke="rgba(56, 189, 248, 0.16)" strokeWidth="1.4" strokeLinecap="round" />
        <path id="route-w-trans" d={PATHS.wTrans} fill="none" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1.3" strokeLinecap="round" />
        <path d={PATHS.wTrans} fill="none" stroke="rgba(56, 189, 248, 0.28)" strokeWidth="1.3" strokeDasharray="4 14" className="logistics-route-flow" />

        <path id="route-ne" d={PATHS.ne} fill="none" stroke="rgba(254, 127, 37, 0.18)" strokeWidth="1.4" strokeLinecap="round" />
        <path id="route-e-trans" d={PATHS.eTrans} fill="none" stroke="rgba(56, 189, 248, 0.14)" strokeWidth="1.2" strokeLinecap="round" />
        <path d={PATHS.eTrans} fill="none" stroke="rgba(254, 127, 37, 0.24)" strokeWidth="1.2" strokeDasharray="3 16" className="logistics-route-flow-reverse" />

        <path id="route-sw-deep" d={PATHS.swDeep} fill="none" stroke="rgba(100, 116, 139, 0.12)" strokeWidth="1.2" strokeLinecap="round" />
        <path id="route-cta-crescent" d={PATHS.crescent} fill="none" stroke="rgba(254, 127, 37, 0.22)" strokeWidth="1.2" strokeDasharray="4 8" className="logistics-route-flow" />
        <path id="route-s-baseline" d={PATHS.sBaseline} fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="1" strokeLinecap="round" />

        {/* Connected Edge-to-Edge Bottom Trans Corridor (Fades near CTA mid) */}
        <path
          id="route-bottom-trans"
          d={PATHS.bottomTrans}
          fill="none"
          stroke="url(#route-bottom-guide-gradient)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d={PATHS.bottomTrans}
          fill="none"
          stroke="url(#route-bottom-flow-gradient)"
          strokeWidth="1.3"
          strokeDasharray="4 12"
          className="logistics-route-flow"
        />

        {/* Counter-Flow Bottom Trans Lane (Continuous, fading near CTA mid) */}
        <path
          id="route-bottom-trans-rev"
          d={PATHS.bottomTransRev}
          fill="none"
          stroke="url(#route-bottom-guide-gradient)"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d={PATHS.bottomTransRev}
          fill="none"
          stroke="url(#route-bottom-flow-rev)"
          strokeWidth="1.1"
          strokeDasharray="3 14"
          className="logistics-route-flow-reverse"
        />

        {/* Maritime Port Hub Waypoint Beacons (Bottom-Left & Bottom-Right) */}
        <g className="opacity-75 pointer-events-none">
          <circle cx="280" cy="775" r="3" fill="#38bdf8" />
          <circle cx="280" cy="775" r="7" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
          <circle cx="280" cy="775" r="14" fill="none" stroke="#38bdf8" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.4" />
          <text x="280" y="800" fill="#7dd3fc" fontSize="8.5" fontFamily="monospace" letterSpacing="1.8" textAnchor="middle" opacity="0.75" fontWeight="600">PORT // WEST TRANSIT</text>
        </g>

        <g className="opacity-75 pointer-events-none">
          <circle cx="1640" cy="775" r="3" fill="#fe7f25" />
          <circle cx="1640" cy="775" r="7" fill="none" stroke="#fe7f25" strokeWidth="0.8" opacity="0.6" />
          <circle cx="1640" cy="775" r="14" fill="none" stroke="#fe7f25" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.4" />
          <text x="1640" y="800" fill="#ffedd5" fontSize="8.5" fontFamily="monospace" letterSpacing="1.8" textAnchor="middle" opacity="0.75" fontWeight="600">PORT // EAST CORRIDOR</text>
        </g>

        {/* Maritime Carrier Transits - Mathematically locked to route Bézier curves & auto-tangents */}
        <g className="logistics-boat pointer-events-none">
          <use href="#vessel-heavy" />
          <animateMotion dur="30s" repeatCount="indefinite" rotate="auto" begin="-5s">
            <mpath href="#route-bottom-trans" />
          </animateMotion>
        </g>
        <g className="logistics-boat pointer-events-none">
          <use href="#vessel-fast" />
          <animateMotion dur="26s" repeatCount="indefinite" rotate="auto" begin="-16s">
            <mpath href="#route-bottom-trans-rev" />
          </animateMotion>
        </g>
        <g className="logistics-boat pointer-events-none">
          <use href="#vessel-fast" />
          <animateMotion dur="32s" repeatCount="indefinite" rotate="auto" begin="-10s">
            <mpath href="#route-w-trans" />
          </animateMotion>
        </g>
        <g className="logistics-boat pointer-events-none">
          <use href="#vessel-heavy" />
          <animateMotion dur="28s" repeatCount="indefinite" rotate="auto" begin="-20s">
            <mpath href="#route-e-trans" />
          </animateMotion>
        </g>
      </svg>

      {/* ========================================================
          MOBILE-DEDICATED MARITIME ROUTES & OCEAN WAVES (Portrait 420x1200)
          Ensures zero vessel distortion, proportional curves, and smooth 120 FPS
          ======================================================== */}
      <svg
        viewBox="0 0 420 1200"
        preserveAspectRatio="none"
        className="block md:hidden w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="route-mobile-w" d="M -20,680 C 80,720 150,1020 210,1070" />
          <path id="route-mobile-e" d="M 440,680 C 340,720 270,1020 210,1070" />
          <path id="route-mobile-trans" d="M -20,1110 C 100,1125 320,1125 440,1110" />
        </defs>

        {/* Parabolic Waves on Mobile */}
        <g className="ocean-waves pointer-events-none">
          <path
            d="M -20,620 C 100,660 170,1040 210,1040 C 250,1040 320,660 440,620 L 440,1220 L -20,1220 Z"
            fill="url(#ocean-cyan-flow)"
            opacity="0.32"
          />
          <path
            d="M -20,620 C 100,660 170,1040 210,1040 C 250,1040 320,660 440,620"
            stroke="url(#crest-cyan-emerald)"
            strokeWidth="1.6"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M -20,720 C 90,760 160,1070 210,1070 C 260,1070 330,760 440,720 L 440,1220 L -20,1220 Z"
            fill="url(#ocean-emerald-indigo)"
            opacity="0.28"
          />
          <path
            d="M -20,840 C 90,880 150,1100 210,1100 C 270,1100 330,880 440,840 L 440,1220 L -20,1220 Z"
            fill="url(#ocean-coral-teal)"
            opacity="0.6"
          />
        </g>

        {/* Ambient Halo behind Mobile CTA */}
        <ellipse cx="210" cy="1115" rx="180" ry="65" fill="url(#cta-neon-halo)" />

        {/* Mobile Trade Routes */}
        <path d="M -20,680 C 80,720 150,1020 210,1070" fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.4" strokeDasharray="4 12" className="logistics-route-flow" />
        <path d="M 440,680 C 340,720 270,1020 210,1070" fill="none" stroke="rgba(254, 127, 37, 0.25)" strokeWidth="1.4" strokeDasharray="4 12" className="logistics-route-flow-reverse" />
        <path d="M -20,1110 C 100,1125 320,1125 440,1110" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.3" strokeDasharray="4 10" className="logistics-route-flow" />

        {/* Mobile Waypoint Hubs */}
        <g className="opacity-75 pointer-events-none">
          <circle cx="55" cy="1115" r="2.5" fill="#38bdf8" />
          <circle cx="55" cy="1115" r="6" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
          <text x="55" y="1132" fill="#7dd3fc" fontSize="7.5" fontFamily="monospace" letterSpacing="1.2" textAnchor="middle" opacity="0.8">PORT // W</text>
        </g>

        <g className="opacity-75 pointer-events-none">
          <circle cx="365" cy="1115" r="2.5" fill="#fe7f25" />
          <circle cx="365" cy="1115" r="6" fill="none" stroke="#fe7f25" strokeWidth="0.8" opacity="0.6" />
          <text x="365" y="1132" fill="#ffedd5" fontSize="7.5" fontFamily="monospace" letterSpacing="1.2" textAnchor="middle" opacity="0.8">PORT // E</text>
        </g>

        {/* Mobile Route Vessels - Mathematically locked to route Bézier curves & auto-tangents */}
        <g className="logistics-boat pointer-events-none">
          <use href="#vessel-fast" />
          <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" begin="-4s">
            <mpath href="#route-mobile-w" />
          </animateMotion>
        </g>
        <g className="logistics-boat pointer-events-none">
          <use href="#vessel-heavy" />
          <animateMotion dur="20s" repeatCount="indefinite" rotate="auto" begin="-9s">
            <mpath href="#route-mobile-trans" />
          </animateMotion>
        </g>
      </svg>
    </div>
  );
}
