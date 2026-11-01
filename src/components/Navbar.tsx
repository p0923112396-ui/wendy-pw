import React from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface NavbarProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF9]/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-[0.2em] uppercase text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity font-modern"
        >
          {PROFILE_DATA.brand}
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-stone-600 dark:text-stone-400">
          <a 
            href="#about" 
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'zh' ? '關於我' : 'About'}
          </a>
          <a 
            href="#socials" 
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'zh' ? '社群連結' : 'Social Hub'}
          </a>
          <a 
            href="#highlights" 
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'zh' ? '精選專題' : 'Highlights'}
          </a>
          <a 
            href="#contact" 
            className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'zh' ? '合作聯繫' : 'Contact'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action + minimal toggles */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded border border-transparent hover:border-stone-200 dark:hover:border-stone-800 flex items-center gap-1.5"
            aria-label="Toggle language"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded-lg border border-transparent hover:border-stone-200 dark:hover:border-stone-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            {lang === 'zh' ? '聯絡合作' : 'Get in Touch'}
          </button>
        </div>

      </div>
    </header>
  );
};
