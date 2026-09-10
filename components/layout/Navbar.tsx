'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Plane,
  Ship,
  Truck,
  Snowflake,
  FileCheck2,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="#hero-section" className="flex items-center gap-3 group">
            <Image
              src="/images/airwave-logo-transparent.webp"
              alt="Airwave Global Logistics Private Limited Logo"
              width={200}
              height={56}
              priority
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-slate-700">
            <Link
              href="#hero-section"
              className="hover:text-[#fe7f25] transition-colors py-2 border-b-2 border-transparent hover:border-[#fe7f25]"
            >
              Home
            </Link>
            <Link
              href="#about-section"
              className="hover:text-[#fe7f25] transition-colors py-2 border-b-2 border-transparent hover:border-[#fe7f25]"
            >
              About Us
            </Link>

            {/* Services Mega-Dropdown Trigger */}
            <div className="relative group">
              <Link
                href="#services-section"
                className="flex items-center gap-1.5 py-2 hover:text-[#fe7f25] transition-colors"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="space-y-1">
                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 hover:text-[#fe7f25] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#fe7f25] flex items-center justify-center group-hover/item:bg-[#fe7f25] group-hover/item:text-white transition-colors">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Air Freight</p>
                      <span className="text-[11px] text-slate-400">Express & charter cargo</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-[#0284c7] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0284c7] flex items-center justify-center group-hover/item:bg-[#0284c7] group-hover/item:text-white transition-colors">
                      <Ship className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Ocean Freight</p>
                      <span className="text-[11px] text-slate-400">FCL & LCL global lanes</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50 hover:text-[#3e47cc] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#3e47cc] flex items-center justify-center group-hover/item:bg-[#3e47cc] group-hover/item:text-white transition-colors">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Project & Defence</p>
                      <span className="text-[11px] text-slate-400">Heavy lift & specialized ODC</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cyan-50 hover:text-[#22ace3] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 text-[#22ace3] flex items-center justify-center group-hover/item:bg-[#22ace3] group-hover/item:text-white transition-colors">
                      <Snowflake className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Cold Chain Logistics</p>
                      <span className="text-[11px] text-slate-400">Temperature monitored</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Customs Clearance</p>
                      <span className="text-[11px] text-slate-400">Fast border compliance</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="#industries-section"
              className="hover:text-[#fe7f25] transition-colors py-2 border-b-2 border-transparent hover:border-[#fe7f25]"
            >
              Industries
            </Link>
            <Link
              href="#process-section"
              className="hover:text-[#fe7f25] transition-colors py-2 border-b-2 border-transparent hover:border-[#fe7f25]"
            >
              Our Process
            </Link>
            <Link
              href="#network-section"
              className="hover:text-[#fe7f25] transition-colors py-2 border-b-2 border-transparent hover:border-[#fe7f25]"
            >
              Network
            </Link>
            <Link
              href="#blogs-section"
              className="hover:text-[#fe7f25] transition-colors py-2 border-b-2 border-transparent hover:border-[#fe7f25]"
            >
              Insights
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact-section"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fe7f25] hover:bg-[#e0650d] text-white text-sm font-bold shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="#contact-section"
              className="px-3.5 py-2 rounded-lg bg-[#fe7f25] text-white text-xs font-bold"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fade-in">
          <Link
            href="#hero-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            href="#about-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            About Us
          </Link>
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1">
                <Link
                  href="#services-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-[#fe7f25]"
                >
                  Air Freight
                </Link>
                <Link
                  href="#services-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-[#fe7f25]"
                >
                  Ocean Freight
                </Link>
                <Link
                  href="#services-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-[#fe7f25]"
                >
                  Project & Defence Cargo
                </Link>
                <Link
                  href="#services-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-[#fe7f25]"
                >
                  Cold Chain Logistics
                </Link>
                <Link
                  href="#services-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-[#fe7f25]"
                >
                  Customs Clearance
                </Link>
              </div>
            )}
          </div>
          <Link
            href="#industries-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Industries
          </Link>
          <Link
            href="#process-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Our Process
          </Link>
          <Link
            href="#network-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Global Network
          </Link>
          <Link
            href="#blogs-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Insights & News
          </Link>
          <Link
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-[#fe7f25] text-white rounded-xl font-bold shadow-md"
            >
              Request Rate Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
