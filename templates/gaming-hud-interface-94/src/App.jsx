import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0">
<img alt="Background Texture" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

<div className="absolute right-0 top-0 h-full w-[60%] flex items-center justify-center opacity-90 mix-blend-lighten">
<img alt="Character" className="h-[120%] w-auto object-cover object-top mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%, linear-gradient(to left, black 80%, transparent 100%))'}}/>
</div>
</div>

<header className="relative z-20 flex items-center justify-between px-8 py-5 bg-gradient-to-b from-black/80 to-transparent border-b border-white/5 backdrop-blur-sm">

<div className="flex items-center space-x-12">
<div className="flex items-center space-x-2">
<span className="text-lg font-medium border border-zinc-700/50 bg-zinc-900/50 px-3 py-1 rounded-sm shadow-sm backdrop-blur-md">R1</span>
</div>
<nav className="flex items-center space-x-8 text-sm tracking-wide text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">HOME</a>
<a className="text-zinc-100 font-medium relative py-1" href="#">
                    ARMOR
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500"></span>
</a>
<a className="hover:text-zinc-100 transition-colors" href="#">UPGRADES</a>
<a className="hover:text-zinc-100 transition-colors" href="#">HEROES</a>
<a className="hover:text-zinc-100 transition-colors" href="#">OPTIONS</a>
</nav>
</div>

<div className="flex items-center space-x-8">
<div className="flex items-center space-x-2">
<span className="text-lg font-medium border border-zinc-700/50 bg-zinc-900/50 px-3 py-1 rounded-sm shadow-sm backdrop-blur-md">L1</span>
</div>
<div className="flex items-center space-x-6 text-base font-medium">
<div className="flex items-center space-x-2 bg-zinc-900/40 px-3 py-1 border border-white/5 rounded-sm">
<span>203</span>
<i className="text-yellow-600 w-5 h-5 drop-shadow-[0_0_8px_rgba(202,138,4,0.5)]" data-lucide="shield"></i>
</div>
<div className="flex items-center space-x-2 bg-zinc-900/40 px-3 py-1 border border-white/5 rounded-sm">
<span>34 GP</span>
<i className="text-zinc-400 w-5 h-5" data-lucide="box"></i>
</div>
</div>
</div>
</header>

<main className="relative z-10 flex-1 w-full flex p-8 gap-8 overflow-hidden">

<aside className="w-[380px] flex flex-col space-y-4 shrink-0">

<section className="bg-zinc-900/60 border border-zinc-800/80 rounded-sm backdrop-blur-md p-5 flex flex-col relative overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-zinc-800/50 pb-2">
<h2 className="text-sm tracking-tight text-zinc-100 uppercase">HEROES</h2>
<div className="h-full w-[2px] bg-yellow-500 absolute right-0 top-0"></div>
</div>
<div className="grid grid-cols-3 gap-3">

<div className="relative group cursor-pointer">
<div className="aspect-square bg-zinc-800 rounded-sm overflow-hidden border border-yellow-500 ring-1 ring-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
<img alt="Hero 1" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="aspect-square bg-zinc-800 rounded-sm overflow-hidden border border-zinc-700 group-hover:border-zinc-500 transition-colors">
<img alt="Hero 2" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60" src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="relative group cursor-pointer">
<div className="aspect-square bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors">
<i className="w-6 h-6 text-zinc-600" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/60 border border-zinc-800/80 rounded-sm backdrop-blur-md p-5 flex flex-col relative overflow-hidden">
<div className="flex items-center justify-between mb-5 border-b border-zinc-800/50 pb-2">
<h2 className="text-sm tracking-tight text-zinc-100 uppercase">STATS</h2>
<div className="h-full w-[2px] bg-yellow-500 absolute right-0 top-0"></div>
</div>
<div className="grid grid-cols-3 gap-4">

<div className="flex flex-col space-y-1">
<div className="flex items-center space-x-1.5 text-zinc-400">
<i className="w-3.5 h-3.5 text-yellow-500" data-lucide="crosshair"></i>
<span className="text-xs font-medium tracking-wide">KILLS</span>
</div>
<span className="text-3xl font-medium tracking-tight">3.226</span>
</div>

<div className="flex flex-col space-y-1">
<div className="flex items-center space-x-1.5 text-zinc-400">
<i className="w-3.5 h-3.5 text-red-500" data-lucide="skull"></i>
<span className="text-xs font-medium tracking-wide">DEATHS</span>
</div>
<span className="text-3xl font-medium tracking-tight text-zinc-300">1.104</span>
</div>

<div className="flex flex-col space-y-1">
<div className="flex items-center space-x-1.5 text-zinc-400">
<i className="w-3.5 h-3.5 text-green-500" data-lucide="arrow-down-right"></i>
<span className="text-xs font-medium tracking-wide">RATIO</span>
</div>
<div className="flex items-baseline space-x-1">
<span className="text-3xl font-medium tracking-tight text-zinc-300">3.11</span>
<span className="text-sm text-zinc-500">K/D</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/60 border border-zinc-800/80 rounded-sm backdrop-blur-md flex flex-col relative overflow-hidden">
<div className="px-5 pt-4 pb-2 border-b border-zinc-800/50">
<h2 className="text-sm tracking-tight text-zinc-100 uppercase">BEST MAP</h2>
</div>
<div className="relative h-32 w-full group overflow-hidden">
<img alt="Map" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<span className="absolute bottom-3 left-4 text-xs font-medium tracking-wider text-zinc-200">GORKANE ISLAND</span>
</div>
</section>
</aside>

<div className="absolute top-[32%] left-[38%] flex items-center z-30 pointer-events-none">
<div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/5">
<i className="w-4 h-4 text-zinc-400" data-lucide="volume-2"></i>
<span className="text-sm font-medium tracking-widest text-zinc-200">IIII_OFF_IIII</span>
</div>

<svg className="absolute left-[calc(100%-10px)] top-1/2 w-[300px] h-[300px] overflow-visible pointer-events-none" style={{transform: 'translateY(-50%)'}}>
<path d="M 10,0 L 40,0 L 160,180" fill="none" stroke="#71717a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle className="drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]" cx="160" cy="180" fill="#eab308" r="2.5"></circle>
</svg>
</div>
</main>

<div className="absolute bottom-8 left-8 right-8 z-40 flex gap-6 pointer-events-none">

<div className="flex-1 bg-zinc-900/85 border border-zinc-700/50 rounded-sm backdrop-blur-xl p-6 flex items-end justify-between relative overflow-hidden pointer-events-auto shadow-2xl shadow-black/50">

<div className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
<div className="flex flex-col space-y-6 w-1/2">
<h1 className="text-3xl font-medium tracking-tight text-zinc-100">AXT 700</h1>
<div className="flex items-center space-x-4">

<div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800/50">
<i className="w-4 h-4 text-yellow-600" data-lucide="target"></i>
</div>
<div className="w-8 h-8 rounded-full border border-cyan-500/50 flex items-center justify-center bg-cyan-950/30 ring-1 ring-cyan-500/30">
<i className="w-4 h-4 text-cyan-400" data-lucide="disc"></i>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800/50 text-green-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
</div>

<div className="h-32 -ml-8 -mb-4 relative z-10 w-[120%]">
<img alt="Weapon 1" className="w-full h-full object-cover object-center grayscale mix-blend-luminosity brightness-150 contrast-125 [mask-image:linear-gradient(to_right,black_60%,transparent)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="w-[45%] flex flex-col justify-center space-y-3 pb-4">
<div className="flex items-center">
<span className="w-24 text-sm text-zinc-400 font-medium text-right pr-4 uppercase tracking-wider">PRECISION</span>
<div className="flex-1 h-[5px] bg-zinc-800 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full bg-cyan-400 w-[85%] shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
</div>
</div>
<div className="flex items-center">
<span className="w-24 text-sm text-zinc-400 font-medium text-right pr-4 uppercase tracking-wider">CADENCE</span>
<div className="flex-1 h-[5px] bg-zinc-800 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full bg-cyan-400 w-[65%] shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
</div>
</div>
<div className="flex items-center">
<span className="w-24 text-sm text-zinc-400 font-medium text-right pr-4 uppercase tracking-wider">STABILITY</span>
<div className="flex-1 h-[5px] bg-zinc-800 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full bg-cyan-400 w-[75%] shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
</div>
</div>
<div className="flex items-center">
<span className="w-24 text-sm text-zinc-400 font-medium text-right pr-4 uppercase tracking-wider">DAMAGE</span>
<div className="flex-1 h-[5px] bg-zinc-800 rounded-full overflow-hidden relative border border-white/5">
<div className="absolute top-0 left-0 h-full bg-cyan-400 w-[70%] shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-zinc-900/60 border border-zinc-800/80 rounded-sm backdrop-blur-md p-6 flex items-start justify-between relative overflow-hidden pointer-events-auto group hover:bg-zinc-900/80 transition-colors">
<div className="flex flex-col space-y-6 w-full relative z-10">
<h1 className="text-3xl font-medium tracking-tight text-zinc-200 group-hover:text-zinc-100 transition-colors">ARTEMOS-Y</h1>
<div className="flex items-center space-x-4">

<div className="w-8 h-8 rounded-full border border-yellow-500/50 flex items-center justify-center bg-yellow-950/20">
<i className="w-4 h-4 text-yellow-500" data-lucide="target"></i>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800/50">
<div className="w-4 h-4 rounded-full border-[1.5px] border-emerald-400 flex items-center justify-center">
<div className="w-[8px] h-[1.5px] bg-emerald-400"></div>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-800/50 text-green-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
</div>
</div>

<div className="absolute right-4 bottom-4 h-40 w-[60%] z-0">
<img alt="Weapon 2" className="w-full h-full object-cover object-center grayscale mix-blend-luminosity opacity-70 group-hover:opacity-90 transition-opacity [mask-image:linear-gradient(to_left,black_70%,transparent)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>



    </>
  );
}
