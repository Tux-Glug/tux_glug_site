import { useParams } from "react-router-dom";
import sessions from "../data/sessions";

export default function SessionDetails() {
  const { id } = useParams();
  const session = sessions.find((s) => s.id === id);

  if (!session) {
    return <div className="text-center py-24">Session not found</div>;
  }

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4">

        <h1 className="text-4xl text-green-400 mb-4">
          {session.title}
        </h1>

        <p className="text-gray-400 mb-2">
          {new Date(session.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p className="text-gray-400 mb-8">
          {session.author} • {session.readTime}
        </p>

        <img
          src={session.image}
          alt={session.title}
          className="w-full rounded-lg mb-8"
        />

        <div className="text-gray-300 leading-8 whitespace-pre-line">
          {session.content}
        </div>

      </div>
    </section>
  );
}