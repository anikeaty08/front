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
      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
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
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml, %3Csvg viewBox=\'0 0 200 200\' xmlns=\'http: //www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E&quot'}}></div>

<nav className="fixed z-40 bg-[#0A0A0A]/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="container flex mx-auto py-4 px-6 items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="group-hover:text-yellow-400 transition-colors duration-300 text-2xl font-normal tracking-tight text-white"><span className="text-yellow-500">HCP</span> Human Capital Performance</span>
<span className="uppercase text-sm text-gray-500 tracking-widest mt-0.5">Longévité et performance des Leaders</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-lg font-normal transition-colors text-gray-400 hover:text-white" href="#diagnostic">
          Diagnostic 360°
        </a>
<a className="transition-colors hover:text-white text-lg font-normal text-gray-400" href="#kpi">
          Les 6 KPI
        </a>
<a className="transition-colors text-lg font-normal hover:text-white text-gray-400" href="#programme">
          Protocole
        </a>
<a className="text-lg font-normal transition-colors text-gray-400 hover:text-white" href="#accompagnement">
          L'Exclusivité
        </a>
<a className="text-lg font-normal transition-colors text-gray-400 hover:text-white" href="#fondateur">
          Fondateur
        </a>
<a className="flex items-center gap-2 text-lg font-normal bg-yellow-400 px-6 py-2.5 rounded-full hover:bg-yellow-500 hover:shadow-[0_4px_14px_0_rgba(250,204,21,0.2)] transition-all duration-300 group text-black" href="#candidater">
<span>Quel âge a mon corps</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden bg-[#0A0A0A] pt-24 pb-20 relative items-center">

<div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%] z-0">
<img alt="Dirigeant HCP" className="object-[center_top] lg:opacity-90 opacity-40 w-full h-full object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d7ad40-af9f-4af2-baa2-8d7eb0382908_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/30 lg:hidden"></div>

<div className="hidden lg:block bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
</div>

<div className="container z-10 grid lg:grid-cols-12 gap-12 h-full mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-7 flex flex-col justify-center max-w-3xl pt-10 lg:pt-0">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight mb-6 leading-[1.1]">
          Rajeunissez votre corps <br className="hidden sm:block"/>de <span className="text-yellow-500">10 ans</span>
</h1>
<p className="text-2xl lg:text-3xl font-light text-gray-400 tracking-tight mb-10 leading-relaxed max-w-2xl">
          Optimisez le 1er actif de votre entreprise : Vous
        </p>

<div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 lg:p-8 mb-12 max-w-xl">
<div className="flex flex-col sm:flex-row sm:items-center gap-6">
<div className="text-6xl lg:text-7xl font-light text-yellow-500 tracking-tight leading-none shrink-0">
              82<span className="text-4xl lg:text-5xl text-yellow-500/70">%</span>
</div>
<div className="flex flex-col justify-center">
<p className="text-lg lg:text-xl font-light text-gray-400 leading-relaxed mb-2 tracking-tight">
                Des dirigeants admettent que leur niveau d'épuisement menace la <span className="font-normal text-white">rentabilité de leur entreprise</span>.
              </p>
<p className="text-sm uppercase tracking-widest text-yellow-500 font-normal">
                Jusqu'à quand tiendrez-vous ?
              </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="group relative flex items-center justify-center gap-3 w-full sm:w-auto text-xl font-normal text-black bg-yellow-400 rounded-full px-8 py-5 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(250,204,21,0.2)]" href="#candidater">
<span className="relative z-10 flex items-center gap-2">
              Découvrez votre âge réel
              <i className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</a>
<div className="flex flex-col gap-2">
<span className="text-base text-gray-400 font-light flex items-center gap-2 tracking-tight">
<i className="w-4 h-4 text-yellow-500" data-lucide="shield-check"></i>
              100% Confidentiel
            </span>
<span className="text-base text-gray-400 font-light flex items-center gap-2 tracking-tight">
<i className="w-4 h-4 text-yellow-500" data-lucide="check-circle-2"></i>
              Candidature en 2 min
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] border-white/5 border-t py-24 relative">
<div className="container z-10 mx-auto px-6 relative">
<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit mb-6">
<i className="w-4 h-4 text-gray-400" data-lucide="triangle-alert"></i>
<span className="text-sm font-normal tracking-widest uppercase text-gray-400">La Réalité Statistique</span>
</div>
<h2 className="text-4xl lg:text-5xl font-normal text-white tracking-tight mb-6">Le paradoxe de l'hyper-performance</h2>
<p className="leading-relaxed text-xl font-light text-gray-400 tracking-tight">
          Une entreprise florissante dirigée par un corps qui s'épuise. Les données sur la santé des cadres exécutifs révèlent une déconnexion majeure entre l'ambition professionnelle et la réalité physiologique.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity">
<i className="w-16 h-16 text-yellow-500" data-lucide="trending-down"></i>
</div>
<div className="text-6xl lg:text-7xl font-normal text-white mb-4 tracking-tight relative z-10">72<span className="text-4xl text-yellow-500">%</span></div>
<h3 className="text-white font-normal mb-3 text-xl tracking-tight relative z-10">Impact négatif perçu</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 relative z-10">
            Des dirigeants déclarent que leur fonction détériore activement leur santé physique ou mentale au quotidien.
          </p>
</div>
<div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-5 transition-opacity text-red-500">
<i className="w-16 h-16" data-lucide="hourglass"></i>
</div>
<div className="text-6xl lg:text-7xl font-normal text-red-400 tracking-tight mb-4 relative z-10">+8 ans</div>
<h3 className="text-white font-normal mb-3 text-xl tracking-tight relative z-10">Vieillissement accéléré</h3>
<p className="text-lg text-gray-400 font-light leading-relaxed relative z-10">
            L'écart moyen observé entre l'âge civil et l'âge biologique d'un exécutif soumis au stress chronique sans stratégie de récupération.
          </p>
</div>
<div className="bg-[#1A1A1A] border border-white/5 p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity">
<i className="w-16 h-16 text-yellow-500" data-lucide="heart-pulse"></i>
</div>
<div className="text-6xl lg:text-7xl font-normal text-white mb-4 tracking-tight relative z-10">x2</div>
<h3 className="text-white font-normal mb-3 text-xl tracking-tight relative z-10">Risque métabolique</h3>
<p className="text-lg text-gray-400 font-light leading-relaxed relative z-10">
            Multiplication du risque cardiovasculaire chez les profils décisionnels face à une population standard due à la sédentarité et la charge mentale.
          </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t py-32 relative bg-[#0A0A0A]">
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-center mb-10 text-white">
          Le coût invisible de la <span className="text-yellow-500">non-mesure</span>.
        </h2>
<p className="leading-relaxed lg:text-3xl text-xl font-light text-gray-400 text-center mb-12 tracking-tight">
          Vous pilotez votre entreprise avec une précision chirurgicale.<br/>Tableaux de bord, KPIs, prévisions financières. Pourtant, l'être humain qui soutient l'intégralité de cette performance navigue à l'aveugle.
        </p>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
<div className="bg-white/5 border border-white/5 p-8 rounded-xl">
<i className="text-yellow-500 w-8 h-8 mb-6" data-lucide="moon"></i>
<h3 className="text-white font-normal text-xl mb-3 tracking-tight">Dette de sommeil</h3>
<p className="text-lg text-gray-400 font-light leading-relaxed">Une érosion silencieuse de la capacité de récupération qui s'accumule année après année.</p>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-xl">
<i className="text-yellow-500 w-8 h-8 mb-6" data-lucide="trending-down"></i>
<h3 className="font-normal text-white text-xl mb-3 tracking-tight">Métabolisme déréglé</h3>
<p className="leading-relaxed text-lg font-light text-gray-400">Un dérèglement silencieux de votre organisme qui vide vos batteries et épuise votre énergie au quotidien.</p>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-xl sm:col-span-2 md:col-span-1">
<i className="text-yellow-500 w-8 h-8 mb-6" data-lucide="zap"></i>
<h3 className="text-white font-normal text-xl mb-3 tracking-tight">Fatigue décisionnelle</h3>
<p className="text-lg text-gray-400 font-light leading-relaxed">Une baisse progressive de la lucidité sous pression due au stress chronique non monitoré.</p>
</div>
</div>
<div className="max-w-3xl mx-auto text-center border-l-4 border-yellow-500 bg-yellow-400/5 px-8 py-8 mb-12">
<p className="text-2xl font-normal text-white tracking-tight">Ce qui n'est pas mesuré ne s'améliore pas. <br/>Ce qui n'est pas piloté se dégrade.</p>
</div>
<div className="flex justify-center">
<a className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white font-normal text-lg" href="#diagnostic">
            Stopper cette érosion silencieuse
            <i className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24" id="diagnostic">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 items-center mb-16 max-w-6xl mx-auto">
<div className="max-w-xl lg:w-1/2">
<h2 className="lg:text-5xl text-4xl font-normal tracking-tight mb-6 text-white">
            Le Diagnostic HCP 360° <br/>
<span className="text-yellow-500">Votre point de départ stratégique</span>
</h2>
<p className="leading-relaxed text-2xl font-light text-gray-400 tracking-tight">Le Diagnostic HCP 360° est la cartographie incontournable qui permet de concevoir un protocole de transformation précis, basé sur des données, pas sur des suppositions.</p>
</div>
<div className="lg:w-1/2 w-full h-48 lg:h-64 rounded-2xl overflow-hidden relative border border-white/5">
<img alt="Analyse biologique et données en laboratoire" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
<span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-gray-300 font-normal">Data-driven</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="h-full bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 flex flex-col">
<div className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-yellow-500">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Test Biologique Complet</h3>
<p className="text-gray-400 font-light leading-relaxed text-lg flex-grow">
            Analyse de plus de 100 biomarqueurs en laboratoire pour révéler les asymétries silencieuses de votre métabolisme avant qu'elles n'impactent votre performance.
          </p>
</div>
<div className="h-full bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 flex flex-col">
<div className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-yellow-500">
<i className="w-6 h-6" data-lucide="radar"></i>
</div>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Audit des 6 KPI</h3>
<p className="text-gray-400 font-light leading-relaxed text-lg flex-grow">
            Évaluation physique et cognitive approfondie. Nous mesurons l'exactitude de votre résilience, de votre capacité cardiovasculaire à votre intégrité musculaire.
          </p>
</div>
<div className="h-full bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 flex flex-col">
<div className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-yellow-500">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Score Âge &amp; Stratégie</h3>
<p className="text-gray-400 font-light leading-relaxed text-lg flex-grow">
            Calcul de votre écart biologique et définition des leviers prioritaires. Ce diagnostic dicte le protocole de 24 semaines qui suivra.
          </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] border-white/5 border-t py-24" id="kpi">
<div className="container mx-auto px-6">
<div className="flex gap-6 mb-12 items-center">
<h3 className="text-4xl font-normal text-white tracking-tight">Les 6 KPI du Pilotage HCP</h3>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white/5 border border-white/5 rounded-xl p-8">
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="test-tube"></i>
</div>
<div>
<h4 className="text-2xl font-normal text-white tracking-tight">Marqueurs Biologiques</h4>
<p className="text-sm uppercase tracking-wide mt-1 font-normal text-yellow-500">Anticipation métabolique</p>
</div>
</div>
<p className="text-lg leading-relaxed font-light text-gray-400">
            Ce qui ne se voit pas de l'extérieur dicte l'énergie de l'intérieur. Nous identifions les carences et déséquilibres pour optimiser le moteur cellulaire.
          </p>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-8">
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<div>
<h4 className="text-2xl font-normal text-white tracking-tight">Structure Corporelle</h4>
<p className="text-sm uppercase tracking-wide mt-1 font-normal text-yellow-500">Capital physique</p>
</div>
</div>
<p className="text-lg leading-relaxed font-light text-gray-400">
            Au-delà du poids, le ratio masse active / masse inerte détermine votre vitalité. On reconstruit une armure qui soutient la charge quotidienne.
          </p>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-8">
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="bed"></i>
</div>
<div>
<h4 className="text-2xl font-normal text-white tracking-tight">Capacité de Récupération</h4>
<p className="text-sm uppercase tracking-wide mt-1 font-normal text-yellow-500">Résilience physiologique</p>
</div>
</div>
<p className="text-lg leading-relaxed font-light text-gray-400">
            Suivi du système nerveux autonome (HRV) et de l'architecture du sommeil. C'est ici que se forge la capacité à encaisser le stress du lendemain.
          </p>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-8">
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<div>
<h4 className="text-2xl font-normal text-white tracking-tight">Réserve Cardio</h4>
<p className="text-sm uppercase tracking-wide mt-1 font-normal text-yellow-500">Endurance sous pression</p>
</div>
</div>
<p className="text-lg leading-relaxed font-light text-gray-400">
            La VO₂ max n'est pas qu'une métrique sportive, c'est le principal prédicteur de longévité en bonne santé. Nous restaurons votre marge de sécurité vitale.
          </p>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-8">
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-lg bg-[#111111] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="dumbbell"></i>
</div>
<div>
<h4 className="text-2xl font-normal text-white tracking-tight">Intégrité Musculaire</h4>
<p className="text-sm uppercase tracking-wide mt-1 font-normal text-yellow-500">Maintien structurel</p>
</div>
</div>
<p className="text-lg leading-relaxed font-light text-gray-400">
            La force physique conditionne la présence, la posture et prévient la dégradation articulaire. Un socle solide pour une exécution sans faille.
          </p>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-8">
<div className="flex items-start gap-4 mb-5">
<div className="flex shrink-0 text-yellow-500 border border-white/5 bg-[#111111] w-12 h-12 rounded-lg items-center justify-center">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<div>
<h4 className="text-2xl font-normal text-white tracking-tight">Acuité Cognitive</h4>
<p className="text-sm uppercase tracking-wide mt-1 font-normal text-yellow-500">Lucidité décisionnelle</p>
</div>
</div>
<p className="text-lg leading-relaxed font-light text-gray-400">
            Évaluation de la vitesse de traitement et de la résistance à la fatigue mentale. Protéger le cerveau en optimisant la machine qui le nourrit.
          </p>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24 border-t border-white/5" id="empreinte">
<div className="container mx-auto px-6">
<div className="mb-16 max-w-3xl">
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight mb-4 text-white">
          L'empreinte de votre <span className="text-yellow-500">capital humain</span>
</h2>
<p className="text-xl font-light text-gray-400 tracking-tight">
          Une visualisation immédiate des asymétries de votre performance. Le protocole HCP cible précisément les zones de déficit pour rétablir une physiologie équilibrée.
        </p>
</div>
<div className="grid lg:grid-cols-2 max-w-5xl mx-auto gap-16 items-center">

<div className="flex items-center justify-center relative order-2 lg:order-1">
<div className="relative w-full max-w-sm aspect-square">
<svg className="w-full h-full overflow-visible" viewbox="0 0 200 200">

<polygon fill="none" points="100,20 169.3,60 169.3,140 100,180 30.7,140 30.7,60" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></polygon>
<polygon fill="none" points="100,46.6 146.2,73.3 146.2,126.6 100,153.3 53.8,126.6 53.8,73.3" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></polygon>
<polygon fill="none" points="100,73.3 123.1,86.6 123.1,113.3 100,126.6 76.9,113.3 76.9,86.6" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></polygon>
<circle cx="100" cy="100" fill="rgba(255,255,255,0.3)" r="1.5"></circle>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="100" x2="100" y1="100" y2="20"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="100" x2="169.3" y1="100" y2="60"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="100" x2="169.3" y1="100" y2="140"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="100" x2="100" y1="100" y2="180"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="100" x2="30.7" y1="100" y2="140"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="100" x2="30.7" y1="100" y2="60"></line>

<polygon fill="rgba(250, 204, 21, 0.15)" points="100,64 129.1,83.2 152,130 100,130.4 44.5,132 58.4,76" stroke="#facc15" strokeLinejoin="round" strokeWidth="1.5"></polygon>

<circle className="animate-pulse" cx="100" cy="64" fill="#ef4444" r="3"></circle>
<circle className="animate-pulse" cx="129.1" cy="83.2" fill="#ef4444" r="3"></circle>
<circle cx="152" cy="130" fill="#eab308" r="3"></circle>
<circle className="animate-pulse" cx="100" cy="130.4" fill="#ef4444" r="3"></circle>
<circle cx="44.5" cy="132" fill="#eab308" r="3"></circle>
<circle cx="58.4" cy="76" fill="#eab308" r="3"></circle>
</svg>

<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-wider text-red-400 font-normal text-center leading-tight">Biologie<br/><span className="text-gray-500 text-[10px] tracking-widest">Déficit</span></div>
<div className="absolute top-1/4 -right-16 text-xs uppercase tracking-wider text-red-400 font-normal text-right leading-tight">Structure<br/>Corporelle<br/><span className="text-gray-500 text-[10px] tracking-widest">Déficit</span></div>
<div className="absolute bottom-[20%] -right-12 text-xs uppercase tracking-wider text-gray-400 font-normal text-right leading-tight">Récupération</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-wider text-red-400 font-normal text-center leading-tight">Cardio<br/><span className="text-gray-500 text-[10px] tracking-widest">Déficit</span></div>
<div className="absolute bottom-[20%] -left-16 text-xs uppercase tracking-wider text-gray-400 font-normal leading-tight">Intégrité<br/>Musculaire</div>
<div className="absolute top-1/4 -left-12 text-xs uppercase tracking-wider text-gray-400 font-normal leading-tight">Acuité<br/>Cognitive</div>
</div>
</div>

<div className="space-y-8 order-1 lg:order-2">
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-normal text-white flex items-center gap-2"><i className="w-4 h-4 text-gray-500" data-lucide="test-tube"></i> Marqueurs Biologiques</span>
<span className="text-base font-normal text-red-400">45/100</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-red-500 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-normal text-white flex items-center gap-2"><i className="w-4 h-4 text-gray-500" data-lucide="user"></i> Structure Corporelle</span>
<span className="text-base font-normal text-red-400">42/100</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-red-500 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-normal text-white flex items-center gap-2"><i className="w-4 h-4 text-gray-500" data-lucide="bed"></i> Capacité de Récupération</span>
<span className="text-base font-normal text-yellow-500">75/100</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-normal text-white flex items-center gap-2"><i className="w-4 h-4 text-gray-500" data-lucide="heart-pulse"></i> Réserve Cardiovasculaire</span>
<span className="text-base font-normal text-red-400">38/100</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-red-500 rounded-full" style={{width: '38%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-normal text-white flex items-center gap-2"><i className="w-4 h-4 text-gray-500" data-lucide="dumbbell"></i> Intégrité Musculaire</span>
<span className="text-base font-normal text-yellow-500">80/100</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-normal text-white flex items-center gap-2"><i className="w-4 h-4 text-gray-500" data-lucide="brain"></i> Acuité Cognitive</span>
<span className="text-base font-normal text-yellow-500">60/100</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<a className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full font-normal text-lg hover:bg-white/10 transition-colors text-white flex items-center justify-center gap-3" href="#candidater">
          Découvrez votre propre empreinte
          <i className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" data-lucide="calculator"></i>
</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#0A0A0A]">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
<div className="flex flex-col justify-center">
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight mb-6 text-white">
            Le Score Âge HCP : <br/>
<span className="text-3xl text-yellow-500 tracking-tight">Découvrez l'impact de votre mode de vie.</span>
</h2>
<div className="inline-block px-6 py-4 rounded-xl border mb-8 bg-white/5 border-white/5">
<p className="text-lg font-light tracking-tight text-white">
<span className="font-normal text-yellow-500">Score Âge HCP</span> = Âge chronologique – Âge biologique estimé
            </p>
</div>
<div className="space-y-6">
<p className="text-xl font-light leading-relaxed text-gray-400 tracking-tight">
              Ce score condense l'analyse de vos 6 KPI en une métrique lisible. Il objective le vieillissement prématuré causé par le stress, la sédentarité et la charge mentale.
            </p>
<p className="leading-relaxed text-xl font-normal text-gray-300 border-yellow-500 border-l-4 pl-5 py-2 tracking-tight">
              Ce score ne constitue pas une fin en soi. Il dicte l'architecture de votre protocole d'intervention, permettant de structurer une réponse physiologique précise et mesurable.
            </p>
<p className="text-xl font-light leading-relaxed text-gray-400 tracking-tight">
              L'objectif des 24 semaines d'accompagnement n'est pas d'être "en forme", c'est d'inverser concrètement cette courbe et de combler le déficit identifié lors du diagnostic.
            </p>
</div>
</div>
<div className="flex w-full justify-center lg:justify-end">
<div className="aspect-square p-8 sm:p-12 bg-white/5 w-full max-w-[420px] border border-white/5 rounded-2xl flex flex-col items-center justify-center">
<h4 className="text-gray-400 font-normal mb-8 tracking-widest uppercase text-base">Évolution visée sur 24 sem.</h4>
<div className="relative w-48 h-48 flex items-center justify-center mb-6">
<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="rgba(255,255,255,0.1)" strokeWidth="6"></circle>
<circle className="transition-all duration-1000" cx="50" cy="50" fill="none" r="46" stroke="#facc15" stroke-dasharray="289" strokeWidth="6" style={{strokeDashoffset: '69'}}></circle>
</svg>
<div className="relative z-10 flex flex-col items-center justify-center w-36 h-36 rounded-full border border-white/5 bg-[#111111]">
<span className="text-4xl font-normal tracking-tight text-yellow-500">-6 ans</span>
<span className="uppercase text-sm font-normal tracking-widest mt-2 text-gray-400">Écart biologique</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-24" id="programme">
<div className="container mx-auto px-6 max-w-5xl">
<div className="mb-20 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit mb-6">
<span className="text-sm font-normal tracking-widest uppercase text-gray-400">L'Offre Principale</span>
</div>
<h2 className="lg:text-5xl text-4xl font-normal text-white tracking-tight mb-6"> Le Protocole HCP Executive </h2>
<p className="lg:text-2xl text-xl font-light text-gray-400 max-w-3xl mx-auto tracking-tight">
          À partir des résultats du Diagnostic HCP 360°, nous construisons et exécutons un protocole sur-mesure de 24 semaines pour restructurer votre métabolisme.
        </p>
</div>
<div className="relative">
<div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-yellow-400/50 via-white/10 to-transparent md:-translate-x-1/2"></div>
<div className="space-y-16">
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-5/12 text-left md:text-right md:pr-16 pl-16 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Phase 1 : Diagnostic &amp; Conception</h3>
<p className="text-lg font-light text-gray-400 leading-relaxed">Réalisation du Bilan HCP 360°, analyses sanguines, et création du protocole d'intervention stratégique basé sur vos asymétries.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-yellow-400 flex items-center justify-center md:-translate-x-1/2 z-10 text-yellow-500 font-normal text-xl">
              01
            </div>
<div className="md:w-5/12 order-3"></div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-5/12 order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-yellow-400 flex items-center justify-center md:-translate-x-1/2 z-10 text-yellow-500 font-normal text-xl">
              02
            </div>
<div className="md:w-5/12 text-left md:pl-16 pl-16 mb-4 md:mb-0 order-3">
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Phase 2 : Exécution (24 sem.)</h3>
<p className="text-lg font-light text-gray-400 leading-relaxed">Le cœur du programme. Séances présentielles et visio hebdomadaires. Intégration sans friction dans votre agenda de dirigeant. Optimisation de la charge, nutrition et récupération.</p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-5/12 text-left md:text-right md:pr-16 pl-16 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Phase 3 : Recalibrage continu</h3>
<p className="text-lg font-light text-gray-400 leading-relaxed">Re-test sur 3 KPI stratégiques aux semaines 6, 12 et 18. Les données dictent les ajustements. Aucun effort n'est produit à l'aveugle.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-yellow-400 flex items-center justify-center md:-translate-x-1/2 z-10 text-yellow-500 font-normal text-xl">
              03
            </div>
<div className="md:w-5/12 order-3"></div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
<div className="md:w-5/12 order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center md:-translate-x-1/2 z-10 text-black font-medium text-xl">
              04
            </div>
<div className="md:w-5/12 text-left md:pl-16 pl-16 order-3">
<h3 className="text-2xl font-normal text-white mb-3 tracking-tight">Phase 4 : Validation des Acquis</h3>
<p className="text-lg font-light text-gray-400 leading-relaxed">Nouveau Bilan HCP 360°, test biologique de contrôle et calcul du nouveau Score Âge. Élaboration de la stratégie de pérennisation des résultats.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] border-white/5 border-t py-24">
<div className="container mx-auto px-6 max-w-5xl">
<div className="bg-white/5 border border-white/5 rounded-2xl p-10 md:p-14 relative">
<h2 className="md:text-4xl text-3xl font-normal text-white mb-10 tracking-tight">Au terme des 24 semaines, <br/><span className="text-yellow-500">Vous forgez un capital physique et mental optimisé.</span></h2>
<div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
<div className="flex items-start gap-4">
<i className="text-yellow-500 w-6 h-6 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-gray-300 font-light text-lg"> La sensation d'essoufflement disparaît, l'endurance sous contrainte augmente.</p>
</div>
<div className="flex items-start gap-4">
<i className="text-yellow-500 w-6 h-6 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-gray-300 font-light text-lg"> Disparition des douleurs posturales, retour d'une prestance athlétique.</p>
</div>
<div className="flex items-start gap-4">
<i className="text-yellow-500 w-6 h-6 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-gray-300 font-light text-lg"> Une architecture du sommeil réparée pour effacer la dette chronique.</p>
</div>
<div className="flex items-start gap-4">
<i className="text-yellow-500 w-6 h-6 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-gray-300 font-light text-lg"> La preuve mathématique du recul de votre vieillissement biologique.</p>
</div>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-center">
<a className="group px-8 py-5 bg-yellow-400 rounded-full font-normal text-xl text-black hover:shadow-[0_4px_14px_0_rgba(250,204,21,0.2)] transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5" href="#candidater">
<span>Pérenniser ma performance</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<span className="text-sm text-gray-500 mt-6 uppercase tracking-widest font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="info"></i> Places limitées à 3 dirigeants par mois
        </span>
</div>
</div>
</section>

<section className="bg-[#111111] py-24" id="application">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="relative w-full flex justify-center order-2 lg:order-1">
<div className="relative w-full max-w-[340px] md:max-w-md rounded-[2rem] overflow-hidden border border-white/5 group bg-black">
<img alt="Application HCP sur smartphone" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56f295d4-4c55-445b-b6cf-3320d685ce7f_1600w.jpg"/>
</div>
</div>
<div className="flex flex-col order-1 lg:order-2 justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit mb-8">
<i className="w-4 h-4 text-yellow-500" data-lucide="zap"></i>
<span className="text-sm font-normal tracking-widest uppercase text-gray-400">Écosystème Digital</span>
</div>
<h2 className="lg:text-5xl text-4xl font-normal text-white tracking-tight mb-8">Le suivi quotidien avec <br/><span className="text-yellow-500">Mon Plan Stratégique</span></h2>
<div className="space-y-8">
<p className="text-xl font-light leading-relaxed text-gray-400 mb-10 tracking-tight">
              Votre smartphone devient l'interface directe avec votre coach. Transmettez vos données de récupération, de charge mentale et d'effort physique en quelques secondes pour un pilotage sans friction.
            </p>
<div className="bg-white/5 border border-white/5 rounded-2xl p-8">
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">Ajustement Data-Driven</h3>
<p className="leading-relaxed text-lg font-light text-gray-400">La fonction <span className="font-normal text-white">Mon Plan Stratégique</span> analyse vos inputs. Les consignes d'entraînement et de nutrition sont ajustées dynamiquement selon votre état de fatigue réel, évitant la sous-optimisation.</p>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl p-8">
<div className="flex items-start gap-6">
<div className="w-14 h-14 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">Gamification de l'Effort</h3>
<p className="text-lg font-light text-gray-400 leading-relaxed">Chaque action compte. En respectant vos métriques (sommeil, hydratation, séances), vous cumulez des points qui récompensent votre semaine. Construisez vos progrès pas à pas.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-white/5 border-t relative" id="accompagnement">
<div className="container mx-auto px-6 max-w-6xl relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit mb-6">
<span className="text-sm font-normal tracking-widest uppercase text-gray-400">Accompagnement Sur-Mesure</span>
</div>
<h2 className="lg:text-5xl text-4xl font-normal text-white tracking-tight mb-6">L'exigence du <span className="text-yellow-500">sur-mesure</span></h2>
<p className="leading-relaxed text-xl font-light text-gray-400 max-w-3xl mx-auto tracking-tight">Les applications génériques échouent avec les dirigeants car elles ignorent la complexité de votre charge mentale. HCP n'est pas un coaching standard. C'est une conciergerie de la performance biologique.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white/5 border border-white/5 p-10 rounded-2xl transition-all hover:-translate-y-1">
<i className="text-yellow-500 w-10 h-10 mb-8" data-lucide="lock"></i>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight">Confidentialité Absolue</h3>
<p className="text-lg text-gray-400 font-light leading-relaxed">
            Vos données de santé, vos vulnérabilités physiques et vos moments de fatigue sont des informations stratégiques. Le cadre 1-to-1 garantit un secret total sur votre état de forme réel.
          </p>
</div>
<div className="bg-white/5 border border-white/5 p-10 rounded-2xl transition-all hover:-translate-y-1">
<i className="text-yellow-500 w-10 h-10 mb-8" data-lucide="calendar"></i>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight">Agilité Logistique</h3>
<p className="leading-relaxed text-lg font-light text-gray-400">Déplacements à répétitions, négociations tendues, une nuit trop courte. Le protocole s'adapte en temps réel à vos contraintes. Si votre emploi du temps change, l'entraînement pivote.</p>
</div>
<div className="bg-white/5 border border-white/5 p-10 rounded-2xl transition-all hover:-translate-y-1">
<i className="text-yellow-500 w-10 h-10 mb-8" data-lucide="target"></i>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight">Précision Chirurgicale</h3>
<p className="text-lg text-gray-400 font-light leading-relaxed">
            Chaque minute de votre temps investi doit produire un retour sur investissement maximal. Pas d'exercices génériques, uniquement les stimuli exacts dont votre métabolisme a besoin.
          </p>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] border-white/5 border-t py-24" id="temoignages">
<div className="container mx-auto px-6 max-w-7xl">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit mb-6">
<span className="text-sm font-normal tracking-widest uppercase text-gray-400">Le Cercle Restreint</span>
</div>
<h2 className="lg:text-5xl text-4xl font-normal text-white tracking-tight mb-6">Ils ont sécurisé leur <span className="text-yellow-500">premier actif</span></h2>
<p className="leading-relaxed text-xl font-light text-gray-400 max-w-2xl mx-auto tracking-tight">La transformation n'est pas qu'une promesse théorique. Découvrez comment le protocole HCP a recalibré la réalité physiologique de ces dirigeants à haut niveau d'exigence.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-10 flex flex-col relative group">
<i className="absolute top-8 right-8 w-12 h-12 text-white/5" data-lucide="quote"></i>
<div className="flex items-center gap-5 mb-8 relative z-10">
<div className="w-16 h-16 rounded-full overflow-hidden border border-white/5 shrink-0">
<img alt="Olivier P." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<h4 className="text-xl font-normal text-white tracking-tight">Olivier P.</h4>
<p className="text-sm text-yellow-500 font-normal uppercase tracking-widest mt-1">Dirigeant d'un groupe (23 entr.)</p>
<p className="text-sm text-gray-500 mt-0.5">Location de matériel</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-6 text-sm relative z-10">
<div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-normal flex items-center gap-2"><i className="w-4 h-4" data-lucide="trending-down"></i> Score Initial: 38/100</div>
<i className="w-4 h-4 text-gray-500" data-lucide="arrow-right"></i>
<div className="flex items-center gap-2 font-normal text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-2"><i className="w-4 h-4" data-lucide="trending-up"></i>Score Actuel: 73/100</div>
</div>
<p className="text-gray-400 font-light leading-relaxed flex-grow relative z-10 text-lg">
            "Je gérais l'hyper-croissance de mes entreprises, mais je ne pilotais plus mon propre corps. Le test biologique a révélé un taux de cortisol chroniquement élevé qui détruisait mon sommeil. Le Diagnostic HCP a été un électrochoc. En 6 mois, j'ai inversé la tendance."
          </p>
</div>

<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-10 flex flex-col relative group">
<i className="absolute top-8 right-8 w-12 h-12 text-white/5" data-lucide="quote"></i>
<div className="flex items-center gap-5 mb-8 relative z-10">
<div className="w-16 h-16 rounded-full overflow-hidden border border-white/5 shrink-0">
<img alt="Isabelle S." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-xl font-normal text-white tracking-tight">Isabelle S.</h4>
<p className="text-sm text-yellow-500 font-normal uppercase tracking-widest mt-1">Cadre Dirigeante (BU 200M€)</p>
<p className="text-sm text-gray-500 mt-0.5">Groupe Américain, +400 collab.</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-6 text-sm relative z-10">
<div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-normal flex items-center gap-2"><i className="w-4 h-4" data-lucide="trending-down"></i> Score Initial: 42/100</div>
<i className="w-4 h-4 text-gray-500" data-lucide="arrow-right"></i>
<div className="flex items-center gap-2 font-normal text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-2"><i className="w-4 h-4" data-lucide="trending-up"></i>Score Actuel: 68/100</div>
</div>
<p className="text-gray-400 font-light leading-relaxed flex-grow relative z-10 text-lg">
            "La pression et la fatigue décisionnelle constante me semblaient inévitables. L'audit a mis en lumière un manque de force critique qui impactait ma résilience au stress. L'approche m'a permis de reconstruire une véritable armure physique."
          </p>
</div>

<div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-10 flex flex-col relative group">
<i className="absolute top-8 right-8 w-12 h-12 text-white/5" data-lucide="quote"></i>
<div className="flex items-center gap-5 mb-8 relative z-10">
<div className="w-16 h-16 rounded-full overflow-hidden border border-white/5 shrink-0">
<img alt="Cédric R." className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-xl font-normal text-white tracking-tight">Cédric R.</h4>
<p className="text-sm text-yellow-500 font-normal uppercase tracking-widest mt-1">Fondateur &amp; Dirigeant</p>
<p className="text-sm text-gray-500 mt-0.5">Agence Marketing</p>
</div>
</div>
<div className="flex items-center gap-3 mb-6 text-sm relative z-10">
<div className="flex items-center gap-2 font-normal text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2">
              Protocole en cours (Semaine 12/24)<i className="w-4 h-4 animate-[spin_3s_linear_infinite]" data-lucide="refresh-ccw"></i>
</div>
</div>
<p className="text-gray-400 font-light leading-relaxed flex-grow relative z-10 text-lg">
            "Le paradoxe : je scale une entreprise, tout en détruisant ma santé derrière un écran. La vraie force du système HCP, c'est sa capacité adaptative : mes premiers re-tests ont permis d'ajuster instantanément la stratégie initiale. On ne navigue jamais à l'aveugle."
          </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] border-white/5 border-t py-24" id="fondateur">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 w-fit mb-8">
<span className="text-sm font-normal tracking-wider uppercase text-gray-400">
              Stéphane Wytver — Le Fondateur
            </span>
</div>
<h2 className="lg:text-5xl text-4xl font-normal text-white tracking-tight mb-10">
            "Vous avez construit votre réussite. <br/><span className="font-normal text-yellow-500">Votre corps doit pouvoir la soutenir.</span>"
          </h2>
<div className="space-y-10">
<div className="space-y-4">
<h3 className="text-2xl font-normal text-white tracking-tight">L'Expertise du Haut Niveau, la Réalité du Dirigeant</h3>
<p className="leading-relaxed text-xl font-light text-gray-400 tracking-tight">Coach expert depuis 1997 et ancien athlète d'endurance, j’ai d'abord disséqué la mécanique de la haute performance. Mais c'est en devenant chef d’entreprise en 2008 que la théorie a percuté la réalité. J'ai intimement découvert la charge mentale écrasante du leadership.</p>
</div>
<div className="space-y-4">
<h3 className="text-2xl font-normal text-white tracking-tight">Le Constat Brut</h3>
<p className="leading-relaxed text-xl font-light text-gray-400 tracking-tight">C’est de cette double réalité qu'est né HCP. J'ai vu des dizaines d'entrepreneurs brillants gérer leurs entreprises avec précision, tout en laissant leur propre "moteur" s'effondrer silencieusement. Ils risquaient de perdre la capacité de profiter de leur victoire.</p>
</div>
<div className="space-y-4">
<h3 className="text-2xl font-normal text-white tracking-tight">Votre Armure Physiologique</h3>
<p className="leading-relaxed text-xl font-light text-gray-400 tracking-tight">Je ne vous propose pas une simple "remise en forme". Ma mission est de détourner les protocoles du sport de haut niveau pour bâtir votre résilience entrepreneuriale. Je vous aide à rebâtir l’actif le plus précieux — vous-même.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 flex lg:justify-end w-full justify-center">
<div className="relative w-full max-w-md">
<div className="overflow-hidden aspect-[4/5] bg-[#111111] border border-white/5 rounded-2xl relative">
<img alt="Stéphane Wytver" className="w-full h-full object-cover absolute inset-0 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2306a224-e0f2-4e5d-a194-e7e567ca0a43_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center">
<div className="bg-black/80 max-w-[280px] mx-auto w-full border-white/5 border rounded-lg p-3 backdrop-blur-md">
<div className="grid grid-cols-3 gap-1 w-full divide-x divide-white/10">
<div className="flex flex-col items-center text-center px-1">
<div className="text-xl font-normal text-white tracking-tight">54<span className="text-xs text-gray-400 ml-0.5 font-light">ans</span></div>
<div className="text-[9px] uppercase tracking-widest text-gray-500 mt-0.5">Âge Chrono</div>
</div>
<div className="flex flex-col items-center text-center px-1">
<div className="text-xl font-normal text-white tracking-tight">92<span className="text-xs text-gray-500 ml-0.5 font-light">/100</span></div>
<div className="text-[9px] uppercase text-gray-500 tracking-widest mt-0.5">Score HCP</div>
</div>
<div className="flex flex-col items-center text-center px-1">
<div className="text-xl font-normal text-yellow-500 tracking-tight">-12<span className="text-xs text-yellow-500/70 ml-0.5 font-light">ans</span></div>
<div className="text-[9px] uppercase text-gray-500 tracking-widest mt-0.5">Différence</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] border-white/5 border-t py-24" id="candidater">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<i className="w-10 h-10 text-yellow-500 mb-6 mx-auto" data-lucide="lock"></i>
<h2 className="text-4xl lg:text-5xl font-normal text-white mb-6 tracking-tight">Un cercle restreint pour une exigence absolue</h2>
<p className="text-xl font-light text-gray-400 max-w-2xl mx-auto tracking-tight">Pour garantir une disponibilité totale et une attention particulière dans l'exécution, le programme HCP Executive est <strong className="font-normal text-white">volontairement limité à 6 dirigeants</strong>. L'intégration se fait exclusivement sur candidature et entretien privé.</p>
</div>
<div className="max-w-5xl mx-auto border border-white/5 rounded-2xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#1A1A1A]">
<div className="md:w-2/3">
<h3 className="leading-tight lg:text-4xl text-3xl font-normal text-white tracking-tight mb-8">
            Prêt à auditer votre capital humain ?
          </h3>
<ol className="text-gray-300 font-light space-y-4 mb-10 text-lg">
<li className="flex items-center gap-4">
<span className="text-yellow-500 font-normal">1.</span> Déposez votre candidature (2 min)
            </li>
<li className="flex items-center gap-4">
<span className="text-yellow-500 font-normal">2.</span> Entretien de validation privé avec Stéphane
            </li>
<li className="flex items-center gap-4">
<span className="text-yellow-500 font-normal">3.</span> Démarrage de votre Diagnostic HCP 360°
            </li>
</ol>
<button className="group relative px-8 py-5 bg-yellow-400 rounded-xl font-normal text-xl hover:-translate-y-0.5 hover:shadow-[0_4px_14px_0_rgba(250,204,21,0.2)] transition-all duration-300 w-full sm:w-auto text-black">
<span className="flex items-center justify-center gap-3">
              Soumettre ma candidature privée
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
<div className="flex flex-col gap-3 mt-8">
<p className="text-base text-gray-400 font-light flex items-center gap-2">
<i className="text-yellow-500 w-4 h-4" data-lucide="shield-check"></i> 
              Processus confidentiel. Sans engagement initial.
            </p>
<p className="text-base text-gray-500 font-light pl-6">L'investissement du protocole est communiqué uniquement après validation de l'adéquation de votre profil.</p>
</div>
</div>
<div className="md:w-1/3 flex md:justify-end w-full justify-center">
<div className="w-full max-w-[220px] aspect-square border border-white/5 rounded-xl flex items-center justify-center p-5 bg-[#0A0A0A] group hover:border-yellow-400 transition-colors cursor-pointer">
<div className="w-full h-full border border-dashed rounded-lg flex flex-col items-center justify-center gap-4 text-gray-500 transition-colors border-white/10 group-hover:text-yellow-500 group-hover:border-yellow-500/50">
<i className="w-10 h-10 group-hover:scale-110 transition-transform" data-lucide="qr-code"></i>
<span className="font-normal text-base text-center">Scanner ou Cliquer<br/>pour candidater</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-white/5 border-t py-16">
<div className="container mx-auto px-6">
<div className="max-w-2xl mx-auto mb-16 pt-4 text-center">
<p className="leading-relaxed md:text-4xl text-3xl font-light italic text-gray-300 tracking-tight" style={{fontFamily: '\'Caveat\', cursive'}}>"Parce qu'un dirigeant performant n'est pas un dirigeant qui tient.. Mais un dirigeant qui dure."</p>
<div className="mt-6 text-right pr-8 md:pr-16 transform -rotate-3">
<span className="text-5xl font-normal italic text-yellow-500 tracking-tight" style={{fontFamily: '\'Caveat\', cursive'}}>Stéphane</span>
</div>
</div>
<div className="w-full h-px bg-white/5 mb-12"></div>
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
<div className="overflow-hidden shrink-0 w-20 h-20 border rounded-full bg-white/5 border-white/5">
<img alt="Stéphane Wytver" className="object-center block w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f941b9b4-d1c1-4a1c-9099-037ffb8cd81c_320w.png"/>
</div>
<div className="flex flex-col gap-1 mt-2">
<span className="text-xl font-normal text-white tracking-tight">Stéphane WYTVER</span>
<span className="uppercase text-sm font-normal text-yellow-500 tracking-widest">FONDATEUR HCP</span>
<div className="text-base font-light mt-2 text-gray-500">
<a className="transition-colors hover:text-white" href="https://www.hcperf.fr" target="_blank">www.hcperf.fr</a>
</div>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-2">
<div className="flex flex-col items-center md:items-end">
<span className="text-2xl font-normal tracking-tight text-white">
<span className="text-yellow-500">HCP</span>
</span>
<span className="text-sm text-gray-500 uppercase tracking-widest mt-1">
              Human Capital Performance
            </span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
