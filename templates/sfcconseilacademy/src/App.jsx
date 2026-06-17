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
          window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
        document.getElementById('year').textContent = new Date().getFullYear();
      });

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          mobileBtn.innerHTML = '';
          const icon = document.createElement('i');
          icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
          icon.className = 'w-5 h-5 text-zinc-200';
          icon.style.strokeWidth = 1.5;
          mobileBtn.appendChild(icon);
          window.lucide && window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      }

      // Smooth close mobile menu on click
      document.querySelectorAll('#mobileMenu a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });

      // FAQ toggle
      document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('button');
        const panel = item.querySelector('.faq-panel');
        btn.addEventListener('click', () => {
          const open = !panel.classList.contains('hidden');
          document.querySelectorAll('.faq-panel').forEach(p => p.classList.add('hidden'));
          document.querySelectorAll('.faq-item i[data-lucide]').forEach(i => {
            i.setAttribute('data-lucide', 'plus');
          });
          if (!open) {
            panel.classList.remove('hidden');
            const icon = btn.querySelector('i[data-lucide]');
            icon.setAttribute('data-lucide', 'minus');
          } else {
            panel.classList.add('hidden');
          }
          window.lucide && window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      });

      // Fixed contact button scroll
      document.getElementById('fixedContactBtn').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      });

      // Contact form: send via Formspree (replace endpoint)
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-id'; // Remplacez par votre endpoint Formspree
      const form = document.getElementById('contactForm');
      const toast = document.getElementById('toast');
      const toastContent = document.getElementById('toast-content');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData(form);
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
          });
          if (res.ok) {
            showToast('Votre demande a bien été envoyée. Nous revenons vers vous très vite.', 'check-circle');
            form.reset();
          } else {
            showToast("Échec de l'envoi. Merci de réessayer ou d'écrire à contact@sfcconseil.com.", 'alert-circle');
          }
        } catch (err) {
          showToast("Échec de l'envoi. Merci de réessayer ou d'écrire à contact@sfcconseil.com.", 'alert-circle');
        }
      });

      function showToast(message, iconName) {
        toastContent.innerHTML = '';
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', iconName);
        icon.className = 'w-4 h-4 text-amber-300';
        icon.style.strokeWidth = 1.5;
        const span = document.createElement('span');
        span.textContent = message;
        toastContent.appendChild(icon);
        toastContent.appendChild(span);
        window.lucide && window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 4000);
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-60">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"></div>
<div className="absolute -top-[30vh] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl bg-amber-500/5"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/60">
<div className="mx-auto max-w-screen-xl px-4">
<div className="flex items-center justify-between h-16">
<a className="group inline-flex items-center gap-2" href="#accueil">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-400/90 to-yellow-300/80 ring-1 ring-amber-300/40 flex items-center justify-center">
<span className="text-neutral-900 text-sm font-semibold tracking-tight">sf</span>
</div>
<span className="text-lg md:text-xl font-semibold tracking-tight">sfcconseil</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-zinc-300 hover:text-white transition-colors" href="#accueil">Accueil</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#apropos">À propos</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#cas">Études de cas</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#insights">Insights</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-neutral-900 font-medium tracking-tight px-4 py-2 shadow-sm ring-1 ring-amber-300/50 hover:shadow-amber-400/10 transition-all" href="#contact" role="button">
<i className="w-4 h-4" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
              Réserver une consultation
            </a>
</div>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md ring-1 ring-neutral-800 hover:bg-neutral-900 transition-colors" id="mobileMenuBtn">
<i className="w-5 h-5 text-zinc-200" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="md:hidden hidden border-t border-neutral-800/60" id="mobileMenu">
<div className="px-4 py-3 flex flex-col gap-3 text-sm">
<a className="text-zinc-300 hover:text-white transition-colors" href="#accueil">Accueil</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#apropos">À propos</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#cas">Études de cas</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#insights">Insights</a>
<a className="text-zinc-300 hover:text-white transition-colors" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-neutral-900 font-medium tracking-tight px-4 py-2 ring-1 ring-amber-300/50" href="#contact" role="button">
<i className="w-4 h-4" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
            Réserver une consultation
          </a>
</div>
</div>
</header>
<main id="accueil">

<section className="relative">
<div className="mx-auto max-w-screen-xl px-4 pt-16 md:pt-24 pb-16 md:pb-24">
<div className="grid md:grid-cols-12 gap-10 items-center">
<div className="md:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 text-xs text-amber-300/90 ring-1 ring-amber-300/20 rounded-full px-2.5 py-1 bg-amber-300/5">
<i className="w-3.5 h-3.5" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
                Cabinet conseil premium en influence, image et réputation
              </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
                Maîtrisez votre image. Influencez la narration. Gagnez la confiance.
              </h1>
<p className="text-base md:text-lg text-zinc-300">
                sfcconseil propulse dirigeants, marques et organisations avec des stratégies de relations publiques, de crise et de réputation conçues pour l’impact mesurable.
              </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-neutral-900 font-medium tracking-tight px-5 py-3 ring-1 ring-amber-300/50 shadow-sm hover:shadow-amber-400/10 transition-all" href="#contact" role="button">
<i className="w-5 h-5" data-lucide="phone-call" style={{strokeWidth: '1.5'}}></i>
                  Réserver une consultation
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 ring-1 ring-neutral-800 text-zinc-200 hover:bg-neutral-900 transition-all" href="#services">
<i className="w-5 h-5 text-amber-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
                  Découvrir nos expertises
                </a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 text-xs text-zinc-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="trophy" style={{strokeWidth: '1.5'}}></i>
                  75+ placements premium
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
                  Réputation moyenne +42%
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="timer" style={{strokeWidth: '1.5'}}></i>
                  Crises résolues &lt; 72h
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="broadcast" style={{strokeWidth: '1.5'}}></i>
                  Reach média x7.3
                </div>
</div>
</div>
<div className="md:col-span-5">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950">
<div className="absolute inset-0">
<svg className="w-full h-full opacity-80" viewbox="0 0 400 400">
<defs>
<radialgradient cx="50%" cy="50%" id="g" r="50%">
<stop offset="0%" stop-color="rgba(251,191,36,0.6)"></stop>
<stop offset="100%" stop-color="rgba(10,10,10,0.0)"></stop>
</radialgradient>
</defs>
<rect fill="url(#g)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="space-y-2">
<div className="text-xs text-zinc-400">Signature Program</div>
<div className="text-xl font-semibold tracking-tight">Executive Reputation Suite</div>
<div className="text-sm text-zinc-300">
                        Pilotage complet de l’image dirigeant, relations médias, stratégie de visibilité et gestion proactive des risques.
                      </div>
<div className="pt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-xs text-amber-300">
<i className="w-4 h-4" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
                          Protection
                        </span>
<span className="inline-flex items-center gap-2 text-xs text-amber-300">
<i className="w-4 h-4" data-lucide="radar" style={{strokeWidth: '1.5'}}></i>
                          Veille
                        </span>
<span className="inline-flex items-center gap-2 text-xs text-amber-300">
<i className="w-4 h-4" data-lucide="mic" style={{strokeWidth: '1.5'}}></i>
                          Influence
                        </span>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 hidden md:block">
<div className="rounded-xl bg-neutral-900/80 backdrop-blur ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-1">Confiance</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-amber-400/80 ring-2 ring-neutral-900"></div>
<div className="h-6 w-6 rounded-full bg-yellow-300/80 ring-2 ring-neutral-900"></div>
<div className="h-6 w-6 rounded-full bg-zinc-200/80 ring-2 ring-neutral-900"></div>
</div>
<div className="text-sm text-zinc-200">+120 clients accompagnés</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-14">
<div className="text-xs text-zinc-500 mb-3">Ils nous font confiance</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
<div className="text-zinc-400/80 text-sm font-medium tracking-tight">ALPHA</div>
<div className="text-zinc-400/80 text-sm font-medium tracking-tight">MÉDIAX</div>
<div className="text-zinc-400/80 text-sm font-medium tracking-tight">NOVA</div>
<div className="text-zinc-400/80 text-sm font-medium tracking-tight">ELYT</div>
<div className="text-zinc-400/80 text-sm font-medium tracking-tight">ORION</div>
<div className="text-zinc-400/80 text-sm font-medium tracking-tight">VANTAGE</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="reasons">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="grid md:grid-cols-12 gap-10 items-start">
<div className="md:col-span-5 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Pourquoi nous choisir</h2>
<p className="text-zinc-300">
                Une approche conseil tournée résultats, un pilotage senior et des méthodes éprouvées pour transformer votre capital réputationnel en avantage concurrentiel.
              </p>
<ul className="text-sm text-zinc-300 space-y-2">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-amber-300 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i> Gouvernance d’image pour dirigeants et marques</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-amber-300 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i> Méthodologies de gestion de crise éprouvées</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-amber-300 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i> Mesures avancées: media impact, sentiment, share of voice</li>
</ul>
</div>
<div className="md:col-span-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-950/60">
<div className="text-2xl font-semibold tracking-tight">+75</div>
<div className="text-xs text-zinc-400">placements premium/an</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-950/60">
<div className="text-2xl font-semibold tracking-tight">+42%</div>
<div className="text-xs text-zinc-400">hausse score réputation</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-950/60">
<div className="text-2xl font-semibold tracking-tight">72h</div>
<div className="text-xs text-zinc-400">résolution moyenne</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-950/60">
<div className="text-2xl font-semibold tracking-tight">7.3x</div>
<div className="text-xs text-zinc-400">ROI média moyen</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="apropos">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="grid md:grid-cols-12 gap-10">
<div className="md:col-span-5 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">À propos</h2>
<p className="text-zinc-300">
                sfcconseil est un cabinet conseil en relations publiques et communication.
                Nous orchestrons votre visibilité, maîtrisons vos narratifs et protégeons vos actifs de réputation.
              </p>
</div>
<div className="md:col-span-7 grid sm:grid-cols-3 gap-6">
<div className="rounded-2xl ring-1 ring-neutral-800 p-6 bg-neutral-950/60">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-amber-300" data-lucide="compass" style={{strokeWidth: '1.5'}}></i>
<div className="text-sm font-medium tracking-tight">Vision</div>
</div>
<div className="text-sm text-zinc-300">Faire de la réputation un actif stratégique et mesurable au service de la performance.</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 p-6 bg-neutral-950/60">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-amber-300" data-lucide="target" style={{strokeWidth: '1.5'}}></i>
<div className="text-sm font-medium tracking-tight">Mission</div>
</div>
<div className="text-sm text-zinc-300">Concevoir et exécuter des stratégies PR &amp; Communication orientées résultats, avec pilotage senior.</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 p-6 bg-neutral-950/60">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-amber-300" data-lucide="gem" style={{strokeWidth: '1.5'}}></i>
<div className="text-sm font-medium tracking-tight">Valeurs</div>
</div>
<div className="text-sm text-zinc-300">Excellence, confidentialité, impact, responsabilité.</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="services">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h2>
<p className="text-zinc-300 text-sm mt-2">Des offres modulaires, pilotées par des consultants seniors, orientées résultats.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition-colors" href="#contact">
<i className="w-4 h-4" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i>
              Parler à un expert
            </a>
</div>
<div className="grid gap-6 md:grid-cols-2">

<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="megaphone" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Relations Publiques</h3>
</div>
<span className="text-xs text-zinc-400">Influence</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Développer votre présence dans les médias pertinents et façonner des narratifs qui engagent vos audiences clés.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i> Visibilité qualifiée</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i> Leadership d’opinion</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check" style={{strokeWidth: '1.5'}}></i> Accès rédactionnel</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Cadrage narratif &amp; messages</li>
<li>Mapping médias &amp; prise de contact</li>
<li>Suivi, mesure &amp; itérations</li>
</ol>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Communication stratégique</h3>
</div>
<span className="text-xs text-zinc-400">Stratégie</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Architecture de vos messages, plan de communication, alignement business et gouvernance éditoriale.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Clarté et cohérence</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Alignement dirigeants</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Impact mesurable</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Audit &amp; alignement</li>
<li>Feuille de route multicanale</li>
<li>Gouvernance &amp; reporting</li>
</ol>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="user-cog" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Personal Branding</h3>
</div>
<span className="text-xs text-zinc-400">Dirigeants</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Construction d’une marque personnelle cohérente, crédible et influente, on et offline.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Autorité &amp; confiance</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Opportunités médias</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Rayonnement ciblé</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Positionnement &amp; story</li>
<li>Écosystème contenus</li>
<li>Relations médias &amp; speaking</li>
</ol>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="alert-triangle" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Gestion de crise &amp; e-réputation</h3>
</div>
<span className="text-xs text-zinc-400">Protection</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Anticipation, réponse et remédiation. Protocoles, war-room, monitoring et reconstruction.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Exposition limitée</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Contrôle narratif</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Rétablissement accéléré</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Diagnostic &amp; scénarios</li>
<li>Activation &amp; porte-paroles</li>
<li>Rebuild &amp; capital confiance</li>
</ol>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="globe-2" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Stratégie digitale &amp; storytelling</h3>
</div>
<span className="text-xs text-zinc-400">Narratif</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Architecture narrative, social leadership, éditorial premium, formats propriétaires et amplification.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Cohérence omnicanale</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Engagement accru</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> KPI pilotés</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Strategy room</li>
<li>Design narratif &amp; contenus</li>
<li>Amplification &amp; mesure</li>
</ol>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="mic-2" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Accompagnement médias</h3>
</div>
<span className="text-xs text-zinc-400">Presse</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Media training, porte-parolat, préparation interviews et optimisation des prises de parole.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Messages maîtrisés</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Confiance plateau</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Impact interview</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Ateliers &amp; coaching</li>
<li>Simulations &amp; Q&amp;A</li>
<li>Debrief &amp; optimisation</li>
</ol>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-amber-300" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-xl font-semibold tracking-tight">Pitching presse &amp; rédaction</h3>
</div>
<span className="text-xs text-zinc-400">Contenus</span>
</div>
<p className="text-sm text-zinc-300 mt-3">
                Dossiers de presse, tribunes, notes de position et pitchs calibrés pour les rédactions qui comptent.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Bénéfices</div>
<ul className="text-sm space-y-2 text-zinc-300">
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Narratifs percutants</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Taux d’ouverture élevés</li>
<li className="flex gap-2"><i className="w-4 h-4 text-amber-300" data-lucide="check"></i> Délai à l’antenne réduit</li>
</ul>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4">
<div className="text-xs text-zinc-400 mb-2">Processus (3 étapes)</div>
<ol className="text-sm space-y-2 text-zinc-300 list-decimal list-inside">
<li>Angle &amp; preuves</li>
<li>Rédaction &amp; assets</li>
<li>Pitch &amp; relances</li>
</ol>
</div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-neutral-900 font-medium tracking-tight px-5 py-3 ring-1 ring-amber-300/50" href="#contact" role="button">
<i className="w-5 h-5" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
              Planifier un diagnostic gratuit
            </a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 ring-1 ring-neutral-800 text-zinc-200 hover:bg-neutral-900 transition-all" href="#contact">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
              Nous contacter
            </a>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="cas">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Études de cas</h2>
<p className="text-zinc-300 text-sm mt-2">Avant / Après, résultats concrets et retours clients.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200" href="#contact">
<i className="w-4 h-4" data-lucide="book-open" style={{strokeWidth: '1.5'}}></i>
              Demander un use case détaillé
            </a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-950/60">
<div className="p-6 space-y-4">
<div className="text-sm font-medium tracking-tight">Repositionnement dirigeant</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-xl ring-1 ring-neutral-800 p-3 bg-neutral-900">
<div className="text-zinc-400 mb-1">Avant</div>
<div className="text-zinc-200">Faible présence, messages dispersés</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3 bg-neutral-900">
<div className="text-amber-300 mb-1">Après</div>
<div className="text-zinc-200">Tribunes mensuelles, plateaux TV réguliers</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">+320%</div>
<div className="text-xs text-zinc-400">Audience</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">+48%</div>
<div className="text-xs text-zinc-400">Sentiment positif</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">-60%</div>
<div className="text-xs text-zinc-400">Risque perçu</div>
</div>
</div>
<div className="text-xs text-zinc-400">Secteur: Tech B2B • Durée: 6 mois</div>
</div>
<div className="border-t border-neutral-900 p-6">
<blockquote className="text-sm text-zinc-300">
                  “Pilotage pointu, résultats tangibles. sfcconseil a transformé notre crédibilité médiatique.”
                </blockquote>
<div className="mt-3 text-xs text-zinc-400">— CEO, ALPHA</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-950/60">
<div className="p-6 space-y-4">
<div className="text-sm font-medium tracking-tight">Gestion de crise e-commerce</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-xl ring-1 ring-neutral-800 p-3 bg-neutral-900">
<div className="text-zinc-400 mb-1">Avant</div>
<div className="text-zinc-200">Bad buzz social, articles négatifs</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3 bg-neutral-900">
<div className="text-amber-300 mb-1">Après</div>
<div className="text-zinc-200">Narratif rectifié, mea culpa maîtrisé</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">72h</div>
<div className="text-xs text-zinc-400">Stabilisation</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">-68%</div>
<div className="text-xs text-zinc-400">Volume négatif</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">+3.1x</div>
<div className="text-xs text-zinc-400">Earned reach</div>
</div>
</div>
<div className="text-xs text-zinc-400">Secteur: Retail • Durée: 4 semaines</div>
</div>
<div className="border-t border-neutral-900 p-6">
<blockquote className="text-sm text-zinc-300">
                  “Une war-room exemplaire, des messages précis. Nous avons repris la main rapidement.”
                </blockquote>
<div className="mt-3 text-xs text-zinc-400">— Directrice Communication, NOVA</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-950/60">
<div className="p-6 space-y-4">
<div className="text-sm font-medium tracking-tight">Stratégie médiatique SaaS</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-xl ring-1 ring-neutral-800 p-3 bg-neutral-900">
<div className="text-zinc-400 mb-1">Avant</div>
<div className="text-zinc-200">Peu de brand awareness</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3 bg-neutral-900">
<div className="text-amber-300 mb-1">Après</div>
<div className="text-zinc-200">Couvertures sectorielles &amp; mainstream</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">+210%</div>
<div className="text-xs text-zinc-400">Share of Voice</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">+36%</div>
<div className="text-xs text-zinc-400">Trafic qualifié</div>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-3">
<div className="text-lg font-semibold tracking-tight">+19%</div>
<div className="text-xs text-zinc-400">Conversion PR</div>
</div>
</div>
<div className="text-xs text-zinc-400">Secteur: SaaS • Durée: 3 mois</div>
</div>
<div className="border-t border-neutral-900 p-6">
<blockquote className="text-sm text-zinc-300">
                  “Une stratégie nette, des placements clés et un reporting limpide.”
                </blockquote>
<div className="mt-3 text-xs text-zinc-400">— VP Marketing, ORION</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="insights">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Insights</h2>
<p className="text-zinc-300 text-sm mt-2">Analyses, tendances et bonnes pratiques en PR &amp; communication.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200" href="#contact">
<i className="w-4 h-4" data-lucide="rss" style={{strokeWidth: '1.5'}}></i>
              Proposer un sujet
            </a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<article className="rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-950/60">
<div className="p-6 space-y-3">
<div className="text-xs text-zinc-400">Stratégie • 7 min</div>
<h3 className="text-lg font-semibold tracking-tight">Construire un narratif dirigeant qui engage</h3>
<p className="text-sm text-zinc-300">Frameworks et erreurs à éviter pour une prise de parole crédible et mémorable.</p>
</div>
<div className="border-t border-neutral-900 p-6 flex items-center justify-between text-sm">
<a className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200" href="#">
                  Lire
                  <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<span className="text-xs text-zinc-500">07.2025</span>
</div>
</article>
<article className="rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-950/60">
<div className="p-6 space-y-3">
<div className="text-xs text-zinc-400">Crise • 6 min</div>
<h3 className="text-lg font-semibold tracking-tight">War-room: 10 actions dans la première heure</h3>
<p className="text-sm text-zinc-300">De l’alerte à la stabilisation: protocoles et responsabilités clés.</p>
</div>
<div className="border-t border-neutral-900 p-6 flex items-center justify-between text-sm">
<a className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200" href="#">
                  Lire
                  <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<span className="text-xs text-zinc-500">06.2025</span>
</div>
</article>
<article className="rounded-2xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-950/60">
<div className="p-6 space-y-3">
<div className="text-xs text-zinc-400">Réputation • 8 min</div>
<h3 className="text-lg font-semibold tracking-tight">Mesurer l’impact PR au-delà des impressions</h3>
<p className="text-sm text-zinc-300">Sentiment, SOV, authority score: le tableau de bord qui compte.</p>
</div>
<div className="border-t border-neutral-900 p-6 flex items-center justify-between text-sm">
<a className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200" href="#">
                  Lire
                  <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<span className="text-xs text-zinc-500">05.2025</span>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="faq">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">FAQ</h2>
<p className="text-zinc-300 text-sm mt-2">Questions fréquentes sur l’accompagnement et notre approche.</p>
</div>
<div className="mt-8 max-w-3xl">
<div className="divide-y divide-neutral-900 ring-1 ring-neutral-800 rounded-2xl overflow-hidden">

<div className="faq-item">
<button className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-neutral-900/50 transition-colors">
<span className="text-sm font-medium tracking-tight text-zinc-200">Quels résultats concrets puis-je attendre ?</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-panel hidden px-5 pb-5 text-sm text-zinc-300">
                  Les KPI typiques incluent placements qualifiés, sentiment, SOV, reach, trafic référent, demandes inbounds et indicateurs de risque.
                </div>
</div>
<div className="faq-item">
<button className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-neutral-900/50 transition-colors">
<span className="text-sm font-medium tracking-tight text-zinc-200">Travaillez-vous en confidentialité ?</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-panel hidden px-5 pb-5 text-sm text-zinc-300">
                  Oui. Protocoles stricts, NDA systématique, circuits d’information maîtrisés et canaux sécurisés.
                </div>
</div>
<div className="faq-item">
<button className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-neutral-900/50 transition-colors">
<span className="text-sm font-medium tracking-tight text-zinc-200">Quel est le format de collaboration ?</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-panel hidden px-5 pb-5 text-sm text-zinc-300">
                  Retainer mensuel piloté par un directeur conseil, avec sprints thématiques et points hebdomadaires.
                </div>
</div>
<div className="faq-item">
<button className="w-full flex items-center justify-between gap-4 px-5 py-4 hover:bg-neutral-900/50 transition-colors">
<span className="text-sm font-medium tracking-tight text-zinc-200">Pouvez-vous intervenir en urgence ?</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="faq-panel hidden px-5 pb-5 text-sm text-zinc-300">
                  Oui, activation 24/7 en mode crise. Mise en place d’une war-room et d’un plan d’actions dans l’heure.
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="contact">
<div className="mx-auto max-w-screen-xl px-4 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h2>
<p className="text-zinc-300 text-sm mt-2">Décrivez vos enjeux, nous revenons vers vous sous 24h ouvrées.</p>
<div className="mt-6 rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<form className="grid sm:grid-cols-2 gap-4" id="contactForm">
<input name="_subject" type="hidden" value="Nouvelle demande de contact — sfcconseil"/>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">Nom complet</label>
<input className="mt-1 w-full bg-neutral-900 text-zinc-100 rounded-lg ring-1 ring-neutral-800 px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-amber-300/50" name="name" placeholder="Nom Prénom" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">Email professionnel</label>
<input className="mt-1 w-full bg-neutral-900 text-zinc-100 rounded-lg ring-1 ring-neutral-800 px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-amber-300/50" name="email" placeholder="vous@entreprise.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">Société</label>
<input className="mt-1 w-full bg-neutral-900 text-zinc-100 rounded-lg ring-1 ring-neutral-800 px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-amber-300/50" name="company" placeholder="Entreprise" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">Objet</label>
<input className="mt-1 w-full bg-neutral-900 text-zinc-100 rounded-lg ring-1 ring-neutral-800 px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-amber-300/50" name="subject" placeholder="Ex: Lancement produit, crise, PR" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-zinc-400">Budget estimatif</label>
<select className="mt-1 w-full bg-neutral-900 text-zinc-100 rounded-lg ring-1 ring-neutral-800 px-3 py-2 focus:outline-none focus:ring-amber-300/50" name="budget">
<option>— À définir</option>
<option>Jusqu’à 5 000€</option>
<option>5 000€ — 15 000€</option>
<option>15 000€ — 50 000€</option>
<option>50 000€ +</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-zinc-400">Message</label>
<textarea className="mt-1 w-full bg-neutral-900 text-zinc-100 rounded-lg ring-1 ring-neutral-800 px-3 py-2 placeholder-zinc-500 focus:outline-none focus:ring-amber-300/50" name="message" placeholder="Présentez brièvement vos objectifs et contraintes." rows="5"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="text-xs text-zinc-400">
                      Consultation gratuite de 30 minutes. Confidentiel.
                    </div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-neutral-900 font-medium tracking-tight px-5 py-3 ring-1 ring-amber-300/50" type="submit">
<i className="w-5 h-5" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                        Envoyer la demande
                      </button>
</div>
</div>
</form>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
<div className="rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-950/60">
<div className="text-xs text-zinc-400">Email</div>
<a className="text-zinc-200 hover:text-white" href="mailto:contact@sfcconseil.com">contact@sfcconseil.com</a>
</div>
<div className="rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-950/60">
<div className="text-xs text-zinc-400">Bureau</div>
<div className="text-zinc-200">Paris • Sur rendez-vous</div>
</div>
</div>
</div>
<div className="lg:pl-8">

<div className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-950/60 p-6">
<div className="text-sm font-medium tracking-tight mb-3">Packs recommandés</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-900">
<div>
<div className="text-sm text-zinc-200">PR Accélération</div>
<div className="text-xs text-zinc-400">3 mois • focus placements</div>
</div>
<div className="text-xs text-amber-300">Dès 8k€/mois</div>
</div>
<div className="flex items-center justify-between rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-900">
<div>
<div className="text-sm text-zinc-200">Executive Reputation</div>
<div className="text-xs text-zinc-400">6 mois • dirigeant</div>
</div>
<div className="text-xs text-amber-300">Sur mesure</div>
</div>
<div className="flex items-center justify-between rounded-xl ring-1 ring-neutral-800 p-4 bg-neutral-900">
<div>
<div className="text-sm text-zinc-200">Crisis Readiness</div>
<div className="text-xs text-zinc-400">Pack crise • 48h</div>
</div>
<div className="text-xs text-amber-300">À partir de 12k€</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="border-t border-neutral-900/80">
<div className="mx-auto max-w-screen-xl px-4 py-8">
<div className="rounded-2xl ring-1 ring-neutral-800 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-center sm:text-left">
<div className="text-lg font-semibold tracking-tight">Prêt à piloter votre réputation comme un actif stratégique ?</div>
<div className="text-sm text-zinc-300">Réservez une consultation gratuite de 30 minutes.</div>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-neutral-900 font-medium tracking-tight px-5 py-3 ring-1 ring-amber-300/50" href="#contact" role="button">
<i className="w-5 h-5" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
              Réserver maintenant
            </a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 ring-1 ring-neutral-800 text-zinc-200 hover:bg-neutral-900 transition-all" href="#contact">
<i className="w-5 h-5" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
              Écrire à un conseiller
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-900/80">
<div className="mx-auto max-w-screen-xl px-4 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-400/90 to-yellow-300/80 ring-1 ring-amber-300/40 flex items-center justify-center">
<span className="text-neutral-900 text-sm font-semibold tracking-tight">sf</span>
</div>
<span className="text-lg font-semibold tracking-tight">sfcconseil</span>
</div>
<p className="text-sm text-zinc-400 mt-3">Agence conseil en PR &amp; Communication haut de gamme.</p>
</div>
<div>
<div className="text-sm font-medium tracking-tight mb-3">Expertises</div>
<ul className="text-sm text-zinc-300 space-y-2">
<li>Relations Publiques</li>
<li>Communication stratégique</li>
<li>Personal Branding</li>
<li>Gestion de crise &amp; e-réputation</li>
<li>Stratégie digitale &amp; storytelling</li>
<li>Accompagnement médias</li>
<li>Pitching presse &amp; rédaction</li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight mb-3">Ressources</div>
<ul className="text-sm text-zinc-300 space-y-2">
<li><a className="hover:text-white" href="#insights">Insights</a></li>
<li><a className="hover:text-white" href="#faq">FAQ</a></li>
<li><a className="hover:text-white" href="#cas">Études de cas</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight mb-3">Contact</div>
<ul className="text-sm text-zinc-300 space-y-2">
<li><a className="hover:text-white" href="mailto:contact@sfcconseil.com">contact@sfcconseil.com</a></li>
<li>Paris • Sur rendez-vous</li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="text-xs text-zinc-500">© <span id="year"></span> sfcconseil. Tous droits réservés.</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<a className="hover:text-zinc-300" href="#">Mentions légales</a>
<a className="hover:text-zinc-300" href="#">Confidentialité</a>
<a className="hover:text-zinc-300" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<button className="fixed left-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-neutral-900/90 backdrop-blur px-4 py-2 ring-1 ring-neutral-800 text-zinc-200 hover:bg-neutral-800 transition-all" id="fixedContactBtn">
<i className="w-4 h-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
      Contact
    </button>

<div className="hidden fixed top-4 right-4 z-[70] rounded-xl bg-neutral-900 ring-1 ring-neutral-800 px-4 py-3 text-sm text-zinc-200" id="toast">
<div className="flex items-center gap-2" id="toast-content">
<i className="w-4 h-4 text-amber-300" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
        Votre demande a bien été envoyée. Nous revenons vers vous très vite.
      </div>
</div>


    </>
  );
}
