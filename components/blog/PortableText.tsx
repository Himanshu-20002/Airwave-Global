import Image from 'next/image';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlForImage(value)?.width(1200).height(675).url();
      if (!imageUrl) return null;

      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={imageUrl}
              alt={value.alt || 'Airwave article illustration'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#fe7f25] pl-5 py-3 my-6 bg-orange-50/40 rounded-r-xl italic text-slate-800 font-medium">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-slate-700 leading-relaxed mb-5 text-base sm:text-lg">
        {children}
      </p>
    ),
    bullet: ({ children }: any) => (
      <li className="list-disc ml-6 mb-2 text-slate-700 text-base sm:text-lg">
        {children}
      </li>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1.5">{children}</li>,
    number: ({ children }: any) => <li className="mb-1.5">{children}</li>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700 text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-700 text-base sm:text-lg">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? 'noopener noreferrer' : undefined}
          className="text-[#fe7f25] underline underline-offset-2 font-medium hover:text-[#e06810] transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableText({ value }: { value: any }) {
  if (!value) return null;
  return <PortableTextComponent value={value} components={components} />;
}
