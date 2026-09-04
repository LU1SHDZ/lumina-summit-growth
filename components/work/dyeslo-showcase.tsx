import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function DyesloShowcase({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";

  return (
    <section id="project-views" className="scroll-mt-6 bg-[#eee7d9] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 border-b border-charcoal/15 pb-8 md:grid-cols-[0.55fr_1.45fr] md:items-end">
          <p className="eyebrow">
            {spanish ? "Vistas seleccionadas" : "Selected project views"}
          </p>
          <p className="max-w-2xl text-sm leading-6 text-charcoal/65 md:justify-self-end">
            {spanish
              ? "Una vista clara de la tienda digital y un detalle del producto mantienen la atención en el sistema de diseño, la historia y el trabajo artesanal."
              : "One clear storefront view and one focused product detail keep the attention on the design system, the story, and the handmade work."}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.45fr_0.55fr] lg:items-stretch">
          <figure>
            <div className="overflow-hidden bg-charcoal p-2 shadow-[12px_12px_0_#C89B3C] sm:p-3">
              <div className="flex items-center gap-1.5 border-b border-cream/10 px-2 pb-2 sm:px-3 sm:pb-3" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="h-1.5 w-1.5 rounded-full bg-cream/35" />
                <span className="ml-3 text-[0.55rem] uppercase tracking-[0.18em] text-cream/40">D’Yeslo / Home</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/work/dyeslo/website-showcase.jpg"
                  alt={spanish ? "Vista de la página principal del concepto de sitio web de D’Yeslo" : "D’Yeslo website concept homepage preview"}
                  fill
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <figcaption className="mt-5 flex items-center justify-between gap-5 text-xs text-charcoal/55">
              <span>{spanish ? "Concepto de tienda responsiva" : "Responsive storefront concept"}</span>
              <span className="font-display text-lg text-terracotta">01</span>
            </figcaption>
          </figure>

          <figure className="self-end">
            <div className="relative aspect-[16/9] overflow-hidden bg-charcoal lg:aspect-[4/3]">
              <Image
                src="/images/work/dyeslo/bottle.png"
                alt={spanish ? "Escultura funcional de botella reutilizada de D’Yeslo" : "D’Yeslo functional artwork made from a reclaimed bottle"}
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover object-[center_58%]"
              />
            </div>
            <figcaption className="mt-5 flex items-center justify-between gap-5 text-xs text-charcoal/55">
              <span>{spanish ? "Historia del producto guiada por el material" : "Material-led product storytelling"}</span>
              <span className="font-display text-lg text-terracotta">02</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
