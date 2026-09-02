"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

const navigation = {
  en: [
    { label: "Start Here", href: "/start-here" },
    { label: "Meet the Founder", href: "/#founder" },
    { label: "Work", href: "/work/dyeslo" },
  ],
  es: [
    { label: "Comienza Aquí", href: "/start-here" },
    { label: "Conoce al Fundador", href: "/#founder" },
    { label: "Trabajo", href: "/work/dyeslo" },
  ],
} as const;

export function SiteHeader({ dark = true, locale = "en" }: { dark?: boolean; locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const tone = dark ? "text-cream" : "text-charcoal";
  const navTone = dark ? "text-cream/80 hover:text-gold" : "text-charcoal/80 hover:text-terracotta";
  const copy = locale === "es"
    ? { main: "Navegación principal", mobile: "Navegación móvil", home: "Inicio de Lumina Summit Growth", apply: "Solicita una Auditoría", open: "Abrir menú", close: "Cerrar menú" }
    : { main: "Main navigation", mobile: "Mobile navigation", home: "Lumina Summit Growth home", apply: "Apply for an Audit", open: "Open menu", close: "Close menu" };

  return <header className="absolute inset-x-0 top-0 z-30">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8" aria-label={copy.main}>
      <Link href={localizedPath("/", locale)} aria-label={copy.home}><BrandLockup inverse={dark} compact /></Link>
      <div className="hidden items-center gap-7 md:flex">
        {navigation[locale].map((link) => <Link key={link.href} href={localizedPath(link.href, locale)} className={`text-xs font-medium uppercase tracking-[.14em] ${navTone}`}>{link.label}</Link>)}
        <LanguageSwitcher locale={locale} dark={dark} />
        <Link href={localizedPath("/free-audit", locale)} className={`border border-gold/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-[.14em] transition hover:bg-gold hover:text-charcoal ${tone}`}>{copy.apply}</Link>
      </div>
      <div className="flex items-center gap-3 md:hidden"><LanguageSwitcher locale={locale} dark={dark} /><button type="button" onClick={() => setOpen(!open)} className={`${tone} p-2`} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? copy.close : copy.open}>{open ? <X /> : <Menu />}</button></div>
    </nav>
    {open && <nav id="mobile-navigation" aria-label={copy.mobile} className="mx-4 border border-cream/15 bg-charcoal p-6 md:hidden">
      {navigation[locale].map((link) => <Link key={link.href} onClick={() => setOpen(false)} href={localizedPath(link.href, locale)} className="block border-b border-cream/10 py-4 text-sm text-cream">{link.label}</Link>)}
      <Link onClick={() => setOpen(false)} href={localizedPath("/free-audit", locale)} className="mt-5 block bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal">{copy.apply}</Link>
    </nav>}
  </header>;
}
