import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

const spanishServices = [
  ["Presencia en Búsqueda Local", "Aparece en los momentos en que tu mercado busca, desde mapas hasta resultados orgánicos."],
  ["Sitios Web de Conversión", "Experiencias digitales de alta confianza diseñadas para generar acción."],
  ["Captura y Seguimiento", "Sistemas claros de recepción y respuesta que protegen cada oportunidad hasta la siguiente conversación."],
  ["Medición y Atribución", "Seguimiento práctico para entender de dónde viene la demanda y qué debe mejorar después."],
  ["Automatización Responsable", "Flujos que reducen demoras sin reemplazar el criterio, el servicio ni la responsabilidad humana."],
  ["Estrategia de Crecimiento", "Prioridades claras, mejores decisiones y un plan práctico para crecer de forma sostenible."],
] as const;

export function ServicesSection({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
  return <section id="services" className="scroll-mt-6 px-6 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow={spanish ? "Lo que entregamos" : "What we deliver"} title={spanish ? <>Las palancas esenciales.<br />Trabajando juntas.</> : <>The essential levers.<br />Working together.</>}>{spanish ? "Diseñamos el sistema de adquisición de clientes alrededor de tus limitaciones reales y hacemos medible cada componente." : "We design the customer-acquisition system around your actual constraints, then make every component measurable."}</SectionHeading><div className="mt-12 grid border-l border-t border-charcoal/15 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">{services.map(({ number, title, description, icon: Icon }, index) => { const localized = spanish ? spanishServices[index] : [title, description]; return <article key={title} className="group min-h-52 border-b border-r border-charcoal/15 p-6 transition hover:bg-charcoal hover:text-cream sm:p-7"><div className="flex items-start justify-between"><span className="font-display text-2xl text-terracotta group-hover:text-gold">{number}</span><Icon aria-hidden="true" size={21} strokeWidth={1.4} className="text-agave group-hover:text-gold" /></div><h3 className="mt-8 text-pretty font-display text-3xl leading-none">{localized[0]}</h3><p className="mt-4 max-w-[19rem] text-sm leading-6 text-charcoal/65 group-hover:text-cream/70">{localized[1]}</p></article>; })}</div><Link href={localizedPath("/services", locale)} className="mt-8 inline-flex min-h-11 items-center border-b border-terracotta text-xs font-bold uppercase tracking-[.14em] transition hover:text-terracotta">{spanish ? "Explora servicios y precios iniciales →" : "Explore services and starting prices →"}</Link></div></section>;
}
