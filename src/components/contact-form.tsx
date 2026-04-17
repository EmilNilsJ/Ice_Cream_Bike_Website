"use client";

import { useState } from "react";
import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type ContactResponse =
  | { ok: true; message: string }
  | { ok: false; message: string };

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const content = getSiteContent(locale).contact.form;
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus("");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as ContactResponse;

      if (!response.ok || !result.ok) {
        throw new Error(result.message);
      }

      setStatus(result.message);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : content.fallbackError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="mt-12 grid gap-4 rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-2 md:p-8">
      {(["name", "email", "phone", "company"] as const).map((field) => (
        <label key={field} className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--navy)]">{content.fields[field]}</span>
          <input
            name={field}
            type={field === "email" ? "email" : "text"}
            className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none"
          />
        </label>
      ))}
      <label className="grid gap-2 md:col-span-2">
        <span className="text-sm font-semibold text-[color:var(--navy)]">{content.fields.message}</span>
        <textarea name="message" rows={6} className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none" />
      </label>
      <div className="md:col-span-2">
        <button type="submit" disabled={loading} className="btn-accent px-5 py-3 disabled:opacity-60">
          {loading ? content.submitting : content.submit}
        </button>
        {status ? <p className="mt-4 text-sm text-[color:var(--slate)]">{status}</p> : null}
      </div>
    </form>
  );
}
