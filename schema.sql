-- ============================================================
-- KINETIC STUDIO AWWWARDS AGENCY D1 DATABASE SCHEMA
-- ============================================================

CREATE TABLE IF NOT EXISTS case_studies (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  year INTEGER NOT NULL,
  awards TEXT,
  artwork_url TEXT,
  deliverables TEXT,
  is_featured INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS briefs (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  budget_bracket TEXT NOT NULL,
  scope_tags TEXT,
  timeline_weeks INTEGER,
  pipeline_stage TEXT DEFAULT 'inbound', -- 'inbound', 'chemistry_call', 'proposal_sent', 'contract_won'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS retainers (
  id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  monthly_fee_usd INTEGER NOT NULL,
  dedicated_heads INTEGER DEFAULT 2,
  start_date TEXT NOT NULL,
  status TEXT DEFAULT 'active'
);

CREATE INDEX IF NOT EXISTS idx_briefs_stage ON briefs(pipeline_stage);
