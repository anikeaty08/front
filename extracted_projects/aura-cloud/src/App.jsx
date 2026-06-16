import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebGLBackground from './components/WebGLBackground';

export default function App() {
  return (
    <BrowserRouter>
      {/* Absolute background element */}
      <WebGLBackground />
      
      {/* Decorative ambient blur blobs */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="blob blob-1 absolute top-[8%] left-[-10rem] w-[30rem] h-[30rem] rounded-full bg-cyan-600/10 blur-[140px]"></div>
        <div className="blob blob-2 absolute top-[30%] right-[-10rem] w-[28rem] h-[28rem] rounded-full bg-teal-600/10 blur-[140px]"></div>
        <div className="blob blob-3 absolute bottom-[-8rem] left-[20%] w-[26rem] h-[26rem] rounded-full bg-cyan-400/10 blur-[140px]"></div>
      </div>

      <div className="max-w-[90rem] mx-auto min-h-screen relative flex flex-col">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}