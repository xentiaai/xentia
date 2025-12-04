export const dynamic = "force-dynamic";

import prisma from "@/lib/db";

export async function GET() {
  try {
    const agents = await prisma.agent.findMany();
    return new Response(JSON.stringify(agents), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, ownerId, description } = body;

    const a = await prisma.agent.create({
      data: { name, ownerId, description }
    });

    return new Response(JSON.stringify(a), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
