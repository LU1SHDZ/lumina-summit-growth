import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Lumina Summit Growth | AI-Powered Local Growth", template: "%s | Lumina Summit Growth" },
  description: "AI-powered growth systems for ambitious local service businesses.",
  openGraph: { type: "website", locale: "en_US", siteName: "Lumina Summit Growth", title: "Lumina Summit Growth", description: "AI-powered growth systems for ambitious local service businesses." },
  twitter: { card: "summary_large_image", title: "Lumina Summit Growth", description: "AI-powered growth systems for ambitious local service businesses." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${cormorant.variable} ${inter.variable}`}><body className="font-sans antialiased"><a href="#main-content" className="sr-only fixed left-4 top-4 z-50 bg-charcoal px-4 py-3 text-sm text-cream focus:not-sr-only">Skip to content</a>{children}</body></html>;
}
