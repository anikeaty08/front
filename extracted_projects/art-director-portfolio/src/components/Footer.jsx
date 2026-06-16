import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 rounded-t-[2.5rem] mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6 opacity-80">
              <iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
              <span className="text-sm tracking-widest uppercase">Available for work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Let's create something extraordinary together.
            </h2>
            <a 
              href="mailto:hello@julianv.com" 
              className="inline-flex items-center gap-3 text-xl border-b border-white/30 pb-1 hover:border-white transition-colors group"
            >
              hello@julianv.com
              <iconify-icon 
                icon="solar:arrow-right-up-bold-duotone" 
                width="24"
                class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              ></iconify-icon>
            </a>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-white/50 text-sm font-medium mb-2">Navigation</h4>
              <Link to="/" className="hover:text-gray-300 transition-colors">Work</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link to="/journal" className="hover:text-gray-300 transition-colors">Journal</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white/50 text-sm font-medium mb-2">Socials</h4>
              <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Julian Vance. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Designed in Singapore</span>
            <iconify-icon icon="solar:map-point-bold-duotone" width="18"></iconify-icon>
          </div>
        </div>

      </div>
    </footer>
  );
}