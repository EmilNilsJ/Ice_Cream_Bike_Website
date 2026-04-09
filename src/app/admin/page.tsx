export default function AdminPage() {
  return (
    <section className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <h1 className="text-3xl font-semibold text-[color:var(--navy)]">Dashboard shell</h1>
      <p className="mt-4 max-w-2xl text-[color:var(--slate)]">
        This is the protected area for editor and admin roles: quotes, bookings, testimonials, flavors, seasonal publishing, and audit-friendly content updates.
      </p>
    </section>
  );
}
