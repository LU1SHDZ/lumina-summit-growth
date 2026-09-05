import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";

export default function NotFound() {
  return (
    <main id="main-content" className="relative flex min-h-screen items-center overflow-hidden bg-charcoal px-6 py-16 text-cream lg:px-8">
      <div className="grain absolute inset-0 opacity-20" />
      <div aria-hidden="true" className="absolute -right-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-gold/20" />
      <div className="relative mx-auto w-full max-w-7xl">
        <Link href="/" aria-label="Lumina Summit Growth home">
          <BrandLockup inverse />
        </Link>
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="font-display text-8xl leading-none text-gold sm:text-9xl">404</p>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">The path ends here / El camino termina aquí</p>
            <h1 className="mt-5 text-pretty font-display text-5xl leading-[0.86] sm:text-7xl">Let’s get you back on the right route.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-cream/65">This page may have moved or the address may be incomplete. Return home, explore the Foundation Sprint, or continue in Spanish.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/" className="inline-flex min-h-12 items-center justify-center bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition hover:bg-cream">Return home →</Link>
              <Link href="/start-here" className="inline-flex min-h-12 items-center justify-center border border-cream/25 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-gold hover:text-gold">Explore the Sprint</Link>
              <Link href="/es" lang="es" className="inline-flex min-h-12 items-center justify-center border border-cream/25 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-gold hover:text-gold">Continuar en español</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
