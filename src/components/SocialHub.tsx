import React, { useState } from 'react';
import { 
  Instagram, 
  ExternalLink, 
  Copy, 
  Check, 
  QrCode, 
  Sparkles, 
  Mail, 
  Share2, 
  MessageCircle,
  Bookmark
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface SocialHubProps {
  lang: 'zh' | 'en';
  onOpenQr: (target?: 'instagram' | 'portaly') => void;
  onCopy: (text: string, label: string) => void;
  onOpenContact: () => void;
}

export const SocialHub: React.FC<SocialHubProps> = ({
  lang,
  onOpenQr,
  onCopy,
  onOpenContact,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (url: string, name: string, id: string) => {
    onCopy(url, name);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Wendy | Official Personal Website',
          text: '認識 Wendy 的社群與最新精選連結',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed, fallback to copy
        onCopy(window.location.href, 'Website Link');
      }
    } else {
      onCopy(window.location.href, 'Website Link');
    }
  };

  return (
    <section id="socials" className="py-20 md:py-28 bg-[#F5F5F3] dark:bg-[#181818] border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 font-mono mb-3">
              <span>Channel Matrix</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'zh' ? '社群與傳送門矩陣' : 'Connected Channels'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-50 font-editorial">
              {lang === 'zh' ? '快速找到我的相關網站' : 'Explore My Channels &amp; Links'}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleNativeShare}
              className="px-4 py-2 text-xs font-medium tracking-wider uppercase border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-200 text-stone-700 dark:text-stone-300 rounded-lg transition-colors flex items-center gap-2 bg-white dark:bg-stone-900 shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '分享此頁面' : 'Share Profile'}</span>
            </button>
            <button
              onClick={() => onOpenQr('instagram')}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-colors flex items-center gap-2 shadow-xs"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '掃碼直通' : 'Scan QR'}</span>
            </button>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Instagram (Featured Primary Visual Hub) */}
          <div className="relative p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Visual Stories
                  </span>
                  <p className="text-xs font-semibold text-stone-900 dark:text-stone-200">
                    @wendy.pw
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-editorial font-medium text-stone-900 dark:text-stone-50 mb-2">
                Instagram
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-modern leading-relaxed mb-6">
                {lang === 'zh' 
                  ? '分享歐美極簡穿搭、生活日常剪影、限時動態精選與即時靈感。隨時隨地交流穿搭思維與生活美學。'
                  : 'Daily outfit styling, curated aesthetic moments, stories, and real-time updates. Connect directly through DMs and visual journals.'}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-3">
              <a
                href={PROFILE_DATA.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>{lang === 'zh' ? '前往 Instagram' : 'Open Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopyLink(PROFILE_DATA.socials[0].url, 'Instagram', 'ig')}
                className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-600 dark:text-stone-300 transition-colors"
                title={lang === 'zh' ? '複製 IG 連結' : 'Copy IG URL'}
              >
                {copiedId === 'ig' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => onOpenQr('instagram')}
                className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-600 dark:text-stone-300 transition-colors"
                title={lang === 'zh' ? '顯示條碼' : 'Show QR'}
              >
                <QrCode className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Portaly (Comprehensive Link-in-Bio Hub) */}
          <div className="relative p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Official Portaly
                  </span>
                  <p className="text-xs font-semibold text-stone-900 dark:text-stone-200">
                    portaly.cc/Wendy.pw
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-editorial font-medium text-stone-900 dark:text-stone-50 mb-2">
                Portaly 傳送門
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-modern leading-relaxed mb-6">
                {lang === 'zh'
                  ? '一站式整合個人所有頻道：Threads 串聯、精選好物清單、最新活動優惠與專案合作通道。'
                  : 'All-in-one portal consolidating Threads posts, featured lifestyle wishlists, discounts, and comprehensive project resources.'}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-3">
              <a
                href={PROFILE_DATA.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>{lang === 'zh' ? '開啟傳送門' : 'Open Portaly'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopyLink(PROFILE_DATA.socials[1].url, 'Portaly', 'portaly')}
                className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-600 dark:text-stone-300 transition-colors"
                title={lang === 'zh' ? '複製 Portaly 連結' : 'Copy Portaly URL'}
              >
                {copiedId === 'portaly' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => onOpenQr('portaly')}
                className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-600 dark:text-stone-300 transition-colors"
                title={lang === 'zh' ? '顯示條碼' : 'Show QR'}
              >
                <QrCode className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Threads (Real-Time Thoughts & Community) */}
          <div className="relative p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Thoughts &amp; Dialogue
                  </span>
                  <p className="text-xs font-semibold text-stone-900 dark:text-stone-200">
                    @wendy.pw
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-editorial font-medium text-stone-900 dark:text-stone-50 mb-2">
                Threads
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-modern leading-relaxed mb-6">
                {lang === 'zh'
                  ? '分享不加修飾的日常想法、生活絮語與熱門議題觀察。最即時無負擔的隨筆社群。'
                  : 'Candid daily observations, quick reflections, and authentic community banter.'}
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-3">
              <a
                href="https://www.threads.net/@wendy.pw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 text-stone-800 dark:text-stone-200 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 hover:bg-stone-50 dark:hover:bg-stone-800/60"
              >
                <span>{lang === 'zh' ? '追蹤 Threads' : 'View Threads'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopyLink('https://www.threads.net/@wendy.pw', 'Threads', 'threads')}
                className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-600 dark:text-stone-300 transition-colors"
                title="Copy Threads Link"
              >
                {copiedId === 'threads' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Card 4: Direct Email & Commercial Collaborations */}
          <div className="relative p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                    Business Inquiries
                  </span>
                  <p className="text-xs font-semibold text-stone-900 dark:text-stone-200">
                    Direct Contact
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-editorial font-medium text-stone-900 dark:text-stone-50 mb-2">
                {lang === 'zh' ? '商業合作與信箱' : 'Business &amp; Partnerships'}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 font-modern leading-relaxed mb-6">
                {lang === 'zh'
                  ? '歡迎各類品牌代言、風格選品合作、專案企劃或媒體採訪邀約。24小時內回覆。'
                  : 'Open for brand partnerships, sponsorships, creative direction, and media inquiries. Direct response within 24 hours.'}
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-3">
              <button
                onClick={onOpenContact}
                className="flex-1 py-2.5 px-4 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 text-stone-800 dark:text-stone-200 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 hover:bg-stone-50 dark:hover:bg-stone-800/60"
              >
                <span>{lang === 'zh' ? '填寫合作需求' : 'Contact Form'}</span>
                <Bookmark className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleCopyLink(PROFILE_DATA.email, 'Email Address', 'email')}
                className="p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-300 text-stone-600 dark:text-stone-300 transition-colors"
                title="Copy Email Address"
              >
                {copiedId === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
