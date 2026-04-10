import { NextResponse } from "next/server";
import { assertRateLimit, getRequestFingerprint } from "@/lib/security";
import { bookingSchema } from "@/lib/validation";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const key = await getRequestFingerprint();
    await assertRateLimit(`booking:${key}`, 3, 60_000);

    const payload = bookingSchema.parse(await request.json());

    const paymentStatus = payload.paymentIntentId
      ? "DEPOSIT_PENDING_CONFIRMATION"
      : "UNPAID";

    const { error } = await supabase.from("bookings").insert({
      customer_type: payload.customerType,
      name: payload.name,
      company: payload.company ?? null,
      email: payload.email,
      phone: payload.phone,
      scheduled_at: payload.scheduledAt,
      location: payload.location,
      postal_code: payload.postalCode,
      guests: payload.guests,
      package_id: payload.packageId,
      duration_minutes: payload.durationMinutes,
      add_on_ids: payload.addOnIds,
      message: payload.message ?? null,
      status: "PENDING",
      payment_status: paymentStatus
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({
      ok: true,
      booking: {
        status: "PENDING",
        scheduledAt: payload.scheduledAt,
        packageId: payload.packageId,
        paymentStatus
      }
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Unable to create booking." },
      { status: 400 }
    );
  }
}
