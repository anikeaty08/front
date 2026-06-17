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



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal');
            scrollElements.forEach(el => observer.observe(el));
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
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white flex flex-col">

<div className="relative w-full h-[92vh] bg-stone-900 overflow-hidden shrink-0">

<div className="absolute inset-0 animate-enter duration-1000">
<img alt="ChouChou Interior" className="w-full h-full object-cover object-center opacity-80 scale-105" src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
</div>

<nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 py-8 flex justify-between items-start animate-enter delay-500">
<div className="flex items-center gap-3">
<span className="px-5 py-2.5 rounded-full border border-white/20 text-white bg-black/20 backdrop-blur-md text-sm font-medium tracking-wide font-geist flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Paris 1er, FR
                    </span>
</div>
<div className="hidden md:flex items-center gap-3">
<span className="px-5 py-2.5 rounded-full border border-white/20 text-white bg-black/20 backdrop-blur-md text-sm font-medium tracking-wide font-geist">
                       Ouvert 7j/7 de 8h à 2h du matin
                    </span>
</div>
</nav>

<div className="relative w-full h-full flex flex-col justify-end pb-12 md:pb-20 px-8 md:px-16 pointer-events-none">
<div className="pointer-events-auto">

<div className="flex flex-wrap items-center gap-3 mb-6 animate-enter delay-100">
<div className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold font-geist shadow-lg hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-orange-500 text-lg" icon="solar:star-bold"></iconify-icon>
                            Excellent <span className="text-stone-500 font-medium font-geist">(Google &amp; Facebook)</span>
</div>
<div className="flex items-center gap-2 glass-panel text-white px-4 py-1.5 rounded-full text-sm font-medium font-geist">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                            Cuisine Orientale &amp; Française
                        </div>
</div>
<h1 className="text-5xl md:text-8xl font-medium text-white tracking-tight font-jakarta mb-6 leading-[1.05] drop-shadow-xl max-w-4xl animate-enter delay-200">
                        ChouChou <br/> Restaurant &amp; Bar
                    </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed font-geist mb-10 animate-enter delay-300">
                        Traditionnel &amp; Authentique. Découvrez une sélection unique de saveurs au cœur de Paris, Boulevard de Sébastopol.
                    </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 animate-enter delay-500">
<a className="flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2.5 rounded-full font-semibold text-sm hover:bg-stone-200 transition font-geist group" href="menu.html">
                            Voir la Carte
                            <span className="bg-black text-white p-2 rounded-full transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
<a className="flex items-center gap-3 glass-panel text-white pl-8 pr-2 py-2.5 rounded-full font-medium text-sm hover:bg-white/20 transition font-geist group" href="tel:0145080203">
                            Réserver au 01 45 08 02 03
                            <span className="bg-white text-black p-2 rounded-full border border-white/10">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</div>

<section className="bg-white w-full px-8 md:px-16 py-20 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-8 reveal">
<div>
<span className="inline-block px-4 py-1.5 rounded-full border border-stone-200 text-xs font-semibold text-stone-600 font-geist tracking-wide uppercase mb-6">
                            Notre Histoire
                        </span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-[1.2] text-black font-jakarta mb-6">
                            Une aventure débutée <br/> en 2019.
                        </h2>
<p className="text-stone-500 font-geist leading-relaxed text-lg mb-4">
                            Orchestrée par Monsieur Shahir, dit "CHOUCHOU", nous offrons une expérience culinaire nichée au cœur du 1er arrondissement.
                        </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-stone-700 font-geist font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                Cuisine Française &amp; Orientale
                            </li>
<li className="flex items-center gap-3 text-stone-700 font-geist font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                Options Végétariennes
                            </li>
<li className="flex items-center gap-3 text-stone-700 font-geist font-medium">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
                                Ouvert 7j/7 Service Continu
                            </li>
</ul>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 h-full reveal reveal-delay-200">
<div className="flex justify-between items-end mb-8">
<h3 className="text-2xl font-medium font-jakarta tracking-tight">Notre Carte</h3>
<a className="text-sm font-semibold border-b border-black pb-0.5 hover:text-stone-600 hover:border-stone-600 transition font-geist" href="menu.html">Voir tout le menu →</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-100">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm">Déjeuner</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-100">
<div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:chef-hat-heart-linear"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm">Dîner</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-200">
<div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:donuts-linear"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm">Desserts</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-200">
<div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:wineglass-triangle-linear"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm">Vins &amp; Bar</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-300">
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm">Café</span>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center gap-3 hover:scale-105 transition duration-300 cursor-pointer reveal reveal-delay-300">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="font-medium font-geist text-sm">Salades</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 w-full px-8 md:px-16 py-20 lg:py-28 text-white">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
<div className="max-w-3xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-jakarta leading-[1.1] mb-6">
                        Plus qu'un restaurant. <span className="text-stone-500">Une expérience complète.</span>
</h2>
<p className="text-stone-400 text-lg font-light max-w-xl font-geist">
                        Des saveurs inspirées par les saisons, idéales pour les familles, les groupes ou une soirée parisienne.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

<div className="md:col-span-1 relative bg-stone-900 rounded-[2.5rem] p-8 border border-white/5 transition-all hover:border-white/10 flex flex-col justify-between min-h-[400px] reveal">
<div className="w-12 h-12 glass-panel-dark rounded-full flex items-center justify-center text-white mb-6">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium font-jakarta tracking-tight mb-6">Services</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Sur place &amp; À emporter
                            </li>
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Spécialités du Chef
                            </li>
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Événements (Jusqu'à 200 pers.)
                            </li>
<li className="flex items-center gap-3 text-stone-300 font-geist text-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> Vins Marocains d'exception
                            </li>
</ul>
</div>
</div>

<div className="md:col-span-2 relative bg-stone-900 rounded-[2.5rem] overflow-hidden p-8 lg:p-12 group border border-white/5 min-h-[400px] reveal reveal-delay-200">
<img alt="Chouffe Beer Trophy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1572565697686-2f0f4296dfa2?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-end">
<span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium backdrop-blur-md border border-white/10">Reconnaissance</span>
</div>
<div>
<h3 className="text-3xl font-medium font-jakarta tracking-tight mb-2">Excellence Brassicole</h3>
<p className="text-white/70 font-geist text-sm max-w-sm">
                                Honoré par la Maison Chouffe avec le 167e trophée. Un repère incontournable pour les amateurs de bière et de gastronomie.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-3 bg-stone-800/50 rounded-[2.5rem] p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 reveal reveal-delay-300">
<div className="flex items-center gap-6">
<div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shrink-0 text-white">
<iconify-icon className="text-3xl" icon="solar:accessibility-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium font-jakarta tracking-tight text-white">Accessibilité &amp; Confort</h3>
<p className="text-stone-400 font-geist text-sm mt-1">Un lieu accueillant pour tous.</p>
</div>
</div>
<div className="flex flex-wrap gap-3 justify-center md:justify-end">
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Accès Fauteuil</span>
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Toilettes Accessibles</span>
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Chaises Hautes</span>
<span className="px-4 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-geist">Menu Enfant</span>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 w-full px-8 md:px-16 py-20 relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

<div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full min-h-[300px] reveal">
<div>
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-6">
<iconify-icon className="text-stone-700 text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-stone-900 font-jakarta mb-2">Nous trouver</h3>
<p className="text-stone-500 font-geist text-lg leading-relaxed max-w-sm">
                            23 Boulevard de Sébastopol<br/>75001 Paris<br/>France
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-stone-100">
<a className="flex items-center gap-2 text-sm font-medium text-stone-600 font-geist hover:text-black transition" href="https://www.google.com/maps/place/23+Bd+de+S%C3%A9bastopol,+75001+Paris,+France" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-arrow-right-linear"></iconify-icon>
                            Voir sur Google Maps
                        </a>
</div>
</div>

<div className="bg-black text-white rounded-[2rem] p-8 border border-black shadow-xl flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden reveal reveal-delay-200">

<div className="absolute top-0 right-0 w-32 h-32 bg-stone-800 rounded-bl-full opacity-50"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium font-jakarta mb-2">Horaires d'ouverture</h3>
<p className="text-white/60 font-geist text-sm mb-6">Service continu</p>
<div className="space-y-3">
<div className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="text-white/80 font-geist">Lundi - Dimanche</span>
<span className="text-white font-medium font-geist">08:00 - 02:00</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-white/80 font-geist">Statut actuel</span>
<span className="text-green-400 font-bold font-geist px-2 py-0.5 bg-green-400/10 rounded">Ouvert</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full px-8 md:px-16 py-20 border-t border-stone-100" id="contact">
<div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden reveal">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium font-jakarta text-white mb-6">Réservations Recommandées</h2>
<p className="text-stone-400 text-lg font-geist mb-10">
                        Réservez votre table ou contactez-nous pour vos événements privés.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-bold font-geist hover:bg-stone-200 transition flex items-center justify-center gap-2" href="tel:0145080203">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                            01 45 08 02 03
                        </a>
<a className="w-full md:w-auto glass-panel text-white px-8 py-4 rounded-full font-bold font-geist hover:bg-white/10 transition flex items-center justify-center gap-2" href="mailto:restauchouchou@gmail.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                            Envoyer un email
                        </a>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-stone-500 text-sm font-geist">
<span>Moyens de paiement :</span>
<div className="flex gap-4 text-stone-300">
<span className="flex items-center gap-1"><iconify-icon icon="solar:card-linear"></iconify-icon> Cartes Bancaires</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon> Espèces</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:smartphone-linear"></iconify-icon> Sans Contact</span>
</div>
</div>
</div>
</section>

<div className="bg-white px-8 py-6 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-left">
<p className="text-black font-semibold font-jakarta text-sm">ChouChou - Restaurant et bar</p>
<p className="text-stone-400 text-xs font-geist mt-0.5">23 Boulevard de Sebastopol, 75001 Paris</p>
</div>
<div className="flex gap-6 items-center">
<a className="text-stone-400 hover:text-black transition" href="https://www.facebook.com/restaurantchouchouparis">
<iconify-icon className="text-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100" icon="logos:facebook"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-black transition" href="https://www.instagram.com/restaurant_chouchou_paris">
<iconify-icon className="text-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100" icon="logos:instagram-icon"></iconify-icon>
</a>
<span className="text-stone-400 text-xs font-geist border-l border-stone-200 pl-6">© 2024 ChouChou</span>
</div>
</div>
</div>


    </>
  );
}
