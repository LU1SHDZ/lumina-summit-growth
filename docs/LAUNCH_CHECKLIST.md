# Lumina Summit Growth launch checklist

This checklist separates work that is technically ready from decisions and integrations that require founder approval. It is the operating gate for a public launch; it is not a substitute for the decision detail in `FOUNDER_DECISIONS.md` or the deployment procedure in `docs/DEPLOYMENT.md`.

## Ready in the repository

- [x] English and Spanish routes for every public page
- [x] Consistent canonical and language-alternate metadata
- [x] Responsive navigation, forms, legal pages, sitemap, robots, and branded not-found recovery
- [x] Real server-side contact and audit endpoints with validation, rate limiting, honeypot protection, and honest failure states
- [x] Provider-neutral conversion-event catalog and structured event logging
- [x] Automated tests, linting, type validation, and production build command
- [x] Baseline response headers for framing, content-type sniffing, referrers, camera, microphone, and geolocation
- [x] Clearly labeled prototype work without fabricated outcomes

## Required before accepting public applications

- [ ] Select the inbox that owns contact and audit responses
- [ ] Verify the Lumina sending domain with the approved email provider
- [ ] Configure `RESEND_API_KEY`, `AUDIT_RECIPIENT_EMAIL`, `CONTACT_RECIPIENT_EMAIL`, and `AUDIT_FROM_EMAIL`
- [ ] Submit English and Spanish test applications from the production preview
- [ ] Confirm delivery, reply-to behavior, rate-limit behavior, error state, and success state
- [ ] Assign one person and a simple response workflow for every application
- [ ] Confirm that privacy and website terms accurately reflect the providers enabled at launch

## Required before connecting a production domain

- [ ] Approve the hosting platform and production deployment
- [ ] Confirm ownership and DNS access for `luminasummitgrowth.com`
- [ ] Set the production environment variables without committing secrets
- [ ] Verify every public route on mobile and desktop in a preview deployment
- [ ] Verify canonical URLs, language alternates, `/robots.txt`, and `/sitemap.xml` on the production domain
- [ ] Add the domain to Google Search Console after DNS is live
- [ ] Configure deployment and server-error alerts
- [ ] Document the rollback owner and test one preview-to-production promotion

## Founder approval required before implementation

- [ ] Public Sprint price, pricing presentation, and any deposit language
- [ ] Published Sprint duration or delivery calendar
- [ ] Geographic territory claims or location landing pages
- [ ] Automatic qualification thresholds or scoring
- [ ] CRM, scheduling, analytics, payment, proposal, or contract provider
- [ ] Cookie or analytics-consent experience
- [ ] Guarantees, risk reversals, outcome claims, testimonials, or case-study performance claims
- [ ] Material changes to positioning, core navigation, logo treatment, or the primary conversion journey

## First operating validation

- [ ] Run at least five founder-reviewed test applications using realistic service-business scenarios
- [ ] Record where applicants hesitate, abandon, misunderstand, or need clarification
- [ ] Compare the submitted context with what is actually useful during the first conversation
- [ ] Revise questions only when the review identifies a repeatable problem
- [ ] Keep pricing-test notes separate until the founder approves a publishable model

## Definition of launch-ready

The site is launch-ready when a real visitor can discover the offer, submit an application in either language, receive an honest success or failure state, and enter an owned response process with tested delivery and monitoring. Pricing does not need to be public, but every published claim and enabled provider must be accurate.
