"use client";
import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";
import { EventList } from "../components/EventList";
import Reminder from "../components/Reminder";
import { Event } from "@/../types/event";
import { getEvents, saveEvents } from "@/app/lib/storage";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const handleAdd = (event: Event) => {
    const updated = [...events, event];
    setEvents(updated);
    saveEvents(updated);
  };

  const handleDelete = (id: string) => {
    const updated = events.filter(event => event.id !== id);
    setEvents(updated);
    saveEvents(updated);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#D9E4EC]">
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">📅 Event Reminder</h1>
      <EventForm  onAdd={handleAdd} />
      </div>
      <EventList events={events} onDelete={handleDelete} />
      <Reminder />
    </div>
  );
}
