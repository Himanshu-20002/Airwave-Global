import React from 'react';

import Marquee from '@/components/ui/Marquee';
import PartnerCard from '@/components/ui/PartnerCard';

const accreditations = [
  'https://www.airsurgegroup.com/clients/1.png',
  'https://www.airsurgegroup.com/clients/2.png',
  'https://www.airsurgegroup.com/clients/3.png',
  'https://www.airsurgegroup.com/clients/4.png',
  'https://www.airsurgegroup.com/clients/5.png',
  'https://www.airsurgegroup.com/clients/6.png',
  'https://www.airsurgegroup.com/clients/7.png',
  'https://www.airsurgegroup.com/clients/8.png',
];

export default function Accreditations() {
  return (
    <section className="py-12 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h3 className="text-xs uppercase font-bold tracking-widest text-[#fe7f25] mb-1">
          Accreditations &amp; Compliance
        </h3>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
          Internationally Certified &amp; Compliant
        </h2>
        <div className="w-12 h-1 bg-[#fe7f25] mx-auto mt-2 rounded-full" />
      </div>

      <div className="w-full">
        <Marquee duration="32s" gap="1.5rem" pauseOnHover repeat={4}>
          {accreditations.map((src, idx) => (
            <PartnerCard
              key={idx}
              src={src}
              alt={`Accreditation Partner ${idx + 1}`}
              hoverBorder="orange"
              size="md"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
