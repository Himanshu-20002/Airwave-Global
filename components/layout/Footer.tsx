'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050c1b] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-white p-2 rounded-xl inline-block shadow-md">
              <img
                src="/images/airwave-logo.jpg"
                alt="Airwave Global Logistics Private Limited"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging Continents, Connecting Markets. Airwave Global Logistics Private Limited delivers dependable air, ocean, multimodal freight and supply chain solutions worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
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
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-all text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://wa.me/919818370497"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
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
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Freight Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="#services-section" className="hover:text-white transition-colors">Air Freight Charters</Link></li>
              <li><Link href="#services-section" className="hover:text-white transition-colors">Ocean FCL & LCL Cargo</Link></li>
              <li><Link href="#services-section" className="hover:text-white transition-colors">Project & Heavy Lift ODC</Link></li>
              <li><Link href="#services-section" className="hover:text-white transition-colors">Customs Clearance Brokerage</Link></li>
              <li><Link href="#services-section" className="hover:text-white transition-colors">Pharma Cold Chain</Link></li>
              <li><Link href="#services-section" className="hover:text-white transition-colors">Supply Chain Finance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <strong className="text-white block">Corporate HQ:</strong>
                <p>Plot No. 75, 3rd Floor, Bagdola, Sector-8, Dwarka, New Delhi - 110077, INDIA</p>
                <a href="tel:+919818370497" className="text-[#fe7f25] hover:underline block mt-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 inline" /> +91 98183 70497
                </a>
              </div>
              <div className="pt-2">
                <strong className="text-white block">Gujarat Branch:</strong>
                <p>810, Addor Aspire, Near Jahanvi Restaurant, Panjrapole Rd, Ahmedabad - 380015</p>
                <a href="tel:+919582432850" className="text-[#0284c7] hover:underline block mt-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 inline" /> +91 95824 32850
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
