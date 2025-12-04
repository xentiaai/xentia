// lib/api.js
export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify({ ok: true, data }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function errorResponse(message = "Internal error", status = 500) {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function parseJson(req) {
  try {
    return await req.json();
  } catch (e) {
    throw new Error("Invalid JSON body");
  }
}
