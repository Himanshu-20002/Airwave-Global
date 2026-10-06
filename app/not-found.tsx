import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 text-center">
      <div className="max-w-md mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#fe7f25] block mb-2">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-display mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-300 mb-8 leading-relaxed">
          The logistics page or article you are searching for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fe7f25] hover:bg-[#e06810] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all border border-slate-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Explore Blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
