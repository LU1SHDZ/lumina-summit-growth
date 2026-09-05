import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { FreeAuditForm } from "@/components/free-audit-form";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Solicitud de Diagnóstico Inicial Gratuito",
  description: "Solicita una primera revisión enfocada para detectar dónde tu negocio local puede estar perdiendo oportunidades digitales.",
  alternates: { canonical: "/es/free-audit", languages: { "en-US": "/free-audit", "es-US": "/es/free-audit", "x-default": "/free-audit" } },
};

export default function SpanishFreeAuditPage() {
  return <main id="main-content" lang="es" className="min-h-screen bg-[#eee7d9]">
    <div className="px-6 py-7 lg:px-8"><div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between gap-5"><Link href="/es" aria-label="Inicio de Lumina Summit Growth"><BrandLockup compact /></Link><div className="flex items-center gap-4"><LanguageSwitcher locale="es" dark={false}/><Link href="/es/services" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-charcoal/65 transition hover:text-terracotta"><ArrowLeft size={14}/> <span className="hidden sm:inline">Revisa servicios y precios</span></Link></div></header>
      <div className="grid min-w-0 gap-12 py-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-14 lg:py-24"><section className="min-w-0 lg:sticky lg:top-10 lg:self-start"><p className="eyebrow">Diagnóstico Inicial gratuito</p><h1 className="mt-6 text-pretty font-display text-5xl leading-[.84] tracking-[-.035em] sm:text-7xl">Una primera<br/>revisión enfocada.</h1><p className="mt-7 max-w-md text-base leading-7 text-charcoal/70">Comparte lo esencial y la limitación que percibes. Lumina revisará si tu sitio, visibilidad local o recorrido de conversión muestran una oportunidad evidente que valga la pena atender.</p><a href="#application" className="mt-6 inline-flex min-h-11 items-center border-b border-terracotta text-xs font-bold uppercase tracking-[.14em] lg:hidden">Comienza la solicitud ↓</a><div className="mt-8 space-y-4 border-t border-charcoal/15 pt-6 lg:mt-10 lg:space-y-5 lg:pt-7">{["Algunas observaciones de alto valor", "Los detalles opcionales se pueden omitir", "Revisado personalmente, sin calificación automática"].map((item)=><p key={item} className="flex items-start gap-3 text-sm leading-6 text-charcoal/75"><Check size={16} className="mt-1 shrink-0 text-terracotta"/>{item}</p>)}</div><p className="mt-7 text-xs leading-5 text-charcoal/50">No es una auditoría completa, una estrategia SEO integral, una hoja de ruta de implementación ni consultoría gratuita ilimitada. No existe obligación ni secuencia automática de ventas.</p></section><FreeAuditForm locale="es"/></div>
    </div></div><SiteFooter locale="es"/>
  </main>;
}
