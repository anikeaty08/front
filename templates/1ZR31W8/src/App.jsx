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
      
        document.addEventListener('DOMContentLoaded', () => {
          // Initialize open states
          document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
            const open = item.hasAttribute('data-open');
            const btn = item.querySelector('[data-accordion="faq"]');
            const a = item.querySelector('[data-qa="a"]');
            const plus = item.querySelector('i[data-lucide="plus"]').closest('i,svg').parentElement;
            const minus = item.querySelector('i[data-lucide="minus"]').closest('i,svg').parentElement;
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            a.classList.toggle('hidden', !open);
            plus.classList.toggle('hidden', open);
            minus.classList.toggle('hidden', !open);
          });

          // Toggle behavior
          document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
            btn.addEventListener('click', () => {
              const item = btn.closest('[data-accordion-item]');
              const content = item.querySelector('[data-qa="a"]');
              const plus = btn.querySelector('i[data-lucide="plus"]').closest('i,svg').parentElement;
              const minus = btn.querySelector('i[data-lucide="minus"]').closest('i,svg').parentElement;
              const expanded = btn.getAttribute('aria-expanded') === 'true';
              btn.setAttribute('aria-expanded', String(!expanded));
              content.classList.toggle('hidden');
              plus.classList.toggle('hidden');
              minus.classList.toggle('hidden');
              if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
              }
            });
          });

          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      


      // Render icons with global stroke width 1.5
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileNav.classList.toggle('hidden', !open);
          menuBtn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white/90"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white/90"></i>';
          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      }
    
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
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Patient doing guided physical therapy exercises" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/85"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-activity h-4 w-4 text-white/90" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<span className="uppercase text-lg font-semibold tracking-tighter font-geist">MotionWorks PT</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/90 hover:bg-white/10 transition font-geist" href="#services">Services</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#conditions">Conditions</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#team">Team</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">Patient portal</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#contact">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book evaluation
              </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90 font-geist" href="#services">Services</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#conditions">Conditions</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#team">Team</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#faq">FAQ</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80 font-geist" href="#">Patient portal</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#contact">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Book evaluation
                </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10">
<div className="max-w-5xl sm:px-6 lg:px-8 sm:pt-24 lg:pt-28 lg:pb-40 text-center mr-auto ml-auto pt-16 pr-4 pb-24 pl-4" id="aura-emeujk5u9">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
<svg className="lucide lucide-heart h-4 w-4 text-white/80" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs font-medium text-white/80 font-geist">Personalized physical therapy</span>
</div>
<h1 className="sm:text-5xl lg:text-7xl text-4xl font-light text-white tracking-tight font-geist mt-6" id="aura-emeujk6d1">Move better, <span className="font-semibold">live stronger.</span></h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80 font-geist">
            One-on-one, evidence-based care to reduce pain, restore function, and help you get back to what you love—safely and confidently.
          </p>
<div className="flex gap-3 mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition font-geist" href="#contact">
<svg className="lucide lucide-calendar-plus h-4 w-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
              Book evaluation
            </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 ring-white/15 transition text-sm font-medium text-white bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur font-geist" href="#services">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              How we treat
            </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="uppercase tracking-wider font-geist">Insurance accepted</span>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-12 -top-20 pb-24" id="services">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-user-round h-4 w-4 text-white/90" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">1:1 expert care</p>
<p className="text-xs text-white/70 font-geist">Dedicated sessions with a licensed PT.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-flask-conical h-4 w-4 text-white/90" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Evidence‑based plans</p>
<p className="text-xs text-white/70 font-geist">Manual therapy + progressive exercise.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-activity h-4 w-4 text-white/90" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Pain relief + performance</p>
<p className="text-xs text-white/70 font-geist">From injury to stronger than before.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-wallet-cards h-4 w-4 text-white/90" data-lucide="wallet-cards" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Insurance + HSA</p>
<p className="text-xs text-white/70 font-geist">Out-of-network help, superbills, HSA/FSA.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-3xl mx-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 text-sm text-white/70">
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="font-normal font-geist">Your Rehab Path</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white tracking-tight font-geist font-light" style={{}}>The plan that fits you.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-geist">Personalized, progressive, and built around your goals.</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-clipboard-check h-5 w-5 text-white/90" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight font-geist">01. Assess</h3>
<p className="text-xs text-white/60 uppercase tracking-wider font-geist">Evaluation</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">We listen, test, and find the root cause. Clear diagnosis, clear plan.</p>
<div className="flex items-center gap-2 text-white/60">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-geist">45–60 minutes</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '25%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-heart-handshake h-5 w-5 text-white/90" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight font-geist">02. Treat</h3>
<p className="text-xs text-white/60 uppercase tracking-wider font-geist">Hands‑on care</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Manual therapy to calm pain and restore motion, paired with targeted exercise.</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-move h-3.5 w-3.5 text-white/70" data-lucide="move" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m15 19-3 3-3-3"></path><path d="m19 9 3 3-3 3"></path><path d="M2 12h20"></path><path d="m5 9-3 3 3 3"></path><path d="m9 5 3-3 3 3"></path></svg>
</div>
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-stretch-vertical h-3.5 w-3.5 text-white/70" data-lucide="stretch-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="6" x="4" y="2"></rect><rect height="20" rx="2" width="6" x="14" y="2"></rect></svg>
</div>
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<svg className="lucide lucide-pill h-3.5 w-3.5 text-white/70" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Relief + mobility</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '50%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-dumbbell h-5 w-5 text-white/90" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight font-geist">03. Train</h3>
<p className="text-xs text-white/60 uppercase tracking-wider font-geist">Strength + control</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Progressive loading and motor control to build resilience and confidence.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-green-400"></div>
<span className="text-xs font-geist">Progress you can feel</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-xs font-geist">Goal‑based milestones</span>
</div>
<div className="flex items-center gap-2 text-white/60">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-xs font-geist">Form checks + cues</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '75%'}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="lucide lucide-calendar-check-2 h-5 w-5 text-white/90" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight font-geist">04. Sustain</h3>
<p className="text-xs text-white/60 uppercase tracking-wider font-geist">Long‑term habits</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Home program, load management, and check‑ins to keep you moving.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-white/70" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs text-white/70 font-geist">Prevent setbacks</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '100%'}}></div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist" href="#contact">
<svg className="lucide lucide-phone-call h-4 w-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
          Schedule a call
        </a>
<p className="mt-2 text-xs text-white/60 font-geist">We’ll help you choose the right plan in under 60 seconds</p>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mr-auto mb-24 ml-auto pr-4 pl-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none text-white tracking-tight font-geist font-light" style={{}}>
                Questions.
              </h2>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">
                Everything you need to know about starting PT, insurance, what to expect, and how we help you reach your goals.
              </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur" href="#contact">
<span className="font-geist">Get in touch</span>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Do I need a referral to start physical therapy?</span>
<span className="shrink-0 flex items-center">
<svg className="lucide lucide-plus w-5 h-5 text-white/70 hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist" data-qa="a">
                    Many patients can start with direct access—no referral required. Some insurance plans do require one. If you’re unsure, we’ll help you check your benefits and outline your options before your first visit.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What conditions do you treat?</span>
<span className="shrink-0 flex items-center">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden font-geist" data-qa="a">
                    We help with back and neck pain, shoulder, hip, knee, ankle and foot injuries, post‑op rehab, sports performance, tendinopathy, running‑related pain, and more. Not sure? Send a quick note and we’ll advise next steps.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How long are sessions and how many will I need?</span>
<span className="shrink-0 flex items-center">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden font-geist" data-qa="a">
                    Evaluations are typically 45–60 minutes. Follow‑ups are 40–50 minutes. Frequency depends on your goals and findings—most patients see meaningful progress within 4–8 visits.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Do you take my insurance?</span>
<span className="shrink-0 flex items-center">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden font-geist" data-qa="a">
                    We accept HSA/FSA and provide superbills for out‑of‑network reimbursement. We’ll verify your benefits and share an estimate—transparent pricing with no surprises.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What should I wear and bring?</span>
<span className="shrink-0 flex items-center">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden font-geist" data-qa="a">
                    Athletic clothing you can move in, supportive shoes, imaging or doctor notes if you have them, and your ID/insurance card for the first visit.
                  </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How quickly will I feel better?</span>
<span className="shrink-0 flex items-center">
<svg className="lucide lucide-plus w-5 h-5 text-white/70" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-5 h-5 text-white/70 hidden" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden font-geist" data-qa="a">
                    Many feel relief after the first few sessions. We’ll track your progress and adjust your plan so improvements are steady and sustainable.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="w-full mr-auto mb-8 ml-auto" id="contact">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur">

<div className="relative z-10 md:p-12 lg:p-16 pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] text-neutral-500 uppercase tracking-wider font-geist">New patients</p>
<h3 className="mt-1 text-2xl sm:text-3xl tracking-tight text-neutral-900 font-geist font-light" style={{}}>
                        Request an appointment
                      </h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-calendar-plus h-4 w-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</div>
</div>
<form action="#" className="mt-6 space-y-4" method="POST">
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="pt-name">Full name<span className="text-neutral-400 font-geist"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="pt-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="pt-email">Email<span className="text-neutral-400 font-geist"> *</span></label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="pt-email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="pt-phone">Phone</label>
<div className="relative mt-1">
<svg className="lucide lucide-phone h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="pt-phone" name="phone" placeholder="(555) 123‑4567" type="tel"/>
</div>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="pt-msg">How can we help?</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="pt-msg" name="message" placeholder="Back pain, post-op shoulder, running injury, etc." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors font-geist" type="submit">
                      Submit request
                      <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500 font-geist">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white tracking-tight font-geist font-light" style={{}}>Let’s get you moving.</h2>
<p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4 font-geist">
                  Share your goals and schedule preference. We’ll confirm your benefits, set up your first visit, and outline a clear plan.
                </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-white font-semibold text-sm font-geist">Fast scheduling</p>
<p className="text-white/70 text-xs font-geist">Most requests confirmed within 24 hours.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-white font-semibold text-sm font-geist">Transparent billing</p>
<p className="text-white/70 text-xs font-geist">Clear pricing and superbills if needed.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-3">
<img alt="Lead therapist" className="h-12 w-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none uppercase tracking-wider font-geist">Lead Therapist</p>
<p className="text-neutral-900 font-semibold tracking-tight truncate font-geist">Jordan Lee, DPT</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors font-geist" href="mailto:hello@motionworkspt.com">
                      Email us
                      <svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="p-12 lg:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-activity h-4 w-4 text-white/90" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<span className="ml-2 uppercase text-lg font-semibold tracking-tighter text-white font-geist">MotionWorks PT</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8 font-geist">
              One-on-one physical therapy that blends hands-on care with progressive training—so you can move freely again.
            </p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="lucide lucide-twitter h-4 w-4 text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="lucide lucide-linkedin h-4 w-4 text-white" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="lucide lucide-instagram h-4 w-4 text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#services">Orthopedic Rehab</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#services">Sports Performance</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#services">Post‑Op Care</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#services">Running Analysis</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#faq">FAQ</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#contact">Insurance &amp; Pricing</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Patient Forms</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="#">Home Program App</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Contact</h4>
<ul className="space-y-4">
<li className="text-sm text-white/60 font-geist">123 Movement Ave, Suite 200Hometown, ST 00000</li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="tel:+15551234567">(555) 123‑4567</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-geist" href="mailto:hello@motionworkspt.com">hello@motionworkspt.com</a></li>
<li className="text-sm text-white/60 font-geist">Mon–Fri 7a–7p</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4 tracking-tight font-geist">Tips for healthy movement</h4>
<p className="text-sm text-white/60 mb-6 font-geist">Get injury‑prevention tips and clinic updates delivered to your inbox.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-blue-500/30 focus:outline-none transition-all duration-300 bg-white/5" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 bg-blue-500/15 font-geist">Subscribe</button>
</div>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span className="font-geist">© 2024 MotionWorks PT. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300 font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300 font-geist" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-white/70" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            HIPAA‑ready
          </span>
<span className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check-circle-2 h-3.5 w-3.5 text-green-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            1:1 Care
          </span>
</div>
</div>
</footer>



    </>
  );
}
