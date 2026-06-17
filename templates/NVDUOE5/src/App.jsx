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
      
      // Icons
      lucide.createIcons();

      // Helpers
      const formatGBP = (n) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n);

      // Elements
      const itemsList = document.getElementById('itemsList');
      const toggleItems = document.getElementById('toggleItems');
      const couponToggle = document.getElementById('couponToggle');
      const couponRow = document.getElementById('couponRow');
      const couponMsg = document.getElementById('couponMsg');
      const couponInput = document.getElementById('couponInput');
      const applyCoupon = document.getElementById('applyCoupon');
      const subtotalEl = document.getElementById('subtotal');
      const shippingCostEl = document.getElementById('shippingCost');
      const vatEl = document.getElementById('vat');
      const discountEl = document.getElementById('discount');
      const totalEl = document.getElementById('total');
      const couponRowSummary = document.getElementById('couponRowSummary');
      const createAccount = document.getElementById('createAccount');
      const accountFields = document.getElementById('accountFields');
      const placeOrder = document.getElementById('placeOrder');

      // New: collapsible sections
      document.querySelectorAll('[data-collapse]').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = document.querySelector(btn.getAttribute('data-collapse'));
          const hidden = target.classList.toggle('hidden');
          btn.innerHTML = hidden
            ? '<i data-lucide="chevron-down" class="h-4 w-4"></i>'
            : '<i data-lucide="chevron-up" class="h-4 w-4"></i>';
          lucide.createIcons();
        });
      });

      // Initial values (demo)
      let subtotal = 387.27;
      let shipping = 0.00;
      let vat = 77.45;
      let discount = 0.00;

      const recalc = () => {
        const total = subtotal + shipping + vat - discount;
        subtotalEl.textContent = formatGBP(subtotal);
        shippingCostEl.textContent = formatGBP(shipping);
        vatEl.textContent = formatGBP(vat);
        discountEl.textContent = '-' + formatGBP(discount).replace('-', '');
        totalEl.textContent = formatGBP(total);
      };
      recalc();

      // Toggle items
      toggleItems.addEventListener('click', () => {
        const isHidden = itemsList.classList.toggle('hidden');
        toggleItems.innerHTML = isHidden
          ? '<i data-lucide="chevron-down" class="h-4 w-4"></i> <span>Expand</span>'
          : '<i data-lucide="chevron-up" class="h-4 w-4"></i> <span>Collapse</span>';
        lucide.createIcons();
      });

      // Coupon toggle
      couponToggle.addEventListener('click', () => {
        couponRow.classList.toggle('hidden');
      });

      // Apply coupon (demo logic)
      applyCoupon.addEventListener('click', () => {
        const code = (couponInput.value || '').trim().toUpperCase();
        if (!code) {
          couponMsg.textContent = 'Enter a code to apply.';
          couponMsg.className = 'mt-2 text-xs text-neutral-500';
          return;
        }
        if (code === 'FR10') {
          discount = Math.min(10, subtotal * 0.1);
          couponMsg.textContent = 'FR10 applied: £10.00 off.';
          couponMsg.className = 'mt-2 text-xs text-[#25b432]';
          couponRowSummary.classList.remove('hidden');
          recalc();
        } else if (code === 'FREESHIP') {
          shipping = 0.00;
          couponMsg.textContent = 'Free shipping applied.';
          couponMsg.className = 'mt-2 text-xs text-[#25b432]';
          recalc();
        } else {
          discount = 0.00;
          couponMsg.textContent = 'Invalid or expired code.';
          couponMsg.className = 'mt-2 text-xs text-red-600';
          couponRowSummary.classList.add('hidden');
          recalc();
        }
      });

      // Shipping radios
      document.querySelectorAll('input[name="ship"]').forEach(r => {
        r.addEventListener('change', (e) => {
          shipping = e.target.value === 'express' ? 9.99 : 0.00;
          recalc();
        });
      });

      // Create account toggle
      createAccount.addEventListener('change', (e) => {
        accountFields.classList.toggle('hidden', !e.target.checked);
      });

      // Terms must be accepted to place order
      const terms = document.getElementById('terms');
      const enforceTerms = () => { placeOrder.disabled = !terms.checked; };
      enforceTerms();
      terms.addEventListener('change', enforceTerms);

      // Payment method toggle (Card / PayPal in 3 / Bank Transfer)
      const paymentRadios = document.querySelectorAll('input[name="payment"]');
      const cardFields = document.getElementById('cardFields');
      const bankFields = document.getElementById('bankFields');
      const paypal3Fields = document.getElementById('paypal3Fields');

      const updatePaymentUI = () => {
        const selected = document.querySelector('input[name="payment"]:checked')?.value || 'card';
        cardFields.classList.toggle('hidden', selected !== 'card');
        bankFields.classList.toggle('hidden', selected !== 'bank');
        paypal3Fields.classList.toggle('hidden', selected !== 'paypal3');
      };
      paymentRadios.forEach(r => r.addEventListener('change', updatePaymentUI));
      updatePaymentUI();
    
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
      

<div className="w-full border-b border-neutral-200 bg-white">
<div className="mx-auto max-w-6xl px-4">
<div className="flex items-center justify-between py-2 text-sm">
<div className="flex items-center gap-2 text-neutral-600">
<svg className="lucide lucide-lock h-4 w-4 text-[#25b432]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="leading-none">Secure checkout</span>
</div>
<a className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-800" href="/cart">
<svg className="lucide lucide-shopping-cart h-4 w-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="leading-none">Back to cart</span>
</a>
</div>
</div>
</div>

<div className="mx-auto max-w-6xl px-4 pt-4">
<div className="rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-[#25b432]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<p className="leading-relaxed">
            “MultiTech Conduit AP 300 LoRaWAN Access Point” was added to your basket. You can review or edit items in the order summary.
          </p>
</div>
</div>
</div>

<div className="mx-auto max-w-6xl px-4 pt-3">
<div className="rounded-md border border-neutral-200 bg-white px-4 py-3">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-start gap-3">
<svg className="lucide lucide-badge-percent mt-0.5 h-5 w-5 text-neutral-900" data-lucide="badge-percent" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.5 8 15l-4 2.5V6l4 2.5L12 6l4 2.5L20 6v11.5L16 15l-4 2.5Z"></path><path d="M15 10h.01"></path><path d="M10 15h.01"></path><path d="m14 8-4 8"></path></svg>
<div>
<p className="text-sm text-neutral-900">Save with a Trade Account — exclusive discounts and special pricing for businesses.</p>
<p className="text-xs text-neutral-500 mt-0.5">Simple application. Fast approval.</p>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center justify-center rounded-md bg-[#25b432] px-3 py-2 text-sm text-white hover:brightness-95 transition" href="/account/trade-apply">
              Apply now
            </a>
<a className="text-sm text-neutral-700 hover:text-neutral-900" href="/account/trade">Learn more</a>
</div>
</div>
</div>
</div>

<main className="mx-auto max-w-6xl px-4 py-8">
<h1 className="text-3xl tracking-tight font-semibold text-neutral-900 mb-6">Checkout</h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<section className="lg:col-span-7">

<div className="mb-4 flex items-center justify-between text-sm">
<p className="text-neutral-600">Already have an account?</p>
<a className="text-neutral-900 hover:opacity-80 underline underline-offset-4" href="/account/login">Sign in</a>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5 mb-6">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold">Contact</h2>
<button aria-label="Toggle contact section" className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900" data-collapse="#contactBody" type="button">
<i className="h-4 w-4" data-lucide="chevron-up"></i>
</button>
</div>
<div className="mt-4" id="contactBody">
<div className="grid grid-cols-1 gap-4">
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Email address</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none ring-0 transition focus:border-[#25b432]" placeholder="you@company.com" type="email"/>
</label>
<label className="flex items-center gap-3 select-none">
<span className="relative inline-flex">
<input className="peer h-5 w-5 shrink-0 appearance-none rounded-md border border-neutral-300 bg-white transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432] checked:bg-[#25b432]" type="checkbox"/>
<svg className="pointer-events-none absolute inset-0 m-auto h-4 w-4 text-white opacity-0 transition peer-checked:opacity-100" viewbox="0 0 24 24">
<path d="M20.285 6.709a1 1 0 0 1 0 1.414l-9.193 9.193a1 1 0 0 1-1.414 0L3.715 10.55a1 1 0 1 1 1.414-1.414l5.257 5.257 8.486-8.486a1 1 0 0 1 1.414 0z" fill="currentColor"></path>
</svg>
</span>
<span className="text-sm text-neutral-700">Keep me updated on automation and IoT from Forest Rock.</span>
</label>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5 mb-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Billing address</h2>
<button aria-label="Toggle billing address section" className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900" data-collapse="#billingBody" type="button">
<i className="h-4 w-4" data-lucide="chevron-up"></i>
</button>
</div>
<div className="mt-4" id="billingBody">
<div className="grid grid-cols-1 gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Full name</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="Alex Doe" type="text"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Company (optional)</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="Company name" type="text"/>
</label>
</div>
<label className="block relative">
<span className="mb-1 block text-sm text-neutral-700">Country/Region</span>
<select className="w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 py-2 pr-10 text-[15px] outline-none transition focus:border-[#25b432]" id="countrySelect">
<option>United Kingdom (UK)</option>
<option>United States</option>
<option>Germany</option>
<option>France</option>
<option>Netherlands</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-9 h-4 w-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Street address</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="House number and street name" type="text"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Apartment, suite, unit (optional)</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="Apt, suite, unit" type="text"/>
</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Town/City</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" type="text"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">County (optional)</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" type="text"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Postcode</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" type="text"/>
</label>
</div>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Phone (optional)</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="+44 20 1234 5678" type="tel"/>
</label>
<div className="pt-2">
<label className="flex items-start gap-3 select-none">
<span className="relative inline-flex pt-0.5">
<input className="peer h-5 w-5 shrink-0 appearance-none transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432] checked:bg-[#25b432] bg-white border-neutral-300 border rounded-md" id="diffAddr" type="checkbox"/>
<svg className="pointer-events-none absolute inset-0 m-auto h-4 w-4 text-white opacity-0 transition peer-checked:opacity-100" viewbox="0 0 24 24">
<path d="M20.285 6.709a1 1 0 0 1 0 1.414l-9.193 9.193a1 1 0 0 1-1.414 0L3.715 10.55a1 1 0 1 1 1.414-1.414l5.257 5.257 8.486-8.486a1 1 0 0 1 1.414 0z" fill="currentColor"></path>
</svg>
</span>
<span className="text-sm text-neutral-700">Deliver to a different address</span>
</label>
</div>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Order notes (optional)</span>
<textarea className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="Notes about your order, e.g., delivery instructions." rows="4"></textarea>
</label>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5 mb-6">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold">Create an account</h2>
<label className="inline-flex cursor-pointer items-center gap-3">
<span className="text-sm text-neutral-700">No</span>
<span className="relative inline-flex h-6 w-10 items-center rounded-full bg-neutral-200 transition peer-checked:bg-[#25b432]">
<input className="peer absolute h-6 w-10 cursor-pointer appearance-none rounded-full" id="createAccount" type="checkbox"/>
<span className="absolute left-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"></span>
</span>
<span className="text-sm text-neutral-700">Yes</span>
</label>
</div>
<div className="mt-4 hidden" id="accountFields">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Password</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="Create a password" type="password"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Confirm password</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="Re-enter password" type="password"/>
</label>
</div>
<p className="mt-3 text-sm text-neutral-600">You’ll be able to track orders and save details for next time.</p>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<h2 className="text-lg tracking-tight font-semibold mb-4">Payment</h2>
<div className="space-y-4">

<label className="flex items-center gap-3 select-none">
<span className="relative inline-flex">
<input checked="" className="peer h-5 w-5 shrink-0 appearance-none rounded-full border border-neutral-300 bg-white transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432]" name="payment" type="radio" value="card"/>
<span className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-[#25b432] opacity-0 transition peer-checked:opacity-100"></span>
</span>
<span className="text-[15px]">Credit / Debit Card</span>
</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="cardFields">
<label className="block sm:col-span-3">
<span className="mb-1 block text-sm text-neutral-700">Card number</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" inputmode="numeric" placeholder="1234 1234 1234 1234"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Expiry</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="MM / YY"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">CVC</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" inputmode="numeric" placeholder="CVC"/>
</label>
<label className="block">
<span className="mb-1 block text-sm text-neutral-700">Name on card</span>
<input className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" placeholder="As shown on card"/>
</label>
</div>

<label className="flex items-center gap-3 select-none">
<span className="relative inline-flex">
<input className="peer h-5 w-5 shrink-0 appearance-none rounded-full border border-neutral-300 bg-white transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432]" name="payment" type="radio" value="paypal3"/>
<span className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-[#25b432] opacity-0 transition peer-checked:opacity-100"></span>
</span>
<span className="text-[15px]">PayPal — Pay in 3 interest‑free payments</span>
</label>
<div className="hidden" id="paypal3Fields">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-700">
<div className="flex items-start gap-3">
<svg className="lucide lucide-split-square-horizontal h-4 w-4 text-neutral-900 mt-0.5" data-lucide="split-square-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M15 3v18"></path></svg>
<div>
<p>Split your purchase into 3 payments with no interest. You will be redirected to PayPal to set up Pay in 3. Eligibility and terms apply.</p>
<p className="mt-1 text-xs text-neutral-500">No fees when paid on time. Subject to status and approval.</p>
</div>
</div>
</div>
</div>

<label className="flex items-center gap-3 select-none">
<span className="relative inline-flex">
<input className="peer h-5 w-5 shrink-0 appearance-none rounded-full border border-neutral-300 bg-white transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432]" name="payment" type="radio" value="bank"/>
<span className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-[#25b432] opacity-0 transition peer-checked:opacity-100"></span>
</span>
<span className="text-[15px]">Direct Bank Transfer</span>
</label>
<div className="hidden" id="bankFields">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-700">
<div className="flex items-start gap-3">
<svg className="lucide lucide-banknote h-4 w-4 text-neutral-900 mt-0.5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<div className="flex-1">
<p>Transfer the total to our bank account. Use your order number as the payment reference. We’ll process your order after the funds clear.</p>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-neutral-600">
<p><span className="text-neutral-900">Account name:</span> Forest Rock Ltd</p>
<p><span className="text-neutral-900">Sort code:</span> 12-34-56</p>
<p><span className="text-neutral-900">Account no.:</span> 12345678</p>
<p><span className="text-neutral-900">IBAN:</span> GB00 BARC 1234 5678 90</p>
<p><span className="text-neutral-900">SWIFT/BIC:</span> BARCGB22</p>
</div>
</div>
</div>
</div>
</div>

<label className="flex items-start gap-3 pt-2">
<span className="relative inline-flex pt-0.5">
<input className="peer h-5 w-5 shrink-0 appearance-none rounded-md border border-neutral-300 bg-white transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432] checked:bg-[#25b432]" id="terms" type="checkbox"/>
<svg className="pointer-events-none absolute inset-0 m-auto h-4 w-4 text-white opacity-0 transition peer-checked:opacity-100" viewbox="0 0 24 24">
<path d="M20.285 6.709a1 1 0 0 1 0 1.414l-9.193 9.193a1 1 0 0 1-1.414 0L3.715 10.55a1 1 0 1 1 1.414-1.414l5.257 5.257 8.486-8.486a1 1 0 0 1 1.414 0z" fill="currentColor"></path>
</svg>
</span>
<span className="text-sm text-neutral-700">I agree to the website terms and conditions.</span>
</label>
</div>
</div>
</section>

<aside className="lg:col-span-5 lg:sticky lg:top-8">

<div className="bg-white border-neutral-200 border rounded-xl mb-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg tracking-tight font-semibold">Pay instantly</h2>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-zap h-4 w-4 text-[#25b432]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="">Fast &amp; secure</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-black px-4 py-2.5 text-white hover:opacity-90 transition">
<span className="text-[15px]"> Pay</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-900 px-4 py-2.5 text-white hover:opacity-90 transition">
<span className="text-[15px]">G Pay</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-[#25b432] px-4 py-2.5 text-white hover:brightness-95 transition">
<svg className="lucide lucide-link-2 h-4 w-4" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span className="text-[15px]">Pay with Link</span>
</button>
</div>
<div className="mt-3 text-center text-xs text-neutral-500">Or continue below with card, PayPal Pay in 3, or bank transfer</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold">Your order</h2>
<button className="text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1" id="toggleItems">
<svg className="lucide lucide-chevron-up h-4 w-4" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                Collapse
              </button>
</div>

<div className="mt-4 space-y-4" id="itemsList">
<div className="flex items-start gap-3">
<div className="h-14 w-14 overflow-hidden rounded-md bg-neutral-100">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<p className="text-[15px] text-neutral-900">Thermokon SR04 PT rH Room Operating Unit with Temperature &amp; Humidity Sensor</p>
<p className="text-sm text-neutral-500 mt-1">Qty 1</p>
</div>
<div className="text-[15px] font-medium text-neutral-900">£143.27</div>
</div>
<div className="flex items-start gap-3">
<div className="h-14 w-14 overflow-hidden rounded-md bg-neutral-100">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<p className="text-[15px] text-neutral-900">MultiTech Conduit AP 300 LoRaWAN Access Point</p>
<p className="text-sm text-neutral-500 mt-1">Qty 1</p>
</div>
<div className="text-[15px] font-medium text-neutral-900">£244.00</div>
</div>
</div>

<div className="mt-5 border-t border-neutral-200 pt-4">
<button className="flex w-full items-center justify-between text-sm text-neutral-700 hover:text-neutral-900" id="couponToggle">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-ticket h-4 w-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                  Have a coupon?
                </span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-3 hidden" id="couponRow">
<div className="flex items-center gap-2">
<input className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[15px] outline-none transition focus:border-[#25b432]" id="couponInput" placeholder="Enter code"/>
<button className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white hover:opacity-90 transition" id="applyCoupon">Apply</button>
</div>
<p className="mt-2 text-xs text-neutral-500" id="couponMsg"></p>
</div>
</div>

<div className="mt-5 border-t border-neutral-200 pt-4 space-y-3">
<h3 className="text-sm font-medium text-neutral-900">Shipping</h3>
<label className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 px-3 py-2">
<div className="flex items-center gap-3">
<span className="relative inline-flex">
<input checked="" className="peer h-5 w-5 shrink-0 appearance-none rounded-full border border-neutral-300 transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432]" name="ship" type="radio" value="standard"/>
<span className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-[#25b432] opacity-0 transition peer-checked:opacity-100"></span>
</span>
<div className="text-sm">
<p className="text-neutral-900">Standard (2–4 days)</p>
<p className="text-neutral-500">Tracked delivery</p>
</div>
</div>
<div className="text-sm font-medium text-neutral-900">FREE</div>
</label>
<label className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 px-3 py-2">
<div className="flex items-center gap-3">
<span className="relative inline-flex">
<input className="peer h-5 w-5 shrink-0 appearance-none transition focus:ring-2 focus:ring-[#25b432]/30 checked:border-[#25b432] border-neutral-300 border rounded-full" name="ship" type="radio" value="express"/>
<span className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-[#25b432] opacity-0 transition peer-checked:opacity-100"></span>
</span>
<div className="text-sm">
<p className="text-neutral-900">DPD (Next day)</p>
<p className="text-neutral-500">Order by 2pm</p>
</div>
</div>
<div className="text-sm font-medium text-neutral-900">£9.99</div>
</label>
</div>

<div className="mt-5 border-t border-neutral-200 pt-4 space-y-2 text-sm">
<div className="flex items-center justify-between">
<span className="text-neutral-600">Subtotal</span>
<span className="text-neutral-900" id="subtotal">£387.27</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-600">Shipping</span>
<span className="text-neutral-900" id="shippingCost">£0.00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-600">VAT</span>
<span className="text-neutral-900" id="vat">£77.45</span>
</div>
<div className="hidden items-center justify-between" id="couponRowSummary">
<span className="text-neutral-600">Discount</span>
<span className="text-[#25b432]" id="discount">-£0.00</span>
</div>
<div className="flex items-center justify-between border-t border-neutral-200 pt-3">
<span className="text-[15px] font-medium text-neutral-900">Total</span>
<span className="text-[18px] tracking-tight font-semibold text-neutral-900" id="total">£464.72</span>
</div>
</div>

<div className="mt-5">
<button className="w-full rounded-lg bg-[#FF7A00] px-5 py-3 text-[15px] font-medium text-white shadow-sm transition hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed" disabled="" id="placeOrder">
                Place order
              </button>
<div className="mt-3 flex items-center justify-center gap-3 text-xs text-neutral-500">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Payments are encrypted. 3D Secure supported.</span>
</div>
</div>
</div>
</aside>
</div>
</main>
<footer className="mx-auto max-w-6xl px-4 pb-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trees h-4 w-4 text-[#25b432]" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
<span>Forest Rock</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-700" href="#">Privacy</a>
<a className="hover:text-neutral-700" href="#">Terms</a>
<a className="hover:text-neutral-700" href="#">Support</a>
</div>
</div>
</footer>





    </>
  );
}
