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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Data
      const interestsList = [
        'Tech', 'Fashion', 'Wellness', 'Reading', 'Art', 'Outdoors', 'Foodie',
        'Gaming', 'Self-care', 'Pets', 'Home', 'Travel', 'Music', 'Fitness'
      ];

      const products = [
        {
          id: 'p1',
          title: 'Smart Mug Warmer',
          price: 39,
          rating: 4.6,
          tags: ['Home','Office','Foodie','Tech','Budget'],
          image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p2',
          title: 'Hand-poured Soy Candle Set',
          price: 28,
          rating: 4.4,
          tags: ['Wellness','Home','Eco','Budget','Romantic'],
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p3',
          title: 'Minimalist Leather Wallet',
          price: 65,
          rating: 4.7,
          tags: ['Fashion','Travel','Premium','Partner','Classic'],
          image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b3?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p4',
          title: 'E-reader with Front Light',
          price: 119,
          rating: 4.8,
          tags: ['Tech','Reading','Travel','Premium','Teen','20s','30s'],
          image: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p5',
          title: 'Gourmet Chocolate Tasting Box',
          price: 32,
          rating: 4.5,
          tags: ['Foodie','Romantic','Budget','Partner','Anniversary'],
          image: 'https://images.unsplash.com/photo-1511389026070-a14ae610a1be?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p6',
          title: 'Personalized Name Necklace',
          price: 88,
          rating: 4.7,
          tags: ['Fashion','Romantic','Personalized','Partner'],
          image: 'https://images.unsplash.com/photo-1550903115-9f5c1c1d9e49?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p7',
          title: 'Aromatherapy Diffuser',
          price: 49,
          rating: 4.6,
          tags: ['Wellness','Home','Self-care','Parent'],
          image: 'https://images.unsplash.com/photo-1603394782853-9c9f9cb1f5f5?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p8',
          title: 'Portable Projector',
          price: 199,
          rating: 4.5,
          tags: ['Tech','Home','Movie','Premium','Family'],
          image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p9',
          title: 'Barista Coffee Grinder',
          price: 135,
          rating: 4.7,
          tags: ['Foodie','Home','Premium','20s','30s'],
          image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p10',
          title: 'Compact Massage Gun',
          price: 89,
          rating: 4.6,
          tags: ['Wellness','Fitness','Self-care','Parent','Athlete'],
          image: 'https://images.unsplash.com/photo-1599050751795-5fd1dfdfb9f0?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p11',
          title: 'Polaroid Instant Camera',
          price: 99,
          rating: 4.4,
          tags: ['Tech','Art','Teen','20s','Travel','Fun'],
          image: 'https://images.unsplash.com/photo-1510189724899-821f47e8752d?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p12',
          title: 'Pet Treat Dispenser',
          price: 55,
          rating: 4.3,
          tags: ['Pets','Home','Fun','Budget','Family'],
          image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p13',
          title: 'Gaming Headset',
          price: 79,
          rating: 4.5,
          tags: ['Gaming','Tech','Teen','Sibling','20s'],
          image: 'https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p14',
          title: 'Luxury Silk Sleep Mask',
          price: 45,
          rating: 4.6,
          tags: ['Wellness','Self-care','Romantic','Partner','Fashion'],
          image: 'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p15',
          title: 'Handmade Ceramic Mug',
          price: 26,
          rating: 4.4,
          tags: ['Art','Home','Eco','Budget','Friend'],
          image: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1600&auto=format&fit=crop'
        },
        {
          id: 'p16',
          title: 'Adventure Experience Voucher',
          price: 150,
          rating: 4.8,
          tags: ['Experiences','Outdoors','Travel','Graduation','Premium'],
          image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
        }
      ];

      const state = {
        search: '',
        sort: 'featured',
        filters: {
          tags: new Set(),
          price: { min: 0, max: 10000 },
        },
        favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]')),
        cart: JSON.parse(localStorage.getItem('cart') || '[]'),
        ai: {
          recipient: 'Partner',
          occasion: 'Birthday',
          age: '20s',
          min: 25,
          max: 150,
          interests: new Set(),
          suggestionIds: [],
        }
      };

      // Utils
      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      const money = (n) => `$${n.toFixed(0)}`;

      const interestColors = [
        'bg-white/[0.06] ring-1 ring-white/10',
        'bg-white/[0.04] ring-1 ring-white/10',
        'bg-white/[0.05] ring-1 ring-white/10'
      ];

      // Render Interests Chips
      function renderInterests() {
        const wrap = $('#interests');
        wrap.innerHTML = '';
        interestsList.forEach((name, idx) => {
          const btn = document.createElement('button');
          btn.className = `text-sm px-3 py-1.5 rounded-md ${interestColors[idx % interestColors.length]} hover:bg-white/[0.1] transition`;
          btn.textContent = name;
          btn.setAttribute('data-interest', name);
          btn.setAttribute('aria-pressed', state.ai.interests.has(name) ? 'true' : 'false');
          if (state.ai.interests.has(name)) {
            btn.classList.add('ring-2', 'ring-white/30');
          }
          btn.addEventListener('click', () => {
            if (state.ai.interests.has(name)) {
              state.ai.interests.delete(name);
              btn.setAttribute('aria-pressed', 'false');
              btn.classList.remove('ring-2', 'ring-white/30');
            } else {
              state.ai.interests.add(name);
              btn.setAttribute('aria-pressed', 'true');
              btn.classList.add('ring-2', 'ring-white/30');
            }
          });
          wrap.appendChild(btn);
        });
      }

      // Product card
      function cardHTML(p) {
        const isFav = state.favorites.has(p.id);
        return `
          <div class="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col">
            <div class="aspect-[4/3] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${p.title}" class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            </div>
            <div class="p-3 sm:p-4 flex-1 flex flex-col gap-2">
              <div class="flex items-start justify-between gap-3">
                <h3 class="text-sm font-semibold tracking-tight line-clamp-2">${p.title}</h3>
                <button data-fav="${p.id}" class="h-8 w-8 shrink-0 grid place-items-center rounded-md bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition">
                  <i data-lucide="${isFav ? 'heart' : 'heart'}" class="h-4 w-4 ${isFav ? 'text-rose-400 fill-rose-400' : 'text-white/80'}" stroke-width="1.5"></i>
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1 text-[11px] text-white/60">
                  <i data-lucide="star" class="h-3.5 w-3.5 text-yellow-300" stroke-width="1.5"></i>
                  <span>${p.rating.toFixed(1)}</span>
                </div>
                <div class="text-sm font-semibold">${money(p.price)}</div>
              </div>
              <div class="flex flex-wrap gap-1.5 mt-1">
                ${p.tags.slice(0,3).map(t => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">${t}</span>`).join('')}
              </div>
              <div class="mt-2 flex items-center gap-2">
                <button data-add="${p.id}" class="flex-1 inline-flex items-center justify-center gap-2 h-9 rounded-lg bg-white text-neutral-900 hover:bg-white/90 transition ring-1 ring-white/10">
                  <i data-lucide="plus" class="h-4 w-4" stroke-width="1.5"></i>
                  <span class="text-sm font-semibold">Add</span>
                </button>
                <button data-quick="${p.id}" class="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 text-sm">Details</button>
              </div>
            </div>
          </div>
        `;
      }

      // Render Grid
      function renderGrid(list) {
        const grid = $('#grid');
        grid.innerHTML = list.map(cardHTML).join('');
        lucide.createIcons(); // rehydrate icons

        // Bind actions
        $$('[data-add]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-add');
            addToCart(id);
          });
        });

        $$('[data-fav]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-fav');
            toggleFavorite(id);
            renderGrid(currentView()); // refresh icons
            updateFavCount();
          });
        });
      }

      // Filters, search, sorting
      function currentView() {
        const q = state.search.toLowerCase().trim();
        const { min, max } = state.filters.price;

        let arr = products.filter(p => {
          const matchesText = !q || p.title.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
          const withinPrice = p.price >= min && p.price <= max;
          const hasAllTags = state.filters.tags.size === 0 || Array.from(state.filters.tags).every(t => p.tags.includes(t));
          return matchesText && withinPrice && hasAllTags;
        });

        switch (state.sort) {
          case 'price-asc': arr.sort((a,b)=>a.price-b.price); break;
          case 'price-desc': arr.sort((a,b)=>b.price-a.price); break;
          case 'rating-desc': arr.sort((a,b)=>b.rating-a.rating); break;
          default: // featured
            arr.sort((a,b)=>b.rating - a.rating || a.price - b.price);
        }

        $('#emptyState').classList.toggle('hidden', arr.length > 0);
        return arr;
      }

      function updateActiveFiltersUI() {
        const wrap = $('#activeFilters');
        wrap.innerHTML = '';
        // Tags
        state.filters.tags.forEach(tag => {
          const chip = document.createElement('button');
          chip.className = 'text-xs px-2 py-1 rounded-md bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1] flex items-center gap-1';
          chip.innerHTML = `<span>${tag}</span><i data-lucide="x" class="h-3.5 w-3.5" stroke-width="1.5"></i>`;
          chip.addEventListener('click', () => {
            state.filters.tags.delete(tag);
            refresh();
          });
          wrap.appendChild(chip);
        });

        const price = state.filters.price;
        if (price.min !== 0 || price.max !== 10000) {
          const chip = document.createElement('button');
          chip.className = 'text-xs px-2 py-1 rounded-md bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1] flex items-center gap-1';
          chip.innerHTML = `<i data-lucide="wallet" class="h-3.5 w-3.5" stroke-width="1.5"></i><span>${money(price.min)} — ${money(price.max)}</span><i data-lucide="x" class="h-3.5 w-3.5" stroke-width="1.5"></i>`;
          chip.addEventListener('click', () => {
            state.filters.price = { min: 0, max: 10000 };
            refresh();
          });
          wrap.appendChild(chip);
        }

        lucide.createIcons();
      }

      function refresh() {
        renderGrid(currentView());
        updateActiveFiltersUI();
      }

      // Favorites
      function toggleFavorite(id) {
        if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
        localStorage.setItem('favorites', JSON.stringify(Array.from(state.favorites)));
      }
      function updateFavCount() {
        const n = state.favorites.size;
        const el = $('#favCount');
        if (n > 0) { el.textContent = n; el.classList.remove('hidden'); } else { el.classList.add('hidden'); }
      }

      // Cart
      function addToCart(id) {
        const item = products.find(p => p.id === id);
        if (!item) return;
        const existing = state.cart.find(x => x.id === id);
        if (existing) existing.qty += 1;
        else state.cart.push({ id, qty: 1 });
        localStorage.setItem('cart', JSON.stringify(state.cart));
        updateCartUI();
      }
      function removeFromCart(id) {
        state.cart = state.cart.filter(x => x.id !== id);
        localStorage.setItem('cart', JSON.stringify(state.cart));
        updateCartUI();
      }
      function setCartQty(id, qty) {
        const it = state.cart.find(x=>x.id===id);
        if (!it) return;
        it.qty = Math.max(1, qty);
        localStorage.setItem('cart', JSON.stringify(state.cart));
        updateCartUI();
      }
      function updateCartUI() {
        const count = state.cart.reduce((s,x)=>s+x.qty,0);
        const el = $('#cartCount');
        if (count > 0) { el.textContent = count; el.classList.remove('hidden'); } else { el.classList.add('hidden'); }

        const list = $('#cartItems');
        if (!list) return;
        if (state.cart.length === 0) {
          list.innerHTML = `
            <div class="text-center border border-white/10 rounded-lg p-8">
              <div class="inline-flex h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 items-center justify-center mb-2">
                <i data-lucide="shopping-bag" class="h-5 w-5" stroke-width="1.5"></i>
              </div>
              <p class="text-sm text-white/70">Your cart is empty.</p>
            </div>`;
        } else {
          list.innerHTML = state.cart.map(ci => {
            const p = products.find(x=>x.id===ci.id);
            return `
              <div class="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-16 w-16 rounded-md object-cover" alt="${p.title}" />
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between">
                    <h4 class="text-sm font-semibold tracking-tight line-clamp-1">${p.title}</h4>
                    <button class="h-8 w-8 grid place-items-center rounded-md bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20" data-remove="${p.id}">
                      <i data-lucide="trash-2" class="h-4 w-4" stroke-width="1.5"></i>
                    </button>
                  </div>
                  <div class="flex items-center justify-between mt-1">
                    <div class="inline-flex items-center gap-2">
                      <button class="h-7 w-7 grid place-items-center rounded-md bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10" data-dec="${p.id}">
                        <i data-lucide="minus" class="h-3.5 w-3.5" stroke-width="1.5"></i>
                      </button>
                      <input type="number" min="1" value="${ci.qty}" class="w-12 h-7 text-center rounded-md bg-white/[0.03] ring-1 ring-white/10 text-sm" data-qty="${p.id}" />
                      <button class="h-7 w-7 grid place-items-center rounded-md bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10" data-inc="${p.id}">
                        <i data-lucide="plus" class="h-3.5 w-3.5" stroke-width="1.5"></i>
                      </button>
                    </div>
                    <div class="text-sm font-semibold">${money(p.price * ci.qty)}</div>
                  </div>
                </div>
              </div>
            `;
          }).join('');
        }

        const subtotal = state.cart.reduce((s,ci)=> {
          const p = products.find(x=>x.id===ci.id);
          return s + p.price * ci.qty;
        }, 0);
        $('#cartSubtotal').textContent = money(subtotal);
        lucide.createIcons();

        // Bind
        $$('[data-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(b.getAttribute('data-remove'))));
        $$('[data-inc]').forEach(b => b.addEventListener('click', () => {
          const id = b.getAttribute('data-inc');
          const it = state.cart.find(x=>x.id===id);
          setCartQty(id, (it?.qty || 1) + 1);
        }));
        $$('[data-dec]').forEach(b => b.addEventListener('click', () => {
          const id = b.getAttribute('data-dec');
          const it = state.cart.find(x=>x.id===id);
          setCartQty(id, Math.max(1, (it?.qty || 1) - 1));
        }));
        $$('[data-qty]').forEach(inp => inp.addEventListener('change', () => {
          const id = inp.getAttribute('data-qty');
          const val = parseInt(inp.value || '1', 10);
          setCartQty(id, isNaN(val) ? 1 : val);
        }));
      }

      // Drawers / Overlay
      const aiDrawer = $('#aiDrawer');
      const cartDrawer = $('#cartDrawer');
      const overlay = $('#overlay');

      function openDrawer(drawer) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('pointer-events-none');
        overlay.classList.add('opacity-100');
      }
      function closeDrawer(drawer) {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('pointer-events-none');
        overlay.classList.remove('opacity-100');
      }

      // AI Finder: dropdowns
      function setupDropdown(btnId, menuId, valueId, onChange) {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        const val = document.getElementById(valueId);

        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          menu.classList.toggle('hidden');
        });
        menu.querySelectorAll('button[data-value]').forEach(opt => {
          opt.addEventListener('click', (e) => {
            const v = opt.getAttribute('data-value');
            val.textContent = v;
            menu.classList.add('hidden');
            onChange(v);
          });
        });
        document.addEventListener('click', (e) => {
          if (!menu.contains(e.target) && e.target !== btn) {
            menu.classList.add('hidden');
          }
        });
      }

      setupDropdown('ddRecipientBtn', 'ddRecipientMenu', 'ddRecipientValue', (v)=> state.ai.recipient = v);
      setupDropdown('ddOccasionBtn', 'ddOccasionMenu', 'ddOccasionValue', (v)=> state.ai.occasion = v);
      setupDropdown('ddAgeBtn', 'ddAgeMenu', 'ddAgeValue', (v)=> state.ai.age = v);

      // Budget inputs sync
      $('#budgetMin').addEventListener('change', (e)=> state.ai.min = Math.max(0, parseInt(e.target.value || '0', 10)));
      $('#budgetMax').addEventListener('change', (e)=> state.ai.max = Math.max(0, parseInt(e.target.value || '0', 10)));

      // AI logic (heuristic scoring)
      function aiSuggest({recipient, occasion, age, min, max, interests}) {
        const baseMap = {
          'Partner': ['Romantic','Partner','Personalized','Fashion','Home'],
          'Friend': ['Fun','Friend','Tech','Gaming','Art','Budget'],
          'Parent': ['Home','Wellness','Parent','Self-care','Foodie'],
          'Sibling': ['Gaming','Tech','Fun','Fashion'],
          'Colleague': ['Office','Home','Foodie','Budget']
        };
        const occMap = {
          'Birthday': ['Fun','Personalized','Tech'],
          'Anniversary': ['Romantic','Partner','Home'],
          'Graduation': ['Experiences','Tech','Travel'],
          'Wedding': ['Home','Premium','Personalized'],
          'New Baby': ['Family','Home','Kids'],
          'Just Because': ['Budget','Self-care','Foodie']
        };
        const ageMap = {
          'Child': ['Kids','Fun'],
          'Teen': ['Gaming','Tech','Fun','Art'],
          '20s': ['Tech','Travel','Fashion','Experiences'],
          '30s': ['Home','Premium','Foodie','Wellness'],
          '40s': ['Wellness','Home','Premium','Self-care'],
          '50+': ['Wellness','Home','Eco']
        };

        const wanted = new Set([...(baseMap[recipient] || []), ...(occMap[occasion] || []), ...(ageMap[age] || [])]);
        interests.forEach(t => wanted.add(t));

        // score products
        const scored = products
          .filter(p => p.price >= min && p.price <= max)
          .map(p => {
            let score = 0;
            p.tags.forEach(t => { if (wanted.has(t)) score += 2; });
            const mid = (min + max) / 2;
            score += Math.max(0, 3 - Math.abs(p.price - mid) / (max - min + 1) * 6);
            score += (p.rating - 4) * 2;
            return { p, score };
          })
          .sort((a,b)=>b.score - a.score)
          .slice(0, 6)
          .map(x => x.p);

        return scored;
      }

      function aiMessage(role, content) {
        const wrap = document.createElement('div');
        wrap.className = 'flex items-start gap-3';
        if (role === 'user') {
          wrap.innerHTML = `
            <div class="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
              <i data-lucide="user" class="h-4 w-4 text-white/80" stroke-width="1.5"></i>
            </div>
            <div class="flex-1">
              <div class="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-3">
                <p class="text-sm text-white/80">${content}</p>
              </div>
            </div>
          `;
        } else {
          wrap.innerHTML = `
            <div class="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
              <i data-lucide="bot" class="h-4 w-4 text-white/80" stroke-width="1.5"></i>
            </div>
            <div class="flex-1">
              <div class="bg-white/[0.04] ring-1 ring-white/10 rounded-lg p-3">
                <p class="text-sm text-white/80">${content}</p>
              </div>
            </div>
          `;
        }
        $('#aiMessages').appendChild(wrap);
        $('#aiMessages').scrollTop = $('#aiMessages').scrollHeight;
        lucide.createIcons();
      }

      function aiSuggestionsBlock(items) {
        const block = document.createElement('div');
        block.className = 'flex items-start gap-3';
        block.innerHTML = `
          <div class="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
            <i data-lucide="sparkles" class="h-4 w-4 text-white/80" stroke-width="1.5"></i>
          </div>
          <div class="flex-1">
            <div class="bg-white/[0.04] ring-1 ring-white/10 rounded-lg p-3">
              <p class="              text-sm text-white/80 mb-3">Here are some picks I think they'll love. You can add items directly or apply filters to focus the catalog.</p>
              <div class="mt-2 grid grid-cols-1 gap-2" data-sg></div>
            </div>
          </div>
        `;
        // Set suggestions, enable apply button
        state.ai.suggestionIds = items.map(i => i.id);
        const topTags = (() => {
          const freq = new Map();
          items.forEach(p => p.tags.forEach(t => freq.set(t, (freq.get(t) || 0) + 1)));
          return Array.from(freq.entries()).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([t])=>t);
        })();
        state.ai.suggestedTags = new Set(topTags);

        const container = document.createElement('div');
        container.appendChild(block);
        $('#aiMessages').appendChild(container.firstElementChild);

        // Render mini suggestion rows
        const holder = $('#aiMessages [data-sg]:last-of-type');
        holder.innerHTML = items.map(p => `
          <div class="flex items-center gap-3 p-2 rounded-lg bg-white/[0.03] ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" alt="${p.title}" class="h-12 w-12 rounded-md object-cover"/>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium tracking-tight truncate">${p.title}</p>
              <div class="flex items-center gap-2 text-[11px] text-white/60 mt-0.5">
                <span class="font-semibold text-white/80">${money(p.price)}</span>
                <span>•</span>
                <span class="inline-flex items-center gap-1">
                  <i data-lucide="star" class="h-3.5 w-3.5 text-yellow-300" stroke-width="1.5"></i>${p.rating.toFixed(1)}
                </span>
              </div>
            </div>
            <button data-add="${p.id}" class="h-8 px-2.5 rounded-md bg-white text-neutral-900 hover:bg-white/90 transition ring-1 ring-white/10 text-xs font-semibold">Add</button>
          </div>
        `).join('');

        // Enable apply filters
        $('#applyAISuggestions')?.removeAttribute('disabled');

        // Bind add buttons inside suggestions
        holder.querySelectorAll('[data-add]').forEach(btn => {
          btn.addEventListener('click', () => {
            addToCart(btn.getAttribute('data-add'));
          });
        });

        // Scroll + icons
        $('#aiMessages').scrollTop = $('#aiMessages').scrollHeight;
        lucide.createIcons();
      }

      // AI events
      function openAI() { openDrawer(aiDrawer); }
      function closeAI() { closeDrawer(aiDrawer); }

      $('#toggleAIDrawer').addEventListener('click', openAI);
      $('#openAIFinder').addEventListener('click', openAI);
      $('#closeAIDrawer').addEventListener('click', closeAI);

      $('#askAI').addEventListener('click', () => {
        const summary = `Recipient: ${state.ai.recipient} • Occasion: ${state.ai.occasion} • Age: ${state.ai.age} • Budget: ${money(state.ai.min)}–${money(state.ai.max)} • Interests: ${Array.from(state.ai.interests).join(', ') || 'None'}`;
        aiMessage('user', `Help me find gifts. ${summary}`);
        const ideas = aiSuggest({
          recipient: state.ai.recipient,
          occasion: state.ai.occasion,
          age: state.ai.age,
          min: state.ai.min,
          max: state.ai.max,
          interests: state.ai.interests
        });
        aiMessage('assistant', 'Here are some tailored ideas based on what you shared.');
        aiSuggestionsBlock(ideas);
        openAI();
      });

      $('#applyAISuggestions').addEventListener('click', () => {
        // Apply budget
        state.filters.price = { min: state.ai.min, max: state.ai.max };
        // Apply tags from interests + suggested tags
        state.filters.tags = new Set([
          ...Array.from(state.ai.interests || []),
          ...Array.from(state.ai.suggestedTags || [])
        ]);
        // Return to catalog and refresh
        location.hash = ''; // back home
        refresh();
        closeAI();
      });

      $('#resetAI').addEventListener('click', () => {
        // Reset AI state
        state.ai.interests.clear();
        state.ai.suggestionIds = [];
        state.ai.suggestedTags = new Set();
        $('#ddRecipientValue').textContent = state.ai.recipient = 'Partner';
        $('#ddOccasionValue').textContent = state.ai.occasion = 'Birthday';
        $('#ddAgeValue').textContent = state.ai.age = '20s';
        $('#budgetMin').value = state.ai.min = 25;
        $('#budgetMax').value = state.ai.max = 150;

        // Reset messages to intro
        const msgs = $('#aiMessages');
        msgs.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
              <i data-lucide="bot" class="h-4 w-4 text-white/80" stroke-width="1.5"></i>
            </div>
            <div class="flex-1">
              <div class="bg-white/[0.04] ring-1 ring-white/10 rounded-lg p-3">
                <p class="text-sm text-white/80">Tell me about who you’re shopping for, and I’ll suggest a few thoughtful ideas.</p>
              </div>
            </div>
          </div>
        `;
        $('#applyAISuggestions').setAttribute('disabled','true');
        renderInterests();
        lucide.createIcons();
      });

      // Cart drawer
      $('#openCart').addEventListener('click', () => openDrawer(cartDrawer));
      $('#closeCart').addEventListener('click', () => closeDrawer(cartDrawer));
      overlay.addEventListener('click', () => {
        closeDrawer(aiDrawer);
        closeDrawer(cartDrawer);
      });

      // Search
      function bindSearch(inp) {
        if (!inp) return;
        inp.addEventListener('input', (e) => {
          state.search = e.target.value || '';
          refresh();
        });
      }
      bindSearch($('#searchInput'));
      bindSearch($('#searchInputMobile'));

      // Slash to focus search (desktop)
      window.addEventListener('keydown', (e) => {
        if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          $('#searchInput')?.focus();
        }
        if (e.key === 'Escape') {
          // Close menus/drawers
          closeDrawer(aiDrawer);
          closeDrawer(cartDrawer);
          $('#sortMenu')?.classList.add('hidden');
        }
      });

      // Sort menu
      $('#sortBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        $('#sortMenu').classList.toggle('hidden');
      });
      $('#sortMenu').querySelectorAll('[data-sort]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.sort = btn.getAttribute('data-sort');
          $('#sortLabel').textContent = btn.textContent.trim();
          $('#sortMenu').classList.add('hidden');
          refresh();
        });
      });
      document.addEventListener('click', (e) => {
        if (!$('#sortMenu').contains(e.target) && e.target !== $('#sortBtn')) {
          $('#sortMenu').classList.add('hidden');
        }
      });

      // Filters clear
      $('#clearFilters').addEventListener('click', () => {
        state.filters.tags.clear();
        state.filters.price = { min:0, max: 10000 };
        state.showFavs = false;
        refresh();
      });

      // Active price input to filters sync via AI apply or guides
      function applyPriceToInputs() {
        $('#budgetMin').value = state.filters.price.min;
        $('#budgetMax').value = state.filters.price.max;
      }

      // Favorites view toggle
      state.showFavs = false;
      function updateFavoritesChip() {
        const wrap = $('#activeFilters');
        const existing = wrap.querySelector('[data-chip-fav]');
        if (state.showFavs) {
          if (!existing) {
            const chip = document.createElement('button');
            chip.setAttribute('data-chip-fav','');
            chip.className = 'text-xs px-2 py-1 rounded-md bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1] flex items-center gap-1';
            chip.innerHTML = `<i data-lucide="heart" class="h-3.5 w-3.5 text-rose-300" stroke-width="1.5"></i><span>Favorites</span><i data-lucide="x" class="h-3.5 w-3.5" stroke-width="1.5"></i>`;
            chip.addEventListener('click', () => {
              state.showFavs = false;
              refresh();
            });
            wrap.prepend(chip);
            lucide.createIcons();
          }
        } else if (existing) {
          existing.remove();
        }
      }

      const favBtn = $('#openFavorites');
      favBtn.addEventListener('click', () => {
        state.showFavs = !state.showFavs;
        location.hash = '';
        refresh();
      });

      // Extend currentView for favorites
      const originalCurrentView = currentView;
      // Replace function with favorites-aware wrapper
      currentView = function() {
        let arr = originalCurrentView();
        if (state.showFavs) {
          arr = arr.filter(p => state.favorites.has(p.id));
        }
        // Show message if no favorites
        $('#emptyState').querySelector('h3').textContent = state.showFavs ? 'No favorites yet' : 'No matches found';
        $('#emptyState').querySelector('p').textContent = state.showFavs
          ? 'Tap the heart on any gift to add it to your favorites.'
          : 'Try adjusting filters or search terms to discover more gift ideas.';
        return arr;
      };

      // Apply active filters UI extension for favorites
      const originalUpdateActiveFiltersUI = updateActiveFiltersUI;
      updateActiveFiltersUI = function() {
        originalUpdateActiveFiltersUI();
        updateFavoritesChip();
      };

      // Hash routing (home/guides)
      function show(view) {
        $('#view-home').classList.toggle('hidden', view !== 'home');
        $('#view-guides').classList.toggle('hidden', view !== 'guides');
        // Update icons just in case
        lucide.createIcons();
      }
      function route() {
        if (location.hash === '#guides') show('guides'); else show('home');
      }
      window.addEventListener('hashchange', route);

      $('#navGuides').addEventListener('click', () => {
        location.hash = '#guides';
      });
      $('#backToShop').addEventListener('click', () => {
        location.hash = '';
      });
      $('#brandHome').addEventListener('click', () => {
        location.hash = '';
      });

      // Guides: apply filters and return to home
      $$('#guidesGrid [data-guide]').forEach(card => {
        card.addEventListener('click', () => {
          const tags = (card.getAttribute('data-tags') || '')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean);
          const min = parseInt(card.getAttribute('data-min') || '0', 10);
          const max = parseInt(card.getAttribute('data-max') || '10000', 10);

          state.filters.tags = new Set(tags);
          state.filters.price = { min, max };
          state.search = '';
          state.showFavs = false;

          applyPriceToInputs();
          location.hash = '';
          refresh();
        });
      });

      // Year, initial render
      $('#year').textContent = new Date().getFullYear();
      renderInterests();
      updateFavCount();
      updateCartUI();
      refresh();
      route();
    
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
      

<div className="min-h-screen" id="app">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<button className="flex items-center gap-3 group" id="brandHome">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition">
<span className="text-sm font-semibold tracking-tight">G</span>
</div>
<div className="hidden sm:flex flex-col leading-4 text-left">
<span className="text-sm font-semibold tracking-tight">Giftly</span>
<span className="text-[11px] text-white/60">AI Gift Shop</span>
</div>
</button>

<div className="flex-1 max-w-2xl mx-4 hidden md:block" id="navSearchDesktop">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-white/[0.03] text-white placeholder-white/40 rounded-lg pl-10 pr-20 h-10 ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 outline-none transition" id="searchInput" placeholder="Search gifts, brands, interests..." type="text"/>
<div className="absolute right-1.5 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1">
<span className="text-[11px] text-white/40">Press</span>
<kbd className="px-1.5 py-0.5 text-[10px] rounded bg-white/10 text-white/70">/</kbd>
<span className="text-[11px] text-white/40">to search</span>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="navGuides">
<i className="h-4 w-4 text-white/80" data-lucide="book-open" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Guides</span>
</button>
<button className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="openAIFinder">
<i className="h-4 w-4 text-white/80" data-lucide="wand-2" strokeWidth="1.5"></i>
<span className="text-sm font-medium">AI Finder</span>
</button>
<button className="relative h-9 w-9 grid place-items-center rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="openFavorites">
<i className="h-4 w-4 text-white/80" data-lucide="heart" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-white text-neutral-900 text-[10px] font-semibold grid place-items-center hidden" id="favCount"></span>
</button>
<button className="relative h-9 w-9 grid place-items-center rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="openCart">
<i className="h-4 w-4 text-white/80" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-white text-neutral-900 text-[10px] font-semibold grid place-items-center hidden" id="cartCount"></span>
</button>
<button className="md:hidden h-9 w-9 grid place-items-center rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="openMenu">
<i className="h-4 w-4 text-white/80" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<div id="views">

<div id="view-home">

<div className="md:hidden border-b border-white/10" id="navSearchMobile">
<div className="mx-auto max-w-7xl px-4 py-3">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-white/[0.03] text-white placeholder-white/40 rounded-lg pl-10 pr-10 h-10 ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 outline-none transition" id="searchInputMobile" placeholder="Search gifts..." type="text"/>
</div>
</div>
</div>

<section className="border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="space-y-5">
<div className="inline-flex items-center gap-2 text-[11px] text-white/70 bg-white/5 ring-1 ring-white/10 px-2.5 py-1 rounded-full">
<i className="h-3.5 w-3.5" data-lucide="bot" strokeWidth="1.5"></i>
<span>AI-powered recommendations</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Find the perfect gift, instantly.
                  </h1>
<p className="text-white/70 text-sm sm:text-base max-w-xl">
                    Describe your recipient. Our assistant will curate thoughtful gifts by budget, interests, and occasion—so you can delight the people you care about.
                  </p>

<div className="flex flex-wrap gap-2 pt-1">
<span className="text-xs text-white/80 bg-white/[0.06] ring-1 ring-white/10 px-2 py-1 rounded-md">Handpicked</span>
<span className="text-xs text-white/80 bg-white/[0.06] ring-1 ring-white/10 px-2 py-1 rounded-md">Eco-friendly</span>
<span className="text-xs text-white/80 bg-white/[0.06] ring-1 ring-white/10 px-2 py-1 rounded-md">Fast shipping</span>
<span className="text-xs text-white/80 bg-white/[0.06] ring-1 ring-white/10 px-2 py-1 rounded-md">Personalized</span>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-4 sm:p-5 lg:p-6">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-white/90" data-lucide="wand-2" strokeWidth="1.5"></i>
<h3 className="text-lg font-semibold tracking-tight">AI Gift Finder</h3>
</div>
<span className="text-xs text-white/60">Beta</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="col-span-1">
<label className="block text-xs text-white/60 mb-1">Recipient</label>
<div className="relative">
<button className="w-full h-10 px-3 rounded-lg bg-white/[0.04] ring-1 ring-white/10 hover:ring-white/20 flex items-center justify-between text-sm" id="ddRecipientBtn">
<span id="ddRecipientValue">Partner</span>
<i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full bg-neutral-900 border border-white/10 rounded-lg p-1 shadow-xl" id="ddRecipientMenu">
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Partner">Partner</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Friend">Friend</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Parent">Parent</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Sibling">Sibling</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Colleague">Colleague</button>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-xs text-white/60 mb-1">Occasion</label>
<div className="relative">
<button className="w-full h-10 px-3 rounded-lg bg-white/[0.04] ring-1 ring-white/10 hover:ring-white/20 flex items-center justify-between text-sm" id="ddOccasionBtn">
<span id="ddOccasionValue">Birthday</span>
<i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full bg-neutral-900 border border-white/10 rounded-lg p-1 shadow-xl" id="ddOccasionMenu">
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Birthday">Birthday</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Anniversary">Anniversary</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Graduation">Graduation</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Wedding">Wedding</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="New Baby">New Baby</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Just Because">Just Because</button>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-xs text-white/60 mb-1">Age range</label>
<div className="relative">
<button className="w-full h-10 px-3 rounded-lg bg-white/[0.04] ring-1 ring-white/10 hover:ring-white/20 flex items-center justify-between text-sm" id="ddAgeBtn">
<span id="ddAgeValue">20s</span>
<i className="h-4 w-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full bg-neutral-900 border border-white/10 rounded-lg p-1 shadow-xl" id="ddAgeMenu">
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Child">Child</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="Teen">Teen</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="20s">20s</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="30s">30s</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="40s">40s</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-value="50+">50+</button>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-xs text-white/60 mb-1">Budget</label>
<div className="flex items-center gap-2">
<div className="flex-1 relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
<input className="w-full h-10 pl-6 pr-2 rounded-lg bg-white/[0.04] ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 outline-none text-sm" id="budgetMin" min="5" placeholder="Min" step="5" type="number" value="25"/>
</div>
<div className="text-white/40">—</div>
<div className="flex-1 relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
<input className="w-full h-10 pl-6 pr-2 rounded-lg bg-white/[0.04] ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 outline-none text-sm" id="budgetMax" min="10" placeholder="Max" step="5" type="number" value="150"/>
</div>
</div>
</div>

<div className="col-span-1 sm:col-span-2">
<label className="block text-xs text-white/60 mb-2">Interests</label>
<div className="flex flex-wrap gap-2" id="interests">

</div>
</div>
</div>
<div className="flex items-center justify-between mt-5">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="toggleAIDrawer">
<i className="h-4 w-4 text-white/80" data-lucide="message-square-text" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Open Assistant</span>
</button>
<button className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-white text-neutral-900 hover:bg-white/90 transition ring-1 ring-white/10" id="askAI">
<i className="h-4 w-4" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-sm font-semibold">Ask AI</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2 overflow-x-auto">
<button className="h-9 px-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.08] text-sm flex items-center gap-2" id="clearFilters">
<i className="h-4 w-4" data-lucide="filter-x" strokeWidth="1.5"></i>
                    Clear filters
                  </button>
<div className="flex items-center gap-2" id="activeFilters"></div>
</div>
<div className="relative">
<button className="h-9 px-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.08] text-sm flex items-center gap-2" id="sortBtn">
<i className="h-4 w-4" data-lucide="arrow-up-down" strokeWidth="1.5"></i>
<span id="sortLabel">Featured</span>
</button>
<div className="hidden absolute right-0 mt-1 w-44 bg-neutral-900 border border-white/10 rounded-lg p-1 shadow-xl z-20" id="sortMenu">
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-sort="featured">Featured</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-sort="price-asc">Price: Low to High</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-sort="price-desc">Price: High to Low</button>
<button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-white/5" data-sort="rating-desc">Top rated</button>
</div>
</div>
</div>
</div>
</section>

<main>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" id="grid">

</div>
<div className="hidden border border-white/10 rounded-xl p-10 text-center mt-6" id="emptyState">
<div className="inline-flex h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 items-center justify-center mb-3">
<i className="h-5 w-5 text-white/80" data-lucide="package-search" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-1">No matches found</h3>
<p className="text-sm text-white/60">Try adjusting filters or search terms to discover more gift ideas.</p>
</div>
</div>
</main>
</div>

<div className="hidden" id="view-guides">

<section className="border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex items-start justify-between gap-6">
<div className="space-y-4 max-w-3xl">
<div className="inline-flex items-center gap-2 text-[11px] text-white/70 bg-white/5 ring-1 ring-white/10 px-2.5 py-1 rounded-full">
<i className="h-3.5 w-3.5" data-lucide="compass" strokeWidth="1.5"></i>
<span>Curated gift guides</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Guides to make gifting easy.</h1>
<p className="text-white/70 text-sm sm:text-base">
                    Browse themed collections by budget, interests, and occasions. Pick a guide to instantly filter the catalog.
                  </p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition" id="backToShop">
<i className="h-4 w-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Back to Shop</span>
</button>
</div>
</div>
<div className="hidden lg:block">
<div className="h-28 w-28 rounded-xl bg-white/[0.03] ring-1 ring-white/10 grid place-items-center">
<i className="h-8 w-8 text-white/80" data-lucide="gift" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" id="guidesGrid">

<button className="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition text-left" data-guide="" data-max="200" data-min="0" data-tags="Tech">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Tech Lovers" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">For Tech Lovers</h3>
<i className="h-4 w-4 text-white/70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-white/60 mt-1">Gadgets and gear they’ll actually use.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Tech</span>
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Under $200</span>
</div>
</div>
</button>
<button className="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition text-left" data-guide="" data-max="50" data-min="0" data-tags="">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Under $50" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Great Under $50</h3>
<i className="h-4 w-4 text-white/70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-white/60 mt-1">Thoughtful gifts that don’t break the bank.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Budget</span>
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">$0–$50</span>
</div>
</div>
</button>
<button className="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition text-left" data-guide="" data-max="120" data-min="20" data-tags="Wellness,Self-care">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Wellness &amp; Self-care" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Wellness &amp; Self-care</h3>
<i className="h-4 w-4 text-white/70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-white/60 mt-1">Relaxing picks to recharge and unwind.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Wellness</span>
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Self-care</span>
</div>
</div>
</button>
<button className="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition text-left" data-guide="" data-max="150" data-min="25" data-tags="Partner,Romantic">
<div className="aspect-[4/3] overflow-hidden">
<img alt="For Partners" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">For Partners</h3>
<i className="h-4 w-4 text-white/70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-white/60 mt-1">Sweet, meaningful, and memorable.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Romantic</span>
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Partner</span>
</div>
</div>
</button>
<button className="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition text-left" data-guide="" data-max="200" data-min="30" data-tags="Outdoors,Travel">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Outdoor Adventures" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Outdoor Adventures</h3>
<i className="h-4 w-4 text-white/70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-white/60 mt-1">For hikers, campers, and explorers.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Outdoors</span>
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Travel</span>
</div>
</div>
</button>
<button className="group relative rounded-xl overflow-hidden bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/20 transition text-left" data-guide="" data-max="120" data-min="20" data-tags="Foodie,Home">
<div className="aspect-[4/3] overflow-hidden">
<img alt="For Foodies" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">For Foodies</h3>
<i className="h-4 w-4 text-white/70" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-white/60 mt-1">Delicious picks for the kitchen and beyond.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Foodie</span>
<span className="text-[11px] px-2 py-1 rounded bg-white/[0.06] ring-1 ring-white/10 text-white/70">Home</span>
</div>
</div>
</button>
</div>
</div>
</section>
</div>
</div>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[11px] font-semibold tracking-tight">G</span>
</div>
<p className="text-xs text-white/60">© <span id="year"></span> Giftly. All rights reserved.</p>
</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white/80" href="#">Privacy</a>
<a className="hover:text-white/80" href="#">Terms</a>
<a className="hover:text-white/80" href="#">Support</a>
</div>
</div>
</div>
</footer>

<aside className="fixed inset-y-0 right-0 w-full sm:w-[480px] bg-neutral-950 border-l border-white/10 transform translate-x-full transition-transform duration-300 z-50" id="aiDrawer">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between px-4 sm:px-5 h-14 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-white/90" data-lucide="bot" strokeWidth="1.5"></i>
<h3 className="text-base font-semibold tracking-tight">Assistant</h3>
</div>
<button className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20" id="closeAIDrawer">
<i className="h-4 w-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4" id="aiMessages">

<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
<i className="h-4 w-4 text-white/80" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<div className="bg-white/[0.04] ring-1 ring-white/10 rounded-lg p-3">
<p className="text-sm text-white/80">Tell me about who you’re shopping for, and I’ll suggest a few thoughtful ideas.</p>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 p-3 sm:p-4">
<div className="flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white text-neutral-900 hover:bg-white/90 transition ring-1 ring-white/10 disabled:opacity-50 disabled:cursor-not-allowed" id="applyAISuggestions">
<i className="h-4 w-4" data-lucide="filter" strokeWidth="1.5"></i>
<span className="text-sm font-semibold">Apply filters</span>
</button>
<button className="h-10 px-3 rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 text-sm" id="resetAI">
                Reset
              </button>
</div>
</div>
</div>
</aside>

<aside className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-neutral-950 border-l border-white/10 transform translate-x-full transition-transform duration-300 z-50" id="cartDrawer">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between px-4 sm:px-5 h-14 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-white/90" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<h3 className="text-base font-semibold tracking-tight">Your Cart</h3>
</div>
<button className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20" id="closeCart">
<i className="h-4 w-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3" id="cartItems">

</div>
<div className="border-t border-white/10 p-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Subtotal</span>
<span className="font-semibold" id="cartSubtotal">$0</span>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-lg bg-white text-neutral-900 hover:bg-white/90 transition ring-1 ring-white/10">
<i className="h-4 w-4" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-sm font-semibold">Checkout</span>
</button>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300 z-40" id="overlay"></div>
</div>




    </>
  );
}
