import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { FreeAuditForm } from "@/components/free-audit-form";

export const metadata: Metadata = {
  title: "Free Growth Audit",
  description: "Request a free growth audit for your local service business.",
};

export default function FreeAuditPage() {
  return <main id="main-content" className="min-h-screen bg-[#eee7d9] px-6 py-7 lg:px-8"><div className="mx-auto max-w-7xl"><header className="flex items-center justify-between"><Link href="/" className="font-display text-2xl font-semibold tracking-tight text-charcoal">Lumina <span className="text-terracotta">Summit</span></Link><Link href="/" className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-charcoal/65 transition hover:text-terracotta"><ArrowLeft size={14} /> Back to home</Link></header><div className="grid gap-14 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-28"><section className="lg:pt-8"><p className="eyebrow">A no-obligation conversation</p><h1 className="mt-6 font-display text-6xl leading-[.84] tracking-[-.035em] sm:text-7xl">Find the signal<br />in your growth.</h1><p className="mt-8 max-w-md text-base leading-7 text-charcoal/70">Get a strategic outside view of your local visibility, conversion path, and growth infrastructure—built around your business, not a template.</p><div className="mt-12 space-y-5 border-t border-charcoal/15 pt-7">{["A practical view of your biggest opportunities", "Clear priorities for your next growth phase", "No generic report or hard-sell meeting"].map((item) => <p key={item} className="flex items-center gap-3 text-sm text-charcoal/75"><Check size={16} className="text-terracotta" />{item}</p>)}</div></section><FreeAuditForm /></div></div></main>;
}
