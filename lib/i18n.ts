export type Locale = "en" | "es";

export const languageNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function localizedPath(path: string, locale: Locale) {
  if (locale === "en") {
    return path;
  }

  if (path === "/") {
    return "/es";
  }

  if (path.startsWith("/#")) {
    return `/es${path.slice(1)}`;
  }

  return `/es${path}`;
}

export function pathForLocale(pathname: string, locale: Locale) {
  const englishPath = pathname === "/es" ? "/" : pathname.replace(/^\/es(?=\/)/, "");
  return localizedPath(englishPath, locale);
}
