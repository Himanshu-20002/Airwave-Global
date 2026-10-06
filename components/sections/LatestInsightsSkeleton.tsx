import React from 'react';

export default function LatestInsightsSkeleton() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="h-3 w-36 bg-orange-100/80 rounded-full mx-auto animate-pulse" />
          <div className="h-8 w-64 sm:w-80 bg-slate-200/80 rounded-lg mx-auto mt-3 animate-pulse" />
          <div className="w-16 h-1 bg-[#fe7f25] mx-auto mt-3 rounded-full" />
        </div>

        {/* 3-Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col justify-between p-5 sm:p-6 animate-pulse min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="h-3 w-28 bg-slate-200 rounded" />
                  <div className="h-3 w-16 bg-slate-200 rounded" />
                </div>
                <div className="h-5 w-4/5 bg-slate-200 rounded mb-2.5" />
                <div className="space-y-2 mt-3">
                  <div className="h-3 w-full bg-slate-200/70 rounded" />
                  <div className="h-3 w-11/12 bg-slate-200/70 rounded" />
                  <div className="h-3 w-3/4 bg-slate-200/70 rounded" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div className="h-3.5 w-24 bg-slate-200 rounded" />
                <div className="h-3 w-16 bg-slate-200 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button Skeleton */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-block h-10 w-56 bg-slate-200 rounded-full animate-pulse" />
        </div>

      </div>
    </section>
  );
}
