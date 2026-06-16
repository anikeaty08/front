import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full p-6 flex flex-col md:flex-row justify-between items-center bg-[#030303] border-t border-white/10 mt-auto z-10 relative">
      <div className="flex gap-6 text-[0.65rem] font-medium tracking-widest uppercase text-neutral-500 mb-4 md:mb-0">
        <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
        <Link to="/api" className="hover:text-white transition-colors">API</Link>
      </div>
      
      <div className="flex flex-col items-center bg-cyan-900/20 px-6 py-2 border border-cyan-900/50">
        <iconify-icon icon="solar:shield-network-linear" class="text-xl text-cyan-500 mb-1"></iconify-icon>
        <span className="text-[0.6rem] tracking-widest text-cyan-400 uppercase">Aegis Core System</span>
      </div>

      <div className="flex gap-6 text-[0.65rem] font-medium tracking-widest uppercase text-neutral-500 mt-4 md:mt-0">
        <Link to="/status" className="hover:text-white transition-colors">Status</Link>
        <Link to="/support" className="hover:text-white transition-colors">Support</Link>
      </div>
    </footer>
  );
}