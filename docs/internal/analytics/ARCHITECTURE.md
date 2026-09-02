# Analytics architecture

## Current state

The application has a provider-neutral browser event function and a same-origin `/api/events` endpoint that writes structured JSON to server logs. If `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured, the same implemented browser events are also forwarded to GA4.

Implemented events:

- `landing_page_view` on the homepage, Start Here page, and industry template
- `audit_form_started`
- `audit_form_submitted` after confirmed server delivery
- `audit_form_error`
- contact-form completion/error events

`landing_page_view` records only bounded acquisition context: landing-page type, industry identifier when relevant, referrer hostname, and UTM source/medium/campaign. It does not send full referrer URLs or form content.

## Canonical funnel

The canonical event catalog lives in `lib/analytics-events.ts`.

| Event | Status | Required system |
|---|---|---|
| `landing_page_view` | Implemented | Website |
| `audit_form_started` | Implemented | Website |
| `audit_form_submitted` | Implemented | Website + email delivery |
| `qualified_application` | Blocked | Founder-approved thresholds + reviewed lead record/CRM |
| `discovery_call_scheduled` | Blocked | Scheduling provider or reviewed CRM update |
| `proposal_sent` | Blocked | Proposal workflow/CRM |
| `client_closed` | Blocked | Executed agreement plus CRM/payment reconciliation |

Blocked events must not be emitted from public UI buttons merely to make the funnel appear complete.

## Provider options

### GA4

Pros: broad ecosystem, advertising integration, flexible reports. Cons: configuration complexity, consent/privacy considerations, and a UI that can obscure simple operating questions.

### Plausible

Pros: simple, privacy-focused, understandable traffic reporting. Cons: less flexible lifecycle analysis and fewer advertising integrations.

### PostHog

Pros: strong event analysis and later product capabilities. Cons: likely broader than the current consultative website requirement.

### Structured platform logs

Pros: already working, provider-neutral, useful for verification. Cons: poor long-term reporting, retention, identity reconciliation, and routine business use.

## Recommendation

Keep the canonical event names and definitions independent of a vendor. Use structured logs for prototype verification. Before paid acquisition, the founder should choose GA4 or Plausible, define consent requirements, retention, internal access, and a QA checklist.

## Source and identity

- Preserve first-touch UTM/referrer context when a visitor applies, once privacy and CRM decisions are approved.
- Never store form content inside analytics events.
- Do not attempt cross-device identity stitching during the prototype phase.
- Reconcile web events with reviewed application, scheduling, proposal, agreement, and payment records in the eventual CRM/system of record.

## Quality assurance

1. Verify each event fires once at the intended action.
2. Confirm failed delivery does not emit completion.
3. Check UTM/referrer sanitization.
4. Test direct, referral, organic, and campaign visits.
5. Document internal/test-traffic filtering.
6. Reconcile counts against server delivery records.
7. Version event-definition changes in Git.
