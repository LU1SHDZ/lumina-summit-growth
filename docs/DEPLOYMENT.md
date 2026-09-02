# Deployment and operations

## Recommended platform

Deploy the repository to Vercel as a Next.js project. Use Node.js 20 or newer and the default commands (`npm install`, `npm run build`). The production domain is expected to be `https://luminasummitgrowth.com`.

## Required configuration

Copy the variables documented in `.env.example` into the deployment environment. Never commit real keys.

- `RESEND_API_KEY`: Resend API key authorized to send from the Lumina domain.
- `AUDIT_RECIPIENT_EMAIL`: private inbox that receives growth-audit requests.
- `CONTACT_RECIPIENT_EMAIL`: optional separate inbox for general contact requests; falls back to the audit recipient.
- `AUDIT_FROM_EMAIL`: verified sender identity. Verify the domain in Resend before launch.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4 property ID.

The audit form deliberately returns HTTP 503 when email delivery is not configured. It never displays a false success state.

## Verification checklist

1. Run `npm run check` locally.
2. Create a preview deployment and inspect `/`, `/start-here`, `/industries/roofing`, `/free-audit`, `/services`, `/about`, `/work/dyeslo`, `/contact`, `/privacy`, and `/terms` on desktop and mobile.
3. Submit a test audit request and verify inbox delivery, reply-to behavior, and the success state.
4. Confirm `landing_page_view`, `audit_form_started`, `audit_form_submitted`, and `audit_form_error` in platform logs and in the chosen analytics provider when configured.
5. Confirm `/robots.txt` and `/sitemap.xml` use the production domain.
6. Add the production domain to Google Search Console after DNS is live.

## Monitoring and rollback

Unhandled request errors and conversion events are emitted as structured JSON in platform logs. Configure Vercel log alerts before launch. A later production phase can route the same error boundary to Sentry without changing form behavior.

Keep production deployments connected to the `main` branch. Use preview deployments for every pull request and roll back from the Vercel deployment history if a production verification fails.
