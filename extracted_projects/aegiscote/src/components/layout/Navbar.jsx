import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 flex justify-between items-center p-6 backdrop-blur-md bg-[#030303]/50 gsap-fade relative z-20">
      <div className="flex gap-8 text-xs font-medium tracking-widest uppercase items-center">
        <Link to="/" className="hover:text-white transition-colors flex items-center gap-2">
          <iconify-icon icon="solar:server-square-linear" class="text-lg"></iconify-icon> Nodes
        </Link>
        <Link to="/clusters" className="hover:text-white transition-colors hidden sm:block">Clusters</Link>
      </div>
      
      <div className="flex flex-col items-center">
        <iconify-icon icon="solar:shield-network-linear" class="text-3xl text-cyan-400"></iconify-icon>
        <span className="text-xs font-medium tracking-widest uppercase mt-1 text-white">Aegis Core</span>
      </div>
      
      <div className="flex gap-8 text-xs font-medium tracking-widest uppercase items-center">
        <Link to="/telemetry" className="hover:text-white transition-colors hidden sm:block">Telemetry</Link>
        <Link to="/logs" className="hover:text-white transition-colors flex items-center gap-2">
          Logs <iconify-icon icon="solar:document-text-linear" class="text-lg"></iconify-icon>
        </Link>
      </div>
    </nav>
  );
}