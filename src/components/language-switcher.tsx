import type { Locale } from "@/lib/locale";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  dutchLabel: string;
  englishLabel: string;
};

export function LanguageSwitcher({
  locale,
  label,
  dutchLabel,
  englishLabel
}: LanguageSwitcherProps) {
  return (
    <form
      action="/api/preferences/locale"
      method="post"
      className="flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-2 py-2"
    >
      <span className="px-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--slate)]">
        {label}
      </span>
      <button
        type="submit"
        name="locale"
        value="nl"
        aria-pressed={locale === "nl"}
        className={locale === "nl" ? "btn-toggle-active" : "btn-toggle"}
      >
        {dutchLabel}
      </button>
      <button
        type="submit"
        name="locale"
        value="en"
        aria-pressed={locale === "en"}
        className={locale === "en" ? "btn-toggle-active" : "btn-toggle"}
      >
        {englishLabel}
      </button>
    </form>
  );
}
