import type { Metadata } from "next";
import { Homepage } from "@/components/homepage";
import { OrganizationSchema } from "@/components/seo/organization-schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "es-US": "/es", "x-default": "/" },
  },
};

export default function Page() { return <><OrganizationSchema /><Homepage /></>; }
