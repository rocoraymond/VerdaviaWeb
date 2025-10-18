import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImg from "../assets/images/bgimg.png";
import tagImg from "../assets/images/verdaviatag1.jpeg"; // you can replace with your actual about image

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Green overlay for contrast */}
      <div className="absolute inset-0 bg-green-600 bg-opacity-70"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="px-4 py-6 md:px-8 relative z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto relative">
            {/* Logo */}
            <Link to="/" className="relative z-50">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Verdavia Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12 text-gray-200 font-medium absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="hover:text-white transition-all duration-300 hover:scale-105 transform">Home</Link>
              <Link to="/about" className="hover:text-white transition-all duration-300 hover:scale-105 transform">About</Link>
              <Link to="/services" className="hover:text-white transition-all duration-300 hover:scale-105 transform">Services</Link>
              <Link to="/contact" className="hover:text-white transition-all duration-300 hover:scale-105 transform">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button 
                className="text-gray-200 p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 hover:rotate-180 hover:scale-110 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40">
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
              {/* Menu */}
              <div className="fixed right-0 top-0 h-full w-64 bg-green-800 bg-opacity-95 shadow-xl transform transition-transform z-50">
                <div className="flex flex-col pt-20 px-4">
                  <Link 
                    to="/" 
                    className="text-gray-200 hover:text-white hover:bg-green-700 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-gray-200 hover:text-white hover:bg-green-700 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/services" 
                    className="text-gray-200 hover:text-white hover:bg-green-700 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-gray-200 hover:text-white hover:bg-green-700 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-12 pb-24 md:pb-32 text-white">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-edges mb-2">
              WHY VERDAVIA?
            </h2>
          </div>

          {/* Top section: two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* About Verdavia */}
            <div className="bg-white bg-opacity-15 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-edges mb-3">About Verdavia</h3>
              <p className="text-sm leading-relaxed opacity-90 text-justify">
                Verdavia is more than just a luggage tag — it’s a statement of
                purpose. Born from a passion for sustainability and innovation,
                Verdavia offers a unique solution for eco-conscious travelers:
                plantable luggage tags that reduce waste and give back to the
                Earth. Crafted from biodegradable materials embedded with native
                wildflower or seed herbs, each Verdavia tag is designed to leave
                a lasting mark — both on your journey and the planet. Once your
                travels are over, simply plant the tag in soil and water it
                well. What was once a travel essential becomes a beautiful
                reminder of your adventures, blooming with life.
              </p>
            </div>

            {/* Travel Green */}
            <div className="bg-white bg-opacity-15 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-edges mb-3">Travel Green</h3>
                <p className="text-sm leading-relaxed opacity-90 text-justify">
                  To inspire sustainable choices in everyday travel by combining
                  functionality with environmental responsibility. Each Verdavia
                  product encourages mindful travel — promoting a lifestyle that
                  respects nature while making every journey purposeful.
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="bg-opacity-10 p-4 rounded-xl flex flex-col items-center">
                  <img
                    src={tagImg}
                    alt="Verdavia Tag"
                    className="w-48 h-48 object-contain mb-4 rounded-lg"
                  />
                  <Link to="/services">
                    <button 
                      className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105"
                      onClick={() => {
                        document.documentElement.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      }}
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom four cards */}
          <div className="border-t border-green-300 border-opacity-40 my-8 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-green-700 hover:bg-opacity-30 transition">
              <h4 className="font-semibold mb-2">Eco-Friendly Materials</h4>
              <p className="text-sm opacity-90">
                100% biodegradable and made from recycled paper pulp.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-green-700 hover:bg-opacity-30 transition">
              <h4 className="font-semibold mb-2">Plantable Seeds</h4>
              <p className="text-sm opacity-90">
                Embedded with non-invasive, pollinator-friendly seeds.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-green-700 hover:bg-opacity-30 transition">
              <h4 className="font-semibold mb-2">Travel-Ready</h4>
              <p className="text-sm opacity-90">
                Durable enough for long trips, yet gentle on the Earth.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-green-700 hover:bg-opacity-30 transition">
              <h4 className="font-semibold mb-2">Zero Waste</h4>
              <p className="text-sm opacity-90">
                Designed to leave no trace — except a garden in bloom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
