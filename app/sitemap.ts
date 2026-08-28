import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/services", "/free-audit"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : .8 })); }
