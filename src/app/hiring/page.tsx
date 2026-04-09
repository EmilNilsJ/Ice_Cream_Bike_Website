import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function HiringPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow={content.hiring.eyebrow}
        title={content.hiring.title}
        description={content.hiring.description}
      />
      <div className="mt-12 rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <h2 className="text-2xl font-semibold text-[color:var(--navy)]">{content.hiring.roleTitle}</h2>
        <p className="mt-4 text-[color:var(--slate)]">
          {content.hiring.roleDescription}
        </p>
      </div>
    </main>
  );
}
