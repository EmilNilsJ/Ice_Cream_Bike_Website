import { NextResponse } from "next/server";
import { assertRateLimit, getRequestFingerprint } from "@/lib/security";
import { bookingSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const key = await getRequestFingerprint();
    await assertRateLimit(`booking:${key}`, 3, 60_000);

    const payload = bookingSchema.parse(await request.json());

    return NextResponse.json({
      ok: true,
      booking: {
        status: "PENDING",
        scheduledAt: payload.scheduledAt,
        packageId: payload.packageId,
        paymentStatus: payload.paymentIntentId ? "DEPOSIT_PENDING_CONFIRMATION" : "UNPAID"
      }
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Unable to create booking." },
      { status: 400 }
    );
  }
}
