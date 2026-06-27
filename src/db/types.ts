// Shared database row types. These mirror the columns of the Postgres tables
// that were previously described by the Prisma schema. The `postgres` client
// returns JS `Date` objects for timestamp columns.

export type Note = {
  id: string;
  text: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};
