import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import headerImg from '../assets/images/img6.png';
import contentImg from '../assets/images/conimg.png';
import backgroundImg from '../assets/images/bgimg.png';
import verdaviatag1 from '../assets/images/verdaviatag1.jpeg';
import verdaviatag2 from '../assets/images/verdaviatag2.jpeg';
import verdaviatag3 from '../assets/images/verdaviatag3.jpeg';



// Carousel data and component
const carouselItems = [
  {
    title: "Eco-Friendly Packing Tips",
    image: verdaviatag1,
    text: "Discover how to pack light and green for every adventure. Use reusable containers, eco-friendly toiletries, and minimize single-use plastics to reduce your travel footprint."
  },
  {
    title: "Sustainable Destinations",
    image: verdaviatag2,
    text: "Explore destinations that prioritize sustainability, conservation, and community engagement. Verdavia helps you find places that care for the planet and its people."
  },
  {
    title: "Local Experiences",
    image: verdaviatag3,
    text: "Immerse yourself in local culture and support small businesses. Verdavia connects you to authentic experiences that benefit local communities."
  }
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = carouselItems.length;
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-white bg-opacity-10 rounded-xl p-4 w-full flex flex-col items-center relative">
        <h4 className="text-xl font-edges mb-2 text-center">{carouselItems[current].title}</h4>
        <div className="w-62 h-40 mb-2 flex items-center justify-center">
          <img src={carouselItems[current].image} alt={carouselItems[current].title} className="w-full h-full object-contain" />
        </div>
        <p className="text-md opacity-90 text-justify">{carouselItems[current].text}</p>
        {/* Arrow Buttons */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-600 bg-opacity-80 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700 transition disabled:opacity-40"
          onClick={() => setCurrent((current - 1 + total) % total)}
          disabled={total <= 1}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 bg-opacity-80 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-700 transition disabled:opacity-40"
          onClick={() => setCurrent((current + 1) % total)}
          disabled={total <= 1}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-green-400' : 'bg-white bg-opacity-30'} border-2 border-green-600 focus:outline-none`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Interactive Facts Section
const facts = [
  {
    fact: "Traveling by train emits up to 90% less CO₂ than flying the same distance.",
  },
  {
    fact: "Staying at eco-certified hotels helps conserve water and energy.",
  },
  {
    fact: "Buying local souvenirs supports community artisans and reduces shipping emissions.",
  },
  {
    fact: "Reusable water bottles save thousands of plastic bottles from landfills each year.",
  }
];

function FactsSection() {
  return (
    <div className="mt-10">
      <h4 className="text-lg md:text-xl font-bold mb-4 text-center text-green-200">Did You Know?</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {facts.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white bg-opacity-10 rounded-xl p-6 flex items-center space-x-4 shadow-lg hover:bg-green-600 hover:bg-opacity-30 transition duration-300 cursor-pointer"
          >
            <span className="text-gray-200 text-base md:text-lg font-medium group-hover:text-white transition duration-300">{item.fact}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-green-600 bg-opacity-70"></div>
      
      {/* Content Container */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="px-4 py-6 md:px-8 relative z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto relative">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Verdavia Logo" className="w-full h-full object-contain" />
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

      {/* Hero Section */}
      <div className="px-4 py-8 md:px-8 md:py-16 pb-24 md:pb-32 min-h-screen overflow-y-auto">
        <div className="w-full flex flex-col items-center">
          {/* Top Content - VERDAVIA Title */}
          <div className="text-white relative flex flex-col items-center justify-center w-full mb-12">
            <div className="relative text-center flex flex-col items-center justify-center space-y-6">
              <p className="text-base md:text-lg font-edges animate-fadeIn text-gray-200">
                Plan a Meaningful Trip
              </p>
              
              <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight relative z-10 font-maglisto animate-fadeIn text-gray-100">
                VERDAVIA
              </h1>
                
                {/* Image with high z-index positioned over the title */}
                <div className="absolute top-10 md:top-14 lg:top-38 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="w-42 h-36 md:w-42 md:h-36 lg:w-62 lg:h-32 flex items-center justify-center">
                    <img src={headerImg} alt="Travel Header" className="w-full h-full object-contain drop-shadow-lg" />
                  </div>
                </div>
              </div>
              
              <div className="mt-28 md:mt-20 lg:mt-24">
                <Link to="/contact">
                  <button 
                    className="bg-white text-green-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 animate-bounce"
                    onClick={() => {
                      document.documentElement.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full flex justify-center mt-12">
              {/* Travel Description Card */}
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 text-gray-200 w-full max-w-6xl transform transition-all duration-700 hover:bg-opacity-20 animate-fadeIn">
                <h3 className="text-xl md:text-2xl lg:text-3xl mb-6 text-center animate-slideUp text-gray-100 font-edges">
                  Travel Green, Travel Smart — with Verdavia
                </h3>
                {/* Content Image - Luggage Stack */}
                <div className="mb-6 flex justify-center">
                  <div className="w-64 h-40 md:w-72 md:h-44 lg:w-80 lg:h-48 flex items-center justify-center">
                    <img src={contentImg} alt="Travel Luggage" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-4 text-xl leading-relaxed opacity-95 text-justify">
                  <p>
                    Meet Verdavia – the Eco-Friendly Adventure Companion for the Modern Explorer. Built to inspire mindful journeys, sustainable adventures, and meaningful connections to our planet, Verdavia guides you toward responsible tourism that enriches both your soul and the environment.
                  </p>
                  <p>
                    At Verde, carbon neutral travel starts today. Whether it's selecting environmentally conscious accommodations, finding zero-waste attractions, or planning seamless eco-friendly itineraries, Verdavia makes sustainable exploration accessible and inspiring. Join millions of conscious travelers reshaping travel for a better tomorrow.
                  </p>
                </div>
                {/* Carousel Section */}
                <div className="mt-8 ">
                  <Carousel />
                  <FactsSection />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
  );
};

// Fix the className string by removing extra spaces and newlines
document.documentElement.style.scrollBehavior = 'smooth';

export default Home;
