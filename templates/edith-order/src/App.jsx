import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      // Init icons with stroke width 1.5
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // INR pricing (updated)
      const variantPrices = { explorer: 35000, pro: 50000 };
      const addonPrice = 5000;

      // GST rate
      const TAX_RATE = 0.18;

      const promoCodes = {
        SAVE20: { type: 'flat', value: 20, label: 'SAVE20' },
        PRO10: { type: 'percent', value: 10, label: 'PRO10' }
      };
      let appliedPromo = null;

      const variantInput = document.getElementById('variantInput');
      const variantCards = document.querySelectorAll('.variant-card');
      const addonCare = document.getElementById('addonCare');
      const subtotalEl = document.getElementById('subtotal');
      const discountRow = document.getElementById('discountRow');
      const discountEl = document.getElementById('discount');
      const taxEl = document.getElementById('tax');
      const totalEl = document.getElementById('total');
      const summaryPriceEl = document.getElementById('summaryPrice');
      const payButton = document.getElementById('payButton');

      const promoInput = document.getElementById('promoInput');
      const applyPromoBtn = document.getElementById('applyPromo');
      const promoMessage = document.getElementById('promoMessage');

      function formatINR(n) {
        return n.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
      }

      function selectVariant(key) {
        variantInput.value = key;
        variantCards.forEach(btn => {
          const active = btn.dataset.variant === key;
          btn.classList.toggle('ring-2', active);
          btn.classList.toggle('ring-indigo-500/70', active);
          btn.classList.toggle('border-indigo-400/40', active);
          btn.classList.toggle('bg-white/10', active);
        });
        updateTotals();
      }

      function getDiscount(subtotal) {
        if (!appliedPromo) return 0;
        let d = 0;
        if (appliedPromo.type === 'flat') {
          d = appliedPromo.value;
        } else if (appliedPromo.type === 'percent') {
          d = (subtotal * appliedPromo.value) / 100;
        }
        d = Math.max(0, Math.min(d, subtotal));
        return Math.round(d * 100) / 100;
      }

      function updateTotals() {
        const base = variantPrices[variantInput.value] || 0;
        const add = addonCare.checked ? addonPrice : 0;
        const subtotal = base + add;
        const discount = getDiscount(subtotal);
        const taxable = Math.max(0, subtotal - discount);
        const tax = Math.round(taxable * TAX_RATE * 100) / 100;
        const total = Math.max(0, taxable + tax);

        // Round payable total to nearest thousand
        const totalRounded = Math.round(total / 1000) * 1000;

        subtotalEl.textContent = formatINR(subtotal);

        if (discount > 0) {
          discountRow.classList.remove('hidden');
          discountEl.textContent = `-${formatINR(discount)}`;
        } else {
          discountRow.classList.add('hidden');
          discountEl.textContent = '-₹0';
        }

        taxEl.textContent = formatINR(tax);
        totalEl.textContent = formatINR(totalRounded);
        summaryPriceEl.textContent = formatINR(base);
        payButton.firstElementChild.textContent = `Pay ${formatINR(totalRounded)}`;
      }

      // Bind variant selection
      variantCards.forEach(btn => {
        btn.addEventListener('click', () => selectVariant(btn.dataset.variant));
      });

      // Bind addon
      addonCare.addEventListener('change', updateTotals);

      // Promo code handlers
      applyPromoBtn.addEventListener('click', () => {
        const code = (promoInput.value || '').trim().toUpperCase();
        if (!code) {
          appliedPromo = null;
          promoMessage.classList.add('hidden');
          updateTotals();
          return;
        }
        if (promoCodes[code]) {
          appliedPromo = { code, ...promoCodes[code] };
          promoMessage.textContent = `Promo applied: ${appliedPromo.label}`;
          promoMessage.classList.remove('hidden');
          promoMessage.classList.remove('text-red-400');
          promoMessage.classList.add('text-emerald-400');
          updateTotals();
        } else {
          appliedPromo = null;
          promoMessage.textContent = 'Invalid code';
          promoMessage.classList.remove('hidden');
          promoMessage.classList.remove('text-emerald-400');
          promoMessage.classList.add('text-red-400');
          updateTotals();
        }
      });

      promoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyPromoBtn.click();
        }
      });

      // Default selection
      selectVariant('explorer');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex w-64 flex-col bg-[#0B1220] border-r border-white/10">
<div className="p-4 border-b border-white/10">
<div className="flex items-center space-x-3">
<div className="flex text-sm font-semibold text-indigo-300 tracking-tight bg-indigo-500/20 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a473af70-0cc4-445d-bb40-bd130b8729ba_320w.jpg)] bg-cover rounded-md items-center justify-center"></div>
<h1 className="text-[18px] font-light tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>EDITH</h1>
</div>
</div>
<nav className="flex-1 py-4">
<div className="px-4 mb-2 text-[11px] font-medium uppercase text-slate-400/70">Menu</div>
<a className="group flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-layout-grid w-5 h-5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="ml-3 text-sm">Overview</span>
</a>
<a className="group flex items-center px-4 py-3 bg-white/5 text-white transition hover:bg-white/10" href="#">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="ml-3 text-sm">Orders</span>
</a>
<a className="group flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="ml-3 text-sm">Devices</span>
</a>
<a className="group flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="ml-3 text-sm">Analytics</span>
</a>
<a className="group flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="ml-3 text-sm">Account</span>
</a>
<a className="group flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="ml-3 text-sm">Settings</span>
</a>
</nav>
<div className="p-4 border-t border-white/10">
<div className="flex items-center">
<img alt="User" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=128&amp;h=128&amp;fit=crop&amp;crop=faces"/>
<div className="ml-3">
<p className="text-sm font-medium text-white">Ava Patel</p>
<p className="text-xs text-slate-400">Creator Plan</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 overflow-auto">

<header className="sticky top-0 z-10 bg-[#0B1220] border-b border-white/10">
<div className="flex items-center justify-between px-4 sm:px-6 py-4">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition p-2">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<h2 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Order: EDITH Smart Glasses</h2>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500/70 transition">
<svg className="lucide lucide-search w-4 h-4 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent text-sm placeholder-slate-500 focus:outline-none px-2 text-slate-200" placeholder="Search orders" type="text"/>
</div>
<button className="text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5 border border-white/10 transition">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5 border border-white/10 transition">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
</div>
</div>
</header>

<main className="p-4 sm:p-6">
<div className="max-w-6xl mx-auto bg-[#0B1220] border border-white/10 rounded-xl overflow-hidden">
<div className="md:flex">

<section className="md:w-3/5 p-6 sm:p-8">
<div className="mb-6 sm:mb-8">
<h2 className="text-[26px] font-light tracking-tight text-white" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Complete your order</h2>
<p className="text-slate-400 mt-2 text-sm">Secure checkout for your wearable. All transactions are encrypted.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:border-white/20 transition">
<div className="h-8 w-8 rounded-md bg-emerald-500/10 text-emerald-300 flex items-center justify-center">
<svg className="lucide lucide-battery-charging w-4.5 h-4.5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
<div>
<p className="text-sm text-white">All‑day battery</p>
<p className="text-xs text-slate-400">Up to 12 hrs mixed use</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:border-white/20 transition">
<div className="h-8 w-8 rounded-md bg-sky-500/10 text-sky-300 flex items-center justify-center">
<svg className="lucide lucide-cpu w-4.5 h-4.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="">
<p className="text-sm text-white">AR engine</p>
<p className="text-xs text-slate-400">Low‑latency 8‑core</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:border-white/20 transition">
<div className="h-8 w-8 rounded-md bg-fuchsia-500/10 text-fuchsia-300 flex items-center justify-center">
<svg className="lucide lucide-moon-star w-4.5 h-4.5" data-lucide="moon-star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5h4"></path><path d="M20 3v4"></path><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<div>
<p className="text-sm text-white">Comfort optics</p>
<p className="text-xs text-slate-400">Anti‑glare, night‑safe</p>
</div>
</div>
</div>

<div className="space-y-5">
<div className="">
<label className="block text-sm font-medium text-slate-300 mb-1">Card number</label>
<div className="relative">
<input autocomplete="cc-number" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70 transition" id="cardNumber" inputmode="numeric" placeholder="4242 4242 4242 4242" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2 text-slate-400">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<svg className="lucide lucide-contact w-5 h-5" data-lucide="contact" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v2"></path><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><path d="M8 2v2"></path><circle cx="12" cy="11" r="3"></circle><rect height="18" rx="2" width="18" x="3" y="4"></rect></svg>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-slate-300 mb-1">Expiration date</label>
<input autocomplete="cc-exp" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70 transition" id="exp" inputmode="numeric" placeholder="MM / YY" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-300 mb-1">Security code</label>
<div className="relative">
<input autocomplete="cc-csc" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70 transition" id="cvc" inputmode="numeric" placeholder="CVC" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<svg className="lucide lucide-info w-5 h-5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-300 mb-1">Name on card</label>
<input autocomplete="cc-name" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70 transition" id="cardName" placeholder="Full name" type="text"/>
</div>
<div className="pt-2">
<button className="w-full bg-indigo-600 text-white py-3.5 px-4 rounded-lg hover:bg-indigo-500 transition font-medium flex items-center justify-center border border-indigo-400/20" id="payButton">
<span>Pay ₹41,000</span>
<svg className="lucide lucide-lock ml-2 w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
<p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center">
<svg className="lucide lucide-shield-check mr-2 w-4 h-4 text-slate-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Your payment information is encrypted and secure
                  </p>
</div>
</div>
</section>

<aside className="md:w-2/5 bg-[#0A0E15] p-6 sm:p-8 border-t md:border-t-0 md:border-l border-white/10">
<h3 className="text-lg font-light tracking-tight text-white mb-6" style={{fontFamily: '\'Plus Jakarta Sans\', sans-serif'}}>Order summary</h3>

<div className="flex items-start gap-4 mb-6">
<div className="h-20 w-28 rounded-lg overflow-hidden border border-white/10 bg-white/5">
<img alt="EDITH Glasses" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a473af70-0cc4-445d-bb40-bd130b8729ba_320w.jpg"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white">EDITH Smart Glasses</p>
<span className="text-sm font-medium text-white" id="summaryPrice">₹35,000</span>
</div>
<p className="text-xs text-slate-400 mt-1">Spatial AR eyewear with holographic UI</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[11px] text-slate-300">
<svg className="lucide lucide-scan w-3.5 h-3.5 mr-1.5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg> Gesture control
                    </span>
<span className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[11px] text-slate-300">
<svg className="lucide lucide-radio w-3.5 h-3.5 mr-1.5" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg> Spatial audio
                    </span>
<span className="inline-flex items-center text-[11px] text-slate-300 bg-white/5 border-white/10 border rounded-md pt-1 pr-2 pb-1 pl-2">Wi‑Fi 7 / BT 6.0<svg className="lucide lucide-wifi w-3.5 h-3.5 mr-1.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg></span>
</div>
</div>
</div>

<div className="mb-6">
<p className="text-sm text-slate-300 mb-3">Choose your variant</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<button className="variant-card group rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition p-4 text-left ring-0 ring-2 ring-indigo-500/70 border-indigo-400/40 bg-white/10" data-variant="explorer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-indigo-500/15 text-indigo-300 flex items-center justify-center">
<svg className="lucide lucide-compass w-4.5 h-4.5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="text-sm text-white">Air</p>
</div>
<span className="text-sm text-slate-300">₹35,000</span>
</div>
<ul className="mt-3 space-y-1">
<li className="flex items-center text-[12px] text-slate-400">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-1.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4K projection
                      </li>
<li className="flex items-center text-[12px] text-slate-400">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-1.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Live translation
                      </li>
</ul>
</button>

<button className="variant-card group rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition p-4 text-left ring-0" data-variant="pro">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-fuchsia-500/15 text-fuchsia-300 flex items-center justify-center">
<svg className="lucide lucide-zap w-4.5 h-4.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<p className="text-sm text-white">Pro</p>
</div>
<span className="text-sm text-slate-300">₹50,000</span>
</div>
<ul className="mt-3 space-y-1">
<li className="flex items-center text-[12px] text-slate-400">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-1.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Enhanced 4K optics
                      </li>
<li className="flex items-center text-[12px] text-slate-400">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-1.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 8‑core AR engine
                      </li>
<li className="flex items-center text-[12px] text-slate-400">
<svg className="lucide lucide-check w-3.5 h-3.5 mr-1.5 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Double battery
                      </li>
</ul>
</button>
</div>
<input id="variantInput" type="hidden" value="explorer"/>
</div>

<div className="mb-6">
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:border-white/20 transition">
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" id="addonCare" type="checkbox"/>
<div className="h-5 w-5 rounded-md border border-white/15 bg-transparent peer-checked:bg-emerald-500/20 peer-checked:border-emerald-400/50 transition flex items-center justify-center">
<svg className="peer-checked:opacity-100 transition opacity-0 w-[14px] h-[14px]" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(110, 231, 183)'}} viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</label>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm text-white">Priority Care — 2‑year protection</p>
<span className="text-sm text-slate-300">+ ₹5,000</span>
</div>
<p className="text-xs text-slate-400 mt-1">Accidental damage coverage and express replacement.</p>
</div>
</div>
</div>

<div className="mb-6">
<label className="block text-sm text-slate-300 mb-2">Promo code</label>
<div className="flex gap-2">
<input className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70 transition" id="promoInput" placeholder="Enter code" type="text"/>
<button className="px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-sm text-slate-200 transition" id="applyPromo">Apply</button>
</div>
<p className="mt-2 text-xs text-emerald-400 hidden" id="promoMessage">Promo applied.</p>
</div>

<div className="border-t border-white/10 pt-4 mb-6">
<div className="flex justify-between mb-2">
<p className="text-sm text-slate-400">Subtotal</p>
<p className="text-sm font-medium text-white" id="subtotal">₹35,000</p>
</div>
<div className="flex justify-between mb-2 hidden" id="discountRow">
<p className="text-sm text-slate-400">Discount</p>
<p className="text-sm font-medium text-emerald-300" id="discount">-₹0</p>
</div>
<div className="flex justify-between mb-2">
<p className="text-sm text-slate-400">Shipping</p>
<p className="text-sm font-medium text-white">Free</p>
</div>
<div className="flex justify-between">
<p className="text-sm text-slate-400">GST (18%)</p>
<p className="text-sm font-medium text-white" id="tax">₹6,300</p>
</div>
</div>
<div className="border-t border-white/10 pt-4">
<div className="flex justify-between">
<p className="text-base font-medium text-white">Total</p>
<p className="text-base font-semibold text-white" id="total">₹41,000</p>
</div>
<p className="text-xs text-slate-400 mt-2">
                  By completing this purchase you agree to our
                  <a className="text-indigo-400 hover:text-indigo-300 underline-offset-2 hover:underline" href="#">terms and conditions</a>.
                </p>
</div>

<div className="mt-8">
<div className="flex items-center justify-center gap-4 text-slate-400">
<span className="inline-flex items-center gap-2 text-xs">
<svg className="lucide lucide-nfc w-4 h-4" data-lucide="nfc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"></path><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"></path><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"></path><path d="M16.37 2a20.16 20.16 0 0 1 0 20"></path></svg> Tap
                  </span>
<span className="inline-flex items-center gap-2 text-xs">
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> Wallet
                  </span>
<span className="inline-flex items-center gap-2 text-xs">
<svg className="lucide lucide-landmark w-4 h-4" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg> Bank
                  </span>
</div>
</div>
</aside>
</div>
</div>

<div className="max-w-6xl mx-auto mt-6 text-[11px] text-slate-500 flex items-center gap-2">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Order #ED-98241 • Ships in 3–5 business days from EU/US hubs
        </div>
</main>
</div>
</div>


    </>
  );
}
