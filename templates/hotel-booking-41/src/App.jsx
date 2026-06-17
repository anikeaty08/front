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



      // Initialize icons with uniform stroke width
      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5,
          height: 18,
          width: 18
        }
      });

      // Guest stepper functionality
      const adultEl = document.getElementById('adultCount');
      const childEl = document.getElementById('childCount');
      const labelEl = document.getElementById('guestLabel');

      let adults = 2;
      let children = 0;

      const updateLabel = () => {
        labelEl.textContent = `${adults} Adult${adults !== 1 ? 's' : ''} • ${children} Child${children !== 1 ? 'ren' : ''}`;
      };

      document.getElementById('plusAdult').addEventListener('click', () => {
        adults = Math.min(8, adults + 1);
        adultEl.textContent = adults;
        updateLabel();
      });
      document.getElementById('minusAdult').addEventListener('click', () => {
        adults = Math.max(1, adults - 1);
        adultEl.textContent = adults;
        updateLabel();
      });
      document.getElementById('plusChild').addEventListener('click', () => {
        children = Math.min(6, children + 1);
        childEl.textContent = children;
        updateLabel();
      });
      document.getElementById('minusChild').addEventListener('click', () => {
        children = Math.max(0, children - 1);
        childEl.textContent = children;
        updateLabel();
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
      

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-md px-4 h-14 flex items-center justify-between">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-50 active:scale-[0.98] transition">
<i data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center text-[13px] tracking-tight font-semibold">LH</div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold tracking-tight">Lumen Hotel</span>
<span className="text-[11px] text-neutral-500">City • Sea • Sky</span>
</div>
</div>
<button className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98] transition">
<i className="mr-1.5" data-lucide="phone"></i>
<span className="text-[13px] font-medium">Call</span>
</button>
</div>
</header>

<section className="mx-auto max-w-md px-4 pt-6 pb-4">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200">
<img alt="Hotel lobby with warm light and modern seating" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<div>
<h1 className="text-white text-[26px] leading-[1.15] tracking-tight font-semibold">Stay inspired.</h1>
<p className="text-white/85 text-[13px] mt-1">Thoughtfully designed rooms, effortless moments.</p>
</div>
<div className="bg-white/90 rounded-md px-2 py-1.5 shadow-sm backdrop-blur">
<div className="flex items-center gap-1">
<i className="text-amber-500" data-lucide="star"></i>
<span className="text-[12px] font-medium text-neutral-900">4.8</span>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center h-11 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 active:scale-[0.99] transition shadow-sm">
<i className="mr-2" data-lucide="calendar"></i>
              Book now
            </button>
<button className="inline-flex items-center justify-center h-11 px-3.5 rounded-lg bg-white/90 backdrop-blur text-neutral-900 ring-1 ring-neutral-200 hover:bg-white active:scale-[0.99] transition">
<i className="mr-2" data-lucide="play"></i>
              Tour
            </button>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-200 px-3 py-2.5">
<div className="flex items-center gap-2">
<img alt="Guest avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-[12px] text-neutral-600">2,300+ five‑star stays</span>
</div>
<div className="flex items-center gap-3 text-[12px] text-neutral-600">
<div className="flex items-center gap-1.5">
<i data-lucide="shield-check"></i>
<span>Best rate</span>
</div>
<div className="hidden xs:flex items-center gap-1.5">
<i data-lucide="clock"></i>
<span>24/7</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 pb-2">
<div className="rounded-2xl border border-neutral-200 p-3.5 bg-white shadow-[0_1px_0_0_rgba(17,17,17,0.04)]">
<div className="flex items-center gap-2">
<i className="text-neutral-400" data-lucide="sparkles"></i>
<p className="text-[12px] text-neutral-600">Members save up to 15% on weekdays</p>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<label className="group col-span-1">
<div className="text-[11px] text-neutral-500 mb-1">Check-in</div>
<div className="h-11 rounded-lg ring-1 ring-neutral-200 group-hover:ring-neutral-300 transition bg-white flex items-center px-3">
<i className="mr-2 text-neutral-400" data-lucide="calendar"></i>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" type="date"/>
</div>
</label>
<label className="group col-span-1">
<div className="text-[11px] text-neutral-500 mb-1">Check-out</div>
<div className="h-11 rounded-lg ring-1 ring-neutral-200 group-hover:ring-neutral-300 transition bg-white flex items-center px-3">
<i className="mr-2 text-neutral-400" data-lucide="calendar-days"></i>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-neutral-400" type="date"/>
</div>
</label>
<div className="col-span-2">
<div className="text-[11px] text-neutral-500 mb-1">Guests</div>
<div className="h-11 rounded-lg ring-1 ring-neutral-200 hover:ring-neutral-300 transition bg-white flex items-center justify-between px-2.5">
<div className="flex items-center">
<i className="mr-2 text-neutral-400" data-lucide="users"></i>
<span className="text-[14px]" id="guestLabel">2 Adults • 0 Children</span>
</div>
<div className="flex items-center gap-1.5">
<div className="flex items-center gap-1.5">
<button className="h-8 w-8 rounded-md border border-neutral-200 hover:bg-neutral-50 active:scale-[0.98] transition inline-flex items-center justify-center" id="minusAdult">
<i data-lucide="minus"></i>
</button>
<span className="text-[13px] w-5 text-center font-medium" id="adultCount">2</span>
<button className="h-8 w-8 rounded-md border border-neutral-200 hover:bg-neutral-50 active:scale-[0.98] transition inline-flex items-center justify-center" id="plusAdult">
<i data-lucide="plus"></i>
</button>
</div>
<span className="text-neutral-300">|</span>
<div className="flex items-center gap-1.5">
<button className="h-8 w-8 rounded-md border border-neutral-200 hover:bg-neutral-50 active:scale-[0.98] transition inline-flex items-center justify-center" id="minusChild">
<i data-lucide="minus"></i>
</button>
<span className="text-[13px] w-5 text-center font-medium" id="childCount">0</span>
<button className="h-8 w-8 rounded-md border border-neutral-200 hover:bg-neutral-50 active:scale-[0.98] transition inline-flex items-center justify-center" id="plusChild">
<i data-lucide="plus"></i>
</button>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<button className="text-[12px] text-neutral-600 inline-flex items-center hover:text-neutral-900">
<i className="mr-1.5" data-lucide="ticket"></i>
                Apply code
              </button>
<button className="inline-flex items-center text-[12px] text-neutral-600 hover:text-neutral-900">
<i className="mr-1.5" data-lucide="map-pin"></i>
                Near me
              </button>
</div>
</div>
</div>
<button className="mt-3 w-full h-11 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 active:scale-[0.99] transition inline-flex items-center justify-center">
<i className="mr-2" data-lucide="search"></i>
          Check availability
        </button>
</div>
</section>

<section className="mx-auto max-w-md px-4 py-4">
<h2 className="text-[18px] tracking-tight font-semibold">Essentials</h2>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-50 transition">
<i data-lucide="wifi"></i>
<span className="text-[13px]">Fast Wi‑Fi</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-50 transition">
<i data-lucide="coffee"></i>
<span className="text-[13px]">Breakfast</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-50 transition">
<i data-lucide="car"></i>
<span className="text-[13px]">Parking</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-50 transition">
<i data-lucide="droplets"></i>
<span className="text-[13px]">Pool</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-50 transition">
<i data-lucide="dumbbell"></i>
<span className="text-[13px]">Gym</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 hover:bg-neutral-50 transition">
<i data-lucide="leaf"></i>
<span className="text-[13px]">Spa</span>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 py-4">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Rooms &amp; Suites</h2>
<button className="text-[12px] text-neutral-600 hover:text-neutral-900 inline-flex items-center">
          See all
          <i className="ml-0.5" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-3 flex gap-3 overflow-x-auto no-scrollbar pb-1">

<article className="min-w-[260px] max-w-[260px] rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Deluxe city view room" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[11px] font-medium">City View</div>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="text-[16px] tracking-tight font-semibold">Deluxe Queen</h3>
<div className="text-right">
<div className="text-[12px] text-neutral-500">From</div>
<div className="text-[15px] font-semibold">$169</div>
</div>
</div>
<div className="mt-1.5 flex items-center gap-3 text-[12px] text-neutral-600">
<div className="flex items-center gap-1.5"><i data-lucide="bed-double"></i> Queen</div>
<div className="flex items-center gap-1.5"><i data-lucide="users"></i> 2</div>
<div className="flex items-center gap-1.5"><i data-lucide="wifi"></i> Wi‑Fi</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:scale-[0.99] transition text-[13px] font-medium">Details</button>
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.99] transition text-[13px] font-medium">Book</button>
</div>
</div>
</article>

<article className="min-w-[260px] max-w-[260px] rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Suite with lounge" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[11px] font-medium">Suite</div>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="text-[16px] tracking-tight font-semibold">Corner Suite</h3>
<div className="text-right">
<div className="text-[12px] text-neutral-500">From</div>
<div className="text-[15px] font-semibold">$249</div>
</div>
</div>
<div className="mt-1.5 flex items-center gap-3 text-[12px] text-neutral-600">
<div className="flex items-center gap-1.5"><i data-lucide="sofa"></i> Lounge</div>
<div className="flex items-center gap-1.5"><i data-lucide="users"></i> 3</div>
<div className="flex items-center gap-1.5"><i data-lucide="sun"></i> Balcony</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:scale-[0.99] transition text-[13px] font-medium">Details</button>
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.99] transition text-[13px] font-medium">Book</button>
</div>
</div>
</article>

<article className="min-w-[260px] max-w-[260px] rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="relative">
<img alt="Minimalist king room" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[11px] font-medium">King</div>
</div>
<div className="p-3">
<div className="flex items-start justify-between">
<h3 className="text-[16px] tracking-tight font-semibold">Skyline King</h3>
<div className="text-right">
<div className="text-[12px] text-neutral-500">From</div>
<div className="text-[15px] font-semibold">$199</div>
</div>
</div>
<div className="mt-1.5 flex items-center gap-3 text-[12px] text-neutral-600">
<div className="flex items-center gap-1.5"><i data-lucide="bed-double"></i> King</div>
<div className="flex items-center gap-1.5"><i data-lucide="cup-soda"></i> Mini‑bar</div>
<div className="flex items-center gap-1.5"><i data-lucide="tv"></i> 55"</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:scale-[0.99] transition text-[13px] font-medium">Details</button>
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.99] transition text-[13px] font-medium">Book</button>
</div>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-md px-4 py-4">
<h2 className="text-[18px] tracking-tight font-semibold">Limited Offers</h2>
<div className="mt-3 space-y-3">
<div className="rounded-2xl border border-neutral-200 p-3 bg-neutral-50/60 hover:bg-neutral-50 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-amber-500" data-lucide="sun"></i>
<div>
<div className="text-[14px] font-medium">Early Bird — Save 20%</div>
<div className="text-[12px] text-neutral-600">Book 21+ days in advance</div>
</div>
</div>
<button className="h-9 px-3 rounded-md border border-neutral-200 hover:bg-white active:scale-[0.99] transition text-[13px] font-medium">Unlock</button>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 p-3 bg-neutral-50/60 hover:bg-neutral-50 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-blue-600" data-lucide="briefcase"></i>
<div>
<div className="text-[14px] font-medium">Business Perks</div>
<div className="text-[12px] text-neutral-600">Complimentary breakfast &amp; late checkout</div>
</div>
</div>
<button className="h-9 px-3 rounded-md border border-neutral-200 hover:bg-white active:scale-[0.99] transition text-[13px] font-medium">Claim</button>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 py-4">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight font-semibold">Guest Stories</h2>
<div className="text-[12px] text-neutral-600">4.8/5</div>
</div>
<div className="mt-3 flex gap-3 overflow-x-auto no-scrollbar pb-1">
<div className="min-w-[260px] max-w-[260px] rounded-2xl border border-neutral-200 p-3 bg-white">
<div className="flex items-center gap-2">
<img alt="Guest avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium">Amelia</span>
<span className="text-[11px] text-neutral-500">3 nights • Deluxe</span>
</div>
<div className="ml-auto flex items-center gap-0.5 text-amber-500">
<i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star-half"></i>
</div>
</div>
<p className="mt-2 text-[13px] text-neutral-700">Loved the calm vibe and effortless check‑in. Breakfast croissants are a must.</p>
</div>
<div className="min-w-[260px] max-w-[260px] rounded-2xl border border-neutral-200 p-3 bg-white">
<div className="flex items-center gap-2">
<img alt="Guest avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium">Kai</span>
<span className="text-[11px] text-neutral-500">Weekend • Suite</span>
</div>
<div className="ml-auto flex items-center gap-0.5 text-amber-500">
<i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i>
</div>
</div>
<p className="mt-2 text-[13px] text-neutral-700">Corner suite views are stunning. Staff were super attentive.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 py-4">
<h2 className="text-[18px] tracking-tight font-semibold">Find us</h2>
<div className="mt-3 overflow-hidden rounded-2xl border border-neutral-200">
<div className="relative">
<img alt="City map preview" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-2 right-2 h-10 px-3 rounded-lg bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white active:scale-[0.99] transition inline-flex items-center text-[13px] font-medium text-neutral-900">
<i className="mr-1.5" data-lucide="map-pin"></i>
            Open in Maps
          </button>
</div>
<div className="p-3">
<div className="flex items-center gap-2 text-[13px] text-neutral-700">
<i data-lucide="map"></i>
<span>221 Market St, Downtown</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[13px] text-neutral-700">
<i data-lucide="tram-front"></i>
<span>2 min to Metro Line A</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 pb-24 pt-4">
<div className="rounded-2xl border border-neutral-200 p-3 bg-white">
<div className="flex items-center gap-2">
<i className="text-neutral-900" data-lucide="badge-percent"></i>
<div className="text-[14px] font-medium">Direct booking benefits</div>
</div>
<ul className="mt-2 text-[13px] text-neutral-700 space-y-1.5">
<li className="flex items-center gap-2"><i className="text-green-600" data-lucide="check"></i> Complimentary welcome drink</li>
<li className="flex items-center gap-2"><i className="text-green-600" data-lucide="check"></i> Flexible cancellation</li>
<li className="flex items-center gap-2"><i className="text-green-600" data-lucide="check"></i> Member‑only rates</li>
</ul>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="h-11 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:scale-[0.99] transition text-[13px] font-medium inline-flex items-center justify-center">
<i className="mr-2" data-lucide="mail"></i>
            Email us
          </button>
<button className="h-11 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.99] transition text-[13px] font-medium inline-flex items-center justify-center">
<i className="mr-2" data-lucide="calendar-check"></i>
            Reserve now
          </button>
</div>
</div>
</section>

<nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-neutral-200">
<div className="mx-auto max-w-md grid grid-cols-4 text-[12px]">
<button className="py-2.5 flex flex-col items-center text-neutral-900 font-medium">
<i data-lucide="home"></i>
<span>Home</span>
</button>
<button className="py-2.5 flex flex-col items-center text-neutral-600 hover:text-neutral-900">
<i data-lucide="bed-double"></i>
<span>Rooms</span>
</button>
<button className="py-2.5 flex flex-col items-center text-neutral-600 hover:text-neutral-900">
<i data-lucide="sparkles"></i>
<span>Offers</span>
</button>
<button className="py-2.5 flex flex-col items-center text-neutral-600 hover:text-neutral-900">
<i data-lucide="user-2"></i>
<span>Account</span>
</button>
</div>
</nav>




    </>
  );
}
