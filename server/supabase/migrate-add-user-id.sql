-- Run this in Supabase Dashboard → SQL Editor
-- Fix: column submissions.user_id does not exist

alter table public.submissions add column if not exists user_id uuid;
