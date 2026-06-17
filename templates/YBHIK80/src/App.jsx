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



    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
      }
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      const form = document.querySelector('#quote form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          if (!btn) return;
          btn.disabled = true;
          btn.classList.add('opacity-80', 'cursor-not-allowed');
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="loader-2" class="lucide lucide-loader-2 h-[18px] w-[18px] animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg><span class="font-geist">Sending…</span>';
          if (window.lucide && lucide.createIcons) lucide.createIcons();

          setTimeout(() => {
            btn.disabled = false;
            btn.classList.remove('opacity-80', 'cursor-not-allowed');
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="check-circle-2" class="lucide lucide-check-circle-2 h-[18px] w-[18px]"><path d="M12 22a10 10 0 1 1 10-10"></path><path d="m9 12 2 2 4-4"></path></svg><span class="font-geist">Request Sent</span>';
            if (window.lucide && lucide.createIcons) lucide.createIcons();
          }, 1000);
        });
      }
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"></div>
<div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full blur-3xl bg-yellow-300/10" style={{}}></div>
<div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[110px] bg-amber-200/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_55%)]"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md border shadow-[0_0_0_1px_rgba(255,193,7,0.12)_inset] border-amber-300/30 text-amber-600">
<span className="text-[11px] font-semibold tracking-[0.12em] font-geist" style={{}}>SM</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight font-geist" style={{}}>SwipeMetal</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
<a className="transition-colors font-geist hover:text-neutral-900" href="#products" style={{}}>Products</a>
<a className="transition-colors font-geist hover:text-neutral-900" href="#business" style={{}}>For Business</a>
<a className="transition-colors font-geist hover:text-neutral-900" href="#precious" style={{}}>Precious Metals</a>
<a className="transition-colors font-geist hover:text-neutral-900" href="#process" style={{}}>Process</a>
<a className="transition-colors font-geist hover:text-neutral-900" href="#gallery" style={{}}>Gallery</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm transition-colors border-neutral-200 bg-black/5 text-neutral-900 hover:bg-black/10 hover:border-neutral-300" href="#quote" style={{}}>
<svg className="lucide lucide-mail h-[18px] w-[18px]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist" style={{}}>Request Quote</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r px-3.5 py-2 text-sm font-medium ring-1 from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 ring-black/10" href="#design" style={{}}>
<svg className="lucide lucide-sparkles h-[18px] w-[18px]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-geist" style={{}}>Start Design</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 md:pt-24 md:pb-16 mr-auto ml-auto pt-16 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-amber-300/30 bg-amber-300/20 text-amber-900/70">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist" style={{}}>Bank‑compatible. PCI‑compliant personalization.</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-medium font-playfair" style={{}}>
            Luxury Metal Cards
            <span className="block bg-clip-text font-medium text-transparent font-playfair bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" style={{}}>crafted to elevate every swipe.</span>
</h1>
<p className="mt-5 max-w-xl text-base sm:text-lg font-geist text-neutral-600" style={{}}>
            Custom stainless steel, titanium, NFC and 18K solid gold cards for individuals, teams and brands. Precision‑milled, laser‑engraved, and finished to perfection.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r px-5 py-3 text-sm font-medium ring-1 from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 ring-black/10" href="#design" style={{}}>
<svg className="lucide lucide-pen-tool h-[18px] w-[18px]" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<span className="font-geist" style={{}}>Customize Your Card</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm transition-colors border-neutral-200 bg-black/5 text-neutral-900 hover:bg-black/10 hover:border-neutral-300" href="#business" style={{}}>
<svg className="lucide lucide-building-2 h-[18px] w-[18px]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="font-geist" style={{}}>Explore Business</span>
</a>
</div>
<div className="mt-8 flex items-center gap-6 text-xs text-neutral-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-credit-card h-4 w-4 text-amber-600" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="font-geist" style={{}}>Metal. NFC. 18K Gold.</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<svg className="lucide lucide-timer h-4 w-4 text-amber-600" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="font-geist" style={{}}>Typical lead time 7–14 days</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative aspect-[4/3] w-full max-w-[560px] shadow-[0_10px_60px_rgba(0,0,0,0.06)] bg-gradient-to-b from-white to-neutral-50 border rounded-xl mr-auto ml-auto overflow-hidden border-neutral-200">
<img alt="Metal card placeholder" className="h-full w-full object-cover opacity-95" src="https://placehold.co/1200x900/FFFFFF/0B0B0C?text=Metal+Card+Placeholder" style={{}}/>
</div>

<div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-neutral-500">
<span className="uppercase tracking-[0.16em] font-geist" style={{}}>Trusted by</span>
<span className="rounded border px-2 py-1 tracking-[0.14em] font-geist border-neutral-200" style={{}}>AURA</span>
<span className="rounded border px-2 py-1 tracking-[0.14em] font-geist border-neutral-200" style={{}}>LXV</span>
<span className="rounded border px-2 py-1 tracking-[0.14em] font-geist border-neutral-200" style={{}}>OMNI</span>
<span className="rounded border px-2 py-1 tracking-[0.14em] font-geist border-neutral-200" style={{}}>ARC</span>
<span className="rounded border px-2 py-1 tracking-[0.14em] font-geist border-neutral-200" style={{}}>SOVR</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="products" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-medium font-playfair" style={{}}>Cards for every need</h2>
<p className="mt-2 max-w-2xl font-geist text-neutral-600" style={{}}>Customize materials, finishes, engravings, NFC encoding and packaging across our lineup.</p>
</div>

</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<a className="group rounded-xl border bg-white p-5 hover:bg-neutral-50 transition-colors border-neutral-200 hover:border-neutral-300" href="#design" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-credit-card h-5 w-5 text-amber-600" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<h3 className="text-base font-semibold font-geist" style={{}}>Custom Bank Cards</h3>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-neutral-800 text-neutral-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Replace your existing plastic with precision‑milled metal. EMV‑compatible, laser‑engraved.</p>
<div className="mt-4 h-28 rounded-lg overflow-hidden border border-neutral-200" style={{}}>
<img alt="Brushed metal texture" className="h-full w-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
</a>

<a className="group rounded-xl border bg-white p-5 hover:bg-neutral-50 transition-colors border-neutral-200 hover:border-neutral-300" href="#design" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-id-card h-5 w-5 text-amber-600" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<h3 className="text-base font-semibold font-geist" style={{}}>General Metal Cards</h3>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-neutral-800 text-neutral-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Membership, access, gift and loyalty cards in stainless steel or titanium.</p>
<div className="mt-4 h-28 rounded-lg overflow-hidden border border-neutral-200" style={{}}>
<img alt="Metal cards on stone" className="h-full w-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</a>

<a className="group rounded-xl border bg-white p-5 hover:bg-neutral-50 transition-colors border-neutral-200 hover:border-neutral-300" href="#design" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wifi h-5 w-5 text-amber-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<h3 className="text-base font-semibold font-geist" style={{}}>NFC Cards</h3>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-neutral-800 text-neutral-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Tap‑to‑connect profiles, secure access and smart experiences. Encoded to spec.</p>
<div className="mt-4 h-28 rounded-lg overflow-hidden border border-neutral-200" style={{}}>
<img alt="NFC technology circuit" className="h-full w-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</a>

</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="business" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-medium font-playfair" style={{}}>For brands, clubs and communities</h2>
<p className="mt-3 font-geist text-neutral-600" style={{}}>From concierge memberships to luxury retail, we power premium card programs end‑to‑end: design, prototyping, encoding, fulfillment and white‑label packaging.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-lg border p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users h-5 w-5 text-amber-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h4 className="text-sm font-semibold font-geist" style={{}}>Membership Communities</h4>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Tiered status, numbering, access control and renewals.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-gem h-5 w-5 text-amber-600" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<h4 className="text-sm font-semibold font-geist" style={{}}>Luxury Brands</h4>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>VIP cards, clienteling, special editions and collaborations.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-hotel h-5 w-5 text-amber-600" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
<h4 className="text-sm font-semibold font-geist" style={{}}>Hospitality</h4>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Suite access, loyalty upgrades and on‑brand presentation.</p>
</div>
<div className="rounded-lg border p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-briefcase h-5 w-5 text-amber-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h4 className="text-sm font-semibold font-geist" style={{}}>Corporate &amp; Fintech</h4>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Cardholder personalization, NFC experiences, integrations.</p>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r px-4 py-2 text-sm font-medium ring-1 from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 ring-black/10" href="#talk-to-sales">
<svg className="lucide lucide-headset h-[18px] w-[18px]" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
<span className="font-geist" style={{}}>Talk to Sales</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors border-neutral-200 bg-black/5 text-neutral-900 hover:bg-black/10 hover:border-neutral-300" href="#brief">
<svg className="lucide lucide-file-text h-[18px] w-[18px]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-geist" style={{}}>Submit a Brief</span>
</a>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="rounded-xl border bg-white p-5 border-neutral-200" style={{}}>
<div className="aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200">
<img alt="Lifestyle placeholder" className="h-full w-full object-cover opacity-95" src="https://placehold.co/1600x1000/FFFFFF/0B0B0C?text=Lifestyle+Placeholder"/>
</div>
<p className="mt-4 text-xs font-geist text-neutral-600" style={{}}>White‑label packaging and fulfillment available globally.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="precious" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="rounded-xl border bg-gradient-to-b to-amber-100/40 p-6 border-amber-300/50 from-yellow-100/50" style={{}}>
<div className="aspect-[16/10] rounded-lg overflow-hidden border border-amber-300/60">
<img alt="Gold ingots" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs border-amber-300/60 bg-amber-200/40 text-amber-900">
<svg className="lucide lucide-crown h-3.5 w-3.5" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="font-geist" style={{}}>Precious Metals Collection</span>
</div>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-medium font-playfair" style={{}}>18 Carat Solid Gold Cards</h3>
<p className="mt-3 font-geist text-neutral-700" style={{}}>Each card is milled from ethically sourced 18K solid gold, serialized and supplied with a certificate of authenticity. Limited runs, bespoke engraving and presentation cases available.</p>
<ul className="mt-5 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check-circle h-4 w-4 text-amber-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Individually numbered and COA included</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check-circle h-4 w-4 text-amber-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Custom engraving and inlay options</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check-circle h-4 w-4 text-amber-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Bespoke velvet/wood presentation</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r px-4 py-2 text-sm font-medium ring-1 from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 ring-black/10" href="#precious-inquiry" style={{}}>
<svg className="lucide lucide-diamond h-[18px] w-[18px]" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
<span className="font-geist" style={{}}>Request Availability</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm border-neutral-200 bg-black/5 text-neutral-900 hover:bg-black/10 hover:border-neutral-300" href="#gallery" style={{}}>
<svg className="lucide lucide-images h-[18px] w-[18px]" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg>
<span className="font-geist" style={{}}>View Collection</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="process" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<h3 className="text-2xl sm:text-3xl tracking-tight font-medium font-playfair" style={{}}>How it works</h3>
<div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="rounded-lg border bg-white p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-pen-tool h-5 w-5 text-amber-600" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<span className="text-sm font-semibold font-geist" style={{}}>Design</span>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>We translate your brand or personal brief into production‑ready artwork.</p>
</div>
<div className="rounded-lg border bg-white p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-factory h-5 w-5 text-amber-600" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
<span className="text-sm font-semibold font-geist" style={{}}>Milling</span>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>CNC machining, brushing, bead‑blasting and PVD coating.</p>
</div>
<div className="rounded-lg border bg-white p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-600" data-lucide="laser"></i>
<span className="text-sm font-semibold font-geist" style={{}}>Engraving</span>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>High‑precision laser engraving and optional color infill.</p>
</div>
<div className="rounded-lg border bg-white p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check h-5 w-5 text-amber-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-semibold font-geist" style={{}}>QC</span>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Multi‑point inspection for finish, tolerances and encoding.</p>
</div>
<div className="rounded-lg border bg-white p-4 border-neutral-200" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-truck h-5 w-5 text-amber-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-sm font-semibold font-geist" style={{}}>Delivery</span>
</div>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Secure, insured shipping worldwide with discreet packaging.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="gallery" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-medium font-playfair" style={{}}>What clients say</h3>
<p className="mt-2 font-geist text-neutral-600" style={{}}>Real feedback from individuals and teams using SwipeMetal.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#quote">
<span className="font-geist" style={{}}>Get a quote</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-xl border bg-white p-5 border-neutral-200" style={{}}>
<div className="flex items-center gap-3">
<img alt="Client 1" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-geist" style={{}}>Elena V.</div>
<div className="text-xs font-geist text-neutral-500" style={{}}>Private Client</div>
</div>
</div>
<p className="mt-3 text-sm font-geist text-neutral-700" style={{}}>The finish is flawless and the weight feels incredible. The engraving matched my artwork exactly.</p>
</div>
<div className="rounded-xl border bg-white p-5 border-neutral-200" style={{}}>
<div className="flex items-center gap-3">
<img alt="Client 2" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-geist" style={{}}>Arjun M.</div>
<div className="text-xs font-geist text-neutral-500" style={{}}>Membership Director</div>
</div>
</div>
<p className="mt-3 text-sm font-geist text-neutral-700" style={{}}>Our VIP cards became a centerpiece of the brand experience. Seamless fulfillment and NFC setup.</p>
</div>
<div className="rounded-xl border bg-white p-5 border-neutral-200" style={{}}>
<div className="flex items-center gap-3">
<img alt="Client 3" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-geist" style={{}}>Marc D.</div>
<div className="text-xs font-geist text-neutral-500" style={{}}>Automotive Club</div>
</div>
</div>
<p className="mt-3 text-sm font-geist text-neutral-700" style={{}}>Members were blown away by the heft and detail. It elevated our entire program.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<h3 className="text-2xl sm:text-3xl tracking-tight font-medium font-playfair" style={{}}>FAQs</h3>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="rounded-lg border p-5 border-neutral-200" style={{}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-shield h-5 w-5 mt-0.5 text-amber-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<div>
<h4 className="text-sm font-semibold font-geist" style={{}}>Are metal bank cards compatible with my account?</h4>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Yes. We pair your original chip and maintain EMV compatibility. For NFC cards, we encode to your use case.</p>
</div>
</div>
</div>
<div className="rounded-lg border p-5 border-neutral-200" style={{}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-globe h-5 w-5 mt-0.5 text-amber-600" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div>
<h4 className="text-sm font-semibold font-geist" style={{}}>Do you ship internationally?</h4>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>We ship worldwide with insured, discreet packaging. Lead times vary by region and finish.</p>
</div>
</div>
</div>
<div className="rounded-lg border p-5 border-neutral-200" style={{}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-settings h-5 w-5 mt-0.5 text-amber-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div>
<h4 className="text-sm font-semibold font-geist" style={{}}>What customization options are available?</h4>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Materials, coatings (PVD, matte, mirror), engraving, inlay, edge finishes, NFC encoding and packaging.</p>
</div>
</div>
</div>
<div className="rounded-lg border p-5 border-neutral-200" style={{}}>
<div className="flex items-start gap-3">
<svg className="lucide lucide-credit-card h-5 w-5 mt-0.5 text-amber-600" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<div>
<h4 className="text-sm font-semibold font-geist" style={{}}>Minimum order quantities?</h4>
<p className="mt-2 text-sm font-geist text-neutral-600" style={{}}>Individuals: 1 piece. Business programs: from 25 units with volume pricing and fulfillment.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="quote" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="rounded-2xl border bg-gradient-to-b from-white to-neutral-50 p-6 sm:p-8 border-neutral-200" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
<div className="lg:col-span-2">
<h4 className="text-xl sm:text-2xl tracking-tight font-medium font-playfair" style={{}}>Bring your vision to life</h4>
<p className="mt-2 font-geist text-neutral-600" style={{}}>Tell us about your card project and we’ll share options, timelines and pricing within 24 hours.</p>
</div>
<form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-300/40 border-neutral-300 bg-white" placeholder="Name" style={{}} type="text"/>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-300/40 border-neutral-300 bg-white" placeholder="Email" style={{}} type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r px-4 py-2 text-sm font-medium from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 ring-black/10" style={{}} type="submit">
<svg className="lucide lucide-send h-[18px] w-[18px]" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
<span className="font-geist">Get My Quote</span>
</button>
</form>
</div>
<p className="mt-4 text-[11px] font-geist text-neutral-500">By submitting, you agree to our <a className="underline transition-colors decoration-neutral-400 hover:decoration-neutral-800" href="#privacy">Privacy Policy</a>.</p>
</div>
</div>
</section>

<footer className="relative border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-md border shadow-[0_0_0_1px_rgba(255,193,7,0.12)_inset] border-amber-300/40 text-amber-700">
<span className="text-[11px] font-semibold tracking-[0.12em] font-geist">SM</span>
</div>
<span className="text-base font-semibold tracking-tight font-geist">SwipeMetal</span>
</a>
<p className="mt-3 text-sm font-geist text-neutral-600">Precision‑milled metal, NFC and 18K gold cards crafted to elevate every interaction.</p>
</div>
<div>
<h5 className="text-sm font-semibold font-geist text-neutral-800">Explore</h5>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#products">Products</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#business">For Business</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#precious">Precious Metals</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#process">Process</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold font-geist text-neutral-800">Resources</h5>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#quote">Request Quote</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#brief">Submit a Brief</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#talk-to-sales">Talk to Sales</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#" id="privacy">Privacy Policy</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-900" href="#">Terms</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold font-geist text-neutral-800">Connect</h5>
<div className="mt-3 flex items-center gap-3">
<a aria-label="Twitter" className="rounded-md border bg-neutral-50 p-2 transition-colors border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 hover:border-neutral-300" href="#">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 6.5-3.8 1 .1 3.5-1.2 3.5-1.2z"></path></svg>
</a>
<a aria-label="Instagram" className="rounded-md border bg-neutral-50 p-2 transition-colors border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 hover:border-neutral-300" href="#">
<svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="LinkedIn" className="rounded-md border bg-neutral-50 p-2 transition-colors border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 hover:border-neutral-300" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="mt-3 text-xs font-geist text-neutral-500">Prefer email? <a className="underline decoration-neutral-400 hover:decoration-neutral-800" href="mailto:hello@swipemetal.example">hello@swipemetal.example</a></p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-6 border-neutral-200">
<p className="text-xs font-geist text-neutral-500">© <span id="year"></span> SwipeMetal. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span className="inline-flex items-center gap-1 font-geist"><svg className="lucide lucide-shield-check h-3.5 w-3.5 text-amber-600" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>PCI‑compliant personalization</span>
<span className="hidden sm:inline text-neutral-300">•</span>
<span className="inline-flex items-center gap-1 font-geist"><svg className="lucide lucide-globe-2 h-3.5 w-3.5 text-amber-600" data-lucide="globe-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-4a2 2 0 0 1 2-2h4"></path><path d="M8.5 2.3A10 10 0 1 0 21.7 15"></path><path d="M2 12h8"></path><path d="M2 16h6"></path><path d="M2 20h4"></path></svg>Worldwide shipping</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
