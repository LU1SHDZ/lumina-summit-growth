"use client";

import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { track } from "@/lib/analytics";
import { decisionMakerStatuses, desiredTimelines, leadSources, marketingInvestmentRanges, serviceCategories, teamSizes } from "@/lib/qualification-options";

const control = "mt-3 w-full border-b border-charcoal/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-charcoal/30 focus:border-terracotta";
const label = "block text-xs font-semibold uppercase tracking-[.13em] text-charcoal/75";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span id={`${id}-error`} className="mt-2 block text-xs font-normal normal-case tracking-normal text-terracotta">{message}</span> : null;
}

function SelectField({ id, title, options, error }: { id: string; title: string; options: readonly string[]; error?: string }) {
  return <label htmlFor={id} className={label}>{title}<span className="text-terracotta"> *</span><select id={id} name={id} required defaultValue="" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={control}><option value="" disabled>Select one</option>{options.map((option)=><option key={option} value={option}>{option}</option>)}</select><FieldError id={id} message={error} /></label>;
}

export function FreeAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setMessage(""); setErrors({});
    const formData = new FormData(event.currentTarget);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[] | boolean> = Object.fromEntries(formData.entries());
    payload.currentLeadSources = formData.getAll("currentLeadSources");
    payload.consent = formData.get("consent") === "on";
    try {
      const response = await fetch("/api/audit-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json() as { message?: string; errors?: Record<string, string> };
      if (!response.ok) { setErrors(data.errors ?? {}); throw new Error(data.message || "We could not send your application."); }
      track("audit_form_submitted"); setSubmitted(true);
    } catch (error) { track("audit_form_error"); setMessage(error instanceof Error ? error.message : "We could not send your application. Please try again."); }
    finally { setLoading(false); }
  }

  function markStarted() { if (!started) { setStarted(true); track("audit_form_started"); } }

  if (submitted) return <div role="status" className="flex min-h-[32rem] flex-col justify-center border border-charcoal/15 bg-cream p-8 sm:p-12"><CheckCircle2 size={42} className="text-terracotta" /><p className="mt-8 eyebrow">Application received</p><h2 className="mt-4 font-display text-5xl leading-[.9]">Thank you for the context.</h2><p className="mt-6 max-w-md text-sm leading-6 text-charcoal/65">We’ll review the fit and follow up using the email you provided. Submitting the application does not create an engagement or obligate either side to proceed.</p></div>;

  return <form onSubmit={submit} onFocus={markStarted} noValidate className="relative min-w-0 border border-charcoal/15 bg-cream p-6 shadow-[12px_12px_0_#C89B3C] sm:p-9">
    <div aria-hidden="true" className="absolute -left-[10000px]"><label>Company website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="mb-8"><p className="eyebrow">Step 1 / Contact</p><h2 className="mt-3 font-display text-4xl">Tell us who we’re learning about.</h2></div>
    <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2">
      {[{id:"name",title:"Your name",type:"text",autoComplete:"name",required:true},{id:"company",title:"Company name",type:"text",autoComplete:"organization",required:true},{id:"email",title:"Work email",type:"email",autoComplete:"email",required:true},{id:"phone",title:"Phone number",type:"tel",autoComplete:"tel",required:false},{id:"website",title:"Website URL",type:"url",autoComplete:"url",required:false},{id:"gbp",title:"Google Business Profile URL",type:"url",autoComplete:"url",required:false}].map((field)=><label key={field.id} htmlFor={field.id} className={label}>{field.title}{field.required&&<span className="text-terracotta"> *</span>}<input id={field.id} name={field.id} type={field.type} autoComplete={field.autoComplete} required={field.required} aria-invalid={Boolean(errors[field.id])} aria-describedby={errors[field.id]?`${field.id}-error`:undefined} placeholder={field.type==="url"?"https://":""} className={control}/><FieldError id={field.id} message={errors[field.id]} /></label>)}
    </div>

    <fieldset className="mt-12 border-t border-charcoal/15 pt-8"><legend className="sr-only">Business context</legend><p className="eyebrow">Step 2 / Business context</p><h2 className="mt-3 font-display text-4xl">Help us understand the operating environment.</h2><div className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2"><SelectField id="serviceCategory" title="Service category" options={serviceCategories} error={errors.serviceCategory}/><label htmlFor="primaryMarket" className={label}>Primary geographic market<span className="text-terracotta"> *</span><input id="primaryMarket" name="primaryMarket" required placeholder="City, region, or service area" aria-invalid={Boolean(errors.primaryMarket)} aria-describedby={errors.primaryMarket?"primaryMarket-error":undefined} className={control}/><FieldError id="primaryMarket" message={errors.primaryMarket}/></label><SelectField id="teamSize" title="Approximate team size" options={teamSizes} error={errors.teamSize}/><SelectField id="marketingInvestment" title="Approximate monthly marketing investment" options={marketingInvestmentRanges} error={errors.marketingInvestment}/></div></fieldset>

    <fieldset className="mt-10"><legend className={label}>Current lead sources<span className="text-terracotta"> *</span></legend><p className="mt-2 text-xs leading-5 text-charcoal/50">Select every meaningful source.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{leadSources.map((source)=><label key={source} className="flex items-start gap-3 border border-charcoal/15 p-3 text-sm text-charcoal/70"><input type="checkbox" name="currentLeadSources" value={source} className="mt-1 accent-terracotta"/>{source}</label>)}</div><FieldError id="currentLeadSources" message={errors.currentLeadSources}/></fieldset>

    <fieldset className="mt-12 border-t border-charcoal/15 pt-8"><legend className="sr-only">Growth priorities</legend><p className="eyebrow">Step 3 / Priorities</p><h2 className="mt-3 font-display text-4xl">Show us where growth feels constrained.</h2><label htmlFor="biggestConstraint" className={`${label} mt-8`}>Biggest growth constraint<span className="text-terracotta"> *</span><textarea id="biggestConstraint" name="biggestConstraint" required rows={4} aria-invalid={Boolean(errors.biggestConstraint)} aria-describedby={errors.biggestConstraint?"biggestConstraint-error":undefined} className={control}/><FieldError id="biggestConstraint" message={errors.biggestConstraint}/></label><div className="mt-7 grid gap-x-5 gap-y-7 sm:grid-cols-2"><SelectField id="desiredTimeline" title="Desired timeline" options={desiredTimelines} error={errors.desiredTimeline}/><SelectField id="decisionMakerStatus" title="Decision-maker status" options={decisionMakerStatuses} error={errors.decisionMakerStatus}/></div><label htmlFor="goals" className={`${label} mt-7`}>What would meaningful growth look like?<span className="text-terracotta"> *</span><textarea id="goals" name="goals" required rows={4} aria-invalid={Boolean(errors.goals)} aria-describedby={errors.goals?"goals-error":undefined} className={control}/><FieldError id="goals" message={errors.goals}/></label></fieldset>

    <label className="mt-7 flex items-start gap-3 text-xs leading-5 text-charcoal/65"><input name="consent" type="checkbox" required className="mt-1 accent-terracotta"/><span>I agree that Lumina Summit Growth may contact me about this application. *</span></label><FieldError id="consent" message={errors.consent}/>
    {(message||Object.keys(errors).length>0)&&<p role="alert" className="mt-6 border-l-2 border-terracotta pl-4 text-sm leading-6 text-terracotta">{message||"Please review the highlighted fields and try again."}</p>}
    <button disabled={loading} className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-cream transition hover:bg-terracotta disabled:cursor-wait disabled:opacity-70">{loading?<><LoaderCircle aria-hidden="true" size={15} className="animate-spin"/>Sending application</>:<>Submit your application <ArrowRight aria-hidden="true" size={15}/></>}</button>
  </form>;
}
