"use client";

import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { track } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";
import { decisionMakerStatuses, desiredTimelines, leadSources, marketingInvestmentRanges, serviceCategories, teamSizes } from "@/lib/qualification-options";

const control = "mt-3 w-full border-b border-charcoal/25 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-charcoal/30 focus:border-terracotta";
const label = "block text-xs font-semibold uppercase tracking-[.13em] text-charcoal/75";

const optionTranslations = {
  serviceCategories: ["Techado", "HVAC", "Plomería", "Electricidad", "Remodelación", "Contratación general", "Paisajismo", "Concreto", "Otro servicio local"],
  teamSizes: ["Operador independiente", "2–5", "6–15", "16–50", "51+", "Prefiero no decirlo"],
  leadSources: ["Referencias", "Perfil de Empresa de Google / Maps", "Búsqueda orgánica", "Anuncios de Servicios Locales", "Google Ads", "Redes sociales / Meta Ads", "Directorios", "Clientes recurrentes", "Alianzas", "Otro"],
  marketingInvestmentRanges: ["Sin inversión actualmente", "Menos de $1,000/mes", "$1,000–$3,000/mes", "$3,000–$10,000/mes", "$10,000+/mes", "No estoy seguro", "Prefiero no decirlo"],
  desiredTimelines: ["Tan pronto exista un plan responsable", "Dentro de 30 días", "Dentro de 1–3 meses", "Dentro de 3–6 meses", "Explorando para más adelante"],
  decisionMakerStatuses: ["Soy quien toma la decisión principal", "Comparto la decisión con otras personas", "Estoy investigando para quien decide", "Aún no estoy seguro"],
} as const;

const spanishErrors: Record<string, string> = {
  name: "Ingresa tu nombre.", company: "Ingresa el nombre de tu empresa.", email: "Ingresa un correo electrónico válido.",
  website: "Usa una URL completa que comience con http:// o https://.", gbp: "Usa una URL completa de tu Perfil de Empresa de Google.",
  serviceCategory: "Selecciona la categoría de servicio que mejor corresponda.", primaryMarket: "Ingresa la ciudad, región o mercado principal.",
  teamSize: "Selecciona un tamaño aproximado del equipo.", currentLeadSources: "Selecciona al menos una fuente actual de oportunidades.",
  marketingInvestment: "Selecciona el rango de inversión más cercano.", biggestConstraint: "Comparte al menos una oración sobre la mayor limitación de crecimiento.",
  desiredTimeline: "Selecciona el plazo que mejor refleje tus planes.", decisionMakerStatus: "Selecciona tu papel en la decisión.",
  goals: "Comparte al menos una oración sobre tus objetivos.", consent: "Confirma que podemos contactarte sobre esta solicitud.",
};

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span id={`${id}-error`} className="mt-2 block text-xs font-normal normal-case tracking-normal text-terracotta">{message}</span> : null;
}

function SelectField({ id, title, options, displayedOptions, error, locale }: { id: string; title: string; options: readonly string[]; displayedOptions?: readonly string[]; error?: string; locale: Locale }) {
  return <label htmlFor={id} className={label}>{title}<span className="text-terracotta"> *</span><select id={id} name={id} required defaultValue="" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={control}><option value="" disabled>{locale === "es" ? "Selecciona una opción" : "Select one"}</option>{options.map((option, index)=><option key={option} value={option}>{displayedOptions?.[index] ?? option}</option>)}</select><FieldError id={id} message={error} /></label>;
}

export function FreeAuditForm({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
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
      if (!response.ok) {
        const localizedErrors = spanish && data.errors ? Object.fromEntries(Object.keys(data.errors).map((key) => [key, spanishErrors[key] ?? data.errors?.[key]])) : data.errors;
        setErrors(localizedErrors ?? {});
        const spanishMessage = response.status === 429
          ? "Se enviaron demasiadas solicitudes. Inténtalo de nuevo más tarde."
          : response.status === 503
            ? "Las solicitudes en línea se están configurando. Vuelve pronto."
            : response.status === 400
              ? "Revisa los campos señalados e inténtalo de nuevo."
              : "No pudimos enviar tu solicitud. Inténtalo de nuevo en unos momentos.";
        throw new Error(spanish ? spanishMessage : data.message || "We could not send your application.");
      }
      track("audit_form_submitted"); setSubmitted(true);
    } catch (error) {
      track("audit_form_error");
      setMessage(error instanceof Error ? error.message : spanish ? "No pudimos enviar tu solicitud. Inténtalo de nuevo." : "We could not send your application. Please try again.");
    } finally { setLoading(false); }
  }

  function markStarted() { if (!started) { setStarted(true); track("audit_form_started"); } }

  if (submitted) return <div role="status" className="flex min-h-[32rem] flex-col justify-center border border-charcoal/15 bg-cream p-8 sm:p-12"><CheckCircle2 size={42} className="text-terracotta" /><p className="mt-8 eyebrow">{spanish ? "Solicitud recibida" : "Application received"}</p><h2 className="mt-4 font-display text-5xl leading-[.9]">{spanish ? "Gracias por compartir el contexto." : "Thank you for the context."}</h2><p className="mt-6 max-w-md text-sm leading-6 text-charcoal/65">{spanish ? "Revisaremos la compatibilidad y responderemos usando el correo electrónico que proporcionaste. Enviar la solicitud no crea un compromiso ni obliga a ninguna de las partes a continuar." : "We’ll review the fit and follow up using the email you provided. Submitting the application does not create an engagement or obligate either side to proceed."}</p></div>;

  const contactFields = spanish ? [
    {id:"name",title:"Tu nombre",type:"text",autoComplete:"name",required:true}, {id:"company",title:"Nombre de la empresa",type:"text",autoComplete:"organization",required:true},
    {id:"email",title:"Correo de trabajo",type:"email",autoComplete:"email",required:true}, {id:"phone",title:"Número de teléfono",type:"tel",autoComplete:"tel",required:false},
    {id:"website",title:"URL del sitio web",type:"url",autoComplete:"url",required:false}, {id:"gbp",title:"URL del Perfil de Empresa de Google",type:"url",autoComplete:"url",required:false},
  ] : [
    {id:"name",title:"Your name",type:"text",autoComplete:"name",required:true}, {id:"company",title:"Company name",type:"text",autoComplete:"organization",required:true},
    {id:"email",title:"Work email",type:"email",autoComplete:"email",required:true}, {id:"phone",title:"Phone number",type:"tel",autoComplete:"tel",required:false},
    {id:"website",title:"Website URL",type:"url",autoComplete:"url",required:false}, {id:"gbp",title:"Google Business Profile URL",type:"url",autoComplete:"url",required:false},
  ];

  return <form onSubmit={submit} onFocus={markStarted} noValidate className="relative min-w-0 border border-charcoal/15 bg-cream p-6 shadow-[12px_12px_0_#C89B3C] sm:p-9">
    <div aria-hidden="true" className="absolute -left-[10000px]"><label>{spanish ? "Sitio web de la empresa" : "Company website"}<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="mb-8"><p className="eyebrow">{spanish ? "Paso 1 / Contacto" : "Step 1 / Contact"}</p><h2 className="mt-3 font-display text-4xl">{spanish ? "Cuéntanos sobre quién aprenderemos." : "Tell us who we’re learning about."}</h2></div>
    <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2">
      {contactFields.map((field)=><label key={field.id} htmlFor={field.id} className={label}>{field.title}{field.required&&<span className="text-terracotta"> *</span>}<input id={field.id} name={field.id} type={field.type} autoComplete={field.autoComplete} required={field.required} aria-invalid={Boolean(errors[field.id])} aria-describedby={errors[field.id]?`${field.id}-error`:undefined} placeholder={field.type==="url"?"https://":""} className={control}/><FieldError id={field.id} message={errors[field.id]} /></label>)}
    </div>

    <fieldset className="mt-12 border-t border-charcoal/15 pt-8"><legend className="sr-only">{spanish ? "Contexto del negocio" : "Business context"}</legend><p className="eyebrow">{spanish ? "Paso 2 / Contexto del negocio" : "Step 2 / Business context"}</p><h2 className="mt-3 font-display text-4xl">{spanish ? "Ayúdanos a entender el entorno operativo." : "Help us understand the operating environment."}</h2><div className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2"><SelectField id="serviceCategory" title={spanish ? "Categoría de servicio" : "Service category"} options={serviceCategories} displayedOptions={spanish ? optionTranslations.serviceCategories : undefined} error={errors.serviceCategory} locale={locale}/><label htmlFor="primaryMarket" className={label}>{spanish ? "Mercado geográfico principal" : "Primary geographic market"}<span className="text-terracotta"> *</span><input id="primaryMarket" name="primaryMarket" required placeholder={spanish ? "Ciudad, región o área de servicio" : "City, region, or service area"} aria-invalid={Boolean(errors.primaryMarket)} aria-describedby={errors.primaryMarket?"primaryMarket-error":undefined} className={control}/><FieldError id="primaryMarket" message={errors.primaryMarket}/></label><SelectField id="teamSize" title={spanish ? "Tamaño aproximado del equipo" : "Approximate team size"} options={teamSizes} displayedOptions={spanish ? optionTranslations.teamSizes : undefined} error={errors.teamSize} locale={locale}/><SelectField id="marketingInvestment" title={spanish ? "Inversión mensual aproximada en marketing" : "Approximate monthly marketing investment"} options={marketingInvestmentRanges} displayedOptions={spanish ? optionTranslations.marketingInvestmentRanges : undefined} error={errors.marketingInvestment} locale={locale}/></div></fieldset>

    <fieldset className="mt-10"><legend className={label}>{spanish ? "Fuentes actuales de oportunidades" : "Current lead sources"}<span className="text-terracotta"> *</span></legend><p className="mt-2 text-xs leading-5 text-charcoal/50">{spanish ? "Selecciona todas las fuentes relevantes." : "Select every meaningful source."}</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{leadSources.map((source, index)=><label key={source} className="flex items-start gap-3 border border-charcoal/15 p-3 text-sm text-charcoal/70"><input type="checkbox" name="currentLeadSources" value={source} className="mt-1 accent-terracotta"/>{spanish ? optionTranslations.leadSources[index] : source}</label>)}</div><FieldError id="currentLeadSources" message={errors.currentLeadSources}/></fieldset>

    <fieldset className="mt-12 border-t border-charcoal/15 pt-8"><legend className="sr-only">{spanish ? "Prioridades de crecimiento" : "Growth priorities"}</legend><p className="eyebrow">{spanish ? "Paso 3 / Prioridades" : "Step 3 / Priorities"}</p><h2 className="mt-3 font-display text-4xl">{spanish ? "Muéstranos dónde se limita el crecimiento." : "Show us where growth feels constrained."}</h2><label htmlFor="biggestConstraint" className={`${label} mt-8`}>{spanish ? "Mayor limitación de crecimiento" : "Biggest growth constraint"}<span className="text-terracotta"> *</span><textarea id="biggestConstraint" name="biggestConstraint" required rows={4} aria-invalid={Boolean(errors.biggestConstraint)} aria-describedby={errors.biggestConstraint?"biggestConstraint-error":undefined} className={control}/><FieldError id="biggestConstraint" message={errors.biggestConstraint}/></label><div className="mt-7 grid gap-x-5 gap-y-7 sm:grid-cols-2"><SelectField id="desiredTimeline" title={spanish ? "Plazo deseado" : "Desired timeline"} options={desiredTimelines} displayedOptions={spanish ? optionTranslations.desiredTimelines : undefined} error={errors.desiredTimeline} locale={locale}/><SelectField id="decisionMakerStatus" title={spanish ? "Participación en la decisión" : "Decision-maker status"} options={decisionMakerStatuses} displayedOptions={spanish ? optionTranslations.decisionMakerStatuses : undefined} error={errors.decisionMakerStatus} locale={locale}/></div><label htmlFor="goals" className={`${label} mt-7`}>{spanish ? "¿Cómo se vería un crecimiento significativo?" : "What would meaningful growth look like?"}<span className="text-terracotta"> *</span><textarea id="goals" name="goals" required rows={4} aria-invalid={Boolean(errors.goals)} aria-describedby={errors.goals?"goals-error":undefined} className={control}/><FieldError id="goals" message={errors.goals}/></label></fieldset>

    <label className="mt-7 flex items-start gap-3 text-xs leading-5 text-charcoal/65"><input name="consent" type="checkbox" required className="mt-1 accent-terracotta"/><span>{spanish ? "Acepto que Lumina Summit Growth me contacte sobre esta solicitud. *" : "I agree that Lumina Summit Growth may contact me about this application. *"}</span></label><FieldError id="consent" message={errors.consent}/>
    {(message||Object.keys(errors).length>0)&&<p role="alert" className="mt-6 border-l-2 border-terracotta pl-4 text-sm leading-6 text-terracotta">{message||(spanish ? "Revisa los campos señalados e inténtalo de nuevo." : "Please review the highlighted fields and try again.")}</p>}
    <button disabled={loading} className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-cream transition hover:bg-terracotta disabled:cursor-wait disabled:opacity-70">{loading?<><LoaderCircle aria-hidden="true" size={15} className="animate-spin"/>{spanish ? "Enviando solicitud" : "Sending application"}</>:<>{spanish ? "Enviar tu solicitud" : "Submit your application"} <ArrowRight aria-hidden="true" size={15}/></>}</button>
  </form>;
}
