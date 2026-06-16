import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-zinc-900/5 bg-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-900/50 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:stars-minimalistic-bold-duotone" width="16" height="16"></iconify-icon>
          Lumina Beauty Tech, Inc. © {new Date().getFullYear()}
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
        </div>
        
        <div className="hidden md:block">
          {/* Spacer for symmetrical layout */}
          <span className="opacity-0">Lumina Beauty Tech</span>
        </div>
      </div>
    </footer>
  );
}