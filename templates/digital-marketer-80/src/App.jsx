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



    document.getElementById('year').textContent = new Date().getFullYear();

    // --- 3D Experience Carousel ---
    const carousel = document.getElementById('expCarousel');
    const slides = Array.from(carousel.querySelectorAll('[data-index]'));
    let currentIndex = 0;

    function renderCarousel() {
      const total = slides.length;
      const radius = 260;
      const centerScale = 1.1;

      slides.forEach((slide, i) => {
        const offset = ((i - currentIndex + total) % total);
        const angleStep = 360 / total;
        const angle = (offset * angleStep) - 60; // tilt like the reference
        const rad = angle * Math.PI / 180;

        const x = Math.sin(rad) * radius;
        const z = Math.cos(rad) * radius;

        const scale = z > 0 ? centerScale : 0.78;
        const opacity = z > 0 ? 1 : 0.55;
        const blur = z > 0 ? '0' : '1.5px';

        slide.style.transform =
          `translate3d(${x}px, 0, ${z}px) rotateY(${angle}deg) scale(${scale})`;
        slide.style.opacity = opacity;
        slide.style.filter = `blur(${blur})`;
        slide.style.zIndex = Math.round(z);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      renderCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      renderCarousel();
    }

    ['expNext', 'expNextMobile'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', nextSlide);
    });
    ['expPrev', 'expPrevMobile'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', prevSlide);
    });

    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        currentIndex = index;
        renderCarousel();
      });
    });

    let autoRotate = setInterval(nextSlide, 5000);
    carousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
    carousel.addEventListener('mouseleave', () => {
      autoRotate = setInterval(nextSlide, 5000);
    });

    renderCarousel();

    // --- Simple 3D Earth Renderer (canvas, no external libs) ---
    const canvas = document.getElementById('earthCanvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: false });

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height || rect.width);
      canvas.width = size * window.devicePixelRatio;
      canvas.height = size * window.devicePixelRatio;
      drawEarth();
    }

    let rotation = 0;
    let hovered = false;
    const markers = [
      { lat: 48.8566, lon: 2.3522, color: '#38bdf8' },   // Paris
      { lat: 37.7749, lon: -122.4194, color: '#38bdf8' },// SF
      { lat: 35.6762, lon: 139.6503, color: '#38bdf8' }, // Tokyo
      { lat: 41.3851, lon: 2.1734, color: '#38bdf8' }    // Barcelona
    ];

    function project(lat, lon, r) {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + rotation) * Math.PI / 180;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      return { x, y, z };
    }

    function drawEarth() {
      const { width, height } = canvas;
      const r = Math.min(width, height) * 0.43;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Sphere base
      const gradient = ctx.createRadialGradient(
        cx - r * 0.3, cy - r * 0.3, r * 0.2,
        cx, cy, r
      );
      gradient.addColorStop(0, '#0ea5e9');
      gradient.addColorStop(0.5, '#0369a1');
      gradient.addColorStop(1, '#020617');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      // Simple longitude lines for depth
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.55)';
      ctx.lineWidth = Math.max(1, r * 0.01);
      for (let i = -60; i <= 60; i += 30) {
        ctx.beginPath();
        for (let a = 0; a <= 180; a += 4) {
          const phi = (90 - i) * Math.PI / 180;
          const theta = (a - 90 + rotation) * Math.PI / 180;
          const x = cx + r * Math.sin(phi) * Math.cos(theta);
          const y = cy + r * Math.cos(phi);
          if (a === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Markers
      markers.forEach(m => {
        const p = project(m.lat, m.lon, r * 0.95);
        if (p.z < 0) return; // back side
        const scale = 1 + p.z / (r * 1.5);
        const size = r * 0.045 * scale;

        const markerGradient = ctx.createRadialGradient(
          cx + p.x, cy + p.y, size * 0.15,
          cx + p.x, cy + p.y, size
        );
        markerGradient.addColorStop(0, m.color);
        markerGradient.addColorStop(1, 'rgba(56,189,248,0)');

        ctx.fillStyle = markerGradient;
        ctx.beginPath();
        ctx.arc(cx + p.x, cy + p.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.arc(cx + p.x, cy + p.y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function animateEarth() {
      if (!hovered) {
        rotation += 0.15;
      }
      drawEarth();
      requestAnimationFrame(animateEarth);
    }

    canvas.addEventListener('mouseenter', () => { hovered = true; });
    canvas.addEventListener('mouseleave', () => { hovered = false; });

    document.getElementById('travelList').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lat][data-lon]');
      if (!btn) return;
      const lat = parseFloat(btn.dataset.lat);
      const lon = parseFloat(btn.dataset.lon);
      // Smoothly rotate so that longitude is centered
      rotation = -lon;
      drawEarth();
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateEarth();
  
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
      
<div className="min-h-screen flex flex-col">

<div className="pointer-events-none absolute inset-x-0 top-0 h-40 sm:h-52 bg-gradient-to-b from-violet-500/20 via-fuchsia-500/10 to-transparent blur-3xl opacity-80"></div>

<header className="relative z-10 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 h-8 w-8">
<span className="text-sm font-semibold tracking-tight text-slate-50">DM</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-slate-100">
            Digital Marketer · AI
          </span>
</div>

<div className="flex items-center gap-3 sm:gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#experience">
            Expérience
          </a>
<a className="hidden sm:inline-flex text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#travel">
            Voyages
          </a>
<a className="hidden sm:inline-flex text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#work">
            Case Studies
          </a>
<a className="hidden sm:inline-flex text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#services">
            Services
          </a>
<a className="inline-flex items-center gap-2 rounded-full border border-violet-400/60 bg-gradient-to-r from-violet-500/90 via-fuchsia-500/90 to-sky-500/90 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-violet-500/40 hover:shadow-violet-500/60 transition-transform transform hover:-translate-y-0.5" href="#contact">
<span>Book a strategy call</span>
</a>
</div>
</div>
</header>

<main className="flex-1 z-10 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-24">
<div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">

<section className="sm:space-y-8 space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Disponible pour missions fractionnal CMO &amp; conseil IA</span>
</div>
<div className="space-y-4 sm:space-y-5">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
                Marketer digital qui utilise l’IA pour transformer les données en croissance prévisible.
              </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                Je conçois des systèmes d’acquisition qui combinent stratégie humaine et automatisation IA : plus de leads qualifiés, de meilleurs taux de conversion, et une vision claire de ce qui génère vraiment du revenu.
              </p>
</div>

<div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">
                  Performance
                </p>
<p className="text-2xl font-semibold tracking-tight text-slate-50">
                  +38%
                </p>
<p className="text-sm text-slate-400 mt-1">
                  Hausse moyenne du taux de conversion sur les campagnes.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">
                  Efficacité
                </p>
<p className="text-2xl font-semibold tracking-tight text-slate-50">
                  2.3×
                </p>
<p className="text-sm text-slate-400 mt-1">
                  Amélioration du ROAS via l’optimisation pilotée par l’IA.
                </p>
</div>
<div className="bg-slate-900/70 border-slate-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">
                  Automatisation
                </p>
<p className="text-2xl font-semibold tracking-tight text-slate-50">
                  40+
                </p>
<p className="text-sm text-slate-400 mt-1">
                  Workflows automatisés entre ads, CRM &amp; reporting.
                </p>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-slate-50 text-slate-950 border border-slate-200 px-4 sm:px-5 py-2.5 text-sm font-semibold tracking-tight shadow-md hover:bg-white transition-colors" href="#contact">
                Parlons de ton funnel
              </a>
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors">
<span className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-900/80 h-7 w-7">

<svg className="h-3.5 w-3.5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="httpwww.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</span>
<span>Voir les dernières campagnes</span>
</button>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/80 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Spécialisé dans
                  </p>
<p className="text-sm sm:text-base text-slate-200">
                    Funnels assistés par IA, performance marketing &amp; parcours lifecycle.
                  </p>
</div>
<div className="hidden sm:flex items-center justify-center rounded-full border border-violet-400/70 bg-violet-500/10 h-9 w-9">

<svg className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3a3 3 0 0 0-6 0v12"></path>
<path d="M7 3a3 3 0 0 0-2 2.82V14"></path>
<path d="M13 3a3 3 0 0 1 3 3v10"></path>
<path d="M19 11c0-1.1-.9-2-2-2h-1"></path>
<path d="M5 12H4a2 2 0 0 0 0 4h1"></path>
<path d="M9 18h1a2 2 0 0 1 0 4H9"></path>
<path d="M19 15h1a2 2 0 0 1 0 4h-1"></path>
</svg>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200">Paid Social &amp; Search</span>
<span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200">Créatifs pilotés par IA</span>
<span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200">Lead scoring &amp; routing</span>
<span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200">Email lifecycle &amp; CRM</span>
</div>
</div>
</section>

<section className="space-y-4 sm:space-y-5">

<div className="rounded-3xl border border-slate-800 bg-slate-950/90 shadow-xl shadow-black/60 p-5 sm:p-6 space-y-5">
<div className="flex items-center gap-4">
<div className="relative">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-sky-500 flex items-center justify-center text-lg font-semibold tracking-tight text-slate-950">
                    DM
                  </div>
<span className="absolute -right-0.5 -bottom-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 ring-2 ring-slate-950">

<svg className="h-2.5 w-2.5 text-slate-950" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</span>
</div>
<div className="">
<p className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                    Ton Nom
                  </p>
<p className="text-sm text-slate-300">
                    Digital Marketer &amp; AI Growth Strategist
                  </p>
<p className="text-xs text-slate-400 mt-1">
                    Basé à [Ville] · Collaboration avec des équipes partout dans le monde
                  </p>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-xs text-slate-400 mb-0.5">Expérience</p>
<p className="text-sm font-medium text-slate-100">X+ années</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-xs text-slate-400 mb-0.5">Mission type</p>
<p className="text-sm font-medium text-slate-100">3–6 mois</p>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-3">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-slate-300">
                    L’IA dans ta stack marketing
                  </p>
<div className="inline-flex items-center gap-1 text-[0.65rem] text-slate-400">

<svg className="h-3 w-3 text-violet-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v4"></path>
<path d="M10 5h4"></path>
<path d="M17 11v4"></path>
<path d="M15 13h4"></path>
<path d="M7 11v4"></path>
<path d="M5 13h4"></path>
<path d="M12 17v4"></path>
<path d="M10 19h4"></path>
</svg>
<span>AI-augmented</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between gap-2">
<p className="text-xs text-slate-300">
                      Tests créatifs &amp; messaging
                    </p>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-400/60 px-2 py-0.5 text-[0.65rem] text-emerald-200">
                      Automatisé
                    </span>
</div>
<div className="flex items-center justify-between gap-2">
<p className="text-xs text-slate-300">
                      Qualification &amp; routage des leads
                    </p>
<span className="inline-flex items-center rounded-full bg-violet-500/10 border border-violet-400/60 px-2 py-0.5 text-[0.65rem] text-violet-200">
                      Scoring IA
                    </span>
</div>
<div className="flex items-center justify-between gap-2">
<p className="text-xs text-slate-300">
                      Reporting &amp; génération d’insights
                    </p>
<span className="inline-flex items-center rounded-full bg-sky-500/10 border border-sky-400/60 px-2 py-0.5 text-[0.65rem] text-sky-200">
                      Langage naturel
                    </span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<a className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 hover:border-slate-600/80 transition-colors" href="mailto:you@domain.com">
<div className="flex items-center gap-2.5">

<svg className="h-3.5 w-3.5 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<div>
<p className="text-xs text-slate-400">Email</p>
<p className="text-sm text-slate-100">you@domain.com</p>
</div>
</div>
<span className="text-[0.65rem] text-slate-500">Dis bonjour</span>
</a>
<a className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 hover:border-slate-600/80 transition-colors" href="https://www.linkedin.com" target="_blank">
<div className="flex items-center gap-2.5">

<svg className="h-3.5 w-3.5 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
<div>
<p className="text-xs text-slate-400">LinkedIn</p>
<p className="text-sm text-slate-100">@ton-handle</p>
</div>
</div>
<span className="text-[0.65rem] text-slate-500">Connecte-toi</span>
</a>
</div>
</div>
</section>
</div>

<section className="mt-12 sm:mt-16 space-y-5 sm:space-y-6" id="experience">
<div className="flex items-end justify-between gap-4">
<div className="">
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Expérience
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Mon parcours en un carrousel 3D
              </h2>
<p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-xl">
                Fais défiler horizontalement ou utilise les flèches pour parcourir les différentes étapes de mon expérience.
              </p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 h-8 w-8 hover:border-slate-500 transition-colors" id="expPrev">

<svg className="h-3.5 w-3.5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 h-8 w-8 hover:border-slate-500 transition-colors" id="expNext">

<svg className="h-3.5 w-3.5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>
</div>
<div className="relative mt-3 sm:mt-4">
<div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-sky-500/15 blur-3xl opacity-70"></div>
<div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/90 px-4 sm:px-6 py-6 sm:py-8 overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center gap-6">

<div className="flex-1">
<div className="relative h-48 sm:h-56 lg:h-64 flex items-center justify-center">
<div className="relative h-full w-full flex items-center justify-center" id="expCarousel" style={{perspective: '1200px'}}>

<div className="absolute rounded-3xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-2xl shadow-violet-500/40 text-slate-50 flex flex-col justify-between p-4 sm:p-5 w-44 sm:w-52 lg:w-60 h-40 sm:h-48 lg:h-56 transform transition-transform duration-500 ease-out will-change-transform" data-index="0" style={{transform: 'translate3d(-225.167px, 0px, 130px) rotateY(-60deg) scale(1.1)', opacity: '1', filter: 'blur(0px)', zIndex: '130'}}>
<p className="text-xs font-medium uppercase tracking-wide text-slate-100/80">
                          2017 · Agence
                        </p>
<div className="space-y-1.5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight">
                            Junior Media Buyer
                          </h3>
<p className="text-sm text-slate-100/90">
                            Premiers comptes Google &amp; Meta, optimisation manuelle des campagnes pour des PME.
                          </p>
</div>
</div>
<div className="absolute rounded-3xl bg-gradient-to-tr from-emerald-500 to-sky-500 shadow-2xl shadow-emerald-500/40 text-slate-950 flex flex-col justify-between p-4 sm:p-5 w-44 sm:w-52 lg:w-60 h-40 sm:h-48 lg:h-56 transform transition-transform duration-500 ease-out will-change-transform" data-index="1" style={{transform: 'translate3d(130px, 0px, 225.167px) rotateY(30deg) scale(1.1)', opacity: '1', filter: 'blur(0px)', zIndex: '225'}}>
<p className="text-xs font-medium uppercase tracking-wide text-slate-900/80">
                          2019 · Start-up
                        </p>
<div className="space-y-1.5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight">
                            Growth Marketer
                          </h3>
<p className="text-sm text-slate-900/90">
                            Mise en place des funnels complets : acquisition, nurture email, sales automation.
                          </p>
</div>
</div>
<div className="absolute rounded-3xl bg-gradient-to-tr from-amber-500 to-rose-500 shadow-2xl shadow-amber-500/40 text-slate-950 flex flex-col justify-between p-4 sm:p-5 w-44 sm:w-52 lg:w-60 h-40 sm:h-48 lg:h-56 transform transition-transform duration-500 ease-out will-change-transform" data-index="2" style={{transform: 'translate3d(225.167px, 0px, -130px) rotateY(120deg) scale(0.78)', opacity: '0.55', filter: 'blur(1.5px)', zIndex: '-130'}}>
<p className="text-xs font-medium uppercase tracking-wide text-slate-900/80">
                          2021 · Scale-up SaaS
                        </p>
<div className="space-y-1.5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight">
                            Head of Performance
                          </h3>
<p className="text-sm text-slate-900/90">
                            Pilotage d’un budget media à 7 chiffres et d’une équipe paid / lifecycle.
                          </p>
</div>
</div>
<div className="absolute rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 shadow-2xl shadow-slate-900/60 text-slate-50 flex flex-col justify-between p-4 sm:p-5 w-44 sm:w-52 lg:w-60 h-40 sm:h-48 lg:h-56 transform transition-transform duration-500 ease-out will-change-transform" data-index="3" style={{transform: 'translate3d(-130px, 0px, -225.167px) rotateY(210deg) scale(0.78)', opacity: '0.55', filter: 'blur(1.5px)', zIndex: '-225'}}>
<p className="text-xs font-medium uppercase tracking-wide text-slate-200/80">
                          2023+ · Indépendant
                        </p>
<div className="space-y-1.5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight">
                            Consultant AI &amp; Growth
                          </h3>
<p className="text-sm text-slate-200/90">
                            Accompagnement de marques B2B / e-commerce pour intégrer l’IA dans leur marketing.
                          </p>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 sm:hidden">
<button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 h-8 w-8 hover:border-slate-500 transition-colors" id="expPrevMobile">

<svg className="h-3.5 w-3.5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 h-8 w-8 hover:border-slate-500 transition-colors" id="expNextMobile">

<svg className="h-3.5 w-3.5 text-slate-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</button>
</div>
<p className="text-xs text-slate-400">
                      Animation 3D inspirée de ton carrousel préféré · Entièrement éditable.
                    </p>
</div>
</div>

<div className="lg:w-64 xl:w-72 space-y-3">
<p className="text-sm font-semibold tracking-tight text-slate-100">
                    Comment lire ce carrousel
                  </p>
<p className="text-sm text-slate-300">
                    Chaque carte représente une étape clé de mon parcours. Le centre est mis en avant, les étapes passées et futures se projettent dans la profondeur, créant un effet 3D.
                  </p>
<p className="text-xs text-slate-400">
                    Tu peux remplacer les textes, les dates et les couleurs pour les adapter à ton propre profil.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 space-y-5 sm:space-y-6" id="travel">
<div className="flex items-end justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Voyages
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                La Terre en 3D pour montrer où je suis allé
              </h2>
<p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-xl">
                Survole ou clique sur les marqueurs pour voir quelques endroits où j’ai vécu, travaillé ou voyagé.
              </p>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] gap-6 sm:gap-8">

<div className="relative">
<div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-violet-500/15 to-emerald-400/10 blur-3xl opacity-70"></div>
<div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/90 p-4 sm:p-6">
<div className="flex items-center justify-between gap-3 mb-4">
<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center rounded-full bg-sky-500/15 border border-sky-500/50 h-7 w-7">

<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<p className="text-sm font-medium text-slate-100">
                      Carte 3D de mes voyages
                    </p>
</div>
<span className="text-xs text-slate-400">
                    Rotation automatique · survolez pour explorer
                  </span>
</div>
<div className="relative">
<canvas className="w-full aspect-square max-h-[26rem] rounded-full bg-slate-900" height="654" id="earthCanvas" width="654"></canvas>
<div className="pointer-events-none absolute inset-8 sm:inset-10 rounded-full bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
</div>
</div>
</div>

<div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-5 sm:p-6 space-y-4">
<p className="text-sm font-semibold tracking-tight text-slate-100">
                Quelques destinations marquantes
              </p>
<p className="text-sm text-slate-300">
                Liste modifiable des villes / pays que tu souhaites mettre en avant. Cliquer sur un élément recentre la Terre sur cette zone.
              </p>
<div className="space-y-2.5 text-sm text-slate-200" id="travelList">
<button className="w-full text-left rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 hover:border-sky-500/70 hover:bg-slate-900 transition-colors flex items-center justify-between gap-3" data-lat="48.8566" data-lon="2.3522">
<span>
<span className="block text-xs font-medium uppercase tracking-wide text-sky-300">Paris, France</span>
<span className="block text-xs text-slate-300">Études, premiers jobs et beaucoup de café.</span>
</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
</button>
<button className="w-full text-left rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 hover:border-sky-500/70 hover:bg-slate-900 transition-colors flex items-center justify-between gap-3" data-lat="37.7749" data-lon="-122.4194">
<span>
<span className="block text-xs font-medium uppercase tracking-wide text-sky-300">San Francisco, USA</span>
<span className="block text-xs text-slate-300">Immersion dans l’écosystème start-up &amp; IA.</span>
</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
</button>
<button className="w-full text-left rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 hover:border-sky-500/70 hover:bg-slate-900 transition-colors flex items-center justify-between gap-3" data-lat="35.6762" data-lon="139.6503">
<span>
<span className="block text-xs font-medium uppercase tracking-wide text-sky-300">Tokyo, Japon</span>
<span className="block text-xs text-slate-300">Remote work et inspiration produit.</span>
</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
</button>
<button className="w-full text-left rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 hover:border-sky-500/70 hover:bg-slate-900 transition-colors flex items-center justify-between gap-3" data-lat="41.3851" data-lon="2.1734">
<span>
<span className="block text-xs font-medium uppercase tracking-wide text-sky-300">Barcelone, Espagne</span>
<span className="block text-xs text-slate-300">Clients e‑commerce &amp; campagnes internationales.</span>
</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
</button>
</div>
<div className="pt-2 border-t border-slate-800">
<p className="text-xs text-slate-400">
                  Tu peux ajouter autant de lieux que tu veux : il suffit de dupliquer un bouton, d’ajuster la latitude / longitude et le texte.
                </p>
</div>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 space-y-5 sm:space-y-6" id="services">
<div className="flex items-end justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Services
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Ce que j’aide les équipes marketing à faire avec l’IA
              </h2>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-5">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2.5">
<div className="inline-flex items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/40 h-7 w-7">

<svg className="h-3.5 w-3.5 text-violet-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0-8-8"></path>
<path d="M12 12V4"></path>
<circle cx="12" cy="12" r="2"></circle>
<path d="M13.4 10.6 19 5"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                Acquisition &amp; funnels pilotés par IA
              </h3>
<p className="text-sm text-slate-300">
                Architecturer paid media, landing pages et flux de leads continuellement optimisés par des modèles entraînés sur tes données.
              </p>
<ul className="mt-1.5 space-y-1.5 text-xs text-slate-400">
<li>· Stratégie paid search &amp; paid social</li>
<li>· Funnels et offres façonnés par l’IA</li>
<li>· Fondations de tracking multi-touch</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2.5">
<div className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/40 h-7 w-7">

<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="16" x="4" y="11"></rect>
<circle cx="8" cy="15" r="1"></circle>
<circle cx="16" cy="15" r="1"></circle>
<path d="M12 7V4H8"></path>
<path d="M22 7H2"></path>
<path d="M12 7h4V4"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                Automatisation &amp; workflows IA
              </h3>
<p className="text-sm text-slate-300">
                Concevoir des automatisations qui suppriment les tâches répétitives tout en laissant la stratégie et la marque aux humains.
              </p>
<ul className="mt-1.5 space-y-1.5 text-xs text-slate-400">
<li>· Lead scoring &amp; routing</li>
<li>· Variations créatives &amp; copy à l’échelle</li>
<li>· Reporting &amp; alertes automatisés</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-2.5">
<div className="inline-flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/40 h-7 w-7">

<svg className="h-3.5 w-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 10-10-5-10 5 10 5 10-5z"></path>
<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
<path d="M4 15v5"></path>
<path d="M2 20h4"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                Formation &amp; acculturation IA
              </h3>
<p className="text-sm text-slate-300">
                Aider ton équipe à utiliser l’IA de façon responsable : bibliothèques de prompts, playbooks et dashboards lisibles par tous.
              </p>
<ul className="mt-1.5 space-y-1.5 text-xs text-slate-400">
<li>· Workshops &amp; playbooks équipe</li>
<li>· Systèmes de prompts alignés à ta voix</li>
<li>· Gouvernance &amp; garde-fous qualité</li>
</ul>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 space-y-5 sm:space-y-6" id="work">
<div className="flex items-end justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Selected work
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Quelques façons dont j’ai utilisé l’IA pour bouger les lignes
              </h2>
</div>
</div>
<div className="space-y-3 sm:space-y-4">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4 sm:gap-5">
<div className="flex-1 space-y-1.5">
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                  B2B SaaS · Demand gen
                </p>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Refonte du funnel avec lead scoring IA, cycle de vente réduit de 22 %
                </h3>
<p className="text-sm text-slate-300">
                  Mise en place d’une qualification &amp; routage des leads pilotés par IA, priorisation des comptes à forte intention et alignement du paid search sur les signaux sales.
                </p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<p className="text-xs text-slate-400">Pipeline influencé</p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    +48%
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4 sm:gap-5">
<div className="flex-1 space-y-1.5">
<p className="text-xs font-medium uppercase tracking-wide text-violet-300">
                  Ecommerce · Paid media
                </p>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Moteur de tests créatifs automatisé, ROAS multiplié par 2.1
                </h3>
<p className="text-sm text-slate-300">
                  Utilisation de l’IA pour générer et prioriser les variations créatives, rotation automatique des gagnants et synchronisation des learnings dans les frameworks de messaging.
                </p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<p className="text-xs text-slate-400">ROAS</p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    2.1×
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4 sm:gap-5">
<div className="flex-1 space-y-1.5">
<p className="text-xs font-medium uppercase tracking-wide text-sky-300">
                  B2B services · Lifecycle
                </p>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Nurture streams personnalisés par IA, +31 % de taux de réponse
                </h3>
<p className="text-sm text-slate-300">
                  Segmentation pilotée par IA, tests de sujets, et relances adaptées au comportement et au fit ICP.
                </p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<p className="text-xs text-slate-400">Taux de réponse</p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    +31%
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12 sm:mt-16 space-y-5 sm:space-y-6" id="contact">
<div className="flex items-end justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Contact
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Parle-moi de ce que tu veux faire grandir
              </h2>
<p className="text-sm sm:text-base text-slate-300 max-w-xl mt-1.5">
                Partage quelques infos sur tes objectifs, ta stack actuelle et comment tu imagines l’IA dedans. Je te réponds avec un loom court ou quelques idées concrètes.
              </p>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-6 sm:gap-8">

<div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 sm:p-6 space-y-4 sm:space-y-5">
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">
                    Nom
                  </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 px-3 py-2" placeholder="Ton nom" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">
                    Email pro
                  </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 px-3 py-2" placeholder="toi@entreprise.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">
                  Entreprise &amp; rôle
                </label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 px-3 py-2" placeholder="Entreprise · Ton rôle" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">
                  Ce que tu veux accomplir
                </label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-950/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 px-3 py-2" placeholder="Ex : +30 % de démos, nettoyer le tracking, explorer l’IA pour le lead scoring &amp; le reporting…" rows="4"></textarea>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">
                  Comment tu utilises l’IA aujourd’hui ? (si c’est le cas)
                </label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-950/80 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 px-3 py-2" placeholder="Outils, expériences, questions — tout ce qui m’aide à comprendre ton contexte." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center rounded-full bg-violet-500 text-slate-950 font-semibold tracking-tight text-sm px-4 sm:px-5 py-2.5 shadow-lg shadow-violet-500/40 hover:bg-violet-400 transition-colors">
                  Envoyer le message
                </button>
<p className="text-xs text-slate-400">
                  Réponse sous 1–2 jours ouvrés. Pas de spam, pas de newsletter — juste un retour personnalisé.
                </p>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 sm:p-6 space-y-4">
<p className="text-sm font-semibold tracking-tight text-slate-100">
                Bon fit si…
              </p>
<ul className="space-y-2.5 text-sm text-slate-300">
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Tu as déjà du product–market fit et tu veux scaler ce qui fonctionne.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Tu privilégies la qualité des données et une attribution claire, pas les vanity metrics.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Tu veux que l’IA amplifie une stratégie solide — pas qu’elle la remplace.</span>
</li>
</ul>
<div className="border-t border-slate-800 pt-3 space-y-2">
<p className="text-xs text-slate-400">
                  Aussi disponible pour :
                </p>
<ul className="space-y-1.5 text-xs text-slate-300">
<li>· Fractional CMO (leadership temps partiel)</li>
<li>· Advisory sur les expériences marketing IA</li>
<li>· Workshops pour équipes marketing internes</li>
</ul>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="relative z-10 border-t border-slate-900 bg-slate-950/90">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-slate-500">
          © <span id="year">2025</span> Ton Nom · Marketing digital &amp; IA
        </p>
<div className="flex items-center gap-3 text-xs text-slate-500">
<a className="hover:text-slate-200 transition-colors" href="#top">Retour en haut</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
