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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">

<div className="glass-iphone relative flex w-full max-w-4xl items-center justify-between rounded-full px-2 pl-6 py-2 shadow-2xl shadow-slate-400/10 ring-1 ring-white/60 transition-all duration-300 hover:shadow-slate-400/20">
<div className="flex items-center gap-2.5">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-md shadow-slate-900/20">
<iconify-icon height="18" icon="solar:sun-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">VELASSARU</span>
</div>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors" href="#">Destinations</a>
<a className="text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors" href="#">Experiences</a>
<a className="text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors" href="#">Concierge</a>
</div>

<button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 bg-[length:200%_auto] px-5 py-2.5 text-xs font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] transition-all duration-500 hover:bg-right hover:scale-[1.02] hover:shadow-[0_0_20px_2px_rgba(45,212,191,0.6)]">
<span className="relative z-10 drop-shadow-sm">Book Escape</span>
<iconify-icon className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" height="14" icon="solar:arrow-right-linear" strokeWidth="2.5" width="14"></iconify-icon>

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
</button>
</div>
</nav>

<header className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">

<div className="absolute inset-0 z-0">
<img alt="Maldives Aerial" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/20 to-slate-50"></div>
</div>
<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-3 py-1 backdrop-blur-md mb-6">
<span className="flex h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(94,234,212,0.8)]"></span>
<span className="text-[10px] font-semibold uppercase tracking-wider text-white">The Authentic Maldives</span>
</div>
<h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl drop-shadow-sm">
                Drift into the <br/>
<span className="italic font-light text-teal-50 opacity-90">Deep Blue</span>
</h1>
<p className="mx-auto mt-6 max-w-lg text-sm font-medium leading-relaxed text-white/90 md:text-base text-shadow-sm">
                We craft bespoke journeys specifically for the Maldives. From private sandbanks to underwater suites, experience the archipelago like never before.
            </p>
</div>

<div className="relative z-20 mt-12 w-full max-w-3xl px-6">
<div className="glass-panel rounded-2xl p-2 shadow-2xl shadow-slate-900/10 ring-1 ring-white/50">
<form className="flex flex-col gap-2 md:flex-row md:items-center">
<div className="flex-1 px-4 py-2">
<label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Atoll</label>
<div className="relative mt-1">
<iconify-icon className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<input className="w-full bg-transparent pl-6 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="North Malé Atoll" type="text"/>
</div>
</div>
<div className="h-px w-full bg-slate-200 md:h-8 md:w-px"></div>
<div className="flex-1 px-4 py-2">
<label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Dates</label>
<div className="relative mt-1">
<iconify-icon className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:calendar-linear" width="16"></iconify-icon>
<input className="w-full bg-transparent pl-6 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Add dates" type="text"/>
</div>
</div>
<div className="h-px w-full bg-slate-200 md:h-8 md:w-px"></div>
<div className="flex-1 px-4 py-2">
<label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Guests</label>
<div className="relative mt-1">
<iconify-icon className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<input className="w-full bg-transparent pl-6 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="2 Adults" type="text"/>
</div>
</div>
<button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white transition-colors hover:bg-slate-900 shadow-lg shadow-teal-600/30" type="button">
<iconify-icon className="transition-transform group-hover:scale-110" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</header>
<main className="relative z-10 -mt-20">

<section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px]">

<div className="group relative col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-slate-300">
<img alt="Overwater Villa" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-2 flex items-center gap-2 text-teal-300">
<iconify-icon icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Most Popular</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight">The Overwater Collection</h3>
<p className="mt-2 max-w-md text-sm text-slate-300">Experience the iconic villas suspended above turquoise lagoons. Private pools, glass floors, and direct reef access.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg hover:ring-slate-300">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600 mb-4">
<iconify-icon icon="solar:route-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Seaplane Transfers</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-500">We arrange seamless scenic flights directly from Velana International to your resort doorstep.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-6 shadow-sm ring-1 ring-slate-800 transition-all hover:shadow-lg">
<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-teal-500/10 blur-3xl"></div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white mb-4">
<iconify-icon icon="solar:wine-glass-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Curated Dining</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-400">From underwater restaurants to private sandbank picnics, taste the extraordinary.</p>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Curated Atolls</h2>
<p className="mt-2 text-sm text-slate-500">Exclusive packages tailored for unique experiences.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700" href="#">
                        View all packages <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Resort" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 backdrop-blur-sm">
                                5 Nights
                            </div>
</div>
<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">Baa Atoll Biosphere</h3>
<div className="flex items-center gap-1 text-slate-900">
<span className="text-xs font-medium text-slate-500">from</span>
<span className="font-semibold">$3,200</span>
</div>
</div>
<p className="mt-1 text-xs text-slate-500">Hanifaru Bay, Manta Rays, Luxury Beach Villa</p>
<div className="mt-4 flex gap-2">
<span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600">All Inclusive</span>
<span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600">Speedboat</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Resort" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 backdrop-blur-sm">
                                7 Nights
                            </div>
</div>
<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">Noonu Atoll Privacy</h3>
<div className="flex items-center gap-1 text-slate-900">
<span className="text-xs font-medium text-slate-500">from</span>
<span className="font-semibold">$5,450</span>
</div>
</div>
<p className="mt-1 text-xs text-slate-500">Private Infinity Pool, Butler Service, Sunset Cruise</p>
<div className="mt-4 flex gap-2">
<span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600">Half Board</span>
<span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600">Seaplane</span>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Resort" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 backdrop-blur-sm">
                                4 Nights
                            </div>
</div>
<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">South Ari Dive</h3>
<div className="flex items-center gap-1 text-slate-900">
<span className="text-xs font-medium text-slate-500">from</span>
<span className="font-semibold">$2,800</span>
</div>
</div>
<p className="mt-1 text-xs text-slate-500">Whale Shark Point, House Reef, Water Sports</p>
<div className="mt-4 flex gap-2">
<span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600">Breakfast</span>
<span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600">Domestic Flight</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-24">
<div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-20 text-center shadow-2xl md:px-20">

<div className="absolute left-0 top-0 -ml-10 -mt-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"></div>
<div className="absolute bottom-0 right-0 -mb-10 -mr-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
<div className="relative z-10">
<iconify-icon className="text-teal-400 mb-6" height="48" icon="solar:island-linear" width="48"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">Not sure which Atoll?</h2>
<p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 leading-relaxed">
                        With over 1,200 islands, choosing the right one can be overwhelming. Let our local experts craft your perfect itinerary based on your preferences.
                    </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
<button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">
                            Start Planning
                        </button>
<button className="rounded-full border border-slate-700 bg-transparent px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                            Contact Support
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
<iconify-icon icon="solar:sun-2-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">VELASSARU</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Exclusively Maldives. Locally operated. <br/>
                        Reg No. MLD-2023-884
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Packages</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Honeymoon</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Family Fun</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Diving Expeditions</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Wellness Retreats</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Newsletter</h4>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs focus:border-teal-500 focus:outline-none" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-teal-600">
<iconify-icon icon="solar:plain-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 md:flex-row">
<p className="text-[10px] text-slate-400">© 2024 Velassaru Maldives. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
