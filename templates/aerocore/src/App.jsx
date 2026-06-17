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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '19px 19px'}}></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '48px 96px'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/0 to-neutral-950/80"></div>
</div>

<div className="fixed inset-0 w-full max-w-[1600px] mx-auto z-0 pointer-events-none border-x border-white/5">
<div className="absolute top-0 left-1/4 h-full w-px bg-white/5 hidden lg:block"></div>
<div className="absolute top-0 left-3/4 h-full w-px bg-white/5 hidden lg:block"></div>
</div>

<header className="relative z-50 w-full max-w-[1600px] mx-auto border-b border-white/5 backdrop-blur-sm">
<div className="px-6 md:px-8 h-20 flex items-center justify-between">

<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-yellow-400 text-neutral-950 flex items-center justify-center font-display font-bold text-lg tracking-tighter">
                    AC
                </div>
<div className="hidden md:flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight uppercase text-white">Aerocore</span>
<span className="text-[10px] text-neutral-500 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">v2.0</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
<a className="text-white hover:text-yellow-400 transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Collections</a>
<a className="hover:text-white transition-colors" href="#">Technology</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:search" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:user" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</button>
<div className="h-4 w-px bg-neutral-800"></div>
<button className="flex items-center gap-2 text-xs font-medium text-white group">
                    Cart (0)
                    <svg aria-hidden="true" className="iconify w-4 h-4 text-yellow-400 group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:chevron-right" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<main className="relative z-10 w-full max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 flex-grow flex flex-col justify-center">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px] z-0 gap-x-6 gap-y-6">

<div className="lg:col-span-9 overflow-hidden flex flex-col group bg-[#2A2A2A] h-full border-white/5 border rounded-sm relative justify-between">

<div className="absolute top-8 left-8 right-8 h-px bg-white/10 z-20"></div>
<div className="absolute bottom-8 left-8 right-8 h-px bg-white/10 z-20"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen"></div>

<div className="flex z-0 select-none overflow-hidden absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<h1 className="font-display text-[16vw] leading-none font-bold text-neutral-900 tracking-tighter whitespace-nowrap opacity-60">
                        AERO.DYN
                    </h1>
</div>

<div className="absolute inset-0 z-10 pointer-events-none">
<img alt="Runner" className="w-full h-full object-cover object-top opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64c72b95-d11e-48c2-9c3d-74ca506191a8_1600w.webp" style={{maskImage: 'linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-transparent to-transparent"></div>
</div>

<div className="relative z-20 px-8 py-10 flex justify-between items-start">
<div className="flex flex-col gap-1">
<span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest">System Status</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs text-neutral-400 font-mono">Online / Active</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-2 pr-6 rounded-full border border-white/5 hover:border-yellow-400/50 transition-colors cursor-pointer group-card">
<div className="w-10 h-10 rounded-full bg-yellow-400 overflow-hidden">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7279d8d-f598-4fd6-9343-5f6827402adb_320w.webp" style={{}}/>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-400 uppercase">Featured</span>
<span className="text-xs font-bold text-white">Velocity Jacket</span>
</div>
</div>
</div>

<div className="relative z-20 mt-auto px-8 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-7xl font-medium text-white leading-[0.9] tracking-tight mb-6 font-display">
                            DEFY  <span className="text-neutral-500">GRAVITY</span>
</h2>
<div className="flex flex-wrap items-center gap-4">
<button className="h-12 px-8 bg-yellow-400 text-neutral-950 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                                Shop Now
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-12 px-8 border border-neutral-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors backdrop-blur-sm">
                                Tech Specs
                            </button>
</div>
</div>

<div className="flex flex-col items-end gap-4">
<div className="flex items-end text-6xl font-display text-white/10 leading-none select-none">
<span className="text-yellow-400">01</span>
<span className="text-3xl mb-1 mx-2 text-neutral-700">/</span>
<span className="">03</span>
</div>
<div className="flex gap-2">
<div className="w-12 h-1 bg-yellow-400"></div>
<div className="w-12 h-1 bg-neutral-800 hover:bg-neutral-600 transition-colors cursor-pointer"></div>
<div className="w-12 h-1 bg-neutral-800 hover:bg-neutral-600 transition-colors cursor-pointer"></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-6 h-full">

<div className="bg-[#1F1F1F] rounded-sm p-8 flex flex-col justify-between relative overflow-hidden flex-1 border border-white/5 group hover:border-yellow-400/30 transition-colors">
<div className="opacity-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b48e9da-c442-4a86-a037-1a3b1d59a129_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="px-2 py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-bold uppercase tracking-wider">
                            Limited Offer
                        </span>
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:tag" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<div className="relative z-10 mt-4">
<div className="text-5xl font-display font-medium text-white mb-2">-50%</div>
<p className="text-xs text-neutral-400 leading-relaxed">End of season clearance on all performance footwear.</p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-xs font-medium text-white">View Offers</span>
<svg aria-hidden="true" className="iconify w-4 h-4 text-white iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-neutral-900 rounded-sm p-8 relative overflow-hidden flex-1 border border-white/5 group hover:border-white/20 transition-colors">
<div className="absolute inset-0">
<img alt="Woman" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d35b340e-2229-4da1-8b6e-5682001c6fd0_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
</div>
<div className="relative z-20 h-full flex flex-col justify-end">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                            New Arrivals
                        </h3>
<p className="text-xs text-neutral-400 mb-4">The new technical fleece collection.</p>
<button className="w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                            Explore
                        </button>
</div>
</div>
</div>
</div>

</main><section className="md:p-6 lg:p-8 w-full max-w-[1600px] z-10 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 relative">

<div className="absolute inset-y-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 pointer-events-none z-0">
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#1F1F1F] rounded-sm p-6 flex flex-col justify-between h-64 border border-white/5 group hover:border-yellow-400/30 transition-all duration-300">
<div className="flex justify-between items-start">
<svg aria-hidden="true" className="iconify text-yellow-400 w-8 h-8 iconify--solar" data-icon="solar:users-group-rounded-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="6" r="4"></circle><path d="M15 9a3 3 0 1 0 0-6" strokeLinecap="round"></path><ellipse cx="9" cy="17" rx="7" ry="4"></ellipse><path d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" strokeLinecap="round"></path></g></svg>
<span className="font-display text-white/10 text-2xl font-bold">01</span>
</div>
<div className="">
<div className="flex -space-x-3 mb-4">
<img alt="Pilot" className="w-10 h-10 rounded-full border-2 border-[#1F1F1F] grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" style={{}}/>
<img alt="Eng" className="w-10 h-10 rounded-full border-2 border-[#1F1F1F] grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" style={{}}/>
<img alt="Nav" className="w-10 h-10 rounded-full border-2 border-[#1F1F1F] grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" style={{}}/>
</div>
<h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Flight Crew</h3>
<p className="text-[10px] text-neutral-400 font-mono">Elite pilots &amp; engineers.</p>
</div>
</div>

<div className="lg:col-span-2 bg-[#1F1F1F] rounded-sm p-6 flex flex-col justify-between h-64 border border-white/5 group hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex justify-between items-start relative z-10">
<svg aria-hidden="true" data-icon="solar:flame-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.011c0-1.95-1.644-4.254-2.928-5.674c-.293-.325-.805-.11-.821.328c-.053 1.449-.282 3.388-1.268 4.907a.412.412 0 0 1-.677.037c-.308-.39-.616-.872-.924-1.252c-.166-.205-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .99.472 2.22.958 3.174c.22.433-.189.941-.61.698C6.246 20.309 4 18.107 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
<span className="font-display text-white/10 text-2xl font-bold">02</span>
</div>
<div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="max-w-xs">
<h3 className="text-xl font-display font-medium text-white mb-2">Thermodynamic Analysis</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Explore our most recent stress tests on the Mark IV heat shield composites.</p>
</div>
<button className="h-10 px-6 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2 w-fit">
                    Read Log
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col justify-center h-64 px-4 lg:pl-8">
<span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest mb-4">Meet Aerocore</span>
<h2 className="text-3xl md:text-4xl font-display font-medium text-white leading-tight tracking-tight mb-4">
                Empowering 
                <span className="text-neutral-500">hyper-sonic</span> 
                exploration.
            </h2>
</div>

<div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1F1F1F] to-neutral-900 rounded-sm p-8 flex flex-col justify-between min-h-[300px] border border-white/5 group hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center border border-white/5 mb-6 shadow-2xl shadow-black/50 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" data-icon="solar:mailbox-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M10.5 22v-2m4 2v-2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M11 20v.75h.75V20zm3-.75a.75.75 0 0 0 0 1.5zm3.5-14a.75.75 0 0 0 0 1.5zM7 5.25a.75.75 0 0 0 0 1.5zm2 14a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm-4.75-9.5V20h1.5v-8.75zm.75 8H4.233v1.5H11zm-8.25-1.855V11.25h-1.5v6.145zm1.483 1.855c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355zM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5zm14.75 6v6.175h1.5V11.25zm-1.457 8H14v1.5h5.793zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5zM7 6.75h11v-1.5H7zm2 14h6v-1.5H9z" fill="currentColor"></path><path d="M5 16h3m8-6.116V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.44.44 0 0 1 .542.427v2.221a.51.51 0 0 1-.393.499l-.066.016a3.2 3.2 0 0 1-1.9-.125a3.2 3.2 0 0 0-1.755-.156z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></g></svg>
</div>
<span className="font-display text-white/10 text-4xl font-bold absolute top-0 right-0">03</span>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-display font-medium text-white mb-2">Transmission Log</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">Stay informed with our latest firmware updates, telemetry data, and orbital trajectory adjustments sent directly to your dashboard.</p>
<div className="mt-8 flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Latest Build</span>
<span className="text-xs font-mono text-white">v4.2.0-alpha</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Status</span>
<span className="text-xs font-mono text-green-400">Stable</span>
</div>
</div>
</div>
</div>

<div className="bg-yellow-400 rounded-sm p-6 flex flex-col justify-between h-64 border border-yellow-400 group relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-black/10">
<svg aria-hidden="true" className="iconify w-32 h-32 iconify--solar" data-icon="solar:graph-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<div className="relative z-10">
<h3 className="text-6xl font-display font-bold text-neutral-950 tracking-tighter">50<span className="text-4xl align-top">+</span></h3>
<p className="text-xs font-bold text-neutral-800 uppercase tracking-widest mt-2">Active Modules</p>
</div>
<div className="relative z-10 mt-auto">
<p className="text-[10px] text-neutral-900 font-medium leading-tight">Explore our diverse range of propulsion categories and flight systems.</p>
</div>
</div>

<div className="bg-[#1F1F1F] rounded-sm p-6 flex flex-col justify-center h-64 border border-white/5 group hover:border-yellow-400/30 transition-all duration-300">
<span className="iconify text-neutral-600 w-8 h-8 mb-4" data-icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5'}}></span>
<p className="text-lg text-white font-medium tracking-tight mb-6">"A world-class engineering marvel for the next generation of space travel."</p>
<div>
<span className="block text-xs font-bold text-white uppercase tracking-widest">Dr. Aris Thorne</span>
<span className="block text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Chief Engineer, Aerocore</span>
</div>
</div>

<div className="bg-[#1F1F1F] rounded-sm p-6 flex flex-col justify-between h-64 border border-white/5 group hover:border-yellow-400/30 transition-all duration-300">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center border border-white/5 group-hover:bg-neutral-700 transition-colors">
<svg aria-hidden="true" data-icon="solar:map-point-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
</div>
<div className="">
<h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Global Telemetry</h3>
<p className="text-[10px] text-neutral-400 font-mono">Tracking nodes active in 12 regions.</p>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-yellow-400"></div>
</div>
</div>

<div className="bg-[#1F1F1F] rounded-sm p-6 flex flex-col justify-between h-64 border border-white/5 group hover:border-yellow-400/30 transition-all duration-300">
<div className="flex justify-between items-start">
<svg aria-hidden="true" className="iconify text-yellow-400 w-12 h-12 -ml-2 iconify--solar" data-icon="solar:bolt-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<div>
<h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Join the Fleet</h3>
<p className="text-[10px] text-neutral-400 leading-relaxed mb-4">Become a certified operator and write your own journey.</p>
<button className="text-xs text-white border-b border-yellow-400 pb-0.5 hover:text-yellow-400 transition-colors">Apply Now</button>
</div>
</div>
</div>

<div className="relative z-10 mt-16 pt-10 border-t border-white/5">
<p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-8 text-center md:text-left">Trusted by Industry Leaders</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 hover:opacity-100 transition-opacity duration-500 opacity-40 gap-x-8 gap-y-8 items-center justify-items-center">

<svg aria-hidden="true" className="iconify hover:text-yellow-400 transition-colors iconify--simple-icons w-[96px] h-[96px]" data-icon="simple-icons:spacex" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '96px', height: '96px', color: 'rgb(250, 204, 21)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417m-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="w-[96px] h-[96px]" data-icon="simple-icons:nasa" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '96px', height: '96px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.344 13.598c.075.281.195.39.407.39c.22 0 .335-.132.335-.39V8.804h1.379v4.794c0 .675-.088.968-.43 1.31c-.247.248-.703.439-1.278.439c-.464 0-.909-.154-1.192-.438c-.249-.25-.386-.505-.599-1.311l-.846-3.196c-.074-.281-.194-.39-.406-.39c-.22 0-.336.132-.336.39v4.794H0v-4.794c0-.675.088-.968.43-1.31c.247-.248.703-.439 1.278-.439c.464 0 .909.154 1.192.438c.249.25.385.505.599 1.311zm18.231 1.598l-1.591-4.98a.4.4 0 0 0-.06-.132a.23.23 0 0 0-.186-.082a.23.23 0 0 0-.185.082a.4.4 0 0 0-.06.132l-1.591 4.98h-1.425l1.739-5.44c.09-.283.22-.524.384-.684c.282-.275.614-.419 1.138-.419c.525 0 .857.144 1.139.42c.164.16.294.4.384.683L24 15.196zm-7.044 0c.903 0 1.344-.192 1.692-.538c.385-.383.569-.802.569-1.427c0-.553-.202-1.064-.51-1.37c-.403-.4-.903-.527-1.719-.527h-1.142c-.436 0-.61-.053-.748-.188c-.094-.093-.139-.23-.139-.393c0-.168.04-.334.156-.448c.103-.1.243-.147.511-.147h3.301V8.804h-3.049c-.903 0-1.343.192-1.691.538c-.385.383-.57.802-.57 1.427c0 .553.203 1.064.51 1.37c.404.4.904.527 1.72.527h1.141c.437 0 .61.053.748.188c.095.093.14.23.14.393c0 .169-.041.335-.157.448c-.102.1-.242.147-.51.147h-3.405l-1.306-4.086c-.09-.283-.22-.524-.384-.684c-.282-.275-.615-.419-1.139-.419s-.857.144-1.138.42c-.165.16-.294.4-.385.683l-1.738 5.44h1.424l1.592-4.98a.4.4 0 0 1 .06-.132a.23.23 0 0 1 .185-.082q.121 0 .186.082a.4.4 0 0 1 .06.132l1.591 4.98z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="w-[96px] h-[96px]" data-icon="simple-icons:boeing" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="activision" height="96" role="img" strokeWidth="2" style={{color: 'rgb(245, 245, 245)', width: '96px', height: '96px'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg"><path d="M1.88 8.91L0 14.284h.985l.27-.718h1.252l.269.718h.985zm3.224.359l-.537.984h2.15v4.03H7.7v-4.03h1.522l1.882 4.837l1.791-4.837h4.567l-.537-.984H12.18l-1.074 2.865L9.94 9.269zm16.21 1.163v3.762h.986v-1.523l1.7 1.702v-3.76h-.896v1.342zm-15.94.09c-1.075 0-1.881.807-1.881 1.881c0 1.075.806 1.88 1.88 1.88c.448 0 .895-.179 1.164-.447L6 12.94c-.18.18-.358.27-.627.27a.897.897 0 0 1-.895-.896c0-.448.358-.896.895-.896c.18 0 .448.089.537.268l.627-.715c-.27-.269-.716-.448-1.164-.448zm7.522 0v3.672h.985v-3.671zm2.148 0c-.358 0-.804.18-.804.896c0 .896 1.074 1.433.985 1.792c-.09.179-.27.178-.359.178h-.626v.806h1.074c.448 0 .895-.269.895-.806c0-.985-1.253-1.611-.984-1.97c0-.09.178-.09.178-.09h.628v-.805zm1.255 0v3.672h.984v-3.671zm3.045 0c-1.075 0-1.88.807-1.88 1.881c0 .985.805 1.88 1.88 1.88s1.88-.805 1.88-1.88s-.806-1.88-1.88-1.88zm-11.016.09v3.672h.986v-3.672zm11.016.896c.448 0 .895.358.895.895a.897.897 0 0 1-.895.896c-.538 0-.985-.358-.896-.896c0-.448.358-.895.896-.895m-17.464.178l.27.896h-.54z" fill="#f5f5f5"></path></svg>
<svg aria-hidden="true" className="w-[96px] h-[96px]" data-icon="simple-icons:airbus" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '96px', height: '96px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.067 11.296c0-.815-.53-1.433-1.63-1.433H7.226v4.262h1.037v-3.336h1.174c.432 0 .593.248.593.532c0 .296-.16.53-.593.53h-1l1.432 2.274h1.186s-.976-1.532-.963-1.532c.592-.136.975-.556.975-1.297m-5.57-1.433h1.037v4.262H5.497Zm-3.323 0L0 14.137h1.173l.346-.716h1.754l-.432-.902h-.877l.642-1.31h.013l1.457 2.928h1.198L3.1 9.863Zm12.685 2.05c.334-.185.507-.469.507-.901c0-.692-.519-1.149-1.371-1.149H11.56v4.262h2.52c.877 0 1.458-.47 1.458-1.199a1.02 1.02 0 0 0-.68-1.013m-2.26-1.148h1.383c.21 0 .37.16.37.37s-.16.37-.37.37H12.6zm1.42 2.47H12.6v-.864h1.42a.433.433 0 1 1 0 .864m4.805-.988c0 .642-.296 1-.889 1c-.58 0-.877-.358-.877-1V9.863h-1.062v2.31c0 1.322.692 2.05 1.951 2.05s1.952-.728 1.952-2.05v-2.31h-1.062v2.384zm3.842-.68c-.988-.234-1.198-.259-1.198-.543c0-.222.247-.32.667-.32c.556 0 1.136.135 1.47.345l.333-.865c-.445-.247-1.062-.407-1.803-.407c-1.1 0-1.717.543-1.717 1.284c0 .79.457 1.112 1.52 1.334c.827.186 1 .297 1 .531c0 .247-.223.359-.68.359a3.5 3.5 0 0 1-1.704-.42l-.321.914c.518.271 1.284.444 2.05.444c1.075 0 1.717-.494 1.717-1.334c.012-.679-.42-1.111-1.334-1.321" fill="currentColor"></path></svg>
</div>
</div>
</section><section className="md:p-6 lg:p-8 z-10 w-full max-w-[1600px] mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 relative">

<div className="absolute inset-y-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 pointer-events-none z-0">
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12 border-b border-white/5 pb-6">
<h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight">Log</h2>
<p className="text-xs md:text-sm text-neutral-400 font-light max-w-xs text-left md:text-right leading-relaxed">
            Notes about avionics, deep-space telemetry, propulsion systems, and life in orbit.
        </p>
</div>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-24 items-center">

<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-8">
<span className="text-xs font-mono font-medium text-white">Latest</span>
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
<span className="text-xs font-mono text-neutral-500">March 6, 2025</span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[0.95] tracking-tight mb-6">
                The Future of 
                <span className="text-neutral-500">Navigation:</span> Trends 
                to Watch in 2035
            </h3>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-md mb-8">
                Fleets that adapt to these quantum-guidance protocols will stay relevant, competitive, and positioned for long-term interstellar success. Let's explore the key navigation trends shaping the future of the Aerocore program.
            </p>
<button className="px-5 py-2 border border-white/20 rounded-full text-[10px] font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-colors">
                Systems
            </button>
</div>

<div className="w-full relative group">
<div className="relative aspect-[4/3] bg-[#1F1F1F] rounded-sm overflow-hidden border border-white/5">
<img alt="Space Tech" className="group-hover:scale-105 transition-transform duration-700 filter contrast-125 group-hover:saturate-100 opacity-80 w-full h-full object-cover saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc00e002-f58a-48fe-aae7-ca1ccb836e07_1600w.webp" style={{}}/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 z-20">
<span className="font-display text-white/30 text-5xl font-semibold">01</span>
</div>
<div className="absolute bottom-6 left-6 z-20">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-yellow-400">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--solar" data-icon="solar:compass-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="m10.5 13.5l-2.028 2.028a.6.6 0 0 0 .167.973l4.639 1.855a.6.6 0 0 0 .783-.783l-1.855-4.639a.6.6 0 0 0-.973-.167z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="m13.5 10.5l2.028-2.028a.6.6 0 0 0-.167-.973l-4.639-1.855a.6.6 0 0 0-.783.783l1.855 4.639a.6.6 0 0 0 .973.167z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 w-full h-px bg-white/5 hidden lg:block"></div>

<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-8">
<span className="text-xs font-mono font-medium text-white">Archived</span>
<span className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></span>
<span className="text-xs font-mono text-neutral-500">February 24, 2025</span>
</div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[0.95] tracking-tight mb-6">
                Orbital 
                <span className="text-neutral-500">Mechanics:</span> The Art 
                of Gravity Assists
            </h3>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-md mb-8">
                Leveraging planetary gravity wells to conserve fuel remains the cornerstone of long-distance trajectory planning. New simulation models suggest efficiency gains of up to 14% for deep-space missions.
            </p>
<button className="px-5 py-2 border border-white/20 rounded-full text-[10px] font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-colors">
                Physics
            </button>
</div>

<div className="w-full relative group">
<div className="relative aspect-[4/3] bg-[#1F1F1F] rounded-sm overflow-hidden border border-white/5">
<img alt="Orbital Simulation" className="group-hover:scale-105 transition-transform duration-700 filter contrast-125 group-hover:saturate-100 opacity-80 w-full h-full object-cover saturate-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b795adb-ad80-41d3-a178-49d3af0168f8_1600w.webp"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 z-20">
<span className="font-display text-white/30 text-5xl font-semibold">02</span>
</div>
<div className="absolute bottom-6 left-6 z-20">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-yellow-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-20 flex justify-center w-full border-t border-white/5 pt-12">
<button className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 border border-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/5">
<span>Load Archives</span>
<svg className="group-hover:translate-y-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</div>
</section><footer className="md:p-6 lg:p-8 z-10 w-full max-w-[1600px] mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 relative">

<div className="absolute inset-y-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 pointer-events-none z-0">
<div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
<div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
</div>

<div className="relative z-10 py-24 lg:py-32 flex flex-col items-center justify-center text-center border-b border-white/5 mb-8">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>
<h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight mb-6 relative z-10">
            Ready for <span className="text-neutral-500">Liftoff?</span>
</h2>
<p className="text-sm md:text-base text-neutral-400 max-w-lg leading-relaxed mb-10 relative z-10 font-light">
            Join the elite squadron of data-driven pilots creating the future of interstellar travel and propulsion.
        </p>
<button className="group relative z-10 px-8 py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-yellow-400 transition-colors rounded-sm flex items-center gap-3">
<span>Initialize Sequence</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>

<div className="relative z-10 bg-[#1F1F1F] rounded-sm p-8 md:p-12 border border-white/5 overflow-hidden group">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 text-[18vw] font-display font-bold text-white/[0.02] tracking-tighter select-none pointer-events-none whitespace-nowrap group-hover:text-white/[0.04] transition-colors duration-700">
            AEROCORE
        </div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
<div className="flex flex-col items-start gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-yellow-400 text-neutral-950 flex items-center justify-center font-display font-semibold text-lg tracking-tighter">
                            AC
                        </div>
<span className="text-xl font-display font-medium text-white tracking-tight uppercase">Aerocore</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed max-w-xs font-light">
                        Aerocore empowers deep-space telemetry teams to transform raw sensor data into clear, actionable flight paths — making the unknown navigable.
                    </p>

<div className="flex items-center gap-6 mt-2">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--simple-icons" data-icon="simple-icons:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z" fill="currentColor"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--simple-icons" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--simple-icons" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--simple-icons" data-icon="simple-icons:github" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 border-b border-white/5 pb-2 w-fit pr-4">
<span className="text-[10px] font-mono text-yellow-400">01</span>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest">Platform</h4>
</div>
<ul className="flex flex-col gap-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Telemetry Analysis</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Propulsion Logs</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Navigation Systems</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Life Support</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 border-b border-white/5 pb-2 w-fit pr-4">
<span className="text-[10px] font-mono text-yellow-400">02</span>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest">Research</h4>
</div>
<ul className="flex flex-col gap-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Documentation</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">API Status</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Flight Manuals</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Community</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 border-b border-white/5 pb-2 w-fit pr-4">
<span className="text-[10px] font-mono text-yellow-400">03</span>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest">Command</h4>
</div>
<ul className="flex flex-col gap-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Mission Control</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Press Releases</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] text-neutral-500 font-mono">© 2035 Aerocore Systems. All rights reserved.</span>
<div className="flex items-center gap-6">
<a className="text-[10px] text-neutral-500 hover:text-white transition-colors font-mono uppercase tracking-wider" href="#">Privacy Protocol</a>
<a className="text-[10px] text-neutral-500 hover:text-white transition-colors font-mono uppercase tracking-wider" href="#">Service Terms</a>
<a className="text-[10px] text-neutral-500 hover:text-white transition-colors font-mono uppercase tracking-wider" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
