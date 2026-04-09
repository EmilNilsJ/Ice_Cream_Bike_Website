import type { Route } from "next";
import Link from "next/link";

type SiteFooterProps = {
  navigation: ReadonlyArray<{ href: string; label: string }>;
  brand: {
    name: string;
    tagline: string;
  };
  footer: {
    explore: string;
    information: string;
    description: string;
    serviceArea: string;
  };
};

export function SiteFooter({ navigation, brand, footer }: SiteFooterProps) {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper-strong)] py-14 text-[color:var(--navy)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-semibold">{brand.name}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[color:var(--coral)]">{brand.tagline}</p>
          <p className="mt-4 max-w-sm text-sm text-[color:var(--slate)]">
            {footer.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">{footer.explore}</p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href as Route} className="text-sm text-[color:var(--slate)] hover:text-[color:var(--navy)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">{footer.information}</p>
          <div className="mt-4 space-y-2 text-sm text-[color:var(--slate)]">
            <p>hello@icecreambike.se</p>
            <p>+46 40 555 11 22</p>
            <p>{footer.serviceArea}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
