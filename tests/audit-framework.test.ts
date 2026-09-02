import assert from "node:assert/strict";
import test from "node:test";
import {
  auditCategories,
  exploratoryScoringScale,
} from "../lib/audit-framework.ts";
import {
  browserEventNames,
  businessEventNames,
  funnelEventCatalog,
} from "../lib/analytics-events.ts";

test("defines the eleven intended audit categories without duplicate ids", () => {
  assert.equal(auditCategories.length, 11);
  assert.equal(new Set(auditCategories.map((category) => category.id)).size, 11);

  for (const category of auditCategories) {
    assert.ok(category.purpose.length > 20);
    assert.ok(category.evaluationQuestions.length >= 3);
    assert.ok(category.evidenceExamples.length >= 3);
  }
});

test("keeps exploratory scoring bounded and explicitly evidence-aware", () => {
  assert.deepEqual(
    exploratoryScoringScale.map(({ score }) => score),
    [0, 1, 2, 3, 4],
  );
  assert.equal(exploratoryScoringScale[0].label, "Not observable");
});

test("separates implemented browser events from future sales-system events", () => {
  const implemented = funnelEventCatalog
    .filter(({ status }) => status === "implemented")
    .map(({ name }) => name);
  const blocked = funnelEventCatalog
    .filter(({ status }) => status === "blocked")
    .map(({ name }) => name);

  assert.ok(implemented.every((name) => browserEventNames.includes(name)));
  assert.ok(blocked.every((name) => businessEventNames.includes(name)));
  assert.equal(new Set(funnelEventCatalog.map(({ name }) => name)).size, funnelEventCatalog.length);
});
