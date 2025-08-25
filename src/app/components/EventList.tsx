"use client";
import { Event } from "@/../types/event";

type Props = {
  events: Event[];
};

export default function EventList({ events }: Props) {
  if (events.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No events added yet.</p>;
  }

  return (
    <ul className="space-y-3 mt-4">
     {events.map((event, index) => (
  <li key={`${event.id}-${index}`} className="p-4 bg-white rounded-xl shadow flex justify-between">
    <div>
      <h3 className="font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">{event.description}</p>
      <p className="text-xs text-gray-400">
        {new Date(event.date).toLocaleString()} (Remind {event.remindBefore} min before)
      </p>
    </div>
  </li>
))}
</ul>);
}