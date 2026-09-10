import React from 'react';
import { Building2, Landmark, Phone, Mail } from 'lucide-react';

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
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden bg-slate-100/70 border border-slate-200 shadow-inner">
            <img
              src="/images/map/corporate-network-map.webp"
              alt="Airwave Global Logistics Strategic Locations & Global Network Map"
              className="w-full h-full object-cover transition-all duration-300 hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
              width={1376}
              height={768}
            />
          </div>

          {/* Hub Addresses Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#fe7f25] text-white flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#fe7f25]">Corporate Headquarters</span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">New Delhi (HQ)</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plot No. 75, 3rd Floor, Bagdola, Sector-8, Dwarka, New Delhi - 110077, INDIA
              </p>
              <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-wrap gap-4 text-xs font-semibold">
                <a href="tel:+919818370497" className="text-slate-700 hover:text-[#fe7f25] flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#fe7f25]" /> +91 98183 70497
                </a>
                <a href="mailto:ajha@airsurgegroup.com" className="text-slate-700 hover:text-[#fe7f25] flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#fe7f25]" /> ajha@airsurgegroup.com
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-[#0284c7] text-white flex items-center justify-center">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0284c7]">Western Hub Operations</span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Ahmedabad (Gujarat)</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                810, Addor Aspire, Near Jahanvi Restaurant, University to Panjrapole Road, Ahmedabad - 380015
              </p>
              <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-wrap gap-4 text-xs font-semibold">
                <a href="tel:+919582432850" className="text-slate-700 hover:text-[#0284c7] flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#0284c7]" /> +91 95824 32850
                </a>
                <a href="mailto:abhishek.bharati@airsurgegroup.com" className="text-slate-700 hover:text-[#0284c7] flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#0284c7]" /> abhishek.bharati@airsurgegroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
