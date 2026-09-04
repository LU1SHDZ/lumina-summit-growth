import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

const reasons = {
  en: [
    ["01", "One accountable partner", "Your visibility, website, lead handling, and measurement are considered as one customer journey—not isolated channels."],
    ["02", "Advice before retainers", "We begin with evidence, name the real constraint, and recommend less when more activity would not create value."],
    ["03", "Modern tools, human judgment", "Automation supports faster service and clearer decisions. It never replaces accountability, context, or a real relationship."],
  ],
  es: [
    ["01", "Un socio responsable", "Tu visibilidad, sitio web, atención de oportunidades y medición se consideran como un recorrido completo, no canales aislados."],
    ["02", "Consejo antes que contratos", "Comenzamos con evidencia, nombramos la limitación real y recomendamos menos cuando más actividad no crearía valor."],
    ["03", "Herramientas modernas, criterio humano", "La automatización apoya un servicio más rápido y mejores decisiones. Nunca reemplaza la responsabilidad, el contexto ni una relación real."],
  ],
} as const;

export function WhyLuminaSection({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";

  return (
    <section id="why-lumina" className="scroll-mt-6 bg-charcoal px-6 py-24 text-cream lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-cream/15 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">{spanish ? "Por qué Lumina" : "Why Lumina"}</p>
            <h2 className="mt-5 max-w-xl text-pretty font-display text-5xl leading-[.88] sm:text-6xl">
              {spanish ? "Claridad que se gana con trabajo útil." : "Clarity earned through useful work."}
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-base leading-7 text-cream/70 lg:justify-self-end">
            {spanish ? "No vendemos ruido, promesas infladas ni una lista de tácticas. Construimos el siguiente paso responsable alrededor de lo que tu negocio realmente necesita." : "No inflated promises, marketing theater, or disconnected menu of tactics. We build the responsible next step around what your business actually needs."}
          </p>
        </div>
        <div className="grid border-l border-cream/15 md:grid-cols-3">
          {reasons[locale].map(([number, title, description]) => (
            <article key={number} className="border-b border-r border-cream/15 p-6 sm:p-8">
              <span className="font-display text-2xl text-gold">{number}</span>
              <h3 className="mt-10 text-pretty font-display text-3xl leading-none">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-cream/65">{description}</p>
            </article>
          ))}
        </div>
        <Link href={localizedPath("/about", locale)} className="mt-8 inline-flex min-h-11 items-center border-b border-gold text-xs font-bold uppercase tracking-[.14em] text-gold transition hover:text-cream">
          {spanish ? "Conoce nuestros principios →" : "Meet the principles behind the work →"}
        </Link>
      </div>
    </section>
  );
}
