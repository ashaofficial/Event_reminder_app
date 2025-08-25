import { Event } from "../types/event";

const STORAGE_KEY = "events";

export const getEvents = (): Event[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveEvents = (events: Event[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }
};
