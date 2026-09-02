import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/start-here", "/industries/roofing", "/services", "/about", "/work/dyeslo", "/contact", "/free-audit", "/privacy", "/terms"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : path === "/privacy" || path === "/terms" ? .3 : .8 })); }
