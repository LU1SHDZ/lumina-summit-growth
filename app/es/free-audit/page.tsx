import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { FreeAuditForm } from "@/components/free-audit-form";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Solicitud de Auditoría de Crecimiento",
  description: "Solicita una revisión enfocada del sistema de crecimiento de tu negocio local de servicios.",
  alternates: { canonical: "/es/free-audit", languages: { "en-US": "/free-audit", "es-US": "/es/free-audit", "x-default": "/free-audit" } },
};

export default function SpanishFreeAuditPage() {
  return <main id="main-content" lang="es" className="min-h-screen bg-[#eee7d9]">
    <div className="px-6 py-7 lg:px-8"><div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between gap-5"><Link href="/es" aria-label="Inicio de Lumina Summit Growth"><BrandLockup compact /></Link><div className="flex items-center gap-4"><LanguageSwitcher locale="es" dark={false}/><Link href="/es/start-here" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-charcoal/65 transition hover:text-terracotta"><ArrowLeft size={14}/> <span className="hidden sm:inline">Revisa el Sprint</span></Link></div></header>
      <div className="grid min-w-0 gap-12 py-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-14 lg:py-24"><section className="min-w-0 lg:sticky lg:top-10 lg:self-start"><p className="eyebrow">Auditoría de crecimiento / Solicitud de calificación</p><h1 className="mt-6 text-pretty font-display text-5xl leading-[.84] tracking-[-.035em] sm:text-7xl">Contexto antes<br/>de recomendaciones.</h1><p className="mt-7 max-w-md text-base leading-7 text-charcoal/70">Esta solicitud nos ayuda a entender tu negocio y decidir si el Sprint de Fundamentos de Crecimiento Local es un siguiente paso responsable.</p><a href="#application" className="mt-6 inline-flex min-h-11 items-center border-b border-terracotta text-xs font-bold uppercase tracking-[.14em] lg:hidden">Comienza la solicitud ↓</a><div className="mt-8 space-y-4 border-t border-charcoal/15 pt-6 lg:mt-10 lg:space-y-5 lg:pt-7">{["Revisada por una persona, no calificada por un algoritmo sin validar", "Utilizada para preparar una primera conversación más útil", "Sin garantía, obligación ni secuencia automática de ventas"].map((item)=><p key={item} className="flex items-start gap-3 text-sm leading-6 text-charcoal/75"><Check size={16} className="mt-1 shrink-0 text-terracotta"/>{item}</p>)}</div><p className="mt-7 text-xs leading-5 text-charcoal/50">El formulario pregunta sobre inversión, tamaño del equipo y toma de decisiones únicamente para entender la compatibilidad. Los criterios finales de calificación aún no se han establecido.</p></section><FreeAuditForm locale="es"/></div>
    </div></div><SiteFooter locale="es"/>
  </main>;
}
