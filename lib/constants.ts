import { Bot, ChartNoAxesCombined, LayoutTemplate, MapPinned, Megaphone, Workflow } from "lucide-react";
import type { Service } from "@/types/site";

export const services: Service[] = [
  { number: "01", title: "Local Search Presence", description: "Own the moments your market is searching, from maps to organic results.", icon: MapPinned },
  { number: "02", title: "Conversion Websites", description: "High-consideration digital experiences made to earn trust and generate action.", icon: LayoutTemplate },
  { number: "03", title: "Paid Demand", description: "Disciplined campaigns that turn attention into qualified conversations.", icon: Megaphone },
  { number: "04", title: "AI Automation", description: "Intelligent systems that shorten response times and protect every opportunity.", icon: Bot },
  { number: "05", title: "Revenue Systems", description: "CRM and follow-up infrastructure that makes growth measurable and repeatable.", icon: Workflow },
  { number: "06", title: "Growth Strategy", description: "Clear priorities, sharper decisions, and a real operating plan for scale.", icon: ChartNoAxesCombined },
];

export const industries = ["Roofing", "HVAC", "Plumbing", "Electrical", "Landscaping", "Concrete", "Remodeling", "General Contracting"];
