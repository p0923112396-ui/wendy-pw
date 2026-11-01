/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialHub } from './components/SocialHub';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QrModal } from './components/QrModal';
import { Toast } from './components/Toast';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [qrModal, setQrModal] = useState<{ isOpen: boolean; target: 'instagram' | 'portaly' }>({
    isOpen: false,
    target: 'instagram',
  });

  // Sync dark class on documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => {
          showToast(lang === 'zh' ? `已成功複製 ${label}` : `Copied ${label} to clipboard`);
        },
        () => {
          showToast(text);
        }
      );
    } else {
      showToast(text);
    }
  };

  const openQr = (target: 'instagram' | 'portaly' = 'instagram') => {
    setQrModal({ isOpen: true, target });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1C1917] dark:bg-[#121212] dark:text-[#F5F5F4] transition-colors duration-200 flex flex-col font-modern">
      {/* 3-Zone Top Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenQr={openQr}
          onOpenContact={scrollToContact}
          onCopy={handleCopy}
        />

        {/* Central Social Link Matrix (IG, Portaly, Threads, Email) */}
        <SocialHub
          lang={lang}
          onOpenQr={openQr}
          onCopy={handleCopy}
          onOpenContact={scrollToContact}
        />

        {/* Editorial Story & Philosophy */}
        <About
          lang={lang}
          onOpenContact={scrollToContact}
        />

        {/* Curated Highlights & Reading Notes */}
        <Highlights
          lang={lang}
        />

        {/* Contact, Inquiries & vCard Download */}
        <ContactSection
          lang={lang}
          onCopy={handleCopy}
        />
      </main>

      {/* Editorial Footer */}
      <Footer lang={lang} />

      {/* Scannable QR Code Modal */}
      <QrModal
        isOpen={qrModal.isOpen}
        onClose={() => setQrModal({ ...qrModal, isOpen: false })}
        lang={lang}
        onCopy={handleCopy}
        initialTarget={qrModal.target}
      />

      {/* Floating Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
