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



    lucide.createIcons();
  
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
      
<div className="relative">

<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20"></div>
<div className="absolute top-1/3 right-[-20rem] w-[48rem] h-[48rem] rounded-full blur-3xl bg-gradient-to-tl from-blue-500/20 via-indigo-600/20 to-purple-600/20"></div>
</div>
<header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-white/10 grid place-items-center ring-1 ring-white/10">
<i className="w-4 h-4 text-white" data-lucide="sticker" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium tracking-tight">Sticker Studio</span>
</div>
<nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
<a className="hover:text-white transition-colors" href="#">Collection</a>
<a className="hover:text-white transition-colors" href="#">Quality</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</nav>
</header>

<section className="max-w-7xl mx-auto px-6 mt-12 md:mt-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

<div className="relative">

<div className="relative inline-block">

<div className="relative bg-white text-zinc-900 border-4 border-black px-8 md:px-10 py-5 md:py-6 rounded-sm tracking-tight text-2xl md:text-3xl font-semibold shadow-[8px_8px_0_0_#0a0a0a,12px_12px_0_0_#a1a1aa]">
              CLEAR OVER CLEVER
            </div>

<div className="absolute -bottom-8 left-24 flex flex-col items-start">
<div className="relative">
<div className="w-7 h-7 bg-white border-4 border-black shadow-[6px_6px_0_0_#0a0a0a,10px_10px_0_0_#a1a1aa]"></div>
</div>
<div className="relative -mt-2 ml-6">
<div className="w-7 h-7 bg-white border-4 border-black shadow-[6px_6px_0_0_#0a0a0a,10px_10px_0_0_#a1a1aa]"></div>
</div>
</div>
</div>

<div className="mt-16 md:mt-20 select-none">
<div className="inline-flex items-center gap-3">
<span className="relative inline-block leading-none tracking-tight text-[64px] sm:text-[84px] md:text-[96px] font-extrabold text-violet-600 drop-shadow-[8px_8px_0_#0a0a0a] pr-2" style={{WebkitTextStroke: '10px white', paintOrder: 'stroke fill'}}>
                keka
              </span>
<div className="relative">
<div className="size-10 sm:size-12 md:size-14 bg-violet-600 rounded-[8px] rotate-12 ring-8 ring-white drop-shadow-[8px_8px_0_#0a0a0a]"></div>
<i className="absolute inset-0 m-auto text-white w-6 h-6 sm:w-7 sm:h-7" data-lucide="sparkles" strokeWidth="1.75"></i>
</div>
</div>
<p className="mt-5 text-zinc-300 max-w-md">High-contrast die-cut stickers with punchy outlines, pixel tails, and bold shadows built for real-world laptops.</p>
<div className="mt-8 flex items-center gap-4">
<a className="inline-flex items-center gap-2 bg-white text-zinc-900 px-5 py-3 rounded-xl font-medium tracking-tight shadow-[0_1px_0_0_rgba(0,0,0,0.06)] hover:translate-y-[-1px] hover:shadow-lg transition" href="#collection">
<i className="w-4 h-4" data-lucide="wand-2" strokeWidth="1.75"></i>
                Explore collection
              </a>
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:bg-white/5 transition">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.75"></i>
                Download pack
              </button>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-3xl bg-zinc-800/60 ring-1 ring-white/10 p-6 md:p-8 backdrop-blur-sm">
<div className="grid grid-cols-2 gap-6">

<div className="group relative aspect-[5/4] rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="relative text-white">
<i className="w-8 h-8" data-lucide="code-2" strokeWidth="1.5"></i>
<p className="mt-3 text-sm font-medium tracking-tight">Ship Great Code</p>
</div>
<div className="absolute right-3 bottom-3 bg-white text-zinc-900 text-[10px] px-2 py-1 rounded font-medium">Die‑cut</div>
</div>
<div className="group relative aspect-[5/4] rounded-2xl bg-zinc-900 p-4 overflow-hidden ring-1 ring-white/10">
<div className="relative font-mono text-emerald-400 text-xs">
<div className="flex gap-1 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/80"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
<div className="w-2 h-2 rounded-full bg-green-500/80"></div>
</div>
<p>$ brew install clarity</p>
<p className="text-zinc-500">// compiling simplicity…</p>
<div className="flex items-center gap-2 mt-1">
<span>$</span>
<span className="w-2 h-3 bg-emerald-400 animate-pulse"></span>
</div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)'}}></div>
</div>
<div className="absolute right-3 bottom-3 bg-white text-zinc-900 text-[10px] px-2 py-1 rounded font-medium">Matte</div>
</div>
<div className="group relative aspect-[5/4] rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0">
<div className="absolute w-1 h-1 bg-white/80 rounded-full left-6 top-6 animate-pulse"></div>
<div className="absolute w-1 h-1 bg-white/70 rounded-full right-10 top-12 animate-pulse"></div>
<div className="absolute w-1 h-1 bg-white/70 rounded-full left-10 bottom-10 animate-pulse"></div>
</div>
<div className="relative h-full grid place-items-center text-white">
<i className="w-10 h-10" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<div className="absolute right-3 bottom-3 bg-white text-zinc-900 text-[10px] px-2 py-1 rounded font-medium">Gloss</div>
</div>
<div className="group relative aspect-[5/4] rounded-2xl bg-gradient-to-br from-amber-700 to-rose-600 p-4 overflow-hidden ring-1 ring-white/10">
<div className="relative text-white">
<i className="w-8 h-8" data-lucide="coffee" strokeWidth="1.5"></i>
<p className="mt-3 text-sm font-medium tracking-tight">Caffeine Inside</p>
</div>
<div className="absolute -top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute right-3 bottom-3 bg-white text-zinc-900 text-[10px] px-2 py-1 rounded font-medium">UV Safe</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24" id="collection">
<div className="text-center mb-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Laptop Sticker Collection</h2>
<p className="text-zinc-300 mt-3">Premium designs ready to print</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-zinc-900">
<div className="relative aspect-square bg-zinc-100 rounded-xl flex items-center justify-center overflow-hidden">

<div className="relative">
<div className="bg-white border-4 border-black px-6 py-4 rounded-sm text-xl font-semibold tracking-tight shadow-[6px_6px_0_#0a0a0a,10px_10px_0_#a1a1aa]">
                CLEAR OVER CLEVER
              </div>
<div className="absolute -bottom-6 left-16">
<div className="w-6 h-6 bg-white border-4 border-black shadow-[5px_5px_0_#0a0a0a,8px_8px_0_#a1a1aa]"></div>
<div className="w-6 h-6 bg-white border-4 border-black shadow-[5px_5px_0_#0a0a0a,8px_8px_0_#a1a1aa] -mt-2 ml-5"></div>
</div>
</div>
</div>
<div className="mt-4 text-center">
<h3 className="font-medium text-zinc-900">Clarity Bubble</h3>
<p className="text-sm text-zinc-500 mt-1">3.5" × 2.2" Pixel speech</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-zinc-900">
<div className="aspect-square rounded-xl relative overflow-hidden group ring-1 ring-zinc-200 bg-gradient-to-br from-purple-600 to-pink-600">
<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition"></div>
<div className="absolute -inset-40 bg-white/10 rotate-12 group-hover:rotate-[22deg] transition-transform duration-700"></div>
<div className="relative z-10 h-full grid place-items-center text-center">
<i className="w-16 h-16 text-white mb-3" data-lucide="code-2" strokeWidth="1.5"></i>
<div className="text-white font-semibold text-2xl tracking-tight">&lt;/CODE&gt;</div>
<div className="text-purple-200 text-sm mt-2">BUILD · SHIP · REPEAT</div>
</div>
</div>
<div className="mt-4 text-center">
<h3 className="font-medium text-zinc-900">Code Master</h3>
<p className="text-sm text-zinc-500 mt-1">3" × 3" Die-cut</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-zinc-900">
<div className="aspect-square bg-zinc-900 rounded-xl p-6 relative overflow-hidden group ring-1 ring-zinc-200">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)'}}></div>
<div className="w-full relative z-10">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="font-mono text-emerald-400 text-sm">
<div className="mb-2">$ sudo make coffee</div>
<div className="mb-2 text-zinc-500">// brewing...</div>
<div className="flex items-center gap-2">
<span>$</span>
<div className="w-2 h-4 bg-emerald-400 animate-pulse"></div>
</div>
</div>
</div>
</div>
<div className="mt-4 text-center">
<h3 className="font-medium text-zinc-900">Terminal Vibes</h3>
<p className="text-sm text-zinc-500 mt-1">3.5" × 2.5" Rectangle</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-zinc-900">
<div className="aspect-square bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl relative overflow-hidden ring-1 ring-zinc-200">
<div className="absolute inset-0">
<span className="absolute left-6 top-8 w-1 h-1 rounded-full bg-white/90 animate-pulse"></span>
<span className="absolute right-10 top-16 w-1 h-1 rounded-full bg-white/80 animate-pulse"></span>
<span className="absolute left-12 bottom-12 w-1 h-1 rounded-full bg-white/70 animate-pulse"></span>
</div>
<div className="relative h-full grid place-items-center text-center">
<i className="w-20 h-20 text-white mb-3" data-lucide="rocket" strokeWidth="1.5"></i>
<div className="text-white font-semibold text-xl tracking-tight">SHIP IT</div>
<div className="text-cyan-100 text-xs mt-2 font-medium">TO PRODUCTION</div>
</div>
</div>
<div className="mt-4 text-center">
<h3 className="font-medium text-zinc-900">Rocket Ship</h3>
<p className="text-sm text-zinc-500 mt-1">3" × 3" Die-cut</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-zinc-900">
<div className="aspect-square bg-gradient-to-br from-amber-700 to-orange-600 rounded-xl relative overflow-hidden ring-1 ring-zinc-200">
<div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
<div className="relative h-full grid place-items-center text-center">
<i className="w-16 h-16 text-white mb-4" data-lucide="coffee" strokeWidth="1.5"></i>
<div className="text-white font-semibold text-xl tracking-tight">COFFEE</div>
<div className="text-amber-200 text-sm mt-2">POWERED DEVELOPER</div>
</div>
</div>
<div className="mt-4 text-center">
<h3 className="font-medium text-zinc-900">Coffee Fueled</h3>
<p className="text-sm text-zinc-500 mt-1">3" × 3" Circle</p>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-zinc-900">
<div className="aspect-square bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 rounded-xl relative overflow-hidden ring-1 ring-zinc-200">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="relative h-full grid place-items-center text-center">
<i className="w-16 h-16 text-white mb-4" data-lucide="moon-star" strokeWidth="1.5"></i>
<div className="text-white font-semibold text-xl tracking-tight">NIGHT OWL</div>
<div className="text-indigo-300 text-sm mt-2 font-mono">3:00 AM CODING</div>
</div>
</div>
<div className="mt-4 text-center">
<h3 className="font-medium text-zinc-900">Night Owl</h3>
<p className="text-sm text-zinc-500 mt-1">3" × 3" Circle</p>
</div>
</div>
</div>

<div className="mt-16 text-center bg-white/5 rounded-2xl p-8 ring-1 ring-white/10">
<div className="flex items-center justify-center gap-3 mb-4">
<i className="w-6 h-6 text-purple-400" data-lucide="sparkles" strokeWidth="1.5"></i>
<h3 className="text-2xl font-semibold tracking-tight">Print Your Own</h3>
</div>
<p className="text-zinc-300 max-w-2xl mx-auto">High-quality vinyl stickers perfect for laptops, water bottles, and more. Weather-resistant and built to last. Right-click and save any design above.</p>
<div className="flex items-center justify-center gap-8 mt-6 text-sm text-zinc-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Waterproof</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>UV Resistant</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Premium Vinyl</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pb-24">
<h3 className="text-xl font-semibold tracking-tight mb-5 text-zinc-200">Real‑world previews</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
</div>


    </>
  );
}
