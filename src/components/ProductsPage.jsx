import React from "react";
import { Link } from "react-router-dom"; // Ensure React Router is set up
import face1 from "../images/Face/face1.webp";
import face2 from "../images/Face/face2.webp";

const ProductsPage = () => {
  return (
    <div className="bg-lightBeige text-deepTaupe min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {/* Face Products */}
        <Link
          to="/face-products"
          className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          <img
            src={face2}
            alt="Face Products"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Face</h2>
          <p className="mt-2 text-mutedMauve">
            Explore foundations, blushes, and more.
          </p>
        </Link>

        {/* Eyes Products */}
        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src={face2}
            alt="Eyes Products"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Eyes</h2>
          <p className="mt-2 text-mutedMauve">
            Discover eyeliners, mascaras, and more.
          </p>
        </div>

        {/* Lips Products */}
        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src={face2}
            alt="Lips Products"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Lips</h2>
          <p className="mt-2 text-mutedMauve">
            Shop lipsticks, glosses, and balms.
          </p>
        </div>

        {/* Tools */}
        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src={face1}
            alt="Tools"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Tools</h2>
          <p className="mt-2 text-mutedMauve">
            Brushes, beauty blenders, and accessories.
          </p>
        </div>

        {/* Skin Prep */}
        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src={face2}
            alt="Skin Prep"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Skin Prep</h2>
          <p className="mt-2 text-mutedMauve">
            Moisturizers, primers, and serums.
          </p>
        </div>

        {/* Specialty Makeup */}
        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src={face1}
            alt="Specialty Makeup"
            className="w-full h-[200px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Specialty Makeup</h2>
          <p className="mt-2 text-mutedMauve">
            Body glitter, face paints, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
