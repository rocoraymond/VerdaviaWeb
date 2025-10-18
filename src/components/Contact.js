import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import backgroundImg from "../assets/images/bgimg.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const templateParams = {
        to_email: 'ilikeraymond011@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_d6zuq9s',
        'template_ft40lbs',
        templateParams,
        'AbIOw5r57VovlO8gj'
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was a problem sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-edges mb-4">Get in touch</h1>
                <p className="text-gray-200 mb-6">
                  Whether you have a question about Verdavia, need help with your order, or want to explore partnership opportunities, we're here to connect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-edges text-lg">Email</h3>
                    <p className="text-gray-200">verdaviasustainability@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-edges text-lg">Phone</h3>
                    <p className="text-gray-200">+63 912 345 6789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-edges text-lg">Let's Grow Together</h3>
                    <p className="text-gray-200">Send us a message—we'll get back to you as soon as possible. Every connection is a step toward a greener future.</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="font-edges text-xl mb-4">Work With Us</h3>
                <p className="text-gray-200">
                  Planning an event, looking for eco-friendly giveaways, or building a partnership? Verdavia collaborates with organizations that share the same vision of sustainability. Let's create something meaningful together.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h2 className="text-2xl font-edges mb-6">We'd love to hear from you!</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-300 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700 hover:scale-105'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>

                {submitStatus.message && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitStatus.success ? 'bg-green-600 bg-opacity-20' : 'bg-red-600 bg-opacity-20'
                  }`}>
                    <p className="text-sm text-white">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Community Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-edges text-center mb-8">Be Part of the Community</h3>
            <p className="text-center text-gray-200 max-w-2xl mx-auto">
              Don't just travel—bloom with us! Share your Verdavia story, tag us on social media, or drop us a line anytime. We'd love to celebrate your journey as we grow together toward a more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
