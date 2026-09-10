import React from 'react';
import Link from 'next/link';
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
  return (
    <section id="blogs-section" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">Market Intelligence</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Latest Insights & <span className="text-[#fe7f25]">Articles</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover-glow group transition-all flex flex-col justify-between"
            >
              <div className="p-6">
                <span className={`text-[11px] font-bold ${art.color} uppercase tracking-wider block mb-2`}>
                  {art.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#fe7f25] transition-colors mb-3">
                  <a href={art.link} target="_blank" rel="noopener noreferrer">
                    {art.title}
                  </a>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {art.desc}
                </p>
              </div>
              <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
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

        <div className="mt-12 text-center">
          <a
            href="https://www.airsurgegroup.com/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-[#fe7f25] text-white font-bold text-xs transition-all shadow-md"
          >
            <span>View All Freight Articles</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
