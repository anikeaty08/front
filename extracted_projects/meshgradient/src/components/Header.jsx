import React from 'react'

export default function Header() {
  return (
    <header 
      className="h-16 flex items-center justify-between px-6 md:px-8 relative shrink-0 z-20 bg-zinc-900/50 backdrop-blur-md"
      style={{
        boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.02)'
      }}
    >
      <div className="flex items-center gap-3 text-zinc-200 font-light tracking-tight text-sm">
        <iconify-icon icon="solar:pallete-2-linear" stroke-width="1.5" class="text-xl"></iconify-icon>
        <span>CHROMATIC_CORE</span>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase hidden md:inline-block">
          Engine Active
        </span>
        <div 
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: '#09090b',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05)'
          }}
        >
          <span 
            className="w-2 h-2 rounded-full relative"
            style={{
              background: '#f59e0b',
              boxShadow: '0 0 8px rgba(245,158,11,0.6)'
            }}
          >
            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-40"></span>
          </span>
          <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase mt-[1px]">
            Operational
          </span>
        </div>
      </div>
    </header>
  )
}