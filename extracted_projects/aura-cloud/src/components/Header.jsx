import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="w-full px-4 pt-6 md:px-12 md:pt-8 z-20 absolute top-0 left-0 right-0 max-w-[90rem] mx-auto">
      <div className="relative rounded-full p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent w-full transition-all duration-500 hover:from-white/30">
        <header className="flex items-center justify-between px-6 py-4 rounded-full bg-black/40 backdrop-blur-xl w-full border border-white/5 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
          <Link to="/" className="flex items-center gap-2 z-20 group">
            <iconify-icon icon="solar:infinity-linear" width="22" height="22" className="opacity-80 group-hover:opacity-100 transition-opacity text-white" style={{ strokeWidth: 1.5 }}></iconify-icon>
            <span className="text-sm font-medium tracking-wide">Aura</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-xs tracking-widest font-medium text-gray-400 uppercase">
            <Link to="#" className="hover:text-white transition-colors duration-300">Platform</Link>
            <Link to="#" className="hover:text-white transition-colors duration-300 flex items-center gap-1">
              Modules <span className="text-white font-light">+</span>
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">Customers</Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">Pricing</Link>
          </nav>

          <div className="hidden md:block z-20">
            <Link to="#" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 backdrop-blur-sm">
              GET ACCESS
            </Link>
          </div>

          <button className="md:hidden text-white z-20 opacity-80 hover:opacity-100">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>
        </header>
      </div>
    </div>
  );
}