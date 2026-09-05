import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { FreeAuditForm } from "@/components/free-audit-form";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Free Growth Snapshot Request",
  description: "Request a focused first look at where your local-service business may be losing digital growth opportunities.",
  alternates: { canonical: "/free-audit", languages: { "en-US": "/free-audit", "es-US": "/es/free-audit", "x-default": "/free-audit" } },
};

export default function FreeAuditPage() {
  return <main id="main-content" className="min-h-screen bg-[#eee7d9]">
    <div className="px-6 py-7 lg:px-8"><div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between gap-5"><Link href="/" aria-label="Lumina Summit Growth home"><BrandLockup compact /></Link><Link href="/services" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-charcoal/65 transition hover:text-terracotta"><ArrowLeft size={14}/> <span className="hidden sm:inline">Review services and pricing</span></Link></header>
      <div className="grid min-w-0 gap-12 py-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-14 lg:py-24"><section className="min-w-0 lg:sticky lg:top-10 lg:self-start"><p className="eyebrow">Free Growth Snapshot</p><h1 className="mt-6 text-pretty font-display text-5xl leading-[.84] tracking-[-.035em] sm:text-7xl">A focused<br/>first look.</h1><p className="mt-7 max-w-md text-base leading-7 text-charcoal/70">Share the essentials and the constraint you are feeling. Lumina will review whether your website, local visibility, or conversion path shows an obvious opportunity worth addressing.</p><a href="#application" className="mt-6 inline-flex min-h-11 items-center border-b border-terracotta text-xs font-bold uppercase tracking-[.14em] lg:hidden">Start the request ↓</a><div className="mt-8 space-y-4 border-t border-charcoal/15 pt-6 lg:mt-10 lg:space-y-5 lg:pt-7">{["A few high-value observations","Optional details can be skipped","Reviewed personally—not auto-scored"].map((item)=><p key={item} className="flex items-start gap-3 text-sm leading-6 text-charcoal/75"><Check size={16} className="mt-1 shrink-0 text-terracotta"/>{item}</p>)}</div><p className="mt-7 text-xs leading-5 text-charcoal/50">This is not a complete audit, full SEO strategy, implementation roadmap, or unlimited free consulting. There is no obligation or automatic sales sequence.</p></section><FreeAuditForm/></div>
    </div></div><SiteFooter/>
  </main>;
}
