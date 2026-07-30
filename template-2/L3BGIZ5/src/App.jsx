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



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Product carousel navigation
    const featuredScroll = document.getElementById('featured-scroll');
    const prevBtn = document.getElementById('featured-prev');
    const nextBtn = document.getElementById('featured-next');
    
    prevBtn.addEventListener('click', () => {
      featuredScroll.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      featuredScroll.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
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
      

<header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 border-b bg-white/80 border-slate-200/50">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

<a className="flex items-center gap-2 transition-colors hover:text-cyan-600 uppercase text-lg font-semibold text-slate-900 tracking-tight font-geist" href="#">Hikke<div className="relative">
</div></a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="flex items-center gap-1 transition-colors font-geist hover:text-cyan-600" href="#">
<svg className="lucide lucide-shirt h-4 w-4" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
          Apparel
        </a>
<a className="flex items-center gap-1 transition-colors font-geist hover:text-cyan-600" href="#">
<svg className="lucide lucide-tent h-4 w-4" data-lucide="tent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21 14 3"></path><path d="M20.5 21 10 3"></path><path d="M15.5 21 12 15l-3.5 6"></path><path d="M2 21h20"></path></svg>
          Camping
        </a>
<a className="flex items-center gap-1 transition-colors font-geist hover:text-cyan-600" href="#">
<svg className="lucide lucide-backpack h-4 w-4" data-lucide="backpack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M8 10h8"></path><path d="M8 18h8"></path><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
          Gear
        </a>
<a className="flex items-center gap-1 transition-colors font-geist hover:text-cyan-600" href="#">
<svg className="lucide lucide-watch h-4 w-4" data-lucide="watch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v2.2l1.6 1"></path><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"></path><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path><circle cx="12" cy="12" r="6"></circle></svg>
          Accessories
        </a>
<a className="flex items-center gap-1 transition-colors font-geist hover:text-cyan-600" href="#">
<svg className="lucide lucide-crosshair h-4 w-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
          Hunting
        </a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all font-geist border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
          Search
        </button>
<button className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all shadow-sm font-geist text-white bg-slate-900 hover:bg-slate-800">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
          Shop Now
        </button>

<button className="lg:hidden rounded-lg p-2 transition-colors hover:bg-slate-100" id="menu-btn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t backdrop-blur-md bg-white/95 border-slate-200/50" id="mobile-menu">
<nav className="flex flex-col px-4 py-6 space-y-4">
<a className="flex items-center gap-3 text-sm font-medium transition-colors font-geist hover:text-cyan-600 text-slate-700" href="#">
<svg className="lucide lucide-shirt h-4 w-4" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
          Apparel & Clothing
        </a>
<a className="flex items-center gap-3 text-sm font-medium transition-colors font-geist hover:text-cyan-600 text-slate-700" href="#">
<svg className="lucide lucide-tent h-4 w-4" data-lucide="tent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21 14 3"></path><path d="M20.5 21 10 3"></path><path d="M15.5 21 12 15l-3.5 6"></path><path d="M2 21h20"></path></svg>
          Camping Equipment
        </a>
<a className="flex items-center gap-3 text-sm font-medium transition-colors font-geist hover:text-cyan-600 text-slate-700" href="#">
<svg className="lucide lucide-backpack h-4 w-4" data-lucide="backpack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><path d="M8 10h8"></path><path d="M8 18h8"></path><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
          Outdoor Gear
        </a>
<a className="flex items-center gap-3 text-sm font-medium transition-colors font-geist hover:text-cyan-600 text-slate-700" href="#">
<svg className="lucide lucide-watch h-4 w-4" data-lucide="watch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v2.2l1.6 1"></path><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"></path><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path><circle cx="12" cy="12" r="6"></circle></svg>
          Accessories
        </a>
<a className="flex items-center gap-3 text-sm font-medium transition-colors font-geist hover:text-cyan-600 text-slate-700" href="#">
<svg className="lucide lucide-crosshair h-4 w-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
          Hunting Gear
        </a>
<div className="border-t pt-4 mt-4 border-slate-200">
<button className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all font-geist text-white bg-slate-900 hover:bg-slate-800">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
            Shop Now
          </button>
</div>
</nav>
</div>
</header>

<section className="relative isolate overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="Mountain adventure" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=3840&q=80" />
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-slate-900/80 via-slate-900/50"></div>
</div>
<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
<div className="max-w-2xl animate-fade-in text-white">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm border mb-8 font-geist bg-white/10 text-white/90 border-white/20">
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Trusted by 50,000+ adventurers
        </div>
<h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-tighter font-space-grotesk font-semibold uppercase" style={{}}>
          Conquer every 
          <span className="text-transparent bg-clip-text bg-gradient-to-r tracking-tighter font-space-grotesk font-semibold from-cyan-400 to-amber-400" style={{}}>summit</span>
</h1>
<p className="mt-6 text-lg leading-8 sm:text-xl font-geist text-slate-200">
          Premium outdoor gear engineered for extreme conditions. From alpine expeditions to weekend camping trips, we equip you for every adventure.
        </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all shadow-lg font-geist bg-white text-slate-900 hover:bg-slate-100">
<svg className="lucide lucide-compass h-5 w-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Explore Collection
          </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold ring-1 transition-all backdrop-blur-sm font-geist bg-white/10 text-white ring-white/30 hover:bg-white/20">
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Watch Adventure Stories
          </button>
</div>
</div>
</div>
</section>

<section className="border-b bg-white border-slate-200">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
<div className="text-center animate-slide-up" style={{animationDelay: `0.1s`}}>
<div className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900" style={{}}>50K+</div>
<div className="text-sm mt-1 font-geist text-slate-600">Happy Adventurers</div>
</div>
<div className="text-center animate-slide-up" style={{animationDelay: `0.2s`}}>
<div className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900" style={{}}>1000+</div>
<div className="text-sm mt-1 font-geist text-slate-600">Premium Products</div>
</div>
<div className="text-center animate-slide-up" style={{animationDelay: `0.3s`}}>
<div className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900" style={{}}>99.8%</div>
<div className="text-sm mt-1 font-geist text-slate-600">Customer Satisfaction</div>
</div>
<div className="text-center animate-slide-up" style={{animationDelay: `0.4s`}}>
<div className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900" style={{}}>25+</div>
<div className="text-sm mt-1 font-geist text-slate-600">Years of Excellence</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div className="animate-slide-right">
<h2 className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900 uppercase" style={{}}>Featured Gear</h2>
<p className="mt-2 text-lg font-geist text-slate-600">Handpicked essentials for your next expedition</p>
</div>
<div className="flex gap-2">
<button className="rounded-full border p-2 transition-all text-slate-500 border-slate-200 hover:bg-slate-100 hover:border-slate-300" id="featured-prev">
<svg className="lucide lucide-chevron-left h-5 w-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="rounded-full border p-2 transition-all text-slate-500 border-slate-200 hover:bg-slate-100 hover:border-slate-300" id="featured-next">
<svg className="lucide lucide-chevron-right h-5 w-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide" id="featured-scroll">

<article className="group relative min-w-[280px] flex-shrink-0 rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-cyan-200 border-slate-200">
<div className="absolute top-6 right-6 z-10">
<button className="rounded-full p-2 hover:text-amber-500 transition-all shadow-sm bg-white/90 hover:bg-white text-slate-500">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium font-geist bg-amber-100 text-amber-700">
<svg className="lucide lucide-leaf h-3 w-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            Eco-Friendly
          </span>
</div>
<div className="relative overflow-hidden rounded-xl">
<img alt="Summit Pro Alpine Jacket" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?w=800&q=80" />
</div>
<div className="mt-4">
<h3 className="text-base font-semibold font-geist text-slate-900">Summit Pro Alpine Jacket</h3>
<p className="mt-1 text-sm font-geist text-slate-600">Waterproof • Breathable • Insulated</p>
<div className="mt-2 flex items-center gap-1">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-geist text-slate-500">(248)</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-bold font-geist text-slate-900">$299.99</span>
<span className="text-sm line-through font-geist text-slate-500">$399.99</span>
</div>
<button className="rounded-lg px-4 py-2 text-sm font-medium transition-colors font-geist bg-cyan-600 text-white hover:bg-cyan-700">
              Add to Cart
            </button>
</div>
</div>
</article>

<article className="group relative min-w-[280px] flex-shrink-0 rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-cyan-200 border-slate-200">
<div className="absolute top-6 right-6 z-10">
<button className="rounded-full p-2 hover:text-amber-500 transition-all shadow-sm bg-white/90 hover:bg-white text-slate-500">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium font-geist bg-red-100 text-red-700">
<svg className="lucide lucide-flame h-3 w-3" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
            Bestseller
          </span>
</div>
<div className="relative overflow-hidden rounded-xl">
<img alt="Storm Shield Rain Jacket" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=800&q=80" />
</div>
<div className="mt-4">
<h3 className="text-base font-semibold font-geist text-slate-900">Storm Shield Rain Jacket</h3>
<p className="mt-1 text-sm font-geist text-slate-600">100% Waterproof • Lightweight • Packable</p>
<div className="mt-2 flex items-center gap-1">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-geist text-slate-500">(156)</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-bold font-geist text-slate-900">$189.99</span>
</div>
<button className="rounded-lg px-4 py-2 text-sm font-medium transition-colors font-geist bg-cyan-600 text-white hover:bg-cyan-700">
              Add to Cart
            </button>
</div>
</div>
</article>

<article className="group relative min-w-[280px] flex-shrink-0 rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-cyan-200 border-slate-200">
<div className="absolute top-6 right-6 z-10">
<button className="rounded-full p-2 hover:text-amber-500 transition-all shadow-sm bg-white/90 hover:bg-white text-slate-500">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium font-geist bg-cyan-100 text-cyan-700">
<svg className="lucide lucide-zap h-3 w-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Tech Enhanced
          </span>
</div>
<div className="relative overflow-hidden rounded-xl">
<img alt="Thermal Base Layer Set" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80" style={{}} />
</div>
<div className="mt-4">
<h3 className="text-base font-semibold font-geist text-slate-900">Thermal Base Layer Set</h3>
<p className="mt-1 text-sm font-geist text-slate-600">Merino Wool • Moisture-wicking • Odor-resistant</p>
<div className="mt-2 flex items-center gap-1">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-geist text-slate-500">(89)</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-bold font-geist text-slate-900">$124.99</span>
</div>
<button className="rounded-lg px-4 py-2 text-sm font-medium transition-colors font-geist bg-cyan-600 text-white hover:bg-cyan-700">
              Add to Cart
            </button>
</div>
</div>
</article>

<article className="group relative min-w-[280px] flex-shrink-0 rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-cyan-200 border-slate-200">
<div className="absolute top-6 right-6 z-10">
<button className="rounded-full p-2 hover:text-amber-500 transition-all shadow-sm bg-white/90 hover:bg-white text-slate-500">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium font-geist bg-amber-100 text-amber-700">
<svg className="lucide lucide-award h-3 w-3" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            Editor's Choice
          </span>
</div>
<div className="relative overflow-hidden rounded-xl">
<img alt="Expedition Utility Shirt" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1463694775559-eea25626346b?w=800&q=80" style={{}} />
</div>
<div className="mt-4">
<h3 className="text-base font-semibold font-geist text-slate-900">Expedition Utility Shirt</h3>
<p className="mt-1 text-sm font-geist text-slate-600">Ripstop Fabric • UPF 50+ • Quick-dry</p>
<div className="mt-2 flex items-center gap-1">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-amber-400 stroke-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-geist text-slate-500">(203)</span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-bold font-geist text-slate-900">$89.99</span>
</div>
<button className="rounded-lg px-4 py-2 text-sm font-medium transition-colors font-geist bg-cyan-600 text-white hover:bg-cyan-700">
              Add to Cart
            </button>
</div>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
<a className="group relative isolate flex items-center overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 px-8 py-16 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] to-amber-600" href="#">
<div className="absolute inset-0 bg-gradient-to-br opacity-50 from-cyan-600/50 to-amber-700/50"></div>
<img alt="Hunting gear" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30" src="https://images.unsplash.com/photo-1463694023725-91c761715d21?w=800&q=80" />
<div className="relative z-10 max-w-sm text-white">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm font-geist bg-white/20">
<svg className="lucide lucide-crosshair h-4 w-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
            Hunting Specialists
          </div>
<h3 className="mt-4 text-2xl lg:text-3xl tracking-tighter font-space-grotesk font-semibold uppercase" style={{}}>Professional hunting gear engineered for precision</h3>
<p className="mt-3 font-geist text-cyan-100">Premium optics, tactical clothing, and specialized equipment for the serious hunter.</p>
<div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all font-geist text-white">
            Shop Hunting Collection
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group relative isolate flex items-center overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 px-8 py-16 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] to-cyan-600" href="#">
<div className="absolute inset-0 bg-gradient-to-br opacity-50 from-amber-600/50 to-cyan-700/50"></div>
<img alt="Winter jackets" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30" src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" />
<div className="relative z-10 max-w-sm text-white">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm font-geist bg-white/20">
<svg className="lucide lucide-snowflake h-4 w-4" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
            Winter Collection
          </div>
<h3 className="mt-4 text-2xl lg:text-3xl tracking-tighter font-space-grotesk font-semibold uppercase" style={{}}>Insulated jackets built for extreme cold</h3>
<p className="mt-3 font-geist text-amber-100">Advanced insulation technology and weatherproof materials for the harshest conditions.</p>
<div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all font-geist text-white">
            Shop Winter Gear
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</section>

<section className="border-t bg-white border-slate-200">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900" style={{}}>Why Choose Hikke</h2>
<p className="mt-4 text-lg font-geist text-slate-600">Built for adventurers, tested by professionals</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="text-center animate-slide-up" style={{animationDelay: `0.1s`}}>
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
<svg className="lucide lucide-shield-check h-6 w-6 text-indigo-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold font-geist text-slate-900">Lifetime Warranty</h3>
<p className="mt-2 text-sm font-geist text-slate-600">Every product backed by our comprehensive lifetime warranty program.</p>
</div>
<div className="text-center animate-slide-up" style={{animationDelay: `0.2s`}}>
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
<svg className="lucide lucide-truck h-6 w-6 text-emerald-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="mt-4 text-lg font-semibold font-geist text-slate-900">Free Shipping</h3>
<p className="mt-2 text-sm font-geist text-slate-600">Free shipping on orders over $75 with fast delivery options.</p>
</div>
<div className="text-center animate-slide-up" style={{animationDelay: `0.3s`}}>
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
<svg className="lucide lucide-headphones h-6 w-6 text-amber-600" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold font-geist text-slate-900">Expert Support</h3>
<p className="mt-2 text-sm font-geist text-slate-600">24/7 customer support from outdoor gear specialists.</p>
</div>
<div className="text-center animate-slide-up" style={{animationDelay: `0.4s`}}>
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
<svg className="lucide lucide-rotate-ccw h-6 w-6 text-rose-600" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold font-geist text-slate-900">Easy Returns</h3>
<p className="mt-2 text-sm font-geist text-slate-600">30-day hassle-free returns for complete peace of mind.</p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br border-t from-cyan-50 to-amber-50 border-slate-200">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl tracking-tighter font-space-grotesk font-semibold text-slate-900 uppercase" style={{}}>Stay Connected</h2>
<p className="mt-4 text-lg font-geist text-slate-600">Get adventure tips, new product launches, and exclusive offers</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
<input className="flex-1 rounded-lg border px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 border-slate-200" placeholder="Enter your email" type="email" />
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors font-geist bg-cyan-600 text-white hover:bg-cyan-700">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            Subscribe
          </button>
</div>
</div>
</div>
</section>

<footer className="text-white bg-slate-900">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="">
<div className="flex gap-2 text-lg font-semibold font-geist mb-4 items-center uppercase">Hikke<div className="relative">
</div></div>
<p className="text-sm mb-4 font-geist text-slate-400">Premium outdoor gear for the ultimate adventure experience.</p>
<div className="flex gap-3">
<a className="rounded-lg p-2 transition-colors bg-white/10 hover:bg-white/20" href="#">
<svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="rounded-lg p-2 transition-colors bg-white/10 hover:bg-white/20" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="rounded-lg p-2 transition-colors bg-white/10 hover:bg-white/20" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist uppercase">Shop</h4>
<nav className="space-y-2 text-sm text-slate-400">
<a className="block transition-colors font-geist hover:text-white" href="#">Apparel</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Camping Gear</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Backpacks</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Accessories</a>
</nav>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist uppercase">Support</h4>
<nav className="space-y-2 text-sm text-slate-400">
<a className="block transition-colors font-geist hover:text-white" href="#">Contact Us</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Size Guide</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Returns</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Warranty</a>
</nav>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist uppercase">Company</h4>
<nav className="space-y-2 text-sm text-slate-400">
<a className="block transition-colors font-geist hover:text-white" href="#">About Us</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Careers</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Press</a>
<a className="block transition-colors font-geist hover:text-white" href="#">Blog</a>
</nav>
</div>
</div>
<div className="border-t mt-12 pt-8 text-center text-sm border-slate-800 text-slate-400">
<p className="font-geist">© 2024 Hikke. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
