import { cache } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/ui/FloatingActions';
import BlogFeed from '@/components/blog/BlogFeed';
import { client } from '@/sanity/lib/client';
import {
  allPostsQuery,
  allCategoriesQuery,
  PostCard,
  Category,
} from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Market Intelligence & Global Logistics Insights | Airwave',
  description:
    'Actionable perspectives on international sea freight, air shipping, Indian customs ICEGATE 2.0, RoDTEP duty exemptions, and biologics cold-chain logistics.',
  alternates: {
    canonical: 'https://airwaveglobal.in/blog',
  },
  openGraph: {
    title: 'Market Intelligence & Logistics Insights | Airwave Global',
    description:
      'Actionable perspectives on international sea freight, air shipping, Indian customs, and pharmaceutical cold chain.',
    url: 'https://airwaveglobal.in/blog',
    type: 'website',
  },
};

const defaultCategories: Category[] = [
  { _id: 'cat-1', title: 'Sea Freight Guide', slug: { current: 'sea-freight' }, accentColor: 'orange' },
  { _id: 'cat-2', title: 'Customs & Compliance', slug: { current: 'customs-compliance' }, accentColor: 'blue' },
  { _id: 'cat-3', title: 'Pharma Cold Chain', slug: { current: 'pharma-cold-chain' }, accentColor: 'green' },
];

const defaultPosts: PostCard[] = [
  {
    _id: 'post-1',
    category: defaultCategories[0],
    title: 'Not Sure Whether to Ship LCL or FCL? Complete Comparison',
    slug: { current: 'not-sure-whether-to-ship-lcl-or-fcl' },
    excerpt:
      'Choosing between LCL and FCL shipping can impact your freight costs, transit time, and cargo safety. In this guide, we break down key differences and decision parameters.',
    publishedAt: '2026-01-21T10:00:00Z',
    readingTime: '5 min read',
  },
  {
    _id: 'post-2',
    category: defaultCategories[1],
    title: 'Navigating India Customs ICEGATE 2.0 & Duty Exemption Frameworks',
    slug: { current: 'navigating-india-customs-icegate-2-duty-exemption' },
    excerpt:
      'How export-import enterprises can leverage Advance Authorizations, RoDTEP claims, and paperless customs broker clearance for zero delay.',
    publishedAt: '2026-01-14T10:00:00Z',
    readingTime: '6 min read',
  },
  {
    _id: 'post-3',
    category: defaultCategories[2],
    title: 'Maintaining Cold Chain Integrity Across Global Biologics Lanes',
    slug: { current: 'maintaining-cold-chain-integrity-across-global-biologics-lanes' },
    excerpt:
      'Best practices in active and passive temperature-controlled air freight packaging for life-saving pharmaceutical consignments.',
    publishedAt: '2026-01-08T10:00:00Z',
    readingTime: '4 min read',
  },
];

const getBlogData = cache(async () => {
  let posts: PostCard[] = [];
  let categories: Category[] = [];

  try {
    const [fetchedPosts, fetchedCategories] = await Promise.all([
      client.fetch<PostCard[]>(allPostsQuery, {}, { next: { revalidate: 60 } }),
      client.fetch<Category[]>(allCategoriesQuery, {}, { next: { revalidate: 60 } }),
    ]);

    const liveSlugs = new Set((fetchedPosts || []).map((p) => p.slug?.current));
    const extraDefaults = defaultPosts.filter((dp) => !liveSlugs.has(dp.slug?.current));
    posts = [...(fetchedPosts || []), ...extraDefaults];

    const liveCatSlugs = new Set((fetchedCategories || []).map((c) => c.slug?.current));
    const extraCategories = defaultCategories.filter((dc) => !liveCatSlugs.has(dc.slug?.current));
    categories = [...(fetchedCategories || []), ...extraCategories];
  } catch (err) {
    console.warn('Error fetching blog data from Sanity:', err);
    posts = defaultPosts;
    categories = defaultCategories;
  }

  return {
    posts,
    categories,
  };
});

export default async function BlogIndexPage() {
  const { posts, categories } = await getBlogData();

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Header Hero */}
        <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 opacity-90" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fe7f25]/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[#fe7f25] font-semibold">Market Intelligence</span>
            </nav>

            <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25] block mb-2">
              Airwave Knowledge Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase font-display max-w-3xl">
              Latest Insights & <span className="text-[#fe7f25]">Articles</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Navigating global supply chain shifts, ICEGATE customs compliances, ocean container freight dynamics, and GDP pharmaceutical cold chain integrity.
            </p>
          </div>
        </section>

        {/* Blog Feed Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogFeed initialPosts={posts} categories={categories} />
          </div>
        </section>

        {/* Global Freight CTA */}
        <section className="bg-slate-50 border-t border-slate-200 py-14">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Have Specific Freight or Customs Questions?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              Our licensed customs brokers and ocean freight planners can review your shipping manifests and provide immediate route optimization.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact-section"
                className="px-7 py-3 rounded-full bg-[#fe7f25] hover:bg-[#e06810] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Consult Our Freight Specialists
              </Link>
              <Link
                href="/#quote-section"
                className="px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Instant Freight Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
