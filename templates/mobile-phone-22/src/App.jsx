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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#0066FF', // Le Bleu électrique demandé
700: '#1d4ed8',
},
accent: {
500: '#f97316', // Orange pour CTA
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Scroll Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
            
            // Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-md');
                } else {
                    nav.classList.remove('shadow-md');
                }
            });

            // Button Loading Simulation
            const btn = document.querySelector('#booking button');
            const btnText = document.querySelector('#btn-text');
            
            if(btn) {
                btn.addEventListener('click', () => {
                    const originalContent = btn.innerHTML;
                    btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="24"></iconify-icon>';
                    setTimeout(() => {
                        btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon> Demande envoyée !';
                        btn.classList.add('bg-green-600');
                        btn.classList.remove('bg-slate-900');
                        setTimeout(() => {
                           btn.innerHTML = originalContent;
                           btn.classList.remove('bg-green-600');
                           btn.classList.add('bg-slate-900');
                        }, 3000);
                    }, 1500);
                });
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:smartphone-2-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">REPAR<span className="font-light">MOBILE</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#concept">Concept</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Réparations</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#zones">Zones</a>
<a className="bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 cta-pulse" href="#booking">
                    Prendre RDV
                </a>
</div>

<button className="md:hidden p-2 text-slate-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-base font-medium text-slate-900" href="#concept">Concept</a>
<a className="text-base font-medium text-slate-900" href="#services">Réparations</a>
<a className="text-base font-medium text-slate-900" href="#zones">Zones</a>
<a className="text-brand-600 font-semibold" href="#booking">Prendre RDV</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-white to-white opacity-70"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-accent-500 text-xs font-semibold mb-6 border border-orange-100">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon>
                    Intervention en 30 minutes
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Votre téléphone réparé <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-700">devant vos yeux</span>.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                    Plus besoin de vous déplacer. Je viens chez vous avec mon atelier mobile. Réparation immédiate, garantie et 100% transparente.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20 cta-pulse group" href="#booking">
                        Prendre rendez-vous
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-all" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Comment ça marche
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://i.pravatar.cc/100?img=2"/></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden"><img alt="User" src="https://i.pravatar.cc/100?img=3"/></div>
</div>
<span>Déjà +500 clients satisfaits</span>
</div>
</div>
<div className="relative reveal-on-scroll delay-200">

<div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 md:p-8 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10 opacity-50"></div>
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">En direct</div>
<div className="text-2xl font-semibold text-slate-900">Atelier Mobile</div>
</div>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-400"></span>
<span className="w-3 h-3 rounded-full bg-yellow-400"></span>
<span className="w-3 h-3 rounded-full bg-green-400"></span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
<div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:map-point-wave-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">En route vers...</p>
<p className="text-xs text-slate-500">12 Rue des Lilas, 75011 Paris</p>
</div>
<span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">14:00</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:screwdrivers-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Remplacement Écran</p>
<p className="text-xs text-slate-500">iPhone 13 Pro • 30 min</p>
</div>
<div className="ml-auto w-12 h-12 rounded-full border-4 border-slate-100 border-t-brand-600 animate-spin"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">La réparation, simplifiée.</h2>
<p className="text-slate-500">Un processus fluide conçu pour ne pas perturber votre journée.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10 border-t border-dashed border-slate-300"></div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll group">
<div className="w-14 h-14 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">1. Réservez en ligne</h3>
<p className="text-sm text-slate-500 leading-relaxed">Choisissez votre réparation, indiquez le lieu et sélectionnez un créneau horaire en 2 minutes.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bus-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">2. J'arrive chez vous</h3>
<p className="text-sm text-slate-500 leading-relaxed">Je me déplace avec mon van atelier tout équipé. Pas besoin de me faire entrer chez vous.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">3. Réparation immédiate</h3>
<p className="text-sm text-slate-500 leading-relaxed">L'intervention se fait devant vous en 30 minutes. Vous repartez avec un téléphone comme neuf.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal-on-scroll">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Nos services</h2>
<p className="text-slate-500">Tarifs tout compris : déplacement + pièces + main d'œuvre.</p>
</div>
<a className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1" href="#booking">
                    Voir tous les tarifs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-brand-100 transition-all cursor-pointer reveal-on-scroll">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:iphone-linear" width="20"></iconify-icon>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">~30 min</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Écran Cassé</h3>
<p className="text-xs text-slate-500 mb-4">Remplacement vitre &amp; LCD</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-slate-400 text-sm">À partir de</span>
<span className="text-lg font-semibold text-slate-900">69€</span>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-brand-100 transition-all cursor-pointer reveal-on-scroll">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:battery-charge-linear" width="20"></iconify-icon>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">~20 min</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Batterie</h3>
<p className="text-xs text-slate-500 mb-4">Autonomie, surchauffe</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-slate-400 text-sm">À partir de</span>
<span className="text-lg font-semibold text-slate-900">49€</span>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-brand-100 transition-all cursor-pointer reveal-on-scroll">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:plug-circle-linear" width="20"></iconify-icon>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">~30 min</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Connecteur de charge</h3>
<p className="text-xs text-slate-500 mb-4">Ne charge plus, faux contact</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-slate-400 text-sm">À partir de</span>
<span className="text-lg font-semibold text-slate-900">59€</span>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-brand-100 transition-all cursor-pointer reveal-on-scroll">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">~40 min</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Caméra / Photo</h3>
<p className="text-xs text-slate-500 mb-4">Focus flou, écran noir</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-slate-400 text-sm">À partir de</span>
<span className="text-lg font-semibold text-slate-900">59€</span>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-brand-100 transition-all cursor-pointer reveal-on-scroll">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:speaker-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">~30 min</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Son / Micro</h3>
<p className="text-xs text-slate-500 mb-4">Grésillement, pas de son</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<span className="text-slate-400 text-sm">À partir de</span>
<span className="text-lg font-semibold text-slate-900">49€</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="booking">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8 reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight">Réservez votre intervention</h2>
<p className="text-slate-400">Sélectionnez le créneau qui vous arrange. Le paiement s'effectue uniquement une fois la réparation terminée et vérifiée.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-brand-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Confirmation immédiate par SMS</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-brand-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span>Garantie 12 mois pièces et main d'œuvre</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-brand-500 text-xl" icon="solar:wallet-linear"></iconify-icon>
<span>Paiement sur place (CB, Espèces)</span>
</li>
</ul>
</div>

<div className="lg:col-span-7 reveal-on-scroll delay-200">
<div className="bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-2xl">

<div className="flex items-center gap-2 mb-8">
<div className="h-1.5 flex-1 bg-brand-600 rounded-full"></div>
<div className="h-1.5 flex-1 bg-brand-600 rounded-full"></div>
<div className="h-1.5 flex-1 bg-slate-100 rounded-full"></div>
</div>

<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Marque</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 outline-none">
<option>Apple</option>
<option>Samsung</option>
<option>Huawei</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Modèle</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 outline-none">
<option>iPhone 13</option>
<option>iPhone 12</option>
<option>iPhone 11</option>
</select>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-3">Date d'intervention</label>
<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
<button className="flex-shrink-0 w-16 h-20 rounded-xl bg-brand-600 text-white flex flex-col items-center justify-center border border-brand-600">
<span className="text-xs opacity-80">Lun</span>
<span className="text-xl font-bold">12</span>
</button>
<button className="flex-shrink-0 w-16 h-20 rounded-xl bg-white text-slate-600 border border-slate-200 flex flex-col items-center justify-center hover:border-brand-600 hover:text-brand-600 transition-colors">
<span className="text-xs opacity-60">Mar</span>
<span className="text-xl font-bold">13</span>
</button>
<button className="flex-shrink-0 w-16 h-20 rounded-xl bg-white text-slate-600 border border-slate-200 flex flex-col items-center justify-center hover:border-brand-600 hover:text-brand-600 transition-colors">
<span className="text-xs opacity-60">Mer</span>
<span className="text-xl font-bold">14</span>
</button>
<button className="flex-shrink-0 w-16 h-20 rounded-xl bg-white text-slate-600 border border-slate-200 flex flex-col items-center justify-center hover:border-brand-600 hover:text-brand-600 transition-colors">
<span className="text-xs opacity-60">Jeu</span>
<span className="text-xl font-bold">15</span>
</button>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-3">Créneau disponible</label>
<div className="grid grid-cols-3 gap-3">
<button className="py-2 px-4 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-600 transition-colors">09:00</button>
<button className="py-2 px-4 rounded-lg bg-brand-600 text-white text-sm border border-brand-600 shadow-md">10:30</button>
<button className="py-2 px-4 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-600 transition-colors">14:00</button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 outline-none" placeholder="Votre adresse complète" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-600 outline-none" placeholder="06 00 00 00 00" type="tel"/>
</div>
<button className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
<span id="btn-text">Confirmer le rendez-vous</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400">Aucun paiement requis maintenant</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center p-6 hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll">
<div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Rapide</h3>
<p className="text-sm text-slate-500">30 minutes suffisent pour 90% des pannes.</p>
</div>
<div className="text-center p-6 hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll delay-100">
<div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:eye-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Transparent</h3>
<p className="text-sm text-slate-500">Tout se passe sous vos yeux. Aucune donnée fouillée.</p>
</div>
<div className="text-center p-6 hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll delay-200">
<div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Qualité Premium</h3>
<p className="text-sm text-slate-500">Pièces d'origine ou compatibles AAA. Garanties 1 an.</p>
</div>
<div className="text-center p-6 hover:-translate-y-2 transition-transform duration-300 reveal-on-scroll delay-300">
<div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:card-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Paiement final</h3>
<p className="text-sm text-slate-500">Vous ne payez qu'une fois la réparation validée.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="zones">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">On vient chez vous</h2>
<p className="text-slate-500 mb-8">Nous couvrons toute l'agglomération et sa périphérie (20km). Testez votre éligibilité instantanément.</p>
<form className="flex gap-2 max-w-md mb-8" onsubmit="event.preventDefault(); alert('Bonne nouvelle ! Nous intervenons dans votre secteur.');">
<input className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 focus:ring-2 focus:ring-brand-600 outline-none" placeholder="Entrez votre code postal" type="text"/>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">Vérifier</button>
</form>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Paris</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Boulogne-Billancourt</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Neuilly-sur-Seine</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Levallois-Perret</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">+ banlieue proche</span>
</div>
</div>
<div className="h-[400px] bg-grid-pattern bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden reveal-on-scroll">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 border-4 border-brand-200 rounded-full flex items-center justify-center animate-pulse">
<div className="w-48 h-48 border-4 border-brand-300 rounded-full flex items-center justify-center">
<div className="w-32 h-32 bg-brand-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-brand-600 text-4xl drop-shadow-lg" icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<iconify-icon className="absolute top-1/4 left-1/4 text-slate-400 text-xl" icon="solar:map-point-linear"></iconify-icon>
<iconify-icon className="absolute bottom-1/3 right-1/4 text-slate-400 text-xl" icon="solar:map-point-linear"></iconify-icon>
<iconify-icon className="absolute top-1/3 right-1/3 text-slate-400 text-xl" icon="solar:map-point-linear"></iconify-icon>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-semibold text-slate-600 border border-slate-200">
                        Zone d'intervention active
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Ils recommandent</h2>
</div>
<div className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x no-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm snap-center">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Incroyable. Le réparateur est arrivé à l'heure devant mon bureau. J'ai récupéré mon iPhone 12 avec un écran neuf le temps de ma pause café."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden"><img alt="Client" src="https://i.pravatar.cc/100?img=12"/></div>
<div>
<div className="text-sm font-semibold text-slate-900">Thomas L.</div>
<div className="text-xs text-slate-400">Réparation Écran iPhone 12</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm snap-center">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Super service. Ma batterie ne tenait plus, changement en 15 minutes devant chez moi. Le technicien était très pro."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden"><img alt="Client" src="https://i.pravatar.cc/100?img=5"/></div>
<div>
<div className="text-sm font-semibold text-slate-900">Sophie M.</div>
<div className="text-xs text-slate-400">Changement Batterie Samsung S21</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm snap-center">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Je pensais devoir laisser mon tel 3 jours en boutique. Là c'était réglé dans la mâtinée. Je recommande à 100%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden"><img alt="Client" src="https://i.pravatar.cc/100?img=8"/></div>
<div>
<div className="text-sm font-semibold text-slate-900">Karim B.</div>
<div className="text-xs text-slate-400">Connecteur charge Huawei</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between text-slate-900 font-medium">
                        Combien de temps dure une intervention ?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed">
                        La majorité des réparations (écran, batterie) prennent entre 20 et 30 minutes. Pour des opérations plus complexes (soudure, connecteur), comptez environ 45 minutes à 1h.
                    </div>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between text-slate-900 font-medium">
                        Quelle est la garantie ?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Toutes nos réparations sont garanties 1 an (pièces et main d'œuvre). Si la pièce remplacée présente un défaut, nous revenons la changer gratuitement. (Hors casse accidentelle ultérieure).
                    </div>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between text-slate-900 font-medium">
                        Dois-je vous faire entrer chez moi ?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Pas du tout ! Tout se passe dans mon véhicule atelier stationné devant chez vous ou votre bureau. Vous pouvez patienter chez vous pendant que je répare votre mobile.
                    </div>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between text-slate-900 font-medium">
                        Moyens de paiement acceptés ?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Vous pouvez régler par Carte Bancaire (via terminal sécurisé) ou en Espèces une fois la réparation effectuée et vérifiée.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-white mb-4">
<iconify-icon className="text-brand-600 text-xl" icon="solar:smartphone-2-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">REPAR<span className="font-light">MOBILE</span></span>
</div>
<p className="text-sm max-w-xs mb-6">Le service de réparation de smartphones à domicile n°1 dans la région. Rapide, fiable et garanti.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-brand-500 transition-colors" href="#">Écran cassé</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Batterie</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Connecteur de charge</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Récupération données</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white" href="tel:0600000000">06 00 00 00 00</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white" href="mailto:contact@reparmobile.fr">contact@reparmobile.fr</a>
</li>
<li className="flex items-center gap-2 mt-4">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Lun - Sam: 9h - 19h</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 ReparMobile. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Mentions légales</a>
<a className="hover:text-white" href="#">CGV</a>
<a className="hover:text-white" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

<a aria-label="Contact sur WhatsApp" className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" href="https://wa.me/33600000000">
<iconify-icon icon="brandico:whatsapp" width="28"></iconify-icon>
</a>



    </>
  );
}
