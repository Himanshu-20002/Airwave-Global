import React from 'react';

import Marquee from '@/components/ui/Marquee';
import PartnerCard from '@/components/ui/PartnerCard';

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
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#0284c7]">
          Global Carrier &amp; Client Ecosystem
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight font-display">
          Trusted By <span className="text-[#0284c7]">Leading Enterprises</span> &amp; Shipping Lines
        </h2>
      </div>

      <div className="w-full space-y-5">
        {/* Forward Marquee - Infinite Loop */}
        <Marquee duration="35s" gap="1.5rem" repeat={4} pauseOnHover>
          {forwardLogos.map((src, idx) => (
            <PartnerCard
              key={idx}
              src={src}
              alt={`Brand Partner ${idx + 1}`}
              hoverBorder="blue"
              size="md"
            />
          ))}
        </Marquee>

        {/* Reverse Marquee - Infinite Loop */}
        <Marquee duration="38s" gap="1.5rem" reverse repeat={4} pauseOnHover>
          {reverseLogos.map((src, idx) => (
            <PartnerCard
              key={idx}
              src={src}
              alt={`Carrier Partner ${idx + 1}`}
              hoverBorder="blue"
              size="md"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
