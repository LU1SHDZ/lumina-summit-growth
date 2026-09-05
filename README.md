# Lumina Summit Growth

Lumina Summit Growth is a founder-led, AI-enabled growth company initially serving established local and home-service businesses. The application is being built as commercial and delivery infrastructure—not only a marketing website.

The current working offer is the **Local Growth Foundation Sprint**, a consultative diagnostic that identifies customer-acquisition and conversion constraints and culminates in an evidence-backed, prioritized growth roadmap.

Read `VISION.md` for company direction, `FOUNDER_DECISIONS.md` before implementing unresolved commercial or vendor choices, and `docs/LAUNCH_CHECKLIST.md` before publishing the site.

## Technology stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Lucide icons
- Node built-in test runner
- Server route handlers for lead delivery and provider-neutral events
- Optional Resend email delivery and optional GA4 forwarding

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The public experience is available in English and Spanish. Spanish pages use the `/es` prefix, and the persistent EN/ES control keeps visitors on the equivalent route when they switch languages. See `docs/LOCALIZATION.md`.

## Commands

- `npm run dev` — local development server
- `npm run build` — optimized production build
- `npm start` — serve the production build
- `npm run lint` — ESLint
- `npm run test` — validation/security unit tests
- `npm run check` — lint, test, and production build quality gate

## Environment variables

Never commit real credentials. See `.env.example`.

- `RESEND_API_KEY` — server-only Resend API key
- `AUDIT_RECIPIENT_EMAIL` — private audit-application recipient
- `CONTACT_RECIPIENT_EMAIL` — optional separate contact recipient
- `AUDIT_FROM_EMAIL` — verified sender identity
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4 identifier; analytics provider is not yet a final founder decision

Without Resend configuration, lead routes return an honest configuration error and never display false success.

## Project structure

- `app/` — routes, metadata, APIs, sitemap, robots
- `components/` — shared brand UI, layouts, homepage sections, and forms
- `lib/` — offer configuration, qualification validation, audit framework, analytics event model, and integration boundaries
- `types/` — shared TypeScript contracts
- `public/` — public brand and approved portfolio imagery
- `tests/` — automated validation and security tests
- `docs/audit-framework/` — evolving Lumina Growth Audit method and blank client-report template
- `docs/internal/` — non-public operating workflows and analytics architecture; never store client secrets here

## Current routes

- `/` — brand and positioning
- `/start-here` — Local Growth Foundation Sprint commercial offer
- `/free-audit` — qualification application
- `/services` — capability reference
- `/about` — founder/company presence
- `/work/dyeslo` — clearly labeled in-development project narrative
- `/contact` — general inquiry
- `/privacy` and `/terms` — website legal foundation
- `/es` and `/es/...` — complete Spanish versions of every public route above

## Current project status

Phase 2 establishes the commercial system: offer architecture, qualification application, audit method, founder-led brand presence, internal sales workflows, analytics event model, founder decision register, and source-of-truth vision.

The following remain deliberately unimplemented pending founder decisions or external integration:

- final Sprint price and duration;
- automatic qualification and scheduling;
- CRM synchronization;
- proposal/contract workflow;
- payment collection;
- production analytics provider and consent model;
- offline funnel reconciliation;
- ongoing-retainer packages.

Do not implement these by assumption. Update `FOUNDER_DECISIONS.md`, then modify the relevant provider boundary.

## Deployment

See `docs/DEPLOYMENT.md`. The current recommendation is a Vercel preview/production workflow, but do not add hosting-specific state or publish without founder approval.
