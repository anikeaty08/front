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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 backdrop-blur-xl bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-tighter font-medium text-lg z-50 mix-blend-difference hover:opacity-80 transition-opacity" href="#">
                NOSTALGIA NEEDLE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#collection">Collection</a>
<a className="hover:text-white transition-colors" href="#menu">Taste</a>
<a className="hover:text-white transition-colors" href="#gallery">Atmosphere</a>
<a className="hover:text-white transition-colors" href="#schedule">Sets</a>
</div>
<button className="group flex items-center gap-2 text-sm text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-all">
<span>Reserve</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-200/80 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Now Spinning: Blue Note 1964
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.1] mb-8">
                    High fidelity <br/>
<span className="text-neutral-500">low intervention.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed mb-10">
                    A listening bar dedicated to analog sound and natural wines. Experience the warmth of vinyl on a bespoke sound system.
                </p>
<div className="flex items-center gap-6">
<button className="h-12 px-6 rounded-md bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors">
                        View Menu
                    </button>
<button className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Listen to Playlist
                    </button>
</div>
</div>

<div className="relative flex justify-center md:justify-end opacity-80">
<div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center vinyl-spin">
<div className="absolute inset-0 rounded-full border border-white/5 scale-90"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-75"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-50"></div>

<div className="w-32 h-32 bg-orange-900/20 rounded-full backdrop-blur-sm border border-orange-500/20 flex items-center justify-center">
<div className="w-4 h-4 bg-black rounded-full"></div>
</div>
</div>

<div className="absolute top-0 right-10 w-1 h-48 bg-neutral-800 origin-top rotate-[25deg] rounded-full opacity-50"></div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl text-white font-light tracking-tight mb-2">The Crate</h2>
<p className="text-sm text-neutral-500">Select a record to preview the vibe.</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-white/10 rounded-full hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 border border-white/10 rounded-full hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group relative aspect-square bg-neutral-900 rounded-sm overflow-hidden cursor-pointer">
<img alt="Jazz Album" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<p className="text-white text-sm font-medium">Midnight Blue</p>
<p className="text-xs text-neutral-400">Kenny Burrell</p>
</div>
</div>

<div className="group relative aspect-square bg-neutral-900 rounded-sm overflow-hidden cursor-pointer">
<img alt="Soul Album" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<p className="text-white text-sm font-medium">What's Going On</p>
<p className="text-xs text-neutral-400">Marvin Gaye</p>
</div>
</div>

<div className="group relative aspect-square bg-neutral-900 rounded-sm overflow-hidden cursor-pointer">
<img alt="Funk Album" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<p className="text-white text-sm font-medium">Maggot Brain</p>
<p className="text-xs text-neutral-400">Funkadelic</p>
</div>
</div>

<div className="group relative aspect-square bg-neutral-900 rounded-sm overflow-hidden cursor-pointer">
<img alt="Ambient Album" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
<p className="text-white text-sm font-medium">Ambient 1</p>
<p className="text-xs text-neutral-400">Brian Eno</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<iconify-icon className="text-neutral-500 mb-4" icon="solar:wineglass-linear" strokeWidth="1" width="32"></iconify-icon>
<h2 className="text-3xl text-white font-light tracking-tight">Pouring &amp; Plating</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h3 className="text-sm font-medium text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8">Natural Wines</h3>
<div className="space-y-8">

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Pet-Nat 'Foam'</h4>
<span className="text-white font-light">14 / 52</span>
</div>
<div className="flex justify-between text-sm text-neutral-500 font-light">
<span>Meinklang, Austria</span>
<span>2022</span>
</div>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Orange 'Skin Contact'</h4>
<span className="text-white font-light">16 / 60</span>
</div>
<div className="flex justify-between text-sm text-neutral-500 font-light">
<span>Slobodne, Slovakia</span>
<span>2021</span>
</div>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Gamay 'Glou Glou'</h4>
<span className="text-white font-light">15 / 56</span>
</div>
<div className="flex justify-between text-sm text-neutral-500 font-light">
<span>Beaujolais, France</span>
<span>2020</span>
</div>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Cabernet Franc</h4>
<span className="text-white font-light">18 / 68</span>
</div>
<div className="flex justify-between text-sm text-neutral-500 font-light">
<span>Loire Valley, France</span>
<span>2019</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8">Small Plates</h3>
<div className="space-y-8">

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Marinated Olives</h4>
<span className="text-white font-light">8</span>
</div>
<p className="text-sm text-neutral-500 font-light">
                                Citrus zest, rosemary, chili flake.
                            </p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Tinned Fish Board</h4>
<span className="text-white font-light">24</span>
</div>
<p className="text-sm text-neutral-500 font-light">
                                Jose Gourmet sardines, pickled onions, sourdough, butter.
                            </p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Burrata &amp; Fig</h4>
<span className="text-white font-light">19</span>
</div>
<p className="text-sm text-neutral-500 font-light">
                                Balsamic glaze, crushed pistachio, basil oil.
                            </p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-white font-medium group-hover:text-orange-100 transition-colors">Charcuterie Selection</h4>
<span className="text-white font-light">28</span>
</div>
<p className="text-sm text-neutral-500 font-light">
                                Local cured meats, honeycomb, grainy mustard.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-white font-light tracking-tight mb-12">Atmosphere</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
<div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
<img alt="Bar Interior" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-black/50 backdrop-blur text-xs text-white rounded border border-white/10">The Main Lounge</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
<img alt="Turntable" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
<img alt="Wine Pouring" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
<img alt="Cozy Corner" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-black/50 backdrop-blur text-xs text-white rounded border border-white/10">Listening Corner</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="schedule">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
<h2 className="text-3xl text-white font-light tracking-tight">Selectors Schedule</h2>
<div className="flex items-center gap-2 mt-4 md:mt-0 text-neutral-500 text-sm">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Live Sets start at 8PM
                </div>
</div>
<div className="border border-white/5 rounded-2xl overflow-hidden bg-neutral-900/30 backdrop-blur-sm">

<div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 text-xs uppercase tracking-widest text-neutral-500 font-medium">
<div className="col-span-3 md:col-span-2">Date</div>
<div className="col-span-6 md:col-span-4">Artist</div>
<div className="col-span-3 md:col-span-4 text-right md:text-left">Genre</div>
<div className="hidden md:block md:col-span-2 text-right">Status</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-3 md:col-span-2 text-white font-medium">Tonight</div>
<div className="col-span-6 md:col-span-4 text-white group-hover:text-orange-100 transition-colors">DJ Minimal</div>
<div className="col-span-3 md:col-span-4 text-right md:text-left text-sm">Micro-House / Dub</div>
<div className="hidden md:block md:col-span-2 text-right">
<span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs">Confirmed</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-3 md:col-span-2 text-neutral-300">Oct 24</div>
<div className="col-span-6 md:col-span-4 text-white group-hover:text-orange-100 transition-colors">Sarah Farina</div>
<div className="col-span-3 md:col-span-4 text-right md:text-left text-sm">Jazz Funk</div>
<div className="hidden md:block md:col-span-2 text-right">
<span className="px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10 text-xs">Upcoming</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-3 md:col-span-2 text-neutral-300">Oct 25</div>
<div className="col-span-6 md:col-span-4 text-white group-hover:text-orange-100 transition-colors">Analog Soul</div>
<div className="col-span-3 md:col-span-4 text-right md:text-left text-sm">Rare Groove</div>
<div className="hidden md:block md:col-span-2 text-right">
<span className="px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10 text-xs">Upcoming</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-3 md:col-span-2 text-neutral-300">Oct 26</div>
<div className="col-span-6 md:col-span-4 text-white group-hover:text-orange-100 transition-colors">Resident Night</div>
<div className="col-span-3 md:col-span-4 text-right md:text-left text-sm">City Pop</div>
<div className="hidden md:block md:col-span-2 text-right">
<span className="px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10 text-xs">Upcoming</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-12 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-white tracking-tighter font-medium text-lg mb-6 block" href="#">NOSTALGIA NEEDLE</a>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Sound, wine, and time. <br/>
                        A refuge for the analog soul.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Visit</h4>
<p className="text-sm text-neutral-500 mb-2">108 Vinyl Row</p>
<p className="text-sm text-neutral-500 mb-2">Lower East Side, NY</p>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">Get Directions</a>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Hours</h4>
<p className="text-sm text-neutral-500 mb-2 flex justify-between max-w-[140px]"><span>Wed - Thu</span> <span>5pm - 12am</span></p>
<p className="text-sm text-neutral-500 mb-2 flex justify-between max-w-[140px]"><span>Fri - Sat</span> <span>5pm - 2am</span></p>
<p className="text-sm text-neutral-500 mb-2 flex justify-between max-w-[140px]"><span>Sun</span> <span>4pm - 11pm</span></p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2023 Nostalgia Needle. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-400" href="#">Credits</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
