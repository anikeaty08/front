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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">
<a className="flex items-center gap-3" href="#top">
<div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
<span className="text-sm font-semibold tracking-tight">S</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight">STUDENS</span>
<span className="text-xs text-slate-300">Bureautique Microsoft 365</span>
</div>
</a>
<nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
<a className="hover:text-white/90 transition" href="#formations">Formations</a>
<a className="hover:text-white/90 transition" href="#programme">Programme</a>
<a className="hover:text-white/90 transition" href="#modalites">Modalités</a>
<a className="hover:text-white/90 transition" href="#financement">Financement</a>
<a className="hover:text-white/90 transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-white/50" href="#formulaire">
            Recevoir le programme
          </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition focus:outline-none focus:ring-2 focus:ring-white/30" href="#formations">
<span className="hidden sm:inline">Découvrir</span>
<span className="sm:hidden">Formations</span>
</a>
</div>
</div>
</div>
</header>

<div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/85 backdrop-blur md:hidden">
<div className="mx-auto max-w-7xl px-4 py-3">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<p className="text-xs text-slate-300">Diagnostic gratuit + programme</p>
<p className="truncate text-sm font-semibold tracking-tight">Gagne du temps sur Excel / Word / PPT</p>
</div>
<a className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-white/50" href="#formulaire">
          Demander un accès
        </a>
</div>
</div>
</div>

<div id="top"></div>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl"></div>
<div className="absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
<div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/15">
<iconify-icon className="text-slate-100" icon="solar:shield-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
            Parcours structurés • exercices concrets • progression guidée
          </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bureautique Microsoft 365 : deviens rapide, précis, et vraiment autonome.
          </h1>
<p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
            Excel, Word, PowerPoint, Outlook &amp; Teams : des parcours structurés pour gagner du temps, automatiser, et produire des livrables pros.
          </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-white/50" href="#formations">
              Découvrir les formations
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition focus:outline-none focus:ring-2 focus:ring-white/30" href="#formulaire">
              Recevoir le programme
              <iconify-icon icon="solar:file-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<div className="flex items-center gap-3 text-xs text-slate-300">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                Accès immédiat
              </div>
<div className="h-3 w-px bg-white/15"></div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:chat-round-line-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                Ressources + feedback
              </div>
</div>
</div>

<div className="mt-10 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:chart-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Excel</p>
<p className="mt-1 text-xs text-slate-300">Formules, tableaux, graphiques, automatisations</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:presentation-graph-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">PowerPoint</p>
<p className="mt-1 text-xs text-slate-300">Présentations impactantes et rapides</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:document-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Word</p>
<p className="mt-1 text-xs text-slate-300">Documents pro, styles, mise en page</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:calendar-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Outlook &amp; Teams</p>
<p className="mt-1 text-xs text-slate-300">Organisation, communication, collaboration</p>
</div>
</div>
</div>
</div>

<div className="mt-10 flex flex-wrap items-center gap-2 text-xs text-slate-200">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
<iconify-icon icon="solar:map-point-wave-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
              Parcours structurés
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
<iconify-icon icon="solar:clipboard-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
              Exercices concrets
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
<iconify-icon icon="solar:list-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
              Checklists pro
            </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
<iconify-icon icon="solar:route-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
              Progression guidée
            </span>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-slate-200">Aperçu</span>
<span className="text-xs text-slate-400">Dashboard productivité</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
<iconify-icon icon="solar:bolt-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                Ultra concret
              </span>
</div>

<div className="mt-4 grid gap-4">
<div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<p className="text-xs font-semibold text-slate-200">Reporting hebdo</p>
</div>
<p className="text-xs text-slate-400">Auto</p>
</div>
<div className="mt-3 grid grid-cols-12 gap-2">
<div className="col-span-7 rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:table-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<p className="text-xs font-semibold">Tableau</p>
</div>
<div className="mt-2 space-y-2">
<div className="h-2 rounded bg-white/10"></div>
<div className="h-2 w-5/6 rounded bg-white/10"></div>
<div className="h-2 w-4/6 rounded bg-white/10"></div>
</div>
</div>
<div className="col-span-5 rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:chart-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<p className="text-xs font-semibold">Graphique</p>
</div>
<div className="mt-3 flex items-end justify-between gap-1">
<div className="h-8 w-2 rounded bg-indigo-400/70"></div>
<div className="h-12 w-2 rounded bg-indigo-400/70"></div>
<div className="h-6 w-2 rounded bg-indigo-400/70"></div>
<div className="h-14 w-2 rounded bg-indigo-400/70"></div>
<div className="h-10 w-2 rounded bg-indigo-400/70"></div>
</div>
</div>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:layers-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<p className="text-xs font-semibold text-slate-200">Slides réutilisables</p>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
<div className="h-2 w-2/3 rounded bg-white/15"></div>
<div className="mt-2 h-6 rounded bg-white/10"></div>
</div>
<div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
<div className="h-2 w-1/2 rounded bg-white/15"></div>
<div className="mt-2 h-6 rounded bg-white/10"></div>
</div>
<div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
<div className="h-2 w-2/5 rounded bg-white/15"></div>
<div className="mt-2 h-6 rounded bg-white/10"></div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:inbox-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<p className="text-xs font-semibold text-slate-200">Organisation</p>
</div>
<p className="text-xs text-slate-400">Inbox + agenda</p>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-xl bg-white/10 p-2 ring-1 ring-white/10">
<p className="text-xs text-slate-200">Règles + catégories</p>
<span className="text-xs font-semibold text-emerald-200">OK</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/10 p-2 ring-1 ring-white/10">
<p className="text-xs text-slate-200">Routines</p>
<span className="text-xs font-semibold text-emerald-200">OK</span>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-400/10 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight">Recevoir le programme + diagnostic niveau</p>
<p className="mt-1 text-xs text-slate-200">Gratuit, rapide, et utile pour choisir le bon parcours.</p>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
                    Démarrer
                  </a>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-400">
            Objectif : autonomie + vitesse + qualité. Conçu pour études, administratif, RH, reconversion, PME.
          </p>
</div>
</div>

<div className="mt-14 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<p className="text-xs text-slate-300">Niveaux</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Débutant → Avancé</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<p className="text-xs text-slate-300">Format</p>
<p className="mt-1 text-sm font-semibold tracking-tight">En ligne + exercices</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<p className="text-xs text-slate-300">Rythme</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Flexible</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<p className="text-xs text-slate-300">Objectif</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Productivité &amp; autonomie</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<p className="text-xs text-slate-300">Accès</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Immédiat</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/7 transition">
<p className="text-xs text-slate-300">Support</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Ressources + feedback</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/40 border-y border-white/10">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-400/10 ring-1 ring-rose-300/15">
<iconify-icon icon="solar:danger-triangle-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Pourquoi la bureautique fait perdre un temps fou</h2>
</div>
<ul className="mt-5 space-y-3 text-sm text-slate-200">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-rose-200" icon="solar:close-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Excel utilisé à 10% de ses capacités
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-rose-200" icon="solar:close-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Documents Word pas propres (styles, mises en page, tables)
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-rose-200" icon="solar:close-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              PowerPoint chronophage et peu impactant
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-rose-200" icon="solar:close-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Outlook et Teams mal utilisés → surcharge et désorganisation
            </li>
</ul>
</div>
<div className="rounded-3xl bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/15">
<iconify-icon icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Ce que tu vas changer dès la première semaine</h2>
</div>
<ul className="mt-5 space-y-3 text-sm text-slate-100">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Créer des fichiers propres, clairs et réutilisables
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Gagner du temps avec les bons raccourcis et méthodes
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Automatiser les tâches répétitives (Excel)
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Présenter mieux et plus vite (PowerPoint)
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Mieux organiser sa communication (Outlook/Teams)
            </li>
</ul>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-white/50" href="#formulaire">
              Faire le diagnostic gratuit
              <iconify-icon icon="solar:stethoscope-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#formations">
              Voir les parcours
              <iconify-icon icon="solar:book-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950" id="formations">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div>
<p className="text-xs font-semibold text-slate-300">Formations</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Les formations Bureautique Microsoft 365 — STUDENS</h2>
<p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">Choisis un parcours (ou combine-les) selon ton job et tes objectifs.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
            Recevoir le programme
          </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#programme">
            Voir le programme détaillé
          </a>
</div>
</div>
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/15 transition">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Excel — Incontournable</h3>
<p className="mt-1 text-xs text-slate-300">Productivité + analyse</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
<iconify-icon icon="solar:chart-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-slate-200">Formules essentielles, fonctions avancées, tableaux, graphiques, nettoyage de données, automatisations simples.</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">3 à 6 semaines</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">Débutant → Avancé</span>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Voir le parcours Excel
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<p className="mt-2 text-xs text-slate-400">Conseil : idéal pour reporting, admin, RH, analyse.</p>
</div>
</article>
<article className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/15 transition">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Word — Documents professionnels</h3>
<p className="mt-1 text-xs text-slate-300">Mise en page clean</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
<iconify-icon icon="solar:document-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-slate-200">Styles, sommaire, sections, modèles, tableaux, export PDF, documents réutilisables.</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">2 à 4 semaines</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">Débutant → Intermédiaire</span>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Voir le parcours Word
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<p className="mt-2 text-xs text-slate-400">Pour rendre tes documents propres, cohérents, rapides.</p>
</div>
</article>
<article className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/15 transition">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">PowerPoint — Présentations impactantes</h3>
<p className="mt-1 text-xs text-slate-300">Clair + efficace</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
<iconify-icon icon="solar:presentation-graph-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-slate-200">Structure, storytelling, slide system, masques, icônes, présentation pro rapide.</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">2 à 4 semaines</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">Tous niveaux</span>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Voir le parcours PowerPoint
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<p className="mt-2 text-xs text-slate-400">Pour créer un deck pro sans y passer ta soirée.</p>
</div>
</article>
<article className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/15 transition">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Outlook — Organisation &amp; efficacité</h3>
<p className="mt-1 text-xs text-slate-300">Inbox zéro</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
<iconify-icon icon="solar:inbox-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-slate-200">Gestion de mails, règles, catégories, calendrier, routines, méthodes anti-surcharge.</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">1 à 3 semaines</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">Tous niveaux</span>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Voir le parcours Outlook
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<p className="mt-2 text-xs text-slate-400">Pour réduire la charge mentale et mieux prioriser.</p>
</div>
</article>
<article className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/15 transition">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Teams — Collaboration moderne</h3>
<p className="mt-1 text-xs text-slate-300">Équipe fluide</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
<iconify-icon icon="solar:users-group-rounded-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-slate-200">Canaux, fichiers, réunions, bonnes pratiques, organisation et communication.</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">1 à 3 semaines</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-200">Tous niveaux</span>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Voir le parcours Teams
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<p className="mt-2 text-xs text-slate-400">Pour éviter le chaos : canaux, fichiers, réunions.</p>
</div>
</article>
<article className="group rounded-3xl bg-gradient-to-br from-indigo-500/15 to-cyan-400/10 p-6 ring-1 ring-white/10 hover:ring-white/15 transition">
<div className="flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/15">
<iconify-icon icon="solar:crown-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
                Le plus demandé
              </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Pack Office 365 — Parcours complet</h3>
<p className="mt-1 text-xs text-slate-200">Progression cohérente + exercices métier</p>
</div>
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
<iconify-icon icon="solar:boxes-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-sm text-slate-100">Excel + Word + PowerPoint + Outlook/Teams : progression cohérente avec exercices métier.</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-100">6 à 10 semaines</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-slate-100">Débutant → Avancé</span>
</div>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Voir le pack complet
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<p className="mt-2 text-xs text-slate-200/80">Recommandé si tu veux une montée en compétence globale.</p>
</div>
</article>
</div>

<div className="mt-12 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="grid gap-6 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-8">
<h3 className="text-2xl font-semibold tracking-tight text-white">Tu veux qu’on te recommande le bon parcours ?</h3>
<p className="mt-2 text-sm text-slate-200">Réponds à 3 questions : objectif, niveau, outil prioritaire. On te renvoie le programme + une recommandation claire.</p>
</div>
<div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Faire le diagnostic gratuit
              <iconify-icon icon="solar:stethoscope-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#formulaire">
              Recevoir le programme complet
              <iconify-icon icon="solar:file-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/40 border-y border-white/10">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-400/10 ring-1 ring-indigo-300/15">
<iconify-icon icon="solar:target-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Pourquoi STUDENS est plus efficace qu’un simple cours</h2>
</div>
<ul className="mt-5 space-y-3 text-sm text-slate-200">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-indigo-200" icon="solar:route-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Progression guidée : tu sais quoi faire, dans quel ordre
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-indigo-200" icon="solar:case-round-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Exercices réalistes (cas admin, RH, gestion, reporting)
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-indigo-200" icon="solar:list-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Checklists pro : fichiers propres, réutilisables, rapides
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-indigo-200" icon="solar:bolt-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Objectif : autonomie + vitesse + qualité
            </li>
</ul>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/15">
<iconify-icon icon="solar:flag-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight">Objectifs (format formation pro)</h2>
</div>
<ul className="mt-5 space-y-3 text-sm text-slate-200">
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Maîtriser les fonctions essentielles et les méthodes pro
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Créer des documents et présentations réutilisables
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Automatiser les tâches répétitives (Excel)
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Améliorer ton efficacité au quotidien (Outlook/Teams)
            </li>
<li className="flex gap-3">
<iconify-icon className="mt-0.5 text-emerald-200" icon="solar:check-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Être à l’aise en contexte école / entreprise
            </li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Recevoir le programme + diagnostic
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950" id="programme">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-xs font-semibold text-slate-300">Programme</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Programme détaillé</h2>
<p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">Tout est organisé pour te faire progresser vite, sans trous dans la raquette.</p>
</div>
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
          Recevoir le programme
        </a>
</div>
<div className="mt-10 grid gap-4">
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:chart-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Excel — progression</p>
<p className="mt-1 text-xs text-slate-300">De la base au mini-projet reporting</p>
</div>
</div>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-2"><span className="text-slate-400">•</span> Bases : formatage, tableaux, logique</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Fonctions clés : SI, RECHERCHE, TEXTE, DATES</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Nettoyage / structuration des données</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Tableaux croisés &amp; graphiques</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Automatisations simples (modèles, mises en forme, bonnes pratiques)</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Mini-projet : reporting pro</li>
</ul>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Je veux Excel
            </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#formulaire">
              Faire le diagnostic
            </a>
</div>
</details>
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:document-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Word — documents pro</p>
<p className="mt-1 text-xs text-slate-300">Des modèles propres, cohérents, rapides</p>
</div>
</div>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-2"><span className="text-slate-400">•</span> Styles &amp; hiérarchie (propre et rapide)</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Sommaire, sections, pagination</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Modèles réutilisables</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Tableaux &amp; mise en page</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Exports PDF et livrables</li>
</ul>
</details>
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:presentation-graph-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">PowerPoint — impact</p>
<p className="mt-1 text-xs text-slate-300">Structure + système de slides réutilisable</p>
</div>
</div>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-2"><span className="text-slate-400">•</span> Structure &amp; storytelling</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Masques et système de slides</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Mise en page rapide</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Visuels, icônes, schémas</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Mini-projet : deck pro</li>
</ul>
</details>
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:users-group-rounded-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Outlook &amp; Teams — organisation</p>
<p className="mt-1 text-xs text-slate-300">Routines + règles + bonnes pratiques collaboration</p>
</div>
</div>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<ul className="mt-5 space-y-2 text-sm text-slate-200">
<li className="flex gap-2"><span className="text-slate-400">•</span> Routines &amp; méthode anti-surcharge</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Règles, catégories, dossiers intelligents</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Calendrier efficace</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Teams : canaux, fichiers, réunions, bonnes pratiques</li>
</ul>
</details>
</div>
</div>
</section>

<section className="bg-slate-900/40 border-y border-white/10" id="modalites">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-12 lg:items-end">
<div className="lg:col-span-8">
<p className="text-xs font-semibold text-slate-300">Modalités</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Modalités</h2>
<p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">Le format est pensé pour produire des résultats visibles, pas juste “suivre des vidéos”.</p>
</div>
<div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:justify-end">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
            Demander un accès
          </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#formulaire">
            Recevoir le programme
          </a>
</div>
</div>
<div className="mt-10 grid gap-5 md:grid-cols-3">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:clock-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">À ton rythme</h3>
</div>
<p className="mt-3 text-sm text-slate-200">Progression guidée, sessions courtes, résultats rapides.</p>
<p className="mt-4 text-xs text-slate-400">Tu sais exactement quoi faire à chaque étape.</p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:hammer-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">Très concret</h3>
</div>
<p className="mt-3 text-sm text-slate-200">Exercices métier + livrables téléchargeables.</p>
<p className="mt-4 text-xs text-slate-400">Admin, RH, reporting, présentations, organisation.</p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:chat-round-line-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">Support &amp; ressources</h3>
</div>
<p className="mt-3 text-sm text-slate-200">Checklists, templates, feedback, recommandations.</p>
<p className="mt-4 text-xs text-slate-400">Pour être autonome et sûr de tes livrables.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-950" id="financement">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-7">
<p className="text-xs font-semibold text-slate-300">Financement &amp; réassurance</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Financement &amp; réassurance</h2>
<p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">Objectif : enlever les doutes et déclencher l’action.</p>
<div className="mt-8 grid gap-5">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:card-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Paiement en plusieurs fois</h3>
<p className="mt-2 text-sm text-slate-200">Option de paiement échelonné selon le parcours. Tu demandes l’accès, on te confirme la meilleure formule.</p>
<p className="mt-2 text-xs text-slate-400">But : démarrer sans bloquer ton budget.</p>
</div>
</div>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:buildings-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Formation entreprise / école</h3>
<p className="mt-2 text-sm text-slate-200">Accès équipe possible : onboarding, uniformisation des livrables, méthodes partagées, montée en compétence rapide.</p>
<p className="mt-2 text-xs text-slate-400">Idéal PME, services admin, RH, managers.</p>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-br from-white/7 to-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-300/15">
<iconify-icon icon="solar:shield-check-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Accès immédiat + support</h3>
<p className="mt-2 text-sm text-slate-200">Dès validation, tu accèdes au parcours et aux ressources. On te guide pour avancer dans le bon ordre.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Qualité</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Suivi</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Progression</span>
<span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Ressources</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
              Demander un accès
              <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#formulaire">
              Recevoir le programme
              <iconify-icon icon="solar:file-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs font-semibold text-slate-300">Résultats concrets</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight">Ce que les apprenants retiennent</h3>
</div>
<div className="hidden sm:flex items-center gap-1 text-amber-200">
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-6 grid gap-4">
<figure className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<figcaption className="text-sm font-semibold tracking-tight">Sarah <span className="text-xs font-medium text-slate-400">— Assistante</span></figcaption>
<div className="flex items-center gap-1 text-amber-200">
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-200">“J’ai divisé par deux le temps sur mes tableaux Excel. Les méthodes sont ultra claires.”</blockquote>
</figure>
<figure className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<figcaption className="text-sm font-semibold tracking-tight">Mehdi <span className="text-xs font-medium text-slate-400">— Étudiant</span></figcaption>
<div className="flex items-center gap-1 text-amber-200">
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-200">“PowerPoint est devenu simple. J’ai un système de slides propre et réutilisable.”</blockquote>
</figure>
<figure className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<figcaption className="text-sm font-semibold tracking-tight">Julie <span className="text-xs font-medium text-slate-400">— RH</span></figcaption>
<div className="flex items-center gap-1 text-amber-200">
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{'--iconify-stroke-width': '1.5'}} width="16"></iconify-icon>
</div>
</div>
<blockquote className="mt-3 text-sm text-slate-200">“Outlook/Teams mieux utilisés = moins de stress. Je suis beaucoup plus organisée.”</blockquote>
</figure>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Ce que tu obtiens</p>
<div className="mt-2 grid gap-2 text-sm text-slate-200">
<div className="flex gap-2"><span className="text-slate-400">•</span> Méthodes + raccourcis pour aller plus vite</div>
<div className="flex gap-2"><span className="text-slate-400">•</span> Templates et checklists pour livrables propres</div>
<div className="flex gap-2"><span className="text-slate-400">•</span> Exercices métier pour être opérationnel</div>
</div>
<a className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
                Recevoir le programme
              </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/40 border-y border-white/10" id="faq">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-semibold text-slate-300">FAQ</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Questions fréquentes</h2>
<p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">Si tu hésites, lis ça. Si tu veux aller vite : fais le diagnostic gratuit.</p>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#formulaire">
          Recevoir le programme
        </a>
</div>
<div className="mt-10 grid gap-4">
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<p className="text-sm font-semibold tracking-tight">Je pars de zéro, c’est possible ?</p>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-200">Oui. Les parcours démarrent par les bases et montent progressivement, avec exercices guidés.</p>
</details>
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<p className="text-sm font-semibold tracking-tight">Je veux surtout Excel, je peux faire uniquement ça ?</p>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-200">Oui. Tu peux suivre un parcours unique (Excel) ou un pack complet selon ton objectif.</p>
</details>
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<p className="text-sm font-semibold tracking-tight">Est-ce adapté au contexte entreprise ?</p>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-200">Oui. Les exercices sont basés sur des cas réels : reporting, docs, présentations, organisation.</p>
</details>
<details className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 open:bg-white/7 transition">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<p className="text-sm font-semibold tracking-tight">Combien de temps pour voir une différence ?</p>
<iconify-icon className="text-slate-200 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-200">Dès la première semaine : méthodes + templates + automatisations simples.</p>
</details>
</div>
</div>
</section>

<section className="bg-slate-950" id="formulaire">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-6">
<p className="text-xs font-semibold text-slate-300">Dernière étape</p>
<h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Prêt à gagner du temps tous les jours ?</h2>
<p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base">Reçois le programme complet + un diagnostic rapide pour choisir le parcours le plus utile.</p>
<div className="mt-8 grid gap-4">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:download-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Ce que tu reçois</p>
<ul className="mt-3 space-y-2 text-sm text-slate-200">
<li className="flex gap-2"><span className="text-slate-400">•</span> Programme complet (selon ton objectif et ton niveau)</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Recommandation du parcours (ou du pack) le plus rentable</li>
<li className="flex gap-2"><span className="text-slate-400">•</span> Prochaine étape claire pour démarrer vite</li>
</ul>
</div>
</div>
</div>
<div className="rounded-3xl bg-gradient-to-br from-indigo-500/15 to-cyan-400/10 p-6 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
<iconify-icon icon="solar:bolt-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Promesse simple</p>
<p className="mt-2 text-sm text-slate-100">Tu avances avec une méthode : plus vite, plus propre, plus pro.</p>
<p className="mt-2 text-xs text-slate-200/80">Orientation efficacité &amp; employabilité.</p>
</div>
</div>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition" href="#lead-form">
                Recevoir le programme
                <iconify-icon icon="solar:file-text-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" href="#lead-form">
                Demander un accès
                <iconify-icon icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-3xl bg-white p-6 text-slate-950 ring-1 ring-black/5" id="lead-form">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Recevoir le programme + diagnostic niveau (gratuit)</h3>
<p className="mt-2 text-sm text-slate-600">Réponse rapide. Recommandation claire. Zéro blabla.</p>
</div>
<div className="hidden sm:grid h-11 w-11 place-items-center rounded-2xl bg-slate-950/5 ring-1 ring-black/5">
<iconify-icon className="text-slate-800" icon="solar:paperclip-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
</div>
<form className="mt-6 grid gap-4" onsubmit="event.preventDefault(); window.dispatchEvent(new CustomEvent('studens:lead', {detail: getLeadFormData()})); showToast('Merci ! Programme envoyé (simulation).'); this.reset();">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-700">Prénom</span>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:ring-4 focus:ring-indigo-500/10" name="prenom" placeholder="Ex : Lina" required="" type="text"/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-700">Email</span>
<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none focus:border-slate-300 focus:ring-4 focus:ring-indigo-500/10" name="email" placeholder="Ex : lina@email.com" required="" type="email"/>
</label>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<label className="grid gap-2 sm:col-span-1">
<span className="text-xs font-semibold text-slate-700">Objectif (liste)</span>
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-slate-300 focus:ring-4 focus:ring-indigo-500/10" name="objectif" required="">
<option disabled="" selected="" value="">Choisir</option>
<option>Gagner du temps au quotidien</option>
<option>Devenir autonome pour un poste</option>
<option>Améliorer mes livrables (docs / slides)</option>
<option>Automatiser et analyser (Excel)</option>
<option>Organisation (mails / réunions / équipe)</option>
</select>
</label>
<label className="grid gap-2 sm:col-span-1">
<span className="text-xs font-semibold text-slate-700">Niveau (liste)</span>
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-slate-300 focus:ring-4 focus:ring-indigo-500/10" name="niveau" required="">
<option disabled="" selected="" value="">Choisir</option>
<option>Débutant</option>
<option>Intermédiaire</option>
<option>Avancé</option>
</select>
</label>
<label className="grid gap-2 sm:col-span-1">
<span className="text-xs font-semibold text-slate-700">Outil prioritaire (liste)</span>
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-slate-300 focus:ring-4 focus:ring-indigo-500/10" name="outil" required="">
<option disabled="" selected="" value="">Choisir</option>
<option>Excel</option>
<option>Word</option>
<option>PowerPoint</option>
<option>Outlook</option>
<option>Teams</option>
<option>Pack complet</option>
</select>
</label>
</div>
<button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900 transition focus:outline-none focus:ring-4 focus:ring-slate-950/20" type="submit">
                Recevoir le programme
                <iconify-icon className="text-white" icon="solar:arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</button>
<div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-black/5">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-700" icon="solar:lock-keyhole-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<div>
<p className="text-xs font-semibold text-slate-700">Confidentialité</p>
<p className="mt-1 text-xs text-slate-600">Tes infos servent uniquement à t’envoyer le programme et la recommandation.</p>
</div>
</div>
</div>
</form>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Pour qui</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Études &amp; entreprise</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Focus</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Vitesse + qualité</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-300">Format</p>
<p className="mt-1 text-sm font-semibold tracking-tight">Guidé + exercices</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/10 pb-24 md:pb-8">
</footer>
    </>
  );
}
