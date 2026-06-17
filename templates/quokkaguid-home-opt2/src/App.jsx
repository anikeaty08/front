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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
blue: '#2563EB',
dark: '#0F172A',
gray: '#64748B',
light: '#F8FAFC'
}
}
}
}
}

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
      

<header className="w-full border-b border-slate-100 bg-white sticky top-0 z-50">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
                QuokkaGuide
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Tours</a>
<a className="hover:text-slate-900 transition-colors" href="#">Become a Creator</a>
</nav>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-brand-blue transition-colors hidden sm:block" href="#">Login</a>
<a className="text-sm font-medium bg-brand-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm ring-1 ring-blue-700/10" href="#">
                    Register
                </a>
</div>
</div>
</header>

<section className="relative w-full h-[640px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Great Ocean Road Driving" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
</div>

<div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full">
<div className="max-w-xl">
<h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Explore the city at your own pace
                </h1>
<p className="text-lg md:text-xl text-slate-100 font-normal mb-8 leading-relaxed max-w-lg">
                    Self-guided driving tours with audio, maps, and local stories — no schedule.
                </p>
<a className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" href="#tours">
                    Start a tour
                </a>
</div>
</div>
</section>

<section className="py-16 border-b border-slate-100">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Find a tour for your trip</h2>
<div className="relative max-w-full">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<input className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all shadow-sm" placeholder="Search by city or tour name" type="text"/>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Popular destinations to explore</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer" href="#">
<img alt="Sydney" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-semibold text-white tracking-tight">Sydney</h3>
<p className="text-sm font-medium text-slate-200 mt-1">12 tours</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer" href="#">
<img alt="Melbourne" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-semibold text-white tracking-tight">Melbourne</h3>
<p className="text-sm font-medium text-slate-200 mt-1">8 tours</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer" href="#">
<img alt="Wollongong" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-semibold text-white tracking-tight">Wollongong</h3>
<p className="text-sm font-medium text-slate-200 mt-1">5 tours</p>
</div>
</a>

<a className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer" href="#">
<img alt="Byron Bay" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-semibold text-white tracking-tight">Byron Bay</h3>
<p className="text-sm font-medium text-slate-200 mt-1">6 tours</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50 overflow-hidden" id="tours">
<div className="max-w-[1440px] mx-auto px-6">

<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured tours</h2>
<a className="inline-block mt-2 text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors" href="#">View all tours</a>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all" onclick="document.getElementById('tour-carousel').scrollBy({left: -400, behavior: 'smooth'})">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all" onclick="document.getElementById('tour-carousel').scrollBy({left: 400, behavior: 'smooth'})">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6 scroll-smooth" id="tour-carousel">

<div className="min-w-[320px] max-w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all snap-start flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Blue Mountains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 tracking-tight mb-2">Blue Mountains Drive</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                            Discover the majestic Blue Mountains on this scenic loop. Stop at Echo Point, see the Three Sisters, and enjoy winding roads through ancient eucalyptus forests.
                        </p>

<div className="flex items-center gap-4 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M2 12h12"></path></svg>
<span>Driving</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>4h</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>120km</span>
</div>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-semibold text-slate-900">From $19</span>
<button className="text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                                View tour
                            </button>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all snap-start flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Great Ocean Road" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 tracking-tight mb-2">Great Ocean Road</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                            One of the world's most scenic coastal drives. Witness the 12 Apostles, lush rainforests, and surf beaches on this unforgettable journey.
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M2 12h12"></path></svg><span>Driving</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>6h</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>240km</span></div>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-semibold text-slate-900">From $25</span>
<button className="text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                                View tour
                            </button>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all snap-start flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Yarra Valley" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 tracking-tight mb-2">Yarra Valley Loop</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                            A relaxing drive through rolling hills and vineyards. Perfect for a day trip from Melbourne with stops at local producers and scenic lookouts.
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M2 12h12"></path></svg><span>Driving</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>3h</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>90km</span></div>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-semibold text-slate-900">From $15</span>
<button className="text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                                View tour
                            </button>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all snap-start flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Grand Pacific Drive" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 tracking-tight mb-2">Grand Pacific Drive</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                            Experience the Sea Cliff Bridge and the stunning southern coast of NSW. A perfect blend of ocean views and coastal towns.
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M2 12h12"></path></svg><span>Driving</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>2.5h</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>65km</span></div>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-semibold text-slate-900">From $19</span>
<button className="text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                                View tour
                            </button>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all snap-start flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Waterfall Way" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 tracking-tight mb-2">Waterfall Way Explorer</h3>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                            Drive from Coffs Harbour to Armidale passing stunning waterfalls and national parks. A nature lover's dream route.
                        </p>
<div className="flex items-center gap-4 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M2 12h12"></path></svg><span>Driving</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>5h</span></div>
<div className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>185km</span></div>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-semibold text-slate-900">From $22</span>
<button className="text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                                View tour
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-slate-100">
<div className="max-w-[1440px] mx-auto px-6">
<div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">

<div className="p-10 md:p-16 w-full md:w-1/2 text-left">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
                        Explore better with the QuokkaGuide app
                    </h2>
<p className="text-slate-300 text-lg mb-8 font-normal">
                        Built for driving tours — even offline.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-200">
<svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>GPS-based audio guidance</span>
</li>
<li className="flex items-center gap-3 text-slate-200">
<svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Offline maps &amp; content</span>
</li>
<li className="flex items-center gap-3 text-slate-200">
<svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Easy to follow while driving</span>
</li>
</ul>
<div className="flex gap-4">

<button className="flex items-center gap-3 bg-white text-slate-900 px-5 py-3 rounded-lg hover:bg-slate-50 transition-colors">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.12 1.57.11 2.77.86 3.55 1.95-.62.8-1.42 1.78-1.12 3.23.23 1.05 1.13 1.83 2.13 2.08-.66 1.95-1.89 3.52-3.55 6.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path></svg>
<div className="text-left">
<div className="text-[10px] font-medium leading-none uppercase">Download on the</div>
<div className="text-sm font-semibold leading-tight">App Store</div>
</div>
</button>

<button className="flex items-center gap-3 bg-white text-slate-900 px-5 py-3 rounded-lg hover:bg-slate-50 transition-colors">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 20.5v-17c0-.72.73-1.2 1.34-.87l14.67 8.5c.61.35.61 1.25 0 1.6l-14.67 8.5C5.73 21.64 5 21.28 5 20.5z"></path></svg>
<div className="text-left">
<div className="text-[10px] font-medium leading-none uppercase">Get it on</div>
<div className="text-sm font-semibold leading-tight">Google Play</div>
</div>
</button>
</div>
</div>

<div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-800 relative overflow-hidden flex items-end justify-center">

<img alt="App usage in car" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-12 text-center">How it works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="text-xl font-bold">1</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Choose a driving tour</h3>
<p className="text-slate-500 max-w-xs mx-auto">Pick a route that fits your trip</p>
</div>

<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="text-xl font-bold">2</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Follow the route</h3>
<p className="text-slate-500 max-w-xs mx-auto">GPS-guided stops along the way</p>
</div>

<div className="text-center group">
<div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="text-xl font-bold">3</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Listen &amp; explore</h3>
<p className="text-slate-500 max-w-xs mx-auto">Stories play as you drive</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-[1440px] mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                Share your city. Create your own tour.
            </h2>
<p className="text-lg text-slate-500 mb-10">
                Turn your local knowledge into driving tours for travelers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 text-sm font-medium text-slate-600">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>Create at your own pace</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m2 12 20 0"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<span>Reach global travelers</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span>Earn from your content</span>
</div>
</div>
<button className="bg-white border border-slate-200 text-slate-900 font-medium px-6 py-3 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
                Become a Creator
            </button>
</div>
</section>

<footer className="py-12 bg-white border-t border-slate-100">
<div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-semibold tracking-tighter text-slate-900">QuokkaGuide</span>
<div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Help</a>
<a className="hover:text-slate-900 transition-colors" href="#">Become a Creator</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
<span className="text-sm text-slate-400">© 2024 QuokkaGuide</span>
</div>
</footer>

    </>
  );
}
