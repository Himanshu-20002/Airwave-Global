'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Calculator, ArrowRight, ArrowUpRight, Award, Globe } from 'lucide-react';

const slides = [
  {
    image: 'https://www.airsurgegroup.com/banners/1.png',
    mobileImage: 'https://www.airsurgegroup.com/banners/m/1.png',
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
    image: 'https://www.airsurgegroup.com/banners/2.png',
    mobileImage: 'https://www.airsurgegroup.com/banners/m/2.png',
    badge: 'Premier Indian Forwarding Network',
    headline: (
      <>
        Leading Logistics <span className="text-[#22ace3]">Company</span> In India
      </>
    ),
    description:
      'Tailored multimodal transport, rapid customs clearance, and dedicated logistics frameworks for exporters and enterprises.',
  },
  {
    image: 'https://www.airsurgegroup.com/banners/3.png',
    mobileImage: 'https://www.airsurgegroup.com/banners/m/3.png',
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
    image: 'https://www.airsurgegroup.com/banners/4.png',
    mobileImage: 'https://www.airsurgegroup.com/banners/m/4.png',
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[620px] lg:min-h-[720px] bg-[#071126] text-white overflow-hidden flex items-center"
    >
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'
          }`}
        >
          <picture className="w-full h-full block">
            <source srcSet={slide.mobileImage} media="(max-width: 767px)" />
            <img
              src={slide.image}
              alt="Airwave Global Logistics Hero Banner"
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </picture>
          {/* Subtle cinematic gradient overlays that leave the hero vessels/aircraft 100% visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071126]/95 via-[#071126]/75 to-[#071126]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-transparent to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl lg:max-w-4xl space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-orange-400 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#fe7f25]" />
            <span>{slides[currentSlide].badge}</span>
            <span className="text-white/40">|</span>
            <span className="text-white font-normal flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-cyan-300" />
              Airwave Global Logistics
            </span>
          </div>

          {/* Headline & Description */}
          <div className="min-h-[170px] sm:min-h-[190px] flex items-center">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight uppercase font-display tracking-tight drop-shadow-md">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-slate-200 text-base sm:text-xl max-w-2xl leading-relaxed drop-shadow">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#contact-section"
              className="btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-[#fe7f25] to-[#f76707] hover:from-[#e0650d] hover:to-[#ea580c] text-white font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-orange-500/35 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Instant Rate Quote</span>
              <Calculator className="w-4 h-4" />
            </Link>
            <Link
              href="#services-section"
              className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>

          {/* Slide Navigation Dots & Progress Bar */}
          <div className="pt-8 flex items-center gap-5">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'bg-[#fe7f25] w-9 shadow-md shadow-orange-500/40'
                      : 'bg-white/40 hover:bg-white w-3'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="w-36 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                key={currentSlide}
                className="h-full bg-gradient-to-r from-[#fe7f25] to-orange-400 animate-slide-progress"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
