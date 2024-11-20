import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import ProductsPage from "./components/ProductsPage";
import FaceProductsPage from "./components/FaceProductsPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/face-products" element={<FaceProductsPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
