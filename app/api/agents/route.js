export const dynamic = "force-dynamic";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = auth();
    if (!userId)
      return new Response("Unauthorized", { status: 401 });

    const agents = await prisma.agent.findMany({
      where: { ownerId: userId },
    });

    return new Response(JSON.stringify(agents), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    const { userId } = auth();
    if (!userId)
      return new Response("Unauthorized", { status: 401 });

    const body = await request.json();
    const { name, description } = body;

    const agent = await prisma.agent.create({
      data: {
        name,
        description,
        ownerId: userId, // 👈 automatyczne ID zalogowanego użytkownika
      },
    });

    return new Response(JSON.stringify(agent), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
