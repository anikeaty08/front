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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            const y = document.getElementById('y');
            if (y) y.textContent = new Date().getFullYear();
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
      

<header className="w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center ring-1 ring-blue-400/20 bg-blue-950 rounded-full">
<i className="h-4 w-4 text-blue-400" data-lucide="compass" style={{strokeWidth: `1.5px`}}></i>
</span>
<span className="text-2xl font-semibold tracking-tight">Wanderlust</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
<a className="hover:text-zinc-100 transition-colors" href="#">Explore</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Plan</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Discover</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Community</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex gap-2 hover:text-zinc-100 hover:bg-white/5 ring-1 ring-white/5 text-sm text-zinc-300 rounded-md pt-1.5 pr-3 pb-1.5 pl-3 items-center">
<span className="font-medium">Sign In</span>
</button>
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_20px_-6px_rgba(59,130,246,0.4)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{background: `linear-gradient(144deg, rgba(59,130,246,0.8), rgba(59,130,246,0.4) 50%, rgba(59,130,246,0.6))`}} type="button">
<span className="flex items-center justify-center gap-2 leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/30 font-medium bg-black/20 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3">
<span className="text-sm">Start Journey</span>
</span>
</button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 hover:bg-white/5">
<i className="h-5 w-5" data-lucide="menu" style={{strokeWidth: `1.5px`}}></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden h-[850px]">
<div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-teal-950/20"></div>
<div className="max-w-7xl sm:px-6 lg:px-8 sm:pt-20 mr-auto ml-auto pt-14 pr-4 pl-4">
<div className="max-w-3xl">
<div className="inline-flex gap-2 text-xs text-blue-300 bg-blue-950/30 border-blue-400/20 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<span className="font-medium">New: AI Trip Planner</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right" style={{strokeWidth: `1.5px`}}></i>
</div>
<h1 className="sm:text-6xl md:text-7xl text-4xl font-light tracking-tighter mt-6">Your personalized travel companion for every adventure</h1>
<p className="max-w-2xl sm:text-lg text-base text-zinc-300 mt-5">
                    Discover hidden gems, plan perfect itineraries, and connect with fellow travelers. Turn your wanderlust into unforgettable journeys.
                </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_20px_-6px_rgba(59,130,246,0.4)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{background: `linear-gradient(144deg, rgba(59,130,246,0.8), rgba(59,130,246,0.4) 50%, rgba(59,130,246,0.6))`}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/30 font-medium bg-black/20 rounded-lg pt-3 pr-5 pb-3 pl-5">
<span>Start Exploring</span>
</span>
</button>
<a className="inline-flex items-center gap-2 ring-1 ring-white/5 hover:bg-white/5 text-sm font-medium text-zinc-200 rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="#">
<span>Watch demo</span>
</a>
</div>
</div>

<div className="relative sm:mt-20 mt-16 perspective-none">
<div className="absolute inset-x-0 -bottom-8 mx-auto h-40 max-w-6xl bg-gradient-to-t from-black/60 to-transparent blur-2xl"></div>
<div className="max-w-6xl mr-auto ml-auto">
<div className="relative ring-1 ring-black/10 -translate-x-8 -translate-y-16 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] lg:scale-100 md:scale-75 origin-left w-[1200px] bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border-white/10 border rounded-2xl backdrop-blur-lg translate-x-8 scale-50 rotate-x-30 rotate-y-30 -rotate-z-20 perspective-none">

<div className="flex border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/60"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400/60"></span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-400">
<i className="w-4 h-4" data-lucide="globe" style={{strokeWidth: `1.5px`}}></i>
<span>wanderlust.app</span>
</div>
</div>
<div className="grid grid-cols-12">

<aside className="col-span-4 md:col-span-3 sm:p-4 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-zinc-300 ring-1 ring-white/10">
<i className="h-4 w-4 text-zinc-400" data-lucide="search" style={{strokeWidth: `1.5px`}}></i>
<input className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-500" placeholder="Search destinations" />
</div>
<div className="space-y-1">
<div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-blue-500/10 text-sm text-blue-300 border border-blue-500/20">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin" style={{strokeWidth: `1.5px`}}></i>
<span className="font-medium">My Trips</span>
</div>
<span className="rounded-md bg-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-300">3</span>
</div>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="heart" style={{strokeWidth: `1.5px`}}></i>
                                        Wishlist
                                    </button>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="camera" style={{strokeWidth: `1.5px`}}></i>
                                        Memories
                                    </button>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="users" style={{strokeWidth: `1.5px`}}></i>
                                        Travel Buddies
                                    </button>
</div>
<div className="mt-4">
<p className="px-2 text-[11px] uppercase tracking-wide text-zinc-500">Quick Access</p>
<div className="mt-1 space-y-1">
<button className="flex w-full gap-2 hover:bg-white/5 text-sm text-zinc-300 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 items-center">
<i className="h-4 w-4" data-lucide="plane" style={{strokeWidth: `1.5px`}}></i>
                                            Paris 2024
                                        </button>
<button className="flex w-full items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-300 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="mountain" style={{strokeWidth: `1.5px`}}></i>
                                            Alps Adventure
                                        </button>
</div>
</div>
</aside>

<main className="col-span-8 md:col-span-9">
<div className="grid grid-cols-12">

<section className="col-span-6 sm:p-4 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight">Upcoming Adventures</h3>
<div className="flex items-center gap-2 text-zinc-400">
<i className="h-4 w-4" data-lucide="plus" style={{strokeWidth: `1.5px`}}></i>
<i className="h-4 w-4" data-lucide="filter" style={{strokeWidth: `1.5px`}}></i>
</div>
</div>
<ul className="mt-3 space-y-2">

<li className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all">
<div className="flex items-start gap-3">
<div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                                                        PAR
                                                    </div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white">Paris Spring Getaway</p>
<span className="text-[10px] text-zinc-400">3 days</span>
</div>
<p className="mt-0.5 line-clamp-1 text-xs text-zinc-400">Explore the city of lights, visit museums, Seine river cruise</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-green-500/15 px-1.5 py-0.5 text-[10px] text-green-300">
<i className="h-3 w-3" data-lucide="check" style={{strokeWidth: `1.5px`}}></i>
                                                                Booked
                                                            </span>
<span className="text-[10px] text-zinc-400">Apr 15-18, 2024</span>
</div>
</div>
</div>
</li>

<li className="rounded-lg p-3 hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-semibold text-sm">
                                                        BAL
                                                    </div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-200">Bali Retreat</p>
<span className="text-[10px] text-zinc-400">7 days</span>
</div>
<p className="mt-0.5 line-clamp-1 text-xs text-zinc-400">Beach relaxation, temple visits, local cuisine exploration</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-yellow-500/15 px-1.5 py-0.5 text-[10px] text-yellow-300">
<i className="h-3 w-3" data-lucide="clock" style={{strokeWidth: `1.5px`}}></i>
                                                                Planning
                                                            </span>
<span className="text-[10px] text-zinc-400">Jun 2024</span>
</div>
</div>
</div>
</li>

<li className="rounded-lg p-3 hover:bg-white/5">
<div className="flex items-start gap-3">
<div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-semibold text-sm">
                                                        TOK
                                                    </div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-200">Tokyo Culture Trip</p>
<span className="text-[10px] text-zinc-400">5 days</span>
</div>
<p className="mt-0.5 line-clamp-1 text-xs text-zinc-400">Cherry blossoms, traditional districts, modern architecture</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-purple-500/15 px-1.5 py-0.5 text-[10px] text-purple-300">
<i className="h-3 w-3" data-lucide="star" style={{strokeWidth: `1.5px`}}></i>
                                                                Wishlist
                                                            </span>
<span className="text-[10px] text-zinc-400">Spring 2025</span>
</div>
</div>
</div>
</li>
</ul>
</section>

<section className="col-span-6 sm:p-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex gap-2 text-xs text-zinc-400 items-center">
<i className="h-4 w-4" data-lucide="map" style={{strokeWidth: `1.5px`}}></i>
<span>Europe</span>
<i className="h-3 w-3" data-lucide="chevron-right" style={{strokeWidth: `1.5px`}}></i>
<span>France</span>
<i className="h-3 w-3" data-lucide="chevron-right" style={{strokeWidth: `1.5px`}}></i>
<span>Paris</span>
</div>
<h4 className="text-lg font-semibold tracking-tight mt-2">Paris Spring Getaway</h4>
<div className="mt-3 space-y-3">

<div className="rounded-md bg-gradient-to-r from-blue-950/30 to-purple-950/30 p-3 ring-1 ring-blue-400/20">
<div className="mb-2 flex items-center justify-between">
<span className="text-sm font-medium text-blue-300">Day 1 Itinerary</span>
<span className="text-xs text-zinc-400">Apr 15</span>
</div>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-zinc-300">9:00 AM - Arrive at CDG Airport</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-zinc-300">11:00 AM - Check-in at Hotel</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-zinc-300">2:00 PM - Louvre Museum</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-zinc-300">7:00 PM - Seine River Dinner Cruise</span>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="h-4 w-4" data-lucide="images" style={{strokeWidth: `1.5px`}}></i>
<span>Inspiration</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-green-500/15 px-1.5 py-0.5 text-[10px] text-green-300">
<i className="h-3 w-3" data-lucide="check-circle" style={{strokeWidth: `1.5px`}}></i>
                                                        Confirmed
                                                    </span>
<button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="share" style={{strokeWidth: `1.5px`}}></i>
<span>Share</span>
</button>
</div>
</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<div className="h-16 w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
<i className="h-6 w-6 text-white" data-lucide="camera" style={{strokeWidth: `1.5px`}}></i>
</div>
<div className="h-16 w-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md flex items-center justify-center">
<i className="h-6 w-6 text-white" data-lucide="map-pin" style={{strokeWidth: `1.5px`}}></i>
</div>
<div className="h-16 w-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-md flex items-center justify-center">
<i className="h-6 w-6 text-white" data-lucide="utensils" style={{strokeWidth: `1.5px`}}></i>
</div>
</div>
</div>
</section>
</div>
</main>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-24 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center ring-1 ring-blue-400/20 bg-blue-950 rounded-full">
<i className="h-4 w-4 text-blue-400" data-lucide="compass" style={{strokeWidth: `1.5px`}}></i>
</span>
<span className="font-medium">Wanderlust</span>
<span>© <span id="y">2024</span></span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-200" href="#">Privacy</a>
<a className="hover:text-zinc-200" href="#">Terms</a>
<a className="hover:text-zinc-200" href="#">Support</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
