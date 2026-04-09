import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getRedirectUrl(request: NextRequest) {
  const referer = request.headers.get("referer");

  if (!referer) {
    return new URL("/", request.url);
  }

  try {
    return new URL(referer);
  } catch {
    return new URL("/", request.url);
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const locale = formData.get("locale");
  const safeLocale = locale === "en" ? "en" : "nl";
  const redirectUrl = getRedirectUrl(request);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set("site-locale", safeLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax"
  });

  return response;
}
