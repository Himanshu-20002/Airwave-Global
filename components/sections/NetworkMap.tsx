'use client';

import React from 'react';
import { Building2, Landmark, Phone, Mail } from 'lucide-react';

export default function NetworkMap() {
  return (
    <section id="network-section" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Global Reach</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Our Strategic <span className="text-[#fe7f25]">Locations & Network</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            Operating direct control centers in New Delhi and Ahmedabad with connected station offices at all major Indian sea ports and air cargo complexes.
          </p>
        </div>

        {/* Network Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden">
          <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 p-4 sm:p-8 flex items-center justify-center">
            <img
              src="https://www.airsurgegroup.com/map.png"
              alt="Global Logistics Network Map"
              className="w-full max-h-[480px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>

          {/* Hub Addresses Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#fe7f25] text-white flex items-center justify-center text-lg">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#fe7f25]">Corporate Headquarters</span>
                  <h4 className="text-base font-bold text-slate-900">New Delhi (HQ)</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plot No. 75, 3rd Floor, Bagdola, Sector-8, Dwarka, New Delhi - 110077, INDIA
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-wrap gap-4 text-xs font-semibold">
                <a href="tel:+919818370497" className="text-slate-700 hover:text-[#fe7f25] flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#fe7f25]" /> +91 98183 70497
                </a>
                <a href="mailto:ajha@airsurgegroup.com" className="text-slate-700 hover:text-[#fe7f25] flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#fe7f25]" /> ajha@airsurgegroup.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white flex items-center justify-center text-lg">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0284c7]">Western Hub Operations</span>
                  <h4 className="text-base font-bold text-slate-900">Ahmedabad (Gujarat)</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                810, Addor Aspire, Near Jahanvi Restaurant, University to Panjrapole Road, Ahmedabad - 380015
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-wrap gap-4 text-xs font-semibold">
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
