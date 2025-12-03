export async function POST(request) {
  try {
    const body = await request.json();
    const prompt = body.prompt || '';
    const lower = prompt.toLowerCase();
    let reply = 'Świetne pytanie — opisz więcej kontekstu.';
    if (lower.includes('cena') || lower.includes('koszt')) reply = 'Ceny zaczynają się od 499 zł/mies.';
    if (lower.includes('wdro') || lower.includes('wdrozenie')) reply = 'Wdrożenie 1-7 dni.';
    return new Response(JSON.stringify({ reply }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }
}
