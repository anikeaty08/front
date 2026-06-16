import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex md:px-12 z-50 border-b pt-6 pr-6 pb-6 pl-6 relative items-center justify-between border-black/5 bg-zinc-50/80 backdrop-blur-md">
      <Link to="/" onClick={closeMenu} className="inline-flex items-center gap-2 font-bold tracking-tighter text-2xl">
        <span className="w-6 h-6 rounded flex items-center justify-center text-sm text-white bg-zinc-900">L</span>
        LUMEN
      </Link>

      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="group flex items-center gap-3 px-5 py-2 border transition duration-300 bg-transparent border-black/10 hover:bg-black/5"
        >
          <Menu className="w-5 h-5 stroke-[1.5] text-black" />
          <span className="text-sm font-medium tracking-wide">Work</span>
        </button>
        
        <div className={clsx("absolute right-0 top-full mt-2 w-56 border shadow-2xl py-2 z-50 backdrop-blur-xl bg-white/95 border-black/5 transition-all duration-300 transform origin-top-right", isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible")}>
          <Link onClick={closeMenu} to="/portfolio" className={clsx("block px-6 py-3 text-sm font-medium transition-colors tracking-wide border-b border-black/5 hover:bg-black/5 hover:text-sky-600", location.pathname === '/portfolio' ? 'text-sky-600 bg-black/5' : 'text-black/70')}>
            Portfolio
          </Link>
          <Link onClick={closeMenu} to="/series" className={clsx("block px-6 py-3 text-sm font-medium transition-colors tracking-wide border-b border-black/5 hover:bg-black/5 hover:text-sky-600", location.pathname === '/series' ? 'text-sky-600 bg-black/5' : 'text-black/70')}>
            Series
          </Link>
          <Link onClick={closeMenu} to="/exhibitions" className={clsx("block px-6 py-3 text-sm font-medium transition-colors tracking-wide border-b border-black/5 hover:bg-black/5 hover:text-sky-600", location.pathname === '/exhibitions' ? 'text-sky-600 bg-black/5' : 'text-black/70')}>
            Exhibitions
          </Link>
          <Link onClick={closeMenu} to="/contact" className={clsx("block px-6 py-3 text-sm font-medium transition-colors tracking-wide hover:bg-black/5 hover:text-sky-600", location.pathname === '/contact' ? 'text-sky-600 bg-black/5' : 'text-black/70')}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}