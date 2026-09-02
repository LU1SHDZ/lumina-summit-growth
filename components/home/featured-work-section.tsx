import Image from "next/image";
import Link from "next/link";

export function FeaturedWorkSection() {
  return <section id="work" className="px-6 py-28 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="eyebrow">Work in development / 001</p><h2 className="mt-5 font-display text-6xl leading-[.88]">D’Yeslo:<br /><em className="font-normal text-terracotta">a story worth holding.</em></h2><p className="mt-7 text-base leading-7 text-charcoal/70">An evolving digital storefront concept for an Athens maker transforming reclaimed materials into one-of-one functional art.</p><Link href="/work/dyeslo" className="mt-8 inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">View the project story →</Link></div><div className="relative min-h-[34rem] overflow-hidden bg-charcoal"><Image src="/images/work/dyeslo/market-display.png" alt="D’Yeslo handmade work displayed at a local market" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.02]" /></div></div></div></section>;
}
