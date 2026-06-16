import React from 'react'
import clsx from 'clsx'

const Slider = ({ label, value, min, max, step = "1", onChange }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
      <span>{label}</span>
      <span className="text-zinc-300">{Number(value).toFixed(1)}</span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      step={step}
      value={value} 
      onChange={onChange}
      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
    />
  </div>
)

export default function SystemModules({ nodes, activeNodeId, setActiveNodeId, updateNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Mesh Nodes</h2>
        <iconify-icon icon="solar:sort-linear" stroke-width="1.5" class="text-zinc-600 text-sm"></iconify-icon>
      </div>
      
      <div className="flex flex-col gap-3">
        {nodes.map((node) => {
          const isActive = activeNodeId === node.id;
          
          return (
            <div key={node.id} className="flex flex-col gap-2">
              <button
                onClick={() => setActiveNodeId(node.id)}
                className={clsx(
                  "w-full p-4 rounded-xl flex items-center justify-between group cursor-pointer transition-all",
                  isActive ? "brightness-125" : "hover:brightness-110"
                )}
                style={{
                  background: 'linear-gradient(180deg, #27272a 0%, #18181b 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06), 0 2px 6px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.8)'
                }}
              >
                <div className={clsx(
                  "flex items-center gap-3 transition-colors",
                  isActive ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-200"
                )}>
                  <div 
                    className="w-4 h-4 rounded-full shadow-inner" 
                    style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}40` }}
                  ></div>
                  <span className="text-sm font-light">{node.label}</span>
                </div>
                <span className={clsx(
                  "font-mono text-xs transition-colors",
                  isActive ? "text-amber-400" : "text-amber-500/80 group-hover:text-amber-400/90"
                )}>
                  {node.num}
                </span>
              </button>
              
              {isActive && (
                <div 
                  className="p-5 rounded-xl space-y-5 animate-in slide-in-from-top-2 fade-in duration-200"
                  style={{ 
                    background: '#121214', 
                    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.03)' 
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase font-mono tracking-widest">
                    <span>Color Source</span>
                    <input 
                      type="color" 
                      value={node.color} 
                      onChange={e => updateNode(node.id, 'color', e.target.value)} 
                      className="w-6 h-6 rounded bg-transparent cursor-pointer border-0 p-0" 
                    />
                  </div>
                  
                  <Slider 
                    label="Position X" 
                    value={node.x} min="0" max="100" step="0.1"
                    onChange={e => updateNode(node.id, 'x', parseFloat(e.target.value))} 
                  />
                  <Slider 
                    label="Position Y" 
                    value={node.y} min="0" max="100" step="0.1"
                    onChange={e => updateNode(node.id, 'y', parseFloat(e.target.value))} 
                  />
                  <Slider 
                    label="Spread Radius" 
                    value={node.size} min="10" max="150" 
                    onChange={e => updateNode(node.id, 'size', parseInt(e.target.value))} 
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}