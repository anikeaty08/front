import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* 
        The main content area has max-width and vertical guide lines 
        to create the structured editorial feel requested.
      */}
      <main className="flex-grow max-w-[1400px] w-full mx-auto guide-lines relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}