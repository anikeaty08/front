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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-12">
<a className="text-2xl font-bold tracking-tighter text-white" href="#">
            9F
          </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#contact">
            Contact
          </a>
<button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full px-5 py-2 text-sm font-medium text-white transition-all">
            Get Started
          </button>
</div>
</div>
</div>
</nav>

<section className="relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=3200&amp;auto=format&amp;fit=crop)] bg-cover bg-center opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col text-center items-center space-y-8 pt-12 sm:pt-20">

<div className="mb-2">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
            Scale to 9-Figure Success
          </span>
</div>

<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter max-w-6xl leading-[1.05]">
          Scale Beyond Seven &amp; Eight Figures. <span className="gradient-text">Build The Nine-Figure Brand</span> You Were Born To Lead.
        </h1>

<p className="max-w-3xl text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed">
          At 9Figures, we don't just run blind ads. We own the growth engine! From product-to-profit, from Meta to Amazon to TikTok, we design, build, operate and exit your path to nine figures.
        </p>

<div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
<button className="button-9fig" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner-button">
              Start Your Journey
              <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<a className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border border-white/20 rounded-full px-6 py-3.5 backdrop-blur-lg transition-all" href="#case-studies">
<i className="w-5 h-5" data-lucide="play-circle"></i>
            See Success Stories
          </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 pt-12 border-t border-white/10 max-w-4xl w-full">
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">$2.4B+</div>
<div className="text-sm text-zinc-400">Revenue Generated</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">127+</div>
<div className="text-sm text-zinc-400">Brands Scaled</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">4.8x</div>
<div className="text-sm text-zinc-400">Avg. ROAS</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-1">23</div>
<div className="text-sm text-zinc-400">9-Figure Exits</div>
</div>
</div>
</div>

<div className="relative mt-20 sm:mt-32">

<div className="absolute inset-0 -top-16 mx-auto h-64 max-w-5xl rounded-full bg-gradient-to-r from-violet-600/30 via-purple-500/20 to-fuchsia-600/30 blur-3xl"></div>

<div className="relative ring-1 ring-white/10 bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-2xl overflow-hidden backdrop-blur-xl">
<div className="border-b border-white/10 bg-white/5 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<span className="text-sm text-zinc-400 font-medium ml-4">Growth Dashboard</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="maximize-2"></i>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 sm:p-8">

<div className="lg:col-span-2 bg-white/5 rounded-xl ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">Revenue Growth</h3>
<p className="text-sm text-zinc-400 mt-1">Monthly performance overview</p>
</div>
<div className="flex items-center gap-2 bg-green-500/10 text-green-400 rounded-full px-3 py-1.5 text-sm font-medium">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                  +247%
                </div>
</div>
<div className="h-48 flex items-end justify-between gap-2">
<div className="flex-1 bg-gradient-to-t from-violet-500/80 to-violet-500/40 rounded-t-lg" style={{height: '45%'}}></div>
<div className="flex-1 bg-gradient-to-t from-violet-500/80 to-violet-500/40 rounded-t-lg" style={{height: '52%'}}></div>
<div className="flex-1 bg-gradient-to-t from-violet-500/80 to-violet-500/40 rounded-t-lg" style={{height: '68%'}}></div>
<div className="flex-1 bg-gradient-to-t from-violet-500/80 to-violet-500/40 rounded-t-lg" style={{height: '71%'}}></div>
<div className="flex-1 bg-gradient-to-t from-violet-500/80 to-violet-500/40 rounded-t-lg" style={{height: '85%'}}></div>
<div className="flex-1 bg-gradient-to-t from-violet-500 to-violet-400 rounded-t-lg shadow-lg shadow-violet-500/50" style={{height: '100%'}}></div>
</div>
<div className="flex items-center justify-between mt-4 text-xs text-zinc-500">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span className="text-violet-400 font-medium">Jun</span>
</div>
</div>

<div className="space-y-4">
<div className="bg-white/5 rounded-xl ring-1 ring-white/10 p-5">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg ring-1 ring-blue-500/20">
<i className="w-5 h-5 text-blue-400" data-lucide="shopping-cart"></i>
</div>
<span className="text-sm text-zinc-400">Total Orders</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">47,293</div>
<div className="flex items-center gap-1 text-xs text-green-400 mt-2">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
<span>18% vs last month</span>
</div>
</div>
<div className="bg-white/5 rounded-xl ring-1 ring-white/10 p-5">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-purple-500/10 rounded-lg ring-1 ring-purple-500/20">
<i className="w-5 h-5 text-purple-400" data-lucide="users"></i>
</div>
<span className="text-sm text-zinc-400">Active Customers</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">12,847</div>
<div className="flex items-center gap-1 text-xs text-green-400 mt-2">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
<span>24% vs last month</span>
</div>
</div>
<div className="bg-white/5 rounded-xl ring-1 ring-white/10 p-5">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-emerald-500/10 rounded-lg ring-1 ring-emerald-500/20">
<i className="w-5 h-5 text-emerald-400" data-lucide="dollar-sign"></i>
</div>
<span className="text-sm text-zinc-400">Avg. Order Value</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">$247</div>
<div className="flex items-center gap-1 text-xs text-green-400 mt-2">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
<span>12% vs last month</span>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 bg-white/5 px-6 py-5">
<div className="flex flex-wrap items-center justify-between gap-4">
<span className="text-sm text-zinc-400">Integrated Platforms:</span>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">M</div>
<span className="text-sm text-zinc-300">Meta</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-bold">A</div>
<span className="text-sm text-zinc-300">Amazon</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-black ring-1 ring-white/20 flex items-center justify-center text-white text-xs font-bold">T</div>
<span className="text-sm text-zinc-300">TikTok</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white text-xs font-bold">S</div>
<span className="text-sm text-zinc-300">Shopify</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
