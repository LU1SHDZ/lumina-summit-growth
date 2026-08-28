/**
 * Intentional integration boundaries for the future SaaS platform.
 * Keep vendor SDKs and secrets behind server-only adapters; never import them into UI components.
 */
export const integrationBoundaries = {
  // TODO(CRM): Add a server-side lead submission adapter (HubSpot, GoHighLevel, or equivalent).
  // TODO(AUTH): Add authenticated client and staff portal boundaries with role-based access.
  // TODO(ANALYTICS): Add consent-aware product and marketing analytics events.
  // TODO(DASHBOARD): Add a client reporting API and dashboard route group.
  // TODO(AI): Add audited, rate-limited AI workflows behind server actions or route handlers.
} as const;
