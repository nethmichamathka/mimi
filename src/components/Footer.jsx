import React from 'react';

const Footer = () => {
  return (
    <div className="bg-deepTaupe text-lightBeige py-6">
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h1 className="text-2xl font-bold">Mimi Makeup</h1>
          <p className="py-4 text-softPink">
            Empowering beauty with cruelty-free, inclusive, and sustainable makeup for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-medium text-lg mb-4">Quick Links</h2>
          <ul>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">Home</li>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">Products</li>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">About Us</li>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">Contact</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="font-medium text-lg mb-4">Follow Us</h2>
          <ul>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">Facebook</li>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">Instagram</li>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">Twitter</li>
            <li className="py-2 text-mutedMauve cursor-pointer hover:text-lightBeige">YouTube</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-softPink mt-6">
        &copy; {new Date().getFullYear()} Mimi Makeup. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
