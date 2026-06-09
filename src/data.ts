import { Game, PaymentMethod, Playmate, Testimonial } from "./types";

export const GAMES_DATA: Game[] = [
  {
    id: "mlbb",
    name: "Mobile Legends",
    category: "mobile",
    developer: "Moonton",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400", // Placeholder but beautiful gaming setup
    bundles: [
      { id: "ml_86", name: "86 Diamonds", price: 21500, originalPrice: 25000, bonus: "+10 Bonus", type: "currency" },
      { id: "ml_172", name: "172 Diamonds", price: 42500, originalPrice: 50000, bonus: "+19 Bonus", type: "currency" },
      { id: "ml_257", name: "257 Diamonds", price: 63500, originalPrice: 75000, bonus: "+28 Bonus", type: "currency" },
      { id: "ml_514", name: "514 Diamonds", price: 126900, originalPrice: 150000, bonus: "+58 Bonus", type: "currency" },
      { id: "ml_706", name: "706 Diamonds", price: 174000, originalPrice: 200000, bonus: "+75 Bonus", type: "currency" },
      { id: "ml_1050", name: "1050 Diamonds", price: 259000, originalPrice: 300000, bonus: "+125 Bonus", type: "currency" },
      { id: "ml_2195", name: "2195 Diamonds", price: 541000, originalPrice: 600000, bonus: "+283 Bonus", type: "currency" },
      { id: "ml_wml", name: "Weekly Diamond Pass", price: 28000, originalPrice: 32000, bonus: "Layanan Instan", type: "pass" },
      { id: "ml_twl", name: "Twilight Pass", price: 145000, originalPrice: 160000, bonus: "Collector Skin", type: "pass" },
    ],
    pilotingOptions: [
      { id: "ml_star_epic", name: "Piloting Star (Epic)", basePrice: 8000, unit: "per Bintang" },
      { id: "ml_star_legend", name: "Piloting Star (Legend)", basePrice: 12000, unit: "per Bintang" },
      { id: "ml_star_mythic", name: "Piloting Star (Mythic)", basePrice: 20000, unit: "per Bintang" },
      { id: "ml_mythical_glory", name: "Piloting Star (Mythical Glory)", basePrice: 35000, unit: "per Bintang" },
      { id: "ml_leveling", name: "Exp / Akun Leveling", basePrice: 15000, unit: "per Level" },
    ],
  },
  {
    id: "freefire",
    name: "Free Fire",
    category: "mobile",
    developer: "Garena",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400",
    bundles: [
      { id: "ff_50", name: "50 Diamonds", price: 8000, bonus: "+5 Bonus", type: "currency" },
      { id: "ff_100", name: "100 Diamonds", price: 15000, originalPrice: 18000, bonus: "+10 Bonus", type: "currency" },
      { id: "ff_140", name: "140 Diamonds", price: 21000, originalPrice: 25000, bonus: "+15 Bonus", type: "currency" },
      { id: "ff_355", name: "355 Diamonds", price: 52000, originalPrice: 60000, bonus: "+40 Bonus", type: "currency" },
      { id: "ff_720", name: "720 Diamonds", price: 104000, originalPrice: 120000, bonus: "+80 Bonus", type: "currency" },
      { id: "ff_1440", name: "1440 Diamonds", price: 208000, originalPrice: 240000, bonus: "+160 Bonus", type: "currency" },
      { id: "ff_member_weekly", name: "Membership Mingguan", price: 33000, originalPrice: 40000, bonus: "Layanan Hemat", type: "pass" },
      { id: "ff_member_monthly", name: "Membership Bulanan", price: 135000, originalPrice: 160000, bonus: "Bonus Ekstra", type: "pass" },
    ],
    pilotingOptions: [
      { id: "ff_rank_bronze", name: "Jasa Rank (Bronze to Silver)", basePrice: 15000, unit: "Full Paket" },
      { id: "ff_rank_silver", name: "Jasa Rank (Silver to Gold)", basePrice: 25000, unit: "Full Paket" },
      { id: "ff_rank_gold", name: "Jasa Rank (Gold to Platinum)", basePrice: 35000, unit: "Full Paket" },
      { id: "ff_rank_diamond", name: "Jasa Rank (Platinum to Diamond)", basePrice: 50000, unit: "Full Paket" },
      { id: "ff_rank_heroic", name: "Jasa Rank (Diamond to Heroic)", basePrice: 95000, unit: "Full Paket" },
    ],
  },
  {
    id: "pubgm",
    name: "PUBG Mobile",
    category: "mobile",
    developer: "Tencent Games",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400",
    bundles: [
      { id: "pubg_60", name: "60 Unknown Cash (UC)", price: 14500, type: "currency" },
      { id: "pubg_325", name: "325 Unknown Cash (UC)", price: 71000, originalPrice: 85000, bonus: "+25 Bonus", type: "currency" },
      { id: "pubg_660", name: "660 Unknown Cash (UC)", price: 142000, originalPrice: 160000, bonus: "+60 Bonus", type: "currency" },
      { id: "pubg_1800", name: "1800 Unknown Cash (UC)", price: 355000, originalPrice: 400000, bonus: "+200 Bonus", type: "currency" },
      { id: "pubg_3850", name: "3850 Unknown Cash (UC)", price: 715000, originalPrice: 800000, bonus: "+450 Bonus", type: "currency" },
      { id: "pubg_rp", name: "Royale Pass Ultimate", price: 165000, originalPrice: 180000, bonus: "Layanan Instan", type: "pass" },
    ],
    pilotingOptions: [
      { id: "pubg_plat", name: "Rank Booster (Gold to Platinum)", basePrice: 40000, unit: "per Tier" },
      { id: "pubg_diamond", name: "Rank Booster (Platinum to Diamond)", basePrice: 60000, unit: "per Tier" },
      { id: "pubg_crown", name: "Rank Booster (Diamond to Crown)", basePrice: 85000, unit: "per Tier" },
      { id: "pubg_ace", name: "Rank Booster (Crown to Ace)", basePrice: 120000, unit: "per Tier" },
    ],
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    category: "mobile",
    developer: "Mihoyo / Hoyoverse",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=400",
    bundles: [
      { id: "gi_60", name: "60 Genesis Crystals", price: 16000, type: "currency" },
      { id: "gi_300", name: "300 Genesis Crystals", price: 79000, bonus: "+30 Bonus", type: "currency" },
      { id: "gi_980", name: "980 Genesis Crystals", price: 239000, originalPrice: 260000, bonus: "+110 Bonus", type: "currency" },
      { id: "gi_1980", name: "1980 Genesis Crystals", price: 479000, originalPrice: 520000, bonus: "+260 Bonus", type: "currency" },
      { id: "gi_3280", name: "3280 Genesis Crystals", price: 799000, originalPrice: 850000, bonus: "+600 Bonus", type: "currency" },
      { id: "gi_6480", name: "6480 Genesis Crystals", price: 1599000, originalPrice: 1700000, bonus: "+1600 Bonus", type: "currency" },
      { id: "gi_welkin", name: "Welkin Moon Blessing", price: 79000, originalPrice: 88000, bonus: "30 Hari Hemat", type: "pass" },
    ],
    pilotingOptions: [
      { id: "gi_daily", name: "Harian (Daily Commission + Resin)", basePrice: 8000, unit: "per Hari" },
      { id: "gi_quest", name: "Archon / Story Quest", basePrice: 35000, unit: "per Quest" },
      { id: "gi_chest", name: "Explorasi Regional (100% Map)", basePrice: 175000, unit: "per Region" },
      { id: "gi_abyss", name: "Spiral Abyss Floor 9-12 Full Star", basePrice: 60000, unit: "per Reset" },
    ],
  },
  {
    id: "valorant",
    name: "Valorant",
    category: "pc",
    developer: "Riot Games",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
    bundles: [
      { id: "val_475", name: "475 Valorant Points", price: 52000, type: "currency" },
      { id: "val_1000", name: "1000 Valorant Points", price: 104000, originalPrice: 115000, type: "currency" },
      { id: "val_2050", name: "2050 Valorant Points", price: 206000, originalPrice: 220000, type: "currency" },
      { id: "val_3650", name: "3650 Valorant Points", price: 362000, originalPrice: 390000, type: "currency" },
      { id: "val_5350", name: "5350 Valorant Points", price: 518000, originalPrice: 550000, type: "currency" },
      { id: "val_11000", name: "11000 Valorant Points", price: 1045000, originalPrice: 1100000, type: "currency" },
    ],
    pilotingOptions: [
      { id: "val_rank_iron", name: "Rank Booster (Iron to Bronze)", basePrice: 15000, unit: "per Kenaikan" },
      { id: "val_rank_bronze", name: "Rank Booster (Bronze to Silver)", basePrice: 20000, unit: "per Kenaikan" },
      { id: "val_rank_silver", name: "Rank Booster (Silver to Gold)", basePrice: 30000, unit: "per Kenaikan" },
      { id: "val_rank_gold", name: "Rank Booster (Gold to Plat)", basePrice: 45000, unit: "per Kenaikan" },
      { id: "val_rank_plat", name: "Rank Booster (Plat to Diamond)", basePrice: 70000, unit: "per Kenaikan" },
    ],
  },
  {
    id: "hsr",
    name: "Honkai: Star Rail",
    category: "mobile",
    developer: "Mihoyo / Hoyoverse",
    image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=400",
    bundles: [
      { id: "hsr_60", name: "60 Oneiric Shards", price: 16000, type: "currency" },
      { id: "hsr_300", name: "300 Oneiric Shards", price: 79000, bonus: "+30 Bonus", type: "currency" },
      { id: "hsr_980", name: "980 Oneiric Shards", price: 239000, bonus: "+110 Bonus", type: "currency" },
      { id: "hsr_1980", name: "1980 Oneiric Shards", price: 479000, bonus: "+260 Bonus", type: "currency" },
      { id: "hsr_3280", name: "3280 Oneiric Shards", price: 799000, bonus: "+600 Bonus", type: "currency" },
      { id: "hsr_6480", name: "6480 Oneiric Shards", price: 1599000, bonus: "+1600 Bonus", type: "currency" },
      { id: "hsr_express", name: "Express Supply Pass", price: 79000, originalPrice: 88000, bonus: "Layanan Hemat", type: "pass" },
    ],
    pilotingOptions: [
      { id: "hsr_daily", name: "Piloting Harian + Stamina Trailblaze", basePrice: 8000, unit: "per Hari" },
      { id: "hsr_moc", name: "Memory of Chaos (MOC) Full Stars", basePrice: 50000, unit: "per Reset" },
      { id: "hsr_universe", name: "Simulated / Divergent Universe Farm", basePrice: 20000, unit: "per Run" },
    ],
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "qris",
    name: "QRIS 2 Detik (Automated)",
    logo: "QRIS",
    type: "qris",
    fee: 0,
    flatFee: 750
  },
  {
    id: "gopay",
    name: "GoPay (Instant)",
    logo: "GoPay",
    type: "e-wallet",
    fee: 1.5,
    flatFee: 0
  },
  {
    id: "ovo",
    name: "OVO E-Money",
    logo: "OVO",
    type: "e-wallet",
    fee: 1.5,
    flatFee: 0
  },
  {
    id: "shopeepay",
    name: "ShopeePay",
    logo: "ShopeePay",
    type: "e-wallet",
    fee: 2.0,
    flatFee: 0
  },
  {
    id: "va_bca",
    name: "BCA Virtual Account",
    logo: "BCA",
    type: "bank-transfer",
    fee: 0,
    flatFee: 2500
  },
  {
    id: "va_mandiri",
    name: "Mandiri Virtual Account",
    logo: "Mandiri",
    type: "bank-transfer",
    fee: 0,
    flatFee: 2500
  }
];

export const PLAYMATES_DATA: Playmate[] = [
  {
    id: "play_alya",
    name: "Alya 'Chippy'",
    username: "alya_gaming_suites",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", // Pretty profile pic
    games: ["Mobile Legends", "Genshin Impact"],
    rank: "Mythical Honor (Star 45)",
    rating: 4.9,
    reviews: 142,
    pricePerMatchHex: 15000,
    status: "online",
    role: "Support/Mage Main - Enak diajak ngobrol & asyik!",
    accentColor: "from-pink-500 to-rose-400",
    gender: "Female"
  },
  {
    id: "play_riki",
    name: "Riki 'Valkyrie'",
    username: "riki_valk",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    games: ["Valorant", "PUBG Mobile"],
    rank: "Radiant #450",
    rating: 5.0,
    reviews: 389,
    pricePerMatchHex: 25000,
    status: "in-game",
    role: "Core Duelist - Dijamin gendong rank, aim keras!",
    accentColor: "from-purple-600 to-indigo-500",
    gender: "Male"
  },
  {
    id: "play_nadia",
    name: "Nadia 'Meow'",
    username: "nadia_meoww",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    games: ["Mobile Legends", "Valorant", "Honkai: Star Rail"],
    rank: "Legend I (MLBB) / Gold III",
    rating: 4.8,
    reviews: 89,
    pricePerMatchHex: 12000,
    status: "online",
    role: "Flex Role - Friendly, bisa mabar santai / push rank!",
    accentColor: "from-emerald-500 to-teal-400",
    gender: "Female"
  },
  {
    id: "play_bagas",
    name: "Bagas 'Ironfist'",
    username: "bagas_ml_booster",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    games: ["Mobile Legends", "Free Fire"],
    rank: "Mythical Immortal (Star 112)",
    rating: 4.9,
    reviews: 215,
    pricePerMatchHex: 20000,
    status: "offline",
    role: "Jungler / Assassin - No toxic, map-aware, game sense tinggi!",
    accentColor: "from-blue-600 to-cyan-500",
    gender: "Male"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testi_1",
    name: "Rico Hermawan",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
    role: "Gamer Mobile Legends",
    text: "Gila! Top up Diamond di Gaming Suites beneran langsung masuk cuma 3 detik setelah bayar pake QRIS! Harganya juga paling kompetitif dibanding lapak sebelah.",
    rating: 5,
    date: "Kemarin"
  },
  {
    id: "testi_2",
    name: "Siska Aurelia",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
    role: "Casual Player",
    text: "Baru pertama kali coba Rekber di sini untuk beli akun Genshin. Adminnya responsif banget, transparan, dan uang aman didearahin sampai proses penyerahan data selesai. Rekomendasi banget biar gak ketipu!",
    rating: 5,
    date: "3 hari yang lalu"
  },
  {
    id: "testi_3",
    name: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100",
    role: "Competitive Player",
    text: "Mabar sama Nadia 'Meow' seru abis, dapet star bonus di Epic rasyo win rate naik 90%. Jasa pilotingnya Bagas juga cepet banget kelar dalam 1 malam tanpa kendala.",
    rating: 5,
    date: "1 minggu yang lalu"
  }
];
