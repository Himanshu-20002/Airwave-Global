import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { PostCard } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

interface BlogCardProps {
  post: PostCard;
  isCarouselItem?: boolean;
}

const colorMap: Record<string, string> = {
  orange: 'text-[#fe7f25]',
  blue: 'text-[#0284c7]',
  green: 'text-emerald-600',
  slate: 'text-slate-600',
};

export default function BlogCard({ post, isCarouselItem = false }: BlogCardProps) {
  const categoryColor =
    (post.category?.accentColor && colorMap[post.category.accentColor]) ||
    'text-[#fe7f25]';

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '';

  const imageUrl = post.mainImage?.asset
    ? urlForImage(post.mainImage)?.width(600).height(340).url()
    : null;

  return (
    <article
      className={`${
        isCarouselItem
          ? 'w-[84vw] max-w-[340px] md:max-w-none md:w-auto shrink-0 snap-center md:snap-align-none'
          : 'w-full'
      } bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover-glow group transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1`}
    >
      <div>
        {imageUrl && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className={`text-[11px] font-bold ${categoryColor} uppercase tracking-wider`}>
              {post.category?.title || 'Market Intelligence'}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#fe7f25] transition-colors mb-2.5 line-clamp-2">
            <Link href={`/blog/${post.slug?.current || ''}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
        <Link
          href={`/blog/${post.slug?.current || ''}`}
          className={`font-bold ${categoryColor} hover:underline flex items-center gap-1.5`}
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-slate-400">{formattedDate}</span>
      </div>
    </article>
  );
}
