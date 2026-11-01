// Cloudflare Pages Functions - Agency Projects API
export async function onRequestGet({ env }) {
  try {
    if (env && env.DB) {
      const res = await env.DB.prepare("SELECT * FROM case_studies ORDER BY year DESC").all();
      return new Response(JSON.stringify({ ok: true, projects: res.results || [] }), {
        headers: { "Content-Type": "application/json", "Cache-Control": "public, s-maxage=60" }
      });
    }

    return new Response(JSON.stringify({
      ok: true,
      projects: [
        { id: 'cs_01', client_name: 'Hyperion Dynamics', title: 'Autonomous Flight Telemetry & Spatial 3D Portal', category: '3D WebGL / Spatial', year: 2026, awards: 'Site of the Day, FWA of the Month', artwork_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', deliverables: 'Three.js, WebGL Shaders, Motion Design' },
        { id: 'cs_02', client_name: 'Prada Milano', title: 'Virtual Runway & High-Fashion Monograph', category: 'Fashion E-Commerce', year: 2026, awards: 'Awwwards Studio of the Year', artwork_url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', deliverables: 'Custom Liquid OS 2.0, WebGL Fabric Physics' },
        { id: 'cs_03', client_name: 'Aether Spatial', title: '32-Bit Acoustic Hardware Launch Ecosystem', category: 'Hardware Launch', year: 2025, awards: 'Red Dot Best of Best', artwork_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80', deliverables: 'Brand System, 360 Product Exploded Configurator' }
      ]
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
