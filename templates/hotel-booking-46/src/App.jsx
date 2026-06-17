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



      // Initialize icons with stroke-width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // State
      const state = {
        adults: 2,
        children: 0,
        promo: null,
        nights: 0,
        rates: {
          Deluxe: 180,
          Executive: 260,
          Family: 320
        },
        addOns: {
          Deluxe: [],
          Executive: [],
          Family: []
        }
      };

      // Elements
      const sheet = document.getElementById('bookingSheet');
      const checkinInput = document.getElementById('checkinInput');
      const checkoutInput = document.getElementById('checkoutInput');
      const adultsCount = document.getElementById('adultsCount');
      const childrenCount = document.getElementById('childrenCount');
      const roomTypeSelect = document.getElementById('roomTypeSelect');
      const promoInput = document.getElementById('promoInput');
      const promoFeedback = document.getElementById('promoFeedback');
      const applyPromoBtn = document.getElementById('applyPromoBtn');
      const checkAvailabilityBtn = document.getElementById('checkAvailabilityBtn');
      const resultsSection = document.getElementById('resultsSection');
      const nightsLabel = document.getElementById('nightsLabel');
      const toast = document.getElementById('toast');
      const proceedBtn = document.getElementById('proceedBtn');

      const previewCheckin = document.getElementById('previewCheckin');
      const previewCheckout = document.getElementById('previewCheckout');
      const previewGuests = document.getElementById('previewGuests');
      const previewRoom = document.getElementById('previewRoom');

      // Utilities
      const fmtDate = (val) => {
        if (!val) return 'Select date';
        const d = new Date(val + 'T00:00:00');
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      };
      const diffNights = (inDate, outDate) => {
        if (!inDate || !outDate) return 0;
        const t1 = new Date(inDate + 'T00:00:00').getTime();
        const t2 = new Date(outDate + 'T00:00:00').getTime();
        const diff = Math.max(0, t2 - t1);
        return Math.floor(diff / (1000 * 60 * 60 * 24));
      };
      const showSheet = () => {
        sheet.classList.remove('hidden');
      };
      const hideSheet = () => {
        sheet.classList.add('hidden');
      };
      const showToast = (msg = 'Added to booking. Proceed to reserve.') => {
        toast.querySelector('div').textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 1800);
      };

      // Open/Close booking
      document.querySelectorAll('[data-action="open-booking"]').forEach(btn => {
        btn.addEventListener('click', showSheet);
      });
      document.querySelectorAll('[data-action="close-booking"]').forEach(btn => {
        btn.addEventListener('click', hideSheet);
      });

      // Counters
      document.querySelectorAll('[data-counter]').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-counter');
          const op = btn.getAttribute('data-op');
          const limits = { adults: [1, 6], children: [0, 4] };
          const [min, max] = limits[key];
          state[key] = Math.min(max, Math.max(min, state[key] + (op === 'inc' ? 1 : -1)));
          adultsCount.textContent = state.adults;
          childrenCount.textContent = state.children;
          previewGuests.textContent = `${state.adults} Adults • ${state.children} Children`;
        });
      });

      // Dates -> Preview
      const updatePreviews = () => {
        previewCheckin.textContent = fmtDate(checkinInput.value);
        previewCheckout.textContent = fmtDate(checkoutInput.value);
        previewRoom.textContent = roomTypeSelect.value;
      };
      checkinInput.addEventListener('change', () => {
        // Ensure checkout is after checkin
        if (checkoutInput.value && new Date(checkoutInput.value) <= new Date(checkinInput.value)) {
          const next = new Date(checkinInput.value);
          next.setDate(next.getDate() + 1);
          checkoutInput.valueAsDate = next;
        }
        updatePreviews();
      });
      checkoutInput.addEventListener('change', updatePreviews);
      roomTypeSelect.addEventListener('change', updatePreviews);

      // Promo
      applyPromoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        if (!code) {
          promoFeedback.textContent = 'Enter a promo code.';
          promoFeedback.classList.remove('hidden');
          promoFeedback.classList.replace('text-emerald-600', 'text-slate-600');
          return;
        }
        const valid = ['EARLYBIRD', 'WEEKEND', 'BUSINESS'];
        if (valid.includes(code)) {
          state.promo = code;
          promoFeedback.textContent = 'Promo applied!';
          promoFeedback.classList.remove('hidden');
          promoFeedback.classList.replace('text-slate-600', 'text-emerald-600');
        } else {
          state.promo = null;
          promoFeedback.textContent = 'Invalid promo code.';
          promoFeedback.classList.remove('hidden');
          promoFeedback.classList.replace('text-emerald-600', 'text-rose-600');
        }
      });

      // Availability
      const computeTotal = (key) => {
        const base = state.rates[key];
        let nights = state.nights || 1;
        let addons = 0;
        (state.addOns[key] || []).forEach(a => addons += a.price);
        // Promo: simple 10% off for EARLYBIRD
        let subtotal = base * nights + addons;
        if (state.promo === 'EARLYBIRD') subtotal *= 0.9;
        if (state.promo === 'WEEKEND' && nights >= 2) subtotal -= 50; // weekend perk
        if (state.promo === 'BUSINESS') subtotal -= 20;
        return Math.max(0, Math.round(subtotal));
      };

      const updateTotals = () => {
        ['Deluxe','Executive','Family'].forEach(key => {
          const totalEl = document.querySelector(`[data-total="${key}"]`);
          if (totalEl) totalEl.textContent = `$${computeTotal(key)}`;
        });
      };

      checkAvailabilityBtn.addEventListener('click', () => {
        const n = diffNights(checkinInput.value, checkoutInput.value);
        state.nights = n;
        nightsLabel.textContent = n > 0 ? `${n} night${n>1?'s':''}` : 'Select valid dates';
        resultsSection.classList.remove('hidden');
        // Reset add-ons
        state.addOns = { Deluxe: [], Executive: [], Family: [] };
        document.querySelectorAll('#resultsSection input[type="checkbox"]').forEach(cb => cb.checked = false);
        updateTotals();
        showToast('Availability updated');
      });

      // Add-ons toggles
      document.querySelectorAll('#resultsSection [data-addon] input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e) => {
          // find room card ancestor to detect which room
          const card = e.target.closest('.p-3.rounded-xl');
          let key = 'Deluxe';
          if (card && card.querySelector('[data-rate="Executive"]')) key = 'Executive';
          if (card && card.querySelector('[data-rate="Family"]')) key = 'Family';
          const name = e.target.getAttribute('data-addon-name');
          const price = Number(e.target.getAttribute('data-addon-price') || 0);
          const list = state.addOns[key] || [];
          if (e.target.checked) {
            list.push({ name, price });
          } else {
            const idx = list.findIndex(a => a.name === name);
            if (idx >= 0) list.splice(idx, 1);
          }
          state.addOns[key] = list;
          updateTotals();
        });
      });

      // Select room
      document.querySelectorAll('[data-select-room]').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-select-room');
          const total = computeTotal(key);
          previewRoom.textContent = key + (key.includes('Suite') ? '' : ' Room');
          showToast(`Selected ${key} • $${total}`);
        });
      });

      // Proceed
      proceedBtn.addEventListener('click', () => {
        showToast('Reservation submitted');
        setTimeout(() => hideSheet(), 800);
      });

      // Initial preview sync
      updatePreviews();
    
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
      

<div className="max-w-md mx-auto min-h-screen relative pb-28">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
<div className="px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center text-sm font-semibold tracking-tight">HN</div>
<span className="text-sm text-slate-600">[Hotel Name]</span>
</div>
<div className="flex items-center gap-2">
<a aria-label="Call us" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" href="tel:+971000000000">
<i className="h-4 w-4" data-lucide="phone"></i>
</a>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" data-action="open-booking">
<i className="h-4 w-4" data-lucide="calendar-days"></i>
              Book
            </button>
</div>
</div>
</header>

<section className="px-0">
<div className="relative">
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-px-4 gap-3 px-4 py-4">
<img alt="Hotel lobby" className="snap-start shrink-0 w-[88%] h-56 object-cover rounded-xl border border-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Hotel suite" className="snap-start shrink-0 w-[88%] h-56 object-cover rounded-xl border border-slate-200" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Sky lounge" className="snap-start shrink-0 w-[88%] h-56 object-cover rounded-xl border border-slate-200" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&amp;w=1200&amp;auto&amp;fit=crop"/>
</div>
<div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 border border-slate-200 text-xs text-slate-700">
<i className="h-3.5 w-3.5 text-amber-500" data-lucide="star"></i>
            4.8 • 2,431 reviews
          </div>
<button aria-label="View gallery" className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 border border-slate-200 text-xs text-slate-700 hover:bg-white active:bg-slate-50">
<i className="h-3.5 w-3.5" data-lucide="image"></i>
            Gallery
          </button>
</div>
</section>

<section className="px-4 pt-2">
<h1 className="text-[26px] tracking-tight font-semibold">Welcome to [Hotel Name]</h1>
<p className="text-slate-600 text-[15px] mt-1">Where every stay feels like home — with a touch of luxury. Enjoy refined comfort, personalized service, and memorable experiences.</p>
<div className="mt-4 p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="map-pin"></i>
<span className="text-sm text-slate-700">[City] • Central</span>
</div>
<button className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900" data-action="open-booking">
              Change
              <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="col-span-1 group flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50 active:bg-slate-100" data-action="open-booking">
<i className="h-4 w-4 text-slate-500" data-lucide="calendar"></i>
<div className="text-left">
<div className="text-[11px] text-slate-500">Check-in</div>
<div className="text-sm text-slate-800" id="previewCheckin">Select date</div>
</div>
</button>
<button className="col-span-1 group flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50 active:bg-slate-100" data-action="open-booking">
<i className="h-4 w-4 text-slate-500" data-lucide="calendar-range"></i>
<div className="text-left">
<div className="text-[11px] text-slate-500">Check-out</div>
<div className="text-sm text-slate-800" id="previewCheckout">Select date</div>
</div>
</button>
<button className="col-span-1 group flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50 active:bg-slate-100" data-action="open-booking">
<i className="h-4 w-4 text-slate-500" data-lucide="users"></i>
<div className="text-left">
<div className="text-[11px] text-slate-500">Guests</div>
<div className="text-sm text-slate-800" id="previewGuests">2 Adults • 0 Children</div>
</div>
</button>
<button className="col-span-1 group flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50 active:bg-slate-100" data-action="open-booking">
<i className="h-4 w-4 text-slate-500" data-lucide="bed"></i>
<div className="text-left">
<div className="text-[11px] text-slate-500">Room Type</div>
<div className="text-sm text-slate-800" id="previewRoom">Deluxe Room</div>
</div>
</button>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white text-sm font-medium px-4 py-3 hover:bg-slate-800 active:bg-slate-900/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" data-action="open-booking">
<i className="h-4 w-4" data-lucide="search"></i>
            Check Availability
          </button>
</div>
</section>

<section className="px-4 mt-8">
<div className="flex items-center justify-between">
<h2 className="text-[20px] tracking-tight font-semibold">Limited-Time Offers</h2>
<span className="text-xs text-slate-500">Don’t miss out</span>
</div>
<div className="mt-3 grid gap-3">

<div className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium">Early Bird Special</p>
<span className="text-xs text-emerald-600">Save up to 25%</span>
</div>
<p className="text-sm text-slate-600 mt-0.5">Complimentary breakfast and late check-out.</p>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="tag"></i>
                    Apply
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900/90" data-action="open-booking">Book</button>
</div>
</div>
</div>
</div>
<div className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
<i className="h-5 w-5" data-lucide="flower-2"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium">Weekend Escape</p>
<span className="text-xs text-rose-600">Romantic</span>
</div>
<p className="text-sm text-slate-600 mt-0.5">Two nights, dinner for two, and free spa access.</p>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="heart"></i>
                    Save
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900/90" data-action="open-booking">Book</button>
</div>
</div>
</div>
</div>
<div className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
<i className="h-5 w-5" data-lucide="briefcase"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium">Business Advantage</p>
<span className="text-xs text-sky-600">Work-ready</span>
</div>
<p className="text-sm text-slate-600 mt-0.5">Early check-in, workspace access, and meeting room hour.</p>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="clock"></i>
                    Details
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900/90" data-action="open-booking">Book</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 mt-8">
<h2 className="text-[20px] tracking-tight font-semibold">Dining Experiences</h2>
<p className="text-sm text-slate-600 mt-1">Savor exceptional cuisines from morning till night.</p>
<div className="mt-3 space-y-3">
<div className="p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-3">
<img alt="Signature Restaurant" className="h-20 w-24 object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[15px] font-medium">The Signature Restaurant</p>
<p className="text-xs text-slate-600">Global buffet and à la carte dining.</p>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="utensils"></i>
                  View Menu
                </button>
</div>
</div>
</div>
<div className="p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-3">
<img alt="Sky Lounge" className="h-20 w-24 object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[15px] font-medium">Sky Lounge</p>
<p className="text-xs text-slate-600">Sunset cocktails and live music with panoramic views.</p>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="music-4"></i>
                  Events
                </button>
</div>
</div>
</div>
<div className="p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-3">
<img alt="Brew Café" className="h-20 w-24 object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[15px] font-medium">Brew Café</p>
<p className="text-xs text-slate-600">Artisanal coffee, desserts, and light bites.</p>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="coffee"></i>
                  Order Ahead
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 mt-8">
<h2 className="text-[20px] tracking-tight font-semibold">Spa &amp; Wellness</h2>
<p className="text-sm text-slate-600 mt-1">Rejuvenating massages, sauna, steam, and jacuzzi sessions.</p>
<div className="mt-3 rounded-xl border border-slate-200 overflow-hidden">
<img alt="Spa" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3 bg-white">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-3.5 w-3.5 text-amber-500" data-lucide="sparkles"></i>
              Because you deserve to pause and unwind.
            </div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="clock"></i>
                Book Spa
              </button>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900/90">
<i className="h-3.5 w-3.5" data-lucide="ticket"></i>
                Day Pass
              </button>
</div>
</div>
</div>
</section>

<section className="px-4 mt-8">
<h2 className="text-[20px] tracking-tight font-semibold">Events &amp; Celebrations</h2>
<p className="text-sm text-slate-600 mt-1">Elegant venues, customized décor, and curated menus.</p>
<div className="mt-3 rounded-xl border border-slate-200 overflow-hidden">
<img alt="Events" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3 bg-white">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-3.5 w-3.5 text-rose-500" data-lucide="flower-2"></i>
              Your special day deserves the perfect setting.
            </div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-3.5 w-3.5" data-lucide="phone"></i>
                Talk to Planner
              </button>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900/90">
<i className="h-3.5 w-3.5" data-lucide="calendar-plus"></i>
                Get a Quote
              </button>
</div>
</div>
</div>
</section>

<section className="px-4 mt-8">
<h2 className="text-[20px] tracking-tight font-semibold">Facilities &amp; Amenities</h2>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
<i className="h-4 w-4 text-slate-500" data-lucide="wifi"></i>
<span className="text-sm">High-speed Wi‑Fi</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
<i className="h-4 w-4 text-slate-500" data-lucide="car"></i>
<span className="text-sm">Valet &amp; Parking</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
<i className="h-4 w-4 text-slate-500" data-lucide="dumbbell"></i>
<span className="text-sm">Fitness Center</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
<i className="hidden" data-lucide="swiss-franc"></i>
<i className="h-4 w-4 text-slate-500" data-lucide="concierge-bell"></i>
<span className="text-sm">24/7 Concierge</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
<i className="h-4 w-4 text-slate-500" data-lucide="sparkles"></i>
<span className="text-sm">Spa &amp; Sauna</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
<i className="h-4 w-4 text-slate-500" data-lucide="chef-hat"></i>
<span className="text-sm">In-room Dining</span>
</div>
</div>
</section>

<section className="px-4 mt-8">
<h2 className="text-[20px] tracking-tight font-semibold">Guest Stories</h2>
<div className="mt-3 flex overflow-x-auto gap-3 pb-1">
<div className="min-w-[260px] p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-2">
<img alt="Maya" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Maya</p>
<p className="text-[11px] text-slate-500">Dubai</p>
</div>
</div>
<p className="text-sm text-slate-700 mt-2">“The perfect blend of comfort and class. Every staff member made us feel valued.”</p>
</div>
<div className="min-w-[260px] p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-2">
<img alt="Raj &amp; Anya" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Raj &amp; Anya</p>
<p className="text-[11px] text-slate-500">India</p>
</div>
</div>
<p className="text-sm text-slate-700 mt-2">“Our anniversary dinner was magical! Thank you for making it unforgettable.”</p>
</div>
<div className="min-w-[260px] p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-2">
<img alt="Daniel" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Daniel</p>
<p className="text-[11px] text-slate-500">UK</p>
</div>
</div>
<p className="text-sm text-slate-700 mt-2">“Business-friendly, peaceful, and great food — a rare combination!”</p>
</div>
</div>
</section>

<section className="px-4 mt-8">
<div className="p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
<i className="h-5 w-5" data-lucide="crown"></i>
</div>
<div className="flex-1">
<h3 className="text-[18px] tracking-tight font-semibold">Join Our Loyalty Program</h3>
<ul className="mt-1.5 space-y-1">
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i>Save up to 30% on bookings</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i>Complimentary upgrades (subject to availability)</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-emerald-600" data-lucide="check"></i>Earn points with every stay</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900/90">
<i className="h-4 w-4" data-lucide="user-plus"></i>
                  Sign Up
                </button>
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-4 w-4" data-lucide="info"></i>
                  Learn More
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 mt-8">
<h2 className="text-[20px] tracking-tight font-semibold">Find Us</h2>
<p className="text-sm text-slate-600 mt-1">Located in the heart of [City], minutes from attractions, business hubs, and shopping.</p>
<div className="mt-3 rounded-xl border border-slate-200 overflow-hidden">
<img alt="City map" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3 bg-white space-y-1 text-sm text-slate-700">
<div className="flex items-center gap-2"><i className="h-4 w-4 text-slate-500" data-lucide="navigation"></i>15 minutes from the airport</div>
<div className="flex items-center gap-2"><i className="h-4 w-4 text-slate-500" data-lucide="bus"></i>Complimentary hotel shuttle service</div>
<div className="flex items-center gap-2"><i className="h-4 w-4 text-slate-500" data-lucide="parking-square"></i>Ample parking and valet</div>
<div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between">
<a className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" href="tel:+971000000000">
<i className="h-4 w-4" data-lucide="phone"></i>
                +971 XXX XXX XXX
              </a>
<a className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" href="mailto:reservations@[hotelname].com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email Us
              </a>
</div>
</div>
</div>
</section>

<section className="px-4 mt-8">
<div className="p-4 rounded-xl border border-slate-200 bg-white">
<h3 className="text-[18px] tracking-tight font-semibold">Book Your Stay</h3>
<p className="text-sm text-slate-600 mt-1">Flexible dates, best rates, and instant confirmation.</p>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white text-sm font-medium px-4 py-3 hover:bg-slate-800 active:bg-slate-900/90" data-action="open-booking">
<i className="h-4 w-4" data-lucide="calendar-clock"></i>
            Start Booking
          </button>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur">
<div className="max-w-md mx-auto px-4 py-3 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-slate-200 hover:bg-slate-50 active:bg-slate-100">
<i className="h-4 w-4" data-lucide="phone-call"></i>
            Call
          </button>
<button className="flex-[2] inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90" data-action="open-booking">
<i className="h-4 w-4" data-lucide="calendar-search"></i>
            Check Availability
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="bookingSheet">
<div className="absolute inset-0 bg-slate-900/30" data-action="close-booking"></div>
<div className="absolute inset-x-0 bottom-0 max-w-md mx-auto bg-white rounded-t-2xl shadow-xl border-t border-slate-200">
<div className="px-4 pt-3 pb-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="hotel"></i>
<h3 className="text-[18px] tracking-tight font-semibold">Booking Details</h3>
</div>
<button className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" data-action="close-booking">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-4 pb-28 max-h-[70vh] overflow-y-auto">

<label className="block text-[13px] text-slate-600 mt-2 mb-1">Choose Location</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="locationSelect">
<option>[Hotel Name] Downtown</option>
<option>[Hotel Name] Beachside</option>
<option>[Hotel Name] City View</option>
<option>[Hotel Name] Airport</option>
</select>
<i className="h-4 w-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>

<div className="grid grid-cols-2 gap-2 mt-3">
<div>
<label className="block text-[13px] text-slate-600 mb-1">Check-in Date</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="checkinInput" type="date"/>
</div>
<div>
<label className="block text-[13px] text-slate-600 mb-1">Check-out Date</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="checkoutInput" type="date"/>
</div>
</div>

<div className="grid grid-cols-2 gap-2 mt-3">
<div className="p-3 rounded-lg border border-slate-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Adults</div>
<div className="text-[12px] text-slate-500">Ages 13+</div>
</div>
<div className="inline-flex items-center gap-2">
<button className="h-8 w-8 grid place-items-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" data-counter="adults" data-op="dec">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<span className="w-5 text-center text-sm" id="adultsCount">2</span>
<button className="h-8 w-8 grid place-items-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" data-counter="adults" data-op="inc">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
<div className="p-3 rounded-lg border border-slate-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Children</div>
<div className="text-[12px] text-slate-500">Ages 0–12</div>
</div>
<div className="inline-flex items-center gap-2">
<button className="h-8 w-8 grid place-items-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" data-counter="children" data-op="dec">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<span className="w-5 text-center text-sm" id="childrenCount">0</span>
<button className="h-8 w-8 grid place-items-center rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" data-counter="children" data-op="inc">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mt-3">
<label className="block text-[13px] text-slate-600 mb-1">Room Type</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="roomTypeSelect">
<option>Deluxe Room</option>
<option>Executive Suite</option>
<option>Family Suite</option>
<option>Presidential Suite</option>
</select>
<i className="h-4 w-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="mt-3">
<label className="block text-[13px] text-slate-600 mb-1">Promo Code (Optional)</label>
<div className="flex items-center gap-2">
<input className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="promoInput" placeholder="Enter code" type="text"/>
<button className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 active:bg-slate-100" id="applyPromoBtn">
<i className="h-4 w-4" data-lucide="badge-percent"></i>
                Apply
              </button>
</div>
<div className="mt-1 text-xs text-emerald-600 hidden" id="promoFeedback">Promo applied!</div>
</div>

<div className="mt-3">
<label className="block text-[13px] text-slate-600 mb-1">Special Requests</label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="requestsInput" placeholder='e.g., "Late check-in, crib required, allergy-free room"' rows="3"></textarea>
</div>

<button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white text-sm font-medium px-4 py-3 hover:bg-slate-800 active:bg-slate-900/90" id="checkAvailabilityBtn">
<i className="h-4 w-4" data-lucide="search-check"></i>
            Check Availability
          </button>

<div className="mt-4 hidden" id="resultsSection">
<div className="flex items-center justify-between">
<h4 className="text-[16px] tracking-tight font-semibold">Matching Rooms</h4>
<span className="text-xs text-slate-500" id="nightsLabel">—</span>
</div>

<div className="mt-2 space-y-3">

<div className="p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-start gap-3">
<img alt="Deluxe Room" className="h-20 w-24 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium">Deluxe Room</p>
<span className="text-sm font-medium text-slate-900"><span data-rate="Deluxe">180</span> USD/night</span>
</div>
<p className="text-xs text-slate-600 mt-0.5">King bed • 28 m² • City view</p>
<div className="mt-2 grid grid-cols-2 gap-2">

<label className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 cursor-pointer select-none" data-addon="">
<input className="peer hidden" data-addon-name="Breakfast" data-addon-price="18" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 grid place-items-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-700">Breakfast +$18</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 cursor-pointer select-none" data-addon="">
<input className="peer hidden" data-addon-name="Airport Transfer" data-addon-price="35" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 grid place-items-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-700">Transfer +$35</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="text-xs text-slate-600">Total: <span className="font-medium text-slate-900" data-total="Deluxe">$—</span></div>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800" data-select-room="Deluxe">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i>
                        Select
                      </button>
</div>
</div>
</div>
</div>

<div className="p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-start gap-3">
<img alt="Executive Suite" className="h-20 w-24 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium">Executive Suite</p>
<span className="text-sm font-medium text-slate-900"><span data-rate="Executive">260</span> USD/night</span>
</div>
<p className="text-xs text-slate-600 mt-0.5">Separate living • 40 m² • Lounge access</p>
<div className="mt-2 grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 cursor-pointer select-none" data-addon="">
<input className="peer hidden" data-addon-name="Breakfast" data-addon-price="18" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 grid place-items-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-700">Breakfast +$18</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 cursor-pointer select-none" data-addon="">
<input className="peer hidden" data-addon-name="Late Checkout" data-addon-price="25" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 grid place-items-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-700">Late checkout +$25</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="text-xs text-slate-600">Total: <span className="font-medium text-slate-900" data-total="Executive">$—</span></div>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800" data-select-room="Executive">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i>
                        Select
                      </button>
</div>
</div>
</div>
</div>

<div className="p-3 rounded-xl border border-slate-200 bg-white">
<div className="flex items-start gap-3">
<img alt="Family Suite" className="h-20 w-24 rounded-lg object-cover border border-slate-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium">Family Suite</p>
<span className="text-sm font-medium text-slate-900"><span data-rate="Family">320</span> USD/night</span>
</div>
<p className="text-xs text-slate-600 mt-0.5">Two bedrooms • 55 m² • Kid-friendly</p>
<div className="mt-2 grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 cursor-pointer select-none" data-addon="">
<input className="peer hidden" data-addon-name="Breakfast" data-addon-price="28" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 grid place-items-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-700">Breakfast +$28</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 cursor-pointer select-none" data-addon="">
<input className="peer hidden" data-addon-name="Airport Transfer" data-addon-price="45" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 grid place-items-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-700">Transfer +$45</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="text-xs text-slate-600">Total: <span className="font-medium text-slate-900" data-total="Family">$—</span></div>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800" data-select-room="Family">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i>
                        Select
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-3 text-[12px] text-slate-500">
              Rates before taxes and fees. Complimentary upgrades subject to availability.
            </div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 border-t border-slate-200 bg-white">
<div className="max-w-md mx-auto px-4 py-3 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-slate-200 hover:bg-slate-50 active:bg-slate-100" data-action="close-booking">
              Cancel
            </button>
<button className="flex-[2] inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 active:bg-slate-900/90" id="proceedBtn">
<i className="h-4 w-4" data-lucide="calendar-check-2"></i>
              Reserve
            </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm shadow">
        Added to booking. Proceed to reserve.
      </div>
</div>


    </>
  );
}
