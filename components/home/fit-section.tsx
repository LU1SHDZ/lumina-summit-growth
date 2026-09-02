const signals = ["You have strong work and referrals, but inconsistent digital demand.", "Leads are lost between inquiry, response, estimate, and follow-up.", "Your marketing vendors operate in silos with unclear accountability."];

export function FitSection() {
  return <section className="border-y border-charcoal/10 bg-cream px-6 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.55fr_1.45fr]"><div><p className="eyebrow">Who we help</p><h2 className="mt-4 font-display text-4xl leading-none">Built for operators ready for a system.</h2></div><div className="grid gap-px bg-charcoal/15 md:grid-cols-3">{signals.map((signal) => <p key={signal} className="bg-cream p-6 text-sm leading-6 text-charcoal/70">{signal}</p>)}</div></div></section>;
}
