import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? {
    eyebrow: "Sistemas de crecimiento para negocios locales de servicios",
    title: <>Convierte la demanda local<br/><em className="font-normal text-gold">en trabajo reservado.</em></>,
    description: "Lumina Summit ayuda a negocios locales de servicios establecidos a descubrir dónde se pierde el crecimiento, fortalecer la adquisición y conversión de clientes, y usar la tecnología moderna con propósito.",
    sprint: "Comienza con el Sprint de Fundamentos →",
    audit: "Solicita una auditoría",
    aside: "Un solo socio conecta el recorrido del cliente desde el primer descubrimiento hasta el trabajo confirmado.",
    pillars: "Estrategia · sistemas · tecnología responsable",
  } : {
    eyebrow: "Growth systems for local service businesses",
    title: <>Turn local demand<br/><em className="font-normal text-gold">into booked work.</em></>,
    description: "Lumina Summit helps established local-service businesses identify where growth is being lost, strengthen customer acquisition and conversion, and use modern technology with purpose.",
    sprint: "Start with the Foundation Sprint →",
    audit: "Apply for an audit",
    aside: "One partner connecting the customer journey from first discovery to signed work.",
    pillars: "Strategy · systems · responsible technology",
  };

  return <section className="relative min-h-[760px] bg-charcoal px-6 pb-24 pt-36 text-cream lg:min-h-[820px] lg:px-8 lg:pt-56">
    <div className="grain absolute inset-0 opacity-20"/><div className="absolute -right-36 top-20 h-[33rem] w-[33rem] rounded-full border border-gold/20"/>
    <div className="relative mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[1.35fr_.65fr]"><div><div className="mb-8 flex items-center gap-3"><span className="h-px w-10 bg-gold"/><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">{copy.eyebrow}</p></div><h1 className="max-w-4xl font-display text-[clamp(3.7rem,8vw,8rem)] leading-[.8] tracking-[-.045em]">{copy.title}</h1><p className="mt-10 max-w-xl text-base leading-7 text-cream/75">{copy.description}</p><div className="mt-10 flex flex-wrap gap-4"><Link href={localizedPath("/start-here", locale)} className="bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-cream">{copy.sprint}</Link><Link href={localizedPath("/free-audit", locale)} className="border border-cream/25 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] transition hover:border-gold">{copy.audit}</Link></div></div><aside className="border-l border-gold/50 pl-6"><p className="font-display text-6xl text-gold">01</p><p className="mt-4 max-w-[18rem] text-sm leading-6 text-cream/70">{copy.aside}</p><p className="mt-9 text-xs uppercase tracking-[.16em] text-cream/55">{copy.pillars}</p></aside></div>
  </section>;
}
