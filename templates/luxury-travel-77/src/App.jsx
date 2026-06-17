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
      

<main className="h-screen w-full overflow-x-hidden overflow-y-auto scroll-smooth" style={{perspective: '10px'}}>

<header className="relative flex h-[100vh] w-full items-center justify-center" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 z-[-2]" style={{transform: 'translateZ(-10px) scale(2)'}}>
<img alt="Cinematic Mountains" className="h-full w-full object-cover object-center opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950/90"></div>
</div>

<div className="absolute top-[20%] w-full text-center z-[-1]" style={{transform: 'translateZ(-5px) scale(1.5)'}}>
<h2 className="font-['Caveat'] text-[12vw] text-white/10 tracking-tight leading-none pointer-events-none select-none">Wanderlust</h2>
</div>

<div className="relative z-10 flex h-full w-full flex-col justify-between" style={{transform: 'translateZ(0)'}}>

<nav className="flex w-full items-center justify-between p-6 md:px-12 md:py-8">
<div className="tracking-[0.4em] text-xs font-medium text-slate-100 uppercase">
                        V O Y A G E R
                    </div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm text-slate-300 transition-colors hover:text-white" href="#">Destinations</a>
<a className="text-sm text-slate-300 transition-colors hover:text-white" href="#">Journals</a>
<a className="text-sm text-slate-300 transition-colors hover:text-white" href="#">About</a>
</div>
<button className="flex items-center justify-center rounded-full bg-white/5 p-2 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 md:hidden">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<div className="flex flex-col items-center text-center px-4 mt-[-10vh]">
<span className="mb-4 text-xs tracking-[0.2em] text-amber-400 uppercase font-medium">Curated Expeditions</span>
<h1 className="font-['Caveat'] text-6xl md:text-8xl lg:text-9xl tracking-tight text-white drop-shadow-lg">
                        Discover the Unseen
                    </h1>
<p className="mt-6 max-w-lg text-sm md:text-base text-slate-300 font-light leading-relaxed">
                        Immersive journeys to the world's most breathtaking and isolated corners. Your next chapter begins where the map ends.
                    </p>
</div>

<div className="absolute bottom-8 left-1/2 w-[95%] max-w-5xl -translate-x-1/2 rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-xl md:bottom-12">
<div className="flex flex-col md:flex-row items-center divide-y divide-white/10 md:divide-x md:divide-y-0">

<div className="group flex w-full cursor-pointer items-center gap-4 px-6 py-4 transition-colors hover:bg-white/5 md:w-1/3 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/50 text-cyan-400 group-hover:bg-cyan-900/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 tracking-wider uppercase mb-1">Destination</span>
<span className="text-base text-slate-100 font-medium">Anywhere</span>
</div>
</div>

<div className="group flex w-full cursor-pointer items-center gap-4 px-6 py-4 transition-colors hover:bg-white/5 md:w-1/3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/50 text-amber-400 group-hover:bg-amber-900/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 tracking-wider uppercase mb-1">When</span>
<span className="text-base text-slate-100 font-medium">Select dates</span>
</div>
</div>

<div className="flex w-full items-center justify-between gap-4 px-6 py-4 md:w-1/3 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/50 text-emerald-400 group-hover:bg-emerald-900/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 tracking-wider uppercase mb-1">Travelers</span>
<span className="text-base text-slate-100 font-medium">2 Guests</span>
</div>
</div>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-slate-900 transition-transform hover:scale-105 hover:bg-amber-400 shadow-lg shadow-amber-500/20">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<div className="relative z-20 bg-slate-50 text-slate-900">

<section className="py-24 px-6 md:px-12 lg:py-32">
<div className="mx-auto max-w-7xl">
<div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
<div>
<span className="text-xs tracking-[0.2em] text-cyan-700 uppercase font-medium">The Collection</span>
<h2 className="mt-4 font-['Caveat'] text-5xl md:text-6xl tracking-tight text-slate-900">
                                Earth's Masterpieces
                            </h2>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900" href="#">
                            View all journeys
                            <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

<div className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-slate-200/50">
<img alt="Tropical coast" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between w-full mb-2">
<span className="text-xs tracking-[0.1em] text-amber-400 uppercase font-medium">Coastal Retreat</span>
<span className="flex items-center gap-1 text-xs text-slate-300">
<iconify-icon icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon> 7 Days
                                     </span>
</div>
<h3 className="font-['Caveat'] text-4xl tracking-tight text-white">Azure Shores</h3>
</div>
</div>

<div className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-slate-200/50 md:-translate-y-8">
<img alt="Deep Forest" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between w-full mb-2">
<span className="text-xs tracking-[0.1em] text-emerald-400 uppercase font-medium">Wilderness</span>
<span className="flex items-center gap-1 text-xs text-slate-300">
<iconify-icon icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon> 5 Nights
                                     </span>
</div>
<h3 className="font-['Caveat'] text-4xl tracking-tight text-white">Emerald Canopy</h3>
</div>
</div>

<div className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-slate-200/50">
<img alt="Desert Dunes" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between w-full mb-2">
<span className="text-xs tracking-[0.1em] text-amber-500 uppercase font-medium">Expedition</span>
<span className="flex items-center gap-1 text-xs text-slate-300">
<iconify-icon icon="solar:route-linear" strokeWidth="1.5"></iconify-icon> 10 Days
                                     </span>
</div>
<h3 className="font-['Caveat'] text-4xl tracking-tight text-white">Golden Sands</h3>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-950 px-6 py-24 text-slate-100 md:px-12 lg:py-32">
<div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="flex flex-col items-start">
<iconify-icon className="mb-6 text-3xl text-amber-500" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-['Caveat'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-amber-100 mb-8 leading-tight">
                            "We travel not to escape life, but for life not to escape us."
                        </h2>
<div className="h-px w-24 bg-amber-500/30 mb-8"></div>
<p className="text-sm md:text-base text-emerald-100/70 font-light leading-relaxed mb-6">
                            Every expedition is a story waiting to be written. We craft bespoke itineraries that go beyond the guidebooks, connecting you with the raw pulse of nature and authentic local cultures. 
                        </p>
<p className="text-sm md:text-base text-emerald-100/70 font-light leading-relaxed mb-8">
                            From the silent fjords to the whispering dunes, our expert curators ensure your journey is documented not just in photographs, but in soul-stirring memories.
                        </p>
<button className="flex items-center gap-3 rounded-full border border-amber-500/30 bg-transparent px-6 py-3 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/10">
                            Read our field notes
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl">
<img alt="Traveler with map" className="h-full w-full object-cover object-center grayscale-[20%] sepia-[10%]" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-white/10 rounded-2xl"></div>

<div className="absolute bottom-6 right-6 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-amber-500/50 bg-emerald-950/80 backdrop-blur-sm transform rotate-12">
<span className="font-['Caveat'] text-xl text-amber-400">Est. 2024</span>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 px-6 py-12 text-center border-t border-white/5">
<div className="tracking-[0.5em] text-xs font-medium text-slate-500 uppercase mb-4">
                    V O Y A G E R
                </div>
<p className="text-xs text-slate-600 font-light">
                    © Design Concept. Immersive travel experiences.
                </p>
</footer>
</div>
</main>

    </>
  );
}
