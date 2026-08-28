"use client";

import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

const fields = [
  { id: "name", label: "Your name", type: "text", autoComplete: "name" },
  { id: "company", label: "Company name", type: "text", autoComplete: "organization" },
  { id: "email", label: "Work email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  { id: "website", label: "Website URL", type: "url", autoComplete: "url" },
  { id: "gbp", label: "Google Business Profile URL", type: "url", autoComplete: "url" },
];

export function FreeAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    // This intentionally remains client-only until a CRM provider is selected.
    window.setTimeout(() => { setLoading(false); setSubmitted(true); }, 500);
  }

  if (submitted) return <div className="flex min-h-[32rem] flex-col justify-center border border-charcoal/15 bg-cream p-8 sm:p-12"><CheckCircle2 size={42} className="text-terracotta" /><p className="mt-8 eyebrow">Request received</p><h2 className="mt-4 font-display text-5xl leading-[.9]">A thoughtful next step.</h2><p className="mt-6 max-w-sm text-sm leading-6 text-charcoal/65">Thank you. This demo is ready to connect to your CRM or email workflow when you choose one.</p></div>;

  return <form onSubmit={submit} className="border border-charcoal/15 bg-cream p-6 shadow-[12px_12px_0_#C89B3C] sm:p-9">
    <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2">{fields.map((field) => <label key={field.id} htmlFor={field.id} className="block text-xs font-semibold uppercase tracking-[.13em] text-charcoal/75">{field.label}{["name", "company", "email"].includes(field.id) && <span className="text-terracotta"> *</span>}<input id={field.id} name={field.id} type={field.type} autoComplete={field.autoComplete} required={["name", "company", "email"].includes(field.id)} placeholder={field.id === "website" ? "https://" : field.id === "gbp" ? "https://maps.google.com/..." : ""} className="mt-3 w-full border-b border-charcoal/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-charcoal/30 focus:border-terracotta" /></label>)}</div>
    <label htmlFor="goals" className="mt-7 block text-xs font-semibold uppercase tracking-[.13em] text-charcoal/75">What would meaningful growth look like?<span className="text-terracotta"> *</span><textarea id="goals" name="goals" required rows={4} className="mt-3 w-full resize-none border-b border-charcoal/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-terracotta" /></label>
    <p className="mt-6 text-xs leading-5 text-charcoal/50">By submitting, you agree to be contacted by Lumina Summit Growth about your request. We respect your inbox and privacy.</p>
    <button disabled={loading} className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-cream transition hover:bg-terracotta disabled:cursor-wait disabled:opacity-70">{loading ? <><LoaderCircle size={15} className="animate-spin" /> Sending</> : <>Request your audit <ArrowRight size={15} /></>}</button>
  </form>;
}
