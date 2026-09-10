import React from 'react';

interface PartnerCardProps {
  src: string;
  alt?: string;
  hoverBorder?: 'blue' | 'orange';
  size?: 'sm' | 'md';
  className?: string;
}

export default function PartnerCard({
  src,
  alt = 'Partner Brand',
  hoverBorder = 'blue',
  size = 'sm',
  className = '',
}: PartnerCardProps) {
  const sizeClasses =
    size === 'md'
      ? 'h-16 w-36 px-4 py-2.5'
      : 'h-14 w-32 px-4 py-2';

  const hoverClasses =
    hoverBorder === 'orange'
      ? 'hover:border-[#fe7f25]/40 hover:shadow-orange-500/10'
      : 'hover:border-[#0284c7]/35 hover:shadow-sky-500/10';

  const imgMaxHeight = size === 'md' ? 'max-h-10' : 'max-h-8';

  return (
    <div
      className={`bg-slate-50/90 rounded-xl border border-slate-200/70 flex items-center justify-center hover:bg-white hover:scale-105 hover:shadow-md transition-all duration-300 shrink-0 select-none ${sizeClasses} ${hoverClasses} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`${imgMaxHeight} w-auto object-contain transition-transform duration-300 pointer-events-none`}
        loading="lazy"
        decoding="async"
        width={size === 'md' ? 144 : 128}
        height={size === 'md' ? 40 : 32}
      />
    </div>
  );
}
