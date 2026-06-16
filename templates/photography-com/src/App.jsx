import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
glass: "rgba(255, 255, 255, 0.05)",
glassBorder: "rgba(255, 255, 255, 0.1)",
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 bg-blue-900/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-zinc-950">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:opacity-80 transition-opacity">MNML/FOCUS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#lighting">Lighting</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#composition">Composition</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#gear">Gear Setup</a>
</div>
<button className="text-xs font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Get Presets
            </button>
</div>
</nav>

<header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Photography Guide v2.0</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 leading-[1.1]">
                Master the Art<br/>of the Unseen.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Curated techniques for modern photographers. Elevate your visual storytelling with precision, lighting mastery, and intentional composition.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-zinc-100 text-zinc-950 rounded-lg text-sm font-medium hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#tips">
                    Start Learning
                </a>
<a className="w-full md:w-auto px-8 py-3 bg-transparent border border-white/10 text-zinc-300 rounded-lg text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 group" href="#">
                    View Gallery
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<main className="relative z-10 max-w-6xl mx-auto px-6 pb-24 space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="tips">

<div className="col-span-1 bg-zinc-900/40 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between">
<div className="mb-6">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 text-indigo-400">
<iconify-icon icon="lucide:list-checks" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-1">Pre-Shoot Prep</h3>
<p className="text-sm text-zinc-500">Essential checks before you leave.</p>
</div>
<div className="space-y-3">

<label className="group flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded bg-zinc-800 border border-zinc-700 peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
</div>
<div className="flex-1">
<span className="block text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Format SD Cards</span>
<span className="block text-[10px] text-zinc-600">Double check backup slots</span>
</div>
</label>

<label className="group flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded bg-zinc-800 border border-zinc-700 peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
</div>
<div className="flex-1">
<span className="block text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Sensor Clean</span>
<span className="block text-[10px] text-zinc-600">Check f/22 against sky</span>
</div>
</label>

<label className="group flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded bg-zinc-800 border border-zinc-700 peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" strokeWidth="2" width="12"></iconify-icon>
</div>
</div>
<div className="flex-1">
<span className="block text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">Battery Charge</span>
<span className="block text-[10px] text-zinc-600">Pack at least 3 spares</span>
</div>
</label>
</div>
</div>

<div className="col-span-1 lg:col-span-2 bg-zinc-900/40 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon icon="lucide:sun" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">LIGHTING</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Embrace Hard Light</h2>
<p className="text-zinc-400 font-light leading-relaxed max-w-lg">
                            Soft light is safe, but hard light creates drama. Use the midday sun to create high-contrast, geometric compositions. Look for shadows that carve out shapes in your subject.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-4">
<div className="bg-black/20 rounded-xl p-4 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Contrast</span>
<span className="text-xs text-indigo-400">+25</span>
</div>

<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[65%] h-full bg-indigo-500"></div>
</div>
</div>
<div className="bg-black/20 rounded-xl p-4 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Highlights</span>
<span className="text-xs text-zinc-400">-10</span>
</div>

<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-zinc-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-zinc-900/40 border border-white/10 hover:border-zinc-700 backdrop-blur-md rounded-3xl p-6 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-200" icon="lucide:grid" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Rule of Thirds vs Center</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Don't just follow rules blindly. Use center composition for symmetry and authority, use thirds for movement and context.
                </p>
<a className="inline-flex items-center text-xs font-medium text-white hover:text-indigo-400 transition-colors" href="#">
                    Read analysis <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>

<div className="group bg-zinc-900/40 border border-white/10 hover:border-zinc-700 backdrop-blur-md rounded-3xl p-6 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-200" icon="lucide:sliders" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Manual Mode Mastery</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    ISO is your last resort. Always prioritize Shutter Speed for action or Aperture for depth, then adjust ISO to balance exposure.
                </p>

<div className="flex gap-1 mt-auto">
<span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-zinc-300 font-mono">1/125</span>
<span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-zinc-300 font-mono">f/2.8</span>
<span className="text-[10px] bg-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300 font-mono">ISO 100</span>
</div>
</div>

<div className="group bg-zinc-900/40 border border-white/10 hover:border-zinc-700 backdrop-blur-md rounded-3xl p-6 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-200" icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">The 3-Color Rule</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    In grading, try to limit your dominant palette to three colors. It creates visual cohesion and makes the image feel curated.
                </p>
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-[#ff7b54]"></div>
<div className="w-4 h-4 rounded-full bg-[#1e2a3a]"></div>
<div className="w-4 h-4 rounded-full bg-[#f3f4f6]"></div>
</div>
</div>
</div>

<div className="w-full bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex-1 relative z-10">
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">Understanding Depth of Field</h2>
<p className="text-sm text-zinc-400 mb-8 max-w-sm">Interact with the simulation to see how aperture affects background blur (bokeh).</p>

<div className="space-y-6">
<div className="relative">
<label className="flex justify-between text-xs font-medium text-zinc-300 mb-2">
<span>Aperture</span>
<span className="text-indigo-400">f/1.8</span>
</label>
<div className="relative w-full h-2 bg-zinc-800 rounded-full">
<div className="absolute top-0 left-0 h-full w-1/4 bg-white rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-mono">
<span>f/1.4</span>
<span>f/16</span>
</div>
</div>
<div className="relative">
<label className="flex justify-between text-xs font-medium text-zinc-300 mb-2">
<span>Focal Length</span>
<span className="text-indigo-400">85mm</span>
</label>
<div className="relative w-full h-2 bg-zinc-800 rounded-full">
<div className="absolute top-0 left-0 h-full w-3/4 bg-zinc-600 rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-3/4 w-4 h-4 bg-zinc-400 border-2 border-zinc-900 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-2 font-mono">
<span>24mm</span>
<span>200mm</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-80 aspect-square bg-zinc-800 rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 blur-sm scale-110"></div>
<div className="relative z-10 w-32 h-32 rounded-full border border-white/20 backdrop-blur-none bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:focus" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 text-[10px] text-white/50 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                    Simulation Preview
                </div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-12 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-white rounded text-zinc-950 flex items-center justify-center">
<iconify-icon icon="lucide:aperture" width="12"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">MNML/FOCUS</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Dedicated to the craft of photography. Providing tools, tips, and insights for the modern creator.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Gear Guide</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Lighting Setup</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Presets</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<span className="text-[10px] text-zinc-600">© 2023 MNML/FOCUS. All rights reserved.</span>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
