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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function setMenu(open) {
      if (!menuBtn || !mobileMenu) return;
      mobileMenu.classList.toggle('hidden', !open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        setMenu(!isOpen);
      });

      mobileMenu.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) setMenu(false);
      });
    }

    document.getElementById('year').textContent = new Date().getFullYear();

    function subscribe() {
      const email = document.getElementById('email');
      const msg = document.getElementById('subscribeMsg');
      const value = (email.value || '').trim();

      msg.classList.remove('hidden');
      if (!value || !value.includes('@')) {
        msg.textContent = 'Please enter a valid email to join the Collector’s Club.';
        return;
      }

      msg.textContent = 'You’re in. Watch for early releases and private previews.';
      email.value = '';
    }

    // Cart drawer + minimal cart logic
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const cartClose = document.getElementById('cartClose');
    const cartItemsEl = document.getElementById('cartItems');
    const cartEmptyEl = document.getElementById('cartEmpty');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartCountEl = document.getElementById('cartCount');

    let cart = [
      { title: 'Velvet Tension', price: 420, qty: 1 },
      { title: 'Afterglow Study', price: 90, qty: 1 }
    ];

    function money(n) {
      return '$' + Number(n).toLocaleString(undefined, { maximumFractionDigits: 0 });
    }

    function openCart() {
      cartDrawer.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      cartBtn?.setAttribute('aria-expanded', 'true');
      cartClose?.focus();
      renderCart();
    }

    function closeCart() {
      cartDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      cartBtn?.setAttribute('aria-expanded', 'false');
      cartBtn?.focus();
    }

    function subtotal() {
      return cart.reduce((s, it) => s + (it.price * it.qty), 0);
    }

    function countItems() {
      return cart.reduce((s, it) => s + it.qty, 0);
    }

    function renderCart() {
      const count = countItems();
      if (cartCountEl) cartCountEl.textContent = String(count);

      cartItemsEl.innerHTML = '';
      cartSubtotalEl.textContent = money(subtotal());

      const empty = cart.length === 0;
      cartEmptyEl.classList.toggle('hidden', !empty);

      if (empty) return;

      cart.forEach((it, idx) => {
        const row = document.createElement('div');
        row.className = 'rounded-2xl border border-[#121214]/10 bg-white p-4';

        row.innerHTML = `
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="font-[Inter] text-sm font-medium text-[#121214] truncate">${it.title}</p>
              <p class="mt-1 font-[Inter] text-xs font-light text-[#121214]/60">${money(it.price)} · <span class="font-normal">Qty</span> ${it.qty}</p>
            </div>
            <button type="button" class="inline-flex items-center justify-center rounded-full border border-[#121214]/10 bg-white p-2 text-[#121214]/70 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214]" aria-label="Remove ${it.title}" data-remove="${idx}">
              <iconify-icon icon="solar:trash-bin-trash-linear" width="18" height="18" style="stroke-width:1.5;"></iconify-icon>
            </button>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <div class="inline-flex items-center gap-2 rounded-full border border-[#121214]/10 bg-[#FBFAF8] p-1">
              <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#121214]/70 ring-1 ring-[#121214]/10 transition hover:text-[#121214]" aria-label="Decrease quantity" data-dec="${idx}">
                <iconify-icon icon="solar:minus-linear" width="16" height="16" style="stroke-width:1.5;"></iconify-icon>
              </button>
              <span class="w-8 text-center font-[Inter] text-xs font-medium text-[#121214]/80">${it.qty}</span>
              <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#121214]/70 ring-1 ring-[#121214]/10 transition hover:text-[#121214]" aria-label="Increase quantity" data-inc="${idx}">
                <iconify-icon icon="solar:add-linear" width="16" height="16" style="stroke-width:1.5;"></iconify-icon>
              </button>
            </div>
            <p class="font-[Inter] text-sm font-medium text-[#121214]">${money(it.price * it.qty)}</p>
          </div>
        `;

        cartItemsEl.appendChild(row);
      });
    }

    function addToCart(title, price) {
      const existing = cart.find(i => i.title === title);
      if (existing) existing.qty += 1;
      else cart.push({ title, price: Number(price), qty: 1 });

      renderCart();
      openCart();
    }

    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-add-to-cart]');
      if (addBtn) {
        addToCart(addBtn.dataset.title, addBtn.dataset.price);
        return;
      }

      const removeBtn = e.target.closest('[data-remove]');
      if (removeBtn) {
        const idx = Number(removeBtn.dataset.remove);
        cart.splice(idx, 1);
        renderCart();
        return;
      }

      const incBtn = e.target.closest('[data-inc]');
      if (incBtn) {
        const idx = Number(incBtn.dataset.inc);
        if (cart[idx]) cart[idx].qty += 1;
        renderCart();
        return;
      }

      const decBtn = e.target.closest('[data-dec]');
      if (decBtn) {
        const idx = Number(decBtn.dataset.dec);
        if (!cart[idx]) return;
        cart[idx].qty -= 1;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        renderCart();
        return;
      }
    });

    cartBtn?.addEventListener('click', openCart);
    cartClose?.addEventListener('click', closeCart);
    cartBackdrop?.addEventListener('click', closeCart);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (cartDrawer && !cartDrawer.classList.contains('hidden')) closeCart();
        setMenu(false);
      }
    });

    // initial
    renderCart();
  
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-[0.12] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22 viewBox=%220 0 140 140%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22140%22 height=%22140%22 filter=%22url(%23n)%22 opacity=%220.22%22/%3E%3C/svg%3E\')', backgroundSize: '240px 240px'}}></div>

<a className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:shadow-lg focus:ring-1 focus:ring-[#121214]/10" href="#main">
    Skip to content
  </a>

<header className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-6">
<a aria-label="Home" className="group inline-flex items-baseline gap-3" href="#">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium tracking-tight text-[#121214]">DA</span>
<span className="text-xs font-normal tracking-[0.18em] text-[#121214]/60">DENISE TAILLEFER</span>
</div>
</a>
<nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-[#121214]/70 md:flex">
<a className="transition hover:text-[#0E6F6A]" href="#gallery">Gallery</a>
<a className="transition hover:text-[#0E6F6A]" href="#collections">Collections</a>
<a className="transition hover:text-[#0E6F6A]" href="#process">Process</a>
<a className="transition hover:text-[#0E6F6A]" href="#favorites">Collector Favorites</a>
<a className="transition hover:text-[#0E6F6A]" href="#studio">Studio</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-[#121214]/10 bg-white px-4 py-2 text-xs font-medium text-[#121214]/70 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214] md:inline-flex" type="button">
            Sign in
          </button>
<button aria-controls="cartDrawer" aria-haspopup="dialog" className="inline-flex items-center gap-2 rounded-full border border-[#121214]/10 bg-white px-4 py-2 text-xs font-medium text-[#121214]/70 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214]" id="cartBtn" type="button">
<span>Cart</span>
<span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0E6F6A] px-1.5 text-xs font-medium text-white" id="cartCount">2</span>
</button>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="inline-flex items-center justify-center rounded-full border border-[#121214]/10 bg-white p-2 text-[#121214]/70 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214] md:hidden" id="menuBtn" type="button">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden">
<div className="hidden border-t border-[#121214]/10 bg-[#FBFAF8]/90 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="grid gap-3 text-sm text-[#121214]/70">
<a className="py-2 transition hover:text-[#0E6F6A]" href="#gallery">Gallery</a>
<a className="py-2 transition hover:text-[#0E6F6A]" href="#collections">Collections</a>
<a className="py-2 transition hover:text-[#0E6F6A]" href="#process">Process</a>
<a className="py-2 transition hover:text-[#0E6F6A]" href="#favorites">Collector Favorites</a>
<a className="py-2 transition hover:text-[#0E6F6A]" href="#studio">Studio</a>
</div>
</div>
</div>
</div>
</header>
<main id="main">

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0" style="background:
           radial-gradient(900px 520px at 20% 10%, rgba(14,111,106,0.16), rgba(251,250,248,0) 60%),
           radial-gradient(820px 560px at 90% 40%, rgba(70,24,110,0.10), rgba(251,250,248,0) 62%),
           linear-gradient(to bottom, rgba(18,18,20,0.02), rgba(251,250,248,0) 35%);">
</div>
<div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24">
<div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">

<div className="lg:col-span-7">
<div className="relative overflow-hidden rounded-[2.25rem] bg-white shadow-[0_24px_60px_rgba(18,18,20,0.10)] ring-1 ring-[#121214]/10">
<img alt="Featured artwork" className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
<div className="flex flex-col gap-3 rounded-2xl border border-[#121214]/10 bg-white/75 p-4 backdrop-blur">
<div className="flex items-center justify-between gap-4">
<div>
<p className="font-[Inter] text-xs font-medium tracking-[0.22em] text-[#121214]/55">STUDIO HIGHLIGHT</p>
<p className="mt-1 font-[Fraunces] text-xl font-normal tracking-tight text-[#121214]">Luminous Depth</p>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-[#121214]/10 bg-white px-4 py-2 text-xs font-medium text-[#121214]/75 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214]" href="#favorites">
<span>View</span>
<iconify-icon height="16" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<p className="font-[Inter] text-xs font-light leading-relaxed text-[#121214]/60">
                    Layered instinct, restrained tension, quiet contrast.
                  </p>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between text-xs text-[#121214]/55">
<span className="font-[Inter] font-light">Curated rhythm, gallery-first</span>
<span className="font-[Inter] font-light">1 of 3</span>
</div>
</div>

<div className="lg:col-span-5">
<div className="h-full rounded-[2.25rem] bg-white/70 ring-1 ring-[#121214]/10 shadow-[0_24px_60px_rgba(18,18,20,0.08)] backdrop-blur">
<div className="flex h-full flex-col p-6 sm:p-8">
<p className="text-xs font-medium tracking-[0.22em] text-[#121214]/55">DOODLE ART STUDIO</p>
<h1 className="mt-5 font-[Fraunces] text-4xl font-normal tracking-tight text-[#121214] sm:text-5xl">
                  Emotion in Every Stroke.
                </h1>
<p className="mt-5 max-w-xl font-[Inter] text-sm font-light leading-relaxed text-[#121214]/70 sm:text-base">
                  Original artwork and curated collections crafted to transform space through color and instinct.
                </p>
<div className="mt-8 grid gap-3 sm:grid-cols-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E6F6A] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(14,111,106,0.22)] transition hover:shadow-[0_16px_36px_rgba(14,111,106,0.28)] focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/40 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" href="#gallery">
<span>Explore</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#121214]/10 bg-white px-5 py-3 text-sm font-medium text-[#121214]/80 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214] focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/25 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" href="#process">
<span>Process</span>
<iconify-icon height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 rounded-2xl border border-[#121214]/10 bg-[#FBFAF8] p-4">
<div className="grid gap-3 text-xs text-[#121214]/60">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-[#0E6F6A]/80"></span>
<span className="font-[Inter] font-light">Studio-led drops</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-[#46186E]/60"></span>
<span className="font-[Inter] font-light">Curated collections</span>
</div>
</div>
</div>
<div className="mt-auto pt-8">
<div className="flex items-center justify-between border-t border-[#121214]/10 pt-5 text-xs text-[#121214]/55">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Soft neutrals, restrained accents</span>
</div>
<div className="hidden items-center gap-2 sm:flex">
<iconify-icon height="18" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Editorial pacing</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="relative">
<img alt="Midnight Reflections — Acrylic on Canvas" className="h-[16rem] w-full object-cover sm:h-[20rem] lg:h-[22rem]" src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&amp;fit=crop&amp;w=2200&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(251,250,248,0.85), rgba(251,250,248,0) 55%)'}}></div>
<div className="absolute bottom-0 left-0 right-0">
<div className="mx-auto max-w-7xl px-6 pb-6">
<div className="inline-flex items-center gap-3 rounded-full border border-[#121214]/10 bg-white/80 px-4 py-2 backdrop-blur shadow-sm">
<span className="h-1.5 w-1.5 rounded-full bg-[#0E6F6A]/80"></span>
<p className="font-[Inter] text-xs font-light text-[#121214]/75">
<span className="font-normal text-[#121214]">Midnight Reflections</span> — Acrylic on Canvas
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="collections">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
<div className="flex items-end justify-between gap-8">
<div>
<p className="text-xs font-medium tracking-[0.22em] text-[#121214]/55">COLLECTIONS</p>
<h2 className="mt-4 font-[Fraunces] text-3xl font-normal tracking-tight text-[#121214] sm:text-4xl">
              Browse by intention.
            </h2>
</div>
<a className="hidden items-center gap-2 text-sm font-medium text-[#121214]/70 transition hover:text-[#0E6F6A] sm:inline-flex" href="#gallery">
<span>See all</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-12">
<a className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#121214]/10 shadow-[0_24px_60px_rgba(18,18,20,0.08)] lg:col-span-7" href="#gallery">
<img alt="Original Works" className="h-[24rem] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[28rem] lg:h-[34rem]" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(18,18,20,0.55), rgba(18,18,20,0) 62%)'}}></div>
<div className="absolute inset-0 flex items-end p-6 sm:p-8">
<div className="max-w-md">
<p className="font-[Inter] text-xs font-medium tracking-[0.22em] text-white/75">FEATURED</p>
<h3 className="mt-3 font-[Fraunces] text-3xl font-normal tracking-tight text-white sm:text-4xl">
                  Original Works
                </h3>
<div className="mt-5 h-px w-16 bg-[#0E6F6A]"></div>
<p className="mt-4 font-[Inter] text-sm font-light leading-relaxed text-white/80">
                  One-of-one pieces built from layered gesture, pressure, and pause.
                </p>
</div>
<div className="ml-auto hidden items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur transition group-hover:bg-white/15 sm:flex">
<span>Enter</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</a>
<div className="grid gap-6 lg:col-span-5">
<a className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#121214]/10 shadow-[0_24px_60px_rgba(18,18,20,0.08)]" href="#favorites">
<img alt="Fine Art Prints" className="h-[15rem] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[17rem]" src="https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(18,18,20,0.56), rgba(18,18,20,0) 64%)'}}></div>
<div className="absolute inset-0 flex items-end p-6 sm:p-7">
<div className="opacity-90 transition group-hover:opacity-100">
<h3 className="font-[Fraunces] text-2xl font-normal tracking-tight text-white sm:text-3xl">Fine Art Prints</h3>
<p className="mt-2 font-[Inter] text-xs font-light text-white/80">Museum-grade reproductions for everyday walls.</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-white/85 transition group-hover:text-[#CFEDEB]">
<span>Browse</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-[#121214]/10 shadow-[0_24px_60px_rgba(18,18,20,0.08)]" href="#gallery">
<img alt="Limited Series" className="h-[15rem] w-full object-cover transition duration-700 group-hover:scale-[1.02] sm:h-[17rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(18,18,20,0.56), rgba(18,18,20,0) 64%)'}}></div>
<div className="absolute inset-0 flex items-end p-6 sm:p-7">
<div className="opacity-90 transition group-hover:opacity-100">
<h3 className="font-[Fraunces] text-2xl font-normal tracking-tight text-white sm:text-3xl">Limited Series</h3>
<p className="mt-2 font-[Inter] text-xs font-light text-white/80">Small runs that hold a single mood in focus.</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-white/85 transition group-hover:text-[#CFEDEB]">
<span>Browse</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#121214]/70 transition hover:text-[#0E6F6A]" href="#gallery">
<span>See all</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-5">
<div className="font-[Fraunces] text-6xl font-normal tracking-tight text-[#121214] sm:text-7xl lg:text-8xl">
<div className="leading-none">Color.</div>
</div>
</div>
<div className="lg:col-span-7">
<p className="max-w-2xl font-[Inter] text-sm font-light leading-relaxed text-[#121214]/70 sm:text-base">
              Art begins where logic pauses and instinct speaks. Each piece is layered with depth, tension, and release.
            </p>
<div className="mt-6 h-px w-40 bg-[#0E6F6A]/60"></div>
<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
<div className="inline-flex items-center gap-2 text-xs text-[#121214]/60">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Instinct-forward composition</span>
</div>
<div className="inline-flex items-center gap-2 text-xs text-[#121214]/60">
<iconify-icon height="18" icon="solar:atom-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Layered mark-making</span>
</div>
<div className="inline-flex items-center gap-2 text-xs text-[#121214]/60">
<iconify-icon height="18" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Curated series rhythm</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="favorites">
<div className="bg-white/60 ring-1 ring-[#121214]/5">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
<div className="flex items-end justify-between gap-8">
<div>
<p className="text-xs font-medium tracking-[0.22em] text-[#121214]/55">FEATURED</p>
<h2 className="mt-4 font-[Fraunces] text-3xl font-normal tracking-tight text-[#121214] sm:text-4xl">
                Collector Favorites
              </h2>
</div>
<a className="hidden items-center gap-2 text-sm font-medium text-[#121214]/70 transition hover:text-[#0E6F6A] sm:inline-flex" href="#gallery">
<span>View gallery</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
<article className="group rounded-2xl bg-white ring-1 ring-[#121214]/10 shadow-[0_18px_50px_rgba(18,18,20,0.06)] transition hover:-translate-y-1 hover:ring-[#0E6F6A]/25" style={{transform: 'translate3d(0,0,0)'}}>
<div className="overflow-hidden rounded-2xl">
<img alt="Velvet Tension" className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="font-[Inter] text-sm font-medium text-[#121214]">Velvet Tension</h3>
<p className="mt-1 font-[Inter] text-xs font-light text-[#121214]/60">Acrylic on canvas</p>
<div className="mt-4 flex items-center justify-between gap-3">
<span className="font-[Inter] text-sm font-medium text-[#121214]/90">$420</span>
<button className="inline-flex items-center gap-2 rounded-full bg-[#0E6F6A] px-4 py-2 text-xs font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/35 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" data-add-to-cart="" data-price="420" data-title="Velvet Tension" type="button">
<iconify-icon height="16" icon="solar:cart-3-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
</article>
<article className="group rounded-2xl bg-white ring-1 ring-[#121214]/10 shadow-[0_18px_50px_rgba(18,18,20,0.06)] transition hover:-translate-y-1 hover:ring-[#0E6F6A]/25" style={{transform: 'translate3d(0,0,0)'}}>
<div className="overflow-hidden rounded-2xl">
<img alt="Quiet Current" className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="font-[Inter] text-sm font-medium text-[#121214]">Quiet Current</h3>
<p className="mt-1 font-[Inter] text-xs font-light text-[#121214]/60">Limited series</p>
<div className="mt-4 flex items-center justify-between gap-3">
<span className="font-[Inter] text-sm font-medium text-[#121214]/90">$260</span>
<button className="inline-flex items-center gap-2 rounded-full bg-[#0E6F6A] px-4 py-2 text-xs font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/35 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" data-add-to-cart="" data-price="260" data-title="Quiet Current" type="button">
<iconify-icon height="16" icon="solar:cart-3-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
</article>
<article className="group rounded-2xl bg-white ring-1 ring-[#121214]/10 shadow-[0_18px_50px_rgba(18,18,20,0.06)] transition hover:-translate-y-1 hover:ring-[#0E6F6A]/25" style={{transform: 'translate3d(0,0,0)'}}>
<div className="overflow-hidden rounded-2xl">
<img alt="Afterglow Study" className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5">
<h3 className="font-[Inter] text-sm font-medium text-[#121214]">Afterglow Study</h3>
<p className="mt-1 font-[Inter] text-xs font-light text-[#121214]/60">Fine art print</p>
<div className="mt-4 flex items-center justify-between gap-3">
<span className="font-[Inter] text-sm font-medium text-[#121214]/90">$90</span>
<button className="inline-flex items-center gap-2 rounded-full bg-[#0E6F6A] px-4 py-2 text-xs font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/35 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" data-add-to-cart="" data-price="90" data-title="Afterglow Study" type="button">
<iconify-icon height="16" icon="solar:cart-3-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
</article>
<article className="group rounded-2xl bg-white ring-1 ring-[#121214]/10 shadow-[0_18px_50px_rgba(18,18,20,0.06)] transition hover:-translate-y-1 hover:ring-[#0E6F6A]/25" style={{transform: 'translate3d(0,0,0)'}}>
<div className="overflow-hidden rounded-2xl">
<img alt="Ink Memory" className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-5">
<h3 className="font-[Inter] text-sm font-medium text-[#121214]">Ink Memory</h3>
<p className="mt-1 font-[Inter] text-xs font-light text-[#121214]/60">Acrylic on canvas</p>
<div className="mt-4 flex items-center justify-between gap-3">
<span className="font-[Inter] text-sm font-medium text-[#121214]/90">$520</span>
<button className="inline-flex items-center gap-2 rounded-full bg-[#0E6F6A] px-4 py-2 text-xs font-medium text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/35 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" data-add-to-cart="" data-price="520" data-title="Ink Memory" type="button">
<iconify-icon height="16" icon="solar:cart-3-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
</article>
</div>
<div className="mt-10 sm:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#121214]/70 transition hover:text-[#0E6F6A]" href="#gallery">
<span>View gallery</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
<div className="mx-auto max-w-4xl rounded-[2.25rem] bg-white ring-1 ring-[#121214]/10 shadow-[0_24px_60px_rgba(18,18,20,0.08)]">
<div className="p-8 sm:p-12">
<div className="flex items-start gap-4">
<div className="hidden shrink-0 sm:block">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#CFEDEB] text-[#0B1F1E] ring-1 ring-[#121214]/10">
<iconify-icon height="20" icon="solar:quote-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div>
<p className="font-[Fraunces] text-3xl font-normal leading-tight tracking-tight text-[#121214] sm:text-4xl">
                  “Every doodle is a window into the subconscious, a visual dance where the pen leads and the heart follows.”
                </p>
<div className="mt-8 flex items-center gap-3">
<span className="h-px w-10 bg-[#121214]/15"></span>
<p className="font-[Inter] text-sm font-medium text-[#0E6F6A]">Denise Taillefer</p>
<span className="h-px w-10 bg-[#121214]/15"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative scroll-mt-24" id="studio">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<p className="text-xs font-medium tracking-[0.22em] text-[#121214]/55">STUDIO INVITE</p>
<h2 className="mt-4 font-[Fraunces] text-3xl font-normal tracking-tight text-[#121214] sm:text-4xl">
              Enter the Studio
            </h2>
<p className="mt-5 max-w-xl font-[Inter] text-sm font-light leading-relaxed text-[#121214]/70 sm:text-base">
              Join the Collector’s Club for early releases, studio insights, and private gallery previews.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[#121214]/55">
<div className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Drop alerts</span>
</div>
<span className="text-[#121214]/20">|</span>
<div className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Studio notes</span>
</div>
<span className="text-[#121214]/20">|</span>
<div className="inline-flex items-center gap-2">
<iconify-icon height="18" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-[Inter] font-light">Private previews</span>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-3xl bg-white ring-1 ring-[#121214]/10 shadow-[0_24px_60px_rgba(18,18,20,0.08)]">
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between gap-6">
<div>
<p className="font-[Inter] text-sm font-medium text-[#121214]">Collector’s Club</p>
<p className="mt-1 font-[Inter] text-xs font-light text-[#121214]/60">Minimal emails. Maximum atmosphere.</p>
</div>
<div className="hidden rounded-full border border-[#0E6F6A]/20 bg-[#CFEDEB] px-3 py-1 text-xs font-medium text-[#0B1F1E] sm:inline-flex">
                    Teal signal
                  </div>
</div>
<form className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center" onsubmit="event.preventDefault(); subscribe();">
<label className="sr-only" htmlFor="email">Email</label>
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#121214]/45">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<input className="w-full rounded-2xl border border-[#121214]/10 bg-[#FBFAF8] py-3 pl-11 pr-4 text-sm font-light text-[#121214] placeholder:text-[#121214]/40 outline-none transition focus:border-[#0E6F6A]/35 focus:ring-2 focus:ring-[#0E6F6A]/20" id="email" name="email" placeholder="Your email address" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E6F6A] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(14,111,106,0.22)] transition hover:shadow-[0_16px_36px_rgba(14,111,106,0.28)] focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/35 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" type="submit">
<span>Subscribe</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
<p aria-live="polite" className="mt-4 hidden text-xs font-light text-[#121214]/65" id="subscribeMsg" role="status"></p>
<div className="mt-7 border-t border-[#121214]/10 pt-5">
<div className="flex flex-col justify-between gap-3 text-xs text-[#121214]/55 sm:flex-row sm:items-center">
<p className="font-[Inter] font-light">By subscribing, you’ll receive studio updates and early access.</p>
<a className="inline-flex items-center gap-2 font-medium text-[#121214]/65 transition hover:text-[#0E6F6A]" href="#footer">
<span>Privacy</span>
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative" id="footer">
<div className="mx-auto max-w-7xl px-6 pb-10 pt-6">
<div className="border-t border-[#121214]/10 pt-8">
<div className="grid gap-10 md:grid-cols-12">
<div className="md:col-span-5">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium tracking-tight text-[#121214]">DA</span>
<span className="text-xs font-normal tracking-[0.18em] text-[#121214]/60">DOODLE ART BY DENISE TAILLEFER</span>
</div>
<p className="mt-4 max-w-md font-[Inter] text-xs font-light leading-relaxed text-[#121214]/55">
              A modern art studio experience—built for quiet intensity, bold color, and curated rhythm.
            </p>
</div>
<div className="md:col-span-7">
<div className="grid gap-8 sm:grid-cols-3">
<div className="grid gap-3 text-xs">
<p className="font-[Inter] font-medium text-[#121214]/75">Explore</p>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#gallery">Gallery</a>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#collections">Collections</a>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#process">Process</a>
</div>
<div className="grid gap-3 text-xs">
<p className="font-[Inter] font-medium text-[#121214]/75">Support</p>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">Shipping</a>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">Returns</a>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">Contact</a>
</div>
<div className="grid gap-3 text-xs">
<p className="font-[Inter] font-medium text-[#121214]/75">Studio</p>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#studio">Collector’s Club</a>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">Commissions</a>
<a className="font-[Inter] font-light text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">Licensing</a>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-4 border-t border-[#121214]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="font-[Inter] text-xs font-light text-[#121214]/50">© <span id="year"></span> Denise Taillefer. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">
<iconify-icon height="18" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Instagram</span>
</a>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[#121214]/55 transition hover:text-[#0E6F6A]" href="#">
<iconify-icon height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Newsletter</span>
</a>
</div>
</div>
</div>
</div>
</footer>

<div className="sr-only" id="gallery">Gallery</div>
<div className="sr-only" id="process">Process</div>

<div aria-label="Cart" aria-modal="true" className="fixed inset-0 z-50 hidden" id="cartDrawer" role="dialog">
<button aria-label="Close cart" className="absolute inset-0 bg-[#121214]/30" id="cartBackdrop" type="button"></button>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FBFAF8] shadow-[0_24px_60px_rgba(18,18,20,0.18)] ring-1 ring-[#121214]/10">
<div className="flex h-full flex-col">
<div className="flex items-center justify-between border-b border-[#121214]/10 px-6 py-5">
<div>
<p className="font-[Inter] text-xs font-medium tracking-[0.22em] text-[#121214]/55">CART</p>
<p className="mt-1 font-[Fraunces] text-2xl font-normal tracking-tight text-[#121214]">Your picks</p>
</div>
<button aria-label="Close cart" className="inline-flex items-center justify-center rounded-full border border-[#121214]/10 bg-white p-2 text-[#121214]/70 shadow-sm transition hover:border-[#0E6F6A]/25 hover:text-[#121214]" id="cartClose" type="button">
<iconify-icon height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-auto px-6 py-5">
<div className="grid gap-3" id="cartItems"></div>
<div className="hidden rounded-2xl border border-[#121214]/10 bg-white p-5" id="cartEmpty">
<p className="font-[Inter] text-sm font-medium text-[#121214]">Your cart is quiet.</p>
<p className="mt-2 font-[Inter] text-xs font-light text-[#121214]/60">Add a piece from Collector Favorites to begin.</p>
</div>
</div>
<div className="border-t border-[#121214]/10 px-6 py-5">
<div className="flex items-center justify-between text-sm">
<span className="font-[Inter] font-light text-[#121214]/70">Subtotal</span>
<span className="font-[Inter] font-medium text-[#121214]" id="cartSubtotal">$0</span>
</div>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0E6F6A] py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(14,111,106,0.22)] transition hover:shadow-[0_16px_36px_rgba(14,111,106,0.28)] focus:outline-none focus:ring-2 focus:ring-[#0E6F6A]/35 focus:ring-offset-2 focus:ring-offset-[#FBFAF8]" type="button">
<span>Checkout</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<p className="mt-3 font-[Inter] text-xs font-light text-[#121214]/55">Taxes and shipping calculated at checkout.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
