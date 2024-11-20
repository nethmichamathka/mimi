import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 px-4 bg-softPink text-deepTaupe">
      {/* Logo */}
      <h1 className="text-3xl font-bold">Mimi Makeup</h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        <li className="p-4 hover:text-lightBeige cursor-pointer">Home</li>
        <li className="p-4 hover:text-lightBeige cursor-pointer">Products</li>
        <li className="p-4 hover:text-lightBeige cursor-pointer">About Us</li>
        <li className="p-4 hover:text-lightBeige cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
