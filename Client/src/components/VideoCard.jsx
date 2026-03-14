import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Link to={`/bootcamp/${video.id}`} className="h-full">
      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition duration-300 flex flex-col h-full">
        
        <div className="relative">
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={video.title}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition">
            <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center">
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-green-400 font-medium text-sm mb-1 line-clamp-2">
            {video.title}
          </h3>

          <p className="text-gray-500 text-xs mb-2">
            {video.creator}
          </p>

          <div className="flex flex-wrap gap-1 mt-auto">
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

      </div>
    </Link>
  );
}
