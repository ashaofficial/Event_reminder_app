"use client";
import { useState, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Reminder from "../components/Reminder";
import { Event } from "@/../types/event";
import { getEvents, addEvent } from "@/../lib/api";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then(setEvents)
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (event: Event) => {
    const saved = await addEvent({
      title: event.title,
      description: event.description,
      date: event.date,
      remindBefore: event.remindBefore,
    });
    setEvents((prev) => [...prev, saved]);
  };

  if (loading) return <p className="text-center">Loading events...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">📅 Event Reminder</h1>
      <EventForm onAdd={handleAdd} />
      <EventList events={events} />
      <Reminder />
    </div>
  );
}
