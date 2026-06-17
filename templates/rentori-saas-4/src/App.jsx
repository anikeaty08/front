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



      // Initialize lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      });

      // Basic interactions
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      const langBtn = document.getElementById('langBtn');
      const langMenu = document.getElementById('langMenu');
      const langLabel = document.getElementById('langLabel');
      if (langBtn && langMenu) {
        langBtn.addEventListener('click', () => {
          langMenu.classList.toggle('hidden');
        });
        langMenu.querySelectorAll('button').forEach(btn => {
          btn.addEventListener('click', () => {
            langLabel.textContent = btn.textContent.trim();
            langMenu.classList.add('hidden');
          });
        });
        document.addEventListener('click', (e) => {
          if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.classList.add('hidden');
          }
        });
      }

      // Chart.js
      const ctx = document.getElementById('acqChart');
      if (ctx) {
        const d = Array.from({ length: 7 }, () => Math.round(300 + Math.random() * 400));
        const r = d.map(v => Math.round(v * (0.08 + Math.random() * 0.05)));
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'],
            datasets: [
              {
                label: 'Návštěvy',
                data: d,
                borderColor: 'rgb(56,189,248)',
                backgroundColor: 'rgba(56,189,248,0.15)',
                tension: 0.35,
                pointRadius: 0,
                fill: true
              },
              {
                label: 'Rezervace',
                data: r,
                borderColor: 'rgb(99,102,241)',
                backgroundColor: 'rgba(99,102,241,0.15)',
                tension: 0.35,
                pointRadius: 0,
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { color: '#d1d5db', boxWidth: 10, usePointStyle: true, pointStyle: 'circle' }
              },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.95)',
                titleColor: '#e5e7eb',
                bodyColor: '#d1d5db',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#9ca3af' }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#9ca3af' }
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-neutral-800 ring-1 ring-white/10 grid place-items-center">
<span className="text-neutral-100 text-sm font-semibold tracking-tight">R</span>
</div>
<span className="text-neutral-100 text-lg font-semibold tracking-tight">Rentori</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" data-i18n="nav.features" href="#features">Funkce</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" data-i18n="nav.integrations" href="#integrations">Integrace</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" data-i18n="nav.pricing" href="#pricing">Ceník</a>
</nav>

<div className="flex items-center gap-3">

<div className="relative">
<button className="group inline-flex items-center gap-2 px-3 h-9 rounded-md bg-neutral-900 ring-1 ring-white/10 hover:ring-white/20 text-sm font-medium" id="langBtn">
<i className="w-4 h-4 text-neutral-300" data-lucide="globe"></i>
<span className="text-neutral-200" id="langLabel">Čeština</span>
<i className="w-4 h-4 text-neutral-400 ml-0.5" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-40 rounded-md bg-neutral-900 ring-1 ring-white/10 shadow-xl overflow-hidden" id="langMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-800" data-lang="cs">Čeština</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-800" data-lang="en">English</button>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-3.5 h-9 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/10 text-sm font-semibold" href="#contact">
<i className="w-4.5 h-4.5 text-white" data-lucide="play-circle"></i>
<span data-i18n="nav.cta">Zkusit demo</span>
</a>
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md ring-1 ring-white/10 hover:bg-white/5" id="mobileMenuBtn">
<i className="w-5.5 h-5.5 text-neutral-200" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-900" id="mobileMenu">
<div className="px-4 py-3 space-y-2">
<a className="block px-3 py-2 rounded-md hover:bg-white/5" data-i18n="nav.features" href="#features">Funkce</a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5" data-i18n="nav.integrations" href="#integrations">Integrace</a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5" data-i18n="nav.pricing" href="#pricing">Ceník</a>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 mb-5">
<span className="text-xs text-neutral-300" data-i18n="hero.badge">Integrace s tržišti • Vložitelná rezervace</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white" data-i18n="hero.title">
              SaaS správa pronájmu
            </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl" data-i18n="hero.subtitle">
              Kompletní řešení pro správu pronájmu: inventář (položky, sety, prodej), objednávky, zákazníci, dokumenty a analytika. Propojte se s tržišti a vložte náš rezervační widget kamkoliv.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 px-4 h-11 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 text-sm font-semibold" href="#demo">
<i className="w-5 h-5" data-lucide="calendar-days"></i>
<span data-i18n="hero.primaryCta">Naplánovat demo</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-4 h-11 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/10 text-sm font-semibold" href="#integrations">
<i className="w-5 h-5 text-white" data-lucide="book-open"></i>
<span data-i18n="hero.secondaryCta">Zobrazit API</span>
</a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="text-xs text-neutral-400" data-i18n="hero.trusted">Důvěřováno pronajímateli v EU</div>
</div>
</div>
<div className="relative">
<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4">
<img alt="App preview" className="rounded-lg object-cover h-64 w-full" src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/25">
<i className="w-5 h-5 text-cyan-400" data-lucide="plug"></i>
</span>
<span className="text-sm text-neutral-200 font-medium" data-i18n="hero.card1.title">Integrace</span>
</div>
<p className="text-sm text-neutral-400 mt-2" data-i18n="hero.card1.desc">Synchronizace dostupnosti s tržišti.</p>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/25">
<i className="w-5 h-5 text-indigo-400" data-lucide="calendar"></i>
</span>
<span className="text-sm text-neutral-200 font-medium" data-i18n="hero.card2.title">Rezervace</span>
</div>
<p className="text-sm text-neutral-400 mt-2" data-i18n="hero.card2.desc">Vložitelný widget do vašeho webu.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-14 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">+27%</div>
<div className="text-sm text-neutral-400" data-i18n="metrics.m1">Vyšší konverze z tržišť</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">-42%</div>
<div className="text-sm text-neutral-400" data-i18n="metrics.m2">Méně dvojitých rezervací</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">3 min</div>
<div className="text-sm text-neutral-400" data-i18n="metrics.m3">Průměrné nasazení widgetu</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white" data-i18n="features.title">Postaveno pro růst pronájmů</h2>
<p className="mt-3 text-neutral-300" data-i18n="features.subtitle">Automatizujte akvizici zákazníků, synchronizujte inventář a přijímejte rezervace kdekoliv.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/25">
<i className="w-5 h-5 text-cyan-400" data-lucide="panels-top-left"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="features.f1.title">Hloubková integrace s tržišti</h3>
</div>
<p className="mt-2 text-sm text-neutral-400" data-i18n="features.f1.desc">Importujte nabídky, synchronizujte ceny a dostupnost. Využijte marketplace kanály pro akvizici.</p>
</div>

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/25">
<i className="w-5 h-5 text-indigo-400" data-lucide="code-2"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="features.f2.title">Vložitelný rezervační widget</h3>
</div>
<p className="mt-2 text-sm text-neutral-400" data-i18n="features.f2.desc">Jedna značka skriptu a vlastní HTML prvek. Plně přizpůsobitelný design i pravidla dostupnosti.</p>
</div>

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/25">
<i className="w-5 h-5 text-emerald-400" data-lucide="refresh-ccw"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="features.f3.title">Inventář a dostupnost v reálném čase</h3>
</div>
<p className="mt-2 text-sm text-neutral-400" data-i18n="features.f3.desc">Žádné dvojité rezervace. Okamžité aktualizace napříč kanály a webem.</p>
</div>

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-rose-500/10 ring-1 ring-rose-500/25">
<i className="w-5 h-5 text-rose-400" data-lucide="shield-check"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="features.f4.title">Bezpečnost a audit</h3>
</div>
<p className="mt-2 text-sm text-neutral-400" data-i18n="features.f4.desc">Role, přístupy a kompletní auditní stopa každé změny.</p>
</div>

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-amber-500/10 ring-1 ring-amber-500/25">
<i className="w-5 h-5 text-amber-400" data-lucide="webhook"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="features.f5.title">API a webhooky</h3>
</div>
<p className="mt-2 text-sm text-neutral-400" data-i18n="features.f5.desc">Napojení na ERP, účtárnu i vlastní front-endy přes stabilní API.</p>
</div>

<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-sky-500/10 ring-1 ring-sky-500/25">
<i className="w-5 h-5 text-sky-400" data-lucide="bar-chart-3"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="features.f6.title">Analytika konverzí</h3>
</div>
<p className="mt-2 text-sm text-neutral-400" data-i18n="features.f6.desc">Měřte návštěvnost z marketplace kanálů až po potvrzené rezervace.</p>
</div>
</div>

<div className="mt-8 rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-2">
<i className="w-5.5 h-5.5 text-neutral-300" data-lucide="layout-grid"></i>
<h3 className="text-base font-semibold tracking-tight text-white" data-i18n="features.modules.title">Moduly platformy</h3>
</div>
<div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
<div className="flex items-center gap-2 rounded-md bg-neutral-950 ring-1 ring-white/10 px-3 py-2">
<i className="w-4.5 h-4.5 text-emerald-400" data-lucide="list-tree"></i>
<span className="text-sm text-neutral-300" data-i18n="features.modules.i1">Inventář: položky k pronájmu, sety, prodejní položky</span>
</div>
<div className="flex items-center gap-2 rounded-md bg-neutral-950 ring-1 ring-white/10 px-3 py-2">
<i className="w-4.5 h-4.5 text-cyan-400" data-lucide="file-text"></i>
<span className="text-sm text-neutral-300" data-i18n="features.modules.i2">Objednávky a smlouvy</span>
</div>
<div className="flex items-center gap-2 rounded-md bg-neutral-950 ring-1 ring-white/10 px-3 py-2">
<i className="w-4.5 h-4.5 text-indigo-400" data-lucide="users"></i>
<span className="text-sm text-neutral-300" data-i18n="features.modules.i3">Zákazníci (CRM)</span>
</div>
<div className="flex items-center gap-2 rounded-md bg-neutral-950 ring-1 ring-white/10 px-3 py-2">
<i className="w-4.5 h-4.5 text-amber-400" data-lucide="signature"></i>
<span className="text-sm text-neutral-300" data-i18n="features.modules.i4">Dokumenty a e‑podpis</span>
</div>
<div className="flex items-center gap-2 rounded-md bg-neutral-950 ring-1 ring-white/10 px-3 py-2">
<i className="w-4.5 h-4.5 text-sky-400" data-lucide="line-chart"></i>
<span className="text-sm text-neutral-300" data-i18n="features.modules.i5">Analytika a přehledy</span>
</div>
<div className="flex items-center gap-2 rounded-md bg-neutral-950 ring-1 ring-white/10 px-3 py-2">
<i className="w-4.5 h-4.5 text-neutral-400" data-lucide="more-horizontal"></i>
<span className="text-sm text-neutral-300" data-i18n="features.modules.i6">…a další</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900" id="demo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-8">
<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white" data-i18n="demo.title">Vložitelný rezervační widget (náhled)</h3>
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-neutral-800 ring-1 ring-white/10">
<i className="w-5 h-5 text-neutral-300" data-lucide="square-mouse-pointer"></i>
</span>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-1" data-i18n="demo.from">Od</label>
<input className="w-full h-11 rounded-md bg-neutral-950 text-neutral-200 ring-1 ring-white/10 px-3 outline-none focus:ring-white/20" type="date"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" data-i18n="demo.to">Do</label>
<input className="w-full h-11 rounded-md bg-neutral-950 text-neutral-200 ring-1 ring-white/10 px-3 outline-none focus:ring-white/20" type="date"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" data-i18n="demo.unit">Jednotka</label>
<div className="relative">
<select className="appearance-none w-full h-11 rounded-md bg-neutral-950 text-neutral-200 ring-1 ring-white/10 px-3 pr-9 outline-none focus:ring-white/20">
<option>Sklad A</option>
<option>Vozidlo B</option>
<option>Přívěs C</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" data-i18n="demo.guests">Počet osob</label>
<input className="w-full h-11 rounded-md bg-neutral-950 text-neutral-200 ring-1 ring-white/10 px-3 outline-none focus:ring-white/20" min="1" type="number" value="2"/>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 h-11 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 text-sm font-semibold">
<i className="w-5 h-5" data-lucide="plus"></i>
<span data-i18n="demo.cta">Zkontrolovat dostupnost</span>
</button>
<span className="text-xs text-neutral-400" data-i18n="demo.note">Ukázka; skutečný widget vložíte jedinou značkou skriptu a vykreslením vlastního elementu.</span>
</div>
<div className="mt-6 rounded-lg bg-neutral-950 ring-1 ring-white/10 p-4">
<p className="text-xs text-neutral-400 mb-2" data-i18n="demo.embedTitle">Vložení widgetu</p>
<pre className="text-xs text-neutral-300 overflow-x-auto code-scroll"><code>&lt;rentori-reserve company="acme-rentals" theme="dark"&gt;&lt;/rentori-reserve&gt;
&lt;script src="https://cdn.rentori.example/reserve.js" async&gt;&lt;/script&gt;</code></pre>
</div>
</div>

<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white" data-i18n="analytics.title">Přehled akvizice</h3>
<div className="inline-flex items-center gap-2 text-xs text-neutral-400">
<span data-i18n="analytics.last7">Posledních 7 dní</span>
</div>
</div>
<p className="mt-1 text-sm text-neutral-400" data-i18n="analytics.subtitle">Srovnání návštěv z tržišť vs. potvrzené rezervace.</p>
<div className="mt-4">
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-3">
<div>
<canvas height="180" id="acqChart"></canvas>
</div>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-md bg-neutral-950 ring-1 ring-white/10 p-3">
<div className="text-sm text-neutral-400" data-i18n="analytics.m1">Z tržišť</div>
<div className="text-xl font-semibold tracking-tight text-white">4,281</div>
</div>
<div className="rounded-md bg-neutral-950 ring-1 ring-white/10 p-3">
<div className="text-sm text-neutral-400" data-i18n="analytics.m2">Rezervace</div>
<div className="text-xl font-semibold tracking-tight text-white">392</div>
</div>
<div className="rounded-md bg-neutral-950 ring-1 ring-white/10 p-3">
<div className="text-sm text-neutral-400" data-i18n="analytics.m3">Konverze</div>
<div className="text-xl font-semibold tracking-tight text-white">9.1%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-white" data-i18n="integrations.title">Integrace s tržišti a kanály</h2>
<p className="mt-3 text-neutral-300" data-i18n="integrations.desc">Napojení na marketplace API pro import nabídek, správy kalendářů a cenotvorby. Udržujte nabídky všude konzistentní.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-300" data-i18n="integrations.i1">Kalendáře a dostupnost v reálném čase</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-300" data-i18n="integrations.i2">Automatické stanovení cen a minimálních pobytů</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-400 mt-0.5" data-lucide="check"></i>
<span className="text-sm text-neutral-300" data-i18n="integrations.i3">Obousměrná synchronizace rezervací</span>
</li>
</ul>
</div>
<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/25">
<i className="w-5 h-5 text-cyan-400" data-lucide="server-cog"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="integrations.apiTitle">Jednoduché API</h3>
</div>
<p className="text-sm text-neutral-400 mt-1" data-i18n="integrations.apiDesc">Rychlý start s tokenem a webhooky pro synchronizaci událostí.</p>
<div className="mt-4 rounded-lg bg-neutral-950 ring-1 ring-white/10 p-4">
<pre className="text-xs text-neutral-300 overflow-x-auto code-scroll"><code># Autorizace
curl -X POST https://api.rentori.example/v1/auth \
  -H "Content-Type: application/json" \
  -d '{ "apiKey": "YOUR_API_KEY" }'

# Získání položek
curl https://api.rentori.example/v1/items \
  -H "Authorization: Bearer &lt;TOKEN&gt;"</code></pre>
</div>
<div className="mt-3 rounded-lg bg-neutral-950 ring-1 ring-white/10 p-4">
<pre className="text-xs text-neutral-300 overflow-x-auto code-scroll"><code>// Rezervace přes REST
fetch('https://api.rentori.example/v1/reservations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer &lt;TOKEN&gt;'
  },
  body: JSON.stringify({
    itemId: 'sku_123',
    from: '2025-11-01',
    to: '2025-11-05',
    customer: { name: 'Jan Novak', email: 'jan@example.com' }
  })
}).then(r =&gt; r.json()).then(console.log)</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white" data-i18n="pricing.title">Jednoduchý ceník</h2>
<p className="mt-3 text-neutral-300" data-i18n="pricing.subtitle">Začněte zdarma. Škálujte, jak rostete.</p>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-6">

<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-6 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="pricing.p1.title">Start</h3>
<p className="mt-1 text-sm text-neutral-400" data-i18n="pricing.p1.desc">Vložitelný widget, základní integrace.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-white">0 €</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li>• <span data-i18n="pricing.p1.f1">1 kanál tržiště</span></li>
<li>• <span data-i18n="pricing.p1.f2">100 rezervací/měsíc</span></li>
<li>• <span data-i18n="pricing.p1.f3">Základní podpora</span></li>
</ul>
<a className="mt-6 inline-flex justify-center px-4 h-11 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 text-sm font-semibold" data-i18n="pricing.cta" href="#contact">Začít</a>
</div>

<div className="rounded-xl bg-neutral-900 ring-2 ring-cyan-500/40 p-6 flex flex-col">
<div className="inline-flex self-start px-2 py-1 rounded-md bg-cyan-500/10 ring-1 ring-cyan-500/30 text-cyan-300 text-xs font-medium" data-i18n="pricing.badge">Nejoblíbenější</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white" data-i18n="pricing.p2.title">Growth</h3>
<p className="mt-1 text-sm text-neutral-400" data-i18n="pricing.p2.desc">Pokročilé integrace a automatizace.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-white">99 €</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li>• <span data-i18n="pricing.p2.f1">Vše ze Start</span></li>
<li>• <span data-i18n="pricing.p2.f2">Až 5 kanálů</span></li>
<li>• <span data-i18n="pricing.p2.f3">Prioritní podpora</span></li>
</ul>
<a className="mt-6 inline-flex justify-center px-4 h-11 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 text-sm font-semibold" data-i18n="pricing.cta" href="#contact">Začít</a>
</div>

<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-6 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-white" data-i18n="pricing.p3.title">Scale</h3>
<p className="mt-1 text-sm text-neutral-400" data-i18n="pricing.p3.desc">Neomezené kanály a SLA.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-white">299 €</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li>• <span data-i18n="pricing.p3.f1">Neomezené kanály</span></li>
<li>• <span data-i18n="pricing.p3.f2">SLA 99.9%</span></li>
<li>• <span data-i18n="pricing.p3.f3">Dedic. onboarding</span></li>
</ul>
<a className="mt-6 inline-flex justify-center px-4 h-11 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 text-sm font-semibold" data-i18n="pricing.cta" href="#contact">Začít</a>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900 ring-1 ring-white/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white" data-i18n="cta.title">Připraveni získat více rezervací?</h3>
<p className="mt-2 text-neutral-300" data-i18n="cta.desc">Domluvte si rychlé demo a vyzkoušejte integrace i widget během pár minut.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 px-4 h-11 rounded-md bg-white text-neutral-900 hover:bg-neutral-100 text-sm font-semibold" data-i18n="cta.primary" href="mailto:sales@example.com">Kontaktovat prodej</a>
<a className="inline-flex items-center gap-2 px-4 h-11 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/10 text-sm font-semibold" data-i18n="cta.secondary" href="#demo">Vyzkoušet widget</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-neutral-800 ring-1 ring-white/10 grid place-items-center">
<span className="text-neutral-100 text-sm font-semibold tracking-tight">R</span>
</div>
<span className="text-neutral-400 text-sm">© <span id="year"></span> Rentori</span>
</div>
<div className="flex items-center gap-5">
<a className="text-sm text-neutral-400 hover:text-neutral-200" data-i18n="footer.terms" href="#">Podmínky</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" data-i18n="footer.privacy" href="#">Ochrana soukromí</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" data-i18n="footer.status" href="#">Stav systému</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
