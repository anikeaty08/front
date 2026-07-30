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



      document.addEventListener('DOMContentLoaded', () => {
        // Initialize Lucide icons
        lucide.createIcons();
        
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Mobile menu toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobilePanel = document.getElementById('mobile-menu');
        mobileBtn?.addEventListener('click', () => {
          const isHidden = mobilePanel.classList.contains('hidden');
          mobilePanel.classList.toggle('hidden');
          mobileBtn.setAttribute('aria-expanded', String(isHidden));
        });

        // Filter popover
        const filterBtn = document.getElementById('filter-btn');
        const filterPop = document.getElementById('filter-pop');
        const clearFilters = document.getElementById('clear-filters');
        filterBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          filterPop.classList.toggle('hidden');
        });
        clearFilters?.addEventListener('click', () => {
          filterPop.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
        });
        document.addEventListener('click', (e) => {
          if (!filterPop?.classList.contains('hidden') && !filterPop.contains(e.target) && e.target !== filterBtn) {
            filterPop.classList.add('hidden');
          }
        });

        // Sort menu
        const sortBtn = document.getElementById('sort-btn');
        const sortMenu = document.getElementById('sort-menu');
        sortBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          sortMenu.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
          if (!sortMenu?.classList.contains('hidden') && !sortMenu.contains(e.target) && e.target !== sortBtn) {
            sortMenu.classList.add('hidden');
          }
        });

        // Search shortcut
        document.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            const desktopSearch = document.querySelector('header input[type="text"]');
            desktopSearch?.focus();
          }
        });

        // Cart drawer logic
        const cartBtn = document.getElementById('cart-btn');
        const cartCount = document.getElementById('cart-count');
        const cartDrawer = document.getElementById('cart-drawer');
        const cartPanel = cartDrawer?.querySelector('aside');
        const backdrop = document.getElementById('cart-backdrop');
        const cartClose = document.getElementById('cart-close');
        const cartContinue = document.getElementById('cart-continue');
        const cartEmpty = document.getElementById('cart-empty');
        const cartList = document.getElementById('cart-list');
        const cartItems = document.getElementById('cart-items');
        const cartSubtotal = document.getElementById('cart-subtotal');

        const state = {
          items: new Map(), // name -> { price, qty }
        };

        function formatCurrency(n) {
          return `$${(Math.max(0, n) || 0).toFixed(0)}`;
        }

        function getPriceFromCard(btn) {
          const card = btn.closest('.group');
          if (!card) return 0;
          const ps = Array.from(card.querySelectorAll('p'));
          for (const p of ps) {
            if (p.classList.contains('line-through')) continue;
            const m = p.textContent.trim().match(/\$([\d,.]+)/);
            if (m) return parseFloat(m[1].replace(/,/g, '')) || 0;
          }
          return 0;
        }

        function renderCart() {
          const entries = Array.from(state.items.entries());
          const total = entries.reduce((sum, [, v]) => sum + v.price * v.qty, 0);
          cartSubtotal.textContent = formatCurrency(total);

          if (entries.length === 0) {
            cartEmpty.classList.remove('hidden');
            cartList.classList.add('hidden');
            cartItems.innerHTML = '';
            return;
          }
          cartEmpty.classList.add('hidden');
          cartList.classList.remove('hidden');

          cartItems.innerHTML = '';
          for (const [name, { price, qty }] of entries) {
            const li = document.createElement('li');
            li.className = 'flex items-center gap-3 p-4';
            li.innerHTML = `
              <div class="h-14 w-14 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center text-black/50">
                <i data-lucide="package" class="w-5 h-5"></i>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-black">${name}</p>
                <p class="text-xs text-black/60">${formatCurrency(price)} · Size — Select at checkout</p>
                <div class="mt-2 inline-flex items-center gap-2">
                  <button class="qty-dec inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/5 hover:bg-black/5" data-item="${name}" aria-label="Decrease quantity">−</button>
                  <span class="min-w-[1.5rem] text-center text-sm">${qty}</span>
                  <button class="qty-inc inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/5 hover:bg-black/5" data-item="${name}" aria-label="Increase quantity">+</button>
                  <button class="remove ml-2 inline-flex items-center gap-1 h-8 px-2 rounded-lg border border-black/5 hover:bg-black/5 text-xs text-black/70" data-item="${name}">
                    <i data-lucide="trash-2" class="w-3 h-3"></i>
                    Remove
                  </button>
                </div>
              </div>
              <div class="text-sm font-medium">${formatCurrency(price * qty)}</div>
            `;
            cartItems.appendChild(li);
          }

          // Re-initialize icons for new content
          lucide.createIcons();

          // Bind quantity controls
          cartItems.querySelectorAll('.qty-inc').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.item, 1)));
          cartItems.querySelectorAll('.qty-dec').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.item, -1)));
          cartItems.querySelectorAll('.remove').forEach(b => b.addEventListener('click', () => removeItem(b.dataset.item)));
        }

        function changeQty(name, delta) {
          const item = state.items.get(name);
          if (!item) return;
          item.qty += delta;
          if (item.qty <= 0) state.items.delete(name);
          updateCount();
          renderCart();
        }

        function removeItem(name) {
          state.items.delete(name);
          updateCount();
          renderCart();
        }

        function updateCount() {
          const count = Array.from(state.items.values()).reduce((sum, it) => sum + it.qty, 0);
          cartCount.textContent = count;
          cartCount.classList.add('scale-110');
          setTimeout(() => cartCount.classList.remove('scale-110'), 150);
        }

        function openCart() {
          cartDrawer.classList.remove('hidden');
          requestAnimationFrame(() => {
            backdrop.classList.remove('opacity-0');
            cartPanel.classList.remove('translate-x-full');
          });
          document.body.style.overflow = 'hidden';
        }
        function closeCart() {
          backdrop.classList.add('opacity-0');
          cartPanel.classList.add('translate-x-full');
          setTimeout(() => cartDrawer.classList.add('hidden'), 200);
          document.body.style.overflow = '';
        }

        cartBtn?.addEventListener('click', openCart);
        cartClose?.addEventListener('click', closeCart);
        cartContinue?.addEventListener('click', closeCart);
        backdrop?.addEventListener('click', closeCart);
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            if (!filterPop?.classList.contains('hidden')) filterPop.classList.add('hidden');
            if (!sortMenu?.classList.contains('hidden')) sortMenu.classList.add('hidden');
            if (!cartDrawer?.classList.contains('hidden')) closeCart();
          }
        });

        // Add-to-cart buttons
        document.querySelectorAll('[data-add]').forEach(btn => {
          btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-add');
            const price = getPriceFromCard(btn);
            const existing = state.items.get(name);
            if (existing) {
              existing.qty += 1;
            } else {
              state.items.set(name, { price, qty: 1 });
            }
            updateCount();
            renderCart();
            openCart();
          });
        });
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
      

<div className="absolute -z-10 inset-0 overflow-hidden">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-full blur-3xl opacity-20" style={{background: `radial-gradient(1200px 600px at 50% 30%, #111827 10%, #9CA3AF 40%, transparent 70%)`}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="h-16 flex items-center justify-between gap-4">

<a className="text-base sm:text-lg font-medium tracking-tight text-black font-geist" href="#">KICKR</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#new">New</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#men">Men</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#women">Women</a>
<a className="text-sm text-black/60 hover:text-black transition font-geist" href="#kids">Kids</a>
<a className="text-sm text-rose-600 hover:text-rose-700 transition font-geist" href="#sale">Sale</a>
</nav>

<div className="hidden lg:flex flex-1 max-w-xl mx-6">
<div className="relative w-full">
<input className="w-full h-10 pr-10 pl-10 rounded-xl border border-black/5 bg-white/70 backdrop-blur placeholder-black/40 text-sm outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition" placeholder="Search sneakers, brands, colors…" type="text" />
<div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-black/50">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="absolute right-2 inset-y-0 my-auto inline-flex items-center justify-center h-7 px-2 rounded-lg bg-black/5 text-xs text-black/60 hover:text-black hover:bg-black/10 transition font-geist">⌘K</button>
</div>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 px-3 text-sm transition">
<span className="hidden md:inline font-geist">Sign in</span>
<span className="md:hidden font-geist">Account</span>
</button>
<button aria-label="Wishlist" className="hidden sm:inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 w-9 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button aria-label="Cart" className="relative inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 w-9 transition" id="cart-btn">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 min-w-[16px] px-1 rounded-full bg-black text-white text-[10px] leading-none font-geist" id="cart-count">0</span>
</button>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 h-9 w-9 transition" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden pb-3">
<div className="relative">
<input className="w-full h-10 pr-10 pl-10 rounded-xl border border-black/5 bg-white/70 backdrop-blur placeholder-black/40 text-sm outline-none focus:ring-2 focus:ring-black/5 focus:border-black/10 transition" placeholder="Search sneakers, brands, colors…" type="text" />
<div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-black/50">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-black/5 bg-white/80 backdrop-blur" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 sm:px-8 py-3">
<nav className="grid grid-cols-2 gap-2">
<a className="text-sm px-3 py-2 rounded-lg border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#new">New</a>
<a className="text-sm px-3 py-2 rounded-lg border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#men">Men</a>
<a className="text-sm px-3 py-2 rounded-lg border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#women">Women</a>
<a className="text-sm px-3 py-2 rounded-lg border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#kids">Kids</a>
<a className="text-sm px-3 py-2 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition font-geist" href="#sale">Sale</a>
<a className="text-sm px-3 py-2 rounded-lg border border-black/5 hover:bg-black/5 text-black/70 hover:text-black transition font-geist" href="#support">Support</a>
</nav>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6">
<h1 className="sm:text-6xl lg:text-7xl leading-[1.05] text-4xl text-black tracking-tighter font-geist" style={{}}>
  Sneakers that move with you
  <span className="block text-black/40 tracking-tighter font-geist" style={{}}>Premium comfort meets everyday style.</span>
</h1>
<div className="flex flex-wrap gap-3 mt-8 items-center">
<a className="group relative inline-flex items-center gap-2 text-sm font-medium text-white ring-1 ring-white/10 rounded-2xl font-geist" href="#new" style={{background: `linear-gradient(135deg, rgb(31, 41, 55) 0%, rgb(75, 85, 99) 100%)`, boxShadow: `rgb(75, 85, 99) 0px 0px 1.6em -0.6em inset`, height: `2.8em`, padding: `0.35em 3.3em 0.35em 1.2em`, letterSpacing: `0.02em`}}>
                Shop new arrivals
                <span className="absolute right-[0.3em] flex items-center justify-center h-[2.2em] w-[2.2em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] active:scale-95 bg-white rounded-[0.7em]" style={{boxShadow: `0.1em 0.1em 0.6em 0.2em #4b5563`}}>
<svg className="lucide lucide-arrow-right w-4 h-4 text-gray-600 transition-transform duration-300 group-hover:translate-x-[0.1em]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition font-geist" href="#featured">
                Explore best sellers
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-center gap-2 rounded-xl border border-black/5 bg-white/40 backdrop-blur px-3 py-2">
<span className="inline-flex h-5 w-5 items-center justify-center text-emerald-600">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</span>
<span className="text-xs text-black/70 font-geist">Free shipping over $75</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-black/5 bg-white/40 backdrop-blur px-3 py-2">
<span className="inline-flex h-5 w-5 items-center justify-center text-blue-600">
<svg className="lucide lucide-rotate-ccw w-4 h-4" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</span>
<span className="text-xs text-black/70 font-geist">30‑day returns</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-black/5 bg-white/40 backdrop-blur px-3 py-2">
<span className="inline-flex h-5 w-5 items-center justify-center text-purple-600">
<svg className="lucide lucide-headphones w-4 h-4" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</span>
<span className="text-xs text-black/70 font-geist">24/7 support</span>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative rounded-3xl overflow-hidden border border-black/5 bg-white/30 backdrop-blur">
<img alt="Sneaker hero" className="w-full h-[420px] sm:h-[520px] object-cover" src="/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/40 backdrop-blur px-3 py-1.5 border border-black/5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-black/70 font-geist">Fresh drop: AeroFlex V3</span>
</div>
<button className="inline-flex items-center gap-2 text-xs rounded-lg bg-white/40 backdrop-blur px-3 h-8 border border-black/5 text-black/70 hover:bg-white/60 transition font-geist">
                  Quick view
                  <svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 sm:px-8" id="new">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-black/5">
<div className="flex items-center gap-2">
<h2 className="text-2xl sm:text-3xl text-black tracking-tighter font-geist" style={{}}>New Arrivals</h2>
<span className="text-sm text-black/50 font-geist">Spring '25</span>
</div>
<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" id="filter-btn">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
              Filters
            </button>

<div className="hidden absolute right-0 mt-2 w-[320px] rounded-2xl border border-black/5 bg-white shadow-xl p-4" id="filter-pop">
<div className="flex items-center justify-between">
<h3 className="text-sm text-black/70 font-geist">Refine</h3>
<button className="text-xs text-black/60 hover:text-black underline decoration-dotted font-geist" id="clear-filters">Clear all</button>
</div>
<div className="mt-4 space-y-4">

<div>
<p className="text-xs text-black/60 mb-2 font-geist">Size</p>
<div className="flex flex-wrap gap-2">

<label className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-black/5 bg-black/5 text-xs text-black/70 cursor-pointer select-none">
<input className="peer appearance-none h-0 w-0" type="checkbox" />
<span className="peer-checked:text-black peer-checked:bg-white peer-checked:border-black/10 px-0 font-geist">7</span>
</label>
<label className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-black/5 bg-black/5 text-xs text-black/70 cursor-pointer select-none">
<input className="peer appearance-none h-0 w-0" type="checkbox" />
<span className="peer-checked:text-black peer-checked:bg-white peer-checked:border-black/10 px-0 font-geist">8</span>
</label>
<label className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-black/5 bg-black/5 text-xs text-black/70 cursor-pointer select-none">
<input className="peer appearance-none h-0 w-0" type="checkbox" />
<span className="peer-checked:text-black peer-checked:bg-white peer-checked:border-black/10 px-0 font-geist">9</span>
</label>
<label className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-black/5 bg-black/5 text-xs text-black/70 cursor-pointer select-none">
<input className="peer appearance-none h-0 w-0" type="checkbox" />
<span className="peer-checked:text-black peer-checked:bg-white peer-checked:border-black/10 px-0 font-geist">10</span>
</label>
<label className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-black/5 bg-black/5 text-xs text-black/70 cursor-pointer select-none">
<input className="peer appearance-none h-0 w-0" type="checkbox" />
<span className="peer-checked:text-black peer-checked:bg-white peer-checked:border-black/10 px-0 font-geist">11</span>
</label>
</div>
</div>

<div>
<p className="text-xs text-black/60 mb-2 font-geist">Color</p>
<div className="flex items-center gap-2">
<button className="h-6 w-6 rounded-full ring-2 ring-black/5 bg-black"></button>
<button className="h-6 w-6 rounded-full ring-2 ring-black/5 bg-white border border-black/5"></button>
<button className="h-6 w-6 rounded-full ring-2 ring-black/5 bg-red-500"></button>
<button className="h-6 w-6 rounded-full ring-2 ring-black/5 bg-blue-500"></button>
<button className="h-6 w-6 rounded-full ring-2 ring-black/5 bg-emerald-500"></button>
</div>
</div>

<div>
<p className="text-xs text-black/60 mb-2 font-geist">Sort</p>
<div className="relative">
<button className="w-full h-9 px-3 rounded-lg border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition inline-flex items-center justify-between" id="sort-btn">
<span className="font-geist">Featured</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-10 mt-2 w-full rounded-xl border border-black/5 bg-white shadow-lg overflow-hidden" id="sort-menu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 font-geist">Featured</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 font-geist">Price: Low to High</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 font-geist">Price: High to Low</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 font-geist">Newest</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-black/5 font-geist">Best Rated</button>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full h-9 rounded-xl bg-black text-white text-sm hover:opacity-90 transition font-geist">Apply filters</button>
</div>
</div>
</div>
</div>

<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-xl border border-black/5 bg-white text-sm text-black/70 font-geist">Running</span>
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-xl border border-black/5 bg-white text-sm text-black/70 font-geist">Lifestyle</span>
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-xl border border-black/5 bg-white text-sm text-black/70 font-geist">Skate</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 sm:px-8" id="featured">
<div className="py-8 sm:py-10">
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="AirLite Runner" className="w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/516735eb-313e-4fc9-b07d-790cdd7c60a8_800w.jpg" />
<div className="absolute top-3 left-3 inline-flex items-center px-2.5 h-7 rounded-full bg-emerald-500/10 text-emerald-700 text-xs border border-emerald-500/20 font-geist">New</div>
<button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/60 border border-black/5 text-black/70 hover:text-black hover:bg-white/80 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<h3 className="text-base font-medium text-black tracking-tight font-geist">AirLite Runner</h3>
<p className="text-sm text-black/60 font-geist">Cloud Grey / White</p>
<div className="mt-2 flex items-center gap-1 text-amber-500">

<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-black/50 ml-1 font-geist">(128)</span>
</div>
</div>
<div className="shrink-0 text-right">
<p className="text-sm text-black/80 font-geist">$129</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-black border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-gray-300 border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-blue-500 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="AirLite Runner">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="Volt Glide" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/478eb063-e0ff-4dda-a410-b8706ad2018c_800w.jpg" />
<div className="absolute top-3 left-3 inline-flex items-center px-2.5 h-7 rounded-full bg-black text-white text-xs font-geist">Limited</div>
<button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/60 border border-black/5 text-black/70 hover:text-black hover:bg-white/80 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-black tracking-tight font-geist">Volt Glide</h3>
<p className="text-sm text-black/60 font-geist">Electric Blue / Neon</p>
<div className="mt-2 flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-black/50 ml-1 font-geist">(86)</span>
</div>
</div>
<div className="text-right">
<p className="text-sm text-black/80 font-geist">$149</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-blue-600 border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-yellow-400 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="Volt Glide">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="Street Classic" className="w-full h-64 object-cover" src="/assets/00189d5a-7f25-4559-935e-bbe4ea895a1a_800w.jpg" style={{transition: `outline 0.1s ease-in-out`}} />
<div className="absolute top-3 left-3 inline-flex items-center px-2.5 h-7 rounded-full bg-rose-500/10 text-rose-700 text-xs border border-rose-500/20 font-geist">Sale</div>
<button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/60 border border-black/5 text-black/70 hover:text-black hover:bg-white/80 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-base font-medium text-black tracking-tight font-geist">Street Classic</h3>
<p className="text-sm text-black/60 font-geist">Black / Gum</p>
</div>
<div className="text-right">
<p className="text-sm text-black/50 line-through font-geist">$99</p>
<p className="text-sm text-black/80 font-geist">$79</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-black border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-gray-200 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="Street Classic">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="Terra Trek" className="w-full h-96 object-cover" src="/assets/a0334f32-8e67-444f-bb8c-ef1ebc4a3a8f_800w.jpg" />
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-black tracking-tight font-geist">Terra Trek</h3>
<p className="text-sm text-black/60 font-geist">Olive / Beige</p>
</div>
<p className="text-sm text-black/80 font-geist">$139</p>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-lime-700 border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-amber-700 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="Terra Trek">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="AeroFlex V3" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute top-3 left-3 inline-flex items-center px-2.5 h-7 rounded-full bg-emerald-500/10 text-emerald-700 text-xs border border-emerald-500/20 font-geist">New</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-black tracking-tight font-geist">AeroFlex V3</h3>
<p className="text-sm text-black/60 font-geist">White / Volt</p>
</div>
<p className="text-sm text-black/80 font-geist">$135</p>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-white border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-lime-400 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="AeroFlex V3">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="Court Pro" className="w-full h-80 object-cover" src="/assets/250cac47-d1b1-42fe-8c29-60c9a4c55da3_800w.jpg" />
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-black tracking-tight font-geist">Court Pro</h3>
<p className="text-sm text-black/60 font-geist">White / Navy</p>
</div>
<p className="text-sm text-black/80 font-geist">$119</p>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-white border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-blue-900 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="Court Pro">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="Urban Glide" className="w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3fb481e7-0f3b-4271-bd7a-42359babb4a7_800w.jpg" />
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-black tracking-tight font-geist">Urban Glide</h3>
<p className="text-sm text-black/60 font-geist">Grey / Black</p>
</div>
<p className="text-sm text-black/80 font-geist">$109</p>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-gray-400 border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-black border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="Urban Glide">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group break-inside-avoid block rounded-3xl overflow-hidden bg-white/40 backdrop-blur border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300">
<div className="relative">
<img alt="TrailGrip" className="w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be9dc24e-7e77-46df-934f-a3c3882d7858_800w.jpg" />
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-black tracking-tight font-geist">TrailGrip</h3>
<p className="text-sm text-black/60 font-geist">Charcoal / Lava</p>
</div>
<p className="text-sm text-black/80 font-geist">$145</p>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-neutral-800 border border-black/5"></span>
<span className="h-5 w-5 rounded-full ring-2 ring-white bg-orange-600 border border-black/5"></span>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" data-add="TrailGrip">
                  Add to cart
                  <svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-2">
<button aria-label="Prev" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 transition">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 bg-black text-white transition font-geist">1</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 transition font-geist">2</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 transition font-geist">3</button>
<button aria-label="Next" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 transition">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 sm:px-8" id="about">
<div className="py-14 sm:py-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
<div className="md:col-span-3">
<h2 className="text-lg font-medium text-black tracking-tight font-geist">Our story</h2>
</div>
<div className="md:col-span-9">
<p className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-black tracking-tighter font-geist" style={{}}>
              We curate performance and lifestyle sneakers that feel as good as they look—built for daily miles, city commutes, and weekend sessions.
            </p>
<p className="leading-relaxed text-lg text-black/60 mt-8 font-geist">
              From independent labels to iconic names, we bring you a considered selection with clear sizing, fair pricing, and fast shipping. Every pair we feature goes through wear‑tests and quality checks.
            </p>
</div>
</div>
<div className="mt-12 rounded-2xl overflow-hidden border border-black/5">
<img alt="Store studio" className="w-full h-64 sm:h-[380px] lg:h-[520px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/583b7438-312a-4a71-a636-cc8c7cb78548_3840w.jpg" style={{outline: `rgb(245, 158, 11) solid 2px`, outlineOffset: `2px`, transition: `outline 0.1s ease-in-out`}} />
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-10">
<div className="relative overflow-hidden bg-white border border-black/5 rounded-3xl">
<div className="relative z-10 p-8 sm:p-12 md:p-16">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-black/5">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-badge-check w-5 h-5 text-black/80" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-2xl text-black tracking-tighter font-geist" style={{}}>KICKR — Sneakers & Drops</h3>
</div>
<p className="text-black/70 max-w-3xl font-geist">Discover curated sneakers from top and emerging brands. Fast shipping, easy returns, and support that actually helps.</p>
<div className="mt-6 rounded-2xl border border-black/5 bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-5 sm:p-8 md:p-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 px-2.5 py-1 text-xs font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Free shipping over $75
                    </div>
<h4 className="text-white font-semibold tracking-tight font-geist">Stay in the loop</h4>
<ul className="space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2 font-geist">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Weekly drops and early access.
                      </li>
<li className="flex items-start gap-2 font-geist">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Members‑only pricing on selects.
                      </li>
<li className="flex items-start gap-2 font-geist">
<svg className="lucide lucide-check w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        One email a week. No spam.
                      </li>
</ul>
<div className="pt-2">
<form className="flex items-center gap-2">
<input className="w-full h-10 px-3 rounded-xl border border-white/20 bg-black/20 text-sm placeholder-white/40 text-white outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 backdrop-blur" placeholder="you@domain.com" required type="email" />
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl ring-1 ring-white/20 text-sm text-white bg-black/20 hover:bg-white hover:text-black transition font-geist">
                          Join
                          <svg className="lucide lucide-send w-3 h-3" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h5 className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium font-geist">Shop</h5>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition font-geist" href="#new">New Arrivals</a></li>
<li><a className="hover:text-white transition font-geist" href="#men">Men</a></li>
<li><a className="hover:text-white transition font-geist" href="#women">Women</a></li>
<li><a className="hover:text-white transition font-geist" href="#sale">Sale</a></li>
</ul>
</div>
<div>
<h5 className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium font-geist">Support</h5>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition font-geist" href="#support">Help Center</a></li>
<li><a className="hover:text-white transition font-geist" href="#shipping">Shipping & Returns</a></li>
<li><a className="hover:text-white transition font-geist" href="#size-guide">Size Guide</a></li>
<li><a className="hover:text-white transition font-geist" href="#contact">Contact us</a></li>
</ul>
</div>
<div>
<h5 className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium font-geist">Company</h5>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition font-geist" href="#about">About</a></li>
<li><a className="hover:text-white transition font-geist" href="#careers">Careers</a></li>
<li><a className="hover:text-white transition font-geist" href="#sustainability">Sustainability</a></li>
<li><a className="hover:text-white transition font-geist" href="#press">Press</a></li>
</ul>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3 text-sm text-black/60">
<span className="font-geist">© <span className="font-geist" id="year">2025</span> KICKR</span>
<span className="hidden sm:inline text-black/20 font-geist">|</span>
<a className="hover:text-black transition font-geist" href="#privacy">Privacy</a>
<span className="text-black/20 font-geist">/</span>
<a className="hover:text-black transition font-geist" href="#terms">Terms</a>
</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://instagram.com" rel="noreferrer" target="_blank">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter/X" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="16" viewBox="0 0 16 16" width="16"><path d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://youtube.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="16" viewBox="0 0 24 24" width="16"><path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5v-7L16 12z"></path></svg>
</a>
</div>
</div>
</div>

<div className="pointer-events-none absolute -z-0 inset-0">
<div className="absolute -top-24 -left-16 h-56 w-56 rounded-full blur-3xl opacity-30" style={{background: `radial-gradient(110px 110px at 60% 60%, #111827, transparent)`}}></div>
<div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full blur-3xl opacity-30" style={{background: `radial-gradient(120px 120px at 40% 40%, #9CA3AF, transparent)`}}></div>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="cart-drawer">

<div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity" id="cart-backdrop"></div>

<aside aria-labelledby="cart-title" aria-modal="true" className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl border-l border-black/5 transform translate-x-full transition-transform" role="dialog">
<div className="flex h-full flex-col">
<header className="flex items-center justify-between px-5 h-14 border-b border-black/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<h3 className="text-sm font-medium tracking-tight font-geist" id="cart-title">Your cart</h3>
</div>
<button aria-label="Close cart" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 bg-white text-black/70 hover:bg-black/5 transition" id="cart-close">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</header>
<div className="flex-1 px-6 py-10 text-center text-black/60" id="cart-empty">
<div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-black/60">
<svg className="lucide lucide-package-open w-5 h-5" data-lucide="package-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-9"></path><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"></path></svg>
</div>
<p className="text-sm font-geist">Your cart is empty.</p>
<p className="text-xs text-black/50 mt-1 font-geist">Add a pair to get started.</p>
</div>
<div className="flex-1 overflow-y-auto hidden" id="cart-list">
<ul className="divide-y divide-black/5" id="cart-items"></ul>
</div>
<footer className="border-t border-black/5 p-5">
<div className="flex items-center justify-between text-sm">
<span className="text-black/60 font-geist">Subtotal</span>
<span className="font-medium tracking-tight font-geist" id="cart-subtotal">$0</span>
</div>
<p className="mt-1 text-xs text-black/50 font-geist">Taxes and shipping calculated at checkout.</p>
<div className="mt-4 flex gap-2">
<button className="flex-1 h-10 rounded-xl border border-black/5 bg-white text-sm text-black/70 hover:bg-black/5 transition font-geist" id="cart-continue">Continue shopping</button>
<button className="flex-1 h-10 rounded-xl bg-black text-white text-sm hover:opacity-90 transition font-geist">Checkout</button>
</div>
</footer>
</div>
</aside>
</div>



    </>
  );
}
