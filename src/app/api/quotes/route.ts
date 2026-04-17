import { NextResponse } from "next/server";
import { calculateQuote } from "@/lib/pricing";
import { getRequestFingerprint, assertRateLimit } from "@/lib/security";
import { quoteSchema } from "@/lib/validation";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const key = await getRequestFingerprint();
    await assertRateLimit(`quote:${key}`, 5, 60_000);

    const body = await request.json();
    if (body._hp) return NextResponse.json({ ok: true, estimate: { total: 0, travelFee: 0 } });
    const payload = quoteSchema.parse(body);
    const estimate = calculateQuote({
      packageId: payload.packageId,
      guests: payload.guests,
      durationMinutes: payload.durationMinutes,
      addOnIds: payload.addOnIds,
      postalCode: payload.postalCode
    });

    const { error } = await supabase.from("leads").insert({
      customer_type: payload.customerType,
      name: payload.name,
      company: payload.company ?? null,
      email: payload.email,
      phone: payload.phone,
      event_date: payload.eventDate,
      location: payload.location,
      postal_code: payload.postalCode,
      guests: payload.guests,
      package_id: payload.packageId,
      duration_minutes: payload.durationMinutes,
      add_on_ids: payload.addOnIds,
      message: payload.message ?? null,
      estimated_price: estimate.total
    });

    if (error) throw new Error(error.message);

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
