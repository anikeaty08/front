import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#030509] pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col">
        
        {/* Main Footer Content - Multi-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20">
          
          {/* Brand Column (Reduced emphasis) */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start md:pr-8">
            <Link to="/" className="flex items-center gap-2 group mb-5 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <iconify-icon 
                icon="solar:planet-3-linear" 
                class="text-xl text-white group-hover:rotate-45 transition-transform duration-500"
              ></iconify-icon>
              <span className="font-playfair text-xs tracking-[0.2em] uppercase text-white font-medium">
                Nexus
              </span>
            </Link>
            <p className="text-[11px] font-inter font-light text-white/30 leading-relaxed max-w-[240px]">
              The neural framework for unbound computational streams and sub-millisecond global state synchronization.
            </p>
          </div>

          {/* Links Column 1: Platform */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] font-inter font-medium tracking-[0.2em] text-white/50 uppercase mb-6">Platform</h4>
            <ul className="flex flex-col gap-4">
              {['Neural Routing', 'Global Sync', 'Quantum Layer', 'Pricing', 'Changelog'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-xs font-inter font-light text-white/30 hover:text-[#60A5FA] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Resources */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[10px] font-inter font-medium tracking-[0.2em] text-white/50 uppercase mb-6">Resources</h4>
            <ul className="flex flex-col gap-4">
              {['Documentation', 'API Reference', 'System Status', 'Mesh Visualizer', 'Case Studies'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-xs font-inter font-light text-white/30 hover:text-[#60A5FA] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[10px] font-inter font-medium tracking-[0.2em] text-white/50 uppercase mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Nexus', 'Engineering Blog', 'Careers', 'Legal & Privacy', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-xs font-inter font-light text-white/30 hover:text-[#60A5FA] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright Line & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-[10px] font-inter font-light tracking-widest text-white/20 uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Nexus Systems. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5 text-white/20">
            <Link to="#" className="hover:text-white transition-colors duration-300" aria-label="Twitter / X">
              <iconify-icon icon="simple-icons:x" class="text-[14px]"></iconify-icon>
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-300" aria-label="GitHub">
              <iconify-icon icon="simple-icons:github" class="text-[14px]"></iconify-icon>
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-300" aria-label="Discord">
              <iconify-icon icon="simple-icons:discord" class="text-[14px]"></iconify-icon>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;