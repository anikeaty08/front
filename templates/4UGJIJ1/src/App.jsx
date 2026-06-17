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
      
      // Initialize lucide icons with stroke-width 1.5
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Language selection
      document.addEventListener('click', function (e) {
        const btn = e.target.closest('.lang-option');
        if (!btn) return;
        const details = btn.closest('details');
        const all = details.querySelectorAll('.lang-option i[data-lucide="check"]');
        all.forEach(i => i.classList.add('opacity-0'));
        const check = btn.querySelector('i[data-lucide="check"]');
        if (check) check.classList.remove('opacity-0');
        const code = btn.getAttribute('data-lang');
        const label = document.getElementById('currentLang');
        if (label) label.textContent = code === 'FR' ? 'FR' : code;
        details.removeAttribute('open');
      });

      // Contribution filters
      const container = document.getElementById('contribList');
      const btnRecent = document.getElementById('filterRecent');
      const btnLiked = document.getElementById('filterLiked');

      function setActive(btn) {
        [btnRecent, btnLiked].forEach(b => b.classList.remove('bg-slate-100'));
        btn.classList.add('bg-slate-100');
      }

      function sortContribs(by) {
        const items = Array.from(container.querySelectorAll('.contrib-item'));
        items.sort((a,b) => {
          const av = Number(a.dataset[by]);
          const bv = Number(b.dataset[by]);
          return bv - av;
        });
        items.forEach(it => container.appendChild(it));
      }

      if (btnRecent && btnLiked) {
        btnRecent.addEventListener('click', () => {
          setActive(btnRecent);
          sortContribs('time');
        });
        btnLiked.addEventListener('click', () => {
          setActive(btnLiked);
          sortContribs('likes');
        });
      }

      // Poll vote confirmation
      document.querySelectorAll('.poll-form').forEach(form => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const thanks = form.querySelector('.poll-thanks');
          if (thanks) {
            thanks.classList.remove('hidden');
            setTimeout(() => thanks.classList.add('hidden'), 3000);
          }
        });
      });

      // Idea form
      const ideaForm = document.getElementById('ideaForm');
      const ideaToast = document.getElementById('ideaToast');
      if (ideaForm) {
        ideaForm.addEventListener('submit', (e) => {
          e.preventDefault();
          ideaForm.reset();
          if (ideaToast) {
            ideaToast.classList.remove('hidden');
            setTimeout(() => ideaToast.classList.add('hidden'), 3500);
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow-md focus:ring-2 focus:ring-green-600/40" href="#main">Aller au contenu</a>

<div className="w-full bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 h-1.5"></div>

<header className="bg-white sticky top-0 z-40 border-b border-slate-200/70 backdrop-blur supports-[backdrop-filter]:bg-white/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between py-3">

<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-sm overflow-hidden ring-1 ring-slate-200">
<div className="h-full w-full grid grid-cols-3 grid-rows-2">
<div className="bg-green-600 col-span-1 row-span-2"></div>
<div className="bg-yellow-500 col-span-2 row-span-1"></div>
<div className="bg-red-600 col-span-2 row-span-1"></div>
</div>
</div>
<span className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">MaVoix.bj</span>
</div>

<div className="flex items-center gap-2 sm:gap-4">

<form aria-label="Recherche" className="hidden md:block" role="search">
<label className="sr-only" htmlFor="search">Recherche</label>
<div className="relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input className="w-80 rounded-lg border border-slate-200 bg-white px-9 py-2 text-sm placeholder-slate-400 shadow-sm outline-none transition focus:ring-2 focus:ring-green-600/30 focus:border-green-600/50" id="search" name="q" placeholder="Rechercher une consultation, un thème..."/>
</div>
</form>

<details className="relative">
<summary className="list-none select-none cursor-pointer inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-globe h-4 w-4 text-slate-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="hidden sm:inline">Langue:</span>
<span className="font-medium" id="currentLang">FR</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="absolute right-0 mt-2 w-44 rounded-lg border border-slate-200 bg-white p-1 shadow-lg">
<button className="lang-option flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" data-lang="FR" type="button">
<span>Français</span>
<svg className="lucide lucide-check h-4 w-4 text-green-600 opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="lang-option flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" data-lang="Fon" type="button">
<span>Fɔngbè</span>
<svg className="lucide lucide-check h-4 w-4 text-green-600 opacity-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="lang-option flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" data-lang="Yoruba" type="button">
<span>Yorùbá</span>
<svg className="lucide lucide-check h-4 w-4 text-green-600 opacity-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="lang-option flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" data-lang="Dendi" type="button">
<span>Dendi</span>
<svg className="lucide lucide-check h-4 w-4 text-green-600 opacity-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
</details>

<button aria-label="Recherche" className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-search h-5 w-5 text-slate-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</div>
</div>
</header>
<main className="" id="main">

<section className="relative">
<div className="absolute inset-0 -z-10 opacity-40">
<div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-100 via-yellow-50 to-red-100"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 sm:py-14 pt-10 pb-10 items-center">
<div className="">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Votre opinion compte !
              </h1>
<p className="mt-3 text-base sm:text-lg text-slate-700">
                Participez aux décisions publiques, proposez vos idées et répondez aux sondages pour construire un Bénin plus juste et plus uni.
              </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-sm hover:bg-green-700 hover:shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/40" href="#consultations">
<svg className="lucide lucide-megaphone mr-2 h-5 w-5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
                  Participer maintenant
                </a>
<a className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm sm:text-base font-medium text-slate-800 shadow-sm hover:shadow hover:border-slate-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" href="#consultations">
                  Voir les consultations
                </a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-slate-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users h-4 w-4 text-green-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="">+12 500 citoyens inscrits</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<svg className="lucide lucide-message-square h-4 w-4 text-yellow-600" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="">+2 100 contributions</span>
</div>
</div>
</div>
<div className="lg:pl-8">
<div className="relative mx-auto max-w-lg">
<div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-green-500/10"></div>
<div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-red-500/10"></div>
<div className="grid grid-cols-3 gap-3">
<img alt="Citoyens discutant" className="col-span-1 aspect-[3/4] w-full rounded-2xl object-cover shadow-md ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Participation citoyenne" className="col-span-2 aspect-[5/4] w-full rounded-2xl object-cover shadow-md ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Unité nationale" className="col-span-3 aspect-[6/3] w-full rounded-2xl object-cover shadow-md ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pointer-events-none absolute -bottom-3 left-8 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
<div className="flex items-center gap-2 text-slate-700 text-sm">
<i className="h-4 w-4 text-green-700" data-lucide="hand-raise"></i>
<span>Votre voix, notre avenir</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-2 border-t border-slate-200/70 pt-4">
<div className="flex items-center justify-between">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Par thématique</h2>
<a className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-4" href="#">Voir tout</a>
</div>
<div className="mt-3 overflow-x-auto">
<div className="flex items-center gap-2 pb-1">
<button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-green-600/30 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-book-open h-4 w-4 text-green-700" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path className="" d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                  Éducation
                </button>
<button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-yellow-600/30 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600/30">
<svg className="lucide lucide-heart-pulse h-4 w-4 text-yellow-600" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
                  Santé
                </button>
<button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-green-600/30 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-sparkles h-4 w-4 text-green-700" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle></svg>
                  Jeunesse
                </button>
<button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-red-600/30 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30">
<svg className="lucide lucide-leaf h-4 w-4 text-red-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  Environnement
                </button>
<button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
<svg className="lucide lucide-bus h-4 w-4 text-slate-600" data-lucide="bus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path className="" d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle></svg>
                  Transport
                </button>
<button className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
<svg className="lucide lucide-factory h-4 w-4 text-slate-600" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
                  Économie
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10" id="consultations">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Consultations en cours</h3>
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
<svg className="lucide lucide-megaphone h-3.5 w-3.5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg> 3
              </span>
</div>
<ul className="mt-4 space-y-3">

<li className="rounded-xl border border-slate-200 p-4 hover:border-green-600/30 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div className="">
<a className="text-slate-900 font-medium hover:underline" href="#">Réforme des manuels scolaires</a>
<p className="text-sm text-slate-600 mt-1">Partagez vos propositions pour améliorer la qualité des contenus éducatifs.</p>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 ring-1 ring-inset ring-slate-200 text-slate-600">
<svg className="lucide lucide-book-open h-3.5 w-3.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Éducation
                      </span>
<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 ring-1 ring-inset ring-yellow-500/30 text-yellow-700">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Se termine le 25 août
                      </span>
</div>
</div>
<button className="rounded-lg bg-green-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">Contribuer</button>
</div>
</li>
<li className="rounded-xl border border-slate-200 p-4 hover:border-green-600/30 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div className="">
<a className="text-slate-900 font-medium hover:underline" href="#">Accès aux soins en zones rurales</a>
<p className="text-sm text-slate-600 mt-1">Aidez à identifier des solutions réalistes pour rapprocher les services de santé.</p>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 ring-1 ring-inset ring-slate-200 text-slate-600">
<svg className="lucide lucide-heart-pulse h-3.5 w-3.5" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> Santé
                      </span>
<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 ring-1 ring-inset ring-yellow-500/30 text-yellow-700">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 12 jours restants
                      </span>
</div>
</div>
<button className="rounded-lg bg-green-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">Contribuer</button>
</div>
</li>
<li className="rounded-xl border border-slate-200 p-4 hover:border-green-600/30 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div className="">
<a className="text-slate-900 font-medium hover:underline" href="#">Gestion des déchets urbains</a>
<p className="text-sm text-slate-600 mt-1">Vos idées pour renforcer le tri, la collecte et le recyclage.</p>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 ring-1 ring-inset ring-slate-200 text-slate-600">
<svg className="lucide lucide-leaf h-3.5 w-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Environnement
                      </span>
<span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 ring-1 ring-inset ring-yellow-500/30 text-yellow-700">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 5 jours restants
                      </span>
</div>
</div>
<button className="rounded-lg bg-green-600 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">Contribuer</button>
</div>
</li>
</ul>
<div className="mt-4 text-right">
<a className="text-sm text-slate-700 hover:text-slate-900 underline underline-offset-4" href="#">Toutes les consultations</a>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Boîte à idées</h3>
<svg className="lucide lucide-lightbulb h-5 w-5 text-yellow-600" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<p className="mt-1 text-sm text-slate-600">Proposez une idée pour améliorer votre commune ou le pays.</p>
<form aria-label="Soumettre une idée" className="mt-4 space-y-3" id="ideaForm">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="ideaTitle">Titre</label>
<input className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm outline-none transition focus:ring-2 focus:ring-green-600/30 focus:border-green-600/50" id="ideaTitle" placeholder="Ex: Points d’eau potable dans mon quartier" required=""/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="ideaDesc">Description</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm outline-none transition focus:ring-2 focus:ring-green-600/30 focus:border-green-600/50" id="ideaDesc" placeholder="Décrivez brièvement votre idée" rows="3"></textarea>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-600">Thème:</span>
<div className="flex flex-wrap gap-2">
<label className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm shadow-sm hover:shadow transition">
<input checked="" className="peer sr-only" name="theme" type="radio" value="Éducation"/>
<span className="i inline-flex items-center gap-1 text-slate-700 peer-checked:text-green-700">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Éducation
                    </span>
</label>
<label className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm shadow-sm hover:shadow transition">
<input className="peer sr-only" name="theme" type="radio" value="Santé"/>
<span className="inline-flex items-center gap-1 text-slate-700 peer-checked:text-green-700">
<svg className="lucide lucide-heart-pulse h-4 w-4" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> Santé
                    </span>
</label>
<label className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm shadow-sm hover:shadow transition">
<input className="peer sr-only" name="theme" type="radio" value="Environnement"/>
<span className="inline-flex items-center gap-1 text-slate-700 peer-checked:text-green-700">
<svg className="lucide lucide-leaf h-4 w-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Environnement
                    </span>
</label>
</div>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">Merci de rester respectueux. Les idées sont modérées.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-green-700 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Proposer
                </button>
</div>
</form>
<div className="pointer-events-none mt-3 hidden rounded-lg border border-green-600/30 bg-green-50 px-3 py-2 text-sm text-green-800 shadow-sm" id="ideaToast">Merci pour votre idée ! Elle sera visible après validation.</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Sondages</h3>
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-red-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>

<form aria-label="Sondage transport" className="mt-4 space-y-3 poll-form" data-poll="1">
<p className="font-medium text-slate-800">Quel est votre moyen de transport quotidien ?</p>
<div className="space-y-2">
<label className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:border-green-600/30 cursor-pointer">
<input className="h-4 w-4 rounded-full border-slate-300 text-green-600 focus:ring-green-600" name="transport" type="radio"/>
<span>Bus ou taxi</span>
</label>
<label className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:border-green-600/30 cursor-pointer">
<input className="h-4 w-4 rounded-full border-slate-300 text-green-600 focus:ring-green-600" name="transport" type="radio"/>
<span>Moto</span>
</label>
<label className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:border-green-600/30 cursor-pointer">
<input className="h-4 w-4 rounded-full border-slate-300 text-green-600 focus:ring-green-600" name="transport" type="radio"/>
<span>À pied / Vélo</span>
</label>
</div>
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" type="submit">
<svg className="lucide lucide-check-circle-2 h-4 w-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Voter
                </button>
<a className="text-sm text-slate-700 hover:text-slate-900 underline underline-offset-4" href="#">Résultats</a>
</div>
<div className="poll-thanks hidden rounded-lg border border-green-600/30 bg-green-50 px-3 py-2 text-sm text-green-800 shadow-sm">Merci pour votre vote !</div>
</form>

<div className="mt-6 rounded-xl border border-slate-200 p-4">
<p className="font-medium text-slate-800">Quelle priorité pour votre commune ?</p>
<div className="mt-2 flex flex-wrap gap-2">
<a className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs shadow-sm hover:border-yellow-600/30 hover:shadow" href="#">Eau potable</a>
<a className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs shadow-sm hover:border-yellow-600/30 hover:shadow" href="#">Voirie</a>
<a className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs shadow-sm hover:border-yellow-600/30 hover:shadow" href="#">Éclairage</a>
</div>
<div className="mt-3 text-right">
<a className="text-sm text-slate-700 hover:text-slate-900 underline underline-offset-4" href="#">Répondre</a>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Contributions récentes</h2>
<div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
<button className="filter-btn rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 bg-slate-100" id="filterRecent">Plus récents</button>
<button className="filter-btn rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" id="filterLiked">Les plus aimés</button>
</div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="contribList">

<article className="contrib-item rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-likes="28" data-time="20250810">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium ring-1 ring-green-600/20">AD</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<h3 className="text-slate-900 font-medium">Améliorer l’éclairage public</h3>
<div className="mt-0.5 flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-inset ring-slate-200">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Jeunesse
                      </span>
<span>il y a 2 jours</span>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs shadow-sm hover:border-green-600/30 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-thumbs-up h-3.5 w-3.5 text-green-700" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span className="like-count">28</span>
</button>
</div>
<p className="mt-2 text-sm text-slate-700">Installer des lampadaires à énergie solaire dans les rues peu éclairées.</p>
</div>
</div>
</article>
<article className="contrib-item rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-likes="12" data-time="20250811">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-medium ring-1 ring-yellow-600/20">BK</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<h3 className="text-slate-900 font-medium">Point d’eau au marché</h3>
<div className="mt-0.5 flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-inset ring-slate-200">
<svg className="lucide lucide-heart-pulse h-3.5 w-3.5" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> Santé
                      </span>
<span>il y a 1 jour</span>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs shadow-sm hover:border-green-600/30 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-thumbs-up h-3.5 w-3.5 text-green-700" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span className="like-count">12</span>
</button>
</div>
<p className="mt-2 text-sm text-slate-700">Installer un robinet public pour l’hygiène des mains.</p>
</div>
</div>
</article>
<article className="contrib-item rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-likes="41" data-time="20250809">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-medium ring-1 ring-red-600/20">CM</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<h3 className="text-slate-900 font-medium">Tri des déchets de quartier</h3>
<div className="mt-0.5 flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-inset ring-slate-200">
<svg className="lucide lucide-leaf h-3.5 w-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Environnement
                      </span>
<span>il y a 3 jours</span>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs shadow-sm hover:border-green-600/30 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-thumbs-up h-3.5 w-3.5 text-green-700" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span className="like-count">41</span>
</button>
</div>
<p className="mt-2 text-sm text-slate-700">Mettre des bacs de tri avec des collectes hebdomadaires.</p>
</div>
</div>
</article>
<article className="contrib-item rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition" data-likes="6" data-time="20250811">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium ring-1 ring-green-600/20">EZ</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<h3 className="text-slate-900 font-medium">Club lecture pour jeunes</h3>
<div className="mt-0.5 flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-inset ring-slate-200">
<svg className="lucide lucide-book-open h-3.5 w-3.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Éducation
                      </span>
<span>il y a 1 jour</span>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs shadow-sm hover:border-green-600/30 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30">
<svg className="lucide lucide-thumbs-up h-3.5 w-3.5 text-green-700" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<span className="like-count">6</span>
</button>
</div>
<p className="mt-2 text-sm text-slate-700">Créer des espaces de lecture hebdomadaires à la mairie.</p>
</div>
</div>
</article>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-sm overflow-hidden ring-1 ring-slate-200">
<div className="h-full w-full grid grid-cols-3 grid-rows-2">
<div className="bg-green-600 col-span-1 row-span-2"></div>
<div className="bg-yellow-500 col-span-2 row-span-1"></div>
<div className="bg-red-600 col-span-2 row-span-1"></div>
</div>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">MaVoix.bj</span>
</div>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-700">
<a className="hover:text-slate-900 hover:underline underline-offset-4" href="#">À propos</a>
<a className="hover:text-slate-900 hover:underline underline-offset-4" href="#">Mentions légales</a>
<a className="hover:text-slate-900 hover:underline underline-offset-4" href="#">Contact</a>
<a className="hover:text-slate-900 hover:underline underline-offset-4" href="#">Protection des données</a>
<div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-3">
<a aria-label="Facebook" className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:shadow-sm hover:border-green-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30" href="#">
<svg className="lucide lucide-facebook h-4 w-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Twitter" className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:shadow-sm hover:border-yellow-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600/30" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="WhatsApp" className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:shadow-sm hover:border-red-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/30" href="#">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
</div>
</nav>
</div>
<div className="mt-6 text-xs text-slate-500">
          Plateforme officielle de participation citoyenne du Gouvernement du Bénin.
        </div>
</div>
</footer>


    </>
  );
}
