import type { Route } from "next";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/locale";

type SiteHeaderProps = {
  locale: Locale;
  navigation: ReadonlyArray<{ href: string; label: string }>;
  brand: {
    name: string;
    tagline: string;
  };
  ui: {
    languageLabel: string;
    dutch: string;
    english: string;
    bookingCta: string;
  };
};

export function SiteHeader({ locale, navigation, brand, ui }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--paper)]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="leading-none text-[color:var(--navy)]">
          <span className="font-heading block text-lg font-semibold tracking-tight">
            {brand.name}
          </span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-[color:var(--slate)]">
            {brand.tagline}
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href as Route} className="text-sm text-[color:var(--slate)] transition hover:text-[color:var(--navy)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={ui.languageLabel} dutchLabel={ui.dutch} englishLabel={ui.english} />
          <Link href={"/booking" as Route} className="btn-primary px-5 py-2 text-sm">
            {ui.bookingCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
