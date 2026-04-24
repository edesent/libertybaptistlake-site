"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitVisitForm, type VisitFormState } from "@/app/visit/actions";

const initialState: VisitFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold text-sm tracking-wide uppercase px-9 py-4 rounded-full hover:bg-teal-light hover:text-ink hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(47,153,149,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
    >
      {pending ? "Sending…" : "Send My Note"}
      {!pending && <span aria-hidden="true">→</span>}
    </button>
  );
}

export default function VisitForm() {
  const [state, formAction] = useActionState(submitVisitForm, initialState);
  const [loadedAt, setLoadedAt] = useState<number | null>(null);

  useEffect(() => {
    setLoadedAt(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <div className="bg-cream rounded-3xl p-10 md:p-14 text-center border border-cream-dark">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-teal/15 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 text-teal-dark">
            <polyline points="4 12 10 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-dark mb-3">
          Your note is on its way
        </h3>
        <p className="text-text-body text-lg leading-relaxed max-w-xl mx-auto">
          {state.message}
        </p>
      </div>
    );
  }

  const err = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="bg-cream rounded-3xl p-8 md:p-12 border border-cream-dark">
      <input type="hidden" name="loadedAt" value={loadedAt ?? ""} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required error={err.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" error={err.email} autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" error={err.phone} autoComplete="tel" />
        <SelectField label="When you're thinking of visiting" name="service" />
      </div>

      <div className="mt-5">
        <label className="block text-[0.7rem] font-bold tracking-[0.25em] uppercase text-teal-dark mb-2">
          Anything you&rsquo;d like us to know?
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full bg-warm-white border border-cream-dark rounded-xl px-4 py-3 text-text-dark placeholder-text-light focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/25 transition-all resize-none"
          placeholder="Questions, prayer requests, kids coming along, or anything at all."
        />
        {err.message && <p className="mt-2 text-sm text-red-700">{err.message}</p>}
      </div>

      {state.status === "error" && !state.fieldErrors && (
        <p className="mt-5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {state.message}
        </p>
      )}
      {state.status === "error" && state.fieldErrors && (
        <p className="mt-5 text-sm text-red-700">{state.message}</p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-text-light">
          No spam, ever. Pastor Ross will reach out personally.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.7rem] font-bold tracking-[0.25em] uppercase text-teal-dark mb-2">
        {label}
        {required && <span className="text-amber-dark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`w-full bg-warm-white border rounded-xl px-4 py-3 text-text-dark placeholder-text-light focus:outline-none focus:ring-2 transition-all ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
            : "border-cream-dark focus:border-teal focus:ring-teal/25"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  );
}

function SelectField({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.7rem] font-bold tracking-[0.25em] uppercase text-teal-dark mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full bg-warm-white border border-cream-dark rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/25 transition-all appearance-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%236c7185' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          paddingRight: "2.5rem",
        }}
      >
        <option value="">Not sure yet</option>
        <option>This Sunday morning (11 AM)</option>
        <option>Sunday School (10 AM)</option>
        <option>Sunday evening (6 PM)</option>
        <option>Thursday prayer (6:30 PM)</option>
        <option>A future Sunday</option>
      </select>
    </div>
  );
}
