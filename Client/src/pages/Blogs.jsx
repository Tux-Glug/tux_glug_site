import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";

export default function Blogs() {

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl text-green-400 mb-12">
          Blogs
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}