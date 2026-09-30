'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
  {
    title: 'Pharmaceuticals & Healthcare',
    image: '/images/industries/1.webp',
    desc: 'Regulated, temperature-sensitive vaccines and high-value APIs handled with strict documentation, GDP compliance, and time-critical execution.',
  },
  {
    title: 'Chemicals (HAZ & Non-HAZ)',
    image: '/images/industries/2.webp',
    desc: 'Certified DGR handling, IMO class segregation, specialized ISO tank containers, and complete international safety data sheets (MSDS) execution.',
  },
  {
    title: 'Electronics & High-Tech',
    image: '/images/industries/3.webp',
    desc: 'Secure transit of semiconductors, sensitive electronics, and telecommunications hardware with GPS anti-theft monitoring and ESD protection.',
  },
  {
    title: 'Automotive Parts & Manufacturing',
    image: '/images/industries/4.webp',
    desc: 'Just-in-Time (JIT) delivery, CKD/SKD kits, and high-value auto components requiring secure, time-definite cross-border execution.',
  },
  {
    title: 'Retail & E-commerce',
    image: '/images/industries/8.webp',
    desc: 'Omni-channel fulfillment, returns management (reverse logistics), and seasonal inventory surges with flexible cross-border e-commerce solutions.',
  },
  {
    title: 'FMCG & Consumer Goods',
    image: '/images/industries/5.webp',
    desc: 'Fast-moving consumer goods with strict FIFO/FEFO requirements, promotional campaign support, and high-speed distribution networks.',
  },
  {
    title: 'Aerospace & Defense',
    image: '/images/industries/6.webp',
    desc: 'Critical aircraft parts and defense components with stringent security protocols, chain of custody documentation, and AOG (Aircraft on Ground) response capabilities.',
  },
  {
    title: 'Oil & Gas / Energy',
    image: '/images/industries/7.webp',
    desc: 'Heavy machinery, spare parts, and rig supplies for remote energy operations with specialized heavy-lift and hazardous material handling expertise.',
  },
]

export default function IndustriesGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

    const firstCard = container.querySelector<HTMLElement>('[data-industry-card]');
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 24; // matches gap-6
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(index, 0), industries.length - 1));
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollOne = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>('[data-industry-card]');
    const cardWidth = firstCard ? firstCard.offsetWidth : 280;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollDistance = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('[data-industry-card]');
    if (cards[index]) {
      container.scrollTo({
        left: cards[index].offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="industries-section" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Sector-Specific Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Industries <span className="text-[#fe7f25]">We Serve</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            Precision logistics compliance tailored to the rigorous operational requirements of distinct global industries.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Side Floating Left Arrow */}
          <button
            type="button"
            onClick={() => scrollOne('left')}
            disabled={!canScrollLeft}
            aria-label="Previous Industry Card"
            className={`hidden sm:flex absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-xl items-center justify-center text-slate-700 transition-all duration-200 ${!canScrollLeft
              ? 'opacity-0 pointer-events-none'
              : 'hover:bg-[#fe7f25] hover:text-white hover:border-[#fe7f25] hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100'
              }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Side Floating Right Arrow */}
          <button
            type="button"
            onClick={() => scrollOne('right')}
            disabled={!canScrollRight}
            aria-label="Next Industry Card"
            className={`hidden sm:flex absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-xl items-center justify-center text-slate-700 transition-all duration-200 ${!canScrollRight
              ? 'opacity-0 pointer-events-none'
              : 'hover:bg-[#fe7f25] hover:text-white hover:border-[#fe7f25] hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100'
              }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrollable Row (4 cards visible by default on desktop) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-2 pb-6 px-1"
          >
            {industries.map((ind, idx) => (
              <div
                key={idx}
                data-industry-card
                className="w-[82%] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start bg-white rounded-3xl p-6 lg:p-7 border border-slate-200/80 hover-glow group/card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-slate-100 relative">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                      loading="lazy"
                      width={600}
                      height={338}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover/card:text-[#fe7f25] transition-colors mb-2.5 line-clamp-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots & Mobile Navigation */}
        <div className="flex items-center justify-between sm:justify-center gap-4 mt-6">
          {/* Slide Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {industries.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to industry ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === i ? 'w-7 bg-[#fe7f25]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>

          {/* Mobile Arrows (Visible only on small screens) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => scrollOne('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Industry"
              className={`w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'active:scale-95 text-[#fe7f25]'
                }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollOne('right')}
              disabled={!canScrollRight}
              aria-label="Next Industry"
              className={`w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'active:scale-95 text-[#fe7f25]'
                }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
