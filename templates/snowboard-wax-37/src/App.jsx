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
      
<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<i className="w-5 h-5 text-white transition-transform group-hover:rotate-12" data-lucide="mountain-snow" strokeWidth="1.5"></i>
<span className="font-semibold tracking-tighter text-lg">BETTER WAX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Our Story</a>
<a className="hover:text-white transition-colors" href="#">Shop Wax</a>
<a className="hover:text-white transition-colors" href="#">Dealers</a>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="relative text-neutral-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Wasatch Mountains" className="w-full h-full object-cover opacity-60 grayscale scale-105" src="https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&amp;w=2727&amp;auto=format&amp;fit=crop" style={{filter: 'contrast(1.2) brightness(0.7)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-300">Salt Lake City, Utah</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.95] mb-6">
                FRICTION<br/>
<span className="text-neutral-500">PHOBIC.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Feeling slow on the mountain? You don’t need new boots. You need Better Wax. Built for real riders in the Wasatch.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Shop The Formula
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full md:w-auto px-8 py-3.5 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4 fill-white" data-lucide="play" strokeWidth="1.5"></i>
                    Watch The Edit
                </button>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden py-3">
<div className="flex items-center gap-12 whitespace-nowrap animate-marquee text-xs font-mono text-neutral-500 tracking-widest uppercase opacity-70">
<span>/// Ride Faster</span>
<span>/// Ride Better</span>
<span>/// No Hype</span>
<span>/// Wasatch Born</span>
<span>/// Cold Smoke Certified</span>
<span>/// Ride Faster</span>
<span>/// Ride Better</span>
<span>/// No Hype</span>
<span>/// Wasatch Born</span>
<span>/// Cold Smoke Certified</span>
<span>/// Ride Faster</span>
<span>/// Ride Better</span>
<span>/// No Hype</span>
<span>/// Wasatch Born</span>
<span>/// Cold Smoke Certified</span>
</div>
</div>
</header>

<section className="py-24 md:py-32 relative">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">WE INVENTED <br/><span className="text-neutral-500">BETTER WAX.</span></h2>
</div>
<div className="space-y-6 text-neutral-400 leading-relaxed font-light">
<p>
                        We started Better Wax because we weren’t happy with the options out there. We believe you can always do better.
                    </p>
<p>
                        Ever wonder how pros ride so fast? How Olympic snowboarders make it look effortless? It’s not magic. They just have better wax.
                    </p>
<p>
                        We source and blend the highest-quality wax out there. We’re problem solvers. We’re doers. We’re curious. Based in Salt Lake City. Built for real mountains.
                    </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="border border-white/10 rounded p-4 bg-white/5">
<i className="w-6 h-6 text-blue-400 mb-3" data-lucide="thermometer-snowflake" strokeWidth="1.5"></i>
<h3 className="text-sm font-medium text-white mb-1">Temp Specific</h3>
<p className="text-xs text-neutral-500">Optimized for Wasatch cold smoke.</p>
</div>
<div className="border border-white/10 rounded p-4 bg-white/5">
<i className="w-6 h-6 text-yellow-400 mb-3" data-lucide="zap" strokeWidth="1.5"></i>
<h3 className="text-sm font-medium text-white mb-1">Hydrophobic</h3>
<p className="text-xs text-neutral-500">Repels moisture for instant acceleration.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] w-full group overflow-hidden rounded-lg border border-white/10">
<img alt="Applying Wax" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-xs font-mono text-blue-400 mb-1">/// PROCESS</p>
<p className="text-lg font-medium tracking-tight">Hand-poured in SLC.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tighter mb-2">THE LINEUP</h2>
<p className="text-neutral-400">Professional grade formulas. No filler.</p>
</div>
<a className="text-sm text-white hover:text-neutral-400 transition-colors flex items-center gap-1" href="#">
                    View all gear <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-black border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
<div className="absolute top-4 right-4 text-xs font-mono text-neutral-500">BW-01</div>
<div className="h-64 flex items-center justify-center bg-neutral-900/50 rounded mb-6 overflow-hidden">

<div className="w-32 h-16 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5 rounded shadow-2xl transform group-hover:-rotate-2 transition-transform duration-500 flex items-center justify-center">
<span className="text-[10px] tracking-[0.2em] font-bold text-white/30">BETTER</span>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight">Universal Glide</h3>
<span className="text-sm font-medium">$18.00</span>
</div>
<p className="text-xs text-neutral-400 mb-6">All-temp formula. The daily driver for variable conditions.</p>

<div className="flex gap-2 mb-6">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="temp1" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs border border-white/20 text-white peer-checked:bg-white peer-checked:text-black transition-colors">
                                150g
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="temp1" type="radio"/>
<div className="px-3 py-1.5 rounded text-xs border border-white/20 text-neutral-500 hover:text-white peer-checked:bg-white peer-checked:text-black transition-colors">
                                750g
                            </div>
</label>
</div>
<button className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium uppercase tracking-wide rounded transition-colors">
                        Add to Cart
                    </button>
</div>

<div className="group relative bg-black border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all">
<div className="absolute top-4 right-4 text-xs font-mono text-blue-400">COLD</div>
<div className="h-64 flex items-center justify-center bg-neutral-900/50 rounded mb-6 overflow-hidden">
<div className="w-32 h-16 bg-gradient-to-br from-blue-900/40 to-blue-950 border border-blue-500/20 rounded shadow-2xl transform group-hover:-rotate-2 transition-transform duration-500 flex items-center justify-center">
<span className="text-[10px] tracking-[0.2em] font-bold text-white/30">BETTER</span>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight">Deep Freeze</h3>
<span className="text-sm font-medium">$22.00</span>
</div>
<p className="text-xs text-neutral-400 mb-6">Sub-zero performance. Hardened for aggressive ice and cold pow.</p>
<div className="flex gap-2 mb-6">
<div className="px-3 py-1.5 rounded text-xs border border-blue-500/30 text-blue-400 bg-blue-500/10">
                            -10°C to -30°C
                        </div>
</div>
<button className="w-full py-3 bg-white text-black hover:bg-neutral-200 text-xs font-medium uppercase tracking-wide rounded transition-colors">
                        Add to Cart
                    </button>
</div>

<div className="group relative bg-black border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all opacity-70 hover:opacity-100">
<div className="absolute top-4 right-4 text-xs font-mono text-neutral-500">KIT</div>
<div className="h-64 flex items-center justify-center bg-neutral-900/50 rounded mb-6">
<i className="w-12 h-12 text-neutral-600 group-hover:text-white transition-colors" data-lucide="package-open" strokeWidth="1"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium tracking-tight">Tuning Essentials</h3>
<span className="text-sm font-medium">$45.00</span>
</div>
<p className="text-xs text-neutral-400 mb-6">Scraper, brush, and iron. Everything you need to DIY.</p>
<div className="flex gap-2 mb-6 opacity-0">
<div className="px-3 py-1.5 rounded text-xs border border-transparent">placeholder</div>
</div>
<button className="w-full py-3 border border-white/20 hover:bg-white/5 text-white text-xs font-medium uppercase tracking-wide rounded transition-colors">
                        View Kit
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Powder Spray" className="w-full h-full object-cover opacity-20 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<i className="w-10 h-10 text-white/20 mb-8 fill-white/10" data-lucide="quote"></i>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
                "A little better wax goes a long way. This stuff handles the sticky spring slush and the deep January freeze without flinching."
            </h2>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-neutral-400" data-lucide="user"></i>
</div>
<div>
<p className="text-sm font-semibold text-white">Local Ripper</p>
<p className="text-xs text-neutral-500">Cottonwood Canyon Regular</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="space-y-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white" data-lucide="mountain" strokeWidth="1.5"></i>
<span className="font-semibold tracking-tighter">BETTER WAX</span>
</div>
<p className="text-neutral-500 text-sm">
                        Born in the Wasatch.<br/>
                        Problem Solvers.<br/>
                        Doers.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Universal Wax</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cold Temp</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warm Temp</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wholesale</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Stay Fast</h4>
<div className="flex gap-2">
<input className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-full placeholder:text-neutral-600" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-3 py-2 rounded hover:bg-neutral-200 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<p className="text-xs text-neutral-600">© 2024 Better Wax LLC. All rights reserved.</p>
<div className="flex gap-6">
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="instagram" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="youtube" strokeWidth="1.5"></i>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-[10vw] md:text-[12vw] font-bold text-neutral-900 tracking-tighter leading-none select-none opacity-50">
                    BETTER WAX
                </p>
</div>
</div>
</footer>


    </>
  );
}
