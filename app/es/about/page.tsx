import type { Metadata } from "next";
import Link from "next/link";
import { FounderPhotoCollage } from "@/components/founder/founder-photo-collage";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = { title: "Sobre Luis Hernandez y Lumina Summit Growth", description: "Conoce al fundador de Lumina Summit Growth y los principios que guían esta práctica de crecimiento.", alternates: { canonical: "/es/about", languages: { "en-US": "/about", "es-US": "/es/about", "x-default": "/about" } } };

export default function SpanishAboutPage() {
  return (
    <main id="main-content" lang="es">
      <section className="relative overflow-hidden bg-charcoal px-6 pb-24 pt-40 text-cream lg:px-8 lg:pb-32">
        <SiteHeader locale="es" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-gold">Sobre Lumina Summit Growth</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[.82] sm:text-8xl">Un socio de crecimiento<br /><em className="font-normal text-gold">construido para el trabajo.</em></h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-cream/70">Estrategia e implementación lideradas por el fundador para negocios locales de servicios que necesitan que su visibilidad, sitio web, seguimiento y medición funcionen como un solo sistema.</p>
        </div>
      </section>

      <section id="founder-story" className="scroll-mt-6 bg-[#eee7d9] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <FounderPhotoCollage locale="es" size="full" />
          <div className="lg:pl-8">
            <p className="eyebrow">Luis Hernandez / Fundador</p>
            <h2 className="mt-5 text-pretty font-display text-5xl leading-[.9] sm:text-6xl">El trabajo es personal antes de volverse técnico.</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-charcoal/70">
              <p>Lumina comenzó con una pregunta que Luis sigue haciéndose: ¿qué se vuelve posible cuando las personas ambiciosas finalmente pueden ver con claridad el camino frente a ellas?</p>
              <p>Como fundador hispano, está construyendo la compañía con la convicción de que la estrategia sofisticada y la tecnología no deben sentirse reservadas para las organizaciones más grandes. Deben ayudar a los dueños locales a proteger lo que han construido, crear oportunidades para quienes dependen de ellos y avanzar con mayor confianza.</p>
              <p>Por eso su trabajo comienza escuchando y por eso el estándar de Lumina no es cuánto se puede vender, sino con cuánta honestidad se puede servir. La ambición es real: construir algo excelente, duradero y expansivo sin olvidar dónde comenzó el ascenso ni quiénes lo hicieron posible.</p>
            </div>
            <blockquote className="mt-9 border-l-2 border-gold pl-6">
              <p className="font-display text-3xl leading-tight text-charcoal">“No para ser servido, sino para servir.”</p>
              <footer className="mt-3 text-xs uppercase tracking-[.14em] text-charcoal/55">El principio que guía el trabajo de Lumina</footer>
            </blockquote>
            <a href="https://www.linkedin.com/in/luis2hernandez" target="_blank" rel="noreferrer" className="mt-9 inline-flex border-b border-terracotta pb-2 text-xs font-bold uppercase tracking-[.14em]">Conecta con Luis en LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Principios de trabajo</p>
            <h2 className="mt-5 text-pretty font-display text-5xl leading-[.9] sm:text-6xl">Cómo la confianza se vuelve parte del trabajo.</h2>
            <p className="mt-7 max-w-md text-base leading-7 text-charcoal/65">Lumina es honesta sobre su etapa inicial. Su prueba vendrá del trabajo documentado, alianzas cuidadosas y resultados ganados con el tiempo.</p>
          </div>
          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {[["01","Claridad antes que tácticas"],["02","Sistemas sobre silos"],["03","Evidencia sobre espectáculo"],["04","Tecnología al servicio de las personas"]].map(([number,value]) => (
              <p key={number} className="grid grid-cols-[3rem_1fr] gap-5 py-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-2xl text-terracotta">{number}</span>
                <span className="font-display text-3xl leading-none sm:text-4xl">{value}</span>
              </p>
            ))}
            <div className="py-7">
              <Link href="/es/contact" className="inline-flex min-h-12 items-center bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-cream transition hover:bg-terracotta">Inicia una conversación →</Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter locale="es" />
    </main>
  );
}
