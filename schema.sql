-- ─────────────────────────────────────────────────────────
-- Business Chaos Board Game — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ─────────────────────────────────────────────────────────

-- Enable realtime (run once)
-- alter publication supabase_realtime add table rooms, players, game_state, actions_log;

-- ─── Rooms ────────────────────────────────────────────────
create table if not exists rooms (
  id          uuid primary key default gen_random_uuid(),
  code        text unique not null,
  host_id     text not null,
  status      text not null default 'lobby', -- lobby | playing | finished
  max_players int  not null default 8,
  settings    jsonb not null default '{
    "max_rounds": 20,
    "starting_money": 1500,
    "board_size": 32,
    "time_per_question": 30
  }'::jsonb,
  created_at  timestamptz default now()
);

-- ─── Players ──────────────────────────────────────────────
create table if not exists players (
  id          text primary key,
  room_id     uuid references rooms(id) on delete cascade,
  user_name   text not null,
  avatar      text not null default '🦊',
  color       text not null default '#00f5ff',
  money       int  not null default 1500,
  position    int  not null default 0,
  cards       jsonb not null default '[]'::jsonb,
  status      text not null default 'waiting', -- waiting | ready | playing | disconnected
  score       int  not null default 0,
  is_host     boolean not null default false,
  turn_order  int  not null default 0,
  last_seen   timestamptz default now(),
  created_at  timestamptz default now()
);

-- ─── Game State ───────────────────────────────────────────
create table if not exists game_state (
  id                  uuid primary key default gen_random_uuid(),
  room_id             uuid unique references rooms(id) on delete cascade,
  current_player_id   text,
  current_turn        int  not null default 0,
  phase               text not null default 'waiting_for_roll',
  dice_result         int,
  current_question    jsonb,
  current_modifier    jsonb,
  buildings           jsonb not null default '[]'::jsonb,
  turn_order          jsonb not null default '[]'::jsonb,
  round               int  not null default 1,
  max_rounds          int  not null default 20,
  winner_id           text,
  updated_at          timestamptz default now()
);

-- ─── Actions Log ──────────────────────────────────────────
create table if not exists actions_log (
  id          uuid primary key default gen_random_uuid(),
  room_id     uuid references rooms(id) on delete cascade,
  player_id   text,
  action_type text not null,
  payload     jsonb not null default '{}'::jsonb,
  created_at  timestamptz default now()
);

-- ─── Indexes ─────────────────────────────────────────────
create index if not exists idx_players_room_id    on players(room_id);
create index if not exists idx_actions_room_id    on actions_log(room_id);
create index if not exists idx_rooms_code         on rooms(code);

-- ─── RLS Policies (open for prototype) ───────────────────
alter table rooms       enable row level security;
alter table players     enable row level security;
alter table game_state  enable row level security;
alter table actions_log enable row level security;

-- Allow all operations for prototype (tighten in production)
create policy "Allow all on rooms"       on rooms       for all using (true) with check (true);
create policy "Allow all on players"     on players     for all using (true) with check (true);
create policy "Allow all on game_state"  on game_state  for all using (true) with check (true);
create policy "Allow all on actions_log" on actions_log for all using (true) with check (true);

-- ─── Realtime ────────────────────────────────────────────
-- Run these if not already enabled:
-- alter publication supabase_realtime add table rooms;
-- alter publication supabase_realtime add table players;
-- alter publication supabase_realtime add table game_state;
-- alter publication supabase_realtime add table actions_log;
