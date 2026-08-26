import { Star, Headphones, ShoppingBag } from "lucide-react";
import { formatIDR } from "@/lib/format";
import type { Nominal } from "@/types";

export function OrderSidebar({
  selected,
  quantity,
  onSubmit,
  submitting = false,
}: {
  selected: Nominal | null;
  quantity: number;
  onSubmit: () => void;
  submitting?: boolean;
}) {
  const total = selected ? selected.price * quantity : 0;

  return (
    <div className="space-y-4 lg:sticky lg:top-36">
      <div className="rounded-lg border border-border bg-surface p-4">
        <p className="text-xs text-muted">Ulasan dan rating</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-display text-3xl font-bold">4.99</span>
          <div className="flex gap-0.5 text-limit">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
        <p className="mt-1 text-xs text-muted">Berdasarkan total 185.67rb rating</p>
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
        <Headphones size={20} className="text-crimson-bright" />
        <div>
          <p className="text-sm font-medium">Butuh Bantuan?</p>
          <p className="text-xs text-muted">Kamu bisa hubungi admin disini.</p>
        </div>
      </div>

      <div className="rounded-lg border border-dashed border-border p-4">
        {selected ? (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted">{selected.label}</span>
              <span>{quantity}x</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 font-display text-sm font-semibold">
              <span>Total</span>
              <span className="text-limit">{formatIDR(total)}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-sm text-muted">
            Belum ada item produk yang dipilih.
          </p>
        )}
      </div>

      <button
        onClick={onSubmit}
        disabled={!selected || submitting}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-crimson py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-crimson-bright disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ShoppingBag size={16} /> {submitting ? "Memproses..." : "Pesan Sekarang!"}
      </button>
    </div>
  );
}
