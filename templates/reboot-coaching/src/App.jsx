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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const targetDate = new Date("May 4, 2026 00:00:00").getTime();
            
            const daysEl = document.getElementById("cd-days");
            const hoursEl = document.getElementById("cd-hours");
            const minutesEl = document.getElementById("cd-minutes");
            const secondsEl = document.getElementById("cd-seconds");

            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance < 0) {
                    clearInterval(interval);
                    if(daysEl) daysEl.innerHTML = "00";
                    if(hoursEl) hoursEl.innerHTML = "00";
                    if(minutesEl) minutesEl.innerHTML = "00";
                    if(secondsEl) secondsEl.innerHTML = "00";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if(daysEl) daysEl.innerHTML = days.toString().padStart(2, '0');
                if(hoursEl) hoursEl.innerHTML = hours.toString().padStart(2, '0');
                if(minutesEl) minutesEl.innerHTML = minutes.toString().padStart(2, '0');
                if(secondsEl) secondsEl.innerHTML = seconds.toString().padStart(2, '0');
            };

            updateCountdown(); 
            const interval = setInterval(updateCountdown, 1000);
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
      

<div className="bg-[#1c1917] border-b border-stone-800 py-3 relative z-50 overflow-hidden shadow-inner">

<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:text-sm z-10 text-xs max-w-5xl mr-auto ml-auto pr-6 pl-6 relative gap-x-3 gap-y-3 items-center justify-center">
<div className="flex items-center gap-2.5 text-stone-300">
<iconify-icon className="text-orange-500" height="18" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span className="">Prochaine session : <strong className="text-white font-medium">4 mai 2026</strong></span>
</div>
<div className="hidden sm:block w-px h-3 bg-stone-700"></div>
<div className="flex items-center gap-2 font-mono tracking-tight tabular-nums">
<div className="flex items-baseline gap-0.5">
<span className="text-white font-medium" id="cd-days">34</span>
<span className="text-[10px] text-stone-400">j</span>
</div>
<span className="text-stone-600 text-[10px] relative -top-px">:</span>
<div className="flex items-baseline gap-0.5">
<span className="text-white font-medium" id="cd-hours">13</span>
<span className="text-[10px] text-stone-400">h</span>
</div>
<span className="text-stone-600 text-[10px] relative -top-px">:</span>
<div className="flex items-baseline gap-0.5">
<span className="text-white font-medium" id="cd-minutes">23</span>
<span className="text-[10px] text-stone-400">m</span>
</div>
<span className="text-stone-600 text-[10px] relative -top-px">:</span>
<div className="flex items-baseline gap-0.5">
<span className="text-orange-400 font-medium" id="cd-seconds">51</span>
<span className="text-[10px] text-orange-500/70">s</span>
</div>
</div>
</div>
</div>

<nav className="sticky z-40 transition-all bg-[#fcfaf8]/90 w-full border-stone-200/60 border-b top-0 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-2xl font-script text-orange-600 pt-1 relative group tracking-wide" href="#">
                Reboot
            </a>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors" href="https://link.crococlick.com/widget/bookings/appel-decouverte-marie" target="_blank">
                    Appel découverte
                </a>
<a className="text-sm font-medium bg-stone-800 text-stone-50 px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors shadow-sm ring-1 ring-stone-900/5" href="https://link.crococlick.com/payment-link/696a78dbefd059773d86ffb9" target="_blank">
                    Rejoindre (197€)
                </a>
</div>
</div>
</nav>

<header className="md:pt-28 md:pb-32 overflow-hidden pt-16 pr-6 pb-24 pl-6 relative">

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-visible" preserveaspectratio="none">
<path className="opacity-30 md:opacity-40" d="M-100,200 C100,200 200,50 400,150 C600,250 800,100 1200,180" fill="none" stroke="#f97316" stroke-dasharray="8 4" strokeWidth="2"></path>
</svg>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-100 text-orange-700 text-xs font-medium shadow-sm shadow-orange-100/50 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Programme V1 - Accès immédiat
            </div>

<div className="mb-8 relative block">
<div className="relative inline-block px-4">

<h1 className="text-8xl md:text-9xl font-script text-orange-500 relative z-10 leading-[0.8] drop-shadow-sm transform -rotate-2">
                        Reboot
                    </h1>

<svg className="absolute -bottom-2 md:-bottom-4 left-0 w-[120%] -ml-[10%] h-12 text-orange-500 pointer-events-none z-0" preserveaspectratio="none" viewbox="0 0 300 40">

<path className="opacity-90" d="M10,20 Q60,35 150,25 T290,20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</div>
</div>
<p className="text-xs md:text-sm font-semibold tracking-widest text-orange-700 uppercase mb-8">
                Retrouver le fil pour choisir sa nouvelle voie
            </p>
<h2 className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tight mb-8 text-balance">
                Sortez du brouillard et reprenez les commandes.
            </h2>
<p className="text-lg md:text-2xl text-stone-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed text-balance">
                Vous êtes épuisé, perdu, en perte de sens ? Suivez le fil rouge pour retrouver clarté et énergie professionnelle en 6 semaines.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 text-stone-50 text-base font-medium rounded-xl hover:bg-stone-700 transition-all shadow-xl shadow-stone-200/50 hover:-translate-y-0.5" href="https://link.crococlick.com/payment-link/696a78dbefd059773d86ffb9" target="_blank">
                    Rejoindre le programme (197€)
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-600 border border-stone-200 text-base font-medium rounded-xl hover:bg-stone-50 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2" href="https://link.crococlick.com/widget/bookings/appel-decouverte-marie" target="_blank">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                    Réserver un appel découverte
                </a>
</div>
<p className="mt-8 text-xs text-stone-400 font-medium">Spécialement conçu pour les enseignants et salariés en transition.</p>
</div>
</header>

<section className="py-24 bg-white border-b border-stone-100 relative">
<div className="max-w-5xl mx-auto px-6 relative">
<div className="mb-16">
<h2 className="text-3xl font-medium text-stone-800 tracking-tight">Le fil est rompu ? Vous vous reconnaissez :</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="group relative">
<div className="mb-5 p-3.5 bg-orange-50/50 border border-orange-100 rounded-xl w-fit text-orange-600 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="24" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-800 mb-3">Épuisement mental</h3>
<p className="text-base text-stone-500 leading-relaxed font-light">Vous tournez en rond, saturé par les pensées qui se répètent. Vous n'arrivez plus à réfléchir sereinement.</p>
</div>

<div className="group relative">
<div className="mb-5 p-3.5 bg-orange-50/50 border border-orange-100 rounded-xl w-fit text-orange-600 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="24" icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-800 mb-3">Perte de direction</h3>
<p className="text-base text-stone-500 leading-relaxed font-light">Vous ne savez plus ce que vous voulez vraiment. L'avenir vous semble flou, sans repères clairs.</p>
</div>

<div className="group relative">
<div className="mb-5 p-3.5 bg-orange-50/50 border border-orange-100 rounded-xl w-fit text-orange-600 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="24" icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-800 mb-3">Crise identitaire</h3>
<p className="text-base text-stone-500 leading-relaxed font-light">Vous ne vous reconnaissez plus. Qui êtes-vous en dehors de votre métier actuel ?</p>
</div>

<div className="group relative">
<div className="mb-5 p-3.5 bg-orange-50/50 border border-orange-100 rounded-xl w-fit text-orange-600 group-hover:bg-orange-100 transition-colors">
<iconify-icon height="24" icon="solar:pause-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-800 mb-3">Paralysie</h3>
<p className="text-base text-stone-500 leading-relaxed font-light">Vous voulez changer mais vous avez peur de faire le mauvais choix. Alors vous ne bougez plus.</p>
</div>
</div>

<div className="mt-16 p-8 relative rounded-2xl border border-dashed border-orange-200 bg-orange-50/30 text-center overflow-hidden">
<p className="text-base md:text-lg text-stone-700 font-light relative z-10">
                    Vous n'êtes pas seul. Plus de <span className="font-semibold text-orange-800">15 000 enseignants</span> vivent cette même situation. Et il existe un chemin pour en sortir.
                </p>
</div>
</div>
</section>

<section className="py-28 px-6 max-w-5xl mx-auto relative">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl font-medium text-stone-800 tracking-tight mb-5">Votre Reset Professionnel en Douceur</h2>
<p className="text-stone-500 text-xl font-light">ReBoot n'est pas une formation métier. C'est un programme de transformation intérieure qui vous aide à renouer les fils de votre parcours.</p>
</div>
<div className="grid md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-6 z-0 pointer-events-none">
<svg height="100%" preserveaspectratio="none" width="100%">
<path d="M0,10 C100,25 200,-5 300,10 S500,25 800,10" fill="none" stroke="#fdba74" stroke-dasharray="6 4" strokeWidth="2"></path>
</svg>
</div>

<div className="bg-white p-8 border border-stone-200 rounded-2xl shadow-sm hover:border-orange-300 transition-all duration-300 relative z-10 group">
<div className="w-12 h-12 bg-white border-2 border-orange-100 group-hover:border-orange-500 group-hover:text-orange-600 rounded-full flex items-center justify-center text-xl font-script text-stone-400 mb-6 mx-auto md:mx-0 transition-colors shadow-sm">1</div>
<h3 className="text-xl font-semibold text-stone-800 mb-3">Reset</h3>
<p className="text-base text-stone-500 font-light">Sortir de la surcharge mentale, comprendre votre épuisement, retrouver de l'espace pour respirer.</p>
</div>

<div className="bg-white p-8 border border-stone-200 rounded-2xl shadow-sm hover:border-orange-300 transition-all duration-300 relative z-10 group">
<div className="w-12 h-12 bg-white border-2 border-orange-100 group-hover:border-orange-500 group-hover:text-orange-600 rounded-full flex items-center justify-center text-xl font-script text-stone-400 mb-6 mx-auto md:mx-0 transition-colors shadow-sm">2</div>
<h3 className="text-xl font-semibold text-stone-800 mb-3">Redéfinition</h3>
<p className="text-base text-stone-500 font-light">Identifier vos valeurs, moteurs et compétences transférables. Reconnecter avec votre essence.</p>
</div>

<div className="bg-white p-8 border border-stone-200 rounded-2xl shadow-sm hover:border-orange-300 transition-all duration-300 relative z-10 group">
<div className="w-12 h-12 bg-white border-2 border-orange-100 group-hover:border-orange-500 group-hover:text-orange-600 rounded-full flex items-center justify-center text-xl font-script text-stone-400 mb-6 mx-auto md:mx-0 transition-colors shadow-sm">3</div>
<h3 className="text-xl font-semibold text-stone-800 mb-3">Relance</h3>
<p className="text-base text-stone-500 font-light">Générer des pistes professionnelles alignées et construire votre plan d'action pour la suite.</p>
</div>
</div>
</section>

<section className="py-28 bg-[#2c2825] text-stone-300 relative overflow-hidden" id="programme">
<svg className="absolute right-0 top-0 h-full w-1/3 pointer-events-none opacity-5" preserveaspectratio="none" viewbox="0 0 100 800">
<path d="M50,0 Q100,200 0,400 T50,800" fill="none" stroke="white" strokeWidth="2"></path>
</svg>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
<div className="max-w-xl">
<h2 className="text-4xl font-medium text-white tracking-tight mb-5">Suivez le guide : 6 Semaines</h2>
<p className="text-stone-400 text-lg font-light">Un rythme doux adapté aux personnes épuisées. Chaque semaine, nous tirons une nouvelle ficelle pour dénouer la situation.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-14">

<div className="pl-8 relative border-l-2 border-orange-500/30">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-orange-500"></span>
<h4 className="text-xl font-script text-orange-400 mb-1">Semaine 1</h4>
<h3 className="text-xl font-medium text-white mb-3">Sortir de la surcharge</h3>
<p className="text-base text-stone-400 font-light">Comprendre votre épuisement, identifier où va votre énergie, retrouver de l'air pour respirer.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1">Semaine 2</h4>
<h3 className="text-xl font-medium text-white mb-3">Clarifier vos besoins</h3>
<p className="text-base text-stone-400 font-light">Identifier vos besoins fondamentaux et vos non-négociables pour ne plus vous tromper.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1">Semaine 3</h4>
<h3 className="text-xl font-medium text-white mb-3">Retrouver vos moteurs</h3>
<p className="text-base text-stone-400 font-light">Reconnecter avec ce qui vous fait vibrer, vos aspirations profondes et vos zones d'énergie.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1">Semaine 4</h4>
<h3 className="text-xl font-medium text-white mb-3">Valoriser vos compétences</h3>
<p className="text-base text-stone-400 font-light">Cartographier vos compétences transférables et découvrir votre vraie valeur professionnelle.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1">Semaine 5</h4>
<h3 className="text-xl font-medium text-white mb-3">Identifier vos pistes</h3>
<p className="text-base text-stone-400 font-light">Découvrir 3 à 5 options professionnelles réalistes et alignées avec votre profil.</p>
</div>

<div className="pl-8 relative border-l-2 border-orange-500/30">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-orange-500"></span>
<h4 className="text-xl font-script text-orange-400 mb-1">Semaine 6</h4>
<h3 className="text-xl font-medium text-white mb-3">Construire votre plan</h3>
<p className="text-base text-stone-400 font-light">Définir vos prochaines étapes et prendre votre première décision souveraine.</p>
</div>
</div>
</div>
</section>

<section className="py-28 max-w-5xl mx-auto px-6 bg-grid">
<div className="mb-16">
<h2 className="text-3xl font-medium text-stone-800 tracking-tight">Votre boîte à outils pour réparer le lien</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300">
<iconify-icon className="text-orange-500 mb-5" height="28" icon="solar:headphones-round-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-800 mb-3 text-lg">6 audios guidés</h3>
<p className="text-base text-stone-500 font-light">Des méditations et guidages doux de 5-10 minutes, adaptés aux cerveaux fatigués.</p>
</div>
<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300">
<iconify-icon className="text-orange-500 mb-5" height="28" icon="solar:book-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-800 mb-3 text-lg">Carnet introspectif</h3>
<p className="text-base text-stone-500 font-light">Questions puissantes, exercices guidés et journaling structuré pour remettre de l'ordre.</p>
</div>
<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300">
<iconify-icon className="text-orange-500 mb-5" height="28" icon="solar:widget-2-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-800 mb-3 text-lg">Espace Notion</h3>
<p className="text-base text-stone-500 font-light">Tableau de bord, cartographies, synthèses et plan d'action entièrement personnalisés.</p>
</div>
<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300">
<iconify-icon className="text-orange-500 mb-5" height="28" icon="solar:case-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-800 mb-3 text-lg">Plateforme Compétences</h3>
<p className="text-base text-stone-500 font-light">Découvrez vos compétences transférables et les métiers compatibles avec des offres réelles.</p>
</div>
<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300">
<iconify-icon className="text-orange-500 mb-5" height="28" icon="solar:user-check-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-800 mb-3 text-lg">Tests de personnalité</h3>
<p className="text-base text-stone-500 font-light">OCEAN Five, échelle d'estime de soi et tests motivationnels pour mieux vous comprendre.</p>
</div>
<div className="p-8 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:shadow-orange-100/50 hover:border-orange-200 transition-all duration-300">
<iconify-icon className="text-orange-500 mb-5" height="28" icon="solar:cup-first-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-stone-800 mb-3 text-lg">Quêtes hebdomadaires</h3>
<p className="text-base text-stone-500 font-light">Mini-actions douces qui soutiennent votre progression sans vous épuiser.</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-100">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-medium text-stone-800 mb-14 text-center tracking-tight">À la fin de <span className="font-script text-orange-600">Reboot</span>, vous avez :</h2>
<div className="grid gap-5">
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-lg font-light">Une clarté totale sur vos besoins, limites et moteurs professionnels</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-lg font-light">Une compréhension apaisée de ce qui vous a épuisé</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-lg font-light">Une vision nette de ce que vous ne voulez plus</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-lg font-light">3 à 5 pistes professionnelles alignées et réalistes à explorer</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
<iconify-icon className="text-orange-600" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-lg font-light">Une direction solide et un plan d'action pour les 30-90 prochains jours</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xl font-medium text-stone-800 italic">"C'est un diagnostic reconversion clé en main qui vous évite des mois d'errance."</p>
</div>
</div>
</section>

<section className="py-28 max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-medium text-stone-800 mb-16 tracking-tight">Ils ont renoué avec leur ambition</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex gap-1 text-orange-400 mb-5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-stone-600 leading-relaxed font-light mb-8">"Je savais qu'il fallait changer quelque chose, mais j'avais besoin d'être guidé. J'étais un peu paumé… Je sais ce que je veux, ce que je ne veux pas. J'ai pris confiance en moi. Franchement, merci !!!"</p>
</div>
<div className="flex items-center gap-4 border-t border-stone-50 pt-4">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">C</div>
<div>
<p className="text-sm font-semibold text-stone-800">Clément</p>
<p className="text-xs text-stone-400">Professeur des écoles</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex gap-1 text-orange-400 mb-5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-stone-600 leading-relaxed font-light mb-8">"J'ai enfin compris d'où venait mon blocage. Et j'ai maintenant les outils pour ne pas retomber dedans : je n'ai plus le même état d'esprit. Je n'aurais pas sauté le pas sans ce soutien."</p>
</div>
<div className="flex items-center gap-4 border-t border-stone-50 pt-4">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">E</div>
<div>
<p className="text-sm font-semibold text-stone-800">Émile</p>
<p className="text-xs text-stone-400">Professeur d'allemand</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex gap-1 text-orange-400 mb-5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-stone-600 leading-relaxed font-light mb-8">"Ce programme est une mine d'outils précieux. J'ai pu tester et mettre en place mon projet de création d'une association."</p>
</div>
<div className="flex items-center gap-4 border-t border-stone-50 pt-4">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">L</div>
<div>
<p className="text-sm font-semibold text-stone-800">Laurent</p>
<p className="text-xs text-stone-400">Professeur des écoles</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white border-y border-stone-100 bg-grid">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/3 relative">
<div className="absolute -inset-4 border border-orange-200 rounded-full opacity-60 animate-pulse"></div>
<div className="aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden relative shadow-lg rotate-2 group">

<img alt="Marie Décole" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="w-full md:w-2/3">
<h3 className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">Votre guide</h3>
<h2 className="text-3xl font-medium text-stone-800 mb-8 tracking-tight">Marie Décole</h2>
<div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
<p>Ancienne enseignante, j'ai moi-même traversé les phases de doute, d'épuisement et de perte de sens qui précèdent souvent une reconversion. Je sais ce que c'est de se sentir prisonnière d'un système.</p>
<p>Aujourd'hui, je forme et accompagne plus de 15 000 enseignants via <span className="font-medium text-stone-800">Le Lab Pédagogique</span>. Ma mission : offrir des outils exigeants et profondément humains pour permettre aux professionnels épuisés de reconstruire une trajectoire alignée.</p>
<p><span className="font-script text-2xl text-orange-600">Reboot</span>, c'est tout ce que j'aurais aimé avoir quand j'étais dans votre situation. Un fil d'Ariane pour sortir du labyrinthe.</p>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 relative" id="candidature">
<div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-stone-300/40 border border-stone-100 overflow-hidden relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
<div className="p-10 text-center border-b border-stone-100 bg-[#fdfbf9] relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-orange-500"></div>
<h3 className="text-lg font-normal text-stone-500 mb-3">Offre de lancement</h3>
<div className="relative inline-block mb-3">
<h2 className="text-6xl font-script text-orange-600 relative z-10 transform -rotate-2">Reboot</h2>
<svg className="absolute -bottom-2 left-0 w-full h-4 text-orange-600 opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</div>
<p className="text-sm text-stone-400 mb-8">Programme complet de transformation en 6 semaines</p>
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-5xl font-bold text-stone-800">197€</span>
</div>
<div className="flex flex-col gap-3">
<a className="block w-full py-4 px-5 bg-stone-800 hover:bg-stone-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-stone-200" href="https://link.crococlick.com/payment-link/696a78dbefd059773d86ffb9" target="_blank">
                        Rejoindre le programme
                    </a>
<a className="block w-full py-3 px-5 bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 rounded-xl font-medium transition-colors text-sm" href="https://link.crococlick.com/widget/bookings/appel-decouverte-marie" target="_blank">
                        J'ai besoin d'en parler (Appel offert)
                    </a>
</div>
</div>
<div className="p-10 bg-white">
<ul className="space-y-5">
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>6 audios guidés (5-10 min)</span>
</li>
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>Carnet introspectif structuré</span>
</li>
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>Espace Notion complet</span>
</li>
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>Plateforme compétences &amp; métiers</span>
</li>
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>Tests inclus (OCEAN Five, etc.)</span>
</li>
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>Plan d'action 30-90 jours</span>
</li>
<li className="flex items-start gap-4 text-base text-stone-600 font-light">
<iconify-icon className="text-orange-500 shrink-0 mt-0.5" height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
<span>Accès à vie aux ressources</span>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-dashed border-stone-200 text-center">
<p className="text-sm text-stone-400 leading-relaxed font-light italic">
                        "Combien vous coûte chaque mois passé dans le brouillard ?"
                    </p>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white border-y border-stone-100">
<div className="max-w-5xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-20">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 mb-8 ring-1 ring-orange-100">
<iconify-icon height="28" icon="solar:key-minimalistic-linear" width="28"></iconify-icon>
</div>
<h2 className="text-4xl font-medium text-stone-800 tracking-tight mb-8">Pourquoi maintenant ?</h2>
<p className="text-xl text-stone-600 leading-relaxed font-light">
                    Chaque mois passé dans le doute, c'est de l'énergie perdue, du stress accumulé et une estime qui s'effrite. <span className="font-script text-2xl text-orange-600">Reboot</span> vous offre une pause consciente pour vous retrouver et décider, sans bouleverser votre vie.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-10 lg:gap-14">
<div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm">
<h3 className="text-2xl font-medium text-stone-800 mb-8 flex items-center gap-4">
<iconify-icon className="text-orange-500" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
                        Pour qui ?
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-stone-600 font-light text-lg">
<iconify-icon className="text-stone-300 mt-0.5 shrink-0" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
<span>Enseignants, formateurs ou professionnels en perte de sens.</span>
</li>
<li className="flex items-start gap-4 text-stone-600 font-light text-lg">
<iconify-icon className="text-stone-300 mt-0.5 shrink-0" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
<span>Ceux qui veulent avancer sans se brûler.</span>
</li>
<li className="flex items-start gap-4 text-stone-600 font-light text-lg">
<iconify-icon className="text-stone-300 mt-0.5 shrink-0" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
<span>Ceux qui en ont marre de procrastiner ou de se disperser.</span>
</li>
</ul>
</div>
<div className="bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm">
<h3 className="text-2xl font-medium text-stone-800 mb-8 flex items-center gap-4">
<iconify-icon className="text-orange-500" height="24" icon="solar:flag-linear" width="24"></iconify-icon>
                        À la fin, vous avez :
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-stone-600 font-light text-lg">
<iconify-icon className="text-emerald-600 mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="font-normal text-stone-800">Une clarté intérieure retrouvée.</span>
</li>
<li className="flex items-start gap-4 text-stone-600 font-light text-lg">
<iconify-icon className="text-emerald-600 mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="font-normal text-stone-800">Un plan d'action simple.</span>
</li>
<li className="flex items-start gap-4 text-stone-600 font-light text-lg">
<iconify-icon className="text-emerald-600 mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="font-normal text-stone-800">La confiance en vos forces.</span>
</li>
</ul>
</div>
</div>

<div className="mt-16 bg-[#2c2825] rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
<h3 className="text-3xl font-medium mb-10 relative z-10">Rejoindre <span className="font-script text-orange-400">Reboot</span> maintenant</h3>
<div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mb-12 text-stone-300 text-base font-medium relative z-10">
<div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
<iconify-icon className="text-orange-400" height="20" icon="solar:tag-linear" width="20"></iconify-icon>
<span>197 € <span className="line-through text-stone-500 ml-1">297 €</span></span>
</div>
<div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
<iconify-icon className="text-orange-400" height="20" icon="solar:gift-linear" width="20"></iconify-icon>
<span>Bonus offerts</span>
</div>
</div>
<div className="flex flex-col items-center gap-4 relative z-10">
<a className="inline-block w-full sm:w-auto px-10 py-5 bg-white text-stone-900 font-medium rounded-xl hover:bg-orange-50 transition-all transform hover:scale-[1.01] shadow-2xl" href="https://link.crococlick.com/payment-link/696a78dbefd059773d86ffb9" target="_blank">
                        Oui, je veux retrouver clarté et confiance
                    </a>
<a className="text-sm text-stone-400 hover:text-white transition-colors underline decoration-stone-600 hover:decoration-white" href="https://link.crococlick.com/widget/bookings/appel-decouverte-marie" target="_blank">
                        J'ai des questions avant de me lancer
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-stone-800 mb-14 text-center tracking-tight">Vos questions, nos réponses</h2>
<div className="space-y-4">
<details className="group bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-stone-800 hover:bg-stone-50 transition-colors">
                    Je suis trop fatigué pour commencer quoi que ce soit...
                    <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-base text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-4">
                    Justement. Le programme est conçu spécifiquement pour les états d'épuisement. Les contenus sont courts (audios de 5-10min), apaisants et ne demandent pas d'effort cognitif intense. La première phase sert uniquement à "respirer".
                </div>
</details>
<details className="group bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-stone-800 hover:bg-stone-50 transition-colors">
                    Et si je n'ai aucune compétence transférable ?
                    <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-base text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-4">
                    C'est une croyance limitante très courante chez les enseignants. Nous utilisons une plateforme dédiée qui traduit vos expériences en compétences marché concrètes. Vous serez surprise de votre valeur réelle.
                </div>
</details>
<details className="group bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-stone-800 hover:bg-stone-50 transition-colors">
                    Je n'ai pas le temps...
                    <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-base text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-4">
                    Le programme demande environ 1h à 1h30 par semaine, que vous pouvez découper en tranches de 15 minutes. C'est un temps investi pour gagner des mois (voire des années) de clarté.
                </div>
</details>
</div>
</section>

<footer className="py-16 bg-stone-50 border-t border-stone-200 text-center relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-12 opacity-10" preserveaspectratio="none">
<path d="M0,10 Q500,60 1000,10" fill="none" stroke="orange" strokeWidth="2"></path>
</svg>
<div className="max-w-xl mx-auto px-6 relative z-10">
<h2 className="text-2xl font-medium text-stone-800 mb-5 tracking-tight">Vous méritez de retrouver votre direction</h2>
<p className="text-stone-500 mb-10 text-base font-light leading-relaxed">Chaque jour passé dans le brouillard vous coûte de l'énergie, de la confiance, de la joie de vivre. Il est temps de reprendre les commandes.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
<a className="inline-flex items-center justify-center px-8 py-3 bg-stone-800 text-stone-50 text-base font-medium rounded-full hover:bg-stone-700 transition-colors shadow-sm" href="https://link.crococlick.com/payment-link/696a78dbefd059773d86ffb9" target="_blank">
                    Rejoindre (197€)
                </a>
<a className="inline-flex items-center justify-center px-8 py-3 bg-white border border-stone-200 text-stone-800 text-base font-medium rounded-full hover:bg-stone-100 transition-colors shadow-sm" href="https://link.crococlick.com/widget/bookings/appel-decouverte-marie" target="_blank">
                    Réserver un appel
                </a>
</div>
<div className="flex items-center justify-center gap-8 text-sm text-stone-400 font-light">
<span className="font-script text-lg text-stone-500">Reboot</span>
<span>© Le Lab Pédagogique</span>
<a className="hover:text-stone-600" href="#">Mentions légales</a>
</div>
</div>
</footer>



    </>
  );
}
