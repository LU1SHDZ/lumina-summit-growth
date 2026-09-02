import { NextResponse } from "next/server";
import { browserEventNames } from "@/lib/analytics-events";

const allowedEvents = new Set<string>(browserEventNames);
const cleanProperties = (
  value: unknown,
): Record<string, string | number | boolean | null> => {
  const clean: Record<string, string | number | boolean | null> = {};

  if (!value || typeof value !== "object" || Array.isArray(value)) return clean;

  for (const [key, item] of Object.entries(value as Record<string, unknown>).slice(0, 12)) {
    if (!/^[a-zA-Z][a-zA-Z0-9_]{0,39}$/.test(key)) continue;

    if (typeof item === "string") {
      clean[key] = item.slice(0, 160);
    } else if (
      typeof item === "number" ||
      typeof item === "boolean" ||
      item === null
    ) {
      clean[key] = item;
    }
  }

  return clean;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as { event?: unknown; path?: unknown; properties?: unknown };
    if (typeof body.event !== "string" || !allowedEvents.has(body.event)) return NextResponse.json({ ok: false }, { status: 400 });
    console.info(JSON.stringify({ event: body.event, path: typeof body.path === "string" ? body.path.slice(0, 200) : undefined, properties: cleanProperties(body.properties), timestamp: new Date().toISOString() }));
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
}
