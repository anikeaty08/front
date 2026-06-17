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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="20" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white font-semibold tracking-tighter text-lg">GRIP-TECH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#probleme">Le Problème</a>
<a className="hover:text-white transition-colors" href="#solution">Technologie</a>
<a className="hover:text-white transition-colors" href="#avis">Avis</a>
<a className="hover:text-white transition-colors" href="#offres">Boutique</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#offres">
                Commander
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nouvelle formule disponible
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[1.1] mb-8">
                FINI LES GLISSADES.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">DOMINEZ LE TERRAIN.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Le premier système d'adhérence instantanée pour chaussures et gants. Déjà adopté par les pros pour le Futsal, Basket, Hand et Foot US.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group" href="#offres">
<span>Acheter le Spray (24,90€)</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#club">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span>Pack Club &amp; Pad</span>
</a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trophy" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
<span className="font-semibold tracking-tight">PRO LEAGUE</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="font-semibold tracking-tight">CERTIFIÉ</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold tracking-tight">INSTANT DRY</span>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-900/30 border-white/5 pt-24 pb-24" id="probleme">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Le sol est votre pire ennemi</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Un gymnase poussiéreux, un parquet mal entretenu... et c'est la glissade assurée.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl glass-panel hover:border-red-500/30 transition-colors duration-300">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-down" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Perte de performance</h3>
<p className="text-sm leading-relaxed">Vos appuis fuient, vos cross sont ralentis. Impossible d'exploiter 100% de votre explosivité.</p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-orange-500/30 transition-colors duration-300">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-triangle" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Risque de blessure</h3>
<p className="text-sm leading-relaxed">Une cheville qui tourne ou un genou qui lâche à cause d'un manque soudain de grip sur un appui fort.</p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:border-yellow-500/30 transition-colors duration-300">
<div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:frown" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2s-4 2-4 2m1-7h.01M15 9h.01"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Frustration</h3>
<p className="text-sm leading-relaxed">Passer son match à essuyer ses semelles avec ses mains pour espérer retrouver un peu d'accroche.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="solution">
<div className="max-w-6xl mx-auto px-6">
<div className="md:text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">GRIP-TECH Spray &amp; Pad</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto">Une formule révolutionnaire qui crée une accroche magnétique entre votre équipement et le sol, sans laisser de traces.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-start">

<div className="relative group">
<div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-1 overflow-hidden">
<div className="bg-neutral-950 rounded-[20px] p-8 h-full">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:spray-can" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01M7 5h.01M11 7h.01M3 7h.01M7 9h.01M3 11h.01M15 5h4v4h-4zm4 4l2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2m-2 5l8-2m-8 7l8-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">Format Poche</span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">1. Le Spray Individuel</h3>
<p className="text-neutral-400 mb-6">Appliquez directement sur vos semelles ou vos gants avant le match. Sèche en quelques secondes.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-neutral-300"> 3 secondes pour sécher.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-neutral-300"> Reste efficace tout l'entraînement.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-neutral-300"> Ne colle pas aux mains, ne marque pas.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-1 overflow-hidden">
<div className="bg-neutral-950 rounded-[20px] p-8 h-full">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">Spécial Match</span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">2. Le "Performance Pad"</h3>
<p className="text-neutral-400 mb-6">La révolution pour le banc de touche. Sprayez le Pad, un simple passage des pieds et vous repartez neuf.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:users-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
<span className="text-sm text-neutral-300"> Un seul pad pour toute l'équipe.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:timer" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 2h4m-2 12l3-3"></path><circle cx="12" cy="14" r="8"></circle></g></svg>
<span className="text-sm text-neutral-300"> Pas besoin d'enlever ses gants ou de s'arrêter.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-500 mt-1 shrink-0 iconify--lucide" data-icon="lucide:refresh-cw" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></g></svg>
<span className="text-sm text-neutral-300"> Compatible avec le spray GRIP-TECH.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/20" id="avis">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="iconify text-neutral-600 mx-auto mb-6 iconify--lucide" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug mb-8">
                "Bluffant. On jouait dans une salle catastrophique, on avait l'impression de patiner. On a testé le spray au milieu du premier quart-temps : le changement est instantané. On retrouve des appuis de feu."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-500 flex items-center justify-center text-white font-bold text-sm">T</div>
<div className="text-left">
<div className="text-white font-semibold text-sm">Thomas</div>
<div className="text-neutral-500 text-xs">Joueur de Basket Régional</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="offres">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter text-center mb-16">Choisissez votre mode de jeu</h2>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">PACK JOUEUR</h3>
<p className="text-sm text-neutral-400 mt-2">Le Spray Individuel. Idéal pour ton sac de sport.</p>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-8">24,90€</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1x Spray Haute Performance
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Format 150ml (env. 30 matchs)
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Embout de précision
                        </li>
</ul>
<a className="block hover:bg-neutral-200 transition-colors font-medium text-black text-center bg-white w-full rounded-lg pt-3 pb-3" href="/paiement">
                        Commander
                    </a>
</div>

<div className="flex flex-col bg-neutral-900 border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden group" id="club">
<div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Populaire</div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">OFFRE CLUB PRO</h3>
<p className="text-sm text-neutral-400 mt-2">Station de Match Complète. Idéal pour les matchs à domicile.</p>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-8">Sur Devis</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            5x Sprays Grande Capacité
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1x Performance Pad Antidérapant
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Support de rangement inclus
                        </li>
</ul>
<a className="w-full block text-center border border-neutral-700 text-white font-medium py-3 rounded-lg hover:bg-neutral-800 hover:border-neutral-500 transition-all" href="#">
                        Demander un devis Club
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10 text-center">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-800/50 transition-colors list-none">
<span className="font-medium text-white text-sm">Est-ce que ça abîme les chaussures ?</span>
<svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-neutral-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-transparent group-open:border-neutral-800">
                        Non, notre formule est conçue spécifiquement pour protéger et respecter le caoutchouc de la semelle.
                    </div>
</details>
<details className="group bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-800/50 transition-colors list-none">
<span className="font-medium text-white text-sm">Est-ce autorisé en compétition ?</span>
<svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-neutral-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-transparent group-open:border-neutral-800">
                        Oui, le produit améliore l'adhérence naturelle en nettoyant et activant la semelle sans modifier l'équipement de manière structurelle.
                    </div>
</details>
<details className="group bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-800/50 transition-colors list-none">
<span className="font-medium text-white text-sm">Combien de temps dure un spray ?</span>
<svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-neutral-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-transparent group-open:border-neutral-800">
                        Un spray individuel de 150ml dure environ 30 à 40 utilisations, selon la quantité appliquée à chaque match.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative text-center px-6">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent -z-10"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">PRÊT À REPRENDRE LE CONTRÔLE ?</h2>
<p className="text-lg text-neutral-400 mb-10">Ne laissez plus un sol glissant décider du résultat de votre match.</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all hover:scale-105" href="#offres">
                Je commande maintenant
            </a>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white font-semibold tracking-tight text-sm">GRIP-TECH</span>
</div>
<div className="text-xs text-neutral-600">
                © 2023 Grip-Tech. Tous droits réservés. Performance Sports.
            </div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</footer>

    </>
  );
}
