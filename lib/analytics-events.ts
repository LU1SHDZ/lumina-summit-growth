export const browserEventNames = [
  "landing_page_view", "audit_form_started", "audit_form_submitted", "audit_form_error", "contact_form_submitted", "contact_form_error", "cta_clicked",
] as const;

export const businessEventNames = ["qualified_application", "discovery_call_scheduled", "proposal_sent", "client_closed"] as const;

export type BrowserEventName = typeof browserEventNames[number];
export type BusinessEventName = typeof businessEventNames[number];

export type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

export const funnelEventCatalog = [
  { name: "landing_page_view", stage: "Discovery", status: "implemented", source: "Browser", description: "A designated acquisition landing page was viewed." },
  { name: "audit_form_started", stage: "Application", status: "implemented", source: "Browser", description: "A visitor first focused the qualification application." },
  { name: "audit_form_submitted", stage: "Application", status: "implemented", source: "Browser and server delivery logs", description: "An application was successfully delivered." },
  { name: "qualified_application", stage: "Qualification", status: "blocked", source: "Future CRM or reviewed lead record", description: "A reviewed application met founder-approved qualification criteria." },
  { name: "discovery_call_scheduled", stage: "Discovery call", status: "blocked", source: "Future scheduling or CRM provider", description: "A qualified prospect scheduled a discovery call." },
  { name: "proposal_sent", stage: "Proposal", status: "blocked", source: "Future CRM or proposal workflow", description: "A proposal was sent under an approved commercial process." },
  { name: "client_closed", stage: "Client", status: "blocked", source: "Future CRM/payment reconciliation", description: "A prospect became a client under an executed agreement." },
] as const;
