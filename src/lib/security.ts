import { headers } from "next/headers";

const requestLog = new Map<string, { count: number; windowStart: number }>();

export async function assertRateLimit(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const entry = requestLog.get(key);

  if (!entry || now - entry.windowStart > windowMs) {
    requestLog.set(key, { count: 1, windowStart: now });
    return;
  }

  if (entry.count >= limit) {
    throw new Error("Rate limit exceeded.");
  }

  entry.count += 1;
}

export async function getRequestFingerprint() {
  const requestHeaders = await headers();
  return requestHeaders.get("x-forwarded-for") ?? requestHeaders.get("host") ?? "unknown";
}

export function assertAdminSession(role?: "PUBLIC" | "EDITOR" | "ADMIN") {
  if (!role || (role !== "ADMIN" && role !== "EDITOR")) {
    throw new Error("Forbidden");
  }
}
