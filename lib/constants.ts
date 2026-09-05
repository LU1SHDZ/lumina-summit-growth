import { ChartNoAxesCombined, Compass, LayoutTemplate, MapPinned, MessagesSquare, Workflow } from "lucide-react";
import type { Service } from "@/types/site";

export const services: Service[] = [
  { number: "01", title: "Local Search Presence", description: "Own the moments your market is searching, from maps to organic results.", icon: MapPinned },
  { number: "02", title: "Conversion Websites", description: "High-consideration digital experiences made to earn trust and generate action.", icon: LayoutTemplate },
  { number: "03", title: "Lead Capture & Follow-Up", description: "Clear intake and response systems that protect opportunities from inquiry through the next conversation.", icon: MessagesSquare },
  { number: "04", title: "Measurement & Attribution", description: "Practical tracking that shows where demand comes from and what should improve next.", icon: ChartNoAxesCombined },
  { number: "05", title: "Responsible Automation", description: "Thoughtful workflows that reduce delay while keeping judgment, service, and accountability human.", icon: Workflow },
  { number: "06", title: "Growth Strategy", description: "Clear priorities, sharper decisions, and a practical operating plan for sustainable growth.", icon: Compass },
];

export const industries = ["Roofing", "HVAC", "Plumbing", "Electrical", "Landscaping", "Concrete", "Remodeling", "General Contracting"];
