export async function POST(request) {
  try {
    const body = await request.json();
    const prompt = body.prompt || '';
    // Simplified proxy: call OpenAI API
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: body.model || 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await resp.json();
    return new Response(JSON.stringify(data), { status: resp.status, headers: { 'Content-Type': 'application/json' }});
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }
}
