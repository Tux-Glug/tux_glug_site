import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="block h-full group">
      <div className="bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 hover:bg-gray-900/60 transition-all duration-300 flex flex-col h-full shadow-lg">

        {/* Image Container - 'overflow-hidden' is retained for card stability */}
        <div className="overflow-hidden h-48 w-full border-b border-gray-800/50 shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          
          {/* Top Meta Data (Date & Read Time) */}
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-gray-500">
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            <span className="bg-gray-800/50 border border-gray-700/50 px-2 py-1 rounded text-green-400/80">
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-green-400 mb-1 group-hover:text-green-300 transition-colors line-clamp-2">
            {blog.title}
          </h2>

          {/* Author */}
          <p className="text-gray-500 text-sm mb-4 font-medium">
            by <span className="text-gray-400">{blog.author}</span>
          </p>

          {/* Excerpt */}
          <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Action Link at the bottom - Arrow translation is still active */}
          <div className="mt-auto flex items-center text-green-500 text-sm font-medium group-hover:text-green-400 transition-colors">
            Read Article 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
          
        </div>

      </div>
    </Link>
  );
}