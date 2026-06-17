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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      
<div className="min-h-screen w-full flex">

<aside className="hidden md:flex md:flex-col md:w-72 border-r border-neutral-200 bg-white">

<div className="h-16 pl-5 pr-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white text-sm font-medium">ap</span>
<span className="text-lg tracking-tight font-semibold">airplan</span>
</div>
</div>
<div className="px-4 py-4 overflow-y-auto">

<div>
<p className="px-2 text-[11px] uppercase tracking-wide text-neutral-500 mb-2">Études</p>
<nav className="space-y-1">
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="plus"></i>
<span>Nouvelle étude</span>
</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="layers"></i>
<span>Études</span>
</span>
<span className="text-xs text-neutral-500">7</span>
</a>
</nav>
</div>

<div className="mt-6">
<p className="px-2 text-[11px] uppercase tracking-wide text-neutral-500 mb-2">Projets</p>
<nav className="space-y-1">
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="folder-plus"></i>
<span>Nouveau projet</span>
</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="play-circle"></i>
<span>Projets en cours</span>
</span>
<span className="text-xs text-neutral-500">9</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<span className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-700" data-lucide="archive"></i>
<span>Projets archivés</span>
</span>
<span className="text-xs text-neutral-500">51</span>
</a>
</nav>
</div>

<div className="mt-6">
<div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
<p className="text-sm font-semibold tracking-tight">Formule à l'unité</p>
<p className="mt-2 text-sm text-neutral-600 flex items-start gap-2">
<i className="h-4 w-4 text-amber-500 mt-0.5" data-lucide="alert-triangle"></i>
                Plus que 5 parcelles disponibles ! Et si vous passiez au plan supérieur ?
              </p>
<button className="mt-3 inline-flex items-center justify-center rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50">
                Accéder à plus
              </button>
</div>
</div>

<div className="mt-6 space-y-1">
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<i className="h-4 w-4 text-neutral-500" data-lucide="help-circle"></i>
<span>Centre d'aide</span>
</a>
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="#">
<i className="h-4 w-4 text-neutral-500" data-lucide="sparkles"></i>
<span>Dernières nouveautés</span>
</a>
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="mailto:bonjour@airplan.be">
<i className="h-4 w-4 text-neutral-500" data-lucide="mail"></i>
<span>bonjour@airplan.be</span>
</a>
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100" href="tel:+32494130579">
<i className="h-4 w-4 text-neutral-500" data-lucide="phone"></i>
<span>+32 494 13 05 79</span>
</a>
</div>
</div>
<div className="mt-auto px-5 py-4 border-t border-neutral-200">
<p className="text-xs text-neutral-500">© 2024 Airplan</p>
</div>
</aside>

<section className="flex-1 flex flex-col">

<header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 md:px-6">
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
<span className="hidden sm:inline">Retour</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-full border border-neutral-200 bg-white pl-2 pr-2.5 py-1.5 hover:bg-neutral-50">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium">SM</span>
<span className="text-sm">Simon Mancor</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<button className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50">
<i className="h-5 w-5 text-neutral-700" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="flex-1 flex">

<div className="w-full lg:max-w-3xl xl:max-w-4xl px-4 md:px-6 py-6">
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-neutral-900">Projet : Projet 5 parcelles</h1>
<p className="mt-4 text-sm text-neutral-700 font-medium">Votre projet est soumis à :</p>

<div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex gap-3">
<i className="h-5 w-5 text-amber-500 mt-0.5" data-lucide="alert-triangle"></i>
<div className="space-y-1">
<p className="text-sm font-semibold tracking-tight">Certains liens peuvent être temporairement inaccessibles</p>
<p className="text-sm text-neutral-700">
                    Suite à la cyberattaque d'avril 2025 sur les serveurs du SPW, certains liens vers les réglementations peuvent ne pas fonctionner.
                  </p>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-12 items-center px-2 pb-2 border-b border-neutral-200">
<div className="col-span-6">
<p className="text-[11px] uppercase tracking-wide text-neutral-500">Thématique</p>
</div>
<div className="col-span-5">
<p className="text-[11px] uppercase tracking-wide text-neutral-500">Règlement</p>
</div>
<div className="col-span-1 text-right">
<p className="text-[11px] uppercase tracking-wide text-neutral-500">Accès</p>
</div>
</div>

<div className="mt-2 space-y-3">

<div className="grid grid-cols-12 items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 hover:shadow-sm transition">
<div className="col-span-6">
<p className="text-sm font-medium text-neutral-900 inline-flex items-center flex-wrap gap-2">
                    Schéma de développement territorial - centralités
                    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[11px] font-medium" style={{backgroundColor: '#E6F2F5', color: '#3A6E7D'}}>
                      Partagé par la communauté
                      <span className="relative group inline-flex">
<button aria-describedby="tooltip-community-1" aria-label="En savoir plus sur les données partagées" className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" type="button">
<i className="h-3.5 w-3.5 text-neutral-600" data-lucide="info" strokeWidth="1.5"></i>
</button>
<div className="z-10 absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 rounded-lg border border-neutral-200 bg-white p-3 text-xs text-neutral-700 shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition" id="tooltip-community-1" role="tooltip">
                          Cette donnée a été partagée par d’autres utilisateurs Airplan. En contribuant, vous aidez à enrichir et fiabiliser les recommandations pour toute la communauté.
                          <a className="ml-1 text-blue-600 hover:text-blue-700 underline" href="http://airplan.be/helpcenter">[En savoir plus]</a>
</div>
</span>
</span>
</p>
</div>
<div className="col-span-5">
<p className="text-sm text-neutral-700">Centralité urbaine</p>
</div>
<div className="col-span-1 flex justify-end">
<a aria-label="Ouvrir le document" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50" href="#">
<i className="h-4 w-4 text-neutral-700" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="grid grid-cols-12 items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 hover:shadow-sm transition">
<div className="col-span-6">
<p className="text-sm font-medium text-neutral-900 inline-flex items-center flex-wrap gap-2">
                    Schéma de Développement Communal (SDC)
                    <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[11px] font-medium" style={{backgroundColor: '#E6F2F5', color: '#3A6E7D'}}>
                      Partagé par la communauté
                      <span className="relative group inline-flex">
<button aria-describedby="tooltip-community-2" aria-label="En savoir plus sur les données partagées" className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300" type="button">
<i className="h-3.5 w-3.5 text-neutral-600" data-lucide="info" strokeWidth="1.5"></i>
</button>
<div className="z-10 absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 rounded-lg border border-neutral-200 bg-white p-3 text-xs text-neutral-700 shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition" id="tooltip-community-2" role="tooltip">
                          Cette donnée a été partagée par d’autres utilisateurs Airplan. En contribuant, vous aidez à enrichir et fiabiliser les recommandations pour toute la communauté.
                          <a className="ml-1 text-blue-600 hover:text-blue-700 underline" href="http://airplan.be/helpcenter">[En savoir plus]</a>
</div>
</span>
</span>
</p>
</div>
<div className="col-span-5">
<p className="text-sm text-neutral-700">AMAY</p>
</div>
<div className="col-span-1 flex justify-end">
<a aria-label="Ouvrir le document" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50" href="#">
<i className="h-4 w-4 text-neutral-700" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="grid grid-cols-12 items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 hover:shadow-sm transition">
<div className="col-span-6">
<p className="text-sm font-medium text-neutral-900">Guide Communal d'Urbanisme (GCU)</p>
</div>
<div className="col-span-5">
<p className="text-sm text-neutral-700">RCU d'AMAY</p>
</div>
<div className="col-span-1 flex justify-end">
<a aria-label="Ouvrir le document" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50" href="#">
<i className="h-4 w-4 text-neutral-700" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="grid grid-cols-12 items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 hover:shadow-sm transition">
<div className="col-span-6">
<p className="text-sm font-medium text-neutral-900">Guide Communal d'Urbanisme (GCU)</p>
</div>
<div className="col-span-5">
<p className="text-sm text-neutral-700">Règlement communal de bâtisse concernant la prévention des incendies dans les dancings et autres locaux où l'on danse</p>
</div>
<div className="col-span-1 flex justify-end">
<a aria-label="Ouvrir le document" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50" href="#">
<i className="h-4 w-4 text-neutral-700" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="grid grid-cols-12 items-start gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 hover:shadow-sm transition">
<div className="col-span-6">
<p className="text-sm font-medium text-neutral-900">Guide Régional d'Urbanisme (GRU)</p>
</div>
<div className="col-span-5">
<p className="text-sm text-neutral-700">GRU - Accès aux personnes à mobilité réduite</p>
</div>
<div className="col-span-1 flex justify-end">
<a aria-label="Ouvrir le document" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50" href="#">
<i className="h-4 w-4 text-neutral-700" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>
</div>

<div className="hidden lg:block flex-1 border-l border-neutral-200 bg-neutral-100/60">
<div className="h-full w-full flex items-center justify-center">
<div className="text-center px-6">
<div className="mx-auto h-14 w-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<i className="h-6 w-6 text-neutral-600" data-lucide="map"></i>
</div>
<p className="mt-3 text-sm font-medium">Aperçu</p>
<p className="text-sm text-neutral-600">Espace réservé (carte, plan, documents, etc.).</p>
</div>
</div>
</div>
</div>
</section>
</div>




    </>
  );
}
