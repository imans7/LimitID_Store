import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { StepSection } from "@/components/product/StepSection";

export interface PaymentOption {
  id: string;
  label: string;
}

export interface PaymentMethodGroup {
  key: string;
  title: string;
  options: PaymentOption[];
}

// Nama metode ditampilkan sebagai teks/badge, bukan logo resmi provider —
// ganti dengan logo asli (SVG dari masing-masing provider) saat integrasi.
const groups: PaymentMethodGroup[] = [
  {
    key: "ewallet",
    title: "E-Wallet",
    options: [
      { id: "dana", label: "DANA" },
      { id: "shopeepay", label: "ShopeePay" },
      { id: "linkaja", label: "LinkAja" },
      { id: "ovo", label: "OVO" },
      { id: "gopay", label: "GoPay" },
    ],
  },
  {
    key: "va",
    title: "Virtual Account",
    options: [
      { id: "bni", label: "BNI" },
      { id: "briva", label: "BRI" },
      { id: "permata", label: "Permata" },
      { id: "bca", label: "BCA" },
      { id: "mandiri", label: "Mandiri" },
      { id: "cimb", label: "CIMB Niaga" },
    ],
  },
  {
    key: "store",
    title: "Convenience Store",
    options: [
      { id: "alfamart", label: "Alfamart" },
      { id: "indomaret", label: "Indomaret" },
    ],
  },
];

export function PaymentPicker({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (option: PaymentOption) => void;
}) {
  const [openKey, setOpenKey] = useState<string>("ewallet");

  return (
    <StepSection step={4} title="Pilih Pembayaran">
      <div className="space-y-3">
        {groups.map((group) => {
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
                        onClick={() => onSelect(opt)}
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
