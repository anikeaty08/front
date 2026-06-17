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
      
          const slides = [
            {
              key: 'protein',
              bullet: 'Pick your protein',
              accent: 'amber',
              icon: 'chef-hat',
              pillText: 'Pick',
              tailText: 'your protein',
              body: 'Choose from al pastor, chicken tinga, carne asada, and more. All grilled to order.',
              badges: [
                { text: 'asada', color: 'amber', target: 'carne asada' },
                { text: 'pastor', color: 'rose', target: 'al pastor' }
              ]
            },
            {
              key: 'toppings',
              bullet: 'Choose toppings',
              accent: 'emerald',
              icon: 'layers-3',
              pillText: 'Layer',
              tailText: 'your toppings',
              body: 'Add onion, cilantro, pico, lime, and finish with your favorite salsa for the perfect bite.',
              badges: [
                { text: 'pico', color: 'emerald', target: 'pico' },
                { text: 'salsa', color: 'sky', target: 'salsa' }
              ]
            },
            {
              key: 'sides',
              bullet: 'Add sides & drinks',
              accent: 'sky',
              icon: 'cup-soda',
              pillText: 'Complete',
              tailText: 'your meal',
              body: 'Round it out with chips & guac, street corn, and a house agua fresca or horchata.',
              badges: [
                { text: 'guac', color: 'emerald', target: 'guac' },
                { text: 'horchata', color: 'amber', target: 'horchata' }
              ]
            }
          ];

          const accents = {
            amber: {
              pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200',
              iconBox: 'bg-amber-500/10 text-amber-400',
              bar: 'bg-amber-400'
            },
            emerald: {
              pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200',
              iconBox: 'bg-emerald-500/10 text-emerald-400',
              bar: 'bg-emerald-400'
            },
            sky: {
              pill: 'ring-sky-500/60 bg-sky-500/10 text-sky-200',
              iconBox: 'bg-sky-500/10 text-sky-400',
              bar: 'bg-sky-400'
            },
            rose: {
              pill: 'ring-rose-500/60 bg-rose-500/10 text-rose-200',
              iconBox: 'bg-rose-500/10 text-rose-400',
              bar: 'bg-rose-400'
            }
          };

          const highlightMap = {
            protein: ['carne asada', 'al pastor'],
            toppings: ['pico', 'salsa'],
            sides: ['guac', 'horchata']
          };

          const bulletList = document.getElementById('bulletList');
          const iconBox = document.getElementById('iconBox');
          const highlightPill = document.getElementById('highlightPill');
          const highlightTail = document.getElementById('highlightTail');
          const bodyCopy = document.getElementById('bodyCopy');
          const badgesLayer = document.getElementById('badgesLayer');

          function renderBullets(active) {
            bulletList.innerHTML = '';
            slides.forEach((s, i) => {
              const isActive = i === active;
              const row = document.createElement('button');
              row.type = 'button';
              row.setAttribute('data-index', i);
              row.className = 'group w-full flex items-center gap-3 sm:gap-4';
              row.innerHTML = `<span class="h-6 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700'} transition-colors"></span><span class="text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-medium">${s.bullet}</span>`;
              row.addEventListener('click', () => setActive(i, true));
              bulletList.appendChild(row);
            });
          }

          function setIcon(icon, accent) {
            iconBox.className = `w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accents[accent].iconBox}`;
            iconBox.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
            if (window.lucide && typeof lucide.createIcons === 'function') {
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          }

          function colorMap(name, alpha = 1) {
            const colors = {
              amber: `rgba(245,158,11,${alpha})`,
              emerald: `rgba(16,185,129,${alpha})`,
              sky: `rgba(14,165,233,${alpha})`,
              rose: `rgba(244,63,94,${alpha})`
            };
            return colors[name] || `rgba(245,158,11,${alpha})`;
          }

          function escapeRegExp(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          }

          function applyHighlights(text, slideKey, badges) {
            const tokens = (highlightMap[slideKey] || []).slice();
            let result = text;
            tokens.forEach((token, idx) => {
              const b = badges[idx];
              if (!b) return;
              const re = new RegExp(`\\b(${escapeRegExp(token)})\\b`, 'i');
              const bg = colorMap(b.color, 0.18);
              const border = colorMap(b.color, 0.35);
              result = result.replace(re, (m) => {
                return `<span class="rounded-md px-1.5 -mx-0.5 ring-1" style="background:${bg}; box-shadow: inset 0 0 0 1px ${border};">${m}</span>`;
              });
            });
            return result;
          }

          function setBadges() {
            badgesLayer.innerHTML = '';
          }

          let index = 0;
          let timer;

          function setActive(i, manual = false) {
            index = i % slides.length;
            if (index < 0) index = slides.length - 1;
            const s = slides[index];

            renderBullets(index);
            setIcon(s.icon, s.accent);

            highlightPill.className = `inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ${accents[s.accent].pill}`;
            highlightPill.textContent = s.pillText;
            highlightTail.textContent = s.tailText;
            bodyCopy.innerHTML = applyHighlights(s.body, s.key, s.badges);
            setBadges();

            if (manual) {
              clearInterval(timer);
              timer = startRotation();
            }
          }

          function startRotation() {
            return setInterval(() => setActive((index + 1) % slides.length), 4200);
          }

          renderBullets(index);
          setActive(0);
          timer = startRotation();

          const section = document.getElementById('customizer');
          section.addEventListener('mouseenter', () => clearInterval(timer));
          section.addEventListener('mouseleave', () => {
            clearInterval(timer);
            timer = startRotation();
          });

          setTimeout(() => {
            if (window.lucide && typeof lucide.createIcons === 'function') {
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          }, 100);
        


          (function () {
            function initOrderCard() {
              const root = document.getElementById('order');
              if (!root) return;

              const amountEl = root.querySelector('[data-amount]');
              const periodEl = root.querySelector('[data-period]');
              const deliveryKeyEl = root.querySelector('[data-delivery-key]');
              const deliveryValEl = root.querySelector('[data-delivery-val]');
              const btnPickup = root.querySelector('[data-mode-button="pickup"]');
              const btnDelivery = root.querySelector('[data-mode-button="delivery"]');
              const upsellSwitch = root.querySelector('[data-upsell-switch]');
              const upsellKnob = root.querySelector('[data-upsell-knob]');

              const prices = { pickup: 12.99, delivery: 14.99 };
              const addon = 4.5;
              const state = { mode: 'pickup', upsell: false };

              function money(n) {
                return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
              }

              function render() {
                const base = prices[state.mode];
                const total = base + (state.upsell ? addon : 0);
                amountEl.textContent = money(total);
                periodEl.textContent = 'combo';
                deliveryKeyEl.textContent = 'Method';
                deliveryValEl.textContent = state.mode === 'pickup' ? 'Pickup' : 'Delivery';

                // Segmented visuals
                btnPickup.classList.toggle('bg-emerald-500', state.mode === 'pickup');
                btnPickup.classList.toggle('text-white', state.mode === 'pickup');
                btnPickup.classList.toggle('text-white/80', state.mode !== 'pickup');

                btnDelivery.classList.toggle('bg-emerald-500', state.mode === 'delivery');
                btnDelivery.classList.toggle('text-white', state.mode === 'delivery');
                btnDelivery.classList.toggle('text-white/80', state.mode !== 'delivery');

                // Toggle visuals
                upsellSwitch.setAttribute('aria-checked', state.upsell ? 'true' : 'false');
                upsellSwitch.classList.toggle('bg-emerald-500', state.upsell);
                upsellSwitch.classList.toggle('bg-white/10', !state.upsell);
                upsellKnob.classList.toggle('translate-x-5', state.upsell);
                upsellKnob.classList.toggle('translate-x-0', !state.upsell);
              }

              btnPickup.addEventListener('click', () => { state.mode = 'pickup'; render(); });
              btnDelivery.addEventListener('click', () => { state.mode = 'delivery'; render(); });
              upsellSwitch.addEventListener('click', () => { state.upsell = !state.upsell; render(); });

              render();
              if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initOrderCard, { once: true });
            } else {
              initOrderCard();
            }
          })();
        


      // Icons
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      } else {
        document.addEventListener('DOMContentLoaded', function () {
          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      }

      // Chart
      (function () {
        const el = document.getElementById('ordersChart');
        if (!el) return;
        const ctx = el.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 160);
        gradient.addColorStop(0, 'rgba(16,185,129,0.25)');
        gradient.addColorStop(1, 'rgba(16,185,129,0.0)');

        new Chart(el, {
          type: 'line',
          data: {
            labels: ['10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p'],
            datasets: [{
              data: [12,22,48,76,88,64,52,90,120,110,82,40],
              borderColor: 'rgb(16,185,129)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            }
          }
        });
      })();

      // Year
      (function () {
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      })();
    
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
      

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-0 opacity-10 bg-[size:56px_56px] [background-image:linear-gradient(to_right,rgba(234,179,8,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.10)_1px,transparent_1px)]"></div>
<div className="absolute -inset-x-16 -top-24 h-[520px] md:h-[640px] bg-[radial-gradient(120%_80%_at_50%_0%,rgba(251,191,36,0.10)_0%,rgba(34,197,94,0.08)_35%,transparent_70%)]"></div>
</div>

<div className="fixed top-0 left-0 right-0 z-50 pt-6 px-6">
<div className="max-w-6xl mx-auto border border-white/10 rounded-3xl px-6 sm:px-8 py-4" style={{background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.10) 0%, rgba(34, 197, 94, 0.10) 100%)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="flame"></i>
</div>
<span className="text-lg font-semibold tracking-tight font-manrope">Tacoverse</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/70">
<li><a className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors font-manrope" href="#menu">Menu</a></li>
<li><a className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors font-manrope" href="#specials">Specials</a></li>
<li><a className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors font-manrope" href="#locations">Locations</a></li>
<li><a className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors font-manrope" href="#catering">Catering</a></li>
<li><a className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors font-manrope" href="#contact">Contact</a></li>
</ul>
<div className="flex items-center gap-3">
<a aria-label="Call" className="hover:bg-white/5 p-2 rounded-xl transition-all duration-300 border border-white/15 backdrop-blur-xl shadow-lg" href="tel:+1234567890">
<i className="w-4 h-4 text-white/70" data-lucide="phone"></i>
</a>
<button aria-label="Cart" className="relative hover:bg-white/5 p-2 rounded-xl transition-all duration-300 border border-white/15 backdrop-blur-xl shadow-lg">
<i className="w-4 h-4 text-white/70" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[10px] rounded-full flex items-center justify-center font-medium font-manrope">2</span>
</button>
</div>
</div>
</div>
</div>

<main className="relative z-10">
<section className="md:px-8 lg:px-12 md:py-24 mt-16 mb-16 pt-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="p-8 lg:p-10 shadow-xl border rounded-3xl backdrop-blur-sm border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-emerald-600/10 hover:border-amber-400/40 transition-all duration-300">
<div className="flex items-center gap-3 mb-8">
<div className="flex items-center gap-1 text-amber-400">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-neutral-400 font-manrope">4.9 • 2.4k reviews</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8 text-neutral-50 font-montserrat font-light tracking-tighter">
                  Street tacos,
                  <span className="font-light text-neutral-50 tracking-tighter font-montserrat">crafted fresh.</span>
</h1>
<p className="text-lg leading-relaxed mb-12 text-neutral-400 font-manrope">
                  Authentic flavors, handmade tortillas, and salsas that hit just right. Order online for quick pickup or fast delivery.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium shadow-lg shadow-emerald-500/25 transition-all duration-300 bg-emerald-500 hover:bg-emerald-400 text-white" href="#order">
<span className="font-manrope">Order Now</span>
<i className="w-4 h-4 ml-2" data-lucide="shopping-bag"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium border transition-all duration-300 hover:bg-white/5 text-neutral-300 border-white/15 hover:border-emerald-400/40" href="#menu">
<i className="w-4 h-4 mr-2" data-lucide="list-checks"></i>
<span className="font-manrope">View Menu</span>
</a>
</div>
<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="w-12 h-12 flex border rounded-2xl mr-auto mb-3 ml-auto items-center justify-center border-white/15 bg-white/10 backdrop-blur-xl shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="sprout"></i>
</div>
<div className="text-xs font-medium text-emerald-300 font-manrope">Fresh Ingredients</div>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="chef-hat"></i>
</div>
<div className="text-xs font-medium text-emerald-300 font-manrope">Made to Order</div>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="bike"></i>
</div>
<div className="text-xs font-medium text-emerald-300 font-manrope">Fast Delivery</div>
</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 group">
<div className="overflow-hidden border rounded-3xl shadow-2xl backdrop-blur-sm border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-amber-600/10 hover:border-emerald-400/40 transition-all duration-300">
<div className="absolute top-8 left-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border z-10 backdrop-blur-sm border-emerald-500/20 bg-white/10 text-emerald-300">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="font-manrope">Open Now</span>
</div>
<div className="h-[500px] lg:h-[650px] bg-gradient-to-br from-emerald-600/20 to-amber-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1604908554033-6c6a8020d5b4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)]"></div>
<img alt="Assorted street tacos with salsa and lime" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
<div className="border rounded-2xl p-6 backdrop-blur-xl border-white/15 bg-white/10 shadow-lg">
<div className="text-2xl text-neutral-50 font-montserrat font-light tracking-tighter">25+</div>
<div className="text-sm mt-1 text-emerald-300 font-manrope">Menu Items</div>
</div>
<div className="rounded-2xl p-6 border backdrop-blur-xl border-white/15 bg-white/10 shadow-lg">
<div className="text-2xl text-neutral-50 font-montserrat font-light tracking-tighter">~15 min</div>
<div className="text-sm mt-1 text-emerald-300 font-manrope">Avg. Pickup</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 mx-auto mb-20 px-4" id="specials">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl text-white mb-6 font-montserrat font-light tracking-tighter">
            Your cravings, <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-amber-200 font-light tracking-tighter">satisfied</span>
</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-manrope">
            Fan favorites, made fresh all day. Mix and match tacos, bowls, and sides to build your perfect meal.
          </p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-emerald-500/10 to-amber-600/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 overflow-hidden">
<div className="h-48 relative overflow-hidden bg-gradient-to-br from-emerald-600/20 to-amber-700/20">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1559718062-361155fad299?q=80&amp'}}></div>
<div className="absolute bottom-4 left-4">
<div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-6 h-6 text-white" data-lucide="utensils"></i>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight font-manrope">Al Pastor Tacos</h3>
<p className="text-neutral-400 leading-relaxed text-sm font-manrope">Marinated pork, grilled pineapple, onion, cilantro, and salsa verde on warm tortillas.</p>
<div className="mt-4 flex items-center text-xs text-emerald-300 font-manrope">
<i className="w-4 h-4 mr-2" data-lucide="flame"></i>
                Slightly spicy • Best seller
              </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 overflow-hidden">
<div className="h-32 relative overflow-hidden bg-gradient-to-br from-amber-600/20 to-orange-700/20">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1617195737497-5b7f1b3b2d49?q=80&amp'}}></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="leaf"></i>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-manrope">Veggie Bowl</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-manrope">Grilled seasonal veggies, black beans, cilantro rice, pico, and citrus crema.</p>
<div className="mt-3 flex items-center text-xs text-amber-300 font-manrope">
<i className="w-4 h-4 mr-2" data-lucide="sprout"></i>
                Vegetarian • Gluten-free options
              </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-rose-500/10 to-pink-600/10 border border-rose-500/20 hover:border-rose-400/40 transition-all duration-300 overflow-hidden">
<div className="h-40 relative overflow-hidden bg-gradient-to-br from-rose-600/20 to-pink-700/20">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1545249390-6b5b80d0b2fc?q=80&amp'}}></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="party-popper"></i>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-manrope">Taco Party Pack</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-manrope">12 tacos, 2 large sides, chips &amp; salsas. Perfect for game night or the office.</p>
<div className="mt-3 flex items-center text-xs text-rose-300 font-manrope">
<i className="w-4 h-4 mr-2" data-lucide="users"></i>
                Serves 4–6 • Catering-friendly
              </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-600/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 overflow-hidden">
<div className="h-56 relative overflow-hidden bg-gradient-to-br from-emerald-600/20 to-cyan-700/20">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1601050690597-9d5ae6e8c0d1?q=80&amp'}}></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="cup-soda"></i>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-manrope">House Aguas Frescas</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-manrope">Horchata, Jamaica, and rotating seasonal flavors brewed fresh daily.</p>
<div className="mt-3 flex items-center text-xs text-emerald-300 font-manrope">
<i className="w-4 h-4 mr-2" data-lucide="droplets"></i>
                Dairy-free • Real fruit
              </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 overflow-hidden">
<div className="h-28 relative overflow-hidden bg-gradient-to-br from-orange-600/20 to-red-700/20">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&amp'}}></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="pepper"></i>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight font-manrope">Salsa Trio</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-manrope">Mild roja, roasted verde, and habanero fire. Pick your heat level.</p>
<div className="mt-3 flex items-center text-xs text-orange-300 font-manrope">
<i className="w-4 h-4 mr-2" data-lucide="thermometer-sun"></i>
                Mild • Medium • Hot
              </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
<div className="h-36 relative overflow-hidden bg-gradient-to-br from-cyan-600/20 to-blue-700/20">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1603072387812-bbf6e3a06c46?q=80&amp'}}></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="truck"></i>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight font-manrope">Catering</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-manrope">From team lunches to weddings, we’ve got your taco bar covered.</p>
<div className="mt-3 flex items-center text-xs text-cyan-300 font-manrope">
<i className="w-4 h-4 mr-2" data-lucide="calendar-check-2"></i>
                24–48h notice • Custom menus
              </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
<div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5">
<div className="flex items-end justify-between p-6 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl text-white font-montserrat font-light tracking-tighter">Kitchen &amp; Service</h2>
<p className="hidden sm:block text-xs text-neutral-400 font-manrope">Prep time, rating, orders</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
<p className="text-sm text-neutral-400 font-manrope">Fresh, fast, consistent</p>
<p className="mt-1 text-lg font-medium tracking-tight text-white font-manrope">From grill to you</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="font-manrope">3 locations • Pickup &amp; Delivery</span>
</div>
</div>

<div className="relative md:col-span-6 md:row-span-2 border-b md:border-b-0 md:border-r border-white/10">
<div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
<img alt="Open kitchen preparing tacos" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none"></div>
<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute top-5 right-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white font-montserrat font-light tracking-tighter">~15m</div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-manrope">Avg. prep time</p>
</div>
<div className="absolute bottom-5 left-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white font-montserrat font-light tracking-tighter">4.9</div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-manrope">Customer rating</p>
</div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white font-montserrat font-light tracking-tighter">3</div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-manrope">Neighborhood spots</p>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3">
<div className="text-3xl text-white font-montserrat font-light tracking-tighter">242</div>
<p className="text-xs text-neutral-400 mt-1 font-manrope">Orders today</p>
<div className="mt-4 rounded-xl bg-black/30 ring-1 ring-white/10 p-4">
<h3 className="text-sm text-white/80 font-manrope tracking-tight">Today’s trend</h3>
<div className="mt-3">
<div className="relative w-full h-28 rounded-lg overflow-hidden ring-1 ring-white/10">
<div>
<canvas id="ordersChart"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3 border-t md:border-t border-white/10 md:border-r">
<p className="text-sm text-neutral-300 leading-relaxed font-manrope">
                We marinate, grill, and press daily. Expect bold flavors, bright salsas, and tortillas that actually taste like corn.
              </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="clock"></i>
<span className="font-manrope">Order for later</span>
</div>
</div>

<div className="p-6 md:col-span-3 border-t border-white/10">
<div className="text-3xl text-white font-montserrat font-light tracking-tighter">11a–10p</div>
<p className="text-xs text-neutral-400 mt-1 font-manrope">Daily hours</p>
</div>
</div>

<div className="md:hidden border-t border-white/10 grid grid-cols-3">
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white font-manrope">~15m</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-manrope">Prep</p>
</div>
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white font-manrope">4.9</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-manrope">Rating</p>
</div>
<div className="p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white font-manrope">3</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-manrope">Locations</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl md:px-8 md:py-24 mx-auto pt-16 px-6" id="customizer">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-montserrat font-light tracking-tighter">
              Customize your order
            </h2>
<div className="mt-10 space-y-5" id="bulletList">

</div>
</div>
<div className="relative">
<div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden">
<div className="h-12 flex items-center gap-2 px-4 border-b border-neutral-800/70 text-neutral-400 text-sm">
<i className="w-4 h-4" data-lucide="chef-hat"></i>
<span className="truncate font-manrope">Tacoverse</span>
<span className="opacity-50 font-manrope">›</span>
<span className="truncate text-neutral-300 font-manrope">Order Builder</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-neutral-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-amber-500/10 text-amber-400" id="iconBox">
<i className="w-6 h-6" data-lucide="chef-hat"></i>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ring-amber-500/60 bg-amber-500/10 text-amber-200" id="highlightPill">Pick</span>
<span className="font-montserrat font-light tracking-tighter" id="highlightTail">your protein</span>
</h3>
<div className="relative" id="badgesLayer"></div>
</div>
<p className="mt-5 text-neutral-400 leading-relaxed max-w-prose text-[17px] sm:text-lg font-manrope" id="bodyCopy">
                  Choose from <span className="rounded-md px-1.5 -mx-0.5 ring-1" style={{background: 'rgba(245, 158, 11, 0.18)', boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.35)'}}>al pastor</span>, chicken tinga, carne asada, and more. All grilled to order.
                </p>

<div className="mt-8 space-y-2">
<div className="h-3 rounded bg-neutral-800/70 w-2/3"></div>
<div className="h-3 rounded bg-neutral-800/70 w-5/6"></div>
<div className="h-3 rounded bg-neutral-800/70 w-1/2"></div>
</div>
<div className="mt-8 space-y-2 opacity-80">
<div className="h-3 rounded bg-neutral-800/70 w-11/12"></div>
<div className="h-3 rounded bg-neutral-800/70 w-2/3"></div>
<div className="h-3 rounded bg-neutral-800/70 w-3/4"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
</div>
</div>
</div>
</div>

</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mt-10 mx-auto mb-20 px-4" id="order">
<div className="relative overflow-hidden rounded-[40px] border border-emerald-500/20 bg-slate-950 text-white shadow-[0_8px_30px_rgba(16,185,129,0.18)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(16,185,129,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(245,158,11,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#10b9811a_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative sm:p-8 my-0 p-6">
<div className="flex items-center gap-2 text-sm text-emerald-300/80 font-sans">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
<span className="font-manrope">Build your combo</span>
</div>
<div className="mt-2 text-center">
<h3 className="text-[48px] sm:text-[72px] leading-none font-montserrat font-light tracking-tighter">Taco Combo</h3>
<div className="mt-5 inline-flex items-center gap-1 rounded-full bg-white/10 p-1 ring-1 ring-emerald-500/20">
<button className="text-sm tracking-tight rounded-full px-3 py-1.5 bg-emerald-500 text-white font-manrope" data-mode-button="pickup" type="button">Pickup</button>
<button className="text-sm tracking-tight rounded-full px-3 py-1.5 text-white/80 font-manrope" data-mode-button="delivery" type="button">Delivery</button>
</div>
</div>
<div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-emerald-500/20 p-4 sm:p-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-emerald-500/20 p-5 flex flex-col justify-between">
<div>
<p className="text-base font-medium tracking-tight text-emerald-200 font-manrope">Add chips &amp; guac?</p>
<p className="mt-2 text-sm text-white/70 font-manrope">Hand-crushed Hass avocados with lime and cilantro.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="text-sm">
<span className="text-emerald-300 font-manrope">+ $4.50</span>
</div>
<button aria-checked="false" className="inline-flex h-6 w-11 items-center rounded-full bg-white/10 ring-1 ring-emerald-500/20 transition-colors duration-200" data-upsell-switch="" role="switch" type="button">
<span className="h-4 w-4 translate-x-0 rounded-full bg-emerald-400 transition-transform duration-200" data-upsell-knob=""></span>
<span className="sr-only font-manrope">Toggle Chips &amp; Guac add-on</span>
</button>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-emerald-500/20 p-5 flex flex-col">
<div className="flex-1">
<div className="flex items-end gap-2">
<div className="text-5xl sm:text-6xl lg:text-7xl tabular-nums text-emerald-200 font-montserrat font-light tracking-tighter" data-amount="">$12.99</div>
<div className="pb-2 text-white/60 text-base font-manrope" data-period="">combo</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-emerald-500/20 text-xs text-white/70 flex items-center justify-between">
<span className="font-manrope" data-delivery-key="">Method</span>
<span className="font-manrope" data-delivery-val="">Pickup</span>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-emerald-500/20 p-5 flex flex-col">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-sm font-manrope">2 tacos + 1 side + 1 drink</span>
</li>
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-sm font-manrope">Fresh-pressed tortillas</span>
</li>
<li className="flex items-start gap-2">
<i className="w-5 h-5 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-sm font-manrope">Reward points on every order</span>
</li>
</ul>
<div className="mt-auto">
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white bg-emerald-500 hover:bg-emerald-400 transition-colors border border-emerald-500/20 shadow-lg shadow-emerald-500/25" href="#checkout">
<span className="font-manrope">Checkout</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>

<p className="mt-4 text-[11px] text-white/50 text-center font-manrope">No fees on pickup orders. Delivery powered by local couriers.</p>
</div>
</div>

</section>

<section className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4 mb-24" id="locations">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl ring-1 ring-white/10 p-6 bg-white/5">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="font-manrope">Downtown</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-manrope">123 Market St, Suite 5</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-white/10 rounded-full px-3 py-1.5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="clock"></i>
              11a–10p
            </div>
</div>
<div className="rounded-2xl ring-1 ring-white/10 p-6 bg-white/5">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="font-manrope">Uptown</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-manrope">456 Grove Ave</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-white/10 rounded-full px-3 py-1.5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="clock"></i>
              11a–10p
            </div>
</div>
<div className="rounded-2xl ring-1 ring-white/10 p-6 bg-white/5">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="font-manrope">Riverside</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-manrope">789 River Rd</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-white/10 rounded-full px-3 py-1.5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="clock"></i>
              11a–10p
            </div>
</div>
</div>
</section>

<footer className="w-full bg-black border-t border-white/10" id="contact">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto py-12 px-4">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="flame"></i>
</div>
<span className="text-lg font-semibold tracking-tight font-manrope">Tacoverse</span>
</div>
<p className="mt-3 text-sm text-gray-400 max-w-md font-manrope">
                Street tacos, small-batch salsas, and true hospitality. Order online or stop by any of our neighborhood spots.
              </p>
<div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
<a className="inline-flex items-center gap-2 hover:text-gray-200 transition-colors font-manrope" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i> (123) 456-7890
                </a>
<a className="inline-flex items-center gap-2 hover:text-gray-200 transition-colors font-manrope" href="mailto:hello@tacoverse.com">
<i className="w-4 h-4" data-lucide="mail"></i> hello@tacoverse.com
                </a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white font-manrope">Explore</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#menu">Menu</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#specials">Specials</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#order">Order</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#catering">Catering</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white font-manrope">Info</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#locations">Locations</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#">Careers</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#">Gift Cards</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#">Rewards</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-manrope">© <span id="year">2025</span> Tacoverse. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300 transition-colors font-manrope" href="#">Terms</a>
<a className="hover:text-gray-300 transition-colors font-manrope" href="#">Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors font-manrope" href="#top">
                Back to top
                <i className="w-3.5 h-3.5" data-lucide="chevron-up"></i>
</a>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
