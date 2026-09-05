import type { Metadata } from "next";
import { ServicesPricingPage } from "@/components/services/services-pricing-page";

export const metadata: Metadata = {
  title: "Servicios y Precios para el Crecimiento de Negocios Locales",
  description: "Precios iniciales transparentes para diagnósticos, fundamentos de SEO local, sitios web de conversión y alianzas de crecimiento continuo.",
  alternates: { canonical: "/es/services", languages: { "en-US": "/services", "es-US": "/es/services", "x-default": "/services" } },
};

export default function SpanishServicesPage() {
  return <ServicesPricingPage locale="es" />;
}
