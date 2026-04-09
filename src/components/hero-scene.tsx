"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getSiteContent } from "@/lib/site-content";
import type { Locale } from "@/lib/locale";

type HeroSceneProps = {
  locale: Locale;
};

export function HeroScene({ locale }: HeroSceneProps) {
  const content = getSiteContent(locale).hero;

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-24">
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top_left,_rgba(177,79,61,0.14),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(214,181,106,0.18),_transparent_34%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--coral)]">{content.eyebrow}</p>
          <h1 className="font-heading mt-6 max-w-4xl text-5xl font-semibold leading-none tracking-tight text-[color:var(--navy)] md:text-7xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--slate)]">
            {content.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/booking" className="btn-primary px-6 py-3">
              {content.primaryCta}
            </Link>
            <Link href="/about" className="btn-secondary px-6 py-3">
              {content.secondaryCta}
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {content.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
                className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--paper)] p-5 shadow-[0_20px_45px_rgba(79,59,40,0.08)]"
              >
                <p className="text-2xl font-semibold text-[color:var(--navy)]">{metric.value}</p>
                <p className="mt-2 text-sm text-[color:var(--slate)]">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[560px]"
        >
          <div className="absolute right-6 top-8 h-28 w-28 rounded-full bg-[color:var(--butter)]/80 blur-3xl" />
          <div className="absolute left-0 top-14 h-20 w-20 rounded-full bg-[color:var(--coral)]/15 blur-2xl" />
          <div className="absolute inset-0 rounded-[44px] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,252,247,0.9),rgba(255,247,238,0.82))] p-8 shadow-[0_35px_90px_rgba(79,59,40,0.12)]">
            <div className="relative h-full rounded-[34px] bg-[linear-gradient(180deg,#f2e2c3_0%,#fff9f0_48%,#f0debc_100%)]">
              <div className="absolute left-10 top-10 right-10 rounded-[26px] border border-[color:var(--line)] bg-[color:var(--warm-white)] p-5 shadow-[0_20px_40px_rgba(79,59,40,0.08)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--coral)]">{content.featuredLabel}</p>
                <p className="font-heading mt-3 max-w-xs text-3xl font-semibold text-[color:var(--navy)]">
                  {content.featuredTitle}
                </p>
              </div>
              <div className="absolute bottom-16 left-10 h-48 w-48 rounded-full border-[14px] border-[color:var(--navy)]/90 bg-transparent" />
              <div className="absolute bottom-16 right-10 h-48 w-48 rounded-full border-[14px] border-[color:var(--navy)]/90 bg-transparent" />
              <div className="absolute bottom-36 left-1/2 h-44 w-72 -translate-x-1/2 rounded-[30px] border-[8px] border-[color:var(--navy)] bg-[linear-gradient(180deg,#fffaf1_0%,#ecd8b5_100%)]" />
              <div className="absolute bottom-[19.75rem] left-1/2 h-28 w-80 -translate-x-1/2 rounded-t-[28px] border-[8px] border-b-0 border-[color:var(--navy)] bg-[linear-gradient(180deg,#c6604a_0%,#b14f3d_100%)]" />
              <div className="absolute bottom-32 left-[18%] h-[4.5rem] w-[4.5rem] rounded-full bg-[color:var(--berry)]/70 shadow-lg" />
              <div className="absolute bottom-[14.5rem] left-[42%] h-20 w-20 rounded-full bg-[color:var(--mint)]/80 shadow-lg" />
              <div className="absolute bottom-[15rem] right-[18%] h-16 w-16 rounded-full bg-[color:var(--butter)] shadow-lg" />
              <div className="absolute bottom-10 left-1/2 h-4 w-[18rem] -translate-x-1/2 rounded-full bg-[color:var(--navy)]/85" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
