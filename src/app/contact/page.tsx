import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function ContactPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        description={content.contact.description}
      />
      <ContactForm locale={locale} />
    </main>
  );
}
