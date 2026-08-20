export type Category = "topup" | "voucher" | "hiburan";

export interface GameItem {
  id: string;
  name: string;
  publisher: string;
  category: Category;
  gradient: string;
  startPrice: string;
}

// Data dummy — ganti dengan katalog & harga asli kamu, atau sambungkan
// ke API/backend nanti. Tile pakai gradient placeholder (bukan artwork
// resmi game) supaya bebas dipakai sebelum kamu punya aset berlisensi.
export const games: GameItem[] = [
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    publisher: "Moonton",
    category: "topup",
    gradient: "from-blue-600 to-cyan-500",
    startPrice: "Rp 3.000",
  },
  {
    id: "free-fire",
    name: "Free Fire",
    publisher: "Garena",
    category: "topup",
    gradient: "from-orange-600 to-red-600",
    startPrice: "Rp 1.500",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    publisher: "Tencent Games",
    category: "topup",
    gradient: "from-yellow-600 to-orange-500",
    startPrice: "Rp 8.000",
  },
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    publisher: "HoYoverse",
    category: "topup",
    gradient: "from-indigo-500 to-sky-400",
    startPrice: "Rp 16.000",
  },
  {
    id: "valorant",
    name: "Valorant",
    publisher: "Riot Games",
    category: "topup",
    gradient: "from-red-600 to-rose-500",
    startPrice: "Rp 12.000",
  },
  {
    id: "magic-chess",
    name: "Magic Chess: Go Go",
    publisher: "Moonton",
    category: "topup",
    gradient: "from-purple-600 to-fuchsia-500",
    startPrice: "Rp 5.000",
  },
  {
    id: "steam-wallet",
    name: "Steam Wallet",
    publisher: "Valve",
    category: "voucher",
    gradient: "from-slate-600 to-slate-400",
    startPrice: "Rp 12.000",
  },
  {
    id: "google-play",
    name: "Google Play",
    publisher: "Google",
    category: "voucher",
    gradient: "from-emerald-600 to-teal-500",
    startPrice: "Rp 10.000",
  },
  {
    id: "netflix",
    name: "Netflix",
    publisher: "Netflix Inc.",
    category: "hiburan",
    gradient: "from-red-700 to-neutral-800",
    startPrice: "Rp 55.000",
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    publisher: "Spotify",
    category: "hiburan",
    gradient: "from-green-600 to-lime-500",
    startPrice: "Rp 27.000",
  },
];
