-- ============================================================
-- KINETIC STUDIO AWWWARDS AGENCY SEED DATA
-- ============================================================

INSERT OR IGNORE INTO case_studies (id, client_name, title, category, year, awards, artwork_url, deliverables) VALUES
  ('cs_01', 'Hyperion Dynamics', 'Autonomous Flight Telemetry & Spatial 3D Portal', '3D WebGL / Spatial', 2026, 'Site of the Day, FWA of the Month', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', 'Three.js, WebGL Shaders, Motion Design'),
  ('cs_02', 'Prada Milano', 'Virtual Runway & High-Fashion Monograph', 'Fashion E-Commerce', 2026, 'Awwwards Studio of the Year', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', 'Custom Liquid OS 2.0, WebGL Fabric Physics'),
  ('cs_03', 'Aether Spatial', '32-Bit Acoustic Hardware Launch Ecosystem', 'Hardware Launch', 2025, 'Red Dot Best of Best', 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80', 'Brand System, 360 Product Exploded Configurator'),
  ('cs_04', 'Monolith Architecture', 'Brutalist Concrete Archive & Monograph', 'Editorial Portfolio', 2025, 'Site of the Day', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 'Typography System, Smooth Kinetic Drag');

INSERT OR IGNORE INTO briefs (id, client_name, company, email, phone, budget_bracket, scope_tags, timeline_weeks, pipeline_stage) VALUES
  ('brief_01', 'Siddharth Roy', 'Veloce Hypercars', 'sroy@veloce.it', '+39 02 8901 224', '$75,000 - $120,000', 'WebGL 3D, Custom Configurator, Sound Design', 12, 'proposal_sent'),
  ('brief_02', 'Clara De Vries', 'Nieuwe Foundation', 'clara@nieuwe.nl', '+31 20 445 1900', '$45,000 - $75,000', 'Identity System, Digital Archive', 8, 'chemistry_call');
