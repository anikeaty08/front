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



        // --- Product Data ---
        const products = {
            'nike-af1': {
                id: 'nike-af1',
                name: 'Nike Air Force 1',
                sub: 'De klassieker.',
                price: 119.95,
                desc: 'Tijdloos wit, minimalistisch en past bij elke outfit. Ontwikkeld met revolutionaire demping voor premium comfort, de hele dag door.',
                img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                thumbs: [
                    'https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                ]
            },
            'jordan-1': {
                id: 'jordan-1',
                name: 'Air Jordan 1 High',
                sub: 'Iconisch design.',
                price: 179.95,
                desc: 'Een van de meest iconische silhouetten in de sneaker geschiedenis. Gemaakt met premium leer en de klassieke Air demping.',
                img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                thumbs: [
                    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                ]
            },
            'travis-scott': {
                id: 'travis-scott',
                name: 'Travis Scott x AJ1',
                sub: 'Cactus Jack.',
                price: 1299.95,
                desc: 'De meest gehypte samenwerking van het decennium. Omgekeerde swoosh, premium suède en verborgen stash pockets.',
                img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                thumbs: [
                    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
                ]
            }
        };

        let currentProduct = products['nike-af1'];
        let cart = [];

        // --- UI Elements ---
        const titleEl = document.getElementById('product-title');
        const descEl = document.getElementById('product-desc');
        const priceEl = document.getElementById('product-price');
        const mainImgEl = document.getElementById('main-shoe-img');
        const thumbContainer = document.getElementById('thumb-container');

        // --- Collectie Logica ---
        const collBtn = document.getElementById('collection-btn');
        const collDrop = document.getElementById('collection-dropdown');
        const collIcon = document.getElementById('collection-icon');

        collBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = !collDrop.classList.contains('opacity-0');
            if (isOpen) closeDropdown();
            else openDropdown();
        });

        document.addEventListener('click', (e) => {
            if (!collBtn.contains(e.target) && !collDrop.contains(e.target)) closeDropdown();
        });

        function openDropdown() {
            collDrop.classList.remove('opacity-0', 'invisible', 'translate-y-2');
            collIcon.style.transform = 'rotate(180deg)';
        }

        function closeDropdown() {
            collDrop.classList.add('opacity-0', 'invisible', 'translate-y-2');
            collIcon.style.transform = 'rotate(0deg)';
        }

        function formatPrice(num) {
            return '€' + num.toFixed(2).replace('.', ',');
        }

        function loadProduct(id) {
            currentProduct = products[id];
            
            // Update Text
            titleEl.innerHTML = `${currentProduct.name}. <br /> <span class="text-zinc-400">${currentProduct.sub}</span>`;
            descEl.textContent = currentProduct.desc;
            priceEl.textContent = formatPrice(currentProduct.price);
            
            // Update Image with fade
            mainImgEl.style.opacity = '0.5';
            setTimeout(() => {
                mainImgEl.src = currentProduct.img;
                mainImgEl.style.opacity = '1';
            }, 200);

            // Render Thumbnails
            thumbContainer.innerHTML = '';
            currentProduct.thumbs.forEach((thumbSrc, index) => {
                const btn = document.createElement('button');
                btn.className = `thumb-btn w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-2 overflow-hidden transition-colors ${index === 0 ? 'border-2 border-zinc-900' : 'border border-zinc-200 hover:border-zinc-400'}`;
                btn.innerHTML = `<img src="${thumbSrc}" class="w-full h-full object-contain mix-blend-multiply">`;
                btn.onclick = () => {
                    document.querySelectorAll('.thumb-btn').forEach(b => {
                        b.classList.remove('border-zinc-900', 'border-2');
                        b.classList.add('border-zinc-200', 'border');
                    });
                    btn.classList.remove('border-zinc-200', 'border');
                    btn.classList.add('border-zinc-900', 'border-2');
                    
                    mainImgEl.style.opacity = '0.5';
                    setTimeout(() => {
                        mainImgEl.src = thumbSrc.replace('&w=300', '&w=1000');
                        mainImgEl.style.opacity = '1';
                    }, 150);
                };
                thumbContainer.appendChild(btn);
            });

            closeDropdown();
        }

        // Initialize first product thumbs
        loadProduct('nike-af1');

        // --- Winkelmandje Logica ---
        const cartBadge = document.getElementById('cart-badge');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTotal = document.getElementById('cart-total');
        const checkoutTotal = document.getElementById('checkout-total');

        function addToCart() {
            const existing = cart.find(item => item.id === currentProduct.id);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...currentProduct, qty: 1 });
            }
            renderCart();
            openCart();
            
            cartBadge.classList.remove('hidden');
            setTimeout(() => cartBadge.classList.remove('scale-0'), 10);
            cartBadge.classList.add('scale-125');
            setTimeout(() => cartBadge.classList.remove('scale-125'), 200);
        }

        function updateQty(id, delta) {
            const item = cart.find(i => i.id === id);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
            renderCart();
        }

        function renderCart() {
            cartItemsContainer.innerHTML = '';
            let total = 0;
            let totalItems = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="text-center text-sm text-zinc-500 py-10">Je winkelmandje is nog leeg.</div>';
                cartBadge.classList.add('scale-0');
                setTimeout(() => { if(cart.length===0) cartBadge.classList.add('hidden'); }, 200);
            } else {
                cart.forEach(item => {
                    total += item.price * item.qty;
                    totalItems += item.qty;
                    
                    const el = document.createElement('div');
                    el.className = 'flex gap-4 p-4 border border-zinc-200 rounded-xl bg-white shadow-sm mb-4';
                    el.innerHTML = `
                        <div class="w-24 h-24 bg-zinc-50 border border-zinc-100 rounded-lg p-2 flex-shrink-0">
                            <img src="${item.img}" class="w-full h-full object-contain mix-blend-multiply">
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <div class="flex justify-between items-start">
                                    <h3 class="text-sm font-semibold text-zinc-900 leading-tight">${item.name}</h3>
                                    <button onclick="updateQty('${item.id}', -${item.qty})" class="text-zinc-400 hover:text-red-500 transition-colors">
                                        <iconify-icon icon="solar:trash-bin-trash-linear" class="text-lg"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-3">
                                <span class="text-sm font-semibold text-zinc-900">${formatPrice(item.price)}</span>
                                <div class="flex items-center border border-zinc-200 rounded-md bg-zinc-50">
                                    <button onclick="updateQty('${item.id}', -1)" class="px-2 py-1 text-zinc-500 hover:text-zinc-900 transition-colors">-</button>
                                    <span class="px-3 py-1 text-xs font-medium text-zinc-900 bg-white border-x border-zinc-200">${item.qty}</span>
                                    <button onclick="updateQty('${item.id}', 1)" class="px-2 py-1 text-zinc-500 hover:text-zinc-900 transition-colors">+</button>
                                </div>
                            </div>
                        </div>
                    `;
                    cartItemsContainer.appendChild(el);
                });
                cartBadge.textContent = totalItems;
            }

            const formattedTotal = formatPrice(total);
            cartSubtotal.textContent = formattedTotal;
            cartTotal.textContent = formattedTotal;
            checkoutTotal.textContent = formattedTotal;
        }

        // --- Slide-over / Checkout Views ---
        const cartOverlay = document.getElementById('cart-overlay');
        const cartPanel = document.getElementById('cart-panel');
        const cartView = document.getElementById('cart-view');
        const checkoutView = document.getElementById('checkout-view');
        const panelTitle = document.getElementById('panel-title');
        const panelIcon = document.getElementById('panel-icon');
        const backToCartBtn = document.getElementById('back-to-cart-btn');

        function openCart() {
            cartOverlay.classList.remove('hidden');
            void cartOverlay.offsetWidth;
            cartOverlay.classList.remove('opacity-0');
            cartPanel.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
            showCartView(); // Altijd starten in mandje
        }

        function closeCart() {
            cartOverlay.classList.add('opacity-0');
            cartPanel.classList.add('translate-x-full');
            document.body.style.overflow = ''; 
            setTimeout(() => {
                cartOverlay.classList.add('hidden');
            }, 300);
        }

        function goToCheckout() {
            if (cart.length === 0) return alert('Winkelmandje is leeg');
            cartView.classList.add('hidden');
            checkoutView.classList.remove('hidden');
            panelTitle.textContent = 'Afrekenen';
            panelIcon.setAttribute('icon', 'solar:lock-password-linear');
            backToCartBtn.classList.remove('hidden');
        }

        function showCartView() {
            checkoutView.classList.add('hidden');
            cartView.classList.remove('hidden');
            panelTitle.textContent = 'Jouw Winkelmandje';
            panelIcon.setAttribute('icon', 'solar:cart-large-2-linear');
            backToCartBtn.classList.add('hidden');
        }

        function processPayment() {
            // Fake loading state
            const btn = document.querySelector('#checkout-view button');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Bezig met verwerken...`;
            
            setTimeout(() => {
                btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon> Betaling Gelukt!`;
                btn.classList.replace('bg-zinc-900', 'bg-emerald-500');
                btn.classList.replace('hover:bg-zinc-800', 'hover:bg-emerald-600');
                
                setTimeout(() => {
                    cart = [];
                    renderCart();
                    closeCart();
                    // Reset button
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.classList.replace('bg-emerald-500', 'bg-zinc-900');
                        btn.classList.replace('hover:bg-emerald-600', 'hover:bg-zinc-800');
                    }, 300);
                }, 1500);
            }, 1500);
        }

        document.getElementById('cart-btn').addEventListener('click', openCart);
        document.getElementById('close-cart-btn').addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
        backToCartBtn.addEventListener('click', showCartView);

        // Initial render
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
      

<header className="w-full border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-md sticky top-0 z-40">
<nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
<div className="flex items-center gap-8">

<a className="tracking-tighter font-semibold text-xl text-zinc-900" href="#">AERO</a>

<div className="hidden md:flex items-center gap-6">

<div className="relative">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1.5 cursor-pointer" id="collection-btn">
                            Collectie
                            <iconify-icon className="text-xs transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="collection-icon"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-4 w-64 bg-white border border-zinc-200 rounded-xl shadow-lg opacity-0 invisible transition-all duration-200 translate-y-2 z-50 flex flex-col p-1.5" id="collection-dropdown">
<button className="w-full text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg flex items-center justify-between group" onclick="loadProduct('nike-af1')">
                                Nike Air Force 1
                                <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg flex items-center justify-between group" onclick="loadProduct('jordan-1')">
                                Air Jordan 1 High
                                <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg flex items-center justify-between group" onclick="loadProduct('travis-scott')">
                                Travis Scott x Jordan 1
                                <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#technologie">Technologie</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#over-ons">Over Ons</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center p-1">
<iconify-icon className="text-xl" icon="solar:magnifier-linear"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center p-1 relative cursor-pointer" id="cart-btn">
<iconify-icon className="text-xl" icon="solar:bag-3-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-4 h-4 bg-zinc-900 text-white text-[10px] font-semibold flex items-center justify-center rounded-full scale-0 transition-transform hidden" id="cart-badge">0</span>
</button>
<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center p-1">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
</header>

<main className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span>Direct leverbaar. Gratis verzending.</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-zinc-900 leading-tight mb-6" id="product-title">
                    Nike Air Force 1. <br/>
<span className="text-zinc-400">De klassieker.</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 mb-6 max-w-lg font-normal leading-relaxed" id="product-desc">
                    Tijdloos wit, minimalistisch en past bij elke outfit. Ontwikkeld met revolutionaire demping voor premium comfort, de hele dag door.
                </p>
<div className="mb-8 w-full">
<div className="flex items-baseline gap-3 mb-2">
<span className="text-3xl tracking-tight font-semibold text-zinc-900" id="product-price">€119,95</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<iconify-icon className="text-base" icon="solar:box-linear"></iconify-icon>
                        Authenticiteit gegarandeerd.
                    </div>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-7 py-3.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-sm" onclick="addToCart()">
                        In Winkelmand
                        <iconify-icon className="text-base" icon="solar:cart-large-2-linear"></iconify-icon>
</button>
<button className="bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 px-7 py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                        Bekijk details
                    </button>
</div>
</div>

<div className="flex flex-col gap-4 order-1 lg:order-2 w-full">
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 shadow-sm flex items-center justify-center p-8 lg:p-12 transition-all">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 to-white"></div>
<img alt="Sneaker" className="relative z-10 w-full h-full object-contain mix-blend-multiply drop-shadow-xl hover:scale-105 transition-transform duration-700 ease-out" id="main-shoe-img" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" style={{objectPosition: 'center'}}/>
<div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
<div className="bg-white/90 backdrop-blur-sm border border-zinc-200 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-800 shadow-sm flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:verified-check-linear"></iconify-icon>
                            100% Origineel
                        </div>
</div>
</div>
<div className="flex gap-3 justify-center w-full" id="thumb-container">

</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[60] hidden opacity-0 transition-opacity duration-300" id="cart-overlay"></div>
<div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform translate-x-full transition-transform duration-300 flex flex-col" id="cart-panel">

<div className="p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/50">
<div className="flex items-center gap-2">
<button className="hidden text-zinc-500 hover:text-zinc-900 transition-colors mr-2" id="back-to-cart-btn">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<iconify-icon className="text-xl text-zinc-900" icon="solar:cart-large-2-linear" id="panel-icon"></iconify-icon>
<h2 className="text-lg tracking-tight font-semibold text-zinc-900" id="panel-title">Jouw Winkelmandje</h2>
</div>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors p-1 flex items-center justify-center rounded-md hover:bg-zinc-200/50" id="close-cart-btn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 flex flex-col overflow-hidden" id="cart-view">
<div className="flex-1 overflow-y-auto p-6 cart-scroll" id="cart-items-container">

</div>

<div className="p-6 border-t border-zinc-200 bg-white">
<div className="flex justify-between mb-3 text-sm">
<span className="text-zinc-500 font-medium">Subtotaal</span>
<span className="font-medium text-zinc-900" id="cart-subtotal">€0,00</span>
</div>
<div className="flex justify-between mb-6 text-base font-semibold border-t border-zinc-100 pt-4">
<span className="text-zinc-900">Totaal</span>
<span className="text-zinc-900" id="cart-total">€0,00</span>
</div>
<p className="text-xs text-zinc-500 text-center mb-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Veilig en versleuteld afrekenen
                </p>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2" onclick="goToCheckout()">
                    Ga naar Afrekenen
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden flex-1 flex-col overflow-hidden bg-white" id="checkout-view">
<div className="flex-1 overflow-y-auto p-6 cart-scroll">

<h3 className="text-sm font-semibold text-zinc-900 mb-4">Leveringsadres</h3>
<div className="space-y-3 mb-8">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Volledige Naam</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors" placeholder="Jan Jansen" type="text"/>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-2">
<label className="block text-xs font-medium text-zinc-700 mb-1">Straat</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors" placeholder="Hoofdstraat" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Huisnr.</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors" placeholder="12B" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Postcode</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors" placeholder="1000 AA" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Stad</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-colors" placeholder="Amsterdam" type="text"/>
</div>
</div>
</div>

<h3 className="text-sm font-semibold text-zinc-900 mb-4">Betaalmethode</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors">
<input checked="" className="peer sr-only" name="payment" type="radio" value="ideal"/>
<div className="w-4 h-4 rounded-full border border-zinc-300 transition-all flex-shrink-0"></div>
<span className="text-sm font-medium text-zinc-900 flex-1">iDEAL</span>
<iconify-icon className="text-xl text-zinc-400" icon="solar:banknotes-linear"></iconify-icon>
</label>
<label className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors">
<input className="peer sr-only" name="payment" type="radio" value="creditcard"/>
<div className="w-4 h-4 rounded-full border border-zinc-300 transition-all flex-shrink-0"></div>
<span className="text-sm font-medium text-zinc-900 flex-1">Creditcard</span>
<iconify-icon className="text-xl text-zinc-400" icon="solar:card-linear"></iconify-icon>
</label>
</div>
</div>
<div className="p-6 border-t border-zinc-200 bg-white">
<div className="flex justify-between mb-4 text-sm font-semibold">
<span className="text-zinc-900">Te betalen</span>
<span className="text-zinc-900" id="checkout-total">€0,00</span>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2" onclick="processPayment()">
                    Afrekenen &amp; Bestellen
                    <iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>



    </>
  );
}
