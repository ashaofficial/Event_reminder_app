"use client";
import { useEffect } from "react";
import { getEvents } from "@/../lib/api";
import { Event } from "@/../types/event";

export default function Reminder() {
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const checkReminders = async () => {
      const events: Event[] = await getEvents();
      const now = new Date().getTime();

      events.forEach((event) => {
        const eventTime = new Date(event.date).getTime();
        const reminderTime = eventTime - event.remindBefore * 60 * 1000;

        if (now >= reminderTime && now < eventTime) {
          new Notification("Upcoming Event", {
            body: `${event.title} at ${new Date(event.date).toLocaleString()}`,
          });
        }
      });
    };

    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
