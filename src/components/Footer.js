import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#ff69b4] text-white py-6">
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About Mimi Makeup */}
        <div>
          <h1 className="text-2xl font-bold">Mimi Makeup</h1>
          <p className="py-4 text-gray-200">
            Empowering beauty with cruelty-free, inclusive, and sustainable makeup for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-medium text-lg mb-4">Quick Links</h2>
          <ul>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">Home</li>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">Products</li>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">About Us</li>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">Contact</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="font-medium text-lg mb-4">Follow Us</h2>
          <ul>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">Facebook</li>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">Instagram</li>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">Twitter</li>
            <li className="py-2 text-gray-300 cursor-pointer hover:text-black">YouTube</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-6">
        &copy; {new Date().getFullYear()} Mimi Makeup. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
