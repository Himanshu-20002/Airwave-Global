import React from 'react';

const industries = [
  {
    title: 'Pharmaceuticals & Healthcare',
    image: '/images/industries/1.webp',
    desc: 'Regulated, temperature-sensitive vaccines and high-value APIs handled with strict documentation, GDP compliance, and time-critical execution.',
  },
  {
    title: 'Chemicals (HAZ & Non-HAZ)',
    image: '/images/industries/2.webp',
    desc: 'Certified DGR handling, IMO class segregation, specialized ISO tank containers, and complete international safety data sheets (MSDS) execution.',
  },
  {
    title: 'Electronics & High-Tech',
    image: '/images/industries/8.webp',
    desc: 'Secure transit of semiconductors, sensitive electronics, and telecommunications hardware with GPS anti-theft monitoring and ESD protection.',
  },
];

export default function IndustriesGrid() {
  return (
    <section id="industries-section" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Sector-Specific Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Industries <span className="text-[#fe7f25]">We Serve</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            Precision logistics compliance tailored to the rigorous operational requirements of distinct global industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 border border-slate-200/80 hover-glow group transition-all"
            >
              <div className="h-48 rounded-2xl overflow-hidden mb-5 bg-slate-100 relative">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={220}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#fe7f25] transition-colors mb-2">
                {ind.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
