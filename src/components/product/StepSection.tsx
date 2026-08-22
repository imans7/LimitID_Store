import type { ReactNode } from "react";

export function StepSection({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center gap-3 bg-surface2 px-4 py-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
          {step}
        </span>
        <h2 className="font-display text-sm font-semibold">{title}</h2>
      </div>
      <div className="bg-surface p-4">{children}</div>
    </div>
  );
}
