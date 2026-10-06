import React from 'react';
import { client } from '@/sanity/lib/client';
import { latestPostsQuery, PostCard } from '@/sanity/lib/queries';
import LatestInsightsCarousel from './LatestInsightsCarousel';

const fallbackPosts: PostCard[] = [
  {
    _id: 'fallback-1',
    category: {
      _id: 'cat-1',
      title: 'Sea Freight Guide',
      slug: { current: 'sea-freight' },
      accentColor: 'orange',
    },
    title: 'Not Sure Whether to Ship LCL or FCL? Complete Comparison',
    slug: { current: 'not-sure-whether-to-ship-lcl-or-fcl' },
    excerpt:
      'Choosing between LCL and FCL shipping can impact your freight costs, transit time, and cargo safety. In this guide, we break down key differences and decision parameters.',
    publishedAt: '2026-01-21T10:00:00Z',
    readingTime: '5 min read',
  },
  {
    _id: 'fallback-2',
    category: {
      _id: 'cat-2',
      title: 'Customs & Compliance',
      slug: { current: 'customs-compliance' },
      accentColor: 'blue',
    },
    title: 'Navigating India Customs ICEGATE 2.0 & Duty Exemption Frameworks',
    slug: { current: 'navigating-india-customs-icegate-2-duty-exemption' },
    excerpt:
      'How export-import enterprises can leverage Advance Authorizations, RoDTEP claims, and paperless customs broker clearance for zero delay.',
    publishedAt: '2026-01-14T10:00:00Z',
    readingTime: '6 min read',
  },
  {
    _id: 'fallback-3',
    category: {
      _id: 'cat-3',
      title: 'Pharma Cold Chain',
      slug: { current: 'pharma-cold-chain' },
      accentColor: 'green',
    },
    title: 'Maintaining Cold Chain Integrity Across Global Biologics Lanes',
    slug: { current: 'maintaining-cold-chain-integrity-across-global-biologics-lanes' },
    excerpt:
      'Best practices in active and passive temperature-controlled air freight packaging for life-saving pharmaceutical consignments.',
    publishedAt: '2026-01-08T10:00:00Z',
    readingTime: '4 min read',
  },
];

async function getPosts(): Promise<PostCard[]> {
  try {
    const posts = await client.fetch<PostCard[]>(
      latestPostsQuery,
      {},
      { next: { revalidate: 60 } }
    );
    if (posts && posts.length > 0) {
      const liveSlugs = new Set(posts.map((p) => p.slug?.current));
      const remainingFallbacks = fallbackPosts.filter(
        (fb) => !liveSlugs.has(fb.slug?.current)
      );
      return [...posts, ...remainingFallbacks].slice(0, 3);
    }
  } catch (error) {
    console.warn('Could not fetch latest posts from Sanity, using fallback:', error);
  }
  return fallbackPosts;
}

export default async function LatestInsights() {
  const posts = await getPosts();

  return (
    <section id="blogs-section" className="py-14 sm:py-16 md:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">
            Market Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2 tracking-tight uppercase font-display">
            Latest Insights & <span className="text-[#fe7f25]">Articles</span>
          </h2>
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* Carousel / 3-Column Grid */}
        <LatestInsightsCarousel posts={posts} />

      </div>
    </section>
  );
}
