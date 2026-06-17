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



      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile nav toggle
      const mobileToggle = document.querySelector('[data-mobile-nav-toggle]');
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
          const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
          mobileToggle.setAttribute('aria-expanded', String(!expanded));
          mobileNav.classList.toggle('hidden');
        });
      }

      // Modal controls
      const openButtons = document.querySelectorAll('[data-modal-open]');
      const closeButtons = document.querySelectorAll('[data-modal-close]');
      function closeModal(el) {
        el.classList.add('hidden');
      }
      function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.remove('hidden');
        // Focus first input
        const input = modal.querySelector('input, select, textarea, button');
        input && input.focus();
      }
      openButtons.forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.modalOpen));
      });
      closeButtons.forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.closest('[role="dialog"]')));
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          document.querySelectorAll('[role="dialog"]').forEach(m => !m.classList.contains('hidden') && m.classList.add('hidden'));
        }
      });
      document.querySelectorAll('[role="dialog"]').forEach(m => {
        m.addEventListener('click', (e) => {
          if (e.target === m) closeModal(m);
        });
      });

      // Custom toggle (reminder)
      const toggle = document.querySelector('.reminder-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const checked = toggle.getAttribute('aria-checked') === 'true';
          toggle.setAttribute('aria-checked', String(!checked));
          toggle.classList.toggle('bg-amber-500', !checked);
          toggle.classList.toggle('bg-slate-300', checked);
          const dot = toggle.querySelector('.dot');
          if (dot) {
            dot.classList.toggle('translate-x-5', !checked);
            dot.classList.toggle('translate-x-1', checked);
          }
        });
      }

      // Custom checkbox (remember me)
      const remember = document.querySelector('.remember-me');
      if (remember) {
        remember.addEventListener('click', () => {
          const checked = remember.getAttribute('aria-checked') === 'true';
          remember.setAttribute('aria-checked', String(!checked));
          const icon = remember.querySelector('svg');
          if (icon) icon.classList.toggle('hidden', checked);
          remember.classList.toggle('border-amber-400', !checked);
        });
      }

      // PWA manifest creation (Blob) and SW registration
      (function setupPWA() {
        const manifest = {
          name: "Tennis Padel Jaskovo",
          short_name: "TPJ",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#ffb020",
          icons: [
            { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
            { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
          ]
        };
        const blob = new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" });
        const url = URL.createObjectURL(blob);
        document.getElementById('pwa-manifest-link').setAttribute('href', url);

        // Basic in-page service worker for caching shell
        if ('serviceWorker' in navigator) {
          const swCode = `
            const CACHE = 'tpj-cache-v1';
            const ASSETS = ['/', location.href];
            self.addEventListener('install', e => {
              e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(self.skipWaiting()));
            });
            self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
            self.addEventListener('fetch', e => {
              e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
            });
          `;
          const swBlob = new Blob([swCode], { type: 'text/javascript' });
          const swUrl = URL.createObjectURL(swBlob);
          navigator.serviceWorker.register(swUrl).catch(console.error);
        }

        // Install prompt
        let deferredPrompt = null;
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          deferredPrompt = e;
          const btn = document.getElementById('installPWA');
          btn?.classList.remove('hidden');
          btn?.addEventListener('click', async () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            deferredPrompt = null;
          }, { once: true });
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
      

<header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="Početna — Tennis Padel Jaskovo" className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-lg bg-amber-400/90 ring-1 ring-amber-300/60 flex items-center justify-center text-slate-900 font-semibold tracking-tight">TPJ</div>
<div className="flex flex-col leading-none">
<span className="text-[18px] sm:text-[20px] font-semibold tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>Tennis Padel Jaskovo</span>
<span className="text-xs text-slate-500">Klub • Non-Profit</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#o-nama">O nama</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#rezervacije">Rezervacije</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#kalendar">Kalendar</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#analitika">Analitika</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#kontakt">Kontakt</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition focus:outline-none focus:ring-2 focus:ring-amber-400" data-modal-open="login-modal">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Prijava
            </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-3.5 py-2 text-sm font-medium text-white hover:bg-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-400" data-modal-open="register-modal">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Registracija
            </button>
<button aria-expanded="false" aria-label="Izbornik" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-50 transition" data-mobile-nav-toggle="">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-200 pb-3" id="mobile-nav">
<div className="pt-3 flex flex-col gap-2">
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#o-nama">O nama</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#rezervacije">Rezervacije</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#kalendar">Kalendar</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#analitika">Analitika</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#kontakt">Kontakt</a>
<div className="flex gap-2 pt-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50" data-modal-open="login-modal">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Prijava
              </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-sm text-white hover:bg-amber-600" data-modal-open="register-modal">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Registracija
              </button>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-to-b from-amber-50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="">
<h1 className="sm:text-5xl text-4xl font-semibold text-slate-900 tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              Igraj. Rezerviraj. Uživaj — u Jaskovu.
            </h1>
<p className="mt-4 text-slate-600 text-base sm:text-lg">
              Teniski i padel teren za sve generacije. Jednostavne online rezervacije, kalendar termina i pametni podsjetnici. Postani član i osvoji teren!
            </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400" href="#rezervacije">
<i className="w-4 h-4" data-lucide="tennis-ball"></i> Rezerviraj teren
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" href="#kalendar">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Pogledaj kalendar
              </a>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
<svg className="lucide lucide-clock-8 w-5 h-5 text-amber-600" data-lucide="clock-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="text-sm">
<div className="font-medium">Brze rezervacije</div>
<div className="text-slate-500">u par klikova</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
<svg className="lucide lucide-bell w-5 h-5 text-amber-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="text-sm">
<div className="font-medium">Podsjetnici</div>
<div className="text-slate-500">automatski e-mail</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
<svg className="lucide lucide-shield-check w-5 h-5 text-amber-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm">
<div className="font-medium">Zaštita podataka</div>
<div className="text-slate-500">privatnost na prvom mjestu</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
<img alt="Tennis teren — rezervacije i igra" className="w-full h-[360px] object-cover" loading="lazy" src="https://images.unsplash.com/photo-1512412046876-f386342eddb3?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/60 to-transparent">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm">Jaskovo • Tenis &amp; Padel</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 shadow-sm">
<div className="flex items-center gap-2 text-amber-800 text-sm">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Dobrodošli u sezonu!
                </div>
</div>
</div>
</div>
</div>

<div className="mt-12">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900 mb-5" style={{fontFamily: '\'Instrument Serif\', serif'}}>Brzi prečaci</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition" href="#rezervacije">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center ring-1 ring-amber-200">
<svg className="lucide lucide-calendar-plus w-5 h-5" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</div>
<div>
<div className="font-medium">Rezervacije</div>
<div className="text-sm text-slate-500">Zakaži termin danas</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>

<button className="group text-left rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition w-full" data-modal-open="register-modal">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center ring-1 ring-amber-200">
<svg className="lucide lucide-id-card w-5 h-5" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
</div>
<div>
<div className="font-medium">Članstvo</div>
<div className="text-sm text-slate-500">Pridruži se klubu</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</button>

<a className="group rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition" href="#o-nama">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center ring-1 ring-amber-200">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<div className="font-medium">Treninzi</div>
<div className="text-sm text-slate-500">Grupe i individualno</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>

<a className="group rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition" href="#kalendar">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center ring-1 ring-amber-200">
<svg className="lucide lucide-calendar-days w-5 h-5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<div>
<div className="font-medium">Kalendar</div>
<div className="text-sm text-slate-500">Tjedni pregledi</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>

<a className="group rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition" href="#analitika">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center ring-1 ring-amber-200">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div>
<div className="font-medium">Analitika</div>
<div className="text-sm text-slate-500">Izvještaji kluba</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>

<a className="group rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition" href="#kontakt">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center ring-1 ring-amber-200">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<div className="font-medium">Kontakt</div>
<div className="text-sm text-slate-500">Piši nam</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="rezervacije">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900" style={{fontFamily: '\'Instrument Serif\', serif'}}>Rezervacije terena</h2>
<div className="text-sm text-slate-500">Automatski e-mail podsjetnik 24h prije termina</div>
</div>
<div className="mt-6 grid lg:grid-cols-3 gap-6">

<form aria-labelledby="rezervacije-form" className="lg:col-span-2 rounded-2xl border border-slate-200 p-5 sm:p-6">
<div className="sr-only" id="rezervacije-form">Forma za rezervacije terena</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Sport</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none">
<option value="tenis">Tenis</option>
<option value="padel">Padel</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Teren</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none">
<option value="1">Teren 1</option>
<option value="2">Teren 2</option>
<option value="3">Teren 3</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Datum</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" type="date"/>
<svg className="lucide lucide-calendar w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Vrijeme početka</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" type="time"/>
<svg className="lucide lucide-clock w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Trajanje</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none">
<option>60 min</option>
<option>90 min</option>
<option>120 min</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Broj igrača</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" max="4" min="1" type="number" value="2"/>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Napomena (opcionalno)</label>
<textarea className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" placeholder="Npr. željeni teren uz ogradu..." rows="3"></textarea>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bell w-4 h-4 text-amber-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="text-sm text-slate-700">E-mail podsjetnik 24h prije</span>
</div>

<button aria-checked="true" className="reminder-toggle relative inline-flex h-6 w-11 items-center rounded-full bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400" role="switch" type="button">
<span className="sr-only">Uključi podsjetnik</span>
<span className="dot translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition"></span>
</button>
</div>
<div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5">
<svg className="lucide lucide-shield w-4 h-4 text-slate-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<p className="text-xs text-slate-500">Vaši podaci se koriste isključivo za potrebe rezervacije i podsjetnika.</p>
</div>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400" type="button">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Potvrdi rezervaciju
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50 hover:border-slate-400" type="reset">
<svg className="lucide lucide-rotate-ccw w-4 h-4" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg> Poništi
              </button>
<div aria-live="polite" className="text-sm text-emerald-600 hidden" id="rezultat-rezervacije">Rezervacija potvrđena!</div>
</div>
</form>

<aside className="rounded-2xl border border-slate-200 p-5 sm:p-6">
<h3 className="text-lg tracking-tight font-semibold text-slate-900" style={{fontFamily: '\'Instrument Serif\', serif'}}>Dostupnost danas</h3>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="tennis-ball"></i>
<span className="text-sm">Tenis — Teren 1</span>
</div>
<span className="text-xs rounded-md bg-emerald-50 text-emerald-700 px-2 py-1 border border-emerald-200">Slobodno</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="tennis-ball"></i>
<span className="text-sm">Tenis — Teren 2</span>
</div>
<span className="text-xs rounded-md bg-amber-50 text-amber-700 px-2 py-1 border border-amber-200">Od 17:00</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="tennis-ball"></i>
<span className="text-sm">Padel — Teren 3</span>
</div>
<span className="text-xs rounded-md bg-rose-50 text-rose-700 px-2 py-1 border border-rose-200">Zauzeto</span>
</div>
</div>
<div className="mt-6">
<h4 className="text-sm font-medium text-slate-700 mb-2">Cjenik (sažetak)</h4>
<ul className="space-y-1.5 text-sm text-slate-600">
<li className="flex items-center justify-between"><span>Tenis 60 min</span><span className="font-medium text-slate-800">12 €</span></li>
<li className="flex items-center justify-between"><span>Padel 60 min</span><span className="font-medium text-slate-800">16 €</span></li>
<li className="flex items-center justify-between"><span>Članovi</span><span className="rounded px-1.5 py-0.5 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">-20%</span></li>
</ul>
<a className="mt-3 inline-flex items-center gap-1.5 text-sm text-amber-700 hover:text-amber-800" href="#kontakt">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Detaljni cjenik na upit
              </a>
</div>
</aside>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="kalendar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900" style={{fontFamily: '\'Instrument Serif\', serif'}}>Kalendar termina</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg> Nazad</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Naprijed <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="mt-5 rounded-2xl border border-slate-200 overflow-hidden">
<div className="grid grid-cols-8 bg-slate-50/60 border-b border-slate-200 text-xs sm:text-sm">
<div className="px-3 py-2 text-slate-500">Vrijeme</div>
<div className="px-3 py-2 font-medium">Pon</div>
<div className="px-3 py-2 font-medium">Uto</div>
<div className="px-3 py-2 font-medium">Sri</div>
<div className="px-3 py-2 font-medium">Čet</div>
<div className="px-3 py-2 font-medium">Pet</div>
<div className="px-3 py-2 font-medium">Sub</div>
<div className="px-3 py-2 font-medium">Ned</div>
</div>
<div className="divide-y divide-slate-200">


<div className="grid grid-cols-8">
<div className="px-2 py-3 text-xs text-slate-500">08:00</div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200">
<div className="m-1 rounded-lg bg-amber-50 border border-amber-200 px-2 py-1.5 text-amber-800 text-xs">Tenis • T1</div>
</div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
</div>

<div className="grid grid-cols-8">
<div className="px-2 py-3 text-xs text-slate-500">09:00</div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200">
<div className="m-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-1.5 text-emerald-800 text-xs">Padel • T3</div>
</div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
</div>

<div className="grid grid-cols-8">
<div className="px-2 py-3 text-xs text-slate-500">10:00</div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200">
<div className="m-1 rounded-lg bg-rose-50 border border-rose-200 px-2 py-1.5 text-rose-800 text-xs">Zauzeto</div>
</div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
<div className="border-l border-slate-200"></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><span className="h-3 w-3 rounded bg-amber-200 border border-amber-300"></span> Tenis</span>
<span className="inline-flex items-center gap-1"><span className="h-3 w-3 rounded bg-emerald-200 border border-emerald-300"></span> Padel</span>
<span className="inline-flex items-center gap-1"><span className="h-3 w-3 rounded bg-rose-200 border border-rose-300"></span> Zauzeto</span>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="analitika">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900" style={{fontFamily: '\'Instrument Serif\', serif'}}>Analitika i izvještaji</h2>
<div className="text-sm text-slate-500">Pregled korištenja terena i članstva</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-2xl border border-slate-200 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Ukupno rezervacija</div>
<svg className="lucide lucide-activity w-4 h-4 text-amber-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">1,284</div>
<div className="text-xs text-emerald-600 mt-1">+12% ovaj mjesec</div>
</div>
<div className="rounded-2xl border border-slate-200 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Aktivni članovi</div>
<svg className="lucide lucide-users w-4 h-4 text-amber-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">368</div>
<div className="text-xs text-slate-500 mt-1">+23 novih</div>
</div>
<div className="rounded-2xl border border-slate-200 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Popunjenost</div>
<svg className="lucide lucide-gauge w-4 h-4 text-amber-600" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">74%</div>
<div className="text-xs text-slate-500 mt-1">prosječno tjedno</div>
</div>
<div className="rounded-2xl border border-slate-200 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Treninzi</div>
<svg className="lucide lucide-dumbbell w-4 h-4 text-amber-600" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">92</div>
<div className="text-xs text-slate-500 mt-1">ovaj mjesec</div>
</div>
</div>

<div className="mt-6 rounded-2xl border border-slate-200 p-5">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-slate-700">Rezervacije po danu (tjedan)</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded bg-amber-400"></span> Tenis</span>
<span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded bg-emerald-400"></span> Padel</span>
</div>
</div>
<div className="grid grid-cols-7 gap-3 items-end h-44">

<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-16"></div>
<div className="w-7 rounded bg-emerald-400 h-10"></div>
<span className="text-xs text-slate-500">Pon</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-24"></div>
<div className="w-7 rounded bg-emerald-400 h-12"></div>
<span className="text-xs text-slate-500">Uto</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-20"></div>
<div className="w-7 rounded bg-emerald-400 h-16"></div>
<span className="text-xs text-slate-500">Sri</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-28"></div>
<div className="w-7 rounded bg-emerald-400 h-12"></div>
<span className="text-xs text-slate-500">Čet</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-20"></div>
<div className="w-7 rounded bg-emerald-400 h-20"></div>
<span className="text-xs text-slate-500">Pet</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-12"></div>
<div className="w-7 rounded bg-emerald-400 h-24"></div>
<span className="text-xs text-slate-500">Sub</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-7 rounded bg-amber-400 h-10"></div>
<div className="w-7 rounded bg-emerald-400 h-14"></div>
<span className="text-xs text-slate-500">Ned</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="o-nama">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-slate-900" style={{fontFamily: '\'Instrument Serif\', serif'}}>O klubu</h2>
<p className="mt-3 text-slate-600">
              “Tennis Padel Jaskovo” je volonterski klub usmjeren zajednici. Naša misija je učiniti tenis i padel dostupnim svima — od rekreativaca do natjecatelja. Organiziramo treninge, turnire i klupske događaje.
            </p>
<ul className="mt-4 space-y-2 text-slate-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Programi za djecu i odrasle</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Transparentno, neprofitno poslovanje</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Volonterske akcije i društvena uključenost</li>
</ul>
<div className="mt-5 flex gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600" data-modal-open="register-modal"><svg className="lucide lucide-heart-handshake w-4 h-4" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg> Postani član</button>
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm hover:bg-slate-50 hover:border-slate-400" href="#kontakt"><svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Kontakt</a>
</div>
</div>
<div className="relative">
<div className="rounded-2xl overflow-hidden border border-slate-200">
<img alt="Članovi kluba na terenu" className="w-full h-[320px] object-cover" loading="lazy" src="https://images.unsplash.com/photo-1508154048109-de555266b70a?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900" style={{fontFamily: '\'Instrument Serif\', serif'}}>Kontakt</h2>
<div className="mt-6 grid lg:grid-cols-3 gap-6">
<form className="lg:col-span-2 rounded-2xl border border-slate-200 p-5 sm:p-6">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Ime i prezime</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" placeholder="Vaše ime" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" placeholder="vaše@ime.com" type="email"/>
</div>
</div>
<div className="mt-4">
<label className="block text-sm font-medium text-slate-700 mb-1">Poruka</label>
<textarea className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none" placeholder="Kako vam možemo pomoći?" rows="5"></textarea>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600" type="button">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Pošalji
              </button>
<span className="text-xs text-slate-500">Odgovaramo unutar 24h.</span>
</div>
</form>
<div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
<div className="flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-map-pin w-4 h-4 text-amber-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="text-sm">Ul. Kluba 1, Jaskovo</div>
</div>
<div className="mt-2 flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-phone w-4 h-4 text-amber-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div className="text-sm">+385 99 123 4567</div>
</div>
<div className="mt-2 flex items-center gap-2 text-slate-700">
<svg className="lucide lucide-mail w-4 h-4 text-amber-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="text-sm">kontakt@tpj.hr</div>
</div>
<div className="mt-4 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 h-48 flex items-center justify-center text-slate-500 text-sm">
              Mapa lokacije (embed)
            </div>
<a className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700" href="#privatnost">
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Privatnost i kolačići
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid sm:grid-cols-3 gap-6">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-amber-400 text-slate-900 font-semibold tracking-tight flex items-center justify-center">TPJ</div>
<div className="text-slate-900 font-semibold" style={{fontFamily: '\'Instrument Serif\', serif'}}>Tennis Padel Jaskovo</div>
</div>
<p className="mt-2 text-sm text-slate-600">Neprofitni klub posvećen razvoju tenisa i padela u zajednici.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-700 mb-2">Navigacija</div>
<ul className="space-y-1.5 text-sm">
<li><a className="hover:underline" href="#rezervacije">Rezervacije</a></li>
<li><a className="hover:underline" href="#kalendar">Kalendar</a></li>
<li><a className="hover:underline" href="#analitika">Analitika</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-700 mb-2">Pravno</div>
<ul className="space-y-1.5 text-sm">
<li><a className="hover:underline" href="#privatnost">Privatnost</a></li>
<li><a className="hover:underline" href="#uvjeti">Uvjeti korištenja</a></li>
<li><a className="hover:underline" href="#impressum">Impressum</a></li>
</ul>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<div className="text-xs text-slate-500">© <span id="year">2025</span> TPJ. Sva prava pridržana.</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs hover:bg-slate-50" id="installPWA">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Instaliraj aplikaciju
          </button>
</div>
</div>
</footer>


<div aria-labelledby="login-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="login-modal" role="dialog">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative mx-auto mt-20 w-full max-w-md p-4">
<div className="rounded-2xl bg-white border border-slate-200 shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
<h3 className="text-lg tracking-tight font-semibold text-slate-900" id="login-title" style={{fontFamily: '\'Instrument Serif\', serif'}}>Prijava</h3>
<button aria-label="Zatvori" className="rounded-md p-1 hover:bg-slate-50" data-modal-close=""><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<form className="px-5 py-4">
<label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400" placeholder="vaše@ime.com" type="email"/>
<label className="block text-sm font-medium text-slate-700 mt-3 mb-1">Lozinka</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400" placeholder="••••••••" type="password"/>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">

<button aria-checked="false" className="remember-me h-4 w-4 rounded border border-slate-300 flex items-center justify-center" role="checkbox" type="button">
<svg className="lucide lucide-check w-3 h-3 text-amber-600 hidden" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<span className="text-xs text-slate-600 select-none">Zapamti me</span>
</div>
<a className="text-xs text-amber-700 hover:underline" href="#">Zaboravljena lozinka?</a>
</div>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600" type="button">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Prijavi se
            </button>
</form>
</div>
</div>
</div>

<div aria-labelledby="register-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="register-modal" role="dialog">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative mx-auto mt-16 w-full max-w-2xl p-4">
<div className="rounded-2xl bg-white border border-slate-200 shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
<h3 className="text-lg tracking-tight font-semibold text-slate-900" id="register-title" style={{fontFamily: '\'Instrument Serif\', serif'}}>Registracija</h3>
<button aria-label="Zatvori" className="rounded-md p-1 hover:bg-slate-50" data-modal-close=""><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<form className="px-5 py-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Ime</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Prezime</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Lozinka</label>
<input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400" type="password"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-700 mb-1">Uloga</label>
<div className="relative">
<select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-amber-400">
<option value="igrac">Igrač</option>
<option value="trener">Trener</option>
<option value="admin">Administrator</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="mt-2 text-xs text-slate-500">Prava pristupa će biti dodijeljena ovisno o ulozi (upravljanje terminima, članovima, izvještajima).</p>
</div>
</div>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600" type="button">
<svg className="lucide lucide-user-check w-4 h-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> Kreiraj račun
            </button>
</form>
</div>
</div>
</div>

<section aria-hidden="true" className="sr-only" id="privatnost">
      Privatnost i kolačići — placeholder.
    </section>



    </>
  );
}
