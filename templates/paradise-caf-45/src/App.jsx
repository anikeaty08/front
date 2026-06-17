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



      // Ensure icons render
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Reveal menu cards that were hidden by default
        document.querySelectorAll('.menu-card').forEach(function(card, idx) {
          card.classList.remove('opacity-0', 'translate-y-6');
          card.classList.add('opacity-100', 'translate-y-0');
        });
        // Set current year
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      

<header className="relative z-40 bg-[#0f0a06] border-b border-amber-100/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-amber-300/15 border border-amber-200/20 flex items-center justify-center text-amber-300 text-sm font-semibold tracking-tight">
            PC
          </div>
<span className="text-[15px] md:text-[16px] font-medium tracking-tight text-[#f6efe6] group-hover:text-amber-200 transition-colors">Paradise Café</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-[14px] text-amber-100/80 hover:text-amber-200 transition-colors" href="#menu">Menu</a>
<a className="text-[14px] text-amber-100/80 hover:text-amber-200 transition-colors" href="#location">Find Us</a>
<a className="text-[14px] text-amber-100/80 hover:text-amber-200 transition-colors" href="#contact">Reservations</a>
</nav>
<a className="inline-flex items-center gap-2 text-[14px] px-3.5 py-2 rounded-md bg-amber-300/15 border border-amber-200/20 hover:bg-amber-300/20 hover:border-amber-200/30 hover:text-amber-200 transition-colors" href="#contact">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium">Book</span>
</a>
</div>
</header>

<section className="relative min-h-[84vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&amp;w=1920&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://videos.pexels.com/video-files/854405/854405-hd_1280_720_30fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#140e0a]/50 to-[#0f0a06]"></div>
</div>
<div className="relative z-10 w-full">
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-[42px] sm:text-[56px] lg:text-[68px] font-semibold tracking-tight leading-[1.05] text-[#fff9f0]" id="heroTitle">
            Paradise Café
          </h1>
<p className="mt-4 text-[16px] sm:text-[17px] text-amber-100/90 max-w-2xl mx-auto">
            Aromatic coffees, artisanal bakes, and golden-hour warmth—every day.
          </p>

<div className="mt-5 flex flex-wrap items-center justify-center gap-2">
<span className="px-2.5 py-1 rounded-md text-[12px] border border-amber-100/10 text-amber-100/80">Restaurant</span>
<span className="px-2.5 py-1 rounded-md text-[12px] border border-amber-100/10 text-amber-100/80">Family</span>
<span className="px-2.5 py-1 rounded-md text-[12px] border border-amber-100/10 text-amber-100/80">Friends</span>
<span className="px-2.5 py-1 rounded-md text-[12px] border border-amber-100/10 text-amber-100/80">Couples</span>
</div>
<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-amber-300/20 border border-amber-200/20 text-[#fff9f0] hover:bg-amber-300/30 hover:border-amber-200/30 hover:text-white transition-colors shadow-[0_8px_32px_-8px_rgba(214,167,93,0.35)]" href="#menu" id="viewMenuBtn">
<i className="w-5 h-5" data-lucide="cup-soda" strokeWidth="1.5"></i>
<span className="text-[15px] font-medium">View Menu</span>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-amber-200/10 text-amber-100/90 hover:text-amber-200 hover:border-amber-200/20 transition-colors" href="#contact">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-[15px] font-medium">Reserve</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-100/15 to-transparent"></div>
</section>

<section className="relative py-16 md:py-24" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold tracking-tight">Our Menu</h2>
<p className="text-amber-100/80 mt-2">Coffee classics, flaky pastries, and indulgent desserts.</p>

<p className="text-amber-100/70 mt-1 text-[14px]">Snaks / Combo offers / Fast food</p>
</div>

<div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

<div className="relative w-full sm:w-72">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-200/70 pointer-events-none" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md pl-9 pr-9 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" id="menuSearch" placeholder="Search menu (e.g., coffee, latte, dessert)" type="text"/>
<button aria-label="Clear search" className="absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-6 h-6 rounded hover:bg-amber-300/10 text-amber-100/70 hover:text-amber-200 transition opacity-0 pointer-events-none" id="clearSearch">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex flex-wrap items-center gap-2" id="filters">
<button className="filter-btn active inline-flex items-center gap-2 text-[14px] px-3.5 py-2 rounded-md bg-amber-300/15 border border-amber-200/20 text-amber-200 hover:bg-amber-300/20 hover:border-amber-200/30 transition-all" data-filter="all">
<span>All</span>
</button>
<button className="filter-btn inline-flex items-center gap-2 text-[14px] px-3.5 py-2 rounded-md border border-amber-100/10 text-amber-100/80 hover:text-amber-200 hover:border-amber-200/20 transition-all" data-filter="coffee">
<span>☕ Coffee</span>
</button>
<button className="filter-btn inline-flex items-center gap-2 text-[14px] px-3.5 py-2 rounded-md border border-amber-100/10 text-amber-100/80 hover:text-amber-200 hover:border-amber-200/20 transition-all" data-filter="snacks">
<span>🥪 Snacks</span>
</button>
<button className="filter-btn inline-flex items-center gap-2 text-[14px] px-3.5 py-2 rounded-md border border-amber-100/10 text-amber-100/80 hover:text-amber-200 hover:border-amber-200/20 transition-all" data-filter="desserts">
<span>🍰 Desserts</span>
</button>
</div>
</div>
</div>

<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="menuGrid">

<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="coffee">
<div className="overflow-hidden">
<img alt="Latte Art" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Velvet Latte</h3>
<span className="text-[14px] text-amber-200">₹220</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Silky espresso with steamed microfoam.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>
<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="coffee">
<div className="overflow-hidden">
<img alt="Cold Brew" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Cold Brew</h3>
<span className="text-[14px] text-amber-200">₹200</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Slow-steeped, bold, and refreshing.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>

<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="snacks">
<div className="overflow-hidden">
<img alt="Avocado Toast" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Avocado Toast</h3>
<span className="text-[14px] text-amber-200">₹260</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Sourdough, smashed avo, chili flakes.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>
<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="snacks">
<div className="overflow-hidden">
<img alt="Grilled Cheese" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Grilled Cheese</h3>
<span className="text-[14px] text-amber-200">₹240</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Three-cheese melt on buttered toast.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>

<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="desserts">
<div className="overflow-hidden">
<img alt="Tiramisu" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Tiramisu</h3>
<span className="text-[14px] text-amber-200">₹280</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Espresso-soaked layers and mascarpone.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>
<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="desserts">
<div className="overflow-hidden">
<img alt="Croissant" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Butter Croissant</h3>
<span className="text-[14px] text-amber-200">₹180</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Flaky, buttery, baked fresh daily.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>

<article className="menu-card group relative overflow-hidden rounded-xl border border-amber-100/10 bg-gradient-to-b from-[#1b140f] to-[#130e0a] hover:border-amber-200/20 transition-all duration-300 will-change-transform hover:scale-[1.015] hover:shadow-[0_10px_30px_-10px_rgba(214,167,93,0.25)]" data-category="coffee">
<div className="overflow-hidden">
<img alt="Cappuccino" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight group-hover:drop-shadow-[0_0_18px_rgba(226,190,140,0.65)] transition-all">Cappuccino</h3>
<span className="text-[14px] text-amber-200">₹210</span>
</div>
<p className="mt-2 text-[14px] text-amber-100/80">Balanced espresso, milk, and foam.</p>
</div>
<div className="absolute inset-0 pointer-events-none ring-0 group-hover:ring-1 ring-amber-200/25 rounded-xl transition"></div>
</article>
</div>
</div>

<div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-amber-100/10 to-transparent"></div>
</section>

<section className="relative py-16 md:py-24" id="location">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold tracking-tight">Find Us</h2>
<p className="text-amber-100/80 mt-2">Drop by for a cup. We can’t wait to see you.</p>
</div>
<div className="flex items-center gap-4 text-amber-100/80">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-200" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-[14px]">7star mall, behind sai mobile, Satara 415002</span>
</div>
<div className="hidden sm:block w-px h-4 bg-amber-100/15"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-200" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-[14px]">9:00am To 10:00pm</span>
</div>
</div>
</div>
<div className="mt-8 rounded-xl overflow-hidden border border-amber-100/10 bg-[#130e0a]">
<div className="aspect-[16/9]">
<iframe allowfullscreen="" className="w-full h-full" id="mapFrame" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=7star%20mall,%20behind%20sai%20mobile,%20Satara%20415002&amp;output=embed" style={{border: '0'}}></iframe>
</div>
</div>
</div>

<div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-amber-100/10 to-transparent"></div>
</section>

<section className="relative py-16 md:py-24" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
<div className="lg:col-span-2">
<h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold tracking-tight">Reservations</h2>
<p className="text-amber-100/80 mt-2">Reserve a cozy corner for your next catch-up.</p>

<div className="mt-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-amber-100/15 text-amber-100/85 text-[12px]">
<i className="w-4 h-4 text-amber-200" data-lucide="party-popper" strokeWidth="1.5"></i>
              We Accept All Party orders.
            </span>
</div>
<div className="mt-6 flex items-center gap-4 text-amber-100/80">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-200" data-lucide="phone" strokeWidth="1.5"></i>
<a className="text-[14px] hover:text-amber-200 transition-colors" href="tel:7040766502">7040766502</a>
</div>
<div className="w-px h-4 bg-amber-100/15"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-200" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-[14px]">hello@paradisecafe.in</span>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-amber-100/10 text-amber-100/80 hover:text-amber-200 hover:border-amber-200/20 hover:shadow-[0_0_24px_rgba(214,167,93,0.25)] transition" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a aria-label="Twitter" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-amber-100/10 text-amber-100/80 hover:text-amber-200 hover:border-amber-200/20 hover:shadow-[0_0_24px_rgba(214,167,93,0.25)] transition" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-amber-100/10 text-amber-100/80 hover:text-amber-200 hover:border-amber-200/20 hover:shadow-[0_0_24px_rgba(214,167,93,0.25)] transition" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>

<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-amber-100/10 text-amber-100/80 text-[12px]">
<i className="w-4 h-4 text-amber-200" data-lucide="hash" strokeWidth="1.5"></i>
              #Paradisecafe
            </span>
</div>
</div>
<div className="lg:col-span-3">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#140e0a] border border-amber-100/10 rounded-xl p-6">
<div className="col-span-1 sm:col-span-2">
<label className="text-[13px] text-amber-100/70">Full Name</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" placeholder="Jane Doe" type="text"/>
</div>
</div>
<div>
<label className="text-[13px] text-amber-100/70">Email</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<label className="text-[13px] text-amber-100/70">Phone</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" placeholder="7040766502" type="tel"/>
</div>
</div>
<div>
<label className="text-[13px] text-amber-100/70">Date</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" type="date"/>
</div>
</div>
<div>
<label className="text-[13px] text-amber-100/70">Time</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" type="time"/>
</div>
</div>
<div>
<label className="text-[13px] text-amber-100/70">Party Size</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<input className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" max="20" min="1" type="number" value="2"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="text-[13px] text-amber-100/70">Notes</label>
<div className="mt-1 relative group focus-within:scale-[1.01] transition">
<textarea className="w-full bg-[#0f0a06] border border-amber-100/10 rounded-md px-3.5 py-2.5 text-[14px] placeholder:text-amber-100/40 focus:outline-none focus:ring-4 focus:ring-amber-300/15 focus:border-amber-200/30 transition" placeholder="Any special requests?" rows="4"></textarea>
</div>
</div>
<div className="sm:col-span-2 flex justify-end">
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-300/20 border border-amber-200/20 text-[#fff9f0] hover:bg-amber-300/30 hover:border-amber-200/30 hover:text-white transition-colors shadow-[0_8px_32px_-8px_rgba(214,167,93,0.35)]" type="submit">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span className="text-[14px] font-medium">Send Request</span>
</button>
</div>
</form>
</div>
</div>
</section>
<footer className="border-t border-amber-100/10">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-amber-100/70">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-amber-300/10 border border-amber-200/20 flex items-center justify-center text-amber-300 text-xs font-semibold tracking-tight">PC</div>
<span className="text-[13px]">© <span id="year"></span> Paradise Café</span>
</div>
<div className="text-[13px]">Brewed with care in Satara</div>
</div>
</footer>


    </>
  );
}
