export const site = {
  nameJa: "わたしの台所図鑑",
  description:
    "静かな料理ジャーナル。台所に立った瞬間をそっと残し、少しずつ自分の台所が好きになるための場所。",
  url: "https://furugen-island.com/my-kitchen",
  ogImage: "/images/ogp.png",
  twitterCard: "summary_large_image"
};

export const navigation = {
  ariaLabel: "メインナビゲーション",
  items: [
    { label: "Kitchen", href: "#cover" },
    { label: "記録", href: "#page-01" },
    { label: "本棚", href: "#page-02" },
    { label: "Gallery", href: "#screens" }
  ]
};

export const hero = {
  eyebrow: "Kitchen",
  titleJa: "わたしの台所図鑑",
  subline:
    "SNSではない、あなただけの小さな本棚。",
  worldview: [
    "うまくできた日も、焦げた日も。",
    "台所での時間を、静かに残す。",
    "大事なことは、完璧さじゃない。",
    "前より、台所を好きになること。"
  ],
  announceText: "",
  iosPreorderUrl: "",
  iosPreorderLabel: "App Storeで予約注文",
  iosPreorderBadgeSrc: "/images/appstore-badge.svg",
  iosPreorderBadgeAlt: "App Store",
  homeImages: [
    {
      label: "台所 1",
      src: "/images/home/1.webp"
    },
    {
      label: "台所 2",
      src: "/images/home/2.webp"
    },
    {
      label: "台所 3",
      src: "/images/home/3.webp"
    },
    {
      label: "台所 4",
      src: "/images/home/4.webp"
    },
    {
      label: "台所 5",
      src: "/images/home/5.webp"
    }
  ],
  heroIcons: [
    { src: "/images/page1/page1_food1.webp", alt: "" },
    { src: "/images/page1/page1_food2.webp", alt: "" },
    { src: "/images/page1/page1_food3.webp", alt: "" },
    { src: "/images/page1/page1_food4.webp", alt: "" }
  ],
  announceLinks: [
    {
      label: "X",
      href: "https://x.com/cocoahearts21",
      iconSrc: "/images/icons/x.svg",
      iconAlt: "X"
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@my_kitchen_app",
      iconSrc: "/images/icons/tiktok.svg",
      iconAlt: "TikTok"
    }
  ]
};

export const storeBadges = {
  iosUrl: "",
  androidUrl: "",
  comingSoonLabel: "近日リリース予定",
  comingSoonHint: "リリース後にリンクが有効になります",
  ios: {
    label: "App Store",
    src: "/images/appstore-badge.svg",
    alt: "App Store"
  },
  android: {
    label: "Google Play",
    src: "/images/googleplay-badge.png",
    alt: "Google Play"
  }
};

export const sections = {
  today: {
    id: "page-01",
    page: "記録",
    title: "Record",
    subtitle: "記録",
    description:
      "写真と短いメモで今日を残します。記録は軽く、迷わない流れに。残した記録はカードになって、本棚に増えていきます。",
    card: {
      photoLabel: "今日の一枚",
      memoLabel: "短いメモ",
      memoPlaceholder: "火加減が少し強かった。次は弱くしてみる。",
      time: "19:24",
      date: "2026.02.17"
    },
    points: [
      { prefix: "撮りためた自炊の記録を、", emphasis: "写真も一緒に残せる" },
      { prefix: "毎日を頑張るあなただから、", emphasis: "メモは一言でいい" },
      { prefix: "迷わずまた作れるように、", emphasis: "レシピも一緒に残せる" }
    ],
    icons: [
      { src: "/images/page1/page1_food1.webp", alt: "" },
      { src: "/images/page1/page1_food2.webp", alt: "" },
      { src: "/images/page1/page1_food3.webp", alt: "" },
      { src: "/images/page1/page1_food4.webp", alt: "" }
    ],
    fragments: ["写真と一言だけで、今日が残る"]
  },
  shelf: {
    id: "page-02",
    page: "bookshelf",
    title: "本棚",
    subtitle: null,
    description:
      "作った記録はカードになって、本棚に増えていきます。棚をひらけば、カテゴリごとの図鑑に。日々の成長で作られる台所図鑑です。",
    highlight: "カテゴリで探せて、お気に入りは自分の棚になります。",
    categories: ["茹でる", "焼く", "煮込む", "炒める", "蒸す", "和える"],
    cards: ["ハヤシライス", "味噌汁", "春野菜", "卵焼き", "カレー", "スープ"],
    favoriteCards: ["ハヤシライス", "卵焼き", "カレー", "スープ", "味噌汁", "春野菜"],
    shelfImages: {
      book1: { src: "/images/page2/book1.webp", alt: "カテゴリ棚の本棚画面" },
      book2: { src: "/images/page2/book2.webp", alt: "カテゴリ図鑑の一覧画面" }
    },
    rankImages: [
      { src: "/images/page2/rank1.webp", alt: "Rank 01", label: "1~2回" },
      { src: "/images/page2/rank2.webp", alt: "Rank 02", label: "3~5回" },
      { src: "/images/page2/rank3.webp", alt: "Rank 03", label: "6〜??回" },
      { src: "/images/page2/rank4.webp", alt: "Rank 04", label: "??回" }
    ],
    flowTitle: "あなたらしさの本棚へ",
    flowLines: ["調理法ごとに、心地よく整います。", "棚をひらけば、これまでの歩みが一覧に。", "お気に入りを集めて、自分だけの図鑑を作れます。"],
    rankCards: [
      { rank: "Rank 01", title: "初めての一枚" },
      { rank: "Rank 02", title: "二度目の記憶" },
      { rank: "Rank 03", title: "台所の手触り" },
      { rank: "Rank 04", title: "少しずつ深まる" }
    ],
    rankSteps: ["01", "02", "03", "04"],
    fragments: ["少しずつ増えていく"]
  },
  growth: {
    id: "page-04",
    page: "Page 04",
    title: "It grows",
    subtitle: "静かな成長",
    description:
      "記録が続くほど、料理カードのランクが静かに上がり、図鑑の表情が少しずつ深くなる。比べるためではなく、自分の歩幅を確かめるために。",
    rankCards: [
      { rank: "Rank 01", title: "初めての一枚" },
      { rank: "Rank 02", title: "二度目の記憶" },
      { rank: "Rank 03", title: "台所の手触り" },
      { rank: "Rank 04", title: "少しずつ深まる" }
    ],
    rankNotes: [
      "ランクは評価ではなく、積み重なりの印",
      "他人との比較はしない",
      "昨日より少し、台所が好きになる"
    ],
    fragments: ["昨日より少し、好きになる"]
  },
};

export const gallery = {
  id: "screens",
  eyebrow: "Gallery",
  title: "日々に寄り添う、優しい機能を。",
  description: "使い心地を整えて、手に馴染む道具に。見返したい記録にはしおりを挟み、探したい味にはすぐ手が届くように。",
  screens: [
    {
      label: "息づくキッチン",
      src: "/images/gallery/1.webp"
    },
    {
      label: "料理の探索",
      src: "/images/gallery/2.webp"
    },
    {
      label: "開放されるしおり",
      src: "/images/gallery/3.webp"
    },
    {
      label: "お好みの設定",
      src: "/images/gallery/4.webp"
    },
    {
      label: "アプリへの要望",
      src: "/images/gallery/5.webp"
    }
  ]
};

export const cta = {
  id: "colophon",
  title: "公開情報",
  eyebrow: "Information",
  subtitle: null,
  description:
    "公開準備中です。公開後、このページからストアへご案内します。",
  primary: {
    label: "ストアで確認する",
    href: "https://example.com"
  },
  secondary: {
    label: "開発の様子を見る",
    href: "https://example.com"
  },
  contact: {
    label: "my-kitchen-support@furugen-island.com",
    href: "mailto:my-kitchen-support@furugen-island.com"
  },
  legal: [
    {
      label: "プライバシーポリシー",
      href: "https://furugen-island.com/my_site/my-kitchen/privacy"
    },
    {
      label: "利用規約",
      href: "https://furugen-island.com/my_site/my-kitchen/terms"
    },
    {
      label: "特定商取引法に基づく表記",
      href: "https://furugen-island.com/my_site/my-kitchen/legal"
    }
  ]
};

export const faq = {
  title: "FAQ",
  items: [
    {
      question: "公開共有はできますか",
      answer: "共有機能はありません。記録は個人のためのものとして静かに保管されます。"
    },
    {
      question: "写真がなくても記録できますか",
      answer: "写真がなくても記録できます。短いメモだけでも残せます。"
    },
    {
      question: "レシピURLはどのように使いますか",
      answer: "URLは保存してコピーできます。アプリ内では開かず、必要なときに手元で使えます。"
    },
    {
      question: "いつリリースされますか",
      answer: "現在開発中です。リリース日はXとTikTokでお知らせします。"
    }
  ]
};

export const footer = {
  brand: "© 2026 Furugen Island",
  note: "昨日より少し、台所が好きになる。"
};

export const illustrations = {
  cardStack: "/illustrations/card-stack.png",
  bookmark: "/illustrations/bookmark.png",
  magnifier: "/illustrations/magnifier.png",
  urlTag: "/illustrations/url-tag.png",
  pan: "/illustrations/pan.png",
  pot: "/illustrations/pot.png",
  cuttingBoard: "/illustrations/cutting-board.png",
  ribbon: "/illustrations/ribbon.png",
  windowLight: "/illustrations/window-light.png",
  sunbeam: "/illustrations/sunbeam.png"
};
