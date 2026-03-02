import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6">
      {/* Logo */}
      <h1 className="text-green-400 text-xl font-bold">
        &gt; FOSS // GLUG
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/events" className="hover:text-green-400">Events</Link>
        <Link to="/about" className="hover:text-green-400">About</Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-green-400 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-black border border-gray-800 rounded-lg p-6 flex flex-col space-y-4 md:hidden shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-400">
            Home
          </Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-green-400">
            Events
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-400">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}