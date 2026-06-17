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



    const state = {
      cart: JSON.parse(localStorage.getItem("mi_cart") || "[]"),
      sortMode: "featured",
    };

    const els = {
      year: document.getElementById("year"),
      openMobile: document.getElementById("openMobile"),
      closeMobile: document.getElementById("closeMobile"),
      mobileBackdrop: document.getElementById("mobileBackdrop"),

      openCart: document.getElementById("openCart"),
      viewCartInline: document.getElementById("viewCartInline"),
      closeCart: document.getElementById("closeCart"),
      cartBackdrop: document.getElementById("cartBackdrop"),

      cartBadge: document.getElementById("cartBadge"),
      cartMeta: document.getElementById("cartMeta"),
      cartEmpty: document.getElementById("cartEmpty"),
      cartItems: document.getElementById("cartItems"),
      subtotal: document.getElementById("subtotal"),
      checkoutBtn: document.getElementById("checkoutBtn"),
      continueShopping: document.getElementById("continueShopping"),

      newsletterForm: document.getElementById("newsletterForm"),
      newsletterMsg: document.getElementById("newsletterMsg"),

      sortBtn: document.getElementById("sortBtn"),
      productGrid: document.getElementById("productGrid"),
    };

    const formatEUR = (n) => new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR" }).format(n);

    function saveCart() {
      localStorage.setItem("mi_cart", JSON.stringify(state.cart));
    }

    function cartCount() {
      return state.cart.reduce((a, i) => a + i.qty, 0);
    }

    function cartSubtotal() {
      return state.cart.reduce((a, i) => a + i.qty * i.price, 0);
    }

    function openDrawer(backdropEl) {
      backdropEl.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }

    function closeDrawer(backdropEl) {
      backdropEl.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }

    function updateCartUI() {
      const count = cartCount();
      els.cartBadge.textContent = count;
      els.cartMeta.textContent = `${count} item${count === 1 ? "" : "s"}`;
      els.subtotal.textContent = formatEUR(cartSubtotal());

      const hasItems = state.cart.length > 0;
      els.cartEmpty.classList.toggle("hidden", hasItems);
      els.cartItems.classList.toggle("hidden", !hasItems);
      els.checkoutBtn.disabled = !hasItems;

      if (!hasItems) {
        els.cartItems.innerHTML = "";
        return;
      }

      els.cartItems.innerHTML = state.cart.map((item) => `
        <div class="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-medium text-neutral-100 truncate">${item.name}</p>
              <p class="mt-1 text-xs text-neutral-400">${formatEUR(item.price)} • Each</p>
            </div>
            <button class="removeItem rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" data-id="${item.id}" aria-label="Remove">
              <iconify-icon icon="solar:trash-bin-minimalistic-linear" style="font-size: 1.2rem;" stroke-width="1.5"></iconify-icon>
            </button>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <div class="inline-flex items-center rounded-2xl border border-white/10 bg-neutral-950/50">
              <button class="qtyDown px-3 py-2 text-neutral-200 hover:bg-white/5 transition rounded-l-2xl" data-id="${item.id}" aria-label="Decrease quantity">
                <iconify-icon icon="solar:minus-linear" style="font-size: 1.1rem;" stroke-width="1.5"></iconify-icon>
              </button>
              <span class="px-4 py-2 text-sm text-neutral-100">${item.qty}</span>
              <button class="qtyUp px-3 py-2 text-neutral-200 hover:bg-white/5 transition rounded-r-2xl" data-id="${item.id}" aria-label="Increase quantity">
                <iconify-icon icon="solar:add-circle-linear" style="font-size: 1.1rem;" stroke-width="1.5"></iconify-icon>
              </button>
            </div>
            <p class="text-sm font-medium text-neutral-100">${formatEUR(item.qty * item.price)}</p>
          </div>
        </div>
      `).join("");

      els.cartItems.querySelectorAll(".qtyDown").forEach(btn => {
        btn.addEventListener("click", () => changeQty(btn.dataset.id, -1));
      });
      els.cartItems.querySelectorAll(".qtyUp").forEach(btn => {
        btn.addEventListener("click", () => changeQty(btn.dataset.id, 1));
      });
      els.cartItems.querySelectorAll(".removeItem").forEach(btn => {
        btn.addEventListener("click", () => removeItem(btn.dataset.id));
      });
    }

    function addToCart(id, name, price) {
      const existing = state.cart.find(i => i.id === id);
      if (existing) existing.qty += 1;
      else state.cart.push({ id, name, price: Number(price), qty: 1 });
      saveCart();
      updateCartUI();
    }

    function changeQty(id, delta) {
      const item = state.cart.find(i => i.id === id);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
      saveCart();
      updateCartUI();
    }

    function removeItem(id) {
      state.cart = state.cart.filter(i => i.id !== id);
      saveCart();
      updateCartUI();
    }

    function initAddButtons() {
      document.querySelectorAll(".addToCart").forEach(btn => {
        btn.addEventListener("click", () => {
          addToCart(btn.dataset.id, btn.dataset.name, btn.dataset.price);
          openDrawer(els.cartBackdrop);
        });
      });
    }

    function initDrawerControls() {
      els.openMobile?.addEventListener("click", () => openDrawer(els.mobileBackdrop));
      els.closeMobile?.addEventListener("click", () => closeDrawer(els.mobileBackdrop));
      els.mobileBackdrop?.addEventListener("click", (e) => {
        if (e.target === els.mobileBackdrop || e.target === els.mobileBackdrop.firstElementChild) closeDrawer(els.mobileBackdrop);
      });

      const openCart = () => { updateCartUI(); openDrawer(els.cartBackdrop); };
      els.openCart?.addEventListener("click", openCart);
      els.viewCartInline?.addEventListener("click", openCart);
      els.closeCart?.addEventListener("click", () => closeDrawer(els.cartBackdrop));
      els.continueShopping?.addEventListener("click", () => closeDrawer(els.cartBackdrop));
      els.cartBackdrop?.addEventListener("click", (e) => {
        if (e.target === els.cartBackdrop || e.target === els.cartBackdrop.firstElementChild) closeDrawer(els.cartBackdrop);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeDrawer(els.cartBackdrop);
          closeDrawer(els.mobileBackdrop);
        }
      });
    }

    function initNewsletter() {
      els.newsletterForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        els.newsletterMsg.textContent = `Subscribed: ${email}. Welcome to private drops.`;
        els.newsletterForm.reset();
      });
    }

    function initSort() {
      const getCards = () => Array.from(els.productGrid.querySelectorAll("article"));

      function getPriceFromCard(card) {
        const priceText = card.querySelector("p.text-sm.font-medium.text-neutral-100")?.textContent || "€0";
        const num = Number(priceText.replace(/[^0-9.]/g, ""));
        return isNaN(num) ? 0 : num;
      }

      els.sortBtn?.addEventListener("click", () => {
        const next = state.sortMode === "featured" ? "price_asc" : state.sortMode === "price_asc" ? "price_desc" : "featured";
        state.sortMode = next;

        let label = "Featured";
        if (next === "price_asc") label = "Price: Low to High";
        if (next === "price_desc") label = "Price: High to Low";
        els.sortBtn.innerHTML = `
          <iconify-icon icon="solar:sort-linear" style="font-size: 1.1rem;" stroke-width="1.5"></iconify-icon>
          Sort: ${label}
        `;

        const cards = getCards();
        const frag = document.createDocumentFragment();

        if (next === "featured") {
          cards.sort((a, b) => Number(a.dataset.idx || 0) - Number(b.dataset.idx || 0));
        } else if (next === "price_asc") {
          cards.sort((a, b) => getPriceFromCard(a) - getPriceFromCard(b));
        } else {
          cards.sort((a, b) => getPriceFromCard(b) - getPriceFromCard(a));
        }

        cards.forEach(c => frag.appendChild(c));
        els.productGrid.appendChild(frag);
      });

      // store original order
      getCards().forEach((card, idx) => card.dataset.idx = idx);
    }

    function initCmdK() {
      document.addEventListener("keydown", (e) => {
        const isCmdK = (e.key.toLowerCase() === "k") && (e.metaKey || e.ctrlKey);
        if (!isCmdK) return;
        e.preventDefault();
        const input = document.getElementById("searchInput");
        input?.focus();
      });
    }

    function initCheckout() {
      els.checkoutBtn?.addEventListener("click", () => {
        const total = formatEUR(cartSubtotal());
        els.checkoutBtn.textContent = "Processing...";
        setTimeout(() => {
          alert(`Checkout demo\n\nSubtotal: ${total}\n\nIntegrate your payment provider to complete.`);
          els.checkoutBtn.textContent = "Checkout";
        }, 450);
      });
    }

    function initHeroCTA() {
      document.getElementById("shopNow")?.addEventListener("click", () => {
        document.getElementById("new")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    function init() {
      els.year.textContent = new Date().getFullYear();
      initDrawerControls();
      initAddButtons();
      initNewsletter();
      initSort();
      initCmdK();
      initCheckout();
      initHeroCTA();
      updateCartUI();
    }

    init();
  
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
      <div className="top-0 w-full h-screen -z-10 bg-cover bg-center mix-blend-normal absolute" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/774c907c-76ea-4322-ac02-fb7696eee62e_3840w.webp?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="border-b border-white/10 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
<p className="text-xs text-neutral-300">
        Complimentary shipping on orders over <span className="text-neutral-100 font-medium">€150</span>
</p>
<div className="flex items-center gap-4">
<button className="hidden sm:inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-neutral-100 transition">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
          EN / EUR
        </button>
<button className="inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-neutral-100 transition">
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
          Support
        </button>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-3">
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-100 hover:bg-white/10 transition lg:hidden" id="openMobile">
<iconify-icon className="" height="19" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{fontSize: '1.25rem', color: 'rgb(245, 245, 245)'}} width="19"></iconify-icon>
</button>
<a className="group inline-flex items-baseline gap-2" href="#">
<span className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\', \'Segoe UI Emoji\''}}>MONARCH WORLD</span>
<span className="hidden sm:inline text-xs text-neutral-400 group-hover:text-neutral-300 transition" style={{letterSpacing: '-0.01em'}}>Luxury Store</span>
</a>
</div>

<nav className="hidden lg:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-neutral-100 transition" href="#new">New</a>
<a className="hover:text-neutral-100 transition" href="#women">Women</a>
<a className="hover:text-neutral-100 transition" href="#men">Men</a>
<a className="hover:text-neutral-100 transition" href="#accessories">Accessories</a>
<a className="hover:text-neutral-100 transition" href="#collections">Collections</a>
<a className="hover:text-neutral-100 transition" href="#sale">Sale</a>
</nav>

<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<input className="w-56 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none" id="searchInput" placeholder="Search leather, watches, bags..."/>
</div>
<button aria-label="Search" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button aria-label="Account" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
<svg className="font-sans" data-icon-set="solar" data-solar="user-linear" height="19" style={{fontSize: '1.25rem', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4"></circle><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path></g></svg>
</button>
<button aria-label="Cart" className="relative inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" id="openCart">
<iconify-icon icon="solar:bag-2-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white text-neutral-950 text-xs font-medium px-1" id="cartBadge">0</span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 hidden" id="mobileBackdrop">
<div className="absolute inset-0 bg-black/60"></div>
<aside className="absolute left-0 top-0 h-full w-[85%] max-w-sm border-r border-white/10 bg-neutral-950">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
<div className="inline-flex items-baseline gap-2">
<span className="font-semibold tracking-tight text-lg" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\', \'Segoe UI Emoji\''}}>MI</span>
<span className="text-xs text-neutral-400" style={{letterSpacing: '-0.01em'}}>Menu</span>
</div>
<button aria-label="Close menu" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" id="closeMobile">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none" placeholder="Search products..."/>
</div>
<div className="mt-4 space-y-2 text-sm">
<a className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10 transition" href="#new">New Arrivals</a>
<a className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10 transition" href="#women">Women</a>
<a className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10 transition" href="#men">Men</a>
<a className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10 transition" href="#accessories">Accessories</a>
<a className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10 transition" href="#collections">Collections</a>
<a className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-200 hover:bg-white/10 transition" href="#sale">Sale</a>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
<p className="text-xs text-neutral-300">Member benefits</p>
<p className="mt-1 text-sm text-neutral-100 font-medium">Priority access • Private drops • Extended returns</p>
<button className="mt-3 w-full rounded-xl bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition">
            Join MI Club
          </button>
</div>
</div>
</aside>
</div>

<main className="">

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_50%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%)]"></div>
<div className="absolute inset-0 bg-neutral-950"></div>
<div className="absolute inset-0 opacity-80 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]"></div>
</div>
<div className="sm:px-6 sm:py-16 lg:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative">
<div className="grid items-center gap-10 lg:grid-cols-12">
<div className="lg:col-span-6">
<div className="inline-flex text-xs text-neutral-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Winter now live Limited pieces</div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-neutral-100 tracking-tight mt-5" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
              Luxury essentials, curated with restraint.
            </h1>
<p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-300 leading-relaxed">
              Discover leather goods, watches, and modern tailoring crafted for longevity. Quiet design, precise details, and a seamless shopping experience.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="hover:bg-neutral-200 transition text-sm font-medium text-neutral-950 bg-white rounded-2xl pt-3 pr-5 pb-3 pl-5" id="shopNow">
                Shop New Arrivals
              </button>
<button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-white/10 transition">
                Explore Collections
              </button>
</div>
<div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-400">Craft</p>
<p className="mt-1 text-sm font-medium text-neutral-100">Premium materials</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-400">Delivery</p>
<p className="mt-1 text-sm font-medium text-neutral-100">48h dispatch</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-400">Service</p>
<p className="mt-1 text-sm font-medium text-neutral-100">Concierge support</p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">Featured</p>
<p className="mt-1 text-lg font-medium tracking-tight text-neutral-100">Signature Leather Bag</p>
<p className="mt-1 text-sm text-neutral-300">Full-grain, minimalist hardware</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:bag-4-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-200 font-medium">€490</p>
<button className="addToCart inline-flex gap-2 hover:bg-neutral-200 transition text-xs font-medium text-neutral-950 bg-white rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" data-id="bag" data-name="Luxury Leather Bag" data-price="490">
<iconify-icon className="" height="15" icon="solar:cart-plus-linear" strokeWidth="1.5" style={{fontSize: '1rem', color: 'rgb(10, 10, 10)'}} width="15"></iconify-icon>
                      Add Luxury Leather Bag
                    </button>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">New</p>
<p className="mt-1 text-lg font-medium tracking-tight text-neutral-100">Chrono Steel Watch</p>
<p className="mt-1 text-sm text-neutral-300">Brushed finish, sapphire glass</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon className="" height="21" icon="solar:watch-square-linear" strokeWidth="1.5" style={{fontSize: '1.35rem', color: 'rgb(245, 245, 245)'}} width="21"></iconify-icon>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<p className="text-sm text-neutral-200 font-medium">€890</p>
<p className="mt-1 text-xs text-neutral-400">Luxury watch</p>
</div>
<button className="addToCart inline-flex items-center gap-2 rounded-xl bg-white text-neutral-950 px-3 py-2 text-xs font-medium hover:bg-neutral-200 transition" data-id="watch" data-name="Chrono Steel Watch" data-price="890">
<iconify-icon className="" height="15" icon="solar:watch-square-linear" strokeWidth="1.5" style={{fontSize: '1rem', color: 'rgb(10, 10, 10)'}} width="15"></iconify-icon>
                      Add
                    </button>
</div>
</div>
</div>
<div className="sm:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6">
<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-xs text-neutral-400">Collection</p>
<p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                      The Quiet Wardrobe
                    </p>
<p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                      Structured tailoring, soft knits, and refined accessories — designed to elevate everyday wear.
                    </p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-white/10 transition">
                    View lookbook
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-4 rounded-3xl border border-white/10 bg-neutral-950/40 p-5">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Authenticity guaranteed</p>
<p className="text-xs text-neutral-400">Secure checkout and easy returns within 30 days</p>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                    Encrypted
                  </span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<iconify-icon icon="solar:delivery-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
                    Express
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="collections">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\', \'Segoe UI Emoji\''}}>
            Shop by category
          </h2>
<p className="mt-2 text-sm text-neutral-400">Refined selections with subtle, modern silhouettes.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-neutral-100 transition" href="#new">
          View all
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<a className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" href="#women">
<div className="flex items-center justify-between">
<p className="text-lg font-medium tracking-tight text-neutral-100">Women</p>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-200" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Dresses, knits, tailored outerwear</p>
</a>
<a className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" href="#men">
<div className="flex items-center justify-between">
<p className="text-lg font-medium tracking-tight text-neutral-100">Men</p>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-200" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Coats, shirts, premium denim</p>
</a>
<a className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" href="#accessories">
<div className="flex items-center justify-between">
<p className="text-lg font-medium tracking-tight text-neutral-100">Accessories</p>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-200" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Bags, belts, sunglasses</p>
</a>
<a className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" href="#new">
<div className="flex items-center justify-between">
<p className="text-lg font-medium tracking-tight text-neutral-100">Watches</p>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-200" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Steel, leather, minimal dials</p>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" id="new">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">New arrivals</h2>
<p className="mt-2 text-sm text-neutral-400">A small edit of pieces we’d keep forever.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 transition" id="sortBtn">
<iconify-icon icon="solar:sort-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
            Sort: Featured
          </button>
<button className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition" id="viewCartInline">
<iconify-icon icon="solar:bag-2-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
            View cart
          </button>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" id="productGrid">

<article className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" data-idx="0">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">Leather</p>
<h3 className="mt-1 text-lg font-medium tracking-tight text-neutral-100">Slim Wallet</h3>
<p className="mt-1 text-sm text-neutral-400">Minimal profile, soft grain</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-sm font-medium text-neutral-100">€120</p>
<button className="addToCart inline-flex items-center gap-2 rounded-xl bg-white text-neutral-950 px-3 py-2 text-xs font-medium hover:bg-neutral-200 transition" data-id="wallet" data-name="Slim Wallet" data-price="120">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
              Add
            </button>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" data-idx="1">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">Tailoring</p>
<h3 className="mt-1 text-lg font-medium tracking-tight text-neutral-100">Wool Overcoat</h3>
<p className="mt-1 text-sm text-neutral-400">Structured, quiet finish</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:coat-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-sm font-medium text-neutral-100">€620</p>
<button className="addToCart inline-flex items-center gap-2 rounded-xl bg-white text-neutral-950 px-3 py-2 text-xs font-medium hover:bg-neutral-200 transition" data-id="overcoat" data-name="Wool Overcoat" data-price="620">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
              Add
            </button>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" data-idx="2">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">Accessories</p>
<h3 className="mt-1 text-lg font-medium tracking-tight text-neutral-100">Sculpted Belt</h3>
<p className="mt-1 text-sm text-neutral-400">Brushed buckle, matte leather</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:belt-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-sm font-medium text-neutral-100">€150</p>
<button className="addToCart inline-flex items-center gap-2 rounded-xl bg-white text-neutral-950 px-3 py-2 text-xs font-medium hover:bg-neutral-200 transition" data-id="belt" data-name="Sculpted Belt" data-price="150">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
              Add
            </button>
</div>
</article>
<article className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition" data-idx="3">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">Eyewear</p>
<h3 className="mt-1 text-lg font-medium tracking-tight text-neutral-100">Sunglasses</h3>
<p className="mt-1 text-sm text-neutral-400">Soft square, UV400</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:sunglasses-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-sm font-medium text-neutral-100">€180</p>
<button className="addToCart inline-flex items-center gap-2 rounded-xl bg-white text-neutral-950 px-3 py-2 text-xs font-medium hover:bg-neutral-200 transition" data-id="sunglasses" data-name="Sunglasses" data-price="180">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
              Add
            </button>
</div>
</article>
</div>

<div className="mt-10 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:card-2-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Flexible payments</p>
<p className="mt-1 text-sm text-neutral-400">Major cards supported. Transparent totals.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Gift-ready packaging</p>
<p className="mt-1 text-sm text-neutral-400">Minimal packaging, premium unboxing.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:chat-round-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Concierge</p>
<p className="mt-1 text-sm text-neutral-400">Sizing, styling, and product care guidance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-neutral-950">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8">
<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
<div className="">
<h3 className="sm:text-2xl text-xl font-semibold text-neutral-100 tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>
                Private drops and early access
              </h3>
<p className="mt-2 text-sm text-neutral-300 max-w-2xl">
                Subscribe for curated releases, restock notifications, and member-only offers. No noise.
              </p>
</div>
<form className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto" id="newsletterForm">
<div className="flex-1">
<label className="sr-only" htmlFor="email">Email</label>
<input className="placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm text-neutral-100 bg-neutral-950/60 w-full border-white/10 border rounded-2xl pt-3 pr-4 pb-3 pl-4" id="email" placeholder="you@domain.com" required="" type="email"/>
</div>
<button className="hover:bg-neutral-200 transition text-sm font-medium text-neutral-950 bg-white rounded-2xl pt-3 pr-5 pb-3 pl-5">
                Subscribe
              </button>
</form>
</div>
<p className="mt-4 text-xs text-neutral-400" id="newsletterMsg"></p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-neutral-950">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="inline-flex items-baseline gap-2">
<span className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\', \'Segoe UI Emoji\''}}>MONARCH WORLD </span>
<span className="text-xs text-neutral-500" style={{letterSpacing: '-0.01em'}}>Luxury Shopping</span>
</div>
<p className="mt-3 text-sm text-neutral-400 max-w-md">
            A refined store experience with a focus on timeless design, premium materials, and modern service.
          </p>
<div className="mt-5 flex items-center gap-2 text-xs text-neutral-400">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
              Worldwide shipping
            </span>
<span className="inline-flex items-center gap-2 bg-white/5 border-white/10 border rounded-full pt-2 pr-3 pb-2 pl-3">+91 9082977780</span>
</div>
</div>
<div className="lg:col-span-7 grid gap-6 sm:grid-cols-3">
<div>
<p className="text-sm font-medium text-neutral-200">Shop</p>
<div className="mt-3 space-y-2 text-sm text-neutral-400">
<a className="block hover:text-neutral-100 transition" href="#new">New arrivals</a>
<a className="block hover:text-neutral-100 transition" href="#women">Women</a>
<a className="block hover:text-neutral-100 transition" href="#men">Men</a>
<a className="block hover:text-neutral-100 transition" href="#accessories">Accessories</a>
</div>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200">Company</p>
<div className="mt-3 space-y-2 text-sm text-neutral-400">
<a className="block hover:text-neutral-100 transition" href="#">About</a>
<a className="block hover:text-neutral-100 transition" href="#">Sustainability</a>
<a className="block hover:text-neutral-100 transition" href="#">Care</a>
<a className="block hover:text-neutral-100 transition" href="#">Contact</a>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-200">Legal</p>
<div className="mt-3 space-y-2 text-sm text-neutral-400">
<a className="block hover:text-neutral-100 transition" href="#">Terms</a>
<a className="block hover:text-neutral-100 transition" href="#">Privacy</a>
<a className="block hover:text-neutral-100 transition" href="#">Returns</a>
<a className="block hover:text-neutral-100 transition" href="#">Cookies</a>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
<p className="text-xs text-neutral-500">© <span className="" id="year">2026</span> MONARCH WORLD. All rights reserved.</p>
<div className="flex items-center gap-2">
<button aria-label="Instagram" className="rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-300 hover:bg-white/10 hover:text-neutral-100 transition">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</button>
<button aria-label="Twitter" className="rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-300 hover:bg-white/10 hover:text-neutral-100 transition">
<iconify-icon icon="solar:paper-plane-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</button>
<button aria-label="YouTube" className="rounded-xl border border-white/10 bg-white/5 p-2 text-neutral-300 hover:bg-white/10 hover:text-neutral-100 transition">
<iconify-icon icon="solar:videocamera-linear" strokeWidth="1.5" style={{fontSize: '1.2rem'}}></iconify-icon>
</button>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="cartBackdrop">
<div className="absolute inset-0 bg-black/60"></div>
<aside className="absolute right-0 top-0 h-full w-full sm:w-[28rem] border-l border-white/10 bg-neutral-950">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
<div className="flex items-center gap-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-2">
<iconify-icon icon="solar:bag-2-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Your cart</p>
<p className="text-xs text-neutral-400" id="cartMeta">0 items</p>
</div>
</div>
<button aria-label="Close cart" className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" id="closeCart">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
<div className="flex h-[calc(100%-4rem)] flex-col">
<div className="flex-1 overflow-auto p-4">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6" id="cartEmpty">
<p className="text-sm font-medium text-neutral-100">Your cart is empty</p>
<p className="mt-2 text-sm text-neutral-400">Add a few pieces to begin checkout.</p>
<button className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition" id="continueShopping">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
              Continue shopping
            </button>
</div>
<div className="hidden space-y-3" id="cartItems"></div>
</div>
<div className="border-t border-white/10 p-4">
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between text-neutral-300">
<span>Subtotal</span>
<span id="subtotal">€0.00</span>
</div>
<div className="flex items-center justify-between text-neutral-400 text-xs">
<span>Shipping</span>
<span id="shipping">Calculated at checkout</span>
</div>
</div>
<button className="mt-4 w-full rounded-2xl bg-white text-neutral-950 px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-40 disabled:hover:bg-white" disabled="" id="checkoutBtn">
            Checkout
          </button>
<p className="mt-3 text-xs text-neutral-500">
            Secure checkout • 30-day returns
          </p>
</div>
</div>
</aside>
</div>


    </>
  );
}
