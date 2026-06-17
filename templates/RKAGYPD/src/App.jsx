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



      // Global state with defaults
      let lumaUrl = localStorage.getItem('nn_lumaUrl') || 'https://lu.ma/noonisnight';
      let capacity = parseInt(localStorage.getItem('nn_capacity') || '15', 10);
      let registered = parseInt(localStorage.getItem('nn_registered') || '6', 10); // default example to create urgency
      let lockWhenFull = localStorage.getItem('nn_lock') === '1';

      // Helpers
      function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

      function updateCapacityUI() {
        registered = clamp(registered, 0, capacity);
        const left = Math.max(capacity - registered, 0);
        const pct = capacity > 0 ? (registered / capacity) * 100 : 0;

        // Labels
        const spotsLeft = document.getElementById('spotsLeft');
        const spotsLeftM = document.getElementById('spotsLeftMobile');
        const spotsWidget = document.getElementById('spotsWidget');
        const capLabel = document.getElementById('capacityLabel');
        const bar = document.getElementById('capacityBar');
        const barSmall = document.getElementById('capacityBarSmall');
        const cta = document.getElementById('ctaRegister');
        const ctaM = document.getElementById('ctaRegisterMobile');
        const ctaForm = document.getElementById('ctaRegisterForm');

        if (spotsLeft) spotsLeft.textContent = `Spots left: ${left}`;
        if (spotsLeftM) spotsLeftM.textContent = `Spots left: ${left}`;
        if (spotsWidget) spotsWidget.textContent = `Spots left: ${left}`;
        if (capLabel) capLabel.textContent = `${registered}/${capacity}`;
        if (bar) bar.style.width = `${pct}%`;
        if (barSmall) barSmall.style.width = `${pct}%`;

        const isFull = left <= 0;
        const disable = lockWhenFull && isFull;

        const setDisabled = (btn, textFull, textOpen) => {
          if (!btn) return;
          if (disable) {
            btn.setAttribute('aria-disabled','true');
            btn.classList.add('pointer-events-none','opacity-60');
            btn.querySelector('span') && (btn.querySelector('span').textContent = textFull);
          } else {
            btn.removeAttribute('aria-disabled');
            btn.classList.remove('pointer-events-none','opacity-60');
            btn.querySelector('span') && (btn.querySelector('span').textContent = textOpen);
            btn.setAttribute('href', lumaUrl);
          }
        };

        setDisabled(cta, 'Join waitlist', 'Secure your seat — $10');
        setDisabled(ctaM, 'Join waitlist', 'Register');
        if (ctaForm) {
          if (disable) {
            ctaForm.setAttribute('disabled', 'true');
            ctaForm.classList.add('pointer-events-none','opacity-60');
            ctaForm.textContent = 'Join waitlist';
          } else {
            ctaForm.removeAttribute('disabled');
            ctaForm.classList.remove('pointer-events-none','opacity-60');
            ctaForm.textContent = 'Register on Luma — $10';
          }
        }
      }

      // Initialize year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobileMenu');
      const mobileNav = document.getElementById('mobileNav');
      if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Language toggle
      const LANG_KEYS = ['en','es'];
      function setLang(lang) {
        if (!LANG_KEYS.includes(lang)) lang = 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const value = el.getAttribute(`data-${lang}`);
          if (value) el.innerHTML = value;
        });
        // Toggle styles
        const btnEN = document.getElementById('lang-en');
        const btnES = document.getElementById('lang-es');
        const btnENM = document.getElementById('lang-en-m');
        const btnESM = document.getElementById('lang-es-m');
        const setActive = (btn, active) => {
          if (!btn) return;
          if (active) {
            btn.classList.add('bg-white/10','text-white','ring-1','ring-inset','ring-white/10');
          } else {
            btn.classList.remove('bg-white/10','text-white','ring-1','ring-inset','ring-white/10');
            btn.classList.add('text-slate-300');
          }
        };
        setActive(btnEN, lang==='en'); setActive(btnES, lang==='es');
        setActive(btnENM, lang==='en'); setActive(btnESM, lang==='es');
        localStorage.setItem('nn_lang', lang);
      }
      document.getElementById('lang-en')?.addEventListener('click', () => setLang('en'));
      document.getElementById('lang-es')?.addEventListener('click', () => setLang('es'));
      document.getElementById('lang-en-m')?.addEventListener('click', () => setLang('en'));
      document.getElementById('lang-es-m')?.addEventListener('click', () => setLang('es'));
      setLang(localStorage.getItem('nn_lang') || 'en');

      // Share logic
      const shareData = {
        title: 'Noon is Night — Futures Simulation',
        text: 'Join me Sep 23–25: a premium futures simulation for young LATAM professionals. $10 · 15 seats.',
        url: window.location.href
      };
      function doShare(e) {
        e?.preventDefault?.();
        if (navigator.share) {
          navigator.share(shareData).catch(()=>{});
        } else {
          // Fallback: open Twitter share
          const text = encodeURIComponent(`${shareData.text} ${shareData.url}`);
          window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'noopener');
        }
      }
      document.getElementById('shareBtn')?.addEventListener('click', doShare);
      document.getElementById('shareBtnHero')?.addEventListener('click', doShare);
      document.getElementById('shareBtn2')?.addEventListener('click', doShare);
      document.getElementById('shareBtnFooter')?.addEventListener('click', doShare);

      // Admin panel
      const adminOpen = document.getElementById('adminOpen');
      const adminClose = document.getElementById('adminClose');
      const adminModal = document.getElementById('adminModal');
      const lumaInput = document.getElementById('lumaInput');
      const capacityInput = document.getElementById('capacityInput');
      const registeredInput = document.getElementById('registeredInput');
      const toggleLock = document.getElementById('toggleLock');
      const saveAdmin = document.getElementById('saveAdmin');
      const resetAdmin = document.getElementById('resetAdmin');

      function openAdmin() {
        adminModal.classList.remove('hidden');
        lumaInput.value = lumaUrl;
        capacityInput.value = capacity;
        registeredInput.value = registered;
        toggleLock.textContent = lockWhenFull ? 'Currently: ON' : 'Currently: OFF';
      }
      function closeAdmin() { adminModal.classList.add('hidden'); }

      adminOpen?.addEventListener('click', openAdmin);
      adminClose?.addEventListener('click', closeAdmin);
      adminModal?.addEventListener('click', (e)=>{ if(e.target === adminModal) closeAdmin(); });
      document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeAdmin(); });

      toggleLock?.addEventListener('click', ()=>{
        lockWhenFull = !lockWhenFull;
        localStorage.setItem('nn_lock', lockWhenFull ? '1' : '0');
        toggleLock.textContent = lockWhenFull ? 'Currently: ON' : 'Currently: OFF';
        updateCapacityUI();
      });

      saveAdmin?.addEventListener('click', ()=>{
        lumaUrl = lumaInput.value || lumaUrl;
        capacity = parseInt(capacityInput.value || capacity, 10);
        registered = parseInt(registeredInput.value || registered, 10);
        localStorage.setItem('nn_lumaUrl', lumaUrl);
        localStorage.setItem('nn_capacity', String(capacity));
        localStorage.setItem('nn_registered', String(registered));
        updateCapacityUI();
        closeAdmin();
      });

      resetAdmin?.addEventListener('click', ()=>{
        localStorage.removeItem('nn_lumaUrl');
        localStorage.removeItem('nn_capacity');
        localStorage.removeItem('nn_registered');
        localStorage.removeItem('nn_lock');
        lumaUrl = 'https://lu.ma/noonisnight';
        capacity = 15;
        registered = 6;
        lockWhenFull = false;
        updateCapacityUI();
        closeAdmin();
      });

      // Initial UI state
      updateCapacityUI();

      // Lucide icons
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="fixed inset-0 -z-10 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(137,88,241,0.25),rgba(0,0,0,0)_50%),radial-gradient(900px_600px_at_-10%_40%,rgba(0,204,255,0.15),rgba(0,0,0,0)_50%),radial-gradient(800px_600px_at_50%_130%,rgba(255,94,154,0.12),rgba(0,0,0,0)_50%)]"></div>

<div className="pointer-events-none absolute -top-40 -right-20 w-[38rem] h-[38rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="pointer-events-none absolute -bottom-40 -left-20 w-[42rem] h-[42rem] rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>

<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full border border-white/5 animate-spin" style={{animationDuration: '28s'}}></div>

<div className="pointer-events-none absolute inset-0">

<div className="absolute top-[12%] left-[10%] w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
<div className="absolute top-[20%] left-[35%] w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDuration: '7s'}}></div>
<div className="absolute top-[30%] left-[80%] w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDuration: '6.5s'}}></div>
<div className="absolute top-[65%] left-[15%] w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDuration: '9s'}}></div>
<div className="absolute top-[75%] left-[48%] w-[3px] h-[3px] bg-white/60 rounded-full animate-ping" style={{animationDuration: '7.5s'}}></div>
<div className="absolute top-[40%] left-[55%] w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDuration: '8.5s'}}></div>
<div className="absolute top-[82%] left-[82%] w-1 h-1 bg-white/60 rounded-full animate-ping" style={{animationDuration: '10s'}}></div>
</div>
</div>

<header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/60 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between h-16">
<a className="group inline-flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 grid place-items-center text-white/90 group-hover:bg-white/10 transition">
<span className="font-semibold tracking-tight">NN</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base md:text-lg font-semibold tracking-tight">Noon is Night</span>
<span className="text-[11px] text-slate-400">Futures Simulation</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300 hover:text-white transition" href="#experience">Experience</a>
<a className="text-slate-300 hover:text-white transition" href="#facilitators">Facilitators</a>
<a className="text-slate-300 hover:text-white transition" href="#details">Details</a>
<a className="text-slate-300 hover:text-white transition" href="#testimonials">Testimonials</a>
<div className="h-5 w-px bg-white/10"></div>

<div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
<button className="px-3 py-1 text-xs rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:bg-white/15 transition" id="lang-en">EN</button>
<button className="px-3 py-1 text-xs rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition" id="lang-es">ES</button>
</div>

<button className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition" id="shareBtn">
<i className="w-4 h-4" data-lucide="share-2"></i>
<span data-en="Share" data-es="Compartir" data-i18n="">Share</span>
</button>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" href="#register">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span data-en="Register" data-es="Inscribirme" data-i18n="">Register</span>
</a>
</nav>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="mobileMenu">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileNav">
<div className="px-4 py-3 flex flex-col gap-3">
<a className="text-slate-300 hover:text-white transition" href="#experience">Experience</a>
<a className="text-slate-300 hover:text-white transition" href="#facilitators">Facilitators</a>
<a className="text-slate-300 hover:text-white transition" href="#details">Details</a>
<a className="text-slate-300 hover:text-white transition" href="#testimonials">Testimonials</a>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
<button className="px-3 py-1 text-xs rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10" id="lang-en-m">EN</button>
<button className="px-3 py-1 text-xs rounded-full text-slate-300" id="lang-es-m">ES</button>
</div>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" href="#register">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span data-en="Register" data-es="Inscribirme" data-i18n="">Register</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 md:py-20">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span data-en="Sep 23–25 · 15 seats only · $10" data-es="23–25 Sep · 15 cupos · $10" data-i18n="">Sep 23–25 · 15 seats only · $10</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
<span className="text-white">Noon is Night</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">Futures Simulation Experience</span>
</h1>
<p className="text-slate-300/90 text-base md:text-lg">
<span data-en="A premium, sci‑fi infused workshop inspired by Jane McGonigal &amp; IFTF. Distort time, challenge limits, and design futures that make sense for your next decade." data-es="Un taller premium con estética sci‑fi inspirado por Jane McGonigal e IFTF. Distorciona el tiempo, desafía límites y diseña futuros que te sirvan para la próxima década." data-i18n="">
                A premium, sci‑fi infused workshop inspired by Jane McGonigal &amp; IFTF. Distort time, challenge limits, and design futures that make sense for your next decade.
              </span>
</p>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4">
<a className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" href="https://lu.ma/noonisnight" id="ctaRegister" rel="noopener" target="_blank">
<i className="w-5 h-5" data-lucide="ticket"></i>
<span className="font-medium" data-en="Secure your seat — $10" data-es="Asegura tu cupo — $10" data-i18n="">Secure your seat — $10</span>
<i className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="shareBtnHero">
<i className="w-5 h-5" data-lucide="share"></i>
<span data-en="Share with a friend" data-es="Compartir con un amigo" data-i18n="">Share with a friend</span>
</button>
</div>
<div className="grid sm:grid-cols-3 gap-4 pt-1">
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/[0.04]">
<i className="w-5 h-5 text-slate-200" data-lucide="calendar"></i>
<div className="text-sm">
<div className="text-white">Sep 23–25</div>
<div className="text-slate-400" data-en="3 sessions" data-es="3 sesiones" data-i18n="">3 sessions</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/[0.04]">
<i className="w-5 h-5 text-slate-200" data-lucide="globe"></i>
<div className="text-sm">
<div className="text-white">16:30–18:30 London</div>
<div className="text-slate-400">09:30–11:30 CDMX / San José</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/[0.04]">
<i className="w-5 h-5 text-slate-200" data-lucide="users"></i>
<div className="text-sm">
<div className="text-white" data-en="15 participants max" data-es="Máx. 15 participantes" data-i18n="">15 participants max</div>
<div className="text-slate-400" id="spotsLeft">Spots left: 15</div>
</div>
</div>
</div>

<div className="space-y-2 pt-1">
<div className="flex items-center justify-between text-xs text-slate-400">
<span data-en="Cohort capacity" data-es="Capacidad de la cohorte" data-i18n="">Cohort capacity</span>
<span id="capacityLabel">0/15</span>
</div>
<div className="h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" id="capacityBar" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="relative">
<div className="relative aspect-square rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">

<div className="absolute inset-0 grid place-items-center">
<div className="relative">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[conic-gradient(from_0deg,rgba(137,88,241,0.4),rgba(0,204,255,0.4),rgba(255,94,154,0.4),rgba(137,88,241,0.4))] blur-2xl opacity-60 animate-spin" style={{animationDuration: '30s'}}></div>
<div className="absolute inset-10 rounded-full border border-white/10 backdrop-blur-xl bg-white/5"></div>
<div className="absolute inset-0 grid place-items-center">
<div className="w-28 h-28 rounded-full bg-white/10 border border-white/20"></div>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-50">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-slate-950/80 to-transparent">
<p className="text-sm text-slate-300">
<span data-en="Time-distortion sandbox: practice futures before they arrive." data-es="Sandbox de distorsión temporal: practica futuros antes de que lleguen." data-i18n="">Time-distortion sandbox: practice futures before they arrive.</span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-2rem)]">
<div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-lg p-3 shadow-lg">
<div className="flex items-center justify-between gap-3">
<div className="text-xs text-slate-200">
<div className="font-medium" data-en="Sep 23–25 • $10 • 15 seats" data-es="23–25 Sep • $10 • 15 cupos" data-i18n="">Sep 23–25 • $10 • 15 seats</div>
<div className="text-slate-400" id="spotsLeftMobile">Spots left: 15</div>
</div>
<a className="px-4 py-2 rounded-md bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition" href="https://lu.ma/noonisnight" id="ctaRegisterMobile" rel="noopener" target="_blank">
<span data-en="Register" data-es="Inscribirme" data-i18n="">Register</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20" id="experience">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
<span data-en="What you’ll experience" data-es="Lo que vas a vivir" data-i18n="">What you’ll experience</span>
</h2>
<p className="mt-3 text-slate-300 max-w-xl" data-en="Designed for young Latin American professionals starting their careers. High-signal, practical, unforgettable." data-es="Diseñado para jóvenes profesionales de LATAM que inician su carrera. Señal alta, práctico e inolvidable." data-i18n="">Designed for young Latin American professionals starting their careers. High-signal, practical, unforgettable.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">
<div className="h-10 w-10 rounded-md bg-white/5 border border-white/10 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h3 className="font-semibold tracking-tight mb-1" data-en="Clarity" data-es="Claridad" data-i18n="">Clarity</h3>
<p className="text-sm text-slate-300" data-en="Understand emerging signals and how they shape your next moves." data-es="Comprende señales emergentes y cómo moldean tus próximos pasos." data-i18n="">Understand emerging signals and how they shape your next moves.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">
<div className="h-10 w-10 rounded-md bg-white/5 border border-white/10 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="route"></i>
</div>
<h3 className="font-semibold tracking-tight mb-1" data-en="Strategies" data-es="Estrategias" data-i18n="">Strategies</h3>
<p className="text-sm text-slate-300" data-en="Prototype paths and decisions before reality demands them." data-es="Prototipa caminos y decisiones antes de que la realidad las exija." data-i18n="">Prototype paths and decisions before reality demands them.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">
<div className="h-10 w-10 rounded-md bg-white/5 border border-white/10 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="beaker"></i>
</div>
<h3 className="font-semibold tracking-tight mb-1" data-en="Creativity" data-es="Creatividad" data-i18n="">Creativity</h3>
<p className="text-sm text-slate-300" data-en="Imaginative scenarios grounded in real-world foresight tools." data-es="Escenarios imaginativos basados en herramientas reales de prospectiva." data-i18n="">Imaginative scenarios grounded in real-world foresight tools.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">
<div className="h-10 w-10 rounded-md bg-white/5 border border-white/10 grid place-items-center mb-4">
<i className="w-5 h-5" data-lucide="handshake"></i>
</div>
<h3 className="font-semibold tracking-tight mb-1" data-en="Connections" data-es="Conexiones" data-i18n="">Connections</h3>
<p className="text-sm text-slate-300" data-en="Meet peers across LATAM who want to build what’s next." data-es="Conoce pares en LATAM que quieren construir lo que sigue." data-i18n="">Meet peers across LATAM who want to build what’s next.</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20" id="facilitators">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight" data-en="Your facilitators" data-es="Facilitadoras" data-i18n="">Your facilitators</h2>
<p className="mt-3 text-slate-300 max-w-xl" data-en="Co‑created and led by Liliana &amp; Luciana Herrero." data-es="Co‑creado y facilitado por Liliana y Luciana Herrero." data-i18n="">Co‑created and led by Liliana &amp; Luciana Herrero.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
<div className="aspect-[16/9] bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&amp'}}></div>
<div className="p-6">
<div className="flex items-center gap-3">
<img alt="Liliana portrait" className="h-12 w-12 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-semibold tracking-tight">Liliana Herrero</div>
<div className="text-sm text-slate-400" data-en="Foresight Designer" data-es="Diseñadora de Prospectiva" data-i18n="">Foresight Designer</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300" data-en="Brings systems thinking and future literacy to craft actionable pathways from signals to strategy." data-es="Aporta pensamiento sistémico y alfabetización de futuros para pasar de señales a estrategia." data-i18n="">Brings systems thinking and future literacy to craft actionable pathways from signals to strategy.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
<div className="aspect-[16/9] bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp'}}></div>
<div className="p-6">
<div className="flex items-center gap-3">
<img alt="Luciana portrait" className="h-12 w-12 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-semibold tracking-tight">Luciana Herrero</div>
<div className="text-sm text-slate-400" data-en="Experience Architect" data-es="Arquitecta de Experiencias" data-i18n="">Experience Architect</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300" data-en="Designs immersive moments that accelerate learning, confidence, and creative collaboration." data-es="Diseña momentos inmersivos que aceleran el aprendizaje, la confianza y la colaboración creativa." data-i18n="">Designs immersive moments that accelerate learning, confidence, and creative collaboration.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20" id="details">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight" data-en="Event details" data-es="Detalles del evento" data-i18n="">Event details</h2>
<p className="mt-3 text-slate-300" data-en="Three live sessions with exercises, breakout rooms, and tools you can reuse." data-es="Tres sesiones en vivo con ejercicios, salas de trabajo y herramientas reutilizables." data-i18n="">Three live sessions with exercises, breakout rooms, and tools you can reuse.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="calendar-clock"></i>
<div className="font-medium" data-en="Schedule" data-es="Agenda" data-i18n="">Schedule</div>
</div>
<ul className="mt-3 text-sm text-slate-300 space-y-1.5">
<li>Sep 23 — <span className="text-slate-200">16:30–18:30 London</span></li>
<li>Sep 24 — <span className="text-slate-200">16:30–18:30 London</span></li>
<li>Sep 25 — <span className="text-slate-200">16:30–18:30 London</span></li>
<li className="text-slate-400">09:30–11:30 CDMX / San José</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="video"></i>
<div className="font-medium" data-en="Format" data-es="Formato" data-i18n="">Format</div>
</div>
<ul className="mt-3 text-sm text-slate-300 space-y-1.5">
<li data-en="Live online (Zoom), collaborative boards, guided exercises" data-es="En vivo online (Zoom), tableros colaborativos, ejercicios guiados" data-i18n="">Live online (Zoom), collaborative boards, guided exercises</li>
<li data-en="Resources delivered after each session" data-es="Recursos entregados después de cada sesión" data-i18n="">Resources delivered after each session</li>
<li data-en="Registration via Luma" data-es="Registro vía Luma" data-i18n="">Registration via Luma</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="badge-dollar-sign"></i>
<div className="font-medium" data-en="Investment" data-es="Inversión" data-i18n="">Investment</div>
</div>
<ul className="mt-3 text-sm text-slate-300 space-y-1.5">
<li data-en="$10 USD total (3 sessions)" data-es="$10 USD total (3 sesiones)" data-i18n="">$10 USD total (3 sessions)</li>
<li data-en="Limited to 15 participants" data-es="Limitado a 15 participantes" data-i18n="">Limited to 15 participants</li>
<li data-en="Certificates of completion" data-es="Certificado de participación" data-i18n="">Certificates of completion</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-10 md:py-16" id="register">
<div className="max-w-5xl mx-auto px-4 md:px-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
<div className="grid md:grid-cols-3">
<div className="p-6 md:p-8 md:col-span-2">
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span data-en="Premium yet accessible" data-es="Premium y accesible" data-i18n="">Premium yet accessible</span>
</div>
<h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight" data-en="Ready to time-travel your career?" data-es="¿Lista/o para viajar en el tiempo con tu carrera?" data-i18n="">Ready to time-travel your career?</h3>
<p className="mt-2 text-slate-300 max-w-xl" data-en="Register on Luma. You’ll receive access links and pre-work by email." data-es="Inscríbete en Luma. Recibirás enlaces y pre‑work por correo." data-i18n="">Register on Luma. You’ll receive access links and pre-work by email.</p>
<form className="mt-4 flex flex-col sm:flex-row gap-3" onsubmit="event.preventDefault(); window.open(lumaUrl,'_blank','noopener');">
<input className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder-slate-400 text-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" id="emailCapture" placeholder="you@domain.com" type="email"/>
<button className="px-5 py-3 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" id="ctaRegisterForm" type="submit">
<span data-en="Register on Luma — $10" data-es="Inscribirme en Luma — $10" data-i18n="">Register on Luma — $10</span>
</button>
</form>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span data-en="Secure checkout via Luma · Refunds available before start date" data-es="Pago seguro vía Luma · Reembolsos antes del inicio" data-i18n="">Secure checkout via Luma · Refunds available before start date</span>
</div>
</div>
<div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="users"></i>
<div className="font-medium" data-en="Spots" data-es="Cupos" data-i18n="">Spots</div>
</div>
<div className="mt-2 text-sm text-slate-300">
<div id="spotsWidget">Spots left: 15</div>
<div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" id="capacityBarSmall" style={{width: '0%'}}></div>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="languages"></i>
<div className="text-sm text-slate-300" data-en="Available in Spanish &amp; English" data-es="Disponible en Español e Inglés" data-i18n="">Available in Spanish &amp; English</div>
</div>
<div className="mt-6 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="badge-dollar-sign"></i>
<div className="text-sm text-slate-300" data-en="$10 covers all 3 sessions" data-es="$10 cubre las 3 sesiones" data-i18n="">$10 covers all 3 sessions</div>
</div>
<div className="mt-8">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm" id="shareBtn2">
<i className="w-4 h-4" data-lucide="send"></i>
<span data-en="Invite a friend" data-es="Invitar a un amigo" data-i18n="">Invite a friend</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20" id="testimonials">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight" data-en="What people say" data-es="Lo que dicen" data-i18n="">What people say</h2>
<p className="mt-3 text-slate-300" data-en="Early participants share how the simulation changed their perspective." data-es="Participantes tempranos comparten cómo la simulación cambió su perspectiva." data-i18n="">Early participants share how the simulation changed their perspective.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">María</div>
<div className="text-xs text-slate-400">CDMX</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300" data-en="It felt like stepping into my future and returning with a plan. Highly recommended." data-es="Se sintió como entrar a mi futuro y volver con un plan. Muy recomendable." data-i18n="">It felt like stepping into my future and returning with a plan. Highly recommended.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Juan</div>
<div className="text-xs text-slate-400">Bogotá</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300" data-en="Clear frameworks and creative energy. I left with decisions I can act on." data-es="Marcos claros y energía creativa. Salí con decisiones accionables." data-i18n="">Clear frameworks and creative energy. I left with decisions I can act on.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Ana</div>
<div className="text-xs text-slate-400">Buenos Aires</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300" data-en="The cohort vibe was powerful. I met peers who think like builders." data-es="La vibra del grupo fue poderosa. Conocí pares que piensan como builders." data-i18n="">The cohort vibe was powerful. I met peers who think like builders.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 grid place-items-center text-white/90">
<span className="font-semibold tracking-tight">NN</span>
</div>
<div>
<div className="font-semibold tracking-tight">Noon is Night</div>
<div className="text-xs text-slate-400" data-en="A futures simulation for young Latin American professionals." data-es="Una simulación de futuros para jóvenes profesionales de LATAM." data-i18n="">A futures simulation for young Latin American professionals.</div>
</div>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm" href="#" id="shareBtnFooter">
<i className="w-4 h-4" data-lucide="share-2"></i>
<span data-en="Share" data-es="Compartir" data-i18n="">Share</span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" href="https://lu.ma/noonisnight" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="ticket"></i>
<span data-en="Register" data-es="Inscribirme" data-i18n="">Register</span>
</a>
</div>
</div>
<div className="mt-6 text-xs text-slate-500 flex items-center justify-between">
<div>© <span id="year"></span> Noon is Night</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300 transition" data-en="Terms" data-es="Términos" data-i18n="" href="#">Terms</a>
<a className="hover:text-slate-300 transition" data-en="Privacy" data-es="Privacidad" data-i18n="" href="#">Privacy</a>
<button className="px-2 py-1 rounded border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition" id="adminOpen">Admin</button>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-40 hidden" id="adminModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-950 border-l border-white/10 p-6 overflow-y-auto">
<div className="flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight">Admin Panel</div>
<button className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:bg-white/10 transition" id="adminClose">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<p className="mt-2 text-sm text-slate-400">Manage capacity and registration link locally for preview/testing.</p>
<div className="mt-6 space-y-4">
<div>
<label className="text-sm text-slate-300">Luma Event URL</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" id="lumaInput" placeholder="https://lu.ma/your-event" type="url"/>
</div>
<div>
<label className="text-sm text-slate-300">Capacity (default 15)</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" id="capacityInput" max="200" min="1" type="number"/>
</div>
<div>
<label className="text-sm text-slate-300">Currently registered</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" id="registeredInput" min="0" type="number"/>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Disable registration when full</div>
<button className="px-3 py-1.5 text-xs rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="toggleLock">Toggle</button>
</div>
<div className="pt-2">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" id="saveAdmin">
<i className="w-4 h-4" data-lucide="save"></i>
<span>Save</span>
</button>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-200" id="resetAdmin">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
<span>Reset to defaults</span>
</button>
</div>
<div className="pt-4 text-xs text-slate-500">
            Settings are stored in your browser only (localStorage).
          </div>
</div>
</div>
</div>


    </>
  );
}
