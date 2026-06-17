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



    document.getElementById('year').textContent = new Date().getFullYear();
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Smooth-ish micro-interactions
    document.addEventListener('DOMContentLoaded', () => {
      const bookingCard = document.getElementById('booking');
      if (bookingCard) {
        bookingCard.style.opacity = '0';
        bookingCard.style.transform = 'translateY(8px)';
        requestAnimationFrame(() => {
          bookingCard.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';
          bookingCard.style.opacity = '1';
          bookingCard.style.transform = 'translateY(0)';
        });
      }
    });

    // Guest counter + sync to mobile bar
    let guests = 4;
    const maxGuests = 12;
    const guestLabel = document.getElementById('guest-count-label');
    const mobileGuests = document.getElementById('mobile-guests');

    function updateGuests() {
      const label = guests + (guests === 1 ? ' guest' : ' guests');
      if (guestLabel) guestLabel.textContent = label;
      if (mobileGuests) mobileGuests.textContent = label;
    }
    updateGuests();

    const dec = document.getElementById('guest-decrease');
    const inc = document.getElementById('guest-increase');
    if (dec) {
      dec.addEventListener('click', () => {
        if (guests > 1) {
          guests -= 1;
          updateGuests();
        }
      });
    }
    if (inc) {
      inc.addEventListener('click', () => {
        if (guests < maxGuests) {
          guests += 1;
          updateGuests();
        }
      });
    }

    // Date selection: show 30-day validity note + sync to mobile bar
    const dateInput = document.getElementById('main-date');
    const rangeNote = document.getElementById('date-range-note');
    const rangeDates = document.getElementById('range-dates');
    const mobileDate = document.getElementById('mobile-date');

    function formatDate(d) {
      return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    }

    if (dateInput) {
      dateInput.addEventListener('change', (e) => {
        const value = e.target.value;
        if (!value) {
          if (rangeNote) rangeNote.classList.add('hidden');
          if (mobileDate) mobileDate.textContent = 'Select';
          return;
        }
        const selected = new Date(value + 'T00:00:00');
        const end = new Date(selected);
        end.setDate(end.getDate() + 30);

        if (rangeNote && rangeDates) {
          rangeDates.textContent = `${formatDate(selected)} – ${formatDate(end)}`;
          rangeNote.classList.remove('hidden');
        }
        if (mobileDate) {
          mobileDate.textContent = formatDate(selected);
        }
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
      
<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-30 border-b border-slate-100/70 bg-white/80 backdrop-blur-2xl">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-3 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">

<a className="inline-flex items-center gap-2" href="#">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-300 via-cyan-300 to-emerald-300 flex items-center justify-center shadow-sm shadow-sky-100">
<span className="text-xs font-semibold tracking-tight text-white">GB</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">GoBoat</span>
<span className="text-xs sm:text-sm font-normal text-slate-500">Bali Boat Trips</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-700 hover:text-sky-600 transition-colors" href="#tours">Trips</a>
<a className="text-slate-700 hover:text-sky-600 transition-colors" href="#why">Why GoBoat</a>
<a className="text-slate-700 hover:text-sky-600 transition-colors" href="#contact">Contact</a>
</nav>

<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight text-white shadow-sm shadow-slate-300/40 hover:bg-slate-800 transition-colors" href="#booking">
<span>Book a boat</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</header>
<main className="flex-1">

<section className="relative">

<div className="absolute inset-0 -z-10">
<img alt="Boat cruising in Bali at sunset" className="h-full w-full object-cover" loading="lazy" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/35 via-slate-900/10 to-sky-50"></div>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-start px-4 sm:px-6 lg:px-8 pt-10 pb-32 lg:pt-16 lg:pb-24">

<div className="space-y-7 sm:space-y-8">
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/80 px-3.5 py-1.5 text-xs sm:text-sm text-slate-700 shadow-sm shadow-slate-200/50 backdrop-blur">
<div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
<i className="w-3 h-3 stroke-[1.5] text-sky-500" data-lucide="sparkles"></i>
</div>
<span className="font-medium">Private boat trips from Bali &amp; Nusa Penida</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Calm, private boat days in Bali for small groups and slow travelers.
              </h1>
<p className="text-base sm:text-lg text-slate-100/90 max-w-xl">
                A quiet boat, a gentle crew, and clear water. GoBoat plans every detail for you—with flexible tickets and simple booking.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm sm:text-base font-semibold tracking-tight text-slate-900 shadow-sm shadow-slate-300/60 hover:bg-white transition-colors" href="#booking">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="anchor"></i>
<span>Book your boat</span>
</a>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-slate-900/80 transition-colors" type="button">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="play"></i>
<span>Watch Bali by boat</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-100/90">
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-amber-300" data-lucide="star"></i>
<span>4.9 / 5 travelers</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-emerald-300" data-lucide="users"></i>
<span>Ideal for 2–12 guests</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-sky-300" data-lucide="ticket"></i>
<span>Tickets valid for flexible dates</span>
</div>
</div>
</div>

<div className="w-full" id="booking">
<div className="rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-sky-100/60 backdrop-blur-md overflow-hidden">
<div className="px-4 sm:px-5 pt-4 pb-3 border-b border-slate-100/80 flex items-center justify-between">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Plan your boat trip</h2>
<p className="text-sm text-slate-500 mt-1">Premium private charter with flexible dates.</p>
</div>
<div className="text-right">
<span className="block text-[0.7rem] sm:text-xs uppercase tracking-wide text-slate-400">From</span>
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                    IDR 5.000k
                  </span>
<span className="text-[0.7rem] sm:text-xs text-slate-500">/ boat</span>
</div>
</div>
<form className="px-4 sm:px-5 py-5 space-y-5">

<div className="space-y-1.5">
<label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
<i className="w-4 h-4 stroke-[1.5] text-sky-500" data-lucide="map-pin"></i>
                    Where would you like to go?
                  </label>
<button className="w-full flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 hover:border-sky-300 hover:bg-sky-50/60 transition-colors" type="button">
<span>Nusa Penida – Day Trip</span>
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="chevron-down"></i>
</button>
<p className="text-xs text-slate-500">
                    Other routes: Lembongan, Sunset Cruise, Custom itinerary.
                  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="space-y-2">
<label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
<i className="w-4 h-4 stroke-[1.5] text-sky-500" data-lucide="calendar"></i>
                      Date
                    </label>
<div className="space-y-2">
<div className="flex items-center rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 hover:border-sky-300 transition-colors">
<input className="bg-transparent outline-none w-full text-sm text-slate-800 placeholder-slate-400" id="main-date" type="date"/>
</div>

<div className="hidden rounded-2xl border border-sky-100 bg-sky-50/70 px-3 py-2 text-[0.7rem] sm:text-xs text-sky-900/80" id="date-range-note">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
<i className="w-3 h-3 stroke-[1.5] text-sky-500" data-lucide="calendar-range"></i>
</div>
<div className="flex-1">
<p className="font-medium">Ticket valid for 30 days from booking.</p>
<p className="mt-0.5 text-[0.7rem] text-sky-700/90" id="range-dates"></p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
<i className="w-4 h-4 stroke-[1.5] text-sky-500" data-lucide="clock"></i>
                      Slot
                    </label>
<div className="space-y-1.5">
<div className="flex gap-2">
<button className="flex-1 rounded-2xl border border-sky-300 bg-sky-50 px-3 py-2 text-xs sm:text-sm font-medium text-sky-700 transition-colors" type="button">
                          Morning
                        </button>
<button className="flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm text-slate-700 hover:border-sky-300 hover:bg-sky-50/80 transition-colors" type="button">
                          Midday
                        </button>
<button className="hidden md:inline-flex flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm text-slate-700 hover:border-sky-300 hover:bg-sky-50/80 transition-colors" type="button">
                          Sunset
                        </button>
</div>
<p className="text-[0.7rem] sm:text-xs text-slate-500">
                        First-come-first-served.
                      </p>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
<i className="w-4 h-4 stroke-[1.5] text-sky-500" data-lucide="users"></i>
                    Guests
                  </label>
<div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900" id="guest-count-label">4 guests</span>
<span className="text-xs text-slate-500">Up to 12 guests per boat</span>
</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:border-sky-300 hover:text-sky-600 transition-colors" id="guest-decrease" type="button">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="minus"></i>
</button>
<button className="h-8 w-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:border-sky-300 hover:text-sky-600 transition-colors" id="guest-increase" type="button">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 space-y-2">
<div className="flex items-center justify-between text-xs sm:text-sm text-slate-700">
<span>Boat charter (base)</span>
<span className="font-medium">IDR 5.000k</span>
</div>
<div className="flex items-center justify-between text-xs sm:text-sm text-slate-700">
<span>Guests (incl. up to 6)</span>
<span className="font-medium">Included</span>
</div>
<div className="flex items-center justify-between text-xs sm:text-sm text-slate-700">
<span>Harbor &amp; fuel</span>
<span className="font-medium">Included</span>
</div>
<div className="border-t border-slate-200 pt-2 flex items-center justify-between text-xs sm:text-sm">
<span className="font-medium text-slate-900">Estimated total</span>
<span className="font-semibold tracking-tight text-slate-900">IDR 5.000k</span>
</div>
<p className="text-[0.7rem] sm:text-xs text-slate-500">
                    Final price confirmed before payment based on route and guests.
                  </p>
</div>

<div className="space-y-1.5">
<label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
<i className="w-4 h-4 stroke-[1.5] text-emerald-500" data-lucide="phone"></i>
                    WhatsApp number
                  </label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-0" placeholder="+62 8xx xxx xxxx" type="tel"/>
<p className="text-xs text-slate-500">
                    We’ll share final price, time slot and weather window before payment.
                  </p>
</div>

<div className="rounded-2xl border border-amber-100 bg-amber-50/70 px-3 py-2.5 text-[0.7rem] sm:text-xs text-amber-900/90">
<div className="flex items-start gap-2">
<div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
<i className="w-3 h-3 stroke-[1.5] text-amber-600" data-lucide="cloud-rain"></i>
</div>
<div>
<p className="font-medium">Weather &amp; safety</p>
<p className="mt-0.5">
                        Trips may be rescheduled due to Bali Water Safety rules. You’ll choose a new date or route before payment is processed.
                      </p>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold tracking-tight text-white shadow-sm shadow-slate-400/40 hover:bg-slate-800 transition-colors" type="submit">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="credit-card"></i>
<span>Book Now</span>
</button>
<p className="text-[0.7rem] sm:text-xs text-slate-500">
                    No charge until you confirm final time and weather.
                  </p>
</div>
</form>
</div>
</div>
</div>

<div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 border-t border-slate-200/70 backdrop-blur lg:hidden">
<div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">

<button className="flex-1 flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-700" type="button">
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Guests</span>
<span className="text-sm font-medium text-slate-900" id="mobile-guests">4 guests</span>
</button>

<button className="flex-1 flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-700" onclick="document.getElementById('main-date').focus()" type="button">
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Date</span>
<span className="text-sm font-medium text-slate-900" id="mobile-date">Select</span>
</button>

<button className="flex-1 flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-xs text-slate-700" type="button">
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Slot</span>
<span className="text-sm font-medium text-slate-900">Morning</span>
<span className="mt-0.5 text-[0.65rem] text-slate-500">First-come-first-served.</span>
</button>

<a className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-xs font-semibold tracking-tight text-white shadow-sm shadow-slate-400/40 hover:bg-slate-800 transition-colors" href="#booking">
<span>Book</span>
</a>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-100" id="tours">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                Signature boat days from Bali
              </h2>
<p className="mt-2 text-base text-slate-500 max-w-xl">
                Quiet routes, unhurried stops, and comfortable time on the water—tailored to your group.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group rounded-2xl border border-slate-100 bg-sky-50/40 overflow-hidden flex flex-col hover:border-sky-200 hover:bg-sky-50 transition-all">
<div className="relative h-40 overflow-hidden">
<img alt="Boat near cliffs of Nusa Penida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"/>
<div className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] text-slate-800 flex items-center gap-1 shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Nusa Penida
                </div>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                  Nusa Penida Day Retreat
                </h3>
<p className="mt-2 text-sm text-slate-600">
                  A soft-paced day with hidden bays, snorkeling, and calm time on the water.
                </p>
<div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-600">
<span>Full day • Private boat</span>
<span className="font-medium text-slate-900">From IDR 5.500k</span>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-100 bg-sky-50/40 overflow-hidden flex flex-col hover:border-sky-200 hover:bg-sky-50 transition-all">
<div className="relative h-40 overflow-hidden">
<img alt="Sunset boat in Bali" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"/>
<div className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] text-slate-800 flex items-center gap-1 shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  Sunset Cruise
                </div>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                  Golden Hour Coastline
                </h3>
<p className="mt-2 text-sm text-slate-600">
                  Drift along Bali’s coast with sunset light, soft music, and time for photos.
                </p>
<div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-600">
<span>3–4 hours • Private boat</span>
<span className="font-medium text-slate-900">From IDR 3.500k</span>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-100 bg-sky-50/40 overflow-hidden flex flex-col hover:border-sky-200 hover:bg-sky-50 transition-all">
<div className="relative h-40 overflow-hidden">
<img alt="Snorkeling in clear water" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"/>
<div className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] text-slate-800 flex items-center gap-1 shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Lembongan
                </div>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                  Lembongan Lagoon Day
                </h3>
<p className="mt-2 text-sm text-slate-600">
                  Clear, calm water for families and first-time snorkelers, with shaded deck time.
                </p>
<div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-600">
<span>Half day • Private boat</span>
<span className="font-medium text-slate-900">From IDR 4.000k</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-sky-50/70 border-t border-slate-100" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
<div className="max-w-2xl">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              A softer way to see Bali from the water
            </h2>
<p className="mt-2 text-base text-slate-600">
              Quiet, unhurried trips with local captains, comfortable boats, and flexible plans.
            </p>
</div>
<div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
<div className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-5">
<div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center mb-2.5">
<i className="w-4 h-4 stroke-[1.5] text-sky-500" data-lucide="smile"></i>
</div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
                Gentle local crew
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Captains who read the sea, help with kids, photos, and keep the day feeling easy.
              </p>
</div>
<div className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-5">
<div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center mb-2.5">
<i className="w-4 h-4 stroke-[1.5] text-emerald-500" data-lucide="shield-check"></i>
</div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
                Safe, comfortable boats
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Shade, life jackets, and calm seating so everyone—from toddlers to grandparents—feels at ease.
              </p>
</div>
<div className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-5">
<div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center mb-2.5">
<i className="w-4 h-4 stroke-[1.5] text-amber-500" data-lucide="message-circle"></i>
</div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
                WhatsApp-first planning
              </h3>
<p className="mt-2 text-sm text-slate-600">
                Share your dates and wish-list; we suggest the best time, route, and weather window—then you decide.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-100" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-8">
<div className="space-y-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Chat with GoBoat
            </h2>
<p className="text-base text-slate-600 max-w-xl">
              Share your preferred dates, number of guests, and whether you’d like a slow day, snorkeling, or sunset. We’ll reply with options and a clear price breakdown.
            </p>
<div className="space-y-3 text-sm text-slate-700">
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-emerald-500" data-lucide="phone"></i>
<span>+62 811 389 909 (example – update with official number)</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-sky-500" data-lucide="mail"></i>
<span>hello@goboat.id</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-amber-500" data-lucide="clock-3"></i>
<span>We usually reply within a few hours (Bali time).</span>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-100 bg-sky-50/70 p-4 sm:p-5">
<form className="space-y-3.5">
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-slate-800">Name</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-slate-800">WhatsApp</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400" placeholder="+62 8xx xxx xxxx" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-slate-800">Message</label>
<textarea className="w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400" placeholder="Hi GoBoat, we are 6 people looking for a calm Penida trip in June..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm sm:text-base font-semibold tracking-tight text-white shadow-sm shadow-emerald-300/40 hover:bg-emerald-600 transition-colors" type="submit">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
                Send to GoBoat
              </button>
<p className="text-[0.7rem] sm:text-xs text-slate-500">
                Your details are only used to reply to your trip request.
              </p>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-sky-50/80 border-t border-slate-100/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-300 via-cyan-300 to-emerald-300 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-white">GB</span>
</div>
<div className="flex flex-col">
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">GoBoat Bali</span>
<span className="text-xs sm:text-sm text-slate-500">Bali • Nusa Penida • Nusa Lembongan</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 text-[0.7rem] sm:text-xs text-slate-500">
<span>© <span id="year"></span> GoBoat. All rights reserved.</span>
<span>Calm days at sea, planned from Bali.</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
