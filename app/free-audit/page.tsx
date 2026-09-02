import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { FreeAuditForm } from "@/components/free-audit-form";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Growth Audit Application",
  description: "Apply for a focused review of your local-service business growth system.",
};

export default function FreeAuditPage() {
  return <main id="main-content" className="min-h-screen bg-[#eee7d9]">
    <div className="px-6 py-7 lg:px-8"><div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between"><Link href="/" className="font-display text-2xl font-semibold tracking-tight text-charcoal">Lumina <span className="text-terracotta">Summit</span></Link><Link href="/start-here" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-charcoal/65 transition hover:text-terracotta"><ArrowLeft size={14}/> Review the Sprint</Link></header>
      <div className="grid min-w-0 gap-14 py-16 lg:grid-cols-[.75fr_1.25fr] lg:py-24"><section className="min-w-0 lg:sticky lg:top-10 lg:self-start"><p className="eyebrow">Growth audit / Qualification application</p><h1 className="mt-6 font-display text-5xl leading-[.84] tracking-[-.035em] sm:text-7xl">Context before<br/>recommendations.</h1><p className="mt-8 max-w-md text-base leading-7 text-charcoal/70">This application helps us understand your business and determine whether the Local Growth Foundation Sprint is a responsible next step.</p><div className="mt-10 space-y-5 border-t border-charcoal/15 pt-7">{["Reviewed by a person—not scored by an unvalidated algorithm","Used to prepare a more useful first conversation","No guarantee, obligation, or automatic sales sequence"].map((item)=><p key={item} className="flex items-start gap-3 text-sm leading-6 text-charcoal/75"><Check size={16} className="mt-1 shrink-0 text-terracotta"/>{item}</p>)}</div><p className="mt-8 text-xs leading-5 text-charcoal/50">The form asks about investment, team size, and decision-making only to understand fit. Final qualification thresholds have not yet been established.</p></section><FreeAuditForm/></div>
    </div></div><SiteFooter/>
  </main>;
}
