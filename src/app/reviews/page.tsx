import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";
import { getTestimonials } from "@/sanity/queries";

export default async function ReviewsPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);
  const testimonials = await getTestimonials();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow={content.reviews.eyebrow}
          title={content.reviews.title}
          description={content.reviews.description}
        />
      </section>
      <TestimonialCarousel locale={locale} testimonials={testimonials} />
    </main>
  );
}
