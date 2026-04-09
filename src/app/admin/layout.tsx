import Link from "next/link";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/commands", label: "Commands" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/content", label: "Content" }
] as const;

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[220px_1fr]">
      <aside className="rounded-[32px] bg-[color:var(--navy)] p-6 text-[color:var(--vanilla)]">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">Admin</p>
        <nav className="mt-6 grid gap-2">
          {adminNav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm text-white/72 hover:bg-white/8 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </main>
  );
}
