import test from "node:test";
import assert from "node:assert/strict";
import { activeGrowthOffers, growthServicesContent, PUBLIC_PRICING } from "../lib/offers/growth-services.ts";

const expectedIds = [
  "growth-snapshot",
  "growth-blueprint",
  "local-growth-foundation",
  "growth-website-system",
  "local-growth",
  "growth-partner",
] as const;

test("publishes the six approved offers exactly once", () => {
  assert.deepEqual(activeGrowthOffers.map((offer) => offer.id), expectedIds);
  assert.equal(new Set(activeGrowthOffers.map((offer) => offer.id)).size, expectedIds.length);
});

test("keeps approved public pricing in the centralized catalog", () => {
  assert.deepEqual(PUBLIC_PRICING, {
    "growth-snapshot": { en: "Free", es: "Gratis" },
    "growth-blueprint": { en: "$350 one-time", es: "$350 pago único" },
    "local-growth-foundation": { en: "Starting at $1,500", es: "Desde $1,500" },
    "growth-website-system": {
      en: "Founding-client projects starting at $2,250",
      es: "Proyectos para clientes fundadores desde $2,250",
    },
    "local-growth": { en: "Starting at $750/month", es: "Desde $750/mes" },
    "growth-partner": { en: "Starting at $1,250/month", es: "Desde $1,250/mes" },
  });

  for (const offer of activeGrowthOffers) {
    assert.equal(offer.price, PUBLIC_PRICING[offer.id].en);
  }
});

test("keeps English and Spanish offer architecture aligned", () => {
  const englishIds = growthServicesContent.en.sections.flatMap((section) => section.offers.map((offer) => offer.id));
  const spanishIds = growthServicesContent.es.sections.flatMap((section) => section.offers.map((offer) => offer.id));

  assert.deepEqual(englishIds, expectedIds);
  assert.deepEqual(spanishIds, expectedIds);
  assert.equal(growthServicesContent.en.faq.items.length, 9);
  assert.equal(growthServicesContent.es.faq.items.length, 9);
});

test("keeps offer actions inside the approved conversion journey", () => {
  const allowedPaths = new Set(["/free-audit", "/start-here", "/contact"]);

  for (const locale of ["en", "es"] as const) {
    const offers = growthServicesContent[locale].sections.flatMap((section) => section.offers);
    for (const offer of offers) assert.equal(allowedPaths.has(offer.cta.href), true, `${offer.id} has an unexpected CTA`);
  }
});

test("does not publish excluded offers as active services", () => {
  const publicOfferText = activeGrowthOffers.map((offer) => `${offer.id} ${offer.name} ${offer.category}`).join(" ").toLowerCase();
  assert.equal(publicOfferText.includes("scale"), false);
  assert.equal(publicOfferText.includes("paid demand"), false);
  assert.equal(publicOfferText.includes("paid advertising"), false);
});
