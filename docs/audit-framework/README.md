# Lumina Growth Audit

## Purpose

The Lumina Growth Audit is an evolving diagnostic framework for understanding where a business may be losing customer-acquisition or conversion opportunities. It supports the Local Growth Foundation Sprint and creates a consistent structure for evidence, judgment, recommendations, and later measurement.

It is not a scientifically validated scoring model, an automatic business grade, or a guarantee of performance. Human judgment and business context remain essential.

## Categories

The canonical category definitions live in `lib/audit-framework.ts`:

1. Local Visibility
2. Google Business Profile
3. Website Experience
4. Conversion Path
5. Local SEO
6. Reputation
7. Lead Capture
8. Lead Response
9. Follow-Up
10. Measurement
11. Automation Readiness

Each category defines its purpose, evaluation questions, and examples of acceptable evidence. Auditors may add client-specific questions, but should not change the category meaning silently.

## Evidence standard

Every material finding should contain:

- a direct observation;
- the evidence reviewed;
- the time and context of the observation;
- a confidence level;
- the likely risk or opportunity;
- any important evidence that was unavailable.

Avoid presenting an assumption as a fact. When evidence conflicts, record the conflict rather than selecting the more convenient narrative.

## Exploratory scoring

The initial framework includes an optional 0–4 maturity scale:

- **0 — Not observable:** evidence is unavailable or assessment is not possible.
- **1 — Fragile:** material gaps create likely risk or lost opportunity.
- **2 — Developing:** foundations exist, but execution or evidence is inconsistent.
- **3 — Functional:** the capability generally works with identifiable improvements.
- **4 — Strong:** the capability is deliberate, measured, and maintained.

Scores are directional working aids, not benchmarked scientific measurements. A score must never appear without its supporting evidence and confidence. Do not combine category scores into a single “growth score” until Lumina has enough delivery evidence to validate whether aggregation is useful.

## Recommendation structure

Recommendations should include:

- the change being recommended;
- why it matters;
- linked findings and categories;
- impact, confidence, and effort estimates;
- recommended owner;
- dependencies and risks;
- timing: immediate, near-term, or later;
- evidence that would indicate progress.

Impact and effort are relative to the client context. They are not universal estimates.

## Quality review

Before presenting an audit:

1. Confirm that every material claim has evidence.
2. Separate observed facts, client-provided information, and Lumina inference.
3. Remove recommendations that exist only because Lumina sells the capability.
4. Identify what the client should not prioritize yet.
5. Check that implementation sequencing respects capacity and dependencies.
6. Remove unsupported guarantees, rankings, forecasts, and precise projections.
7. Confirm that sensitive client information is stored and shared appropriately.

## Evolution

After each Sprint, record which evidence was useful, which questions were ambiguous, which recommendations were implemented, and what outcomes became observable. Changes to the framework should be versioned in Git and summarized in the audit changelog before the framework is treated as standardized.
