import type { Metadata } from "next";
import Link from "next/link";
import { FounderPhotoCollage } from "@/components/founder/founder-photo-collage";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = { title: "About Luis Hernandez and Lumina Summit Growth", description: "Meet the founder behind Lumina Summit Growth and the principles guiding this founder-led growth practice.", alternates: { canonical: "/about", languages: { "en-US": "/about", "es-US": "/es/about", "x-default": "/about" } } };

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-charcoal px-6 pb-24 pt-40 text-cream lg:px-8 lg:pb-32">
        <SiteHeader />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">About Lumina Summit Growth</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[.82] sm:text-8xl">A growth partner<br /><em className="font-normal text-gold">built for the work.</em></h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-cream/70">Founder-led strategy and implementation for local service businesses that need their visibility, website, follow-up, and measurement to work as one system.</p>
        </div>
      </section>

      <section id="founder-story" className="scroll-mt-6 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <FounderPhotoCollage size="full" />
          <div className="lg:pl-8">
            <p className="eyebrow">Luis Hernandez / Founder</p>
            <h2 className="mt-5 text-pretty font-display text-5xl leading-[.9] sm:text-6xl">The work is personal before it becomes technical.</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-charcoal/70">
              <p>Lumina began with a question Luis keeps returning to: what becomes possible when ambitious people can finally see the path in front of them?</p>
              <p>As a Hispanic founder, he is building the company from the belief that sophisticated strategy and technology should not feel reserved for the largest organizations. They should help local owners protect what they have built, create opportunity for the people who depend on them, and move forward with greater confidence.</p>
              <p>That is why his work begins with listening—and why Lumina’s standard is not how much can be sold, but how honestly it can serve. The ambition is real: to build something excellent, enduring, and expansive without forgetting where the climb began or who made it possible.</p>
            </div>
            <blockquote className="mt-9 border-l-2 border-gold pl-6">
              <p className="font-display text-3xl leading-tight text-charcoal">“Not to be served, but to serve.”</p>
              <footer className="mt-3 text-xs uppercase tracking-[.14em] text-charcoal/55">The principle guiding Lumina’s work</footer>
            </blockquote>
            <a href="https://www.linkedin.com/in/luis2hernandez" target="_blank" rel="noreferrer" className="mt-9 inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">Connect with Luis on LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Working principles</p>
            <h2 className="mt-5 text-pretty font-display text-5xl leading-[.9] sm:text-6xl">How trust becomes part of the work.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-charcoal/65">Lumina is early by design and honest about that stage. Its proof will come from documented work, thoughtful partnerships, and results earned over time.</p>
          </div>
          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {[["01","Clarity before tactics"],["02","Systems over silos"],["03","Evidence over theater"],["04","Technology in service of people"]].map(([number,value]) => (
              <p key={number} className="grid grid-cols-[3rem_1fr] gap-5 py-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-2xl text-terracotta">{number}</span>
                <span className="font-display text-3xl leading-none sm:text-4xl">{value}</span>
              </p>
            ))}
            <div className="py-7">
              <Link href="/contact" className="inline-flex min-h-12 items-center bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-cream transition hover:bg-terracotta">Start a conversation →</Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
