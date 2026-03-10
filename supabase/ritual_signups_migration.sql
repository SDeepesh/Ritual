-- 1. Enable extensions
create extension if not exists pg_net with schema extensions;

-- 2. Create the ritual_signups table
create table if not exists ritual_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  pincode text,
  address text,
  latitude double precision,
  longitude double precision,
  plan_days integer,
  amount integer,
  dietary_preference text,
  goals text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

-- 3. Security (RLS)
alter table ritual_signups enable row level security;

create policy "Allow public insert" on ritual_signups for insert with check (true);
create policy "Allow public read" on ritual_signups for select using (true);

-- 4. Automatic Email Notification Trigger
-- This calls your 'ritual-notify' Edge Function automatically
create or replace function public.handle_ritual_signup_notification()
returns trigger
language plpgsql
security definer
as $$
begin
  perform
    net.http_post(
      url := 'https://aqhxzyqbolxmdzsdcaev.supabase.co/functions/v1/ritual-notify',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', current_setting('request.headers', true)::jsonb->>'authorization'
      ),
      body := jsonb_build_object('record', row_to_json(new))
    );
  return new;
end;
$$;

create trigger on_ritual_signup_insert
  after insert on ritual_signups
  for each row execute function public.handle_ritual_signup_notification();
