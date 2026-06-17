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



      // Initialize icons with stroke width 1.5
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Simple state
      const state = {
        guests: 2,
        rooms: 1,
        nights: 1,
        selections: { r1: 0, r2: 0, r3: 0 },
        prices: {},
        coupon: null
      };

      // Elements
      const guestCountEl = document.getElementById('guestCount');
      const roomCountEl = document.getElementById('roomCount');
      const summaryBar = document.getElementById('summaryBar');
      const summaryCount = document.getElementById('summaryCount');
      const summaryNights = document.getElementById('summaryNights');
      const summaryTotal = document.getElementById('summaryTotal');
      const whereLabel = document.getElementById('whereLabel');
      const destinationInput = document.getElementById('destinationInput');
      const checkinInput = document.getElementById('checkinInput');
      const checkoutInput = document.getElementById('checkoutInput');
      const toastEl = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');

      // Checkout elements
      const checkoutSheet = document.getElementById('checkoutSheet');
      const checkoutClose = document.getElementById('checkoutClose');
      const coRooms = document.getElementById('coRooms');
      const coNights = document.getElementById('coNights');
      const coItems = document.getElementById('co-items');
      const coSubtotal = document.getElementById('coSubtotal');
      const coServiceTax = document.getElementById('coServiceTax');
      const coMunicipalityTax = document.getElementById('coMunicipalityTax');
      const coTourismFee = document.getElementById('coTourismFee');
      const coVAT = document.getElementById('coVAT');
      const coDiscountRow = document.getElementById('coDiscountRow');
      const coDiscount = document.getElementById('coDiscount');
      const coGrandTotal = document.getElementById('coGrandTotal');
      const coGrandTotalFooter = document.getElementById('coGrandTotalFooter');
      const coDueToday = document.getElementById('coDueToday');
      const confirmBtn = document.getElementById('confirmBtn');

      const couponInput = document.getElementById('couponInput');
      const applyCouponBtn = document.getElementById('applyCouponBtn');
      const removeCouponBtn = document.getElementById('removeCouponBtn');
      const appliedCouponPill = document.getElementById('appliedCouponPill');
      const appliedCouponText = document.getElementById('appliedCouponText');

      // Set default dates (today + 1)
      const todayISO = new Date().toISOString().slice(0, 10);
      const tomorrowISO = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
      checkinInput.value = todayISO;
      checkoutInput.value = tomorrowISO;

      // Collect prices
      const roomTitles = [];
      document.querySelectorAll('.room-price').forEach((el, idx) => {
        const card = el.closest('article');
        const id = 'r' + (idx + 1);
        state.prices[id] = Number(el.getAttribute('data-price') || el.textContent.trim());
        // Title
        const titleEl = card.querySelector('h2');
        roomTitles[idx] = titleEl ? titleEl.textContent.trim() : 'Room';
      });

      const ID_TO_NAME = { r1: roomTitles[0] || 'Room 1', r2: roomTitles[1] || 'Room 2', r3: roomTitles[2] || 'Room 3' };

      // Helpers
      function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

      function diffNights(a, b) {
        const da = new Date(a), db = new Date(b);
        const ms = db - da;
        return Math.max(1, Math.ceil(ms / 86400000));
      }

      function formatMoney(n) {
        try { return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(Math.round(n)); }
        catch { return String(Math.round(n)); }
      }

      // Taxes and fees
      const TAX = {
        service: 0.05,           // 5%
        municipality: 0.03,      // 3%
        vat: 0.05,               // 5%
        tourismFeePerRoomNight: 5 // $5 per room per night
      };

      // Coupons
      const COUPONS = {
        'SAVE10': { code: 'SAVE10', label: 'SAVE10 — 10% off', type: 'percent', value: 0.10 },
        'WELCOME15': { code: 'WELCOME15', label: 'WELCOME15 — 15% off (max $40)', type: 'percentCap', value: 0.15, cap: 40 },
        'MEMBER20': { code: 'MEMBER20', label: 'MEMBER20 — 20% off > $300', type: 'conditionalPercent', value: 0.20, minSubtotal: 300 }
      };

      function calcDiscount(code, subtotal) {
        const c = COUPONS[code];
        if (!c) return 0;
        if (c.type === 'percent') return subtotal * c.value;
        if (c.type === 'percentCap') return Math.min(subtotal * c.value, c.cap);
        if (c.type === 'conditionalPercent') return subtotal >= (c.minSubtotal || 0) ? subtotal * c.value : 0;
        return 0;
      }

      // Compute and update sticky summary
      function computeTotal() {
        const nights = state.nights;
        let roomsSelected = 0;
        let total = 0;
        Object.entries(state.selections).forEach(([id, qty]) => {
          roomsSelected += qty;
          total += qty * (state.prices[id] || 0) * nights;
        });
        summaryCount.textContent = roomsSelected;
        summaryNights.textContent = nights;
        summaryTotal.textContent = formatMoney(total);
        summaryBar.classList.toggle('hidden', total <= 0);
        // Keep checkout view in sync
        refreshCheckoutSummary();
      }

      function showToast(message) {
        toastMsg.textContent = message || 'Updated';
        toastEl.classList.remove('opacity-0');
        toastEl.classList.add('opacity-100');
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => {
          toastEl.classList.remove('opacity-100');
          toastEl.classList.add('opacity-0');
        }, 1600);
      }

      function updateWhereLabel() {
        const v = destinationInput.value.trim();
        whereLabel.textContent = v || 'Anywhere';
      }

      // Init counts
      guestCountEl.textContent = state.guests;
      roomCountEl.textContent = state.rooms;

      // Update nights on date change
      function refreshNights() {
        const inV = checkinInput.value;
        const outV = checkoutInput.value;
        if (!inV || !outV) return;
        // Ensure checkout is after checkin
        if (new Date(outV) <= new Date(inV)) {
          const next = new Date(inV);
          next.setDate(next.getDate() + 1);
          const nextISO = next.toISOString().slice(0, 10);
          checkoutInput.value = nextISO;
        }
        state.nights = diffNights(checkinInput.value, checkoutInput.value);
        computeTotal();
      }

      // Listeners: guests/rooms
      document.getElementById('guestMinus').addEventListener('click', () => {
        state.guests = clamp(state.guests - 1, 1, 10);
        guestCountEl.textContent = state.guests;
      });
      document.getElementById('guestPlus').addEventListener('click', () => {
        state.guests = clamp(state.guests + 1, 1, 10);
        guestCountEl.textContent = state.guests;
      });
      document.getElementById('roomMinus').addEventListener('click', () => {
        state.rooms = clamp(state.rooms - 1, 1, 5);
        roomCountEl.textContent = state.rooms;
      });
      document.getElementById('roomPlus').addEventListener('click', () => {
        state.rooms = clamp(state.rooms + 1, 1, 5);
        roomCountEl.textContent = state.rooms;
      });

      // Date listeners
      checkinInput.addEventListener('change', refreshNights);
      checkoutInput.addEventListener('change', refreshNights);
      refreshNights();

      // Destination
      destinationInput.addEventListener('input', updateWhereLabel);
      updateWhereLabel();

      // Search Button
      document.getElementById('searchBtn').addEventListener('click', () => {
        showToast('Search updated');
      });

      // Quantity steppers
      function updateQty(id, delta) {
        const key = id;
        const next = clamp((state.selections[key] || 0) + delta, 0, 5);
        state.selections[key] = next;
        const qtyEl = document.getElementById('qty-' + key);
        if (qtyEl) qtyEl.textContent = next;
        computeTotal();
      }
      document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', () => updateQty(btn.getAttribute('data-id'), 1));
      });
      document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', () => updateQty(btn.getAttribute('data-id'), -1));
      });

      // Sort
      document.getElementById('sortSelect').addEventListener('change', (e) => {
        showToast('Sorted: ' + e.target.options[e.target.selectedIndex].text);
      });

      // Checkout open/close
      function openCheckout() {
        // Block if nothing selected
        const any = Object.values(state.selections).reduce((a, b) => a + b, 0);
        if (any <= 0) { showToast('Please select a room'); return; }
        refreshCheckoutSummary();
        checkoutSheet.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
      function closeCheckout() {
        checkoutSheet.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
      document.getElementById('reviewBtn').addEventListener('click', openCheckout);
      checkoutClose.addEventListener('click', closeCheckout);

      // Coupon handling
      function applyCoupon(code) {
        const c = COUPONS[code];
        if (!c) { showToast('Invalid code'); return; }
        state.coupon = code;
        appliedCouponText.textContent = COUPONS[code].label;
        appliedCouponPill.classList.remove('hidden');
        couponInput.value = code;
        refreshCheckoutSummary();
        showToast('Coupon applied');
      }
      function removeCoupon() {
        state.coupon = null;
        appliedCouponPill.classList.add('hidden');
        refreshCheckoutSummary();
        showToast('Coupon removed');
      }
      applyCouponBtn.addEventListener('click', () => {
        const code = (couponInput.value || '').trim().toUpperCase();
        if (!code) return;
        applyCoupon(code);
      });
      removeCouponBtn.addEventListener('click', removeCoupon);
      document.querySelectorAll('.coupon-btn').forEach(btn => {
        btn.addEventListener('click', () => applyCoupon(btn.getAttribute('data-code')));
      });

      // Build checkout summary
      function refreshCheckoutSummary() {
        const nights = state.nights;
        let roomsSelected = 0;
        let roomSubtotal = 0;
        coItems.innerHTML = '';

        Object.entries(state.selections).forEach(([id, qty]) => {
          if (!qty) return;
          roomsSelected += qty;
          const price = state.prices[id] || 0;
          const name = ID_TO_NAME[id] || 'Room';
          const line = price * qty * nights;
          roomSubtotal += line;

          const row = document.createElement('div');
          row.className = 'flex items-center justify-between';
          row.innerHTML = `
            <div class="min-w-0">
              <div class="text-[14px] text-neutral-900" style="font-weight:600; letter-spacing:-0.02em;">${name}</div>
              <div class="text-[12px] text-neutral-500">${qty} × $${formatMoney(price)} · ${nights} night(s)</div>
            </div>
            <div class="text-[14px] text-neutral-900" style="font-weight:600; letter-spacing:-0.02em;">$${formatMoney(line)}</div>
          `;
          coItems.appendChild(row);
        });

        coRooms.textContent = roomsSelected;
        coNights.textContent = nights;

        const service = roomSubtotal * TAX.service;
        const municipality = roomSubtotal * TAX.municipality;
        const tourism = roomsSelected * nights * TAX.tourismFeePerRoomNight;
        const vatBase = roomSubtotal + service + municipality + tourism;
        const vat = vatBase * TAX.vat;

        const discount = state.coupon ? calcDiscount(state.coupon, roomSubtotal) : 0;
        const grand = Math.max(0, vatBase + vat - discount);

        coSubtotal.textContent = formatMoney(roomSubtotal);
        coServiceTax.textContent = formatMoney(service);
        coMunicipalityTax.textContent = formatMoney(municipality);
        coTourismFee.textContent = formatMoney(tourism);
        coVAT.textContent = formatMoney(vat);

        coDiscountRow.classList.toggle('hidden', discount <= 0);
        coDiscount.textContent = formatMoney(discount);

        coGrandTotal.textContent = formatMoney(grand);
        coGrandTotalFooter.textContent = formatMoney(grand);
        coDueToday.textContent = '0';
      }

      // Confirm reservation
      confirmBtn.addEventListener('click', () => {
        const name = (document.getElementById('cardName').value || '').trim();
        const number = (document.getElementById('cardNumber').value || '').replace(/\s+/g, '');
        const expiry = (document.getElementById('cardExpiry').value || '').trim();

        if (!name || number.length < 12 || !/^\d{2}\/\d{2}$/.test(expiry)) {
          showToast('Please complete your card details');
          return;
        }
        closeCheckout();
        showToast('Reservation secured');
      });

      // Map button
      document.getElementById('mapBtn').addEventListener('click', () => {
        showToast('Map view coming soon');
      });

      // Initial totals
      refreshNights();
      computeTotal();
    
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
      

<header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center text-[11px] tracking-tight" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>HB</div>
<div className="text-[18px] tracking-tight" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Hotel Book</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Notifications" className="h-9 w-9 grid place-items-center rounded-full hover:bg-neutral-100 outline-none focus-visible:outline-2 focus-visible:outline-black/40 transition">
<i className="w-5 h-5 text-neutral-700" data-lucide="bell"></i>
</button>
<button aria-label="Profile" className="h-9 w-9 grid place-items-center rounded-full hover:bg-neutral-100 outline-none focus-visible:outline-2 focus-visible:outline-black/40 transition">
<i className="w-5 h-5 text-neutral-700" data-lucide="user"></i>
</button>
</div>
</div>
</header>

<main className="mx-auto max-w-md px-4 pb-28 pt-4">

<div className="mb-3">
<h1 className="text-[22px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Find your perfect stay</h1>
<p className="text-[13px] text-neutral-500">Search rooms, compare prices, and book in minutes.</p>
</div>

<section className="relative bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm">

<label className="block mb-3">
<div className="flex items-center gap-2 text-[12px] text-neutral-500 mb-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Destination</span>
</div>
<div className="relative">
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] placeholder-neutral-400 outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="destinationInput" inputmode="text" placeholder="City, hotel, or landmark" type="text"/>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
</div>
</label>

<div className="grid grid-cols-2 gap-3 mb-3">
<label className="block">
<div className="flex items-center gap-2 text-[12px] text-neutral-500 mb-1">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Check-in</span>
</div>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-[9px] text-[14px] outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="checkinInput" type="date"/>
</label>
<label className="block">
<div className="flex items-center gap-2 text-[12px] text-neutral-500 mb-1">
<i className="w-4 h-4" data-lucide="calendar-range"></i>
<span>Check-out</span>
</div>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-[9px] text-[14px] outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="checkoutInput" type="date"/>
</label>
</div>

<div className="flex items-center justify-between gap-3 mb-4">
<div className="flex-1">
<div className="flex items-center gap-2 text-[12px] text-neutral-500 mb-1">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Guests</span>
</div>
<div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
<button aria-label="Decrease guests" className="w-10 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30" id="guestMinus">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<div className="flex-1 text-center text-[14px] py-1.5"><span className="font-medium" id="guestCount">2</span> guests</div>
<button aria-label="Increase guests" className="w-10 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30" id="guestPlus">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[12px] text-neutral-500 mb-1">
<i className="w-4 h-4" data-lucide="key-round"></i>
<span>Rooms</span>
</div>
<div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
<button aria-label="Decrease rooms" className="w-10 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30" id="roomMinus">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<div className="flex-1 text-center text-[14px] py-1.5"><span className="font-medium" id="roomCount">1</span> room</div>
<button aria-label="Increase rooms" className="w-10 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30" id="roomPlus">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="flex-1 h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white text-[14px] font-medium hover:bg-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/40 transition active:scale-[0.99]" id="searchBtn">
<i className="w-4 h-4" data-lucide="search"></i>
            Search
          </button>
<div className="relative flex-1">
<select className="appearance-none w-full h-11 rounded-xl border border-neutral-200 bg-white pl-3 pr-10 text-[14px] text-neutral-900 outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="sortSelect">
<option value="recommend">Recommended</option>
<option value="priceLow">Price: Low to High</option>
<option value="priceHigh">Price: High to Low</option>
<option value="rating">Top Rated</option>
<option value="distance">Closest</option>
</select>
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<div className="mt-3 flex items-center justify-between">
<div className="text-[13px] text-neutral-500">Showing options in <span className="text-neutral-700" id="whereLabel">Anywhere</span></div>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900 px-2 py-1 rounded-md hover:bg-neutral-100 transition outline-none focus-visible:outline-2 focus-visible:outline-black/30" id="mapBtn">
<i className="w-4 h-4" data-lucide="map"></i>
          Map
        </button>
</div>
<div className="mt-2 overflow-x-auto">
<div className="flex gap-2 min-w-max">
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 text-[13px] text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="check-circle-2"></i> Free cancellation
          </button>
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 text-[13px] text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="utensils"></i> Breakfast
          </button>
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 text-[13px] text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="wifi"></i> Wi‑Fi
          </button>
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 text-[13px] text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="dumbbell"></i> Gym
          </button>
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 text-[13px] text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="leaf"></i> Eco
          </button>
</div>
</div>

<div className="mt-4 space-y-4" id="results">

<article className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
<div className="relative">
<img alt="Deluxe King Room" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 flex gap-1">
<span className="px-2 py-1 rounded-full text-[11px] bg-white/90 border border-neutral-200 text-neutral-800">Member deal</span>
<span className="px-2 py-1 rounded-full text-[11px] bg-white/90 border border-neutral-200 text-neutral-800">Breakfast</span>
</div>
<button aria-label="Save" className="absolute top-2 right-2 h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-neutral-200 hover:bg-white transition outline-none focus-visible:outline-2 focus-visible:outline-black/30">
<i className="w-4 h-4 text-neutral-800" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Deluxe King Room</h2>
<div className="mt-1 flex items-center gap-2 text-[13px] text-neutral-600">
<span className="inline-flex items-center gap-1 text-neutral-800">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
                    4.7
                  </span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                    0.6 km to center
                  </span>
</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">per night</div>
<div className="text-[20px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}><span className="align-middle">$</span><span className="align-middle room-price" data-price="168">168</span></div>
</div>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="wifi"></i> Wi‑Fi
              </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="bed"></i> King
              </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="utensils"></i> Breakfast
              </span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
<button aria-label="Decrease quantity" className="w-9 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30 qty-minus" data-id="r1">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<div className="w-12 text-center text-[14px] py-1.5"><span className="font-medium" id="qty-r1">0</span></div>
<button aria-label="Increase quantity" className="w-9 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30 qty-plus" data-id="r1">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<button className="px-3 h-9 inline-flex items-center gap-2 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 transition outline-none focus-visible:outline-2 focus-visible:outline-black/30">
<i className="w-4 h-4" data-lucide="info"></i>
                Details
              </button>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
<div className="relative">
<img alt="Signature Suite" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 flex gap-1">
<span className="px-2 py-1 rounded-full text-[11px] bg-white/90 border border-neutral-200 text-neutral-800">Suite</span>
<span className="px-2 py-1 rounded-full text-[11px] bg-white/90 border border-neutral-200 text-neutral-800">Free cancel</span>
</div>
<button aria-label="Save" className="absolute top-2 right-2 h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-neutral-200 hover:bg-white transition outline-none focus-visible:outline-2 focus-visible:outline-black/30">
<i className="w-4 h-4 text-neutral-800" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Signature Suite</h2>
<div className="mt-1 flex items-center gap-2 text-[13px] text-neutral-600">
<span className="inline-flex items-center gap-1 text-neutral-800">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
                    4.9
                  </span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                    1.1 km to center
                  </span>
</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">per night</div>
<div className="text-[20px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}><span className="align-middle">$</span><span className="align-middle room-price" data-price="242">242</span></div>
</div>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="wifi"></i> Wi‑Fi
              </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="coffee"></i> Lounge
              </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="dumbbell"></i> Gym
              </span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
<button aria-label="Decrease quantity" className="w-9 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30 qty-minus" data-id="r2">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<div className="w-12 text-center text-[14px] py-1.5"><span className="font-medium" id="qty-r2">0</span></div>
<button aria-label="Increase quantity" className="w-9 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30 qty-plus" data-id="r2">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<button className="px-3 h-9 inline-flex items-center gap-2 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 transition outline-none focus-visible:outline-2 focus-visible:outline-black/30">
<i className="w-4 h-4" data-lucide="info"></i>
                Details
              </button>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
<div className="relative">
<img alt="Cozy Twin Room" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 flex gap-1">
<span className="px-2 py-1 rounded-full text-[11px] bg-white/90 border border-neutral-200 text-neutral-800">Great value</span>
</div>
<button aria-label="Save" className="absolute top-2 right-2 h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-neutral-200 hover:bg-white transition outline-none focus-visible:outline-2 focus-visible:outline-black/30">
<i className="w-4 h-4 text-neutral-800" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Cozy Twin Room</h2>
<div className="mt-1 flex items-center gap-2 text-[13px] text-neutral-600">
<span className="inline-flex items-center gap-1 text-neutral-800">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
                    4.5
                  </span>
<span>•</span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                    2.0 km to center
                  </span>
</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-500">per night</div>
<div className="text-[20px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}><span className="align-middle">$</span><span className="align-middle room-price" data-price="119">119</span></div>
</div>
</div>
<div className="mt-3 flex items-center gap-3 text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="wifi"></i> Wi‑Fi
              </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="bed-double"></i> Twin
              </span>
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="concierge-bell"></i> 24/7
              </span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
<button aria-label="Decrease quantity" className="w-9 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30 qty-minus" data-id="r3">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<div className="w-12 text-center text-[14px] py-1.5"><span className="font-medium" id="qty-r3">0</span></div>
<button aria-label="Increase quantity" className="w-9 h-9 grid place-items-center text-neutral-700 hover:bg-neutral-50 active:scale-[0.98] transition outline-none focus-visible:outline-2 focus-visible:outline-black/30 qty-plus" data-id="r3">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<button className="px-3 h-9 inline-flex items-center gap-2 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 transition outline-none focus-visible:outline-2 focus-visible:outline-black/30">
<i className="w-4 h-4" data-lucide="info"></i>
                Details
              </button>
</div>
</div>
</article>
</div>
</main>

<div className="fixed inset-x-0 bottom-0 z-50 hidden" id="summaryBar">
<div className="mx-auto max-w-md px-4 pb-4 pt-2 bg-white/95 backdrop-blur border-t border-neutral-200">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="text-[13px] text-neutral-600 truncate"><span className="text-neutral-900 font-medium" id="summaryCount">0</span> rooms • <span className="text-neutral-900 font-medium" id="summaryNights">1</span> night</div>
<div className="text-[12px] text-neutral-500 truncate" id="summaryMeta">Taxes and fees included</div>
</div>
<div className="flex items-center gap-2">
<div className="text-right">
<div className="text-[11px] text-neutral-500">Total</div>
<div className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>$<span id="summaryTotal">0</span></div>
</div>
<button className="h-11 px-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white text-[14px] font-medium hover:bg-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/40 transition active:scale-[0.99]" id="reviewBtn">
              Continue
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-x-0 bottom-16 z-50 pointer-events-none opacity-0 transition-opacity" id="toast">
<div className="mx-auto max-w-md px-4">
<div className="pointer-events-auto inline-flex items-center gap-2 bg-neutral-900 text-white text-[13px] rounded-full px-3 py-2 shadow-lg">
<i className="w-4 h-4" data-lucide="check"></i>
<span id="toastMsg">Search updated</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="checkoutSheet">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 top-0 bg-white">

<div className="sticky top-0 bg-white/95 backdrop-blur z-10 border-b border-neutral-200">
<div className="mx-auto max-w-md px-4 h-14 flex items-center justify-between">
<button aria-label="Close" className="h-9 w-9 grid place-items-center rounded-full hover:bg-neutral-100 outline-none focus-visible:outline-2 focus-visible:outline-black/40" id="checkoutClose">
<i className="w-5 h-5 text-neutral-700" data-lucide="arrow-left"></i>
</button>
<div className="text-[16px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Payment</div>
<div className="w-9"></div>
</div>
</div>

<div className="mx-auto max-w-md px-4 pt-3 pb-28 overflow-y-auto h-[calc(100vh-56px)]">

<div className="mb-3 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="badge-dollar-sign"></i>
<p className="text-[13px] text-neutral-800">
<span className="font-medium">You won’t be charged today!!</span> Your card is only used to secure the reservation.
              </p>
</div>
</div>

<section className="mb-4 bg-white border border-neutral-200 rounded-2xl shadow-sm">
<div className="p-4 border-b border-neutral-200">
<div className="flex items-center justify-between">
<h2 className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Your stay</h2>
<div className="text-[12px] text-neutral-500"><span id="coRooms">0</span> rooms • <span id="coNights">1</span> night(s)</div>
</div>
<div className="mt-3 space-y-2" id="co-items">

</div>
</div>
<div className="p-4 space-y-2 text-[14px]">
<div className="flex items-center justify-between">
<span className="text-neutral-600">Room subtotal</span>
<span className="text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>$<span id="coSubtotal">0</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-600">Service Tax</span>
<span className="text-neutral-900">$<span id="coServiceTax">0</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-600">Municipality Tax</span>
<span className="text-neutral-900">$<span id="coMunicipalityTax">0</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-600">Tourism Fee</span>
<span className="text-neutral-900">$<span id="coTourismFee">0</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-600">VAT</span>
<span className="text-neutral-900">$<span id="coVAT">0</span></span>
</div>
<div className="hidden flex items-center justify-between text-emerald-700" id="coDiscountRow">
<span>Promo discount</span>
<span>- $<span id="coDiscount">0</span></span>
</div>
<div className="my-1 border-t border-neutral-200"></div>
<div className="flex items-center justify-between">
<span className="text-neutral-700">Total for stay</span>
<span className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>$<span id="coGrandTotal">0</span></span>
</div>
<div className="flex items-center justify-between text-[12px] text-neutral-500">
<span>Due today</span>
<span className="text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>$<span id="coDueToday">0</span></span>
</div>
</div>
</section>

<section className="mb-4 bg-white border border-neutral-200 rounded-2xl shadow-sm">
<div className="p-4 border-b border-neutral-200">
<h3 className="text-[16px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Promo code</h3>
<div className="mt-2 flex items-center gap-2">
<div className="relative flex-1">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="ticket"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2.5 text-[14px] placeholder-neutral-400 outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="couponInput" placeholder="Enter code"/>
</div>
<button className="h-10 px-3 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition" id="applyCouponBtn">
                  Apply
                </button>
</div>
<div className="hidden mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[12px]" id="appliedCouponPill">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
<span id="appliedCouponText">Applied</span>
<button className="ml-1 h-6 w-6 grid place-items-center rounded-full hover:bg-emerald-100" id="removeCouponBtn">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-4">
<div className="text-[12px] text-neutral-500 mb-2">Available coupons</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition coupon-btn" data-code="SAVE10">
                  SAVE10 — 10% off
                </button>
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition coupon-btn" data-code="WELCOME15">
                  WELCOME15 — 15% off (max $40)
                </button>
<button className="px-3 h-9 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[13px] text-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/30 transition coupon-btn" data-code="MEMBER20">
                  MEMBER20 — 20% off &gt; $300
                </button>
</div>
</div>
</section>

<section className="mb-4 bg-white border border-neutral-200 rounded-2xl shadow-sm">
<div className="p-4 border-b border-neutral-200">
<h3 className="text-[16px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Cardholder details</h3>
</div>
<div className="p-4 space-y-3">
<label className="block">
<div className="text-[12px] text-neutral-500 mb-1">Full name</div>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] placeholder-neutral-400 outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="cardName" placeholder="Name on card" type="text"/>
</label>
<label className="block">
<div className="text-[12px] text-neutral-500 mb-1">Card number</div>
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="credit-card"></i>
<input className="w-full rounded-lg border border-neutral-200 bg-white pl-9 pr-3 py-2.5 text-[14px] placeholder-neutral-400 outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="cardNumber" inputmode="numeric" placeholder="1234 5678 9012 3456"/>
</div>
</label>
<label className="block">
<div className="text-[12px] text-neutral-500 mb-1">Expiry</div>
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-[14px] placeholder-neutral-400 outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-300 transition" id="cardExpiry" inputmode="numeric" placeholder="MM/YY"/>
</label>
</div>
</section>

<section className="mb-4 bg-white border border-neutral-200 rounded-2xl shadow-sm">
<div className="p-4">
<div className="flex items-start gap-2">
<i className="w-5 h-5 text-neutral-700" data-lucide="shield-check"></i>
<div>
<h4 className="text-[15px] tracking-tight text-neutral-900 mb-1" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>Cancellation Policy</h4>
<p className="text-[13px] text-neutral-600">
                    Free cancellation up to 48 hours before check‑in. After that, a charge equivalent to the first night will apply. No‑show will incur the full first night’s charge.
                  </p>
</div>
</div>
</div>
</section>
</div>

<div className="fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur border-t border-neutral-200">
<div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="text-[12px] text-neutral-500">Total for stay</div>
<div className="text-[18px] tracking-tight text-neutral-900" style={{fontWeight: '600', letterSpacing: '-0.02em'}}>$<span id="coGrandTotalFooter">0</span></div>
</div>
<button className="h-11 px-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white text-[14px] font-medium hover:bg-neutral-800 outline-none focus-visible:outline-2 focus-visible:outline-black/40 transition active:scale-[0.99]" id="confirmBtn">
              Confirm reservation
              <i className="w-4 h-4" data-lucide="lock"></i>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
