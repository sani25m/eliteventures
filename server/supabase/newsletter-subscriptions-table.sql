-- Run in Supabase Dashboard → SQL Editor for newsletter / news alert subscriptions.

create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create index if not exists newsletter_subscriptions_created_at_idx on public.newsletter_subscriptions (created_at desc);

alter table public.newsletter_subscriptions enable row level security;

create policy "Service role full access on newsletter_subscriptions"
  on public.newsletter_subscriptions for all
  using (true)
  with check (true);
