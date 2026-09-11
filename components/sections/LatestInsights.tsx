'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const articles = [
  {
    category: 'Sea Freight Guide',
    color: 'text-[#fe7f25]',
    title: 'Not Sure Whether to Ship LCL or FCL? Complete Comparison',
    desc: 'Choosing between LCL and FCL shipping can impact your freight costs, transit time, and cargo safety. In this guide, we break down key differences and decision parameters.',
    date: '21 Jan 2026',
    link: 'https://www.airsurgegroup.com/blogs/not-sure-whether-to-ship-lcl-or-fcl-start-here',
  },
  {
    category: 'Customs & Compliance',
    color: 'text-[#0284c7]',
    title: 'Navigating India Customs ICEGATE 2.0 & Duty Exemption Frameworks',
    desc: 'How export-import enterprises can leverage Advance Authorizations, RoDTEP claims, and paperless customs broker clearance for zero delay.',
    date: '14 Jan 2026',
    link: 'https://www.airsurgegroup.com/blogs',
  },
  {
    category: 'Pharma Cold Chain',
    color: 'text-emerald-600',
    title: 'Maintaining Cold Chain Integrity Across Global Biologics Lanes',
    desc: 'Best practices in active and passive temperature-controlled air freight packaging for life-saving pharmaceutical consignments.',
    date: '08 Jan 2026',
    link: 'https://www.airsurgegroup.com/blogs',
  },
];

export default function LatestInsights() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const centerMiddleCard = () => {
      const container = carouselRef.current;
      const centerCard = centerCardRef.current;
      if (container && centerCard && window.innerWidth < 768) {
        const cardLeft = centerCard.offsetLeft;
        const cardWidth = centerCard.offsetWidth;
        const containerWidth = container.offsetWidth;
        container.scrollLeft = cardLeft - (containerWidth - cardWidth) / 2;
      }
    };

    centerMiddleCard();
    const timer = setTimeout(centerMiddleCard, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blogs-section" className="py-14 sm:py-16 md:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Market Intelligence</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Latest Insights & <span className="text-[#fe7f25]">Articles</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* Article Cards: Snappy Horizontal Carousel on Mobile, 3-Column Grid on Desktop */}
        <div
          ref={carouselRef}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible pt-3 pb-5 md:py-2 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {articles.map((art, idx) => (
            <article
              key={idx}
              ref={idx === 1 ? centerCardRef : undefined}
              className="w-[84vw] max-w-[340px] md:max-w-none md:w-auto shrink-0 snap-center md:snap-align-none bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover-glow group transition-all flex flex-col justify-between"
            >
              <div className="p-5 sm:p-6">
                <span className={`text-[11px] font-bold ${art.color} uppercase tracking-wider block mb-2`}>
                  {art.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#fe7f25] transition-colors mb-2.5 line-clamp-2">
                  <a href={art.link} target="_blank" rel="noopener noreferrer">
                    {art.title}
                  </a>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {art.desc}
                </p>
              </div>
              <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold ${art.color} hover:underline flex items-center gap-1`}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-400">{art.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2 text-slate-400 text-[11px]">
          <span>Swipe to explore articles</span>
          <ArrowRight className="w-3 h-3 text-[#fe7f25]" />
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://www.airsurgegroup.com/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-slate-900 hover:bg-[#fe7f25] text-white font-bold text-xs transition-all shadow-md"
          >
            <span>View All Freight Articles</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
