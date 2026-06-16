import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Icons
    lucide.createIcons();

    // Radar chart
    const ctx = document.getElementById('radarMaturity');
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Vision', 'Données', 'Compétences', 'Cas d\'usage', 'Gouvernance', 'Delivery'],
          datasets: [
            {
              label: 'État actuel',
              data: [2, 2.5, 2, 2, 1.5, 2],
              borderColor: 'rgb(79, 70, 229)',
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              pointBackgroundColor: 'rgb(79, 70, 229)',
              borderWidth: 2
            },
            {
              label: 'Objectif 90j',
              data: [4, 4, 3.5, 4, 4, 4],
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              pointBackgroundColor: 'rgb(16, 185, 129)',
              borderWidth: 2
            }
          ]
        },
        options: {
          plugins: { 
            legend: { display: false }
          },
          scales: {
            r: {
              angleLines: { color: 'rgba(0,0,0,0.1)' },
              grid: { color: 'rgba(0,0,0,0.1)' },
              suggestedMin: 0,
              suggestedMax: 5,
              pointLabels: { 
                color: '#525252', 
                font: { size: 12, weight: '500' }
              },
              ticks: { display: false }
            }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200">
<div className="mx-auto max-w-6xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="/">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Nova IA</span>
</a>
<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition" href="#offre">Offre</a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition" href="#approche">Approche</a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition" href="#formations">Formations</a>
<a className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition" href="#tarifs">Tarifs</a>
<a className="ml-2 px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition" href="/auth/login">Se connecter</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition" href="/auth/join">
            Démarrer
          </a>
</nav>
<button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-neutral-100" id="menuBtn">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="hidden md:hidden pb-4" id="mobileMenu">
<div className="mt-2 grid gap-1">
<a className="px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg" href="#offre">Offre</a>
<a className="px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg" href="#approche">Approche</a>
<a className="px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg" href="#formations">Formations</a>
<a className="px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg" href="#tarifs">Tarifs</a>
<a className="px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 rounded-lg" href="/auth/login">Se connecter</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium" href="/auth/join">Démarrer</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white" id="offre">
<div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
            Conseil &amp; formations IA pour PME suisses
          </div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
            Passez de l'idée aux résultats
          </h1>
<p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Diagnostic express, feuille de route 90 jours et formations pratiques pour transformer vos processus avec l'IA. Des quick wins concrets, sans jargon.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition" href="/auth/join">
              Demander un diagnostic gratuit
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white hover:bg-neutral-50 px-6 py-3.5 font-semibold text-neutral-900 transition" href="#approche">
              Voir notre méthode
            </a>
</div>
<div className="mt-10 flex items-center gap-8 text-sm text-neutral-600">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>90 jours max</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Résultats mesurables</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>100% pratique</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-100 to-indigo-50 blur-3xl opacity-60"></div>
<img alt="Équipe travaillant avec l'IA" className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl ring-1 ring-neutral-900/10" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white">
<div className="mx-auto max-w-6xl px-6 py-12">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-4xl font-bold text-indigo-600">90j</p>
<p className="mt-2 text-sm text-neutral-600">Feuille de route</p>
</div>
<div className="text-center">
<p className="text-4xl font-bold text-indigo-600">+6</p>
<p className="mt-2 text-sm text-neutral-600">Cas d'usage typiques</p>
</div>
<div className="text-center">
<p className="text-4xl font-bold text-indigo-600">x2</p>
<p className="mt-2 text-sm text-neutral-600">Vitesse prototypage</p>
</div>
<div className="text-center">
<p className="text-4xl font-bold text-indigo-600">3</p>
<p className="mt-2 text-sm text-neutral-600">Parcours formation</p>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="mx-auto max-w-6xl px-6 py-20">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Vous reconnaissez ces défis ?</h2>
<p className="mt-4 text-lg text-neutral-600">Les obstacles que rencontrent la plupart des PME qui veulent adopter l'IA</p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 hover:border-indigo-200 hover:shadow-lg transition">
<div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
<svg className="w-6 h-6 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold text-neutral-900">Par où commencer ?</h3>
<p className="mt-3 text-neutral-600">Trop d'options, pas de vision claire ni de priorités définies.</p>
</div>
<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 hover:border-indigo-200 hover:shadow-lg transition">
<div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
<svg className="w-6 h-6 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold text-neutral-900">Données dispersées</h3>
<p className="mt-3 text-neutral-600">Informations en silos, qualité incertaine et accès compliqué.</p>
</div>
<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 hover:border-indigo-200 hover:shadow-lg transition">
<div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
<svg className="w-6 h-6 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold text-neutral-900">Manque de compétences</h3>
<p className="mt-3 text-neutral-600">Équipes non formées et dépendance aux prestataires externes.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50" id="approche">
<div className="mx-auto max-w-6xl px-6 py-20">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Notre approche en 4 étapes</h2>
<p className="mt-4 text-lg text-neutral-600">Un parcours structuré pour passer de l'idée aux résultats en 90 jours</p>
</div>
<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="relative">
<div className="flex items-center justify-center">
<div className="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">1</div>
</div>
<h3 className="mt-6 text-center text-xl font-semibold text-neutral-900">Découvrir</h3>
<p className="mt-3 text-center text-sm text-neutral-600">Entretiens, cartographie processus et analyse des données disponibles</p>
</div>
<div className="relative">
<div className="flex items-center justify-center">
<div className="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">2</div>
</div>
<h3 className="mt-6 text-center text-xl font-semibold text-neutral-900">Diagnostiquer</h3>
<p className="mt-3 text-center text-sm text-neutral-600">Évaluation maturité IA, identification opportunités et risques clés</p>
</div>
<div className="relative">
<div className="flex items-center justify-center">
<div className="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">3</div>
</div>
<h3 className="mt-6 text-center text-xl font-semibold text-neutral-900">Designer</h3>
<p className="mt-3 text-center text-sm text-neutral-600">Atelier priorisation, business cases et feuille de route 90 jours</p>
</div>
<div className="relative">
<div className="flex items-center justify-center">
<div className="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">4</div>
</div>
<h3 className="mt-6 text-center text-xl font-semibold text-neutral-900">Délivrer</h3>
<p className="mt-3 text-center text-sm text-neutral-600">Prototypes, quick wins et coaching pour l'implémentation</p>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="mx-auto max-w-6xl px-6 py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Ce que vous obtenez</h2>
<p className="mt-4 text-lg text-neutral-600">Des livrables concrets et actionnables dès la fin de la mission</p>
<ul className="mt-8 space-y-4">
<li className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div>
<p className="font-semibold text-neutral-900">Feuille de route 90 jours</p>
<p className="text-sm text-neutral-600">Cas d'usage priorisés, KPIs et plan d'action détaillé</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div>
<p className="font-semibold text-neutral-900">Matrice maturité IA</p>
<p className="text-sm text-neutral-600">État actuel vs cible sur 6 dimensions clés</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="font-semibold text-neutral-900">Cadre de gouvernance</p>
<p className="text-sm text-neutral-600">Sécurité, conformité et gestion des risques</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-indigo-100 flex items-center justify-center">
<svg className="w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<p className="font-semibold text-neutral-900">Plan de formation</p>
<p className="text-sm text-neutral-600">Parcours adaptés pour vos équipes</p>
</div>
</li>
</ul>
</div>
<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-xl">
<div className="aspect-square">
<canvas id="radarMaturity"></canvas>
</div>
<div className="mt-6 flex items-center justify-center gap-6 text-sm">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-indigo-600"></span>
<span className="text-neutral-600">État actuel</span>
</div>
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-emerald-500"></span>
<span className="text-neutral-600">Objectif 90j</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50" id="formations">
<div className="mx-auto max-w-6xl px-6 py-20">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Nos formations pratiques</h2>
<p className="mt-4 text-lg text-neutral-600">3 parcours complémentaires pour maîtriser l'IA dans votre entreprise</p>
</div>
<div className="mt-12 grid gap-8 lg:grid-cols-3">

<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 hover:border-indigo-600 hover:shadow-xl transition">
<div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center">
<svg className="w-6 h-6 text-emerald-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<h3 className="mt-6 text-xl font-semibold text-neutral-900">Premiers pas avec l'IA</h3>
<p className="mt-3 text-neutral-600">Comprendre les fondamentaux et tester les outils essentiels</p>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Panorama IA &amp; cas d'usage</span>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Prompting &amp; automatisations</span>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Sécurité &amp; confidentialité</span>
</div>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
<span className="px-3 py-1 rounded-full bg-neutral-100">1 jour</span>
<span className="px-3 py-1 rounded-full bg-neutral-100">Débutant</span>
</div>
</div>

<div className="rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-xl relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">Populaire</div>
<div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center">
<svg className="w-6 h-6 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
</div>
<h3 className="mt-6 text-xl font-semibold text-neutral-900">Stratégie IA pour dirigeants</h3>
<p className="mt-3 text-neutral-600">Construire une vision et piloter la transformation</p>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Vision &amp; alignement business</span>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Modèle ROI &amp; roadmap 90j</span>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Gouvernance &amp; conformité</span>
</div>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
<span className="px-3 py-1 rounded-full bg-neutral-100">1 jour</span>
<span className="px-3 py-1 rounded-full bg-neutral-100">CODIR</span>
</div>
</div>

<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 hover:border-indigo-600 hover:shadow-xl transition">
<div className="h-12 w-12 rounded-xl bg-sky-100 flex items-center justify-center">
<svg className="w-6 h-6 text-sky-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="mt-6 text-xl font-semibold text-neutral-900">De la stratégie aux projets</h3>
<p className="mt-3 text-neutral-600">Prioriser, prototyper et délivrer vos cas d'usage</p>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Atelier de priorisation</span>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Prototypage guidé</span>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Plan d'adoption</span>
</div>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
<span className="px-3 py-1 rounded-full bg-neutral-100">2 jours</span>
<span className="px-3 py-1 rounded-full bg-neutral-100">Équipes</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white" id="tarifs">
<div className="mx-auto max-w-6xl px-6 py-20">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Tarifs transparents</h2>
<p className="mt-4 text-lg text-neutral-600">Choisissez la formule adaptée à vos besoins. Tous les prix sont en CHF HT.</p>
</div>

<div className="mt-12 grid gap-8 md:grid-cols-3">
<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8">
<div className="text-center">
<p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Solo</p>
<p className="mt-4 text-5xl font-bold text-neutral-900">950 CHF</p>
<p className="mt-2 text-sm text-neutral-600">par personne / jour</p>
</div>
<ul className="mt-8 space-y-4 text-sm">
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Sessions inter-entreprises</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Supports &amp; modèles inclus</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Accès ressources 30 jours</span>
</li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-900 bg-white hover:bg-neutral-50 px-6 py-3 font-semibold text-neutral-900 transition" href="/auth/join">
            S'inscrire
          </a>
</div>
<div className="rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-2xl scale-105">
<div className="text-center">
<p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Équipe</p>
<p className="mt-4 text-5xl font-bold text-neutral-900">1 500 CHF</p>
<p className="mt-2 text-sm text-neutral-600">2 personnes / jour</p>
</div>
<ul className="mt-8 space-y-4 text-sm">
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Sessions inter-entreprises</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Supports &amp; modèles inclus</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Accès ressources 60 jours</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600"><strong>Tarif préférentiel</strong></span>
</li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 font-semibold text-white shadow-lg transition" href="/auth/join">
            S'inscrire
          </a>
</div>
<div className="rounded-2xl border-2 border-neutral-200 bg-white p-8">
<div className="text-center">
<p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Intra-entreprise</p>
<p className="mt-4 text-5xl font-bold text-neutral-900">4 500 CHF</p>
<p className="mt-2 text-sm text-neutral-600">jusqu'à 12 pers. / jour</p>
</div>
<ul className="mt-8 space-y-4 text-sm">
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Sur site ou distanciel</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Personnalisation secteur</span>
</li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-600">Atelier cas d'usage</span>
</li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-900 bg-white hover:bg-neutral-50 px-6 py-3 font-semibold text-neutral-900 transition" href="/auth/join">
            Demander un devis
          </a>
</div>
</div>

<div className="mt-16 rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-10">
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-2xl font-bold text-neutral-900">Mission de conseil complète</h3>
<p className="mt-3 text-neutral-700">Diagnostic, feuille de route, coaching et implémentation des premiers cas d'usage</p>
<div className="mt-8 inline-flex items-baseline gap-2">
<span className="text-5xl font-bold text-neutral-900">8 500 CHF</span>
<span className="text-lg text-neutral-600">forfait</span>
</div>
<div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-left">
<div className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-700">Diagnostic express (2j)</span>
</div>
<div className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-700">Atelier priorisation (1j)</span>
</div>
<div className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-700">Feuille de route 90j</span>
</div>
<div className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-700">Coaching implémentation (3 mois)</span>
</div>
<div className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-700">Gouvernance &amp; sécurité</span>
</div>
<div className="flex gap-3">
<svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-700">KPIs &amp; mesure d'impact</span>
</div>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 px-8 py-4 font-semibold text-white shadow-xl transition" href="/auth/join">
            Demander un diagnostic gratuit
          </a>
</div>
</div>
<div className="mt-12 text-center text-sm text-neutral-600">
<p>🇨🇭 Tous les prix sont en CHF HT • TVA suisse applicable selon le cas</p>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-6xl px-6 py-12">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-lg font-semibold text-neutral-900">Nova IA</span>
</div>
<p className="mt-3 text-sm text-neutral-600">Conseil et formations IA pour PME suisses.</p>
</div>
<div>
<p className="font-semibold text-neutral-900 text-sm">Navigation</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#offre">Offre</a></li>
<li><a className="hover:text-neutral-900" href="#approche">Approche</a></li>
<li><a className="hover:text-neutral-900" href="#formations">Formations</a></li>
<li><a className="hover:text-neutral-900" href="#tarifs">Tarifs</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-neutral-900 text-sm">Ressources</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#">Cas d'usage</a></li>
<li><a className="hover:text-neutral-900" href="#">Guides pratiques</a></li>
<li><a className="hover:text-neutral-900" href="/privacy">Confidentialité</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-neutral-900 text-sm">Contact</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li>Zurich • Genève • Lausanne</li>
<li>hello@novaiaconsulting.ch</li>
<li>+41 44 567 89 00</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
<p>© 2025 Nova IA Conseil. Tous droits réservés.</p>
<p>🇨🇭 Basé en Suisse</p>
</div>
</div>
</footer>


    </>
  );
}
