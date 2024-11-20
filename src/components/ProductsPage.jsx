import React from "react";
import { Link } from "react-router-dom"; // Ensure React Router is set up

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
          <h2 className="text-2xl font-bold">Face</h2>
          <p className="mt-2 text-mutedMauve">Explore foundations, blushes, and more.</p>
        </Link>

        {/* Add other categories here */}
        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold">Eyes</h2>
          <p className="mt-2 text-mutedMauve">Discover eyeliners, mascaras, and more.</p>
        </div>

        <div className="p-6 bg-softPink rounded-lg shadow-md hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold">Lips</h2>
          <p className="mt-2 text-mutedMauve">Shop lipsticks, glosses, and balms.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
