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
      

<nav className="w-full fixed top-0 z-50 pt-6 px-8">
<div className="glass-card flex max-w-7xl rounded-full mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between transition-all duration-300">
<div className="flex items-center gap-2">
<div className="bg-sage p-1.5 rounded-lg">
<svg className="lucide lucide-compass w-5 h-5 text-black" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="font-medium text-lg tracking-tight text-white">Voyage.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#">Destinations</a>
<a className="transition-colors hover:text-white" href="#">Curated Trips</a>
<a className="transition-colors hover:text-white" href="#">Journal</a>
<a className="transition-colors hover:text-white" href="#">Membership</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium transition-colors hidden sm:block hover:text-white" href="#">Log in</a>
<button className="bg-sage px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 text-black hover:bg-white group">
                    Start Planning
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<main className="flex-grow flex sm:px-12 pt-40 pr-6 pb-20 pl-6 relative items-center justify-center border-b border-white/5">
<div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5 flex flex-col gap-8 relative z-10">
<div className="inline-flex items-center gap-2 self-start glass-card px-3 py-1.5 rounded-full border border-neutral-800">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
</span>
<span className="text-xs font-medium text-sage tracking-wide uppercase">New Season: Kyoto &amp; Patagonia</span>
</div>
<h1 className="text-6xl sm:text-7xl font-medium tracking-tight leading-[1.1] text-white">
                    Curating the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8CDC7] to-neutral-500">Uncharted.</span>
</h1>
<p className="text-xl font-light leading-relaxed max-w-lg text-neutral-400">
                    Experience the world's most breathtaking destinations with itineraries crafted for the modern explorer. Luxury, adventure, and comfort in one seamless booking.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex gap-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 h-14 rounded-2xl px-8 shadow-[0_0_20px_rgba(37,99,235,0.3)] items-center justify-center">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                        Explore Destinations
                    </button>
<button className="hover:border-sage transition-all duration-300 flex gap-2 group hover:bg-neutral-900 text-base font-medium text-white h-14 border-neutral-700 border rounded-2xl px-8 items-center justify-center">
<svg className="lucide lucide-play-circle w-5 h-5 group-hover:text-sage transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Watch The Film
                    </button>
</div>
<div className="pt-6 border-t flex items-center gap-6 mt-4 border-neutral-800/50">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] flex items-center justify-center text-xs font-medium bg-neutral-800 text-white">
                            +2k
                        </div>
</div>
<div>
<div className="flex items-center gap-1 text-sage">
<svg className="w-4 h-4 fill-current" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-4 h-4 fill-current" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-500 mt-0.5">Trusted by global travelers</p>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[600px] w-full hidden lg:block">
<div className="grid grid-cols-12 grid-rows-6 gap-4 h-full w-full">

<div className="col-span-5 row-span-6 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-2xl">
<img alt="Mountain Landscape" className="transition-transform duration-700 group-hover:scale-110 opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t to-transparent from-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs font-medium uppercase tracking-wider text-sage mb-1">Adventure</p>
<h3 className="text-xl font-medium tracking-tight">Swiss Alps</h3>
</div>
</div>

<div className="col-span-7 row-span-3 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-2xl">
<img alt="Lake Switzerland" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-md border px-3 py-1.5 rounded-full flex items-center gap-2 bg-white/10 border-white/10">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
<span className="text-xs font-medium text-white">Popular</span>
</div>
</div>

<div className="col-span-4 row-span-3 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-2xl">
<img alt="Kyoto Streets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-3 row-span-3 flex items-center justify-center relative">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full absolute animate-[spin_10s_linear_infinite] text-slate-700" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text className="text-[10px] uppercase font-bold tracking-widest fill-current">
<textpath xlink:href="#curve">
                                        • Discover More • Discover More • Discover More
                                    </textpath>
</text>
</svg>
<button className="w-16 h-16 rounded-full bg-sage flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-sage/20 z-10">
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-black" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="absolute top-[40%] right-[-20px] glass-card p-5 rounded-3xl w-64 shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wide text-neutral-400">Trip Summary</span>
<svg className="lucide lucide-more-horizontal text-neutral-500 w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-100 text-cyan-600">
<svg className="lucide lucide-plane w-5 h-5 fill-current" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Kyoto, Japan</p>
<p className="text-xs text-neutral-400">Oct 24 - Nov 02</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border bg-white/5 border-white/5">
<span className="text-xs text-neutral-400">Total Price</span>
<span className="text-sm font-semibold text-sage">$3,420.00</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs font-medium w-max px-2 py-1 rounded-md text-indigo-400 bg-indigo-400/10">
<svg className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        Confirmed
                    </div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 sm:px-12 relative border-b border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-indigo-400 font-medium tracking-wide text-sm mb-2 block uppercase">Editor's Choice</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Curated Selections</h2>
</div>
<a className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                    View all destinations 
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer glass-card border-0 p-0">
<img alt="Cinque Terre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium text-white mb-2">Cinque Terre, Italy</h3>
<p className="text-neutral-300 text-sm font-light line-clamp-2 max-w-md">Coastal villages perched on rugged cliffs, offering colorful architecture and pristine Mediterranean waters.</p>
</div>
<div className="glass-card px-4 py-2 rounded-full text-sm font-medium text-white backdrop-blur-md">
                                $2,400 / week
                            </div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group cursor-pointer glass-card border-0 p-0">
<img alt="Santorini" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-1">Santorini, Greece</h3>
<p className="text-neutral-400 text-xs uppercase tracking-wider">Mediterranean Escape</p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden group cursor-pointer glass-card border-0 p-0">
<img alt="Iceland" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-8 w-full">
<h3 className="text-xl font-medium text-white mb-1">Reykjavík, Iceland</h3>
<p className="text-neutral-400 text-xs uppercase tracking-wider">Northern Lights Tour</p>
</div>
</div>

<div className="md:col-span-2 relative rounded-3xl overflow-hidden glass-card p-10 flex flex-col justify-center items-start group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-6 text-sage">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Personalized Concierge</h3>
<p className="text-neutral-400 text-base font-light leading-relaxed max-w-xl">
                        Our members receive 24/7 dedicated support. From last-minute dinner reservations at Michelin-starred restaurants to private jet charters, we handle the details so you can focus on the journey.
                    </p>
<a className="mt-8 text-white font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Learn about membership <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 sm:px-12 bg-[#080808]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Voyage Standard</h2>
<p className="text-neutral-500 max-w-xl mx-auto font-light">Redefining luxury travel through technology and human connection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card-hover p-8 rounded-3xl glass-card transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/5 flex items-center justify-center mb-6 text-indigo-400">
<svg className="lucide lucide-globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Global Access</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Exclusive entry to over 5,000 private properties and resorts worldwide, vetted personally by our team.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl glass-card transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-white/5 flex items-center justify-center mb-6 text-emerald-400">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Secure Booking</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">State-of-the-art encryption and payment security. Your data and itinerary details are protected at all times.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl glass-card transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-white/5 flex items-center justify-center mb-6 text-orange-400">
<svg className="lucide lucide-heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="M18 15v2.25a2.75 2.75 0 0 1-5.5 0v-2.25"></path><path d="M19 9z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Tailored Experiences</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">Every trip is customized. Whether you prefer culinary tours or adrenaline sports, we build the map around you.</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 sm:px-12">
<div className="max-w-7xl mx-auto">
<div className="relative h-[65vh] rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl">

<img alt="Luxury Hotel" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-sage mb-4 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full border border-white/10">Hotel of the Month</span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">The Aman Tokyo</h2>
<p className="max-w-xl text-neutral-200 text-lg font-light leading-relaxed opacity-90">
                        An urban sanctuary high above the Otemachi Tower. Experience traditional Japanese design blended with modern luxury.
                    </p>
<button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-sage transition-colors duration-300">
                        View Property
                    </button>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 sm:px-12 border-b border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<h3 className="text-2xl font-medium text-white tracking-tight">Seasonal Moodboards</h3>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">

<div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
<img alt="Desert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<span className="text-sage text-xs font-medium uppercase tracking-wider block mb-1">Expedition</span>
<span className="text-2xl text-white font-medium">Namib Desert</span>
</div>
</div>

<div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group">
<img alt="Water" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<span className="text-sage text-xs font-medium uppercase tracking-wider block mb-1">Relax</span>
<span className="text-xl text-white font-medium">Maldives</span>
</div>
</div>

<div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
<img alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
<img alt="Urban" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-sm font-medium border-b border-white">View Gallery</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 sm:px-12">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">
<span className="text-sage text-xs font-medium uppercase tracking-[0.2em] mb-3">The Journal</span>
<h3 className="text-4xl font-medium text-white tracking-tight mb-4">Stories from the Field</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<img alt="Story 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<span>Oct 12, 2023</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Culinary</span>
</div>
<h4 className="text-xl font-medium text-white mb-2 group-hover:text-sage transition-colors">A Weekend in Copenhagen</h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Discovering the new wave of Nordic cuisine and sustainable design in Denmark's capital.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<img alt="Story 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<span>Sep 28, 2023</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Culture</span>
</div>
<h4 className="text-xl font-medium text-white mb-2 group-hover:text-sage transition-colors">The Colors of Marrakech</h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Navigating the souks and hidden riads of Morocco's most vibrant city.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<img alt="Story 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<span>Sep 15, 2023</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Guide</span>
</div>
<h4 className="text-xl font-medium text-white mb-2 group-hover:text-sage transition-colors">Packing for Patagonia</h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">Essential gear and preparation for trekking through South America's wilderness.</p>
</article>
</div>
</div>
</section>

<section className="py-32 px-6 sm:px-12 relative overflow-hidden border-t border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-5xl font-medium tracking-tight text-white mb-6">Unlock the world.</h2>
<p className="text-neutral-400 font-light text-lg mb-10 leading-relaxed">
                Join our exclusive newsletter for weekly travel inspiration, member-only offers, and hidden gems from around the globe.
            </p>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<input className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-5 text-white placeholder-neutral-600 focus:outline-none focus:border-sage/50 focus:ring-1 focus:ring-sage/50 transition-all font-light" placeholder="email@address.com" type="email"/>
</div>
<button className="h-14 bg-sage text-black font-medium rounded-xl px-8 hover:bg-white transition-colors duration-300" type="button">
                    Subscribe
                </button>
</form>
<p className="text-neutral-600 text-xs mt-4">No spam. Unsubscribe at any time.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10 px-6 sm:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-16">

<div className="col-span-2 md:col-span-4 flex flex-col items-start gap-6">
<div className="flex items-center gap-2">
<div className="bg-sage/20 p-1.5 rounded-lg">
<svg className="lucide lucide-compass w-5 h-5 text-sage" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="font-medium text-lg tracking-tight text-white">Voyage.</span>
</div>
<p className="text-neutral-500 text-sm font-light leading-relaxed max-w-xs">
                        Crafting unforgettable journeys for the modern traveler. Headquartered in London, operating globally.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-white font-medium text-sm mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-sage transition-colors" href="#">About</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Press</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Partners</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-white font-medium text-sm mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-sage transition-colors" href="#">Destinations</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Travel Journal</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Membership</a></li>
<li><a className="hover:text-sage transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-2">
<h4 className="text-white font-medium text-sm mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-sage transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2024 Voyage Agency Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-600 font-medium">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        System Operational
                    </span>
<span className="hidden sm:inline">London 14:02</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
