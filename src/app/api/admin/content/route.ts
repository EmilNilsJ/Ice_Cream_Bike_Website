import { NextResponse } from "next/server";
import { assertAdminSession } from "@/lib/security";

export async function PATCH(request: Request) {
  try {
    const body = (await request.json()) as { role?: "PUBLIC" | "EDITOR" | "ADMIN"; slug?: string; content?: unknown };
    assertAdminSession(body.role);

    return NextResponse.json({
      ok: true,
      audit: {
        action: "content.update",
        slug: body.slug ?? "unknown"
      }
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "Forbidden." },
      { status: 403 }
    );
  }
}
