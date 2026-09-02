import Link from "next/link";

const footerLinks = [
  { label: "Start Here", href: "/start-here" }, { label: "Roofing", href: "/industries/roofing" }, { label: "About", href: "/about" },
  { label: "Work", href: "/work/dyeslo" }, { label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" },
] as const;

export function SiteFooter() {
  return <footer className="bg-charcoal px-6 py-12 text-cream/65 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><Link href="/" className="font-display text-3xl text-cream">Lumina <span className="text-gold">Summit</span></Link><p className="mt-3 text-xs leading-5">Human-first, technology-forward growth systems for ambitious local businesses.</p></div><nav aria-label="Footer navigation" className="flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-xs">{footerLinks.map((link)=><Link key={link.href} href={link.href} className="hover:text-gold">{link.label}</Link>)}</nav><div className="border-t border-cream/10 pt-6 text-xs md:col-span-2 md:flex md:justify-between"><p>© {new Date().getFullYear()} Lumina Summit Growth</p><p className="mt-2 text-cream/40 md:mt-0">Founder-led. Built with intention.</p></div></div></footer>;
}
