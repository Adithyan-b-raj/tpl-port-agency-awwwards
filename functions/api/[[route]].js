export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname === '/api/leads' && context.request.method === 'GET') {
    return new Response(JSON.stringify([{"id":"BRF-301","name":"Zara Boutique (Panampilly Nagar, Kochi)","phone":"919847011223","detail":"Scope: E-Commerce + In-Store POS (Cloudflare Edge + Cashfree + WhatsApp)","status":"PROPOSAL SENT","amount":"₹65,000"},{"id":"BRF-302","name":"Malabar Spice Exports B2B","phone":"919447099881","detail":"Scope: B2B Wholesale Portal + Tiered MOQ + Multi-Warehouse ERP","status":"DISCOVERY CALL","amount":"₹1,25,000"},{"id":"BRF-303","name":"Dr. Nair Dental & Aesthetics","phone":"919895022334","detail":"Scope: Clinic Token Queue TV + Patient Appointment CRM","status":"CONTRACT SIGNED","amount":"₹55,000"}]), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120'
      }
    });
  }
  if (url.pathname === '/api/leads' && context.request.method === 'POST') {
    const body = await context.request.json().catch(() => ({}));
    return new Response(JSON.stringify({ ok: true, id: body.id || 'REQ-LIVE' }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });
  }
  return new Response(JSON.stringify({ service: 'tpl-port-agency-awwwards', status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
