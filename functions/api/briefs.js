// Cloudflare Pages Functions - Client Briefs API
export async function onRequestGet({ env }) {
  try {
    if (env && env.DB) {
      const res = await env.DB.prepare("SELECT * FROM briefs ORDER BY created_at DESC").all();
      return new Response(JSON.stringify({ ok: true, data: res.results || [] }), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
      });
    }

    return new Response(JSON.stringify({
      ok: true,
      data: [
        { id: 'brief_01', client_name: 'Siddharth Roy', company: 'Veloce Hypercars', email: 'sroy@veloce.it', phone: '+39 02 8901 224', budget_bracket: '$75,000 - $120,000', scope_tags: 'WebGL 3D, Custom Configurator, Sound Design', timeline_weeks: 12, pipeline_stage: 'proposal_sent' },
        { id: 'brief_02', client_name: 'Clara De Vries', company: 'Nieuwe Foundation', email: 'clara@nieuwe.nl', phone: '+31 20 445 1900', budget_bracket: '$45,000 - $75,000', scope_tags: 'Identity System, Digital Archive', timeline_weeks: 8, pipeline_stage: 'chemistry_call' }
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

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { client_name, company, email, phone, budget_bracket, scope_tags, timeline_weeks } = body;

    if (!client_name || !email) {
      return new Response(JSON.stringify({ ok: false, error: "Name and email required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const id = "brief_" + Date.now().toString(36);

    if (env && env.DB) {
      await env.DB.prepare(
        "INSERT INTO briefs (id, client_name, company, email, phone, budget_bracket, scope_tags, timeline_weeks, pipeline_stage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'inbound')"
      ).bind(id, client_name, company || '', email, phone || '', budget_bracket || '$50,000+', scope_tags || '', timeline_weeks || 8).run();
    }

    return new Response(JSON.stringify({
      ok: true,
      message: "Brief received by creative partners. Expect response within 24 hours.",
      brief_id: id
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
