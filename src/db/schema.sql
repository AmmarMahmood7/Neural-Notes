-- Database schema for Neural Notes.
--
-- Run this once against your Postgres database (e.g. in the Supabase SQL
-- editor) to create the tables. The column names are quoted because they are
-- camelCase and Postgres folds unquoted identifiers to lowercase.

create table if not exists "User" (
  id          text primary key,
  email       text not null unique,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table if not exists "Note" (
  id          text primary key,
  text        text not null default '',
  "authorId"  text not null references "User"(id) on delete cascade,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create index if not exists "Note_authorId_idx" on "Note" ("authorId");
