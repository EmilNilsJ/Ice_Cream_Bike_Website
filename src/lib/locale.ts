import { cookies } from "next/headers";

export const locales = ["nl", "en"] as const;

export type Locale = (typeof locales)[number];

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("site-locale")?.value;

  return cookieValue === "en" ? "en" : "nl";
}
