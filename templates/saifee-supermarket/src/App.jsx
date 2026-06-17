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



        const products = [
            { id: 1, name: "Fresh Hass Avocado", price: 14.50, oldPrice: 18.00, cat: "fresh", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400", isOffer: true, unit: "per kg" },
            { id: 2, name: "Organic Bananas", price: 8.90, oldPrice: null, cat: "fresh", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400", isOffer: false, unit: "per bunch" },
            { id: 3, name: "Fresh Full Fat Milk", price: 12.00, oldPrice: null, cat: "dairy", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400", isOffer: false, unit: "2 Liters" },
            { id: 4, name: "Angus Beef Ribeye", price: 65.00, oldPrice: 85.00, cat: "meat", img: "https://images.unsplash.com/photo-1604829717255-c92544798d5e?auto=format&fit=crop&q=80&w=400", isOffer: true, unit: "per 500g" },
            { id: 5, name: "Spaghetti Pasta", price: 9.50, oldPrice: null, cat: "pantry", img: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&q=80&w=400", isOffer: false, unit: "500g" },
            { id: 6, name: "Fresh Salmon Fillet", price: 48.00, oldPrice: 55.00, cat: "meat", img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=400", isOffer: true, unit: "per 500g" }
        ];

        function createProductCard(p) {
            return `
            <div class="product-card bg-white border border-stone-200 rounded-2xl p-4 flex flex-col relative group h-full">
                ${p.isOffer ? `<span class="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-md">-20%</span>` : ''}
                <button class="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-white shadow-sm transition-all border border-stone-100">
                    <iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
                </button>
                <div class="aspect-square bg-stone-50 rounded-xl mb-4 overflow-hidden">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="flex-1 flex flex-col">
                    <span class="text-xs text-stone-400 mb-1 uppercase tracking-wider">${p.cat}</span>
                    <h3 class="font-medium text-sm text-stone-900 mb-1 line-clamp-2 flex-1">${p.name}</h3>
                    <div class="text-xs text-stone-500 mb-3">${p.unit}</div>
                    <div class="flex items-center justify-between mt-auto">
                        <div>
                            <span class="font-heading font-semibold text-lg text-emerald-700">AED ${p.price.toFixed(2)}</span>
                            ${p.oldPrice ? `<span class="text-xs text-stone-400 line-through ml-1.5">AED ${p.oldPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <button class="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-sm">
                            <iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>`;
        }

        function renderProducts() {
            const homeGrid = document.getElementById('home-featured-grid');
            const shopGrid = document.getElementById('shop-full-grid');
            const offersGrid = document.getElementById('offers-grid');
            
            let allHtml = products.map(createProductCard).join('');
            let offersHtml = products.filter(p => p.isOffer).map(createProductCard).join('');

            if(homeGrid) homeGrid.innerHTML = allHtml;
            if(shopGrid) shopGrid.innerHTML = allHtml + allHtml;
            if(offersGrid) offersGrid.innerHTML = offersHtml + offersHtml;
        }

        function navigateTo(pageId) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById('page-' + pageId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const menu = document.getElementById('mobileMenu');
            if(menu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        }

        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        }

        function toggleDrawer(id) {
            document.getElementById(id).classList.toggle('open');
            document.body.style.overflow = document.getElementById(id).classList.contains('open') ? 'hidden' : '';
        }

        document.addEventListener('DOMContentLoaded', renderProducts);
    
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
      

<div className="bg-emerald-900 text-white text-xs text-center py-2.5 tracking-wide font-medium relative overflow-hidden w-full">
<div className="animate-marquee whitespace-nowrap inline-flex items-center gap-8">
<span className="flex items-center gap-1.5"><iconify-icon className="text-emerald-300" icon="solar:delivery-linear" width="16"></iconify-icon>Free delivery in Jumeirah &amp; Al Wasl on orders over AED 100</span>
<span className="text-emerald-400">•</span>
<span>Open 7 days a week</span>
<span className="text-emerald-400">•</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-emerald-300" icon="solar:clock-circle-linear" width="16"></iconify-icon>Delivery in under 60 minutes</span>
<span className="text-emerald-400">•</span>
<span>3 Locations across Dubai</span>
<span className="text-emerald-400">•</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-emerald-300" icon="solar:delivery-linear" width="16"></iconify-icon>Free delivery in Jumeirah &amp; Al Wasl on orders over AED 100</span>
<span className="text-emerald-400">•</span>
<span>Open 7 days a week</span>
</div>
</div>

<header className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-stone-200/50 shadow-sm transition-all duration-300">
<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 h-16 md:h-20 flex items-center justify-between gap-4">
<div className="flex items-center gap-3 md:hidden">
<button className="text-stone-700 p-2 hover:bg-stone-100 rounded-lg active:scale-95 transition-transform" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<a className="flex flex-col items-center shrink-0 hover:scale-[1.02] transition-transform cursor-pointer group select-none z-10" href="#" onclick="event.preventDefault(); navigateTo('home')">
<h1 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-red-600 leading-none">SAIFEE</h1>
<span className="text-xs tracking-[0.2em] text-emerald-800 font-medium scale-[0.8]">SUPERMARKET</span>
</a>
<div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
<div className="relative w-full">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none z-10" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<input className="w-full bg-stone-100 border border-transparent rounded-xl py-2.5 pl-12 pr-4 text-sm focus:bg-white focus:border-emerald-300 focus:ring-4 focus:ring-emerald-50 placeholder:text-stone-400 transition-all outline-none" placeholder="Search for groceries, fruits, dairy..." type="text"/>
</div>
</div>
<div className="flex items-center gap-1 md:gap-3">
<button className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-lg hover:bg-stone-100">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="relative p-2 text-stone-600 transition-colors rounded-lg hover:bg-stone-100 hidden md:flex" onclick="toggleDrawer('wishlist-drawer')">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-medium w-4 h-4 rounded-full flex items-center justify-center opacity-0 transition-opacity" id="wishlist-badge">0</span>
</button>
<div className="hidden md:block h-6 w-px bg-stone-200 mx-1"></div>
<button className="relative p-2 text-stone-700 hover:text-emerald-800 transition-colors rounded-lg hover:bg-emerald-50 flex items-center gap-2 btn-ripple" onclick="toggleDrawer('cart-drawer')">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="absolute top-1 right-1 bg-emerald-600 text-white text-xs font-medium w-4 h-4 rounded-full flex items-center justify-center opacity-0 transition-opacity" id="cart-badge">0</span>
<span className="text-sm font-medium text-emerald-800 hidden md:block" id="cart-total-header">AED 0.00</span>
</button>
</div>
</div>

<div className="hidden md:block border-t border-stone-100 bg-white/80">
<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 flex items-center gap-2 h-12 overflow-x-auto no-scrollbar">
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all flex items-center gap-1.5" onclick="navigateTo('home')">
<iconify-icon icon="solar:home-2-linear" width="16"></iconify-icon> Home
                </button>
<div className="w-px h-4 bg-stone-200 mx-1"></div>
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all" onclick="navigateTo('shop')">Shop All</button>
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all" onclick="navigateTo('shop')">Fresh Produce</button>
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all" onclick="navigateTo('shop')">Pantry</button>
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all" onclick="navigateTo('shop')">Dairy &amp; Eggs</button>
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all flex items-center gap-1.5" onclick="navigateTo('wholesale')">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon> Wholesale
                </button>
<div className="ml-auto flex items-center gap-2">
<button className="text-sm font-medium text-red-600 hover:text-red-700 px-3 py-1.5 rounded-md hover:bg-red-50 transition-all flex items-center gap-1.5" onclick="navigateTo('offers')">
<iconify-icon icon="solar:fire-bold" width="16"></iconify-icon> Offers
                    </button>
<button className="nav-link-effect text-sm font-medium text-stone-600 hover:text-emerald-800 px-3 py-1.5 rounded-md hover:bg-emerald-50 transition-all" onclick="navigateTo('locations')">Locations</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white absolute w-full left-0 top-full shadow-2xl h-[calc(100vh-64px)] z-40 overflow-y-auto border-t border-stone-100" id="mobileMenu">
<div className="p-5 space-y-2">
<button className="flex items-center gap-3 w-full text-left text-base font-medium text-stone-800 p-3 rounded-xl hover:bg-stone-50 transition-colors" onclick="navigateTo('home'); toggleMobileMenu()">
<iconify-icon className="text-stone-400" icon="solar:home-2-linear" width="22"></iconify-icon> Home
                </button>
<button className="flex items-center gap-3 w-full text-left text-base font-medium text-stone-800 p-3 rounded-xl hover:bg-stone-50 transition-colors" onclick="navigateTo('shop'); toggleMobileMenu()">
<iconify-icon className="text-stone-400" icon="solar:shop-linear" width="22"></iconify-icon> Shop All
                </button>
<button className="flex items-center gap-3 w-full text-left text-base font-medium text-stone-800 p-3 rounded-xl hover:bg-stone-50 transition-colors" onclick="navigateTo('wholesale'); toggleMobileMenu()">
<iconify-icon className="text-stone-400" icon="solar:box-linear" width="22"></iconify-icon> Wholesale Center
                </button>
<button className="flex items-center gap-3 w-full text-left text-base font-medium text-red-600 p-3 rounded-xl bg-red-50/50 hover:bg-red-50 transition-colors" onclick="navigateTo('offers'); toggleMobileMenu()">
<iconify-icon className="text-red-500" icon="solar:fire-bold" width="22"></iconify-icon> Special Offers
                </button>
<div className="border-t border-stone-100 my-2"></div>
<button className="flex items-center gap-3 w-full text-left text-base font-medium text-stone-800 p-3 rounded-xl hover:bg-stone-50 transition-colors" onclick="navigateTo('locations'); toggleMobileMenu()">
<iconify-icon className="text-stone-400" icon="solar:map-point-linear" width="22"></iconify-icon> Store Locations
                </button>
</div>
</div>
</header>
<main className="min-h-screen pb-20 w-full overflow-hidden">

<div className="page active" id="page-home">

<section className="relative w-full overflow-hidden bg-stone-900" style={{height: 'clamp(400px, 70vh, 700px)'}}>
<div className="absolute inset-0 z-0">
<img alt="Supermarket" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
<div className="absolute inset-0 z-20 flex items-center">
<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 max-w-4xl">
<span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs uppercase font-medium mb-6 border border-white/20 animate-fade-in-up">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Now Delivering in Dubai
                        </span>
<h2 className="font-heading font-semibold text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                            Your neighborhood <br/>supermarket.
                        </h2>
<p className="text-stone-200 text-base md:text-lg mb-8 max-w-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            Fresh produce, pantry essentials, and wholesale goods delivered straight to your door in under 60 minutes.
                        </p>
<div className="flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="bg-white text-stone-900 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-stone-100 transition-all flex items-center gap-2 btn-ripple shadow-lg" onclick="navigateTo('shop')">
                                Start Shopping <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2" onclick="navigateTo('offers')">
<iconify-icon icon="solar:fire-bold" width="18"></iconify-icon> Weekly Offers
                            </button>
</div>
</div>
</div>
</section>

<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 bg-white">
<div className="flex items-end justify-between mb-8">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-stone-900">Shop by Category</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 stagger-children">
<div className="group cursor-pointer text-center" onclick="navigateTo('shop')">
<div className="aspect-square rounded-2xl bg-stone-100 mb-4 overflow-hidden relative border border-stone-200/60 transition-colors group-hover:border-emerald-500 flex items-center justify-center">
<span className="text-5xl transition-transform duration-500 group-hover:scale-110">🥬</span>
</div>
<h3 className="text-sm font-medium text-stone-800">Fresh Produce</h3>
</div>
<div className="group cursor-pointer text-center" onclick="navigateTo('shop')">
<div className="aspect-square rounded-2xl bg-stone-100 mb-4 overflow-hidden relative border border-stone-200/60 transition-colors group-hover:border-emerald-500 flex items-center justify-center">
<span className="text-5xl transition-transform duration-500 group-hover:scale-110">🥛</span>
</div>
<h3 className="text-sm font-medium text-stone-800">Dairy &amp; Eggs</h3>
</div>
<div className="group cursor-pointer text-center" onclick="navigateTo('shop')">
<div className="aspect-square rounded-2xl bg-stone-100 mb-4 overflow-hidden relative border border-stone-200/60 transition-colors group-hover:border-emerald-500 flex items-center justify-center">
<span className="text-5xl transition-transform duration-500 group-hover:scale-110">🥩</span>
</div>
<h3 className="text-sm font-medium text-stone-800">Meat &amp; Poultry</h3>
</div>
<div className="group cursor-pointer text-center" onclick="navigateTo('shop')">
<div className="aspect-square rounded-2xl bg-stone-100 mb-4 overflow-hidden relative border border-stone-200/60 transition-colors group-hover:border-emerald-500 flex items-center justify-center">
<span className="text-5xl transition-transform duration-500 group-hover:scale-110">🫙</span>
</div>
<h3 className="text-sm font-medium text-stone-800">Pantry Essentials</h3>
</div>
<div className="group cursor-pointer text-center" onclick="navigateTo('shop')">
<div className="aspect-square rounded-2xl bg-stone-100 mb-4 overflow-hidden relative border border-stone-200/60 transition-colors group-hover:border-emerald-500 flex items-center justify-center">
<span className="text-5xl transition-transform duration-500 group-hover:scale-110">🧃</span>
</div>
<h3 className="text-sm font-medium text-stone-800">Beverages</h3>
</div>
<div className="group cursor-pointer text-center" onclick="navigateTo('shop')">
<div className="aspect-square rounded-2xl bg-stone-100 mb-4 overflow-hidden relative border border-stone-200/60 transition-colors group-hover:border-emerald-500 flex items-center justify-center">
<span className="text-5xl transition-transform duration-500 group-hover:scale-110">📦</span>
</div>
<h3 className="text-sm font-medium text-stone-800">Wholesale Bulk</h3>
</div>
</div>
</section>

<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-16">
<div className="flex items-end justify-between mb-8">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-stone-900">Popular This Week</h2>
<button className="text-sm font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1" onclick="navigateTo('shop')">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 stagger-children" id="home-featured-grid">
</div>
</section>

<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8">
<div className="bg-stone-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl">
<div className="absolute right-0 top-0 w-1/2 h-full opacity-30 mix-blend-overlay hidden md:block" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute right-0 top-0 w-full h-full bg-gradient-to-r from-stone-900 via-stone-900 to-transparent hidden md:block"></div>
<div className="relative z-10 flex-1">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:box-linear"></iconify-icon> B2B &amp; Bulk
                        </span>
<h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-4 leading-tight">Need wholesale?<br/>Get a custom quote.</h2>
<p className="text-stone-300 text-base mb-8 max-w-md">Select from our bulk catalog and we'll call you back with our best competitive prices for your business.</p>
<button className="bg-emerald-600 text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-emerald-500 transition-all flex items-center gap-2 btn-ripple" onclick="navigateTo('wholesale')">
                            Request Quote <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>
</div>

<div className="page" id="page-shop">
<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 bg-white min-h-screen">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-stone-100 pb-6">
<div>
<nav className="flex items-center text-xs text-stone-400 mb-3 gap-2">
<a className="hover:text-stone-700" href="#" onclick="event.preventDefault(); navigateTo('home')">Home</a>
<span>/</span>
<span className="text-stone-800 font-medium">Shop All</span>
</nav>
<h1 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight text-stone-900">Shop All Products</h1>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-stone-500">Sort by:</span>
<select className="text-sm border border-stone-200 rounded-lg px-3 py-2 bg-stone-50 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
<option>Relevance</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">
<aside className="w-full lg:w-64 shrink-0 hidden lg:block space-y-8">
<div>
<h3 className="text-sm font-semibold text-stone-900 mb-4 uppercase tracking-wider">Categories</h3>
<div className="space-y-3 text-sm text-stone-600">
<label className="flex items-center gap-3 cursor-pointer group"><input checked="" className="custom-radio rounded-md" type="checkbox"/><span className="group-hover:text-emerald-700">All Products</span></label>
<label className="flex items-center gap-3 cursor-pointer group"><input className="custom-radio rounded-md" type="checkbox"/><span className="group-hover:text-emerald-700">Fresh Produce</span></label>
<label className="flex items-center gap-3 cursor-pointer group"><input className="custom-radio rounded-md" type="checkbox"/><span className="group-hover:text-emerald-700">Dairy &amp; Eggs</span></label>
<label className="flex items-center gap-3 cursor-pointer group"><input className="custom-radio rounded-md" type="checkbox"/><span className="group-hover:text-emerald-700">Meat &amp; Poultry</span></label>
<label className="flex items-center gap-3 cursor-pointer group"><input className="custom-radio rounded-md" type="checkbox"/><span className="group-hover:text-emerald-700">Pantry Essentials</span></label>
</div>
</div>
<div className="border-t border-stone-100 pt-8">
<h3 className="text-sm font-semibold text-stone-900 mb-4 uppercase tracking-wider">Price Range</h3>
<input className="price-slider mb-2" max="200" min="0" type="range" value="200"/>
<div className="flex justify-between text-xs text-stone-500">
<span>AED 0</span>
<span>AED 200</span>
</div>
</div>
</aside>
<div className="flex-1">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6" id="shop-full-grid">
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-wholesale">
<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 bg-stone-50 min-h-screen">
<div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Wholesale Center</span>
<h1 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight text-stone-900 mb-4">Request a Bulk Quote</h1>
<p className="text-stone-500 text-base">Select the products you need in bulk, fill out your details, and we'll provide our best business pricing.</p>
</div>
<div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-200 p-6 md:p-10">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Quote request submitted! We will contact you soon.'); navigateTo('home');">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Business Name *</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Contact Person *</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Phone Number *</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Items Needed &amp; Expected Quantities *</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none" placeholder="e.g., 50kg Tomatoes, 20L Olive Oil..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-emerald-700 text-white py-4 rounded-xl text-sm font-medium hover:bg-emerald-800 transition-all btn-ripple shadow-md" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</section>
</div>

<div className="page" id="page-offers">
<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-12 bg-white min-h-screen">
<div className="bg-red-600 rounded-3xl p-8 md:p-12 text-center text-white mb-12 animate-fade-in-scale">
<iconify-icon className="text-red-300 mb-4" icon="solar:fire-bold" width="48"></iconify-icon>
<h1 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight mb-4">Weekly Specials</h1>
<p className="text-red-100 text-base max-w-md mx-auto">Discover huge savings on fresh produce and pantry staples. Updated every Monday.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6" id="offers-grid">
</div>
</section>
</div>

<div className="page" id="page-locations">
<section className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-12 bg-stone-50 min-h-screen">
<div className="text-center mb-12 animate-fade-in-up">
<h1 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight text-stone-900 mb-4">Our Stores</h1>
<p className="text-stone-500 text-base max-w-md mx-auto">Visit us at any of our branches across Dubai for the freshest selection.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto stagger-children">
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
<div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-stone-900 mb-2">Jumeirah Branch</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Al Wasl Road, Jumeirah 1<br/>Next to Jumeirah Plaza</p>
<div className="space-y-2 text-sm text-stone-700 mb-6">
<div className="flex justify-between"><span>Mon - Sun</span><span className="font-medium">7:00 AM - 11:00 PM</span></div>
<div className="flex justify-between"><span>Phone</span><span className="font-medium">+971 4 344 1234</span></div>
</div>
<button className="w-full py-2.5 rounded-lg border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Get Directions</button>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
<div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-stone-900 mb-2">Al Satwa Branch</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Satwa Road<br/>Near Satwa Bus Station</p>
<div className="space-y-2 text-sm text-stone-700 mb-6">
<div className="flex justify-between"><span>Mon - Sun</span><span className="font-medium">6:00 AM - 12:00 AM</span></div>
<div className="flex justify-between"><span>Phone</span><span className="font-medium">+971 4 344 5678</span></div>
</div>
<button className="w-full py-2.5 rounded-lg border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Get Directions</button>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
<div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-stone-900 mb-2">Al Wasl Branch</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Al Wasl Road<br/>Opposite Box Park</p>
<div className="space-y-2 text-sm text-stone-700 mb-6">
<div className="flex justify-between"><span>Mon - Sun</span><span className="font-medium">8:00 AM - 10:00 PM</span></div>
<div className="flex justify-between"><span>Phone</span><span className="font-medium">+971 4 344 9012</span></div>
</div>
<button className="w-full py-2.5 rounded-lg border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Get Directions</button>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-stone-950 text-stone-400 w-full overflow-hidden">

<div className="border-b border-stone-800/80">
<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
<div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/15 rounded-full text-xs font-medium text-emerald-300 uppercase tracking-wider mb-4 border border-emerald-500/20">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                                Stay Updated
                            </div>
<h3 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-white mb-3">Get exclusive deals &amp; fresh arrivals</h3>
<p className="text-emerald-200/70 text-sm max-w-md">Subscribe to our newsletter and be the first to know about weekly offers, new products, and seasonal specials. No spam, ever.</p>
</div>
<div className="w-full lg:w-auto lg:min-w-[420px]">
<form className="flex flex-col sm:flex-row gap-3" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Subscribed ✓'; this.querySelector('button').classList.add('bg-emerald-500');">
<input className="flex-1 bg-white/10 border border-emerald-500/25 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-emerald-300/50 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all backdrop-blur-sm" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-white text-emerald-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-all btn-ripple whitespace-nowrap shadow-lg shadow-black/20" type="submit">
                                    Subscribe
                                </button>
</form>
<p className="text-xs text-emerald-300/40 mt-3 text-center sm:text-left">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-stone-800/80">
<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-10 md:py-12">
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
<div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center shrink-0 border border-stone-700/50">
<iconify-icon className="text-emerald-400" icon="solar:box-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left min-w-0">
<h3 className="font-heading font-semibold text-xl tracking-tight text-white mb-1.5">Wholesale &amp; B2B Supply</h3>
<p className="text-sm text-stone-400">Competitive bulk pricing for restaurants, hotels, cafés, and retailers. Dedicated account manager and priority delivery across Dubai.</p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
<a className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors" href="tel:+97143449999">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                            +971 4 344 9999
                        </a>
<button className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-emerald-500 transition-all btn-ripple flex items-center gap-2" onclick="navigateTo('wholesale')">
                            Request a Quote <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-14 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

<div className="col-span-2 md:col-span-2 lg:col-span-1">
<a className="inline-flex flex-col items-start mb-5" href="#" onclick="event.preventDefault(); navigateTo('home')">
<h2 className="font-heading font-semibold text-2xl tracking-tight text-white leading-none">SAIFEE</h2>
<span className="text-xs tracking-[0.2em] text-emerald-500 font-medium scale-[0.8] origin-left">SUPERMARKET</span>
</a>
<p className="text-sm leading-relaxed mb-6">Your trusted neighborhood supermarket since 1988. Serving the Dubai community with quality products, fresh produce, and warm hospitality.</p>

<div className="flex items-center gap-2 flex-wrap">
<a className="w-10 h-10 bg-stone-800/80 hover:bg-emerald-600 rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all border border-stone-700/50 hover:border-emerald-500" href="#">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-stone-800/80 hover:bg-emerald-600 rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all border border-stone-700/50 hover:border-emerald-500" href="#">
<iconify-icon icon="mdi:facebook" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-stone-800/80 hover:bg-emerald-600 rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all border border-stone-700/50 hover:border-emerald-500" href="#">
<iconify-icon icon="mdi:twitter" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-stone-800/80 hover:bg-[#25D366] rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all border border-stone-700/50 hover:border-[#25D366]" href="#">
<iconify-icon icon="mdi:whatsapp" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-stone-800/80 hover:bg-red-600 rounded-xl flex items-center justify-center text-stone-400 hover:text-white transition-all border border-stone-700/50 hover:border-red-500" href="#">
<iconify-icon icon="mdi:youtube" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1">
<h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Categories</h4>
<ul className="space-y-3 text-sm">
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Fresh Produce</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Dairy &amp; Eggs</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Meat &amp; Poultry</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Seafood</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Pantry Essentials</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Bakery &amp; Bread</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Beverages</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Snacks &amp; Sweets</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Frozen Foods</a></li>
<li><a className="footer-link inline-block" href="#" onclick="event.preventDefault(); navigateTo('shop')">Household</a></li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">My Account</h4>
<ul className="space-y-3 text-sm mb-8">
<li><a className="footer-link inline-flex items-center gap-1.5" href="#"><iconify-icon className="text-stone-500" icon="solar:login-2-linear" width="15"></iconify-icon> Sign In</a></li>
<li><a className="footer-link inline-flex items-center gap-1.5" href="#"><iconify-icon className="text-stone-500" icon="solar:user-plus-linear" width="15"></iconify-icon> Create Account</a></li>
<li><a className="footer-link inline-block" href="#">Order History</a></li>
<li><a className="footer-link inline-block" href="#">Saved Items</a></li>
</ul>
<h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Policies</h4>
<ul className="space-y-3 text-sm">
<li><a className="footer-link inline-block" href="#">Privacy Policy</a></li>
<li><a className="footer-link inline-block" href="#">Terms of Service</a></li>
<li><a className="footer-link inline-block" href="#">Delivery Policy</a></li>
<li><a className="footer-link inline-block" href="#">Returns &amp; Refunds</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-2 lg:col-span-1">
<h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Contact Us</h4>
<ul className="text-sm space-y-5">
<li className="flex items-start gap-3">
<div className="w-8 h-8 bg-stone-800/80 rounded-lg flex items-center justify-center shrink-0 border border-stone-700/50 mt-0.5">
<iconify-icon className="text-emerald-500" icon="solar:phone-calling-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 mb-0.5">Phone</p>
<a className="text-white hover:text-emerald-400 transition-colors font-medium" href="tel:+97143441234">+971 4 344 1234</a>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-8 h-8 bg-stone-800/80 rounded-lg flex items-center justify-center shrink-0 border border-stone-700/50 mt-0.5">
<iconify-icon className="text-emerald-500" icon="solar:letter-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 mb-0.5">Email</p>
<a className="text-white hover:text-emerald-400 transition-colors font-medium break-all" href="mailto:hello@saifee.ae">hello@saifee.ae</a>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-8 h-8 bg-stone-800/80 rounded-lg flex items-center justify-center shrink-0 border border-stone-700/50 mt-0.5">
<iconify-icon className="text-emerald-500" icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 mb-0.5">Main Branch</p>
<p className="text-stone-300 leading-relaxed">Al Wasl Road, Jumeirah 1, Dubai, UAE</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-8 h-8 bg-stone-800/80 rounded-lg flex items-center justify-center shrink-0 border border-stone-700/50 mt-0.5">
<iconify-icon className="text-emerald-500" icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 mb-0.5">Operating Hours</p>
<p className="text-stone-300">Mon - Sun</p>
<p className="text-white font-medium">6:00 AM - 12:00 AM</p>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-stone-800/80">
<div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8">

<div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
<p className="text-xs text-stone-500 uppercase tracking-wider font-medium">We Accept</p>
<div className="flex flex-wrap items-center justify-center gap-5">
<iconify-icon icon="logos:visa" width="40"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="36"></iconify-icon>
<iconify-icon icon="logos:amex" width="40"></iconify-icon>
<iconify-icon className="invert opacity-80" icon="logos:apple-pay" width="40"></iconify-icon>
<iconify-icon icon="logos:jcb" width="30"></iconify-icon>
</div>
</div>

<div className="flex flex-col md:flex-row text-xs text-stone-500 border-stone-800/60 border-t pt-6 gap-x-4 gap-y-4 items-center justify-between">
<p>© 2024 Saifee Supermarket LLC. All rights reserved. Licensed by Dubai DED.</p>
<div className="flex items-center gap-4 text-stone-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<span className="text-stone-700">·</span>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<span className="text-stone-700">·</span>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
<span className="text-stone-700">·</span>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</div>
</footer>

<div className="drawer-overlay fixed inset-0 z-[100] bg-stone-900/40 backdrop-blur-sm" id="cart-drawer" onclick="if(event.target===this) toggleDrawer('cart-drawer')">
<div className="drawer-panel absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col border-l border-stone-200">
<div className="flex items-center justify-between p-5 border-b border-stone-100">
<h3 className="font-heading font-semibold text-xl text-stone-900 flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="solar:bag-3-linear" width="24"></iconify-icon> Your Cart
                </h3>
<button className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-50 rounded-full transition-colors" onclick="toggleDrawer('cart-drawer')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 flex flex-col items-center justify-center text-center text-stone-400">
<div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="40"></iconify-icon>
</div>
<p className="font-medium text-stone-900 mb-1">Your cart is empty</p>
<p className="text-xs mb-4">Looks like you haven't added anything yet.</p>
<button className="text-emerald-700 text-sm font-medium hover:underline" onclick="toggleDrawer('cart-drawer'); navigateTo('shop')">Start Shopping</button>
</div>
</div>
</div>

<div className="drawer-overlay fixed inset-0 z-[100] bg-stone-900/40 backdrop-blur-sm" id="wishlist-drawer" onclick="if(event.target===this) toggleDrawer('wishlist-drawer')">
<div className="drawer-panel absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col border-l border-stone-200">
<div className="flex items-center justify-between p-5 border-b border-stone-100">
<h3 className="font-heading font-semibold text-xl text-stone-900 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:heart-linear" width="24"></iconify-icon> Saved Items
                </h3>
<button className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-50 rounded-full transition-colors" onclick="toggleDrawer('wishlist-drawer')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 flex flex-col items-center justify-center text-center text-stone-400">
<div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:heart-linear" width="40"></iconify-icon>
</div>
<p className="font-medium text-stone-900 mb-1">No saved items</p>
</div>
</div>
</div>


    </>
  );
}
