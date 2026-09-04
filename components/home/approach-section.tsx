import type { Locale } from "@/lib/i18n";

const phases = {
  en: [
  ["01", "Diagnose", "A focused audit identifies the constraint, available baseline evidence, and highest-value opportunities. You receive a prioritized growth roadmap."],
  ["02", "Build", "We scope and implement the right combination of positioning, website, local demand, automation, and measurement."],
  ["03", "Optimize", "We review performance, improve the customer journey, and compound what is demonstrably working."],
  ],
  es: [
    ["01", "Diagnosticar", "Una auditoría enfocada identifica la limitación, la evidencia de referencia disponible y las oportunidades de mayor valor. Recibes una hoja de ruta priorizada."],
    ["02", "Construir", "Definimos e implementamos la combinación adecuada de posicionamiento, sitio web, demanda local, automatización y medición."],
    ["03", "Optimizar", "Revisamos el desempeño, mejoramos el recorrido del cliente y fortalecemos lo que demuestra funcionar."],
  ],
};

export function ApproachSection({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
  return <section id="approach" className="scroll-mt-6 bg-agave px-6 py-24 text-cream lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">{spanish ? "Cómo funciona el compromiso" : "How engagement works"}</p><h2 className="mt-5 text-pretty font-display text-5xl leading-[.86] sm:text-6xl">{spanish ? <>Diagnosticar primero.<br />Construir con propósito.</> : <>Diagnose first.<br />Build with purpose.</>}</h2><p className="mt-7 max-w-md text-base leading-7 text-cream/70">{spanish ? "No proponemos un contrato excesivo antes de entender el problema. Cada compromiso comienza con claridad y se gana la siguiente fase creando valor." : "No oversized retainer before we understand the problem. Each engagement starts with clarity and earns the next phase through value."}</p></div><div>{phases[locale].map(([number,title,description]) => <article key={number} className="border-t border-cream/20 py-7"><div className="flex gap-5 sm:gap-6"><span className="font-display text-2xl text-gold">{number}</span><div><h3 className="font-display text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-cream/70">{description}</p></div></div></article>)}</div></div></section>;
}
