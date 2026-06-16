import React from 'react';
import { useLocation } from 'react-router-dom';

// A generic placeholder for routes other than Home to demonstrate routing
export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="w-16 h-16 border border-neutral-800 flex items-center justify-center mb-8 rotate-45 bg-neutral-950/50">
        <iconify-icon icon="solar:cpu-bolt-linear" className="text-neutral-500 text-2xl -rotate-45"></iconify-icon>
      </div>
      <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>{pageName} Module</h1>
      <p className="text-sm text-neutral-500 uppercase tracking-widest max-w-md">
        This sector is currently undergoing procedural generation. Check back next cycle.
      </p>
    </div>
  );
}