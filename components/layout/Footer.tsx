import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Instagram } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#050c1b] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-white px-3.5 py-2 inline-block border border-slate-200 shadow-sm rounded">
              <Image
                src="/images/airwave-logo-transparent.webp"
                alt="Airwave Global Logistics Private Limited"
                width={170}
                height={48}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Bridging Continents, Connecting Markets. Airwave Global Logistics Private Limited delivers dependable air, ocean, multimodal freight and supply chain solutions worldwide.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/airsurge-logistics-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0284c7] flex items-center justify-center text-slate-300 hover:text-white transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/airsurgelogisticspvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919818370497"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#25D366] flex items-center justify-center text-slate-300 hover:text-white transition-all group"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-slate-300 group-hover:fill-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links & Services: 2-column side-by-side on mobile, balanced on desktop */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><Link href="#hero-section" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about-section" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#services-section" className="hover:text-white transition-colors">Freight Services</Link></li>
                <li><Link href="#industries-section" className="hover:text-white transition-colors">Industries We Serve</Link></li>
                <li><Link href="#process-section" className="hover:text-white transition-colors">Logistics Process</Link></li>
                <li><Link href="#blogs-section" className="hover:text-white transition-colors">Insights & Articles</Link></li>
                <li><Link href="#contact-section" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services List */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">Freight Services</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
                <li><Link href="#services-section" className="hover:text-white transition-colors">Air Freight Charters</Link></li>
                <li><Link href="#services-section" className="hover:text-white transition-colors">Ocean FCL & LCL Cargo</Link></li>
                <li><Link href="#services-section" className="hover:text-white transition-colors">Project & Heavy Lift ODC</Link></li>
                <li><Link href="#services-section" className="hover:text-white transition-colors">Customs Clearance Brokerage</Link></li>
                <li><Link href="#services-section" className="hover:text-white transition-colors">Pharma Cold Chain</Link></li>
                <li><Link href="#services-section" className="hover:text-white transition-colors">Supply Chain Finance</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info: Single Corporate HQ Address */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <strong className="text-white block mb-1">Corporate HQ:</strong>
                <p className="leading-relaxed">Plot No. 75, 3rd Floor, Bagdola, Sector-8, Dwarka, New Delhi - 110077, INDIA</p>
                <a href="tel:+919818370497" className="text-[#fe7f25] hover:underline inline-flex items-center gap-1.5 mt-2 font-medium">
                  <Phone className="w-3 h-3" /> +91 98183 70497
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 AIRWAVE GLOBAL LOGISTICS PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
