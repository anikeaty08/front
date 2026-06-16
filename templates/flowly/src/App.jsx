import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons
      document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
      });

      function showSignIn() {
        document.getElementById('signin-modal').classList.remove('hidden');
        setTimeout(() => lucide.createIcons(), 50);
      }

      function showSignUp() {
        document.getElementById('signup-modal').classList.remove('hidden');
        setTimeout(() => lucide.createIcons(), 50);
      }

      function closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
      }

      // Redirection vers le dashboard après succès
      function handleSignIn(e) {
        e.preventDefault();
        window.location.href = '/dashboard';
      }

      function handleSignUp(e) {
        e.preventDefault();
        window.location.href = '/dashboard';
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 overflow-hidden -z-10">
<div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blob bg-indigo-200"></div>
<div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-blob bg-fuchsia-200"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blob bg-cyan-200"></div>
</div>

<header className="px-6 py-4 glass animate-fade-in">
<div className="flex max-w-7xl mx-auto items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex bg-[#0d0d0d] w-8 h-8 rounded-xl items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight">Flowly</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#features">Fonctionnalités</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#pricing">Tarifs</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<button className="hover:bg-gray-100 transition-all text-sm rounded-lg pt-2 pr-4 pb-2 pl-4" onclick="showSignIn()">Connexion</button>
<button className="hover:bg-gray-800 transition-all hover:scale-105 text-sm text-white bg-[#000000] rounded-lg px-4 py-2" onclick="showSignUp()">Créer un compte</button>
</div>
</div>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="text-left">
<h1 className="md:text-6xl animate-fade-in text-5xl font-semibold tracking-tight" style={{}}>Organisez votre vie avec simplicité</h1>
<p className="mt-6 text-xl text-gray-600 max-w-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
            Tâches, objectifs, habitudes, notes et agenda — dans une interface claire et transparente.
          </p>
<div className="mt-10 flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
<button className="hover:bg-gray-800 transition-all hover:scale-105 text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#3d3d3d] to-[#000000] rounded-lg px-6 py-3" onclick="showSignUp()">Commencer gratuitement</button>
<a className="px-6 py-3 glass rounded-lg hover:bg-white transition-all hover:scale-105" href="#pricing">Voir les tarifs</a>
</div>
</div>
<div className="glass rounded-3xl overflow-hidden">
<img alt="Dashboard preview" className="w-full h-96 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05739f84-a612-4117-bbef-20e54ac1b0f1_1600w.png"/>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="features">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Tout ce dont vous avez besoin</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass rounded-2xl p-6 hover:scale-105 transition-all">
<div className="flex text-white bg-[#050505] w-12 h-12 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-check-square w-6 h-6" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Gestion des tâches</h3>
<p className="text-gray-600">Créez, organisez et suivez vos tâches avec un système simple et efficace.</p>
</div>
<div className="glass rounded-2xl p-6 hover:scale-105 transition-all">
<div className="flex text-white bg-[#000000] w-12 h-12 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-target w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Suivi d'objectifs</h3>
<p className="text-gray-600">Définissez vos objectifs et visualisez votre progression en temps réel.</p>
</div>
<div className="glass rounded-2xl p-6 hover:scale-105 transition-all">
<div className="flex text-white bg-[#000000] w-12 h-12 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-calendar-days w-6 h-6" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Agenda et notes</h3>
<p className="text-gray-600">Ajoutez des événements à votre calendrier et consignez vos idées en notes.</p>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Choisissez votre plan</h2>
<p className="text-xl text-gray-600">Commencez gratuitement, évoluez quand vous êtes prêt</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass rounded-2xl p-8 hover:scale-105 transition-all">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Gratuit</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight">0€</span>
<span className="text-gray-500">/mois</span>
</div>
<button className="w-full mt-6 px-4 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all font-medium" onclick="showSignUp()">Commencer gratuitement</button>
<ul className="mt-8 space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>25 tâches</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>3 objectifs</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>5 habitudes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 notes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 événements/mois</li>
<li className="flex items-center gap-2 text-gray-400"><svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>Assistant IA</li>
</ul>
</div>

<div className="glass rounded-2xl p-8 border-2 border-gray-900 relative hover:scale-105 transition-all">
<div className="-top-4 -translate-x-1/2 text-xs font-medium text-white bg-gradient-to-r from-[#4f4f4f] to-[#000000] rounded-full px-4 py-1 absolute left-1/2">Populaire</div>
<h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Standard</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight">12€</span>
<span className="text-gray-500">/mois</span>
</div>
<button className="hover:bg-gray-800 transition-all font-medium text-white bg-[#000000] w-full rounded-lg mt-6 px-4 py-3" onclick="showSignUp()">Choisir Standard</button>
<ul className="mt-8 space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Tâches illimitées</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Objectifs illimités</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Habitudes illimitées</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-sticky-note w-4 h-4" data-lucide="sticky-note" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path><path d="M15 3v5a1 1 0 0 0 1 1h5"></path></svg>100 notes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-calendar-plus w-4 h-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>100 événements/mois</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>Assistant IA</li>
</ul>
</div>

<div className="glass rounded-2xl p-8 hover:scale-105 transition-all">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Ultra</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight">29€</span>
<span className="text-gray-500">/mois</span>
</div>
<button className="hover:bg-gray-900 hover:text-white transition-all font-medium w-full border-[#000000] border-2 rounded-lg mt-6 pt-3 pr-4 pb-3 pl-4" onclick="showSignUp()">Choisir Ultra</button>
<ul className="mt-8 space-y-3 text-sm text-gray-700">
<li className="flex items-center gap-2"><svg className="lucide lucide-infinity w-4 h-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>Tout illimité</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>IA avancée et coaching</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-plug w-4 h-4" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>Intégrations</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>Support prioritaire</li>
</ul>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20" id="faq">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Questions fréquentes</h2>
<div className="space-y-4">
<details className="glass rounded-xl p-6 group hover:bg-white transition-all">
<summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
            Flowly est-il vraiment gratuit ?
            <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
            Oui ! Le plan gratuit limite certaines actions (tâches, objectifs, notes, événements). Les plans supérieurs débloquent tout.
          </p>
</details>
<details className="glass rounded-xl p-6 group hover:bg-white transition-all">
<summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
            En quoi consiste Flowly ?
            <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
            Flowly est une application d'organisation et de productivité qui t'aide à planifier tes objectifs, gérer tes tâches, suivre ton temps et rester focus grâce à un assistant IA intégré.
          </p>
</details>
<details className="glass rounded-xl p-6 group hover:bg-white transition-all">
<summary className="cursor-pointer list-none flex font-semibold items-center justify-between">
            Puis-je utiliser Flowly sur mobile ?
            <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
            Absolument ! Flowly est entièrement responsive et fonctionne parfaitement sur tous vos appareils.
          </p>
</details>
<details className="glass rounded-xl p-6 group hover:bg-white transition-all">
<summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
            Comment fonctionne l'assistant IA ?
            <svg className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 animate-fade-in">
            Disponible avec les plans Standard et Ultra. Il vous aide à prioriser, planifier et rester motivé.
          </p>
</details>
</div>
</section>

<footer className="border-t border-gray-200 mt-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex bg-[#000000] w-6 h-6 rounded-lg items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-semibold">Flowly</span>
</div>
<p className="text-sm text-gray-600">© 2025 Flowly. Tous droits réservés.</p>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" id="signin-modal">
<div className="glass rounded-2xl p-8 max-w-md w-full animate-scale-in">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Connexion</h2>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('signin-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form onsubmit="handleSignIn(event)">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Mot de passe</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 font-medium" type="submit">Se connecter</button>
</div>
</form>
<p className="mt-6 text-center text-sm text-gray-600">
          Pas encore de compte ?
          <button className="text-gray-900 font-medium hover:underline" onclick="closeModal('signin-modal'); showSignUp();">Créer un compte</button>
</p>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" id="signup-modal">
<div className="glass animate-scale-in w-full max-w-md rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Créer un compte</h2>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-all" onclick="closeModal('signup-modal')">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="" onsubmit="handleSignUp(event)">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2">Nom complet</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Mot de passe</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all" minlength="8" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 font-medium" type="submit">Créer mon compte</button>
</div>
</form>
<p className="text-sm text-gray-600 text-center mt-6">
          Déjà un compte ?
          <button className="hover:underline font-medium text-gray-900" onclick="closeModal('signup-modal'); showSignIn();">Se connecter</button>
</p>
</div>
</div>


    </>
  );
}
