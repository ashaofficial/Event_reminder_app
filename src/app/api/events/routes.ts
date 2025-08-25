import { NextResponse } from "next/server";

type Event = {
  id: string;
  title: string;
  description: string;
  date: number;
  remindBefore: string;
};

const events: Event[] = []; // temporary in-memory store (resets on server restart)

// GET /api/events
export async function GET() {
  return NextResponse.json(events);
}

// POST /api/events
export async function POST(req: Request) {
  const body = await req.json();
  const newEvent = {
    id: Date.now().toString(),
    title: body.title,
    description: body.description || "",
    date: body.date,
    remindBefore: body.remindBefore || 10,
  };
  events.push(newEvent);
  return NextResponse.json(newEvent, { status: 201 });
}
