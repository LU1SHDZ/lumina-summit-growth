import type { Locale } from "@/lib/i18n";

const links = {
  en: [
    ["Fit", "#fit"],
    ["What we evaluate", "#evaluation"],
    ["Process", "#process"],
    ["Deliverables", "#deliverables"],
    ["FAQ", "#faq"],
  ],
  es: [
    ["Compatibilidad", "#fit"],
    ["Evaluación", "#evaluation"],
    ["Proceso", "#process"],
    ["Entregables", "#deliverables"],
    ["Preguntas", "#faq"],
  ],
} as const;

export function OfferQuickNav({ locale = "en" }: { locale?: Locale }) {
  return (
    <nav aria-label={locale === "es" ? "En esta página" : "On this page"} className="sticky top-0 z-20 border-b border-charcoal/10 bg-cream/95 px-6 backdrop-blur lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-terracotta">
          {locale === "es" ? "En esta página" : "On this page"}
        </span>
        {links[locale].map(([label, href]) => (
          <a key={href} href={href} className="inline-flex min-h-9 shrink-0 items-center border-b border-transparent text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-charcoal/60 transition hover:border-terracotta hover:text-charcoal">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
