-- Run in Supabase Dashboard → SQL Editor to create the visits table for visitor count.

create table if not exists public.visits (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create index if not exists visits_created_at_idx on public.visits (created_at desc);

-- RLS: allow service role (backend) full access
alter table public.visits enable row level security;

create policy "Service role full access on visits"
  on public.visits for all
  using (true)
  with check (true);
