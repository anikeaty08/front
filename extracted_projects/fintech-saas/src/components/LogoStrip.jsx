import React from 'react';

const LogoStrip = () => {
  return (
    <div className="relative z-30 w-full overflow-hidden border-t border-slate-200/60 bg-slate-50 py-8">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling Track */}
      <div className="flex w-max animate-marquee">
        
        {/* Group 1 */}
        <div className="flex items-center gap-16 px-8 text-2xl font-normal text-slate-400 tracking-tight">
          <span className="hover:text-slate-800 transition-colors cursor-default">FreshBooks</span>
          <span className="hover:text-slate-800 transition-colors cursor-default flex items-center gap-2">
            <iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon> amazon
          </span>
          <span className="hover:text-slate-800 transition-colors cursor-default italic font-medium">SKIP</span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-medium uppercase tracking-widest text-xl">Nvidia</span>
          <span className="hover:text-slate-800 transition-colors cursor-default flex items-center gap-2">
            <iconify-icon icon="solar:suitcase-lines-linear" strokeWidth="1.5"></iconify-icon> JOBBER
          </span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-serif italic text-3xl">Ford</span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-medium text-xl">1Password</span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-medium flex items-center gap-1">
            <iconify-icon icon="solar:global-linear" strokeWidth="1.5"></iconify-icon> Google
          </span>
        </div>

        {/* Group 2 (Clone for seamless loop) */}
        <div className="flex items-center gap-16 px-8 text-2xl font-normal text-slate-400 tracking-tight">
          <span className="hover:text-slate-800 transition-colors cursor-default">FreshBooks</span>
          <span className="hover:text-slate-800 transition-colors cursor-default flex items-center gap-2">
            <iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon> amazon
          </span>
          <span className="hover:text-slate-800 transition-colors cursor-default italic font-medium">SKIP</span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-medium uppercase tracking-widest text-xl">Nvidia</span>
          <span className="hover:text-slate-800 transition-colors cursor-default flex items-center gap-2">
            <iconify-icon icon="solar:suitcase-lines-linear" strokeWidth="1.5"></iconify-icon> JOBBER
          </span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-serif italic text-3xl">Ford</span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-medium text-xl">1Password</span>
          <span className="hover:text-slate-800 transition-colors cursor-default font-medium flex items-center gap-1">
            <iconify-icon icon="solar:global-linear" strokeWidth="1.5"></iconify-icon> Google
          </span>
        </div>

      </div>
    </div>
  );
};

export default LogoStrip;