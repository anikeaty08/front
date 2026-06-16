import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Artwork', path: '/artwork' },
  { name: 'Exhibitions', path: '/exhibitions' },
  { name: 'Blog', path: '/blog' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={clsx(
        "w-full fixed top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#1e1b4b]/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <Link to="/" className="font-semibold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          ME
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[11px] font-medium tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={clsx(
                "transition-colors duration-300 hover:text-white relative group",
                location.pathname === link.path ? "text-white" : "text-white/60"
              )}
            >
              {link.name}
              <span className={clsx(
                "absolute -bottom-2 left-0 h-[1px] bg-[#12c2e9] transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl text-white hover:text-[#12c2e9] transition-colors"
          aria-label="Toggle menu"
        >
          <iconify-icon icon={isOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={clsx(
        "md:hidden absolute top-full left-0 w-full bg-[#1e1b4b]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden origin-top",
        isOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 px-6 text-center text-[11px] font-medium tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={clsx(
                "transition-colors duration-300",
                location.pathname === link.path ? "text-[#12c2e9]" : "text-white/70 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;