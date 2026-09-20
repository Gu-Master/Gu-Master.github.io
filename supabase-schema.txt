create extension if not exists pgcrypto;

create table if not exists public.family_archive (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.family_archive_settings (
  id text primary key,
  password_hash text not null
);

alter table public.family_archive enable row level security;
alter table public.family_archive_settings enable row level security;

drop policy if exists "public read family archive" on public.family_archive;
create policy "public read family archive"
on public.family_archive for select
to anon, authenticated
using (id = 'main');

insert into public.family_archive_settings (id, password_hash)
values ('main', crypt('family2026', gen_salt('bf')))
on conflict (id) do nothing;

create or replace function public.get_family_archive()
returns jsonb
language sql
security definer
set search_path = public
as $$
  select payload from public.family_archive where id = 'main';
$$;

create or replace function public.save_family_archive(admin_password text, new_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  saved_payload jsonb;
  stored_hash text;
begin
  select password_hash into stored_hash
  from public.family_archive_settings
  where id = 'main';

  if stored_hash is null or stored_hash <> crypt(admin_password, stored_hash) then
    raise exception 'invalid_admin_password';
  end if;

  insert into public.family_archive (id, payload, updated_at)
  values ('main', new_payload, now())
  on conflict (id) do update
    set payload = excluded.payload,
        updated_at = now()
  returning payload into saved_payload;

  return saved_payload;
end;
$$;

grant execute on function public.get_family_archive() to anon, authenticated;
grant execute on function public.save_family_archive(text, jsonb) to anon, authenticated;
