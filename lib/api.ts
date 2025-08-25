import { Event } from "../types/event";

const BASE_URL = "/api"; // Vercel will resolve this automatically

export async function getEvents(): Promise<Event[]> {
  const res = await fetch(`${BASE_URL}/events`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

export async function addEvent(event: Omit<Event, "id">): Promise<Event> {
  const res = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  if (!res.ok) throw new Error("Failed to add event");
  return res.json();
}
