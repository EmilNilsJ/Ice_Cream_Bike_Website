"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import type { Audience, Flavor } from "@/lib/data";
import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type FlavorExplorerProps = {
  locale: Locale;
  flavors: Flavor[];
};

export function FlavorExplorer({ locale, flavors }: FlavorExplorerProps) {
  const content = getSiteContent(locale).flavors;
  const [activeFilter, setActiveFilter] = useState<Audience | "all">("all");

  const filteredFlavors =
    activeFilter === "all"
      ? flavors
      : flavors.filter((flavor) => (flavor.audience as readonly Audience[]).includes(activeFilter));

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap gap-3">
        {content.filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            className={clsx(
              "rounded-full border px-5 py-3 text-sm font-semibold transition",
              activeFilter === filter.value
                ? "border-[color:var(--coral)] bg-[color:var(--coral)] text-[color:var(--warm-white)]"
                : "border-[color:var(--line)] bg-[color:var(--warm-white)] text-[color:var(--navy)]"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filteredFlavors.map((flavor) => (
          <article key={flavor.name} className="grid gap-6 rounded-[32px] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-[220px_1fr]">
            <div className="relative h-64 overflow-hidden rounded-[26px]">
              <Image src={flavor.image} alt={flavor.name} fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="py-3">
              <div className="flex flex-wrap gap-2">
                {flavor.audience.map((audience) => (
                  <span key={audience} className="rounded-full bg-[color:var(--sand)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]">
                    {content.audiences[audience]}
                  </span>
                ))}
                {flavor.seasonal ? (
                  <span className="rounded-full bg-[color:var(--mint)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--navy)]">
                    {content.seasonal}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[color:var(--navy)]">{flavor.name}</h3>
              <p className="mt-3 text-[color:var(--slate)]">{flavor.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {flavor.allergens.map((allergen) => (
                  <span key={allergen} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-sm text-[color:var(--slate)]">
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
