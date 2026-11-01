export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  descriptionZh: string;
  descriptionEn: string;
  tag: string;
  primaryAction: string;
  accent: string;
}

export interface HighlightItem {
  id: string;
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  descriptionZh: string;
  descriptionEn: string;
  readTime: string;
  date: string;
  linkUrl: string;
  tags: string[];
}

export interface PillarItem {
  number: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
}

export const PROFILE_DATA = {
  name: 'Wendy',
  brand: 'WENDY.PW',
  titleZh: '創作者 · 美學生活與品牌策劃',
  titleEn: 'Digital Creator · Aesthetics & Lifestyle Curation',
  locationZh: '台灣 台北 · 接受全球合作',
  locationEn: 'Taipei, Taiwan · Available Worldwide',
  email: 'p0923112396@gmail.com',
  avatarImage: '/assets/aistudio/229A8EE69F8FA08F1A9A9556E7B1BCBCCE814540_f5736500.jpeg',
  
  heroBioZh: '崇尚歐美極簡生活哲學，專注於俐落穿搭風格、日常質感選品與生活儀式感。透過鏡頭與文字，分享真實而有溫度的日常靈感。',
  heroBioEn: 'Embracing minimalist Western aesthetics, curated daily rituals, and timeless styling. Exploring modern lifestyle inspiration, visual stories, and brand collaborations.',
  
  aboutZh: {
    lead: '「簡約不是缺乏，而是將焦點留給最值得感受的人事物。」',
    p1: '嗨，我是 Wendy。熱愛探索現代極簡美學、質感生活選物與風格日常。我認為美感不僅是視覺上的純粹，更是一種從容、自律且專注的生活態度。',
    p2: '無論是在 Instagram 記錄真實穿搭與生活切面，或是透過 Portaly 匯整精選推薦，我希望為每一位來到這裡的讀者，帶來俐落、純粹且溫暖的靈感啟發。',
    status: '開放 2026/2027 品牌形象合作、生活選物推薦、專案企劃與內容授權。'
  },
  aboutEn: {
    lead: '"Simplicity is not the lack of clutter, but the presence of purpose and quiet confidence."',
    p1: 'Hello, I am Wendy. Passionate about minimalist aesthetics, timeless design, and intentional living. For me, elegance is an effortless composure reflected in daily choices and visual clarity.',
    p2: 'Through Instagram updates and curated link collections on Portaly, I share genuine insights, styling moments, and selected essentials to inspire modern lifestyle seekers.',
    status: 'Open for brand partnerships, creative curation, lifestyle ambassadorship, and collaborative projects.'
  },

  socials: [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@wendy.pw',
      url: 'https://www.instagram.com/wendy.pw?obrf=MWxid3p1aWlxcmx4Ng%3D%3D&utm_source=qr',
      descriptionZh: '風格穿搭、生活剪影、限時動態日常與即時互動。',
      descriptionEn: 'Daily styling, aesthetic visual moments, stories, and lifestyle updates.',
      tag: 'Primary Visual Hub',
      primaryAction: 'Follow on IG',
      accent: 'border-stone-900 dark:border-stone-100',
    },
    {
      id: 'portaly',
      name: 'Portaly 傳送門',
      handle: 'Wendy.pw',
      url: 'https://portaly.cc/Wendy.pw?utm_source=threads&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1denngm2sxfyy',
      descriptionZh: '精選推薦、合作專區、Threads 串聯與個人完整資源整合。',
      descriptionEn: 'All-in-one bio link hub, curated picks, collaboration briefs, and resources.',
      tag: 'Official Portal',
      primaryAction: 'Open Portaly',
      accent: 'border-stone-300 dark:border-stone-700',
    },
    {
      id: 'threads',
      name: 'Threads',
      handle: '@wendy.pw',
      url: 'https://www.threads.net/@wendy.pw',
      descriptionZh: '日常生活觀察、直覺想法隨筆、即時文字交流。',
      descriptionEn: 'Unfiltered daily thoughts, quick musings, and direct community dialogues.',
      tag: 'Daily Musings',
      primaryAction: 'Follow on Threads',
      accent: 'border-stone-300 dark:border-stone-700',
    },
    {
      id: 'email',
      name: 'Email Contact',
      handle: 'p0923112396@gmail.com',
      url: 'mailto:p0923112396@gmail.com',
      descriptionZh: '商業合作邀約、品牌代言、媒體採訪與專案諮詢。',
      descriptionEn: 'Business inquiries, brand partnerships, media, and collaboration projects.',
      tag: 'Direct Inquiries',
      primaryAction: 'Send Email',
      accent: 'border-stone-300 dark:border-stone-700',
    }
  ] as SocialLink[],

  pillars: [
    {
      number: '01',
      titleZh: '簡約歐美俐落風格',
      titleEn: 'Modern Minimalist Aesthetic',
      descZh: '以黑白中性色與經典剪裁為基底，展現自信、洗鍊且不過度裝飾的個人風格。',
      descEn: 'Rooted in clean silhouettes, neutral palettes, and effortless confidence.'
    },
    {
      number: '02',
      titleZh: '生活儀式感與質感選品',
      titleEn: 'Curated Living & Mindful Rituals',
      descZh: '精選日常生活物件與空間美學，將對品質的堅持轉化為每日踏實的愉悅感受。',
      descEn: 'Elevating everyday routines through carefully selected interior pieces and rituals.'
    },
    {
      number: '03',
      titleZh: '品牌共創與內容企劃',
      titleEn: 'Brand Partnership & Storytelling',
      descZh: '結合敏銳的美感與真誠溝通，協助理念契合的品牌傳遞純粹且有力的故事。',
      descEn: 'Translating brand visions into authentic narratives and visual resonance.'
    },
    {
      number: '04',
      titleZh: '真實交流與社群連結',
      titleEn: 'Authentic Community Dialogue',
      descZh: '保持開放而真摯的互動，與喜愛美學與成長的同行者建立深度的思想共鳴。',
      descEn: 'Fostering sincere connections with fellow creatives and mindful followers.'
    }
  ] as PillarItem[],

  highlights: [
    {
      id: 'style-capsule',
      titleZh: '極簡剪裁與俐落膠囊衣櫥思維',
      titleEn: 'Tailored Silhouettes & Capsule Wardrobe Philosophy',
      categoryZh: '風格哲學',
      categoryEn: 'Style Capsule',
      descriptionZh: '在快節奏生活中，一套剪裁得宜的西裝與質感內搭，就能帶來整日自信與力量。不盲從趨勢，專注於持久而純粹的剪裁美學。',
      descriptionEn: 'How structured tailoring and foundational essentials create effortless daily confidence without chasing transient micro-trends.',
      readTime: '3 min read',
      date: '2026',
      linkUrl: 'https://www.instagram.com/wendy.pw?obrf=MWxid3p1aWlxcmx4Ng%3D%3D&utm_source=qr',
      tags: ['Fashion', 'Minimalism', 'Tailoring']
    },
    {
      id: 'curated-portal',
      titleZh: '從生活到選物：Portaly 專屬傳送門指南',
      titleEn: 'Curated Essentials & Link In Bio Hub',
      categoryZh: '精選策劃',
      categoryEn: 'Curated Hub',
      descriptionZh: '將所有社群、推薦清單、精選好物整合於一處。讓關注的朋友隨時能快速找到我的最新動態與專屬折扣分享。',
      descriptionEn: 'A streamlined hub connecting social channels, aesthetic wishlists, and project updates in a unified, uncluttered format.',
      readTime: '2 min explore',
      date: '2026',
      linkUrl: 'https://portaly.cc/Wendy.pw?utm_source=threads&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1denngm2sxfyy',
      tags: ['Portaly', 'Resources', 'Collaboration']
    },
    {
      id: 'urban-routine',
      titleZh: '晨間咖啡與城市漫步：尋找慢速步調',
      titleEn: 'Morning Espresso & Slow Urban Exploration',
      categoryZh: '生活儀式',
      categoryEn: 'Living Rituals',
      descriptionZh: '在繁忙的城市步調中保留一小時安靜閱讀與咖啡時光，是維持清晰思緒與創作靈感的關鍵起點。',
      descriptionEn: 'Preserving a sacred hour for quiet reflection and coffee before immersing into dynamic creative commitments.',
      readTime: '4 min read',
      date: '2026',
      linkUrl: 'https://www.instagram.com/wendy.pw?obrf=MWxid3p1aWlxcmx4Ng%3D%3D&utm_source=qr',
      tags: ['Coffee', 'Lifestyle', 'Urban Walk']
    }
  ] as HighlightItem[],

  stats: [
    { labelZh: '社群互動指標', labelEn: 'Active Audience', value: '100% Organic' },
    { labelZh: '核心平台', labelEn: 'Key Channels', value: 'IG · Portaly · Threads' },
    { labelZh: '所在城市', labelEn: 'Base Location', value: 'Taipei, TW' },
    { labelZh: '合作響應', labelEn: 'Response Time', value: '< 24 Hours' }
  ]
};
