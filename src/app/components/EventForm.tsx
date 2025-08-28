"use client";
import { useState } from "react";
import { Event } from "@/../types/event";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onAdd: (e: Event) => void;
};



export default function EventForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [remindBefore, setRemindBefore] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    const newEvent: Event = {
      id: uuidv4(),
      title,
      description,
      date,
      remindBefore,
    };

    onAdd(newEvent);

    setTitle(""); setDescription(""); setDate(""); setRemindBefore(10);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-xl shadow space-y-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        className="w-full border p-2 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        value={remindBefore}
        onChange={(e) => setRemindBefore(Number(e.target.value))}
        className="w-full border p-2 rounded"
        placeholder="Remind before (minutes)"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Add Event
      </button>
    </form>
  );
}
