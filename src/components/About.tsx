import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface AboutProps {
  lang: 'zh' | 'en';
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onOpenContact }) => {
  const content = lang === 'zh' ? PROFILE_DATA.aboutZh : PROFILE_DATA.aboutEn;

  return (
    <section id="about" className="py-20 md:py-28 border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 font-mono mb-3">
            <span>Identity &amp; Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'zh' ? '關於 Wendy' : 'About Wendy'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-50 font-editorial mb-4">
            {lang === 'zh' ? '以從容俐落的步調，過有質感的日常' : 'A Quiet Pursuit of Quality and Composure'}
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-300 font-editorial italic">
            {content.lead}
          </p>
        </div>

        {/* 2-Column Split: Story vs Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Story Column */}
          <div className="lg:col-span-5 space-y-6 text-stone-700 dark:text-stone-300 font-modern leading-relaxed text-base">
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            
            <div className="p-6 rounded-xl bg-stone-100/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-stone-500">
                <Sparkles className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
                <span>{lang === 'zh' ? '合作開放狀態' : 'Partnership Status'}</span>
              </div>
              <p className="text-sm text-stone-800 dark:text-stone-200 font-medium">
                {content.status}
              </p>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-stone-900 dark:text-stone-100 hover:opacity-75 transition-opacity pt-1"
              >
                <span>{lang === 'zh' ? '預約洽談' : 'Initiate Brief'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROFILE_DATA.pillars.map((pillar) => (
              <div 
                key={pillar.number}
                className="p-6 rounded-xl bg-white dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors space-y-3"
              >
                <span className="text-xs font-mono text-stone-400 dark:text-stone-500 tracking-widest">
                  {pillar.number}.
                </span>
                <h3 className="text-lg font-editorial font-medium text-stone-900 dark:text-stone-100">
                  {lang === 'zh' ? pillar.titleZh : pillar.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-modern">
                  {lang === 'zh' ? pillar.descZh : pillar.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
