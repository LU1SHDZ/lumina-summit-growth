"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";
import { decisionMakerStatuses, desiredTimelines, leadSources, marketingInvestmentRanges, serviceCategories, teamSizes } from "@/lib/qualification-options";

type Step = 1 | 2 | 3;

const control = "mt-2 min-h-12 w-full border border-charcoal/20 bg-white/65 px-4 py-3 text-base font-normal normal-case tracking-normal outline-none transition placeholder:text-charcoal/35 hover:border-charcoal/35 focus:border-terracotta focus:ring-2 focus:ring-terracotta/15";
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
  name: "Ingresa tu nombre.",
  company: "Ingresa el nombre de tu empresa.",
  email: "Ingresa un correo electrónico válido.",
  website: "Usa una URL completa que comience con http:// o https://.",
  gbp: "Usa una URL completa de tu Perfil de Empresa de Google.",
  serviceCategory: "Selecciona la categoría de servicio que mejor corresponda.",
  primaryMarket: "Ingresa la ciudad, región o mercado principal.",
  teamSize: "Selecciona un tamaño aproximado del equipo o deja el campo vacío.",
  currentLeadSources: "Revisa las fuentes de oportunidades seleccionadas.",
  marketingInvestment: "Selecciona un rango válido o deja el campo vacío.",
  biggestConstraint: "Comparte al menos una oración sobre la mayor limitación de crecimiento.",
  desiredTimeline: "Selecciona un plazo válido o deja el campo vacío.",
  decisionMakerStatus: "Selecciona una opción válida o deja el campo vacío.",
  goals: "Comparte al menos una oración o deja este campo vacío.",
  consent: "Confirma que podemos contactarte sobre esta solicitud.",
};

const fieldSteps: Record<string, Step> = {
  name: 1,
  company: 1,
  email: 1,
  phone: 1,
  website: 1,
  gbp: 1,
  serviceCategory: 1,
  primaryMarket: 1,
  teamSize: 2,
  currentLeadSources: 2,
  marketingInvestment: 2,
  biggestConstraint: 2,
  desiredTimeline: 3,
  decisionMakerStatus: 3,
  goals: 3,
  consent: 3,
};

function Optional({ locale }: { locale: Locale }) {
  return <span className="ml-1 font-normal normal-case tracking-normal text-charcoal/40">({locale === "es" ? "opcional" : "optional"})</span>;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span id={`${id}-error`} className="mt-2 block text-xs font-normal normal-case tracking-normal text-terracotta">{message}</span> : null;
}

function SelectField({ id, title, options, displayedOptions, error, locale, required = false }: { id: string; title: string; options: readonly string[]; displayedOptions?: readonly string[]; error?: string; locale: Locale; required?: boolean }) {
  return (
    <label htmlFor={id} className={label}>
      {title}{required ? <span className="text-terracotta"> *</span> : <Optional locale={locale} />}
      <select id={id} name={id} required={required} defaultValue="" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={control}>
        <option value="">{locale === "es" ? "Selecciona una opción" : "Select one"}</option>
        {options.map((option, index) => <option key={option} value={option}>{displayedOptions?.[index] ?? option}</option>)}
      </select>
      <FieldError id={id} message={error} />
    </label>
  );
}

export function FreeAuditForm({ locale = "en" }: { locale?: Locale }) {
  const spanish = locale === "es";
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = spanish
    ? ["Lo esencial", "El reto", "El siguiente paso"]
    : ["The essentials", "The challenge", "The next step"];

  function validateVisibleStep() {
    const panel = formRef.current?.querySelector<HTMLElement>(`[data-step="${step}"]`);
    if (!panel) return false;
    const fields = panel.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea");
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        field.focus();
        return false;
      }
    }
    return true;
  }

  function nextStep() {
    if (!validateVisibleStep()) return;
    setErrors({});
    setMessage("");
    setStep((current) => Math.min(3, current + 1) as Step);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function previousStep() {
    setErrors({});
    setMessage("");
    setStep((current) => Math.max(1, current - 1) as Step);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateVisibleStep()) return;
    setLoading(true);
    setMessage("");
    setErrors({});
    const formData = new FormData(event.currentTarget);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[] | boolean> = Object.fromEntries(formData.entries());
    payload.currentLeadSources = formData.getAll("currentLeadSources");
    payload.consent = formData.get("consent") === "on";

    try {
      const response = await fetch("/api/audit-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json() as { message?: string; errors?: Record<string, string> };
      if (!response.ok) {
        const localizedErrors = spanish && data.errors ? Object.fromEntries(Object.keys(data.errors).map((key) => [key, spanishErrors[key] ?? data.errors?.[key]])) : data.errors;
        const nextErrors = localizedErrors ?? {};
        setErrors(nextErrors);
        const firstErrorStep = Object.keys(nextErrors).reduce<Step>((earliest, key) => Math.min(earliest, fieldSteps[key] ?? 3) as Step, 3);
        if (Object.keys(nextErrors).length) setStep(firstErrorStep);
        const spanishMessage = response.status === 429
          ? "Se enviaron demasiadas solicitudes. Inténtalo de nuevo más tarde."
          : response.status === 503
            ? "Las solicitudes en línea se están configurando. Vuelve pronto."
            : response.status === 400
              ? "Revisa los campos señalados e inténtalo de nuevo."
              : "No pudimos enviar tu solicitud. Inténtalo de nuevo en unos momentos.";
        throw new Error(spanish ? spanishMessage : data.message || "We could not send your application.");
      }
      track("audit_form_submitted");
      setSubmitted(true);
    } catch (error) {
      track("audit_form_error");
      setMessage(error instanceof Error ? error.message : spanish ? "No pudimos enviar tu solicitud. Inténtalo de nuevo." : "We could not send your application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function markStarted() {
    if (!started) {
      setStarted(true);
      track("audit_form_started");
    }
  }

  if (submitted) {
    return (
      <div role="status" className="flex min-h-[32rem] flex-col justify-center border border-charcoal/15 bg-cream p-8 shadow-[10px_10px_0_#C89B3C] sm:p-12">
        <CheckCircle2 size={42} className="text-terracotta" />
        <p className="mt-8 eyebrow">{spanish ? "Solicitud recibida" : "Application received"}</p>
        <h2 className="mt-4 font-display text-5xl leading-[.9]">{spanish ? "Gracias por compartir el contexto." : "Thank you for the context."}</h2>
        <p className="mt-6 max-w-md text-sm leading-6 text-charcoal/65">{spanish ? "Revisaremos la compatibilidad y responderemos usando el correo electrónico que proporcionaste. Enviar la solicitud no crea un compromiso ni obliga a ninguna de las partes a continuar." : "We’ll review the fit and follow up using the email you provided. Submitting the application does not create an engagement or obligate either side to proceed."}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} id="application" onSubmit={submit} onFocus={markStarted} noValidate className="relative min-w-0 scroll-mt-6 overflow-hidden border border-charcoal/15 bg-cream shadow-[10px_10px_0_#C89B3C] sm:shadow-[12px_12px_0_#C89B3C]">
      <div aria-hidden="true" className="absolute -left-[10000px]"><label>{spanish ? "Sitio web de la empresa" : "Company website"}<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>

      <div className="border-b border-charcoal/10 bg-white/35 px-6 py-5 sm:px-9">
        <div className="flex items-center justify-between gap-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-terracotta">{spanish ? `Paso ${step} de 3` : `Step ${step} of 3`}</p>
          <p className="text-xs text-charcoal/45">{steps[step - 1]}</p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
          {[1, 2, 3].map((item) => <span key={item} className={`h-1 transition-colors ${item <= step ? "bg-gold" : "bg-charcoal/10"}`} />)}
        </div>
      </div>

      <div className="p-6 sm:p-9">
        <p className="sr-only" aria-live="polite">{spanish ? `Paso ${step} de 3: ${steps[step - 1]}` : `Step ${step} of 3: ${steps[step - 1]}`}</p>

        <section data-step="1" hidden={step !== 1} aria-labelledby="audit-step-one">
          <p className="eyebrow">{spanish ? "Comencemos con lo esencial" : "Let’s start with the essentials"}</p>
          <h2 id="audit-step-one" className="mt-3 text-pretty font-display text-4xl sm:text-5xl">{spanish ? "¿A quién estamos ayudando?" : "Who are we helping?"}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/55">{spanish ? "Solo pedimos lo necesario para entender tu negocio y preparar una conversación útil." : "We only require what is needed to understand your business and prepare a useful conversation."}</p>

          <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
            <label htmlFor="name" className={label}>{spanish ? "Tu nombre" : "Your name"}<span className="text-terracotta"> *</span><input id="name" name="name" required minLength={2} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={control} /><FieldError id="name" message={errors.name} /></label>
            <label htmlFor="company" className={label}>{spanish ? "Empresa" : "Company"}<span className="text-terracotta"> *</span><input id="company" name="company" required minLength={2} autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} className={control} /><FieldError id="company" message={errors.company} /></label>
            <label htmlFor="email" className={label}>{spanish ? "Correo de trabajo" : "Work email"}<span className="text-terracotta"> *</span><input id="email" name="email" type="email" required autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={control} /><FieldError id="email" message={errors.email} /></label>
            <label htmlFor="phone" className={label}>{spanish ? "Teléfono" : "Phone"}<Optional locale={locale} /><input id="phone" name="phone" type="tel" autoComplete="tel" className={control} /></label>
            <SelectField id="serviceCategory" title={spanish ? "Tipo de negocio" : "Business type"} options={serviceCategories} displayedOptions={spanish ? optionTranslations.serviceCategories : undefined} error={errors.serviceCategory} locale={locale} required />
            <label htmlFor="primaryMarket" className={label}>{spanish ? "Mercado principal" : "Primary market"}<span className="text-terracotta"> *</span><input id="primaryMarket" name="primaryMarket" required minLength={2} placeholder={spanish ? "Ciudad o área de servicio" : "City or service area"} aria-invalid={Boolean(errors.primaryMarket)} aria-describedby={errors.primaryMarket ? "primaryMarket-error" : undefined} className={control} /><FieldError id="primaryMarket" message={errors.primaryMarket} /></label>
          </div>

          <details className="mt-7 border-t border-charcoal/10 pt-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.13em] text-charcoal/60"><span>{spanish ? "Agregar enlaces del negocio (opcional)" : "Add business links (optional)"}</span><span aria-hidden="true" className="text-terracotta">+</span></summary>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <label htmlFor="website" className={label}>{spanish ? "Sitio web" : "Website"}<Optional locale={locale} /><input id="website" name="website" type="url" autoComplete="url" placeholder="https://" aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} className={control} /><FieldError id="website" message={errors.website} /></label>
              <label htmlFor="gbp" className={label}>{spanish ? "Perfil de Empresa de Google" : "Google Business Profile"}<Optional locale={locale} /><input id="gbp" name="gbp" type="url" autoComplete="url" placeholder="https://" aria-invalid={Boolean(errors.gbp)} aria-describedby={errors.gbp ? "gbp-error" : undefined} className={control} /><FieldError id="gbp" message={errors.gbp} /></label>
            </div>
          </details>
        </section>

        <section data-step="2" hidden={step !== 2} aria-labelledby="audit-step-two">
          <p className="eyebrow">{spanish ? "El reto actual" : "The current challenge"}</p>
          <h2 id="audit-step-two" className="mt-3 text-pretty font-display text-4xl sm:text-5xl">{spanish ? "¿Dónde se siente detenido el crecimiento?" : "Where does growth feel stuck?"}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/55">{spanish ? "Una respuesta honesta es más útil que información perfecta." : "An honest answer is more useful than perfect information."}</p>

          <label htmlFor="biggestConstraint" className={`${label} mt-8`}>{spanish ? "Mayor limitación de crecimiento" : "Biggest growth constraint"}<span className="text-terracotta"> *</span><textarea id="biggestConstraint" name="biggestConstraint" required minLength={20} rows={4} placeholder={spanish ? "Por ejemplo: recibimos consultas, pero el seguimiento es inconsistente…" : "For example: we receive inquiries, but follow-up is inconsistent…"} aria-invalid={Boolean(errors.biggestConstraint)} aria-describedby={errors.biggestConstraint ? "biggestConstraint-error" : undefined} className={control} /><FieldError id="biggestConstraint" message={errors.biggestConstraint} /></label>

          <fieldset className="mt-7">
            <legend className={label}>{spanish ? "Fuentes actuales de oportunidades" : "Current lead sources"}<Optional locale={locale} /></legend>
            <p className="mt-2 text-xs leading-5 text-charcoal/45">{spanish ? "Selecciona solo las que importan." : "Select only the meaningful ones."}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {leadSources.map((source, index) => <label key={source} className="cursor-pointer"><input type="checkbox" name="currentLeadSources" value={source} className="peer sr-only" /><span className="inline-flex min-h-10 items-center border border-charcoal/15 bg-white/45 px-3 py-2 text-xs text-charcoal/65 transition hover:border-terracotta/50 peer-checked:border-terracotta peer-checked:bg-terracotta peer-checked:text-cream peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-terracotta">{spanish ? optionTranslations.leadSources[index] : source}</span></label>)}
            </div>
            <FieldError id="currentLeadSources" message={errors.currentLeadSources} />
          </fieldset>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <SelectField id="teamSize" title={spanish ? "Tamaño del equipo" : "Team size"} options={teamSizes} displayedOptions={spanish ? optionTranslations.teamSizes : undefined} error={errors.teamSize} locale={locale} />
            <SelectField id="marketingInvestment" title={spanish ? "Inversión mensual en marketing" : "Monthly marketing investment"} options={marketingInvestmentRanges} displayedOptions={spanish ? optionTranslations.marketingInvestmentRanges : undefined} error={errors.marketingInvestment} locale={locale} />
          </div>
        </section>

        <section data-step="3" hidden={step !== 3} aria-labelledby="audit-step-three">
          <p className="eyebrow">{spanish ? "El siguiente paso" : "The next step"}</p>
          <h2 id="audit-step-three" className="mt-3 text-pretty font-display text-4xl sm:text-5xl">{spanish ? "¿Qué te gustaría mejorar?" : "What would you like to improve?"}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/55">{spanish ? "Estos detalles son opcionales. Compártelos si nos ayudan a preparar mejor la conversación." : "These details are optional. Share them when they help us prepare a better conversation."}</p>

          <label htmlFor="goals" className={`${label} mt-8`}>{spanish ? "Un resultado significativo" : "A meaningful outcome"}<Optional locale={locale} /><textarea id="goals" name="goals" minLength={20} rows={4} placeholder={spanish ? "Por ejemplo: más consultas calificadas y un proceso claro para responder…" : "For example: more qualified inquiries and a clear response process…"} aria-invalid={Boolean(errors.goals)} aria-describedby={errors.goals ? "goals-error" : undefined} className={control} /><FieldError id="goals" message={errors.goals} /></label>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <SelectField id="desiredTimeline" title={spanish ? "Plazo deseado" : "Desired timeline"} options={desiredTimelines} displayedOptions={spanish ? optionTranslations.desiredTimelines : undefined} error={errors.desiredTimeline} locale={locale} />
            <SelectField id="decisionMakerStatus" title={spanish ? "Participación en la decisión" : "Decision-making role"} options={decisionMakerStatuses} displayedOptions={spanish ? optionTranslations.decisionMakerStatuses : undefined} error={errors.decisionMakerStatus} locale={locale} />
          </div>

          <label className="mt-8 flex cursor-pointer items-start gap-3 border border-charcoal/15 bg-white/45 p-4 text-xs leading-5 text-charcoal/65"><input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-terracotta" /><span>{spanish ? "Acepto que Lumina Summit Growth me contacte sobre esta solicitud. *" : "I agree that Lumina Summit Growth may contact me about this application. *"}</span></label>
          <FieldError id="consent" message={errors.consent} />
        </section>

        {(message || Object.keys(errors).length > 0) && <p role="alert" className="mt-6 border-l-2 border-terracotta pl-4 text-sm leading-6 text-terracotta">{message || (spanish ? "Revisa los campos señalados e inténtalo de nuevo." : "Please review the highlighted fields and try again.")}</p>}

        <div className="mt-9 flex items-center justify-between gap-3 border-t border-charcoal/10 pt-6">
          {step > 1 ? <button type="button" onClick={previousStep} className="inline-flex min-h-12 items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.13em] text-charcoal/60 transition hover:text-terracotta"><ArrowLeft aria-hidden="true" size={15} />{spanish ? "Atrás" : "Back"}</button> : <span />}
          {step < 3 ? <button type="button" onClick={nextStep} className="inline-flex min-h-12 items-center justify-center gap-3 bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-cream transition hover:bg-terracotta">{spanish ? "Continuar" : "Continue"}<ArrowRight aria-hidden="true" size={15} /></button> : <button disabled={loading} className="inline-flex min-h-12 items-center justify-center gap-3 bg-charcoal px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-cream transition hover:bg-terracotta disabled:cursor-wait disabled:opacity-70">{loading ? <><LoaderCircle aria-hidden="true" size={15} className="animate-spin" />{spanish ? "Enviando" : "Sending"}</> : <>{spanish ? "Enviar solicitud" : "Submit application"}<ArrowRight aria-hidden="true" size={15} /></>}</button>}
        </div>
      </div>
    </form>
  );
}
