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
      
<div className="min-h-screen flex flex-col">

<div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500"></div>

<div className="flex-1 flex flex-col">

<header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-emerald-300">AL</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Alpine Lodge</span>
<span className="text-xs sm:text-sm text-slate-400">Mountain Retreat</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#">Rooms</a>
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#">Dining</a>
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#">Experiences</a>
<a className="text-slate-300 hover:text-emerald-300 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-slate-900/90 text-xs sm:text-sm text-slate-100 font-medium tracking-tight py-1.5 sm:py-2 px-3 sm:px-4 transition-colors">
<svg className="w-4 h-4 stroke-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L15 15M17 10A7 7 0 1 1 3 10a7 7 0 0 1 14 0Z"></path>
</svg>
<span>Search dates</span>
</button>
<button className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-slate-900/90">
<span className="sr-only">Open menu</span>
<svg className="w-4 h-4 stroke-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs sm:text-sm font-medium tracking-tight py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm hover:shadow transition-all">
<span>Book now</span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-6xl mx-auto py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

<div className="flex items-center justify-between gap-3">
<button className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-emerald-300 transition-colors">
<svg className="w-4 h-4 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>All rooms</span>
</button>
<span className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<span>Check-in from 3:00 PM</span>
<span className="h-1 w-1 rounded-full bg-slate-500"></span>
<span>Check-out by 11:00 AM</span>
</span>
</div>

<section className="space-y-4">
<div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 justify-between">
<div className="space-y-2">
<div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300">
<span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 tracking-tight">
                    Signature suite
                  </span>
<span className="hidden sm:inline text-slate-400">• Mountain View Collection</span>
</div>
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
                  Mountain View Suite
                </h1>
<div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-slate-300">
<div className="inline-flex items-center gap-2">
<svg className="w-4 h-4 stroke-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21L16.54 14.12L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 14.12L5.82 21L12 17.27Z"></path>
</svg>
<span className="font-medium text-slate-100">4.9</span>
<span className="text-slate-400">(128 reviews)</span>
</div>
<span className="hidden sm:inline h-1 w-1 rounded-full bg-slate-500"></span>
<span className="inline-flex items-center gap-1 text-slate-300">
<svg className="w-4 h-4 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V11.5L12 3L21 11.5V21H14.5V14.5H9.5V21H3Z"></path>
</svg>
                    North Ridge, Lakeside
                  </span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm backdrop-blur-sm p-4 sm:p-5 w-full sm:w-auto sm:min-w-[16rem]">
<div className="flex items-baseline justify-between gap-2">
<div>
<div className="text-xs sm:text-sm text-slate-400">From</div>
<div className="flex items-baseline gap-1">
<span className="text-xl sm:text-2xl font-semibold tracking-tight text-emerald-300">$220</span>
<span className="text-xs sm:text-sm text-slate-400">/night</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-[0.72rem] sm:text-xs font-medium tracking-tight px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Available
                  </span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
<div className="space-y-0.5">
<div className="text-slate-400">Sleeps</div>
<div className="font-medium">2 adults</div>
</div>
<div className="space-y-0.5">
<div className="text-slate-400">Size</div>
<div className="font-medium">42 m²</div>
</div>
</div>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-medium tracking-tight py-2.5 sm:py-3 px-3 shadow-sm hover:shadow-md transition-all">
<svg className="w-4 h-4 stroke-slate-950" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21"></path>
<path d="M7 11H17"></path>
<path d="M5 15H12"></path>
</svg>
<span>Select dates</span>
</button>
<p className="mt-2 text-[0.72rem] sm:text-xs text-slate-400">
                  No prepayment required. Free cancellation up to 7 days before arrival.
                </p>
</div>
</div>
</section>

<section className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">

<div className="space-y-4">
<div className="aspect-[16/10] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 relative">
<img alt="Mountain view suite with large windows and fireplace" className="w-full h-full object-cover" src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-slate-950/20"></div>

<div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
<div className="space-y-1">
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 border border-slate-700/70 px-2.5 py-1 backdrop-blur-sm">
<svg className="w-3.5 h-3.5 stroke-emerald-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21L12 3L21 21H3Z"></path>
</svg>
<span className="text-[0.72rem] font-medium tracking-tight text-emerald-100">
                        Panoramic mountain view
                      </span>
</div>
<div className="text-xs sm:text-sm text-slate-200">
                      Corner suite with floor-to-ceiling windows, private balcony, and fireplace.
                    </div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full bg-slate-950/70 border border-slate-700/70 h-9 w-9 backdrop-blur">
<svg className="w-4 h-4 stroke-slate-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center rounded-full bg-slate-950/70 border border-slate-700/70 h-9 w-9 backdrop-blur">
<svg className="w-4 h-4 stroke-slate-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 border border-slate-700/70 text-[0.72rem] text-slate-100 font-medium tracking-tight py-1.5 px-2.5 backdrop-blur">
<svg className="w-3.5 h-3.5 stroke-slate-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="1" width="18" x="3" y="5"></rect>
<path d="M10 9L8 11L10 13"></path>
<path d="M14 9L16 11L14 13"></path>
</svg>
<span>View all 18 photos</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
<button className="aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/60 ring-2 ring-emerald-400/40 bg-slate-900/80">
<img alt="Bedroom view" className="w-full h-full object-cover" src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
</button>
<button className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 hover:border-slate-600 transition-colors">
<img alt="Bathroom" className="w-full h-full object-cover" src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
</button>
<button className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 hover:border-slate-600 transition-colors">
<img alt="Balcony view" className="w-full h-full object-cover" src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
</button>
<button className="hidden sm:flex aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 hover:border-slate-600 transition-colors relative items-center justify-center">
<img alt="Lounge area" className="w-full h-full object-cover" src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
<span className="text-xs sm:text-sm font-medium text-slate-100 tracking-tight">+ 14 more</span>
</div>
</button>
</div>
</div>

<aside className="space-y-4 lg:space-y-6">

<div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-2">
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Check availability</h2>
<button className="inline-flex items-center gap-1 text-[0.72rem] sm:text-xs text-slate-300 hover:text-emerald-300 transition-colors">
<svg className="w-3.5 h-3.5 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12"></path>
<path d="M4 4V8H8"></path>
</svg>
<span>Flexible dates</span>
</button>
</div>
<div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
<button className="flex flex-col items-start gap-1 rounded-xl border border-slate-700 bg-slate-900/60 hover:border-emerald-400/70 hover:bg-slate-900 transition-colors py-2.5 px-3">
<span className="text-[0.72rem] text-slate-400">Check-in</span>
<span className="text-sm font-medium text-slate-50">Add date</span>
</button>
<button className="flex flex-col items-start gap-1 rounded-xl border border-slate-700 bg-slate-900/60 hover:border-emerald-400/70 hover:bg-slate-900 transition-colors py-2.5 px-3">
<span className="text-[0.72rem] text-slate-400">Check-out</span>
<span className="text-sm font-medium text-slate-50">Add date</span>
</button>
<button className="col-span-2 flex items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-900/60 hover:border-emerald-400/70 hover:bg-slate-900 transition-colors py-2.5 px-3">
<div className="flex flex-col gap-0.5 text-left">
<span className="text-[0.72rem] text-slate-400">Guests</span>
<span className="text-sm font-medium text-slate-50">2 adults · 0 children</span>
</div>
<svg className="w-4 h-4 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm font-medium tracking-tight py-2.5 sm:py-3 px-3 shadow-sm hover:shadow-md transition-all">
<svg className="w-4 h-4 stroke-slate-950" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4H19"></path>
<path d="M5 8H19"></path>
<rect height="15" rx="2" width="16" x="4" y="5"></rect>
</svg>
<span>Check availability</span>
</button>
<div className="flex items-center justify-between text-[0.72rem] sm:text-xs text-slate-400">
<span>Average nightly price</span>
<span className="font-medium text-slate-100">$220 – $290</span>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 space-y-4">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Room highlights</h3>
<dl className="grid gap-3 text-xs sm:text-sm text-slate-300">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="w-4 h-4 stroke-emerald-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10H21"></path>
</svg>
</div>
<div className="flex-1">
<dt className="font-medium text-slate-100">King bed</dt>
<dd className="text-slate-400">Premium mattress, down duvet, choice of pillows.</dd>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="w-4 h-4 stroke-emerald-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20V16H4V4Z"></path>
<path d="M2 18H22"></path>
<path d="M9 9H15"></path>
</svg>
</div>
<div className="flex-1">
<dt className="font-medium text-slate-100">Private balcony</dt>
<dd className="text-slate-400">Seating for two facing the northern ridge and lake.</dd>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="w-4 h-4 stroke-emerald-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="16" x="4" y="3"></rect>
<path d="M9 8H15"></path>
<path d="M9 12H15"></path>
<path d="M9 16H13"></path>
</svg>
</div>
<div className="flex-1">
<dt className="font-medium text-slate-100">Work-friendly</dt>
<dd className="text-slate-400">Dedicated desk, fast Wi-Fi, multiple outlets.</dd>
</div>
</div>
</dl>
<button className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-300 transition-colors">
<span>View full amenities</span>
<svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</aside>
</section>

<section className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">

<div className="space-y-6">

<div className="space-y-3">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">About this room</h2>
<div className="space-y-3 text-sm sm:text-base text-slate-300">
<p>
                    Wake up to the first light over the northern ridge from your corner suite. The Mountain View Suite
                    combines warm timber, wool textures, and subtle stone details to bring the landscape indoors,
                    while floor-to-ceiling windows frame the surrounding peaks and lake.
                  </p>
<p>
                    A private balcony invites you to linger over morning coffee or a late-night drink, with a
                    small fireplace inside for colder evenings. The ensuite bathroom features a walk-in rain shower,
                    heated floors, and locally sourced bath amenities.
                  </p>
<p>
                    Each stay includes daily breakfast in the lodge, access to the spa &amp; sauna, and priority
                    reservations for guided hikes and lake activities.
                  </p>
</div>
</div>

<div className="space-y-4">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Amenities</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-300">
<div className="space-y-2">
<h3 className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wide">Comfort</h3>
<ul className="space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>King-size bed with premium linens</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Blackout curtains</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Individually controlled heating</span>
</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wide">Bathroom</h3>
<ul className="space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Walk-in rain shower</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Heated floors &amp; towel rack</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Organic toiletries</span>
</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wide">Technology</h3>
<ul className="space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>High-speed Wi-Fi</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Smart TV with streaming</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>In-room audio speaker</span>
</li>
</ul>
</div>
<div className="space-y-2">
<h3 className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wide">Extras</h3>
<ul className="space-y-1.5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Nespresso machine &amp; tea selection</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Minibar with local snacks</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>In-room safe</span>
</li>
</ul>
</div>
</div>
</div>

<div className="space-y-3">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Good to know</h2>
<div className="grid gap-3 text-sm sm:text-base text-slate-300">
<div className="flex gap-3">
<span className="text-xs sm:text-sm font-medium text-slate-400 min-w-[6rem] sm:min-w-[7rem]">Check-in</span>
<span>3:00 PM – 9:00 PM. Late check-in available by prior arrangement.</span>
</div>
<div className="flex gap-3">
<span className="text-xs sm:text-sm font-medium text-slate-400 min-w-[6rem] sm:min-w-[7rem]">Check-out</span>
<span>By 11:00 AM. Late check-out subject to availability.</span>
</div>
<div className="flex gap-3">
<span className="text-xs sm:text-sm font-medium text-slate-400 min-w-[6rem] sm:min-w-[7rem]">Pets</span>
<span>Welcome in this room type (cleaning fee may apply).</span>
</div>
<div className="flex gap-3">
<span className="text-xs sm:text-sm font-medium text-slate-400 min-w-[6rem] sm:min-w-[7rem]">Smoking</span>
<span>Non-smoking room. Smoking allowed only in designated outdoor areas.</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-2">
<div className="space-y-1">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Guest reviews</h2>
<div className="flex items-center gap-2 text-sm sm:text-base text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 px-2 py-0.5">
<svg className="w-3.5 h-3.5 stroke-amber-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21L16.54 14.12L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 14.12L5.82 21L12 17.27Z"></path>
</svg>
<span className="text-xs sm:text-sm font-medium text-slate-100">4.9</span>
</span>
<span className="text-xs sm:text-sm text-slate-400">Based on 128 stays</span>
</div>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-300 transition-colors">
<span>View all</span>
<svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="space-y-3 text-xs sm:text-sm text-slate-300">
<div className="flex flex-col gap-1.5 rounded-xl bg-slate-900/60 border border-slate-800 p-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[0.7rem] font-medium text-slate-100">
                          EL
                        </div>
<div className="flex flex-col leading-tight">
<span className="text-xs sm:text-sm font-medium text-slate-100">Elena</span>
<span className="text-[0.72rem] text-slate-400">Stayed October 2024</span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-xs text-slate-200">
<svg className="w-3.5 h-3.5 stroke-amber-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21L16.54 14.12L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 14.12L5.82 21L12 17.27Z"></path>
</svg>
<span>5.0</span>
</div>
</div>
<p className="text-slate-300">
                      “The view from the balcony is incredible. We loved watching the sunrise with coffee every
                      morning and winding down by the fireplace at night.”
                    </p>
</div>
<div className="flex flex-col gap-1.5 rounded-xl bg-slate-900/60 border border-slate-800 p-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-[0.7rem] font-medium text-slate-100">
                          MS
                        </div>
<div className="flex flex-col leading-tight">
<span className="text-xs sm:text-sm font-medium text-slate-100">Marcus</span>
<span className="text-[0.72rem] text-slate-400">Stayed August 2024</span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-xs text-slate-200">
<svg className="w-3.5 h-3.5 stroke-amber-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21L16.54 14.12L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 14.12L5.82 21L12 17.27Z"></path>
</svg>
<span>4.8</span>
</div>
</div>
<p className="text-slate-300">
                      “Quiet, comfortable, and very well equipped. The hiking recommendations from the staff were
                      spot on.”
                    </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-2">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Location</h2>
<button className="inline-flex items-center gap-1.5 text-[0.72rem] sm:text-xs text-slate-300 hover:text-emerald-300 transition-colors">
<svg className="w-3.5 h-3.5 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C12 21 5 14.9706 5 10C5 6.68629 7.68629 4 11 4H13C16.3137 4 19 6.68629 19 10C19 14.9706 12 21 12 21Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
<span>Open in maps</span>
</button>
</div>
<div className="space-y-3 text-xs sm:text-sm text-slate-300">
<div className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 stroke-slate-300" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C12 21 5 14.9706 5 10C5 6.68629 7.68629 4 11 4H13C16.3137 4 19 6.68629 19 10C19 14.9706 12 21 12 21Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
<div>
<div className="font-medium text-slate-100">North Ridge, Lakeside</div>
<div className="text-slate-400">15 minutes from the village center, overlooking the lake.</div>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900">
<div className="aspect-[4/3] relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"></div>
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(45,212,191,0.2), transparent 55%), radial-gradient(circle at 80% 70%, rgba(56,189,248,0.18), transparent 55%)'}}></div>

<div className="absolute inset-0">
<div className="h-full w-full" style={{backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.9) 1px, transparent 1px)', backgroundSize: '5% 8%'}}></div>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative">
<div className="h-16 w-16 rounded-full bg-emerald-400/10 border border-emerald-400/40 flex items-center justify-center">
<div className="h-10 w-10 rounded-full bg-emerald-400/20 border border-emerald-400/60 flex items-center justify-center">
<svg className="w-5 h-5 stroke-emerald-100" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C12 21 5 14.9706 5 10C5 6.68629 7.68629 4 11 4H13C16.3137 4 19 6.68629 19 10C19 14.9706 12 21 12 21Z"></path>
<circle cx="12" cy="10" r="2.5"></circle>
</svg>
</div>
</div>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-[0.72rem] sm:text-xs text-slate-200 bg-slate-950/70 border border-slate-800 rounded-lg px-3 py-1.5 backdrop-blur">
<span>Village center – 15 min drive</span>
<span className="hidden sm:inline h-1 w-1 rounded-full bg-slate-600"></span>
<span className="hidden sm:inline">Trailhead – 5 min walk</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4 pt-3 border-t border-slate-900/70">
<div className="flex items-center justify-between gap-2">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">More rooms you might like</h2>
<button className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-300 transition-colors">
<span>View all rooms</span>
<svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Forest-side room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0"></div>
<div className="absolute bottom-3 left-3 text-xs text-slate-200 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 border border-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Forest side
                    </span>
</div>
</div>
<div className="p-4 sm:p-4 flex-1 flex flex-col gap-3">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Forest Studio</h3>
<p className="text-xs sm:text-sm text-slate-400">Cozy studio surrounded by pine forest.</p>
</div>
<div className="text-right text-xs sm:text-sm">
<div className="text-slate-100 font-medium">$180</div>
<div className="text-slate-400">/night</div>
</div>
</div>
<div className="flex items-center justify-between text-[0.72rem] sm:text-xs text-slate-400">
<span>Sleeps 2</span>
<span>•</span>
<span>28 m²</span>
<span>•</span>
<span>Queen bed</span>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Lakeside room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/1467631/pexels-photo-1467631.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0"></div>
<div className="absolute bottom-3 left-3 text-xs text-slate-200 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 border border-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                      Lakefront
                    </span>
</div>
</div>
<div className="p-4 sm:p-4 flex-1 flex flex-col gap-3">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Lakeside Deluxe</h3>
<p className="text-xs sm:text-sm text-slate-400">Spacious room with full lake panorama.</p>
</div>
<div className="text-right text-xs sm:text-sm">
<div className="text-slate-100 font-medium">$240</div>
<div className="text-slate-400">/night</div>
</div>
</div>
<div className="flex items-center justify-between text-[0.72rem] sm:text-xs text-slate-400">
<span>Sleeps 3</span>
<span>•</span>
<span>38 m²</span>
<span>•</span>
<span>King bed</span>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Family suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0"></div>
<div className="absolute bottom-3 left-3 text-xs text-slate-200 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 border border-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                      Family
                    </span>
</div>
</div>
<div className="p-4 sm:p-4 flex-1 flex flex-col gap-3">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Family Loft</h3>
<p className="text-xs sm:text-sm text-slate-400">Two-level loft with separate kids’ space.</p>
</div>
<div className="text-right text-xs sm:text-sm">
<div className="text-slate-100 font-medium">$260</div>
<div className="text-slate-400">/night</div>
</div>
</div>
<div className="flex items-center justify-between text-[0.72rem] sm:text-xs text-slate-400">
<span>Sleeps 4</span>
<span>•</span>
<span>52 m²</span>
<span>•</span>
<span>2 bedrooms</span>
</div>
</div>
</article>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-900/80 bg-slate-950/95">
<div className="max-w-6xl mx-auto py-5 sm:py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold tracking-tight text-slate-100">Alpine Lodge</span>
<span>·</span>
<span>North Ridge, Lakeside</span>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors">
<svg className="w-3.5 h-3.5 stroke-current" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20V20H4V4Z"></path>
<path d="M4 9H20"></path>
<path d="M9 9V20"></path>
</svg>
<span>Contact</span>
</button>
<button className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors">
<span>Terms</span>
</button>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
