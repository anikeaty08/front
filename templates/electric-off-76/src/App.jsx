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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter hover:opacity-80 transition-opacity" href="#">
                TERRA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-200 transition-colors" href="#features">Features</a>
<a className="hover:text-zinc-200 transition-colors" href="#trails">Trails</a>
<a className="hover:text-zinc-200 transition-colors" href="#accessories">Accessories</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="text-xs font-medium bg-zinc-100 text-black px-4 py-2 rounded-full hover:bg-zinc-300 transition-colors" href="#order">
                    Pre-order Gen 2
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex flex-col justify-end pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Offroad trail" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Terrain Mode Active</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                    Conquer the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">Uncharted Path.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed mb-8">
                    Engineered for the wild. The Terra X1 combines massive torque, IP67 waterproofing, and rugged stability to redefine where a board can take you.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                        Buy Terra X1
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Watch the Film
                    </button>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-4xl font-light text-white tracking-tighter">35<span className="text-lg text-zinc-600 ml-1">mi</span></span>
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Range</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl font-light text-white tracking-tighter">32<span className="text-lg text-zinc-600 ml-1">mph</span></span>
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Top Speed</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl font-light text-white tracking-tighter">35<span className="text-lg text-zinc-600 ml-1">%</span></span>
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Hill Grade</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-4xl font-light text-white tracking-tighter">IP67</span>
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Protection</span>
</div>
</div>
</section>

<section className="py-32 bg-black relative" id="features">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Engineered for Extremes</h2>
<p className="text-zinc-500 max-w-lg text-sm leading-relaxed">Every component of the Terra X1 is purpose-built to withstand dust, mud, and the harshest vibrations nature can throw at it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
<div className="absolute inset-0">
<img alt="Motor detail" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Dual 3000W Direct Drive</h3>
<p className="text-zinc-400 text-sm max-w-sm">Experience instant torque delivery that conquers steep inclines without gear noise or belt maintenance.</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">IP67 Rated</h3>
<p className="text-zinc-500 text-sm">Sealed electronics deck.</p>
</div>
<div className="mt-8">
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-3/4"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-zinc-500">
<span>Dust Tight</span>
<span>Waterproof</span>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 p-8 flex flex-col justify-end hover:border-white/10 transition-colors">
<div className="absolute top-8 left-8">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Pneumatic 8" Tires</h3>
<p className="text-zinc-500 text-sm">Shock absorption for gravel, roots, and uneven pavement.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5" id="trails">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Curated Trails</h2>
<p className="text-zinc-500 text-sm">Top rated locations across the US optimized for the Terra X1.</p>
</div>
<button className="text-sm text-white border-b border-white/30 hover:border-white pb-1 transition-colors">View all 42 locations</button>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar">

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[500px] relative rounded-lg overflow-hidden group cursor-pointer">
<img alt="Moab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-orange-400 uppercase tracking-wider">Utah</span>
<div className="flex gap-1">
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white/30" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4">Moab Slickrock</h3>
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
<div>
<span className="block text-zinc-400 text-xs">Distance</span>
<span className="block text-white text-sm font-medium">10.5 mi</span>
</div>
<div>
<span className="block text-zinc-400 text-xs">Difficulty</span>
<span className="block text-white text-sm font-medium">Expert</span>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[500px] relative rounded-lg overflow-hidden group cursor-pointer">
<img alt="PNW" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-orange-400 uppercase tracking-wider">Washington</span>
<div className="flex gap-1">
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4">Olympic Discovery</h3>
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
<div>
<span className="block text-zinc-400 text-xs">Distance</span>
<span className="block text-white text-sm font-medium">25.0 mi</span>
</div>
<div>
<span className="block text-zinc-400 text-xs">Difficulty</span>
<span className="block text-white text-sm font-medium">Intermediate</span>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[500px] relative rounded-lg overflow-hidden group cursor-pointer">
<img alt="Appalachia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-orange-400 uppercase tracking-wider">North Carolina</span>
<div className="flex gap-1">
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon className="text-white/30" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4">Blue Ridge Fire Road</h3>
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
<div>
<span className="block text-zinc-400 text-xs">Distance</span>
<span className="block text-white text-sm font-medium">18.2 mi</span>
</div>
<div>
<span className="block text-zinc-400 text-xs">Difficulty</span>
<span className="block text-white text-sm font-medium">Advanced</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden" id="accessories">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Essential Gear</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="bg-zinc-900/50 rounded-xl aspect-square flex items-center justify-center mb-6 relative overflow-hidden border border-white/5 hover:border-white/20 transition-all">
<img alt="Helmet" className="w-3/4 object-contain mix-blend-lighten grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 right-4">
<button className="w-8 h-8 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Terra Full-Face</h3>
<p className="text-zinc-500 text-xs mt-1">Carbon fiber reinforced</p>
</div>
<span className="text-zinc-300 text-sm">$249</span>
</div>
</div>

<div className="group">
<div className="bg-zinc-900/50 rounded-xl aspect-square flex items-center justify-center mb-6 relative overflow-hidden border border-white/5 hover:border-white/20 transition-all">

<div className="w-32 h-32 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-700 group-hover:text-orange-500 group-hover:border-orange-500 transition-colors">
<iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute top-4 right-4">
<button className="w-8 h-8 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Hyper Charger</h3>
<p className="text-zinc-500 text-xs mt-1">0-80% in 45 mins</p>
</div>
<span className="text-zinc-300 text-sm">$129</span>
</div>
</div>

<div className="group">
<div className="bg-zinc-900/50 rounded-xl aspect-square flex items-center justify-center mb-6 relative overflow-hidden border border-white/5 hover:border-white/20 transition-all">

<div className="w-32 h-32 rounded-full border-4 border-dashed border-zinc-700 flex items-center justify-center text-zinc-700 group-hover:border-zinc-500 group-hover:rotate-90 transition-all duration-700">
<iconify-icon icon="solar:settings-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute top-4 right-4">
<button className="w-8 h-8 rounded-full bg-black/50 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors">
<iconify-icon icon="solar:add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Mud-Terrain Kit</h3>
<p className="text-zinc-500 text-xs mt-1">Aggressive tread pattern</p>
</div>
<span className="text-zinc-300 text-sm">$89</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-xs">
<a className="text-white text-xl font-medium tracking-tighter mb-6 block" href="#">TERRA</a>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                        Designing the future of personal off-road mobility. Built for those who refuse to stop where the pavement ends.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="flex flex-col gap-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terra X1</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Parts</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Refurbished</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Explore</h4>
<ul className="flex flex-col gap-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Trail Map</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Events</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Support</h4>
<ul className="flex flex-col gap-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 Terra Boards Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
