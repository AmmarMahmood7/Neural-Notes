import { sql } from "@/db/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "";

  const rows = await sql<{ id: string }[]>`
    SELECT id
    FROM "Note"
    WHERE "authorId" = ${userId}
    ORDER BY "createdAt" DESC
    LIMIT 1
  `;

  return NextResponse.json({
    newestNoteId: rows[0]?.id,
  });
}
