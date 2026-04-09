import { adminCommands } from "@/lib/data";

export default function AdminCommandsPage() {
  return (
    <section className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <h1 className="text-3xl font-semibold text-[color:var(--navy)]">Slash command registry</h1>
      <div className="mt-8 grid gap-4">
        {adminCommands.map((command) => (
          <article key={command.name} className="rounded-[24px] border border-[color:var(--line)] p-5">
            <p className="font-mono text-sm text-[color:var(--coral)]">{command.name}</p>
            <p className="mt-2 text-[color:var(--slate)]">{command.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
