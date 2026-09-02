import type { Metadata } from "next";
import { IndustryPage } from "@/components/industry-page";
import { roofingIndustry } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Growth Systems for Roofing Companies",
  description: "A consultative growth-system approach to roofing visibility, trust, estimate requests, lead response, follow-up, and attribution.",
};

export default function RoofingPage() {
  return <IndustryPage industry={roofingIndustry}/>;
}
