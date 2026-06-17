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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Data Store (products.js equivalent) ---
        const DB = {
            products: [
                { id: 'p1', name: 'Alpha Stack', desc: 'Single layer protein architecture. Base configuration.', price: 8.50, cat: 'burgers', icon: 'solar:hamburger-menu-linear', color: '#FF4500', energy: '800 kcal' },
                { id: 'p2', name: 'Beta Double', desc: 'Redundant protein layers. High density output.', price: 12.00, cat: 'burgers', icon: 'solar:layers-minimalistic-linear', color: '#FF4500', energy: '1200 kcal' },
                { id: 'p3', name: 'Cryo Fluid', desc: 'Sub-zero carbonated hydration vector.', price: 4.00, cat: 'fluids', icon: 'solar:cup-hot-linear', color: '#06b6d4', energy: '200 kcal' },
                { id: 'p4', name: 'Plasma Inject', desc: 'Hyper-caffeinated neuro-stimulant compound.', price: 5.50, cat: 'fluids', icon: 'solar:bolt-linear', color: '#ec4899', energy: '150 kcal' },
                { id: 'p5', name: 'Geo-Slice', desc: 'Triangular flatbread sector with dairy polymerization.', price: 9.50, cat: 'pizza', icon: 'solar:pie-chart-2-linear', color: '#f59e0b', energy: '600 kcal' },
                { id: 'p6', name: 'Friction Sticks', desc: 'Superheated potato filaments, precisely salted.', price: 4.50, cat: 'sides', icon: 'solar:tuning-square-2-linear', color: '#eab308', energy: '400 kcal' },
                { id: 'p7', name: 'Quantum Ring', desc: 'Toroidal fried onion constructs.', price: 5.00, cat: 'sides', icon: 'solar:target-linear', color: '#eab308', energy: '450 kcal' },
                { id: 'p8', name: 'Omega Stack', desc: 'Maximum structural limit. Proceed with caution.', price: 16.50, cat: 'burgers', icon: 'solar:danger-triangle-linear', color: '#dc2626', energy: '1800 kcal' }
            ]
        };

        // --- 2. State Management (Context/Redux equivalent) ---
        const state = {
            cart: [],
            currentFilter: 'all',
            searchQuery: '',
            activeProduct: null
        };

        // --- 3. Navigation System (React Router equivalent) ---
        const nav = {
            views: ['home', 'menu', 'product', 'cart', 'checkout', 'auth', 'success', 'about'],
            go: (viewId, data = null) => {
                document.documentElement.scrollTop = 0;
                nav.views.forEach(v => {
                    const el = document.getElementById(`view-${v}`);
                    if (el) {
                        el.classList.remove('active');
                        el.classList.add('hidden');
                    }
                });
                
                const target = document.getElementById(`view-${viewId}`);
                if (target) {
                    target.classList.remove('hidden');
                    // Small timeout allows display:block to apply before opacity transition
                    setTimeout(() => target.classList.add('active'), 10);
                }

                // Ambient glow color shifts based on route
                const glow = document.getElementById('ambient-glow');
                if(viewId === 'cart' || viewId === 'checkout') glow.style.backgroundColor = 'rgba(16, 185, 129, 0.05)'; // Emerald
                else if(viewId === 'auth') glow.style.backgroundColor = 'rgba(6, 182, 212, 0.05)'; // Cyan
                else glow.style.backgroundColor = 'rgba(255, 69, 0, 0.1)'; // Orange

                // Controller logic per route
                if (viewId === 'menu') app.renderMenu();
                if (viewId === 'cart') app.renderCart();
                if (viewId === 'product' && data) {
                    state.activeProduct = DB.products.find(p => p.id === data);
                    app.renderProductDetail();
                }
                if (viewId === 'success') {
                    state.cart = [];
                    app.updateCartBadge();
                }
            }
        };

        // --- 4. Core Application Logic ---
        const app = {
            init: () => {
                app.renderMenu();
                app.updateCartBadge();
                
                // Search listener
                document.getElementById('search-input').addEventListener('input', (e) => {
                    state.searchQuery = e.target.value.toLowerCase();
                    app.renderMenu();
                });
            },

            // --- Menu Logic ---
            filterMenu: (category) => {
                state.currentFilter = category;
                document.querySelectorAll('.cat-btn').forEach(btn => {
                    btn.classList.remove('bg-stone-800', 'text-white');
                    btn.classList.add('text-stone-400');
                });
                event.target.classList.remove('text-stone-400');
                event.target.classList.add('bg-stone-800', 'text-white');
                app.renderMenu();
            },

            renderMenu: () => {
                const grid = document.getElementById('menu-grid');
                let filtered = DB.products.filter(p => {
                    const matchCat = state.currentFilter === 'all' || p.cat === state.currentFilter;
                    const matchSearch = p.name.toLowerCase().includes(state.searchQuery) || p.desc.toLowerCase().includes(state.searchQuery);
                    return matchCat && matchSearch;
                });

                if (filtered.length === 0) {
                    grid.innerHTML = `<div class="col-span-full py-12 text-center text-stone-500 text-sm">No modules match current parameters.</div>`;
                    return;
                }

                grid.innerHTML = filtered.map(p => `
                    <div class="tilt-card group relative w-full cursor-pointer" onclick="nav.go('product', '${p.id}')">
                        <div class="relative w-full aspect-[4/5] rounded-3xl bg-stone-900 border border-stone-800 shadow-lg transition-colors duration-300 group-hover:border-stone-700 overflow-hidden flex flex-col">
                            <div class="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors" onclick="event.stopPropagation(); app.addToCart('${p.id}')">
                                <iconify-icon icon="solar:cart-plus-linear" style="stroke-width: 1.5;"></iconify-icon>
                            </div>
                            
                            <div class="flex-1 flex items-center justify-center relative overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/80 z-0"></div>
                                <div class="w-32 h-32 rounded-full flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110" style="background: ${p.color}15; box-shadow: inset 0 0 20px ${p.color}10;">
                                    <div class="absolute inset-0 rounded-full border border-[${p.color}]/20 animate-[spin_10s_linear_infinite]"></div>
                                    <iconify-icon icon="${p.icon}" style="stroke-width: 1.5; color: ${p.color};" class="text-5xl drop-shadow-[0_0_10px_${p.color}80]"></iconify-icon>
                                </div>
                            </div>
                            
                            <div class="p-5 z-10 relative bg-stone-950/40 backdrop-blur-sm border-t border-stone-800/50">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <h3 class="text-base font-medium tracking-tight text-white">${p.name}</h3>
                                        <p class="text-xs text-stone-400 mt-1 truncate w-32">${p.desc}</p>
                                    </div>
                                    <span class="text-sm font-medium text-white">$${p.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');

                app.initTilt();
            },

            // --- Product Detail Logic ---
            renderProductDetail: () => {
                const p = state.activeProduct;
                if(!p) return;
                
                const container = document.getElementById('product-detail-container');
                container.innerHTML = `
                    <div class="relative w-full aspect-square rounded-[2.5rem] bg-stone-900 border border-stone-800 flex items-center justify-center overflow-hidden">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,${p.color}15,transparent_70%)]"></div>
                        <div class="w-64 h-64 rounded-full flex items-center justify-center relative z-10" style="background: ${p.color}10; box-shadow: inset 0 0 30px ${p.color}20;">
                            <div class="absolute inset-0 rounded-full border border-[${p.color}]/30 animate-[spin_8s_linear_infinite]"></div>
                            <div class="absolute inset-4 rounded-full border border-[${p.color}]/10 animate-[spin_12s_linear_infinite_reverse]"></div>
                            <iconify-icon icon="${p.icon}" style="stroke-width: 1.5; color: ${p.color};" class="text-[120px] drop-shadow-[0_0_20px_${p.color}90] animate-[pulse-neon_3s_infinite] rounded-full"></iconify-icon>
                        </div>
                    </div>
                    
                    <div class="flex flex-col justify-center">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[10px] font-medium text-stone-400 uppercase tracking-widest w-fit mb-6">
                            ID: ${p.id} // ${p.cat}
                        </div>
                        <h2 class="text-4xl md:text-5xl font-medium tracking-tighter text-white">${p.name}</h2>
                        <p class="text-base text-stone-400 mt-4 leading-relaxed">${p.desc}</p>
                        
                        <div class="flex gap-6 mt-8 py-6 border-y border-stone-800">
                            <div>
                                <p class="text-xs text-stone-500 uppercase tracking-wider mb-1">Energy Yield</p>
                                <p class="text-sm font-medium text-white">${p.energy}</p>
                            </div>
                            <div class="w-px bg-stone-800"></div>
                            <div>
                                <p class="text-xs text-stone-500 uppercase tracking-wider mb-1">Exchange Rate</p>
                                <p class="text-xl font-medium text-white tracking-tight">$${p.price.toFixed(2)}</p>
                            </div>
                        </div>

                        <div class="mt-8 space-y-6">
                            <div>
                                <p class="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3">Scale Parameter</p>
                                <div class="flex gap-2">
                                    <label class="cursor-pointer flex-1">
                                        <input type="radio" name="psize" class="sr-only peer">
                                        <div class="py-2.5 text-center rounded-xl text-xs font-medium text-stone-400 border border-stone-800 peer-checked:border-[#FF4500] peer-checked:text-white transition-colors bg-stone-900/50">Micro</div>
                                    </label>
                                    <label class="cursor-pointer flex-1">
                                        <input type="radio" name="psize" class="sr-only peer" checked>
                                        <div class="py-2.5 text-center rounded-xl text-xs font-medium text-stone-400 border border-stone-800 peer-checked:border-[#FF4500] peer-checked:text-white transition-colors bg-stone-900/50">Standard</div>
                                    </label>
                                    <label class="cursor-pointer flex-1">
                                        <input type="radio" name="psize" class="sr-only peer">
                                        <div class="py-2.5 text-center rounded-xl text-xs font-medium text-stone-400 border border-stone-800 peer-checked:border-[#FF4500] peer-checked:text-white transition-colors bg-stone-900/50">Macro</div>
                                    </label>
                                </div>
                            </div>

                            <button onclick="app.addToCart('${p.id}')" class="w-full py-4 rounded-xl bg-[#FF4500] hover:bg-[#E63E00] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                Append to Payload
                                <iconify-icon icon="solar:cart-plus-linear" style="stroke-width: 1.5;" class="text-lg"></iconify-icon>
                            </button>
                        </div>
                    </div>
                `;
            },

            // --- Cart & Checkout Logic ---
            addToCart: (productId) => {
                const product = DB.products.find(p => p.id === productId);
                const existing = state.cart.find(item => item.id === productId);
                
                if (existing) {
                    existing.qty += 1;
                } else {
                    state.cart.push({ ...product, qty: 1 });
                }
                
                app.updateCartBadge();
                app.showToast('Module Appended', `${product.name} added to payload.`);
                if(!document.getElementById('view-cart').classList.contains('hidden')) {
                    app.renderCart();
                }
            },

            updateQty: (productId, delta) => {
                const item = state.cart.find(i => i.id === productId);
                if(item) {
                    item.qty += delta;
                    if(item.qty <= 0) {
                        state.cart = state.cart.filter(i => i.id !== productId);
                    }
                }
                app.updateCartBadge();
                app.renderCart();
            },

            renderCart: () => {
                const container = document.getElementById('cart-items-container');
                const btnCheckout = document.getElementById('btn-checkout');
                
                if (state.cart.length === 0) {
                    container.innerHTML = `
                        <div class="bg-stone-900/30 border border-stone-800 rounded-3xl p-12 text-center">
                            <iconify-icon icon="solar:box-minimalistic-linear" class="text-4xl text-stone-600 mb-4"></iconify-icon>
                            <p class="text-white font-medium mb-2">Payload Empty</p>
                            <p class="text-sm text-stone-500 mb-6">No modules selected for extraction.</p>
                            <button onclick="nav.go('menu')" class="px-6 py-2 rounded-full bg-stone-800 text-white text-xs font-medium hover:bg-stone-700 transition-colors">Access Database</button>
                        </div>
                    `;
                    document.getElementById('cart-subtotal').innerText = '$0.00';
                    document.getElementById('cart-tax').innerText = '$0.00';
                    document.getElementById('cart-total').innerText = '$0.00';
                    btnCheckout.disabled = true;
                    return;
                }

                btnCheckout.disabled = false;
                let subtotal = 0;

                container.innerHTML = state.cart.map(item => {
                    subtotal += item.price * item.qty;
                    return `
                        <div class="flex items-center gap-4 bg-stone-900/30 border border-stone-800 rounded-2xl p-4 transition-colors hover:bg-stone-900/50">
                            <div class="w-16 h-16 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center relative overflow-hidden">
                                <iconify-icon icon="${item.icon}" style="color: ${item.color};" class="text-3xl relative z-10"></iconify-icon>
                                <div class="absolute inset-0 bg-[${item.color}] opacity-5"></div>
                            </div>
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-white">${item.name}</h4>
                                <p class="text-xs text-stone-500 mt-0.5">$${item.price.toFixed(2)} / unit</p>
                            </div>
                            <div class="flex items-center gap-3 bg-stone-950 border border-stone-800 rounded-xl p-1">
                                <button onclick="app.updateQty('${item.id}', -1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-stone-400 hover:bg-stone-800 hover:text-white transition-colors">
                                    <iconify-icon icon="solar:minus-linear"></iconify-icon>
                                </button>
                                <span class="text-xs font-medium w-4 text-center">${item.qty}</span>
                                <button onclick="app.updateQty('${item.id}', 1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-stone-400 hover:bg-stone-800 hover:text-white transition-colors">
                                    <iconify-icon icon="solar:add-linear"></iconify-icon>
                                </button>
                            </div>
                            <div class="w-16 text-right font-medium text-sm text-white">
                                $${(item.price * item.qty).toFixed(2)}
                            </div>
                        </div>
                    `;
                }).join('');

                const tax = subtotal * 0.08;
                const total = subtotal + tax + 2.50; // + processing fee
                
                document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
                document.getElementById('cart-tax').innerText = `$${tax.toFixed(2)}`;
                document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
            },

            updateCartBadge: () => {
                const badge = document.getElementById('cart-badge');
                const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
                if(count > 0) {
                    badge.classList.remove('scale-0');
                    badge.classList.add('scale-100');
                } else {
                    badge.classList.add('scale-0');
                    badge.classList.remove('scale-100');
                }
            },

            processCheckout: (e) => {
                e.preventDefault();
                // Simulate network request
                const btn = e.target.querySelector('button[type="submit"]');
                const origText = btn.innerText;
                btn.innerHTML = `<iconify-icon icon="solar:refresh-linear" class="animate-spin text-lg"></iconify-icon> Processing...`;
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = origText;
                    btn.disabled = false;
                    e.target.reset();
                    nav.go('success');
                }, 1500);
            },

            processAuth: (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button[type="submit"]');
                const origText = btn.innerText;
                btn.innerHTML = `<iconify-icon icon="solar:refresh-linear" class="animate-spin text-lg"></iconify-icon> Handshake...`;
                
                setTimeout(() => {
                    btn.innerHTML = origText;
                    app.showToast('Auth Success', 'Uplink established. Identity verified.');
                    nav.go('home');
                }, 1000);
            },

            // --- Utilities ---
            showToast: (title, msg) => {
                const t = document.getElementById('toast');
                document.getElementById('toast-title').innerText = title;
                document.getElementById('toast-msg').innerText = msg;
                
                t.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
                
                if(app.toastTimer) clearTimeout(app.toastTimer);
                app.toastTimer = setTimeout(() => {
                    t.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
                }, 3000);
            },

            initTilt: () => {
                document.querySelectorAll('.tilt-card').forEach(card => {
                    const inner = card.firstElementChild;
                    card.addEventListener('mousemove', e => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = ((y - centerY) / centerY) * -8;
                        const rotateY = ((x - centerX) / centerX) * 8;
                        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    });
                    card.addEventListener('mouseleave', () => {
                        inner.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
                    });
                });
            }
        };

        // Initialize system
        document.addEventListener('DOMContentLoaded', app.init);
    
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
      

<div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#292524_1px,transparent_1px)] [background-size:24px_24px] opacity-80 pointer-events-none"></div>
<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF4500]/10 blur-[120px] pointer-events-none transition-all duration-1000 ease-in-out" id="ambient-glow"></div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-stone-950/80 border-b border-stone-800/80">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<button className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity" onclick="nav.go('home')">
<iconify-icon className="text-[#FF4500]" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    VRTX
                </button>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-stone-400">
<button className="hover:text-white transition-colors" onclick="nav.go('menu')">Menu</button>
<button className="hover:text-white transition-colors" onclick="nav.go('about')">Architecture</button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full hover:bg-stone-900 transition-colors text-stone-400 hover:text-white" onclick="nav.go('auth')">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-900 transition-colors text-stone-400 hover:text-white relative group" onclick="nav.go('cart')">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-[#FF4500] rounded-full shadow-[0_0_8px_#FF4500] scale-0 transition-transform duration-300" id="cart-badge"></span>
</button>
<button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-900 transition-colors text-stone-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow w-full">

<div className="page-view active max-w-7xl mx-auto px-6 lg:px-12" id="view-home">
<section className="py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 text-xs font-medium text-[#FF4500] mb-8 shadow-[0_0_15px_rgba(255,69,0,0.1)]">
<iconify-icon className="text-sm" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        System nominal. Ready to deploy.
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] text-white">
                        Fast food,<br/>engineered.
                    </h1>
<p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-lg">
                        Experience the perfect geometry of flavor. Premium ingredients stacked with absolute precision, delivered at lightspeed.
                    </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white text-sm font-medium rounded-full transition-all shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_25px_rgba(255,69,0,0.5)] hover:-translate-y-0.5" onclick="nav.go('menu')">
                            Initialize Order
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 text-sm font-medium rounded-full transition-all shadow-sm" onclick="nav.go('about')">
                            View Database
                        </button>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center group cursor-crosshair" style={{perspective: '1200px'}}>
<div className="absolute inset-0 bg-[#FF4500]/10 rounded-full blur-[80px] scale-75 group-hover:bg-[#FF4500]/20 transition-all duration-1000 pointer-events-none"></div>
<div className="relative w-64 h-80 transition-transform duration-1000 ease-out group-hover:[transform:rotateX(-10deg)_rotateY(25deg)_scale(1.05)]" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute left-0 right-0 top-12 h-20 bg-stone-800 rounded-t-[4rem] rounded-b-xl shadow-lg border-b border-stone-700 transition-transform duration-1000 ease-out group-hover:[transform:translateY(-60px)_translateZ(60px)]"></div>

<div className="absolute left-[-10px] right-[-10px] top-32 h-6 bg-emerald-500/80 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] opacity-90 transition-transform duration-1000 ease-out group-hover:[transform:translateY(-20px)_translateZ(30px)_rotate(-2deg)]"></div>

<div className="absolute left-2 right-2 top-36 h-3 bg-yellow-500/90 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-transform duration-1000 ease-out group-hover:[transform:translateY(-5px)_translateZ(15px)_rotate(3deg)]"></div>

<div className="absolute left-1 right-1 top-40 h-12 bg-stone-900 border border-stone-700 rounded-xl shadow-2xl transition-transform duration-1000 ease-out group-hover:[transform:translateY(10px)_translateZ(0px)]"></div>

<div className="absolute left-2 right-2 top-52 h-14 bg-stone-800 rounded-b-[3rem] rounded-t-lg shadow-md border-t border-stone-700 transition-transform duration-1000 ease-out group-hover:[transform:translateY(40px)_translateZ(-30px)]"></div>
</div>
</div>
</section>
</div>

<div className="page-view hidden max-w-7xl mx-auto px-6 lg:px-12 py-12" id="view-menu">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white">Module Database</h2>
<p className="mt-2 text-sm text-stone-400">Select parameters to filter the grid.</p>
</div>
<div className="flex items-center gap-4 bg-stone-900/50 p-2 rounded-2xl border border-stone-800 backdrop-blur-md">
<div className="relative flex-1 md:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-stone-950 border border-stone-800 rounded-xl py-2 pl-9 pr-4 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all" id="search-input" placeholder="Query database..." type="text"/>
</div>
<div className="flex items-center gap-1" id="category-filters">
<button className="cat-btn active px-4 py-2 rounded-xl bg-stone-800 text-white text-xs font-medium transition-colors" onclick="app.filterMenu('all')">All</button>
<button className="cat-btn px-4 py-2 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white text-xs font-medium transition-colors" onclick="app.filterMenu('burgers')">Burgers</button>
<button className="cat-btn px-4 py-2 rounded-xl text-stone-400 hover:bg-stone-800 hover:text-white text-xs font-medium transition-colors" onclick="app.filterMenu('fluids')">Fluids</button>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="menu-grid">

</div>
</div>

<div className="page-view hidden max-w-5xl mx-auto px-6 lg:px-12 py-12" id="view-product">
<button className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors mb-8 group" onclick="nav.go('menu')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Return to Matrix
            </button>
<div className="grid md:grid-cols-2 gap-12" id="product-detail-container">

</div>
</div>

<div className="page-view hidden max-w-4xl mx-auto px-6 lg:px-12 py-12" id="view-cart">
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">Active Payload</h2>
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-4" id="cart-items-container">

</div>
<div className="bg-stone-900/50 backdrop-blur-md rounded-3xl p-6 border border-stone-800 h-fit sticky top-24">
<h3 className="text-lg font-medium text-white mb-6">Computational Summary</h3>
<div className="space-y-3 text-sm text-stone-400 mb-6">
<div className="flex justify-between"><span>Subtotal</span><span className="text-white" id="cart-subtotal"></span></div>
<div className="flex justify-between"><span>Processing Fee</span><span className="text-white">$2.50</span></div>
<div className="flex justify-between"><span>Tax Rate (8%)</span><span className="text-white" id="cart-tax"></span></div>
</div>
<div className="h-px w-full bg-stone-800 mb-6"></div>
<div className="flex justify-between text-base font-medium text-white mb-8">
<span>Total Output</span>
<span className="text-[#FF4500]" id="cart-total"></span>
</div>
<button className="w-full py-3 rounded-xl bg-[#FF4500] hover:bg-[#E63E00] text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(255,69,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" id="btn-checkout" onclick="nav.go('checkout')">
                        Execute Checkout
                        <iconify-icon icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="page-view hidden max-w-3xl mx-auto px-6 lg:px-12 py-12" id="view-checkout">
<button className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors mb-8" onclick="nav.go('cart')">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Amend Payload
            </button>
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">Finalize Vector</h2>
<form className="bg-stone-900/30 rounded-3xl p-8 border border-stone-800 space-y-8" onsubmit="app.processCheckout(event)">
<div className="space-y-6">
<h3 className="text-sm font-medium text-[#FF4500] tracking-wider uppercase">Node Coordinates</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-stone-400">Designation (Name)</label>
<input className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors appearance-none" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-stone-400">Comms Link (Email)</label>
<input className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors appearance-none" required="" type="email"/>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-xs text-stone-400">Drop Zone (Address)</label>
<input className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors appearance-none" required="" type="text"/>
</div>
</div>
</div>
<div className="h-px w-full bg-stone-800/60"></div>
<div className="space-y-6">
<h3 className="text-sm font-medium text-[#FF4500] tracking-wider uppercase">Energy Transfer</h3>
<div className="space-y-4">
<label className="flex items-center gap-4 p-4 rounded-xl border border-stone-700 bg-stone-900 cursor-pointer hover:border-stone-600 transition-colors">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" name="payment" type="radio"/>
<div className="w-5 h-5 rounded-full border-2 border-stone-600 peer-checked:border-[#FF4500] transition-colors"></div>
<div className="absolute w-2.5 h-2.5 rounded-full bg-[#FF4500] scale-0 peer-checked:scale-100 transition-transform"></div>
</div>
<span className="text-sm font-medium text-white">Quantum Link (Credit Card)</span>
<iconify-icon className="ml-auto text-stone-400 text-xl" icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-9">
<input className="col-span-2 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] transition-colors appearance-none" placeholder="Card Number" required="" type="text"/>
<input className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] transition-colors appearance-none" placeholder="MM/YY" required="" type="text"/>
<input className="bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] transition-colors appearance-none" placeholder="CVC" required="" type="text"/>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full py-4 rounded-xl bg-[#FF4500] hover:bg-[#E63E00] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]" type="submit">
                        Transmit Order
                    </button>
</div>
</form>
</div>

<div className="page-view hidden flex items-center justify-center min-h-[70vh] px-6" id="view-auth">
<div className="w-full max-w-md bg-stone-900/50 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-stone-800 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent opacity-50"></div>
<div className="text-center mb-8">
<div className="w-12 h-12 rounded-2xl bg-[#FF4500]/10 flex items-center justify-center mx-auto mb-4 border border-[#FF4500]/20">
<iconify-icon className="text-2xl text-[#FF4500]" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white">Identify Entity</h2>
<p className="text-xs text-stone-400 mt-2">Establish uplink to access saved parameters.</p>
</div>
<form className="space-y-4" onsubmit="app.processAuth(event)">
<div className="space-y-1">
<label className="text-xs text-stone-500 font-medium ml-1">Identifier</label>
<input className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#FF4500] transition-colors appearance-none" placeholder="sys.admin@vrtx.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-stone-500 font-medium ml-1">Access Key</label>
<input className="w-full bg-stone-950/50 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#FF4500] transition-colors appearance-none" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between py-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-stone-700 bg-stone-950 peer-checked:bg-[#FF4500] peer-checked:border-[#FF4500] transition-colors"></div>
<iconify-icon className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-xs text-stone-400 group-hover:text-stone-300">Maintain Link</span>
</label>
<a className="text-xs text-[#FF4500] hover:text-white transition-colors" href="#">Recover Key?</a>
</div>
<button className="w-full py-3 mt-2 rounded-xl bg-stone-100 hover:bg-white text-stone-950 text-sm font-semibold transition-colors" type="submit">
                        Authenticate
                    </button>
<div className="text-center mt-6">
<span className="text-xs text-stone-500">New biological entity?</span>
<button className="text-xs text-white hover:text-[#FF4500] transition-colors ml-1 font-medium" type="button">Initialize Node</button>
</div>
</form>
</div>
</div>

<div className="page-view hidden flex flex-col items-center justify-center min-h-[60vh] px-6 text-center" id="view-success">
<div className="w-24 h-24 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 rounded-full border-t-2 border-[#FF4500] animate-spin opacity-20"></div>
<iconify-icon className="text-4xl text-[#FF4500] drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">Transmission Complete</h2>
<p className="text-sm text-stone-400 max-w-md mx-auto mb-8">
                Your parameters have been logged. The fabrication sequence has initiated. Tracking coordinates will be sent to your comms link.
            </p>
<button className="px-8 py-3 rounded-full bg-stone-900 border border-stone-800 text-white text-sm font-medium hover:bg-stone-800 transition-colors" onclick="nav.go('home')">
                Return to Core Matrix
            </button>
</div>

<div className="page-view hidden max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center" id="view-about">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">System Architecture</h2>
<p className="text-lg text-stone-400 leading-relaxed mb-12">
                VRTX is a manifestation of absolute efficiency applied to culinary engineering. We discarded traditional cooking paradigms to build a fabrication matrix capable of synthesizing optimal flavor profiles with mathematical precision. No chaos, just geometry.
            </p>
<div className="grid sm:grid-cols-3 gap-8">
<div className="bg-stone-900/30 p-6 rounded-3xl border border-stone-800">
<iconify-icon className="text-3xl text-[#FF4500] mb-4" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Algorithmic Assembly</h3>
<p className="text-xs text-stone-500">Variables measured to the microgram.</p>
</div>
<div className="bg-stone-900/30 p-6 rounded-3xl border border-stone-800">
<iconify-icon className="text-3xl text-[#FF4500] mb-4" icon="solar:routing-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Vector Delivery</h3>
<p className="text-xs text-stone-500">Optimized routing algorithms cut transit time by 42%.</p>
</div>
<div className="bg-stone-900/30 p-6 rounded-3xl border border-stone-800">
<iconify-icon className="text-3xl text-[#FF4500] mb-4" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Encrypted Quality</h3>
<p className="text-xs text-stone-500">Thermal integrity sealed until destination node reached.</p>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 bg-stone-900 border border-stone-800 shadow-2xl rounded-2xl p-4 flex items-center gap-4 z-50 transition-all duration-300 translate-y-24 opacity-0 pointer-events-none" id="toast">
<div className="w-10 h-10 rounded-full bg-[#FF4500]/20 flex items-center justify-center">
<iconify-icon className="text-xl text-[#FF4500]" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="pr-6">
<p className="text-sm font-medium text-white" id="toast-title">System Alert</p>
<p className="text-xs text-stone-400" id="toast-msg">Operation successful.</p>
</div>
</div>

<footer className="border-t border-stone-800 bg-stone-950 mt-auto py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-medium tracking-tighter text-white">VRTX</span>
<span className="text-xs text-stone-500">CORE.LOGIC © 2024</span>
</div>
<div className="flex items-center gap-4">
<div className="w-px h-4 bg-stone-800"></div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-xs font-normal text-stone-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10B981] animate-pulse"></span>
                    Mainframe Online
                </div>
</div>
</div>
</footer>



    </>
  );
}
