import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DyesloShowcase } from "@/components/work/dyeslo-showcase";

export const metadata: Metadata = {
  title: "D’Yeslo Website Concept",
  description: "An in-development digital storefront and brand-storytelling project for Athens maker D’Yeslo.",
  alternates: {
    canonical: "/work/dyeslo",
    languages: { "en-US": "/work/dyeslo", "es-US": "/es/work/dyeslo", "x-default": "/work/dyeslo" },
  },
};

export default function DyesloWorkPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-charcoal px-6 pb-24 pt-40 text-cream lg:px-8 lg:pb-32">
        <SiteHeader />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Work in development / 001</p>
          <h1 className="mt-6 font-display text-7xl leading-[.82] sm:text-9xl">D’Yeslo</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/70">
            Translating a one-of-one Athens maker practice into a digital experience with the same material warmth, story, and sense of discovery.
          </p>
          <p className="mt-6 inline-flex border border-gold/40 px-4 py-2 text-xs uppercase tracking-[.14em] text-gold">
            Prototype — outcomes not yet measured
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">The context</p>
            <p className="mt-5 text-sm leading-6 text-charcoal/70">D’Yeslo transforms reclaimed glass and found materials into functional art, sold through local markets and direct relationships.</p>
          </div>
          <div>
            <p className="eyebrow">The opportunity</p>
            <p className="mt-5 text-sm leading-6 text-charcoal/70">Create a digital storefront that preserves the human, local character of the work while making products, process, and market locations easier to explore.</p>
          </div>
          <div>
            <p className="eyebrow">Current scope</p>
            <p className="mt-5 text-sm leading-6 text-charcoal/70">Brand narrative, responsive experience design, collection architecture, product storytelling, market discovery, and prototype development.</p>
          </div>
        </div>
      </section>

      <DyesloShowcase />

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Design direction</p>
            <h2 className="mt-5 font-display text-6xl leading-[.88]">Let the material lead.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-charcoal/70">
            <p>The prototype uses editorial typography, generous pacing, tactile photography, and quiet interactions to position each object as something with provenance—not anonymous inventory.</p>
            <p>Commerce flows remain intentionally provisional while product availability, fulfillment, pricing, and client-approved impact claims are confirmed. That boundary keeps the concept useful without presenting unfinished assumptions as fact.</p>
            <Link href="/contact" className="inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">Discuss a project like this →</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
