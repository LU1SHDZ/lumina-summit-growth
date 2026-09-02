# English and Spanish localization

Lumina's English pages use the root routes. Spanish pages use the `/es` prefix so every translated page has a stable, shareable URL.

## Route behavior

- `/` maps to `/es`.
- `/start-here` maps to `/es/start-here`, and the same pattern applies to every public route.
- `LanguageSwitcher` reads the current path and links to the equivalent page in the other language.
- Spanish pages declare English and Spanish alternates in page metadata. The sitemap includes reciprocal language alternates for both versions.

## Content architecture

- Shared homepage sections accept a typed `Locale` and keep English and Spanish copy beside the component structure.
- The qualification and contact forms accept a locale while preserving stable English option values for server-side validation and integrations.
- Longer Spanish offer content is maintained in `lib/offers/local-growth-foundation.es.ts`.
- Spanish legal pages are separate content documents because legal language should be reviewed independently rather than generated at runtime.

## Review requirement

The current Spanish copy is production-quality working copy, but it is not legal advice. A qualified attorney should review both language versions of the privacy policy, website terms, and future service agreement before launch.
