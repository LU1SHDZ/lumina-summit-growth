import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function FounderSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? {
    eyebrow: "Conoce al fundador / Luis Hernandez",
    title: "Crecimiento guiado por servicio, curiosidad y responsabilidad.",
    first: "Luis está construyendo Lumina Summit Growth sobre una convicción sencilla: la experiencia debe ayudar a los dueños de negocios a ver el camino con claridad, no hacerlos depender de más ruido. Su papel es escuchar con atención, conectar la estrategia con la ejecución y hacerse responsable de que el trabajo resulte verdaderamente útil.",
    second: "Como fundador hispano, Luis está formando una compañía ambiciosa sin perder calidez: moderna en sus herramientas, humana en su criterio y comprometida con ampliar el acceso a capacidades antes reservadas para empresas mucho más grandes.",
    quote: "No para ser servido, sino para servir.",
    quoteNote: "El principio que guía cómo Luis pretende que Lumina trabaje con sus clientes y comunidades.",
    principles: [["01", "Escuchar antes de prescribir"], ["02", "Decir la verdad, incluso cuando signifique recomendar menos"], ["03", "Probar, medir, aprender y mejorar"]],
    perspective: "Lee la perspectiva fundacional →",
    contact: "Inicia una conversación →",
    linkedin: "Conecta en LinkedIn ↗",
  } : {
    eyebrow: "Meet the founder / Luis Hernandez",
    title: "Growth guided by service, curiosity, and accountability.",
    first: "Luis is building Lumina Summit Growth on a straightforward conviction: expertise should help business owners see the path clearly, not make them dependent on more noise. His role is to listen closely, connect strategy with execution, and remain accountable for whether the work is genuinely useful.",
    second: "As a Hispanic founder, Luis is shaping a company that is ambitious without losing warmth: modern in its tools, human in its judgment, and committed to expanding access to capabilities once reserved for much larger companies.",
    quote: "Not to be served, but to serve.",
    quoteNote: "The principle guiding how Luis intends Lumina to work with clients and communities.",
    principles: [["01", "Listen before prescribing"], ["02", "Tell the truth, even when it means recommending less"], ["03", "Test, measure, learn, and improve"]],
    perspective: "Read the founding perspective →",
    contact: "Start a conversation →",
    linkedin: "Connect on LinkedIn ↗",
  };

  return (
    <section id="founder" className="scroll-mt-6 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-square overflow-hidden bg-[#071014] shadow-[14px_14px_0_#C89B3C]">
          <Image
            src="/images/brand/lumina-summit-growth-logo.png"
            alt="Lumina Summit Growth logo featuring an illuminated mountain, golden-ratio spiral, and geometric detailing"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-contain"
          />
        </div>

        <div className="lg:pl-10">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.9] sm:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70">
            {copy.first}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-charcoal/65">
            {copy.second}
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-display text-3xl leading-tight text-charcoal">“{copy.quote}”</p>
            <footer className="mt-3 text-xs leading-5 text-charcoal/55">
              {copy.quoteNote}
            </footer>
          </blockquote>
          <div className="mt-9 divide-y divide-charcoal/15 border-y border-charcoal/15">
            {copy.principles.map(([number, principle]) => (
              <p key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-4 text-sm leading-6 text-charcoal/75">
                <span className="font-display text-xl text-terracotta">{number}</span>
                <span>{principle}</span>
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-6">
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
