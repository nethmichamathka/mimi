import React from "react";

const MainPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610296191613-b53d12f003dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Mimi Makeup
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl mt-4 max-w-[600px] text-center">
            Redefining beauty with premium, cruelty-free, and inclusive makeup
            products.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#ff69b4] text-white font-bold rounded hover:bg-[#e256a1]">
            Explore Collection
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Mimi?</h2>
        <p className="text-gray-600 text-lg mt-4 max-w-[800px] mx-auto">
          Mimi Makeup is a premium brand dedicated to delivering high-quality,
          vegan, and cruelty-free beauty products that cater to all skin tones.
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          <div className="w-[300px] h-[200px] bg-pink-100 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800">Vegan</h3>
            <p className="text-gray-600 mt-2">
              100% vegan ingredients for a guilt-free glam.
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-pink-100 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800">Inclusive</h3>
            <p className="text-gray-600 mt-2">
              Products designed for every skin tone.
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-pink-100 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800">Sustainable</h3>
            <p className="text-gray-600 mt-2">
              Packaging that's kind to the planet.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-20 px-6 bg-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-[1200px] mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587019158145-86c1570b7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Lipstick"
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Bold Matte Lipstick</h3>
              <p className="text-gray-600 mt-2">$25.00</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514136649218-a517c0640c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Eyeshadow Palette"
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Shimmer Eyeshadow Palette</h3>
              <p className="text-gray-600 mt-2">$40.00</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587019158145-86c1570b7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Highlighter"
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold">Glow Highlighter</h3>
              <p className="text-gray-600 mt-2">$30.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-6 text-center bg-[#ff69b4] text-white">
        <h2 className="text-4xl font-bold">Get the Look!</h2>
        <p className="text-lg mt-4 max-w-[600px] mx-auto">
          Join the Mimi community today and enjoy exclusive offers and tutorials.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-[#ff69b4] font-bold rounded hover:bg-gray-100">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default MainPage;
