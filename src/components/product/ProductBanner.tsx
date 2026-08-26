import { ShieldCheck, MessageCircle, Zap } from "lucide-react";
import type { GameItem } from "@/types";

export function ProductBanner({ game }: { game: GameItem }) {
  return (
    <div className="border-b border-border">
      {/* Wide banner strip — gradient placeholder, ganti dengan banner resmi
          yang kamu punya izin pakai (mis. dari provider H2H sebagai reseller) */}
      <div className={`h-40 w-full bg-gradient-to-r ${game.gradient} sm:h-52`} />

      <div className="container -mt-14 flex flex-col gap-4 pb-6 sm:flex-row sm:items-end">
        <div
          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border-4 border-bg bg-gradient-to-br ${game.gradient} font-display text-4xl font-bold text-white shadow-lg sm:h-28 sm:w-28`}
        >
          {game.name.charAt(0)}
        </div>

        <div className="flex-1 pb-1">
          <h1 className="font-display text-2xl font-bold uppercase sm:text-3xl">
            {game.name}
          </h1>
          <p className="text-sm text-muted">{game.publisher}</p>

          <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-limit" /> Proses Cepat
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={14} className="text-limit" /> Layanan Chat 24/7
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-limit" /> Pembayaran Aman
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
