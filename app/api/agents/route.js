// app/api/agents/route.js
export const dynamic = "force-dynamic";

import prisma from "@/lib/db";
import { jsonResponse, errorResponse, parseJson } from "@/lib/api";

export async function GET() {
  try {
    const agents = await prisma.agent.findMany();
    return jsonResponse(agents);
  } catch (e) {
    return errorResponse(e.message);
  }
}

export async function POST(req) {
  try {
    const body = await parseJson(req);
    const { name, ownerId, description } = body;
    if (!name || !ownerId) return errorResponse("name and ownerId are required", 400);

    const a = await prisma.agent.create({
      data: { name, ownerId, description },
    });
    return jsonResponse(a, 201);
  } catch (e) {
    return errorResponse(e.message);
  }
}
