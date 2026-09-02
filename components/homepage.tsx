import { ApproachSection } from "@/components/home/approach-section";
import { FitSection } from "@/components/home/fit-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { FounderSection } from "@/components/home/founder-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LandingPageTracker } from "@/components/landing-page-tracker";

export function Homepage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <LandingPageTracker pageType="homepage" />
      <SiteHeader />
      <HeroSection />
      <FitSection />
      <ServicesSection />
      <ApproachSection />
      <FounderSection />
      <section className="bg-charcoal px-6 py-28 text-cream lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div><p className="eyebrow text-gold">The operating advantage</p><h2 className="mt-5 font-display text-6xl leading-[.86]">No qualified lead<br />should go cold.</h2></div>
          <div className="border-l border-gold/50 pl-7"><p className="text-xl leading-8 text-cream/75">We connect your website, lead intake, follow-up, and reporting so opportunity keeps moving—even when your team is in the field.</p><ul className="mt-10 grid gap-4 text-sm text-cream/75 sm:grid-cols-2">{["Faster lead response", "Structured qualification", "Consistent follow-up", "Clear pipeline visibility"].map((item) => <li key={item} className="flex items-center gap-3"><span aria-hidden="true" className="text-gold">✓</span>{item}</li>)}</ul></div>
        </div>
      </section>
      <FeaturedWorkSection />
      <section id="results" className="px-6 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl"><p className="eyebrow">Built around business outcomes</p><div className="mt-6 grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><h2 className="font-display text-6xl leading-[.88]">More clarity.<br />Less marketing noise.</h2><div><p className="max-w-xl text-xl leading-8 text-charcoal/70">Every recommendation must connect to a measurable customer action: stronger visibility, more qualified inquiries, faster response, better close-rate visibility, or greater lifetime value.</p><a href="/services" className="mt-8 inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">See every deliverable →</a></div></div></div>
      </section>
      <section id="audit" className="bg-terracotta px-6 py-24 text-cream lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">A practical first step</p><h2 className="mt-5 font-display text-6xl leading-[.84] sm:text-7xl">Find the constraint<br />slowing your growth.</h2></div><div><p className="max-w-md text-base leading-7 text-cream/80">Request a focused review of your visibility, conversion path, and lead follow-up. You’ll leave with prioritized next steps—not a generic scorecard.</p><a href="/free-audit" className="mt-8 inline-flex items-center gap-3 bg-cream px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-gold">Request your free audit →</a></div></div></section>
      <SiteFooter />
    </main>
  );
}
