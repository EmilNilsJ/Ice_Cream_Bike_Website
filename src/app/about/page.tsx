import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function AboutPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        description={content.about.description}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {content.about.cards.map((item) => (
          <article key={item} className="rounded-[28px] bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
            <p className="text-[color:var(--slate)]">{item}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
