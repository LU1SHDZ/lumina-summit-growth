import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function LegalPage({title,updated="September 1, 2026",children}:{title:string;updated?:string;children:ReactNode}){return <main id="main-content"><section className="relative bg-charcoal px-6 pb-20 pt-36 text-cream lg:px-8"><SiteHeader/><div className="mx-auto max-w-4xl"><p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Legal</p><h1 className="mt-5 font-display text-7xl">{title}</h1><p className="mt-5 text-sm text-cream/55">Last updated: {updated}</p></div></section><article className="legal-content mx-auto max-w-4xl px-6 py-20 text-charcoal/75 lg:py-28">{children}</article><SiteFooter/></main>}
