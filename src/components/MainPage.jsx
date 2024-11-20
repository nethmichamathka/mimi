import React from "react";

const MainPage = () => {
  return (
    <div className="bg-lightBeige text-deepTaupe">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610296191613-b53d12f003dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-lightBeige text-5xl md:text-7xl font-bold">
            Mimi Makeup
          </h1>
          <p className="text-softPink text-lg md:text-2xl mt-4 max-w-[600px] text-center">
            Redefining beauty with premium, cruelty-free, and inclusive makeup
            products.
          </p>
          <button className="mt-6 px-8 py-3 bg-softPink text-lightBeige font-bold rounded hover:bg-mediumTaupe">
            Explore Collection
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-20 px-6 text-center bg-softPink">
        <h2 className="text-4xl font-bold text-deepTaupe">Why Choose Mimi?</h2>
        <p className="text-lightBeige text-lg mt-4 max-w-[800px] mx-auto">
          Mimi Makeup is a premium brand dedicated to delivering high-quality,
          vegan, and cruelty-free beauty products that cater to all skin tones.
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          <div className="w-[300px] h-[200px] bg-mutedMauve rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-lightBeige">Vegan</h3>
            <p className="text-lightBeige mt-2">
              100% vegan ingredients for a guilt-free glam.
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-mutedMauve rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-lightBeige">Inclusive</h3>
            <p className="text-lightBeige mt-2">
              Products designed for every skin tone.
            </p>
          </div>
          <div className="w-[300px] h-[200px] bg-mutedMauve rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-lightBeige">Sustainable</h3>
            <p className="text-lightBeige mt-2">
              Packaging that's kind to the planet.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-6 text-center bg-mediumTaupe text-lightBeige">
        <h2 className="text-4xl font-bold">Get the Look!</h2>
        <p className="text-lg mt-4 max-w-[600px] mx-auto">
          Join the Mimi community today and enjoy exclusive offers and tutorials.
        </p>
        <button className="mt-6 px-8 py-3 bg-lightBeige text-deepTaupe font-bold rounded hover:bg-mutedMauve">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default MainPage;
