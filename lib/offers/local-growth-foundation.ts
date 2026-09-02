export const localGrowthFoundation = {
  name: "Local Growth Foundation Sprint",
  status: "working-offer",
  summary: "A focused engagement to identify where an established local-service business is losing growth opportunities and establish the foundational systems needed to improve customer acquisition and conversion.",
  pricing: { display: null, note: "Investment will be published after the founder finalizes scope, qualification thresholds, and delivery capacity." },
  duration: { display: null, note: "The exact Sprint duration remains a founder decision and is not represented publicly." },
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
    "Documented assessment across the Lumina Growth Audit categories", "Evidence-backed findings and identified growth constraints",
    "Prioritized recommendations organized by impact, confidence, and effort", "A practical growth roadmap with immediate, near-term, and later actions",
    "A clear recommendation for what Lumina should support—and what your team can handle internally",
  ],
  afterSprint: [
    "Your team implements the roadmap internally.", "Lumina scopes a focused implementation phase for agreed priorities.",
    "Lumina supports ongoing measurement and optimization when there is a justified need.",
  ],
} as const;

export const foundationFaq = [
  { question: "Is this a free automated website score?", answer: "No. The free application helps determine fit. The Sprint is a structured diagnostic engagement based on business context and evidence—not a generic automated grade." },
  { question: "Do you guarantee rankings, leads, or revenue?", answer: "No. Lumina does not make guarantees it cannot honestly control. The work is designed to improve the systems that influence acquisition and conversion, with transparent assumptions and measurement." },
  { question: "Will you recommend every service Lumina offers?", answer: "No. Service before self means recommending what the evidence supports, including telling a business when it does not need something we could sell." },
  { question: "Does the Sprint include implementation?", answer: "The core working offer culminates in a prioritized roadmap. Implementation scope will be defined separately so the recommendation remains useful even when another team executes it." },
  { question: "How long does it take and what does it cost?", answer: "Those details are intentionally not published yet. Exact duration and pricing depend on founder decisions about scope and delivery capacity; no placeholder number is presented as a promise." },
  { question: "Is Lumina limited to one industry?", answer: "No. Lumina is beginning with ambitious local and service businesses across several sectors while building an approach that can expand responsibly as the work and evidence develop." },
] as const;
