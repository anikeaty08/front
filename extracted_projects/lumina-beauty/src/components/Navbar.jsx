import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled ? "bg-[#F4F1EB]/90 backdrop-blur-md border-zinc-200/80 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center z-50 relative group">
          <iconify-icon icon="solar:stars-minimalistic-bold-duotone" width="28" height="28" className="text-zinc-900 group-hover:rotate-12 transition-transform duration-300"></iconify-icon>
          <span className="text-xl font-medium tracking-tight text-zinc-900 ml-2">Lumina</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#vision" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Our Vision</a>
          <a href="#how-it-works" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">How It Works</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex items-center justify-center p-2 z-50 relative text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <iconify-icon 
            icon={isMobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} 
            width="28" 
            height="28"
          ></iconify-icon>
        </button>

      </div>
    </header>
  );
}