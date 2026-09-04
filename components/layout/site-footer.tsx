import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

const footerLinks = {
  en: [
    { label: "Start Here", href: "/start-here" }, { label: "Services", href: "/services" },
    { label: "About", href: "/about" }, { label: "Work", href: "/work/dyeslo" },
    { label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" },
  ],
  es: [
    { label: "Comienza Aquí", href: "/start-here" }, { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" }, { label: "Trabajo", href: "/work/dyeslo" },
    { label: "Contacto", href: "/contact" }, { label: "Privacidad", href: "/privacy" }, { label: "Términos", href: "/terms" },
  ],
} as const;

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const copy = locale === "es"
    ? { home: "Inicio de Lumina Summit Growth", description: "Sistemas de crecimiento humanos y tecnológicos para negocios locales ambiciosos.", navigation: "Navegación del pie de página", note: "Liderada por su fundador. Construida con intención." }
    : { home: "Lumina Summit Growth home", description: "Human-first, technology-forward growth systems for ambitious local businesses.", navigation: "Footer navigation", note: "Founder-led. Built with intention." };

  return <footer className="bg-charcoal px-6 py-12 text-cream/65 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><Link href={localizedPath("/", locale)} aria-label={copy.home}><BrandLockup inverse /></Link><p className="mt-4 text-xs leading-5">{copy.description}</p></div><div className="flex flex-col items-start gap-5 md:items-end"><nav aria-label={copy.navigation} className="flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-xs">{footerLinks[locale].map((link)=><Link key={link.href} href={localizedPath(link.href, locale)} className="hover:text-gold">{link.label}</Link>)}</nav><LanguageSwitcher locale={locale} /></div><div className="border-t border-cream/10 pt-6 text-xs md:col-span-2 md:flex md:justify-between"><p>© {new Date().getFullYear()} Lumina Summit Growth</p><p className="mt-2 text-cream/40 md:mt-0">{copy.note}</p></div></div></footer>;
}
