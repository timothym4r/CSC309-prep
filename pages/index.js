import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className="flex justify-between items-center p-4 bg-gray-900 text-white">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Navigation Links (hidden on small screens) */}
        <div id="nav-links" className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#authors" className="hover:text-gray-400">Authors</a>
          <a href="#stores" className="hover:text-gray-400">Stores</a>
          <a href="#books" className="hover:text-gray-400">Books</a>
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
      </header>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div id="nav-links-sm" className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 text-white py-4">
          <a href="#authors" className="hover:text-gray-400">Authors</a>
          <a href="#stores" className="hover:text-gray-400">Stores</a>
          <a href="#books" className="hover:text-gray-400">Books</a>
        </div>
      )}

      {/* Main Content */}
<main id="main-content" className="p-4">
  {/* Authors Section */}
  <section id="authors" className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <h2 className="text-2xl font-semibold mb-4">Authors</h2>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/* Author 1 */}
      <div className="author-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Author 1" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Author 1</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* Author 2 */}
      <div className="author-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Author 2" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Author 2</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* Author 3 */}
      <div className="author-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Author 3" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Author 3</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
    {/* </div> */}
  </section>

  {/* Stores Section */}
  <section id="stores" className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <h2 className="text-2xl font-semibold mb-4">Stores</h2>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/* Store 1 */}
      <div className="store-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Store 1" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Store 1</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* Store 2 */}
      <div className="store-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Store 2" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Store 2</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* Store 3 */}
      <div className="store-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Store 3" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Store 3</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      {/* </div> */}
    </div>
  </section>

  {/* Books Section */}
  <section id="books" className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <h2 className="text-2xl font-semibold mb-4">Books</h2>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/* Book 1 */}
      <div className="book-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Book 1" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Book 1</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* Book 2 */}
      <div className="book-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Book 2" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Book 2</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* Book 3 */}
      <div className="book-card p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src="/shibuya.jpg" alt="Book 3" className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold">Book 3</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
    {/* </div> */}
  </section>
</main>


{/* <footer id="footer" className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
    <div className="mb-4 sm:mb-0">
      <p className="contact-info">Contact us at: example@email.com</p>
    </div>
    <div className="flex space-x-6 social-media-links">
      <a href="#" className="hover:text-gray-400">Facebook</a>
      <a href="#" className="hover:text-gray-400">Twitter</a>
      <a href="#" className="hover:text-gray-400">Instagram</a>
  </div>
</footer> */}

{/* Footer */}
<footer id="footer" className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
  <div className="mb-4 sm:mb-0">
    <p className="contact-info">Contact us at: example@email.com</p>
  </div>
  <div className="flex space-x-6 social-media-links">
    <a href="#" className="hover:text-gray-400">Facebook</a>
    <a href="#" className="hover:text-gray-400">Twitter</a>
    <a href="#" className="hover:text-gray-400">Instagram</a>
  </div>
</footer>


    </div>
  );
}
