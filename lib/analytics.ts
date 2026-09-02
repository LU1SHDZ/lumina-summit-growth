import type { AnalyticsProperties, BrowserEventName } from "@/lib/analytics-events";

export function track(event: BrowserEventName, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined") return;
  const payload = JSON.stringify({ event, path: window.location.pathname, properties });
  const sent = navigator.sendBeacon?.("/api/events", new Blob([payload], { type: "application/json" }));
  if (!sent) void fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", event, properties);
}
