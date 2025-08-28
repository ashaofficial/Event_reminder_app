"use client";
import { Event } from "@/../types/event";

type Props = {
  events: Event[];
  onDelete: (id: string) => void;
};

export function EventList({ events, onDelete }: Props) {
  const now = Date.now();
  const added = events.filter(ev => new Date(ev.date).getTime() >= now);
  const completed = events.filter(ev => new Date(ev.date).getTime() < now);

  return (
    <div className="flex flex-col float-right  h-screen overflow-y-auto p-4  w-100 bg-[#6AABD2]">
      <h2 className="text-lg font-semibold mb-2">📆 Added Events</h2>
      {added.length === 0 && <p className="text-sm text-gray-400">No upcoming events.</p>}
      <ul className="space-y-2">
        {added.map(ev => (
          <li key={ev.id} className="p-3 bg-zinc-200 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="font-medium">{ev.title}</h3>
              <p className="text-xs text-gray-500">{new Date(ev.date).toLocaleString()}</p>
            </div>
            <button
              onClick={() => onDelete(ev.id)}
              className="text-red-500 text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mt-4 mb-2">✔ Completed Events</h2>
      {completed.length === 0 && <p className="text-sm text-gray-400">No completed events yet.</p>}
      <ul className="space-y-2">
        {completed.map(ev => (
          <li key={ev.id} className="p-3 bg-zinc-300 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="font-medium line-through">{ev.title}</h3>
              <p className="text-xs text-gray-500">{new Date(ev.date).toLocaleString()}</p>
            </div>
            <button
              onClick={() => onDelete(ev.id)}
              className="text-red-400 text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
