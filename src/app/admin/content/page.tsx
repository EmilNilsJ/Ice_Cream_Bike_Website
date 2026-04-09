export default function AdminContentPage() {
  return (
    <section className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <h1 className="text-3xl font-semibold text-[color:var(--navy)]">Content modules</h1>
      <p className="mt-4 max-w-2xl text-[color:var(--slate)]">
        Page sections, testimonial cards, flavor entries, gallery assets, and FAQ blocks should all be editable here through a CMS-style model backed by the Prisma entities.
      </p>
    </section>
  );
}
