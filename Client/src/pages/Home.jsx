import Hero from "../components/Hero";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";
import GithubActivities from "../components/GithubActivities";
import { Link } from "react-router-dom";

export default function Home() {
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);
  return (

    <>

      <Hero />

      <section className="mt-20">
        <h2 className="text-green-400 mb-10">$ latest_blogs </h2>

        {latestBlogs.length === 0 ? (
          <p className="text-gray-400">No blogs published yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {latestBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
        <Link
          to="/blogs"
          className="inline-flex items-center text-green-400 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition mt-5 mb-5"
        >
          View all →
        </Link>
      </section>

      <GithubActivities />
    </>
  );
}