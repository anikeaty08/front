import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Series from './pages/Series';
import Exhibitions from './pages/Exhibitions';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden selection:bg-sky-500 selection:text-white relative text-zinc-900 bg-zinc-50 flex flex-col">
        <BackgroundGrid />
        
        <Navbar />
        
        <main className="z-10 relative flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/series" element={<Series />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="z-10 relative">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;