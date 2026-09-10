import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
  gap?: string;
  repeat?: number;
  fadeEdges?: boolean;
}

export default function Marquee({
  children,
  className = '',
  reverse = false,
  pauseOnHover = true,
  duration = '32s',
  gap = '1.5rem',
  repeat = 4,
  fadeEdges = true,
}: MarqueeProps) {
  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      {fadeEdges && (
        <>
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        </>
      )}

      <div
        className="group flex overflow-hidden py-2"
        style={
          {
            '--marquee-duration': duration,
            '--marquee-gap': gap,
            gap: 'var(--marquee-gap)',
          } as React.CSSProperties
        }
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 items-center justify-around ${
              reverse ? 'animate-marquee-reverse' : 'animate-marquee'
            } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
            style={{
              gap: 'var(--marquee-gap)',
              animationDuration: 'var(--marquee-duration)',
            }}
            aria-hidden={i > 0}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
