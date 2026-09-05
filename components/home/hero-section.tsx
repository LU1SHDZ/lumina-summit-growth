import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? {
    eyebrow: "Crecimiento liderado por su fundador para negocios locales",
    title: <>Convierte la demanda local<br/><em className="font-normal text-gold">en trabajo reservado.</em></>,
    description: "Encuentra las brechas que te cuestan oportunidades. Lumina conecta visibilidad local, un sitio de alta confianza, seguimiento oportuno y medición en un sistema práctico.",
    sprint: "Solicita un Diagnóstico Inicial gratuito →",
    audit: "Explora servicios y precios",
    aside: "Un solo socio conecta el recorrido del cliente desde el primer descubrimiento hasta el trabajo confirmado.",
    pillars: "Estrategia · sistemas · tecnología responsable",
    trust: ["Revisada por el fundador", "Sin obligación", "English + Español"],
  } : {
    eyebrow: "Founder-led growth for local service businesses",
    title: <>Turn local demand<br/><em className="font-normal text-gold">into booked work.</em></>,
    description: "Find the gaps costing you opportunities. Lumina connects local visibility, a high-trust website, timely follow-up, and measurement into one practical system.",
    sprint: "Request a free Growth Snapshot →",
    audit: "Explore services and pricing",
    aside: "One partner connecting the customer journey from first discovery to signed work.",
    pillars: "Strategy · systems · responsible technology",
    trust: ["Founder-reviewed", "No obligation", "English + Español"],
  };

  return <section className="relative bg-charcoal px-6 pb-20 pt-36 text-cream lg:min-h-[820px] lg:px-8 lg:pb-24 lg:pt-56">
    <div className="grain absolute inset-0 opacity-20"/><div className="absolute -right-36 top-20 h-[33rem] w-[33rem] rounded-full border border-gold/20"/>
    <div className="relative mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[1.35fr_.65fr]"><div><div className="mb-7 flex items-center gap-3"><span className="h-px w-10 shrink-0 bg-gold"/><p className="text-[0.68rem] font-semibold uppercase leading-5 tracking-[.18em] text-gold">{copy.eyebrow}</p></div><h1 className="max-w-4xl text-pretty font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.8] tracking-[-.045em]">{copy.title}</h1><p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-cream/75 sm:text-lg sm:leading-8">{copy.description}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href={localizedPath("/free-audit", locale)} className="inline-flex min-h-12 items-center justify-center bg-gold px-6 py-4 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-cream">{copy.sprint}</Link><Link href={localizedPath("/services", locale)} className="inline-flex min-h-12 items-center justify-center border border-cream/25 px-6 py-4 text-center text-xs font-bold uppercase tracking-[.14em] transition hover:border-gold hover:text-gold">{copy.audit}</Link></div><ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] text-cream/55">{copy.trust.map((item)=><li key={item} className="flex items-center gap-2"><span aria-hidden="true" className="text-gold">✓</span>{item}</li>)}</ul></div><aside className="hidden border-l border-gold/50 pl-6 lg:block"><p className="font-display text-6xl text-gold">01</p><p className="mt-4 max-w-[18rem] text-sm leading-6 text-cream/70">{copy.aside}</p><p className="mt-9 text-xs uppercase tracking-[.16em] text-cream/55">{copy.pillars}</p></aside></div>
  </section>;
}
