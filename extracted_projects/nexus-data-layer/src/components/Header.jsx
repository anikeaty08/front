import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030509]/70 backdrop-blur-xl border-b border-white/5 fade-in-animate">
      {/* Container paddings sync with Home page hero alignment */}
      <div className="w-full px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link to="/" className="flex items-center gap-3 group">
          <iconify-icon 
            icon="solar:planet-3-linear" 
            class="text-2xl text-[#60A5FA] group-hover:rotate-45 transition-transform duration-500"
          ></iconify-icon>
          <span className="font-playfair text-sm tracking-[0.25em] uppercase text-white font-medium">
            Nexus
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['Platform', 'Solutions', 'Documentation', 'Pricing'].map((item) => (
            <Link 
              key={item} 
              to="#" 
              className="text-xs font-inter font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <Link 
            to="#" 
            className="hidden md:block text-xs font-inter font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
          >
            Log In
          </Link>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2.5 rounded-full text-xs font-inter font-light uppercase tracking-widest transition-all duration-300 flex items-center gap-2 backdrop-blur-sm group">
            Console
            <iconify-icon 
              icon="solar:alt-arrow-right-linear" 
              class="text-sm group-hover:translate-x-1 transition-transform duration-300"
            ></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;