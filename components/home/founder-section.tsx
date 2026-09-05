import Link from "next/link";
import { FounderPhotoCollage } from "@/components/founder/founder-photo-collage";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function FounderSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? {
    eyebrow: "Conoce al fundador / Luis Hernandez",
    title: "La ambición de crecer. La responsabilidad de servir.",
    story: "Lumina comenzó con una pregunta que Luis sigue haciéndose: ¿qué se vuelve posible cuando las personas ambiciosas finalmente pueden ver con claridad el camino frente a ellas? Como fundador hispano, está construyendo una compañía con la convicción de que la estrategia sofisticada y la tecnología moderna también deben estar al alcance de los negocios locales que crean empleos, sostienen familias y fortalecen comunidades.",
    quote: "No para ser servido, sino para servir.",
    principles: [["01", "Escuchar antes de prescribir"], ["02", "Decir la verdad, incluso cuando signifique recomendar menos"], ["03", "Probar, medir, aprender y mejorar"]],
    perspective: "Lee la perspectiva fundacional →",
    contact: "Inicia una conversación →",
    linkedin: "Conecta en LinkedIn ↗",
  } : {
    eyebrow: "Meet the founder / Luis Hernandez",
    title: "The ambition to grow. The responsibility to serve.",
    story: "Lumina began with a question Luis keeps returning to: what becomes possible when ambitious people can finally see the path in front of them? As a Hispanic founder, he is building a company on the belief that sophisticated strategy and modern technology should also be within reach of the local businesses that create jobs, support families, and strengthen communities.",
    quote: "Not to be served, but to serve.",
    principles: [["01", "Listen before prescribing"], ["02", "Tell the truth, even when it means recommending less"], ["03", "Test, measure, learn, and improve"]],
    perspective: "Read the founding perspective →",
    contact: "Start a conversation →",
    linkedin: "Connect on LinkedIn ↗",
  };

  return (
    <section id="founder" className="scroll-mt-6 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <FounderPhotoCollage locale={locale} />

        <div className="lg:pl-8">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-pretty font-display text-5xl leading-[0.9] sm:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-charcoal/70">
            {copy.story}
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-display text-3xl leading-tight text-charcoal">“{copy.quote}”</p>
          </blockquote>
          <div className="mt-8 divide-y divide-charcoal/15 border-y border-charcoal/15">
            {copy.principles.map(([number, principle]) => (
              <p key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-3.5 text-sm leading-6 text-charcoal/75">
                <span className="font-display text-xl text-terracotta">{number}</span>
                <span>{principle}</span>
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <Link href={localizedPath("/about", locale)} className="inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[0.14em]">
              {copy.perspective}
            </Link>
            <Link href={localizedPath("/contact", locale)} className="inline-flex border-b border-charcoal/30 pb-2 text-xs font-bold uppercase tracking-[0.14em]">
              {copy.contact}
            </Link>
            <a href="https://www.linkedin.com/in/luis2hernandez" target="_blank" rel="noreferrer" className="inline-flex border-b border-charcoal/30 pb-2 text-xs font-bold uppercase tracking-[0.14em]">
              {copy.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
