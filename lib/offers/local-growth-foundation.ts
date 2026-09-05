import { PUBLIC_PRICING } from "@/lib/offers/growth-services";

export const localGrowthFoundation = {
  name: "Local Growth Foundation",
  status: "founding-client-offer",
  summary: "A focused foundation project for local service businesses that already have a digital presence but need it repaired before spending aggressively on marketing.",
  pricing: { display: PUBLIC_PRICING["local-growth-foundation"].en, note: "Final pricing reflects the number of locations, website size, service complexity, content needs, technical problems, and integrations." },
  duration: { display: null, note: "The exact project duration is confirmed after scope and access requirements are understood." },
  fitSignals: [
    "You operate an established local or home-service business.",
    "Your team delivers strong work, but customer acquisition or follow-up feels inconsistent.",
    "You want to understand the system before buying disconnected tactics.",
    "You can provide access to the people, tools, and evidence needed for a useful diagnostic.",
    "You value candid recommendations, including advice not to purchase something unnecessary.",
  ],
  poorFitSignals: [
    "You need guaranteed rankings, revenue, or lead volume.",
    "You are looking only for the lowest-cost vendor or a one-off task with no strategic context.",
    "Your team cannot participate in discovery or provide baseline information.",
    "You expect technology or AI to replace the human work of service, sales, and accountability.",
  ],
  evaluationAreas: [
    "Google Business Profile and local visibility", "Website experience and conversion path", "Service and location-page opportunities",
    "Lead capture, response, and follow-up", "Reviews and reputation signals", "Tracking, attribution, and CRM readiness",
    "Marketing technology and responsible automation opportunities",
  ],
  process: [
    { number: "01", title: "Qualify", description: "We review your market, current growth system, constraints, and readiness for a focused engagement." },
    { number: "02", title: "Diagnose", description: "We examine evidence across visibility, conversion, reputation, lead handling, measurement, and technology." },
    { number: "03", title: "Prioritize", description: "We separate urgent constraints from lower-value distractions and define the sequence that matters." },
    { number: "04", title: "Roadmap", description: "You receive a practical foundation plan with recommendations, evidence, owners, and next actions." },
  ],
  deliverables: [
    "Documented assessment of local visibility, website conversion, lead handling, reputation, and measurement", "Evidence-backed findings and identified growth constraints",
    "Prioritized recommendations organized by impact, confidence, and effort", "A practical 90-day growth roadmap with immediate, near-term, and later actions",
    "A clear recommendation for what Lumina should support—and what your team can handle internally",
  ],
  afterSprint: [
    "Your team implements the roadmap internally.", "Lumina scopes a focused implementation phase for agreed priorities.",
    "Lumina supports ongoing measurement and optimization when there is a justified need.",
  ],
} as const;

export const foundationFaq = [
  { question: "Is this the free Growth Snapshot?", answer: "No. The Growth Snapshot is a focused first look with a few useful observations. The Local Growth Foundation is a paid implementation project with a defined scope based on the business’s actual needs." },
  { question: "Do you guarantee rankings, leads, or revenue?", answer: "No. Lumina does not make guarantees it cannot honestly control. The work is designed to improve the systems that influence acquisition and conversion, with transparent assumptions and measurement." },
  { question: "Will you recommend every service Lumina offers?", answer: "No. Service before self means recommending what the evidence supports, including telling a business when it does not need something we could sell." },
  { question: "Does the Foundation include implementation?", answer: "Yes. The agreed project scope may include Google Business Profile work, website conversion improvements, core on-page SEO, analytics and lead tracking, and other foundation priorities. Work outside the agreed scope is quoted separately." },
  { question: "How long does it take and what does it cost?", answer: `Projects start at $1,500. Final pricing and duration are confirmed after Lumina understands the number of locations, website size, service complexity, content needs, technical problems, integrations, and access requirements.` },
  { question: "Is Lumina limited to one industry?", answer: "No. Lumina is beginning with ambitious local and service businesses across several sectors while building an approach that can expand responsibly as the work and evidence develop." },
] as const;
