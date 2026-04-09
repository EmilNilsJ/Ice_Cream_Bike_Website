import { NextResponse } from "next/server";
import { calculateQuote } from "@/lib/pricing";
import { getRequestFingerprint, assertRateLimit } from "@/lib/security";
import { quoteSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const key = await getRequestFingerprint();
    await assertRateLimit(`quote:${key}`, 5, 60_000);

    const payload = quoteSchema.parse(await request.json());
    const estimate = calculateQuote({
      packageId: payload.packageId,
      guests: payload.guests,
      durationMinutes: payload.durationMinutes,
      addOnIds: payload.addOnIds,
      postalCode: payload.postalCode
    });

    return NextResponse.json({
      ok: true,
      estimate,
      lead: {
        name: payload.name,
        email: payload.email,
        eventDate: payload.eventDate
      }
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Unable to process quote." },
      { status: 400 }
    );
  }
}
