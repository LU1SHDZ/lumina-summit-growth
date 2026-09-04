import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DyesloShowcase } from "@/components/work/dyeslo-showcase";

export const metadata: Metadata = {
  title: "Concepto de Sitio Web D’Yeslo",
  description: "Una tienda digital y proyecto de narrativa de marca en desarrollo para la artista de Athens D’Yeslo.",
  alternates: {
    canonical: "/es/work/dyeslo",
    languages: { "en-US": "/work/dyeslo", "es-US": "/es/work/dyeslo" },
  },
};

export default function SpanishDyesloWorkPage() {
  return (
    <main id="main-content" lang="es">
      <section className="relative overflow-hidden bg-charcoal px-6 pb-24 pt-40 text-cream lg:px-8 lg:pb-32">
        <SiteHeader locale="es" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Trabajo en desarrollo / 001</p>
          <h1 className="mt-6 font-display text-7xl leading-[.82] sm:text-9xl">D’Yeslo</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/70">
            Traducir la práctica única de una artista de Athens en una experiencia digital con la misma calidez material, historia y sentido de descubrimiento.
          </p>
          <p className="mt-6 inline-flex border border-gold/40 px-4 py-2 text-xs uppercase tracking-[.14em] text-gold">
            Prototipo — resultados aún no medidos
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">El contexto</p>
            <p className="mt-5 text-sm leading-6 text-charcoal/70">D’Yeslo transforma vidrio recuperado y materiales encontrados en arte funcional, vendido mediante mercados locales y relaciones directas.</p>
          </div>
          <div>
            <p className="eyebrow">La oportunidad</p>
            <p className="mt-5 text-sm leading-6 text-charcoal/70">Crear una tienda digital que conserve el carácter humano y local del trabajo mientras facilita explorar productos, proceso y ubicaciones.</p>
          </div>
          <div>
            <p className="eyebrow">Alcance actual</p>
            <p className="mt-5 text-sm leading-6 text-charcoal/70">Narrativa de marca, diseño responsivo, arquitectura de colección, historias de producto, descubrimiento de mercados y desarrollo del prototipo.</p>
          </div>
        </div>
      </section>

      <DyesloShowcase locale="es" />

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Dirección de diseño</p>
            <h2 className="mt-5 font-display text-6xl leading-[.88]">Deja que el material guíe.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-charcoal/70">
            <p>El prototipo usa tipografía editorial, ritmo generoso, fotografía táctil e interacciones discretas para presentar cada objeto con procedencia, no como inventario anónimo.</p>
            <p>Los flujos de comercio permanecen intencionalmente provisionales mientras se confirman disponibilidad, cumplimiento, precios y afirmaciones aprobadas. Ese límite mantiene útil el concepto sin presentar suposiciones como hechos.</p>
            <Link href="/es/contact" className="inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">Hablemos de un proyecto similar →</Link>
          </div>
        </div>
      </section>
      <SiteFooter locale="es" />
    </main>
  );
}
