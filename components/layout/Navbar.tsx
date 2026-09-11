'use client';

import React, { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-2 sm:top-3 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl lg:rounded-full pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-scrolled py-1 sm:py-1.5'
            : 'glass-nav py-1.5 sm:py-2'
        }`}
      >
        <div className="flex justify-between items-center h-14 sm:h-16 px-3 sm:px-5 lg:px-6">

          {/* Logo */}
          <Link href="#hero-section" className="flex items-center gap-3 group">
            <Image
              src="/images/airwave-logo-transparent.webp"
              alt="Airwave Global Logistics Private Limited Logo"
              width={190}
              height={50}
              priority
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 font-semibold text-slate-700 text-sm">
            <Link
              href="#hero-section"
              className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="#about-section"
              className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200"
            >
              About Us
            </Link>

            {/* Services Mega-Dropdown Trigger */}
            <div className="relative group">
              <Link
                href="#services-section"
                className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200 flex items-center gap-1.5"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-[#fe7f25]" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 glass-dropdown rounded-3xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="space-y-1">
                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-orange-50/80 hover:text-[#fe7f25] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#fe7f25] flex items-center justify-center group-hover/item:bg-[#fe7f25] group-hover/item:text-white transition-colors shadow-sm">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Air Freight</p>
                      <span className="text-[11px] text-slate-400">Express &amp; charter cargo</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-blue-50/80 hover:text-[#0284c7] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0284c7] flex items-center justify-center group-hover/item:bg-[#0284c7] group-hover/item:text-white transition-colors shadow-sm">
                      <Ship className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Ocean Freight</p>
                      <span className="text-[11px] text-slate-400">FCL &amp; LCL global lanes</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-indigo-50/80 hover:text-[#3e47cc] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 text-[#3e47cc] flex items-center justify-center group-hover/item:bg-[#3e47cc] group-hover/item:text-white transition-colors shadow-sm">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Project &amp; Defence</p>
                      <span className="text-[11px] text-slate-400">Heavy lift &amp; specialized ODC</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-cyan-50/80 hover:text-[#22ace3] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-xl bg-cyan-100 text-[#22ace3] flex items-center justify-center group-hover/item:bg-[#22ace3] group-hover/item:text-white transition-colors shadow-sm">
                      <Snowflake className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Cold Chain Logistics</p>
                      <span className="text-[11px] text-slate-400">Temperature monitored</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-section"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-slate-100/80 hover:text-slate-900 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors shadow-sm">
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
              className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200"
            >
              Industries
            </Link>
            <Link
              href="#process-section"
              className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200"
            >
              Our Process
            </Link>
            <Link
              href="#network-section"
              className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200"
            >
              Network
            </Link>
            <Link
              href="#blogs-section"
              className="px-3.5 py-1.5 rounded-full hover:bg-slate-900/[0.04] hover:text-[#fe7f25] transition-all duration-200"
            >
              Insights
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact-section"
              className="btn-shimmer relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fe7f25] via-[#f57418] to-[#e0650d] hover:from-[#e0650d] hover:to-[#fe7f25] text-white text-sm font-bold shadow-[0_4px_16px_rgba(254,127,37,0.35)] hover:shadow-[0_6px_22px_rgba(254,127,37,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-quote-modal'));
              }}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#fe7f25] to-[#e0650d] text-white text-xs font-bold shadow-[0_2px_10px_rgba(254,127,37,0.3)] active:scale-95 transition-transform"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-900/[0.05] border border-white/60 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 pt-2 pb-4 px-3 space-y-1.5 border-t border-slate-200/60 animate-fade-in">
            <Link
              href="#hero-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              About Us
            </Link>
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#fe7f25]' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 pr-2 py-2 space-y-1 bg-white/60 backdrop-blur-md rounded-2xl my-1 border border-white/60">
                  <Link
                    href="#services-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#fe7f25]"
                  >
                    Air Freight
                  </Link>
                  <Link
                    href="#services-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#fe7f25]"
                  >
                    Ocean Freight
                  </Link>
                  <Link
                    href="#services-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#fe7f25]"
                  >
                    Project &amp; Defence Cargo
                  </Link>
                  <Link
                    href="#services-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#fe7f25]"
                  >
                    Cold Chain Logistics
                  </Link>
                  <Link
                    href="#services-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#fe7f25]"
                  >
                    Customs Clearance
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="#industries-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              Industries
            </Link>
            <Link
              href="#process-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="#network-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              Global Network
            </Link>
            <Link
              href="#blogs-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              Insights &amp; News
            </Link>
            <Link
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-900/[0.04] transition-colors"
            >
              Contact Us
            </Link>
            <div className="pt-2 px-1">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-quote-modal'));
                }}
                className="block w-full text-center py-3 bg-gradient-to-r from-[#fe7f25] to-[#e0650d] text-white rounded-2xl font-bold shadow-[0_4px_16px_rgba(254,127,37,0.35)] active:scale-95 transition-transform"
              >
                Get Instant Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

