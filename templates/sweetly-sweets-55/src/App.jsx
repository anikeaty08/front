import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icon style (Solar Linear, 1.5 stroke)
    (function applyIconStroke(){
      const setStroke = () => {
        document.querySelectorAll('iconify-icon').forEach(ic => ic.setAttribute('stroke-width', '1.5'));
      };
      const obs = new MutationObserver(setStroke);
      obs.observe(document.body, { childList: true, subtree: true });
      setStroke();
    })();

    // Nav button styling helper (kept as classes in markup via JS injection)
    (function navBtnStyles(){
      document.querySelectorAll('.navbtn').forEach(() => {});
      // Add base styles to nav buttons by setting className only if not already present
      document.querySelectorAll('button.navbtn').forEach(btn => {
        if (!btn.dataset.styled) {
          btn.dataset.styled = "1";
          btn.className = btn.className.replace(/\s+/g,' ').trim();
          btn.className += " inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition";
        }
      });
    })();

    // Data
    const PRODUCTS = [
      { id: "assorted-box", name: "Assorted Celebration Box", desc: "12 pieces · mixed textures", price: 18.00, tag: "Gift-ready", accent: "from-rose-400/20 to-fuchsia-400/10", icon: "solar:gift-linear" },
      { id: "pistachio-barfi", name: "Pistachio Barfi", desc: "Nutty · soft · aromatic", price: 12.00, tag: "Popular", accent: "from-emerald-300/20 to-zinc-950/10", icon: "solar:leaf-linear" },
      { id: "rose-laddoo", name: "Rose Laddoo", desc: "Floral · buttery · delicate", price: 10.00, tag: "New", accent: "from-rose-300/20 to-zinc-950/10", icon: "solar:flower-linear" },
      { id: "honey-baklava", name: "Honey Baklava", desc: "Crisp layers · warm honey", price: 14.00, tag: "Crisp", accent: "from-amber-300/20 to-zinc-950/10", icon: "solar:cookie-linear" },
      { id: "cocoa-fudge", name: "Cocoa Fudge Bites", desc: "Deep cocoa · melt-in", price: 11.00, tag: "Rich", accent: "from-amber-200/15 to-zinc-950/10", icon: "solar:candy-linear" },
      { id: "saffron-kaju-katli", name: "Saffron Kaju Katli", desc: "Cashew · saffron finish", price: 16.00, tag: "Premium", accent: "from-yellow-200/15 to-zinc-950/10", icon: "solar:star-linear" },
    ];

    // State
    const state = {
      page: "home",
      cart: [],
      promo: { code: null, discountRate: 0 }, // on subtotal
      taxRate: 0.0825,
    };

    const money = (n) => `$${n.toFixed(2)}`;

    function load(){
      try {
        const saved = JSON.parse(localStorage.getItem("sweetly_state") || "{}");
        if (saved.cart && Array.isArray(saved.cart)) state.cart = saved.cart;
        if (saved.promo) state.promo = saved.promo;
      } catch {}
    }
    function save(){
      localStorage.setItem("sweetly_state", JSON.stringify({ cart: state.cart, promo: state.promo }));
    }

    // Routing
    function showPage(name){
      state.page = name;
      document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
      const el = document.getElementById(`page-${name}`);
      if (el) el.classList.remove("hidden");

      // Close mobile menu on nav
      document.getElementById("mobileMenu").classList.add("hidden");

      // Update nav active subtle state
      document.querySelectorAll("[data-nav]").forEach(btn => {
        const isActive = btn.dataset.nav === name;
        // Do not affect non-nav controls (like topbar support): only ones that are nav buttons or in header/footer
        if (btn.closest("nav") || btn.id === "menuBtn" || btn.closest("header") || btn.closest("footer") || btn.classList.contains("navbtn")) {
          btn.classList.toggle("border-rose-400/30", isActive);
          btn.classList.toggle("bg-rose-500/10", isActive);
        }
      });

      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Cart operations
    function getProduct(id){ return PRODUCTS.find(p => p.id === id); }

    function addToCart(id, qty=1){
      const existing = state.cart.find(i => i.id === id);
      if (existing) existing.qty += qty;
      else state.cart.push({ id, qty });
      save();
      renderAll();
    }

    function setQty(id, qty){
      const item = state.cart.find(i => i.id === id);
      if (!item) return;
      item.qty = Math.max(1, Math.min(99, qty));
      save();
      renderAll();
    }

    function removeFromCart(id){
      state.cart = state.cart.filter(i => i.id !== id);
      save();
      renderAll();
    }

    function clearCart(){
      state.cart = [];
      state.promo = { code: null, discountRate: 0 };
      save();
      renderAll();
    }

    function cartCount(){
      return state.cart.reduce((a, i) => a + i.qty, 0);
    }

    function calc(){
      const subtotal = state.cart.reduce((sum, i) => {
        const p = getProduct(i.id);
        return sum + (p ? p.price * i.qty : 0);
      }, 0);

      const discount = subtotal * (state.promo.discountRate || 0);
      const discountedSubtotal = Math.max(0, subtotal - discount);

      const shipping = discountedSubtotal >= 35 || discountedSubtotal === 0 ? 0 : 4.99;
      const tax = discountedSubtotal * state.taxRate;
      const total = discountedSubtotal + shipping + tax;

      return { subtotal, discount, discountedSubtotal, shipping, tax, total };
    }

    // Rendering
    function renderProducts(filter=""){
      const grid = document.getElementById("productGrid");
      if (!grid) return;

      const q = (filter || "").trim().toLowerCase();
      const items = PRODUCTS.filter(p => {
        if (!q) return true;
        return (
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        );
      });

      grid.innerHTML = items.map(p => `
        <article class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.10),transparent_55%)]"></div>

          <div class="relative flex items-start justify-between gap-3">
            <div class="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
              <iconify-icon icon="${p.icon}" style="font-size: 1.35rem;"></iconify-icon>
            </div>
            <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              ${p.tag}
            </span>
          </div>

          <div class="relative mt-4">
            <h3 class="text-base font-medium text-zinc-50">${p.name}</h3>
            <p class="mt-1 text-sm text-zinc-300">${p.desc}</p>

            <div class="mt-4 flex items-center justify-between gap-3">
              <div>
                <div class="text-xs text-zinc-400">Price</div>
                <div class="mt-1 text-sm font-medium text-zinc-100">${money(p.price)}</div>
              </div>

              <button class="addBtn rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-rose-500/15 hover:from-rose-400 hover:to-rose-600 transition"
                data-add="${p.id}">
                Add to cart
              </button>
            </div>

            <div class="mt-4 h-20 rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent}"></div>
          </div>
        </article>
      `).join("");

      // Ensure icon stroke applied for newly injected icons
      document.querySelectorAll('iconify-icon').forEach(ic => ic.setAttribute('stroke-width', '1.5'));

      grid.querySelectorAll("[data-add]").forEach(btn => {
        btn.addEventListener("click", => addToCart(btn.dataset.add, 1));
      });
    }

    function renderCart(){
      const list = document.getElementById("cartList");
      const empty = document.getElementById("cartEmpty");
      if (!list || !empty) return;

      const has = state.cart.length > 0;
      empty.classList.toggle("hidden", has);
      list.classList.toggle("hidden", !has);

      if (!has) {
        list.innerHTML = "";
        return;
      }

      list.innerHTML = state.cart.map(i => {
        const p = getProduct(i.id);
        if (!p) return "";
        const line = p.price * i.qty;

        return `
          <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-start gap-4">
                <div class="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
                  <iconify-icon icon="${p.icon}" style="font-size: 1.35rem;"></iconify-icon>
                </div>
                <div>
                  <div class="text-sm font-medium text-zinc-100">${p.name}</div>
                  <div class="mt-1 text-xs text-zinc-400">${p.desc}</div>
                  <div class="mt-2 text-sm font-medium text-zinc-50">${money(line)}</div>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-2 sm:justify-end">
                <div class="inline-flex items-center rounded-2xl border border-white/10 bg-zinc-950/40">
                  <button class="qtyBtn px-3 py-2 text-zinc-200 hover:text-white transition" aria-label="Decrease quantity" data-qty="${p.id}" data-delta="-1">−</button>
                  <div class="px-3 py-2 text-sm text-zinc-100 min-w-[2.5rem] text-center">${i.qty}</div>
                  <button class="qtyBtn px-3 py-2 text-zinc-200 hover:text-white transition" aria-label="Increase quantity" data-qty="${p.id}" data-delta="1">+</button>
                </div>
                <button class="removeBtn rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition"
                  data-remove="${p.id}">
                  Remove
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");

      document.querySelectorAll('iconify-icon').forEach(ic => ic.setAttribute('stroke-width', '1.5'));

      list.querySelectorAll("[data-qty]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.qty;
          const delta = parseInt(btn.dataset.delta, 10) || 0;
          const item = state.cart.find(x => x.id === id);
          if (!item) return;
          setQty(id, item.qty + delta);
        });
      });
      list.querySelectorAll("[data-remove]").forEach(btn => {
        btn.addEventListener("click", () => removeFromCart(btn.dataset.remove));
      });
    }

    function renderSummaries(){
      const c = calc();

      // Header count
      const cc = document.getElementById("cartCount");
      if (cc) cc.textContent = cartCount();

      // Cart summary
      const sumSubtotal = document.getElementById("sumSubtotal");
      const sumShipping = document.getElementById("sumShipping");
      const sumTax = document.getElementById("sumTax");
      const sumTotal = document.getElementById("sumTotal");
      if (sumSubtotal) sumSubtotal.textContent = money(c.discountedSubtotal);
      if (sumShipping) sumShipping.textContent = money(c.shipping);
      if (sumTax) sumTax.textContent = money(c.tax);
      if (sumTotal) sumTotal.textContent = money(c.total);

      // Checkout summary
      const coSubtotal = document.getElementById("coSubtotal");
      const coShipping = document.getElementById("coShipping");
      const coTax = document.getElementById("coTax");
      const coTotal = document.getElementById("coTotal");
      if (coSubtotal) coSubtotal.textContent = money(c.discountedSubtotal);
      if (coShipping) coShipping.textContent = money(c.shipping);
      if (coTax) coTax.textContent = money(c.tax);
      if (coTotal) coTotal.textContent = money(c.total);

      // Promo status
      const promoStatus = document.getElementById("promoStatus");
      if (promoStatus) {
        if (state.promo.discountRate > 0) {
          promoStatus.textContent = `Applied ${state.promo.code} — ${(state.promo.discountRate * 100).toFixed(0)}% off subtotal.`;
          promoStatus.className = "mt-2 text-xs text-emerald-300";
        } else {
          promoStatus.textContent = "One-time discount on subtotal.";
          promoStatus.className = "mt-2 text-xs text-zinc-400";
        }
      }
    }

    function renderCheckoutItems(){
      const wrap = document.getElementById("checkoutItems");
      if (!wrap) return;

      if (state.cart.length === 0) {
        wrap.innerHTML = `
          <div class="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
            <div class="text-sm font-medium text-zinc-100">No items to review</div>
            <div class="mt-1 text-xs text-zinc-400">Add sweets to your cart to continue.</div>
            <button class="mt-3 navbtn" data-nav="home">Browse sweets</button>
          </div>
        `;
        // restyle navbtn if injected
        document.querySelectorAll('button.navbtn').forEach(btn => {
          if (!btn.dataset.styled) {
            btn.dataset.styled = "1";
            btn.className = btn.className.replace(/\s+/g,' ').trim();
            btn.className += " inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition";
          }
        });
        wrap.querySelectorAll("[data-nav]").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.nav)));
        return;
      }

      wrap.innerHTML = state.cart.map(i => {
        const p = getProduct(i.id);
        if (!p) return "";
        return `
          <div class="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="text-sm font-medium text-zinc-100 truncate">${p.name}</div>
                <div class="mt-1 text-xs text-zinc-400">${i.qty} × ${money(p.price)}</div>
              </div>
              <div class="text-sm font-medium text-zinc-50">${money(p.price * i.qty)}</div>
            </div>
          </div>
        `;
      }).join("");
    }

    function renderAll(){
      renderSummaries();
      if (state.page === "home") renderProducts(getSearchQuery());
      if (state.page === "cart") renderCart();
      if (state.page === "checkout") renderCheckoutItems();

      // Keep year updated
      const year = document.getElementById("year");
      if (year) year.textContent = new Date().getFullYear();
    }

    // Search helpers
    function getSearchQuery(){
      const a = document.getElementById("searchInput");
      const b = document.getElementById("searchInputMobile");
      return (a && a.value) || (b && b.value) || "";
    }

    function syncSearchInputs(val){
      const a = document.getElementById("searchInput");
      const b = document.getElementById("searchInputMobile");
      if (a && a.value !== val) a.value = val;
      if (b && b.value !== val) b.value = val;
    }

    // Events
    function bind(){
      // Nav
      document.querySelectorAll("[data-nav]").forEach(btn => {
        btn.addEventListener("click", () => showPage(btn.dataset.nav));
      });

      // Mobile menu
      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }

      // Hero CTAs
      const shopBestBtn = document.getElementById("shopBestBtn");
      if (shopBestBtn) {
        shopBestBtn.addEventListener("click", () => {
          const best = document.getElementById("bestSelling");
          if (state.page !== "home") showPage("home");
          setTimeout(() => best?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        });
      }

      const addHeroBoxBtn = document.getElementById("addHeroBoxBtn");
      if (addHeroBoxBtn) addHeroBoxBtn.addEventListener("click", () => addToCart("assorted-box", 1));

      // Search (desktop + mobile)
      const si = document.getElementById("searchInput");
      const sim = document.getElementById("searchInputMobile");
      const onSearch = (e) => {
        const val = e.target.value || "";
        syncSearchInputs(val);
        if (state.page !== "home") showPage("home");
        renderProducts(val);
      };
      si?.addEventListener("input", onSearch);
      sim?.addEventListener("input", onSearch);

      // Cmd/Ctrl + K focus
      document.addEventListener("keydown", (e) => {
        const isMac = navigator.platform.toLowerCase().includes("mac");
        const mod = isMac ? e.metaKey : e.ctrlKey;
        if (mod && e.key.toLowerCase() === "k") {
          e.preventDefault();
          if (window.innerWidth >= 1024 si?.focus();
          else {
            mobileMenu?.classList.remove("hidden");
            sim?.focus();
          }
        }
      });

      // Cart controls
      document.getElementById("clearCartBtn")?.addEventListener("click", clearCart);
      document.getElementById("goCheckoutBtn")?.addEventListener("click", () => showPage("checkout"));

      // Login demo
      document.getElementById("fillDemoLogin")?.addEventListener("click", () => {
        const e = document.getElementById("loginEmail");
        const p = document.getElementById("loginPassword");
        if (e) e.value = "demo@sweetly.shop";
        if (p) p.value = "sweetlydemo";
        const s = document.getElementById("loginStatus");
        if (s) {
          s.textContent = "Demo credentials filled. (This is a UI demo—no real auth.)";
          s.className = "text-xs text-emerald-300";
        }
      });

      document.getElementById("loginForm")?.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const s = document.getElementById("loginStatus");
        if (s) {
          s.textContent = "Signed in (demo). You can now checkout.";
          s.className = "text-xs text-emerald-300";
        }
      });

      // Contact form
      document.getElementById("contactForm")addEventListener("submit", (ev) => {
        ev.preventDefault();
        const status = document.getElementById("contactStatus");
        const name = (document.getElementById("contactName")?.value || "").trim();
        const email = (document.getElementById("contactEmail")?.value || "").trim();
        const msg = (document.getElementById("contactMessage")?.value || "").trim();

        if (!email || !msg) {
          if (status) {
            status.textContent = "Please add your email and a message.";
            status.className = "text-xs text-rose-300";
          }
          return;
        }
        if (status) {
          status.textContent = `Thanks${name ? `, ${name}` : ""}! We received your message.`;
          status.className = "text-xs text-emerald-300";
        }
        ev.target.reset();
      });

      // Newsletter
      document.getElementById("newsBtn")?.addEventListener("click", () => {
        const email = (document.getElementById("newsEmail")?.value || "").trim();
        const status = document.getElementById("newsStatus");
        if (!email || !email.includes("@")) {
          if (status) {
            status.textContent = "Please enter a valid email.";
            status.className = "mt-2 text-xs text-rose-300";
          }
          return;
        }
        if (status) {
          status.textContent = "You’re in! Welcome to sweet updates.";
          status.className = "mt-2 text-xs text-emerald-300";
        }
      });

      // Checkout form
      document.getElementById("checkoutForm")?.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const status = document.getElementById("checkoutStatus");
        if (state.cart.length === 0) {
          if (status) {
            status.textContent = "Your cart is empty—add sweets before placing an order.";
            status.className = "text-xs text-rose-300";
          }
          return;
        }
        const req = ["coFirst","coLast","coEmail","coAddress","coCity","coState","coZip"];
        const missing = req.filter(id => !(document.getElementById(id)?.value || "").trim());
        if (missing.length) {
          if (status) {
            status.textContent = "Please complete all required shipping fields.";
            status.className = "text-xs text-rose-300";
          }
          return;
        }

        const c = calc();
        if (status) {
          status.textContent = `Order placed (demo)! Total: ${money(c.total)}. A confirmation email would be sent.`;
          status.className = "text-xs text-emerald-300";
        }
        clearCart();
        showPage("home");
      });

      // Promo code
      document.getElementById("applyPromoBtn")?.addEventListener("click", () => {
        const input = document.getElementById("promoInput");
        const code = (input?.value || "").trim().toUpperCase();
        const status = document.getElementById("promoStatus");

        if (code === "SWEET10") {
          state.promo = { code, discountRate: 0.10 };
          save();
          renderAll();
          if (status) {
            status.textContent = "Applied SWEET10 — 10% off subtotal.";
            status.className = "mt-2 text-xs text-emerald-300";
          }
          return;
        }

        if (!code) {
          state.promo = { code: null, discountRate: 0 };
          save();
          renderAll();
          return;
        }

        if (status) {
          status.textContent = "Invalid code. Try SWEET10.";
          status.className = "mt-2 text-xs text-rose-300";
        }
      });
    }

    // Init
    load();
    bind();
    showPage(state.page || "home");
    renderAll();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-fuchsia-500/5 to-zinc-950"></div>
<div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-rose-500/10 blur-3xl"></div>
<div className="absolute top-52 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>
</div>
<div className="font-[Manrope]" id="app">

<div className="border-b border-white/10 bg-zinc-950/60 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
<div className="hidden items-center gap-2 text-xs text-zinc-300 sm:flex">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1rem'}}></iconify-icon>
<span>Free delivery over <span className="text-zinc-100 font-medium">$35</span> · Fresh daily</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-300">
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition" data-nav="contact">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1rem'}}></iconify-icon>
<span>Support</span>
</button>
<div className="hidden sm:flex items-center gap-2">
<span className="h-1 w-1 rounded-full bg-zinc-600"></span>
<span>Open 9am–9pm</span>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between gap-3 py-4">
<button aria-label="Open menu" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition md:hidden" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="text-zinc-200">Menu</span>
</button>
<div className="flex items-center gap-3">
<button aria-label="Go home" className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition" data-nav="home">
<div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-400/25 to-fuchsia-400/10 border border-white/10">
<span className="font-[Fraunces] text-base font-medium tracking-tight text-zinc-50">S</span>
</div>
<div className="hidden sm:block">
<div className="font-[Fraunces] text-base font-medium tracking-tight text-zinc-50 leading-5">Sweetly</div>
<div className="text-xs text-zinc-400 leading-4">handmade sweets</div>
</div>
</button>
</div>
<nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
<button className="navbtn" data-nav="home">Home</button>
<button className="navbtn" data-nav="about">About</button>
<button className="navbtn" data-nav="contact">Contact</button>
<button className="navbtn" data-nav="checkout">Checkout</button>
</nav>
<div className="flex items-center gap-2">
<div className="hidden lg:flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<input className="w-72 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none" id="searchInput" placeholder="Search laddoo, barfi, baklava..."/>
<span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-400">⌘K</span>
</div>
<button aria-label="Login" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition" data-nav="login">
<iconify-icon icon="solar:user-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="hidden sm:inline text-zinc-200">Login</span>
</button>
<button aria-label="Cart" className="relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition" data-nav="cart">
<iconify-icon icon="solar:bag-2-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="hidden sm:inline text-zinc-200">Cart</span>
<span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-xs font-medium text-white" id="cartCount">0</span>
</button>
</div>
</div>

<div className="hidden pb-4 md:hidden" id="mobileMenu">
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-2">
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none" id="searchInputMobile" placeholder="Search sweets..."/>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="navbtn w-full justify-center" data-nav="home">Home</button>
<button className="navbtn w-full justify-center" data-nav="about">About</button>
<button className="navbtn w-full justify-center" data-nav="contact">Contact</button>
<button className="navbtn w-full justify-center" data-nav="checkout">Checkout</button>
<button className="navbtn w-full justify-center" data-nav="login">Login</button>
<button className="navbtn w-full justify-center" data-nav="cart">Cart</button>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">

<section className="page" id="page-home">

<div className="grid gap-6 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
<span>Small-batch · vegetarian-friendly options · gift-ready</span>
</div>
<h1 className="mt-4 font-[Fraunces] text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-50 leading-[1.05]">
              Sweets that feel like a warm celebration.
            </h1>
<p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
              Discover buttery barfi, fragrant laddoo, crisp baklava, and chocolate-forward delights—crafted daily with gentle sweetness,
              clean ingredients, and packaging made for gifting.
            </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition" id="shopBestBtn">
                Shop best sellers
              </button>
<button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" data-nav="about">
                Learn about Sweetly
              </button>
<div className="flex items-center gap-3 text-xs text-zinc-400">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 grid place-items-center">
<span className="font-[Fraunces] text-xs tracking-tight text-zinc-200">AA</span>
</div>
<div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 grid place-items-center">
<span className="font-[Fraunces] text-xs tracking-tight text-zinc-200">MK</span>
</div>
<div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 grid place-items-center">
<span className="font-[Fraunces] text-xs tracking-tight text-zinc-200">RS</span>
</div>
</div>
<span>Trusted by 12k+ sweet tooths</span>
</div>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Delivery</div>
<iconify-icon icon="solar:box-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-2 font-medium text-zinc-100 text-sm">Same-day in city</div>
<div className="mt-1 text-xs text-zinc-400">Chilled &amp; sealed</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Freshness</div>
<iconify-icon icon="solar:leaf-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-2 font-medium text-zinc-100 text-sm">Made daily</div>
<div className="mt-1 text-xs text-zinc-400">Small-batch kitchen</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Gifting</div>
<iconify-icon icon="solar:gift-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-2 font-medium text-zinc-100 text-sm">Gift-ready boxes</div>
<div className="mt-1 text-xs text-zinc-400">Add a note</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.18),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.14),transparent_50%),radial-gradient(circle_at_50%_60%,rgba(251,191,36,0.10),transparent_55%)]"></div>
<div className="relative">
<div className="flex items-start justify-between">
<div>
<div className="font-[Fraunces] text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50">Assorted Box</div>
<div className="mt-1 text-sm text-zinc-300">12 pieces · best for gifting</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
<div className="text-xs text-zinc-400">From</div>
<div className="text-sm font-medium text-zinc-100">$18.00</div>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Pistachio</div>
<span className="text-xs text-emerald-300">Popular</span>
</div>
<div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-emerald-300/20 to-zinc-950/10 border border-white/10"></div>
<div className="mt-3 text-xs text-zinc-300">Barfi</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Rose</div>
<span className="text-xs text-rose-300">New</span>
</div>
<div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-rose-300/20 to-zinc-950/10 border border-white/10"></div>
<div className="mt-3 text-xs text-zinc-300">Laddoo</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Cocoa</div>
<span className="text-xs text-amber-300">Rich</span>
</div>
<div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-amber-300/20 to-zinc-950/10 border border-white/10"></div>
<div className="mt-3 text-xs text-zinc-300">Fudge</div>
</div>
</div>
<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Sealed packaging · secure checkout</span>
</div>
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" id="addHeroBoxBtn">
                    Add assorted box
                  </button>
</div>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:star-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">4.9 average</div>
</div>
<div className="mt-2 text-xs text-zinc-400">“Not too sweet—perfect balance.”</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">Fast prep</div>
</div>
<div className="mt-2 text-xs text-zinc-400">Most orders ship within 24 hours.</div>
</div>
</div>
</div>
</div>

<div className="mt-12">
<div className="flex items-end justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Why Sweetly</div>
<h2 className="mt-2 font-[Fraunces] text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50">Friendly design. Friendly ingredients.</h2>
<p className="mt-2 max-w-2xl text-sm text-zinc-300">Every detail is made to feel calm, clean, and premium—from kitchen to checkout.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" data-nav="contact">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
              Talk to us
            </button>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-500/15 border border-white/10">
<iconify-icon icon="solar:cup-hot-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Kitchen-led</span>
</div>
<h3 className="mt-4 text-base font-medium text-zinc-100">Small-batch freshness</h3>
<p className="mt-2 text-sm text-zinc-300 leading-relaxed">We craft daily in limited runs—so texture stays soft, crisp, and fragrant.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-fuchsia-500/15 border border-white/10">
<iconify-icon icon="solar:palette-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Gift-ready</span>
</div>
<h3 className="mt-4 text-base font-medium text-zinc-100">Packaging with purpose</h3>
<p className="mt-2 text-sm text-zinc-300 leading-relaxed">Minimal, beautiful boxes that protect the sweets and elevate the moment.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/15 border border-white/10">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Care</span>
</div>
<h3 className="mt-4 text-base font-medium text-zinc-100">Clean, simple ingredients</h3>
<p className="mt-2 text-sm text-zinc-300 leading-relaxed">Clear labels, thoughtful sourcing, and gentle sweetness you can trust.</p>
</div>
</div>
</div>

<div className="mt-12" id="bestSelling">
<div className="flex items-end justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Best selling</div>
<h2 className="mt-2 font-[Fraunces] text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50">Crowd favorites, always in season.</h2>
</div>
<div className="text-xs text-zinc-400 hidden sm:block">Tip: add items to cart and checkout.</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="contents" id="productGrid"></div>
</div>
</div>
</section>

<section className="page hidden" id="page-about">
<div className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '1rem'}}></iconify-icon>
<span>About us</span>
</div>
<h1 className="mt-4 font-[Fraunces] text-4xl sm:text-5xl font-medium tracking-tight text-zinc-50 leading-[1.08]">
              A modern sweets shop rooted in tradition.
            </h1>
<p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Sweetly started with a simple idea: make classic sweets feel as clean and welcoming as they taste.
              We focus on small-batch craft, subtle sweetness, and a calm experience—from browsing to gifting.
            </p>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Our promise</div>
<iconify-icon icon="solar:verified-check-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-3 text-sm font-medium text-zinc-100">Balanced sweetness</div>
<div className="mt-2 text-sm text-zinc-300">Flavors first. Sugar second.</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Our craft</div>
<iconify-icon icon="solar:chef-hat-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-3 text-sm font-medium text-zinc-100">Hand-finished</div>
<div className="mt-2 text-sm text-zinc-300">Texture, aroma, and detail in every piece.</div>
</div>
</div>
<div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-xs text-zinc-400">Visit or ask a question</div>
<div className="mt-1 text-sm font-medium text-zinc-100">We reply within 1 business day.</div>
</div>
<div className="flex flex-col gap-2 sm:flex-row">
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" data-nav="contact">
                    Contact
                  </button>
<button className="rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition" data-nav="home">
                    Browse sweets
                  </button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Sweetly studio</div>
<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-zinc-50">Our values</div>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10">
<span className="font-[Fraunces] text-sm tracking-tight text-zinc-200">SL</span>
</div>
</div>
<div className="mt-5 space-y-3">
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:sun-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">Warm hospitality</div>
</div>
<div className="mt-2 text-sm text-zinc-300">A friendly tone, helpful guidance, and thoughtful details.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:recycle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">Less waste</div>
</div>
<div className="mt-2 text-sm text-zinc-300">We ship in compact, protective materials whenever possible.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:hand-heart-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">Care in every order</div>
</div>
<div className="mt-2 text-sm text-zinc-300">Quality checks and secure packaging—every single time.</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Quick links</div>
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="navbtn w-full justify-center" data-nav="home">Shop</button>
<button className="navbtn w-full justify-center" data-nav="cart">Cart</button>
<button className="navbtn w-full justify-center" data-nav="login">Login</button>
<button className="navbtn w-full justify-center" data-nav="checkout">Checkout</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-contact">
<div className="grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1rem'}}></iconify-icon>
<span>Contact</span>
</div>
<h1 className="mt-4 font-[Fraunces] text-4xl sm:text-5xl font-medium tracking-tight text-zinc-50 leading-[1.08]">
              Let’s make it sweet.
            </h1>
<p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Questions about ingredients, gifting, or delivery windows? Send a message and we’ll help.
            </p>
<div className="mt-6 grid gap-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400">Phone</div>
<div className="text-sm font-medium text-zinc-100">+1 (212) 555‑0148</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400">Email</div>
<div className="text-sm font-medium text-zinc-100">hello@sweetly.shop</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400">Address</div>
<div className="text-sm font-medium text-zinc-100">112 Rose Ave, Suite 3</div>
<div className="text-xs text-zinc-400 mt-1">New York, NY</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Send a message</div>
<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-zinc-50">We’ll reply soon.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">Typically within 24h</div>
</div>
<form className="mt-6 grid gap-4" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs text-zinc-400">Name</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="contactName" placeholder="Your name"/>
</div>
<div>
<label className="text-xs text-zinc-400">Email</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="contactEmail" placeholder="you@email.com"/>
</div>
</div>
<div>
<label className="text-xs text-zinc-400">Topic</label>
<select className="mt-2 w-full appearance-none rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-rose-400/40" id="contactTopic">
<option>Order help</option>
<option>Ingredients / allergens</option>
<option>Corporate gifting</option>
<option>Feedback</option>
</select>
</div>
<div>
<label className="text-xs text-zinc-400">Message</label>
<textarea className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="contactMessage" placeholder="Tell us how we can help..." rows="5"></textarea>
</div>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-zinc-400" id="contactStatus">We’ll never share your email.</div>
<button className="rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition">
                    Send message
                  </button>
</div>
</form>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:delivery-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">Delivery questions</div>
</div>
<div className="mt-2 text-sm text-zinc-300 leading-relaxed">We can guide you on same-day areas and shipping timelines.</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:cart-large-2-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<div className="text-sm font-medium text-zinc-100">Bulk orders</div>
</div>
<div className="mt-2 text-sm text-zinc-300 leading-relaxed">Corporate gifting with custom notes and scheduling.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-cart">
<div className="flex flex-col gap-6 lg:flex-row lg:items-start">
<div className="flex-1">
<div className="flex items-end justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Cart</div>
<h1 className="mt-2 font-[Fraunces] text-3xl sm:text-4xl font-medium tracking-tight text-zinc-50">Your sweet picks</h1>
</div>
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" id="clearCartBtn">
                Clear cart
              </button>
</div>
<div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 hidden" id="cartEmpty">
<div className="flex flex-col items-center text-center">
<div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
<iconify-icon icon="solar:bag-2-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="mt-4 text-sm font-medium text-zinc-100">Your cart is empty</div>
<div className="mt-2 text-sm text-zinc-300">Add best sellers to get started.</div>
<button className="mt-5 rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition" data-nav="home">
                  Browse best sellers
                </button>
</div>
</div>
<div className="mt-6 space-y-3" id="cartList"></div>
</div>
<aside className="w-full lg:w-[26rem]">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Summary</div>
<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-zinc-50">Order total</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">Secure</div>
</div>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center justify-between text-zinc-300">
<span>Subtotal</span>
<span className="text-zinc-100 font-medium" id="sumSubtotal">$0.00</span>
</div>
<div className="flex items-center justify-between text-zinc-300">
<span>Shipping</span>
<span className="text-zinc-100 font-medium" id="sumShipping">$0.00</span>
</div>
<div className="flex items-center justify-between text-zinc-300">
<span>Estimated tax</span>
<span className="text-zinc-100 font-medium" id="sumTax">$0.00</span>
</div>
<div className="h-px w-full bg-white/10"></div>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Total</span>
<span className="text-zinc-50 font-medium" id="sumTotal">$0.00</span>
</div>
</div>
<button className="mt-6 w-full rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition" id="goCheckoutBtn">
                Go to checkout
              </button>
<div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:truck-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span>Free shipping over $35</span>
</div>
</div>
</div>
</aside>
</div>
</section>

<section className="page hidden" id="page-login">
<div className="mx-auto max-w-xl">
<div className="text-center">
<div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
<span className="font-[Fraunces] text-base font-medium tracking-tight text-zinc-200">SL</span>
</div>
<h1 className="mt-4 font-[Fraunces] text-3xl sm:text-4xl font-medium tracking-tight text-zinc-50">Welcome back</h1>
<p className="mt-2 text-sm text-zinc-300">Sign in to save addresses and track orders.</p>
</div>
<div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<form className="grid gap-4" id="loginForm">
<div>
<label className="text-xs text-zinc-400">Email</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="loginEmail" placeholder="you@email.com"/>
</div>
<div>
<label className="text-xs text-zinc-400">Password</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="loginPassword" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between">
<button className="text-xs text-zinc-300 hover:text-zinc-100 transition underline underline-offset-4 decoration-white/20" id="fillDemoLogin" type="button">
                  Use demo account
                </button>
<button className="text-xs text-zinc-400 hover:text-zinc-200 transition underline underline-offset-4 decoration-white/20" type="button">
                  Forgot password?
                </button>
</div>
<button className="mt-1 rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition">
                Sign in
              </button>
<div className="text-xs text-zinc-400" id="loginStatus">No account needed to checkout—sign in is optional.</div>
</form>
</div>
<div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-100">Continue shopping</div>
<div className="mt-1 text-xs text-zinc-400">Browse best sellers and add to cart.</div>
</div>
<button className="navbtn" data-nav="home">Home</button>
</div>
</div>
</div>
</section>

<section className="page hidden" id="page-checkout">
<div className="flex items-end justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Checkout</div>
<h1 className="mt-2 font-[Fraunces] text-3xl sm:text-4xl font-medium tracking-tight text-zinc-50">Finish your order</h1>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" data-nav="cart">
<iconify-icon icon="solar:arrow-left-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
            Back to cart
          </button>
</div>
<div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Shipping details</div>
<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-zinc-50">Where should we send it?</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">Step 1 of 2</div>
</div>
<form className="mt-6 grid gap-4" id="checkoutForm">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs text-zinc-400">First name</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coFirst" placeholder="Aisha"/>
</div>
<div>
<label className="text-xs text-zinc-400">Last name</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coLast" placeholder="Khan"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="text-xs text-zinc-400">Email</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coEmail" placeholder="aisha@email.com"/>
</div>
<div>
<label className="text-xs text-zinc-400">Phone</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coPhone" placeholder="+1 555 0123"/>
</div>
</div>
<div>
<label className="text-xs text-zinc-400">Address</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coAddress" placeholder="Street address"/>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">City</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coCity" placeholder="New York"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">State</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coState" placeholder="NY"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">ZIP</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coZip" placeholder="10001"/>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100">
<iconify-icon icon="solar:gift-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
                      Gift note (optional)
                    </div>
<div className="text-xs text-zinc-400">Up to 140 chars</div>
</div>
<input className="mt-3 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="coNote" maxlength="140" placeholder="Write a short note..."/>
</div>
<div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-zinc-400" id="checkoutStatus">You can review totals on the right.</div>
<button className="rounded-2xl bg-gradient-to-b from-rose-500 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/20 hover:from-rose-400 hover:to-rose-600 transition">
                    Place order
                  </button>
</div>
</form>
</div>
<div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-950/40">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-100">Secure payments</div>
<div className="mt-1 text-xs text-zinc-400">This is a demo checkout UI (no real payment processing).</div>
</div>
</div>
</div>
</div>
<aside className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Review</div>
<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-zinc-50">Order summary</div>
</div>
<button className="navbtn" data-nav="cart">Edit cart</button>
</div>
<div className="mt-6 space-y-3" id="checkoutItems"></div>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center justify-between text-zinc-300">
<span>Subtotal</span>
<span className="text-zinc-100 font-medium" id="coSubtotal">$0.00</span>
</div>
<div className="flex items-center justify-between text-zinc-300">
<span>Shipping</span>
<span className="text-zinc-100 font-medium" id="coShipping">$0.00</span>
</div>
<div className="flex items-center justify-between text-zinc-300">
<span>Estimated tax</span>
<span className="text-zinc-100 font-medium" id="coTax">$0.00</span>
</div>
<div className="h-px w-full bg-white/10"></div>
<div className="flex items-center justify-between">
<span className="text-zinc-300">Total</span>
<span className="text-zinc-50 font-medium" id="coTotal">$0.00</span>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Promo code</div>
<div className="text-xs text-zinc-400">Try <span className="text-zinc-200 font-medium">SWEET10</span></div>
</div>
<div className="mt-3 flex items-center gap-2">
<input className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-rose-400/40" id="promoInput" placeholder="Enter code"/>
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10 transition" id="applyPromoBtn">
                    Apply
                  </button>
</div>
<div className="mt-2 text-xs text-zinc-400" id="promoStatus">One-time discount on subtotal.</div>
</div>
</div>
</aside>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-zinc-950/60">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
<div className="grid gap-6 md:grid-cols-12">
<div className="md:col-span-5">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10">
<span className="font-[Fraunces] text-base font-medium tracking-tight text-zinc-200">S</span>
</div>
<div>
<div className="font-[Fraunces] text-lg font-medium tracking-tight text-zinc-50">Sweetly</div>
<div className="text-xs text-zinc-400">Handmade sweets for calm celebrations.</div>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300 leading-relaxed max-w-md">
              A friendly, modern sweets shop UI with best sellers, cart, login, and checkout flows.
            </p>
</div>
<div className="md:col-span-7">
<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
<div>
<div className="text-xs text-zinc-400">Shop</div>
<div className="mt-3 flex flex-col gap-2 text-sm">
<button className="text-left text-zinc-200 hover:text-zinc-50 transition" data-nav="home">Best sellers</button>
<button className="text-left text-zinc-200 hover:text-zinc-50 transition" data-nav="cart">Cart</button>
<button className="text-left text-zinc-200 hover:text-zinc-50 transition" data-nav="checkout">Checkout</button>
</div>
</div>
<div>
<div className="text-xs text-zinc-400">Company</div>
<div className="mt-3 flex flex-col gap-2 text-sm">
<button className="text-left text-zinc-200 hover:text-zinc-50 transition" data-nav="about">About</button>
<button className="text-left text-zinc-200 hover:text-zinc-50 transition" data-nav="contact">Contact</button>
<button className="text-left text-zinc-200 hover:text-zinc-50 transition" data-nav="login">Login</button>
</div>
</div>
<div className="col-span-2 sm:col-span-2">
<div className="text-xs text-zinc-400">Newsletter</div>
<div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<input className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 outline-none" id="newsEmail" placeholder="Email for sweet updates"/>
<button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-white/15 transition border border-white/10" id="newsBtn">
                      Join
                    </button>
</div>
<div className="mt-2 text-xs text-zinc-400" id="newsStatus">No spam—just new drops and gift ideas.</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
<div className="text-xs text-zinc-500">© <span id="year"></span> Sweetly. All rights reserved.</div>
<div className="flex items-center gap-3 text-xs text-zinc-400">
<span className="inline-flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Secure UI demo
            </span>
<span className="h-1 w-1 rounded-full bg-zinc-700"></span>
<span className="inline-flex items-center gap-2">
<iconify-icon icon="solar:heart-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Made with care
            </span>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
