import { Plus, Minus } from "lucide-react";
import { StepSection } from "@/components/product/StepSection";

export function QuantityStep({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (q: number) => void;
}) {
  return (
    <StepSection step={3} title="Jumlah Pembelian">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(1, quantity - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface2 text-foreground hover:border-crimson"
          aria-label="Kurangi jumlah"
        >
          <Minus size={16} />
        </button>
        <input
          value={quantity}
          readOnly
          className="h-9 w-16 rounded-md border border-border bg-surface2 text-center text-sm"
        />
        <button
          onClick={() => onChange(Math.min(10, quantity + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface2 text-foreground hover:border-crimson"
          aria-label="Tambah jumlah"
        >
          <Plus size={16} />
        </button>
      </div>
    </StepSection>
  );
}
