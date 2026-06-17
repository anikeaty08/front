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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      (function () {
        const section = document.querySelector('.quoteRevealSection');
        const target = section ? section.querySelector('.quoteReveal') : null;
        const words = section ? section.querySelectorAll('.quote-word') : [];
        if (!section || !target || words.length === 0) return;

        words.forEach(word => { word.style.color = 'rgb(115 115 115)'; });
        function updateWordReveal() {
          const rect = target.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;
          const viewportCenter = vh / 2;
          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
          const maxDistance = vh / 2;
          const centerRatio = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
          const totalWords = words.length;
          const wordsToReveal = Math.floor(centerRatio * totalWords);
          words.forEach((word, index) => {
            word.style.color = index < wordsToReveal ? 'rgb(255 255 255)' : 'rgb(115 115 115)';
          });
        }
        if (typeof IntersectionObserver !== 'undefined') {
          const io = new IntersectionObserver(updateWordReveal, { threshold: Array.from({ length: 101 }, (_, i) => i / 100) });
          io.observe(target);
        }
        window.addEventListener('scroll', updateWordReveal, { passive: true });
        window.addEventListener('resize', updateWordReveal);
        updateWordReveal();
      })();
    


    // Replace lucide placeholders with SVGs
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    });

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Keyboard shortcut: focus search on "/"
    window.addEventListener('keydown', (e) => {
      // Skip when typing in inputs or using modifiers
      if (e.defaultPrevented) return;
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === '/') {
        e.preventDefault();
        const el = document.querySelector('input[placeholder^="Search games"]');
        if (el) el.focus();
      }
    }, { passive: false });

    // Smooth scroll for in-page anchors (respects reduced motion)
    (function() {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href') || '';
          const target = id.length > 1 ? document.querySelector(id) : null;
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        });
      });
    })();

    // Simple wishlist toggle for heart buttons
    (function() {
      document.querySelectorAll('button svg[data-lucide="heart"]').forEach(svg => {
        const btn = svg.closest('button');
        if (!btn) return;
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', () => {
          const pressed = btn.getAttribute('aria-pressed') === 'true';
          btn.setAttribute('aria-pressed', String(!pressed));
          btn.classList.toggle('ring-rose-400/40', !pressed);
          svg.classList.toggle('text-rose-400', !pressed);
        });
      });
    })();

    // Trend chart init
    (function() {
      const ctx = document.getElementById('trendChart');
      if (!ctx || typeof Chart === 'undefined') return;

      const chartCtx = ctx.getContext('2d');
      const gradient = chartCtx.createLinearGradient(0, 0, 0, 160);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');  // emerald-500
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');

      new Chart(chartCtx, {
        type: 'line',
        data: {
          labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10'],
          datasets: [{
            label: 'Units',
            data: [18, 22, 21, 26, 24, 28, 30, 33, 31, 36],
            fill: true,
            backgroundColor: gradient,
            borderColor: 'rgb(16, 185, 129)',
            borderWidth: 2,
            tension: 0.35,
            pointRadius: 0,
            pointHoverRadius: 3,
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index', backgroundColor: 'rgba(0,0,0,0.8)', padding: 8, titleColor: '#fff', bodyColor: '#e5e7eb', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1 } },
          scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } }
          }
        }
      });
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
      

<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>
<div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px]">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="4gq2Yrv2p0bIa0hdLPQx"></div>

</div>

<header className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-6">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center h-[40px] w-[100px] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb3d7a9c-a966-419c-927b-d8a323b690d6_320w.jpg)] bg-cover rounded mix-blend-screen" href="#"></a>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-medium" href="#new">New</a>
<a className="hover:text-white transition-colors font-medium" href="#charts">Top Charts</a>
<a className="hover:text-white transition-colors font-medium" href="#platforms">Platforms</a>
<a className="hover:text-white transition-colors font-medium" href="#deals">Deals</a>
<a className="hover:text-white transition-colors font-medium" href="#membership">Membership</a>
</nav>
<div className="flex gap-2 items-center">

<div className="hidden lg:flex items-center w-[320px] rounded-full ring-1 ring-white/10 bg-white/5 px-3 h-10 backdrop-blur">
<svg className="lucide lucide-search w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder:text-neutral-500 px-2" placeholder="Search games, franchises, studios…"/>
</div>

<button aria-label="Cart" className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/15">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>

<a className="hidden md:inline-flex items-center justify-center hover:bg-white/15 h-10 text-sm font-medium text-white bg-white/10 border-white/10 border rounded-full pr-4 pl-4" href="#signin">
          Sign in
        </a>
</div>
</div>
</header>

<section className="sm:p-8 w-full relative max-w-7xl bg-neutral-900/60 border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between lg:col-span-5">
<div className="">
<span className="text-sm font-normal text-neutral-400">Highlights</span>
<h2 className="text-[40px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tight max-w-xs mt-2">
          Curated collections that hit different.
        </h2>

<div className="h-px bg-white/10 mt-6"></div>

<div className="mt-6">
<p className="text-sm font-medium text-white tracking-tight">About &amp; Features</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Secure checkout
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3">
<svg className="lucide lucide-zap w-[14px] h-[14px]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Instant delivery
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Exclusive bundles
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3">
<svg className="lucide lucide-cloud w-3.5 h-3.5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              Cloud saves
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3">
<svg className="lucide lucide-gamepad-2 w-[14px] h-[14px]" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
              Controller support
            </span>
</div>
</div>


<div className="mt-6 relative">
</div>

</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Built for players</p>
<p className="max-w-sm text-sm text-neutral-300 mt-1">
            Fast checkout, wishlist across platforms, library sync, and flexible refunds where available.
          </p>
<a className="inline-flex items-center justify-center gap-2 h-10 hover:bg-emerald-600/90 transition text-sm font-normal text-white bg-emerald-600 rounded-full mt-4 px-4 max-w-sm" href="#charts">
            Explore top charts
            <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a4acf78-895f-407d-bc33-8f52228457a2_800w.jpg)]" style={{height: '220px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-badge-check h-3.5 w-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">AAA Spotlight</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a2794f00-8b0a-482f-99c5-8bb7858d7262_800w.jpg)]" style={{height: '180px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-zap w-[14px] h-[14px]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Indie Darlings</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/570174c2-e28e-4cf6-8306-4e537fdf655b_800w.jpg)]" style={{height: '220px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-gamepad-2 w-[14px] h-[14px]" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Couch Co‑op</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6bb21d7-3ce2-44b4-abbf-2b0d092cd7fc_800w.jpg)]" style={{height: '160px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-trophy h-3.5 w-3.5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Esports Ready</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42eb438f-6f99-48c5-acca-142628bae996_800w.jpg)]" style={{height: '240px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-star h-3.5 w-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Premium RPG</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a27fc248-8f92-46c8-8485-ca064c4a4da4_800w.jpg)]" style={{height: '220px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-flag h-3.5 w-3.5" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Racing Elite</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad5b7852-df28-4652-927c-e91063201d7b_800w.jpg)]" style={{height: '180px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-compass h-3.5 w-3.5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Adventure Quest</p>
</div>
</article>

<article className="relative overflow-hidden bg-center break-inside-avoid bg-cover border-white/10 rounded-2xl mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a8b87491-25ec-4c91-8d04-24e50f585f86_800w.jpg)]" style={{height: '220px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-target h-3.5 w-3.5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Neon Shooter</p>
</div>
</article><article className="relative overflow-hidden bg-center break-inside-avoid bg-cover border-white/10 rounded-2xl mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60408e62-4500-47f1-88e9-961f9f37d0fe_800w.jpg)]" style={{height: '220px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-scan-qr-code lucide-target w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="scan-qr-code" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 12v4a1 1 0 0 1-1 1h-4"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M17 8V7"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M7 17h.01"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect height="5" rx="1" width="5" x="7" y="7"></rect></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-base font-medium text-white tracking-tight">Pixel</p>
</div>
</article>


<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8b0b18d8-b18c-4860-8aff-de03a2c07ce7_800w.jpg)]" style={{height: '240px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Defense Force</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4b86f73f-98ba-4aaa-bdbb-8917c4ef30f3_800w.jpg)]" style={{height: '160px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-music h-3.5 w-3.5" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Rhythm Games</p>
</div>
</article>

<article className="relative overflow-hidden bg-center bg-cover border-white/10 rounded-2xl break-inside-avoid mb-3 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/01385585-23e2-4469-9fa5-49dab03e3c72_800w.jpg)]" style={{height: '220px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="lucide lucide-puzzle h-3.5 w-3.5" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Puzzle Masters</p>
</div>
</article>
</div>
</div>
</div>
</section>


<div className="mt-48 pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">Trusted by players and creators worldwide</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 items-center justify-items-center">
<a className="inline-flex items-center justify-center h-[100px] w-[100px] bg-center opacity-50 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0ec247cc-2f95-4c34-a0cc-0bfce32c6768_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[100px] bg-center opacity-50 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6ff4c3c4-2540-4a76-8241-d36cd3639ace_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[100px] bg-center opacity-50 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/388374df-e3b1-47b3-b236-fd7380682c24_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[100px] bg-center opacity-50 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/544929ef-61fc-40e2-97c1-914957e2dbb5_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[100px] w-[100px] bg-center opacity-50 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0793bb09-d3e0-4f5d-9053-80a8776e346d_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[100px] w-[100px] bg-center opacity-50 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/79e90543-530b-4de6-bb59-be4b64303a4f_320w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
</div><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 quoteRevealSection mt-8 mr-auto ml-auto pt-8 pr-4 pb-16 pl-4" style={{'--reveal': '100%'}}>
<div className="relative overflow-hidden sm:p-10 ring-white/10 ring-1 bg-neutral-900 rounded-3xl p-6">
<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          PLAYERS LOVE ARCADE
        </span>
</div>
<div className="relative sm:mt-10 quoteReveal mt-8">
<p className="max-w-5xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-center mr-auto ml-auto">
<span className="quote-word transition-colors duration-300" data-word-index="0" style={{color: 'rgb(115, 115, 115)'}}>"Instant</span>
<span className="quote-word transition-colors duration-300" data-word-index="1" style={{color: 'rgb(115, 115, 115)'}}>delivery,</span>
<span className="quote-word transition-colors duration-300" data-word-index="2" style={{color: 'rgb(115, 115, 115)'}}>great</span>
<span className="quote-word transition-colors duration-300" data-word-index="3" style={{color: 'rgb(115, 115, 115)'}}>deals,</span>
<span className="quote-word transition-colors duration-300 font-instrument-serif italic" data-word-index="4" style={{color: 'rgb(115, 115, 115)'}}>zero</span>
<span className="quote-word transition-colors duration-300" data-word-index="5" style={{color: 'rgb(115, 115, 115)'}}>hassle.</span>
<span className="quote-word transition-colors duration-300" data-word-index="6" style={{color: 'rgb(115, 115, 115)'}}>Arcade</span>
<span className="quote-word transition-colors duration-300" data-word-index="7" style={{color: 'rgb(115, 115, 115)'}}>is</span>
<span className="quote-word transition-colors duration-300" data-word-index="8" style={{color: 'rgb(115, 115, 115)'}}>my</span>
<span className="quote-word transition-colors duration-300" data-word-index="9" style={{color: 'rgb(115, 115, 115)'}}>go‑to</span>
<span className="quote-word transition-colors duration-300" data-word-index="10" style={{color: 'rgb(115, 115, 115)'}}>for</span>
<span className="quote-word transition-colors duration-300" data-word-index="11" style={{color: 'rgb(115, 115, 115)'}}>finding</span>
<span className="quote-word transition-colors duration-300" data-word-index="12" style={{color: 'rgb(115, 115, 115)'}}>the</span>
<span className="quote-word transition-colors duration-300" data-word-index="13" style={{color: 'rgb(115, 115, 115)'}}>best</span>
<span className="quote-word transition-colors duration-300" data-word-index="14" style={{color: 'rgb(115, 115, 115)'}}>games</span>
<span className="quote-word transition-colors duration-300" data-word-index="15" style={{color: 'rgb(115, 115, 115)'}}>fast,</span>
<span className="quote-word transition-colors duration-300" data-word-index="16" style={{color: 'rgb(115, 115, 115)'}}>across</span>
<span className="quote-word transition-colors duration-300" data-word-index="17" style={{color: 'rgb(115, 115, 115)'}}>all</span>
<span className="quote-word transition-colors duration-300" data-word-index="18" style={{color: 'rgb(115, 115, 115)'}}>my</span>
<span className="quote-word transition-colors duration-300" data-word-index="19" style={{color: 'rgb(115, 115, 115)'}}>platforms.</span>
<span className="quote-word transition-colors duration-300" data-word-index="20" style={{color: 'rgb(115, 115, 115)'}}>Highly</span>
<span className="quote-word transition-colors duration-300" data-word-index="21" style={{color: 'rgb(115, 115, 115)'}}>recommend!"</span>
</p>
</div>
<div className="sm:mt-10 flex gap-3 mt-8 items-center justify-center">
<img alt="Player avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_320w.jpg"/>
<span className="text-sm sm:text-base text-neutral-300 font-medium">Pro Gamer &amp; Streamer</span>
</div>
</div>

</section>


<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-4 pr-4 pb-24 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
<div className="">
<p className="text-sm font-medium text-white/70">What’s hot</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter">Top charts</h2>
</div>
<div className="text-sm text-neutral-400">Updated hourly</div>
</div>
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900">
<ul className="divide-y divide-white/10" role="list">

<li className="grid grid-cols-12 items-center gap-4 p-4 sm:p-5">
<div className="col-span-1 text-neutral-400 text-sm font-medium">1</div>
<div className="col-span-7 sm:col-span-6 flex items-center gap-3">
<img alt="Cover" className="h-10 w-16 rounded object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b7dd6a4-aa4f-4d21-9f6d-51a88d3958d6_320w.jpg"/>
<div className="">
<p className="text-sm font-medium text-white">Neon Frontier</p>
<p className="text-xs text-neutral-400 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-0.5">PC</span>
                Shooter • 4.6
              </p>
</div>
</div>
<div className="col-span-2 hidden sm:flex items-center gap-1 text-emerald-400 text-xs justify-end sm:justify-start">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +3
          </div>
<div className="col-span-2 sm:col-span-2 text-right">
<span className="text-sm text-white">$54.99</span>
</div>
<div className="col-span-2 sm:col-span-1">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white h-9 px-3 text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</li>
<li className="grid grid-cols-12 items-center gap-4 p-4 sm:p-5">
<div className="col-span-1 text-neutral-400 text-sm font-medium">2</div>
<div className="col-span-7 sm:col-span-6 flex items-center gap-3">
<img alt="Cover" className="h-10 w-16 rounded object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7a9658c8-c93d-4fce-a1bb-0281d0bb4ae6_320w.jpg" style={{}}/>
<div className="">
<p className="text-sm font-medium text-white">Pocket Realms</p>
<p className="text-xs text-neutral-400 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-0.5">Switch</span>
                Adventure • 4.8
              </p>
</div>
</div>
<div className="col-span-2 hidden sm:flex items-center gap-1 text-emerald-400 text-xs justify-end sm:justify-start">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +1
          </div>
<div className="col-span-2 sm:col-span-2 text-right">
<span className="text-sm text-white">$39.99</span>
</div>
<div className="col-span-2 sm:col-span-1">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white h-9 px-3 text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</li>
<li className="grid grid-cols-12 items-center gap-4 p-4 sm:p-5">
<div className="col-span-1 text-neutral-400 text-sm font-medium">3</div>
<div className="col-span-7 sm:col-span-6 flex items-center gap-3">
<img alt="Cover" className="h-10 w-16 rounded object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee03af1d-a394-4c5d-938c-ad95619974f6_320w.jpg"/>
<div className="">
<p className="text-sm font-medium text-white">Apex Circuit</p>
<p className="text-xs text-neutral-400 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-0.5">Xbox</span>
                Racing • 4.5
              </p>
</div>
</div>
<div className="col-span-2 hidden sm:flex items-center gap-1 text-rose-400 text-xs justify-end sm:justify-start">
<svg className="lucide lucide-trending-down w-4 h-4" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg> -1
          </div>
<div className="col-span-2 sm:col-span-2 text-right">
<span className="text-sm text-white">$49.99</span>
</div>
<div className="col-span-2 sm:col-span-1">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white h-9 px-3 text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</li>
<li className="grid grid-cols-12 items-center gap-4 p-4 sm:p-5">
<div className="col-span-1 text-neutral-400 text-sm font-medium">4</div>
<div className="col-span-7 sm:col-span-6 flex items-center gap-3">
<img alt="Cover" className="h-10 w-16 rounded object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a3b4d759-8110-42be-9634-dbbf5240e5a0_320w.jpg" style={{}}/>
<div>
<p className="text-sm font-medium text-white">Starfall Dominion</p>
<p className="text-xs text-neutral-400 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-2 py-0.5">PS5</span>
                Action RPG • 4.7
              </p>
</div>
</div>
<div className="col-span-2 hidden sm:flex items-center gap-1 text-emerald-400 text-xs justify-end sm:justify-start">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +2
          </div>
<div className="col-span-2 sm:col-span-2 text-right">
<span className="text-sm text-white">$59.99</span>
</div>
<div className="col-span-2 sm:col-span-1">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white h-9 px-3 text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</li>
</ul>
<div className="p-4 sm:p-5 bg-neutral-950/40 border-t border-white/10 flex items-center justify-between">
<p className="text-xs sm:text-sm text-neutral-400">Showing top 4 of 50</p>
<button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white h-10 px-4 ring-1 ring-white/10 text-sm">
          Load more
          <svg className="lucide lucide-chevrons-down w-4 h-4" data-lucide="chevrons-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg>
</button>
</div>
</div>
</section><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-16 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
<div className="">
<p className="text-sm font-medium text-white/70">Fresh drops</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white tracking-tighter">New &amp; trending</h2>
</div>

<div className="flex flex-wrap gap-2" id="platforms">
<button className="text-xs sm:text-sm px-3 h-9 rounded-full ring-1 ring-white/10 bg-white/10 hover:bg-white/15">All</button>
<button className="text-xs sm:text-sm px-3 h-9 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10">PS5</button>
<button className="text-xs sm:text-sm px-3 h-9 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10">Xbox</button>
<button className="text-xs sm:text-sm px-3 h-9 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10">Switch</button>
<button className="text-xs sm:text-sm px-3 h-9 rounded-full ring-1 ring-white/10 bg-white/5 hover:bg-white/10">PC</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/435d613f-d4c2-403a-8de6-2807eaadddcb_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">PS5</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Starfall Dominion</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.7 • Action RPG
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$59.99</span>
<span className="text-xs text-neutral-400 line-through">$69.99</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ebd5e508-fabc-4a63-a5ad-10c55d5ad3ee_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">Xbox</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Apex Circuit</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.5 • Racing
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$49.99</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fbb45abb-06f5-4646-99e7-81c8b516b146_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">Switch</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Pocket Realms</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.8 • Adventure
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$39.99</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83d55d06-6d08-402f-8c7c-c6afd355a94d_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">PC</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Neon Frontier</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.6 • Shooter
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$54.99</span>
<span className="text-xs text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-400/20 rounded-full px-2 py-0.5">-15%</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>

<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/47e20bee-20f6-4d40-aba9-8ff6012fed2d_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">PS5</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Chrono Spire</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.9 • Strategy
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$59.99</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b2a770b0-e041-43c2-ba09-68d2bba9c8d2_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">Xbox</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Iron League</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.4 • Sports
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$44.99</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e20ddf43-99f4-45a5-a8a6-244abc854475_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">Switch</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Sky Islands</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.7 • Adventure
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$49.99</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
<article className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">
<div className="relative aspect-[16/9] bg-neutral-800">
<img alt="Game cover" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d4dc2023-a46d-48ef-8d85-4fdb57f9eb8f_800w.jpg"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-white/90 bg-white/10 border-white/15 border rounded-full py-1 px-2 backdrop-blur">PC</div>
<button aria-pressed="false" className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 ring-1 ring-white/10">
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium tracking-tight">Dark Runes</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            4.3 • Soulslike
          </div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg tracking-tight text-white">$39.99</span>
<span className="text-xs text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-400/20 rounded-full px-2 py-0.5">Weekend deal</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-xs ring-1 ring-emerald-400/30">
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add
            </button>
</div>
</div>
</article>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mx-auto pt-8 px-4 pb-16" id="deals">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 p-6 sm:p-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400">(Deals)</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white mt-2 tracking-tighter">Daily offers. Limited time.</h2>
</div>
<p className="text-sm sm:text-base text-neutral-300 max-w-[42ch]">
          Save on bundles, franchises, and DLC add‑ons. New discounts drop every 24 hours.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-xl text-white tracking-tight">Action Bundle</h3>
<p className="text-sm text-neutral-400 mt-1">Includes 3 titles</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl text-white tracking-tight">$49</span>
<span className="text-sm text-neutral-400 line-through">$119</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Shooter + RPG + Indie
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bonus skins
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-x w-4 h-4 text-neutral-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Season pass
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm" href="#">Add bundle</a>
</div>

<div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-6 ring-1 ring-indigo-400/20">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight">Franchise Pack</h3>
<span className="inline-flex items-center gap-1 rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-2 py-1 text-[11px] text-indigo-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              Popular
            </span>
</div>
<p className="text-sm text-neutral-400 mt-1">Base game + DLC</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl text-white tracking-tight">$69</span>
<span className="text-sm text-neutral-400 line-through">$129</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4K assets
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Season pass
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Bonus currency
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-600 text-white h-11 ring-1 ring-indigo-400/30 text-sm" href="#">Add pack</a>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
<h3 className="text-xl text-white tracking-tight">Indie Gems</h3>
<p className="text-sm text-neutral-400 mt-1">Hidden treasures</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl text-white tracking-tight">$19</span>
<span className="text-sm text-neutral-400 line-through">$39</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hand‑picked
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Controller support
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cloud saves
            </li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm" href="#">Add collection</a>
</div>
</div>
</div>
</section>

<section className="relative z -10 max-w-7xl sm:px-6 lg:px-8 mx-auto pt-8 px-4 pb-16" id="membership">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-900">
<div className="absolute -right-20 -top-24 h-72 w-72 bg-gradient-to-tr from-violet-500/20 to-fuchsia-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

<div className="p-6 sm:p-10 lg:col-span-1">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            MEMBERSHIP
          </span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">Arcade Plus</h2>
<p className="mt-3 text-neutral-300 max-w-[42ch]">
            Get more from every session: member‑only discounts, free weekend trials, cloud saves, and extended refund windows.
          </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-percent w-4 h-4 text-emerald-400" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
              Extra 10% off featured titles
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-cloud w-4 h-4 text-sky-300" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              Unlimited cloud saves
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-clock-3 w-4 h-4 text-violet-300" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Early access trials
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-undo-2 w-4 h-4 text-rose-300" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg>
              Extended refunds where available
            </li>
</ul>
<a className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white h-11 px-5 ring-1 ring-white/10 text-sm" href="#join">
            Start free 7‑day trial
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 border-t border-white/10 lg:border-l lg:border-t-0">

<div className="p-6 sm:p-10 border-b md:border-b-0 md:border-r border-white/10">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight">Monthly</h3>
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300">
                Flexible
              </span>
</div>
<div className="mt-3 flex items-end gap-1">
<span className="text-4xl text-white tracking-tight">$8</span>
<span className="text-neutral-400 mb-1 text-sm">/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Member deals
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Trials &amp; betas
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cloud saves
              </li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white h-11 ring-1 ring-emerald-400/30 text-sm">
<svg className="lucide lucide-crown w-4 h-4" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
              Choose monthly
            </button>
</div>

<div className="p-6 sm:p-10">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight">Annual</h3>
<span className="inline-flex items-center gap-1 rounded-lg border border-amber-400/30 bg-amber-500/10 px-2 py-1 text-[11px] text-amber-200">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                Best value
              </span>
</div>
<div className="mt-3 flex items-end gap-2 &lt;span class=" text-4xl="" text-white="" tracking-tight"="">$79
              <span className="text-neutral-400 mb-1 text-sm">/yr</span>
<span className="text-xs text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-400/20 rounded-full px-2 py-0.5">Save 18%</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Monthly
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Family sharing
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support
              </li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 h-11 text-sm">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Choose annual
            </button>
</div>
</div>
</div>
</div>
</section>


<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-16 pl-4">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-6 sm:p-10">
<div className="absolute -left-16 -bottom-16 h-72 w-72 bg-gradient-to-tr from-emerald-400/15 to-cyan-300/10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
<div className="">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200">
<svg className="lucide lucide-bell w-3.5 h-3.5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
            Stay in the loop
          </span>
<h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tighter text-white">Get drops &amp; deals in your inbox</h3>
<p className="mt-2 text-neutral-300">No spam. Only the good stuff: new releases, exclusive bundles, and member perks.</p>
</div>
<form className="w-full flex flex-col sm:flex-row gap-3" onsubmit="event.preventDefault(); this.reset(); this.querySelector('button').innerText='Subscribed ✓'; setTimeout(()=&gt;this.querySelector('button').innerText='Subscribe', 2000);">
<label className="sr-only" htmlFor="email">Email address</label>
<input className="flex-1 h-12 rounded-full bg-white/5 ring-1 ring-white/10 px-4 text-sm placeholder:text-neutral-500 outline-none focus:ring-emerald-400/40 focus:bg-white/10" id="email" placeholder="you@player.gg" required="" type="email"/>
<button className="h-12 px-6 rounded-full bg-emerald-600 hover:bg-emerald-600/90 text-white text-sm ring-1 ring-emerald-400/30">Subscribe</button>
</form>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
<div className="col-span-2 sm:col-span-1">
<p className="text-white font-semibold tracking-tight">Arcade</p>
<p className="mt-2 text-neutral-400">Play more. Save more. Discover console hits across platforms.</p>
</div>
<div>
<p className="text-white font-medium">Store</p>
<ul className="mt-2 space-y-2 text-neutral-400">
<li><a className="hover:text-white" href="#new">New releases</a></li>
<li><a className="hover:text-white" href="#charts">Top charts</a></li>
<li><a className="hover:text-white" href="#deals">Deals</a></li>
<li><a className="hover:text-white" href="#membership">Membership</a></li>
</ul>
</div>
<div>
<p className="text-white font-medium">Support</p>
<ul className="mt-2 space-y-2 text-neutral-400">
<li><a className="hover:text-white" href="#">Help center</a></li>
<li><a className="hover:text-white" href="#">Refund policy</a></li>
<li><a className="hover:text-white" href="#">Security</a></li>
</ul>
</div>
<div>
<p className="text-white font-medium">Legal</p>
<ul className="mt-2 space-y-2 text-neutral-400">
<li><a className="hover:text-white" href="#">Terms</a></li>
<li><a className="hover:text-white" href="#">Privacy</a></li>
<li><a className="hover:text-white" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> Arcade, Inc. All rights reserved.</p>
<div className="flex items-center gap-3">
<a aria-label="Twitter/X" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 text-white" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="YouTube" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 text-white" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a aria-label="Discord" className="inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 text-white" href="#">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.6'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
