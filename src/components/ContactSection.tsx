import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Download, Instagram, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface ContactSectionProps {
  lang: 'zh' | 'en';
  onCopy: (text: string, label: string) => void;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  onCopy,
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Brand Collaboration',
    message: ''
  });

  const handleCopyEmail = () => {
    onCopy(PROFILE_DATA.email, 'Email Address');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as primary fallback
    const subject = encodeURIComponent(`[合作諮詢 / Inquiry] ${formData.category} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Wendy',
      'N:;Wendy;;;',
      `EMAIL;TYPE=INTERNET:${PROFILE_DATA.email}`,
      'URL:https://portaly.cc/Wendy.pw',
      'X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/wendy.pw',
      'NOTE:Digital Creator · Aesthetics & Lifestyle',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Wendy_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onCopy('Wendy_Contact.vcf', 'vCard Downloaded');
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-stone-200/80 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 font-mono mb-3">
            <span>Direct Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'zh' ? '合作與聯繫' : 'Connect & Collaborate'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-50 font-editorial mb-4">
            {lang === 'zh' ? '期待與理念相契合的品牌與夥伴交流' : 'Let’s Create Something Resonant Together'}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 font-modern text-base">
            {lang === 'zh' 
              ? '無論是商業代言、生活選物推廣、內容創作或媒體採訪，歡迎隨時透過下方表單或直接寄信聯繫。'
              : 'Open for brand partnerships, styling consultations, curated sponsorships, and creative features.'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Direct Fast Contact & vCard */}
          <div className="lg:col-span-5 space-y-8">
            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Primary Contact
              </span>
              <h3 className="text-2xl font-editorial font-medium text-stone-900 dark:text-stone-100">
                Email
              </h3>
              <p className="text-sm font-mono text-stone-700 dark:text-stone-300 break-all select-all">
                {PROFILE_DATA.email}
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 text-xs font-medium border border-stone-200 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (lang === 'zh' ? '已複製信箱' : 'Copied!') : (lang === 'zh' ? '複製信箱' : 'Copy Email')}</span>
                </button>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex-1 py-2 px-3 text-xs font-semibold uppercase tracking-wider bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '寄送信件' : 'Send Mail'}</span>
                </a>
              </div>
            </div>

            {/* Quick Actions Strip */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadVCard}
                className="w-full p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-colors flex items-center justify-between group text-left"
              >
                <div>
                  <p className="text-sm font-medium text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <Download className="w-4 h-4 text-stone-500" />
                    <span>{lang === 'zh' ? '儲存電子通訊錄名片 (.vcf)' : 'Download vCard Contact Card'}</span>
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-modern">
                    {lang === 'zh' ? '一鍵存入 iPhone / Android 手機通訊錄' : 'Save Wendy directly to phone contacts'}
                  </p>
                </div>
                <span className="text-xs font-mono text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                  .VCF
                </span>
              </button>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/40 border border-stone-200/60 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-500 dark:text-stone-400 font-mono">
                  {lang === 'zh' ? '快速社群私訊' : 'Instant Messaging'}
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.instagram.com/wendy.pw?obrf=MWxid3p1aWlxcmx4Ng%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 font-medium"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>IG DM</span>
                  </a>
                  <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                  <a 
                    href="https://portaly.cc/Wendy.pw?utm_source=threads&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1denngm2sxfyy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 font-medium"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Portaly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <h3 className="text-xl font-editorial font-medium text-stone-900 dark:text-stone-100 mb-6">
                {lang === 'zh' ? '發送專案合作訊息' : 'Send an Inquiry Brief'}
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                    {lang === 'zh' ? '訊息已準備就緒！' : 'Message Prepared!'}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-modern max-w-sm mx-auto">
                    {lang === 'zh'
                      ? `已為您自動喚起郵件客戶端。您亦可直接寄信至 ${PROFILE_DATA.email}。`
                      : `Your email client has been summoned with the pre-filled inquiry. You can also write directly to ${PROFILE_DATA.email}.`}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', category: 'Brand Collaboration', message: '' });
                    }}
                    className="mt-2 text-xs font-mono uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 underline"
                  >
                    {lang === 'zh' ? '發送另一則訊息' : 'Send another note'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                        {lang === 'zh' ? '您的姓名 / 品牌名稱' : 'Name / Brand'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'zh' ? '例如：林小姐 / Studio Studio' : 'e.g. Jane Doe / Brand Co.'}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                        {lang === 'zh' ? '電子信箱' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                      {lang === 'zh' ? '合作類型' : 'Inquiry Type'}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                    >
                      <option value="Brand Collaboration">{lang === 'zh' ? '品牌合作 / 形象代言' : 'Brand Collaboration / Ambassadorship'}</option>
                      <option value="Product Curation">{lang === 'zh' ? '生活好物 / 選品推薦' : 'Product Curation & Features'}</option>
                      <option value="Event / Media">{lang === 'zh' ? '活動出席 / 媒體採訪' : 'Event Attendance / Media'}</option>
                      <option value="General Hello">{lang === 'zh' ? '其他交流與諮詢' : 'General Inquiry'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                      {lang === 'zh' ? '需求說明 / 合作細節' : 'Message / Details'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'zh' ? '請簡述專案背景、預計時程或想洽談的內容...' : 'Briefly describe your project, timeline, or idea...'}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:border-stone-900 dark:focus:border-stone-100 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>{lang === 'zh' ? '確認發送合作意向' : 'Send Inquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
