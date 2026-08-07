/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key, default gen_random_uuid())
  - `name` (text, not null) — guest's full name
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone number
  - `guests` (integer, not null) — number of guests, 1–20
  - `reservation_date` (date, not null) — requested dining date
  - `reservation_time` (time, not null) — requested dining time
  - `special_request` (text, nullable) — optional notes (allergies, celebrations, seating)
  - `status` (text, not null default 'pending') — request lifecycle: pending / confirmed / cancelled
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Indexes
- `idx_reservations_date_time` on (reservation_date, reservation_time) for lookups by slot.

3. Security
- Enable RLS on `reservations`.
- Single-tenant public submission form (no sign-in screen): allow anon + authenticated to INSERT new reservation requests.
- No SELECT / UPDATE / DELETE for anon or authenticated — only service role can read or manage requests from the backend.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  guests integer NOT NULL CHECK (guests >= 1 AND guests <= 20),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  special_request text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reservations_date_time
  ON reservations (reservation_date, reservation_time);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
  ON reservations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
