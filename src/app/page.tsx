import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#D9E4EC] justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">📅 Event Reminder App</h1>
      <p className="text-lg text-gray-600 mb-6">
        Set reminders for events and get notified before they happen.
      </p>
      <Link
        href="/events"
        className="px-6 py-3 bg-[#385E72] text-white rounded-xl hover:bg-[#2a4655]"
      >
        Get Started
      </Link>
    </main>
  );
}
