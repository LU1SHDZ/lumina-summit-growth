const phases = [
  ["01", "Diagnose", "A focused audit identifies the constraint, available baseline evidence, and highest-value opportunities. You receive a prioritized growth roadmap."],
  ["02", "Build", "We scope and implement the right combination of positioning, website, local demand, automation, and measurement."],
  ["03", "Optimize", "We review performance, improve the customer journey, and compound what is demonstrably working."],
];

export function ApproachSection() {
  return <section id="approach" className="bg-agave px-6 py-28 text-cream lg:px-8 lg:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">How engagement works</p><h2 className="mt-5 font-display text-6xl leading-[.86]">Diagnose first.<br />Build with purpose.</h2><p className="mt-7 max-w-md text-base leading-7 text-cream/70">No oversized retainer before we understand the problem. Each engagement starts with clarity and earns the next phase through value.</p></div><div>{phases.map(([number,title,description]) => <article key={number} className="border-t border-cream/20 py-8"><div className="flex gap-6"><span className="font-display text-2xl text-gold">{number}</span><div><h3 className="font-display text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-cream/70">{description}</p></div></div></article>)}</div></div></section>;
}
