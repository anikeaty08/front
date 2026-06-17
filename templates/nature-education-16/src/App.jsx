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
      

<nav className="sticky top-0 z-50 w-full bg-[#FFF8F0]/90 backdrop-blur-md border-b border-[#2D5016]/10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight text-[#2D5016] leading-none">Les Carnets de Céleste</span>
<span className="text-xs uppercase tracking-widest text-[#8B6914] font-medium mt-1">Ensemble Dessinons La Nature</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#2D5016] text-[#FFF8F0] text-sm font-medium hover:opacity-90 transition-all shadow-sm" href="#offres">
                    Boutique
                </a>
</div>
</div>
</nav>

<section className="relative pt-16 pb-24 overflow-hidden">
<div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#2D5016] mb-6 leading-[1.1]">
                Aider vos enfants à <span className="text-[#8B6914] italic">comprendre le temps</span> par la nature
            </h1>
<p className="text-lg sm:text-xl text-[#2D5016]/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Le premier calendrier panoramique de 3 mètres qui transforme l'apprentissage du temps en une aventure artistique et sensorielle.
            </p>
<div className="flex flex-col items-center gap-12">
<div className="relative w-full max-w-4xl group">
<div className="absolute -inset-4 bg-[#2D5016]/5 rounded-[2.5rem] -z-10 transition-transform group-hover:scale-[1.01]"></div>
<img alt="Calendrier Forêt" className="w-full h-auto rounded-2xl shadow-2xl border border-[#2D5016]/10" src="https://d1yei2z3i6k35z.cloudfront.net/636675/68ff635348872_nouveauCALFOREST.png"/>
</div>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D5016] text-[#FFF8F0] rounded-full text-lg font-medium hover:shadow-xl transition-all transform hover:-translate-y-1" href="#offres">
                    Découvrir la collection
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#2D5016]/5 border-y border-[#2D5016]/10">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-16">
<div className="space-y-6">
<div className="w-12 h-12 flex items-center justify-center bg-[#FFF8F0] rounded-xl shadow-sm border border-[#2D5016]/10">
<iconify-icon className="text-2xl text-[#8B6914]" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl sm:text-3xl font-light tracking-tight">Une notion trop abstraite</h3>
<p className="text-lg font-light leading-relaxed opacity-80">
                        Les calendriers classiques sont des outils d'adultes. Pour un enfant, une semaine à cheval sur deux mois est incompréhensible. Le temps reste une source de confusion et parfois de stress.
                    </p>
</div>
<div className="space-y-6">
<div className="w-12 h-12 flex items-center justify-center bg-[#FFF8F0] rounded-xl shadow-sm border border-[#2D5016]/10">
<iconify-icon className="text-2xl text-[#8B6914]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl sm:text-3xl font-light tracking-tight">Une déconnexion du vivant</h3>
<p className="text-lg font-light leading-relaxed opacity-80">
                        Aujourd'hui, nos enfants passent plus de temps devant les écrans qu'en extérieur. Ils perdent le lien avec le rythme des saisons, le cycle des plantes et la vie sauvage qui nous entoure.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#2D5016] mb-4">Le Calendrier Panoramique</h2>
<p className="text-lg text-[#2D5016]/60 font-light italic">"Une vision linéaire et poétique pour voir l'année d'un seul regard."</p>
</div>
<div className="grid md:grid-cols-2 items-center gap-16">
<img className="rounded-3xl shadow-lg order-2 md:order-1" src="https://d1yei2z3i6k35z.cloudfront.net/636675/68fcd001c50d6_Illustrationpotagercouleur.jpeg"/>
<div className="space-y-8 order-1 md:order-2">
<div className="space-y-4">
<h4 className="text-xl font-medium text-[#8B6914]">Rendre le temps visible</h4>
<p className="font-light opacity-90 leading-relaxed">Grâce à son format accordéon de 3 mètres, l'enfant comprend physiquement la durée. Janvier est à une extrémité, Décembre à l'autre. Le temps ne s'arrête jamais, il s'écoule.</p>
</div>
<div className="space-y-4">
<h4 className="text-xl font-medium text-[#8B6914]">Une fresque vivante</h4>
<p className="font-light opacity-90 leading-relaxed">Plus qu'un outil, c'est une œuvre d'art à colorier. Chaque mois dévoile de nouveaux animaux, des plantes spécifiques et les changements subtils de la lumière.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF8F0]">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-8 rounded-3xl border border-[#2D5016]/10 hover:border-[#8B6914]/40 transition-all bg-white/50">
<iconify-icon className="text-3xl text-[#8B6914] mb-4" icon="solar:pen-2-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-medium mb-2">Coloriage Évolutif</h4>
<p className="text-sm font-light opacity-70">Un support créatif pour s'approprier son calendrier jour après jour.</p>
</div>
<div className="p-8 rounded-3xl border border-[#2D5016]/10 hover:border-[#8B6914]/40 transition-all bg-white/50">
<iconify-icon className="text-3xl text-[#8B6914] mb-4" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-medium mb-2">Guide Documenté</h4>
<p className="text-sm font-light opacity-70">Un livret pédagogique pour identifier 170 espèces et éléments naturels.</p>
</div>
<div className="p-8 rounded-3xl border border-[#2D5016]/10 hover:border-[#8B6914]/40 transition-all bg-white/50">
<iconify-icon className="text-3xl text-[#8B6914] mb-4" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-medium mb-2">Format Perpétuel</h4>
<p className="text-sm font-light opacity-70">Utilisable à n'importe quel moment de l'année pour une liberté totale.</p>
</div>
<div className="p-8 rounded-3xl border border-[#2D5016]/10 hover:border-[#8B6914]/40 transition-all bg-white/50">
<iconify-icon className="text-3xl text-[#8B6914] mb-4" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-medium mb-2">Éco-conçu</h4>
<p className="text-sm font-light opacity-70">Imprimé en France sur du papier de haute qualité certifié durable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2D5016] text-[#FFF8F0]">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl font-light tracking-tight text-center mb-16">Pourquoi les parents l'adorent ?</h2>
<div className="space-y-12">
<div className="flex gap-6">
<div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#FFF8F0]/10 rounded-full">
<iconify-icon className="text-2xl" icon="solar:cup-first-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2">Sérénité familiale</h4>
<p className="font-light opacity-70">Réduit l'anxiété liée à l'attente (anniversaires, vacances) en offrant un repère visuel stable et permanent.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#FFF8F0]/10 rounded-full">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2">Éveil scientifique</h4>
<p className="font-light opacity-70">Développe un vocabulaire précis et une curiosité naturelle pour la biodiversité et l'écologie.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#FFF8F0]/10 rounded-full">
<iconify-icon className="text-2xl" icon="solar:heart-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2">Temps de qualité</h4>
<p className="font-light opacity-70">Crée un rituel quotidien de partage, loin des écrans, autour d'une activité calme et créative.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 text-8xl text-[#8B6914]/10 font-serif">“</div>
<p className="text-2xl font-light italic leading-relaxed text-[#2D5016] relative z-10">
                        "C'est une oeuvre d'art... C'est truffé de détails et chaque fois que l'on pose les yeux sur une partie, on découvre quelque chose de nouveau. C'est même de l'émerveillement."
                    </p>
<div className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#8B6914] text-[#FFF8F0] flex items-center justify-center text-xs font-semibold">S</div>
<div>
<p className="font-medium">Soraya</p>
<p className="text-xs opacity-60 uppercase tracking-widest">Maman de 2 enfants</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl shadow-md rotate-2" src="https://d1yei2z3i6k35z.cloudfront.net/636675/675999b1900ed_calendrierandrea.jpg"/>
<img className="rounded-2xl shadow-md -rotate-2 mt-8" src="https://d1yei2z3i6k35z.cloudfront.net/696bd14a05ada_Racontercommeunehistoire1.jpeg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF8F0]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<img className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-xl" src="https://d1yei2z3i6k35z.cloudfront.net/636675/6759c62d1b3e3_portraitlaetitiarond.png"/>
<h2 className="text-3xl font-light tracking-tight mb-6">Laetitia Detavernier</h2>
<p className="text-lg font-light leading-relaxed opacity-80">
                Ancienne architecte reconvertie par passion, je crée des outils pédagogiques qui marient rigueur et poésie. Mon but est simple : aider les familles à se reconnecter au vivant pour mieux le protéger.
            </p>
</div>
</section>

<section className="py-24 bg-[#2D5016]/5">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-light tracking-tight">Le projet en mouvement</h2>
</div>
<div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black border border-[#2D5016]/10">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/37TI2Ihv2Js"></iframe>
</div>
</div>
</section>

<section className="py-24" id="offres">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-light tracking-tight mb-4">Choisir votre aventure</h2>
<p className="text-[#8B6914] font-medium uppercase tracking-widest text-xs">Livraison offerte sur les packs</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="p-8 rounded-[2.5rem] bg-white border border-[#2D5016]/10 flex flex-col">
<h3 className="text-xl font-medium mb-2">Une année en Forêt</h3>
<div className="mb-6"><span className="text-3xl font-semibold">39€</span></div>
<ul className="space-y-3 text-sm font-light opacity-80 mb-10 flex-grow">
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Calendrier panoramique 3m</li>
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Guide de la Forêt (24 pages)</li>
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Format perpétuel</li>
</ul>
<a className="w-full py-3 rounded-xl border border-[#2D5016] text-center font-medium hover:bg-[#2D5016] hover:text-[#FFF8F0] transition-all" href="#">Commander</a>
</div>

<div className="p-8 rounded-[2.5rem] bg-white border border-[#2D5016]/10 flex flex-col">
<h3 className="text-xl font-medium mb-2">Une année au Potager</h3>
<div className="mb-6"><span className="text-3xl font-semibold">39€</span></div>
<ul className="space-y-3 text-sm font-light opacity-80 mb-10 flex-grow">
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Calendrier panoramique 3m</li>
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Guide du Potager (24 pages)</li>
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Format perpétuel</li>
</ul>
<a className="w-full py-3 rounded-xl border border-[#2D5016] text-center font-medium hover:bg-[#2D5016] hover:text-[#FFF8F0] transition-all" href="#">Commander</a>
</div>

<div className="p-10 rounded-[2.5rem] bg-[#2D5016] text-[#FFF8F0] flex flex-col relative overflow-hidden shadow-2xl transform lg:scale-105">
<div className="absolute top-0 right-0 bg-[#8B6914] px-4 py-1 text-[10px] font-bold tracking-widest uppercase rounded-bl-xl">Conseillé</div>
<h3 className="text-2xl font-medium mb-2">Le Pack Nature</h3>
<div className="mb-6">
<span className="text-4xl font-semibold">78€</span>
<span className="text-sm opacity-50 line-through ml-2">98€</span>
</div>
<ul className="space-y-4 text-sm font-light mb-10 flex-grow">
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> 2 Calendriers Panoramiques (6 mètres)</li>
<li className="flex gap-2"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> 2 Guides d'identification complets</li>
<li className="flex gap-2 font-medium"><iconify-icon className="text-[#8B6914]" icon="solar:check-circle-linear"></iconify-icon> Frais de port OFFERTS</li>
</ul>
<a className="w-full py-4 rounded-xl bg-[#8B6914] text-center font-semibold hover:opacity-90 transition-all shadow-lg" href="#">Commander le pack</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF8F0] border-t border-[#2D5016]/10">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="p-8 sm:p-12 rounded-[3rem] bg-white border border-[#2D5016]/10 shadow-xl flex flex-col md:flex-row items-center gap-10">
<div className="w-48 shrink-0">
<img alt="Ebook" className="w-full h-auto drop-shadow-xl" src="https://d1yei2z3i6k35z.cloudfront.net/636675/67671cf183c30_Lecalendrierpanoramique2.png"/>
</div>
<div className="flex-grow space-y-6">
<h3 className="text-2xl font-light tracking-tight text-[#2D5016]">Pas encore prêt ?</h3>
<p className="font-light opacity-80">Téléchargez gratuitement notre guide d'initiation au dessin de nature et une version mini du calendrier à imprimer.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-grow px-5 py-3 rounded-2xl bg-[#FFF8F0] border border-[#2D5016]/10 focus:outline-none focus:ring-2 focus:ring-[#2D5016]/20" placeholder="Votre email" type="email"/>
<button className="px-8 py-3 bg-[#2D5016] text-[#FFF8F0] rounded-2xl font-medium hover:opacity-90 transition-all">Recevoir le lien</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 text-center text-xs uppercase tracking-widest text-[#2D5016]/40 font-medium">
<p>© 2024 Les Carnets de Céleste — Fabriqué avec amour en France</p>
</footer>

    </>
  );
}
