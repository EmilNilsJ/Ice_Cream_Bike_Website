"use client";

import Link from "next/link";
import Image from "next/image";
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
          <div className="mt-6">
            <h1 className="font-heading max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[color:var(--navy)] sm:text-5xl md:text-6xl lg:text-7xl">
              {content.title}
            </h1>
          </div>
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
          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {content.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
                className="rounded-[24px] border border-[color:var(--line)] bg-[color:var(--paper)] p-3 shadow-[0_20px_45px_rgba(79,59,40,0.08)] sm:rounded-[28px] sm:p-5"
              >
                <p className="text-lg font-semibold text-[color:var(--navy)] sm:text-2xl">{metric.value}</p>
                <p className="mt-1 text-xs text-[color:var(--slate)] sm:mt-2 sm:text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/IceCreamLogo.png"
            alt="The Ice Cream Bike"
            width={480}
            height={480}
            className="object-contain drop-shadow-[0_20px_40px_rgba(79,59,40,0.18)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
