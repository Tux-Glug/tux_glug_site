import { useParams } from "react-router-dom";
import events from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <div className="text-center py-24">Event not found</div>;
  }

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4">

        <h1 className="text-4xl text-green-400 mb-4">
          {event.title}
        </h1>

        <p className="text-gray-400 mb-8">
          {event.author} • {event.readTime}
        </p>

        <img
          src={event.image}
          alt={event.title}
          className="w-full rounded-lg mb-8"
        />

        <div className="text-gray-300 leading-8 whitespace-pre-line">
          {event.content}
        </div>

      </div>
    </section>
  );
}