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



        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 50;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
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
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-slate-100/60 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
<span className="font-bold text-lg tracking-tighter">L</span>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-800 transition-colors">LICIEL</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-800 transition-colors" href="#logiciel">Logiciel</a>
<a className="hover:text-blue-800 transition-colors" href="#services">Services Web</a>
<a className="hover:text-blue-800 transition-colors" href="#modules">Modules</a>
<a className="hover:text-blue-800 transition-colors" href="#temoignages">Témoignages</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-semibold text-slate-600 hover:text-blue-800 transition-colors" href="#">Connexion</a>
<a className="px-5 py-2.5 bg-blue-800 text-white text-sm font-semibold rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30" href="#">
                    Essai gratuit
                </a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-xs font-semibold text-blue-700 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
                        Leader des logiciels de diagnostic
                    </div>
<h1 className="reveal delay-100 text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Le logiciel de référence pour les <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">diagnostiqueurs</span>
</h1>
<p className="reveal delay-200 text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Solution tout-en-un : logiciel métier performant, CRM web connecté et site internet sur-mesure pour booster votre activité.
                    </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-800 text-white text-sm font-semibold rounded-xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 hover:-translate-y-1" href="#">
                            Demander une démo
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1 hover:border-slate-300" href="#">
<iconify-icon icon="solar:cloud-download-linear" width="18"></iconify-icon>
                            Essai gratuit 30 jours
                        </a>
</div>
<div className="reveal delay-300 mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            +19 ans d'expérience
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                            2500+ licences actives
                        </div>
</div>
</div>

<div className="reveal delay-200 relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-amber-50 rounded-full blur-3xl opacity-60"></div>

<div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">

<div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
<div className="ml-4 h-2 w-32 bg-slate-200 rounded-full"></div>
</div>

<div className="p-6 grid gap-6">
<div className="flex justify-between items-center">
<div>
<div className="h-4 w-24 bg-slate-800 rounded mb-2"></div>
<div className="h-3 w-16 bg-slate-300 rounded"></div>
</div>
<div className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-lg">Action requise</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
<iconify-icon className="text-blue-600 mb-2" icon="solar:home-smile-linear" width="24"></iconify-icon>
<div className="h-5 w-10 bg-blue-200 rounded mb-1"></div>
<div className="h-2 w-16 bg-blue-200/50 rounded"></div>
</div>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<iconify-icon className="text-slate-400 mb-2" icon="solar:file-check-linear" width="24"></iconify-icon>
<div className="h-5 w-10 bg-slate-200 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-200/50 rounded"></div>
</div>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<iconify-icon className="text-slate-400 mb-2" icon="solar:user-circle-linear" width="24"></iconify-icon>
<div className="h-5 w-10 bg-slate-200 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-200/50 rounded"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs text-blue-600 font-bold">DPE</div>
<div className="flex-1">
<div className="h-2.5 w-32 bg-slate-300 rounded mb-1.5"></div>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>
<div className="text-xs text-emerald-600 font-medium">Validé</div>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs text-blue-600 font-bold">ELEC</div>
<div className="flex-1">
<div className="h-2.5 w-28 bg-slate-300 rounded mb-1.5"></div>
<div className="h-2 w-24 bg-slate-200 rounded"></div>
</div>
<div className="text-xs text-amber-600 font-medium">En cours</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500">Rapport généré</div>
<div className="text-sm font-bold text-slate-800">Moins de 2 min</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="reveal text-center group cursor-default">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">2500+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Licences actives</div>
</div>
<div className="reveal delay-100 text-center group cursor-default">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">7200</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Lancements / jour</div>
</div>
<div className="reveal delay-200 text-center group cursor-default">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:file-text-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">4800</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Missions / jour</div>
</div>
<div className="reveal delay-300 text-center group cursor-default">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:printer-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">5700</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">Rapports / jour</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Pourquoi choisir LICIEL ?</h2>
<p className="text-slate-500 text-lg">Une suite logicielle pensée par et pour les diagnostiqueurs, alliant puissance et simplicité.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal delay-100 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Logiciel Complet</h3>
<p className="text-slate-500 leading-relaxed mb-4">Plus de 10 modules réglementaires intégrés dans une interface unique pour une productivité maximale.</p>
</div>

<div className="reveal delay-200 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:headset-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Support Réactif</h3>
<p className="text-slate-500 leading-relaxed mb-4">Une équipe d'experts dédiée disponible par téléphone et ticket pour vous accompagner au quotidien.</p>
</div>

<div className="reveal delay-300 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-800/30 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cloud-connection-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Écosystème Connecté</h3>
<p className="text-slate-500 leading-relaxed mb-4">Synchronisation cloud, site web, agenda et CRM : tout est lié pour éviter la double saisie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="modules">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Nos Solutions</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">Modules &amp; Fonctionnalités</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all" href="#">
                    Voir tous les modules <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="p-2.5 bg-white rounded-lg text-blue-600 shadow-sm">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Suite LICIEL Diagnostics</h3>
<p className="text-sm text-slate-500">Le cœur de votre activité. Saisie terrain intuitive et génération de rapports conformes.</p>
</div>

<div className="reveal delay-100 group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="p-2.5 bg-white rounded-lg text-emerald-600 shadow-sm">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-emerald-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Module DPE 2024</h3>
<p className="text-sm text-slate-500">Moteur de calcul certifié, fiable et régulièrement mis à jour selon les arrêtés.</p>
</div>

<div className="reveal delay-200 group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="p-2.5 bg-white rounded-lg text-amber-500 shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-amber-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Plan &amp; Croquis 3D</h3>
<p className="text-sm text-slate-500">Outil de dessin intégré performant pour réaliser vos croquis sans logiciel tiers.</p>
</div>

<div className="reveal group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="p-2.5 bg-white rounded-lg text-indigo-500 shadow-sm">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-indigo-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Gestion Administrative</h3>
<p className="text-sm text-slate-500">Devis, facturation, relances automatiques et suivi des règlements.</p>
</div>

<div className="reveal delay-100 group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="p-2.5 bg-white rounded-lg text-rose-500 shadow-sm">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-rose-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Pont Labo Amiante</h3>
<p className="text-sm text-slate-500">Envoi dématérialisé des échantillons et récupération automatique des résultats.</p>
</div>

<div className="reveal delay-200 group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="p-2.5 bg-white rounded-lg text-cyan-500 shadow-sm">
<iconify-icon icon="solar:cloud-upload-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-300 group-hover:text-cyan-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">LICIEL Cloud</h3>
<p className="text-sm text-slate-500">Sauvegarde sécurisée et accès à vos dossiers depuis n'importe quel poste.</p>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-blue-700 font-semibold" href="#">
                    Voir tous les modules <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="services">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal">
<span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">Au-delà du logiciel</span>
<h2 className="text-3xl md:text-5xl font-bold mt-2">Services Web Connectés</h2>
<p className="text-slate-400 mt-4 max-w-2xl mx-auto">Boostez votre visibilité et votre relation client avec nos outils web directement liés à votre logiciel métier.</p>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 mb-20">
<div className="flex-1 reveal">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:monitor-smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4">Votre Site Internet Pro</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Ne perdez plus de clients. Nous créons votre site web optimisé pour le référencement, incluant un module de devis en ligne et de paiement sécurisé.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Formulaires connectés au CRM
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Design responsive moderne
                        </li>
</ul>
<a className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors inline-flex items-center gap-2" href="#">Découvrir l'offre Web <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="flex-1 reveal delay-100">
<div className="bg-slate-800 rounded-2xl p-2 border border-slate-700 shadow-2xl">
<div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative group">

<div className="absolute top-0 left-0 w-full h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
</div>
<div className="mt-12 mx-auto w-3/4 h-32 bg-slate-800 rounded mb-4"></div>
<div className="mx-auto w-3/4 flex gap-4">
<div className="w-1/3 h-20 bg-slate-800 rounded"></div>
<div className="w-1/3 h-20 bg-slate-800 rounded"></div>
<div className="w-1/3 h-20 bg-slate-800 rounded"></div>
</div>
<div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12">
<div className="flex-1 reveal">
<div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:calendar-mark-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4">LICIEL Web &amp; Agenda</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Accédez à votre planning et vos dossiers où que vous soyez. L'extranet permet à vos clients de récupérer leurs rapports en toute autonomie.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Agenda géolocalisé
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Relances SMS automatisées
                        </li>
</ul>
<a className="text-white border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors inline-flex items-center gap-2" href="#">Explorer le CRM <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="flex-1 reveal delay-100">
<div className="bg-slate-800 rounded-2xl p-2 border border-slate-700 shadow-2xl">
<div className="grid grid-cols-2 gap-2">
<div className="bg-slate-900 h-32 rounded-xl p-4 border border-slate-700/50">
<div className="w-8 h-8 bg-amber-500/20 text-amber-500 rounded mb-2 flex items-center justify-center"><iconify-icon icon="solar:calendar-linear"></iconify-icon></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
<div className="bg-slate-900 h-32 rounded-xl p-4 border border-slate-700/50">
<div className="w-8 h-8 bg-blue-500/20 text-blue-500 rounded mb-2 flex items-center justify-center"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
<div className="bg-slate-900 h-32 rounded-xl p-4 border border-slate-700/50 col-span-2 flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-bold text-white mb-1">Extranet</div>
<div className="text-xs text-slate-500">Accès client 24/7</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-slate-200 bg-white" id="temoignages">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Ils nous font confiance</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon className="text-blue-800" icon="solar:box-bold"></iconify-icon> DIAG'IMMO</div>
<div className="text-xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon className="text-blue-800" icon="solar:home-bold"></iconify-icon> EXPERTISE 360</div>
<div className="text-xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon className="text-blue-800" icon="solar:shield-bold"></iconify-icon> SÉCURIDIAG</div>
<div className="text-xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon className="text-blue-800" icon="solar:buildings-bold"></iconify-icon> CABEX</div>
</div>
<div className="mt-16 max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl border border-slate-100 relative reveal">
<iconify-icon className="absolute top-4 left-4 text-blue-200 text-4xl" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-lg text-slate-600 italic leading-relaxed mb-6 pt-6">
                    "Depuis que nous sommes passés sur LICIEL, nous avons gagné un temps précieux sur la rédaction des rapports. Le pont avec le laboratoire amiante est un vrai plus."
                </p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
<img alt="User" src="https://ui-avatars.com/api/?name=Thomas+D&amp;background=0D8ABC&amp;color=fff"/>
</div>
<div className="text-left">
<div className="font-bold text-slate-900 text-sm">Thomas Dubois</div>
<div className="text-xs text-slate-500">Gérant, Cabinet Alpha Diag</div>
</div>
</div>
</div>
<div className="mt-8">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-100">
<iconify-icon className="text-amber-500" icon="solar:star-bold"></iconify-icon> Partenaire Pack Diag 360 (Liciel x Arobiz)
                </span>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl reveal">

<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="relative z-10 px-8 py-16 text-center">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Prêt à optimiser votre activité ?</h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Rejoignez les 2500 diagnostiqueurs qui utilisent LICIEL au quotidien pour gagner en productivité.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-1" href="#">
                        Télécharger la version d'essai
                    </a>
<a className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl backdrop-blur-sm transition-all" href="#">
                        Contactez-nous
                    </a>
</div>
<div className="mt-6 text-xs text-blue-200 opacity-80">
                    Sans engagement • Installation rapide • Support inclus
                </div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-sm">L</span>
</div>
<span className="text-lg font-bold text-slate-900">LICIEL</span>
</a>
<div className="flex items-start gap-3 text-slate-500 text-sm mb-4">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p>Paris, France</p>
</div>
<div className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<p>02.53.35.40.64</p>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Logiciel</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-700 transition-colors" href="#">Suite Diagnostics</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Module DPE</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Croquis / Plan</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Mises à jour</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-700 transition-colors" href="#">Création Site Web</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">LICIEL Web / V4</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Sauvegarde Cloud</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Formations</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Entreprise</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-700 transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-blue-700 transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 LICIEL Environnement. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-700 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-700 transition-colors" href="#">
<iconify-icon icon="solar:brand-facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-700 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
