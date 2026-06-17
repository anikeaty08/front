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
      

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(#e4e4e7 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.4'}}></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#FAFAFA] pointer-events-none"></div>

<nav className="relative z-20 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
<div className="flex items-center gap-12">
<a className="text-xl font-medium tracking-tighter uppercase text-zinc-900" href="#">
                DCNT.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Shop All</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Designers</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Niche</a>
<a className="hover:text-zinc-900 transition-colors" href="#database">Alternatives</a>
</div>
</div>
<div className="flex items-center gap-5">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors flex items-center justify-center relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-medium flex items-center justify-center rounded-full">2</span>
</button>
</div>
</nav>

<main className="relative z-10 flex flex-col justify-center px-6 pt-12 pb-20 lg:pt-20 lg:pb-24 max-w-7xl mx-auto w-full">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">

<div className="flex-1 flex flex-col items-start w-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/60 shadow-sm text-xs font-medium text-zinc-600 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
</span>
                    Now pouring: Summer Collection
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-medium tracking-tighter text-zinc-900 leading-[1.05] mb-6">
                    Luxury scents.<br/>
<span className="text-zinc-400">Fraction of the cost.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-lg mb-10 leading-relaxed font-light">
                    Experience authentic niche and designer fragrances without the commitment. Expertly decanted into premium glass atomizers.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(24,24,27,0.2)] hover:shadow-[0_6px_20px_rgba(24,24,27,0.23)] hover:-translate-y-0.5 gap-2" href="#database">
                        View Alternatives
                        <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all gap-2 shadow-sm" href="#configurator">
                        Find Your Scent
                    </a>
</div>

<div className="mt-14 flex items-center gap-8 border-t border-zinc-200/60 pt-6 w-full max-w-md">
<div className="flex items-center gap-2.5 text-xs text-zinc-500 font-medium">
<iconify-icon className="text-zinc-400" icon="solar:verified-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        100% Authentic Guaranteed
                    </div>
<div className="flex items-center gap-2.5 text-xs text-zinc-500 font-medium">
<iconify-icon className="text-zinc-400" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Medical Grade Glass
                    </div>
</div>
</div>

<div className="flex-1 w-full max-w-md relative lg:ml-auto">
<div className="absolute -top-12 -right-12 w-64 h-64 bg-zinc-200/50 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-zinc-100/50 rounded-full blur-3xl -z-10"></div>
<div className="bg-white rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7 relative overflow-hidden group">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400 mb-2">Popular Selection</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Santal 33</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Le Labo</p>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-zinc-400" icon="solar:droplet-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-900">Select Decant Size</span>
<a className="text-[10px] font-medium text-zinc-400 hover:text-zinc-900 transition-colors underline underline-offset-2" href="#">Size Guide</a>
</div>
<div className="grid grid-cols-3 gap-3">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="decant_hero" type="radio"/>
<div className="flex flex-col items-center justify-center py-4 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900 mb-0.5 group-hover/label:text-zinc-900 transition-colors">2ml</span>
<span className="text-[10px] text-zinc-400">~30 sprays</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="decant_hero" type="radio"/>
<div className="flex flex-col items-center justify-center py-4 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300 shadow-sm peer-checked:shadow-none">
<span className="text-sm font-medium text-zinc-900 mb-0.5">5ml</span>
<span className="text-[10px] text-zinc-400">~75 sprays</span>
</div>
<div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-zinc-900 text-white flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-all scale-50 peer-checked:scale-100">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2" width="10"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="decant_hero" type="radio"/>
<div className="flex flex-col items-center justify-center py-4 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900 mb-0.5 group-hover/label:text-zinc-900 transition-colors">10ml</span>
<span className="text-[10px] text-zinc-400">~150 sprays</span>
</div>
</label>
</div>
</div>
<div className="flex flex-col gap-4 pt-6 border-t border-zinc-100">
<div className="flex items-end justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest mb-1">Total</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$28.00</span>
<span className="text-xs text-zinc-400 line-through font-light">$35.00</span>
</div>
</div>
<div className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">In Stock</div>
</div>
<button className="w-full py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Add to Bag
                        </button>
</div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-50"></div>
</div>
</div>
</div>
</main>

<section className="relative z-10 w-full border-t border-zinc-200/60 bg-white/50 backdrop-blur-3xl py-20 lg:py-28" id="database">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Viral Originals vs. Alternatives</h2>
<p className="text-base text-zinc-500 font-light leading-relaxed">
                    Compare world-renowned fragrances side by side with their highly-rated Arabic counterparts. Choose your preferred decant size for either option.
                </p>
</div>
<div className="space-y-16">

<div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative items-stretch">

<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full items-center justify-center z-10 shadow-sm text-[10px] font-medium tracking-widest text-zinc-400">
                        VS
                    </div>

<div className="flex-1 bg-white rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col hover:border-zinc-300 transition-colors">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400 mb-2">The Original</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Baccarat Rouge 540 EDP</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Maison Francis Kurkdjian</p>
<div className="grid grid-cols-3 gap-3 mt-8 mb-auto">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="br540" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">2ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="br540" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">5ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="br540" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">10ml</span>
</div>
</label>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-8">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$35.00</span>
<button className="px-5 py-2.5 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-xl hover:bg-zinc-50 transition-colors shadow-sm">Add to Bag</button>
</div>
</div>

<div className="flex-1 bg-zinc-50/50 rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">Arabic Alternative</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 text-white text-[10px] font-medium shadow-sm">
<iconify-icon icon="solar:target-linear" width="12"></iconify-icon>
                                95% Match
                            </div>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Club de Nuit Untold</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Armaf</p>
<div className="mt-5 p-3.5 rounded-xl bg-white border border-zinc-100/80 text-xs text-zinc-500 font-light leading-relaxed shadow-sm">
<span className="font-medium text-zinc-700">Opis:</span> Zgodność zapachu oceniana na około 95%. Perfekcyjnie oddaje charakterystyczne połączenie szafranu, jaśminu i ambroksanu. Wyjątkowo zbliżona trwałość i ogon (projekcja) w ułamku ceny oryginału.
                        </div>
<div className="grid grid-cols-3 gap-3 mt-6 mb-auto">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="untold" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">2ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="untold" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">5ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="untold" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">10ml</span>
</div>
</label>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-8">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$8.00</span>
<button className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors shadow-[0_4px_14px_0_rgba(24,24,27,0.2)]">Add to Bag</button>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative items-stretch">
<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full items-center justify-center z-10 shadow-sm text-[10px] font-medium tracking-widest text-zinc-400">
                        VS
                    </div>

<div className="flex-1 bg-white rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col hover:border-zinc-300 transition-colors">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400 mb-2">The Original</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Oud Wood EDP</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Tom Ford</p>
<div className="grid grid-cols-3 gap-3 mt-8 mb-auto">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="oudwood" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">2ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="oudwood" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">5ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="oudwood" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">10ml</span>
</div>
</label>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-8">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$29.00</span>
<button className="px-5 py-2.5 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-xl hover:bg-zinc-50 transition-colors shadow-sm">Add to Bag</button>
</div>
</div>

<div className="flex-1 bg-zinc-50/50 rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">Arabic Alternative</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 text-white text-[10px] font-medium shadow-sm">
<iconify-icon icon="solar:target-linear" width="12"></iconify-icon>
                                90% Match
                            </div>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Woody Oud</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Maison Alhambra</p>
<div className="mt-5 p-3.5 rounded-xl bg-white border border-zinc-100/80 text-xs text-zinc-500 font-light leading-relaxed shadow-sm">
<span className="font-medium text-zinc-700">Opis:</span> Zgodność zapachu w okolicach 90%. Znakomity klon drzewnego klasyka. Mniej ostra nuta otwarcia, przechodząca w gładkie, eleganckie i lekko kremowe drewno agarowe z kardamonem.
                        </div>
<div className="grid grid-cols-3 gap-3 mt-6 mb-auto">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="woodyoud" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">2ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="woodyoud" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">5ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="woodyoud" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">10ml</span>
</div>
</label>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-8">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$6.50</span>
<button className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors shadow-[0_4px_14px_0_rgba(24,24,27,0.2)]">Add to Bag</button>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative items-stretch">
<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full items-center justify-center z-10 shadow-sm text-[10px] font-medium tracking-widest text-zinc-400">
                        VS
                    </div>

<div className="flex-1 bg-white rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col hover:border-zinc-300 transition-colors">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400 mb-2">The Original</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Delina EDP</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Parfums de Marly</p>
<div className="grid grid-cols-3 gap-3 mt-8 mb-auto">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="delina" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">2ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="delina" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">5ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="delina" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">10ml</span>
</div>
</label>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-8">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$32.00</span>
<button className="px-5 py-2.5 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-xl hover:bg-zinc-50 transition-colors shadow-sm">Add to Bag</button>
</div>
</div>

<div className="flex-1 bg-zinc-50/50 rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">Arabic Alternative</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 text-white text-[10px] font-medium shadow-sm">
<iconify-icon icon="solar:target-linear" width="12"></iconify-icon>
                                92% Match
                            </div>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 leading-none">Club de Nuit Imperiale</h3>
<p className="text-sm text-zinc-500 font-light mt-1.5">Armaf</p>
<div className="mt-5 p-3.5 rounded-xl bg-white border border-zinc-100/80 text-xs text-zinc-500 font-light leading-relaxed shadow-sm">
<span className="font-medium text-zinc-700">Opis:</span> Zgodność zapachu: 92%. Fenomenalna, kremowo-różana kompozycja z akcentem liczi i rabarbaru. Zapach jest odrobinę słodszy od pierwowzoru, jednak charakteryzuje się równie potężną projekcją i niesamowitą trwałością.
                        </div>
<div className="grid grid-cols-3 gap-3 mt-6 mb-auto">
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="imperiale" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">2ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input checked="" className="peer sr-only" name="imperiale" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">5ml</span>
</div>
</label>
<label className="relative cursor-pointer group/label">
<input className="peer sr-only" name="imperiale" type="radio"/>
<div className="flex flex-col items-center justify-center py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-50 transition-all hover:border-zinc-300">
<span className="text-sm font-medium text-zinc-900">10ml</span>
</div>
</label>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-8">
<span className="text-2xl font-medium tracking-tight text-zinc-900">$8.50</span>
<button className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors shadow-[0_4px_14px_0_rgba(24,24,27,0.2)]">Add to Bag</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-20 lg:py-32 w-full border-t border-zinc-200/60 bg-[#FAFAFA]" id="configurator">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Find Your Signature Profile</h2>
<p className="text-base text-zinc-500 font-light leading-relaxed">
                    Fragrance is deeply personal. Use our AI-assisted curator to discover your next signature scent by describing a vibe, setting a scene, or selecting your favorite notes.
                </p>
</div>

<div className="bg-white rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-10 relative overflow-hidden">

<div className="mb-10 flex items-start gap-4 p-4 lg:p-5 rounded-xl bg-zinc-50/80 border border-zinc-100">
<div className="w-8 h-8 shrink-0 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm text-zinc-700">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">How to use the curator</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            You don't need to be a fragrance expert. Describe a specific memory or how you want others to perceive you on the left. If you already know what ingredients you love, select them on the right. Combine both for the most accurate, tailored matches.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

<div className="space-y-8">
<div>
<h3 className="text-lg font-medium text-zinc-900 flex items-center gap-2 mb-1">
<iconify-icon className="text-zinc-400" icon="solar:pen-linear" width="20"></iconify-icon>
                                The Abstract Approach
                            </h3>
<p className="text-xs text-zinc-500 font-light mb-6">Paint a picture with words.</p>
</div>
<div className="space-y-6">

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-zinc-900">Set the scene</label>
<span className="text-[10px] text-zinc-400 font-medium bg-zinc-100 px-2 py-0.5 rounded">Optional</span>
</div>
<textarea className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-300 shadow-sm resize-none text-zinc-800 font-light" placeholder="e.g., Sitting in a dimly lit jazz club in autumn, wearing a leather jacket..." rows="3"></textarea>
<p className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5 font-light">
<iconify-icon icon="solar:info-circle-linear" width="14"></iconify-icon>
                                    Think about location, weather, or a specific memory.
                                </p>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-zinc-900">Desired aura</label>
<span className="text-[10px] text-zinc-400 font-medium bg-zinc-100 px-2 py-0.5 rounded">Optional</span>
</div>
<textarea className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-300 shadow-sm resize-none text-zinc-800 font-light" placeholder="e.g., I want to leave a trail of mystery but feel approachable, warm, and confident..." rows="3"></textarea>
<p className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5 font-light">
<iconify-icon icon="solar:info-circle-linear" width="14"></iconify-icon>
                                    How do you want others to perceive you when you walk by?
                                </p>
</div>
</div>
</div>

<div className="space-y-8 relative">

<div className="block lg:hidden w-full h-[1px] bg-zinc-100 absolute -top-6"></div>
<div>
<h3 className="text-lg font-medium text-zinc-900 flex items-center gap-2 mb-1">
<iconify-icon className="text-zinc-400" icon="solar:leaf-linear" width="20"></iconify-icon>
                                Olfactory Preferences
                            </h3>
<p className="text-xs text-zinc-500 font-light mb-6">Select up to 3 dominant notes you love.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Woody
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Citrus
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Floral
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Spicy
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Aquatic
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Gourmand
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Leather
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Musk
                                </div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-3 rounded-xl border border-zinc-200 bg-white peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white text-zinc-600 text-sm font-medium transition-all text-center hover:border-zinc-300 hover:bg-zinc-50 peer-checked:hover:bg-zinc-800 shadow-sm peer-checked:shadow-none">
                                    Green
                                </div>
</label>
</div>

<div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
<div>
<span className="text-sm font-medium text-zinc-900 block">Projection strength</span>
<span className="text-xs text-zinc-500 font-light mt-0.5 block">Prefer strong sillage or skin-scent?</span>
</div>

<div className="w-32 relative">
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2" max="3" min="1" type="range" value="2"/>
<div className="flex justify-between text-[10px] text-zinc-400 mt-2 font-medium">
<span>Intimate</span>
<span>Beast</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
<p className="text-xs text-zinc-500 font-light flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear" width="16"></iconify-icon>
                        Your responses generate 3 tailored recommendations.
                    </p>
<button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(24,24,27,0.2)] hover:shadow-[0_6px_20px_rgba(24,24,27,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Discover Matches
                    </button>
</div>
</div>
</div>
</section>

    </>
  );
}
