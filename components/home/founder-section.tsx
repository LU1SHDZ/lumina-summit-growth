import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function FounderSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? {
    eyebrow: "Conoce al fundador / Luis Hernandez",
    title: "Crecimiento guiado por servicio, curiosidad y responsabilidad.",
    story: "Luis está construyendo Lumina sobre una convicción sencilla: la experiencia debe ayudar a los dueños a ver el camino con claridad, no hacerlos depender de más ruido. Como fundador hispano, está formando una compañía moderna en sus herramientas, humana en su criterio y responsable por la utilidad de su trabajo.",
    quote: "No para ser servido, sino para servir.",
    principles: [["01", "Escuchar antes de prescribir"], ["02", "Decir la verdad, incluso cuando signifique recomendar menos"], ["03", "Probar, medir, aprender y mejorar"]],
    perspective: "Lee la perspectiva fundacional →",
    contact: "Inicia una conversación →",
    linkedin: "Conecta en LinkedIn ↗",
    panel: "Fundador hispano · Servicio primero · English + Español",
  } : {
    eyebrow: "Meet the founder / Luis Hernandez",
    title: "Growth guided by service, curiosity, and accountability.",
    story: "Luis is building Lumina on a straightforward conviction: expertise should help owners see the path clearly, not make them dependent on more noise. As a Hispanic founder, he is shaping a company that is modern in its tools, human in its judgment, and accountable for whether the work is genuinely useful.",
    quote: "Not to be served, but to serve.",
    principles: [["01", "Listen before prescribing"], ["02", "Tell the truth, even when it means recommending less"], ["03", "Test, measure, learn, and improve"]],
    perspective: "Read the founding perspective →",
    contact: "Start a conversation →",
    linkedin: "Connect on LinkedIn ↗",
    panel: "Hispanic founder · Service first · English + Español",
  };

  return (
    <section id="founder" className="scroll-mt-6 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#071014] shadow-[12px_12px_0_#C89B3C] lg:aspect-[4/5]">
          <Image
            src="/images/brand/lumina-summit-growth-logo.png"
            alt="Lumina Summit Growth logo featuring an illuminated mountain, golden-ratio spiral, and geometric detailing"
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="object-contain p-5 sm:p-8"
          />
          <p className="absolute inset-x-5 bottom-5 border-t border-gold/25 pt-4 text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-cream/60 sm:inset-x-8 sm:bottom-8">{copy.panel}</p>
        </div>

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
