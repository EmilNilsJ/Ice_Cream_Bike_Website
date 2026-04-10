"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";

type MobileMenuProps = {
  navigation: ReadonlyArray<{ href: string; label: string }>;
  bookingCta: string;
};

export function MobileMenu({ navigation, bookingCta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] md:hidden"
      >
        <span className={`h-[2px] w-5 rounded-full bg-[color:var(--navy)] transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`h-[2px] w-5 rounded-full bg-[color:var(--navy)] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`h-[2px] w-5 rounded-full bg-[color:var(--navy)] transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-[color:var(--line)] bg-[color:var(--paper)]/96 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href as Route}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-[color:var(--slate)] transition hover:bg-[color:var(--warm-white)] hover:text-[color:var(--navy)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 border-t border-[color:var(--line)] pt-5">
            <Link
              href={"/booking" as Route}
              onClick={() => setOpen(false)}
              className="btn-primary block w-full py-3 text-center text-sm"
            >
              {bookingCta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
