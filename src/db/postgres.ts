import postgres from "postgres";

// A single, lazily-connecting Postgres client. `postgres()` does not open a
// connection until the first query, so importing this module is safe at build
// time even without a reachable database.
//
// `prepare: false` keeps us compatible with Supabase's transaction-mode
// connection pooler (PgBouncer), which does not support prepared statements.

const globalForDb = globalThis as unknown as {
  sql: ReturnType<typeof postgres> | undefined;
};

export const sql =
  globalForDb.sql ??
  postgres(process.env.DATABASE_URL!, {
    prepare: false,
  });

if (process.env.NODE_ENV !== "production") globalForDb.sql = sql;
