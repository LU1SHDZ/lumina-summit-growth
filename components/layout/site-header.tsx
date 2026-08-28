"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const tone = dark ? "text-cream" : "text-charcoal";
  return <header className="absolute inset-x-0 top-0 z-30"><nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Main navigation"><Link href="/" className={`font-display text-2xl font-semibold tracking-tight ${tone}`}>Lumina <span className="text-gold">Summit</span></Link><div className="hidden items-center gap-8 md:flex">{siteConfig.navigation.map((link) => <Link key={link.href} href={link.href} className={`text-xs font-medium uppercase tracking-[.16em] ${dark ? "text-cream/80 hover:text-gold" : "text-charcoal/80 hover:text-terracotta"}`}>{link.label}</Link>)}<Link href="/free-audit" className={`border border-gold/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-[.14em] transition hover:bg-gold hover:text-charcoal ${tone}`}>Free Growth Audit</Link></div><button onClick={() => setOpen(!open)} className={`${tone} p-2 md:hidden`} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></nav>{open && <div id="mobile-navigation" className="mx-4 border border-cream/15 bg-charcoal p-6 md:hidden">{siteConfig.navigation.map((link) => <Link key={link.href} onClick={() => setOpen(false)} href={link.href} className="block border-b border-cream/10 py-4 text-sm text-cream">{link.label}</Link>)}<Link onClick={() => setOpen(false)} href="/free-audit" className="mt-5 block bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal">Free Growth Audit</Link></div>}</header>;
}
