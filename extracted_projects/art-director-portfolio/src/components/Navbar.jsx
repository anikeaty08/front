import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon 
            icon="solar:box-linear" 
            width="28" 
            height="28" 
            class="text-[#1A1A1A] group-hover:scale-110 transition-transform"
          ></iconify-icon>
          <span className="font-semibold tracking-tighter text-xl text-[#1A1A1A]">
            JULIAN.V
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Work', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Journal', path: '/journal' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path 
                  ? 'text-[#1A1A1A]' 
                  : 'text-[#737373] hover:text-[#1A1A1A]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a 
          href="mailto:hello@julianv.com" 
          className="flex items-center gap-2 text-sm font-medium bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
        >
          <span>Let's Talk</span>
          <iconify-icon icon="solar:arrow-right-up-bold-duotone" width="18"></iconify-icon>
        </a>

      </div>
    </header>
  );
}