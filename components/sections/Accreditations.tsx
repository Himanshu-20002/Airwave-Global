import React from 'react';

import Marquee from '@/components/ui/Marquee';
import PartnerCard from '@/components/ui/PartnerCard';

const airlinePartners = [
  { name: 'Air India Cargo', src: '/images/airlines/air-india.svg' },
  { name: 'Lufthansa Cargo', src: '/images/airlines/lufthansa.svg' },
  { name: 'Air France Cargo', src: '/images/airlines/air-france.svg' },
  { name: 'KLM Cargo', src: '/images/airlines/klm.svg' },
  { name: 'Emirates SkyCargo', src: '/images/airlines/emirates.svg' },
  { name: 'Qatar Airways Cargo', src: '/images/airlines/qatar-airways.svg' },
  { name: 'Singapore Airlines Cargo', src: '/images/airlines/singapore-airlines.svg' },
  { name: 'Turkish Cargo', src: '/images/airlines/turkish-airlines.svg' },
  { name: 'British Airways World Cargo', src: '/images/airlines/british-airways.svg' },
  { name: 'Cathay Cargo', src: '/images/airlines/cathay-pacific.svg' },
];

export default function Accreditations() {
  return (
    <section className="py-12 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25] mb-1">
          Strategic Aviation Alliances
        </h3>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display uppercase">
          Our <span className="text-[#fe7f25]">Airline Partners</span>
        </h2>
        <div className="w-12 h-1 bg-[#fe7f25] mx-auto mt-2 rounded-full" />
        <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Direct space allocations and global schedule connectivity with the world&apos;s leading cargo airlines.
        </p>
      </div>

      <div className="w-full">
        <Marquee duration="30s" gap="1.5rem" pauseOnHover repeat={2}>
          {airlinePartners.map((airline, idx) => (
            <PartnerCard
              key={idx}
              src={airline.src}
              alt={airline.name}
              hoverBorder="orange"
              size="md"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
