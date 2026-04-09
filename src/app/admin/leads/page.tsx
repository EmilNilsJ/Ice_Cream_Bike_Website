const sampleLeads = [
  { name: "Bright Harbor", type: "Company", stage: "Quoted", date: "2026-06-14" },
  { name: "Lina Karlsson", type: "Family", stage: "New", date: "2026-05-08" },
  { name: "Northline Summit", type: "Company", stage: "Booked", date: "2026-09-02" }
];

export default function AdminLeadsPage() {
  return (
    <section className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <h1 className="text-3xl font-semibold text-[color:var(--navy)]">Lead pipeline</h1>
      <div className="mt-8 grid gap-4">
        {sampleLeads.map((lead) => (
          <article key={`${lead.name}-${lead.date}`} className="grid gap-2 rounded-[24px] border border-[color:var(--line)] p-5 md:grid-cols-4">
            <p className="font-semibold text-[color:var(--navy)]">{lead.name}</p>
            <p className="text-[color:var(--slate)]">{lead.type}</p>
            <p className="text-[color:var(--slate)]">{lead.stage}</p>
            <p className="text-[color:var(--slate)]">{lead.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
