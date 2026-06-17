import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="h-12 border-b border-white/5 bg-zinc-950 flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-zinc-200 to-zinc-500 flex items-center justify-center text-zinc-950 text-xs font-bold tracking-tighter group-hover:scale-105 transition-transform">MV</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">MusicViz Studio</span>
<span className="text-zinc-600 text-xs px-2 py-0.5 rounded border border-white/5">Beta</span>
</div>

<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs">
<span className="hover:text-zinc-200 cursor-pointer transition-colors">Projects</span>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-200">Neon Nights - Visualizer</span>
</div>
</div>
<div className="flex items-center gap-3">

<div className="flex items-center gap-1.5 text-xs text-zinc-500 mr-2">
<iconify-icon icon="solar:cloud-check-linear"></iconify-icon>
<span>Saved</span>
</div>

<button className="h-7 px-3 rounded flex items-center gap-2 text-xs font-medium text-zinc-300 hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
                Share
            </button>

<button className="h-7 px-3 rounded bg-zinc-100 text-zinc-950 flex items-center gap-2 text-xs font-medium hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:export-linear" width="16"></iconify-icon>
                Export Video
            </button>

<div className="w-7 h-7 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 ml-2 border border-white/10"></div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-14 border-r border-white/5 flex flex-col items-center py-4 gap-6 bg-zinc-950 shrink-0">
<button className="p-2 rounded-lg text-zinc-100 bg-white/10 border border-white/5">
<iconify-icon icon="solar:cursor-linear" width="20"></iconify-icon>
</button>
<div className="flex flex-col gap-4 w-full px-2">
<button className="hover:text-zinc-300 hover:bg-white/5 transition-colors group text-zinc-500 rounded-lg pt-2 pr-2 pb-2 pl-2 relative">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
<span className="absolute left-10 top-1/2 -translate-y-1/2 bg-zinc-900 text-zinc-100 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Templates</span>
</button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors relative group">
<iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon>
<span className="absolute left-10 top-1/2 -translate-y-1/2 bg-zinc-900 text-zinc-100 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Audio</span>
</button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors relative group">
<iconify-icon icon="solar:text-field-linear" width="20"></iconify-icon>
<span className="absolute left-10 top-1/2 -translate-y-1/2 bg-zinc-900 text-zinc-100 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Text</span>
</button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors relative group">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="absolute left-10 top-1/2 -translate-y-1/2 bg-zinc-900 text-zinc-100 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Elements</span>
</button>
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors relative group">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<span className="absolute left-10 top-1/2 -translate-y-1/2 bg-zinc-900 text-zinc-100 text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Effects</span>
</button>
</div>
<div className="mt-auto flex flex-col gap-4">
<button className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</aside>

<aside className="w-72 border-r border-white/5 bg-zinc-950/50 flex flex-col shrink-0 overflow-y-auto">
<div className="p-4 border-b border-white/5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-100 tracking-tight">Properties</h2>
<span className="text-xs text-zinc-500 font-mono">Spectrum #02</span>
</div>

<div className="flex p-0.5 bg-zinc-900 rounded-lg mb-2">
<button className="flex-1 py-1 text-xs font-medium text-zinc-100 bg-zinc-800 rounded shadow-sm">Visual</button>
<button className="flex-1 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300">Audio</button>
<button className="flex-1 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300">Motion</button>
</div>
</div>
<div className="p-4 space-y-6">

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-zinc-400">Dimensions</label>
<iconify-icon className="text-zinc-600 cursor-pointer" icon="solar:link-minimalistic-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-900/50 rounded border border-white/5 flex items-center px-2 py-1.5 focus-within:border-zinc-700 transition-colors">
<span className="text-xs text-zinc-600 w-4">W</span>
<input className="bg-transparent border-none text-right text-xs text-zinc-200 w-full focus:outline-none font-mono" type="text" value="1080"/>
</div>
<div className="bg-zinc-900/50 rounded border border-white/5 flex items-center px-2 py-1.5 focus-within:border-zinc-700 transition-colors">
<span className="text-xs text-zinc-600 w-4">H</span>
<input className="bg-transparent border-none text-right text-xs text-zinc-200 w-full focus:outline-none font-mono" type="text" value="1080"/>
</div>
</div>
</div>
<div className="h-px bg-white/5"></div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-zinc-100">Audio Reactivity</h3>
<div className="w-8 h-4 bg-zinc-800 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-zinc-100 rounded-full shadow-sm"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Frequency Range</span>
<span className="text-zinc-500">Bass (20-250Hz)</span>
</div>

<div className="relative h-6 flex items-center">
<input className="w-full z-10 opacity-0 absolute cursor-pointer" max="100" min="0" type="range" value="35"/>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 w-[35%]"></div>
</div>
<div className="absolute left-[35%] w-3 h-3 bg-zinc-100 rounded-full border border-zinc-950 shadow pointer-events-none transform -translate-x-1/2"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Sensitivity</span>
<span className="text-zinc-500">High</span>
</div>
<div className="relative h-6 flex items-center">
<input className="w-full z-10 opacity-0 absolute cursor-pointer" max="100" min="0" type="range" value="75"/>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 w-[75%]"></div>
</div>
<div className="absolute left-[75%] w-3 h-3 bg-zinc-100 rounded-full border border-zinc-950 shadow pointer-events-none transform -translate-x-1/2"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Smoothing</span>
<span className="text-zinc-500">0.4s</span>
</div>
<div className="relative h-6 flex items-center">
<input className="w-full z-10 opacity-0 absolute cursor-pointer" max="100" min="0" type="range" value="40"/>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 w-[40%]"></div>
</div>
<div className="absolute left-[40%] w-3 h-3 bg-zinc-100 rounded-full border border-zinc-950 shadow pointer-events-none transform -translate-x-1/2"></div>
</div>
</div>
</div>
<div className="h-px bg-white/5"></div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-zinc-100">Appearance</h3>
<div className="grid grid-cols-[1fr_auto] gap-3 items-center">
<span className="text-xs text-zinc-400">Fill Type</span>
<select className="bg-zinc-900 border border-white/10 rounded text-xs text-zinc-300 py-1 pl-2 pr-6 outline-none appearance-none cursor-pointer">
<option>Gradient</option>
<option>Solid</option>
<option>Image</option>
</select>
</div>
<div className="grid grid-cols-[1fr_auto] gap-3 items-center">
<span className="text-xs text-zinc-400">Color A</span>
<div className="flex items-center gap-2">
<span className="text-xs font-mono text-zinc-500">#FF2E63</span>
<div className="w-5 h-5 rounded-full border border-white/10 bg-[#FF2E63] cursor-pointer"></div>
</div>
</div>
<div className="grid grid-cols-[1fr_auto] gap-3 items-center">
<span className="text-xs text-zinc-400">Color B</span>
<div className="flex items-center gap-2">
<span className="text-xs font-mono text-zinc-500">#08D9D6</span>
<div className="w-5 h-5 rounded-full border border-white/10 bg-[#08D9D6] cursor-pointer"></div>
</div>
</div>
</div>

<div className="pt-2">
<button className="w-full py-1.5 rounded border border-dashed border-zinc-700 text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 text-xs transition-all flex items-center justify-center gap-1">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                        Add Effect
                    </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black relative">

<div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 glass-panel px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-4 shadow-xl">
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:cursor-linear" width="16"></iconify-icon>
</button>
<button className="text-zinc-100 bg-white/10 rounded p-1">
<iconify-icon icon="solar:hand-shake-linear" width="16"></iconify-icon>
</button>
<div className="w-px h-3 bg-white/10"></div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors text-xs font-medium">Fit</button>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors text-xs font-medium">100%</button>
</div>

<div className="flex-1 flex items-center justify-center p-8 overflow-hidden relative group">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="w-[80%] aspect-video bg-zinc-900 border border-white/5 shadow-2xl relative overflow-hidden flex items-end justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/20 orb-pulse bg-gradient-to-tr from-purple-500/10 to-blue-500/10 backdrop-blur-sm z-10"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 mix-blend-overlay">
<h1 className="text-4xl font-bold text-white tracking-tighter mb-2">NEON NIGHTS</h1>
<p className="text-sm text-zinc-300 font-light tracking-widest uppercase">The Midnight</p>
</div>

<div className="flex items-end gap-1 mb-12 h-64 z-10 w-3/4 justify-center px-8 opacity-90 mix-blend-screen">

<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.1s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.3s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.2s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.5s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.1s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.4s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.2s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.6s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.3s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.1s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.5s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.2s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.4s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.1s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.3s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.5s'}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-sm bar-anim" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="h-64 bg-zinc-950 border-t border-white/5 flex flex-col shrink-0">

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-900/30">
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:skip-previous-linear" width="18"></iconify-icon>
</button>
<button className="text-white hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-circle-linear" width="28"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:skip-next-linear" width="18"></iconify-icon>
</button>
<div className="text-xs font-mono text-zinc-400 ml-2">00:12:45 <span className="text-zinc-600">/ 03:45:00</span></div>
</div>
<div className="flex items-center gap-3">
<button className="text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="solar:magnet-linear" width="16"></iconify-icon>
</button>
<div className="h-6 w-32 bg-zinc-900 rounded-full border border-white/5 flex items-center px-2 relative cursor-ew-resize">
<div className="w-8 h-2 bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 relative overflow-hidden overflow-x-auto flex">

<div className="w-48 bg-zinc-900/50 border-r border-white/5 flex flex-col pt-6 z-10 sticky left-0">

<div className="h-10 px-3 flex items-center justify-between border-b border-white/5 bg-zinc-800/20">
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:music-note-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Audio Track</span>
</div>
<div className="flex gap-1 text-zinc-600">
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:eye-linear" width="12"></iconify-icon>
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:lock-linear" width="12"></iconify-icon>
</div>
</div>

<div className="h-10 px-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:graph-up-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Spectrum</span>
</div>
<div className="flex gap-1 text-zinc-600">
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:eye-linear" width="12"></iconify-icon>
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:lock-linear" width="12"></iconify-icon>
</div>
</div>

<div className="h-10 px-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-pink-400" icon="solar:text-field-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Titles</span>
</div>
<div className="flex gap-1 text-zinc-600">
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:eye-linear" width="12"></iconify-icon>
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:lock-linear" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 relative min-w-[800px] bg-zinc-950">

<div className="h-6 border-b border-white/5 flex items-end pb-1 text-[10px] text-zinc-600 font-mono select-none">
<div className="flex-1 flex justify-between px-2">
<span>00:00</span><span>00:15</span><span>00:30</span><span>00:45</span><span>01:00</span><span>01:15</span>
</div>
</div>

<div className="absolute inset-0 top-6 pointer-events-none" style={{backgroundImage: 'linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '100px 100%'}}></div>

<div className="absolute top-0 bottom-0 w-px bg-red-500 z-20 left-[20%] pointer-events-none">
<div className="absolute -top-1 -left-1.5 w-3 h-3 bg-red-500 transform rotate-45"></div>
</div>

<div className="h-10 mt-0 border-b border-white/5 bg-purple-900/10 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center gap-[1px] opacity-40">

<div className="w-1 h-3 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-8 bg-purple-500"></div><div className="w-1 h-4 bg-purple-500"></div><div className="w-1 h-2 bg-purple-500"></div>
<div className="w-1 h-6 bg-purple-500"></div><div className="w-1 h-9 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-3 bg-purple-500"></div><div className="w-1 h-6 bg-purple-500"></div>
<div className="w-1 h-8 bg-purple-500"></div><div className="w-1 h-4 bg-purple-500"></div><div className="w-1 h-2 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-7 bg-purple-500"></div>
<div className="w-1 h-3 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-8 bg-purple-500"></div><div className="w-1 h-4 bg-purple-500"></div><div className="w-1 h-2 bg-purple-500"></div>
<div className="w-1 h-6 bg-purple-500"></div><div className="w-1 h-9 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-3 bg-purple-500"></div><div className="w-1 h-6 bg-purple-500"></div>
<div className="w-1 h-8 bg-purple-500"></div><div className="w-1 h-4 bg-purple-500"></div><div className="w-1 h-2 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-7 bg-purple-500"></div>
<div className="w-1 h-3 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-8 bg-purple-500"></div><div className="w-1 h-4 bg-purple-500"></div><div className="w-1 h-2 bg-purple-500"></div>
<div className="w-1 h-6 bg-purple-500"></div><div className="w-1 h-9 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-3 bg-purple-500"></div><div className="w-1 h-6 bg-purple-500"></div>
<div className="w-1 h-8 bg-purple-500"></div><div className="w-1 h-4 bg-purple-500"></div><div className="w-1 h-2 bg-purple-500"></div><div className="w-1 h-5 bg-purple-500"></div><div className="w-1 h-7 bg-purple-500"></div>
</div>
</div>

<div className="h-10 border-b border-white/5 relative">

<div className="absolute left-[10%] w-[40%] top-1 bottom-1 bg-blue-500/20 border border-blue-500/40 rounded flex items-center">
<div className="w-1 h-full bg-blue-500/50 cursor-ew-resize"></div>
<div className="flex-1"></div>
<div className="w-1 h-full bg-blue-500/50 cursor-ew-resize"></div>
</div>

<div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-blue-400"></div>
<div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-blue-400"></div>
</div>

<div className="h-10 border-b border-white/5 relative">
<div className="absolute left-[15%] w-[15%] top-2 bottom-2 bg-pink-500/20 border border-pink-500/40 rounded"></div>
</div>
</div>
</div>
</div>
</main>

<aside className="w-64 border-l border-white/5 bg-zinc-950 shrink-0 flex flex-col">
<div className="h-10 px-4 border-b border-white/5 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300">Layers</span>
<div className="flex gap-2 text-zinc-500">
<iconify-icon className="hover:text-zinc-300 cursor-pointer" icon="solar:folder-with-files-linear" width="14"></iconify-icon>
<iconify-icon className="hover:text-red-400 cursor-pointer" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="flex items-center p-2 rounded bg-zinc-800 border border-white/10 group cursor-pointer">
<div className="text-zinc-500 mr-2 flex items-center cursor-move">
<iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<iconify-icon className="text-blue-400" icon="solar:graph-up-linear" width="12"></iconify-icon>
<span className="text-xs font-medium text-zinc-100 truncate">Spectrum Analyzer</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-500 font-mono">Reactive</span>
</div>
</div>
<div className="flex items-center gap-1 opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400 hover:text-white" icon="solar:eye-linear" width="14"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-zinc-400" icon="solar:lock-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex items-center p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 group">
<div className="text-zinc-600 mr-2 flex items-center cursor-move opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<iconify-icon className="text-pink-400" icon="solar:text-field-linear" width="12"></iconify-icon>
<span className="text-xs text-zinc-300 truncate">Song Title</span>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:eye-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex items-center p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 group">
<div className="text-zinc-600 mr-2 flex items-center cursor-move opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<iconify-icon className="text-green-400" icon="solar:gallery-linear" width="12"></iconify-icon>
<span className="text-xs text-zinc-300 truncate">Background Image</span>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-400" icon="solar:eye-linear" width="14"></iconify-icon>
</div>
</div>

<div className="mt-2 pt-2 border-t border-white/5">
<div className="flex items-center p-1 rounded text-zinc-500 hover:text-zinc-300 cursor-pointer">
<iconify-icon className="mr-1" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
<iconify-icon className="mr-2 text-yellow-500/50" icon="solar:folder-linear" width="14"></iconify-icon>
<span className="text-xs">Particles</span>
</div>
<div className="pl-6 space-y-1 mt-1">
<div className="flex items-center p-1.5 rounded hover:bg-white/5 cursor-pointer">
<iconify-icon className="text-zinc-500 mr-2" icon="solar:stars-linear" width="12"></iconify-icon>
<span className="text-xs text-zinc-400">Dust Motes</span>
</div>
</div>
</div>
</div>
</aside>
</div>

    </>
  );
}
