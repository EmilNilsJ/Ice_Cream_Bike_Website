import { NextResponse } from "next/server";
import { assertRateLimit, getRequestFingerprint } from "@/lib/security";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const key = await getRequestFingerprint();
    await assertRateLimit(`contact:${key}`, 4, 60_000);

    const payload = contactSchema.parse(await request.json());

    return NextResponse.json({
      ok: true,
      message: "Inquiry accepted.",
      payload
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Unable to submit message." },
      { status: 400 }
    );
  }
}
