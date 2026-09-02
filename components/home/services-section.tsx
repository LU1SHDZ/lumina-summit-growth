import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const spanishServices = [
  ["Presencia en Búsqueda Local", "Aparece en los momentos en que tu mercado busca, desde mapas hasta resultados orgánicos."],
  ["Sitios Web de Conversión", "Experiencias digitales de alta confianza diseñadas para generar acción."],
  ["Demanda Pagada", "Campañas disciplinadas que convierten atención en conversaciones calificadas."],
  ["Automatización con IA", "Sistemas inteligentes que reducen el tiempo de respuesta y protegen cada oportunidad."],
  ["Sistemas de Ingresos", "CRM e infraestructura de seguimiento que hacen el crecimiento medible y repetible."],
  ["Estrategia de Crecimiento", "Prioridades claras, mejores decisiones y un plan operativo real para escalar."],
] as const;

export function ServicesSection({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
  return <section id="services" className="px-6 py-28 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow={spanish ? "Lo que entregamos" : "What we deliver"} title={spanish ? <>Las palancas esenciales.<br />Trabajando juntas.</> : <>The essential levers.<br />Working together.</>}>{spanish ? "Diseñamos el sistema de adquisición de clientes alrededor de tus limitaciones reales y hacemos medible cada componente." : "We design the customer-acquisition system around your actual constraints, then make every component measurable."}</SectionHeading><div className="mt-20 grid border-l border-t border-charcoal/15 md:grid-cols-2 lg:grid-cols-3">{services.map(({ number, title, description, icon: Icon }, index) => { const localized = spanish ? spanishServices[index] : [title, description]; return <article key={title} className="group min-h-64 border-b border-r border-charcoal/15 p-7 transition hover:bg-charcoal hover:text-cream"><div className="flex items-start justify-between"><span className="font-display text-2xl text-terracotta group-hover:text-gold">{number}</span><Icon aria-hidden="true" size={21} strokeWidth={1.4} className="text-agave group-hover:text-gold" /></div><h3 className="mt-12 font-display text-3xl leading-none">{localized[0]}</h3><p className="mt-4 max-w-[19rem] text-sm leading-6 text-charcoal/65 group-hover:text-cream/70">{localized[1]}</p></article>; })}</div></div></section>;
}
