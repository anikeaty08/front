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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
<div className="floating-dock bg-[#0a0a0a]/80 backdrop-blur-xl rounded-full px-2 py-2 flex items-center gap-1">
<a className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-tight hover:bg-gray-200 transition-colors uppercase" href="#">
                Wicket
            </a>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>
<a className="px-4 py-2 rounded-full text-neutral-400 text-xs font-medium hover:text-white transition-colors" href="#features">Features</a>
<a className="px-4 py-2 rounded-full text-neutral-400 text-xs font-medium hover:text-white transition-colors" href="#specs">Specs</a>
<a className="hidden sm:block px-4 py-2 rounded-full text-neutral-400 text-xs font-medium hover:text-white transition-colors" href="#contact">Contact</a>
<a className="ml-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</nav>
<main className="pt-32 pb-20">

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-24 relative">
<div className="flex flex-col items-center text-center space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Now Available for Pre-order
                </div>
<h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tighter leading-[0.95] text-white select-none">
                    Seamless<br/>
<span className="text-neutral-500">Access Control.</span>
</h1>
<p className="max-w-xl text-neutral-400 text-sm sm:text-base leading-relaxed tracking-tight font-light">
                    The first premium garage system with a fully integrated wicket door. Enter your space without opening the entire facade.
                </p>
<div className="pt-8">
<a className="inline-flex items-center gap-2 border-b border-white pb-1 text-sm text-white hover:text-neutral-400 hover:border-neutral-400 transition-colors tracking-tight" href="#explore">
                        Configure your Wicket
                        <iconify-icon icon="lucide:arrow-down" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 blur-3xl -z-10 pointer-events-none">
<div className="w-full h-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 rounded-full"></div>
</div>
</section>

<div className="w-full overflow-hidden border-y border-white/10 bg-[#080808] py-6 mb-24">
<div className="flex items-center justify-center gap-12 sm:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-white">SECURE ENTRY</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:thermometer" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-white">R-18 INSULATION</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-white">SMART LOCK</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:move" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-white">FLUSH FIT</span>
</div>
</div>
</div>

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-32" id="features">
<div className="flex justify-between items-end mb-8 px-2">
<h2 className="text-2xl font-medium tracking-tighter text-white">Product Features</h2>
<span className="text-xs text-neutral-500 font-mono">MODEL 01</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-neutral-800 border border-neutral-800">

<div className="group relative bg-black p-6 sm:p-10 h-[500px] flex flex-col justify-between overflow-hidden">
<div className="z-10 flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Integrated Pass Door</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Seamless Design</p>
</div>
</div>

<div className="absolute inset-0 top-24 m-6 rounded-lg bg-[#111] overflow-hidden border border-white/5 image-card">
<div className="w-full h-full relative flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-[#151515]">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>

<div className="relative w-[80%] h-[60%] bg-[#222] border border-white/10 shadow-2xl flex flex-col overflow-hidden">

<div className="flex-1 border-b border-black/50 w-full relative"></div>
<div className="flex-1 border-b border-black/50 w-full relative"></div>
<div className="flex-1 border-b border-black/50 w-full relative"></div>
<div className="flex-1 w-full relative"></div>

<div className="absolute left-[15%] bottom-0 w-[25%] h-[92%] border-x border-t border-white/10 bg-[#262626] door-panel transition-colors duration-500">

<div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-white/90 rounded-[1px] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

<div className="absolute top-[25%] w-full h-[1px] bg-black/50"></div>
<div className="absolute top-[50%] w-full h-[1px] bg-black/50"></div>
<div className="absolute top-[75%] w-full h-[1px] bg-black/50"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-black p-6 sm:p-10 h-[500px] flex flex-col justify-between overflow-hidden">
<div className="z-10 flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Biometric Access</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Security</p>
</div>
</div>
<div className="absolute inset-0 top-24 m-6 rounded-lg bg-neutral-900 overflow-hidden border border-white/5 image-card">
<div className="w-full h-full bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">

<div className="relative w-24 h-48 bg-[#1a1a1a] rounded border border-white/10 flex items-center justify-center shadow-2xl">

<div className="w-8 h-12 border border-white/20 rounded flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
<iconify-icon className="text-white/80 relative z-10" icon="lucide:fingerprint" width="24"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full"></div>
</div>
</div>
</div>

<div className="group relative bg-black p-6 sm:p-10 h-[500px] flex flex-col justify-between overflow-hidden">
<div className="z-10 flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Thermal Break</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Engineering</p>
</div>
</div>
<div className="absolute inset-0 top-24 m-6 rounded-lg bg-neutral-900 overflow-hidden border border-white/5 image-card">
<div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center relative">

<div className="flex gap-1 h-32 w-64 items-center">
<div className="h-full w-4 bg-neutral-700 rounded-l border-r border-black"></div>
<div className="h-full flex-1 bg-[#1a1a1a] flex flex-col justify-center gap-2 p-2 border-y border-white/10 relative">

<div className="absolute inset-0 noise opacity-30"></div>
<div className="w-full h-[1px] bg-white/10"></div>
<div className="w-full h-[1px] bg-white/10"></div>
<div className="w-full h-[1px] bg-white/10"></div>
</div>
<div className="h-full w-4 bg-neutral-600 rounded-r border-l border-black"></div>
</div>
</div>
</div>
</div>

<div className="group relative bg-black p-6 sm:p-10 h-[500px] flex flex-col justify-between overflow-hidden">
<div className="z-10 flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Architectural Cladding</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Materials</p>
</div>
</div>
<div className="absolute inset-0 top-24 m-6 rounded-lg bg-neutral-900 overflow-hidden border border-white/5 image-card">
<div className="w-full h-full relative">

<div className="grid grid-cols-2 h-full w-full">
<div className="bg-[#1c1c1c] border-r border-white/5 flex items-center justify-center">
<span className="text-white/20 text-xs tracking-widest -rotate-90">MATTE BLACK</span>
</div>
<div className="bg-[#2a2a2a] relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-20 noise bg-white mix-blend-overlay"></div>
<span className="text-white/20 text-xs tracking-widest -rotate-90">STONE VENEER</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-32" id="specs">
<div className="border-t border-white/10">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-b border-white/10">
<div className="p-8 sm:p-12 text-center group hover:bg-white/5 transition-colors">
<div className="text-3xl sm:text-4xl font-medium tracking-tighter text-white mb-2">0.14</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">U-Value</div>
</div>
<div className="p-8 sm:p-12 text-center group hover:bg-white/5 transition-colors">
<div className="text-3xl sm:text-4xl font-medium tracking-tighter text-white mb-2">20mm</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Threshold</div>
</div>
<div className="p-8 sm:p-12 text-center group hover:bg-white/5 transition-colors">
<div className="text-3xl sm:text-4xl font-medium tracking-tighter text-white mb-2">IP65</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Waterproof</div>
</div>
<div className="p-8 sm:p-12 text-center group hover:bg-white/5 transition-colors">
<div className="text-3xl sm:text-4xl font-medium tracking-tighter text-white mb-2">15yr</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Warranty</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-32">
<div className="flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/3">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-4">Specifications</h2>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                        Designed for architects and modern homes. Fully customizable to match your facade.
                    </p>
</div>
<div className="w-full md:w-2/3">
<div className="space-y-0">

<div className="group border-t border-white/10 py-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4">
<div className="flex flex-col">
<span className="text-lg text-white font-medium tracking-tight">Dimensions</span>
<span className="text-sm text-neutral-500 mt-1">Custom sizing up to 6m width</span>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:arrow-down" width="20"></iconify-icon>
</div>

<div className="group border-t border-white/10 py-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4">
<div className="flex flex-col">
<span className="text-lg text-white font-medium tracking-tight">Hardware</span>
<span className="text-sm text-neutral-500 mt-1">Hidden hinges, multi-point locking</span>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:arrow-down" width="20"></iconify-icon>
</div>

<div className="group border-t border-white/10 py-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4">
<div className="flex flex-col">
<span className="text-lg text-white font-medium tracking-tight">Automation</span>
<span className="text-sm text-neutral-500 mt-1">Compatible with Control4, Savant, HomeKit</span>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:arrow-down" width="20"></iconify-icon>
</div>

<div className="group border-t border-b border-white/10 py-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4">
<div className="flex flex-col">
<span className="text-lg text-white font-medium tracking-tight">Installation</span>
<span className="text-sm text-neutral-500 mt-1">Professional installation required</span>
</div>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:arrow-down" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12" id="contact">
<div className="relative rounded-3xl overflow-hidden bg-neutral-900 py-24 px-6 md:px-24 text-center">
<div className="absolute inset-0 opacity-20 noise mix-blend-overlay"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Upgrade your entrance.</h2>
<p className="text-neutral-400 max-w-lg mx-auto mb-10 text-sm">
                        Get a quote for your custom Wicket integrated door system today.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold tracking-tight hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                            Request Quote
                            <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium tracking-tight hover:bg-white/10 transition-all">
                            Download Brochure
                        </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-black pt-12 pb-12">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
<div>
<a className="text-2xl font-semibold tracking-tighter text-white block mb-6 uppercase" href="#">Wicket.</a>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Installers</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="flex flex-col md:items-end gap-2">
<p className="text-xs text-neutral-600 uppercase tracking-widest">Designed in Austria</p>
<p className="text-xs text-neutral-600">© 2024 Wicket Access Systems.</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
