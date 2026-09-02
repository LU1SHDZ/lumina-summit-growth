import assert from "node:assert/strict";
import test from "node:test";
import { localizedPath, pathForLocale } from "../lib/i18n.ts";

test("maps English routes to stable Spanish equivalents", () => {
  assert.equal(localizedPath("/", "es"), "/es");
  assert.equal(localizedPath("/start-here", "es"), "/es/start-here");
  assert.equal(localizedPath("/#founder", "es"), "/es#founder");
});

test("switches back to the equivalent English route", () => {
  assert.equal(pathForLocale("/es", "en"), "/");
  assert.equal(pathForLocale("/es/work/dyeslo", "en"), "/work/dyeslo");
  assert.equal(pathForLocale("/es/free-audit", "es"), "/es/free-audit");
});
