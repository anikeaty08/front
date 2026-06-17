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
      

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-sm">
<div className="bg-[#111111] border border-[#333333] px-1 py-1 flex items-center gap-1 rounded-none shadow-2xl">
<a className="px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#CCFF00] hover:text-black transition-colors duration-300" href="#inventory">Stock</a>
<div className="h-4 w-[1px] bg-[#333333]"></div>
<a className="px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#CCFF00] hover:text-black transition-colors duration-300" href="#details">Specs</a>
<div className="h-4 w-[1px] bg-[#333333]"></div>
<a className="px-4 py-2 text-xs uppercase tracking-widest hover:bg-[#CCFF00] hover:text-black transition-colors duration-300" href="#sell">Sell</a>
<div className="h-4 w-[1px] bg-[#333333]"></div>
<button className="px-3 py-2 hover:text-[#CCFF00] transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="fixed top-0 left-0 w-full z-40 px-6 py-6 mix-blend-difference pointer-events-none">
<div className="flex justify-between items-start">
<div className="uppercase tracking-tighter text-lg font-bold">
                M—E // <span className="text-[#CCFF00]">SYSTEMS</span>
</div>
<div className="text-right text-[10px] tracking-widest opacity-60 hidden md:block">
                SYS_READY<br/>
                V.2.0.4
            </div>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden border-b border-[#333333]">

<div className="absolute inset-0 z-0 bg-cover bg-center grayscale contrast-125 brightness-50" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1628178822501-c918a0a861d8?q=80&amp'}}>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDFhMSAxIDAgMCAxIDEgMXoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50"></div>
</div>

<div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-end">

<div className="md:col-span-8">
<div className="mb-4 text-[#CCFF00] text-xs md:text-sm tracking-widest border-l-2 border-[#CCFF00] pl-3">
                        LAT: 34.05° N // STOCK_ID: 25_UPDATE // STATUS: ONLINE
                    </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase leading-[0.85] tracking-tight">
                        Pure.<br/>
                        Mechanical.<br/>
                        Emotion.
                    </h1>
</div>

<div className="md:col-span-4 flex md:justify-end items-end pb-2">
<a className="group flex items-center gap-4 text-xs tracking-widest uppercase hover:text-[#CCFF00] transition-colors" href="#inventory">
                        [ Access Inventory ]
                        <div className="w-12 h-12 border border-[#E0E0E0] group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black flex items-center justify-center transition-all duration-300">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</a>
</div>
</div>
</div>

<div className="absolute bottom-12 left-0 w-full h-[1px] bg-[#333333] hidden md:block"></div>
<div className="absolute top-0 right-12 w-[1px] h-full bg-[#333333] hidden md:block"></div>
</section>

<section className="relative bg-[#080808] py-24 border-b border-[#333333]" id="inventory">
<div className="px-6 md:px-12 mb-12 flex items-end justify-between border-b border-[#333333] pb-6">
<h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">Inventory_Log</h2>
<div className="text-xs text-[#333333] uppercase hidden md:block">
                // Scroll for data
            </div>
</div>
<div className="flex flex-col">

<div className="group border-b border-[#333333] hover:bg-[#111111] transition-colors duration-500">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[400px]">

<div className="lg:col-span-5 relative border-r border-[#333333] overflow-hidden">
<img alt="Ducati" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black text-[#CCFF00] text-[10px] px-2 py-1 uppercase tracking-widest border border-[#CCFF00]">
                            Available
                        </div>
</div>

<div className="lg:col-span-7 p-6 md:p-12 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 text-[#333333] text-xs">
<iconify-icon icon="lucide:hash" width="12"></iconify-icon> UNIT 001
                            </div>
<h3 className="font-display text-3xl md:text-5xl font-bold uppercase leading-none mb-6 group-hover:text-white transition-colors">
                                2023 — DUCATI<br/>
                                PANIGALE V4S<br/>
<span className="text-stroke text-transparent" style={{WebkitTextStroke: '1px #333'}}>1103cc</span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[#333333] mt-8">
<div>
<span className="block text-[10px] text-[#555] mb-1">POWER</span>
<span className="text-sm">214 HP</span>
</div>
<div>
<span className="block text-[10px] text-[#555] mb-1">TORQUE</span>
<span className="text-sm">91.5 LB-FT</span>
</div>
<div>
<span className="block text-[10px] text-[#555] mb-1">WEIGHT</span>
<span className="text-sm">174 KG</span>
</div>
<div>
<span className="block text-[10px] text-[#555] mb-1">ODOMETER</span>
<span className="text-sm text-[#CCFF00]">00042 KM</span>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="flex items-center gap-3 text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                View Technical Manifest <iconify-icon className="text-[#CCFF00]" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group border-b border-[#333333] hover:bg-[#111111] transition-colors duration-500">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[400px]">

<div className="lg:col-span-5 relative border-r border-[#333333] overflow-hidden">
<img alt="BMW" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:col-span-7 p-6 md:p-12 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 text-[#333333] text-xs">
<iconify-icon icon="lucide:hash" width="12"></iconify-icon> UNIT 002
                            </div>
<h3 className="font-display text-3xl md:text-5xl font-bold uppercase leading-none mb-6 group-hover:text-white transition-colors">
                                2024 — BMW<br/>
                                M 1000 RR<br/>
<span className="text-stroke text-transparent" style={{WebkitTextStroke: '1px #333'}}>999cc</span>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[#333333] mt-8">
<div>
<span className="block text-[10px] text-[#555] mb-1">POWER</span>
<span className="text-sm">205 HP</span>
</div>
<div>
<span className="block text-[10px] text-[#555] mb-1">CARBON</span>
<span className="text-sm">FULL TRIM</span>
</div>
<div>
<span className="block text-[10px] text-[#555] mb-1">WEIGHT</span>
<span className="text-sm">192 KG</span>
</div>
<div>
<span className="block text-[10px] text-[#555] mb-1">ODOMETER</span>
<span className="text-sm text-[#CCFF00]">01200 KM</span>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="flex items-center gap-3 text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                View Technical Manifest <iconify-icon className="text-[#CCFF00]" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#080808] relative" id="details">
<div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

<div className="flex flex-col justify-between h-full sticky top-24">
<div>
<div className="text-[#CCFF00] text-xs tracking-widest mb-4">// SELECTED_ASSET</div>
<h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] mb-8">
                    Technical<br/>Manifest
                </h2>
<p className="text-sm md:text-base leading-relaxed text-[#888] max-w-md font-light mb-8">
                    Machine ID #442. Meticulously maintained. Upgraded thermal exhaust systems. This unit is track-ready and passes all 120-point structural integrity checks. No compromises.
                </p>
<div className="flex gap-4">
<button className="bg-[#CCFF00] text-black border border-[#CCFF00] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#CCFF00] transition-colors duration-300">
                        Initiate Purchase
                    </button>
<button className="border border-[#333] text-[#E0E0E0] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#CCFF00] transition-colors duration-300">
                        Download Schematics
                    </button>
</div>
</div>
<div className="mt-12 lg:mt-0">
<iconify-icon className="opacity-20" icon="lucide:qr-code" width="64"></iconify-icon>
</div>
</div>

<div className="bg-[#111111] p-6 md:p-12 border border-[#333333] shadow-2xl relative">

<div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#333_4px,#333_8px)]"></div>
<div className="flex justify-between items-start mb-12 opacity-50">
<div className="text-[10px] tracking-widest">
                    ID: #8829-X<br/>
                    DATE: 2023.10.14
                </div>
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<div className="space-y-4 font-mono text-sm">

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">ENGINE</span>
<span className="text-right">998cc Inline 4</span>
</div>

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">POWER</span>
<span className="text-right text-[#CCFF00]">200 BHP @ 13k</span>
</div>

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">WEIGHT</span>
<span className="text-right">170 KG (Dry)</span>
</div>

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">CHASSIS</span>
<span className="text-right">Monocoque Alum</span>
</div>

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">HISTORY</span>
<span className="text-right">Full Service Record</span>
</div>

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">TIRES</span>
<span className="text-right">Pirelli Diablo SC2</span>
</div>

<div className="flex items-end justify-between border-b border-dashed border-[#333] pb-2">
<span className="text-[#555]">ELECTRONICS</span>
<span className="text-right">Bosch 6-Axis IMU</span>
</div>
</div>
<div className="mt-12 pt-6 border-t border-[#333333]">
<div className="flex justify-between text-xs tracking-widest">
<span>TOTAL VALUATION</span>
<span className="text-xl font-bold">$34,500.00</span>
</div>
<div className="mt-4 text-[10px] text-[#444] leading-tight">
                    *PRICE EXCLUDES TAX AND LICENSING. VEHICLE SOLD AS-IS. NO WARRANTY IMPLIED.
                </div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#333_4px,#333_8px)]"></div>
</div>
</section>

<section className="py-24 bg-[#080808] border-t border-[#333333]" id="sell">
<div className="container mx-auto px-6 md:px-12 max-w-4xl">
<div className="text-center mb-16">
<h2 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-4">Offload Asset.</h2>
<p className="text-sm tracking-widest text-[#888] uppercase">We acquire premium machinery. Immediate valuation. Instant transfer. No tire-kickers.</p>
</div>
<div className="bg-[#0c0c0c] border border-[#333333] p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 left-0 bg-[#CCFF00] text-black text-[10px] font-bold px-2 py-1 uppercase">
                    // Input_Vehicle_Data
                </div>
<form className="space-y-12 mt-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="group">
<label className="block text-[10px] text-[#555] mb-2 uppercase tracking-widest group-focus-within:text-[#CCFF00]">VIN / Serial Number</label>
<input className="w-full bg-transparent border-b border-[#333] py-2 text-lg font-mono text-[#E0E0E0] outline-none focus:border-[#CCFF00] transition-colors placeholder-[#222]" placeholder="ENTER VIN..." type="text"/>
</div>
<div className="group">
<label className="block text-[10px] text-[#555] mb-2 uppercase tracking-widest group-focus-within:text-[#CCFF00]">Mileage</label>
<input className="w-full bg-transparent border-b border-[#333] py-2 text-lg font-mono text-[#E0E0E0] outline-none focus:border-[#CCFF00] transition-colors placeholder-[#222]" placeholder="000000" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] text-[#555] mb-2 uppercase tracking-widest group-focus-within:text-[#CCFF00]">Modifications / Notes</label>
<textarea className="w-full bg-transparent border-b border-[#333] py-2 text-lg font-mono text-[#E0E0E0] outline-none focus:border-[#CCFF00] transition-colors placeholder-[#222] resize-none" placeholder="LIST MODS..." rows="1"></textarea>
</div>
<div className="flex justify-end">
<button className="group relative px-8 py-4 bg-[#111] border border-[#333] hover:border-[#CCFF00] overflow-hidden transition-all duration-300" type="button">
<span className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#E0E0E0] group-hover:text-[#CCFF00]">Transmit Data</span>
<div className="absolute top-0 left-0 h-full w-[2px] bg-[#CCFF00] group-hover:w-full transition-all duration-500 opacity-10"></div>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-[#333333] py-12 px-6 text-[10px] uppercase tracking-widest text-[#444] flex flex-col md:flex-row justify-between items-center gap-4">
<div>
            © 2024 MECH_EMOTION SYSTEMS. ALL RIGHTS RESERVED.
        </div>
<div className="flex gap-6">
<a className="hover:text-[#CCFF00] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#CCFF00] transition-colors" href="#">Twitter</a>
<a className="hover:text-[#CCFF00] transition-colors" href="#">Legal</a>
</div>
</footer>

    </>
  );
}
