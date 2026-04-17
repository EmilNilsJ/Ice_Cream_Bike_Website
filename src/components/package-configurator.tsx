"use client";

import { useState } from "react";
import { serviceAreas } from "@/lib/data";
import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type PackageConfiguratorProps = {
  locale: Locale;
};

export function PackageConfigurator({ locale }: PackageConfiguratorProps) {
  const content = getSiteContent(locale);
  const planner = content.packagePlanner;
  const activeLabel = locale === "nl" ? "Gekozen" : "Selected";
  const optionalLabel = locale === "nl" ? "Optioneel" : "Optional";
  const [packageId, setPackageId] = useState<string>(content.packages[0]?.id ?? "");
  const [guests, setGuests] = useState(80);
  const [durationMinutes, setDurationMinutes] = useState(120);
  const [postalCode, setPostalCode] = useState("211 34");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const selectedPackage = content.packages.find((item) => item.id === packageId) ?? content.packages[0];
  const matchedArea = serviceAreas.find((entry) => entry.postalPrefixes.includes(postalCode.slice(0, 2)))?.name;
  const selectedExtras = content.addOns
    .filter((item) => selectedAddOns.includes(item.id))
    .map((item) => item.name)
    .join(", ");

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1fr_380px]">
      <div className="rounded-[36px] bg-white p-5 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-[color:var(--navy)]">{planner.packageLabel}</label>
            <div className="mt-3 grid gap-3">
              {content.packages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setPackageId(item.id);
                    setDurationMinutes(item.durationMinutes);
                    setGuests(item.guestRange[0]);
                  }}
                  className={`rounded-[24px] border p-4 text-left ${packageId === item.id ? "border-[color:var(--coral)] bg-[color:var(--peach)]" : "border-[color:var(--line)] bg-[color:var(--warm-white)]"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[color:var(--navy)]">{item.name}</h3>
                    <span className="rounded-full bg-[color:var(--sand)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[color:var(--navy)]">
                      {item.guestRange[0]}-{item.guestRange[1]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--slate)]">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.perks.map((perk) => (
                      <span key={perk} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--slate)]">
                        {perk}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[color:var(--navy)]">{planner.guestsLabel}</span>
              <input type="range" min="10" max="500" step="5" value={guests} onChange={(event) => setGuests(Number(event.target.value))} />
              <span className="text-sm text-[color:var(--slate)]">{guests} {planner.guestsSuffix}</span>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[color:var(--navy)]">{planner.durationLabel}</span>
              <input type="range" min="60" max="360" step="30" value={durationMinutes} onChange={(event) => setDurationMinutes(Number(event.target.value))} />
              <span className="text-sm text-[color:var(--slate)]">{durationMinutes} {planner.durationSuffix}</span>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[color:var(--navy)]">{planner.postalCodeLabel}</span>
              <input
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
                className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none"
                placeholder="211 34"
              />
            </label>
            <div>
              <p className="text-sm font-semibold text-[color:var(--navy)]">{planner.addOnsLabel}</p>
              <div className="mt-3 grid gap-3">
                {content.addOns.map((item) => {
                  const active = selectedAddOns.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setSelectedAddOns((current) =>
                          active ? current.filter((id) => id !== item.id) : [...current, item.id]
                        )
                      }
                      className={`rounded-2xl border p-4 text-left ${active ? "border-[color:var(--coral)] bg-[color:var(--peach)]" : "border-[color:var(--line)] bg-[color:var(--warm-white)]"}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-[color:var(--navy)]">{item.name}</span>
                        <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--coral)]">
                          {active ? activeLabel : optionalLabel}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[color:var(--slate)]">{item.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="rounded-[36px] bg-[color:var(--navy)] p-6 text-[color:var(--vanilla)] shadow-[0_25px_80px_rgba(12,17,43,0.22)] md:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">{planner.summaryEyebrow}</p>
        <h3 className="mt-5 text-3xl font-semibold">{planner.summaryTitle}</h3>
        <p className="mt-4 text-sm leading-7 text-white/78">{planner.summaryDescription}</p>
        <div className="mt-8 space-y-4 text-sm">
          <div className="flex justify-between gap-4"><span>{planner.summaryLabels.package}</span><span className="text-right font-semibold">{selectedPackage?.name}</span></div>
          <div className="flex justify-between gap-4"><span>{planner.summaryLabels.guests}</span><span className="text-right font-semibold">{guests}</span></div>
          <div className="flex justify-between gap-4"><span>{planner.summaryLabels.duration}</span><span className="text-right font-semibold">{durationMinutes} {planner.durationSuffix}</span></div>
          <div className="flex justify-between gap-4"><span>{planner.summaryLabels.area}</span><span className="text-right font-semibold">{matchedArea ?? planner.areaFallback}</span></div>
          <div className="flex justify-between gap-4"><span>{planner.summaryLabels.extras}</span><span className="text-right font-semibold">{selectedExtras || planner.extrasFallback}</span></div>
        </div>
        <a href="#quote-form" className="btn-primary mt-8 w-full px-5 py-3 text-center">
          {planner.cta}
        </a>
      </aside>
    </section>
  );
}
