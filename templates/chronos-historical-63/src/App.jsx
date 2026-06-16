import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-neutral-100 rounded-sm flex items-center justify-center text-black font-bold text-xs tracking-tighter group-hover:bg-white transition-colors">
                    C
                </div>
<span className="text-neutral-200 font-medium text-sm tracking-tight group-hover:text-white transition-colors">Chronos</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Showcase</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Generation</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Texture Assets</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-[10px] font-medium px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-500">
<span className="iconify" data-icon="lucide:command" data-width="12"></span> K
                </div>
<button className="text-neutral-200 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</header>

<main className="flex-grow pt-24 pb-12 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="lg:col-span-3 flex flex-col gap-6 animate-[fadeIn_0.5s_ease-out]">
<div className="space-y-1">
<h1 className="text-xl text-neutral-100 font-semibold tracking-tight">Diorama Config</h1>
<p className="text-xs text-neutral-500">Define the parameters for your historical scene.</p>
</div>
<hr className="border-white/5"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-neutral-300">Historical Era</label>
<span className="text-[10px] text-neutral-600 bg-white/5 px-1.5 py-0.5 rounded">Required</span>
</div>

<button className="w-full flex items-center justify-between bg-neutral-900 border border-white/10 rounded-md px-3 py-2 text-xs text-neutral-300 hover:border-white/20 transition-all group">
<span className="flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:hourglass" data-width="14"></span>
                        Late Ottoman Empire
                    </span>
<span className="iconify text-neutral-600 group-hover:text-neutral-400" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
<div className="space-y-2 pt-2">
<label className="text-xs font-medium text-neutral-300">Environment Scale</label>

<div className="relative w-full h-6 flex items-center cursor-pointer group">
<div className="absolute w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-500 w-[60%] group-hover:bg-neutral-400 transition-colors"></div>
</div>
<div className="absolute left-[60%] w-3 h-3 bg-neutral-200 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] border border-neutral-900 transform -translate-x-1.5 hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 font-medium">
<span>1:100</span>
<span>1:60</span>
<span className="text-neutral-400">1:35</span>
<span>1:18</span>
</div>
</div>
</div>
<hr className="border-white/5"/>

<div className="space-y-4">
<label className="text-xs font-medium text-neutral-300">Atmosphere &amp; Lighting</label>
<div className="grid grid-cols-2 gap-2">

<div className="relative cursor-pointer group">
<div className="absolute inset-0 bg-amber-500/5 border border-amber-500/20 rounded-md group-hover:border-amber-500/40 transition-colors"></div>
<div className="relative p-3 text-center">
<span className="iconify mx-auto text-amber-500 mb-2" data-icon="lucide:sun" data-width="16"></span>
<div className="text-[10px] text-amber-200/80 font-medium">Golden Hour</div>
</div>
</div>

<div className="relative cursor-pointer group opacity-60 hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-neutral-800/50 border border-white/5 rounded-md group-hover:border-white/10"></div>
<div className="relative p-3 text-center">
<span className="iconify mx-auto text-neutral-400 mb-2" data-icon="lucide:moon" data-width="16"></span>
<div className="text-[10px] text-neutral-400 font-medium">Midnight</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 rounded bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
<span className="iconify text-white opacity-100" data-icon="lucide:check" data-width="10"></span>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">Volumetric Fog</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 rounded bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">

</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Weathering Effects</span>
</div>
</div>
</div>

<div className="pt-4 mt-auto">
<button className="w-full bg-neutral-100 text-neutral-950 hover:bg-white font-medium text-sm py-2.5 rounded-md shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:wand-2" data-width="14"></span>
                    Generate Poster
                </button>
</div>
</aside>

<section className="lg:col-span-9 flex flex-col gap-4 h-full relative">

<div className="flex items-center justify-between pb-2 border-b border-white/5">
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-200 border-b border-white px-1 pb-3 -mb-3.5">Preview</button>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-300 px-1 pb-3 -mb-3.5 transition-colors">Schematic</button>
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-300 px-1 pb-3 -mb-3.5 transition-colors">History</button>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-600 uppercase tracking-wider font-semibold mr-2">Render Quality: High</span>
<button className="p-1.5 hover:bg-white/5 rounded text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
</button>
<button className="p-1.5 hover:bg-white/5 rounded text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:maximize" data-width="14"></span>
</button>
</div>
</div>

<div className="relative flex-grow min-h-[500px] w-full bg-[#080808] border border-white/5 rounded-lg overflow-hidden group box-glow transition-all duration-500">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative w-[300px] h-[400px] sm:w-[500px] sm:h-[350px] bg-neutral-900/40 border border-white/5 rounded-xl backdrop-blur-sm shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.01]">

<div className="absolute inset-0 rounded-xl overflow-hidden">

<div className="absolute top-0 w-full h-2/3 bg-gradient-to-b from-[#1a1510] to-[#0a0a0a]"></div>

<div className="absolute bottom-0 w-full h-1/3 bg-[#111] border-t border-white/5"></div>

<div className="absolute bottom-10 left-10 w-24 h-40 bg-neutral-800 border border-white/5 shadow-lg transform -skew-y-3 origin-bottom-right"></div>
<div className="absolute bottom-8 left-36 w-20 h-28 bg-neutral-800/80 border border-white/5 shadow-lg"></div>

<div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
<div>
<div className="text-[10px] text-amber-500 font-mono mb-1 uppercase tracking-widest">Fig 01.</div>
<h2 className="text-xl text-white font-serif tracking-tight">Constantinople<br/>Walls</h2>
</div>
<div className="text-right">
<div className="text-[10px] text-neutral-500 font-mono">1453 AD</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 w-full animate-[scan_3s_ease-in-out_infinite] opacity-50"></div>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 bg-black/80 backdrop-blur border border-white/10 rounded-full shadow-xl">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:rotate-ccw" data-width="14"></span>
</button>
<div className="h-4 w-px bg-white/10"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white shadow-inner">
<span className="iconify" data-icon="lucide:box" data-width="14"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zoom-in" data-width="14"></span>
</button>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-lg p-1 flex items-center gap-2 shadow-lg">
<div className="pl-3">
<span className="iconify text-neutral-500" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<input className="w-full bg-transparent border-none text-sm text-neutral-200 placeholder-neutral-600 focus:ring-0 focus:outline-none py-2.5" type="text" value="Ancient library interior, dusty scrolls, afternoon light rays, highly detailed textures"/>
<button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition-colors border border-white/5">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</section>
</main>

<section className="max-w-7xl mx-auto px-6 pb-20 border-t border-white/5 pt-12">
<div className="flex items-end justify-between mb-8">
<div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">Recent Creations</h3>
<p className="text-xs text-neutral-500 mt-1">Generated by the community.</p>
</div>
<a className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors" href="#">
                View all <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative aspect-[3/4] bg-neutral-900 rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 bg-[#151515]">
<div className="absolute bottom-0 w-full h-1/2 bg-indigo-900/20 blur-2xl"></div>
<div className="absolute top-1/4 left-1/4 w-12 h-24 bg-neutral-800 transform rotate-12 opacity-50"></div>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[10px] text-indigo-400 font-medium mb-0.5">Victorian London</div>
<div className="text-sm text-white font-medium tracking-tight">Cobblestone Streets</div>
</div>
</div>

<div className="group relative aspect-[3/4] bg-neutral-900 rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-[#121212]">
<div className="absolute top-0 right-0 w-full h-1/2 bg-amber-900/10 blur-2xl"></div>
<div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-neutral-700 rounded-full opacity-20"></div>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[10px] text-amber-500 font-medium mb-0.5">Ancient Egypt</div>
<div className="text-sm text-white font-medium tracking-tight">Temple Entrance</div>
</div>
</div>

<div className="group relative aspect-[3/4] bg-neutral-900 rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-[#141414]">
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<div className="w-32 h-32 border border-white rotate-45"></div>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[10px] text-emerald-500 font-medium mb-0.5">Kyoto, Japan</div>
<div className="text-sm text-white font-medium tracking-tight">Bamboo Forest</div>
</div>
</div>

<div className="group relative aspect-[3/4] bg-neutral-900 rounded-lg border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-[#111]">
<div className="absolute bottom-0 w-full h-2/3 bg-rose-900/10 blur-3xl"></div>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20">
<div className="text-[10px] text-rose-400 font-medium mb-0.5">Sci-Fi Future</div>
<div className="text-sm text-white font-medium tracking-tight">Neon Market</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black/20">
<div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-[10px] text-neutral-600">
<div className="flex items-center gap-4">
<span>© 2024 Chronos Inc.</span>
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span>Systems Operational</span>
</div>
</div>
</footer>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
            0%, 100% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(400%); opacity: 0; }
        }
    </style>

    </>
  );
}
