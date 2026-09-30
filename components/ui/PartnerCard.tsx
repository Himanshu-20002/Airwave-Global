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
      ? 'h-[76px] sm:h-20 w-52 sm:w-60 px-5 py-2.5'
      : 'h-16 w-40 px-4 py-2';

  const hoverClasses =
    hoverBorder === 'orange'
      ? 'hover:border-[#fe7f25] hover:shadow-[0_8px_20px_-4px_rgba(254,127,37,0.2)]'
      : 'hover:border-[#0284c7] hover:shadow-[0_8px_20px_-4px_rgba(2,132,199,0.2)]';

  const imgMaxHeight = size === 'md' ? 'max-h-12 sm:max-h-13' : 'max-h-9';

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-xs flex items-center justify-center hover:-translate-y-1 transition-all duration-300 shrink-0   select-none group ${sizeClasses} ${hoverClasses} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`${imgMaxHeight} w-full max-w-[190px] object-contain transition-transform duration-300 pointer-events-none group-hover:scale-105`}
        loading="lazy"
        decoding="async"
        width={size === 'md' ? 180 : 140}
        height={size === 'md' ? 52 : 36}
      />
    </div>
  );
}
