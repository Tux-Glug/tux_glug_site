export default function Hero() {
  return (
    <section className="text-center py-28">
      <div className="inline-block px-4 py-2 border border-green-500 rounded-full text-green-400 text-sm mb-6">
        v1.0 — open source linux community
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="text-green-400">TUX</span> GLUG
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Tux GLUG is college community dedicated to free and open-source software.
        We learn, build, and share — together.
      </p>

      <div className="space-x-4">
        <button className="bg-green-500 text-black px-6 py-3 rounded hover:bg-green-400">
          Read Blogs
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded hover:border-green-400">
          View Events
        </button>
      </div>
    </section>
  );
}