import { sanityClient, isSanityConfigured, urlFor } from "./client";
import { flavors, testimonials } from "@/lib/data";
import type { Flavor } from "@/lib/data";
import type { Locale } from "@/lib/locale";

type SanityFlavor = {
  _id: string;
  name: string;
  descriptionEn: string;
  descriptionNl: string;
  allergens: string[];
  audience: ("company" | "family")[];
  seasonal: boolean;
  image?: { asset: { _ref: string } };
};

type SanityTestimonial = {
  _id: string;
  author: string;
  role: string;
  quote: string;
};

type SanitySettings = {
  brandName?: string;
  tagline?: string;
  heroTitle?: string;
  heroDescription?: string;
  founderQuote?: string;
  footerDescription?: string;
  serviceArea?: string;
  contactEmail?: string;
  contactPhone?: string;
};

/*
 * Fetch flavors from Sanity, falling back to static data if Sanity is not configured
 * or returns no results.
 */
export async function getFlavors(locale: Locale = "en"): Promise<Flavor[]> {
  if (!isSanityConfigured()) return flavors;

  const data: SanityFlavor[] = await sanityClient.fetch(
    `*[_type == "flavor" && active != false] | order(order asc) {
      _id, name, descriptionEn, descriptionNl, allergens, audience, seasonal, image
    }`
  );

  if (!data || data.length === 0) return flavors;

  return data.map((f) => ({
    name: f.name,
    description: locale === "nl" ? (f.descriptionNl || f.descriptionEn) : (f.descriptionEn || f.descriptionNl),
    allergens: f.allergens ?? [],
    audience: f.audience ?? ["company", "family"],
    seasonal: f.seasonal ?? false,
    image: f.image ? urlFor(f.image).width(900).url() : "/IceCreamLogo.png"
  }));
}

/*
 * Fetch testimonials from Sanity, falling back to static data.
 */
export async function getTestimonials() {
  if (!isSanityConfigured()) return testimonials;

  const data: SanityTestimonial[] = await sanityClient.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id, author, role, quote
    }`
  );

  if (!data || data.length === 0) return testimonials;

  return data.map((t) => ({
    author: t.author,
    role: t.role,
    quote: t.quote
  }));
}

/*
 * Fetch active job openings from Sanity.
 */
export type JobOpening = {
  titleEn: string;
  titleNl: string;
  employmentType: string;
  location: string | null;
  descriptionEn: string;
  descriptionNl: string;
  requirementsEn: string | null;
  requirementsNl: string | null;
  applyEmail: string | null;
};

export async function getJobOpenings(): Promise<JobOpening[]> {
  if (!isSanityConfigured()) return [];

  const data: JobOpening[] = await sanityClient.fetch(
    `*[_type == "jobOpening" && active != false] | order(order asc) {
      titleEn, titleNl, employmentType, location,
      descriptionEn, descriptionNl,
      requirementsEn, requirementsNl,
      applyEmail
    }`
  );

  return data ?? [];
}

/*
 * Fetch singleton site settings from Sanity.
 */
export async function getSiteSettings(): Promise<SanitySettings> {
  if (!isSanityConfigured()) return {};

  const data: SanitySettings = await sanityClient.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0] {
      brandName, tagline, heroTitle, heroDescription,
      founderQuote, footerDescription, serviceArea,
      contactEmail, contactPhone
    }`
  );

  return data ?? {};
}
