import { NextResponse } from "next/server";
import { auditRequestEmail, validateAuditRequest } from "@/lib/audit-request";

const recent = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const attempts = (recent.get(key) ?? []).filter((time) => now - time < 60 * 60 * 1000);
  attempts.push(now); recent.set(key, attempts);
  return attempts.length > 5;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });

  try {
    const body = await request.json() as Record<string, unknown>;
    if (body.companyWebsite) return NextResponse.json({ ok: true });
    const result = validateAuditRequest(body);
    if (!result.success) return NextResponse.json({ message: "Please review the highlighted fields.", errors: result.errors }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.AUDIT_RECIPIENT_EMAIL;
    const sender = process.env.AUDIT_FROM_EMAIL ?? "Lumina Summit Growth <audit@luminasummitgrowth.com>";
    if (!apiKey || !recipient) {
      console.error(JSON.stringify({ event: "audit_request_configuration_error", missing: [!apiKey && "RESEND_API_KEY", !recipient && "AUDIT_RECIPIENT_EMAIL"].filter(Boolean) }));
      return NextResponse.json({ message: "Online requests are being configured. Please contact Lumina Summit Growth directly for now." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: sender, to: [recipient], reply_to: result.data.email, subject: `Growth Snapshot request — ${result.data.company}`, html: auditRequestEmail(result.data) }) });
    if (!response.ok) throw new Error(`Resend delivery failed with status ${response.status}`);
    console.info(JSON.stringify({ event: "audit_request_delivered", timestamp: new Date().toISOString() }));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(JSON.stringify({ event: "audit_request_error", message: error instanceof Error ? error.message : "Unknown error", timestamp: new Date().toISOString() }));
    return NextResponse.json({ message: "We could not send your request. Please try again shortly." }, { status: 500 });
  }
}
