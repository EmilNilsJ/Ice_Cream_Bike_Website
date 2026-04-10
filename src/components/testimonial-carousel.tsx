import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type Testimonial = {
  author: string;
  role: string;
  quote: string;
};

type TestimonialGridProps = {
  locale: Locale;
  testimonials: Testimonial[];
};

export function TestimonialCarousel({ locale, testimonials }: TestimonialGridProps) {
  const content = getSiteContent(locale);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.author} className="rounded-[32px] bg-[color:var(--navy)] p-8 text-[color:var(--vanilla)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">{content.reviews.proofLabel}</p>
            <p className="mt-5 text-xl font-semibold leading-snug">"{item.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold">{item.author}</p>
              <p className="text-sm text-white/72">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
