import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services'; // Import Services page
import InteriorDesigners from './components/InteriorDesigners'; // Import Interior Designers page
import Insights from './components/Insights'; // Import Insights page
import About from './components/About'; // Import About page
import Contact from './components/Contact'; // Import Contact page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/interior-designers" element={<InteriorDesigners />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
