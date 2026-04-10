import { SectionHeading } from "@/components/section-heading";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";
import { getJobOpenings } from "@/sanity/queries";

const employmentTypeLabels: Record<string, { en: string; nl: string }> = {
  seasonal: { en: "Seasonal", nl: "Seizoenswerk" },
  "part-time": { en: "Part-time", nl: "Deeltijd" },
  "full-time": { en: "Full-time", nl: "Fulltime" }
};

export default async function HiringPage() {
  const locale = await getLocale();
  const content = getSiteContent(locale);
  const jobs = await getJobOpenings();

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow={content.hiring.eyebrow}
        title={content.hiring.title}
        description={content.hiring.description}
      />

      {jobs.length === 0 ? (
        <div className="mt-12 rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-semibold text-[color:var(--navy)]">{content.hiring.roleTitle}</h2>
          <p className="mt-4 text-[color:var(--slate)]">{content.hiring.roleDescription}</p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6">
          {jobs.map((job, i) => {
            const title = locale === "nl" ? job.titleNl : job.titleEn;
            const description = locale === "nl" ? job.descriptionNl : job.descriptionEn;
            const requirementsRaw = locale === "nl" ? job.requirementsNl : job.requirementsEn;
            const requirements = requirementsRaw
              ? requirementsRaw.split("\n").map((r) => r.trim()).filter(Boolean)
              : [];
            const typeLabel = employmentTypeLabels[job.employmentType]?.[locale] ?? job.employmentType;

            return (
              <article
                key={i}
                className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-[color:var(--navy)]">{title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[color:var(--sand)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--navy)]">
                      {typeLabel}
                    </span>
                    {job.location && (
                      <span className="rounded-full border border-[color:var(--line)] px-4 py-1.5 text-xs text-[color:var(--slate)]">
                        {job.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-5 leading-7 text-[color:var(--slate)]">{description}</p>

                {requirements.length > 0 && (
                  <ul className="mt-6 grid gap-2">
                    {requirements.map((req, ri) => (
                      <li key={ri} className="flex items-start gap-3 text-[color:var(--slate)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--coral)]" />
                        {req}
                      </li>
                    ))}
                  </ul>
                )}

                {job.applyEmail && (
                  <div className="mt-8">
                    <a
                      href={`mailto:${job.applyEmail}`}
                      className="btn-primary inline-block px-6 py-3"
                    >
                      {locale === "nl" ? "Solliciteer nu" : "Apply now"}
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
