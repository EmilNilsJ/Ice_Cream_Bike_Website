"use client";

import { useState, useEffect, useRef } from "react";
import type { Route } from "next";
import Link from "next/link";

type MobileNavProps = {
  navigation: ReadonlyArray<{ href: string; label: string }>;
  bookingCta: string;
};

export function MobileNav({ navigation, bookingCta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close menu on route change (link click)
  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative mr-2 md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md text-[color:var(--navy)] transition hover:bg-[color:var(--paper-strong)]"
      >
        <span
          className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-xl border border-[color:var(--line)] bg-[color:var(--paper)] shadow-lg">
          <nav className="flex flex-col p-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href as Route}
                onClick={handleLinkClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[color:var(--slate)] transition hover:bg-[color:var(--paper-strong)] hover:text-[color:var(--navy)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mx-4 my-2 border-t border-[color:var(--line)]" />
            <Link
              href={"/booking" as Route}
              onClick={handleLinkClick}
              className="btn-primary mx-2 mb-1 px-4 py-2.5 text-center text-sm"
            >
              {bookingCta}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
