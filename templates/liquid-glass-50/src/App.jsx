import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        marquee: 'marquee 20s linear infinite',
                    },
                    keyframes: {
                        marquee: {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' },
                        }
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
      
<div className="noise-overlay"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#eef0f4]">
<div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#a8c7fa] rounded-[40%] liquid-bg"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#dcb4ff] rounded-[45%] liquid-bg animation-delay-2000" style={{animationDirection: 'reverse'}}></div>
<div className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] bg-[#ffc4c4] rounded-[35%] liquid-bg animation-delay-4000 mix-blend-multiply"></div>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto p-4 md:p-8 flex flex-col gap-6">

<nav className="liquid-glass rounded-none md:rounded-2xl p-4 flex justify-between items-center sticky top-4 z-50 border-b border-white/40">
<div className="flex items-center gap-6">

<div className="w-12 h-12 bg-black text-white flex items-center justify-center font-mono font-bold text-xl relative group overflow-hidden border border-white/20">
<div className="absolute inset-0 bg-white mix-blend-exclusion opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    LG
                </div>
<div className="hidden sm:flex flex-col">
<span className="font-bold tracking-tight text-lg leading-none">LIQUID_GLASS</span>
<span className="font-mono text-[10px] uppercase text-neutral-500 tracking-widest">Synthesis Module v.4</span>
</div>
</div>

<div className="hidden md:flex items-center bg-white/30 rounded-full px-2 py-1.5 border border-white/40 backdrop-blur-md">
<a className="px-5 py-2 rounded-full font-mono text-xs font-bold uppercase hover:bg-black hover:text-white transition-all" href="#">Products</a>
<a className="px-5 py-2 rounded-full font-mono text-xs font-bold uppercase hover:bg-black hover:text-white transition-all" href="#">Research</a>
<a className="px-5 py-2 rounded-full font-mono text-xs font-bold uppercase hover:bg-black hover:text-white transition-all" href="#">Manifesto</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block font-mono text-xs text-right leading-tight text-neutral-500">
                    System: ONLINE<br/>
                    Latency: 12ms
                </div>
<button className="w-10 h-10 border border-neutral-900/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white/20">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>

<div className="corner-tr"></div>
<div className="corner-bl"></div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="liquid-glass rounded-[2rem] p-8 md:p-14 min-h-[500px] flex flex-col justify-between group">
<div className="flex justify-between items-start">
<div className="inline-flex items-center gap-2 border border-black/10 bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm">
<span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
<span className="font-mono text-xs font-bold uppercase">Fluid Dynamics</span>
</div>
<span className="font-mono text-4xl font-light opacity-20">01</span>
</div>
<div className="relative z-10 mt-10">
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.85] text-neutral-900 mix-blend-darken mb-6">
                            SOLID<br/>
<span className="font-serif italic font-light ml-4 text-neutral-600">state</span> FLUIDITY
                        </h1>
<p className="font-mono text-sm md:text-base max-w-lg leading-relaxed text-neutral-700 border-l-2 border-black/20 pl-6 py-2 bg-white/10 backdrop-blur-sm">
                            We build interfaces that exist between states. Hard boundaries containing chaotic motion. A brutalist approach to organic data visualization.
                        </p>
</div>
<div className="flex flex-wrap items-end gap-4 mt-12">
<button className="bg-black text-white px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center gap-3 shadow-lg shadow-black/20">
                            Start Synthesis
                            <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
<button className="bg-white/40 border border-white/60 text-black px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors backdrop-blur-md">
                            Documentation
                        </button>
</div>

<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-white/40 to-transparent pointer-events-none rounded-br-[2rem]"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="liquid-glass rounded-3xl p-8 flex flex-col justify-between h-72 relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="flex justify-between items-start z-10">
<span className="font-mono text-xs font-bold uppercase bg-black text-white px-2 py-1">Metric_04</span>
<span className="iconify text-neutral-500" data-icon="lucide:bar-chart-2" data-width="24"></span>
</div>
<div className="z-10 mt-auto">
<div className="flex items-baseline gap-2">
<span className="text-6xl font-medium tracking-tighter">48.2</span>
<span className="font-mono text-sm text-neutral-500">TB/s</span>
</div>
<div className="w-full h-1 bg-black/10 mt-4 overflow-hidden rounded-full">
<div className="h-full bg-black w-[70%] animate-pulse"></div>
</div>
</div>
</div>

<div className="liquid-glass rounded-3xl p-8 flex flex-col justify-center gap-8 group">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-bold text-lg">Viscosity</span>
<span className="font-mono text-xs text-neutral-500">Liquid resistance param</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-16 h-8 bg-neutral-300 peer-focus:outline-none rounded-none border border-neutral-400 peer-checked:bg-black transition-all"></div>
<div className="absolute left-[4px] top-[4px] bg-white border border-neutral-500 w-6 h-6 peer-checked:translate-x-full transition-all shadow-sm"></div>
</label>
</div>
<div className="h-px w-full bg-black/10"></div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-bold text-lg">Refraction</span>
<span className="font-mono text-xs text-neutral-500">Light bending index</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-16 h-8 bg-neutral-300 peer-focus:outline-none rounded-none border border-neutral-400 peer-checked:bg-black transition-all"></div>
<div className="absolute left-[4px] top-[4px] bg-white border border-neutral-500 w-6 h-6 peer-checked:translate-x-full transition-all shadow-sm"></div>
</label>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="liquid-glass rounded-3xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50">
<span className="iconify w-24 h-24 text-neutral-400 rotate-[-15deg]" data-icon="lucide:fingerprint"></span>
</div>
<div className="relative z-10">
<h3 className="font-mono text-sm font-bold uppercase mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Access Control
                        </h3>
<div className="space-y-4">
<div className="group">
<label className="block font-mono text-[10px] uppercase text-neutral-500 mb-1 ml-1">Identity Key</label>
<input className="w-full bg-white/40 border border-white/60 focus:border-black/50 px-4 py-3 font-mono text-sm rounded-lg outline-none transition-all placeholder:text-neutral-400 text-black shadow-inner" type="text" value="USR-9920-X"/>
</div>
<div className="group">
<label className="block font-mono text-[10px] uppercase text-neutral-500 mb-1 ml-1">Passphrase</label>
<input className="w-full bg-white/40 border border-white/60 focus:border-black/50 px-4 py-3 font-mono text-sm rounded-lg outline-none transition-all shadow-inner" type="password" value="••••••••"/>
</div>
<button className="w-full bg-neutral-900 text-white py-3 mt-2 rounded-lg font-mono text-xs uppercase font-bold hover:bg-neutral-800 transition-colors shadow-lg">
                                Verify Credentials
                            </button>
</div>
</div>
</div>

<div className="liquid-glass rounded-3xl flex-1 flex flex-col min-h-[350px]">
<div className="p-5 border-b border-black/5 flex justify-between items-center bg-white/20">
<span className="font-mono text-xs font-bold uppercase tracking-wider">Storage_Vol_01</span>
<span className="iconify" data-icon="lucide:hard-drive" data-width="16"></span>
</div>
<div className="p-2 flex flex-col gap-1 overflow-y-auto max-h-[400px]">

<div className="p-3 hover:bg-white/50 rounded-lg transition-colors cursor-pointer group flex items-center gap-3 border border-transparent hover:border-white/40">
<div className="w-10 h-10 bg-blue-100/50 rounded-md flex items-center justify-center text-blue-700 border border-blue-200/50">
<span className="iconify" data-icon="lucide:file-code-2"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">kernel_patch.v.4.1</h4>
<p className="font-mono text-[10px] text-neutral-500">Compiled 2h ago</p>
</div>
<span className="font-mono text-[10px] text-neutral-400">24KB</span>
</div>

<div className="p-3 hover:bg-white/50 rounded-lg transition-colors cursor-pointer group flex items-center gap-3 border border-transparent hover:border-white/40">
<div className="w-10 h-10 bg-purple-100/50 rounded-md flex items-center justify-center text-purple-700 border border-purple-200/50">
<span className="iconify" data-icon="lucide:layers"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">texture_map_raw.png</h4>
<p className="font-mono text-[10px] text-neutral-500">Imported 5h ago</p>
</div>
<span className="font-mono text-[10px] text-neutral-400">8.2MB</span>
</div>

<div className="p-3 hover:bg-white/50 rounded-lg transition-colors cursor-pointer group flex items-center gap-3 border border-transparent hover:border-white/40">
<div className="w-10 h-10 bg-amber-100/50 rounded-md flex items-center justify-center text-amber-700 border border-amber-200/50">
<span className="iconify" data-icon="lucide:alert-octagon"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">error_log_dump.txt</h4>
<p className="font-mono text-[10px] text-neutral-500">System generated</p>
</div>
<span className="font-mono text-[10px] text-neutral-400">12KB</span>
</div>

<div className="p-3 hover:bg-white/50 rounded-lg transition-colors cursor-pointer group flex items-center gap-3 border border-transparent hover:border-white/40">
<div className="w-10 h-10 bg-rose-100/50 rounded-md flex items-center justify-center text-rose-700 border border-rose-200/50">
<span className="iconify" data-icon="lucide:archive"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-bold text-sm truncate">legacy_backup.zip</h4>
<p className="font-mono text-[10px] text-neutral-500">Archived</p>
</div>
<span className="font-mono text-[10px] text-neutral-400">1.2GB</span>
</div>
</div>

<div className="mt-auto p-5 border-t border-black/5 bg-white/10">
<div className="flex justify-between mb-2 text-[10px] font-mono font-bold uppercase">
<span>Capacity</span>
<span>84%</span>
</div>
<div className="w-full h-4 border border-black/10 p-[2px]">
<div className="h-full w-[84%] bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNLTEgNUw1IC0xTDUuNSAwaC02WiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+')] opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-4 liquid-glass rounded-xl p-3 overflow-hidden">
<div className="flex whitespace-nowrap overflow-hidden">
<div className="animate-marquee flex gap-12 items-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
<span>/// RENDERING ENGINE ACTIVE</span>
<span>/// LIQUID_COOLING: ON</span>
<span>/// BRUTALIST_PROTOCOL: ENFORCED</span>
<span>/// GLASS_REFRACTION: 1.52</span>
<span>/// RENDERING ENGINE ACTIVE</span>
<span>/// LIQUID_COOLING: ON</span>
<span>/// BRUTALIST_PROTOCOL: ENFORCED</span>
<span>/// GLASS_REFRACTION: 1.52</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
