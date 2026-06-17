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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                    SURFACE
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal">
<a className="text-white hover:text-neutral-200 transition-colors" href="#">Collection</a>
<a className="hover:text-white transition-colors" href="#">Workflows</a>
<a className="hover:text-white transition-colors" href="#">Technology</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative group hidden sm:block">
<input className="bg-neutral-900/50 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all w-48 text-neutral-300 placeholder-neutral-600" placeholder="Search surfaces..." type="text"/>
<iconify-icon className="absolute left-3 top-1.5 text-neutral-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<button className="relative hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 pt-32 pb-20">

<div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
<a className="hover:text-white transition-colors" href="#">Surface</a>
<span className="text-neutral-700">/</span>
<a className="hover:text-white transition-colors" href="#">Gaming Series</a>
<span className="text-neutral-700">/</span>
<span className="text-white">The Striker</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-4">

<div className="relative w-full aspect-[4/3] rounded-2xl bg-[#080808] border border-white/5 overflow-hidden group grain">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-[80%] h-[60%] rounded-lg bg-gradient-to-br from-[#151515] to-[#0a0a0a] shadow-[0_20px_50px_-12px_rgba(0,0,0,1)] border border-white/5 relative transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">

<div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-50">
<div className="w-1 h-1 bg-white/40 rounded-full"></div>
<div className="text-[8px] tracking-[0.3em] font-medium text-white/40 uppercase">Surface</div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4">
<button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:magnifer-zoom-in-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="relative aspect-square rounded-2xl bg-[#080808] border border-white/5 overflow-hidden flex items-center justify-center grain group">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 scale-[4]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-white font-medium">Hybrid Surface</p>
<p className="text-[10px] text-neutral-500">Speed + Control Balance</p>
</div>
</div>
<div className="relative aspect-square rounded-2xl bg-[#080808] border border-white/5 overflow-hidden flex items-center justify-center grain group">

<div className="w-full h-full flex items-center justify-center">
<div className="w-[120%] h-px bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] rotate-12"></div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-white font-medium">Micro-Stitch</p>
<p className="text-[10px] text-neutral-500">Flush edge durability</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="lg:sticky lg:top-24 space-y-8">

<div>
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 uppercase">Best Seller</span>
<div className="flex items-center gap-1 text-xs text-amber-400">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-neutral-500 ml-1 font-medium text-[10px] underline decoration-neutral-800 cursor-pointer hover:text-neutral-300 transition-colors">(128 Reviews)</span>
</div>
</div>
<h1 className="text-4xl font-medium text-white tracking-tight mb-2">The Striker</h1>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">Engineered for esports. A hybrid surface providing the stopping power needed for tactical shooters with the glide required for tracking.</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white">$45.00</span>
<span className="text-sm text-neutral-600">USD</span>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div>
<div className="flex justify-between items-center mb-3">
<label className="text-xs font-medium text-white">Select Size</label>
<button className="text-[10px] text-neutral-500 hover:text-white underline decoration-neutral-700 underline-offset-2 transition-colors">Size Guide</button>
</div>
<div className="grid grid-cols-1 gap-3">

<label className="group relative flex cursor-pointer rounded-xl border border-white/5 bg-neutral-900/20 p-4 shadow-sm hover:border-white/10 transition-all active:scale-[0.99]">
<input className="peer sr-only" name="size" type="radio" />
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-indigo-500/50 transition-colors pointer-events-none"></div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-indigo-500 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-medium text-white peer-checked:text-indigo-200">Classic (M)</span>
<span className="mt-1 flex items-center text-xs text-neutral-500">
                                            360 x 300mm
                                            <span className="mx-1.5 h-1 w-1 rounded-full bg-neutral-700"></span>
                                            High DPI
                                        </span>
</span>
</span>

<div className="h-8 w-10 border border-neutral-700 bg-neutral-800 rounded opacity-50 mr-6"></div>
</input></label>

<label className="group relative flex cursor-pointer rounded-xl border border-indigo-500/50 bg-indigo-500/5 p-4 shadow-sm hover:border-indigo-500/50 transition-all active:scale-[0.99]">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="absolute inset-0 rounded-xl border-2 border-indigo-500/50 transition-colors pointer-events-none"></div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-medium text-white">Competitive (L)</span>
<span className="mt-1 flex items-center text-xs text-indigo-200/60">
                                            490 x 420mm
                                            <span className="mx-1.5 h-1 w-1 rounded-full bg-indigo-500/50"></span>
                                            Low Sens
                                        </span>
</span>
</span>

<div className="h-9 w-10 border border-indigo-400/50 bg-indigo-900/30 rounded mr-6 relative">
<div className="absolute bottom-1 right-1 w-2 h-3 bg-white/20 rounded-sm"></div>
</div>
</label>

<label className="group relative flex cursor-pointer rounded-xl border border-white/5 bg-neutral-900/20 p-4 shadow-sm hover:border-white/10 transition-all active:scale-[0.99]">
<input className="peer sr-only" name="size" type="radio"/>
<div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-indigo-500/50 transition-colors pointer-events-none"></div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-indigo-500 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-medium text-white peer-checked:text-indigo-200">Desk Pad (XL)</span>
<span className="mt-1 flex items-center text-xs text-neutral-500">
                                            900 x 400mm
                                            <span className="mx-1.5 h-1 w-1 rounded-full bg-neutral-700"></span>
                                            Full Desk
                                        </span>
</span>
</span>

<div className="h-6 w-14 border border-neutral-700 bg-neutral-800 rounded opacity-50 mr-6 flex items-center justify-center gap-0.5">
<div className="w-4 h-2 bg-white/10 rounded-[1px]"></div>
<div className="w-1 h-2 bg-white/10 rounded-[1px]"></div>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="flex items-center justify-between text-[10px] px-1">
<span className="text-rose-400 flex items-center gap-1.5">
<iconify-icon icon="solar:fire-bold" width="12"></iconify-icon>
                                14 people are viewing this
                            </span>
<span className="text-neutral-500">Stock running low on size L</span>
</div>
<button className="w-full h-12 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span>Add to Cart</span>
<span className="text-neutral-400">|</span>
<span>$45.00</span>
</button>

<div className="flex items-center justify-center gap-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">

<div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center"><iconify-icon icon="logos:visa" width="24"></iconify-icon></div>
<div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center"><iconify-icon icon="logos:mastercard" width="18"></iconify-icon></div>
<div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center"><iconify-icon icon="logos:paypal" width="16"></iconify-icon></div>
<div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center"><iconify-icon icon="logos:apple-pay" width="20"></iconify-icon></div>
<span className="text-[9px] text-neutral-500 flex items-center gap-1 ml-2"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> SSL Encrypted</span>
</div>

<div className="rounded-xl bg-neutral-900/40 border border-white/5 p-3.5 flex flex-col gap-3 mt-2">
<div className="flex items-center gap-2 border-b border-white/5 pb-2">
<div className="relative flex items-center justify-center w-2 h-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</div>
<span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-wide">In Stock, Ready to Ship</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-neutral-400">
<iconify-icon icon="solar:delivery-linear" width="18"></iconify-icon>
</div>
<div className="space-y-0.5">
<p className="text-xs text-white">Get it by <span className="font-medium">Wednesday, Oct 25</span></p>
<p className="text-[10px] text-neutral-500">Free Express Shipping via DHL on orders over $100</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-neutral-400">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div className="space-y-0.5">
<p className="text-xs text-white">30-Day Money-Back Guarantee</p>
<p className="text-[10px] text-neutral-500">If you don't love it, return it for free.</p>
</div>
</div>
</div>

<div className="p-3 border border-indigo-500/10 bg-indigo-500/5 rounded-xl">
<h4 className="text-[10px] font-semibold text-indigo-300 uppercase tracking-wider mb-3">Frequently Bought Together</h4>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-neutral-800 border border-white/5 flex items-center justify-center text-neutral-500">
<iconify-icon icon="solar:mouse-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs text-white font-medium">Sapphire Skates</p>
<p className="text-[10px] text-neutral-500">Universal Fit • $12.00</p>
</div>
<button className="w-6 h-6 rounded bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-6 grid grid-cols-2 gap-y-4 gap-x-2">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 border border-white/5">
<iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-white">Humidity Resistant</h4>
<p className="text-[10px] text-neutral-500 mt-0.5">Consistent glide in any weather.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 border border-white/5">
<iconify-icon icon="solar:layers-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-white">Poron Base</h4>
<p className="text-[10px] text-neutral-500 mt-0.5">Anti-slip XSoft foam backing.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 pb-20">
<div className="flex items-center justify-between mb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="flex h-2 w-2 rounded-full bg-rose-500"></span>
<span className="text-xs font-semibold text-rose-500 uppercase tracking-widest">Trending Now</span>
</div>
<h2 className="text-lg font-medium text-white">Community Highlights</h2>
</div>
<a className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors group" href="#">
                Follow @SurfaceGaming
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group cursor-pointer">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-playing-video-games-in-the-dark-4663/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 bg-black/40 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
<iconify-icon className="text-white text-[10px]" icon="solar:eye-bold"></iconify-icon>
<span className="text-[9px] font-medium text-white">24.5k</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">A</div>
<span className="text-xs text-white font-medium shadow-black drop-shadow-md">@aimgod_fps</span>
</div>
<p className="text-[10px] text-neutral-300 line-clamp-2 leading-relaxed">The glide on this pad is insane. Best upgrade this year. 🎯</p>
</div>
</div>

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group cursor-pointer">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-rgb-gaming-keyboard-5198/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 bg-black/40 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
<iconify-icon className="text-white text-[10px]" icon="solar:eye-bold"></iconify-icon>
<span className="text-[9px] font-medium text-white">102k</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">T</div>
<span className="text-xs text-white font-medium shadow-black drop-shadow-md">@techsetup_daily</span>
</div>
<p className="text-[10px] text-neutral-300 line-clamp-2 leading-relaxed">Perfect fit for the new setup. The stitching is invisible.</p>
</div>
</div>

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group cursor-pointer">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-focus-on-esports-gamer-8526/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 bg-black/40 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
<iconify-icon className="text-white text-[10px]" icon="solar:eye-bold"></iconify-icon>
<span className="text-[9px] font-medium text-white">8.2k</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-[10px] text-white font-bold">V</div>
<span className="text-xs text-white font-medium shadow-black drop-shadow-md">@val_queen</span>
</div>
<p className="text-[10px] text-neutral-300 line-clamp-2 leading-relaxed">Finally hit Ascendant thanks to this control! 🔥</p>
</div>
</div>

<div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group cursor-pointer">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-close-up-of-computer-motherboard-4395/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3 bg-black/40 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
<iconify-icon className="text-white text-[10px]" icon="solar:eye-bold"></iconify-icon>
<span className="text-[9px] font-medium text-white">45k</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[10px] text-white font-bold">H</div>
<span className="text-xs text-white font-medium shadow-black drop-shadow-md">@hardware_unboxed</span>
</div>
<p className="text-[10px] text-neutral-300 line-clamp-2 leading-relaxed">Durability test passed with flying colors. Water beads right off.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-20">
<div className="rounded-2xl border border-white/5 bg-neutral-900/10 overflow-hidden">
<div className="p-6 md:p-10 text-center">
<h2 className="text-lg font-medium text-white mb-2">Why The Striker?</h2>
<p className="text-sm text-neutral-500 max-w-lg mx-auto">Don't settle for generic. See how we stack up against standard cloth pads.</p>
</div>
<div className="overflow-x-auto">
<div className="min-w-[600px] w-full grid grid-cols-3 text-sm">

<div className="p-4 border-b border-white/5 bg-white/5 text-neutral-500 font-medium">Feature</div>
<div className="p-4 border-b border-white/5 bg-indigo-500/10 text-indigo-200 font-semibold text-center border-l border-r border-indigo-500/20">The Striker</div>
<div className="p-4 border-b border-white/5 bg-white/5 text-neutral-500 font-medium text-center">Standard Pad</div>

<div className="p-4 border-b border-white/5 text-neutral-400 pl-8">Edge Stitching</div>
<div className="p-4 border-b border-white/5 bg-indigo-500/5 text-center flex justify-center border-l border-r border-indigo-500/10">
<div className="flex flex-col items-center">
<iconify-icon className="text-emerald-500 mb-1" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-[10px] text-neutral-400">Micro-flush</span>
</div>
</div>
<div className="p-4 border-b border-white/5 text-center flex justify-center">
<div className="flex flex-col items-center opacity-50">
<iconify-icon className="text-neutral-500 mb-1" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span className="text-[10px] text-neutral-500">Raised/Irritating</span>
</div>
</div>

<div className="p-4 border-b border-white/5 text-neutral-400 pl-8">Humidity Resistance</div>
<div className="p-4 border-b border-white/5 bg-indigo-500/5 text-center flex justify-center border-l border-r border-indigo-500/10">
<div className="flex flex-col items-center">
<iconify-icon className="text-emerald-500 mb-1" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-[10px] text-neutral-400">100% Consistent</span>
</div>
</div>
<div className="p-4 border-b border-white/5 text-center flex justify-center">
<div className="flex flex-col items-center opacity-50">
<iconify-icon className="text-amber-500 mb-1" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
<span className="text-[10px] text-neutral-500">Gets muddy</span>
</div>
</div>

<div className="p-4 text-neutral-400 pl-8">Base Adhesion</div>
<div className="p-4 bg-indigo-500/5 text-center flex justify-center border-l border-r border-indigo-500/10">
<div className="flex flex-col items-center">
<iconify-icon className="text-emerald-500 mb-1" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-[10px] text-neutral-400">Poron Suction</span>
</div>
</div>
<div className="p-4 text-center flex justify-center">
<div className="flex flex-col items-center opacity-50">
<iconify-icon className="text-neutral-500 mb-1" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span className="text-[10px] text-neutral-500">Standard Rubber</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6 py-20">
<h2 className="text-lg font-medium text-white mb-10">Technical Specifications</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<h3 className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Surface</h3>
<ul className="space-y-3">
<li className="flex justify-between text-sm border-b border-white/5 pb-2">
<span className="text-neutral-500">Material</span>
<span className="text-white">Hybrid Polyester</span>
</li>
<li className="flex justify-between text-sm border-b border-white/5 pb-2">
<span className="text-neutral-500">Friction</span>
<span className="text-white">Medium-Dynamic</span>
</li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Base</h3>
<ul className="space-y-3">
<li className="flex justify-between text-sm border-b border-white/5 pb-2">
<span className="text-neutral-500">Material</span>
<span className="text-white">Authentic PORON®</span>
</li>
<li className="flex justify-between text-sm border-b border-white/5 pb-2">
<span className="text-neutral-500">Softness</span>
<span className="text-white">XSoft (3.5mm)</span>
</li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Dimensions (L)</h3>
<ul className="space-y-3">
<li className="flex justify-between text-sm border-b border-white/5 pb-2">
<span className="text-neutral-500">Width</span>
<span className="text-white">490 mm</span>
</li>
<li className="flex justify-between text-sm border-b border-white/5 pb-2">
<span className="text-neutral-500">Depth</span>
<span className="text-white">420 mm</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 pb-20">
<h2 className="text-lg font-medium text-white mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-2">

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 open:border-white/10 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-white hover:text-indigo-200 transition-colors">
<span>How do I clean The Striker?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed">
                    We recommend a warm damp microfiber cloth for daily maintenance. For deep cleaning, use lukewarm water and mild dish soap. Do not machine wash to preserve the Poron base.
                </div>
</details>

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 open:border-white/10 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-white hover:text-indigo-200 transition-colors">
<span>Is this speed or control focused?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed">
                    The Striker is a Hybrid surface. It offers low static friction for micro-adjustments but enough dynamic friction to stop your mouse precisely. It sits right in the middle (Balanced).
                </div>
</details>

<details className="group bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden open:bg-neutral-900/50 open:border-white/10 transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-white hover:text-indigo-200 transition-colors">
<span>Does it come flat or rolled?</span>
<iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-neutral-400 leading-relaxed">
                    All sizes except the XL Desk Pad are shipped flat-packed in a premium hard box to ensure 100% flatness right out of the box. The XL is loosely rolled.
                </div>
</details>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 mb-16 md:mb-0">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-neutral-800 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
</div>
<span className="text-xs font-medium text-neutral-500 tracking-tight">SURFACE © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Support</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Wholesale</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-[#030303]/90 backdrop-blur-lg border-t border-white/10 md:hidden z-50">
<div className="flex items-center gap-3">
<div className="flex-col hidden sm:flex">
<span className="text-white font-medium text-sm">The Striker</span>
<span className="text-neutral-500 text-xs">$45.00</span>
</div>
<button className="flex-1 h-12 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                Add to Cart
            </button>
</div>
</div>

    </>
  );
}
