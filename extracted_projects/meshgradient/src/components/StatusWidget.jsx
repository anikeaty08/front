import React from 'react'
import clsx from 'clsx'

const TOGGLE_MODES = ['normal', 'multiply', 'screen']
const PATTERNS = [
  { id: 'bayer', label: 'Bayer', icon: 'solar:widget-5-linear' },
  { id: 'grid', label: 'Grid', icon: 'solar:border-all-linear' },
  { id: 'waves', label: 'Waves', icon: 'solar:water-linear' },
  { id: 'vortex', label: 'Vortex', icon: 'solar:galaxy-linear' },
  { id: 'petals', label: 'Petals', icon: 'solar:sun-linear' },
]

export default function StatusWidget({ 
  globalBlur, setGlobalBlur, 
  blendMode, setBlendMode, 
  ditherOpacity, setDitherOpacity, 
  ditherSize, setDitherSize,
  ditherAnimated, setDitherAnimated,
  ditherPattern, setDitherPattern,
  isAnimated, setIsAnimated,
  onRandomize
}) {
  return (
    <div 
      className="p-5 rounded-2xl flex flex-col gap-6 mt-8 lg:mt-0 shrink-0"
      style={{
        background: 'linear-gradient(180deg, #1f1f22 0%, #18181b 100%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.8)'
      }}
    >
      <div className="flex flex-col gap-5">
        {/* Global Blur Track */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">Global Diffusion</span>
            <span className="text-xs text-zinc-200 font-mono transition-all duration-300">
              {globalBlur}px
            </span>
          </div>
          <div 
            className="h-3 w-full rounded-full overflow-hidden p-[2px] relative group"
            style={{
              background: '#000',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,1), 0 1px 0 rgba(255,255,255,0.06)'
            }}
          >
            <div 
              className="h-full rounded-full relative transition-all duration-150 ease-out"
              style={{
                width: `${(globalBlur / 150) * 100}%`,
                background: 'linear-gradient(180deg, #fbbf24 0%, #d97706 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.5), 0 0 8px rgba(245,158,11,0.4)'
              }}
            >
              <div className="absolute inset-0 w-full h-full opacity-30 bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIiAvPgo8cGF0aCBkPSJNMCAwTDIgMkgwVjBaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiIC8+Cjwvc3ZnPg==')" }}></div>
            </div>
            <input 
              type="range" 
              min="0" max="150" 
              value={globalBlur} 
              onChange={(e) => setGlobalBlur(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>

        {/* Dither Track */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">Dither Opacity</span>
              <button 
                onClick={() => setDitherAnimated(!ditherAnimated)}
                className={clsx(
                  "w-[18px] h-[18px] rounded flex items-center justify-center transition-colors cursor-pointer border",
                  ditherAnimated 
                    ? "bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-[inset_0_0_8px_rgba(245,158,11,0.2)]" 
                    : "bg-zinc-800 text-zinc-500 border-zinc-700 hover:text-zinc-300"
                )}
                title={ditherAnimated ? "Pause Dither Animation" : "Animate Dither"}
              >
                <iconify-icon icon="solar:video-frame-play-linear" class="text-[10px]"></iconify-icon>
              </button>
            </div>
            <span className="text-xs text-zinc-200 font-mono transition-all duration-300">
              {ditherOpacity}%
            </span>
          </div>
          <div 
            className="h-3 w-full rounded-full overflow-hidden p-[2px] relative group"
            style={{
              background: '#000',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,1), 0 1px 0 rgba(255,255,255,0.06)'
            }}
          >
            <div 
              className="h-full rounded-full relative transition-all duration-150 ease-out"
              style={{
                width: `${ditherOpacity}%`,
                background: 'linear-gradient(180deg, #a1a1aa 0%, #52525b 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.5), 0 0 8px rgba(161,161,170,0.4)'
              }}
            >
            </div>
            <input 
              type="range" 
              min="0" max="100" 
              value={ditherOpacity} 
              onChange={(e) => setDitherOpacity(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>
        
        {/* Dither Size Track */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">Dither Scale</span>
            <span className="text-xs text-zinc-200 font-mono transition-all duration-300">
              {ditherSize}px
            </span>
          </div>
          <div 
            className="h-3 w-full rounded-full overflow-hidden p-[2px] relative group"
            style={{
              background: '#000',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,1), 0 1px 0 rgba(255,255,255,0.06)'
            }}
          >
            <div 
              className="h-full rounded-full relative transition-all duration-150 ease-out"
              style={{
                width: `${(ditherSize / 20) * 100}%`,
                background: 'linear-gradient(180deg, #a1a1aa 0%, #52525b 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.5), 0 0 8px rgba(161,161,170,0.4)'
              }}
            >
            </div>
            <input 
              type="range" 
              min="1" max="20" 
              value={ditherSize} 
              onChange={(e) => setDitherSize(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>

        {/* Dither Pattern Types */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">Pattern Form</span>
          </div>
          <div 
            className="grid grid-cols-5 gap-1 p-1 rounded-lg"
            style={{
              background: '#09090b',
              boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05)'
            }}
          >
            {PATTERNS.map((p) => {
              const isActive = ditherPattern === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setDitherPattern(p.id)}
                  className={clsx(
                    "flex flex-col items-center justify-center py-1.5 gap-1 rounded-md transition-all",
                    isActive 
                      ? "bg-zinc-800 text-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
                  )}
                  title={`Select ${p.label} Pattern`}
                >
                  <iconify-icon icon={p.icon} class="text-[14px]"></iconify-icon>
                  <span className="text-[6px] font-mono tracking-widest uppercase leading-none">{p.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Controls Row */}
      <div className="flex items-stretch gap-3 h-10 mt-1">
        {/* Segmented Blend Mode Toggle */}
        <div 
          className="flex-1 grid grid-cols-3 p-1 rounded-lg gap-1"
          style={{
            background: '#09090b',
            boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05)'
          }}
        >
          {TOGGLE_MODES.map((mode) => {
            const isActive = blendMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setBlendMode(mode)}
                className={clsx(
                  "py-1.5 text-[10px] font-mono tracking-widest uppercase rounded-md relative transition-colors",
                  isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                )}
                style={isActive ? {
                  background: 'linear-gradient(180deg, #3f3f46 0%, #27272a 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.12), 0 2px 4px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,1)'
                } : {}}
              >
                {mode.substring(0, 3)}
                {isActive && (
                  <span className="absolute top-1 right-1.5 w-1 h-1 rounded-full bg-amber-400 opacity-80 shadow-[0_0_4px_rgba(251,191,36,0.8)]"></span>
                )}
              </button>
            )
          })}
        </div>

        {/* Randomize Colors & Dither */}
        <button
          onClick={onRandomize}
          className="w-12 flex flex-col items-center justify-center gap-0.5 rounded-lg border border-transparent transition-all cursor-pointer bg-[#09090b] text-zinc-500 hover:text-amber-400 active:scale-95 hover:bg-zinc-800/50"
          style={{ boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05)' }}
          title="Randomize Colors"
        >
          <iconify-icon icon="solar:shuffle-linear" class="text-base"></iconify-icon>
          <span className="text-[7px] font-mono tracking-widest uppercase leading-none">Rndm</span>
        </button>

        {/* Motion Toggle */}
        <button
          onClick={() => setIsAnimated(!isAnimated)}
          className={clsx(
            "w-12 flex flex-col items-center justify-center gap-0.5 rounded-lg border transition-all cursor-pointer active:scale-95",
            isAnimated 
              ? "bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-[inset_0_0_12px_rgba(245,158,11,0.2)]" 
              : "bg-[#09090b] text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-zinc-800/50"
          )}
          style={!isAnimated ? { boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05)' } : {}}
          title={isAnimated ? "Pause Dynamics" : "Start Dynamics"}
        >
          <iconify-icon icon={isAnimated ? "solar:pause-linear" : "solar:play-linear"} class="text-base"></iconify-icon>
          <span className="text-[7px] font-mono tracking-widest uppercase leading-none">{isAnimated ? 'Run' : 'Halt'}</span>
        </button>
      </div>
    </div>
  )
}