import { StepSection } from "@/components/product/StepSection";

interface Props {
  email: string;
  whatsapp: string;
  onEmailChange: (v: string) => void;
  onWhatsappChange: (v: string) => void;
}

export function ContactStep({ email, whatsapp, onEmailChange, onWhatsappChange }: Props) {
  return (
    <StepSection step={6} title="Detail Kontak">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="example@gmail.com"
            className="h-11 w-full rounded-md border border-border bg-surface2 px-3 text-sm placeholder:text-muted focus:border-crimson focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">No. WhatsApp</label>
          <div className="flex gap-2">
            <span className="flex h-11 items-center gap-1.5 rounded-md border border-border bg-surface2 px-3 text-sm text-muted">
              🇮🇩 +62
            </span>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => onWhatsappChange(e.target.value)}
              placeholder="812xxxxxxx"
              className="h-11 flex-1 rounded-md border border-border bg-surface2 px-3 text-sm placeholder:text-muted focus:border-crimson focus:outline-none"
            />
          </div>
          <p className="mt-1.5 text-[11px] text-muted">
            **Nomor ini akan dihubungi jika terjadi masalah
          </p>
        </div>
      </div>
    </StepSection>
  );
}
