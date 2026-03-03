import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive ? "text-green-400" : "hover:text-green-400";

  return (
    <nav className="flex justify-between items-center py-6">
      {/* Logo */}
      <h1 className="text-green-400 text-xl font-bold">
        &gt; RGCET FOSS // TUX GLUG
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <NavLink to="/" className={activeClass} end>
          Home
        </NavLink>

        <NavLink to="/blogs" className={activeClass}>
          Blogs
        </NavLink>
        <NavLink to="/sessions" className={activeClass}>
          Sessions
        </NavLink>

        <NavLink to="/events" className={activeClass}>
          Events
        </NavLink>

        <NavLink to="/about" className={activeClass}>
          About
        </NavLink>
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
          <NavLink to="/" onClick={() => setIsOpen(false)} className={activeClass} end>
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className={activeClass}
          >
            Blogs
          </NavLink>
          <NavLink to="/sessions" className={activeClass}>
            Sessions
          </NavLink>

          <NavLink to="/events" onClick={() => setIsOpen(false)} className={activeClass}>
            Events
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(false)} className={activeClass}>
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}