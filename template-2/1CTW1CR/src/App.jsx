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
      
      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const open = mobileMenu.classList.contains('hidden');
          mobileMenu.classList.toggle('hidden');
          menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
          const icon = menuBtn.querySelector('i[data-lucide]');
          if (icon) {
            icon.setAttribute('data-lucide', open ? 'x' : 'menu');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      }

      // Font size controls (accessibility)
      const root = document.documentElement;
      const getSize = () => parseFloat(localStorage.getItem('fontSize') || '15');
      const setSize = (px) => {
        const clamped = Math.max(14, Math.min(18, px));
        root.style.setProperty('--base-font', clamped + 'px');
        document.body.style.fontSize = clamped + 'px';
        localStorage.setItem('fontSize', String(clamped));
      };
      setSize(getSize());

      const inc = document.getElementById('font-inc');
      const dec = document.getElementById('font-dec');
      const reset = document.getElementById('font-reset');
      const small = document.getElementById('font-small');
      const def = document.getElementById('font-default');
      const large = document.getElementById('font-large');

      inc && inc.addEventListener('click', () => setSize(getSize() + 1));
      dec && dec.addEventListener('click', () => setSize(getSize() - 1));
      reset && reset.addEventListener('click', () => setSize(15));
      small && small.addEventListener('click', () => setSize(14));
      def && def.addEventListener('click', () => setSize(15));
      large && large.addEventListener('click', () => setSize(16));

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Chart.js: Chiffres clés
      const ctx = document.getElementById('statsChart');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Membres', 'Sympathisant·es', 'Bénévoles'],
            datasets: [{
              label: 'Personnes',
              data: [1000, 5500, 60],
              backgroundColor: ['#0066CC', '#2E7D32', '#FF6B35'],
              borderWidth: 0,
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: 'rgba(0,0,0,0.06)' },
                ticks: { color: '#757575' }
              },
              x: {
                grid: { display: false },
                ticks: { color: '#757575' }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'white',
                titleColor: '#111827',
                bodyColor: '#111827',
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1,
                padding: 10
              }
            }
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:ring-2 focus:ring-[#0066CC] focus:outline-none bg-white text-[#0066CC] px-3 py-2 rounded-md shadow" href="#contenu">Aller au contenu</a>

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-blue-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a aria-label="Accueil La Ville à Vélo" className="flex items-center gap-3 group" href="#">
<span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-blue-200 bg-white shadow-sm">
<span className="font-semibold text-blue-900 tracking-tight" style={{letterSpacing: `-0.02em`}}>LVV</span>
</span>
<span className="flex flex-col">
<span className="text-[15px] font-semibold text-blue-900 tracking-tight">La Ville à Vélo</span>
</span>
</a>

<nav aria-label="Navigation principale" className="hidden lg:flex gap-7 items-center">
<a className="text-[14px] font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded" href="#a-propos">À propos</a>
<a className="text-[14px] font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded" href="#nos-actions">Nos actions</a>
<a className="text-[14px] font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded" href="#s-impliquer">S’impliquer</a>
<a className="text-[14px] font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded" href="#actualites">Actualités</a>
<a className="text-[14px] font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded" href="#ressources">Ressources</a>
<a className="text-[14px] font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded" href="#contact">Contact</a>

<a className="inline-flex items-center gap-2 text-[14px] hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] transition font-semibold text-white tracking-tight bg-[#FF6B35] rounded-md pt-2.5 pr-3.5 pb-2.5 pl-3.5 shadow-sm" href="#don">
<svg className="lucide lucide-heart-handshake w-4 h-4" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
              Faire un don
            </a>
</nav>

<div className="hidden lg:flex items-center gap-3">

<div className="flex items-center gap-1 rounded-md border border-blue-200 bg-white p-1">
<button aria-label="Diminuer la taille du texte" className="inline-flex items-center justify-center w-8 h-8 rounded [font-variation-settings:'wght'_560] text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" id="font-dec">A-</button>
<button aria-label="Taille du texte par défaut" className="inline-flex items-center justify-center w-8 h-8 rounded text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" id="font-reset">A</button>
<button aria-label="Augmenter la taille du texte" className="inline-flex items-center justify-center w-8 h-8 rounded [font-variation-settings:'wght'_560] text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" id="font-inc">A+</button>
</div>

<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#0066CC] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] transition" href="#adhesion">
<svg className="lucide lucide-bike w-4 h-4" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
              Rejoindre le mouvement
            </a>
</div>

<div className="flex lg:hidden items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-semibold tracking-tight text-white bg-[#0066CC] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#adhesion">
<svg className="lucide lucide-bike w-4 h-4" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
<span className="sr-only sm:not-sr-only sm:inline">Rejoindre</span>
</a>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Ouvrir le menu" className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-blue-200 bg-white hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" id="menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>

<div aria-label="Menu mobile" className="lg:hidden hidden border-t border-blue-200 bg-white" id="mobile-menu" role="dialog">
<div className="px-4 sm:px-6 py-4 space-y-2">
<a className="block rounded-md px-3 py-2 text-[15px] text-blue-800 hover:bg-blue-50" href="#a-propos">À propos</a>
<a className="block rounded-md px-3 py-2 text-[15px] text-blue-800 hover:bg-blue-50" href="#nos-actions">Nos actions</a>
<a className="block rounded-md px-3 py-2 text-[15px] text-blue-800 hover:bg-blue-50" href="#s-impliquer">S’impliquer</a>
<a className="block rounded-md px-3 py-2 text-[15px] text-blue-800 hover:bg-blue-50" href="#actualites">Actualités</a>
<a className="block rounded-md px-3 py-2 text-[15px] text-blue-800 hover:bg-blue-50" href="#ressources">Ressources</a>
<a className="block rounded-md px-3 py-2 text-[15px] text-blue-800 hover:bg-blue-50" href="#contact">Contact</a>
<div className="pt-2 flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-semibold tracking-tight text-white bg-[#FF6B35] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#don">
<svg className="lucide lucide-heart-handshake w-4 h-4" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
              Faire un don
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-semibold tracking-tight text-white bg-[#0066CC] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#adhesion">
<svg className="lucide lucide-bike w-4 h-4" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
              Rejoindre
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="contenu">
<div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{backgroundImage: `url('data:image/svg+xml;utf8,<svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="40" height="40" fill="white"/><path d="M0 20 H40" stroke="%230066CC" stroke-width="2" stroke-opacity="0.6" stroke-linecap="square"/><circle cx="10" cy="20" r="1.5" fill="%230066CC" opacity="0.6"/><circle cx="30" cy="20" r="1.5" fill="%230066CC" opacity="0.6"/></pattern></defs><rect width="100%" height="100%" fill="url(%23p)"/></svg>')`, backgroundSize: `160px 160px`}}></div>
<div className="relative max-w-7xl sm:px-6 lg:px-8 lg:py-20 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="">
<h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-tight text-blue-900">
              La Ville à Vélo – Pour toutes et tous
            </h1>
<p className="text-[16px] text-blue-700 mt-5">
              Construisons ensemble une métropole lyonnaise plus inclusive, durable et humaine. La Ville à Vélo défend le droit pour toutes et tous de circuler à vélo, et agit sur le terrain pour créer des rues apaisées, un environnement sain, et des infrastructures accessibles à chacun·e.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 text-[14px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] transition font-semibold text-white tracking-tight bg-[#0066CC] rounded-md pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm" href="#adhesion">
<svg className="lucide lucide-bike w-4 h-4" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
                Rejoindre le mouvement
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#FF6B35] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] transition" href="#s-impliquer">
<svg className="lucide lucide-lightbulb w-4 h-4" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                Je découvre comment agir
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-semibold tracking-tight text-blue-800 bg-white border border-blue-200 hover:bg-blue-50 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] transition" href="#actualites">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                Je reste informé·e
              </a>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
<div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
<p className="text-[11px] text-blue-500">Membres</p>
<p className="text-xl font-semibold tracking-tight text-blue-900">1 000</p>
</div>
<div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
<p className="text-[11px] text-blue-500">Sympathisant·es</p>
<p className="text-xl font-semibold tracking-tight text-blue-900">5 500</p>
</div>
<div className="rounded-lg border border-blue-200 bg-white px-4 py-3">
<p className="text-[11px] text-blue-500">Bénévoles</p>
<p className="text-xl font-semibold tracking-tight text-blue-900">60</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl bg-white/60 border border-blue-200"></div>
<div className="grid grid-cols-6 grid-rows-6 gap-3">
<img alt="Cyclistes à Lyon sur une piste cyclable" className="col-span-3 row-span-4 h-64 w-full object-cover border-blue-200 border rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="Arbres et rues apaisées à Lyon" className="col-span-3 row-span-3 rounded-xl object-cover h-48 w-full shadow-sm border border-blue-200" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=60&fm=webp" />
<img alt="Bâtiments modernes et mobilité douce" className="col-span-3 row-span-3 rounded-xl object-cover h-48 w-full shadow-sm border border-blue-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="Communauté diverse à vélo" className="col-span-3 row-span-3 rounded-xl object-cover h-48 w-full shadow-sm border border-blue-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16" id="s-impliquer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-900">Comment rejoindre le mouvement ?</h2>
<p className="mt-2 text-blue-700">Trouve ta place selon ton profil et tes envies d’action.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#0066CC] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#adhesion">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Rejoindre maintenant
          </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm hover:shadow transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Citoyen·ne</h3>
</div>
<p className="mt-3 text-blue-700">Participe aux actions locales, défends le vélo dans ton quartier.</p>
</article>
<article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm hover:shadow transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Élu·e ou technicien·ne</h3>
</div>
<p className="mt-3 text-blue-700">Collabore à des projets pour transformer la ville.</p>
</article>
<article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm hover:shadow transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Entreprise / pro</h3>
</div>
<p className="mt-3 text-blue-700">Engage tes salariés, développe des solutions mobilité.</p>
</article>
<article className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm hover:shadow transition">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Autre profil</h3>
</div>
<p className="mt-3 text-blue-700">Découvre nos commissions (femmes à vélo, vélo scolaire/adapté, etc.), et trouve ta place !</p>
</article>
</div>
</div>
</section>

<section className="py-12 lg:py-16 border-t border-blue-200 bg-white" id="nos-actions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-900">Nos actions concrètes</h2>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-route w-5 h-5 text-[#0066CC]" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Balades, conférences, événements</h3>
</div>
<p className="mt-2 text-blue-700">Organisation de balades, conférences et événements pour sensibiliser.</p>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-megaphone w-5 h-5 text-[#0066CC]" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Campagne Vélomobile</h3>
</div>
<p className="mt-2 text-blue-700">Promotion active de la mobilité douce.</p>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-sparkles w-5 h-5 text-[#0066CC]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Commission féministe</h3>
</div>
<p className="mt-2 text-blue-700">Engagée sur l’égalité d’accès.</p>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-accessibility w-5 h-5 text-[#0066CC]" data-lucide="accessibility" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4" r="1"></circle><path d="m18 19 1-7-6 1"></path><path d="m5 8 3-3 5.5 3-2.36 3.5"></path><path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path><path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Projets pour tous les âges</h3>
</div>
<p className="mt-2 text-blue-700">Enfants, personnes à mobilité réduite, seniors.</p>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#commissions">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
            Voir nos commissions locales
          </a>
</div>
</div>
</section>

<section className="py-12 lg:py-16" id="actualites">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-900">Actualités</h2>
<p className="mt-2 text-blue-700">Suivez les dernières actions et événements.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#FF6B35] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#blog">
<svg className="lucide lucide-newspaper w-4 h-4" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
            Toutes les actus
          </a>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
<article className="group rounded-xl overflow-hidden border border-blue-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#0066CC]">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Campagne Vélomobile en ville" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-blue-900">Découvrez la dernière campagne Vélomobile</h3>
<p className="mt-2 text-blue-700">Mobilisons-nous pour des trajets quotidiens plus sûrs et plus doux.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#">
                  Lire
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
<article className="group rounded-xl overflow-hidden border border-blue-200 bg-white shadow-sm">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Conférence Femmes et mobilités" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-blue-900">Retour sur “Femmes et mobilités”</h3>
<p className="mt-2 text-blue-700">Échanges, bonnes pratiques et actions à venir.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#">
                  Lire
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
<article className="group rounded-xl overflow-hidden border border-blue-200 bg-white shadow-sm sm:col-span-2">
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-blue-900">Nos chiffres clés</h3>
<p className="text-blue-700">1 000 membres, 5 500 sympathisant·es, 60 bénévoles engagés, présents dans chaque arrondissement et plus de 30 communes de la Métropole.</p>
<div className="mt-4 rounded-lg border border-blue-200 bg-white p-3">
<div className="relative w-full h-48">
<div className="absolute inset-0">
<canvas aria-label="Graphique des chiffres clés" className="" height="480" id="statsChart" role="img" style={{display: `block`, boxSizing: `border-box`, height: `192px`, width: `594px`}} width="1485"></canvas>
</div>
</div>
</div>
</div>
</article>
</div>

<aside className="space-y-6">
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-calendar w-5 h-5 text-[#0066CC]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Événements</h3>
</div>
<p className="mt-2 text-blue-700">Trouvez les prochains événements près de chez vous.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#agenda">
                Voir l’agenda
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map w-5 h-5 text-[#0066CC]" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Cartes & outils</h3>
</div>
<p className="mt-2 text-blue-700">Guides, cartes cyclables et outils citoyens.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#ressources">
                Accéder aux ressources
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</aside>
</div>
</div>
</section>

<section className="py-12 lg:py-16 border-t border-blue-200 bg-white" id="a-propos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-900">Nos valeurs</h2>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-equal w-5 h-5 text-[#2E7D32]" data-lucide="equal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="9" y2="9"></line><line x1="5" x2="19" y1="15" y2="15"></line></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Égalité & solidarité</h3>
</div>
<p className="mt-2 text-blue-700">Engagement citoyen pour des mobilités accessibles à toutes et tous.</p>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#2E7D32]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Transparence</h3>
</div>
<p className="mt-2 text-blue-700">Indépendance financière depuis 2018.</p>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-smile w-5 h-5 text-[#2E7D32]" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Ouverture</h3>
</div>
<p className="mt-2 text-blue-700">Tous profils bienvenus, quel que soit l’âge, le niveau ou le type de vélo.</p>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16" id="ressources">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-900">Ressources</h2>
<div className="mt-6 grid sm:grid-cols-2 gap-6">
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-book-open w-5 h-5 text-[#0066CC]" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Guides & tutoriels</h3>
</div>
<p className="mt-2 text-blue-700">Conseils pratiques pour circuler en sécurité.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#">
                  Explorer
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#0066CC]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Cartes cyclables</h3>
</div>
<p className="mt-2 text-blue-700">Itinéraires, pistes et zones apaisées de la Métropole.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#">
                  Voir les cartes
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-hammer w-5 h-5 text-[#0066CC]" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Outils citoyens</h3>
</div>
<p className="mt-2 text-blue-700">Kit de plaidoyer local et retours d’expérience.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#">
                  Télécharger
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-text w-5 h-5 text-[#0066CC]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Statuts & documents</h3>
</div>
<p className="mt-2 text-blue-700">Statuts associatifs, rapports d’activité et ressources.</p>
<a className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#0066CC] hover:underline" href="#">
                  Consulter
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="lg:col-span-1" id="contact">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-900">Contact</h2>
<div className="mt-6 rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<form aria-label="Formulaire de contact" className="space-y-3">
<div>
<label className="block text-[13px] text-blue-700" htmlFor="name">Nom</label>
<input className="mt-1 w-full rounded-md border border-blue-300 bg-white px-3 py-2 text-[14px] text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0066CC]" id="name" name="name" placeholder="Votre nom" type="text" />
</div>
<div>
<label className="block text-[13px] text-blue-700" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-md border border-blue-300 bg-white px-3 py-2 text-[14px] text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0066CC]" id="email" name="email" placeholder="vous@exemple.fr" type="email" />
</div>
<div>
<label className="block text-[13px] text-blue-700" htmlFor="message">Message</label>
<textarea className="mt-1 w-full rounded-md border border-blue-300 bg-white px-3 py-2 text-[14px] text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0066CC]" id="message" name="message" placeholder="Votre message..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#0066CC] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Envoyer
                </button>
</form>
<div className="mt-5 border-t border-blue-200 pt-4 space-y-2">
<a className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-[#FF6B35] hover:underline" href="#adhesion">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                  Adhérer en ligne
                </a>
<div className="flex items-center gap-2 text-[14px] text-blue-700">
<svg className="lucide lucide-mail w-4 h-4 text-blue-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>contact@lavilleavelo.org</span>
</div>
</div>
</div>
<div className="mt-6 rounded-xl border border-blue-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-rss w-5 h-5 text-[#FF6B35]" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
<h3 className="text-[16px] font-semibold tracking-tight text-blue-900">Je reste informé·e</h3>
</div>
<p className="mt-2 text-blue-700">Abonnez-vous pour recevoir nos actualités.</p>
<form className="mt-3 flex gap-2">
<label className="sr-only" htmlFor="newsletter">Email pour la newsletter</label>
<input className="w-full rounded-md border border-blue-300 bg-white px-3 py-2 text-[14px] text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0066CC]" id="newsletter" placeholder="Email" type="email" />
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#FF6B35] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]">
                  S’abonner
                </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-t border-blue-200" id="adhesion">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-900">Rejoins-nous pour un futur où le vélo rassemble toute la métropole.</h3>
<p className="mt-1 text-blue-700">Des rues plus vertes, plus calmes et accessibles à chacun·e.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#0066CC] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#">
<svg className="lucide lucide-bike w-4 h-4" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
              Rejoindre le mouvement
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#FF6B35] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#don">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
              Faire un don
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-blue-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-blue-200 bg-white shadow-sm">
<span className="font-semibold tracking-tight text-blue-900" style={{letterSpacing: `-0.02em`}}>LVV</span>
</span>
<span className="text-[15px] font-semibold tracking-tight text-blue-900">La Ville à Vélo</span>
</div>
<p className="mt-3 text-blue-700">Association lyonnaise pour une ville plus inclusive, durable et humaine.</p>
<div className="mt-3 flex items-center gap-3">
<a aria-label="Flux RSS" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-blue-200 hover:bg-blue-50" href="#">
<svg className="lucide lucide-rss w-4 h-4 text-blue-700" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</a>
<a aria-label="Email" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-blue-200 hover:bg-blue-50" href="#">
<svg className="lucide lucide-mail w-4 h-4 text-blue-700" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<a aria-label="Compte réseau social" className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-blue-200 hover:bg-blue-50" href="#">
<svg className="lucide lucide-share-2 w-4 h-4 text-blue-700" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</a>
</div>
</div>
<div>
<h4 className="text-[14px] font-semibold tracking-tight text-blue-900">Navigation</h4>
<ul className="mt-3 space-y-2 text-[14px]">
<li><a className="text-blue-700 hover:text-blue-900" href="#a-propos">À propos</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#nos-actions">Nos actions</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#s-impliquer">S’impliquer</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#actualites">Actualités</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#ressources">Ressources</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-[14px] font-semibold tracking-tight text-blue-900">Pratique</h4>
<ul className="mt-3 space-y-2 text-[14px]">
<li><a className="text-blue-700 hover:text-blue-900" href="#agenda">Agenda</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#">Commissions</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#">Guides</a></li>
<li><a className="text-blue-700 hover:text-blue-900" href="#">Statuts</a></li>
</ul>
</div>
<div>
<h4 className="text-[14px] font-semibold tracking-tight text-blue-900">Soutenir</h4>
<p className="mt-3 text-blue-700">Votre soutien est essentiel pour nos actions locales.</p>
<a className="mt-3 inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-[14px] font-semibold tracking-tight text-white bg-[#FF6B35] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]" href="#don">
<svg className="lucide lucide-heart-handshake w-4 h-4" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
              Faire un don
            </a>
</div>
</div>
<div className="mt-8 border-t border-blue-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-[13px] text-blue-600">© <span id="year">2025</span> La Ville à Vélo — Lyon Métropole. Tous droits réservés.</p>
<div className="flex items-center gap-3">
<button className="text-[13px] px-2 py-1 rounded border border-blue-200 hover:bg-blue-50" id="font-small">A–</button>
<button className="text-[13px] px-2 py-1 rounded border border-blue-200 hover:bg-blue-50" id="font-default">A</button>
<button className="text-[13px] px-2 py-1 rounded border border-blue-200 hover:bg-blue-50" id="font-large">A+</button>
</div>
</div>
</div>
</footer>

<noscript>
      &amp;amp;amp;amp;amp;lt;div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-[14px] text-blue-700"&amp;amp;amp;amp;amp;gt;
        Certaines fonctionnalités d’accessibilité (icônes, graphique, menu mobile) nécessitent JavaScript.
      &amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;gt;
    </noscript>

    </>
  );
}
