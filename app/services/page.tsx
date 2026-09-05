import type { Metadata } from "next";
import { ServicesPricingPage } from "@/components/services/services-pricing-page";

export const metadata: Metadata = {
  title: "Services and Pricing for Local Business Growth",
  description: "Transparent starting prices for Lumina growth diagnostics, local SEO foundations, conversion-focused websites, and ongoing growth partnerships.",
  alternates: { canonical: "/services", languages: { "en-US": "/services", "es-US": "/es/services", "x-default": "/services" } },
};

export default function ServicesPage() {
  return <ServicesPricingPage />;
}
