import { useState } from "react";
import sessions from "../data/sessions";

export default function Sessions() {

  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const upcomingSession = sortedSessions.find(s => s.isUpcoming);
  const pastSessions = sortedSessions.filter(s => !s.isUpcoming);

  const [selectedSession, setSelectedSession] = useState(upcomingSession);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {selectedSession && (
            <>
              <img
                src={selectedSession.image}
                alt={selectedSession.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />

              <h1 className="text-4xl text-green-400 mb-4">
                {selectedSession.title}
              </h1>

              <p className="text-gray-400 mb-2">
                <strong>Speaker:</strong> {selectedSession.speaker}
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Location:</strong> {selectedSession.location}
              </p>

              <p className="text-gray-400 mb-6">
                <strong>Time:</strong> {selectedSession.time}
              </p>

              <div className="text-gray-300 leading-8 whitespace-pre-line">
                {selectedSession.content}
              </div>
            </>
          )}

        </div>

        {/* RIGHT STICKY SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-black border border-gray-800 rounded-xl p-6 max-h-[80vh] overflow-y-auto">

            {/* Upcoming */}
            {upcomingSession && (
              <>
                <h2 className="text-green-400 mb-4">Upcoming Session</h2>

                <button
                  onClick={() => setSelectedSession(upcomingSession)}
                  className="block text-left text-gray-300 hover:text-green-400 mb-6 transition"
                >
                  {upcomingSession.title}
                </button>
              </>
            )}

            {/* Past Sessions */}
            <h2 className="text-green-400 mb-4">Past Sessions</h2>

            <div className="space-y-3">
              {pastSessions.map(session => (
                <button
                  key={session.id}
                  onClick={() => setSelectedSession(session)}
                  className="block text-left text-gray-400 hover:text-green-400 transition"
                >
                  {session.title}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}