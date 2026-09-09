'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    category: 'air',
    title: 'Air Freight Services',
    badge: 'Express Air Cargo',
    image: 'https://www.airsurgegroup.com/home/services/1.png',
    desc: 'Time-critical global air transport, scheduled consolidated charters, express door-to-door deliveries, and IATA compliant operations.',
    features: [
      'Direct Airline Space Contracts',
      'Next-Flight-Out (NFO) Capabilities',
      'Full & Part Charter Handling',
    ],
    transit: '1 - 3 Days Transit',
  },
  {
    category: 'ocean',
    title: 'Ocean Freight Forwarding',
    badge: 'FCL & LCL Ocean',
    image: 'https://www.airsurgegroup.com/home/services/2.png',
    desc: 'Cost-efficient Full Container Load (FCL) and Less than Container Load (LCL) consolidation connecting key ports worldwide.',
    features: [
      'Guaranteed Container Availability',
      "Buyer's Consolidation Warehousing",
      'Special Equipment: Flat Rack & Open Top',
    ],
    transit: 'Competitive FCL/LCL',
  },
  {
    category: 'project',
    title: 'Project & Defence Cargo',
    badge: 'Heavy Lift & ODC',
    image: 'https://www.airsurgegroup.com/home/services/3.png',
    desc: 'Turnkey engineering for Out-of-Gauge (OOG) machinery, breakbulk, infrastructure components, and classified defense equipment.',
    features: [
      'Route Surveys & Feasibility Studies',
      'Heavy Lift Crane & Hydraulic Axles',
      'Escorted High-Security Movements',
    ],
    transit: 'Custom Engineering',
  },
  {
    category: 'domestic',
    title: 'Domestic Freight & Rail',
    badge: 'Pan-India Transit',
    image: 'https://www.airsurgegroup.com/home/services/4.png',
    desc: 'Seamless inland haulage via dedicated fleet, GPS-tracked container trucks, and rail rake movements across India industrial hubs.',
    features: [
      'Port-to-ICD / CFS Shuttles',
      'FTL & Part Load Logistics',
      '24/7 Real-Time Telematics',
    ],
    transit: 'Pan-India Reach',
  },
  {
    category: 'customs',
    title: 'Customs Clearance Brokerage',
    badge: 'Border Brokerage',
    image: 'https://www.airsurgegroup.com/home/services/5.png',
    desc: 'Licensed CHA brokers ensuring frictionless tariff classifications, duty calculations, FTWZ clearances, and ICEGATE filing.',
    features: [
      'Fast Track Bill of Entry Filing',
      'EPCG, Advance License & Duty Drawback',
      'FSSAI, Plant & Animal Quarantine NOC',
    ],
    transit: 'Zero Delay SLA',
  },
  {
    category: 'coldchain',
    title: 'Cold Chain Logistics',
    badge: 'Temp-Controlled',
    image: 'https://www.airsurgegroup.com/home/services/6.png',
    desc: 'GDP-compliant temperature-controlled reefer containers and passive packaging solutions for biologics and pharma.',
    features: [
      'Strict Temp Integrity (-20°C to +25°C)',
      'Real-Time IoT Temperature Loggers',
      'Cold Room Storage at Air Hubs',
    ],
    transit: 'GDP Compliant',
  },
];

export default function CoreServices() {
  const [filter, setFilter] = useState('all');

  const filteredServices = services.filter((s) => filter === 'all' || s.category === filter);

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">End-to-End Multimodal</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Our Core <span className="text-[#fe7f25]">Services</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Airwave Global Logistics delivers comprehensive freight and supply chain capabilities engineered to optimize transit times and minimize logistics expenditures.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { label: 'All Services', key: 'all' },
              { label: 'Air Freight', key: 'air' },
              { label: 'Ocean Freight', key: 'ocean' },
              { label: 'Project & Defence', key: 'project' },
              { label: 'Cold Chain', key: 'coldchain' },
              { label: 'Customs Clearance', key: 'customs' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === tab.key
                    ? 'bg-[#fe7f25] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover-glow transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.badge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#fe7f25] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <Link
                    href="#contact-section"
                    className="text-sm font-bold text-[#fe7f25] hover:underline flex items-center gap-1.5"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs font-semibold text-slate-400">{service.transit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
