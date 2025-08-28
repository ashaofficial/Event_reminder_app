"use client";
import { Event } from "@/../types/event";

export default function EventList({ events }: { events: Event[] }) {
  if (!events.length) return <p className="text-center text-gray-500">No events yet.</p>;

  return (
<ul className="mt-4 space-y-3">
  {events.map((ev, idx) => (
    <li key={ev.id ?? idx} className="p-4 bg-white rounded-xl shadow">
      <h3 className="font-semibold">{ev.title}</h3>
      <p className="text-sm text-gray-600">{ev.description}</p>
      <p className="text-xs text-gray-400">
        {new Date(ev.date).toLocaleString()} (Remind {ev.remindBefore} min before)
      </p>
    </li>
  ))}
</ul>


  );
}
