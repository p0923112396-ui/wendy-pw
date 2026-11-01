import React from 'react';
import { ArrowUp, Instagram, Sparkles, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface FooterProps {
  lang: 'zh' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#121212] text-stone-600 dark:text-stone-400 border-t border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-100 dark:border-stone-850">
          <div>
            <span className="text-base font-bold tracking-[0.2em] uppercase text-stone-900 dark:text-stone-100 font-modern">
              {PROFILE_DATA.brand}
            </span>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-modern">
              {lang === 'zh' ? '極簡歐美風 · 個人品牌與社群聚合門戶' : 'Minimalist Personal Brand &amp; Digital Hub'}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a
              href="https://www.instagram.com/wendy.pw?obrf=MWxid3p1aWlxcmx4Ng%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://portaly.cc/Wendy.pw?utm_source=threads&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1denngm2sxfyy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portaly</span>
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Back to top"
          >
            <span>{lang === 'zh' ? '返回頂部' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-400 dark:text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} {PROFILE_DATA.name} · All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Taipei, Taiwan</span>
            <span aria-hidden="true">·</span>
            <span>Minimalist Editorial Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
