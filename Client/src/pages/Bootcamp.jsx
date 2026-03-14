import { useState, useMemo } from "react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

export default function Bootcamp() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const allTopics = useMemo(() => {
    const topics = new Set();
    videos.forEach(v => v.topics.forEach(t => topics.add(t)));
    return Array.from(topics).sort();
  }, []);

  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.topics.some(t => t.toLowerCase().includes(search.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => video.topics.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedTags([]);
  };

  return (
    <div className="min-h-[60vh] pb-16">
      <h1 className="text-green-400 text-3xl mb-8">Bootcamp</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 sticky top-24">
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:border-green-400 focus:outline-none mb-4"
            />

            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-2">Filter by topic:</p>
              <div className="flex flex-wrap gap-2">
                {allTopics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => toggleTag(topic)}
                    className={`text-xs px-3 py-1 rounded transition ${
                      selectedTags.includes(topic)
                        ? "bg-green-400 text-black"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {(search || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="w-full text-sm text-gray-400 hover:text-green-400 transition"
              >
                Clear filters
              </button>
            )}

            {filteredVideos.length === 0 && (
              <p className="text-gray-500 text-sm mt-4">No videos found</p>
            )}
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
