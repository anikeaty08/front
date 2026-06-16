import React from 'react';

export default function GridOverlay() {
  return (
    <>
      {/* Vertical Grid Lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/5 pointer-events-none hidden md:block z-0" />
      <div className="absolute inset-y-0 left-2/4 w-px bg-white/5 pointer-events-none hidden md:block z-0" />
      <div className="absolute inset-y-0 left-3/4 w-px bg-white/5 pointer-events-none hidden md:block z-0" />

      {/* Corner Squares */}
      <div className="absolute top-0 -left-1 w-2 h-2 bg-[#030303] border border-white/20 z-20" />
      <div className="absolute top-0 -right-1 w-2 h-2 bg-[#030303] border border-white/20 z-20" />
      <div className="absolute bottom-0 -left-1 w-2 h-2 bg-[#030303] border border-white/20 z-20" />
      <div className="absolute bottom-0 -right-1 w-2 h-2 bg-[#030303] border border-white/20 z-20" />
    </>
  );
}