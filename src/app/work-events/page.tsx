import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function WorkEventsPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow={content.workEvents.eyebrow}
        title={content.workEvents.title}
        description={content.workEvents.description}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.workEvents.items.map((item) => (
          <article key={item} className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <p className="text-lg text-[color:var(--slate)]">{item}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/booking" className="btn-primary px-5 py-3">
          {content.workEvents.cta}
        </Link>
      </div>
    </main>
  );
}
