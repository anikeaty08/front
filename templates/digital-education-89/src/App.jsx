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



    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(isHidden));
      });

      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Form behavior (demo)
    const form = document.getElementById('programForm');
    const notice = document.getElementById('formNotice');
    const fillExample = document.getElementById('fillExample');

    const fields = {
      prenom: document.getElementById('prenom'),
      email: document.getElementById('email'),
      objectif: document.getElementById('objectif'),
      domaine: document.getElementById('domaine'),
      niveau: document.getElementById('niveau')
    };

    function showNotice() {
      notice.classList.remove('hidden');
      notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => notice.classList.add('hidden'), 4500);
    }

    if (fillExample) {
      fillExample.addEventListener('click', () => {
        fields.prenom.value = 'Nadia';
        fields.email.value = 'nadia@exemple.com';
        fields.objectif.value = 'Structurer mes compétences pour l’emploi';
        fields.domaine.value = 'Je veux un parcours mixte';
        fields.niveau.value = 'Intermédiaire';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const missing =
          !fields.prenom.value.trim() ||
          !fields.email.value.trim() ||
          !fields.objectif.value ||
          !fields.domaine.value ||
          !fields.niveau.value;

        if (missing) {
          alert('Merci de compléter tous les champs pour recevoir le programme.');
          return;
        }

        // Simulate sending
        showNotice();
        form.reset();
      });
    }

    // Footer year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  
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
      

<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#top">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-white">ST</span>
</span>
<span className="text-sm font-semibold tracking-tight text-white">STUDENS</span>
<span className="hidden text-xs text-slate-300/80 sm:inline">Infrastructure pédagogique digitale</span>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#piliers">Piliers</a>
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#diagnostic">Diagnostic</a>
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#resultats">Résultats</a>
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#programme">Programme</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition" href="#programme">
          Recevoir le programme
        </a>
<button aria-controls="mobileMenu" aria-expanded="false" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15 transition md:hidden" id="menuBtn">
          Menu
        </button>
</div>
</div>
<div className="hidden border-t border-white/10 bg-slate-950/90 backdrop-blur md:hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
<div className="flex flex-col gap-2">
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/5 hover:text-white transition" href="#piliers">Piliers</a>
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/5 hover:text-white transition" href="#diagnostic">Diagnostic</a>
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/5 hover:text-white transition" href="#resultats">Résultats</a>
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/5 hover:text-white transition" href="#programme">Programme</a>
<a className="mt-1 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition" href="#programme">
            Recevoir le programme
          </a>
</div>
</div>
</div>
</header>

<main className="relative" id="top">
<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute -bottom-24 right-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]"></div>
</div>
<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-20">
<div className="relative lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200/80 ring-1 ring-white/10">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            Écosystème de compétences — Design • Office 365 • IA
          </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Les compétences modernes.
            <span className="text-white/90">Structurées.</span>
<span className="text-white/90">Applicables.</span>
<span className="text-white/90">Performantes.</span>
</h1>
<p className="mt-5 max-w-2xl text-base text-slate-200/80 sm:text-lg">
            Design, Bureautique Microsoft 365 et IA &amp; Automatisation : STUDENS t’aide à maîtriser les outils essentiels pour rester compétitif — avec des parcours progressifs, une méthode, et des livrables concrets.
          </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-indigo-400 transition" href="#piliers">
              Découvrir les parcours
              <span className="text-white/90">→</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold tracking-tight text-white ring-1 ring-white/10 hover:bg-white/15 transition" href="#programme">
              Recevoir le programme
              <span className="text-white/80">↘</span>
</a>
</div>
<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Positionnement</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Infrastructure pédagogique</p>
<p className="mt-1 text-xs text-slate-200/70">Pas une simple liste de cours</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Approche</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Progressive &amp; guidée</p>
<p className="mt-1 text-xs text-slate-200/70">Objectifs → exercices → livrables</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Impact</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Performance au quotidien</p>
<p className="mt-1 text-xs text-slate-200/70">Vitesse, clarté, autonomie</p>
</div>
</div>
</div>

<div className="relative lg:col-span-5">
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-4 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-rose-400/90"></span>
<span className="inline-flex h-2 w-2 rounded-full bg-amber-300/90"></span>
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/90"></span>
</div>
<p className="text-xs font-semibold tracking-tight text-slate-200/80">Tableau de progression</p>
</div>
<div className="mt-4 grid gap-3">
<div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
<iconify-icon icon="solar:palette-round-linear" style={{fontSize: '1.25rem', color: 'rgba(199,210,254,0.95)'}}></iconify-icon>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Design</p>
<p className="text-xs text-slate-200/70">UI • Systèmes • Portfolio</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-slate-200/70">Focus</p>
<p className="text-sm font-semibold tracking-tight text-white">Figma + Adobe</p>
</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-7/12 rounded-full bg-indigo-400/80"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/70">
<span>Modules</span><span>7 / 12</span>
</div>
</div>
<div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-cyan-400/20">
<iconify-icon icon="solar:widget-2-linear" style={{fontSize: '1.25rem', color: 'rgba(165,243,252,0.95)'}}></iconify-icon>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Office 365</p>
<p className="text-xs text-slate-200/70">Production • Organisation</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-slate-200/70">Compétence</p>
<p className="text-sm font-semibold tracking-tight text-white">Rapidité</p>
</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-5/12 rounded-full bg-cyan-300/80"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/70">
<span>Scénarios</span><span>4 / 10</span>
</div>
</div>
<div className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/20">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.25rem', color: 'rgba(167,243,208,0.95)'}}></iconify-icon>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">IA &amp; Automatisation</p>
<p className="text-xs text-slate-200/70">Workflows • No-code</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-slate-200/70">Gain</p>
<p className="text-sm font-semibold tracking-tight text-white">Temps</p>
</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-3/12 rounded-full bg-emerald-300/80"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-200/70">
<span>Workflows</span><span>3 / 9</span>
</div>
</div>
</div>
<div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Promesse</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-white">Un système — pour apprendre, pratiquer, appliquer</p>
<p className="mt-1 text-xs text-slate-200/70">Des compétences modernes, alignées sur le terrain : études, freelance, entreprise.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950">
<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Pourquoi ces 3 piliers sont essentiels aujourd’hui</h2>
<p className="mt-3 text-sm text-slate-200/80 sm:text-base">
              Les outils changent vite. Ce qui fait la différence, c’est une structure claire : apprendre les fondamentaux, pratiquer avec méthode, et transformer la compétence en performance quotidienne.
            </p>
<div className="mt-6 flex flex-col gap-3">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition sm:self-start" href="#programme">
                Recevoir le programme complet
              </a>
<p className="text-xs text-slate-200/70">Inclus : diagnostic personnalisé + recommandations par profil.</p>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
<iconify-icon icon="solar:pen-new-square-linear" style={{fontSize: '1.375rem', color: 'rgba(199,210,254,0.95)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-white">Le Design</p>
<p className="mt-1 text-xs text-slate-200/70">Créer, structurer, communiquer visuellement.</p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-cyan-400/20">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.375rem', color: 'rgba(165,243,252,0.95)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-white">La Bureautique</p>
<p className="mt-1 text-xs text-slate-200/70">Produire vite, organiser, standardiser.</p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/7 transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/20">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.375rem', color: 'rgba(167,243,208,0.95)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-white">L’IA</p>
<p className="mt-1 text-xs text-slate-200/70">Automatiser, accélérer, augmenter la qualité.</p>
</div>
</div>
<div className="mt-6 rounded-3xl bg-gradient-to-r from-white/8 to-white/5 p-6 ring-1 ring-white/10">
<p className="text-xs font-semibold tracking-tight text-slate-200/80">Lecture simple</p>
<p className="mt-2 text-sm text-slate-200/80 sm:text-base">
<span className="font-semibold text-white">Design</span> te donne la forme et la clarté •
                <span className="font-semibold text-white">Office 365</span> te donne la vitesse et l’exécution •
                <span className="font-semibold text-white">IA</span> te donne l’automatisation et le levier.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-white text-slate-900" id="piliers">
<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Les 3 piliers STUDENS</h2>
<p className="mt-2 text-sm text-slate-600 sm:text-base max-w-2xl">
              Chaque pilier est un parcours progressif : fondamentaux → méthodes → cas pratiques → livrables. Tu avances avec une logique de système, pas au hasard.
            </p>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-slate-900 transition sm:self-start" href="#programme">
            Demander un accès
          </a>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

<article className="group rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="flex items-start justify-between gap-4">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-100">
<iconify-icon icon="solar:palette-round-linear" style={{fontSize: '1.5rem', color: 'rgba(79,70,229,0.95)'}}></iconify-icon>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-tight text-slate-700">PILIER 01</span>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Design &amp; Création Digitale</h3>
<p className="mt-2 text-sm text-slate-600">
              Maîtrise Figma, la Suite Adobe et la méthodologie UX/UI pour produire des interfaces nettes, cohérentes et prêtes pour le réel.
            </p>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(79,70,229,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Figma</span> : UI, Design System, prototypage</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(79,70,229,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Adobe</span> : Photoshop, Illustrator, InDesign, After Effects</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(79,70,229,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700">Branding &amp; Portfolio</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(79,70,229,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700">Méthodologie UX/UI</p>
</li>
</ul>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<a className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-indigo-500 transition" href="#programme">
                Voir les formations Design
              </a>
<a className="text-sm font-semibold tracking-tight text-slate-900 hover:text-slate-950 transition" href="#programme">
                Recevoir le programme →
              </a>
</div>
</article>

<article className="group rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="flex items-start justify-between gap-4">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-100">
<iconify-icon icon="solar:widget-2-linear" style={{fontSize: '1.5rem', color: 'rgba(8,145,178,0.95)'}}></iconify-icon>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-tight text-slate-700">PILIER 02</span>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Productivité &amp; Bureautique</h3>
<p className="mt-2 text-sm text-slate-600">
              Excel, Word, PowerPoint, Outlook &amp; Teams pour devenir rapide, autonome, et fiable — avec des méthodes réutilisables.
            </p>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-50 ring-1 ring-cyan-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(8,145,178,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Excel avancé</span> &amp; automatisation</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-50 ring-1 ring-cyan-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(8,145,178,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">PowerPoint</span> impactant</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-50 ring-1 ring-cyan-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(8,145,178,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Word</span> professionnel</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-50 ring-1 ring-cyan-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(8,145,178,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700">Organisation <span className="font-semibold text-slate-900">Outlook &amp; Teams</span></p>
</li>
</ul>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<a className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-cyan-500 transition" href="#programme">
                Voir les formations Bureautique
              </a>
<a className="text-sm font-semibold tracking-tight text-slate-900 hover:text-slate-950 transition" href="#programme">
                Recevoir le programme →
              </a>
</div>
</article>

<article className="group rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="flex items-start justify-between gap-4">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem', color: 'rgba(5,150,105,0.95)'}}></iconify-icon>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-tight text-slate-700">PILIER 03</span>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">IA &amp; Automatisation</h3>
<p className="mt-2 text-sm text-slate-600">
              Utilise ChatGPT et des workflows intelligents pour gagner du temps, standardiser la qualité, et automatiser les tâches répétitives.
            </p>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(5,150,105,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700"><span className="font-semibold text-slate-900">Prompt engineering</span></p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(5,150,105,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700">Automatisation <span className="font-semibold text-slate-900">no-code</span></p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(5,150,105,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700">Workflows intelligents</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.125rem', color: 'rgba(5,150,105,0.9)'}}></iconify-icon>
</span>
<p className="text-sm text-slate-700">Productivité augmentée</p>
</li>
</ul>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<a className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-emerald-500 transition" href="#programme">
                Voir les formations IA
              </a>
<a className="text-sm font-semibold tracking-tight text-slate-900 hover:text-slate-950 transition" href="#programme">
                Recevoir le programme →
              </a>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="diagnostic">
<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-7">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Tu ne sais pas par quoi commencer ?</h2>
<p className="mt-3 text-sm text-slate-200/80 sm:text-base max-w-2xl">
              Fais le diagnostic gratuit et découvre ton parcours idéal selon ton profil (étudiant, reconversion, freelance, PME, administratif, créatif) et ton objectif (rapidité, qualité, autonomie, employabilité).
            </p>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<p className="text-xs font-semibold tracking-tight text-slate-200/80">En 2 minutes</p>
<p className="mt-2 text-sm text-slate-200/80">Un aperçu clair de ton point de départ et de tes priorités.</p>
</div>
<div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<p className="text-xs font-semibold tracking-tight text-slate-200/80">Recommandations</p>
<p className="mt-2 text-sm text-slate-200/80">Le pilier à attaquer, l’ordre idéal, et les livrables à viser.</p>
</div>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition" href="#programme">
                Faire le diagnostic
              </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold tracking-tight text-white ring-1 ring-white/10 hover:bg-white/15 transition" href="#programme">
                Recevoir le programme complet
              </a>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/10">
<p className="text-xs font-semibold tracking-tight text-slate-200/80">Ce que tu obtiens</p>
<div className="mt-4 space-y-3">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.25rem', color: 'rgba(199,210,254,0.95)'}}></iconify-icon>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Parcours recommandé</p>
<p className="text-xs text-slate-200/70">Ordre de progression + focus par priorité.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-cyan-400/20">
<iconify-icon icon="solar:clipboard-text-linear" style={{fontSize: '1.25rem', color: 'rgba(165,243,252,0.95)'}}></iconify-icon>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Programme complet</p>
<p className="text-xs text-slate-200/70">Modules, objectifs, livrables, prérequis.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/20">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.25rem', color: 'rgba(167,243,208,0.95)'}}></iconify-icon>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Cadre rassurant</p>
<p className="text-xs text-slate-200/70">Une structure claire pour avancer sans dispersion.</p>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Important</p>
<p className="mt-1 text-sm text-slate-200/80">
                  STUDENS n’est pas “plus de contenu”. C’est <span className="font-semibold text-white">un système d’apprentissage</span> pour transformer des outils en compétence durable.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-white text-slate-900">
<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Pourquoi STUDENS est différent</h2>
<p className="mt-3 text-sm text-slate-600 sm:text-base">
              Le but n’est pas d’“apprendre des outils”. Le but est de construire une base solide, alignée sur tes usages réels, et de la rendre exploitable immédiatement.
            </p>
<div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
<p className="text-xs font-semibold tracking-tight text-white/80">Le principe</p>
<p className="mt-2 text-lg font-semibold tracking-tight">
                Une compétence = une méthode + des cas + des standards.
              </p>
<p className="mt-2 text-sm text-white/80">
                Tu ressors avec des modèles, des réflexes, et des workflows réutilisables (pas juste des notions).
              </p>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition sm:w-auto" href="#programme">
                Recevoir le programme
              </a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200">
<iconify-icon icon="solar:layers-linear" style={{fontSize: '1.375rem', color: 'rgba(15,23,42,0.9)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-slate-950">Parcours structurés et progressifs</p>
<p className="mt-2 text-sm text-slate-600">Tu sais quoi faire, dans quel ordre, et pourquoi.</p>
</div>
<div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200">
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '1.375rem', color: 'rgba(15,23,42,0.9)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-slate-950">Compétences applicables immédiatement</p>
<p className="mt-2 text-sm text-slate-600">Tu produis des livrables, pas des résumés.</p>
</div>
<div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200">
<iconify-icon icon="solar:target-linear" style={{fontSize: '1.375rem', color: 'rgba(15,23,42,0.9)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-slate-950">Approche orientée performance</p>
<p className="mt-2 text-sm text-slate-600">Vitesse, qualité, standardisation, autonomie.</p>
</div>
<div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-slate-200">
<iconify-icon icon="solar:briefcase-linear" style={{fontSize: '1.375rem', color: 'rgba(15,23,42,0.9)'}}></iconify-icon>
</div>
<p className="mt-4 text-sm font-semibold tracking-tight text-slate-950">Vision employabilité et autonomie</p>
<p className="mt-2 text-sm text-slate-600">Compétences transférables : études, mission, entreprise.</p>
</div>
</div>
<div className="mt-6 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm text-slate-700">
                  Tu veux le détail des modules + le parcours recommandé selon ton niveau ?
                </p>
<a className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-slate-900 transition" href="#programme">
                  Recevoir le programme complet
                </a>
</div>
<p className="mt-3 text-xs text-slate-500">Objectif secondaire : recevoir le programme complet. Objectif principal : demander un accès.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-slate-950" id="resultats">
<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Résultats concrets</h2>
<p className="mt-2 text-sm text-slate-200/80 sm:text-base max-w-2xl">
              Quand tu structures tes compétences, tu réduis la friction : moins d’hésitation, moins de rework, plus de livrables, plus vite.
            </p>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition sm:self-start" href="#programme">
            Commencer maintenant
          </a>
</div>
<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Temps gagné</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Plusieurs heures / semaine</p>
<p className="mt-2 text-sm text-slate-200/80">Raccourcis, modèles, workflows, automatisations.</p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Compétences structurées</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">100%</p>
<p className="mt-2 text-sm text-slate-200/80">Progression claire : fondamentaux → maîtrise.</p>
</div>
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<p className="text-xs text-slate-200/70">Applicabilité immédiate</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Oui</p>
<p className="mt-2 text-sm text-slate-200/80">Livrables et standards réutilisables dès demain.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-white text-slate-900" id="programme">
<div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
<div className="lg:col-span-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Ne subis plus les outils. Maîtrise-les.</h2>
<p className="mt-3 text-sm text-slate-600 sm:text-base max-w-xl">
              Reçois le programme complet et commence à structurer tes compétences : Design, Office 365, IA &amp; Automatisation. On te renvoie aussi un diagnostic personnalisé selon ton objectif et ton niveau.
            </p>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
<p className="text-sm font-semibold tracking-tight text-slate-950">Pour qui</p>
<p className="mt-2 text-sm text-slate-600">Étudiants, reconversions, freelances, PME, équipes administratives, profils créatifs.</p>
</div>
<div className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
<p className="text-sm font-semibold tracking-tight text-slate-950">Ce que tu reçois</p>
<p className="mt-2 text-sm text-slate-600">Modules, objectifs, recommandations et prochain meilleur pas.</p>
</div>
</div>
<div className="mt-7 rounded-3xl bg-slate-950 p-6 text-white">
<p className="text-xs font-semibold tracking-tight text-white/80">Engagement</p>
<p className="mt-2 text-sm text-white/80">
                On privilégie la clarté : tu sais exactement quoi apprendre, pourquoi, et comment l’appliquer.
              </p>
<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition" href="#leadForm">
                  Recevoir le programme
                </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold tracking-tight text-white ring-1 ring-white/10 hover:bg-white/15 transition" href="#leadForm">
                  Demander un accès
                </a>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-semibold tracking-tight text-slate-500">Formulaire</p>
<h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl" id="leadForm">Recevoir le programme complet + diagnostic personnalisé</h3>
<p className="mt-2 text-sm text-slate-600">Remplis, reçois le programme, puis on te recommande un parcours clair.</p>
</div>
<div className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-100">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.5rem', color: 'rgba(79,70,229,0.95)'}}></iconify-icon>
</div>
</div>
<form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" id="programForm">
<div className="sm:col-span-1">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="prenom">Prénom</label>
<input autocomplete="given-name" className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="prenom" name="prenom" placeholder="Ex. Sara" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="email">Email</label>
<input autocomplete="email" className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="email" name="email" placeholder="ex. sara@domaine.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="objectif">Objectif principal</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-2xl bg-white px-4 py-3 pr-10 text-sm text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="objectif" name="objectif" required="">
<option disabled="" selected="" value="">Choisir un objectif</option>
<option>Devenir plus rapide au quotidien</option>
<option>Améliorer la qualité de mes livrables</option>
<option>Structurer mes compétences pour l’emploi</option>
<option>Automatiser des tâches répétitives</option>
<option>Créer un portfolio et une offre claire</option>
</select>
<span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem', color: 'rgba(100,116,139,0.9)'}}></iconify-icon>
</span>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="domaine">Domaine d’intérêt</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-2xl bg-white px-4 py-3 pr-10 text-sm text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="domaine" name="domaine" required="">
<option disabled="" selected="" value="">Choisir un domaine</option>
<option>Design</option>
<option>Office</option>
<option>IA</option>
<option>Je veux un parcours mixte</option>
</select>
<span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem', color: 'rgba(100,116,139,0.9)'}}></iconify-icon>
</span>
</div>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold tracking-tight text-slate-700" htmlFor="niveau">Niveau</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-2xl bg-white px-4 py-3 pr-10 text-sm text-slate-900 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="niveau" name="niveau" required="">
<option disabled="" selected="" value="">Choisir un niveau</option>
<option>Débutant</option>
<option>Intermédiaire</option>
<option>Avancé</option>
</select>
<span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem', color: 'rgba(100,116,139,0.9)'}}></iconify-icon>
</span>
</div>
</div>
<div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-indigo-500 transition" type="submit">
                    Recevoir le programme
                  </button>
<button className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold tracking-tight text-white hover:bg-slate-900 transition" id="fillExample" type="button">
                    Pré-remplir un exemple
                  </button>
</div>
<div className="sm:col-span-2">
<div className="hidden rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100" id="formNotice">
<p className="text-sm font-semibold tracking-tight text-emerald-900">Demande envoyée.</p>
<p className="mt-1 text-sm text-emerald-800/80">
                      Nous préparons ton programme + diagnostic. Vérifie ta boîte mail (et tes spams).
                    </p>
</div>
<p className="mt-2 text-xs text-slate-500">
                    En envoyant ce formulaire, tu acceptes de recevoir des informations liées à STUDENS. Désinscription possible à tout moment.
                  </p>
</div>
</form>
<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Temps</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-slate-950">2 minutes</p>
</div>
<div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Format</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-slate-950">Programme + reco</p>
</div>
<div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Objectif</p>
<p className="mt-1 text-sm font-semibold tracking-tight text-slate-950">Accès + progression</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950">
<div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div>
<div className="inline-flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-white">ST</span>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">STUDENS</p>
<p className="text-xs text-slate-200/70">Compétences modernes, structurées</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-200/70 max-w-sm">
              Infrastructure pédagogique digitale : Design, Productivité, IA &amp; Automatisation — pensée pour la performance et l’autonomie.
            </p>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Liens</p>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#piliers">Piliers</a></li>
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#diagnostic">Diagnostic</a></li>
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#resultats">Résultats</a></li>
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#programme">Programme</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Contact</p>
<ul className="mt-4 space-y-2">
<li className="text-sm text-slate-200/70">Email : <a className="hover:text-white transition" href="#programme">contact@studens.fr</a></li>
<li className="text-sm text-slate-200/70">Support : <a className="hover:text-white transition" href="#programme">Demander un accès</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Mentions légales</p>
<ul className="mt-4 space-y-2">
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#">Mentions légales</a></li>
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#">Politique de confidentialité</a></li>
<li><a className="text-sm text-slate-200/70 hover:text-white transition" href="#">CGU</a></li>
</ul>
<p className="mt-6 text-sm font-semibold tracking-tight text-white">Réseaux</p>
<div className="mt-3 flex items-center gap-2">
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition" href="#">
                LinkedIn
              </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition" href="#">
                YouTube
              </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition" href="#">
                Instagram
              </a>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-xs text-slate-200/60">© <span id="year"></span> STUDENS. Tous droits réservés.</p>
<a className="text-xs font-semibold tracking-tight text-slate-200/70 hover:text-white transition" href="#programme">Recevoir le programme →</a>
</div>
</div>
</footer>

<div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/80 backdrop-blur sm:hidden">
<div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
<a className="flex-1 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold tracking-tight text-white hover:bg-indigo-400 transition" href="#programme">
          Commencer maintenant
        </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-white/90 transition" href="#programme">
          Programme
        </a>
</div>
</div>

<div className="h-20 sm:hidden"></div>
</main>


    </>
  );
}
