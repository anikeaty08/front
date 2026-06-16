import React, { useState } from 'react'
import clsx from 'clsx'

export default function Console({ cssString }) {
  const [isEngaged, setIsEngaged] = useState(false)

  const handleEngage = () => {
    navigator.clipboard.writeText(cssString)
    setIsEngaged(true)
    setTimeout(() => setIsEngaged(false), 2000)
  }

  return (
    <div 
      className="px-6 md:px-10 lg:px-12 py-8 lg:py-10 bg-zinc-900/60 backdrop-blur-sm flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center justify-between shrink-0 relative z-20"
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 -8px 24px rgba(0,0,0,0.3)'
      }}
    >
      <div className="flex-1 w-full max-w-4xl z-10 overflow-hidden">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Output_CSS</span>
        </div>
        <pre 
          className="p-4 rounded-xl bg-[#09090b] text-zinc-300 font-mono text-[11px] md:text-xs overflow-x-auto border border-white/5 custom-scrollbar"
          style={{ boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.6)' }}
        >
          <code>{cssString}</code>
        </pre>
      </div>
      
      <div className="w-full md:w-auto md:max-w-xs shrink-0 flex flex-col gap-6 z-10">
        <p className="text-xs text-zinc-400 leading-relaxed font-light hidden md:block">
          Extract computed mesh parameters for external deployment via standardized CSS format protocols.
        </p>
        
        {/* Premium Tactile CTA Button */}
        <button 
          onClick={handleEngage}
          className={clsx(
            "w-full min-w-[200px] flex items-center justify-between px-6 py-4 rounded-xl group transition-all cursor-pointer",
            isEngaged ? "scale-[0.98] brightness-90" : "hover:brightness-110 active:scale-[0.98] active:brightness-90"
          )}
          style={{
            background: 'linear-gradient(180deg, #3f3f46 0%, #27272a 100%)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.8)'
          }}
        >
          <span className={clsx(
            "text-xs font-mono uppercase tracking-widest transition-colors",
            isEngaged ? "text-amber-400" : "text-zinc-200 group-hover:text-white"
          )}>
            {isEngaged ? 'Parameters Copied' : 'Copy Parameters'}
          </span>
          <iconify-icon 
            icon={isEngaged ? "solar:check-circle-linear" : "solar:copy-linear"} 
            stroke-width="1.5" 
            class={clsx(
              "text-xl transition-all",
              isEngaged ? "text-amber-400 scale-110" : "text-amber-500 group-hover:text-amber-400"
            )}
          ></iconify-icon>
        </button>
      </div>
    </div>
  )
}