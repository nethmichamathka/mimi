import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage'; // Your main content

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
