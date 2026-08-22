import { Gem, Ticket, Zap } from "lucide-react";
import { StepSection } from "@/components/product/StepSection";
import { formatIDR } from "@/lib/format";
import type { Nominal, NominalGroup } from "@/data/denominations";

function NominalIcon({ icon }: { icon?: Nominal["icon"] }) {
  if (icon === "pass") return <Ticket size={20} className="text-limit" />;
  return <Gem size={20} className="text-sky-400" />;
}

export function NominalPicker({
  groups,
  selectedId,
  onSelect,
}: {
  groups: NominalGroup[];
  selectedId: string | null;
  onSelect: (item: Nominal) => void;
}) {
  return (
    <StepSection step={2} title="Pilih Nominal">
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              {group.title}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect(item)}
                    className={`flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-colors ${
                      isSelected
                        ? "border-crimson bg-crimson/10"
                        : "border-border bg-surface2 hover:border-crimson/50"
                    }`}
                  >
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="flex items-center gap-1.5 font-display text-sm font-semibold">
                      <NominalIcon icon={item.icon} />
                      {formatIDR(item.price)}
                    </p>
                    {item.instant && (
                      <span className="mt-auto flex items-center gap-1 rounded border border-border px-1.5 py-0.5 text-[10px] text-limit">
                        <Zap size={10} /> Instan
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </StepSection>
  );
}
