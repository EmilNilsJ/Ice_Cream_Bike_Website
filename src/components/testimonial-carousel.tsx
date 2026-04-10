"use client";

import { useEffect, useState } from "react";
import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type Testimonial = {
  author: string;
  role: string;
  quote: string;
};

type TestimonialCarouselProps = {
  locale: Locale;
  testimonials: Testimonial[];
};

export function TestimonialCarousel({ locale, testimonials }: TestimonialCarouselProps) {
  const content = getSiteContent(locale);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const active = testimonials[index];

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-[40px] bg-[color:var(--navy)] p-10 text-[color:var(--vanilla)]">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--mint)]">{content.reviews.proofLabel}</p>
        <p className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">"{active.quote}"</p>
        <div className="mt-6 flex items-center justify-between gap-6">
          <div>
            <p className="font-semibold">{active.author}</p>
            <p className="text-sm text-white/72">{active.role}</p>
          </div>
          <div className="flex gap-2">
            {testimonials.map((entry, dotIndex) => (
              <button
                key={entry.author}
                type="button"
                aria-label={`${content.reviews.carouselLabel} ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-3 w-10 rounded-full border ${dotIndex === index ? "border-[color:var(--coral)] bg-[color:var(--coral)]" : "border-white/20 bg-white/18"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
