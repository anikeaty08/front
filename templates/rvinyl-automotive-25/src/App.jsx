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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-neutral-200 shrink-0">
<div className="flex items-center gap-8">
<div className="text-lg font-medium tracking-tighter uppercase text-neutral-900">RVINYL</div>
<div className="hidden md:flex gap-6 text-sm">
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Products</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Gallery</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm">
<span className="hidden sm:inline text-neutral-400">Pro Visualizer</span>
<div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 flex flex-col lg:flex-row overflow-hidden">

<section className="flex-1 relative flex flex-col bg-[#f8f9fa] min-h-[50vh] lg:min-h-0">

<div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10 pointer-events-none">
<div className="flex gap-2 pointer-events-auto">
<button className="w-10 h-10 flex items-center justify-center bg-white border border-neutral-200 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 shadow-sm transition-all">
<iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-white border border-neutral-200 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 shadow-sm transition-all">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 relative flex items-center justify-center p-8 lg:p-16 overflow-hidden">

<img alt="Vehicle Render" className="w-full max-w-5xl object-contain drop-shadow-2xl mix-blend-multiply opacity-90 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&amp;w=2115&amp;auto=format&amp;fit=crop" style={{filter: 'sepia(0.8) hue-rotate(290deg) saturate(2.5) brightness(1.05) contrast(1.1)'}}/>

<div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-12 bg-black/5 blur-2xl rounded-[100%] pointer-events-none"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-neutral-200 shadow-sm z-10">
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">View</span>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
</div>
</div>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</section>

<aside className="w-full lg:w-[420px] bg-white border-l border-neutral-200 flex flex-col shrink-0 z-20 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.05)]">

<div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">

<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Current Selection</span>
</div>
<h1 className="text-3xl font-medium tracking-tight text-neutral-900 mb-2">Gloss Metallic Pink</h1>
<p className="text-sm text-neutral-500 leading-relaxed">A premium high-gloss calendared film with metallic flakes, engineered for precision detailing and full vehicle wraps.</p>
</div>
<div className="h-px w-full bg-neutral-100"></div>

<div className="flex flex-col gap-8">

<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Target Vehicle</label>
<div className="relative group cursor-pointer">
<div className="w-full flex items-center justify-between bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-800 group-hover:border-neutral-300 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:routing-linear" width="18"></iconify-icon>
<span className="font-medium">2024 Porsche 911 GT3</span>
</div>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Lighting Environment</label>
<div className="flex bg-neutral-50 p-1 rounded-lg border border-neutral-200">
<button className="flex-1 text-sm font-medium py-2 rounded-md bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-neutral-200/50 text-neutral-900 transition-all">Studio</button>
<button className="flex-1 text-sm font-medium py-2 rounded-md text-neutral-500 hover:text-neutral-800 transition-all">Daylight</button>
<button className="flex-1 text-sm font-medium py-2 rounded-md text-neutral-500 hover:text-neutral-800 transition-all">Night</button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider">Camera Zoom</label>
<span className="text-xs font-medium text-neutral-900">125%</span>
</div>
<div className="relative w-full h-1 bg-neutral-100 rounded-full cursor-pointer group">

<div className="absolute top-0 left-0 h-full w-1/4 bg-neutral-900 rounded-full"></div>

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-neutral-900 rounded-full shadow-sm group-hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100">
<ul className="flex flex-col gap-3 text-sm">
<li className="flex justify-between">
<span className="text-neutral-500">Thickness</span>
<span className="font-medium text-neutral-900">3.5 mil</span>
</li>
<li className="flex justify-between">
<span className="text-neutral-500">Durability</span>
<span className="font-medium text-neutral-900">Up to 7 Years</span>
</li>
<li className="flex justify-between">
<span className="text-neutral-500">Adhesive</span>
<span className="font-medium text-neutral-900">Air Release</span>
</li>
</ul>
</div>
</div>
</div>

<div className="p-8 border-t border-neutral-200 bg-white">
<div className="flex items-end justify-between mb-6">
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Estimated Cost</span>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-medium tracking-tight text-neutral-900">$649</span>
<span className="text-sm text-neutral-400">.00</span>
</div>
</div>
<span className="text-xs text-neutral-400 flex items-center gap-1">
<iconify-icon icon="solar:delivery-linear" width="14"></iconify-icon>
                        Ships Tomorrow
                    </span>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-4 rounded-lg transition-colors shadow-[0_4px_14px_0_rgba(5,150,105,0.2)] flex items-center justify-center gap-2 group">
                    Shop Wrap Material
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-xs text-center text-neutral-400 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                    Backed by RVINYL Performance Guarantee
                </p>
</div>
</aside>
</main>

    </>
  );
}
