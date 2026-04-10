import { FlavorExplorer } from "@/components/flavor-explorer";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";
import { getFlavors } from "@/sanity/queries";

export default async function IceCreamPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);
  const flavors = await getFlavors(locale);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow={content.iceCream.eyebrow}
          title={content.iceCream.title}
          description={content.iceCream.description}
        />
      </section>
      <FlavorExplorer locale={locale} flavors={flavors} />
    </main>
  );
}
