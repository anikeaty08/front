import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 mt-20 relative z-20 bg-[#0a0a1a]/40 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Social Links Grid */}
        <div className="w-full md:w-1/2 flex border-b md:border-b-0 md:border-r border-white/10">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-10 border-r border-white/10 text-white hover:bg-white/5 transition-all duration-300 group">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 group-hover:text-white transition-colors">Twitter</span>
            <iconify-icon icon="simple-icons:x" class="text-lg opacity-70 group-hover:opacity-100 transition-opacity"></iconify-icon>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-10 border-r border-white/10 text-white hover:bg-white/5 transition-all duration-300 group">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 group-hover:text-white transition-colors">Instagram</span>
            <iconify-icon icon="simple-icons:instagram" class="text-lg opacity-70 group-hover:opacity-100 transition-opacity"></iconify-icon>
          </a>
          <a href="https://artsy.net" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-10 text-white hover:bg-white/5 transition-all duration-300 group">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 group-hover:text-white transition-colors">Artsy</span>
            <iconify-icon icon="simple-icons:artsy" class="text-lg opacity-70 group-hover:opacity-100 transition-opacity"></iconify-icon>
          </a>
        </div>

        {/* Copyright / Logo */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end py-10 px-6 md:px-12 text-white">
          <Link to="/" className="font-semibold text-4xl tracking-tighter mb-3 hover:text-[#12c2e9] transition-colors">ME</Link>
          <div className="text-[11px] text-white/50 tracking-widest font-serif italic">
            © Martin Elias, {new Date().getFullYear()}
          </div>
          <div className="text-[9px] text-white/30 tracking-[0.2em] uppercase mt-4">
            New York • Paris • London
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;