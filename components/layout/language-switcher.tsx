"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { pathForLocale } from "@/lib/i18n";

export function LanguageSwitcher({ locale, dark = true }: { locale: Locale; dark?: boolean }) {
  const pathname = usePathname();
  const border = dark ? "border-cream/20" : "border-charcoal/20";
  const muted = dark ? "text-cream/55 hover:text-cream" : "text-charcoal/55 hover:text-charcoal";
  const active = dark ? "bg-cream text-charcoal" : "bg-charcoal text-cream";

  return (
    <div role="group" aria-label={locale === "es" ? "Selección de idioma" : "Language selection"} className={`flex border ${border} p-0.5`}>
      {(["en", "es"] as const).map((language) => (
        <Link
          key={language}
          href={pathForLocale(pathname, language)}
          hrefLang={language}
          lang={language}
          aria-current={locale === language ? "page" : undefined}
          className={`px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] transition ${locale === language ? active : muted}`}
        >
          {language}
        </Link>
      ))}
    </div>
  );
}
