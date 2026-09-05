import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { FreeAuditForm } from "@/components/free-audit-form";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Growth Audit Application",
  description: "Apply for a focused review of your local-service business growth system.",
  alternates: { canonical: "/free-audit", languages: { "en-US": "/free-audit", "es-US": "/es/free-audit", "x-default": "/free-audit" } },
};

export default function FreeAuditPage() {
  return <main id="main-content" className="min-h-screen bg-[#eee7d9]">
    <div className="px-6 py-7 lg:px-8"><div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between gap-5"><Link href="/" aria-label="Lumina Summit Growth home"><BrandLockup compact /></Link><Link href="/start-here" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-charcoal/65 transition hover:text-terracotta"><ArrowLeft size={14}/> <span className="hidden sm:inline">Review the Sprint</span></Link></header>
      <div className="grid min-w-0 gap-12 py-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-14 lg:py-24"><section className="min-w-0 lg:sticky lg:top-10 lg:self-start"><p className="eyebrow">Growth audit / Qualification application</p><h1 className="mt-6 text-pretty font-display text-5xl leading-[.84] tracking-[-.035em] sm:text-7xl">Context before<br/>recommendations.</h1><p className="mt-7 max-w-md text-base leading-7 text-charcoal/70">This application helps us understand your business and determine whether the Local Growth Foundation Sprint is a responsible next step.</p><a href="#application" className="mt-6 inline-flex min-h-11 items-center border-b border-terracotta text-xs font-bold uppercase tracking-[.14em] lg:hidden">Start the application ↓</a><div className="mt-8 space-y-4 border-t border-charcoal/15 pt-6 lg:mt-10 lg:space-y-5 lg:pt-7">{["Reviewed by a person—not scored by an unvalidated algorithm","Used to prepare a more useful first conversation","No guarantee, obligation, or automatic sales sequence"].map((item)=><p key={item} className="flex items-start gap-3 text-sm leading-6 text-charcoal/75"><Check size={16} className="mt-1 shrink-0 text-terracotta"/>{item}</p>)}</div><p className="mt-7 text-xs leading-5 text-charcoal/50">The form asks about investment, team size, and decision-making only to understand fit. Final qualification thresholds have not yet been established.</p></section><FreeAuditForm/></div>
    </div></div><SiteFooter/>
  </main>;
}
