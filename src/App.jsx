import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sfax from './pages/Sfax';
import Opportunities from './pages/Opportunities';
import Booklets from './pages/Booklets';
import Contact from './pages/Contact';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <div className="app">
        <Preloader />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sfax" element={<Sfax />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/booklets" element={<Booklets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
