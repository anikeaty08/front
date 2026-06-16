import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WebGLBackground from '../effects/WebGLBackground';

const Layout = () => {
  return (
    <div className="antialiased bg-gradient-to-b from-[#312e81] to-[#1e1b4b] text-gray-800 relative min-h-screen flex flex-col">
      <WebGLBackground />
      
      {/* Structural Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center px-6 lg:px-12 max-w-[1600px] mx-auto w-full mix-blend-overlay">
        <div className="w-full flex justify-between h-full border-x border-white/5 relative">
          <div className="w-px h-full bg-white/5"></div>
          <div className="w-px h-full bg-white/5"></div>
          <div className="w-px h-full bg-white/5 hidden md:block"></div>
          <div className="w-px h-full bg-white/5 hidden lg:block"></div>
          <div className="w-px h-full bg-white/5 hidden lg:block"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow w-full selection:bg-[#12c2e9] selection:text-white">
        <Navbar />
        <main className="flex-grow w-full flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;