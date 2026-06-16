import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl shrink-0">
      <div className="rounded-full border border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-2xl shadow-black/50 px-4 md:px-3 h-14 flex items-center justify-between gap-4 md:gap-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="lucide:box" class="text-white text-xl group-hover:scale-110 transition-transform"></iconify-icon>
          <span className="text-base font-medium tracking-tight text-white">Nexus</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group">
            Product 
            <iconify-icon icon="lucide:chevron-down" width="12" class="text-zinc-600 group-hover:text-white transition-colors"></iconify-icon>
          </a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Resources</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Log in
          </Link>
          <button className="relative rounded-full bg-white px-5 py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition-all overflow-hidden group hover:scale-105 active:scale-95">
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>
    </nav>
  );
}