import type { IndustryPageConfig } from "@/types/industry";

export const roofingIndustry: IndustryPageConfig = {
  slug: "roofing",
  name: "Roofing",
  audience: "Established residential and commercial roofing companies",
  eyebrow: "Growth systems for roofing companies",
  headline: "Be ready when the market",
  headlineEmphasis: "needs a roofer now.",
  introduction: "Roofing demand can arrive through planned replacement, urgent leaks, inspection needs, referrals, and weather-driven events. A strong growth system helps the right customer find, trust, and reach the business—and helps the team respond with context.",
  demandContexts: [
    { title: "Planned projects", description: "Homeowners and property teams comparing providers for replacement, inspection, maintenance, or improvement work." },
    { title: "Urgent needs", description: "Customers seeking clear next steps when a leak or visible damage makes speed and reassurance especially important." },
    { title: "Storm-driven demand", description: "Sharp increases in market attention that can expose weaknesses in intake, qualification, response, and follow-up." },
  ],
  constraints: [
    { title: "Incomplete local visibility", description: "Priority services and genuine service areas may not be represented clearly across Search, Maps, and the website." },
    { title: "Trust arrives too late", description: "Licensing, process, workmanship, reviews, project evidence, and expectations may be difficult to verify before an estimate request." },
    { title: "Mobile paths create friction", description: "A prospect on a roof, in a vehicle, or responding to damage needs concise options to call, request an inspection, or submit useful context." },
    { title: "Demand outruns response", description: "Calls and forms can reach different people without clear ownership, after-hours handling, qualification, or escalation." },
    { title: "Estimates lose momentum", description: "Follow-up may depend on individual memory rather than a visible process for open, stalled, won, and lost opportunities." },
    { title: "Source and revenue disconnect", description: "Teams may know that the phone is ringing without knowing which markets, services, campaigns, or referrals produce qualified and won work." },
  ],
  evaluationFocus: [
    "Google Business Profile categories, services, service areas, photos, reviews, and action paths",
    "Service and location architecture based on real offerings and markets",
    "Mobile calls, inspection requests, estimate forms, and urgent-response expectations",
    "Lead routing, after-hours handling, response ownership, and qualification context",
    "Estimate follow-up stages and customer communication",
    "Source, qualified-lead, appointment, estimate, won-job, and revenue definitions",
    "Responsible automation opportunities that preserve human review",
  ],
  trustQuestions: [
    "Can a customer understand what kinds of roofing work the company actually performs?",
    "Are service areas, credentials, warranties, financing, and insurance-related language accurate and approved?",
    "Does project evidence show real work without implying unverified outcomes?",
    "Do reviews and responses demonstrate communication and service rather than just star count?",
  ],
  measurementQuestions: [
    "Which source and market produced the inquiry?", "Was the inquiry qualified for the business?", "How quickly did the team respond?",
    "Did it become an inspection or estimate?", "Was the work won, lost, or still open?", "What evidence can connect the won work back to acquisition activity?",
  ],
};
