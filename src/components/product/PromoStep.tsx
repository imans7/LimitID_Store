import { Ticket } from "lucide-react";
import { StepSection } from "@/components/product/StepSection";

export function PromoStep({
  code,
  onChange,
  onApply,
}: {
  code: string;
  onChange: (v: string) => void;
  onApply: () => void;
}) {
  return (
    <StepSection step={5} title="Kode Promo">
      <div className="flex gap-2">
        <input
          value={code}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ketik Kode Promo Kamu"
          className="h-11 flex-1 rounded-md border border-border bg-surface2 px-3 text-sm placeholder:text-muted focus:border-crimson focus:outline-none"
        />
        <button
          onClick={onApply}
          className="h-11 rounded-md bg-crimson px-5 font-display text-sm font-semibold text-white hover:bg-crimson-bright"
        >
          Gunakan
        </button>
      </div>
      <button className="mt-3 flex items-center gap-1.5 text-xs text-muted hover:text-crimson-bright">
        <Ticket size={14} /> Pakai Promo Yang Tersedia
      </button>
    </StepSection>
  );
}
