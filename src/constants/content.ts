export const site = {
  nameJa: "わたしの台所図鑑",
  nameEn: "My Kitchen Encyclopedia",
  description:
    "静かな料理ジャーナル。台所に立った瞬間をそっと残し、少しずつ自分の台所が好きになるための場所。",
  url: "https://furugen-island.com/my-kitchen",
  ogImage: "/images/ogp.png",
  twitterCard: "summary_large_image"
};

export const navigation = {
  ariaLabel: "メインナビゲーション",
  items: [
    { label: "Cover", href: "#cover" },
    { label: "Page 01", href: "#page-01" },
    { label: "Page 02", href: "#page-02" },
    { label: "Page 03", href: "#page-03" },
    { label: "Page 04", href: "#page-04" },
    { label: "Page 05", href: "#page-05" },
    { label: "Colophon", href: "#colophon" }
  ]
};

export const hero = {
  eyebrow: "Cover",
  titleJa: "わたしの台所図鑑",
  titleEn: "My Kitchen Encyclopedia",
  subline:
    "SNSではなく、個人のための小さな保管庫。記録は静かに、誰にも見せなくていい。",
  worldview: [
    "うまくいった日も、少し焦げた日も、\n台所に立ったという事実は変わらない。",
    "このアプリは、その瞬間を静かに残す場所。",
    "成長とは、\n強くなることでも、完璧になることでもない。",
    "昨日より少し、\n自分の台所が好きになること。"
  ],
  ctaPrimary: {
    label: "リリース通知を受け取る",
    href: "#colophon"
  },
  ctaSecondary: {
    label: "画面イメージを見る",
    href: "#screens"
  },
  privacyNote: "公開共有はありません。初期設定はプライベートです。",
  preRelease: {
    status: "現在開発中",
    note: "リリース日は追ってお知らせします。",
    announce: "告知はXとTikTokで行います。",
    links: [
      { label: "X", href: "https://example.com" },
      { label: "TikTok", href: "https://example.com" }
    ]
  }
};

export const sections = {
  today: {
    id: "page-01",
    page: "Page 01",
    title: "Today’s entry",
    subtitle: "今日の記録",
    description:
      "写真と短いメモだけ。記録は軽く、迷わない流れに。うまくいった日も、少し焦げた日も、そのまま残せます。",
    card: {
      photoLabel: "今日の一枚",
      memoLabel: "短いメモ",
      memoPlaceholder: "火加減が少し強かった。次は弱くしてみる。",
      time: "19:24",
      date: "2026.02.17"
    },
    points: [
      "写真は一枚だけでいい",
      "メモは短くていい",
      "うまくいかなかった日も残せる"
    ],
    fragments: ["台所に立ったという事実を残す"]
  },
  shelf: {
    id: "page-02",
    page: "Page 02",
    title: "The shelf",
    subtitle: "本棚に並ぶ",
    description:
      "記録はカードになり、図鑑として静かに並びます。積み重なりは数ではなく、棚の厚みとして見えてくる。",
    highlight: "小さなカードが増えるほど、台所の景色が少しずつ豊かになる。",
    cards: ["ハヤシライス", "味噌汁", "春野菜", "卵焼き", "カレー", "スープ"],
    points: ["記録は評価ではない", "棚が少しずつ埋まる", "思い出すための並び"],
    fragments: ["少しずつ増えていく"]
  },
  find: {
    id: "page-03",
    page: "Page 03",
    title: "Find",
    subtitle: "探す",
    description:
      "料理名やタグで探す時間も、楽しい。気に入ったレシピのURLは登録してコピーできます。アプリ内では開かず、手元で安全に扱います。",
    searchLabel: "静かな検索",
    urlLabel: "レシピURL",
    urlSample: "https://example.com/recipe",
    copyNote: "URLはコピーして使います。",
    features: [
      "検索は静かで、急かさない",
      "URLはコピーして使う",
      "見返すときの余韻を守る"
    ],
    fragments: ["探す時間もやさしい"]
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
  light: {
    id: "page-05",
    page: "Page 05",
    title: "The room’s light",
    subtitle: "部屋の光",
    description:
      "朝、昼、夕方、夜。台所の光は時間とともに静かに移ろう。世界は止まらず、そっと呼吸します。",
    timeBlocks: [
      { time: "Morning", note: "淡い光がゆっくり差し込む" },
      { time: "Afternoon", note: "穏やかな明るさが続く" },
      { time: "Evening", note: "温度のある光に変わる" }
    ],
    ambientNotes: [
      "光はゆっくり変わる",
      "色は落ち着いたまま",
      "余白を邪魔しない"
    ],
    fragments: ["その瞬間を静かに残す"]
  }
};

export const gallery = {
  id: "screens",
  eyebrow: "Gallery",
  title: "図鑑のページをめくるように",
  description: "開発中の画面イメージ。静かなリズムで並べています。",
  screens: [
    {
      label: "記録の一枚",
      src: "/images/screen-01.png"
    },
    {
      label: "本棚のページ",
      src: "/images/screen-02.png"
    },
    {
      label: "検索のページ",
      src: "/images/screen-03.png"
    },
    {
      label: "光が変わる台所",
      src: "/images/screen-04.png"
    }
  ]
};

export const cta = {
  id: "colophon",
  title: "Colophon",
  subtitle: "小さな目次",
  description:
    "開発中のアプリです。公開の準備が整い次第、ストアページに案内します。",
  primary: {
    label: "ストアで確認する",
    href: "https://example.com"
  },
  secondary: {
    label: "開発の様子を見る",
    href: "https://example.com"
  },
  badges: [
    {
      label: "App Store",
      src: "/images/appstore-badge.png",
      href: "https://example.com"
    },
    {
      label: "Google Play",
      src: "/images/googleplay-badge.png",
      href: "https://example.com"
    }
  ],
  contact: {
    label: "support@furugen-island.com",
    href: "mailto:support@furugen-island.com"
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
  brand: "わたしの台所図鑑",
  note: "記録は静かに、自分のために。"
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
