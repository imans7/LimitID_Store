import { ShieldCheck, Zap, Clock3 } from "lucide-react";

const perks = [
  { icon: ShieldCheck, label: "Transaksi Aman" },
  { icon: Zap, label: "Proses Instan" },
  { icon: Clock3, label: "Layanan 24 Jam" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-hero-glow">
      <div className="container relative flex flex-col items-start py-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright">
          Platform Top Up Resmi
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
          Limit<span className="text-crimson-bright">ID</span> Store
        </h1>

        <p className="mt-4 max-w-lg text-muted">
          Top up game & voucher digital dengan harga bersaing, proses cepat
          tanpa antri, dan pembayaran yang aman.
        </p>

        {/* Signature: "limit meter" — gauge yang merepresentasikan brand "Limit" */}
        <div className="mt-8 w-full max-w-sm">
          <div className="flex justify-between font-mono text-xs text-muted">
            <span>limit terpakai bulan ini</span>
            <span className="text-limit">70%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface2">
            <div
              style={{ ["--meter" as string]: "70%" }}
              className="h-full animate-meter-fill rounded-full bg-gradient-to-r from-crimson to-limit"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div key={perk.label} className="flex items-center gap-2 text-sm text-muted">
                <Icon size={18} className="text-crimson-bright" />
                {perk.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
