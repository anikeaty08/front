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



    // Initialize icons
    lucide.createIcons();

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Pack selection
    const packButtons = document.querySelectorAll('.pack-option');
    let selectedPack = 'six';
    packButtons.forEach(btn => {
      if (btn.dataset.pack === selectedPack) btn.classList.add('active', 'ring-1', 'ring-rose-500/30', 'bg-rose-50', 'border-rose-200');
      btn.addEventListener('click', () => {
        packButtons.forEach(b => b.classList.remove('active', 'ring-1', 'ring-rose-500/30', 'bg-rose-50', 'border-rose-200'));
        btn.classList.add('active', 'ring-1', 'ring-rose-500/30', 'bg-rose-50', 'border-rose-200');
        selectedPack = btn.dataset.pack;
        lucide.createIcons();
      });
    });

    // Quantity
    const qtyEl = document.getElementById('qty');
    document.getElementById('qty-inc').addEventListener('click', () => {
      qtyEl.textContent = Math.min(99, Number(qtyEl.textContent) + 1);
    });
    document.getElementById('qty-dec').addEventListener('click', () => {
      qtyEl.textContent = Math.max(1, Number(qtyEl.textContent) - 1);
    });

    // Cart
    const cartCount = document.getElementById('cart-count');
    document.getElementById('add-to-cart').addEventListener('click', () => {
      const add = Number(qtyEl.textContent);
      cartCount.textContent = Math.min(99, Number(cartCount.textContent) + add);
      // tiny feedback
      const btn = document.getElementById('add-to-cart');
      btn.classList.add('scale-[.98]');
      setTimeout(() => btn.classList.remove('scale-[.98]'), 120);
    });

    // Reels scroll
    const reels = document.getElementById('reels');
    document.getElementById('scroll-left').addEventListener('click', () => reels.scrollBy({ left: -320, behavior: 'smooth' }));
    document.getElementById('scroll-right').addEventListener('click', () => reels.scrollBy({ left: 320, behavior: 'smooth' }));
  
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center shadow-sm">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
</div>
<span className="text-2xl tracking-tight font-playfair font-medium" style={{}}>Pétale</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
<a className="hover:text-neutral-900 font-geist" href="#product">Our Pastries</a>
<a className="hover:text-neutral-900 font-geist" href="#why">Why Pétale</a>
<a className="hover:text-neutral-900 font-geist" href="#story">Story</a>
<a className="hover:text-neutral-900 font-geist" href="#community">Community</a>
<a className="hover:text-neutral-900 font-geist" href="#reviews">Reviews</a>
</nav>
<div className="flex gap-3 items-center">
<button className="hidden sm:flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-100">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">Find a Shop</span>
</button>
<button className="relative hover:bg-neutral-800 flex gap-2 text-sm text-white bg-neutral-900 rounded-full pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="font-geist">Cart</span>
<span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-rose-500 text-white rounded-full flex items-center justify-center font-geist" id="cart-count">0</span>
</button>
</div>
</div>
</header>

<section className="max-w-7xl bg-red-50 mr-auto ml-auto pt-10 pr-6 pb-16 pl-6" id="product">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div className="aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-neutral-200">
<img alt="Pétale macarons in blush tones" className="h-full w-full object-cover" src="https://cdn.midjourney.com/459c41f5-d855-4743-8ac9-3be623f7d7b3/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-xs text-neutral-600 font-geist">
<svg className="lucide lucide-sparkles h-4 w-4 text-rose-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Limited Release
          </span>
<div className="flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 text-sm text-neutral-600 font-geist">(1,982)</span>
</div>
</div>
<h1 className="text-4xl md:text-5xl tracking-tight font-playfair font-medium" style={{}}>Rose Quartz</h1>
<p className="text-neutral-600 font-geist">A silky blush macaron with Madagascar vanilla and rosewater ganache. Crisp shell, cloud-soft center, and a perfume of early summer.</p>
<div className="flex items-center gap-3 text-sm">
<svg className="lucide lucide-truck h-4 w-4 text-emerald-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-neutral-700 font-geist">Order by 4pm. Guaranteed same-day dispatch.</span>
</div>
<div className="space-y-3">
<div className="text-sm text-neutral-700 font-geist">Select Pack</div>
<div className="grid grid-cols-3 gap-3">
<button className="pack-option group rounded-xl border border-neutral-200 bg-white px-4 py-3 text-left hover:border-neutral-300 focus:outline-none" data-pack="single">
<div className="flex items-center justify-between">
<span className="text-sm font-medium font-geist">Single</span>
<svg className="lucide lucide-circle h-4 w-4 text-neutral-400 group-[.active]:hidden" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-rose-500 hidden group-[.active]:block" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-neutral-500 text-xs mt-1 font-geist">$4.95</div>
</button>
<button className="pack-option group rounded-xl border border-neutral-200 bg-white px-4 py-3 text-left hover:border-neutral-300 focus:outline-none active ring-1 ring-rose-500/30 bg-rose-50 border-rose-200" data-pack="six">
<div className="flex items-center justify-between">
<span className="text-sm font-medium font-geist">Box of 6</span>
<svg className="lucide lucide-circle h-4 w-4 text-neutral-400 group-[.active]:hidden" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-rose-500 hidden group-[.active]:block" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-neutral-500 text-xs mt-1 font-geist">$24.95</div>
</button>
<button className="pack-option group rounded-xl border border-neutral-200 bg-white px-4 py-3 text-left hover:border-neutral-300 focus:outline-none" data-pack="party">
<div className="flex items-center justify-between">
<span className="text-sm font-medium font-geist">Party 24</span>
<svg className="lucide lucide-circle h-4 w-4 text-neutral-400 group-[.active]:hidden" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-rose-500 hidden group-[.active]:block" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-neutral-500 text-xs mt-1 font-geist">$84.95</div>
</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="inline-flex items-center rounded-full border border-neutral-200 bg-white">
<button className="px-3 py-2 text-neutral-600 hover:text-neutral-900" id="qty-dec"><svg className="lucide lucide-minus h-4 w-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></button>
<span className="w-10 text-center text-sm font-geist" id="qty">1</span>
<button className="px-3 py-2 text-neutral-600 hover:text-neutral-900" id="qty-inc"><svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-white text-sm hover:bg-rose-500 font-geist" id="add-to-cart">
<svg className="lucide lucide-shopping-cart h-4 w-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
            Add to Cart
          </button>
</div>
<div className="flex items-center gap-6 text-xs text-neutral-600">
<div className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> 100% Satisfaction
          </div>
<div className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-recycle h-4 w-4 text-emerald-600" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg> Eco-Friendly Packaging
          </div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-neutral-200" id="why">
<div className="max-w-7xl bg-red-100 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-center font-playfair font-medium" style={{}}>Sweet Reasons to Pick Pétale</h2>
<p className="text-neutral-600 text-center max-w-2xl mx-auto mt-3 font-geist">Clean ingredients, small-batch precision, and flavors that feel like a gentle afternoon breeze.</p>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
<div className="bg-neutral-50 border-neutral-200 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
<svg className="lucide lucide-leaf h-5 w-5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="font-medium font-geist">Gluten-Conscious</div>
<p className="text-sm text-neutral-600 mt-1 font-geist">Crafted to be kind to your cravings.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
<svg className="lucide lucide-flask-conical h-5 w-5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<div className="font-medium font-geist">Non-GMO</div>
<p className="text-sm text-neutral-600 mt-1 font-geist">Thoughtful sourcing from trusted farms.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="h-10 w-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-3">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="font-medium font-geist">Hand-Finished</div>
<p className="text-sm text-neutral-600 mt-1 font-geist">Every swirl piped by our pâtisserie team.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
<svg className="lucide lucide-droplet h-5 w-5" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div className="font-medium font-geist">No Artificial Colors</div>
<p className="text-sm text-neutral-600 mt-1 font-geist">Naturally vivid, gently tinted.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl bg-pink-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4060a9d9-c421-49eb-a925-93468b68c5a6_1600w.jpg)] bg-cover mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" style={{}}>
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<h3 className="text-2xl md:text-3xl tracking-tight font-playfair font-medium" style={{}}>Fun Facts About Pétale</h3>
<ul className="mt-5 space-y-4">
<li className="flex gap-3">
<svg className="lucide lucide-dot h-5 w-5 text-rose-500 mt-1.5" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
<p className="text-neutral-700 font-geist">Our blush tone is inspired by peony petals at first light.</p>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-dot h-5 w-5 text-rose-500 mt-1.5" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
<p className="text-neutral-700 font-geist">We rest all shells for 30 minutes to achieve that perfect pied.</p>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-dot h-5 w-5 text-rose-500 mt-1.5" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
<p className="text-neutral-700 font-geist">A single batch never exceeds 120 shells for quality control.</p>
</li>
</ul>
</div>
<div className="aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-neutral-200">
<img alt="Stack of assorted macarons" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2e8247e1-3f73-488c-a6b9-8102b2c80aee_1600w.jpg" style={{}}/>
</div>
</div>
</section>

<section className="relative" id="story">
<div className="max-w-7xl mt-8 mr-auto mb-0 ml-auto pr-6 pl-6">
<div className="overflow-hidden relative rounded-3xl">
<img alt="Macarons with tea" className="w-full h-[360px] md:h-[420px] object-cover" src="https://cdn.midjourney.com/65ae601a-df53-4ae2-96e7-83b3d071b939/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
<div className="absolute inset-0 md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-end">
<h3 className="text-white text-3xl md:text-4xl tracking-tight font-playfair font-medium" style={{}}>The Pétale Story</h3>
<p className="text-white/90 max-w-2xl mt-3 font-geist">Born in a tiny atelier with a single mixer and a whole lot of patience. We chase balance—texture, aroma, and color—so every bite feels effortless.</p>
<button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-neutral-900 px-4 py-2 text-sm w-fit font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Watch Our Kitchen
          </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="community">
<div className="flex items-end justify-between">
<div className="">
<h3 className="text-3xl md:text-4xl tracking-tight font-playfair font-medium" style={{}}>Join 500K+ Pétale Fans</h3>
<p className="text-neutral-600 mt-2 font-geist">Real tastes, real smiles. Tag us to be featured.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="rounded-full border border-neutral-200 h-9 w-9 flex items-center justify-center hover:bg-neutral-100" id="scroll-left">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="rounded-full border border-neutral-200 h-9 w-9 flex items-center justify-center hover:bg-neutral-100" id="scroll-right">
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-p-6 pb-2" id="reels">

<article className="min-w-[260px] max-w-[260px] snap-start rounded-2xl overflow-hidden bg-white border border-neutral-200">
<div className="aspect-[9/16] relative">
<img alt="Customer enjoying macarons" className="h-full w-full object-cover" data-video-src="https://cdn.midjourney.com/video/13709696-6e08-46d8-812e-33919c76bc32/0.mp4" onload="(function(img){try{var container=img.parentElement;if(!container)return;var btn=container.querySelector('button');if(!btn)return;if(btn.__auraBound)return;btn.__auraBound=true;btn.addEventListener('click',function(ev){ev.preventDefault();var sel='video[data-aura-video=&quot;'+img.id+'&quot;]';var existing=container.querySelector(sel);if(existing){existing.play();btn.style.display='none';return;}var v=document.createElement('video');v.setAttribute('data-aura-video',img.id);v.src=img.getAttribute('data-video-src')||'https://cdn.midjourney.com/video/13709696-6e08-46d8-812e-33919c76bc32/0.mp4';v.autoplay=true;v.controls=true;v.playsInline=true;v.poster=img.currentSrc||img.src;v.className='absolute inset-0 h-full w-full object-cover';container.appendChild(v);btn.style.display='none';});}catch(e){}})(this)" src="https://cdn.midjourney.com/edcdfcf5-f0e6-43da-83e4-c044a8575e20/0_0.png?w=800&amp;q=80" style={{}}/>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> 0:12
          </button>
</div>
<div className="p-3 text-sm">
<span className="text-neutral-700 font-geist">@bitesbyli</span>
</div>
</article>
<article className="min-w-[260px] max-w-[260px] snap-start rounded-2xl overflow-hidden bg-white border border-neutral-200">
<div className="aspect-[9/16] relative">
<img alt="Creator tasting desserts" className="h-full w-full object-cover" data-video-src="https://cdn.midjourney.com/video/71496ca0-1fe7-41ba-be85-5e787966122d/0.mp4" onload="(function(img){try{var container=img.parentElement;if(!container)return;var btn=container.querySelector('button');if(!btn)return;if(btn.__auraBound)return;btn.__auraBound=true;btn.addEventListener('click',function(ev){ev.preventDefault();var sel='video[data-aura-video=&quot;'+img.id+'&quot;]';var existing=container.querySelector(sel);if(existing){existing.play();btn.style.display='none';return;}var v=document.createElement('video');v.setAttribute('data-aura-video',img.id);v.src=img.getAttribute('data-video-src')||'https://cdn.midjourney.com/video/71496ca0-1fe7-41ba-be85-5e787966122d/0.mp4';v.autoplay=true;v.controls=true;v.playsInline=true;v.poster=img.currentSrc||img.src;v.className='absolute inset-0 h-full w-full object-cover';container.appendChild(v);btn.style.display='none';});}catch(e){}})(this)" src="https://cdn.midjourney.com/79602e58-a1a6-4c2d-9649-560412480b13/0_0.png?w=800&amp;q=80" style={{}}/>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> 0:08
          </button>
</div>
<div className="p-3 text-sm">
<span className="text-neutral-700 font-geist">@craveclub</span>
</div>
</article>
<article className="min-w-[260px] max-w-[260px] snap-start rounded-2xl overflow-hidden bg-white border border-neutral-200">
<div className="aspect-[9/16] relative">
<img alt="Foodie holding macaron" className="h-full w-full object-cover" data-video-src="https://cdn.midjourney.com/video/2da33bc7-c0f2-48f1-9368-e805f7e0aa1b/3.mp4" onload="(function(img){try{var container=img.parentElement;if(!container)return;var btn=container.querySelector('button');if(!btn)return;if(btn.__auraBound)return;btn.__auraBound=true;btn.addEventListener('click',function(ev){ev.preventDefault();var existing=container.querySelector('video[data-aura-video=\'aura-emefeg924\']');if(existing){existing.play();btn.style.display='none';return;}var v=document.createElement('video');v.setAttribute('data-aura-video','aura-emefeg924');v.src=img.getAttribute('data-video-src')||'https://cdn.midjourney.com/video/2da33bc7-c0f2-48f1-9368-e805f7e0aa1b/3.mp4';v.autoplay=true;v.controls=true;v.playsInline=true;v.poster=img.currentSrc||img.src;v.className='absolute inset-0 h-full w-full object-cover';container.appendChild(v);btn.style.display='none';});}catch(e){}})(this)" src="https://cdn.midjourney.com/fb145eb4-2b69-49ce-a8f1-5c1ee1a6e378/0_0.png?w=800&amp;q=80" style={{}}/>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> 0:19
          </button>
</div>
<div className="p-3 text-sm">
<span className="text-neutral-700 font-geist">@snackatlas</span>
</div>
</article>
<article className="min-w-[260px] max-w-[260px] snap-start rounded-2xl overflow-hidden bg-white border border-neutral-200">
<div className="aspect-[9/16] relative">
<img alt="Happy customer with treats" className="h-full w-full object-cover" data-video-src="https://cdn.midjourney.com/video/0b1d0804-f00a-4fdb-b4b5-1b4697238f2f/3.mp4" id="aura-emefey9o8" onload="(function(img){try{var container=img.parentElement;if(!container)return;var btn=container.querySelector('button');if(!btn)return;if(btn.__auraBound)return;btn.__auraBound=true;btn.addEventListener('click',function(ev){ev.preventDefault();var sel='video[data-aura-video=&quot;'+img.id+'&quot;]';var existing=container.querySelector(sel);if(existing){existing.play();btn.style.display='none';return;}var v=document.createElement('video');v.setAttribute('data-aura-video',img.id);v.src=img.getAttribute('data-video-src')||'https://cdn.midjourney.com/video/0b1d0804-f00a-4fdb-b4b5-1b4697238f2f/3.mp4';v.autoplay=true;v.controls=true;v.playsInline=true;v.poster=img.currentSrc||img.src;v.className='absolute inset-0 h-full w-full object-cover';container.appendChild(v);btn.style.display='none';});}catch(e){}})(this)" src="https://cdn.midjourney.com/3f4c1177-1dbf-4c79-88a4-2bb73b620df3/0_0.png?w=800&amp;q=80" style={{}}/>
<button className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-geist">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> 0:10
          </button>
</div>
<div className="p-3 text-sm">
<span className="text-neutral-700 font-geist">@petalepicks</span>
</div>
</article>
</div>
</section>

<section className="bg-white border-t border-neutral-200" id="reviews">
<div className="max-w-7xl bg-rose-100 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="flex items-end justify-between">
<div className="">
<h3 className="text-3xl md:text-4xl tracking-tight font-playfair font-medium" style={{}}>Customer Reviews</h3>
<p className="text-neutral-600 mt-2 font-geist">4.9 average from the last 2,000 orders</p>
</div>
<button className="hidden sm:inline-flex gap-2 hover:bg-neutral-100 text-sm font-geist bg-slate-50/40 border-neutral-200 border rounded-full pt-2 pr-4 pb-2 pl-4 items-center">
<svg className="lucide lucide-edit-3 h-4 w-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Write a Review
        </button>
</div>
<div className="grid md:grid-cols-3 gap-6 mt-8">
<article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-2 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mt-3 font-geist">The shell shatters and then melts. Subtle rose, never soapy. I'm ordering another box for a picnic.</p>
<div className="mt-4 text-sm text-neutral-500 font-geist">— Lani • Brooklyn</div>
</article>
<article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-2 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mt-3 font-geist">Balanced sweetness and a gorgeous finish. Packaging kept everything pristine.</p>
<div className="mt-4 text-sm text-neutral-500 font-geist">— Mateo • Austin</div>
</article>
<article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-2 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-700 mt-3 font-geist">Arrived chilled and perfect. The rose pairs beautifully with coffee.</p>
<div className="mt-4 text-sm text-neutral-500 font-geist">— Priya • Seattle</div>
</article>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div className="max-w-7xl bg-red-200 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="relative md:p-12 bg-center bg-gradient-to-tr from-slate-900 to-slate-700 rounded-3xl pt-8 pr-8 pb-8 pl-8" style={{}}>
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-3xl md:text-4xl tracking-tight text-white font-playfair font-medium" style={{}}>Get a taste of Pétale</h3>
<p className="text-white/80 mt-3 font-geist">Join for early releases, tasting notes, and seasonal surprises.</p>
<form className="mt-6 flex items-center gap-3">
<div className="flex-1 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-3 text-sm text-white placeholder-white/60">
<input className="bg-transparent outline-none w-full text-white placeholder-white/60" placeholder="Your email address" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white px-5 py-3 text-sm font-geist" type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Subscribe
              </button>
</form>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Minimal macaron arrangement" className="h-full w-full object-cover" src="https://cdn.midjourney.com/2f30cd33-2221-435f-bb7d-a687d42ac289/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center">
<svg className="lucide lucide-flower-2 h-5 w-5 text-white" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
</div>
<span className="text-xl tracking-tight font-semibold font-geist">Pétale</span>
</div>
<nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
<a className="hover:text-neutral-900 font-geist" href="#">Contact</a>
<a className="hover:text-neutral-900 font-geist" href="#">Shipping</a>
<a className="hover:text-neutral-900 font-geist" href="#">Careers</a>
<a className="hover:text-neutral-900 font-geist" href="#">Privacy</a>
<a className="hover:text-neutral-900 font-geist" href="#">Terms</a>
</nav>
<div className="flex items-center gap-3">
<a className="h-9 w-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100" href="#"><svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="h-9 w-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100" href="#"><svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="h-9 w-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100" href="#"><svg className="w-[16px] h-[16px]" data-lucide="tiktok" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<p className="text-xs text-neutral-500 mt-6 font-geist">© <span className="font-geist" id="year">2025</span> Pétale Confections. All rights reserved.</p>
</div>
</footer>




    </>
  );
}
