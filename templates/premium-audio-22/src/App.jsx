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
      

<nav className="fixed top-0 w-full z-50 bg-lux-black/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl tracking-tighter hover:text-lux-gold transition-colors duration-300 font-instrument-serif font-normal text-white" href="#">
                CX<span className="text-lux-gold font-instrument-serif font-normal">.</span>AUDIO
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="transition-colors font-sans hover:text-white" href="#inventory">AMPLIFIERS</a>
<a className="transition-colors font-sans hover:text-white" href="#showroom">LISTENING ROOM</a>
<a className="transition-colors font-sans hover:text-white" href="#finance">PURCHASE OPTIONS</a>
<a className="transition-colors font-sans hover:text-white" href="#consign">TRADE-IN</a>
</div>
<div className="flex items-center gap-4">
<button aria-label="Search" className="p-2 rounded-full transition-colors group hover:bg-white/5">
<svg aria-hidden="true" className="iconify group-hover:text-lux-gold iconify--lucide text-neutral-400" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button aria-label="Members" className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-full hover:border-lux-gold/50 hover:bg-lux-gold/10 transition-all duration-300 group border-white/10">
<svg aria-hidden="true" className="iconify text-lux-gold iconify--lucide" data-icon="lucide:user" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-xs font-medium group-hover:text-lux-gold font-sans text-white">CLIENTS</span>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-lux-charcoal">
<img alt="Premium amplifier in a dark listening room" className="w-full h-full object-cover opacity-60 scale-105 animate-pulse" src="https://images.unsplash.com/photo-1673855082535-464bc5e2909f?w=3840&amp;q=80" style={{animationDuration: '10s'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/50 to-transparent"></div>
<div className="bg-gradient-to-r from-lux-black/80 via-transparent to-lux-black/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 animate-fade-in">
<p className="text-lux-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6 font-sans">Reference-Grade Amplification</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-8 font-instrument-serif font-normal text-white">
                Power, refined. <br/><span className="font-instrument-serif font-normal text-neutral-200">Silence, absolute.</span>
</h1>
<p className="text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light font-sans text-neutral-400">
                CX Audio designs amplifiers for listeners who measure performance by what you can’t hear: vanishing noise, effortless control, and a stage that feels real.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<button className="group relative px-8 py-4 text-lux-black text-sm font-semibold tracking-wide overflow-hidden transition-all hover:bg-lux-gold bg-white">
<span className="relative z-10 flex items-center gap-2 font-sans">
                        EXPLORE AMPLIFIERS
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<button className="px-8 py-4 border text-sm font-medium tracking-wide hover:border-lux-gold hover:text-lux-gold transition-all duration-300 backdrop-blur-sm font-sans border-white/20 text-white">
                    BOOK A LISTENING SESSION
                </button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] tracking-widest uppercase font-sans">Scroll</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</header>

<section className="border-y bg-lux-charcoal py-12 border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center border-r last:border-0 border-white/5">
<div className="text-3xl md:text-4xl mb-2 font-instrument-serif font-normal text-white">0.5<span className="text-lux-gold font-instrument-serif font-normal">µV</span></div>
<div className="text-xs tracking-widest uppercase text-neutral-500 font-sans">Noise Floor</div>
</div>
<div className="text-center border-r last:border-0 border-white/5">
<div className="text-3xl md:text-4xl mb-2 font-instrument-serif font-normal text-white">600<span className="text-lux-gold font-instrument-serif font-normal">W</span></div>
<div className="text-xs tracking-widest uppercase text-neutral-500 font-sans">Peak Channel Power</div>
</div>
<div className="text-center border-r last:border-0 border-white/5">
<div className="text-3xl md:text-4xl mb-2 font-instrument-serif font-normal text-white">0.00<span className="text-lux-gold font-instrument-serif font-normal">2</span>%</div>
<div className="text-xs tracking-widest uppercase text-neutral-500 font-sans">Ultra-Low THD+N</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl mb-2 font-instrument-serif font-normal text-white">10<span className="text-lux-gold font-instrument-serif font-normal">yr</span></div>
<div className="text-xs tracking-widest uppercase text-neutral-500 font-sans">Warranty &amp; Concierge</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="inventory">
<div className="flex flex-col md:flex-row gap-6 mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl mb-4 tracking-tight font-instrument-serif font-normal text-white">Amplifier Collection</h2>
<p className="text-neutral-500 text-sm max-w-md font-sans">From intimate nearfield systems to full-range reference rooms—choose the topology that matches your taste.</p>
</div>
<div className="flex items-center gap-4">
<button aria-label="Grid view" className="p-2 rounded border hover:border-lux-gold hover:text-lux-gold transition-all text-white bg-white/5 border-white/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</button>
<button aria-label="List view" className="p-2 text-neutral-500 transition-all hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:list" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12 gap-x-12 gap-y-12">

<aside className="lg:w-64 shrink-0 w-full space-y-10">
<div className="relative">
<input className="w-full bg-lux-panel border text-sm px-4 py-3 rounded focus:outline-none focus:border-lux-gold transition-colors placeholder:text-neutral-600 border-white/10 text-white" placeholder="Search amplifier..." type="text"/>
<svg aria-hidden="true" className="iconify absolute right-3 top-3.5 iconify--lucide text-neutral-600" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-4 font-sans text-white">Series</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors border-neutral-600">
<div className="w-2 h-2 bg-lux-gold opacity-0 group-hover:opacity-50 checkbox-checked:opacity-100"></div>
</div>
<span className="text-sm group-hover:text-white transition-colors font-sans text-neutral-400">Reference</span>
<span className="ml-auto text-xs font-sans text-neutral-600">04</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors border-neutral-600">
<div className="w-2 h-2 bg-lux-gold opacity-100"></div>
</div>
<span className="text-sm font-sans text-white">Signature</span>
<span className="ml-auto text-xs font-sans text-neutral-600">12</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors border-neutral-600"></div>
<span className="text-sm group-hover:text-white transition-colors font-sans text-neutral-400">Studio</span>
<span className="ml-auto text-xs font-sans text-neutral-600">03</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="w-4 h-4 border rounded-sm flex items-center justify-center group-hover:border-lux-gold transition-colors border-neutral-600"></div>
<span className="text-sm group-hover:text-white transition-colors font-sans text-neutral-400">Heritage</span>
<span className="ml-auto text-xs font-sans text-neutral-600">06</span>
</label>
</div>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-4 font-sans text-white">Budget</h3>
<div className="flex items-center justify-between text-xs mb-2 text-neutral-400">
<span className="font-sans">$1.5k</span>
<span className="font-sans">$25k+</span>
</div>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-neutral-800" type="range"/>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-4 font-sans text-white">Topology</h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 text-xs font-medium border border-lux-gold text-lux-gold rounded hover:bg-lux-gold hover:text-lux-black transition-colors font-sans">Class AB</button>
<button className="px-3 py-1.5 text-xs font-medium border rounded transition-colors font-sans border-white/10 text-neutral-400 hover:border-white hover:text-white">Class D</button>
<button className="px-3 py-1.5 text-xs font-medium border rounded transition-colors font-sans border-white/10 text-neutral-400 hover:border-white hover:text-white">Mono</button>
</div>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
<article className="group relative bg-lux-panel border rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500 border-white/5">
<div className="relative h-64 overflow-hidden">
<div className="absolute top-4 right-4 z-20 bg-lux-black/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider border font-sans text-white border-white/10">Available</div>
<img alt="CX Audio CXR-9 reference stereo amplifier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1558590987-5331428c4b17?w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-lux-panel to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg> Detail View
                            </span>
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg> Spec Sheet
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="font-serif text-xl tracking-tight group-hover:text-lux-gold transition-colors font-sans text-white">CXR-9 Stereo Power</h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">Dual-mono supply • Balanced architecture</p>
</div>
<p className="font-medium font-sans text-white">$6,900</p>
</div>
<div className="h-px w-full my-4 bg-white/5"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">2×250W</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">&lt;0.002%</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:volume-2" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">120dB</span>
</div>
</div>
</div>
</article>
<article className="group relative bg-lux-panel border rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500 border-white/5">
<div className="relative h-64 overflow-hidden">
<img alt="CX Audio CXM-1 monoblock amplifier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1561701374-c5a6e9d842f6?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-panel to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg> Detail View
                            </span>
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg> Spec Sheet
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-serif text-xl tracking-tight group-hover:text-lux-gold transition-colors font-sans text-white">CXM-1 Monoblock</h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">High-current output • Micro-dynamics focus</p>
</div>
<p className="font-medium font-sans text-white">$9,800</p>
</div>
<div className="h-px w-full my-4 bg-white/5"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">600W</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">&lt;0.001%</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-[10px] uppercase font-sans">Mono</span>
</div>
</div>
</div>
</article>
<article className="group relative bg-lux-panel border rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500 border-white/5">
<div className="relative h-64 overflow-hidden">
<img alt="CX Audio CXI-7 integrated amplifier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1653633925228-3360da3365a7?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-lux-panel to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg> Detail View
                            </span>
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path className="" d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg> Spec Sheet
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="font-serif text-xl tracking-tight group-hover:text-lux-gold transition-colors font-sans text-white">CXI-7 Integrated</h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">Precision preamp stage • Remote-controlled relays</p>
</div>
<p className="font-medium font-sans text-white">$4,400</p>
</div>
<div className="h-px w-full my-4 bg-white/5"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">2×140W</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:volume-2" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">Phono</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plug" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5m3-9V2m2 6a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1zM9 8V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">Balanced</span>
</div>
</div>
</div>
</article>
<article className="group relative bg-lux-panel border rounded-sm overflow-hidden hover:border-lux-gold/30 transition-all duration-500 border-white/5">
<div className="relative h-64 overflow-hidden">
<img alt="CX Audio CXD-3 class D power amplifier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1558590987-fec611c944de?w=1600&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-lux-panel to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-lux-black/90 backdrop-blur-md border-t border-white/10">
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg> Detail View
                            </span>
<span className="text-xs uppercase tracking-wide cursor-pointer hover:text-lux-gold flex items-center gap-2 font-sans text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg> Spec Sheet
                            </span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="font-serif text-xl tracking-tight group-hover:text-lux-gold transition-colors font-sans text-white">CXD-3 Power</h3>
<p className="text-xs text-neutral-500 mt-1 font-sans">Fast transient response • Cool, compact chassis</p>
</div>
<p className="font-medium font-sans text-white">$3,200</p>
</div>
<div className="h-px w-full my-4 bg-white/5"></div>
<div className="flex justify-between items-center text-neutral-400">
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">2×220W</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] uppercase font-sans">Low Heat</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bolt" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"></path><circle cx="12" cy="12" r="4"></circle></g></svg>
<span className="text-[10px] uppercase font-sans">Class D</span>
</div>
</div>
</div>
</article>
</div>
</div>
<div className="flex mt-16 justify-center">
<button className="text-xs uppercase tracking-widest border-b border-transparent hover:border-lux-gold transition-all pb-1 font-sans text-neutral-400 hover:text-white">Load More Amplifiers</button>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="finance">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

<div className="space-y-8">
<div className="">
<h2 className="text-3xl mb-4 tracking-tight font-instrument-serif font-normal text-white">Purchase Options</h2>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">White-glove delivery, extended coverage, and flexible payments—configured to match the system you’re building.</p>
</div>
<div className="bg-lux-panel p-8 rounded-sm border space-y-8 border-white/5">
<div>
<div className="flex justify-between text-xs uppercase tracking-wide mb-3 text-white">
<span className="font-sans">Amplifier Price</span>
<span className="text-lux-gold font-sans">$6,900</span>
</div>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer mb-2 bg-neutral-800" type="range"/>
</div>
<div>
<div className="flex justify-between text-xs uppercase tracking-wide mb-3 text-white">
<span className="font-sans">Deposit (15%)</span>
<span className="text-lux-gold font-sans">$1,035</span>
</div>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer mb-2 bg-neutral-800" type="range"/>
</div>
<div>
<div className="flex justify-between text-xs uppercase tracking-wide mb-3 text-white">
<span className="font-sans">Term (Months)</span>
<span className="text-lux-gold font-sans">24</span>
</div>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer mb-2 bg-neutral-800" max="48" min="6" type="range" value="24"/>
</div>
<div className="pt-6 border-t flex items-end justify-between border-white/5">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-sans">Estimated Monthly</p>
<p className="text-xs mt-1 font-sans text-neutral-600">*Illustrative only • taxes vary by region</p>
</div>
<div className="text-3xl font-instrument-serif font-normal text-white">$268<span className="text-lg text-neutral-500 font-sans">/mo</span></div>
</div>
</div>
</div>

<div className="space-y-8" id="consign">
<div>
<h2 className="text-3xl mb-4 tracking-tight font-instrument-serif font-normal text-white">Trade-In &amp; Upgrade</h2>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">Move up to CX Audio with confidence. Submit your current amplifier for a preliminary trade-in estimate.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors font-sans">Year</label>
<input className="w-full bg-transparent border-b py-2 outline-none focus:border-lux-gold transition-colors font-medium border-neutral-800 text-white" placeholder="e.g., 2021" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors font-sans">Brand</label>
<input className="w-full bg-transparent border-b py-2 outline-none focus:border-lux-gold transition-colors font-medium border-neutral-800 text-white" placeholder="e.g., Accuphase" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors font-sans">Model</label>
<input className="w-full bg-transparent border-b py-2 outline-none focus:border-lux-gold transition-colors font-medium border-neutral-800 text-white" placeholder="e.g., E-480" type="text"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors font-sans">Condition</label>
<input className="w-full bg-transparent border-b py-2 outline-none focus:border-lux-gold transition-colors font-medium border-neutral-800 text-white" placeholder="Excellent / Good / Fair" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-lux-gold transition-colors font-sans">Serial (Optional)</label>
<input className="w-full bg-transparent border-b py-2 outline-none focus:border-lux-gold transition-colors font-medium border-neutral-800 text-white" placeholder="For verification" type="text"/>
</div>
</div>
<div className="pt-4">
<button className="w-full py-4 text-lux-black font-semibold text-sm tracking-wide hover:bg-lux-gold transition-colors flex justify-center items-center gap-2 font-sans bg-white" type="button">
                            REQUEST TRADE-IN ESTIMATE
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-lux-black pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-sm">
<a className="text-2xl tracking-tighter mb-6 block font-instrument-serif font-normal text-white" href="#">
                        CX<span className="text-lux-gold font-instrument-serif font-normal">.</span>AUDIO
                    </a>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 font-sans">
                        Precision-built amplifiers engineered for control, headroom, and effortless musicality—crafted to disappear and let recordings speak.
                    </p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-neutral-500 hover:text-lux-gold transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a aria-label="X" className="text-neutral-500 hover:text-lux-gold transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a aria-label="YouTube" className="text-neutral-500 hover:text-lux-gold transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg></a>
</div>
</div>
<div className="w-full md:w-auto">
<h3 className="text-2xl mb-6 tracking-tight font-instrument-serif font-normal text-white">Private Releases &amp; Studio Notes</h3>
<p className="text-neutral-500 text-sm mb-6 font-sans">Early access to limited builds, measurement briefs, and listening-room invitations.</p>
<div className="flex border-b pb-2 focus-within:border-lux-gold transition-colors border-white/20">
<input className="bg-transparent w-full md:w-80 outline-none placeholder:text-neutral-600 text-sm text-white" placeholder="Email address" type="email"/>
<button className="text-sm font-medium hover:text-lux-gold uppercase tracking-widest font-sans text-white">Join</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-12 text-sm border-white/5">
<div>
<h4 className="font-medium mb-4 font-sans text-white">Products</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">New Releases</a></li>
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">Reference Series</a></li>
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">Support &amp; Manuals</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 font-sans text-white">Company</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">About CX Audio</a></li>
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">Engineering</a></li>
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 font-sans text-white">Legal</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">Warranty</a></li>
<li><a className="hover:text-lux-gold transition-colors font-sans" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 font-sans text-white">Contact</h4>
<ul className="space-y-2 text-neutral-500">
<li className="font-sans">New York, NY</li>
<li className="font-sans">+1 (212) 555-0198</li>
<li className="font-sans">concierge@cxaudio.com</li>
</ul>
</div>
</div>
<div className="text-center text-xs mt-20 uppercase tracking-widest font-sans text-neutral-700">
                © 2026 CX Audio. All Rights Reserved.
            </div>
</div>
</footer>
<a aria-label="Chat with CX Audio" className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

    </>
  );
}
