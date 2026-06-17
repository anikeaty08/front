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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-card rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/50">
<a className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5 transition-colors" href="#">
<span className="iconify text-lime-400" data-icon="lucide:zap" data-width="20"></span>
<span className="font-display font-bold tracking-tight text-white">SAVIS</span>
</a>
<div className="hidden md:flex items-center">
<a className="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#destinations">Destinations</a>
<a className="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#experiences">Curated</a>
<a className="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#journal">Journal</a>
</div>
<button className="ml-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-lime-400 transition-colors">
                Book Now
            </button>
</div>
</nav>

<header className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-10 px-6 z-10">

<div className="text-center max-w-5xl mx-auto space-y-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-mono mb-4 animate-float">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                NEW SEASON DROPPED
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] text-white">
                VIETNAM <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-500">UNFILTERED.</span>
</h1>
<p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                Forget the guidebooks. We engineer hyper-curated, immersive journeys through the chaotic soul of Southeast Asia.
            </p>

<div className="mt-12 w-full max-w-lg mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-zinc-900 rounded-xl p-2 ring-1 ring-white/10">
<span className="iconify text-zinc-500 ml-3" data-icon="lucide:search" data-width="20"></span>
<input className="w-full bg-transparent border-0 px-4 py-3 text-white placeholder-zinc-500 focus:ring-0 focus:outline-none text-sm font-medium" placeholder="Type 'Ha Giang Loop' or 'Street Food'..." type="text"/>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>
</header>

<div className="relative w-full overflow-hidden bg-lime-400 py-3 rotate-1 z-20 mix-blend-hard-light">
<div className="flex whitespace-nowrap animate-marquee">
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Heritage</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Adventure</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Cuisine</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Nightlife</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Nature</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Heritage</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Adventure</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Cuisine</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Nightlife</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Nature</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Heritage</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Adventure</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Cuisine</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Nightlife</span>
<span className="text-black font-display font-bold text-2xl mx-4 uppercase">• Nature</span>
</div>
</div>

<section className="relative z-10 py-32 px-6 max-w-7xl mx-auto" id="destinations">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Select your <span className="text-lime-400">Biome</span></h2>
<p className="mt-4 text-zinc-400 max-w-sm">Diverse landscapes requiring distinct states of mind.</p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-white border-b border-white/20 pb-1 hover:border-lime-400 transition-colors" href="#">
                Explore Full Atlas 
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-6 auto-rows-[400px]">

<div className="group relative md:col-span-3 lg:col-span-2 row-span-1 rounded-3xl overflow-hidden cursor-pointer border border-white/10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">POPULAR</span>
</div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-3xl font-display font-bold text-white mb-2">Halong Bay</h3>
<p className="text-zinc-300 line-clamp-2 mb-4 group-hover:text-white transition-colors">Drift through emerald waters and thousands of towering limestone islands aboard a private junk boat.</p>
<div className="flex gap-3">
<span className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="18"></span>
</span>
</div>
</div>
</div>

<div className="group relative md:col-span-3 lg:col-span-1 row-span-1 rounded-3xl overflow-hidden cursor-pointer border border-white/10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" src="https://images.unsplash.com/photo-1565060169332-97be23547f21?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-display font-bold text-white mb-1">Hanoi Street</h3>
<p className="text-sm text-zinc-300">Culinary chaos.</p>
</div>
</div>

<div className="group relative md:col-span-6 lg:col-span-1 row-span-1 rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/10 flex flex-col p-8 justify-between hover:border-lime-400/50 transition-colors">
<div>
<span className="iconify text-lime-400 mb-4" data-icon="lucide:compass" data-strokeWidth="1" data-width="40"></span>
<h3 className="text-2xl font-display font-bold text-white">Custom Trip?</h3>
</div>
<div>
<p className="text-zinc-400 text-sm mb-6">Build your itinerary from scratch with our AI planner.</p>
<button className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-lime-400 transition-colors">
                        Start Planning
                    </button>
</div>
</div>

<div className="group relative md:col-span-3 lg:col-span-1 row-span-1 rounded-3xl overflow-hidden cursor-pointer border border-white/10">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" src="https://images.unsplash.com/photo-1552084992-6f2964e5d6d9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-display font-bold text-white mb-1">Sapa Hills</h3>
<p className="text-sm text-zinc-300">Trekking &amp; Tribes.</p>
</div>
</div>

<div className="group relative md:col-span-3 lg:col-span-3 row-span-1 rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a]">
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[100px]"></div>
</div>
<div className="relative h-full flex flex-col md:flex-row items-center p-8 gap-8">
<div className="flex-1 space-y-4">
<div className="inline-block px-3 py-1 rounded-md bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">Editor's Pick</div>
<h3 className="text-4xl font-display font-bold text-white">The Golden Bridge</h3>
<p className="text-zinc-400">Walk through the hands of gods. An architectural marvel suspended in the clouds of Da Nang.</p>
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors mt-4" href="#">
                            Read Journal <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>
<div className="w-full md:w-1/2 h-64 md:h-full rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563811653452-f5c7eb343110?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/50 border-y border-white/5 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
<img className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="glass-card p-4 rounded-xl flex items-center gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-sm font-bold text-white">Live Concierge</div>
<div className="text-xs text-zinc-400">Online now • 2 min response</div>
</div>
<button className="ml-auto bg-white text-black p-2 rounded-lg hover:bg-lime-400 transition-colors">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
</button>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div>
<h2 className="text-4xl font-display font-bold text-white mb-2">Design your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Vibe</span></h2>
<p className="text-zinc-400">Toggle your preferences. We'll handle the logistics.</p>
</div>
<div className="space-y-4">

<label className="group relative flex cursor-pointer items-center justify-between rounded-2xl bg-[#111] border border-white/10 p-5 transition-all hover:border-lime-500 hover:bg-[#151515]">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:camera" data-width="24"></span>
</div>
<div>
<div className="font-bold text-white text-lg">Cinematic Documentation</div>
<div className="text-xs text-zinc-500 font-mono">DRONE / FILM / DSLR</div>
</div>
</div>
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 rounded border border-zinc-600 peer-checked:bg-lime-400 peer-checked:border-lime-400 flex items-center justify-center transition-colors">
<span className="iconify text-black opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
</label>

<label className="group relative flex cursor-pointer items-center justify-between rounded-2xl bg-[#111] border border-white/10 p-5 transition-all hover:border-purple-500 hover:bg-[#151515]">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:moon" data-width="24"></span>
</div>
<div>
<div className="font-bold text-white text-lg">Nocturnal Access</div>
<div className="text-xs text-zinc-500 font-mono">SPEAKEASIES / NIGHT MARKETS</div>
</div>
</div>
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 rounded border border-zinc-600 peer-checked:bg-purple-500 peer-checked:border-purple-500 flex items-center justify-center transition-colors">
<span className="iconify text-white opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
</label>

<label className="group relative flex cursor-pointer items-center justify-between rounded-2xl bg-[#111] border border-white/10 p-5 transition-all hover:border-cyan-500 hover:bg-[#151515]">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:bike" data-width="24"></span>
</div>
<div>
<div className="font-bold text-white text-lg">Off-Grid Transit</div>
<div className="text-xs text-zinc-500 font-mono">MINK / JEEP / MOTORBIKE</div>
</div>
</div>
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 rounded border border-zinc-600 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 flex items-center justify-center transition-colors">
<span className="iconify text-black opacity-0 peer-checked:opacity-100" data-icon="lucide:check" data-width="16"></span>
</div>
</label>
</div>
</div>
</div>
</section>

<footer className="relative bg-black pt-32 pb-12 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start mb-24">
<div className="max-w-xl">
<h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8">
                        READY TO <br/>
                        GET <span className="text-lime-400 italic">LOST?</span>
</h2>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg hover:scale-105 transition-transform">
                            Start Your Journey
                        </button>
<button className="px-8 py-4 rounded-full border border-zinc-700 text-white font-bold text-lg hover:bg-white hover:text-black transition-colors">
                            View Lookbook
                        </button>
</div>
</div>
<div className="mt-16 lg:mt-0 grid grid-cols-2 gap-x-16 gap-y-8">
<div>
<h4 className="text-zinc-500 font-mono text-xs mb-4">SITEMAP</h4>
<ul className="space-y-2 text-sm font-medium">
<li><a className="hover:text-lime-400 transition-colors" href="#">Destinations</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Experiences</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">About</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-500 font-mono text-xs mb-4">SOCIALS</h4>
<ul className="space-y-2 text-sm font-medium">
<li><a className="hover:text-lime-400 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">TikTok</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">YouTube</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-900 pt-8">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="iconify text-lime-400" data-icon="lucide:zap" data-width="24"></span>
<span className="text-xl font-display font-bold tracking-tight text-white">SAVIS</span>
</div>
<div className="text-right">
<p className="text-zinc-600 text-xs">© 2024 SAVIS VIETNAM. EST HANOI.</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none opacity-[0.03]">
<span className="text-[20vw] font-display font-bold text-white whitespace-nowrap">VIETNAM</span>
</div>
</footer>

    </>
  );
}
