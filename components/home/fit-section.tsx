import type { Locale } from "@/lib/i18n";

export function FitSection({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es" ? {
    eyebrow: "A quién ayudamos",
    title: "Para operadores preparados para un sistema.",
    signals: ["Tienes buen trabajo y referencias, pero una demanda digital inconsistente.", "Se pierden oportunidades entre la consulta, la respuesta, el estimado y el seguimiento.", "Tus proveedores de marketing trabajan aislados y sin responsabilidad clara."],
  } : {
    eyebrow: "Who we help",
    title: "Built for operators ready for a system.",
    signals: ["You have strong work and referrals, but inconsistent digital demand.", "Leads are lost between inquiry, response, estimate, and follow-up.", "Your marketing vendors operate in silos with unclear accountability."],
  };
  return <section className="border-y border-charcoal/10 bg-cream px-6 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.55fr_1.45fr]"><div><p className="eyebrow">{copy.eyebrow}</p><h2 className="mt-4 font-display text-4xl leading-none">{copy.title}</h2></div><div className="grid gap-px bg-charcoal/15 md:grid-cols-3">{copy.signals.map((signal) => <p key={signal} className="bg-cream p-6 text-sm leading-6 text-charcoal/70">{signal}</p>)}</div></div></section>;
}
