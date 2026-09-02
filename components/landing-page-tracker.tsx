"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function LandingPageTracker({ pageType, industry }: { pageType: "homepage" | "offer" | "industry"; industry?: string }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let referrerHost = "direct";
    if (document.referrer) { try { referrerHost = new URL(document.referrer).hostname; } catch { referrerHost = "unknown"; } }
    track("landing_page_view", {
      pageType, industry, referrerHost,
      utmSource: params.get("utm_source"), utmMedium: params.get("utm_medium"), utmCampaign: params.get("utm_campaign"),
    });
  }, [industry, pageType]);
  return null;
}
