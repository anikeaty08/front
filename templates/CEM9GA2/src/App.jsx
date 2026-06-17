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
      
    // Fade-in stagger
    window.addEventListener('DOMContentLoaded',()=> {
      document.querySelectorAll('.fade-up').forEach((el,i)=>{
        el.style.animationDelay = el.style.animationDelay || `${i*0.08}s`;
      });
    });

    // Star save toggle
    document.getElementById('saveBtn')?.addEventListener('click',e=>{
      const icon=e.currentTarget.querySelector('svg');
      icon.classList.toggle('fill-orange-500');
      icon.classList.toggle('stroke-white');
      icon.classList.toggle('stroke-0');
    });

    // Icons
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
      

<header className="relative h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 -z-20" style={{background: 'url(\'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&amp'}}>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-[#ff784c55] to-[#fdfdfb] -z-10"></div>

<nav className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4 md:px-12">
<a className="text-lg font-semibold tracking-tight text-white drop-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href="#">
        LongIsland.live
      </a>
<button className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
        Log in
      </button>
</nav>

<div className="px-6 md:px-12 fade-up">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 drop-shadow-lg">
        Find Your Beat on Long Island
      </h1>
<p className="max-w-md mx-auto text-white/90 md:text-lg mb-8">
        Where the coast meets the crowd—shows, dinner gigs &amp; hidden gems every night.
      </p>

<form className="flex items-center bg-white/90 backdrop-blur rounded-full overflow-hidden shadow-lg max-w-sm mx-auto focus-within:ring-2 ring-offset-2 ring-orange-500 transition">
<label className="sr-only" htmlFor="search">Search events</label>
<input className="flex-1 px-4 py-3 bg-transparent placeholder-slate-500 focus:outline-none" id="search" placeholder="Search artist, venue, vibe…" type="search"/>
<button aria-label="Search" className="px-4 py-3 bg-orange-500 text-white hover:bg-orange-600 transition flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500" type="submit">
<i className="w-4 h-4" data-lucide="search"></i>
<span className="hidden sm:inline">Go</span>
</button>
</form>
</div>
</header>

<section className="py-16 px-6 md:px-12">
<h2 className="text-3xl font-semibold tracking-tight mb-10 fade-up">Discover by Vibe</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

<article className="group relative rounded-2xl overflow-hidden fade-up" style={{animationDelay: '.05s'}}>
<img alt="Dinner &amp; Music" className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1549921296-3cce7c7b92d5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#ff784c]/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="p-2 rounded-full bg-white/80 backdrop-blur">
<i className="w-5 h-5 text-orange-500" data-lucide="wine"></i>
</div>
<h3 className="text-white font-medium">Dinner &amp; Music</h3>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden fade-up" style={{animationDelay: '.1s'}}>
<img alt="Girls' Night Out" className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-600/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="p-2 rounded-full bg-white/80 backdrop-blur">
<i className="w-5 h-5 text-pink-600" data-lucide="heart"></i>
</div>
<h3 className="text-white font-medium">Girls’ Night Out</h3>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden fade-up" style={{animationDelay: '.15s'}}>
<img alt="Tribute Night" className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-600/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="p-2 rounded-full bg-white/80 backdrop-blur">
<i className="w-5 h-5 text-indigo-600" data-lucide="music"></i>
</div>
<h3 className="text-white font-medium">Tribute Night</h3>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden fade-up" style={{animationDelay: '.2s'}}>
<img alt="Brew &amp; Bands" className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1502716119723-7427a64d14b2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-500/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="p-2 rounded-full bg-white/80 backdrop-blur">
<i className="w-5 h-5 text-teal-600" data-lucide="beer"></i>
</div>
<h3 className="text-white font-medium">Brew &amp; Bands</h3>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden fade-up" style={{animationDelay: '.25s'}}>
<img alt="Outdoor Jams" className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1533119408464-52b2c36d6b62?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-600/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="p-2 rounded-full bg-white/80 backdrop-blur">
<i className="w-5 h-5 text-emerald-600" data-lucide="sun"></i>
</div>
<h3 className="text-white font-medium">Outdoor Jams</h3>
</div>
</article>
<article className="group relative rounded-2xl overflow-hidden fade-up" style={{animationDelay: '.3s'}}>
<img alt="Late Night DJ" className="w-full h-48 object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-violet-600/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="p-2 rounded-full bg-white/80 backdrop-blur">
<i className="w-5 h-5 text-violet-600" data-lucide="headphones"></i>
</div>
<h3 className="text-white font-medium">Late-Night DJ</h3>
</div>
</article>
</div>
</section>

<section className="py-16 px-6 md:px-12 bg-slate-50">
<h2 className="text-3xl font-semibold tracking-tight mb-10 fade-up">Explore by Region</h2>
<div className="flex gap-6 overflow-x-auto pb-4">

<div className="min-w-[280px] rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col justify-between fade-up">
<div>
<h3 className="text-xl font-medium mb-1">North Shore</h3>
<p className="text-slate-600 text-sm mb-4">Harbor towns, vineyard stages &amp; sunset sets.</p>
</div>
<button className="text-orange-600 font-medium hover:underline mt-auto flex items-center gap-1">
          Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="min-w-[280px] rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col justify-between fade-up" style={{animationDelay: '.05s'}}>
<div>
<h3 className="text-xl font-medium mb-1">South Fork</h3>
<p className="text-slate-600 text-sm mb-4">Beach bars, surf-side stages &amp; open-air festivals.</p>
</div>
<button className="text-orange-600 font-medium hover:underline mt-auto flex items-center gap-1">
          Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="min-w-[280px] rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition p-6 flex flex-col justify-between fade-up" style={{animationDelay: '.1s'}}>
<div>
<h3 className="text-xl font-medium mb-1">Mid-Island</h3>
<p className="text-slate-600 text-sm mb-4">Downtown spots, craft breweries &amp; family fairs.</p>
</div>
<button className="text-orange-600 font-medium hover:underline mt-auto flex items-center gap-1">
          Explore <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12">
<h2 className="text-3xl font-semibold tracking-tight mb-10 fade-up">Featured Event</h2>
<div className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100 fade-up">
<div className="relative h-64 md:h-auto">
<img alt="Fleetwood Mac Tribute" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1521336575829-7841f5c59e59?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<button aria-label="Save for later" className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" id="saveBtn">
<i className="w-5 h-5 text-orange-500" data-lucide="star"></i>
</button>
</div>
<div className="p-8 flex flex-col justify-between">
<div>
<p className="text-sm text-slate-500 mb-2">Fri · Jun 23 · 8 PM · Jones Beach Theater</p>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Fleetwood Mac Under the Stars</h3>
<p className="text-slate-600 mb-6">
            Sing along to the classics as the coastline glows. Special guest fireworks finale!
          </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
            Get Tickets
          </button>
<button className="px-6 py-3 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
            Share
          </button>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 bg-gradient-to-b from-sky-50 to-white">
<div className="max-w-2xl mx-auto text-center fade-up">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Tailor Your Night</h2>
<p className="text-slate-600 mb-8">
        Tap <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-100 text-orange-600"><i className="w-4 h-4" data-lucide="star"></i> Save</span>
        on any event and we’ll nudge you when tickets drop or friends join the vibe.
      </p>
<button className="px-8 py-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
        Sign Up Free
      </button>
</div>
</section>

<footer className="py-10 px-6 md:px-12 text-center text-sm text-slate-500 fade-up">
    © 2024 LongIsland.live ·
    <a className="hover:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="#">Privacy</a> ·
    <a className="hover:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="#">Terms</a>
</footer>



    </>
  );
}
