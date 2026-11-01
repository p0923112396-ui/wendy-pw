import React, { useState } from 'react';
import { ArrowUpRight, Compass, X } from 'lucide-react';
import { PROFILE_DATA, HighlightItem } from '../data/profile';

interface HighlightsProps {
  lang: 'zh' | 'en';
}

export const Highlights: React.FC<HighlightsProps> = ({ lang }) => {
  const [activeItem, setActiveItem] = useState<HighlightItem | null>(null);

  return (
    <section id="highlights" className="py-20 md:py-28 bg-[#F5F5F3] dark:bg-[#181818] border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 font-mono mb-3">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'zh' ? '精選專題與生活靈感' : 'Curated Topics'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-50 font-editorial">
              {lang === 'zh' ? '風格視角與精選筆記' : 'Editorial Highlights &amp; Insights'}
            </h2>
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            {lang === 'zh' ? '點擊卡片閱讀細節或導流至社群' : 'Select an entry to expand'}
          </div>
        </div>

        {/* 3-Column Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILE_DATA.highlights.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-xs hover:border-stone-400 dark:hover:border-stone-600 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata (Anti-Pill Compliant) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-mono mb-4">
                  <span className="text-stone-900 dark:text-stone-100 font-medium">
                    {lang === 'zh' ? item.categoryZh : item.categoryEn}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-editorial font-medium text-stone-900 dark:text-stone-50 mb-3 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                  {lang === 'zh' ? item.titleZh : item.titleEn}
                </h3>

                <p className="text-sm text-stone-600 dark:text-stone-400 font-modern leading-relaxed line-clamp-3 mb-6">
                  {lang === 'zh' ? item.descriptionZh : item.descriptionEn}
                </p>
              </div>

              {/* Card Footer with clean tags & CTA */}
              <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                  {item.tags.join(' / ')}
                </div>

                <div className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 group-hover:bg-stone-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-stone-900 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detail Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="w-full max-w-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 shadow-2xl relative text-stone-900 dark:text-stone-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                <Compass className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? activeItem.categoryZh : activeItem.categoryEn}</span>
                <span aria-hidden="true">·</span>
                <span>{activeItem.date}</span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="my-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-stone-900 dark:text-stone-50">
                {lang === 'zh' ? activeItem.titleZh : activeItem.titleEn}
              </h3>
              <p className="text-base text-stone-700 dark:text-stone-300 font-modern leading-relaxed">
                {lang === 'zh' ? activeItem.descriptionZh : activeItem.descriptionEn}
              </p>
              
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-800 text-xs font-mono text-stone-500 space-y-1">
                <p>{lang === 'zh' ? '相關標籤：' : 'Tags: '} {activeItem.tags.join(' · ')}</p>
                <p>{lang === 'zh' ? '推薦閱讀頻道：Instagram / Portaly' : 'Available on: Instagram / Portaly'}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                {lang === 'zh' ? '關閉' : 'Close'}
              </button>
              <a
                href={activeItem.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>{lang === 'zh' ? '前往原文/社群' : 'Read on Channel'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
