import React from 'react';
import { UserCheck, Globe, ShieldCheck, Sliders, Headset, ArrowRight } from 'lucide-react';
import BoatTransitTrack from '@/components/ui/BoatTransitTrack';

const pillars = [
  {
    icon: UserCheck,
    color: 'bg-orange-100 text-[#fe7f25]',
    hoverBg: 'group-hover:bg-[#fe7f25]',
    textColor: 'text-[#fe7f25]',
    title: 'Experienced Professionals',
    desc: 'Decades of freight domain expertise delivering precision documentation and handling for complex cargo.',
    tag: 'Domain Mastery',
  },
  {
    icon: Globe,
    color: 'bg-blue-100 text-[#0284c7]',
    hoverBg: 'group-hover:bg-[#0284c7]',
    textColor: 'text-[#0284c7]',
    title: 'Global Partnerships',
    desc: 'Robust carrier space allocations with major airlines and shipping lines across 150+ international trade ports.',
    tag: 'Worldwide Network',
  },
  {
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-600',
    hoverBg: 'group-hover:bg-emerald-600',
    textColor: 'text-emerald-600',
    title: 'Reliable Execution',
    desc: '100% statutory compliant customs clearance, zero demurrage focus, and predictable transit schedules.',
    tag: 'Compliance First',
  },
  {
    icon: Sliders,
    color: 'bg-indigo-100 text-[#3e47cc]',
    hoverBg: 'group-hover:bg-[#3e47cc]',
    textColor: 'text-[#3e47cc]',
    title: 'Tailored Solutions',
    desc: 'Customized supply chain architecture across Pharma, Heavy Engineering, Chemicals, and High-Tech.',
    tag: 'Bespoke Logistics',
  },
  {
    icon: Headset,
    color: 'bg-amber-100 text-amber-600',
    hoverBg: 'group-hover:bg-amber-600',
    textColor: 'text-amber-600',
    title: '24/7 Focus Support',
    desc: 'Single point of contact key account managers proactively monitoring every milestone.',
    tag: 'Round-the-clock',
  },
];

export default function ValuePillars() {
  return (
    <section id="about-section" className="pt-20 lg:pt-28 pb-0 bg-slate-50 relative overflow-hidden flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Enterprise Reliability</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Why Choose <span className="text-[#fe7f25]">Airwave Global Logistics?</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            As a premier freight forwarding company in India, Airwave Global Logistics Private Limited powers global trade with compliant execution, global agent alliances, and deep domain mastery.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 hover-glow flex flex-col justify-between group transition-all"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center mb-6 ${pillar.hoverBg} group-hover:text-white transition-all duration-300 shadow-sm`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold ${pillar.textColor}`}>
                  <span>{pillar.tag}</span>
                  <ArrowRight className="w-3 h-3 ml-auto" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-Width Section Footer Boat Transit Track */}
      <div className="w-full mt-16 lg:mt-20">
        <BoatTransitTrack
          duration={28}
        />
      </div>
    </section>
  );
}
