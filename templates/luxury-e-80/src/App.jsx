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



// Tailwind base tweaks for dark surfaces via CSS variables
// (No additional config, rely on utilities)



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Router (hash-based): show/hide sections
      const routes = Array.from(document.querySelectorAll('[data-route]'));
      function showRoute(hash) {
        const id = (hash || '#home').replace('#', '');
        routes.forEach(sec => {
          sec.classList.toggle('hidden', sec.id !== id);
        });
        // Close cart drawer on route change
        closeCart();
        // Rerender icons if dynamic
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // Update active nav filters if on admin
        if (id === 'admin' && !ordersSeeded) seedOrders();
      }
      window.addEventListener('hashchange', () => showRoute(location.hash));
      showRoute(location.hash || '#home');

      // Mobile menu
      const btnMobile = document.getElementById('btn-mobile');
      const mobileNav = document.getElementById('mobile-nav');
      btnMobile?.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
      });

      // Year
      document.querySelectorAll('.year').forEach(el => (el.textContent = new Date().getFullYear()));

      // Quantity controls
      const qtyInput = document.getElementById('qty-input');
      document.getElementById('qty-decr')?.addEventListener('click', () => {
        qtyInput.value = Math.max(1, (parseInt(qtyInput.value || '1', 10) - 1));
        updateSummary();
      });
      document.getElementById('qty-incr')?.addEventListener('click', () => {
        qtyInput.value = Math.max(1, (parseInt(qtyInput.value || '1', 10) + 1));
        updateSummary();
      });
      qtyInput?.addEventListener('input', updateSummary);

      // Variant selection
      let selectedVariant = 'or';
      document.querySelectorAll('.variant-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedVariant = btn.getAttribute('data-variant');
          document.querySelectorAll('.variant-btn').forEach(b => {
            b.classList.remove('bg-[#D4AF37]/10','border-[#D4AF37]/50','text-[#F5F5DC]');
          });
          if (selectedVariant === 'or') {
            btn.classList.add('bg-[#D4AF37]/10','border-[#D4AF37]/50','text-[#F5F5DC]');
          } else {
            btn.classList.add('bg-white/[0.02]','border-[#C2B280]/60');
          }
          updateSummary();
        });
      });

      // Cart logic (simple client state)
      const cart = { items: [] };
      const cartDrawer = document.getElementById('cart-drawer');
      const cartCount = document.getElementById('cart-count');
      const cartItems = document.getElementById('cart-items');
      const cartSubtotal = document.getElementById('cart-subtotal');

      function openCart() {
        cartDrawer.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
      }
      function closeCart() {
        cartDrawer.classList.add('translate-x-full');
        document.body.style.overflow = '';
      }

      document.getElementById('btn-open-cart')?.addEventListener('click', openCart);
      document.getElementById('cart-close')?.addEventListener('click', closeCart);

      function renderCart() {
        cartItems.innerHTML = '';
        let subtotal = 0;
        cart.items.forEach((it, idx) => {
          subtotal += it.price * it.qty;
          const row = document.createElement('div');
          row.className = 'flex items-center gap-3 p-2 rounded-md border border-[#C2B280]/20 bg-white/[0.02]';
          row.innerHTML = `
            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=600&auto=format&fit=crop" class="h-12 w-12 rounded object-cover border border-[#C2B280]/20" />
            <div class="text-xs">
              <div class="text-[#F5F5DC]">Objet — Série ${it.variant === 'or' ? 'Or' : it.variant}</div>
              <div class="text-[#F5F5DC]/60">x${it.qty} • € ${it.price}</div>
            </div>
            <div class="ml-auto flex items-center gap-2">
              <button data-idx="${idx}" class="cart-dec p-1.5 rounded hover:bg-white/[0.06]"><i data-lucide="minus" class="h-4 w-4"></i></button>
              <button data-idx="${idx}" class="cart-inc p-1.5 rounded hover:bg-white/[0.06]"><i data-lucide="plus" class="h-4 w-4"></i></button>
              <button data-idx="${idx}" class="cart-del p-1.5 rounded hover:bg-rose-400/10 text-rose-300"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
            </div>
          `;
          cartItems.appendChild(row);
        });
        cartCount.textContent = cart.items.reduce((a,b)=>a+b.qty,0);
        cartSubtotal.textContent = `€ ${subtotal}`;
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        cartItems.querySelectorAll('.cart-dec').forEach(btn => {
          btn.addEventListener('click', () => {
            const i = parseInt(btn.getAttribute('data-idx'),10);
            cart.items[i].qty = Math.max(1, cart.items[i].qty - 1);
            renderCart();
          });
        });
        cartItems.querySelectorAll('.cart-inc').forEach(btn => {
          btn.addEventListener('click', () => {
            const i = parseInt(btn.getAttribute('data-idx'),10);
            cart.items[i].qty += 1;
            renderCart();
          });
        });
        cartItems.querySelectorAll('.cart-del').forEach(btn => {
          btn.addEventListener('click', () => {
            const i = parseInt(btn.getAttribute('data-idx'),10);
            cart.items.splice(i,1);
            renderCart();
          });
        });
      }

      function addToCart() {
        const qty = Math.max(1, parseInt(qtyInput.value||'1',10));
        const price = 290;
        cart.items.push({ variant: selectedVariant, qty, price });
        renderCart();
        openCart();
      }

      // Checkout
      const checkoutModal = document.getElementById('checkout-modal');
      function openCheckout() {
        document.getElementById('summary-variant').textContent = 'Finition: ' + (selectedVariant === 'or' ? 'Or' : selectedVariant);
        document.getElementById('summary-qty').textContent = 'x' + (qtyInput.value || 1);
        document.getElementById('summary-total').textContent = '€ ' + (290 * Math.max(1, parseInt(qtyInput.value||'1',10)));
        checkoutModal.classList.remove('hidden');
        checkoutModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
      function closeCheckout() {
        checkoutModal.classList.add('hidden');
        checkoutModal.classList.remove('flex');
        document.body.style.overflow = '';
      }
      document.getElementById('checkout-close')?.addEventListener('click', closeCheckout);
      document.getElementById('btn-checkout')?.addEventListener('click', openCheckout);
      document.getElementById('cart-checkout')?.addEventListener('click', () => {
        // Go straight to checkout from cart
        openCheckout();
      });
      document.getElementById('go-stripe')?.addEventListener('click', () => {
        // Replace with live Payment Link or Checkout session redirect
        window.location.href = 'https://buy.stripe.com/test_00g5mH3oR0Ue5bW8ww';
      });
      document.getElementById('go-mollie')?.addEventListener('click', () => {
        // Replace with Mollie payment link if needed
        alert('Redirection Mollie (démo).');
      });

      // Add to cart from preorder? Use checkout directly
      function updateSummary() {
        document.getElementById('summary-variant').textContent = 'Finition: ' + (selectedVariant === 'or' ? 'Or' : selectedVariant);
        document.getElementById('summary-qty').textContent = 'x' + (qtyInput.value || 1);
        document.getElementById('summary-total').textContent = '€ ' + (290 * Math.max(1, parseInt(qtyInput.value||'1',10)));
      }
      updateSummary();

      // Simulate "Add to cart" when clicking Mollie (optional)
      document.getElementById('btn-mollie')?.addEventListener('click', () => {
        addToCart();
      });

      // Admin orders seed + interactions
      const ordersBody = document.getElementById('orders-body');
      let ordersSeeded = false;
      const demoOrders = [
        { id: 'NH-1001', email: 'amina@exemple.com', amount: 580, status: 'paid', date: '2025-10-01' },
        { id: 'NH-1002', email: 'luc@exemple.com', amount: 290, status: 'pending', date: '2025-10-02' },
        { id: 'NH-1003', email: 'hana@exemple.com', amount: 580, status: 'refunded', date: '2025-10-02' },
        { id: 'NH-1004', email: 'omar@exemple.com', amount: 290, status: 'failed', date: '2025-10-03' },
        { id: 'NH-1005', email: 'lea@exemple.com', amount: 870, status: 'paid', date: '2025-10-04' },
      ];

      function statusPill(status) {
        const map = {
          paid: { label: 'Payé', cls: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20' },
          pending: { label: 'En attente', cls: 'bg-amber-400/10 text-amber-300 border-amber-400/20' },
          failed: { label: 'Échec', cls: 'bg-rose-400/10 text-rose-300 border-rose-400/20' },
          refunded: { label: 'Remboursé', cls: 'bg-sky-400/10 text-sky-300 border-sky-400/20' },
        };
        const cfg = map[status] || map.pending;
        return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded border ${cfg.cls} text-xs">
          <span class="h-1.5 w-1.5 rounded-full" style="background-color: currentColor;"></span>${cfg.label}
        </span>`;
      }

      function renderOrders(list) {
        ordersBody.innerHTML = '';
        list.forEach(o => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td class="px-4 py-3 text-[#F5F5DC]">${o.id}</td>
            <td class="px-4 py-3 text-[#F5F5DC]/80">${o.email}</td>
            <td class="px-4 py-3 text-[#F5F5DC]">€ ${o.amount}</td>
            <td class="px-4 py-3">${statusPill(o.status)}</td>
            <td class="px-4 py-3 text-[#F5F5DC]/70">${o.date}</td>
            <td class="px-4 py-3 text-right">
              <div class="inline-flex items-center gap-2">
                <button class="order-status px-2.5 py-1.5 rounded-md border border-[#C2B280]/30 hover:bg-white/[0.02] text-xs" data-id="${o.id}">
                  Changer statut
                </button>
                <button class="px-2.5 py-1.5 rounded-md border border-[#C2B280]/30 hover:bg-white/[0.02] text-xs">Détails</button>
              </div>
            </td>
          `;
          ordersBody.appendChild(tr);
        });
        // Bind status changes
        ordersBody.querySelectorAll('.order-status').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const idx = demoOrders.findIndex(d => d.id === id);
            const flow = ['pending','paid','refunded','failed'];
            const cur = demoOrders[idx].status;
            demoOrders[idx].status = flow[(flow.indexOf(cur)+1)%flow.length];
            renderOrders(filteredOrders());
          });
        });
      }

      function seedOrders() {
        if (ordersSeeded) return;
        ordersSeeded = true;
        renderOrders(demoOrders);
      }

      // Filters
      const chips = document.querySelectorAll('.filter-chip');
      function filteredOrders() {
        const active = document.querySelector('.filter-chip.active')?.getAttribute('data-filter') || 'all';
        const term = (document.getElementById('order-search').value || '').toLowerCase().trim();
        return demoOrders.filter(o => {
          const statusOK = active === 'all' ? true : o.status === active;
          const termOK = !term || o.id.toLowerCase().includes(term) || o.email.toLowerCase().includes(term);
          return statusOK && termOK;
        });
      }
      chips.forEach(c => {
        c.addEventListener('click', () => {
          chips.forEach(ci => ci.classList.remove('bg-white/[0.02]','active'));
          c.classList.add('bg-white/[0.02]','active');
          renderOrders(filteredOrders());
        });
      });
      document.getElementById('order-search')?.addEventListener('input', () => {
        renderOrders(filteredOrders());
      });

      // Add simple "Add to cart" on preorder page when changing qty via Mollie button
      // Already connected above.

      // Accessibility: Close modal on background click
      document.getElementById('checkout-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'checkout-modal') closeCheckout();
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
      

<div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent pointer-events-none z-50"></div>

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-[#C2B280]/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2 group" href="#home">
<div className="h-7 w-7 rounded-sm border border-[#D4AF37]/50 bg-black/60 flex items-center justify-center tracking-tighter" style={{letterSpacing: '-0.02em'}}>
<span className="text-[#D4AF37] text-[13px] font-semibold">NH</span>
</div>
<span className="text-sm md:text-base font-medium tracking-tight text-[#F5F5DC] group-hover:text-white transition-colors">
                NEFERTITI HERITAGE
              </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors" href="#home">Accueil</a>
<a className="text-sm text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors" href="#preorder">Précommande</a>
<a className="text-sm text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors" href="#story">Histoire</a>
<a className="text-sm text-[#F5F5DC]/60 hover:text-[#F5F5DC]/90 transition-colors" href="#admin">Admin</a>
</nav>

<div className="flex items-center gap-3">
<button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#C2B280]/20 hover:border-[#C2B280]/40 hover:bg-white/[0.02] transition-all" id="btn-open-cart">
<i className="h-4 w-4 text-[#F5F5DC]/80" data-lucide="shopping-bag"></i>
<span className="text-sm text-[#F5F5DC]/80">Panier</span>
<span className="absolute -top-1 -right-1 text-[10px] font-medium bg-[#D4AF37] text-black px-1.5 py-0.5 rounded" id="cart-count">0</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#D4AF37]/90 text-black hover:bg-[#D4AF37] transition-colors" href="#preorder">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span className="text-sm font-medium">Précommander</span>
</a>

<button className="md:hidden inline-flex items-center gap-2 p-2 rounded-md border border-[#C2B280]/20 hover:border-[#C2B280]/40 hover:bg-white/[0.02] transition-all" id="btn-mobile">
<i className="h-5 w-5 text-[#F5F5DC]/80" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden pb-4" id="mobile-nav">
<div className="grid gap-1">
<a className="block px-3 py-2 rounded-md text-sm text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:bg-white/[0.03]" href="#home">Accueil</a>
<a className="block px-3 py-2 rounded-md text-sm text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:bg-white/[0.03]" href="#preorder">Précommande</a>
<a className="block px-3 py-2 rounded-md text-sm text-[#F5F5DC]/80 hover:text-[#F5F5DC] hover:bg-white/[0.03]" href="#story">Histoire</a>
<a className="block px-3 py-2 rounded-md text-sm text-[#F5F5DC]/60 hover:text-[#F5F5DC]/90 hover:bg-white/[0.03]" href="#admin">Admin</a>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative overflow-hidden" data-route="" id="home">

<canvas className="absolute inset-0 w-full h-full opacity-[0.15]" id="hero-canvas"></canvas>

<div className="pointer-events-none absolute inset-0">
<img alt="Texture minérale" className="hidden sm:block absolute -left-12 top-20 w-72 opacity-30 blur-[1px] rotate-[-6deg] rounded-md border border-[#C2B280]/20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Portrait" className="absolute right-6 sm:right-16 bottom-10 w-40 sm:w-56 opacity-40 rounded-md border border-[#C2B280]/20" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Artefact" className="absolute left-10 bottom-24 w-28 sm:w-40 opacity-30 rounded-md border border-[#C2B280]/20" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="min-h-[76vh] sm:min-h-[84vh] flex flex-col items-center justify-center text-center">
<div className="inline-flex items-center gap-2 border border-[#C2B280]/20 bg-white/[0.02] px-3 py-1.5 rounded-full mb-6">
<span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
<span className="text-xs text-[#F5F5DC]/70">Précommande limitée — Série Or</span>
</div>
<h1 className="text-3xl sm:text-5xl md:text-6xl tracking-tight font-semibold text-[#F5F5DC]">
                  NEFERTITI HERITAGE
                </h1>
<p className="mt-4 text-base sm:text-lg text-[#F5F5DC]/70 max-w-2xl">
                  Un objet de culte contemporain inspiré d’un héritage millénaire.
                  Conçu pour durer, façonné pour intriguer. Découvrez l’assemblage parfait du noir profond, de l’or et du sable.
                </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#D4AF37]/90 text-black hover:bg-[#D4AF37] transition-colors" href="#preorder">
<i className="h-5 w-5" data-lucide="credit-card"></i>
<span className="font-medium">Précommander maintenant</span>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#C2B280]/20 hover:border-[#C2B280]/40 hover:bg-white/[0.02] transition-all" href="#story">
<i className="h-5 w-5 text-[#F5F5DC]/80" data-lucide="play"></i>
<span className="text-[#F5F5DC]/90">Découvrir l’histoire</span>
</a>
</div>

<div className="mt-10 flex items-center gap-6 text-xs text-[#F5F5DC]/60">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                    Paiement sécurisé (Stripe, Mollie)
                  </div>
<div className="hidden sm:inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="package"></i>
                    Livraison suivie
                  </div>
<div className="hidden sm:inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="clock"></i>
                    Production limitée
                  </div>
</div>
</div>
</div>
</div>

<div className="relative border-t border-[#C2B280]/10 bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="aspect-[4/3] rounded-lg border border-[#C2B280]/20 overflow-hidden relative">
<img alt="Matières et finitions" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 text-xs text-[#F5F5DC]/70">
                    Série Or — Finition satinée
                  </div>
</div>
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Un design culte. Une présence magnétique.</h2>
<p className="mt-3 text-sm md:text-base text-[#F5F5DC]/70">
                    Chaque pièce est numérotée, coulée avec précision et contrôlée individuellement. Les arêtes subtils captent la lumière
                    d’une manière presque rituelle, révélant des nuances dorées et sable sur un noir profond.
                  </p>
<div className="mt-6 flex items-center gap-3">
<div className="inline-flex items-center gap-2 rounded-md border border-[#C2B280]/20 px-3 py-1.5 text-xs text-[#F5F5DC]/70">
<i className="h-4 w-4" data-lucide="award"></i>
                      Numérotée
                    </div>
<div className="inline-flex items-center gap-2 rounded-md border border-[#C2B280]/20 px-3 py-1.5 text-xs text-[#F5F5DC]/70">
<i className="h-4 w-4" data-lucide="recycle"></i>
                      Matières durables
                    </div>
<div className="inline-flex items-center gap-2 rounded-md border border-[#C2B280]/20 px-3 py-1.5 text-xs text-[#F5F5DC]/70">
<i className="h-4 w-4" data-lucide="zap"></i>
                      Finitions premium
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-route="" id="preorder">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-2 gap-10 items-start">

<div className="space-y-4">
<div className="relative aspect-square rounded-xl border border-[#C2B280]/20 bg-white/[0.02] overflow-hidden">

<canvas className="absolute inset-0 w-full h-full" id="product-canvas"></canvas>

<img alt="Produit sur main féminine noire" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="flex items-center gap-2 text-xs text-[#F5F5DC]/80">
<i className="h-4 w-4" data-lucide="move-3d"></i>
<span>Visualiseur 3D prêt (rotation, zoom)</span>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3">
<button className="group relative aspect-square rounded-lg border border-[#C2B280]/20 hover:border-[#C2B280]/40 overflow-hidden">
<img alt="Angle 1" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-square rounded-lg border border-[#C2B280]/20 hover:border-[#C2B280]/40 overflow-hidden">
<img alt="Angle 2" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-square rounded-lg border border-[#C2B280]/20 hover:border-[#C2B280]/40 overflow-hidden">
<img alt="Angle 3" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1554104707-a76b270e4bbb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative aspect-square rounded-lg border border-[#C2B280]/20 hover:border-[#C2B280]/40 overflow-hidden">
<img alt="Angle 4" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</button>
</div>

<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#C2B280]/20 text-xs text-[#F5F5DC]/80">
<i className="h-3.5 w-3.5 text-[#D4AF37]" data-lucide="flame"></i> Édition limitée
                  </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#C2B280]/20 text-xs text-[#F5F5DC]/80">
<i className="h-3.5 w-3.5 text-[#D4AF37]" data-lucide="badge-percent"></i> Prix de lancement
                  </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#C2B280]/20 text-xs text-[#F5F5DC]/80">
<i className="h-3.5 w-3.5 text-[#D4AF37]" data-lucide="truck"></i> Expédition Q1
                  </span>
</div>
</div>

<div className="lg:sticky lg:top-20 space-y-6">
<div className="border border-[#C2B280]/20 rounded-xl p-6 bg-white/[0.02]">
<h3 className="text-xl md:text-2xl tracking-tight font-semibold">Objet — Série Or</h3>
<p className="mt-2 text-sm text-[#F5F5DC]/70">
                    Une pièce totem, numérotée, livrée avec certificat d’authenticité.
                  </p>
<div className="mt-6 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tight text-[#D4AF37]">€ 290</div>
<div className="text-xs text-[#F5F5DC]/60">Taxes incluses</div>
</div>
<div className="mt-6 grid gap-4">

<div>
<label className="text-sm text-[#F5F5DC]/80">Finition</label>
<div className="mt-2 grid grid-cols-3 gap-2">
<button className="variant-btn selected inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#F5F5DC] hover:bg-[#D4AF37]/20 transition" data-variant="or">
<span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span> Or
                        </button>
<button className="variant-btn inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md border border-[#C2B280]/30 text-[#F5F5DC]/80 hover:border-[#C2B280]/60 hover:bg-white/[0.02] transition" data-variant="sable">
<span className="h-2 w-2 rounded-full bg-[#C2B280]"></span> Sable
                        </button>
<button className="variant-btn inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md border border-white/10 text-[#F5F5DC]/80 hover:border-white/30 hover:bg-white/[0.02] transition" data-variant="noir">
<span className="h-2 w-2 rounded-full bg-black border border-white/20"></span> Noir
                        </button>
</div>
</div>

<div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
<span className="text-sm text-[#F5F5DC]/80">Quantité</span>
<div className="flex items-center border border-[#C2B280]/20 rounded-md overflow-hidden w-full">
<button className="px-3 py-2 hover:bg-white/[0.03] border-r border-[#C2B280]/20" id="qty-decr">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<input className="w-full bg-transparent text-center py-2 text-sm outline-none" id="qty-input" min="1" type="number" value="1"/>
<button className="px-3 py-2 hover:bg-white/[0.03] border-l border-[#C2B280]/20" id="qty-incr">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-[#C2B280]/20 text-[#F5F5DC]/70" id="stock-pill">Stock: 124</span>
</div>

<div className="grid gap-2">
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#D4AF37]/90 text-black hover:bg-[#D4AF37] transition-colors" id="btn-checkout">
<i className="h-5 w-5" data-lucide="credit-card"></i>
<span className="font-medium">Payer avec Stripe</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-[#C2B280]/30 hover:border-[#C2B280]/60 hover:bg-white/[0.02] transition" id="btn-mollie">
<i className="h-5 w-5 text-[#F5F5DC]/90" data-lucide="banknote"></i>
<span className="text-[#F5F5DC]/90">Payer avec Mollie</span>
</button>
<div className="text-[11px] text-[#F5F5DC]/50 flex items-center gap-2 mt-1">
<i className="h-3.5 w-3.5" data-lucide="shield"></i>
                        Paiement 3D Secure — Exclut PayPal
                      </div>
</div>
</div>
</div>

<div className="border border-[#C2B280]/20 rounded-xl p-6 bg-white/[0.02]">
<div className="grid sm:grid-cols-3 gap-4 text-sm">
<div className="space-y-1">
<div className="text-[#F5F5DC]/60">Expédition</div>
<div className="text-[#F5F5DC]">Janvier — Mars</div>
</div>
<div className="space-y-1">
<div className="text-[#F5F5DC]/60">Garantie</div>
<div className="text-[#F5F5DC]">24 mois</div>
</div>
<div className="space-y-1">
<div className="text-[#F5F5DC]/60">Numéro</div>
<div className="text-[#F5F5DC]">Gravé</div>
</div>
</div>
</div>

<div className="border border-[#C2B280]/20 rounded-xl p-6 bg-white/[0.02]">
<details className="group">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-sm">Politique de précommande</span>
<i className="h-4 w-4 text-[#F5F5DC]/70 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="text-sm text-[#F5F5DC]/70 mt-3">
                      Débit immédiat. Annulation possible jusqu’au début de production. Remboursement intégral en cas de retard majeur.
                    </p>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-route="" id="story">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">L’Histoire</h2>
<p className="mt-4 text-lg text-[#F5F5DC]/80">
                Sous le voile du temps, un éclat survit. NEFERTITI HERITAGE naît de fragments, de tessons, d’un visage qui défie l’oubli.
                Nous avons choisi de traduire cette mémoire en matière contemporaine, respectueuse, sensible et durable.
              </p>
</div>

<div className="mt-10 rounded-xl border border-[#C2B280]/20 overflow-hidden bg-white/[0.02]">
<div className="aspect-[16/9] relative">
<video className="w-full h-full object-cover" controls="" playsinline="" poster="https://images.unsplash.com/photo-1520975778866-4673a89e93a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4"/>

</video>
<div className="absolute top-3 right-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-[#C2B280]/30 bg-black/40 text-xs">
<i className="h-4 w-4" data-lucide="film"></i> Tesson — Archive
                </div>
</div>
<div className="p-6">
<div className="grid md:grid-cols-3 gap-6 text-sm">
<div>
<div className="text-[#F5F5DC]/60">Sources</div>
<div className="text-[#F5F5DC]">Fragments, moulages, relevés</div>
</div>
<div>
<div className="text-[#F5F5DC]/60">Processus</div>
<div className="text-[#F5F5DC]">Numérisation, itération, coulée</div>
</div>
<div>
<div className="text-[#F5F5DC]/60">Intentions</div>
<div className="text-[#F5F5DC]">Hommage sans pastiche</div>
</div>
</div>
<p className="mt-6 text-[#F5F5DC]/70">
                  Nous refusons l’ornement gratuit. Les volumes, eux, parlent: lignes silencieuses, équilibre, densité.
                  Le résultat: un objet-récit, discret mais inoubliable.
                </p>
</div>
</div>

<figure className="mt-12 border-l-2 border-[#D4AF37]/50 pl-6">
<blockquote className="text-xl md:text-2xl tracking-tight text-[#F5F5DC]">
                “Le mystère n’est pas une absence de lumière, c’est la façon dont elle s’attarde.”
              </blockquote>
<figcaption className="mt-2 text-sm text-[#F5F5DC]/60">Atelier NH</figcaption>
</figure>

<div className="mt-10">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#C2B280]/30 hover:border-[#C2B280]/60 hover:bg-white/[0.02] transition" href="#preorder">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
                Précommander
              </a>
</div>
</div>
</section>

<section className="hidden" data-route="" id="admin">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

<div className="flex items-center justify-between">
<div>
<h3 className="text-2xl tracking-tight font-semibold">Dashboard</h3>
<p className="text-sm text-[#F5F5DC]/60">Back-office — Précommandes et statut des commandes</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#C2B280]/30 hover:border-[#C2B280]/60 hover:bg-white/[0.02] transition">
<i className="h-4 w-4" data-lucide="download"></i> Export CSV
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#D4AF37]/90 text-black hover:bg-[#D4AF37] transition">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i> Sync
                </button>
</div>
</div>

<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-[#C2B280]/20 p-4 bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-sm text-[#F5F5DC]/60">Précommandes</span>
<i className="h-4 w-4 text-[#D4AF37]" data-lucide="shopping-bag"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">482</div>
<div className="text-xs text-emerald-400/80">+8% cette semaine</div>
</div>
<div className="rounded-lg border border-[#C2B280]/20 p-4 bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-sm text-[#F5F5DC]/60">Revenus</span>
<i className="h-4 w-4 text-[#D4AF37]" data-lucide="coins"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">€ 139,780</div>
<div className="text-xs text-emerald-400/80">+5% cette semaine</div>
</div>
<div className="rounded-lg border border-[#C2B280]/20 p-4 bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-sm text-[#F5F5DC]/60">Conversion</span>
<i className="h-4 w-4 text-[#D4AF37]" data-lucide="ratio"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">3.9%</div>
<div className="text-xs text-[#F5F5DC]/60">Landing › Checkout</div>
</div>
<div className="rounded-lg border border-[#C2B280]/20 p-4 bg-white/[0.02]">
<div className="flex items-center justify-between">
<span className="text-sm text-[#F5F5DC]/60">Inventaire</span>
<i className="h-4 w-4 text-[#D4AF37]" data-lucide="boxes"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">518</div>
<div className="text-xs text-[#F5F5DC]/60">Sur 1,000 unités</div>
</div>
</div>

<div className="mt-8 flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-2 border border-[#C2B280]/30 rounded-md px-3 py-2 bg-white/[0.02]">
<i className="h-4 w-4" data-lucide="search"></i>
<input className="bg-transparent outline-none text-sm w-56" id="order-search" placeholder="Rechercher commande, email..." type="text"/>
</div>
<div className="inline-flex items-center gap-2">
<button className="filter-chip active inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#C2B280]/30 bg-white/[0.02] text-sm" data-filter="all">Tous</button>
<button className="filter-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#C2B280]/30 hover:bg-white/[0.02] text-sm" data-filter="paid">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Payé
                </button>
<button className="filter-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#C2B280]/30 hover:bg-white/[0.02] text-sm" data-filter="pending">
<span className="h-2 w-2 rounded-full bg-amber-400"></span> En attente
                </button>
<button className="filter-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#C2B280]/30 hover:bg-white/[0.02] text-sm" data-filter="failed">
<span className="h-2 w-2 rounded-full bg-rose-400"></span> Échec
                </button>
<button className="filter-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#C2B280]/30 hover:bg-white/[0.02] text-sm" data-filter="refunded">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> Remboursé
                </button>
</div>
</div>

<div className="mt-4 overflow-hidden rounded-lg border border-[#C2B280]/20">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/[0.02]">
<tr className="text-left text-[#F5F5DC]/60">
<th className="px-4 py-3 border-b border-[#C2B280]/20">Commande</th>
<th className="px-4 py-3 border-b border-[#C2B280]/20">Client</th>
<th className="px-4 py-3 border-b border-[#C2B280]/20">Montant</th>
<th className="px-4 py-3 border-b border-[#C2B280]/20">Statut</th>
<th className="px-4 py-3 border-b border-[#C2B280]/20">Date</th>
<th className="px-4 py-3 border-b border-[#C2B280]/20 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-[#C2B280]/10" id="orders-body">

</tbody>
</table>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-10 border-t border-[#C2B280]/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-[#F5F5DC]/60">
<div className="h-6 w-6 rounded-sm border border-[#D4AF37]/50 bg-black/60 flex items-center justify-center">
<span className="text-[#D4AF37] text-[11px] font-semibold">NH</span>
</div>
              © <span className="year">2025</span> NEFERTITI HERITAGE. Tous droits réservés.
            </div>
<div className="flex items-center gap-4 text-sm text-[#F5F5DC]/60">
<a className="hover:text-[#F5F5DC]" href="#">Mentions légales</a>
<a className="hover:text-[#F5F5DC]" href="#">Confidentialité</a>
<a className="hover:text-[#F5F5DC]" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-y-0 right-0 w-full sm:w-[420px] translate-x-full transition-transform duration-300 bg-black/95 backdrop-blur border-l border-[#C2B280]/20 z-50" id="cart-drawer">
<div className="flex items-center justify-between px-4 py-3 border-b border-[#C2B280]/20">
<div className="text-sm text-[#F5F5DC]/80">Votre panier</div>
<button className="p-2 rounded-md hover:bg-white/[0.04]" id="cart-close">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-4 h-[calc(100%-132px)] overflow-y-auto">
<div className="space-y-3" id="cart-items">

</div>
<div className="border-t border-[#C2B280]/10 pt-4 space-y-1 text-sm">
<div className="flex items-center justify-between">
<span className="text-[#F5F5DC]/60">Sous-total</span>
<span className="text-[#F5F5DC]" id="cart-subtotal">€ 0</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[#F5F5DC]/60">Frais estimés</span>
<span className="text-[#F5F5DC]">—</span>
</div>
</div>
</div>
<div className="p-4 border-t border-[#C2B280]/20">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#D4AF37]/90 text-black hover:bg-[#D4AF37] transition" id="cart-checkout">
<i className="h-5 w-5" data-lucide="credit-card"></i> Passer au paiement
        </button>
</div>
</div>

<div className="fixed inset-0 hidden items-center justify-center z-50" id="checkout-modal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative w-[92%] sm:w-[520px] rounded-xl border border-[#C2B280]/30 bg-black shadow-2xl">
<div className="flex items-center justify-between px-4 py-3 border-b border-[#C2B280]/20">
<div className="text-sm text-[#F5F5DC]/80">Résumé de précommande</div>
<button className="p-2 rounded-md hover:bg-white/[0.04]" id="checkout-close"><i className="h-5 w-5" data-lucide="x"></i></button>
</div>
<div className="p-5 space-y-5">
<div className="flex items-center gap-3">
<img alt="Produit" className="h-14 w-14 rounded-md object-cover border border-[#C2B280]/20" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="text-[#F5F5DC]">Objet — Série Or</div>
<div className="text-[#F5F5DC]/60" id="summary-variant">Finition: Or</div>
</div>
<div className="ml-auto text-sm text-[#F5F5DC]">
<span id="summary-qty">x1</span> — <span id="summary-total">€ 290</span>
</div>
</div>
<div className="text-xs text-[#F5F5DC]/60">Les paiements sont traités de manière sécurisée via Stripe. Vous serez redirigé vers une page de paiement.</div>
<div className="flex items-center gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#D4AF37]/90 text-black hover:bg-[#D4AF37] transition" id="go-stripe">
<i className="h-5 w-5" data-lucide="credit-card"></i> Continuer avec Stripe
            </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-[#C2B280]/30 hover:border-[#C2B280]/60 hover:bg-white/[0.02] transition" id="go-mollie">
<i className="h-5 w-5" data-lucide="banknote"></i> Mollie
            </button>
</div>
</div>
</div>
</div>



    </>
  );
}
