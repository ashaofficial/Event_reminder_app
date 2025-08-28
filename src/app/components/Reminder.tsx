"use client";
import { useEffect } from "react";
import { getEvents, saveEvents } from "@/app/lib/storage";
import { Event } from "@/../types/event";

export default function Reminder() {
  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    } else if (Notification.permission === "denied") {
      console.warn("Notifications are blocked by the user.");
    }

    const checkReminders = () => {
      const events: Event[] = getEvents();
      const now = Date.now();
      let updated = false;

      events.forEach((ev) => {
        const eventTime = new Date(ev.date).getTime();
        const reminderTime = eventTime - ev.remindBefore * 60 * 1000;

        // Only notify if not already notified and time has passed
        if (!ev.notified && now >= reminderTime && now < eventTime) {
          console.log("Triggering notification for:", ev.title, "at", new Date(ev.date).toLocaleString());
          new Notification("Upcoming Event", {
            body: `${ev.title} at ${new Date(ev.date).toLocaleString()}`
          });
          ev.notified = true;
          updated = true;
        }
      });

      // Save only if any event was updated
      if (updated) {
        saveEvents(events);
      }
    };

    // Check immediately and then every minute
    checkReminders();
    const interval = setInterval(checkReminders, 60_000);
    return () => clearInterval(interval);
  }, []);

  return null;
}