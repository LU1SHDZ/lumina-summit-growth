import { ApproachSection } from "@/components/home/approach-section";
import { FitSection } from "@/components/home/fit-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { FounderSection } from "@/components/home/founder-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { WhyLuminaSection } from "@/components/home/why-lumina-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LandingPageTracker } from "@/components/landing-page-tracker";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function Homepage({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
  return (
    <main id="main-content" lang={locale} className="overflow-hidden">
      <LandingPageTracker pageType="homepage" />
      <SiteHeader locale={locale} />
      <HeroSection locale={locale} />
      <FitSection locale={locale} />
      <ServicesSection locale={locale} />
      <ApproachSection locale={locale} />
      <WhyLuminaSection locale={locale} />
      <FeaturedWorkSection locale={locale} />
      <FounderSection locale={locale} />
      <section id="audit" className="scroll-mt-6 bg-terracotta px-6 py-20 text-cream lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-12"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">{spanish ? "Un primer paso práctico" : "A practical first step"}</p><h2 className="mt-5 text-pretty font-display text-5xl leading-[.84] sm:text-7xl">{spanish ? <>Encuentra la limitación<br />que frena tu crecimiento.</> : <>Find the constraint<br />slowing your growth.</>}</h2></div><div><p className="max-w-md text-base leading-7 text-cream/80">{spanish ? "Solicita una revisión enfocada de tu visibilidad, recorrido de conversión y seguimiento de oportunidades. Recibirás próximos pasos priorizados, no una calificación genérica." : "Request a focused review of your visibility, conversion path, and lead follow-up. You’ll leave with prioritized next steps—not a generic scorecard."}</p><a href={localizedPath("/free-audit", locale)} className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-cream px-6 py-4 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-gold sm:w-auto">{spanish ? "Solicita tu auditoría gratuita →" : "Request your free audit →"}</a></div></div></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
