import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { StepSection } from "@/components/product/StepSection";
import { fetchPaymentMethods } from "@/lib/api";
import { useFetch } from "@/hooks/useFetch";

export interface PaymentOption {
  id: string;
  label: string;
}

export function PaymentPicker({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (option: PaymentOption) => void;
}) {
  const { data: groups, loading, error } = useFetch(fetchPaymentMethods, []);
  const [openKey, setOpenKey] = useState<string>("ewallet");

  return (
    <StepSection step={4} title="Pilih Pembayaran">
      {loading && <p className="text-sm text-muted">Memuat metode pembayaran…</p>}
      {error && (
        <p className="text-sm text-crimson-bright">
          Gagal memuat metode pembayaran: {error}
        </p>
      )}

      <div className="space-y-3">
        {groups?.map((group) => {
          const isOpen = openKey === group.key;
          return (
            <div key={group.key} className="overflow-hidden rounded-md border border-border">
              <button
                onClick={() => setOpenKey(isOpen ? "" : group.key)}
                className="flex w-full items-center justify-between bg-surface2 px-4 py-3 text-left text-sm font-medium"
              >
                {group.title}
                <ChevronDown
                  size={16}
                  className={`text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="flex flex-wrap gap-2 p-4">
                  {group.options.map((opt) => {
                    const active = selectedId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => onSelect({ id: opt.id, label: opt.label })}
                        className={`rounded-md border px-3 py-2 font-mono text-xs transition-colors ${
                          active
                            ? "border-crimson bg-crimson/10 text-crimson-bright"
                            : "border-border text-muted hover:border-crimson/50 hover:text-foreground"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </StepSection>
  );
}
