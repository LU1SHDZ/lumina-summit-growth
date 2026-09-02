/**
 * Intentional integration boundaries for the growth practice.
 * Keep vendor SDKs and secrets behind server-only adapters; never import them into UI components.
 */
export const integrationBoundaries = {
  // TODO(CRM): Add a server-side lead adapter only after the founder selects the system of record.
  // TODO(SCHEDULING): Expose scheduling only after human qualification and provider selection.
  // TODO(ANALYTICS): Route the canonical event catalog to the founder-approved provider and consent model.
  // TODO(PROPOSALS): Record proposal lifecycle events through the approved sales workflow.
  // TODO(PAYMENTS): Reconcile closed clients with an executed agreement and approved payment/accounting system.
  // TODO(AI): Add audited, rate-limited workflows only where they strengthen a defined human-owned process.
} as const;
