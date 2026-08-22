import { Info } from "lucide-react";
import { StepSection } from "@/components/product/StepSection";

interface Props {
  accountId: string;
  server: string;
  onAccountIdChange: (v: string) => void;
  onServerChange: (v: string) => void;
  hasServer?: boolean;
}

export function AccountForm({
  accountId,
  server,
  onAccountIdChange,
  onServerChange,
  hasServer = true,
}: Props) {
  return (
    <StepSection step={1} title="Masukkan Data Akun">
      <div className={`grid gap-4 ${hasServer ? "sm:grid-cols-2" : ""}`}>
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted">
            ID
            <Info size={13} />
          </label>
          <input
            value={accountId}
            onChange={(e) => onAccountIdChange(e.target.value)}
            placeholder="Masukkan ID"
            className="h-11 w-full rounded-md border border-border bg-surface2 px-3 text-sm placeholder:text-muted focus:border-crimson focus:outline-none"
          />
        </div>
        {hasServer && (
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted">Server</label>
            <input
              value={server}
              onChange={(e) => onServerChange(e.target.value)}
              placeholder="Masukkan Server"
              className="h-11 w-full rounded-md border border-border bg-surface2 px-3 text-sm placeholder:text-muted focus:border-crimson focus:outline-none"
            />
          </div>
        )}
      </div>
    </StepSection>
  );
}
