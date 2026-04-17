import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
import { ScrollToTop } from "@/components/scroll-to-top";
import { getLocale } from "@/lib/locale";
import { getSiteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "The Ice Cream Bike",
  description: "Classic ice cream bike for company events, family celebrations, and warm hospitality-led service.",
  metadataBase: new URL("https://www.icecreambike.se")
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const content = getSiteContent(locale);
  const cookieStore = await cookies();
  const cookieConsent = cookieStore.get("cookie-consent")?.value;

  return (
    <html lang={locale}>
      <body>
        <div className="page-shell">
          <SiteHeader locale={locale} navigation={content.navigation} brand={content.brand} ui={content.ui} />
          {children}
          <SiteFooter navigation={content.navigation} brand={content.brand} footer={content.footer} />
          {!cookieConsent ? <CookieBanner content={content.cookie} /> : null}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
