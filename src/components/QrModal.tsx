import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, ExternalLink, Copy, Check, Smartphone } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
  onCopy: (text: string, label: string) => void;
  initialTarget?: 'instagram' | 'portaly';
}

export const QrModal: React.FC<QrModalProps> = ({
  isOpen,
  onClose,
  lang,
  onCopy,
  initialTarget = 'instagram'
}) => {
  const [selectedChannel, setSelectedChannel] = useState<'instagram' | 'portaly'>(initialTarget);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentData = selectedChannel === 'instagram' 
    ? PROFILE_DATA.socials.find(s => s.id === 'instagram')!
    : PROFILE_DATA.socials.find(s => s.id === 'portaly')!;

  const handleCopy = () => {
    onCopy(currentData.url, currentData.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-2xl relative text-stone-900 dark:text-stone-100 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-stone-500" />
            <h3 className="text-sm font-semibold tracking-wider uppercase font-modern">
              {lang === 'zh' ? '手機快速掃描' : 'Scan via Phone'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Channel Switcher */}
        <div className="flex items-center gap-1 p-1 mt-4 bg-stone-100 dark:bg-stone-800/70 rounded-xl">
          <button
            onClick={() => setSelectedChannel('instagram')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedChannel === 'instagram'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Instagram (@wendy.pw)
          </button>
          <button
            onClick={() => setSelectedChannel('portaly')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedChannel === 'portaly'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            Portaly (Wendy.pw)
          </button>
        </div>

        {/* QR Frame */}
        <div className="my-6 flex flex-col items-center justify-center p-6 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200/60 dark:border-stone-800">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <QRCodeSVG 
              value={currentData.url} 
              size={180}
              level="H"
              marginSize={2}
              fgColor="#1C1917"
            />
          </div>
          <p className="mt-3 text-xs text-stone-500 dark:text-stone-400 text-center font-mono">
            {currentData.handle}
          </p>
          <p className="text-[11px] text-stone-400 mt-1">
            {lang === 'zh' ? '開啟手機相機對準條碼即可前往' : 'Point camera to open link directly'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
            <span>{copied ? (lang === 'zh' ? '已複製連結' : 'Copied!') : (lang === 'zh' ? '複製連結' : 'Copy URL')}</span>
          </button>
          
          <a
            href={currentData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-colors"
          >
            <span>{lang === 'zh' ? '直接前往' : 'Open Link'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
