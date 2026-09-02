import test from "node:test";
import assert from "node:assert/strict";
import { auditRequestEmail, validateAuditRequest } from "../lib/audit-request.ts";

const valid = {
  name: "Luis Hernandez", company: "Lumina Summit", email: "Luis@Example.com", phone: "", website: "https://example.com", gbp: "",
  serviceCategory: "Roofing", primaryMarket: "Athens, Georgia", teamSize: "6–15", currentLeadSources: ["Referrals", "Google Business Profile / Maps"],
  marketingInvestment: "$1,000–$3,000/month", biggestConstraint: "Qualified inquiries are not followed up consistently across the team.",
  desiredTimeline: "Within 1–3 months", decisionMakerStatus: "I am the primary decision-maker", goals: "We want a reliable pipeline of qualified local opportunities.", consent: true,
};

test("accepts and normalizes a valid audit request", () => {
  const result = validateAuditRequest(valid);
  assert.equal(result.success, true);
  if (result.success) assert.equal(result.data.email, "luis@example.com");
});

test("rejects missing consent and malformed fields", () => {
  const result = validateAuditRequest({ ...valid, email: "invalid", website: "example", goals: "short", consent: false });
  assert.equal(result.success, false);
  if (!result.success) assert.deepEqual(Object.keys(result.errors).sort(), ["consent", "email", "goals", "website"]);
});

test("rejects unknown qualification options and requires a lead source", () => {
  const result = validateAuditRequest({ ...valid, serviceCategory: "Guaranteed rankings", teamSize: "Huge", currentLeadSources: ["Injected source"], marketingInvestment: "Secret", desiredTimeline: "Yesterday", decisionMakerStatus: "Unknown" });
  assert.equal(result.success, false);
  if (!result.success) assert.deepEqual(Object.keys(result.errors).sort(), ["currentLeadSources", "decisionMakerStatus", "desiredTimeline", "marketingInvestment", "serviceCategory", "teamSize"]);
});

test("escapes user input in notification emails", () => {
  const html = auditRequestEmail({ ...valid, company: "<script>alert('x')</script>" });
  assert.equal(html.includes("<script>"), false);
  assert.equal(html.includes("&lt;script&gt;"), true);
});

test("includes qualification context in notification emails", () => {
  const html = auditRequestEmail(valid);
  assert.equal(html.includes("Athens, Georgia"), true);
  assert.equal(html.includes("Referrals, Google Business Profile / Maps"), true);
  assert.equal(html.includes("primary decision-maker"), true);
});
