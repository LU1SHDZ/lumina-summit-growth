import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/start-here", "/services", "/about", "/work/dyeslo", "/contact", "/free-audit", "/privacy", "/terms"];
  return paths.flatMap((path) => {
    const spanishPath = path === "/" ? "/es" : `/es${path}`;
    const alternates = { languages: { en: `${siteConfig.url}${path}`, es: `${siteConfig.url}${spanishPath}` } };
    const base = { lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : path === "/privacy" || path === "/terms" ? .3 : .8, alternates };
    return [{ url: `${siteConfig.url}${path}`, ...base }, { url: `${siteConfig.url}${spanishPath}`, ...base }];
  });
}
