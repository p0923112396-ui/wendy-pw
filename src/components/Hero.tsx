import React from 'react';
import { ArrowUpRight, QrCode, Instagram, Mail, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface HeroProps {
  lang: 'zh' | 'en';
  onOpenQr: (target?: 'instagram' | 'portaly') => void;
  onOpenContact: () => void;
  onCopy: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenQr,
  onOpenContact,
  onCopy,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-200/80 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Unboxed Metadata Kicker (Anti-Pill) */}
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 font-mono mb-4">
                <span>{PROFILE_DATA.brand}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'zh' ? '個人網站與社群聚合' : 'Official Hub & Creator'}</span>
                <span aria-hidden="true">·</span>
                <span>Taipei</span>
              </div>

              {/* Main Headline with balanced wrap */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 dark:text-stone-50 leading-[1.12] font-editorial mb-6 text-balance">
                {lang === 'zh' ? (
                  <>
                    探索生活美學的俐落樣貌，
                    <br />
                    <span className="italic font-normal text-stone-600 dark:text-stone-300">
                      從風格穿搭到日常靈感。
                    </span>
                  </>
                ) : (
                  <>
                    Curating life with quiet composure &amp;
                    <br />
                    <span className="italic font-normal text-stone-600 dark:text-stone-300">
                      modern minimalist elegance.
                    </span>
                  </>
                )}
              </h1>

              {/* Lead Body Prose */}
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-xl mb-8 font-modern">
                {lang === 'zh' ? PROFILE_DATA.heroBioZh : PROFILE_DATA.heroBioEn}
              </p>
            </div>

            {/* Action Group */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#socials"
                  className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>{lang === 'zh' ? '瀏覽社群矩陣' : 'Explore Social Channels'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenQr('instagram')}
                  className="px-5 py-3 text-xs font-medium tracking-wider uppercase border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-800 dark:text-stone-200 rounded-lg transition-all flex items-center gap-2 hover:bg-stone-100/60 dark:hover:bg-stone-800/60"
                >
                  <QrCode className="w-4 h-4 text-stone-500" />
                  <span>{lang === 'zh' ? '手機掃碼認識我' : 'Scan QR Code'}</span>
                </button>

                <button
                  onClick={onOpenContact}
                  className="px-5 py-3 text-xs font-medium tracking-wider uppercase border border-transparent hover:border-stone-200 dark:hover:border-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg transition-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '商案邀約' : 'Inquiries'}</span>
                </button>
              </div>

              {/* Quick Profile Handle Pillows (Subtle Links) */}
              <div className="pt-4 border-t border-stone-200/60 dark:border-stone-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500 dark:text-stone-400">
                <a 
                  href="https://www.instagram.com/wendy.pw?obrf=MWxid3p1aWlxcmx4Ng%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Instagram className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
                  <span>Instagram: @wendy.pw</span>
                </a>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <a 
                  href="https://portaly.cc/Wendy.pw?utm_source=threads&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1denngm2sxfyy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />
                  <span>Portaly: Wendy.pw</span>
                </a>
                <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                <button
                  onClick={() => onCopy(PROFILE_DATA.email, 'Email')}
                  className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors font-mono cursor-pointer"
                  title="Click to copy email"
                >
                  {PROFILE_DATA.email}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto group">
              
              {/* Outer Minimalist Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-stone-200 dark:bg-stone-800 shadow-xl border border-stone-200/90 dark:border-stone-800 aspect-[3/4]">
                <img
                  src={PROFILE_DATA.avatarImage}
                  alt="Wendy - Personal Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Editorial Scrim at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-300 font-mono">
                        Creator &amp; Curator
                      </p>
                      <h2 className="text-2xl font-editorial font-medium tracking-tight">
                        Wendy
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-stone-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      @wendy.pw
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative luxury caption offset */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-stone-400 dark:text-stone-500 font-mono uppercase tracking-wider">
                <span>Studio Portrait · 2026</span>
                <span>Taipei · Portfolio Edition</span>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Metric Strip below the split */}
        <div className="mt-16 pt-8 border-t border-stone-200/70 dark:border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-xs tracking-wider uppercase text-stone-400 dark:text-stone-500 font-mono">
                {lang === 'zh' ? stat.labelZh : stat.labelEn}
              </p>
              <p className="text-base sm:text-lg font-semibold text-stone-900 dark:text-stone-100 tabular-nums">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
