import { Link } from "react-router-dom";

export default function SessionCard({ session }) {
  return (
    <Link to={`/sessions/${session.id}`}>
      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition duration-300 cursor-pointer">

        <img
          src={session.image}
          alt={session.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <p className="text-gray-500 text-xs mb-2">
            {new Date(session.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <h2 className="text-xl text-green-400 mb-2">
            {session.title}
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            {session.author} • {session.readTime}
          </p>

          <p className="text-gray-400">
            {session.excerpt}
          </p>
        </div>

      </div>
    </Link>
  );
}