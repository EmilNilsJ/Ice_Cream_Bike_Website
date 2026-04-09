import { PackageConfigurator } from "@/components/package-configurator";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function BookingPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow={content.booking.eyebrow}
          title={content.booking.title}
          description={content.booking.description}
        />
      </section>
      <PackageConfigurator locale={locale} />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeading
          eyebrow={content.booking.detailsEyebrow}
          title={content.booking.detailsTitle}
          description={content.booking.detailsDescription}
        />
        <div className="mt-10" id="quote-form">
          <QuoteForm locale={locale} />
        </div>
      </section>
    </main>
  );
}
