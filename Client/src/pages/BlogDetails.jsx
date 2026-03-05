import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function BlogDetails() {

  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return <div className="py-24 text-center">Blog not found</div>;
  }

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4">

        <h1 className="text-4xl text-green-400 mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-400 mb-8">
          {blog.author} • {blog.readTime} •{" "}
          {new Date(blog.publishedAt).toLocaleDateString()}
        </p>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl mb-8"
        />

        <div className="text-gray-300 leading-8 whitespace-pre-line">
          {blog.content}
        </div>

      </div>
    </section>
  );
}