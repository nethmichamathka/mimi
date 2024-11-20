import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const [nav, setNav] = useState(false); // State for mobile menu

  const toggleNav = () => setNav(!nav); // Toggle mobile menu

  return (
    <div className="flex justify-between items-center h-24 px-4 bg-softPink text-white">
      {/* Left-aligned Logo */}
      <h1 className="text-3xl font-bold">Mimi Makeup</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        <li className="p-4 hover:text-black cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-black cursor-pointer">
          <Link to="/products">Products</Link>
        </li>
        <li className="p-4 hover:text-black cursor-pointer">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="p-4 hover:text-black cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div onClick={toggleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-[60%] h-full bg-[#ff69b4] text-white ease-in-out duration-500 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <li className="p-4 border-b border-gray-100 cursor-pointer">
          <Link to="/" onClick={toggleNav}>Home</Link>
        </li>
        <li className="p-4 border-b border-gray-100 cursor-pointer">
          <Link to="/products" onClick={toggleNav}>Products</Link>
        </li>
        <li className="p-4 border-b border-gray-100 cursor-pointer">
          <Link to="/about-us" onClick={toggleNav}>About Us</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/contact" onClick={toggleNav}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
