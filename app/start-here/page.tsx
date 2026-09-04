import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { foundationFaq, localGrowthFoundation } from "@/lib/offers/local-growth-foundation";
import { LandingPageTracker } from "@/components/landing-page-tracker";
import { OfferQuickNav } from "@/components/offer/offer-quick-nav";

export const metadata: Metadata = {
  title: "Start Here | Local Growth Foundation Sprint",
  description: "See how the Local Growth Foundation Sprint helps established service businesses identify growth constraints and build a prioritized roadmap.",
};

export default function StartHerePage() {
  return <main id="main-content">
    <LandingPageTracker pageType="offer" />
    <section className="relative overflow-hidden bg-charcoal px-6 pb-24 pt-40 text-cream lg:px-8 lg:pb-32"><div className="grain absolute inset-0 opacity-20" /><SiteHeader /><div className="relative mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">The working initial offer</p><h1 className="mt-6 max-w-5xl font-display text-6xl leading-[.82] tracking-[-.04em] sm:text-8xl">Local Growth<br /><em className="font-normal text-gold">Foundation Sprint.</em></h1><p className="mt-9 max-w-2xl text-lg leading-8 text-cream/70">{localGrowthFoundation.summary}</p><div className="mt-10 flex flex-wrap gap-4"><Link href="/free-audit" className="bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-charcoal hover:bg-cream">Apply for a growth audit →</Link><a href="#fit" className="border border-cream/25 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] hover:border-gold">Check the fit</a></div></div></section>

    <OfferQuickNav />

    <section id="fit" className="scroll-mt-16 px-6 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16"><div><p className="eyebrow">Who it is for</p><h2 className="mt-5 text-pretty font-display text-5xl leading-[.88] sm:text-6xl">A foundation for businesses ready to see the whole system.</h2><p className="mt-7 max-w-xl text-base leading-7 text-charcoal/70">The Sprint is designed for operators who want a candid view of where opportunity is being lost before committing to more tactics, tools, or advertising.</p></div><ul className="divide-y divide-charcoal/15 border-t border-charcoal/15">{localGrowthFoundation.fitSignals.map((signal, index)=><li key={signal} className="flex gap-5 py-5 text-sm leading-6 text-charcoal/75"><span className="font-display text-2xl text-terracotta">0{index+1}</span>{signal}</li>)}</ul></div></section>

    <section id="evaluation" className="scroll-mt-16 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">What we evaluate</p><div className="mt-8 grid border-l border-t border-charcoal/15 sm:grid-cols-2 lg:grid-cols-3">{localGrowthFoundation.evaluationAreas.map((area,index)=><article key={area} className="min-h-36 border-b border-r border-charcoal/15 p-5 sm:min-h-40 sm:p-6"><span className="font-display text-2xl text-terracotta">{String(index+1).padStart(2,"0")}</span><h2 className="mt-7 text-pretty font-display text-3xl leading-none">{area}</h2></article>)}</div></div></section>

    <section id="process" className="scroll-mt-16 bg-agave px-6 py-24 text-cream lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">The process</p><h2 className="mt-5 text-pretty font-display text-5xl leading-[.88] sm:text-6xl">Listen first.<br />Then illuminate the path.</h2></div><div>{localGrowthFoundation.process.map((phase)=><article key={phase.number} className="grid gap-4 border-t border-cream/20 py-7 sm:grid-cols-[.12fr_.3fr_.58fr]"><span className="font-display text-2xl text-gold">{phase.number}</span><h3 className="font-display text-3xl">{phase.title}</h3><p className="text-sm leading-6 text-cream/70">{phase.description}</p></article>)}</div></div></section>

    <section id="deliverables" className="scroll-mt-16 px-6 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16"><div><p className="eyebrow">Expected deliverables</p><h2 className="mt-5 text-pretty font-display text-5xl leading-[.88] sm:text-6xl">Evidence, priorities, and a roadmap your team can use.</h2></div><ul className="space-y-3">{localGrowthFoundation.deliverables.map((item)=><li key={item} className="flex gap-4 border-l-2 border-gold bg-[#eee7d9] p-5 text-sm leading-6 text-charcoal/75"><span aria-hidden="true">✓</span>{item}</li>)}</ul></div></section>

    <section className="bg-charcoal px-6 py-24 text-cream lg:px-8"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Who may not be a fit</p><h2 className="mt-5 font-display text-5xl leading-[.9]">A useful engagement requires honesty on both sides.</h2></div><ul className="divide-y divide-cream/15 border-t border-cream/15">{localGrowthFoundation.poorFitSignals.map((signal)=><li key={signal} className="py-5 text-sm leading-6 text-cream/70">{signal}</li>)}</ul></div></section>

    <section className="px-6 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><p className="eyebrow">What happens afterward</p><div className="mt-8 grid gap-px bg-charcoal/15 md:grid-cols-3">{localGrowthFoundation.afterSprint.map((path,index)=><article key={path} className="min-h-52 bg-cream p-7"><span className="font-display text-2xl text-terracotta">0{index+1}</span><p className="mt-12 text-base leading-7 text-charcoal/75">{path}</p></article>)}</div><p className="mt-8 max-w-2xl text-sm leading-6 text-charcoal/60">The roadmap should remain valuable even if Lumina is not selected for implementation. Any later phase is scoped and agreed separately.</p></div></section>

    <section id="faq" className="scroll-mt-16 bg-[#eee7d9] px-6 py-24 lg:px-8"><div className="mx-auto max-w-4xl"><p className="eyebrow">Frequently asked questions</p><h2 className="mt-5 font-display text-5xl sm:text-6xl">Before you apply.</h2><div className="mt-10 divide-y divide-charcoal/15 border-y border-charcoal/15">{foundationFaq.map((item)=><details key={item.question} className="group py-1"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 font-display text-2xl"><span>{item.question}</span><span aria-hidden="true" className="shrink-0 text-terracotta transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-6 text-sm leading-7 text-charcoal/70">{item.answer}</p></details>)}</div></div></section>

    <section className="bg-terracotta px-6 py-20 text-cream lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Start with fit, not a pitch</p><h2 className="mt-4 font-display text-6xl leading-[.88]">Show us where growth feels stuck.</h2></div><Link href="/free-audit" className="inline-flex bg-cream px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-charcoal hover:bg-gold">Apply for a growth audit →</Link></div></section>
    <SiteFooter />
  </main>;
}
