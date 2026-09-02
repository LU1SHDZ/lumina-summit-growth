import type { Metadata } from "next";
import { Homepage } from "@/components/homepage";
import { OrganizationSchema } from "@/components/seo/organization-schema";

export const metadata: Metadata = {
  title: "Sistemas de Crecimiento para Negocios Locales",
  description: "Un socio de crecimiento humano y tecnológico para negocios locales de servicios ambiciosos.",
  alternates: { canonical: "/es", languages: { "en-US": "/", "es-US": "/es" } },
};

export default function SpanishHomepage() {
  return <><OrganizationSchema /><Homepage locale="es" /></>;
}
