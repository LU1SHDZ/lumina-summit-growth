export type AuditCategory = {
  id: string;
  name: string;
  purpose: string;
  evaluationQuestions: readonly string[];
  evidenceExamples: readonly string[];
};

export const auditCategories: readonly AuditCategory[] = [
  { id: "local-visibility", name: "Local Visibility", purpose: "Understand whether the business can be discovered across the markets and services it actually serves.", evaluationQuestions: ["Is the business visible for priority service-and-market combinations?", "Are service areas accurate and strategically represented?", "Are important local discovery surfaces consistent?"], evidenceExamples: ["Search-result observations", "Service-area documentation", "Directory and citation samples", "Search Console query data when available"] },
  { id: "google-business-profile", name: "Google Business Profile", purpose: "Evaluate the accuracy, completeness, trust signals, and conversion readiness of the primary local profile.", evaluationQuestions: ["Are category, services, hours, service areas, and contact details accurate?", "Do photos and updates represent the real business?", "Are calls, messages, and website actions configured and observable?"], evidenceExamples: ["Profile screenshots", "GBP performance exports", "Category and service configuration", "Photo and update history"] },
  { id: "website-experience", name: "Website Experience", purpose: "Determine whether the site helps a prospective customer understand, trust, and navigate the business on any device.", evaluationQuestions: ["Is the value proposition clear for priority customers?", "Can visitors quickly find relevant services and locations?", "Is the mobile experience usable, fast, and accessible?"], evidenceExamples: ["Page inventory", "Mobile and desktop walkthrough", "Performance report", "Accessibility observations"] },
  { id: "conversion-path", name: "Conversion Path", purpose: "Assess how easily qualified visitors can take the next appropriate action.", evaluationQuestions: ["Are calls to action specific and appropriately placed?", "Do forms and phone actions work and set expectations?", "Are trust objections addressed before conversion?"], evidenceExamples: ["Form tests", "Call-link tests", "Funnel observations", "Analytics events when available"] },
  { id: "local-seo", name: "Local SEO", purpose: "Review the technical, content, and geographic foundations that support durable organic discovery.", evaluationQuestions: ["Do service and location pages match genuine offerings and markets?", "Are metadata, internal links, indexability, and structured data coherent?", "Does content demonstrate useful local and service expertise?"], evidenceExamples: ["Crawl output", "Index coverage", "Structured-data validation", "Content and internal-link map"] },
  { id: "reputation", name: "Reputation", purpose: "Understand how reviews and other trust signals influence discovery and buying confidence.", evaluationQuestions: ["Is there a consistent and ethical review-request process?", "Are reviews answered thoughtfully?", "Are reputation themes reflected in customer-facing content without fabrication?"], evidenceExamples: ["Review profile samples", "Review velocity and response observations", "Request workflow", "Approved testimonials or credentials"] },
  { id: "lead-capture", name: "Lead Capture", purpose: "Determine whether inquiries are captured with enough context and routed reliably.", evaluationQuestions: ["Are every major lead source and intake channel documented?", "Is essential qualification context captured without excessive friction?", "Are failures, spam, and consent handled responsibly?"], evidenceExamples: ["Form submissions", "Call-routing map", "Inbox or CRM field map", "Error and spam-handling behavior"] },
  { id: "lead-response", name: "Lead Response", purpose: "Examine how quickly and consistently the business acknowledges and acts on new opportunities.", evaluationQuestions: ["Who owns each lead type?", "What happens during and outside business hours?", "Can response time and outcomes be measured?"], evidenceExamples: ["Response workflow", "Call and message samples", "Response-time data", "Ownership and escalation rules"] },
  { id: "follow-up", name: "Follow-Up", purpose: "Assess whether qualified opportunities receive appropriate, human-centered follow-up after first contact or estimate.", evaluationQuestions: ["Are follow-up stages and responsibilities defined?", "Do messages reflect the customer context?", "Can the team distinguish active, stalled, won, and lost opportunities?"], evidenceExamples: ["Pipeline stages", "Message templates", "Follow-up cadence", "Won/lost records"] },
  { id: "measurement", name: "Measurement", purpose: "Connect marketing activity to qualified inquiries, appointments, estimates, customers, and revenue where possible.", evaluationQuestions: ["Are sources and conversion actions defined consistently?", "Can online and offline outcomes be reconciled?", "Are decisions based on evidence quality rather than vanity metrics?"], evidenceExamples: ["Analytics configuration", "Call tracking", "CRM or spreadsheet records", "Baseline funnel metrics"] },
  { id: "automation-readiness", name: "Automation Readiness", purpose: "Identify where technology can responsibly reduce delay or manual effort without weakening judgment and service.", evaluationQuestions: ["Is the underlying process stable enough to automate?", "What decisions require human review?", "Are data access, consent, failure handling, and ownership defined?"], evidenceExamples: ["Process map", "Tool inventory", "Data-flow notes", "Human review and exception rules"] },
] as const;

export const exploratoryScoringScale = [
  { score: 0, label: "Not observable", meaning: "Required evidence is unavailable or the capability cannot yet be assessed." },
  { score: 1, label: "Fragile", meaning: "Material gaps create likely risk or lost opportunity." },
  { score: 2, label: "Developing", meaning: "Some foundations exist, but execution or evidence is inconsistent." },
  { score: 3, label: "Functional", meaning: "The capability generally works with documented improvement opportunities." },
  { score: 4, label: "Strong", meaning: "The capability is deliberate, measured, and consistently maintained." },
] as const;

export type AuditFinding = {
  categoryId: AuditCategory["id"];
  observation: string;
  evidence: string[];
  confidence: "low" | "medium" | "high";
  exploratoryScore: 0 | 1 | 2 | 3 | 4 | null;
  riskOrOpportunity: string;
};

export type AuditRecommendation = {
  title: string;
  rationale: string;
  categoryIds: string[];
  impact: "low" | "medium" | "high";
  confidence: "low" | "medium" | "high";
  effort: "low" | "medium" | "high" | "unknown";
  owner: "client" | "lumina" | "shared" | "unassigned";
  timing: "immediate" | "near-term" | "later";
  dependencies: string[];
  successEvidence: string[];
};
