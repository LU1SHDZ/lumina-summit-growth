import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children, inverse = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; inverse?: boolean }) {
  return <div className="max-w-3xl"><div className={`mb-5 flex items-center gap-3 ${inverse ? "text-gold" : "text-terracotta"}`}><span className="gold-line" /><p className="text-[10px] font-semibold uppercase tracking-[.22em]">{eyebrow}</p></div><h2 className={`font-display text-5xl leading-[.9] sm:text-6xl ${inverse ? "text-cream" : "text-charcoal"}`}>{title}</h2>{children && <p className={`mt-6 max-w-xl text-base leading-7 ${inverse ? "text-cream/70" : "text-charcoal/70"}`}>{children}</p>}</div>;
}
