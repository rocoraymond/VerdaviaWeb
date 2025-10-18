import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImg from "../assets/images/bgimg.png";

const servicesData = [
  {
    title: "About Verdavia",
    description: "At Verdavia, we turn travel into a force for good. Through innovative design and sustainable materials, we create a positive mark on the planet."
  },
  {
    title: "Eco-Friendly Travel Accessories",
    description: "Every Verdavia tag is crafted from sustainable materials with seeds embedded within. Our products are beautiful, and biodegradable."
  },
  {
    title: "Personalized & Branded Designs",
    description: "Whether you're an individual traveler, business, or an organization, Verdavia offers custom print and branding options for your campaign."
  },
  {
    title: "Sustainability in Action",
    description: "Reduce waste through our eco-friendly travel accessories that transform into living plants after your journey ends."
  }
];

const impactCards = [
  {
    title: "More Than Just Tags",
    description: "Each Verdavia product is more than just a travel essential—we give you a way to journey with purpose and leave a positive mark."
  },
  {
    title: "Plant Your Journey",
    description: "When your travels end, plant your tag with embedded wildflowers or herbs after your trip. Watch your adventures turn sustainable, beautiful, and meaningful."
  },
  {
    title: "Perfect For Events",
    description: "Branded tags perfect to give away at conferences, eco-tourism events, or promotional campaigns."
  },
  {
    title: "Environmental Impact",
    description: "Every tag embodies our commitment to help create a greener future. Each tag symbolizes a journey that goes beyond function, uniting design, and environmental responsibility."
  }
];

const Services = () => {
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
              OUR SERVICES
            </h2>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-15 p-6 rounded-2xl shadow-lg hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-xl font-edges mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-90 text-justify">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-edges text-center mb-8">Making an Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactCards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-10 p-6 rounded-xl hover:bg-green-700 hover:bg-opacity-30 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-semibold mb-3">{card.title}</h4>
                    <p className="text-sm opacity-90">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white bg-opacity-15 p-8 rounded-3xl">
              <h3 className="text-2xl font-edges mb-4">Ready to Make a Difference?</h3>
              <p className="mb-6 text-lg opacity-90">
                Join us in revolutionizing eco-friendly travel accessories.
              </p>
              <Link to="/contact">
                <button 
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    document.documentElement.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                >
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
