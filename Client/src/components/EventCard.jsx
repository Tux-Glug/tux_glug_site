import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`}>
      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition duration-300 cursor-pointer">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2 className="text-xl text-green-400 mb-2">
            {event.title}
          </h2>
          <p className="text-gray-500 text-xs mb-2">
            {new Date(event.publishedAt).toDateString()}
          </p>
          <p className="text-gray-400 text-sm mb-4">
            {event.author} • {event.readTime}
          </p>

          <p className="text-gray-400">
            {event.excerpt}
          </p>
        </div>

      </div>
    </Link>
  );
}