import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function FeaturedWorkSection({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
  return <section id="work" className="px-6 py-28 lg:px-8 lg:py-36"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="eyebrow">{spanish ? "Trabajo en desarrollo / 001" : "Work in development / 001"}</p><h2 className="mt-5 font-display text-6xl leading-[.88]">D’Yeslo:<br /><em className="font-normal text-terracotta">{spanish ? "una historia que vale conservar." : "a story worth holding."}</em></h2><p className="mt-7 text-base leading-7 text-charcoal/70">{spanish ? "Un concepto de tienda digital en evolución para una artista de Athens que transforma materiales recuperados en arte funcional único." : "An evolving digital storefront concept for an Athens maker transforming reclaimed materials into one-of-one functional art."}</p><Link href={localizedPath("/work/dyeslo", locale)} className="mt-8 inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">{spanish ? "Ver la historia del proyecto →" : "View the project story →"}</Link></div><div className="relative aspect-[16/11] overflow-hidden border-[10px] border-charcoal bg-charcoal shadow-[14px_14px_0_#C89B3C]"><Image src="/images/work/dyeslo/website-showcase.jpg" alt={spanish ? "Vista del concepto de sitio web de D’Yeslo" : "Preview of the D’Yeslo website concept"} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-top transition duration-700 hover:scale-[1.015]" /></div></div></div></section>;
}
