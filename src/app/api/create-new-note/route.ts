import { sql } from "@/db/postgres";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "";

  const id = uuidv4();

  await sql`
    INSERT INTO "Note" (id, "authorId", text, "createdAt", "updatedAt")
    VALUES (${id}, ${userId}, '', now(), now())
  `;

  return NextResponse.json({
    noteId: id,
  });
}
