import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#09090b', // zinc-950
surface: '#18181b',    // zinc-900
border: '#27272a',     // zinc-800
primary: '#fafafa',    // zinc-50
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 border-b border-border bg-background flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 text-zinc-100">
<div className="w-6 h-6 bg-zinc-100 rounded-md flex items-center justify-center text-background">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="2" data-width="14"></span>
</div>
<h1 className="font-semibold tracking-tighter text-sm">NOVA CREATOR</h1>
</div>

<div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Projects</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Survival RPG</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-zinc-200 bg-surface px-2 py-1 rounded border border-border flex items-center gap-1.5">
<span className="iconify text-indigo-400" data-icon="lucide:sword" data-width="12"></span>
                    obsidian_sword.json
                </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 bg-surface border border-border rounded-md p-1">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:undo-2" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:redo-2" data-width="16"></span>
</button>
</div>
<button className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 transition-colors">
                Configuration
            </button>
<button className="flex items-center gap-2 bg-zinc-100 text-black text-xs font-medium px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:package" data-width="14"></span>
                Build .jar
            </button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-border bg-background flex flex-col shrink-0">

<div className="p-3 border-b border-border">
<div className="relative">
<span className="iconify absolute left-2.5 top-2 text-zinc-500" data-icon="lucide:search" data-width="14"></span>
<input className="w-full bg-surface border border-border rounded text-xs py-1.5 pl-8 pr-3 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Search assets..." type="text"/>
</div>
</div>

<div className="flex border-b border-border">
<button className="flex-1 py-2 text-xs font-medium text-zinc-200 border-b border-zinc-200 bg-surface/50">
                    Structure
                </button>
<button className="flex-1 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
                    Assets
                </button>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-0.5">

<div className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-surface cursor-pointer text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:chevron-down" data-width="12"></span>
<span className="iconify text-indigo-400" data-icon="lucide:box" data-width="14"></span>
<span className="text-xs font-medium">obsidian_sword</span>
</div>

<div className="pl-6 space-y-0.5 border-l border-border ml-3.5 my-1">
<div className="group flex items-center justify-between px-2 py-1.5 rounded bg-zinc-800/50 border border-zinc-700/50 cursor-pointer text-white">
<div className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:cuboid" data-width="14"></span>
<span className="text-xs">blade_core</span>
</div>
<span className="iconify text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100" data-icon="lucide:eye" data-width="12"></span>
</div>
<div className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-surface cursor-pointer text-zinc-400 hover:text-zinc-300">
<div className="flex items-center gap-2">
<span className="iconify text-orange-400/70" data-icon="lucide:cuboid" data-width="14"></span>
<span className="text-xs">handle_guard</span>
</div>
<span className="iconify text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100" data-icon="lucide:eye" data-width="12"></span>
</div>
<div className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-surface cursor-pointer text-zinc-400 hover:text-zinc-300">
<div className="flex items-center gap-2">
<span className="iconify text-blue-400/70" data-icon="lucide:sparkle" data-width="14"></span>
<span className="text-xs">particle_emitter</span>
</div>
<span className="iconify text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100" data-icon="lucide:eye" data-width="12"></span>
</div>
</div>
</div>

<div className="p-3 border-t border-border">
<button className="w-full flex items-center justify-center gap-2 bg-surface hover:bg-zinc-800 border border-border text-zinc-300 text-xs py-1.5 rounded transition-all active:scale-[0.98]">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    Add Component
                </button>
</div>
</aside>

<section className="flex-1 flex flex-col relative bg-background bg-grid-pattern overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-md border border-border rounded-lg shadow-lg p-1 flex items-center gap-1 z-10">
<button className="p-1.5 hover:bg-zinc-700 rounded text-white bg-zinc-700 shadow-sm">
<span className="iconify" data-icon="lucide:mouse-pointer-2" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-zinc-700 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:move" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-zinc-700 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:rotate-3d" data-width="16"></span>
</button>
<button className="p-1.5 hover:bg-zinc-700 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:scaling" data-width="16"></span>
</button>
<div className="w-px h-4 bg-zinc-700 mx-1"></div>
<button className="p-1.5 hover:bg-zinc-700 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:grid-3x3" data-width="16"></span>
</button>
</div>

<div className="flex-1 relative flex items-center justify-center">

<div className="relative w-64 h-64 group cursor-move">

<div className="absolute inset-0 border border-dashed border-zinc-700/50 rounded pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-48 bg-zinc-800 border border-zinc-600 flex flex-col items-center shadow-2xl transition-transform duration-200 hover:scale-[1.02]">

<div className="flex-1 w-full bg-gradient-to-b from-purple-900/40 to-zinc-900 border-b border-zinc-700 relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 skew-y-12"></div>
</div>

<div className="w-16 h-3 bg-zinc-600 rounded-sm"></div>

<div className="w-3 h-12 bg-zinc-700 mt-[-1px] border border-zinc-600 relative">
<div className="w-full h-1 bg-black/20 absolute top-2"></div>
<div className="w-full h-1 bg-black/20 absolute top-5"></div>
<div className="w-full h-1 bg-black/20 absolute top-8"></div>
</div>

<div className="absolute -top-2 -right-2 w-3 h-3 bg-indigo-500 rounded-full border border-white shadow opacity-100"></div>
<div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white border border-zinc-300 rounded-full shadow opacity-100"></div>
</div>

<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-2 py-0.5 text-[10px] rounded backdrop-blur">
                        display: item/handheld
                    </div>
</div>
</div>

<div className="h-8 border-t border-border bg-background px-4 flex items-center justify-between text-[10px] text-zinc-500">
<div className="flex gap-4">
<span>X: <span className="text-zinc-300">12.5</span></span>
<span>Y: <span className="text-zinc-300">4.0</span></span>
<span>Z: <span className="text-zinc-300">-0.5</span></span>
</div>
<div className="flex gap-2 items-center">
<span className="w-2 h-2 rounded-full bg-green-500/50"></span>
<span>Auto-saved</span>
</div>
</div>
</section>

<aside className="w-72 border-l border-border bg-background flex flex-col shrink-0 overflow-y-auto">
<div className="p-4 border-b border-border bg-surface/30">
<h2 className="text-xs font-medium text-zinc-100 mb-1">Properties</h2>
<p className="text-[10px] text-zinc-500">Configure selected component</p>
</div>

<div className="p-4 space-y-5">

<div className="space-y-1.5">
<label className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Identifier</label>
<div className="flex">
<span className="bg-surface border border-r-0 border-border text-zinc-500 text-xs px-2 py-1.5 rounded-l flex items-center">
                            nova:
                        </span>
<input className="w-full bg-transparent border border-border rounded-r text-xs py-1.5 px-2 text-white focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:outline-none transition-colors" type="text" value="blade_core"/>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Transform</label>
<button className="text-[10px] text-indigo-400 hover:text-indigo-300">Reset</button>
</div>
<div className="grid grid-cols-3 gap-2">

<div className="space-y-1 group">
<span className="text-[10px] text-zinc-600 group-hover:text-red-400 transition-colors cursor-ew-resize">Pos X</span>
<input className="w-full bg-surface border border-border rounded text-xs py-1 px-2 text-zinc-300 focus:border-zinc-500 focus:outline-none" type="text" value="0.0"/>
</div>

<div className="space-y-1 group">
<span className="text-[10px] text-zinc-600 group-hover:text-green-400 transition-colors cursor-ns-resize">Pos Y</span>
<input className="w-full bg-surface border border-border rounded text-xs py-1 px-2 text-zinc-300 focus:border-zinc-500 focus:outline-none" type="text" value="8.5"/>
</div>

<div className="space-y-1 group">
<span className="text-[10px] text-zinc-600 group-hover:text-blue-400 transition-colors cursor-ew-resize">Pos Z</span>
<input className="w-full bg-surface border border-border rounded text-xs py-1 px-2 text-zinc-300 focus:border-zinc-500 focus:outline-none" type="text" value="0.0"/>
</div>
</div>

<div className="space-y-2 pt-1">
<div className="flex justify-between text-[10px] text-zinc-500">
<span>Scale</span>
<span className="text-zinc-300">1.2x</span>
</div>
<div className="relative h-1 bg-surface rounded-full">
<div className="absolute h-full bg-zinc-600 rounded-full w-[40%]"></div>
<div className="absolute h-3 w-3 bg-zinc-200 rounded-full top-1/2 -translate-y-1/2 left-[40%] shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
<div className="h-px bg-border"></div>

<div className="space-y-3">
<label className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Material</label>

<div className="relative">
<button className="w-full bg-surface border border-border rounded text-xs py-1.5 px-3 text-left flex items-center justify-between text-zinc-300 hover:border-zinc-600 transition-colors">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
<span>Obsidian Shard</span>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:chevrons-up-down" data-width="12"></span>
</button>
</div>

<div className="flex items-center justify-between bg-surface border border-border rounded px-3 py-2">
<span className="text-xs text-zinc-400">Model Data</span>
<input className="w-16 bg-background border border-border rounded text-xs py-0.5 px-1 text-right text-zinc-300 focus:outline-none focus:border-zinc-500" type="number" value="1042"/>
</div>
</div>
<div className="h-px bg-border"></div>

<div className="space-y-3">
<label className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Behaviors</label>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex flex-col">
<span className="text-xs text-zinc-300">Cast Shadow</span>
<span className="text-[10px] text-zinc-600">Render shadow on ground</span>
</div>

<div className="w-8 h-4 bg-zinc-700 rounded-full relative transition-colors group-hover:bg-zinc-600">
<div className="absolute top-0.5 left-0.5 w-3 h-3 bg-zinc-400 rounded-full shadow-sm transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex flex-col">
<span className="text-xs text-zinc-300">Collidable</span>
<span className="text-[10px] text-zinc-600">Calculate player hitbox</span>
</div>

<div className="w-8 h-4 bg-indigo-500/20 rounded-full relative border border-indigo-500/50">
<div className="absolute top-0.5 right-0.5 w-3 h-3 bg-indigo-400 rounded-full shadow-sm shadow-indigo-500/50 transition-all"></div>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-border">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-zinc-500 font-mono">config.yml snippet</span>
<span className="iconify text-zinc-600 hover:text-zinc-400 cursor-pointer" data-icon="lucide:copy" data-width="12"></span>
</div>
<div className="bg-black/50 border border-border rounded p-2 overflow-hidden">
<code className="text-[10px] font-mono text-zinc-400 block whitespace-pre leading-relaxed">
<span className="text-indigo-400">item:</span>
<span className="text-orange-300">material:</span> OBSIDIAN
  <span className="text-orange-300">model_data:</span> 1042
  <span className="text-orange-300">display_name:</span> <span className="text-green-400">"Void Blade"</span>
</code>
</div>
</div>
</div>
</aside>
</main>

    </>
  );
}
