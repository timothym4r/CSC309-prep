import { useState } from "react";

export default function FlexLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="text-xl font-bold">Logo</div>
        {/* Navigation Links (hidden on small screens) */}
        <div id="nav-links" className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        {/* Hamburger Menu Icon (visible on small screens) */}
        <button
          id="hamburger-menu"
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Links (visible when hamburger menu is clicked) */}
      {menuOpen && (
        <div id="nav-links-sm" className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 text-white py-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "/shibuya.jpg", justifyContent: "center", alignItems: "center" }}
        // style={{ backgroundImage: "url('https://via.placeholder.com/1500x600?text=Hero+Image')" }}
        >
        <div className="hero-title text-black text-4xl font-bold mb-4">
            Welcome to Our Website
        </div>
        <button className="hero-button bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started
        </button>
        </section>
    </div>
  );
}
