import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="h-full">
      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-400 transition duration-300 flex flex-col h-full">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl text-green-400 mb-2">
            {blog.title}
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            {blog.author} • {blog.readTime}
          </p>

          <p className="text-gray-400 mb-4 flex-grow">
            {blog.excerpt}
          </p>

          <p className="text-gray-500 text-xs mt-auto">
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>
        </div>

      </div>
    </Link>
  );
}
