import React from 'react';
import { Building2, Phone, Mail } from 'lucide-react';
import MapLocation from '@/components/ui/MapLocation';

export default function NetworkMap() {
  return (
    <section id="network-section" className="py-12 lg:py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Global Reach</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight uppercase font-display">
            Our Strategic <span className="text-[#fe7f25]">Locations & Network</span>
          </h2>
          <div className="w-12 h-1 bg-[#fe7f25] mx-auto mt-2 rounded-full" />
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Operating direct control centers in New Delhi and Ahmedabad with connected station offices at all major Indian sea ports and air cargo complexes.
          </p>
        </div>

        {/* Network Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xl overflow-hidden">
          <MapLocation
            imageSrc="/images/map/corporate-network-map.webp"
            imageAlt="Airwave Global Logistics Strategic Locations & Global Network Map"
            mapUrl="https://maps.google.com/?q=Airwave+Global+Logistics+Dwarka+Sector-8+New+Delhi"
            title="Strategic Control Centers & Trade Corridors"
            address="Corporate Headquarters: New Delhi (Dwarka Sector-8) • Western Operations Hub: Ahmedabad"
            actionLabel="Explore Hub On Google Maps"
            className="w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-xl border border-slate-200 shadow-inner"
          />

          {/* Corporate Headquarters Card - Full Width */}
          <div className="mt-5 p-4 sm:p-5 lg:p-6 rounded-xl bg-slate-50 border border-slate-200 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#fe7f25] text-white flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#fe7f25] tracking-wider">Corporate Headquarters</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">New Delhi (HQ)</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Plot No. 75, 3rd Floor, Bagdola, Sector-8, Dwarka, New Delhi - 110077, INDIA
                </p>
              </div>

              <div className="pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200/80 md:pl-6 flex flex-wrap md:flex-col gap-2.5 sm:gap-3 text-xs font-semibold shrink-0">
                <a href="tel:+919818370497" className="text-slate-700 hover:text-[#fe7f25] flex items-center gap-1.5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#fe7f25]" /> +91 98183 70497
                </a>
                <a href="mailto:ajha@airsurgegroup.com" className="text-slate-700 hover:text-[#fe7f25] flex items-center gap-1.5 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#fe7f25]" /> ajha@airsurgegroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
