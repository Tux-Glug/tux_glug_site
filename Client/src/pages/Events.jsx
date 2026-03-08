import events from "../data/events";
import EventCard from "../components/EventCard";

export default function Events() {

  // Sort newest first
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-4xl text-green-400 text-center mb-16">
          Events
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>
    </section>
  );
}