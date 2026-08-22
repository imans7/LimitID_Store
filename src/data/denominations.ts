export interface Nominal {
  id: string;
  label: string;
  price: number;
  instant?: boolean;
  icon?: "diamond" | "pass" | "uc" | "generic";
}

export interface NominalGroup {
  title: string;
  items: Nominal[];
}

// Data dummy per game — ganti/​sambungkan ke API provider H2H kamu nanti.
// Untuk game yang belum punya data eksplisit di sini, dipakai generator
// generik di bawah supaya halaman produk tetap jalan untuk semua game.
const explicitData: Record<string, NominalGroup[]> = {
  "mobile-legends": [
    {
      title: "Special Items (Indonesia)",
      items: [
        { id: "weekly-pass", label: "Weekly Diamond Pass", price: 31675, instant: true, icon: "pass" },
        { id: "twilight-pass", label: "Twilight Pass", price: 165186, instant: true, icon: "pass" },
      ],
    },
    {
      title: "Diamonds (Indonesia)",
      items: [
        { id: "d5", label: "5 (5+0) Diamonds", price: 1562, instant: true, icon: "diamond" },
        { id: "d12", label: "12 (11+1) Diamonds", price: 3920, instant: true, icon: "diamond" },
        { id: "d15", label: "15 (15+0) Diamonds", price: 4685, instant: true, icon: "diamond" },
        { id: "d19", label: "19 (17+2) Diamonds", price: 6076, instant: true, icon: "diamond" },
        { id: "d28", label: "28 (25+3) Diamonds", price: 8819, instant: true, icon: "diamond" },
        { id: "d44", label: "44 (40+4) Diamonds", price: 13326, instant: true, icon: "diamond" },
        { id: "d59", label: "59 (53+6) Diamonds", price: 17636, instant: true, icon: "diamond" },
        { id: "d85", label: "85 (77+8) Diamonds", price: 25475, instant: true, icon: "diamond" },
        { id: "d113", label: "113 (102+11) Diamonds", price: 34293, instant: true, icon: "diamond" },
        { id: "d170", label: "170 (154+16) Diamonds", price: 50504, instant: true, icon: "diamond" },
        { id: "d222", label: "222 (200+22) Diamonds", price: 66962, instant: true, icon: "diamond" },
        { id: "d240", label: "240 (217+23) Diamonds", price: 71369, instant: true, icon: "diamond" },
        { id: "d284", label: "284 (257+27) Diamonds", price: 84692, instant: true, icon: "diamond" },
        { id: "d296", label: "296 (256+40) Diamonds", price: 87943, instant: true, icon: "diamond" },
        { id: "d408", label: "408 (367+41) Diamonds", price: 121490, instant: true, icon: "diamond" },
        { id: "d568", label: "568 (503+65) Diamonds", price: 165773, instant: true, icon: "diamond" },
        { id: "d750", label: "750 (676+74) Diamonds", price: 220197, instant: true, icon: "diamond" },
        { id: "d875", label: "875 (774+101) Diamonds", price: 254132, instant: true, icon: "diamond" },
        { id: "d1136", label: "1136 (1006+130) Diamonds", price: 331551, instant: true, icon: "diamond" },
        { id: "d1704", label: "1704 (1509+195) Diamonds", price: 497326, instant: true, icon: "diamond" },
        { id: "d2010", label: "2010 (1708+302) Diamonds", price: 552396, instant: true, icon: "diamond" },
      ],
    },
  ],
};

function generateGenericGroups(): NominalGroup[] {
  const tiers = [
    { qty: 50, price: 12000 },
    { qty: 100, price: 22000 },
    { qty: 250, price: 52000 },
    { qty: 500, price: 98000 },
    { qty: 1000, price: 185000 },
    { qty: 2500, price: 445000 },
  ];
  return [
    {
      title: "Nominal",
      items: tiers.map((t) => ({
        id: `qty-${t.qty}`,
        label: `${t.qty} Unit`,
        price: t.price,
        instant: true,
        icon: "generic",
      })),
    },
  ];
}

export function getNominalGroups(gameId: string): NominalGroup[] {
  return explicitData[gameId] ?? generateGenericGroups();
}
