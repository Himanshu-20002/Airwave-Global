import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home, Calendar, Clock, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/ui/FloatingActions';
import PortableText from '@/components/blog/PortableText';
import BlogCard from '@/components/blog/BlogCard';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import {
  postBySlugQuery,
  allPostSlugsQuery,
  relatedPostsQuery,
  PostDetail,
  PostCard,
} from '@/sanity/lib/queries';

interface PageProps {
  params: { slug: string };
}

// Fallback sample post dictionary for pre-seed demo
const fallbackPostDetails: Record<string, PostDetail> = {
  'not-sure-whether-to-ship-lcl-or-fcl': {
    _id: 'sample-1',
    title: 'Not Sure Whether to Ship LCL or FCL? Complete Comparison',
    slug: { current: 'not-sure-whether-to-ship-lcl-or-fcl' },
    category: {
      _id: 'cat-1',
      title: 'Sea Freight Guide',
      slug: { current: 'sea-freight' },
      accentColor: 'orange',
    },
    publishedAt: '2026-01-21T10:00:00Z',
    readingTime: '5 min read',
    authorName: 'Airwave Ocean Freight Division',
    excerpt:
      'Choosing between LCL and FCL shipping can impact your freight costs, transit time, and cargo safety. In this guide, we break down key differences and decision parameters.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'When moving cargo internationally across maritime lanes, one of the first critical crossroads exporters and importers face is choosing between Less than Container Load (LCL) and Full Container Load (FCL). Making the wrong selection can lead to unnecessary consolidation delays, elevated cubic-meter fees, or paying for empty container volume.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. What is Less than Container Load (LCL)?' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'LCL involves sharing container space with multiple shippers. If your cargo volume is typically between 1 CBM to 13 CBM, booking an entire 20ft container (approx 28-33 CBM capacity) is rarely cost-effective. With LCL, you only pay for the exact volume or weight your pallets occupy.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. What is Full Container Load (FCL)?' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'FCL grants you exclusive usage of an entire standard container (20GP, 40GP, or 40HC). Even if your cargo does not fill the container to its volumetric limit, the container is dedicated solely to your shipment, sealed at origin, and opened only at the destination warehouse or customs checkpoint.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'Rule of Thumb: If your shipment exceeds 13-15 CBM, FCL is almost universally more economical and significantly faster than LCL consolidation.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Decision Matrix: LCL vs FCL' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Consider these four decisive parameters when planning your booking:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [{ _type: 'span', text: 'Volume & Weight: < 13 CBM points to LCL; > 14 CBM favors a 20ft FCL.' }],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [{ _type: 'span', text: 'Transit Speed: FCL cuts 4 to 8 days because it eliminates CFS stuffing & de-stuffing.' }],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [{ _type: 'span', text: 'Cargo Fragility: Fragile goods benefit from FCL to minimize handling touchpoints.' }],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [{ _type: 'span', text: 'Customs Holds: In LCL, if one co-loader has doc issues, the whole box can be delayed.' }],
      },
    ],
  },
  'navigating-india-customs-icegate-2-duty-exemption': {
    _id: 'sample-2',
    title: 'Navigating India Customs ICEGATE 2.0 & Duty Exemption Frameworks',
    slug: { current: 'navigating-india-customs-icegate-2-duty-exemption' },
    category: {
      _id: 'cat-2',
      title: 'Customs & Compliance',
      slug: { current: 'customs-compliance' },
      accentColor: 'blue',
    },
    publishedAt: '2026-01-14T10:00:00Z',
    readingTime: '6 min read',
    authorName: 'Airwave Regulatory Advisory',
    excerpt:
      'How export-import enterprises can leverage Advance Authorizations, RoDTEP claims, and paperless customs broker clearance for zero delay.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The modernization of Indian customs through ICEGATE 2.0 and faceless assessment (Turant Customs) has dramatically reduced turnaround times for compliant EXIM operators. However, regulatory shifts require precise documentation to safeguard duty exemptions.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Maximizing RoDTEP and Duty Drawbacks' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ensuring your shipping bills correctly reflect your RoDTEP declaration codes at the time of filing is essential. Post-export ledger credit issuance depends on flawless digital alignment between your DGFT portal and ICEGATE ledger.',
          },
        ],
      },
    ],
  },
  'maintaining-cold-chain-integrity-across-global-biologics-lanes': {
    _id: 'sample-3',
    title: 'Maintaining Cold Chain Integrity Across Global Biologics Lanes',
    slug: { current: 'maintaining-cold-chain-integrity-across-global-biologics-lanes' },
    category: {
      _id: 'cat-3',
      title: 'Pharma Cold Chain',
      slug: { current: 'pharma-cold-chain' },
      accentColor: 'green',
    },
    publishedAt: '2026-01-08T10:00:00Z',
    readingTime: '4 min read',
    authorName: 'Airwave Pharma & GDP Unit',
    excerpt:
      'Best practices in active and passive temperature-controlled air freight packaging for life-saving pharmaceutical consignments.',
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Biologics, vaccines, and active pharmaceutical ingredients (APIs) require strict adherence to temperature bands (+2°C to +8°C, +15°C to +25°C, or dry ice <-70°C). Any temperature excursion can compromise product efficacy and lead to regulatory rejection.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'GDP Compliant Air Freight Handling' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'From thermal blanket wrapping on airline ULDs to active Envirotainer / CSafe containers, modern cold chains depend on validated standard operating procedures at every tarmac handoff.',
          },
        ],
      },
    ],
  },
};

const getPost = cache(async (slug: string): Promise<PostDetail | null> => {
  try {
    const post = await client.fetch<PostDetail>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: 60 } }
    );
    if (post) return post;
  } catch (err) {
    console.warn(`Error fetching post ${slug} from Sanity:`, err);
  }

  return fallbackPostDetails[slug] || null;
});

const getRelatedPosts = cache(async (categoryId?: string, currentSlug?: string): Promise<PostCard[]> => {
  if (!categoryId) return [];
  try {
    const related = await client.fetch<PostCard[]>(
      relatedPostsQuery,
      { categoryId, currentSlug },
      { next: { revalidate: 60 } }
    );
    return related || [];
  } catch (err) {
    return [];
  }
});

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<string[]>(allPostSlugsQuery);
    if (slugs && slugs.length > 0) {
      return slugs.map((slug) => ({ slug }));
    }
  } catch (err) {
    // fallback
  }

  return Object.keys(fallbackPostDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Article Not Found | Airwave Global' };
  }

  const title = post.metaTitle || `${post.title} | Airwave Global`;
  const description = post.metaDescription || post.excerpt;
  const canonical = `https://airwaveglobal.in/blog/${params.slug}`;
  const ogImageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage)?.width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.category?._id, post.slug?.current);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const coverImageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage)?.width(1200).height(675).url()
    : null;

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://airwaveglobal.in/blog/${params.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: post.authorName || 'Airwave Global Logistics',
      url: 'https://airwaveglobal.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Airwave Global Logistics Private Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://airwaveglobal.in/images/airwave-logo.png',
      },
    },
    image: coverImageUrl || undefined,
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Article Header & Breadcrumbs */}
        <section className="bg-slate-900 text-white pt-10 pb-16 sm:pb-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium overflow-x-auto no-scrollbar">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors shrink-0">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <Link href="/blog" className="hover:text-white transition-colors shrink-0">
                Market Intelligence
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-[#fe7f25] font-semibold truncate">
                {post.category?.title || 'Article'}
              </span>
            </nav>

            {/* Category Badge & Reading Time */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#fe7f25] text-white">
                {post.category?.title || 'Logistics Guide'}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1 text-xs text-slate-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {post.readingTime}
                </span>
              )}
            </div>

            {/* Article Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display leading-[1.15]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author & Published Date */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#fe7f25]">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span>By <strong className="text-slate-200">{post.authorName || 'Airwave Intelligence Desk'}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{formattedDate}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Article Body Section */}
        <section className="py-10 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Image */}
            {coverImageUrl && (
              <div className="relative aspect-[16/9] w-full mb-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md">
                <Image
                  src={coverImageUrl}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            )}

            {/* PortableText Rich Content */}
            <div className="max-w-3xl mx-auto">
              <PortableText value={post.body} />

              {/* Lead-Gen Action Banner inside article */}
              <div className="my-12 p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fe7f25]/20 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[11px] uppercase tracking-widest text-[#fe7f25] font-extrabold block mb-2">
                  Airwave Freight Consultation
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  Need Help Planning This Shipping Route?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Connect with our licensed customs brokers and container freight planners for customized rate schedules, port-pair transits, and demurrage-free operations.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/#contact-section"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fe7f25] hover:bg-[#e06810] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Talk to a Freight Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/#quote-section"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
                  >
                    <span>Request Instant Quote</span>
                  </Link>
                </div>
              </div>

              {/* Back to Blog Button */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#fe7f25] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Articles</span>
                </Link>
                <Link
                  href="/#contact-section"
                  className="text-xs font-bold text-[#fe7f25] hover:underline"
                >
                  Inquire on this Topic →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-slate-50 py-14 sm:py-20 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25]">
                  Related Reading
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  More From {post.category?.title || 'Airwave'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <BlogCard key={rel._id} post={rel} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
