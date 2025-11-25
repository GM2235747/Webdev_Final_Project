import type { NextRequest } from "next/server";

import { z } from "zod";

// Schema defining expected POST body for contact submissions
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  topic: z.string().min(2).max(100).optional(), // optional subtle categorization
});

// Simple in-memory store placeholder (not persisted across deployments)
// In a real app you'd write to a database or external service.
const submissions: Array<{
  id: string;
  name: string;
  email: string;
  message: string;
  topic?: string;
  receivedAt: string;
}> = [];

export async function GET() {
  return Response.json({
    ok: true,
    status: "ready",
    description: "Contact endpoint accepts POST with name, email, message, optional topic.",
    fields: ["name", "email", "message", "topic?"],
    count: submissions.length,
  });
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return Response.json(
        {
          ok: false,
          error: "VALIDATION_ERROR",
          issues: parsed.error.issues.map((i: { path: (string | number)[]; message: string }) => ({ path: i.path, message: i.message })),
        },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const entry = { id, ...data, receivedAt: new Date().toISOString() };
    submissions.push(entry);

    // Simulate lightweight processing (e.g., spam check)
    await new Promise((r) => setTimeout(r, 150));

    return Response.json({ ok: true, id, receivedAt: entry.receivedAt });
  } catch (err: unknown) {
    return Response.json(
      {
        ok: false,
        error: "BAD_REQUEST",
        message: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 400 },
    );
  }
}
