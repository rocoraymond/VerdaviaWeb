import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import CustomCursor from './components/ui/CustomCursor';
import { SoundProvider } from './components/ui/SoundManager';

// Scroll to top upon page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <SoundProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </SoundProvider>
  );
}

export default App;
