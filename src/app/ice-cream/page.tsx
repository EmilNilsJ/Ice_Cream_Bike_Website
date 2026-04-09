import { FlavorExplorer } from "@/components/flavor-explorer";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function IceCreamPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow={content.iceCream.eyebrow}
          title={content.iceCream.title}
          description={content.iceCream.description}
        />
      </section>
      <FlavorExplorer locale={locale} />
    </main>
  );
}
