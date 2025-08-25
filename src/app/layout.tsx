import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Reminder App",
  description: "Set reminders for events and get notified before they happen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
