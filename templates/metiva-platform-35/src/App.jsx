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



    // Utils
    const qs = (s, el = document) => el.querySelector(s);
    const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

    // Year
    qs('#year').textContent = new Date().getFullYear();

    // Router (hash-based)
    function showRoute(id) {
      qsa('main[data-route]').forEach(m => m.classList.add('hidden'));
      const target = qs(`main#${id}`);
      if (target) target.classList.remove('hidden');
      // Close mobile menu on navigation
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
      // Update hash without scroll jump
      if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Initialize route from hash
    function initRoute() {
      const id = location.hash?.replace('#', '') || 'progetti';
      showRoute(id);
    }

    // Nav links
    qsa('[data-nav-target]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('data-nav-target') || a.getAttribute('href')?.replace('#','');
        if (id) {
          e.preventDefault();
          showRoute(id);
        }
      });
    });
    window.addEventListener('hashchange', initRoute);
    initRoute();

    // Mobile menu
    const mobileBtn = qs('#mobile-menu-button');
    const mobileMenu = qs('#mobile-menu');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Projects: filters + search
    const cards = qsa('#projects-grid article');
    const filterBtns = qsa('#filters [data-filter]');
    const searchInput = qs('#search');
    let activeTag = 'all';
    let query = '';

    function matchesFilter(card) {
      if (activeTag === 'all') return true;
      const tags = (card.dataset.tags || '').toLowerCase().split(',');
      return tags.includes(activeTag);
    }
    function matchesSearch(card) {
      if (!query) return true;
      const text = card.innerText.toLowerCase();
      return text.includes(query);
    }
    function applyFilters() {
      cards.forEach(card => {
        const visible = matchesFilter(card) && matchesSearch(card);
        card.classList.toggle('hidden', !visible);
      });
    }
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeTag = btn.dataset.filter.toLowerCase();
        filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        filterBtns.forEach(b => {
          b.classList.toggle('bg-slate-900', b === btn);
          b.classList.toggle('text-white', b === btn);
          b.classList.toggle('bg-white', b !== btn);
          b.classList.toggle('text-slate-700', b !== btn);
        });
        applyFilters();
      });
    });
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        query = e.target.value.trim().toLowerCase();
        applyFilters();
      });
    }

    // FAQ search
    const faqInput = qs('#faq-search');
    const faqItems = qsa('#faq-list details');
    if (faqInput) {
      faqInput.addEventListener('input', e => {
        const q = e.target.value.trim().toLowerCase();
        faqItems.forEach(item => {
          const text = item.innerText.toLowerCase();
          item.classList.toggle('hidden', q && !text.includes(q));
        });
      });
    }

    // Login: toggle password
    const togglePw = qs('#toggle-password');
    const pwInput = qs('#password');
    if (togglePw && pwInput) {
      togglePw.addEventListener('click', () => {
        const isPw = pwInput.type === 'password';
        pwInput.type = isPw ? 'text' : 'password';
        togglePw.setAttribute('aria-label', isPw ? 'Nascondi password' : 'Mostra password');
        // swap eye/eye-off icon
        togglePw.innerHTML = isPw
          ? '<i data-lucide="eye-off" class="h-4 w-4"></i>'
          : '<i data-lucide="eye" class="h-4 w-4"></i>';
        lucide.createIcons();
      });
    }

    // Modal: accessible dialog
    const modal = qs('#project-modal');
    const overlay = modal?.firstElementChild;
    const dialog = modal?.querySelector('.w-full.max-w-3xl.rounded-2xl.bg-white');
    const closeBtn = modal?.querySelector('[data-modal-close]');
    let lastFocused = null;

    function setupDialogA11y() {
      if (!dialog) return;
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      dialog.setAttribute('aria-labelledby', 'project-modal-title');
      dialog.tabIndex = -1;
    }
    setupDialogA11y();

    function getFocusable(container) {
      return qsa('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])', container)
        .filter(el => el.offsetParent !== null);
    }

    function openModal() {
      if (!modal) return;
      lastFocused = document.activeElement;
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const f = getFocusable(dialog);
      (f[0] || closeBtn || dialog).focus();
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    // Open from project cards
    qsa('#projects-grid [aria-label="Dettagli"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openModal();
      });
    });

    // Close interactions
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (modal?.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'Tab') {
        const f = getFocusable(dialog);
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    });

    // Icons
    lucide.createIcons();
  
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a aria-label="Metiva Platform - Home" className="inline-flex items-center gap-3 group" href="#progetti">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center ring-1 ring-slate-900/10 shadow-sm">
<span className="text-sm font-semibold tracking-tight">M</span>
</div>
<div className="leading-tight">
<div className="text-base font-semibold tracking-tight">Metiva Platform</div>
<div className="text-[11px] text-slate-500">Mobilità europea</div>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition" data-nav-target="chi-siamo" href="#chi-siamo">
<i className="h-4 w-4" data-lucide="users"></i>
<span className="font-medium">Chi siamo</span>
</a>
<a className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition" data-nav-target="progetti" href="#progetti">
<i className="h-4 w-4" data-lucide="grid"></i>
<span className="font-medium">Progetti</span>
</a>
<a className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition" data-nav-target="erasmus" href="#erasmus">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span className="font-medium">Erasmus Imprenditoriale</span>
</a>
<a className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition" data-nav-target="crm" href="#crm">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="font-medium">CRM</span>
</a>
<a className="ml-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white ring-1 ring-slate-900/10 hover:bg-slate-900/90 transition" data-nav-target="login" href="#login">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span className="font-medium tracking-tight">Login</span>
</a>
</nav>

<button aria-label="Apri menu" className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition" id="mobile-menu-button">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobile-menu">
<div className="px-4 py-6 space-y-2">
<a className="block px-3 py-3 rounded-lg text-slate-900 bg-slate-50 font-medium" data-nav-target="chi-siamo" href="#chi-siamo">Chi siamo</a>
<a className="block px-3 py-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition font-medium" data-nav-target="progetti" href="#progetti">Progetti</a>
<a className="block px-3 py-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition font-medium" data-nav-target="erasmus" href="#erasmus">Erasmus Imprenditoriale</a>
<a className="block px-3 py-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition font-medium" data-nav-target="crm" href="#crm">CRM</a>
<div className="pt-4 border-t border-slate-200">
<a className="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition" data-nav-target="login" href="#login">Accedi alla piattaforma</a>
</div>
</div>
</div>
</header>

<main className="relative" data-route="" id="progetti">

<section className="py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Progetti di mobilità</h1>
<p className="mt-4 text-base leading-relaxed text-slate-600">
            Opportunità di scambio imprenditoriale in tutta Europa. Filtra, cerca e trova il progetto perfetto per i tuoi obiettivi.
          </p>
</div>

<div className="mt-10 grid gap-4 md:grid-cols-12">
<div className="md:col-span-6">
<label className="block text-xs text-slate-500 mb-2">Cerca</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 ring-offset-2 focus-within:ring-2 focus-within:ring-slate-900/10">
<i className="h-4 w-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-transparent placeholder:text-slate-400 outline-none text-sm text-slate-900" id="search" placeholder="Cerca per titolo, città, descrizione.." type="text"/>
</div>
</div>
<div className="md:col-span-6">
<label className="block text-xs text-slate-500 mb-2">Filtri rapidi</label>
<div className="flex flex-wrap items-center gap-2" id="filters">
<button aria-pressed="true" className="px-3.5 py-2 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-slate-900/90 transition" data-filter="all">Tutti</button>
<button className="px-3.5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50" data-filter="marketing">Marketing</button>
<button className="px-3.5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50" data-filter="tech">Tech</button>
<button className="px-3.5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50" data-filter="design">Design</button>
<button className="px-3.5 py-2 rounded-full text-sm font-medium bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50" data-filter="bizdev">Business Dev</button>
</div>
</div>
</div>

<div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3" id="projects-grid">

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition" data-tags="marketing,bizdev">
<div className="relative">
<img alt="Startup GreenTech" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="map-pin"></i> Milano, IT
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="timer"></i> 4 mesi
                </span>
</div>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">Startup GreenTech</h3>
<p className="mt-2 text-sm text-slate-600">Soluzioni sostenibili per l'energia rinnovabile. Focus su marketing digitale e sviluppo business.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-slate-100 px-2.5 py-1">Marketing</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">BizDev</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">2 posti</span>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-900/90 transition">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
                </button>
<button aria-label="Dettagli" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition" data-tags="design">
<div className="relative">
<img alt="Design Studio" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="map-pin"></i> Barcellona, ES
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="timer"></i> 3 mesi
                </span>
</div>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">Design Studio</h3>
<p className="mt-2 text-sm text-slate-600">Studio innovativo specializzato in UX/UI per startup tech. Esperienza con clienti internazionali.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-slate-100 px-2.5 py-1">UX/UI</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">1 posto</span>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-900/90 transition">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
                </button>
<button aria-label="Dettagli" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition" data-tags="bizdev">
<div className="relative">
<img alt="FoodTech Lab" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="map-pin"></i> Berlino, DE
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="timer"></i> 6 mesi
                </span>
</div>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">FoodTech Lab</h3>
<p className="mt-2 text-sm text-slate-600">Innovazione alimentare: sostenibilità e tecnologie emergenti nel settore food.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-slate-100 px-2.5 py-1">BizDev</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">3 posti</span>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-900/90 transition">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
                </button>
<button aria-label="Dettagli" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition" data-tags="product,fintech">
<div className="relative">
<img alt="FinTech Startup" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="map-pin"></i> Amsterdam, NL
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="timer"></i> 5 mesi
                </span>
</div>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">FinTech Startup</h3>
<p className="mt-2 text-sm text-slate-600">Pagamenti digitali per PMI: prodotto, crescita e partnership strategiche.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-slate-100 px-2.5 py-1">Product</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">2 posti</span>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-900/90 transition">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
                </button>
<button aria-label="Dettagli" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition" data-tags="marketing,ecommerce">
<div className="relative">
<img alt="E-commerce Platform" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="map-pin"></i> Lisbona, PT
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="timer"></i> 4 mesi
                </span>
</div>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">E-commerce Platform</h3>
<p className="mt-2 text-sm text-slate-600">Piattaforma B2B europea. Focus su digital marketing e customer acquisition.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-slate-100 px-2.5 py-1">Marketing</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">1 posto</span>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-900/90 transition">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
                </button>
<button aria-label="Dettagli" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition" data-tags="tech,health">
<div className="relative">
<img alt="HealthTech Innovation" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="map-pin"></i> Vienna, AT
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs ring-1 ring-slate-200 text-slate-700">
<i className="h-4 w-4" data-lucide="timer"></i> 5 mesi
                </span>
</div>
</div>
<div className="p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">HealthTech Innovation</h3>
<p className="mt-2 text-sm text-slate-600">Soluzioni digitali per la sanità: app e piattaforme per migliorare l'esperienza paziente.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-slate-100 px-2.5 py-1">Tech</span>
<span className="rounded-full bg-slate-100 px-2.5 py-1">2 posti</span>
</div>
<div className="mt-5 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white font-medium hover:bg-slate-900/90 transition">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
                </button>
<button aria-label="Dettagli" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 ring-1 ring-slate-200 text-slate-900 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
</div>
</article>
</div>

<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-901 ring-1 ring-slate-200 hover:bg-slate-50 transition">
<i className="h-4 w-4" data-lucide="plus"></i>
<span className="font-medium">Carica altri progetti</span>
</button>
</div>
</div>
</section>
</main>

<main className="hidden" data-route="" id="erasmus">

<section className="py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
<div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Erasmus per Giovani Imprenditori</h1>
<p className="mt-4 text-base leading-relaxed text-slate-600">Scambio che connette nuovi imprenditori con imprenditori esperti in Europa per 1–6 mesi di formazione sul campo.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white font-medium tracking-tight hover:bg-slate-900/90 transition" href="#progetti">
<i className="h-5 w-5" data-lucide="compass"></i> Scopri i progetti
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 transition" href="#chi-siamo">
<i className="h-5 w-5" data-lucide="users"></i> Scopri chi siamo
            </a>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-slate-200 overflow-hidden">
<img alt="Giovani imprenditori in networking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
<div>
<div className="text-3xl font-semibold tracking-tight">13.850+</div>
<div className="text-sm text-slate-600 mt-1">Scambi completati</div>
</div>
<div className="border-y sm:border-y-0 sm:border-x border-slate-200 py-6 sm:py-0">
<div className="text-3xl font-semibold tracking-tight">25.000+</div>
<div className="text-sm text-slate-600 mt-1">Candidature ricevute</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight">40+</div>
<div className="text-sm text-slate-600 mt-1">Paesi coinvolti</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Chi può partecipare</h2>
<div className="mt-6 space-y-6">
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="h-4 w-4 text-slate-600" data-lucide="user-check"></i>
</div>
<div>
<h3 className="font-medium">Nuovi imprenditori</h3>
<p className="text-sm text-slate-600 mt-1">Meno di 3 anni di attività o aspiranti con business plan solido.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="h-4 w-4 text-slate-600" data-lucide="heart"></i>
</div>
<div>
<h3 className="font-medium">Motivazione forte</h3>
<p className="text-sm text-slate-600 mt-1">Impegno a sviluppare competenze e far crescere il proprio business.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="h-4 w-4 text-slate-600" data-lucide="calendar"></i>
</div>
<div>
<h3 className="font-medium">Disponibilità temporale</h3>
<p className="text-sm text-slate-600 mt-1">Da 1 a 6 mesi presso un imprenditore ospitante.</p>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Vantaggi del programma</h2>
<div className="mt-6 space-y-6">
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="h-4 w-4 text-slate-600" data-lucide="users"></i>
</div>
<div>
<h3 className="font-medium">Mentorship qualificata</h3>
<p className="text-sm text-slate-600 mt-1">Accesso a imprenditori esperti e networking europeo.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="h-4 w-4 text-slate-600" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="font-medium">Competenze pratiche</h3>
<p className="text-sm text-slate-600 mt-1">Esperienza hands-on su mercato, vendite, finanza e crescita.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<i className="h-4 w-4 text-slate-600" data-lucide="award"></i>
</div>
<div>
<h3 className="font-medium">Certificazione ufficiale</h3>
<p className="text-sm text-slate-600 mt-1">Youthpass digitale e portfolio di evidenze.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Come funziona il processo</h2>
<p className="mt-2 text-sm text-slate-600">5 step chiari per partecipare</p>
</div>
<div className="grid gap-8 md:grid-cols-5">
<div className="text-center">
<div className="mx-auto w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold mb-4">1</div>
<h3 className="font-medium mb-1">Candidatura</h3>
<p className="text-sm text-slate-600">Invia il tuo profilo e la tua idea imprenditoriale.</p>
</div>
<div className="text-center">
<div className="mx-auto w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold mb-4">2</div>
<h3 className="font-medium mb-1">Matching</h3>
<p className="text-sm text-slate-600">Ti abbiniamo all’host più adatto.</p>
</div>
<div className="text-center">
<div className="mx-auto w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold mb-4">3</div>
<h3 className="font-medium mb-1">Preparazione</h3>
<p className="text-sm text-slate-600">Documenti, budget e milestone nel CRM.</p>
</div>
<div className="text-center">
<div className="mx-auto w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold mb-4">4</div>
<h3 className="font-medium mb-1">Scambio</h3>
<p className="text-sm text-slate-600">Impara sul campo con il mentor.</p>
</div>
<div className="text-center">
<div className="mx-auto w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold mb-4">5</div>
<h3 className="font-medium mb-1">Certificazione</h3>
<p className="text-sm text-slate-600">Ottieni lo Youthpass digitale.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Domande frequenti</h2>
<p className="mt-2 text-sm text-slate-600">Trova rapidamente risposte su requisiti, durata e finanziamento.</p>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
<div className="w-full sm:max-w-xs">
<label className="sr-only" htmlFor="faq-search">Cerca nelle FAQ</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 ring-offset-2 focus-within:ring-2 focus-within:ring-slate-900/10">
<i className="h-4 w-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-transparent placeholder:text-slate-400 outline-none text-sm text-slate-900" id="faq-search" placeholder="Cerca nelle FAQ.." type="text"/>
</div>
</div>
</div>

<div className="space-y-4" id="faq-list">
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:bg-slate-50 open:border-slate-300">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="help-circle"></i>
<span className="font-medium text-slate-900">Quanto dura il programma?</span>
</div>
<i className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-slate-600">Da 1 a 6 mesi in base al progetto e agli accordi con l’host. Media: 3–4 mesi.</div>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:bg-slate-50 open:border-slate-300">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="help-circle"></i>
<span className="font-medium text-slate-900">Il programma è finanziato?</span>
</div>
<i className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-slate-600">Sì, supporto per spese di viaggio, alloggio e sussistenza durante lo scambio.</div>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:bg-slate-50 open:border-slate-300">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="help-circle"></i>
<span className="font-medium text-slate-900">Quali settori sono coperti?</span>
</div>
<i className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-slate-600">Tecnologia, marketing, design, food, fintech, sostenibilità, e-commerce, sanità e altro.</div>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:bg-slate-50 open:border-slate-300">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="help-circle"></i>
<span className="font-medium text-slate-900">Come funziona il matching?</span>
</div>
<i className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-slate-600">Algoritmi che incrociano competenze, obiettivi e settore con gli host più adatti.</div>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:bg-slate-50 open:border-slate-300">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="help-circle"></i>
<span className="font-medium text-slate-900">Serve un livello minimo di lingua?</span>
</div>
<i className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-slate-600">È consigliato un livello B1–B2 nella lingua di lavoro (solitamente inglese). I requisiti possono variare in base all’host.</div>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-5 open:bg-slate-50 open:border-slate-300">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="help-circle"></i>
<span className="font-medium text-slate-900">Quando devo candidarmi?</span>
</div>
<i className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 text-sm text-slate-600">Idealmente 6–8 settimane prima della data di partenza, per permettere matching e pratiche amministrative.</div>
</details>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pronto a iniziare?</h2>
<p className="mt-4 text-slate-600">Esplora i progetti disponibili e avvia il tuo percorso imprenditoriale europeo.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white font-medium tracking-tight hover:bg-slate-900/90 transition" href="#progetti">
<i className="h-5 w-5" data-lucide="search"></i> Esplora progetti
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-slate-900 font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 transition" href="#chi-siamo">
<i className="h-5 w-5" data-lucide="info"></i> Scopri di più su di noi
          </a>
</div>
</div>
</section>
</main>

<main className="hidden" data-route="" id="chi-siamo">

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div className="mx-auto max-w-3xl text-center lg:text-left">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-600">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
              La piattaforma per la mobilità europea
            </div>
<h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Chi siamo</h1>
<p className="mt-4 text-slate-600 text-base leading-relaxed">
              Metiva Platform semplifica l'Erasmus per Giovani Imprenditori e la mobilità europea, rendendo accessibili a tutti opportunità di crescita internazionale.
            </p>
</div>
<div className="relative">
<div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
<img alt="Il nostro ufficio" className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-xl object-cover" src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 left-4 rounded-lg bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 shadow-sm">
<i className="mr-2 h-4 w-4" data-lucide="building-2"></i> Il nostro ufficio
            </div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-b border-slate-200/80 bg-slate-50">
<div className="mx-auto max-w-7zl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">La nostra missione</h2>
<p className="mt-5 text-slate-600 leading-relaxed">
              Crediamo che ogni giovane imprenditore meriti l'opportunità di crescere attraverso esperienze internazionali. Metiva Platform nasce per democratizzare l'accesso ai programmi Erasmus+ e di mobilità europea, eliminando le barriere burocratiche e semplificando ogni step del processo.
            </p>
<div className="mt-8 space-y-5">
<div className="flex items-start gap-3.5">
<div className="flex-shrink-0 h-7 w-7 rounded-full ring-1 ring-slate-200 bg-white flex items-center justify-center">
<i className="h-3.5 w-3.5 text-slate-900" data-lucide="target"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Democratizzare l'accesso</h3>
<p className="text-sm text-slate-600 mt-1">Rendere l'Erasmus Imprenditoriale accessibile a tutti, indipendentemente dalla provenienza o dal background.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="flex-shrink-0 h-7 w-7 rounded-full ring-1 ring-slate-200 bg-white flex items-center justify-center">
<i className="h-3.5 w-3.5 text-slate-900" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Semplificare il processo</h3>
<p className="text-sm text-slate-600 mt-1">Ridurre la complessità burocratica con tecnologia e automazione intelligente.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="flex-shrink-0 h-7 w-7 rounded-full ring-1 ring-slate-200 bg-white flex items-center justify-center">
<i className="h-3.5 w-3.5 text-slate-900" data-lucide="users"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Creare connessioni</h3>
<p className="text-sm text-slate-600 mt-1">Facilitare il matching tra giovani imprenditori e mentor esperti in tutta Europa.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-slate-200 bg-white p-2">
<img alt="Team Metiva Platform" className="w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 -left-4 rounded-lg bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 shadow-sm">
<i className="mr-2 h-4 w-4 inline text-rose-500" data-lucide="heart"></i> Team dedicato alla tua crescita
            </div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Cosa facciamo</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">Una suite di strumenti per gestire ogni aspetto della tua esperienza di mobilità europea.</p>
</div>
<div className="mt-12 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="workflow"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">CRM Integrato</h3>
<p className="mt-2 text-sm text-slate-600">Gestisci candidature, documenti, milestone e comunicazioni in un'unica dashboard.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Tracking candidature in tempo reale</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Gestione documenti sicura</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Comunicazione diretta con host</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Youthpass digitale integrato</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Matching Intelligente</h3>
<p className="mt-2 text-sm text-slate-600">Algoritmi avanzati per trovare il mentor perfetto basandosi su competenze e obiettivi.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Analisi AI delle competenze</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Score di compatibilità</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Suggerimenti personalizzati</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Matching per settore</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Community Europea</h3>
<p className="mt-2 text-sm text-slate-600">Network di oltre 2.400 giovani imprenditori per networking e supporto reciproco.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Eventi esclusivi</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Mentorship peer-to-peer</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Newsletter curata</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Supporto progetti Erasmus+</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Gestione Documenti</h3>
<p className="mt-2 text-sm text-slate-600">Repository sicuro con firme digitali e backup automatico.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Storage criptato GDPR</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Firme digitali integrate</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Versioning automatico</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Condivisione controllata</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="award"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Youthpass Digitale</h3>
<p className="mt-2 text-sm text-slate-600">Portfolio digitale delle competenze con certificazione automatica.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Upload e archiviazione</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Tracciamento competenze</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Portfolio organizzato</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Condivisione professionale</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="life-buoy"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Supporto Completo</h3>
<p className="mt-2 text-sm text-slate-600">Assistenza dedicata per progetti Erasmus+ ed Erasmus Imprenditoriale.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Consulenza personalizzata</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Supporto burocratico</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Training pre-partenza</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Follow-up post-ritorno</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative border-t border-b border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pronti per il lancio</h2>
<p className="mt-4 text-slate-600">La piattaforma è pronta per i primi progetti Erasmus+</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight">0</div>
<div className="text-sm text-slate-600">Scambi completati</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight">0</div>
<div className="text-sm text-slate-600">Candidature gestite</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight">0</div>
<div className="text-sm text-slate-600">Membri community</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tight">0</div>
<div className="text-sm text-slate-600">Paesi coinvolti</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Il nostro team</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">Esperti in mobilità europea, tecnologia e imprenditoria, uniti dalla passione per l'innovazione sociale.</p>
</div>
<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="text-center rounded-xl ring-1 ring-slate-200 p-6 bg-white">
<img alt="Marco Rossi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<h3 className="font-semibold tracking-tight">Marco Rossi</h3>
<p className="text-sm text-slate-600 mb-2">CEO &amp; Founder</p>
<p className="text-xs text-slate-500">Ex-Erasmus Imprenditoriale, esperto in mobilità europea e startup tech.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-slate-900 text-sm font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:marco.rossi@metiva.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                LinkedIn
              </a>
</div>
</div>

<div className="text-center rounded-xl ring-1 ring-slate-200 p-6 bg-white">
<img alt="Sofia Bianchi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<h3 className="font-semibold tracking-tight">Sofia Bianchi</h3>
<p className="text-sm text-slate-600 mb-2">CTO</p>
<p className="text-xs text-slate-500">Sviluppatrice full-stack, specializzata in AI e machine learning per il matching.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-slate-900 text-sm font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:sofia.bianchi@metiva.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                LinkedIn
              </a>
</div>
</div>

<div className="text-center rounded-xl ring-1 ring-slate-200 p-6 bg-white">
<img alt="Alessandro Verdi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<h3 className="font-semibold tracking-tight">Alessandro Verdi</h3>
<p className="text-sm text-slate-600 mb-2">Head of Community</p>
<p className="text-xs text-slate-500">Esperto in networking internazionale e gestione community di giovani imprenditori.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-slate-900 text-sm font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:alessandro.verdi@metiva.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                LinkedIn
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pronto a iniziare il tuo percorso?</h2>
<p className="mt-4 text-slate-600">Unisciti a tanti giovani imprenditori che scelgono Metiva Platform per la crescita internazionale.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-white font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 transition" href="#progetti">
<i className="h-5 w-5" data-lucide="compass"></i>
            Scopri i progetti
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-slate-900 font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:info@metiva.com">
<i className="h-5 w-5" data-lucide="send"></i>
            Contattaci
          </a>
</div>
</div>
</section>
</main>

<main className="hidden" data-route="" id="crm">
<section className="py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">CRM per la mobilità</h1>
<p className="mt-4 text-base leading-relaxed text-slate-600">Gestisci candidature, documenti, milestone e budget in un’unica piattaforma.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="inbox"></i>
</div>
<h3 className="mt-4 font-semibold tracking-tight">Pipeline candidature</h3>
<p className="mt-2 text-sm text-slate-600">Stati personalizzati, note e assegnazioni team.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="file-check"></i>
</div>
<h3 className="mt-4 font-semibold tracking-tight">Documenti &amp; compliance</h3>
<p className="mt-2 text-sm text-slate-600">Checklist, modelli e firme digitali integrate.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="flag"></i>
</div>
<h3 className="mt-4 font-semibold tracking-tight">Milestone &amp; risultati</h3>
<p className="mt-2 text-sm text-slate-600">Definizione obiettivi, tracking avanzato, esportazione report.</p>
</div>
</div>
<div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="h-4 w-4" data-lucide="shield-check"></i> Sicurezza e privacy by design
            </div>
<div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="lock"></i>Crittografia in transito e a riposo</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="key-round"></i>Controlli granulari degli accessi</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="globe"></i>Hosting europeo, conformità GDPR</li>
</ul>
</div>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white font-medium tracking-tight hover:bg-slate-900/90 transition" href="#login">
<i className="h-5 w-5" data-lucide="log-in"></i> Accedi ora
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 transition" href="#progetti">
<i className="h-5 w-5" data-lucide="grid"></i> Vedi progetti
              </a>
</div>
</div>
<div className="rounded-2xl border border-slate-200 overflow-hidden">
<img alt="Schermata CRM" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521790945508-bf2a36314e85?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>
</main>

<main className="hidden" data-route="" id="login">
<section className="py-16 md:py-24">
<div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Accedi alla piattaforma</h1>
</div>
<form className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
<div>
<label className="block text-xs text-slate-500 mb-2" htmlFor="email">Email</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 ring-offset-2 focus-within:ring-2 focus-within:ring-slate-900/10">
<i className="h-4 w-4 text-slate-500" data-lucide="mail"></i>
<input autocomplete="email" className="w-full bg-transparent placeholder:text-slate-400 outline-none text-sm text-slate-900" id="email" inputmode="email" placeholder="tuo.nome@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-2" htmlFor="password">Password</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 ring-offset-2 focus-within:ring-2 focus-within:ring-slate-900/10">
<i className="h-4 w-4 text-slate-500" data-lucide="lock"></i>
<input autocomplete="current-password" className="w-full bg-transparent placeholder:text-slate-400 outline-none text-sm text-slate-900" id="password" placeholder="••••••••" type="password"/>
<button aria-label="Mostra password" className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" id="toggle-password" type="button">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer select-none">
<input className="peer sr-only" id="remember" type="checkbox"/>
<span className="w-10 h-6 rounded-full bg-slate-200 peer-checked:bg-slate-900 transition relative">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white ring-1 ring-slate-200 transition peer-checked:translate-x-4"></span>
</span>
              Ricordami
            </label>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">Password dimenticata?</a>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white font-medium tracking-tight hover:bg-slate-900/90 transition" type="submit">
<i className="h-5 w-5" data-lucide="log-in"></i> Accedi
          </button>
</form>
<p className="mt-4 text-center text-sm text-slate-600">
          Non hai un account?
          <a className="text-slate-900 hover:underline" href="#progetti">Scopri i progetti</a>
</p>
</div>
</section>
</main>

<div aria-hidden="true" className="fixed inset-0 z-[70] hidden" id="project-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
<div className="relative z-[71] flex min-h-full items-end sm:items-center justify-center p-4">
<div className="w-full max-w-3xl rounded-2xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden">

<div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4 border-b border-slate-200">
<div className="min-w-0">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Erasmus+ KA153-YOU • Training Course
            </div>
<h2 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight truncate" id="project-modal-title">
              Empower and Facilitate — Info progetto
            </h2>
</div>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-white text-sm font-medium tracking-tight hover:bg-slate-900/90 transition" href="#login">
<i className="h-4 w-4" data-lucide="send"></i> Candidati
            </a>
<button aria-label="Chiudi dialog" className="inline-flex items-center justify-center rounded-lg px-2.5 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition" data-modal-close="" type="button">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
</div>

<div className="max-h-[75vh] overflow-y-auto px-5 sm:px-6 py-4 space-y-8">

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Dati principali</h3>
<div className="grid sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="map-pin"></i>
</div>
<div>
<div className="font-medium">Luogo</div>
<div className="text-slate-600">Ivancice, Repubblica Ceca</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="building-2"></i>
</div>
<div>
<div className="font-medium">Organizzazione ospitante</div>
<div className="text-slate-600">Horizont - stredisko volneho casu Ivanice (Zemdlsk 6192, 66491 Ivanice)</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="languages"></i>
</div>
<div>
<div className="font-medium">Lingua di lavoro</div>
<div className="text-slate-600">Inglese</div>
</div>
</div>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Date</h3>
<div className="grid sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="plane-arrival"></i>
</div>
<div>
<div className="font-medium">Giorno di arrivo</div>
<div className="text-slate-600">25 settembre 2025 (giovedì)</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="plane-takeoff"></i>
</div>
<div>
<div className="font-medium">Giorno di partenza</div>
<div className="text-slate-600">3 ottobre 2025 (venerdì)</div>
</div>
</div>
<div className="flex items-start gap-3 sm:col-span-2">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="calendar-range"></i>
</div>
<div>
<div className="font-medium">Giorni di attività</div>
<div className="text-slate-600">26 settembre – 2 ottobre 2025</div>
</div>
</div>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Descrizione progetto</h3>
<p className="text-sm text-slate-700">
              Progetto Erasmus+ KA153-YOU per incrementare le competenze di youth worker tramite due corsi di formazione.
            </p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check"></i><span>Focus su facilitazione, educazione non formale e metodi creativi: gamification, teatro, visualizzazione.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check"></i><span>Sviluppo di una comunità di pratica tra formatori europei.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check"></i><span>Obiettivi: rafforzare le competenze di facilitazione, introdurre strumenti creativi, promuovere inclusione sociale e cittadinanza attiva, creare una rete sostenibile di trainer.</span></li>
</ul>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y &lt;section class=" space-y-3"="">
<h3 className="text-lg font-semibold tracking-tight">Corsi di formazione</h3>
<div className="grid gap-4 md:grid-cols-2">

<div className="rounded-xl ring-1 ring-slate-200 p-4 bg-white">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Training Course 1
                </div>
<h4 className="mt-1 font-semibold tracking-tight">Empower</h4>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="sparkles"></i><span>Metodi creativi: gamification, teatro, visual facilitation.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="users"></i><span>Gestione gruppi e dinamiche di partecipazione.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i><span>Progettazione di attività non formali.</span></li>
</ul>
</div>

<div className="rounded-xl ring-1 ring-slate-200 p-4 bg-white">
<div className="inline-flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="handshake"></i>
                  Training Course 2
                </div>
<h4 className="mt-1 font-semibold tracking-tight">Facilitate</h4>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="compass"></i><span>Ruolo del facilitatore e setting dell’apprendimento.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="messages-square"></i><span>Comunicazione efficace e feedback.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="file-certificate"></i><span>Valutazione dei risultati e Youthpass.</span></li>
</ul>
</div>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Partecipanti e requisiti</h3>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="user-check"></i><span>18+ anni, residenti in un Paese del programma Erasmus+.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="languages"></i><span>Buona conoscenza dell’inglese (B1–B2).</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="heart"></i><span>Motivazione a lavorare con giovani e comunità locali.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="target"></i><span>Interesse per educazione non formale, facilitazione, inclusione.</span></li>
</ul>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Costi coperti</h3>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-lg ring-1 ring-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="wallet"></i>
</div>
<div className="mt-3 text-sm">
<div className="font-medium">Contributo Erasmus+</div>
<div className="text-slate-600">Supporto per viaggio e sussistenza.</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="bed-double"></i>
</div>
<div className="mt-3 text-sm">
<div className="font-medium">Alloggio</div>
<div className="text-slate-600">Camere condivise in ostello/centro formazione.</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="utensils"></i>
</div>
<div className="mt-3 text-sm">
<div className="font-medium">Pasti</div>
<div className="text-slate-600">3 pasti al giorno + coffee breaks.</div>
</div>
</div>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Viaggio e rimborso</h3>
<p className="text-sm text-slate-700">
              I partecipanti prenotano il viaggio in autonomia in accordo con l’organizzazione ospitante. Il rimborso avviene secondo i massimali Erasmus+, dietro presentazione di biglietti, boarding pass e fatture.
            </p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="plane"></i><span>Arrivo consigliato: Aeroporto di Brno o Vienna.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="ticket"></i><span>Conserva tutte le ricevute originali per il rimborso.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="leaf"></i><span>Preferenza per opzioni di viaggio sostenibili quando possibile.</span></li>
</ul>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Alloggio e pasti</h3>
<p className="text-sm text-slate-700">
              Sistemazione in camere condivise con servizi inclusi. Pasti bilanciati forniti dall’host. Indicare eventuali esigenze alimentari nel form di candidatura.
            </p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="concierge-bell"></i><span>Opzioni vegetariane/vegane e senza glutine disponibili su richiesta.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="wifi"></i><span>Wi‑Fi nelle aree comuni.</span></li>
</ul>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Cosa portare</h3>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="notebook-pen"></i><span>Taccuino e penna, laptop (opzionale ma consigliato).</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="id-card"></i><span>Documento d’identità valido e tessera sanitaria europea.</span></li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="thermometer-snowflake"></i><span>Abbigliamento comodo e adatto al meteo.</span></li>
</ul>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Contatti</h3>
<div className="grid sm:grid-cols-2 gap-3 text-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="mail"></i>
</div>
<div>
<div className="font-medium">Email</div>
<a className="text-slate-600 hover:text-slate-900" href="mailto:info@horizont.cz">info@horizont.cz</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="phone"></i>
</div>
<div>
<div className="font-medium">Telefono</div>
<a className="text-slate-600 hover:text-slate-900" href="tel:+420000000000">+420 000 000 000</a>
</div>
</div>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight">Documenti utili</h3>
<div className="grid gap-3 sm:grid-cols-2">
<a className="group flex items-center justify-between rounded-lg ring-1 ring-slate-200 bg-white p-4 hover:bg-slate-50 transition" href="#">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm font-medium">Infopack PDF</div>
<div className="text-xs text-slate-600">Dettagli completi del progetto</div>
</div>
</div>
<i className="h-5 w-5 text-slate-500 group-hover:text-slate-700" data-lucide="download"></i>
</a>
<a className="group flex items-center justify-between rounded-lg ring-1 ring-slate-200 bg-white p-4 hover:bg-slate-50 transition" href="#">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="clipboard-list"></i>
</div>
<div>
<div className="text-sm font-medium">Application form</div>
<div className="text-xs text-slate-600">Invia la tua candidatura</div>
</div>
</div>
<i className="h-5 w-5 text-slate-500 group-hover:text-slate-700" data-lucide="external-link"></i>
</a>
</div>
</section>
</div>
</div>
</div>
</div>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-sm text-slate-600">
          © <span id="year"></span> Metiva Platform. Tutti i diritti riservati.
        </div>
<div className="flex items-center gap-5 text-sm text-slate-600">
<a className="hover:text-slate-900" data-nav-target="chi-siamo" href="#chi-siamo">Chi siamo</a>
<a className="hover:text-slate-900" data-nav-target="progetti" href="#progetti">Progetti</a>
<a className="hover:text-slate-900" data-nav-target="erasmus" href="#erasmus">Erasmus</a>
<a className="hover:text-slate-900" data-nav-target="crm" href="#crm">CRM</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
