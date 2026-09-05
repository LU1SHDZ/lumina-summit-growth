import Link from "next/link";
import { Check, MoveRight } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { growthServicesContent, type GrowthOffer } from "@/lib/offers/growth-services";

const cardStyles = {
  "growth-snapshot": "border border-charcoal/15 bg-cream text-charcoal shadow-[10px_10px_0_#C89B3C]",
  "growth-blueprint": "bg-charcoal text-cream",
  "local-growth-foundation": "border border-charcoal/15 bg-cream text-charcoal",
  "growth-website-system": "bg-terracotta text-cream",
  "local-growth": "bg-agave text-cream",
  "growth-partner": "bg-cream text-charcoal",
} as const;

function OfferCard({ offer, locale }: { offer: GrowthOffer; locale: Locale }) {
  const dark = ["growth-blueprint", "growth-website-system", "local-growth"].includes(offer.id);
  const headingId = `${offer.id}-title`;

  return (
    <article aria-labelledby={headingId} className={`flex h-full flex-col p-7 sm:p-9 ${cardStyles[offer.id]}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className={`text-[0.62rem] font-semibold uppercase tracking-[.18em] ${dark ? "text-gold" : "text-terracotta"}`}>{offer.category}</p>
          <p className={`mt-3 font-display text-2xl ${dark ? "text-gold" : "text-terracotta"}`}>{offer.number}</p>
        </div>
        {offer.badge ? <span className={`max-w-[13rem] border px-3 py-2 text-right text-[0.58rem] font-bold uppercase leading-4 tracking-[.14em] ${dark ? "border-cream/20 text-cream/70" : "border-terracotta/30 text-terracotta"}`}>{offer.badge}</span> : null}
      </div>

      <h3 id={headingId} className="mt-8 text-pretty font-display text-4xl leading-[.9] sm:text-5xl">{offer.name}</h3>
      <p className={`mt-5 text-pretty font-display text-3xl leading-none ${dark ? "text-gold" : "text-agave"}`}>{offer.price}</p>
      <p className={`mt-6 text-sm leading-6 ${dark ? "text-cream/75" : "text-charcoal/70"}`}>{offer.description}</p>

      <ul className={`mt-7 divide-y border-y ${dark ? "divide-cream/15 border-cream/15" : "divide-charcoal/15 border-charcoal/15"}`}>
        {offer.includes.map((item) => (
          <li key={item} className={`flex gap-3 py-3 text-xs leading-5 ${dark ? "text-cream/70" : "text-charcoal/65"}`}>
            <Check aria-hidden="true" size={14} className={`mt-0.5 shrink-0 ${dark ? "text-gold" : "text-terracotta"}`} />
            {item}
          </li>
        ))}
      </ul>

      <p className={`mt-6 text-xs leading-5 ${dark ? "text-cream/55" : "text-charcoal/50"}`}>{offer.note}</p>
      <Link href={localizedPath(offer.cta.href, locale)} className={`mt-8 inline-flex min-h-12 items-center justify-center gap-3 px-5 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[.13em] transition ${dark ? "bg-cream text-charcoal hover:bg-gold" : "bg-charcoal text-cream hover:bg-terracotta"}`}>
        {offer.cta.label}<MoveRight aria-hidden="true" size={15} />
      </Link>
    </article>
  );
}

export function ServicesPricingPage({ locale = "en" }: { locale?: Locale }) {
  const content = growthServicesContent[locale];
  const spanish = locale === "es";

  return (
    <main id="main-content" lang={locale}>
      <section className="relative overflow-hidden bg-charcoal px-6 pb-20 pt-40 text-cream lg:px-8 lg:pb-24">
        <div className="grain absolute inset-0 opacity-20" />
        <div aria-hidden="true" className="absolute -right-40 top-24 h-[34rem] w-[34rem] rounded-full border border-gold/15" />
        <SiteHeader locale={locale} />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">{content.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-pretty font-display text-6xl leading-[.8] tracking-[-.04em] sm:text-8xl">
            {content.hero.title}<br /><em className="font-normal text-gold">{content.hero.titleAccent}</em>
          </h1>
          <p className="mt-9 max-w-2xl text-base leading-7 text-cream/70 sm:text-lg sm:leading-8">{content.hero.description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={localizedPath("/free-audit", locale)} className="inline-flex min-h-12 items-center justify-center bg-gold px-6 py-4 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-cream">{content.hero.primaryCta}</Link>
            <a href="#clarity" className="inline-flex min-h-12 items-center justify-center border border-cream/25 px-6 py-4 text-center text-xs font-bold uppercase tracking-[.14em] transition hover:border-gold hover:text-gold">{content.hero.secondaryCta} ↓</a>
          </div>

          <ol aria-label={spanish ? "Camino de servicios" : "Service journey"} className="mt-16 grid border-l border-t border-cream/15 sm:grid-cols-2 lg:grid-cols-4">
            {content.journey.map((step) => (
              <li key={step.number} className="border-b border-r border-cream/15 p-5 sm:p-6">
                <span className="font-display text-2xl text-gold">{step.number}</span>
                <span className="mt-8 block text-xs font-semibold uppercase tracking-[.14em] text-cream/70">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-charcoal/15 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:py-14">
          <div>
            <p className="eyebrow">{content.philosophy.eyebrow}</p>
            <h2 className="mt-5 max-w-xl text-pretty font-display text-5xl leading-[.88] sm:text-6xl">{content.philosophy.title}</h2>
          </div>
          <div className="lg:pl-8">
            <p className="max-w-2xl text-base leading-7 text-charcoal/70">{content.philosophy.body}</p>
            <p className="mt-6 border-l-2 border-gold pl-5 font-display text-2xl leading-tight text-charcoal">{content.philosophy.principle}</p>
          </div>
        </div>
      </section>

      {content.sections.map((section) => {
        const isGrowth = section.id === "growth";
        const isFoundation = section.id === "foundation";
        return (
          <section key={section.id} id={section.id} className={`scroll-mt-6 px-6 py-24 lg:px-8 lg:py-32 ${isGrowth ? "bg-charcoal text-cream" : isFoundation ? "bg-[#eee7d9]" : "bg-cream"}`}>
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
                <div>
                  <p className={`text-[0.64rem] font-semibold uppercase tracking-[.2em] ${isGrowth ? "text-gold" : "text-terracotta"}`}>{section.eyebrow}</p>
                  <h2 className="mt-5 max-w-2xl text-pretty font-display text-5xl leading-[.87] sm:text-6xl">{section.title}</h2>
                </div>
                <p className={`max-w-2xl text-base leading-7 lg:justify-self-end ${isGrowth ? "text-cream/65" : "text-charcoal/65"}`}>{section.description}</p>
              </div>
              <div className={`mt-12 grid gap-7 sm:mt-16 lg:items-stretch ${section.id === "clarity" ? "lg:grid-cols-[.85fr_1.15fr]" : section.id === "growth" ? "lg:grid-cols-[.92fr_1.08fr]" : "lg:grid-cols-2"}`}>
                {section.offers.map((offer) => <OfferCard key={offer.id} offer={offer} locale={locale} />)}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-gold px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-charcoal/65">{content.foundingProgram.eyebrow}</p>
          <div>
            <h2 className="max-w-3xl text-pretty font-display text-5xl leading-[.9] sm:text-6xl">{content.foundingProgram.title}</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-charcoal/70">{content.foundingProgram.body}</p>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-6 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">{content.faq.eyebrow}</p>
            <h2 className="mt-5 max-w-xl text-pretty font-display text-5xl leading-[.9] sm:text-6xl">{content.faq.title}</h2>
          </div>
          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {content.faq.items.map((item) => (
              <details key={item.question} className="group py-1">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 font-display text-2xl leading-tight">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-terracotta transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-7 text-charcoal/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-terracotta px-6 py-20 text-cream lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">{content.finalCta.eyebrow}</p>
            <h2 className="mt-5 max-w-3xl text-pretty font-display text-5xl leading-[.87] sm:text-7xl">{content.finalCta.title}</h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-7 text-cream/75">{content.finalCta.body}</p>
            <Link href={localizedPath("/free-audit", locale)} className="mt-7 inline-flex min-h-12 w-full items-center justify-center bg-cream px-6 py-4 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-gold sm:w-auto">{content.finalCta.label}</Link>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
