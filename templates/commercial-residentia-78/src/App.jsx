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



      // Dynamic year (guarded)
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeMenu = document.getElementById('closeMenu');

      function openMenu() {
        mobileMenu.classList.remove('hidden');
        menuBtn?.setAttribute('aria-expanded', 'true');
      }
      function hideMenu() {
        mobileMenu.classList.add('hidden');
        menuBtn?.setAttribute('aria-expanded', 'false');
      }
      menuBtn?.addEventListener('click', openMenu);
      closeMenu?.addEventListener('click', hideMenu);
      mobileMenu?.addEventListener('click', (e) => {
        if (e.target === mobileMenu) hideMenu();
      });

      // Hero carousel
      const heroImg = document.getElementById('heroImage');
      const nextHero = document.getElementById('nextHero');
      const prevHero = document.getElementById('prevHero');
      const pageBg = document.getElementById('pageBg');

      // High-res, curated slides
      const heroImages = [
        heroImg?.src || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=2400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=2400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=2400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?w=2400&q=80&auto=format&fit=crop'
      ];
      let heroIndex = 0;

      // Keep page background in sync with hero
      function swapPageBg(src) {
        if (!pageBg) return;
        pageBg.style.opacity = 0;
        setTimeout(() => {
          pageBg.src = src;
          if (pageBg.complete) {
            pageBg.style.opacity = 1;
          } else {
            pageBg.onload = () => (pageBg.style.opacity = 1);
          }
        }, 200);
      }
      // Initialize page background to current hero image
      if (pageBg && heroImg) {
        pageBg.src = heroImg.src;
      }

      function setHero(index) {
        if (!heroImg) return;
        heroIndex = (index + heroImages.length) % heroImages.length;
        heroImg.style.opacity = 0;
        const nextSrc = heroImages[heroIndex];
        // Swap after fade-out
        setTimeout(() => {
          heroImg.src = nextSrc;
          if (heroImg.complete) {
            heroImg.style.opacity = 1;
          } else {
            heroImg.onload = () => (heroImg.style.opacity = 1);
          }
          // Sync global page background
          swapPageBg(nextSrc);
        }, 200);
      }

      nextHero?.addEventListener('click', () => setHero(heroIndex + 1));
      prevHero?.addEventListener('click', () => setHero(heroIndex - 1));

      let heroTimer = setInterval(() => setHero(heroIndex + 1), 8000);
      [nextHero, prevHero, heroImg].forEach(el => {
        el?.addEventListener('mouseenter', () => clearInterval(heroTimer));
        el?.addEventListener('mouseleave', () => {
          clearInterval(heroTimer);
          heroTimer = setInterval(() => setHero(heroIndex + 1), 8000);
        });
      });

      // Filter buttons for Listings/Deals
      const filterBtns = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('[data-type]');
      function setActive(btn) {
        filterBtns.forEach(b => {
          b.classList.remove('bg-white/10', 'text-white/90');
          b.classList.add('text-white/80');
        });
        btn.classList.add('bg-white/10', 'text-white/90');
      }
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          setActive(btn);
          cards.forEach(card => {
            const type = card.getAttribute('data-type');
            const show = filter === 'all' || type === filter;
            card.classList.toggle('hidden', !show);
          });
        });
      });

      // Simple form submission handler (demo)
      const form = document.getElementById('inquiryForm');
      const status = document.getElementById('formStatus');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        status.textContent = 'Sending…';
        setTimeout(() => {
          status.textContent = 'Thanks — your message has been received. I’ll be in touch shortly.';
          form.reset();
          setTimeout(() => status.textContent = '', 6000);
        }, 700);
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
      

<div aria-hidden="true" className="absolute inset-0 -z-10">
<img alt="" className="h-full w-full object-cover transition-opacity duration-500 blur-sm sm:blur md:blur-md" id="pageBg" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2400&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="bg-neutral-950/70 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="pointer-events-none absolute top-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-black/70 to-transparent"></div>
<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-0" style={{boxShadow: 'inset 0 0 240px rgba(0,0,0,0.5)'}}></div>
</div>

<div className="min-h-screen">

<nav className="mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-14 mt-3 sm:mt-6 rounded-3xl ring-1 backdrop-blur bg-white/5 ring-white/10 sticky top-3 sm:top-6 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">

<a className="group inline-flex items-center gap-3 rounded-full px-4 py-2 ring-1 backdrop-blur bg-white/5 ring-white/10" href="#">
<span className="text-sm font-light text-white/90 font-geist" style={{}}>ELI ZILBERSTEIN</span>
</a>

<div className="hidden lg:flex items-center gap-2 rounded-full px-2 py-2 ring-1 backdrop-blur bg-white/5 ring-white/10">
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white font-geist" href="#home" style={{}}>Home</a>
<span className="font-light text-white/20 font-geist" style={{}}>/</span>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white font-geist" href="/about" style={{}}>About</a>
<span className="font-light text-white/20 font-geist" style={{}}>/</span>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white font-geist" href="#about" style={{}}>Services</a>
<span className="font-light text-white/20 font-geist" style={{}}>/</span>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white font-geist" href="#projects" style={{}}>Deals</a>
<span className="font-light text-white/20 font-geist" style={{}}>/</span>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white font-geist" href="#projects" style={{}}>Listings</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition bg-white text-neutral-900 hover:bg-white/90" href="#contact">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="font-light font-geist" style={{}}>Let’s Talk</span>
</a>
<button aria-label="Open menu" className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 backdrop-blur transition bg-white/10 ring-white/15 hover:bg-white/15" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<header className="relative mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-14 mt-3 sm:mt-6 overflow-clip rounded-3xl ring-1 bg-neutral-900/50 ring-white/10" id="home">

<img alt="City skyline and real estate market view" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500" id="heroImage" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2400&amp;q=80&amp;auto=format&amp;fit=crop" style={{opacity: '1'}}/>

<div className="absolute inset-0 bg-gradient-to-t to-transparent from-neutral-950/80 via-neutral-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950/60"></div>

<div className="z-10 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="pt-28 sm:pt-40 lg:pt-52 pb-28 sm:pb-36 lg:pb-44">

<div className="mb-6 flex gap-3">
<span className="inline-flex items-center rounded-full border px-4 py-2 text-xs backdrop-blur font-light border-white/20 bg-black/30 text-white/80 font-geist" style={{}}>Commercial</span>
<span className="inline-flex items-center rounded-full border px-4 py-2 text-xs backdrop-blur font-light border-white/20 bg-black/30 text-white/80 font-geist" style={{}}>Residential</span>
</div>

<h1 className="leading-none sm:text-6xl md:text-7xl lg:text-8xl text-5xl drop-shadow-sm tracking-tighter text-white font-playfair font-medium" style={{}}>ELI ZILBERSTEIN</h1>
<h2 className="leading-none sm:text-7xl md:text-8xl lg:text-[9rem] text-6xl mt-2 drop-shadow-sm tracking-tighter text-white/95 font-playfair font-medium" style={{}}>BROKER</h2>

<p className="mt-6 max-w-xl text-sm sm:text-base font-light text-white/80 font-geist" style={{}}>
        Tenant representation, landlord leasing, investment sales, and residential advisory tailored to your goals.
      </p>

<div className="mt-8 flex items-center gap-3 flex-wrap">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition font-light bg-white text-neutral-900 hover:bg-white/90 font-geist" href="#projects" style={{}}>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          View Listings &amp; Deals
        </a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm ring-1 transition font-light bg-white/10 ring-white/15 hover:bg-white/15 font-geist" href="#about" style={{}}>
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Services
        </a>

</div>
<span aria-live="polite" className="sr-only">Hero slider controls available: previous and next.</span>
</div>
</div>
</div>

<div className="pointer-events-none absolute bottom-6 right-6 z-20 flex gap-3">
<button className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 backdrop-blur transition bg-white/10 ring-white/15 hover:bg-white/15" id="prevHero">
<svg className="lucide lucide-chevron-left h-5 w-5 text-white/90" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 backdrop-blur transition bg-white/10 ring-white/15 hover:bg-white/15" id="nextHero">
<svg className="lucide lucide-chevron-right h-5 w-5 text-white/90" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent from-neutral-950/70"></div>
</header>

<section className="sm:px-6 lg:px-8 sm:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="about">

<div className="relative" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
<div className="bg-neutral-50 text-neutral-900">
<div className="sm:px-6 sm:py-16 lg:pl-8 lg:pr-8 lg:pt-50 lg:pb-50 max-w-7xl mx-auto pt-80 pr-8 pb-80 pl-8">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-600 text-center font-light font-geist">Featured</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight text-center uppercase font-playfair font-medium">With Over $22 Billion in Luxury Home Sales</h2>
<p className="text-sm font-light text-neutral-600 font-geist text-center max-w-xl mt-3 mr-auto ml-auto">Eli Zilberstein represents the finest estates across the globe and was ranked in the top 5 luxury real estate agents in the US by the Wall Street Journal.</p>
<div className="mt-10 grid gap-y-8 sm:grid-cols-3 text-center">
<div className="">
<div className="text-5xl sm:text-6xl tracking-tight font-playfair font-medium">$22B+</div>
<p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Worth of Real Estate Sold</p>
</div>
<div className="">
<div className="text-5xl sm:text-6xl tracking-tight font-playfair font-medium">.01%</div>
<p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Top Agents Nationwide</p>
</div>
<div className="">
<div className="text-5xl sm:text-6xl tracking-tight font-playfair font-medium">$1.7B+</div>
<p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Total Sales in 2024</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>

<div className="bg-neutral-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<p className="text-xs uppercase tracking-[0.2em] text-white/60 text-center font-light font-geist">Featured</p>
<h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl tracking-tight text-center uppercase font-playfair font-medium">Luxury Listings</h2>
</div>

<div className="relative">
<img alt="Luxury hillside estate with pool" className="w-full h-64 sm:h-96 lg:h-[34rem] object-cover" src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=3840&amp;q=80" style={{}}/>
<div className="bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:bottom-10">
<h3 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium">10936 CHALON RD</h3>
<p className="mt-1 text-sm font-light text-white/80 font-geist">10936 Chalon Rd, Los Angeles, CA 90077</p>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-8 py-4 bg-neutral-900">
<div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition font-light bg-white text-neutral-900 hover:bg-white/90 font-geist" href="#contact">
            Let’s Connect
            <svg className="h-4 w-4" data-lucide="message-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm ring-1 transition font-light bg-white/0 ring-white/20 hover:bg-white/5 font-geist" href="#projects">
            View All Properties
            <svg className="h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 sm:py-12 lg:px-8 lg:pt-0 pt-12 pr-6 pb-12 pl-6" id="projects" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>

<div className="mt-12">
<div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<a aria-label="List With Us" className="group relative overflow-hidden ring-1 ring-white/10 bg-white/5" href="#contact">
<img alt="Modern property exterior at night" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<span className="inline-flex items-center px-6 py-3 ring-1 ring-white/80 text-white text-xl sm:text-2xl tracking-tight uppercase bg-white/0 group-hover:bg-white/10 transition font-playfair font-medium" style={{}}>List With Us</span>
</div>
</a>

<a aria-label="Interactive Map" className="group relative overflow-hidden ring-1 ring-white/10 bg-white/5" href="#projects">
<img alt="Abstract city map" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-red-600/80"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<span className="inline-flex items-center px-6 py-3 ring-1 ring-white/90 text-white text-xl sm:text-2xl tracking-tight uppercase bg-white/0 group-hover:bg-white/10 transition font-playfair font-medium" style={{}}>Interactive Map</span>
</div>
</a>

<a aria-label="Our Offices" className="group relative overflow-hidden ring-1 ring-white/10 bg-white/5" href="#contact">
<img alt="Contemporary office interior" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1600&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<span className="inline-flex items-center px-6 py-3 ring-1 ring-white/80 text-white text-xl sm:text-2xl tracking-tight uppercase bg-white/0 group-hover:bg-white/10 transition font-playfair font-medium" style={{}}>Our Offices</span>
</div>
</a>

<a aria-label="Neighborhood Guides" className="group relative overflow-hidden ring-1 ring-white/10 bg-white/5" href="#">
<img alt="Neighborhood aerial" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-red-600/80"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<span className="inline-flex items-center px-6 py-3 ring-1 ring-white/90 text-white text-xl sm:text-2xl tracking-tight uppercase bg-white/0 group-hover:bg-white/10 transition font-playfair font-medium" style={{}}>Neighborhood Guides</span>
</div>

</a><a aria-label="Home Valuation" className="group relative overflow-hidden ring-1 ring-white/10 bg-white/5" href="#contact">
<img alt="Modern home exterior" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1706164971299-cfa23ec76083?w=1600&amp;q=80" style={{filter: 'grayscale(100%)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<span className="inline-flex items-center px-6 py-3 ring-1 ring-white/80 text-white text-xl sm:text-2xl tracking-tight uppercase bg-white/0 group-hover:bg-white/10 transition font-playfair font-medium" style={{}}>Home Valuation</span>
</div>
</a>

<a aria-label="New Development" className="group relative overflow-hidden ring-1 ring-white/10 bg-white/5" href="#projects">
<img alt="Architectural wireframe illustration" className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-red-600/80"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<span className="inline-flex items-center px-6 py-3 ring-1 ring-white/90 text-white text-xl sm:text-2xl tracking-tight uppercase bg-white/0 group-hover:bg-white/10 transition font-playfair font-medium" style={{}}>New Development</span>
</div>
</a>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:py-16 min-h-screen sm:px-0 lg:px-0 sm:py-0 w-full mr-auto ml-auto pt-12 pr-4 pb-12 pl-4" style={{padding: '0px', maxWidth: 'none'}}>
<div className="overflow-hidden min-h-screen bg-white/0 w-full ring-0 rounded-none relative">
<img alt="Eli Zilberstein portrait" className="w-full h-600 object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/72b8ee57-03de-4b85-9959-82b8284d9a99_800w.webp" style={{filter: 'grayscale(100%)', opacity: '0.9'}}/>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-neutral-950/80 via-neutral-950/60 to-neutral-950/80" style={{}}></div>
<div className="grid min-h-[70vh] sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-0 lg:pt-0 pt-20 pr-6 pb-20 pl-6 relative items-center" style={{backgroundImage: 'url(\'EliZilberstein (1).webp\')', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
<div className="col-span-12 lg:col-start-7 lg:col-span-6">
<div className="rounded-2xl ring-1 backdrop-blur p-6 sm:p-8 ring-white/10 bg-neutral-900/40 text-center">
<span className="inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-light text-white/70 ring-1 ring-white/10 bg-white/0 font-geist">About</span>
<h2 className="mt-3 text-4xl sm:text-5xl tracking-tight text-white/95 font-playfair font-medium uppercase">ELI ZILBERSTEIN</h2>
<p className="text-sm mt-2 font-light text-white/70 font-geist">Licensed Real Estate Salesperson — CA</p>
<p className="mt-4 text-sm font-light text-white/80 font-geist">
        Eli blends data-led insight with hands-on execution to help clients lease, buy, and sell with confidence.
        From comps and absorption trends to private showings and negotiation, he delivers clear guidance at every step.
        Based in NYC and working across the five boroughs and select markets nationwide.
      </p>
<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition font-light bg-white text-neutral-900 hover:bg-white/90 font-geist" href="/about">
          Read More
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm ring-1 transition font-light bg-white/10 ring-white/15 hover:bg-white/15 font-geist" href="#contact">
          Let’s Connect
          <svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div></section>

<div className="relative mt-16" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
<div className="text-neutral-900 bg-neutral-50">
<div className="sm:px-6 lg:px-8 sm:py-20 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-600 text-center font-light font-geist">As</p>
<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl tracking-tight text-center uppercase font-playfair font-medium">Featured In</h2>

<div className="mt-10 grid grid-cols-3 sm:grid-cols-7 gap-6 items-center justify-center">
<span className="text-neutral-400 text-sm sm:text-base text-center font-geist font-light">inman</span>
<span className="text-neutral-400 text-sm sm:text-base text-center font-geist font-light">NBC</span>
<span className="text-neutral-400 text-sm sm:text-base text-center font-geist font-light">CNN</span>
<span className="text-neutral-400 text-sm sm:text-base text-center font-geist font-light">WSJ</span>
<span className="hidden sm:inline text-neutral-400 text-sm sm:text-base text-center font-geist font-light">Hollywood Reporter</span>
<span className="hidden sm:inline text-neutral-400 text-sm sm:text-base text-center font-geist font-light">Variety</span>
<span className="hidden sm:inline text-neutral-400 text-sm sm:text-base text-center font-geist font-light">The Real Deal</span>
</div>

<div className="mt-12 grid gap-8 md:grid-cols-2">
<article className="rounded-2xl ring-1 ring-neutral-200 bg-white p-6">
<div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-200">
<img alt="Editorial living room scene" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&amp;q=80" style={{filter: 'blur(1px) saturate(90%)'}}/>
</div>
<h3 className="mt-6 text-xl sm:text-2xl tracking-tight uppercase font-playfair font-medium leading-none">Inside a Legendary $16,000,000 Canyonside Mansion</h3>
<p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Architectural Digest</p>
<a className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 font-light text-neutral-900" href="#">
              Read More
              <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
<article className="rounded-2xl ring-1 ring-neutral-200 bg-white p-6">
<div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-200">
<img alt="Soft focus living room editorial" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?w=1600&amp;q=80" style={{filter: 'blur(1px) saturate(90%)'}}/>
</div>
<h3 className="mt-6 text-xl sm:text-2xl tracking-tight uppercase font-playfair font-medium leading-none">Leaders of Influence: Residential Real Estate 2024</h3>
<p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Los Angeles Business Journal</p>
<a className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 font-light text-neutral-900" href="#">
              Read More
              <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
</div>
</div>
</div>
</div>

<section className="sm:px-6 lg:px-8 sm:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4" id="contact">
<div className="relative" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
<div className="relative min-h-[70vh] sm:minh-[75vh] overflow-hidden">
<img alt="Warm modern interior with open door to garden" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1623051786509-57224cdc43e1?w=3840&amp;q=80" style={{}}/>
<div className="bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="sm:px-6 lg:px-8 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 py-16 relative">
<div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-white/10 bg-neutral-900/45 backdrop-blur p-6 sm:p-10 shadow-2xl">
<p className="text-xs uppercase tracking-[0.2em] text-white/70 text-center font-light font-geist">Newsletter</p>
<h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl tracking-tight text-center uppercase font-playfair font-medium">Join the Exclusive List</h2>
<p className="mt-3 text-sm text-center font-light text-white/80 font-geist">Get exclusive access to featured listings, market insights, behind‑the‑scenes interviews, and more.</p>
<form className="mt-8 grid gap-4" id="newsletterForm">
<label className="block">
<span className="sr-only">Email address</span>
<input className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 border-white/10 placeholder:text-white/60" name="email" placeholder="Enter Your Email Address" required="" type="email"/>
</label>
<label className="flex items-start gap-3 text-xs font-light text-white/70 font-geist">
<input className="peer sr-only" name="consent" required="" type="checkbox"/>
<span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-[4px] ring-1 ring-white/30 bg-white/0 peer-checked:bg-white peer-checked:text-neutral-900">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">By providing your contact information, you acknowledge and agree to our <a className="underline decoration-white/20 hover:decoration-white" href="#">Privacy Policy</a> and consent to receive marketing communications. Message and data rates may apply.</span>
</label>
<div className="mt-2 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-light text-neutral-900 hover:opacity-90" style={{backgroundColor: '#CDB887'}} type="submit">
                Subscribe
                <svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="text-center text-xs font-light text-white/60" id="newsletterStatus"></p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-14 mb-6 rounded-3xl ring-1 backdrop-blur ring-white/10 bg-white/5">
<div className="sm:px-10 sm:py-10 pt-8 pr-6 pb-8 pl-6 bg-white text-neutral-900" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
<div className="mx-auto max-w-7xl px-6 sm:px-10 py-10 sm:py-14">

<div className="grid gap-10 md:grid-cols-3">

<div className="flex flex-col gap-8 md:pr-10 md:border-r border-neutral-200">
<div className="">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Contact</p>
<p className="mt-2 text-sm font-light text-neutral-700 font-geist">Eli Zilberstein</p>
<a className="inline-block underline decoration-neutral-300 hover:decoration-neutral-900 text-sm font-light font-geist mt-1" href="/tel:+18187815006">818-781-5006</a>
</div>
<div className="">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Office</p>
<p className="text-sm font-light text-neutral-700 font-geist mt-2">6360 Van Nuys Blvd. Suite 204, Van Nuys, CA 91401</p>
<div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-600 font-light font-geist">
<span className="">Los Angeles</span>
<span className="">San Fernando Valley</span>
</div>
</div>
</div>

<div className="text-center">
<img alt="REALTOR and Equal Housing Opportunity logo" className="xl:text-center w-auto h-12 object-cover mr-auto ml-auto" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcb0ca24-2bf5-44d1-bb93-53dff9ba443c_800w.webp" style={{width: '80px', height: 'auto'}}/><h2 className="text-3xl sm:text-4xl tracking-tight uppercase font-playfair font-medium">ELI ZILBERSTEIN</h2>
<p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500 font-light font-geist">Broker</p>
<p className="text-xs font-light text-neutral-500 font-geist mt-2">MLS Licensed Real Estate Salesperson</p>
</div>

<div className="md:pl-10 md:border-l border-neutral-200">
<div className="grid grid-cols-3 gap-3 sm:w-64 ml-auto">
<a aria-label="YouTube" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 h-12" href="#"><svg className="h-5 w-5 text-neutral-800" data-lucide="youtube" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5A3.5 3.5 0 0 1 5.5 5h13A3.5 3.5 0 0 1 22 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 15.5Z"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a aria-label="Instagram" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 h-12" href="#"><svg className="h-5 w-5 text-neutral-800" data-lucide="instagram" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path></svg></a>
<a aria-label="Facebook" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 h-12" href="#"><svg className="h-5 w-5 text-neutral-800" data-lucide="facebook" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 h-12" href="#"><svg className="h-5 w-5 text-neutral-800" data-lucide="linkedin" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a aria-label="Twitter" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 h-12" href="#"><svg className="h-5 w-5 text-neutral-800" data-lucide="twitter" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 6.5-3.8.9 0 3.5-1.2 3.5-1.2z"></path></svg></a>
<a aria-label="Play" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 bg-white hover:bg-neutral-50 h-12" href="#"><svg className="h-5 w-5 text-neutral-800" data-lucide="play" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></a>
</div>
</div>
</div>

<div className="mt-10 pt-8 border-t border-neutral-200">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-light font-geist">Navigation</p>
<nav className="mt-4 flex flex-wrap items-center gap-3 text-sm font-light text-neutral-700 font-geist">
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="#home">Home</a>
<span className="text-neutral-300">|</span>
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="/about">About</a>
<span className="text-neutral-300">|</span>
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="#about">Services</a>
<span className="text-neutral-300">|</span>
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="#projects">Listings</a>
<span className="text-neutral-300">|</span>
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="#projects">Deals</a>
<span className="text-neutral-300">|</span>
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="#contact">Contact</a>
</nav>
</div>

<div className="mt-8">
<p className="text-xs font-light text-neutral-500 font-geist">Eli Zilberstein is a licensed real estate broker in the state of California (DRE# 01993527). Each office is independently owned and operated. All property information, including, but not limited to square footage, room count, number of bedrooms and the school district in which the listing is located, is deemed reliable, but should be independently verified through personal inspection by and/or with the appropriate professionals. We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin. Information presented is deemed reliable but not guaranteed. This is not intended as a solicitation if your property is currently listed with another broker.</p>
</div>

<div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<img alt="REALTOR and Equal Housing Opportunity logo" className="w-auto h-10 object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a5f3d3fe-dd4e-48cc-a919-3ed72988b545_800w.webp" style={{}}/>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs font-light text-neutral-600 font-geist">
<span className="">Powered by Steve Martin SEO</span>
<span className="text-neutral-300">|</span>
<span className=""><span id="year">2025</span> ©</span>
<span className="text-neutral-300">|</span>
<a className="underline decoration-neutral-300 hover:decoration-neutral-900" href="#">Privacy Policy</a>
</div>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
<div className="absolute right-3 top-3 left-3 rounded-2xl ring-1 ring-white/10 bg-neutral-900/95">
<div className="flex items-center justify-between px-4 py-3">
<span className="text-sm font-light text-white/90 font-geist" style={{}}>Menu</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 backdrop-blur bg-white/10 ring-white/15 hover:bg-white/15" id="closeMenu">
<svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
<nav className="px-4 pb-4 grid gap-2">
<a className="block rounded-xl px-4 py-3 font-light hover:bg-white/5 text-white/90 font-geist" href="#home" style={{}}>Home</a>
<a className="block rounded-xl px-4 py-3 font-light hover:bg-white/5 text-white/90 font-geist" href="/about" style={{}}>About</a>
<a className="block rounded-xl px-4 py-3 font-light hover:bg-white/5 text-white/90 font-geist" href="#about" style={{}}>Services</a>
<a className="block rounded-xl px-4 py-3 font-light hover:bg-white/5 text-white/90 font-geist" href="#projects" style={{}}>Listings</a>
<a className="block rounded-xl px-4 py-3 font-light hover:bg-white/5 text-white/90 font-geist" href="#projects" style={{}}>Deals</a>
<a className="block rounded-xl px-4 py-3 font-light hover:bg-white/5 text-white/90 font-geist" href="#contact" style={{}}>Contact</a>
</nav>
</div>
</div>



    </>
  );
}
