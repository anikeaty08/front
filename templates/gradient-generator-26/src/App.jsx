import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex-1 relative flex items-center justify-center p-6 md:p-12 overflow-hidden bg-zinc-950" style={{backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<div className="w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] rounded-2xl border border-zinc-800/60 shadow-2xl relative overflow-hidden group">

<div className="absolute inset-0 z-0 transition-all duration-500" style={{background: 'linear-gradient(145deg, #FF453A 0%, #BF5AF2 45%, #0A84FF 100%)'}}></div>

<div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-overlay">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 200">
<filter id="noiseFilter">
<feturbulence basefrequency="0.85" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply opacity-60" style={{background: 'radial-gradient(circle at center, transparent 20%, #000 120%)'}}></div>

<div className="relative z-30 w-full h-full flex flex-col items-center justify-center space-y-6 select-none p-8">
<div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-center space-y-2">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white drop-shadow-sm">Textured Mesh</h1>
<p className="text-white/80 text-sm md:text-base font-medium tracking-tight">Modify parameters to generate unique backgrounds.</p>
</div>
</div>

<div className="absolute bottom-4 right-4 z-40 flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button aria-label="Zoom Out" className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:magnifer-zoom-out-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="text-xs font-mono text-zinc-500 px-1">100%</span>
<button aria-label="Zoom In" className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:magnifer-zoom-in-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-700 mx-1"></div>
<button aria-label="Fullscreen" className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</main>

<aside className="w-full md:w-[340px] h-[50vh] md:h-screen bg-zinc-950 border-t md:border-t-0 md:border-l border-zinc-800/60 flex flex-col shadow-2xl relative z-20">

<header className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/60 bg-zinc-950/95 backdrop-blur z-10 sticky top-0">
<div className="text-base font-semibold tracking-tighter text-zinc-100 flex items-center gap-1">
                GRDT<span className="text-zinc-600">.</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Randomize" className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-zinc-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="bg-zinc-100 text-zinc-950 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-white transition-colors flex items-center gap-1.5 shadow-sm">
<iconify-icon icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                    Export
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-5 py-6 space-y-8 custom-scrollbar">

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-100">Gradient Configuration</h2>
</div>

<div className="flex p-0.5 bg-zinc-900 rounded-lg border border-zinc-800/50">
<button className="flex-1 text-xs py-1.5 text-zinc-100 bg-zinc-800 shadow-sm rounded-md font-medium border border-zinc-700/50">Linear</button>
<button className="flex-1 text-xs py-1.5 text-zinc-500 hover:text-zinc-300 font-medium transition-colors">Radial</button>
<button className="flex-1 text-xs py-1.5 text-zinc-500 hover:text-zinc-300 font-medium transition-colors">Conic</button>
</div>

<div className="space-y-2.5 pt-1">
<div className="flex items-center justify-between">
<label className="text-xs font-normal text-zinc-400">Angle</label>
<span className="text-xs font-mono text-zinc-300">145°</span>
</div>
<div className="flex items-center gap-3">
<input className="w-full appearance-none bg-zinc-800 h-1 rounded-full outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-zinc-200 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:cursor-grab active:[&amp;::-webkit-slider-thumb]:cursor-grabbing cursor-pointer [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:w-3 [&amp;::-moz-range-thumb]:h-3 [&amp;::-moz-range-thumb]:bg-zinc-200 [&amp;::-moz-range-thumb]:border-0 [&amp;::-moz-range-thumb]:rounded-full" max="360" min="0" type="range" value="145"/>
<div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 flex-shrink-0">
<div className="w-px h-3 bg-zinc-500 transform rotate-[145deg] origin-bottom -translate-y-1.5"></div>
</div>
</div>
</div>

<div className="space-y-2 pt-2">
<div className="flex items-center justify-between mb-1">
<label className="text-xs font-normal text-zinc-400">Color Stops</label>
</div>

<div className="flex items-center gap-2 group">
<iconify-icon className="text-zinc-600 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-sm" icon="solar:reorder-linear"></iconify-icon>
<div className="w-5 h-5 rounded-md border border-zinc-700/50 shadow-inner flex-shrink-0 cursor-pointer" style={{backgroundColor: '#FF453A'}}></div>
<input className="flex-1 w-0 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-xs text-zinc-300 font-mono uppercase focus:border-zinc-600 outline-none transition-colors" type="text" value="FF453A"/>
<input className="w-12 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-xs text-zinc-300 font-mono text-center focus:border-zinc-600 outline-none transition-colors" type="text" value="0%"/>
<button className="text-zinc-600 hover:text-red-400 p-1 rounded transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 group">
<iconify-icon className="text-zinc-600 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-sm" icon="solar:reorder-linear"></iconify-icon>
<div className="w-5 h-5 rounded-md border border-zinc-700/50 shadow-inner flex-shrink-0 cursor-pointer" style={{backgroundColor: '#BF5AF2'}}></div>
<input className="flex-1 w-0 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-xs text-zinc-300 font-mono uppercase focus:border-zinc-600 outline-none transition-colors" type="text" value="BF5AF2"/>
<input className="w-12 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-xs text-zinc-300 font-mono text-center focus:border-zinc-600 outline-none transition-colors" type="text" value="45%"/>
<button className="text-zinc-600 hover:text-red-400 p-1 rounded transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 group">
<iconify-icon className="text-zinc-600 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-sm" icon="solar:reorder-linear"></iconify-icon>
<div className="w-5 h-5 rounded-md border border-zinc-700/50 shadow-inner flex-shrink-0 cursor-pointer" style={{backgroundColor: '#0A84FF'}}></div>
<input className="flex-1 w-0 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-xs text-zinc-300 font-mono uppercase focus:border-zinc-600 outline-none transition-colors" type="text" value="0A84FF"/>
<input className="w-12 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-xs text-zinc-300 font-mono text-center focus:border-zinc-600 outline-none transition-colors" type="text" value="100%"/>
<button className="text-zinc-600 hover:text-red-400 p-1 rounded transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-sm" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<button className="w-full mt-2 py-1.5 border border-dashed border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon>
                        Add Color Stop
                    </button>
</div>
</section>
<hr className="border-zinc-800/60"/>

<section className="space-y-5">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-100">Texture &amp; Noise</h2>

<button aria-checked="true" className="w-7 h-4 bg-zinc-700 rounded-full relative transition-colors focus:outline-none flex-shrink-0">
<span className="absolute left-[2px] top-[2px] w-3 h-3 bg-white rounded-full transition-transform translate-x-[12px] shadow-sm"></span>
</button>
</div>

<div className="space-y-1.5">
<label className="text-xs font-normal text-zinc-400">Algorithm</label>
<button className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-md px-2.5 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800/80 transition-colors outline-none focus:border-zinc-600">
<span>Fractal Noise</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="space-y-4">

<div className="space-y-2.5">
<div className="flex items-center justify-between">
<label className="text-xs font-normal text-zinc-400">Intensity</label>
<span className="text-xs font-mono text-zinc-300">40%</span>
</div>
<input className="w-full appearance-none bg-zinc-800 h-1 rounded-full outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-zinc-200 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:cursor-grab active:[&amp;::-webkit-slider-thumb]:cursor-grabbing cursor-pointer [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:w-3 [&amp;::-moz-range-thumb]:h-3 [&amp;::-moz-range-thumb]:bg-zinc-200 [&amp;::-moz-range-thumb]:border-0 [&amp;::-moz-range-thumb]:rounded-full" max="100" min="0" type="range" value="40"/>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between">
<label className="text-xs font-normal text-zinc-400">Scale</label>
<span className="text-xs font-mono text-zinc-300">85%</span>
</div>
<input className="w-full appearance-none bg-zinc-800 h-1 rounded-full outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-zinc-200 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:cursor-grab active:[&amp;::-webkit-slider-thumb]:cursor-grabbing cursor-pointer [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:w-3 [&amp;::-moz-range-thumb]:h-3 [&amp;::-moz-range-thumb]:bg-zinc-200 [&amp;::-moz-range-thumb]:border-0 [&amp;::-moz-range-thumb]:rounded-full" max="100" min="1" type="range" value="85"/>
</div>
</div>

<div className="space-y-1.5 pt-1">
<label className="text-xs font-normal text-zinc-400">Blend Mode</label>
<button className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-md px-2.5 py-1.5 text-xs text-zinc-200 hover:bg-zinc-800/80 transition-colors outline-none focus:border-zinc-600">
<span>Overlay</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</section>
<hr className="border-zinc-800/60"/>

<section className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-zinc-100">Vignette</label>
<button aria-checked="true" className="w-7 h-4 bg-zinc-700 rounded-full relative transition-colors focus:outline-none flex-shrink-0">
<span className="absolute left-[2px] top-[2px] w-3 h-3 bg-white rounded-full transition-transform translate-x-[12px] shadow-sm"></span>
</button>
</div>
<div className="space-y-2.5">
<div className="flex items-center justify-between">
<label className="text-xs font-normal text-zinc-400">Opacity</label>
<span className="text-xs font-mono text-zinc-300">60%</span>
</div>
<input className="w-full appearance-none bg-zinc-800 h-1 rounded-full outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-zinc-200 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:cursor-grab active:[&amp;::-webkit-slider-thumb]:cursor-grabbing cursor-pointer [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:w-3 [&amp;::-moz-range-thumb]:h-3 [&amp;::-moz-range-thumb]:bg-zinc-200 [&amp;::-moz-range-thumb]:border-0 [&amp;::-moz-range-thumb]:rounded-full" max="100" min="0" type="range" value="60"/>
</div>
</section>
</div>

<div className="p-5 border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur z-10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400">CSS Output</span>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1 text-xs">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
                    Copy
                </button>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 relative group">
<code className="text-[11px] font-mono text-zinc-400 block break-all leading-relaxed">
                    background: linear-gradient(145deg, <span className="text-zinc-200">#FF453A</span> 0%, <span className="text-zinc-200">#BF5AF2</span> 45%, <span className="text-zinc-200">#0A84FF</span> 100%);<br/>
<span className="text-zinc-500">/* Note: Noise requires SVG filter overlay */</span>
</code>
</div>
</div>
</aside>
<style>
        /* Minimal custom scrollbar for the sidebar */
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #3f3f46;
            border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background: #52525b;
        }
    </style>

    </>
  );
}
