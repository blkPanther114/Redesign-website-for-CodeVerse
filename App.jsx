import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import LearningPathways from './pages/LearningPathways';
import Neurodiversity from './pages/Neurodiversity';
import Impact from './pages/Impact';
import CaseStudies from './pages/CaseStudies';
import Partners from './pages/Partners';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/learning-pathways" element={<LearningPathways />} />
            <Route path="/neurodiversity" element={<Neurodiversity />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
