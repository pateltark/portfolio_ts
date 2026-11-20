import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
      {children && <p className="mt-4 text-muted-foreground">{children}</p>}
    </div>
  );
}
