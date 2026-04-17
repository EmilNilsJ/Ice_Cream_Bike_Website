import { NextResponse } from "next/server";
import { assertRateLimit, getRequestFingerprint } from "@/lib/security";
import { contactSchema } from "@/lib/validation";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const key = await getRequestFingerprint();
    await assertRateLimit(`contact:${key}`, 4, 60_000);

    const body = await request.json();
    if (body._hp) return NextResponse.json({ ok: true, message: "Inquiry accepted." });
    const payload = contactSchema.parse(body);

    const { error } = await supabase.from("contact_messages").insert({
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? null,
      company: payload.company ?? null,
      message: payload.message
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({
      ok: true,
      message: "Inquiry accepted."
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Unable to submit message." },
      { status: 400 }
    );
  }
}
