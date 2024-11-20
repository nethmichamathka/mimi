import React from "react";
import allProducts from "../images/allproducts.webp";
import { motion } from "framer-motion"; // Import Framer Motion
import eyeliner from "../images/eyeliner.webp";
import lipstick from "../images/lipstick.webp";
import logo from "../images/logo.webp";

const MainPage = () => {
  return (
    <div className="bg-lightBeige text-deepTaupe">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen animate-fadeIn"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-lightBeige text-5xl md:text-7xl font-bold animate-bounce">
            Mimi Makeup
          </h1>
          <p className="text-softPink text-lg md:text-2xl mt-4 max-w-[600px] text-center animate-fadeIn">
            Redefining beauty with premium, cruelty-free, and inclusive makeup
            products.
          </p>
          <button className="mt-6 px-8 py-3 bg-softPink text-lightBeige font-bold rounded hover:bg-mediumTaupe animate-pulse">
            Explore Collection
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <motion.div
        className="py-20 px-6 text-center bg-softPink"
        initial={{ opacity: 0, y: 50 }} // Starting animation (scroll down)
        whileInView={{ opacity: 1, y: 0 }} // Animation when in viewport
        exit={{ opacity: 0, y: -50 }} // Exit animation (scroll up)
        viewport={{ once: false, amount: 0.5 }} // Trigger animation when 50% of section is visible
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-deepTaupe">
          Why Choose Mimi?
        </h2>
        <p className="text-lightBeige text-lg mt-4 max-w-[800px] mx-auto">
          Mimi Makeup is a premium brand dedicated to delivering high-quality,
          vegan, and cruelty-free beauty products that cater to all skin tones.
        </p>
        <motion.img
          src={allProducts}
          alt="Mimi Makeup Products"
          className="mx-auto mt-8 w-[300px] h-[200px] object-cover rounded-lg shadow-md"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Featured Products Section */}
      <div className="py-20 px-6 bg-lightBeige">
        <h2 className="text-4xl font-bold text-center text-deepTaupe animate-fadeIn">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-[1200px] mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-slideIn">
            <img
              src={lipstick}
              alt="Lipstick"
              className="w-full h-[300px] object-contain bg-lightBeige animate-fadeIn hover:scale-110 transition-transform duration-500"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-deepTaupe">
                Premium Gold Ruby Red Lipstick
              </h3>
              <p className="text-mutedMauve mt-2">$50.00</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-slideIn">
            <img
              src={eyeliner}
              alt="Eyeliner"
              className="w-full h-[300px] object-contain bg-lightBeige animate-fadeIn hover:scale-110 transition-transform duration-500"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-deepTaupe">
                Premium Eyeliner
              </h3>
              <p className="text-mutedMauve mt-2">$20.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-6 text-center bg-mediumTaupe text-lightBeige">
        <img
          src={logo}
          alt="Mimi Makeup Logo"
          className="mx-auto mb-8 w-[150px] h-[150px] object-contain animate-fadeIn hover:rotate-180 transition-transform duration-700"
        />
        <h2 className="text-4xl font-bold animate-fadeIn">Get the Look!</h2>
        <p className="text-lg mt-4 max-w-[600px] mx-auto animate-slideIn">
          Join the Mimi community today and enjoy exclusive offers and tutorials.
        </p>
        <button className="mt-6 px-8 py-3 bg-lightBeige text-deepTaupe font-bold rounded hover:bg-mutedMauve animate-pulse">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default MainPage;
