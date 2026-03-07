-- Run this in Supabase Dashboard → SQL Editor to create the submissions table.

-- Form submissions from the public site (Contact, Digital Marketing, Banking, etc.)
-- user_id links to Supabase auth.users.id when the submitter is logged in
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  source text not null,
  data jsonb not null default '{}',
  created_at timestamptz not null default now()
);

-- If table already exists, add user_id (run once; ignore if column exists)
alter table public.submissions add column if not exists user_id uuid;

create index if not exists submissions_created_at_idx on public.submissions (created_at desc);
create index if not exists submissions_source_idx on public.submissions (source);

-- RLS: service role (backend) has full access
alter table public.submissions enable row level security;

create policy "Service role full access on submissions"
  on public.submissions for all
  using (true)
  with check (true);
