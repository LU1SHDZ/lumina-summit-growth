import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { Analytics } from "@/components/analytics";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Lumina Summit Growth | Growth Systems for Local Businesses", template: "%s | Lumina Summit Growth" },
  description: "A human-first, technology-forward growth partner for ambitious local service businesses.",
  openGraph: { type: "website", locale: "en_US", siteName: "Lumina Summit Growth", title: "Lumina Summit Growth", description: "Founder-led growth systems for established local service businesses.", images: [{ url: "/images/brand/summit-path.png", width: 1536, height: 1024, alt: "A deliberate path ascending toward a mountain summit" }] },
  twitter: { card: "summary_large_image", title: "Lumina Summit Growth", description: "Founder-led growth systems for established local service businesses.", images: ["/images/brand/summit-path.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${cormorant.variable} ${inter.variable}`}><body className="font-sans antialiased"><a href="#main-content" className="sr-only fixed left-4 top-4 z-50 bg-charcoal px-4 py-3 text-sm text-cream focus:not-sr-only">Skip to content</a>{children}<Analytics /></body></html>;
}
