'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Calculator, ArrowRight, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/banner/hero-1.webp',
    mobileImage: '/images/banner/hero-1-mobile.webp',
    badge: 'Global Multimodal Freight Leader',
    headline: (
      <>
        Air &amp; Ocean <span className="text-[#fe7f25]">Freight</span> Services Worldwide
      </>
    ),
    description:
      'Reliable air cargo charters and cost-effective ocean freight across all global trade lanes with end-to-end milestone visibility.',
  },
  {
    image: '/images/banner/hero-2.webp',
    mobileImage: '/images/banner/hero-2-mobile.webp',
    badge: 'Premier Indian Forwarding Network',
    headline: (
      <>
        Leading Logistics
        <br />
        <span className="text-[#22ace3]">Company</span> In India
      </>
    ),
    description:
      'Tailored multimodal transport, rapid customs clearance, and dedicated logistics frameworks for exporters and enterprises.',
  },
  {
    image: '/images/banner/hero-3.webp',
    mobileImage: '/images/banner/hero-3-mobile.webp',
    badge: 'Specialized Project & Heavy Cargo',
    headline: (
      <>
        Project, Defence &amp; <span className="text-[#fe7f25]">ODC Cargo</span> Experts
      </>
    ),
    description:
      'Precision engineering, turnkey heavy-lift solutions, and secure handling of mission-critical defense shipments.',
  },
  {
    image: '/images/banner/hero-4.webp',
    mobileImage: '/images/banner/hero-4-mobile.webp',
    badge: 'Cold Chain & 3PL Logistics',
    headline: (
      <>
        Integrated <span className="text-[#3e47cc]">Supply Chain</span> Solutions
      </>
    ),
    description:
      'Cold chain reefer networks, pan-India domestic trucking, 3PL warehousing, and supply chain trade finance.',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mountedRemainingSlides, setMountedRemainingSlides] = useState(false);

  useEffect(() => {
    // Mount secondary slides after initial render to keep LCP instant
    const slidePreloadTimer = setTimeout(() => {
      setMountedRemainingSlides(true);
    }, 1000);

    const timer = setInterval(() => {
      setMountedRemainingSlides(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      clearTimeout(slidePreloadTimer);
      clearInterval(timer);
    };
  }, [currentSlide]);

  const goToSlide = (idx: number) => {
    setMountedRemainingSlides(true);
    setCurrentSlide(idx);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[590px] sm:min-h-[520px] lg:h-[620px] lg:min-h-[550px] bg-[#071126] text-white overflow-hidden flex items-center"
    >
      {/* Background Images Slider */}
      {slides.map((slide, index) => {
        if (index > 0 && !mountedRemainingSlides) return null;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'
              }`}
          >
            <picture className="w-full h-full block">
              <source srcSet={slide.mobileImage} media="(max-width: 767px)" />
              <img
                src={slide.image}
                alt="Airwave Global Logistics Hero Banner"
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding={index === 0 ? 'sync' : 'async'}
              />
            </picture>
            {/* Dark cinematic gradient: vertical on mobile for high text contrast; horizontal on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071126]/95 via-[#071126]/75 to-[#071126]/40 md:bg-gradient-to-r md:from-[#071126]/90 md:via-[#071126]/55 md:via-45% md:to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-10 w-full">
        <div className="max-w-3xl lg:max-w-4xl space-y-3.5 sm:space-y-5">

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-sm font-semibold text-orange-400 shadow-lg max-w-full">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fe7f25] shrink-0" />
            <span className="truncate">{slides[currentSlide].badge}</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white font-normal hidden sm:inline-flex items-center gap-1 shrink-0">
              <Globe className="w-3.5 h-3.5 text-cyan-300" />
              Airwave Global Logistics
            </span>
          </div>

          {/* Headline & Description */}
          <div className="min-h-[100px] sm:min-h-[140px] flex items-center">
            <div className="space-y-2 sm:space-y-3 animate-fade-in">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase font-display tracking-tight drop-shadow-md">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-slate-200 text-xs sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
            <Link
              href="#contact-section"
              className="btn-shimmer px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white font-extrabold text-xs sm:text-sm transition-all shadow-xl shadow-orange-500/35 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="sm:hidden">Get Instant Quote</span>
              <span className="hidden sm:inline">Get Instant Rate Quote</span>
              <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <Link
              href="#services-section"
              className="px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <span className="sm:hidden">Explore Services</span>
              <span className="hidden sm:inline">Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
            </Link>
          </div>

          {/* Unified Luxury Slide Progress & Navigation Console */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-6">
            {/* Interactive Morphing Progress Pills */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 shadow-xl shadow-black/30">
              {slides.map((_, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden flex items-center cursor-pointer ${isActive
                      ? 'w-16 sm:w-20 bg-white/20 shadow-[0_0_12px_rgba(254,127,37,0.5)]'
                      : 'w-2.5 sm:w-3 bg-white/30 hover:bg-white/70 hover:scale-110'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {isActive && (
                      <div
                        key={currentSlide}
                        className="h-full bg-gradient-to-r from-[#fe7f25] via-orange-400 to-[#fe7f25] animate-slide-progress rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
