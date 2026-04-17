"use client";

import { useState } from "react";
import { serviceAreas } from "@/lib/data";

export function ServiceAreaChecker() {
  const [postalCode, setPostalCode] = useState("211 34");

  const prefix = postalCode.slice(0, 2);
  const area = serviceAreas.find((entry) => entry.postalPrefixes.includes(prefix));
  const result = {
    area: area?.name ?? "Extended service zone"
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.8fr_1fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--coral)]">Regional rentals</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--navy)] sm:text-3xl md:text-4xl">Check whether your event is inside the main service route.</h2>
        <p className="mt-5 max-w-xl text-lg text-[color:var(--slate)]">
          Use this to see whether your event falls inside the main service area before you contact us. Travel details are discussed directly after contact.
        </p>
      </div>
      <div className="rounded-[36px] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
        <label className="grid gap-3">
          <span className="text-sm font-semibold text-[color:var(--navy)]">Event postal code</span>
          <input
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            className="rounded-2xl border border-[color:var(--line)] px-4 py-3 outline-none"
          />
        </label>
        <div className="mt-6 grid gap-4 rounded-[28px] bg-[color:var(--sand)] p-5">
          <div className="flex justify-between text-sm">
            <span className="text-[color:var(--slate)]">Matched area</span>
            <span className="font-semibold text-[color:var(--navy)]">{result.area}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
