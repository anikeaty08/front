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



      // Initialize icons
      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Sheet controls
      const sheetRoot = document.getElementById("sheetRoot");
      const sheetBackdrop = document.getElementById("sheetBackdrop");
      const sheetPanel = document.getElementById("sheetPanel");
      const openSheet = document.getElementById("openSheet");
      const openSheet2 = document.getElementById("openSheet2");
      const closeSheet = document.getElementById("closeSheet");

      const open = () => {
        sheetRoot.classList.remove("hidden");
        requestAnimationFrame(() => {
          sheetBackdrop.classList.remove("opacity-0");
          sheetPanel.classList.remove("translate-y-full");
        });
      };
      const close = () => {
        sheetBackdrop.classList.add("opacity-0");
        sheetPanel.classList.add("translate-y-full");
        setTimeout(() => sheetRoot.classList.add("hidden"), 200);
      };

      openSheet?.addEventListener("click", open);
      openSheet2?.addEventListener("click", open);
      closeSheet?.addEventListener("click", close);
      sheetBackdrop?.addEventListener("click", close);

      // Guests stepper
      const decGuests = document.getElementById("decGuests");
      const incGuests = document.getElementById("incGuests");
      const guestsCount = document.getElementById("guestsCount");
      const guestsLabel = document.getElementById("guestsLabel");
      let guests = 2;
      const updateGuests = () => {
        guestsCount.textContent = String(guests);
        guestsLabel.textContent = guests + (guests === 1 ? " Adult" : " Adults");
      };
      decGuests?.addEventListener("click", () => {
        guests = Math.max(1, guests - 1);
        updateGuests();
      });
      incGuests?.addEventListener("click", () => {
        guests = Math.min(4, guests + 1);
        updateGuests();
      });

      // Promo toggle
      const togglePromo = document.getElementById("togglePromo");
      const promoField = document.getElementById("promoField");
      togglePromo?.addEventListener("click", () => {
        promoField.classList.toggle("hidden");
      });

      // Custom room dropdown
      const roomButton = document.getElementById("roomButton");
      const roomList = document.getElementById("roomList");
      const roomValue = document.getElementById("roomValue");
      roomButton?.addEventListener("click", () => {
        roomList.classList.toggle("hidden");
      });
      roomList?.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.dataset && target.dataset.value) {
          roomValue.textContent = target.dataset.value;
          roomList.classList.add("hidden");
        }
      });
      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!roomButton.contains(e.target) && !roomList.contains(e.target)) {
          roomList.classList.add("hidden");
        }
      });

      // Default dates: today + 2
      const checkin = document.getElementById("checkin");
      const checkout = document.getElementById("checkout");
      const toISO = (d) => d.toISOString().slice(0, 10);
      const today = new Date();
      const inTwo = new Date();
      inTwo.setDate(today.getDate() + 2);
      if (checkin && checkout) {
        checkin.value = toISO(today);
        checkout.value = toISO(inTwo);
        checkin.min = toISO(today);
        checkout.min = toISO(today);
        checkin.addEventListener("change", () => {
          const ci = new Date(checkin.value);
          const co = new Date(checkout.value);
          const minCo = new Date(ci);
          minCo.setDate(ci.getDate() + 1);
          const minStr = toISO(minCo);
          checkout.min = minStr;
          if (co <= ci) checkout.value = minStr;
        });
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
      

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-md px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-200 grid place-items-center text-neutral-900 text-[11px] tracking-tight font-semibold select-none">
            HN
          </div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-medium tracking-tight">Harbor North</span>
<span className="text-[11px] text-neutral-500">Beachfront Hotel</span>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors">
<i className="h-[18px] w-[18px]" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="mx-auto max-w-md">
<div className="px-4 pt-4">
<div className="relative overflow-hidden rounded-xl border border-neutral-200">
<img alt="Oceanfront hotel lobby with panoramic views" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 pointer-events-none"></div>

<div className="absolute top-3 left-3 flex items-center gap-2">
<span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur ring-1 ring-white/15 tracking-tight">Oceanfront</span>
<span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur ring-1 ring-white/15 tracking-tight flex items-center gap-1.5">
<i className="h-[14px] w-[14px] text-amber-300" data-lucide="star"></i>
              4.8
            </span>
</div>

<div className="absolute bottom-3 left-3">
<div className="px-3 py-2 rounded-lg bg-white/90 backdrop-blur ring-1 ring-neutral-200 shadow-sm">
<p className="text-[11px] text-neutral-500">From</p>
<p className="text-[15px] font-semibold tracking-tight">$189 <span className="text-[11px] font-normal text-neutral-500">/ night</span></p>
</div>
</div>

<div className="absolute bottom-3 right-3">
<button className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-[13px] font-medium tracking-tight shadow-sm hover:bg-neutral-800 active:bg-neutral-900/90 transition-colors" id="openSheet">
              Book stay
            </button>
</div>
</div>

<div className="mt-4">
<h1 className="text-[24px] sm:text-[28px] font-semibold tracking-tight leading-snug">
            Wake up to the ocean. Modern comfort, curated experiences.
          </h1>
<p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
            Steps from the shoreline, minutes from the city. Thoughtfully designed rooms, local dining, and a rooftop pool with golden-hour views.
          </p>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 mt-5">
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="h-9 w-9 rounded-md grid place-items-center bg-neutral-50 border border-neutral-200">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="wifi"></i>
</div>
<div className="text-[13px]">
<p className="font-medium tracking-tight">Fast Wi‑Fi</p>
<p className="text-[12px] text-neutral-500">Included</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="h-9 w-9 rounded-md grid place-items-center bg-neutral-50 border border-neutral-200">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="cup-soda"></i>
</div>
<div className="text-[13px]">
<p className="font-medium tracking-tight">Beach Bar</p>
<p className="text-[12px] text-neutral-500">Crafted</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="h-9 w-9 rounded-md grid place-items-center bg-neutral-50 border border-neutral-200">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="sun"></i>
</div>
<div className="text-[13px]">
<p className="font-medium tracking-tight">Rooftop Pool</p>
<p className="text-[12px] text-neutral-500">Heated</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="h-9 w-9 rounded-md grid place-items-center bg-neutral-50 border border-neutral-200">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="sparkles"></i>
</div>
<div className="text-[13px]">
<p className="font-medium tracking-tight">Spa &amp; Sauna</p>
<p className="text-[12px] text-neutral-500">Reservations</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 mt-6">
<div className="flex items-center justify-between">
<h2 className="text-[18px] font-medium tracking-tight">Rooms &amp; Suites</h2>
<a className="text-[12px] text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300" href="#">View all</a>
</div>
<div className="mt-3 overflow-x-auto no-scrollbar" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<div className="flex gap-3 w-max">

<article className="w-64 shrink-0 rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors">
<div className="relative">
<img alt="Deluxe King Room" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 text-[11px] bg-white/90 backdrop-blur rounded-md ring-1 ring-neutral-200">Deluxe King</div>
</div>
<div className="p-3">
<p className="text-[13px] text-neutral-600">City view, balcony</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-[14px] font-semibold tracking-tight">$189</span>
<button className="text-[12px] px-2.5 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors">Select</button>
</div>
</div>
</article>

<article className="w-64 shrink-0 rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors">
<div className="relative">
<img alt="Ocean Suite" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 text-[11px] bg-white/90 backdrop-blur rounded-md ring-1 ring-neutral-200">Ocean Suite</div>
</div>
<div className="p-3">
<p className="text-[13px] text-neutral-600">Panoramic oceanfront</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-[14px] font-semibold tracking-tight">$279</span>
<button className="text-[12px] px-2.5 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors">Select</button>
</div>
</div>
</article>

<article className="w-64 shrink-0 rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-colors">
<div className="relative">
<img alt="Family Loft" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 text-[11px] bg-white/90 backdrop-blur rounded-md ring-1 ring-neutral-200">Family Loft</div>
</div>
<div className="p-3">
<p className="text-[13px] text-neutral-600">Two-level space</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-[14px] font-semibold tracking-tight">$239</span>
<button className="text-[12px] px-2.5 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors">Select</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="mx-auto max-w-md px-4 mt-6">
<div className="rounded-xl border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<i className="h-[18px] w-[18px] text-neutral-500" data-lucide="quote"></i>
<p className="text-[13px] text-neutral-700">
            “Best sunrise of my life. Staff went above and beyond. We’ll be back.”
          </p>
</div>
<div className="mt-3 flex items-center gap-2">
<img alt="Guest" className="h-8 w-8 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[12px] font-medium tracking-tight">Avery Chen</p>
<p className="text-[11px] text-neutral-500">Stayed June 2025</p>
</div>
</div>
</div>
</section>

<nav className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-neutral-200">
<div className="mx-auto max-w-md px-4 py-2 pb-[calc(env(safe-area-inset-bottom)+8px)]">
<div className="flex items-center gap-2">
<button aria-label="Call" className="h-11 w-11 shrink-0 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 active:bg-neutral-100 grid place-items-center transition-colors">
<i className="h-[18px] w-[18px]" data-lucide="phone"></i>
</button>
<button className="flex-1 h-11 rounded-lg bg-neutral-900 text-white text-[14px] font-medium tracking-tight shadow-sm hover:bg-neutral-800 active:bg-neutral-900/90 transition-colors flex items-center justify-center gap-2" id="openSheet2">
<i className="h-[18px] w-[18px]" data-lucide="calendar"></i>
            Check availability
          </button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 hidden" id="sheetRoot">

<div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 transition-opacity" id="sheetBackdrop"></div>

<div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform" id="sheetPanel">
<div className="mx-auto max-w-md">
<div className="rounded-t-2xl bg-white border-t border-neutral-200 shadow-xl">
<div className="px-4 pt-3 pb-2 flex items-center justify-between">
<div className="h-1.5 w-10 rounded-full bg-neutral-200 mx-auto absolute left-1/2 -translate-x-1/2 -mt-1.5"></div>
<h3 className="text-[18px] font-medium tracking-tight">Book your stay</h3>
<button aria-label="Close" className="h-9 w-9 grid place-items-center rounded-md border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors" id="closeSheet">
<i className="h-[18px] w-[18px]" data-lucide="x"></i>
</button>
</div>
<div className="px-4 pb-4 space-y-3">

<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<div className="h-9 w-9 rounded-md grid place-items-center bg-neutral-50 border border-neutral-200">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="map-pin"></i>
</div>
<div className="flex-1">
<label className="text-[12px] text-neutral-500">Destination</label>
<div className="flex items-center justify-between">
<p className="text-[14px] font-medium tracking-tight">Harbor North</p>
<span className="text-[12px] text-neutral-500">Seaside</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="p-3 rounded-lg border border-neutral-200">
<label className="block text-[12px] text-neutral-500" htmlFor="checkin">Check‑in</label>
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-neutral-700" data-lucide="calendar"></i>
<input className="w-full bg-transparent text-[14px] font-medium tracking-tight outline-none" id="checkin" type="date"/>
</div>
</div>
<div className="p-3 rounded-lg border border-neutral-200">
<label className="block text-[12px] text-neutral-500" htmlFor="checkout">Check‑out</label>
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-neutral-700" data-lucide="calendar-range"></i>
<input className="w-full bg-transparent text-[14px] font-medium tracking-tight outline-none" id="checkout" type="date"/>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-neutral-200">
<label className="block text-[12px] text-neutral-500">Guests</label>
<div className="mt-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-neutral-700" data-lucide="users"></i>
<span className="text-[14px] font-medium tracking-tight" id="guestsLabel">2 Adults</span>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Decrease guests" className="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 active:bg-neutral-100 grid place-items-center transition-colors" id="decGuests">
<i className="h-[16px] w-[16px]" data-lucide="minus"></i>
</button>
<div className="min-w-[40px] text-center text-[14px] font-medium tracking-tight" id="guestsCount">2</div>
<button aria-label="Increase guests" className="h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 active:bg-neutral-100 grid place-items-center transition-colors" id="incGuests">
<i className="h-[16px] w-[16px]" data-lucide="plus"></i>
</button>
</div>
</div>
<p className="mt-1 text-[11px] text-neutral-500">Max 4 guests per room</p>
</div>

<div className="p-3 rounded-lg border border-neutral-200 relative">
<label className="block text-[12px] text-neutral-500">Room type</label>
<button className="mt-1 w-full flex items-center justify-between text-left" id="roomButton">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-neutral-700" data-lucide="bed-double"></i>
<span className="text-[14px] font-medium tracking-tight" id="roomValue">Deluxe King</span>
</div>
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="chevron-down"></i>
</button>
<div className="absolute left-0 right-0 mt-2 rounded-lg border border-neutral-200 bg-white shadow-lg overflow-hidden hidden" id="roomList">
<button className="w-full px-3 py-2 text-[13px] hover:bg-neutral-50 text-left" data-value="Deluxe King">Deluxe King</button>
<button className="w-full px-3 py-2 text-[13px] hover:bg-neutral-50 text-left" data-value="Ocean Suite">Ocean Suite</button>
<button className="w-full px-3 py-2 text-[13px] hover:bg-neutral-50 text-left" data-value="Family Loft">Family Loft</button>
</div>
</div>

<div className="p-3 rounded-lg border border-neutral-200">
<div className="flex items-center justify-between">
<label className="text-[12px] text-neutral-500">Have a promo code?</label>
<button className="text-[12px] text-neutral-600 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300" id="togglePromo">Add</button>
</div>
<div className="mt-2 hidden" id="promoField">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-neutral-700" data-lucide="ticket"></i>
<input className="flex-1 bg-transparent outline-none text-[14px] font-medium tracking-tight" placeholder="Enter code" type="text"/>
<button className="h-8 px-2.5 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-[12px]">Apply</button>
</div>
</div>
</div>

<div className="pt-1">
<button className="w-full h-11 rounded-lg bg-neutral-900 text-white text-[14px] font-medium tracking-tight shadow-sm hover:bg-neutral-800 active:bg-neutral-900/90 transition-colors flex items-center justify-center gap-2">
<i className="h-[18px] w-[18px]" data-lucide="search"></i>
                  Search availability
                </button>
<p className="mt-2 text-[11px] text-neutral-500 text-center">
                  No charge today. Free cancellation within 48 hours.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-20"></div>


    </>
  );
}
