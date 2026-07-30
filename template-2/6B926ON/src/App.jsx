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
      
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    


      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute left-[10%] top-[-10%] h-[40vh] w-[40vw] rounded-full bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-cyan-500/20 blur-3xl"></div>
<div className="absolute right-[-10%] bottom-[-20%] h-[50vh] w-[50vw] rounded-full bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-sky-400/20 blur-3xl"></div>
<div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 bg-neutral-900 group-hover:ring-white/20 transition">
<span className="text-[11px] font-semibold tracking-tight text-100">IA</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-neutral-200">Hub</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">Découvrir</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">Articles</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">Outils</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="formations.html">Formations</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-200 hover:border-white/20 hover:text-white transition">
<i className="h-4 w-4" data-lucide="log-in"></i> Se connecter
          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-fuchsia-400/60 transition">
<i className="h-4 w-4" data-lucide="user-plus"></i> Inscription
          </button>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>

<section className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl pt-14 sm:pt-20">
<div className="mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-200">
<span className="inline-flex size-2 animate-pulse rounded-full bg-fuchsia-400/80"></span>
            Alpha — Plateforme IA unifiée
          </div>
<h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Votre point d’entrée <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">intelligence artificielle</span>
</h1>
<p className="mt-3 text-sm sm:text-base text-neutral-300">
            Cherchez, comparez, apprenez et construisez. Un hub centralisé entre <span className="font-semibold text-neutral-100">Wikipédia</span>, blog, marketplace et centre de ressources.
          </p>
</div>

<div className="mt-8">
<div className="relative">
<i className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" data-lucide="search"></i>
<input aria-label="Rechercher sur la plateforme" className="w-full rounded-xl border border-white/10 bg-neutral-900/70 px-12 py-4 text-sm text-neutral-100 placeholder:text-neutral-500 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 focus:border-fuchsia-400/40 transition" placeholder="Rechercher modèles, outils, prompts, définitions, formations…" type="text" />
<button className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white hover:bg-white/15 transition">
<i className="h-4 w-4" data-lucide="sparkles"></i> Recherche IA
            </button>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-xs text-neutral-400">Tendances:</span>
<button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 hover:border-white/20 hover:text-white transition">agents autonomes</button>
<button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 hover:border-white/20 hover:text-white transition">comparateur LLM</button>
<button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 hover:border-white/20 hover-white transition">micro-SaaS</button>
<button className="rounded-full border border-white/10 bg-white/5 px-3 py-1-xs text-neutral-300 hover:border-white/20 hover:text-white transition">prompts image</button>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-10 sm:mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-fuchsia-500/10 transition" href="#">
<div className="absolute -right-10 -top-10 size-40 rounded-full bg-fuchsia-500/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1-white/10">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="search"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Moteur de recherche</h3>
<p className="mt-1 text-xs text-neutral-300">Index IA multi-sources, résultats enrichis.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">Alpha</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-fuchsia-200">
            Explorer <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-violet-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-pink-500/10 transition" href="#">
<div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-pink-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-pink-300" data-lucide="book-open-check"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Bibliothèque de prompts</h3>
<p className="mt-1 text-xs text-neutral-300">Clé-en-main, validés par la communauté.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">+2k</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-pink-200">
            Parcourir <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-amber-500/10 transition" href="#">
<div className="absolute -left-6 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-amber-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-amber-300" data-lucide="shopping-bag"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Marketplace micro‑SaaS IA</h3>
<p className="mt-1 text-xs text-neutral-300">Achetez, vendez, déployez des modules IA.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">Nouveau</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-amber-200">
            Découvrir <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-cyan-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-sky-500/10 transition" href="#">
<div className="absolute right-4 bottom-4 size-20 rounded-full bg-sky-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-sky-300" data-lucide="newspaper"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Blog, interviews & podcast</h3>
<p className="mt-1 text-xs text-neutral-300">Actualités IA sélectionnées et décryptées.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">Hebdo</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-sky-200">
            Lire <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/10 transition" href="#">
<div className="absolute -right-8 top-1/3 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-emerald-300" data-lucide="book-text"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Dictionnaire IA interactif</h3>
<p className="mt-1 text-xs text-neutral-300">Termes, exemples, mini‑quiz.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">A‑Z</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-emerald-200">
            Définir <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/10 transition" href="#">
<div className="absolute left-4 top-4 size-16 rounded-full bg-indigo-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-indigo-300" data-lucide="grid-3x3"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Répertoire d’outils IA</h3>
<p className="mt-1 text-xs text-neutral-300">Par thèmes, tutos, avis, comparateurs.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">+500</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-indigo-200">
            Explorer <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-rose-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 transition" href="#">
<div className="absolute right-3 top-3 size-16 rounded-full bg-purple-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-purple-300" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Think Tank</h3>
<p className="mt-1 text-xs text-neutral-300">Prospective avec experts et décideurs.</p>
</div>
</div>
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop" />
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" />
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-purple-200">
            Participer <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-lime-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-teal-500/10 transition" href="#">
<div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-teal-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-teal-300" data-lucide="bot"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Marketplace d’agents IA</h3>
<p className="mt-1 text-xs text-neutral-300">Achat, dépôt, paiement sécurisé.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">Beta</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-teal-200">
            Lancer <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10 transition" href="#">
<div className="absolute right-1/3 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-cyan-300" data-lucide="scale"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Comparateur de modèles LLM</h3>
<p className="mt-1 text-xs text-neutral-300">Benchmarks, coûts, latence, qualité.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">Live</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-cyan-200">
            Comparer <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-rose-500/10 via-violet-500/10 to-indigo-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-rose-500/10 transition" href="formations.html">
<div className="absolute left-8 bottom-2 size-24 rounded-full bg-rose-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-rose-300" data-lucide="graduation-cap"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Formations en ligne</h3>
<p className="mt-1 text-xs text-neutral-300">IA, no‑code, images, vidéos et plus.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">Certif</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-rose-200">
            Accéder <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-pink-500/10 to-violet-500/10 p-4 hover:border-white/20 hover:shadow-lg hover:shadow-fuchsia-500/10 transition" href="#">
<div className="absolute -right-6 bottom-0 h-28 w-28 rounded-full bg-fuchsia-400/10 blur-2xl"></div>
<div className="flex items-start justify-between">
<div className="inline-flex items-center gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="wand-2"></i>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight">Générateur de prompts</h3>
<p className="mt-1 text-xs text-neutral-300">Suggestions contextuelles et raffinage.</p>
</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-neutral-100">IA‑Assist</span>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-fuchsia-200">
            Générer <i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</a>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
<div className="col-span-1 lg:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">À la une</h2>
<a className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2 transition" href="#">Voir tout <i className="h-4 w-4" data-lucide="chevron-right"></i></a>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<a className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 p-4 hover:border-white/20 hover:-translate-y-0.5 transition" href="#">
<div className="flex items-start gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-sky-300" data-lucide="mic"></i>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Podcast • Les agents IA en production</p>
<p className="mt-1 text-xs text-neutral-300">Architecture, sécurité et retour d’expérience.</p>
</div>
</div>
<div className="mt-3 text-xs text-neutral-400">12 min • Par Studio IA</div>
</a>
<a className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 p-4 hover:border-white/20 hover:-translate-y-0.5 transition" href="#">
<div className="flex items-start gap-3">
<div className="flex size-10 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-white/10">
<i className="h-5 w-5 text-rose-300" data-lucide="pen-tool"></i>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Article • Prompt design avancé</p>
<p className="mt-1 text-xs text-neutral-300">Cadres, patterns, évaluation systématique.</p>
</div>
</div>
<div className="mt-3 text-xs text-neutral-400">8 min • Par Équipe R&D</div>
</a>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<h2 className="text-xl font-semibold tracking-tight">Accès rapide</h2>
<div className="mt-3 space-y-2">
<a className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:border-white/20 hover:bg-white/10 transition" href="#">
              Déposer un agent <i className="h-4 w-4 text-neutral-300" data-lucide="upload"></i>
</a>
<a className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:border-white/20 hover:bg-white/10 transition" href="#">
              Publier un micro‑SaaS <i className="h-4 w-4 text-neutral-300" data-lucide="rocket"></i>
</a>
<a className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:border-white/20 hover:bg-white/10 transition" href="#">
              Soumettre un outil <i className="h-4 w-4 text-neutral-300" data-lucide="plus"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 bg-neutral-900">
<span className="text-[11px] font-semibold tracking-tight text-neutral-100">IA</span>
</div>
<p className="text-sm text-neutral-400">© 2025 IA Hub. Tous droits réservés.</p>
</div>
<div className="flex items-center gap-5 text-sm">
<a className="text-neutral-300 hover:text-white transition" href="#">Contact</a>
<a className="text-neutral-300 hover:text-white transition" href="#">Communauté</a>
<a className="text-neutral-300 hover:text-white transition" href="#">Mentions légales</a>
</div>
</div>
</footer>




    </>
  );
}
