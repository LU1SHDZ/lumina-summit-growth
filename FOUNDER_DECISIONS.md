# Founder Decisions

This register prevents unresolved commercial and operational choices from becoming accidental product decisions. Update the status and rationale when a decision is made.

## 1. Initial pricing

**Status:** Founder testing in progress. No price is approved for public display.

1. **Decision required:** Pricing model and investment for the Local Growth Foundation Sprint.
2. **Why it matters:** Determines qualification, sales expectations, scope discipline, capacity, and public offer copy.
3. **Recommended options:** Fixed fee after a consistent scope; tiered fixed fee by business complexity; paid diagnostic credited toward later implementation.
4. **Pros/cons:** Fixed pricing is clear but requires stable scope. Tiers handle complexity but can confuse buyers. A credited diagnostic lowers perceived duplication but can pressure implementation economics.
5. **Engineering/product recommendation:** Stabilize one repeatable Sprint scope with 3–5 real deliveries before publishing a fixed public price. Store the approved display value in `lib/offers/local-growth-foundation.ts`.
6. **Blocked implementation:** Public pricing, payment collection, price-based form qualification, and proposal totals.

## 2. Exact Sprint duration

1. **Decision required:** Calendar duration and founder/team capacity per Sprint.
2. **Why it matters:** Sets expectations, evidence requests, meeting cadence, and delivery scheduling.
3. **Recommended options:** Fixed calendar window; milestone-based delivery; a narrow standard with an extended-complexity path.
4. **Pros/cons:** Fixed windows are easy to sell but vulnerable to client delays. Milestones are accurate but less predictable. Complexity paths add flexibility but operational overhead.
5. **Engineering/product recommendation:** Pilot a standard milestone sequence and record elapsed time and blockers before publishing duration.
6. **Blocked implementation:** Public timeline, scheduling rules, automated reminders, and capacity forecasting.

## 3. Initial geographic sales territory

1. **Decision required:** Local Georgia launch, a defined regional territory, or national vertical outreach.
2. **Why it matters:** Shapes proof, prospect lists, partnerships, location content, and founder travel/service expectations.
3. **Recommended options:** Athens/Atlanta and surrounding Georgia markets; Southeast regional focus; national home-service focus across selected categories.
4. **Pros/cons:** Local focus improves trust and learning density but limits volume. Regional broadens opportunity but weakens specificity. National vertical focus scales outreach but raises competition and delivery variance.
5. **Engineering/product recommendation:** Start with a clearly named Georgia territory unless an existing warm network supports a stronger vertical wedge.
6. **Blocked implementation:** Location pages, local structured data, outreach lists, market-specific examples, and service-area copy.

## 4. Qualification thresholds

1. **Decision required:** Minimum readiness, business maturity, marketing investment, access, authority, and timing requirements.
2. **Why it matters:** Determines which applications deserve founder time and which clients can benefit from the Sprint.
3. **Recommended options:** Human review rubric; explicit point threshold; disqualifying conditions plus human judgment.
4. **Pros/cons:** Human review preserves nuance but consumes time. Point systems scale but create false precision. Disqualifiers are simple but may reject unconventional good fits.
5. **Engineering/product recommendation:** Begin with disqualifying conditions and a documented human review; do not implement automatic scoring yet.
6. **Blocked implementation:** `qualified_application` event, automated routing, scheduling access, and qualification reporting.

## 5. CRM provider

1. **Decision required:** Where prospect, client, pipeline, and activity records will live.
2. **Why it matters:** Becomes the operating system for follow-up and funnel reporting.
3. **Recommended options:** HubSpot; GoHighLevel; Airtable-based interim system; a disciplined spreadsheet for the earliest pilots.
4. **Pros/cons:** HubSpot has strong CRM foundations but increasing cost/complexity. GoHighLevel bundles agency tools but can encourage premature automation. Airtable is flexible but requires governance. A spreadsheet is fast but fragile.
5. **Engineering/product recommendation:** Define pipeline fields and workflow first, then choose the smallest provider that supports them. Keep adapters server-side.
6. **Blocked implementation:** Lead synchronization, qualification state, pipeline events, task automation, and source-to-client reporting.

## 6. Scheduling provider

1. **Decision required:** Scheduling tool and which applicants receive calendar access.
2. **Why it matters:** Affects conversion friction, qualification control, reminders, and call-event measurement.
3. **Recommended options:** Calendly; Cal.com; CRM-native scheduling; manual scheduling during pilots.
4. **Pros/cons:** Calendly is familiar but adds a vendor. Cal.com is flexible but requires more setup. CRM-native tools centralize data but constrain CRM choice. Manual scheduling maximizes control but adds work.
5. **Engineering/product recommendation:** Use manual scheduling until qualification criteria are stable, then connect the chosen provider after successful application review.
6. **Blocked implementation:** Calendar CTA, `discovery_call_scheduled`, reminders, and no-show reporting.

## 7. Analytics provider

1. **Decision required:** Primary web analytics and consent approach.
2. **Why it matters:** Controls acquisition reporting, privacy behavior, dashboards, and event retention.
3. **Recommended options:** GA4; Plausible; PostHog; first-party structured logs during prototype validation.
4. **Pros/cons:** GA4 is common and powerful but complex and privacy-sensitive. Plausible is simple and privacy-focused but less flexible. PostHog supports product analytics but may exceed current needs. Logs are provider-neutral but poor for routine reporting.
5. **Engineering/product recommendation:** Keep the canonical event model provider-neutral; use structured logs now and decide between GA4 and Plausible before public acquisition campaigns.
6. **Blocked implementation:** Production dashboards, retention policy, consent UI, attribution validation, and provider-specific QA.

## 8. Payment system

1. **Decision required:** Invoicing, deposits, payment methods, and reconciliation.
2. **Why it matters:** Affects proposal acceptance, cash flow, bookkeeping, refunds, and client onboarding.
3. **Recommended options:** Stripe invoices; QuickBooks invoices; contract/proposal platform payments; manual ACH for pilots.
4. **Pros/cons:** Stripe is flexible but adds fees and configuration. QuickBooks centralizes accounting but may have weaker sales UX. Proposal platforms simplify acceptance but add another vendor. ACH reduces fees but is manual.
5. **Engineering/product recommendation:** Select alongside the accounting workflow; do not build custom checkout for a consultative Sprint.
6. **Blocked implementation:** Payment links, deposit status, automated onboarding triggers, and closed-client reconciliation.

## 9. Contract and service-agreement structure

1. **Decision required:** Legal entity, master/service agreement approach, statement of work, IP, confidentiality, liability, cancellation, and data terms.
2. **Why it matters:** Defines the actual client relationship and controls delivery risk.
3. **Recommended options:** Attorney-reviewed MSA + SOW; attorney-reviewed project agreement per Sprint; approved proposal plus service terms.
4. **Pros/cons:** MSA/SOW scales repeat work but has more setup. Project agreements are straightforward but repetitive. Proposal terms are convenient but may be inadequate for complex work.
5. **Engineering/product recommendation:** Obtain qualified legal review before accepting paid engagements; keep website terms separate from client contracts.
6. **Blocked implementation:** Contract acceptance, signature workflow, onboarding trigger, and legal claims about service terms.

## 10. Final tagline

1. **Decision required:** Whether and when to adopt a public tagline.
2. **Why it matters:** Influences positioning, metadata, sales materials, and brand memory.
3. **Recommended options:** No tagline during validation; evolve “Illuminate the path. Climb together. Grow with purpose.”; create an outcome-focused line after customer interviews.
4. **Pros/cons:** No tagline preserves flexibility. The conceptual line is meaningful but may be abstract. An outcome line may sell better but can narrow the brand.
5. **Engineering/product recommendation:** Keep the conceptual phrase internal until customer language and offer-market fit are clearer.
6. **Blocked implementation:** Permanent homepage tagline, social bios, and brand templates.

## 11. Guarantee or risk-reversal policy

1. **Decision required:** Whether any scope, satisfaction, process, or conditional risk reversal is appropriate.
2. **Why it matters:** Affects trust, sales objections, delivery exposure, and legal language.
3. **Recommended options:** No guarantee; process/scope commitment; conditional remediation of missed agreed deliverables; limited satisfaction checkpoint.
4. **Pros/cons:** No guarantee is safest but may reduce confidence. Process commitments are controllable but less dramatic. Remediation can build trust but must be tightly defined. Satisfaction promises are subjective.
5. **Engineering/product recommendation:** Do not guarantee rankings, leads, or revenue. Consider only attorney-reviewed commitments tied to controllable deliverables after pilot experience.
6. **Blocked implementation:** Risk-reversal copy, proposal clauses, and FAQ changes.

## 12. Ongoing-retainer structure

1. **Decision required:** What ongoing optimization includes, who qualifies, cadence, capacity, and commercial model.
2. **Why it matters:** Determines recurring revenue without turning Lumina into an unfocused task vendor.
3. **Recommended options:** Measurement and optimization retainer; channel-specific implementation; quarterly growth advisory; project-based follow-on work.
4. **Pros/cons:** Retainers improve continuity but risk scope creep. Channel-specific work is clearer but recreates silos. Advisory is high leverage but depends on client execution. Projects preserve focus but reduce recurring revenue.
5. **Engineering/product recommendation:** Offer ongoing support only after a Sprint establishes priorities, baseline, ownership, and justified recurring work.
6. **Blocked implementation:** Public packages, recurring billing, service-level expectations, and retention forecasting.
