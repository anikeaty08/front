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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl font-bold tracking-tighter text-white group-hover:text-lime-400 transition-colors">SWIRL.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#benefits">For You</a>
<a className="hover:text-white transition-colors" href="#vendors">Brands &amp; Vendors</a>
</div>
<div className="flex items-center gap-4">
<button className="sm:text-sm hover:bg-lime-400 transition-colors active:scale-95 text-xs font-bold text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 cursor-pointer" onclick="window.location.href='https://lnkd.in/gBTnxYc3'" role="button">Join Waitlist
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-lime-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-blob"></div>
<div className="absolute top-0 left-0 -ml-40 -mt-40 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-[150px] opacity-5 animate-blob animation-delay-2000"></div>
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex gap-2 text-xs font-semibold text-lime-400 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                    AI-Powered Personalization
                </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter mb-6">
                    Swipe. Discover. <br/>
<span className="neon-glow-text text-lime-400">Express Your Style.</span>
</h1>
<p className="leading-relaxed text-lg text-slate-400 max-w-lg mb-8">
                    Experience fashion like never before. SWIRL learns your taste with every swipe, curating trends from top boutiques instantly.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-400/20 w-full sm:w-auto group">
<svg className="lucide lucide-apple w-5 h-5 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<div className="text-left">
<div className="text-[10px] uppercase leading-none opacity-60 font-semibold">Download on the</div>
<div className="text-sm font-bold leading-none mt-1">App Store</div>
</div>
</button>
<button className="flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3.5 rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto">
<svg className="lucide lucide-play w-5 h-5 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="text-left">
<div className="text-[10px] uppercase leading-none opacity-60 font-semibold">Get it on</div>
<div className="text-sm font-bold leading-none mt-1">Google Play</div>
</div>
</button>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center overflow-hidden grayscale"><img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center overflow-hidden grayscale"><img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/></div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center overflow-hidden grayscale"><img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/></div>
</div>
<span>Join 50k+ fashionistas</span>
</div>
</div>

<div className="flex lg:justify-end lg:mt-0 mt-12 relative justify-center">

<div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-neutral-800 shadow-2xl overflow-hidden neon-shadow">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-50"></div>

<div className="w-full h-full bg-neutral-950 relative flex flex-col">

<div className="px-5 pt-12 pb-3 flex justify-between items-center bg-neutral-950 z-40">
<svg className="lucide lucide-menu w-5 h-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="font-bold text-lg text-white tracking-tighter">SWIRL.</span>
<svg className="lucide lucide-shopping-bag w-5 h-5 text-white" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>

<div className="relative flex-1 w-full flex items-center justify-center p-4">

<div className="absolute w-64 h-96 bg-neutral-900 rounded-2xl shadow-sm card-stack-3 flex items-end p-4 overflow-hidden border border-white/5">
<img alt="Fashion 3" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="absolute w-64 h-96 bg-neutral-800 rounded-2xl shadow-md card-stack-2 flex items-end p-4 overflow-hidden border border-white/5">
<img alt="Fashion 2" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>

<div className="absolute w-64 h-96 bg-neutral-900 rounded-2xl shadow-xl card-stack-1 animate-swipe overflow-hidden group cursor-pointer border border-white/10">
<img alt="Fashion 1" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-5 text-white">
<h3 className="font-semibold text-lg tracking-tight">Urban Silk Set</h3>
<p className="text-xs font-medium text-lime-400" style={{}}>AED 240 • Zara Dubai</p>
</div>

<div className="absolute top-1/2 left-4 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="absolute top-1/2 right-4 w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center shadow-lg text-black hover:scale-105 transition-transform">
<svg className="lucide lucide-heart w-5 h-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>

<div className="h-16 bg-neutral-950 border-t border-neutral-900 flex justify-around items-center px-4 z-40">
<svg className="lucide lucide-home w-6 h-6 text-lime-400" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<svg className="lucide lucide-search w-6 h-6 text-neutral-600 hover:text-white transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<svg className="lucide lucide-message-circle w-6 h-6 text-neutral-600 hover:text-white transition-colors" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg className="lucide lucide-user w-6 h-6 text-neutral-600 hover:text-white transition-colors" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-4 lg:-right-12 bg-neutral-900 p-4 rounded-xl shadow-xl border border-white/10 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 border border-lime-400/20">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="text-xs">
<div className="font-semibold text-white">Match Found!</div>
<div className="text-slate-400">98% Style Match</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black border-neutral-900 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-8">Trending Brands &amp; Boutiques</p>
<div className="flex flex-wrap gap-8 md:gap-20 hover:opacity-100 transition-all duration-500 opacity-40 gap-x-8 gap-y-8 items-center justify-center">
<span className="hover:text-lime-400 transition-colors cursor-default text-xl font-bold text-white tracking-tight">amazon</span>
<span className="hover:text-lime-400 transition-colors cursor-default text-xl font-bold text-white tracking-tight">MYNTRA</span>
<span className="text-xl font-bold tracking-tight text-white hover:text-lime-400 transition-colors cursor-default">AJIO</span>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-24 pb-24" id="how-it-works">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Discovery made simple</h2>
<p className="text-lg text-slate-400">Stop scrolling through endless grids. Swirl brings the fun back to fashion shopping with a simple, intuitive interface.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-black p-10 rounded-2xl border border-neutral-800 shadow-sm hover:border-lime-500/50 transition-colors relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-lime-500/5 rounded-full group-hover:scale-110 transition-transform blur-xl"></div>
<div className="relative z-10 w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-lime-400 mb-8 shadow-sm group-hover:text-white group-hover:bg-lime-500 transition-all">
<svg className="lucide lucide-hand-metal w-6 h-6 rotate-90" data-lucide="hand-metal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 1 0-4 0v2"></path><path d="M10 10.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Swipe to Like</h3>
<p className="text-sm text-slate-400 leading-relaxed">Right for yes, left for no. Our interface is designed for speed and fun, letting you browse hundreds of items in minutes.</p>
</div>

<div className="bg-black p-10 rounded-2xl border border-neutral-800 shadow-sm hover:border-white/30 transition-colors relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-110 transition-transform blur-xl"></div>
<div className="relative z-10 w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-white mb-8 shadow-sm group-hover:bg-white group-hover:text-black transition-all">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">AI Learns You</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our smart algorithm analyzes your swipes, fabrics, and brands to build a unique style profile just for you.</p>
</div>

<div className="bg-black p-10 rounded-2xl border border-neutral-800 shadow-sm hover:border-lime-500/50 transition-colors relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-lime-500/5 rounded-full group-hover:scale-110 transition-transform blur-xl"></div>
<div className="relative z-10 w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-lime-400 mb-8 shadow-sm group-hover:text-white group-hover:bg-lime-500 transition-all">
<svg className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Shop Instantly</h3>
<p className="text-sm text-slate-400 leading-relaxed">Found 'the one'? Purchase directly through the app or get redirected to the boutique's checkout page instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="space-y-10">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Why fashion lovers choose Swirl</h2>
<p className="text-slate-400 text-lg">Traditional e-commerce is boring. We are changing the game with a social-first, hyper-personalized approach.</p>
</div>
<div className="space-y-4">
<div className="flex gap-5 p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors">
<div className="shrink-0 w-12 h-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-white">
<svg className="lucide lucide-globe-2 w-5 h-5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="font-semibold text-white text-base">Global &amp; Local Trends</h4>
<p className="text-sm text-slate-400 mt-2">From Parisian runways to Dubai street style and Mumbai festive wear.</p>
</div>
</div>
<div className="flex gap-5 p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors">
<div className="shrink-0 w-12 h-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-white">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-white text-base">Privacy First</h4>
<p className="text-sm text-slate-400 mt-2">We value your data. Transparent AI that works for you, not against you.</p>
</div>
</div>
<div className="flex gap-5 p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors">
<div className="shrink-0 w-12 h-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-white">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h4 className="font-semibold text-white text-base">Social Shopping</h4>
<p className="text-sm text-slate-400 mt-2">Share polls with friends, create mood boards, and get real-time feedback.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-lime-500 opacity-5 blur-3xl rounded-full"></div>
<div className="relative bg-black border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
<div className="grid grid-cols-2 border-b border-neutral-800 bg-neutral-900/50">
<div className="p-5 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">Typical E-Commerce</div>
<div className="p-5 text-center text-xs font-semibold text-lime-400 uppercase tracking-wide bg-neutral-900 border-l border-neutral-800">SWIRL App</div>
</div>
<div className="divide-y divide-neutral-800">
<div className="grid grid-cols-2 py-5 px-8 items-center">
<div className="text-sm text-slate-500">Static Grids</div>
<div className="text-sm font-medium text-white flex items-center gap-3 pl-4 border-l border-neutral-800">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-lime-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Interactive Swipe
                                </div>
</div>
<div className="grid grid-cols-2 py-5 px-8 items-center">
<div className="text-sm text-slate-500">Generic Filters</div>
<div className="text-sm font-medium text-white flex items-center gap-3 pl-4 border-l border-neutral-800">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-lime-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> AI Personalization
                                </div>
</div>
<div className="grid grid-cols-2 py-5 px-8 items-center">
<div className="text-sm text-slate-500">Overwhelming Options</div>
<div className="text-sm font-medium text-white flex items-center gap-3 pl-4 border-l border-neutral-800">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-lime-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Curated Selections
                                </div>
</div>
<div className="grid grid-cols-2 py-5 px-8 items-center">
<div className="text-sm text-slate-500">Lonely Experience</div>
<div className="text-sm font-medium text-white flex items-center gap-3 pl-4 border-l border-neutral-800">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-lime-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Community Driven
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="vendors">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1">
<div className="rounded-xl border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm p-2 shadow-2xl">
<div className="bg-black rounded-lg p-6 border border-neutral-700">

<div className="flex justify-between items-center mb-8">
<div className="text-sm font-semibold text-slate-300">Campaign Analytics</div>
<div className="text-[10px] font-medium text-slate-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">Last 30 Days</div>
</div>
<div className="flex gap-4 mb-8">
<div className="flex-1 bg-neutral-900 p-5 rounded-lg border border-neutral-800">
<div className="text-xs text-slate-400 mb-2 font-medium uppercase">Swipe Rights</div>
<div className="text-3xl font-bold text-lime-400">12.4k</div>
<div className="text-xs text-lime-400/70 mt-2 flex items-center gap-1"><svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +18%</div>
</div>
<div className="flex-1 bg-neutral-900 p-5 rounded-lg border border-neutral-800">
<div className="text-xs text-slate-400 mb-2 font-medium uppercase">Conversion Rate</div>
<div className="text-3xl font-bold text-white">4.2%</div>
<div className="text-xs text-slate-400 mt-2 flex items-center gap-1"><svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +2.1%</div>
</div>
</div>
<div className="space-y-4">
<div className="h-1.5 bg-neutral-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-lime-400 w-[70%]"></div>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-neutral-600 w-[40%]"></div>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-neutral-600 w-[55%]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 mb-6 uppercase tracking-wider">
                        For Brands &amp; Boutiques
                    </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">Reach the audience that matters.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Stop wasting budget on broad impressions. SWIRL connects you with Gen Z and Millennial shoppers who are actively looking for your style.
                    </p>
<ul className="space-y-5 mb-10 text-sm text-slate-300">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-lime-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Hyper-targeted user acquisition
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-lime-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Real-time preference data &amp; analytics
                        </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-lime-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Seamless catalog integration
                        </li>
</ul>
<a className="inline-flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors font-bold text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#">
                        Partner with Swirl
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="text-center bg-black border-neutral-900 border-t pt-24 pb-24">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Join the style revolution</h2>
<div className="flex justify-center -space-x-4 mb-8">
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 overflow-hidden grayscale"><img alt="user" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 overflow-hidden grayscale"><img alt="user" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 overflow-hidden grayscale"><img alt="user" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/></div>
<div className="w-12 h-12 rounded-full border-2 border-black bg-neutral-900 overflow-hidden flex items-center justify-center text-xs font-bold text-white">+2k</div>
</div>
<p className="font-medium text-slate-500 mb-8">Be part of the community on Instagram.</p>
<div className="flex flex-col sm:flex-row gap-6 mb-16 gap-x-6 gap-y-6 items-center justify-center">
<button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="font-semibold cursor-pointer" onclick="window.location.href='https://www.instagram.com/swirl.fashion/'" role="button">@swirl.fashion</span>
</button>
<span className="hidden sm:block text-neutral-800">|</span>
<button className="flex items-center gap-2 text-slate-400 hover:text-lime-400 transition-colors">
</button>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10 lg:p-16 relative overflow-hidden group hover:border-lime-500/30 transition-colors">
<div className="relative z-10">
<h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-white tracking-tight">Ready to swipe?</h3>
<p className="text-slate-400 max-w-md mr-auto mb-8 ml-auto">Join waitlist now and get early access to exclusive drops from your favorite local brands.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-lime-400 transition-colors cursor-pointer text-sm font-bold text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" onclick="window.location.href='https://lnkd.in/gBTnxYc3'" role="button">Join Waitlist</button>
</div>
</div>

<div className="absolute top-0 right-0 w-80 h-80 bg-lime-500 opacity-5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
</div>
</div>
</section>

<footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="font-bold text-xl text-white tracking-tighter">SWIRL.</span>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Reimagining fashion discovery for the digital generation. Simple, social, and smart.
                    </p>
<div className="flex gap-4">
</div>
</div>
<div className="">
<h4 className="font-semibold text-sm text-white mb-5">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-sm text-white mb-5">Vendors</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Partner with Us</a></li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-sm text-white mb-5">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Terms of Service</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2023 Swirl Technologies. All rights reserved.</p>
<div className="flex gap-6">
<span>Designed for UAE &amp; India</span>
<span>English (US)</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
