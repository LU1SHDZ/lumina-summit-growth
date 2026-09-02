import { decisionMakerStatuses, desiredTimelines, leadSources, marketingInvestmentRanges, serviceCategories, teamSizes } from "./qualification-options.ts";

export type AuditRequest = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  gbp: string;
  serviceCategory: string;
  primaryMarket: string;
  teamSize: string;
  currentLeadSources: string[];
  marketingInvestment: string;
  biggestConstraint: string;
  desiredTimeline: string;
  decisionMakerStatus: string;
  goals: string;
  consent: boolean;
};

export type ValidationResult = { success: true; data: AuditRequest } | { success: false; errors: Record<string, string> };

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const cleanArray = (value: unknown, options: readonly string[]) => Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && options.includes(item)).slice(0, options.length) : [];
const isUrl = (value: string) => { if (!value) return true; try { const url = new URL(value); return ["http:", "https:"].includes(url.protocol); } catch { return false; } };
const isOption = (value: string, options: readonly string[]) => options.includes(value);

export function validateAuditRequest(input: unknown): ValidationResult {
  const source = typeof input === "object" && input !== null ? input as Record<string, unknown> : {};
  const data: AuditRequest = {
    name: clean(source.name, 100), company: clean(source.company, 120), email: clean(source.email, 160).toLowerCase(), phone: clean(source.phone, 40),
    website: clean(source.website, 300), gbp: clean(source.gbp, 300), serviceCategory: clean(source.serviceCategory, 80), primaryMarket: clean(source.primaryMarket, 160),
    teamSize: clean(source.teamSize, 40), currentLeadSources: cleanArray(source.currentLeadSources, leadSources), marketingInvestment: clean(source.marketingInvestment, 80),
    biggestConstraint: clean(source.biggestConstraint, 1500), desiredTimeline: clean(source.desiredTimeline, 80), decisionMakerStatus: clean(source.decisionMakerStatus, 100),
    goals: clean(source.goals, 2500), consent: source.consent === true,
  };
  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (data.company.length < 2) errors.company = "Please enter your company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!isUrl(data.website)) errors.website = "Use a complete URL beginning with http:// or https://.";
  if (!isUrl(data.gbp)) errors.gbp = "Use a complete Google Business Profile URL.";
  if (!isOption(data.serviceCategory, serviceCategories)) errors.serviceCategory = "Select the service category that best fits.";
  if (data.primaryMarket.length < 2) errors.primaryMarket = "Enter the primary city, region, or service market.";
  if (!isOption(data.teamSize, teamSizes)) errors.teamSize = "Select an approximate team size.";
  if (!data.currentLeadSources.length) errors.currentLeadSources = "Select at least one current lead source.";
  if (!isOption(data.marketingInvestment, marketingInvestmentRanges)) errors.marketingInvestment = "Select the closest investment range.";
  if (data.biggestConstraint.length < 20) errors.biggestConstraint = "Share at least a sentence about the biggest growth constraint.";
  if (!isOption(data.desiredTimeline, desiredTimelines)) errors.desiredTimeline = "Select the timeline that best reflects your plans.";
  if (!isOption(data.decisionMakerStatus, decisionMakerStatuses)) errors.decisionMakerStatus = "Select your role in the decision.";
  if (data.goals.length < 20) errors.goals = "Please share at least a sentence about your goals.";
  if (!data.consent) errors.consent = "Please confirm that we may contact you about this request.";
  return Object.keys(errors).length ? { success: false, errors } : { success: true, data };
}

export function auditRequestEmail(data: AuditRequest) {
  const escape = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char] ?? char));
  const row = (label: string, value: string) => `<p><strong>${label}:</strong> ${escape(value || "Not provided")}</p>`;
  return `<h1>New Lumina Summit growth audit application</h1>${row("Name",data.name)}${row("Company",data.company)}${row("Email",data.email)}${row("Phone",data.phone)}${row("Website",data.website)}${row("Google Business Profile",data.gbp)}<h2>Business context</h2>${row("Service category",data.serviceCategory)}${row("Primary market",data.primaryMarket)}${row("Team size",data.teamSize)}${row("Current lead sources",data.currentLeadSources.join(", "))}${row("Monthly marketing investment",data.marketingInvestment)}${row("Desired timeline",data.desiredTimeline)}${row("Decision-maker status",data.decisionMakerStatus)}<h2>Biggest growth constraint</h2><p>${escape(data.biggestConstraint).replace(/\n/g,"<br>")}</p><h2>Growth goals</h2><p>${escape(data.goals).replace(/\n/g,"<br>")}</p>`;
}
