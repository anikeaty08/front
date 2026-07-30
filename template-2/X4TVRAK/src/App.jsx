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
      
    lucide.createIcons();

    /* Particles */
    particlesJS("heroParticles", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#facc15" },
        opacity: { value: 0.2, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, out_mode: "out" }
      },
      interactivity: { events: { onhover: { enable: false } } },
      retina_detect: true
    });

    /* Typewriter */
    const headlineEl = document.getElementById('headline');
    const cursorEl = document.getElementById('cursor');
    const headlineText = "Travel Tailored to You.\nBooked in One Click.";
    let hIdx = 0;
    function typeLoop() {
      if (hIdx <= headlineText.length) {
        const char = headlineText[hIdx] || '';
        headlineEl.innerHTML += char === '\n' ? '<br>' : char;
        hIdx++;
        setTimeout(typeLoop, 55);
      } else {
        setTimeout(() => {
          headlineEl.innerHTML = '';
          hIdx = 0;
          typeLoop();
        }, 2000);
      }
    }
    typeLoop();
    setInterval(() => cursorEl.classList.toggle('opacity-0'), 500);

    /* Style buttons */
    const styleBtns = document.querySelectorAll('.styleBtn');
    let selectedStyle = 'luxury';
    styleBtns.forEach(btn => {
      if (btn.dataset.style === 'luxury') btn.classList.add('border-amber-500', 'bg-amber-50');
      btn.addEventListener('click', () => {
        styleBtns.forEach(b => b.classList.remove('border-amber-500', 'bg-amber-50'));
        btn.classList.add('border-amber-500', 'bg-amber-50');
        selectedStyle = btn.dataset.style;
      });
    });

    /* Preview generator */
    document.getElementById('generateBtn').addEventListener('click', () => {
      const interest = document.getElementById('interest').value;
      const budget = document.getElementById('budget').value;
      const preview = document.getElementById('previewList');
      preview.innerHTML = `
        <li class="flex items-start gap-2"><i data-lucide="calendar" class="w-4 h-4 text-amber-500 mt-1"></i><span>Day 1: ${interest === 'food' ? 'Gourmet tour' : interest === 'adventure' ? 'Canyon zip-line' : 'Historic city walk'} & sunset views.</span></li>
        <li class="flex items-start gap-2"><i data-lucide="mountain" class="w-4 h-4 text-amber-500 mt-1"></i><span>Day 2: ${selectedStyle === 'luxury' ? 'Private yacht' : selectedStyle === 'balanced' ? 'Local ferry' : 'Community hike'} + tasting menu.</span></li>
        <li class="flex items-start gap-2"><i data-lucide="flag" class="w-4 h-4 text-amber-500 mt-1"></i><span>Day 3: Free day & one-click checkout (≈$${budget}).</span></li>`;
      lucide.createIcons();
      document.getElementById('previewCard').classList.remove('opacity-0', 'translate-y-6');
    });

    /* Mobile nav */
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      navToggle.querySelector('i').setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
      lucide.createIcons();
    });

    /* Footer year */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* Carousel controls */
    const carousel = document.getElementById('carousel');
    document.getElementById('prevBtn').addEventListener('click', () => carousel.scrollBy({ left: -250, behavior: 'smooth' }));
    document.getElementById('nextBtn').addEventListener('click', () => carousel.scrollBy({ left: 250, behavior: 'smooth' }));
  
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
      

<nav className="fixed inset-x-0 top-0 z-50 ring-1 ring-neutral-900/5 bg-white/70 backdrop-blur-lg">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium tracking-tight" href="#">
<svg className="lucide lucide-globe w-5 h-5 text-amber-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Protrip.AI
        </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium transition hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded" href="#">My Bookings</a>
<a className="text-sm font-medium transition hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded" href="#">Explore</a>
<a className="text-sm font-medium transition hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded" href="#">FAQ</a>
<a className="text-sm font-medium transition hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded" href="#">Contact Us</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-neutral-50 text-sm font-medium shadow ring-1 ring-amber-600/40 transition hover:scale-105 hover:shadow-amber-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500" href="#ctaTop">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg> Start Planning
          </a>
</div>
<button aria-label="Open main menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:text-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" id="navToggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
<div className="md:hidden hidden px-6 pb-6" id="mobileMenu">
<a className="block py-2 text-sm font-medium rounded hover:bg-neutral-100" href="#">My Bookings</a>
<a className="block py-2 text-sm font-medium rounded hover:bg-neutral-100" href="#">Explore</a>
<a className="block py-2 text-sm font-medium rounded hover:bg-neutral-100" href="#">FAQ</a>
<a className="block py-2 text-sm font-medium rounded hover:bg-neutral-100" href="#">Contact Us</a>
<a className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-neutral-50 text-sm font-medium shadow ring-1 ring-amber-600/40 transition hover:scale-105 hover:shadow-amber-500/50" href="#ctaTop">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg> Start Planning
      </a>
</div>
</nav>

<header className="relative isolate overflow-hidden pt-28 md:pt-32">
<div className="absolute inset-0 -z-10" id="heroParticles"><canvas className="particles-js-canvas-el" height="700" style={{width: `100%`, height: `100%`}} width="2061"></canvas></div>

<img alt="Mount Fuji" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1505060570911-c6fa6d843b4d?auto=format&fit=crop&w=1400&q=60" />
<div className="max-w-7xl lg:flex lg:items-center lg:gap-10 lg:pt-20 lg:pb-40 mr-auto ml-auto pt-12 pr-6 pb-32 pl-6">
<div className="max-w-2xl">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight flex flex-wrap">
<span className="" id="headline">Travel Tailored to</span>
<span className="inline-block bg-neutral-900 w-px h-9 lg:h-12 align-bottom ml-0.5 opacity-0" id="cursor"></span>
</h1>
<p className="mt-6 text-lg lg:text-xl text-neutral-700">
          Our AI learns your travel style and instantly builds your dream itinerary—then books it all in one seamless click.
        </p>
<button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-neutral-50 font-medium shadow-lg ring-1 ring-amber-600/40 transition hover:scale-105 hover:shadow-amber-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500" id="ctaTop">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg> Start Planning
        </button>
</div>

<div className="relative mt-16 lg:mt-0 lg:flex-1">
<div className="relative mx-auto w-full max-w-md rounded-2xl bg-white/60 shadow-xl backdrop-blur-lg ring-1 ring-neutral-900/5 overflow-hidden">
<img alt="Itinerary" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1502920917128-1aa500764b52?auto=format&fit=crop&w=800&q=60" />
<ol className="px-6 py-6 space-y-4">
<li className="flex items-center gap-3"><svg className="lucide lucide-settings w-4 h-4 text-amber-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg><span className="text-sm">AI Preference Engine</span></li>
<li className="flex items-center gap-3"><svg className="lucide lucide-map w-4 h-4 text-amber-500" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg><span className="text-sm">Dream Itinerary Built</span></li>
<li className="flex items-center gap-3"><svg className="lucide lucide-mouse-pointer-click w-4 h-4 text-amber-500" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg><span className="text-sm">Booked Instantly</span></li>
</ol>
</div>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-6 py-20">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl bg-white shadow-sm ring-1 ring-neutral-100/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
<svg className="lucide lucide-brain w-6 h-6 text-amber-500" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<h3 className="mt-4 text-lg font-medium">Smart Preference Engine</h3>
<p className="mt-2 text-sm text-neutral-700">Our AI understands your travel style—no generic plans.</p>
</div>
<div className="rounded-xl bg-white shadow-sm ring-1 ring-neutral-100/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
<svg className="lucide lucide-message-square-off w-6 h-6 text-amber-500" data-lucide="message-square-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15V5a2 2 0 0 0-2-2H9"></path><path d="m2 2 20 20"></path><path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"></path></svg>
<h3 className="mt-4 text-lg font-medium">No Chat Required</h3>
<p className="mt-2 text-sm text-neutral-700">Skip the chatbot. Get a ready-to-go itinerary instantly.</p>
</div>
<div className="rounded-xl bg-white shadow-sm ring-1 ring-neutral-100/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
<svg className="lucide lucide-credit-card w-6 h-6 text-amber-500" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<h3 className="mt-4 text-lg font-medium">True One-Click Booking</h3>
<p className="mt-2 text-sm text-neutral-700">Flights, stays, and transport—all booked on our site without redirection.</p>
</div>
</div>
</section>

<section className="bg-neutral-100/60 py-20">
<div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Test-drive our AI</h2>
<div className="space-y-4">
<div>
<label className="text-sm font-medium">Interests</label>
<select className="mt-1 w-full rounded-md border-neutral-300 focus:border-amber-500 focus:ring-amber-500" id="interest">
<option value="food">Food & Wine</option>
<option value="adventure">Adventure</option>
<option value="culture">Culture</option>
</select>
</div>
<div>
<label className="text-sm font-medium">Budget (USD)</label>
<input className="w-full accent-amber-500" id="budget" max="5000" min="500" step="100" type="range" value="2500" />
</div>
<div>
<label className="text-sm font-medium">Travel Style</label>
<div className="flex gap-3 mt-1">
<button className="styleBtn rounded-md border border-neutral-300 px-3 py-1 text-sm transition hover:border-amber-500 border-amber-500 bg-amber-50" data-style="luxury">Luxury</button>
<button className="styleBtn rounded-md border border-neutral-300 px-3 py-1 text-sm transition hover:border-amber-500" data-style="balanced">Balanced</button>
<button className="styleBtn rounded-md border border-neutral-300 px-3 py-1 text-sm transition hover:border-amber-500" data-style="budget">Budget</button>
</div>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-neutral-50 font-medium shadow-lg ring-1 ring-amber-600/40 transition hover:scale-105 hover:shadow-amber-500/50" id="generateBtn">
<svg className="lucide lucide-wand-sparkles w-5 h-5" data-lucide="wand-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg> See My Trip
        </button>
</div>
<div className="relative h-full w-full max-w-lg mx-auto rounded-3xl bg-white shadow-lg ring-1 ring-neutral-100 p-8 opacity-0 translate-y-6 transition duration-700" id="previewCard">
<h3 className="text-2xl font-medium tracking-tight">Your 3-Day Escape</h3>
<ul className="mt-6 space-y-4 text-sm" id="previewList"></ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24">
<h2 className="text-3xl font-semibold tracking-tight text-center">How It Works</h2>
<div className="mt-16 grid sm:grid-cols-3 gap-10">
<div className="flex flex-col items-center text-center">
<span className="rounded-full bg-amber-500/10 p-4"><svg className="lucide lucide-sliders w-6 h-6 text-amber-500" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg></span>
<h3 className="mt-4 font-medium">1. Input Preferences</h3>
<p className="mt-2 text-sm text-neutral-700">Tell us interests, budget & style.</p>
</div>
<div className="flex flex-col items-center text-center">
<span className="rounded-full bg-amber-500/10 p-4"><svg className="lucide lucide-map w-6 h-6 text-amber-500" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg></span>
<h3 className="mt-4 font-medium">2. Get Your Itinerary</h3>
<p className="mt-2 text-sm text-neutral-700">A smart, day-by-day plan appears instantly.</p>
</div>
<div className="flex flex-col items-center text-center">
<span className="rounded-full bg-amber-500/10 p-4"><svg className="lucide lucide-mouse-pointer-click w-6 h-6 text-amber-500" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg></span>
<h3 className="mt-4 font-medium">3. One-Click Booking</h3>
<p className="mt-2 text-sm text-neutral-700">Lock everything in without leaving our site.</p>
</div>
</div>
</section>

<section className="bg-neutral-100/60 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-semibold tracking-tight">Popular Itineraries</h2>
<div className="flex gap-4">
<button aria-label="Previous" className="rounded-full p-2 bg-white shadow ring-1 ring-neutral-200 hover:bg-neutral-50" id="prevBtn">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next" className="rounded-full p-2 bg-white shadow ring-1 ring-neutral-200 hover:bg-neutral-50" id="nextBtn">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" id="carousel">

<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Kyushu" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">10-Day Trip in Kyushu</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Fukuoka</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Kagoshima</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Kumamoto</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Paris" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">7-Day Paris Discovery</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Paris</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Versailles</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Bali" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1542444459-db68ac78b6e9?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">8-Day Bali Retreat</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Ubud</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Seminyak</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Canggu</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="NZ" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1526481280691-3d3796d7c53a?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">12-Day New Zealand Loop</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Auckland</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Queenstown</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Rotorua</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Alaska" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1529921879218-f712c2e4aed2?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">9-Day Alaska Expedition</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Anchorage</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Denali</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Seward</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Tuscany" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">6-Day Tuscany Escape</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Florence</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Siena</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Pisa</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Patagonia" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">11-Day Patagonia Trek</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">El Calafate</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Torres del Paine</span>
</div>
</div>
<div className="min-w-[13rem] snap-start flex-shrink-0">
<img alt="Iceland" className="w-full h-48 rounded-xl object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=60" />
<h3 className="mt-3 text-sm font-medium">7-Day Iceland Ring</h3>
<div className="mt-2 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Reykjavík</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Akureyri</span>
<span className="px-2 py-0.5 text-xs bg-neutral-200 rounded">Vík</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative isolate bg-amber-500 text-neutral-50 py-20">
<img alt="Sunset" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1400&q=60" />
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Let’s Build Your Next Trip.</h2>
<p className="mt-4 text-lg text-amber-100">It takes less than 2 minutes to get started.</p>
<button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neutral-50 px-6 py-3 text-amber-600 font-medium shadow-lg ring-1 ring-neutral-50/40 transition hover:scale-105 hover:shadow-white/60">
<svg className="lucide lucide-plane w-5 h-5" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg> Start Planning
      </button>
</div>
</section>

<footer className="bg-white text-neutral-700 border-t border-neutral-100">
<div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 font-medium">
<svg className="lucide lucide-globe w-5 h-5 text-amber-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Protrip.AI
      </div>
<nav className="flex flex-wrap gap-6 text-sm">
<a className="hover:text-amber-600" href="#">My Bookings</a>
<a className="hover:text-amber-600" href="#">Explore</a>
<a className="hover:text-amber-600" href="#">FAQ</a>
<a className="hover:text-amber-600" href="#">Contact Us</a>
<a className="hover:text-amber-600" href="#ctaTop">Start Planning</a>
<a className="hover:text-amber-600 font-medium text-amber-600" href="#">Become a member</a>
</nav>
<p className="text-xs">© <span id="year">2025</span> Protrip.AI. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
