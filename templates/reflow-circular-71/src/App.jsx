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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
}
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col items-center group leading-none select-none" href="#">
<span className="serif-logo text-3xl font-semibold tracking-tight text-stone-900 group-hover:opacity-80 transition-opacity">OOP</span>
<span className="text-[0.5rem] tracking-[0.25em] font-medium text-stone-500 uppercase mt-1 group-hover:text-stone-800 transition-colors">Industries</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight text-stone-600">
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Platform</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Infrastructure</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Logistics</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#">Company</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#">Client Login</a>
<button className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-sm text-xs font-medium hover:bg-stone-800 transition-all shadow-sm tracking-wide uppercase">
                    Get Access
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-stone-100/50 to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-stone-200 bg-white/50 text-stone-500 text-[11px] font-medium tracking-widest uppercase mb-10 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                System v1.0 Available
            </div>
<h1 className="serif-logo text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-stone-900 mb-8 leading-[1.05]">
                Closing the loop on <br className="hidden md:block"/>
<span className="text-stone-400 italic">infrastructure.</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed mb-12 tracking-tight">
                Reflow is the circular operating system for physical spaces. We capture resources, store them efficiently, and redistribute automatically within urban environments.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-white rounded-sm text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-stone-200">
                    Start Integration
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-stone-200 text-stone-900 rounded-sm text-sm font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                    Read Manifesto
                </button>
</div>
</div>

<div className="mt-24 relative max-w-3xl mx-auto h-[450px] border border-stone-200 rounded-t-[2rem] bg-white shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)] overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-stone-300 bg-stone-50/80 backdrop-blur-sm flex items-center justify-center z-20 shadow-xl">
<div className="text-center flex flex-col items-center">
<span className="serif-logo text-2xl font-bold text-stone-900">OOP</span>
<p className="text-[9px] text-stone-400 uppercase tracking-widest font-semibold mt-1">Reflow Core</p>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] border border-stone-200 rounded-full orbit-ring opacity-80">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-stone-200 px-3 py-1.5 rounded shadow-sm flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
<span className="text-[10px] text-stone-600 font-medium uppercase tracking-wide">Capture</span>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-stone-200 px-3 py-1.5 rounded shadow-sm flex items-center gap-2 rotate-180">
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
<span className="text-[10px] text-stone-600 font-medium uppercase tracking-wide">Distribute</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] border border-dashed border-stone-200 rounded-full orbit-ring opacity-40" style={{animationDuration: '90s'}}></div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
</div>
</main>

<section className="py-24 px-6 relative bg-white border-t border-stone-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="serif-logo text-3xl md:text-4xl text-stone-900 mb-4">Infrastructure, reimagined.</h2>
<p className="text-stone-500 font-light">We replace wasteful linear consumption with intelligent circular flows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-stone-50 p-10 rounded-xl relative overflow-hidden group border border-stone-100 hover:shadow-lg hover:border-stone-200 transition-all duration-500">
<div className="absolute top-8 right-8 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="iconify" data-icon="lucide:layers" data-width="140"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded bg-white flex items-center justify-center mb-6 border border-stone-200 shadow-sm">
<span className="iconify text-stone-800" data-icon="lucide:building-2" data-width="20"></span>
</div>
<h3 className="serif-logo text-2xl text-stone-900 mb-3">Embedded Infrastructure</h3>
<p className="text-sm text-stone-600 leading-relaxed max-w-sm font-light">
                                Reflow connects directly to physical intake points inside campuses and cities, capturing goods at the source before they enter the waste stream.
                            </p>
</div>
<div className="mt-12 flex gap-3">
<div className="px-3 py-1 rounded bg-white border border-stone-200 text-[10px] uppercase tracking-wider text-stone-500 font-medium">Universities</div>
<div className="px-3 py-1 rounded bg-white border border-stone-200 text-[10px] uppercase tracking-wider text-stone-500 font-medium">Municipalities</div>
</div>
</div>
</div>

<div className="bg-stone-50 p-10 rounded-xl relative overflow-hidden group border border-stone-100 hover:shadow-lg hover:border-stone-200 transition-all duration-500">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center mb-6 border border-stone-200 shadow-sm">
<span className="iconify text-stone-800" data-icon="lucide:container" data-width="20"></span>
</div>
<h3 className="serif-logo text-2xl text-stone-900 mb-3">Elastic Storage</h3>
<p className="text-sm text-stone-600 leading-relaxed font-light">
                        Intelligent warehousing logic that dynamically allocates space based on inflow velocity.
                    </p>
</div>

<div className="bg-stone-50 p-10 rounded-xl relative overflow-hidden group border border-stone-100 hover:shadow-lg hover:border-stone-200 transition-all duration-500">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center mb-6 border border-stone-200 shadow-sm">
<span className="iconify text-stone-800" data-icon="lucide:network" data-width="20"></span>
</div>
<h3 className="serif-logo text-2xl text-stone-900 mb-3">Smart Logistics</h3>
<p className="text-sm text-stone-600 leading-relaxed font-light">
                        Automated routing matches captured assets with local demand, minimizing transit.
                    </p>
</div>

<div className="md:col-span-2 bg-stone-50 p-10 rounded-xl relative overflow-hidden group border border-stone-100 hover:shadow-lg hover:border-stone-200 transition-all duration-500 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center mb-6 border border-stone-200 shadow-sm">
<span className="iconify text-stone-800" data-icon="lucide:line-chart" data-width="20"></span>
</div>
<h3 className="serif-logo text-2xl text-stone-900 mb-3">Real-time Impact</h3>
<p className="text-sm text-stone-600 leading-relaxed font-light">
                            Track the lifecycle of every item. Visualize waste diversion rates, carbon savings, and community redistribution value on a live dashboard.
                        </p>
</div>
<div className="flex-1 w-full h-32 md:h-full bg-white rounded border border-stone-200 relative overflow-hidden p-6">

<div className="h-full flex items-end justify-between gap-3">
<div className="w-full bg-stone-100 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-stone-200 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-stone-100 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-stone-800 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-stone-200 h-[50%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200 bg-[#FDFBF7]">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 space-y-10">
<div>
<h2 className="serif-logo text-3xl md:text-4xl text-stone-900 mb-6">
                            Workflow as code.
                        </h2>
<p className="text-stone-600 font-light leading-relaxed text-lg">
                            Reflow integrates into existing procurement and facilities management systems via API. We treat physical inventory with the same precision as financial data.
                        </p>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] h-5 rounded-full border border-stone-300 flex items-center justify-center text-stone-400">
<span className="text-[10px]">01</span>
</div>
<div>
<h4 className="text-sm text-stone-900 font-semibold uppercase tracking-wide">Scan &amp; Catalog</h4>
<p className="text-xs text-stone-500 mt-1 font-light">QR tagging instantly catalogs item condition and origin.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] h-5 rounded-full border border-stone-300 flex items-center justify-center text-stone-400">
<span className="text-[10px]">02</span>
</div>
<div>
<h4 className="text-sm text-stone-900 font-semibold uppercase tracking-wide">Algorithmic Routing</h4>
<p className="text-xs text-stone-500 mt-1 font-light">Logic determines if item is repaired, donated, or recycled.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] h-5 rounded-full border border-stone-300 flex items-center justify-center text-stone-400">
<span className="text-[10px]">03</span>
</div>
<div>
<h4 className="text-sm text-stone-900 font-semibold uppercase tracking-wide">Automatic Dispatch</h4>
<p className="text-xs text-stone-500 mt-1 font-light">Couriers are notified automatically for retrieval.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full">

<div className="rounded-lg bg-[#1a1a1a] p-6 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-8 bg-[#252525] flex items-center px-4 gap-2 border-b border-white/5">
<div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
<div className="ml-auto text-[10px] text-stone-500 font-mono">oop-cli — v1.0.4</div>
</div>
<div className="mt-6 font-mono text-xs leading-relaxed">
<div className="text-stone-400 flex">
<span className="text-stone-600 mr-3">$</span>
<span className="text-white">reflow</span>
<span className="text-stone-400 ml-2">init --campus="main_quad"</span>
</div>
<div className="text-stone-500 italic pl-6 my-2 opacity-60">Initializing node capture sequence...</div>
<div className="text-stone-300 pl-6 mb-4">✔ Nodes active (14)</div>
<div className="text-stone-400 flex">
<span className="text-stone-600 mr-3">$</span>
<span className="text-white">reflow</span>
<span className="text-stone-400 ml-2">monitor --stream</span>
</div>
<div className="pl-6 mt-3 space-y-2 border-l border-white/10 ml-1.5">
<div className="flex justify-between items-center bg-white/5 p-2 rounded-sm border border-white/5">
<span className="text-stone-300">[ID:8922] HermanMiller_Aeron</span>
<span className="text-[10px] bg-stone-700 text-white px-1.5 py-0.5 rounded">REPAIR</span>
</div>
<div className="flex justify-between items-center p-2">
<span className="text-stone-400">[ID:8923] Dell_Display_24</span>
<span className="text-[10px] text-stone-500 border border-stone-700 px-1.5 py-0.5 rounded">STORE</span>
</div>
<div className="flex justify-between items-center p-2">
<span className="text-stone-400">[ID:8924] Lab_Equipment_V2</span>
<span className="text-[10px] text-stone-500 border border-stone-700 px-1.5 py-0.5 rounded">DISTRIBUTE</span>
</div>
</div>
<div className="flex mt-4 animate-pulse pl-6">
<span className="w-2 h-4 bg-stone-500 block"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-200 py-16 px-6 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div>
<a className="flex flex-col items-start group leading-none select-none mb-6" href="#">
<span className="serif-logo text-2xl font-semibold tracking-tight text-stone-900">OOP</span>
<span className="text-[0.4rem] tracking-[0.25em] font-medium text-stone-400 uppercase mt-1">Industries</span>
</a>
<p className="text-xs text-stone-500 max-w-xs font-light leading-relaxed">
                    Building the circular backbone for the next century. <br/>
                    © 2024 OOP Industries Inc. All rights reserved.
                </p>
</div>
<div className="flex gap-10 text-xs font-medium text-stone-500 uppercase tracking-widest">
<a className="hover:text-stone-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-stone-900 transition-colors" href="#">GitHub</a>
<a className="hover:text-stone-900 transition-colors" href="#">Docs</a>
<a className="hover:text-stone-900 transition-colors" href="#">Legal</a>
</div>
</div>
</footer>

    </>
  );
}
