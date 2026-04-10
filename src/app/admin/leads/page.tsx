import { supabase } from "@/lib/supabase";

type Lead = {
  id: string;
  name: string;
  customer_type: string;
  email: string;
  phone: string;
  event_date: string;
  package_id: string;
  guests: number;
  estimated_price: number | null;
  stage: string;
  created_at: string;
};

const stageColors: Record<string, string> = {
  New: "bg-blue-100 text-blue-800",
  Quoted: "bg-yellow-100 text-yellow-800",
  Booked: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800"
};

export default async function AdminLeadsPage() {
  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <section className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <h1 className="text-3xl font-semibold text-[color:var(--navy)]">Lead pipeline</h1>

      {error && (
        <p className="mt-4 text-red-600">Failed to load leads: {error.message}</p>
      )}

      {!error && (!leads || leads.length === 0) && (
        <p className="mt-8 text-[color:var(--slate)]">No leads yet.</p>
      )}

      {leads && leads.length > 0 && (
        <div className="mt-8 grid gap-4">
          {leads.map((lead: Lead) => (
            <article
              key={lead.id}
              className="grid gap-2 rounded-[24px] border border-[color:var(--line)] p-5 md:grid-cols-5"
            >
              <div>
                <p className="font-semibold text-[color:var(--navy)]">{lead.name}</p>
                <p className="text-sm text-[color:var(--slate)]">{lead.email}</p>
              </div>
              <p className="text-[color:var(--slate)] capitalize">{lead.customer_type}</p>
              <p className="text-[color:var(--slate)]">{lead.event_date}</p>
              <p className="text-[color:var(--slate)]">
                {lead.estimated_price != null
                  ? `${lead.estimated_price.toLocaleString("sv-SE")} kr`
                  : "-"}
              </p>
              <span
                className={`inline-flex h-fit items-center rounded-full px-3 py-1 text-sm font-medium ${stageColors[lead.stage] ?? "bg-gray-100 text-gray-700"}`}
              >
                {lead.stage}
              </span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
