'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PostCard } from '@/sanity/lib/queries';
import BlogCard from '@/components/blog/BlogCard';

interface Props {
  posts: PostCard[];
}

export default function LatestInsightsCarousel({ posts }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerMiddleCard = () => {
      const container = carouselRef.current;
      if (container && window.innerWidth < 768 && container.children.length > 1) {
        const centerCard = container.children[1] as HTMLElement;
        if (centerCard) {
          const cardLeft = centerCard.offsetLeft;
          const cardWidth = centerCard.offsetWidth;
          const containerWidth = container.offsetWidth;
          container.scrollLeft = cardLeft - (containerWidth - cardWidth) / 2;
        }
      }
    };

    centerMiddleCard();
    const timer = setTimeout(centerMiddleCard, 80);
    return () => clearTimeout(timer);
  }, [posts]);

  return (
    <>
      <div
        ref={carouselRef}
        className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto md:overflow-visible pt-3 pb-5 md:py-2 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} isCarouselItem />
        ))}
      </div>

      {/* Mobile Swipe Cue */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mt-2 text-slate-400 text-[11px]">
        <span>Swipe to explore articles</span>
        <ArrowRight className="w-3 h-3 text-[#fe7f25]" />
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-slate-900 hover:bg-[#fe7f25] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>Explore All Insights & Articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </>
  );
}
