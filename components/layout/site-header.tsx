"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

const navigation = {
  en: [
    { label: "Start Here", href: "/start-here" },
    { label: "Services", href: "/services" },
    { label: "Founder", href: "/#founder" },
    { label: "Work", href: "/work/dyeslo" },
  ],
  es: [
    { label: "Comienza Aquí", href: "/start-here" },
    { label: "Servicios", href: "/services" },
    { label: "Fundador", href: "/#founder" },
    { label: "Trabajo", href: "/work/dyeslo" },
  ],
} as const;

export function SiteHeader({ dark = true, locale = "en" }: { dark?: boolean; locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const tone = dark ? "text-cream" : "text-charcoal";
  const navTone = dark ? "text-cream/80 hover:text-gold" : "text-charcoal/80 hover:text-terracotta";
  const copy = locale === "es"
    ? { main: "Navegación principal", mobile: "Navegación móvil", home: "Inicio de Lumina Summit Growth", apply: "Solicita una Auditoría", open: "Abrir menú", close: "Cerrar menú" }
    : { main: "Main navigation", mobile: "Mobile navigation", home: "Lumina Summit Growth home", apply: "Apply for an Audit", open: "Open menu", close: "Close menu" };

  function isCurrent(href: string) {
    if (href.includes("#")) return false;
    return pathname === localizedPath(href, locale);
  }

  return <header className="absolute inset-x-0 top-0 z-30">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8" aria-label={copy.main}>
      <Link href={localizedPath("/", locale)} aria-label={copy.home}><BrandLockup inverse={dark} compact /></Link>
      <div className="hidden items-center gap-6 lg:flex">
        {navigation[locale].map((link) => <Link key={link.href} href={localizedPath(link.href, locale)} aria-current={isCurrent(link.href) ? "page" : undefined} className={`border-b py-2 text-[0.68rem] font-medium uppercase tracking-[.14em] transition ${isCurrent(link.href) ? "border-gold text-gold" : `border-transparent ${navTone}`}`}>{link.label}</Link>)}
        <LanguageSwitcher locale={locale} dark={dark} />
        <Link href={localizedPath("/free-audit", locale)} className={`inline-flex min-h-11 items-center border border-gold/70 px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[.14em] transition hover:bg-gold hover:text-charcoal ${tone}`}>{copy.apply}</Link>
      </div>
      <div className="flex items-center gap-2 lg:hidden"><LanguageSwitcher locale={locale} dark={dark} /><button type="button" onClick={() => setOpen(!open)} className={`${tone} inline-flex h-11 w-11 items-center justify-center border ${dark ? "border-cream/15" : "border-charcoal/15"}`} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? copy.close : copy.open}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    </nav>
    {open && <nav id="mobile-navigation" aria-label={copy.mobile} className="mx-4 border border-cream/15 bg-charcoal p-5 shadow-2xl lg:hidden">
      {navigation[locale].map((link) => <Link key={link.href} onClick={() => setOpen(false)} href={localizedPath(link.href, locale)} aria-current={isCurrent(link.href) ? "page" : undefined} className={`flex min-h-12 items-center justify-between border-b border-cream/10 text-sm ${isCurrent(link.href) ? "text-gold" : "text-cream"}`}><span>{link.label}</span><span aria-hidden="true" className="text-gold">→</span></Link>)}
      <Link onClick={() => setOpen(false)} href={localizedPath("/contact", locale)} className="flex min-h-12 items-center justify-between border-b border-cream/10 text-sm text-cream"><span>{locale === "es" ? "Contacto" : "Contact"}</span><span aria-hidden="true" className="text-gold">→</span></Link>
      <Link onClick={() => setOpen(false)} href={localizedPath("/free-audit", locale)} className="mt-5 flex min-h-12 items-center justify-center bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[.14em] text-charcoal transition hover:bg-cream">{copy.apply}</Link>
    </nav>}
  </header>;
}
