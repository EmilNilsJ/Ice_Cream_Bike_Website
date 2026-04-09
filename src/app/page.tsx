import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export default async function HomePage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);
  const routeLabel = locale === "nl" ? "Snelle route" : "Quick route";

  return (
    <main>
      <div className="hero-surface">
        <HeroScene locale={locale} />
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {content.home.quickRoutes.map((item) => (
          <article key={item.title} className="rounded-[32px] border border-[color:var(--line)] bg-[color:var(--paper)] p-8 shadow-[0_20px_60px_rgba(79,59,40,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--coral)]">{routeLabel}</p>
            <h2 className="font-heading mt-4 text-3xl font-semibold text-[color:var(--navy)]">{item.title}</h2>
            <p className="mt-4 text-[color:var(--slate)]">{item.text}</p>
            <div className="mt-8">
              <Link href={item.href} className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--navy)]">
                {item.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-5">
          {content.home.chips.map((item) => (
            <div key={item} className="rounded-full border border-[color:var(--line)] bg-[color:var(--warm-white)] px-4 py-3 text-center text-sm text-[color:var(--navy)] shadow-[0_10px_25px_rgba(79,59,40,0.05)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow={content.home.story.eyebrow}
            title={content.home.story.title}
            description={content.home.story.description}
          />
          <div className="mt-8 rounded-[34px] border border-[color:var(--line)] bg-[color:var(--paper)] p-8 shadow-[0_20px_50px_rgba(79,59,40,0.08)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--coral)]">{content.home.story.founderLabel}</p>
            <p className="mt-5 text-xl leading-9 text-[color:var(--navy)]">
              “{content.home.story.founderQuote}”
            </p>
          </div>
        </div>
        <div className="grid gap-5">
          {content.home.values.map((card) => (
            <article key={card.title} className="rounded-[30px] border border-[color:var(--line)] bg-[color:var(--warm-white)] p-7">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--coral)]">{card.title}</p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--slate)]">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[40px] border border-[color:var(--line)] bg-[color:var(--paper)] p-10 shadow-[0_24px_70px_rgba(79,59,40,0.08)]">
          <SectionHeading
            eyebrow={content.home.trusted.eyebrow}
            title={content.home.trusted.title}
            description={content.home.trusted.description}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {content.home.trusted.items.map((label) => (
              <div key={label} className="font-heading rounded-[26px] border border-[color:var(--line)] bg-[color:var(--warm-white)] px-6 py-8 text-center text-2xl font-semibold text-[color:var(--navy)]">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 rounded-[40px] border border-[color:var(--line)] bg-[linear-gradient(180deg,#fff8ef_0%,#f7e9d4_100%)] p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--coral)]">{content.home.cta.eyebrow}</p>
            <h2 className="font-heading mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--navy)] md:text-5xl">
              {content.home.cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--slate)]">
              {content.home.cta.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/booking" className="btn-primary px-6 py-3">
              {content.home.cta.primary}
            </Link>
            <Link href="/contact" className="btn-secondary px-6 py-3">
              {content.home.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[40px] border border-[color:var(--line)] bg-[color:var(--warm-white)] p-10 shadow-[0_24px_70px_rgba(79,59,40,0.08)]">
          <SectionHeading
            eyebrow={content.home.faqSection.eyebrow}
            title={content.home.faqSection.title}
            description={content.home.faqSection.description}
          />
          <div className="mt-10 grid gap-4">
            {content.home.faqs.map((faq) => (
              <article key={faq.question} className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--paper)] p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--coral)]">{faq.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-[color:var(--navy)]">{faq.question}</h3>
                <p className="mt-3 text-[color:var(--slate)]">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-accent px-5 py-3">
              {content.home.faqCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
