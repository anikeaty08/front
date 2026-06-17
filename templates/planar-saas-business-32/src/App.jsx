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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="w-full flex justify-center items-center py-2 text-sm text-[#555555] tracking-wide border-b border-black/5">
<span className="flex items-center gap-1.5">
            🚀 Planar includes 80+ Tiles to help you tell your product story in style. 
            <a className="underline underline-offset-2 hover:text-[#292929] transition-colors" href="#">Explore Tiles</a>
</span>
</div>

<header className="w-full max-w-[1400px] px-6 py-5 flex items-center justify-between">

<a className="flex items-center gap-2 font-medium text-xl tracking-tight" href="#">
            Planar <i className="w-5 h-5" data-lucide="layout-grid"></i>
</a>

<nav className="hidden md:flex items-center gap-8 text-base text-[#555555]">
<a className="flex items-center gap-1 hover:text-[#292929] transition-colors" href="#">
                Pages <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
<a className="flex items-center gap-1 hover:text-[#292929] transition-colors" href="#">
                Company <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
<a className="flex items-center gap-1 hover:text-[#292929] transition-colors" href="#">
                Information <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</nav>

<div className="flex items-center gap-6">
<a className="hidden md:block text-base text-[#555555] hover:text-[#292929] transition-colors" href="#">Explore Tiles</a>
<button className="bg-[#292929] text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-black transition-colors">
                Buy now
            </button>
</div>
</header>

<main className="w-full max-w-[1200px] px-6 pt-24 pb-32 flex flex-col items-center">

<div className="text-center mb-16 flex flex-col items-center">
<h1 className="text-5xl md:text-6xl tracking-tight leading-tight font-normal">
                Meet Planar<br/>
<span className="text-[#8B8B8B]">The small business OS</span>
</h1>
<button className="mt-10 bg-[#292929] text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-black transition-colors">
                Get started now
            </button>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">

<div className="rounded-[24px] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[420px] relative shadow-sm">
<img alt="User portrait" className="w-full h-full object-cover" src="https://framerusercontent.com/images/t3eG2IHKqbAecwA27Qw52xG9IWU.jpg"/>
</div>

<div className="rounded-[24px] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[420px] relative shadow-sm">
<img alt="Abstract background" className="w-full h-full object-cover absolute inset-0" src="https://framerusercontent.com/images/HS0GiHyVZqmH4D60kmvf0ORA.webp"/>

<div className="absolute inset-x-5 bottom-5 bg-white rounded-[16px] p-5 shadow-lg border border-black/5 flex flex-col gap-12">
<div>
<h3 className="text-xl tracking-tight font-medium text-[#292929]">New Supplier</h3>
<p className="text-base text-[#8B8B8B] mt-0.5">ID: TC938</p>
</div>
<div className="flex items-center gap-3 bg-[#F9F9F8] p-3 rounded-[12px] border border-black/5">
<div className="w-10 h-10 rounded-[8px] overflow-hidden shrink-0">
<img alt="Capstone Logo" className="w-full h-full object-cover" src="https://framerusercontent.com/images/6xEHlv5GF8qRtgTjit1aCdbFhI.svg"/>
</div>
<div>
<p className="text-base font-medium text-[#292929] leading-snug">Capstone</p>
<p className="text-sm text-[#8B8B8B] leading-snug">Materials</p>
</div>
</div>
</div>
</div>

<div className="rounded-[24px] overflow-hidden aspect-[4/5] md:aspect-auto md:h-[420px] relative shadow-sm flex flex-col gap-3 p-5 justify-end">
<img alt="Abstract background" className="w-full h-full object-cover absolute inset-0 left-[-50%]" src="https://framerusercontent.com/images/HS0GiHyVZqmH4D60kmvf0ORA.webp"/>

<div className="relative z-10 bg-white rounded-[16px] p-4 shadow-lg border border-black/5 flex justify-between items-center">
<span className="text-base text-[#8B8B8B]">Less than</span>
<span className="text-xl tracking-tight font-medium text-[#292929]">30 units</span>
</div>

<div className="relative z-10 bg-white rounded-[16px] p-5 shadow-lg border border-black/5">
<p className="text-sm text-[#8B8B8B] mb-4">Automation</p>
<div className="flex flex-col gap-3.5">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-[4px] border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-colors">
<i className="w-3 h-3 text-[#292929]" data-lucide="check"></i>
</div>
<span className="text-base text-[#292929]">Reorder</span>
</label>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-[4px] border border-black/20 flex items-center justify-center group-hover:border-black/40 transition-colors">
</div>
<span className="text-base text-[#292929]">Email</span>
</label>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-[4px] border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-colors">
<i className="w-3 h-3 text-[#292929]" data-lucide="check"></i>
</div>
<span className="text-base text-[#292929]">SMS</span>
</label>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 border-t border-black/5 pt-16">

<div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-black/5">
<span className="text-sm font-medium px-3 text-[#555555]">Pages</span>
<button className="w-8 h-8 flex items-center justify-center bg-[#292929] rounded-full text-white shadow-sm">
<i className="w-4 h-4" data-lucide="framer"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-[#EDEDE8] rounded-full text-[#555555] hover:bg-[#E5E5E0] transition-colors">
<i className="w-4 h-4" data-lucide="sun"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-[#EDEDE8] rounded-full text-[#555555] hover:bg-[#E5E5E0] transition-colors">
<i className="w-4 h-4" data-lucide="moon"></i>
</button>
</div>

<div className="max-w-[600px] flex-1">
<h2 className="text-2xl md:text-3xl tracking-tight font-normal text-[#292929] mb-3">
                    Build your own business OS.
                </h2>
<p className="text-xl md:text-2xl tracking-tight text-[#8B8B8B] leading-snug">
                    Not loud, flashy software. Not bloated platforms pretending to be all things to all people. Just simple systems that help people run real businesses.
                </p>
</div>

<div className="shrink-0">
<a className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="framer"></i>
<span className="text-sm font-medium text-[#292929]">Made in Framer</span>
</a>
</div>
</div>
</main>



    </>
  );
}
