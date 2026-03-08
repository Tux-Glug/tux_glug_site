import { useState } from "react";
import sessions from "../data/sessions";

export default function Sessions() {

  // Sort sessions by publish date (newest first)
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  // Separate upcoming and past
  const upcomingSession = sortedSessions.find(s => s.isUpcoming);
  const pastSessions = sortedSessions.filter(s => !s.isUpcoming);

  // Default selected session → upcoming (if exists)
  const [selectedSession, setSelectedSession] = useState(upcomingSession || sortedSessions[0]);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {selectedSession && (
            <>
              {/* IMAGE BLOCK */}
              <div className="mb-8">
                <img
                  src={selectedSession.image}
                  alt={selectedSession.title}
                  className={`rounded-xl ${selectedSession.isUpcoming
                    ? "w-full h-auto object-contain max-w-[900px] mx-auto"
                    : "w-full h-[400px] object-cover"
                    }`}
                />
              </div>

              {/* TITLE */}
              <h1 className="text-4xl text-green-400 mb-4">
                {selectedSession.title}
              </h1>

              {/* DETAILS */}
              <p className="text-gray-400 mb-2">
                <strong>Speaker:</strong> {selectedSession.speaker}
              </p>

              <p className="text-gray-400 mb-2">
                <strong>Location:</strong> {selectedSession.location}
              </p>

              <p className="text-gray-400 mb-6">
                <strong>Time:</strong> {selectedSession.time}
              </p>

              {/* CONTENT */}
              <div className="text-gray-300 leading-8 whitespace-pre-line">
                {selectedSession.content}
              </div>
            </>
          )}

        </div>

        {/* RIGHT STICKY SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-black border border-gray-800 rounded-xl p-6 max-h-[80vh] overflow-y-auto">

            {/* UPCOMING SECTION */}
            {upcomingSession && (
              <>
                <h2 className="text-green-400 font-semibold text-lg mb-4">Upcoming Session</h2>

                <button
                  onClick={() => {
                    setSelectedSession(upcomingSession);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`block text-left mb-6 transition ${selectedSession?.id === upcomingSession.id
                      ? "text-green-700"
                      : "text-gray-300 hover:text-green-400"
                    }`}
                >
                  <div className="flex flex-col">
                    <span>{upcomingSession.title}</span>

                    <span className="text-xs text-gray-500">
                      {upcomingSession.speaker} •{" "}
                      {new Date(upcomingSession.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </button>
              </>
            )}

            {/* PAST SESSIONS */}
            <h2 className="text-green-400 font-semibold text-lg mb-4">Past Sessions</h2>

            <div className="space-y-4">
              {pastSessions.map((session, index) => {
                const sessionNumber = pastSessions.length - index;

                return (
                  <button
                    key={session.id}
                    onClick={() => {
                      setSelectedSession(session);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`block text-left transition ${selectedSession?.id === session.id
                      ? "text-green-700"
                      : "text-gray-400 hover:text-green-400"
                      }`}
                  >
                    <div className="flex flex-col">
                      <span>
                        #{sessionNumber} {session.title}
                      </span>

                      <span className="text-xs text-gray-500">
                        {session.speaker} •{" "}
                        {new Date(session.publishedAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}