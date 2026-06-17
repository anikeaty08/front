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
      
      // Lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Chart.js doughnut
      const ctx = document.getElementById('verifyChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Vérifié', 'À confirmer', 'Contesté'],
            datasets: [{
              data: [60, 20, 20],
              backgroundColor: ['#34d399', '#fbbf24', '#f43f5e'],
              borderColor: ['#14532d', '#78350f', '#7f1d1d'],
              borderWidth: 1,
              hoverOffset: 4
            }]
          },
          options: {
            cutout: '70%',
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(15,18,24,0.9)',
                titleColor: '#e5e7eb',
                bodyColor: '#cbd5e1',
                borderColor: 'rgba(255,255,255,0.08)',
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
      

<div className="min-h-screen grid grid-rows-[auto,1fr]">

<header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0F14]/70 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-slate-100">KN</span>
</div>
<div className="hidden sm:block h-6 w-px bg-white/10"></div>
<div className="hidden md:flex items-center gap-2">
<span className="text-sm text-slate-400">Document</span>
<div className="text-sm text-slate-200/90">Crise énergétique: synthèse vérifiée</div>
<span className="ml-1 px-1.5 py-0.5 text-[10px] rounded bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20">Auto‑save</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 p-0.5">
<button className="px-3 py-1.5 text-sm rounded-md bg-white/10 text-white/90 hover:bg-white/15 transition">Composer</button>
<button className="px-3 py-1.5 text-sm rounded-md text-slate-300 hover:bg-white/10 transition">Vérifier</button>
<button className="px-3 py-1.5 text-sm rounded-md text-slate-300 hover:bg-white/10 transition">Présenter</button>
</div>
<div className="flex items-center gap-3">
<div className="hidden lg:flex items-center bg-white/5 ring-1 ring-white/10 rounded-lg px-2.5 py-1.5 gap-2 w-72">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent outline-none placeholder:text-slate-500 text-sm w-full" placeholder="Rechercher sources, passages…"/>
<kbd className="text-[10px] text-slate-400">⌘K</kbd>
</div>

<label className="group flex items-center gap-2 cursor-pointer select-none">
<span className="text-xs text-slate-400">Strict</span>
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="relative inline-flex h-6 w-10 items-center rounded-full bg-white/10 ring-1 ring-white/15 transition peer-checked:bg-emerald-500/20 peer-checked:ring-emerald-400/30">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white/80 text-slate-700 grid place-content-center text-[10px] transition-transform translate-x-0 peer-checked:translate-x-4 ring-1 ring-black/10"></span>
</span>
</label>
<button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition text-sm">
<i className="w-4 h-4" data-lucide="share-2"></i>
                Partager
              </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20 hover:bg-emerald-500/15 transition text-sm text-emerald-300">
<i className="w-4 h-4" data-lucide="file-output"></i>
                Exporter la preuve
              </button>
<button className="h-8 w-8 rounded-full ring-1 ring-white/15 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl w-full grid grid-cols-12 gap-4 p-4 sm:p-6">

<aside className="hidden md:flex md:col-span-3 xl:col-span-2 flex-col gap-4">
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between mb-2">
<h2 className="text-sm font-medium tracking-tight text-slate-100">Plan</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="list-tree"></i>
</div>
<nav className="space-y-1 text-sm">
<a className="group flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-slate-300 group-hover:text-slate-200">1. Contexte</span>
<span className="text-[10px] text-slate-400">H1</span>
</a>
<a className="group flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-slate-300 group-hover:text-slate-200">2. Données clés</span>
<span className="text-[10px] text-slate-400">H2</span>
</a>
<a className="group flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-slate-300 group-hover:text-slate-200">3. Scénarios</span>
<span className="text-[10px] text-slate-400">H2</span>
</a>
<a className="group flex items-center justify-between px-2 py-1 rounded hover:bg-white/5">
<span className="text-slate-300 group-hover:text-slate-200">4. Recommandations</span>
<span className="text-[10px] text-slate-400">H2</span>
</a>
</nav>
</section>
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between mb-2">
<h2 className="text-sm font-medium tracking-tight text-slate-100">Affirmations</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="check-circle-2"></i>
</div>
<ul className="space-y-2">
<li className="flex items-center justify-between gap-2">
<span className="truncate text-sm text-slate-300">La demande de gaz UE a baissé de 13% en 2022</span>
<span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20">Vérifié</span>
</li>
<li className="flex items-center justify-between gap-2">
<span className="truncate text-sm text-slate-300">Le prix spot a atteint 300€/MWh</span>
<span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20">À confirmer</span>
</li>
<li className="flex items-center justify-between gap-2">
<span className="truncate text-sm text-slate-300">Capacité GNL +25% d’ici 2025</span>
<span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/20">Contesté</span>
</li>
</ul>
</section>
</aside>

<section className="col-span-12 md:col-span-6 xl:col-span-7 space-y-4">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-2 flex flex-wrap items-center gap-1">
<button className="px-2.5 py-1.5 text-sm rounded-md hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="type"></i> Style
            </button>
<button className="px-2.5 py-1.5 text-sm rounded-md hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="quote"></i> Citation
            </button>
<button className="px-2.5 py-1.5 text-sm rounded-md hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="link-2"></i> Source
            </button>
<div className="mx-1 h-6 w-px bg-white/10"></div>
<button className="px-2.5 py-1.5 text-sm rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 hover:bg-emerald-500/15 inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="shield-check"></i> Vérifier tout
            </button>
<div className="ml-auto flex items-center gap-2">
<button className="px-2 py-1.5 text-xs rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="brain"></i> Aide IA
              </button>
<button className="px-2 py-1.5 text-xs rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="bookmark-check"></i> Mode preuve
              </button>
</div>
</div>

<article className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 sm:p-7">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">Crise énergétique en Europe: synthèse vérifiée</h1>
<p className="text-sm text-slate-400 mb-6">Version 0.9 · Dernière vérification il y a 12 min · Rédaction assistée</p>
<h2 className="text-xl font-semibold tracking-tight text-slate-100 mb-2">Contexte</h2>
<p className="leading-7 text-slate-200/90">
              Depuis 2021, l’Europe fait face à une volatilité exceptionnelle des prix de l’énergie. 
              <span className="group inline-flex items-center gap-1">
<span className="underline decoration-emerald-400/40 underline-offset-4 hover:bg-emerald-500/10 rounded px-1 transition">La demande de gaz de l’UE a diminué d’environ 13% en 2022</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>

<span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition bg-[#0B0F14] ring-1 ring-white/10 rounded-lg p-3 shadow-xl absolute mt-9 w-80">
<div className="text-xs text-slate-300 mb-2">Preuves (2)</div>
<div className="space-y-2">
<a className="block p-2 rounded bg-white/5 hover:bg-white/10 transition">
<div className="text-xs text-slate-200">IEA Gas Market Report 2023 Q1</div>
<div className="text-[11px] text-slate-400">“EU gas demand fell by 13% in 2022…”</div>
</a>
<a className="block p-2 rounded bg-white/5 hover:bg-white/10 transition">
<div className="text-xs text-slate-200">Eurostat (Jan 2023)</div>
<div className="text-[11px] text-slate-400">Industry and households consumption indices</div>
</a>
</div>
</span>
</span>
              , portée par la sobriété, la météo et le déploiement accéléré des renouvelables.
            </p>
<h2 className="text-xl font-semibold tracking-tight text-slate-100 mt-6 mb-2">Données clés</h2>
<p className="leading-7 text-slate-200/90">
              Le prix spot du gaz TTF a
              <span className="group inline-flex items-center gap-1">
<span className="underline decoration-amber-400/40 underline-offset-4 rounded px-1 hover:bg-amber-500/10 transition">atteint un pic proche de 300 €/MWh en 2022</span>
<i className="w-4 h-4 text-amber-300" data-lucide="alert-circle"></i>
<span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition bg-[#0B0F14] ring-1 ring-white/10 rounded-lg p-3 shadow-xl absolute mt-9 w-80">
<div className="text-xs text-slate-300 mb-2">À confirmer</div>
<div className="text-[11px] text-slate-400">Source candidate: ICE Endex; besoin de date exacte et référence.</div>
<div className="mt-2 flex gap-2">
<button className="px-2 py-1 text-xs rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">Proposer source</button>
<button className="px-2 py-1 text-xs rounded bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 hover:bg-emerald-500/15 transition">Rechercher</button>
</div>
</span>
</span>
              , avant de refluer en 2023.
            </p>
<p className="leading-7 text-slate-200/90 mt-4">
              Les capacités d’import GNL en Europe pourraient
              <span className="group inline-flex items-center gap-1">
<span className="underline decoration-rose-400/40 underline-offset-4 rounded px-1 hover:bg-rose-500/10 transition">augmenter d’environ 25% d’ici 2025</span>
<i className="w-4 h-4 text-rose-300" data-lucide="x-octagon"></i>
<span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition bg-[#0B0F14] ring-1 ring-white/10 rounded-lg p-3 shadow-xl absolute mt-9 w-80">
<div className="text-xs text-slate-300 mb-2">Contesté</div>
<div className="text-[11px] text-slate-400">Estimations hétérogènes (ACER vs. GIIGNL). Nécessite bornes, calendrier, hypothèses.</div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-2 py-1 text-xs rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">Voir débats</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">Ajouter hypothèses</button>
</div>
</span>
</span>
              selon les terminaux en construction.
            </p>

<div className="mt-6 p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 flex gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">
<i className="w-4 h-4 text-sky-300" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<div className="text-sm text-slate-200">Suggestion</div>
<div className="text-sm text-slate-400">Ajouter un encadré “Méthodo” expliquant comment les chiffres sont vérifiés (sources primaires, date de collecte, règles de calcul).</div>
</div>
<button className="h-8 px-3 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-xs">Insérer</button>
</div>
</article>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="w-4 h-4" data-lucide="clock"></i>
              Dernière passe de vérification: 12 min · 3/5 affirmations validées
            </div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="git-branch"></i> Historique
              </button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="file-text"></i> Rapport de preuve
              </button>
</div>
</div>
</section>

<aside className="hidden xl:flex xl:col-span-3 flex-col gap-4">
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-medium tracking-tight text-slate-100">Sources</h2>
<div className="flex items-center gap-1.5">
<button className="px-2 py-1 text-xs rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="globe"></i> Import URL
                </button>
<button className="px-2 py-1 text-xs rounded bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 hover:bg-emerald-500/15 transition inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="link-2"></i> Ajouter
                </button>
</div>
</div>
<ul className="space-y-2">
<li className="p-2 rounded bg-white/5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-200">IEA — Gas Market Report 2023</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20">Fiable</span>
</div>
<div className="text-[11px] text-slate-400">2023 · Rapport · Lien: iea.org</div>
</li>
<li className="p-2 rounded bg-white/5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-200">Eurostat — Consommation gaz</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20">Fiable</span>
</div>
<div className="text-[11px] text-slate-400">2023 · Jeu de données · data.europa.eu</div>
</li>
<li className="p-2 rounded bg-white/5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-200">Presse — Marché TTF</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20">Médiatique</span>
</div>
<div className="text-[11px] text-slate-400">2022 · Article · Référence croisée requise</div>
</li>
</ul>
</section>
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium tracking-tight text-slate-100">Statut de vérification</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="shield-check"></i>
</div>
<p className="text-xs text-slate-400 mt-1">Couverture des affirmations vérifiées</p>

<div className="mt-3">
<div className="relative h-36">
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-32 w-32">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="verifyChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
<ul className="mt-4 grid grid-cols-3 gap-2 text-xs">
<li className="p-2 rounded bg-white/5 ring-1 ring-white/10">Vérifié: <span className="text-emerald-300">60%</span></li>
<li className="p-2 rounded bg-white/5 ring-1 ring-white/10">À confirmer: <span className="text-amber-300">20%</span></li>
<li className="p-2 rounded bg-white/5 ring-1 ring-white/10">Contesté: <span className="text-rose-300">20%</span></li>
</ul>
</section>
<section className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium tracking-tight text-slate-100">Journal &amp; transparence</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="file-search"></i>
</div>
<ol className="mt-2 space-y-2 text-xs">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Alignement source IEA ↔ Eurostat pour “-13%”
                <span className="ml-auto text-slate-500">12:04</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                Pic TTF: précision date manquante
                <span className="ml-auto text-slate-500">11:59</span>
</li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                Hypothèses GNL en divergence
                <span className="ml-auto text-slate-500">11:51</span>
</li>
</ol>
</section>
</aside>
</main>
</div>


    </>
  );
}
