import { useParams, Link } from "react-router-dom";
import videos from "../data/videos";

export default function VideoPlayer() {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-green-400 mb-4">Video not found</h1>
          <Link to="/bootcamp" className="text-gray-400 hover:text-green-400">
            ← Back to Bootcamp
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] pb-16">
      <Link 
        to="/bootcamp" 
        className="inline-flex items-center text-gray-400 hover:text-green-400 mb-4"
      >
        ← Back to Bootcamp
      </Link>

      <div className="w-full aspect-video mb-6 bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h1 className="text-2xl text-green-400 mb-2">{video.title}</h1>
      
      <div className="flex items-center gap-3 mb-4">
        <p className="text-gray-400">{video.creator}</p>
        <span className="text-gray-600">•</span>
        <div className="flex gap-2">
          {video.topics.map(topic => (
            <span 
              key={topic} 
              className="text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 mt-6">
        <h2 className="text-xl text-gray-300 mb-4">Tutorial / Notes</h2>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <p className="text-gray-400 whitespace-pre-line">
            {video.tutorial}
          </p>
        </div>
      </div>
    </div>
  );
}
