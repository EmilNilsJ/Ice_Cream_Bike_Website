"use client";

import { useState } from "react";
import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type QuoteResponse =
  | { ok: true; estimate: { total: number; travelFee: number } }
  | { ok: false; message: string };

type QuoteFormProps = {
  locale: Locale;
};

export function QuoteForm({ locale }: QuoteFormProps) {
  const content = getSiteContent(locale);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus("");

    const payload = {
      customerType: formData.get("customerType"),
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      eventDate: formData.get("eventDate"),
      location: formData.get("location"),
      postalCode: formData.get("postalCode"),
      guests: Number(formData.get("guests")),
      packageId: formData.get("packageId"),
      durationMinutes: Number(formData.get("durationMinutes")),
      addOnIds: formData.getAll("addOnIds"),
      message: formData.get("message"),
      _hp: formData.get("_hp")
    };

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as QuoteResponse;

      if (!response.ok || !result.ok) {
        throw new Error("message" in result ? result.message : content.quoteForm.error);
      }

      setStatus(content.quoteForm.success);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : content.quoteForm.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="grid gap-4 rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-2 md:p-8">
      <input name="_hp" type="text" tabIndex={-1} aria-hidden="true" autoComplete="off" className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0" />
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.customerType}</span>
        <select name="customerType" className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none">
          <option value="company">{content.quoteForm.customerTypes.company}</option>
          <option value="family">{content.quoteForm.customerTypes.family}</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.package}</span>
        <select name="packageId" className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none">
          {content.packages.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      {(["name", "company", "email", "phone", "eventDate", "location", "postalCode"] as const).map((field) => (
        <label key={field} className="grid gap-2">
          <span className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.fields[field]}</span>
          <input
            name={field}
            type={field === "email" ? "email" : field === "eventDate" ? "date" : "text"}
            className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none"
          />
        </label>
      ))}
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.fields.guests}</span>
        <input name="guests" type="number" min="10" defaultValue="80" className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.fields.durationMinutes}</span>
        <input name="durationMinutes" type="number" min="60" step="30" defaultValue="120" className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none" />
      </label>
      <fieldset className="grid gap-3 md:col-span-2">
        <legend className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.addOns}</legend>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {content.addOns.map((item) => (
            <label key={item.id} className="rounded-[24px] border border-[color:var(--line)] p-4">
              <input type="checkbox" name="addOnIds" value={item.id} className="mr-3" />
              <span className="font-semibold text-[color:var(--navy)]">{item.name}</span>
              <p className="mt-2 text-sm text-[color:var(--slate)]">{item.description}</p>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-sm font-semibold text-[color:var(--navy)]">{content.quoteForm.fields.message}</span>
        <textarea name="message" rows={5} className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none" />
      </label>
      <div className="md:col-span-2">
        <button type="submit" disabled={loading} className="btn-accent px-5 py-3 disabled:opacity-60">
          {loading ? content.quoteForm.submitting : content.quoteForm.submit}
        </button>
        {status ? <p className="mt-4 text-sm text-[color:var(--slate)]">{status}</p> : null}
      </div>
    </form>
  );
}
